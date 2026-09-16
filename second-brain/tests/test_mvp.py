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

    def test_no_evidence_abstains(self):
        with tempfile.TemporaryDirectory() as tmp:
            db = Database(Path(tmp) / "db.sqlite3")
            result = chat(db, Config().llm, "不存在的知识")
            self.assertTrue(result["abstained"])
            self.assertIn("没有找到足够依据", result["answer"])


if __name__ == "__main__":
    unittest.main()
