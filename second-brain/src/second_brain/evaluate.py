from __future__ import annotations

import json
from pathlib import Path
from typing import Any

from .config import Config
from .db import Database
from .embedding import EmbeddingClient
from .service import chat


def run_eval(db: Database, config: Config, path: str) -> dict[str, Any]:
    cases = json.loads(Path(path).read_text(encoding="utf-8"))
    results = []
    embedder = EmbeddingClient(config.embedding)
    for case in cases:
        result = chat(db, config.llm, case["question"], embedder=embedder)
        cited = bool(result.get("citations"))
        abstained = bool(result.get("abstained"))
        results.append({
            "id": case["id"],
            "cited_ok": cited == bool(case.get("must_cite", False)) if not case.get("must_abstain") else True,
            "abstain_ok": abstained == bool(case.get("must_abstain", False)),
            "citations": len(result.get("citations", [])),
            "answer": result.get("answer", ""),
        })
    return {"total": len(results), "passed": sum(r["cited_ok"] and r["abstain_ok"] for r in results), "results": results}
