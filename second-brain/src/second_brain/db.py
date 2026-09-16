from __future__ import annotations

import json
import sqlite3
from pathlib import Path
from typing import Any, Iterable

from .embedding import cosine
from .retrieval import query_variants, rerank


SCHEMA = """
PRAGMA journal_mode=WAL;
CREATE TABLE IF NOT EXISTS documents (
  id INTEGER PRIMARY KEY,
  source_type TEXT NOT NULL,
  source_name TEXT NOT NULL,
  repo TEXT,
  branch TEXT,
  commit_sha TEXT,
  path TEXT NOT NULL,
  title TEXT,
  content_hash TEXT NOT NULL,
  content TEXT NOT NULL,
  updated_at TEXT,
  valid_from TEXT,
  valid_until TEXT,
  indexed_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
);
CREATE TABLE IF NOT EXISTS chunks (
  id INTEGER PRIMARY KEY,
  document_id INTEGER NOT NULL REFERENCES documents(id) ON DELETE CASCADE,
  ordinal INTEGER NOT NULL,
  start_line INTEGER NOT NULL,
  end_line INTEGER NOT NULL,
  content TEXT NOT NULL,
  UNIQUE(document_id, ordinal)
);
CREATE VIRTUAL TABLE IF NOT EXISTS chunks_fts USING fts5(content, path, title, repo, branch);
CREATE TABLE IF NOT EXISTS embeddings (
  chunk_id INTEGER PRIMARY KEY REFERENCES chunks(id) ON DELETE CASCADE,
  model TEXT NOT NULL,
  vector TEXT NOT NULL,
  created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
);
CREATE TABLE IF NOT EXISTS relations (
  id INTEGER PRIMARY KEY,
  from_document_id INTEGER NOT NULL REFERENCES documents(id) ON DELETE CASCADE,
  to_document_id INTEGER NOT NULL REFERENCES documents(id) ON DELETE CASCADE,
  relation_type TEXT NOT NULL,
  note TEXT,
  valid_from TEXT,
  valid_until TEXT,
  created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
  UNIQUE(from_document_id, to_document_id, relation_type)
);
CREATE TABLE IF NOT EXISTS memories (
  id INTEGER PRIMARY KEY,
  text TEXT NOT NULL,
  status TEXT NOT NULL DEFAULT 'pending',
  source TEXT,
  confidence REAL,
  created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
  reviewed_at TEXT
);
CREATE TABLE IF NOT EXISTS ingest_runs (
  id INTEGER PRIMARY KEY,
  source_name TEXT NOT NULL,
  started_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
  finished_at TEXT,
  documents_seen INTEGER DEFAULT 0,
  documents_indexed INTEGER DEFAULT 0,
  errors INTEGER DEFAULT 0
);
"""


