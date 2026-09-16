from __future__ import annotations

import json
from dataclasses import dataclass, field
from pathlib import Path
from typing import Any


@dataclass
class LLMConfig:
    base_url: str = ""
    api_key: str = ""
    model: str = ""
    timeout_seconds: int = 120


@dataclass
class EmbeddingConfig:
    base_url: str = ""
    api_key: str = ""
    model: str = ""
    timeout_seconds: int = 120


@dataclass
class Config:
    database: str = "data/second-brain.sqlite3"
    paths: list[str] = field(default_factory=list)
    repositories: list[str] = field(default_factory=list)
    include_extensions: list[str] = field(default_factory=lambda: [".md", ".txt", ".rst", ".tex", ".bib"])
    exclude_dirs: list[str] = field(default_factory=lambda: [".git", "node_modules", ".venv", "dist", "build"])
    chunk_chars: int = 2400
    chunk_overlap: int = 300
    llm: LLMConfig = field(default_factory=LLMConfig)
    embedding: EmbeddingConfig = field(default_factory=EmbeddingConfig)

    @classmethod
    def from_file(cls, path: str | Path) -> "Config":
        raw: dict[str, Any] = json.loads(Path(path).read_text(encoding="utf-8"))
        llm = LLMConfig(**raw.pop("llm", {}))
        embedding = EmbeddingConfig(**raw.pop("embedding", {}))
        return cls(llm=llm, embedding=embedding, **raw)

    def resolve_path(self, value: str) -> Path:
        return Path(value).expanduser().resolve()


def write_example(path: str | Path) -> None:
    example = {
        "database": "data/second-brain.sqlite3",
        "paths": ["../obsidian-vault"],
        "repositories": [],
        "include_extensions": [".md", ".txt", ".rst", ".tex", ".bib"],
        "exclude_dirs": [".git", "node_modules", ".venv", "dist", "build"],
        "chunk_chars": 2400,
        "chunk_overlap": 300,
        "llm": {
            "base_url": "",
            "api_key": "",
            "model": "deepseek-chat",
            "timeout_seconds": 120,
        },
        "embedding": {
            "base_url": "",
            "api_key": "",
            "model": "",
            "timeout_seconds": 120,
        },
    }
    Path(path).write_text(json.dumps(example, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
