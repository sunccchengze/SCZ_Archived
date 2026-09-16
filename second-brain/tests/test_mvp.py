import tempfile
import unittest
from pathlib import Path

from second_brain.config import Config
from second_brain.db import Database
from second_brain.ingest import chunk_text, ingest
from second_brain.service import chat


class MvpTest(unittest.TestCase):
    def test_chunk_has_line_provenance(self):
        chunks = chunk_text("一\n二\n三\n四", 4, 1)
        self.assertEqual(chunks[0]["start_line"], 1)
        self.assertLessEqual(chunks[-1]["end_line"], 4)

    def test_ingest_and_search(self):
        with tempfile.TemporaryDirectory() as tmp:
            vault = Path(tmp) / "vault"; vault.mkdir()
            (vault / "research.md").write_text("# 风电\n叶轮机械智能设计优化需要可靠证据。", encoding="utf-8")
            db = Database(Path(tmp) / "db.sqlite3")
            stats = ingest(Config(paths=[str(vault)], database=str(Path(tmp) / "db.sqlite3")), db)
            self.assertEqual(stats["errors"], 0)
            rows = db.search("叶轮机械")
            self.assertEqual(len(rows), 1)
            self.assertEqual(rows[0]["path"], "research.md")

    def test_hybrid_vector_path(self):
        with tempfile.TemporaryDirectory() as tmp:
            db = Database(Path(tmp) / "db.sqlite3")
            chunks = chunk_text("研究叶轮机械", 100, 0)
            db.replace_document({
                "source_type": "vault", "source_name": "vault", "repo": "", "branch": "",
                "commit_sha": "", "path": "a.md", "title": "a", "content_hash": "a",
                "content": "研究叶轮机械", "updated_at": "",
            }, chunks, vectors=[[1.0, 0.0]], embedding_model="test")
            rows = db.search_hybrid("完全不同的问法", query_vector=[1.0, 0.0])
            self.assertEqual(rows[0]["path"], "a.md")

    def test_conflicts_and_relations(self):
        with tempfile.TemporaryDirectory() as tmp:
            db = Database(Path(tmp) / "db.sqlite3")
            base = {"source_type": "git", "source_name": "demo", "repo": "demo", "commit_sha": "x", "path": "README.md", "title": "README", "updated_at": ""}
            a = {**base, "branch": "main", "content_hash": "a", "content": "old"}
            b = {**base, "branch": "arena/test", "content_hash": "b", "content": "new"}
            da = db.replace_document(a, chunk_text(a["content"], 100, 0))
            db_id = db.replace_document(b, chunk_text(b["content"], 100, 0))
            self.assertEqual(len(db.conflicts("demo")), 1)
            relation_id = db.add_relation(db_id, da, "supersedes")
            self.assertGreater(relation_id, 0)
            self.assertEqual(db.relations(da)[0]["relation_type"], "supersedes")

    def test_relation_validation(self):
        with tempfile.TemporaryDirectory() as tmp:
            db = Database(Path(tmp) / "db.sqlite3")
            with self.assertRaises(ValueError):
                db.add_relation(1, 1, "unknown")

    def test_reingest_replaces_stale_path(self):
        with tempfile.TemporaryDirectory() as tmp:
            db = Database(Path(tmp) / "db.sqlite3")
            base = {"source_type": "vault", "source_name": "vault", "repo": "", "branch": "", "path": "note.md", "title": "note", "updated_at": ""}
            db.replace_document({**base, "content_hash": "old", "content": "旧内容"}, chunk_text("旧内容", 100, 0))
            db.replace_document({**base, "content_hash": "new", "content": "新内容"}, chunk_text("新内容", 100, 0))
            self.assertEqual(db.stats()["documents"], 1)
            self.assertEqual(len(db.search("旧内容")), 0)
            self.assertEqual(len(db.search("新内容")), 1)

    def test_fts_operator_is_safe(self):
        with tempfile.TemporaryDirectory() as tmp:
            db = Database(Path(tmp) / "db.sqlite3")
            self.assertEqual(db.search('"unclosed OR *'), [])

    def test_no_evidence_abstains(self):
        with tempfile.TemporaryDirectory() as tmp:
            db = Database(Path(tmp) / "db.sqlite3")
            result = chat(db, Config().llm, "不存在的知识")
            self.assertTrue(result["abstained"])
            self.assertIn("没有找到足够依据", result["answer"])


if __name__ == "__main__":
    unittest.main()