class Database:
    def __init__(self, path: str | Path):
        self.path = Path(path).expanduser()
        self.path.parent.mkdir(parents=True, exist_ok=True)
        self.conn = sqlite3.connect(self.path)
        self.conn.row_factory = sqlite3.Row
        self.conn.execute("PRAGMA foreign_keys=ON")
        self.conn.executescript(SCHEMA)
        self._ensure_fts_table()
        self._ensure_columns("documents", {"valid_from": "TEXT", "valid_until": "TEXT"})
        self._ensure_columns("relations", {"valid_from": "TEXT", "valid_until": "TEXT"})
        self.conn.commit()

    def _ensure_fts_table(self) -> None:
        row = self.conn.execute("SELECT sql FROM sqlite_master WHERE name='chunks_fts'").fetchone()
        if row and row[0] and "content='chunks'" in row[0]:
            self.conn.execute("DROP TABLE chunks_fts")
            self.conn.execute("CREATE VIRTUAL TABLE chunks_fts USING fts5(content, path, title, repo, branch)")
            self.conn.execute("""INSERT INTO chunks_fts(rowid,content,path,title,repo,branch)
                SELECT c.id,c.content,d.path,d.title,COALESCE(d.repo,''),COALESCE(d.branch,'')
                FROM chunks c JOIN documents d ON d.id=c.document_id""")

    def _ensure_columns(self, table: str, columns: dict[str, str]) -> None:
        existing = {row[1] for row in self.conn.execute(f"PRAGMA table_info({table})")}
        for name, kind in columns.items():
            if name not in existing:
                self.conn.execute(f"ALTER TABLE {table} ADD COLUMN {name} {kind}")

    def close(self) -> None:
        self.conn.close()

    def replace_document(self, doc: dict[str, Any], chunks: Iterable[dict[str, Any]], vectors: list[list[float]] | None = None, embedding_model: str = "") -> int:
        identity = (doc["source_name"], doc.get("repo", ""), doc.get("branch", ""), doc["path"])
        old = self.conn.execute(
            "SELECT id,content_hash FROM documents WHERE source_name=? AND repo=? AND branch=? AND path=?",
            identity,
        ).fetchone()
        if old and old["content_hash"] == doc["content_hash"]:
            return int(old["id"])
        if old:
            self.conn.execute("DELETE FROM chunks_fts WHERE rowid IN (SELECT id FROM chunks WHERE document_id=?)", (old["id"],))
            self.conn.execute("DELETE FROM documents WHERE id=?", (old["id"],))
        for field in ("repo", "branch", "commit_sha", "updated_at"):
            doc.setdefault(field, "")
        doc.setdefault("valid_from", None)
        doc.setdefault("valid_until", None)
        cur = self.conn.execute(
            """INSERT INTO documents
            (source_type,source_name,repo,branch,commit_sha,path,title,content_hash,content,updated_at,valid_from,valid_until)
            VALUES (:source_type,:source_name,:repo,:branch,:commit_sha,:path,:title,:content_hash,:content,:updated_at,:valid_from,:valid_until)""", 
            doc,
        )
        doc_id = int(cur.lastrowid)
        rows = []
        for c in chunks:
            rows.append((doc_id, c["ordinal"], c["start_line"], c["end_line"], c["content"]))
        self.conn.executemany(
            "INSERT INTO chunks(document_id,ordinal,start_line,end_line,content) VALUES(?,?,?,?,?)", rows
        )
        chunk_rows = self.conn.execute(
            "SELECT id,content FROM chunks WHERE document_id=? ORDER BY ordinal", (doc_id,)
        ).fetchall()
        if vectors and embedding_model:
            self.conn.executemany(
                "INSERT OR REPLACE INTO embeddings(chunk_id,model,vector) VALUES(?,?,?)",
                [(row["id"], embedding_model, json.dumps(vector)) for row, vector in zip(chunk_rows, vectors)],
            )
        for chunk_id, content in chunk_rows:
            self.conn.execute(
                "INSERT INTO chunks_fts(rowid,content,path,title,repo,branch) VALUES(?,?,?,?,?,?)",
                (chunk_id, content, doc["path"], doc["title"], doc.get("repo") or "", doc.get("branch") or ""),
            )
        self.conn.commit()
        return doc_id

    def search(self, query: str, limit: int = 8, repo: str | None = None, branch: str | None = None) -> list[dict[str, Any]]:
        terms = " ".join(query.replace('"', " ").split())
        if not terms:
            return []
        where = ["chunks_fts MATCH ?"]
        args: list[Any] = [terms]
        if repo:
            where.append("d.repo=?"); args.append(repo)
        if branch:
            where.append("d.branch=?"); args.append(branch)
        sql = f"""SELECT c.id,c.content,c.start_line,c.end_line,d.source_type,d.source_name,d.repo,
                         d.branch,d.commit_sha,d.path,d.title,bm25(chunks_fts) AS rank
                  FROM chunks_fts JOIN chunks c ON c.id=chunks_fts.rowid
                  JOIN documents d ON d.id=c.document_id
                  WHERE {' AND '.join(where)} ORDER BY rank LIMIT ?"""
        args.append(limit)
        try:
            rows = self.conn.execute(sql, args).fetchall()
        except sqlite3.OperationalError:
            # User text is not allowed to break search through FTS operators.
            rows = []
        # SQLite's default unicode tokenizer is intentionally conservative. For
        # Chinese and exact project names, use a deterministic substring fallback
        # rather than silently returning zero evidence.
        if not rows:
            clauses = ["d.content LIKE ?"]
            fallback_args: list[Any] = [f"%{query}%"]
            if repo:
                clauses.append("d.repo=?"); fallback_args.append(repo)
            if branch:
                clauses.append("d.branch=?"); fallback_args.append(branch)
            fallback = self.conn.execute(
                f"""SELECT c.id,c.content,c.start_line,c.end_line,d.source_type,d.source_name,d.repo,
                           d.branch,d.commit_sha,d.path,d.title,0.0 AS rank
                    FROM chunks c JOIN documents d ON d.id=c.document_id
                    WHERE {' AND '.join(clauses)} ORDER BY d.updated_at DESC LIMIT ?""",
                (*fallback_args, limit),
            ).fetchall()
            rows = fallback
        return [dict(r) for r in rows]

    def search_hybrid(self, query: str, query_vector: list[float] | None = None, limit: int = 8, repo: str | None = None, branch: str | None = None) -> list[dict[str, Any]]:
        lexical_by_id: dict[int, dict[str, Any]] = {}
        for variant in query_variants(query):
            for row in self.search(variant, limit=max(limit * 3, 20), repo=repo, branch=branch):
                lexical_by_id[row["id"]] = row
        lexical = list(lexical_by_id.values())
        if not query_vector:
            return rerank(query, lexical, limit)
        clauses = []
        args: list[Any] = []
        if repo: clauses.append("d.repo=?"); args.append(repo)
        if branch: clauses.append("d.branch=?"); args.append(branch)
        where = ("WHERE " + " AND ".join(clauses)) if clauses else ""
        vector_rows = self.conn.execute(
            f"""SELECT c.id,c.content,c.start_line,c.end_line,d.source_type,d.source_name,d.repo,d.branch,d.commit_sha,d.path,d.title,e.vector
                FROM embeddings e JOIN chunks c ON c.id=e.chunk_id JOIN documents d ON d.id=c.document_id {where}""", args
        ).fetchall()
        scored = []
        for row in vector_rows:
            clean = dict(row)
            clean.pop("vector", None)
            scored.append((cosine(query_vector, json.loads(row["vector"])), clean))
        scored = sorted(scored, key=lambda x: x[0], reverse=True)[:limit * 3]
        merged: dict[int, dict[str, Any]] = {}
        for rank, row in enumerate(lexical, 1):
            merged[row["id"]] = {**row, "hybrid_score": 1 / (60 + rank)}
        for rank, (score, row) in enumerate(scored, 1):
            current = merged.setdefault(row["id"], {**row, "rank": 0})
            current["hybrid_score"] = current.get("hybrid_score", 0) + 1 / (60 + rank) + max(score, 0) * 0.05
        return rerank(query, list(merged.values()), limit)

    def find_documents(self, path_prefix: str = "", repo: str | None = None, branch: str | None = None, limit: int = 50) -> list[dict[str, Any]]:
        clauses = ["1=1"]; args: list[Any] = []
        if path_prefix: clauses.append("path LIKE ?"); args.append(path_prefix.rstrip("/") + "%")
        if repo: clauses.append("repo=?"); args.append(repo)
        if branch: clauses.append("branch=?"); args.append(branch)
        rows = self.conn.execute(
            f"SELECT id,source_type,source_name,repo,branch,commit_sha,path,title,updated_at FROM documents WHERE {' AND '.join(clauses)} ORDER BY path LIMIT ?",
            (*args, limit),
        ).fetchall()
        return [dict(row) for row in rows]

    def read_document(self, document_id: int) -> dict[str, Any] | None:
        row = self.conn.execute("SELECT * FROM documents WHERE id=?", (document_id,)).fetchone()
        if not row: return None
        result = dict(row)
        result["chunks"] = [dict(chunk) for chunk in self.conn.execute("SELECT ordinal,start_line,end_line,content FROM chunks WHERE document_id=? ORDER BY ordinal", (document_id,))]
        return result

    def conflicts(self, repo: str | None = None) -> list[dict[str, Any]]:
        clauses = ["d1.path=d2.path", "d1.id < d2.id", "d1.content_hash != d2.content_hash", "d1.branch != d2.branch"]
        args: list[Any] = []
        if repo: clauses.append("d1.repo=?"); args.append(repo)
        rows = self.conn.execute(
            f"""SELECT d1.path,d1.repo,d1.branch AS branch_a,d1.commit_sha AS commit_a,
                      d2.branch AS branch_b,d2.commit_sha AS commit_b,d1.id AS document_a,d2.id AS document_b
               FROM documents d1 JOIN documents d2 ON {' AND '.join(clauses)} ORDER BY d1.path""", args
        ).fetchall()
        return [dict(row) for row in rows]

    def add_relation(self, from_id: int, to_id: int, relation_type: str, note: str = "", valid_from: str | None = None, valid_until: str | None = None) -> int:
        cur = self.conn.execute(
            "INSERT OR IGNORE INTO relations(from_document_id,to_document_id,relation_type,note,valid_from,valid_until) VALUES(?,?,?,?,?,?)",
            (from_id, to_id, relation_type, note, valid_from, valid_until),
        )
        self.conn.commit()
        if cur.lastrowid: return int(cur.lastrowid)
        row = self.conn.execute("SELECT id FROM relations WHERE from_document_id=? AND to_document_id=? AND relation_type=?", (from_id, to_id, relation_type)).fetchone()
        return int(row["id"])

    def relations(self, document_id: int) -> list[dict[str, Any]]:
        rows = self.conn.execute(
            """SELECT r.*,d.path,d.repo,d.branch FROM relations r JOIN documents d ON d.id=r.to_document_id
               WHERE r.from_document_id=? UNION ALL
               SELECT r.*,d.path,d.repo,d.branch FROM relations r JOIN documents d ON d.id=r.from_document_id
               WHERE r.to_document_id=?""", (document_id, document_id)
        ).fetchall()
        return [dict(row) for row in rows]

    def propose_memory(self, text: str, source: str = "", confidence: float | None = None) -> int:
        cur = self.conn.execute(
            "INSERT INTO memories(text,status,source,confidence) VALUES(?,?,?,?)",
            (text, "pending", source, confidence),
        )
        self.conn.commit()
        return int(cur.lastrowid)

    def pending_memories(self) -> list[dict[str, Any]]:
        return [dict(r) for r in self.conn.execute("SELECT * FROM memories WHERE status='pending' ORDER BY id DESC")]

    def review_memory(self, memory_id: int, approve: bool) -> bool:
        status = "approved" if approve else "rejected"
        cur = self.conn.execute(
            "UPDATE memories SET status=?,reviewed_at=CURRENT_TIMESTAMP WHERE id=? AND status='pending'",
            (status, memory_id),
        )
        self.conn.commit()
        return cur.rowcount == 1

    def stats(self) -> dict[str, int]:
        return {
            "documents": self.conn.execute("SELECT COUNT(*) FROM documents").fetchone()[0],
            "chunks": self.conn.execute("SELECT COUNT(*) FROM chunks").fetchone()[0],
            "pending_memories": self.conn.execute("SELECT COUNT(*) FROM memories WHERE status='pending'").fetchone()[0],
        }
