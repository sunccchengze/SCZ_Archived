from __future__ import annotations

import hashlib
import subprocess
from dataclasses import dataclass
from datetime import datetime, timezone
from pathlib import Path
from typing import Iterator

from .config import Config
from .db import Database
from .embedding import EmbeddingClient


@dataclass
class SourceFile:
    source_type: str
    source_name: str
    path: str
    content: str
    repo: str = ""
    branch: str = ""
    commit_sha: str = ""
    updated_at: str = ""
    error: str = ""


def chunk_text(text: str, size: int, overlap: int) -> list[dict[str, object]]:
    lines = text.splitlines()
    if not lines:
        return []
    chunks: list[dict[str, object]] = []
    start = 0
    while start < len(lines):
        chars = 0
        end = start
        while end < len(lines) and (end == start or chars + len(lines[end]) + 1 <= size):
            chars += len(lines[end]) + 1
            end += 1
        if end == start:
            end += 1
        chunks.append({
            "ordinal": len(chunks),
            "start_line": start + 1,
            "end_line": end,
            "content": "\n".join(lines[start:end]),
        })
        if end >= len(lines):
            break
        target = max(start + 1, end - 1)
        while target > start and sum(len(x) + 1 for x in lines[target:end]) < overlap:
            target -= 1
        start = target
    return chunks


def iter_path(path: Path, config: Config) -> Iterator[SourceFile]:
    for file in sorted(path.rglob("*")):
        if not file.is_file() or file.suffix.lower() not in config.include_extensions:
            continue
        if any(part in config.exclude_dirs for part in file.parts):
            continue
        try:
            text = file.read_text(encoding="utf-8")
        except (UnicodeDecodeError, OSError) as exc:
            yield SourceFile(source_type="vault", source_name=str(path), path=str(file.relative_to(path)), content="", error=str(exc))
            continue
        stat = file.stat()
        yield SourceFile(
            source_type="vault",
            source_name=str(path),
            path=str(file.relative_to(path)),
            content=text,
            updated_at=datetime.fromtimestamp(stat.st_mtime, timezone.utc).isoformat(),
        )


def git_refs(repo: Path) -> list[tuple[str, str]]:
    result = subprocess.run(
        ["git", "-C", str(repo), "for-each-ref", "--format=%(refname:short) %(objectname)", "refs/heads"],
        capture_output=True, text=True, check=True,
    )
    return [tuple(line.split()) for line in result.stdout.splitlines() if line.strip()]


def iter_git(repo: Path, config: Config) -> Iterator[SourceFile]:
    repo_name = repo.name
    for branch, sha in git_refs(repo):
        listing = subprocess.run(
            ["git", "-C", str(repo), "ls-tree", "-r", "-z", "--name-only", branch],
            capture_output=True, check=True,
        ).stdout.split(b"\0")
        for raw in listing:
            if not raw:
                continue
            rel = raw.decode("utf-8", "replace")
            if Path(rel).suffix.lower() not in config.include_extensions:
                continue
            if any(part in config.exclude_dirs for part in Path(rel).parts):
                continue
            blob = subprocess.run(["git", "-C", str(repo), "show", f"{branch}:{rel}"], capture_output=True)
            if blob.returncode != 0:
                continue
            try:
                content = blob.stdout.decode("utf-8")
            except UnicodeDecodeError:
                continue
            yield SourceFile(
                source_type="git",
                source_name=repo_name,
                path=rel,
                content=content,
                repo=repo_name,
                branch=branch,
                commit_sha=sha,
            )


def ingest(config: Config, db: Database) -> dict[str, object]:
    stats: dict[str, object] = {"seen": 0, "indexed": 0, "errors": 0, "error_paths": []}
    def sources() -> Iterator[SourceFile]:
        for value in config.paths:
            path = config.resolve_path(value)
            if path.exists():
                yield from iter_path(path, config)
        for value in config.repositories:
            path = config.resolve_path(value)
            if (path / ".git").exists():
                yield from iter_git(path, config)

    embedder = EmbeddingClient(config.embedding)
    seen: dict[tuple[str, str, str, str], set[str]] = {}
    for value in config.paths:
        path = config.resolve_path(value)
        if path.exists():
            seen.setdefault(("vault", str(path), "", ""), set())
    for value in config.repositories:
        path = config.resolve_path(value)
        if (path / ".git").exists():
            for branch, _ in git_refs(path):
                seen.setdefault(("git", path.name, path.name, branch), set())
    for item in sources():
        stats["seen"] += 1
        if item.error:
            stats["errors"] += 1
            error_paths = stats["error_paths"]
            if isinstance(error_paths, list) and len(error_paths) < 20:
                error_paths.append({"source": item.source_name, "path": item.path, "error": item.error})
            continue
        key = (item.source_type, item.source_name, item.repo, item.branch)
        seen.setdefault(key, set()).add(item.path)
        digest = hashlib.sha256(item.content.encode("utf-8")).hexdigest()
        doc = {
            "source_type": item.source_type,
            "source_name": item.source_name,
            "repo": item.repo,
            "branch": item.branch,
            "commit_sha": item.commit_sha,
            "path": item.path,
            "title": Path(item.path).stem,
            "content_hash": digest,
            "content": item.content,
            "updated_at": item.updated_at,
        }
        try:
            before = db.stats()["documents"]
            chunks = chunk_text(item.content, config.chunk_chars, config.chunk_overlap)
            vectors = embedder.embed([str(chunk["content"]) for chunk in chunks]) if embedder.enabled else None
            db.replace_document(doc, chunks, vectors=vectors, embedding_model=config.embedding.model)
            stats["indexed"] += int(db.stats()["documents"] > before)
        except Exception as exc:
            stats["errors"] += 1
            error_paths = stats["error_paths"]
            if isinstance(error_paths, list) and len(error_paths) < 20:
                error_paths.append({"source": item.source_name, "path": item.path, "error": str(exc)})
    # Only reconcile a source after a clean scan. A read/model failure must not
    # make an existing document disappear from the searchable evidence.
    if stats["errors"] == 0:
        for (source_type, source_name, repo, branch), paths in seen.items():
            stats["deleted"] = stats.get("deleted", 0) + db.reconcile_source(source_type, source_name, repo, branch, paths)
    else:
        stats["deleted"] = 0
    return stats
