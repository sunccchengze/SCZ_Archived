from __future__ import annotations

import re
from typing import Any


def query_variants(query: str) -> list[str]:
    """Generate conservative variants without asking an LLM to rewrite the query."""
    clean = re.sub(r"[，。！？；、,.;!?()（）\[\]{}]", " ", query).strip()
    variants = [clean]
    for term in re.findall(r"[A-Za-z0-9_./-]{2,}|[\u4e00-\u9fff]{2,}", clean):
        if term not in variants:
            variants.append(term)
    return variants[:8]


def lexical_terms(text: str) -> set[str]:
    latin = {x.lower() for x in re.findall(r"[A-Za-z0-9_./-]{2,}", text)}
    han = set(re.findall(r"[\u4e00-\u9fff]", text))
    return latin | han


def rerank(query: str, rows: list[dict[str, Any]], limit: int) -> list[dict[str, Any]]:
    q_terms = lexical_terms(query)
    phrase = query.strip().lower()
    scored = []
    for row in rows:
        content = row.get("content", "")
        searchable = f"{row.get('title','')} {row.get('path','')} {content}".lower()
        overlap = len(q_terms & lexical_terms(searchable)) / max(len(q_terms), 1)
        exact = 0.20 if phrase and phrase in searchable else 0.0
        title_boost = 0.12 if any(term in str(row.get("title", "")).lower() for term in q_terms) else 0.0
        vector_score = float(row.get("hybrid_score", 0.0))
        row = {**row, "rerank_score": overlap + exact + title_boost + vector_score}
        scored.append(row)
    return sorted(scored, key=lambda row: row["rerank_score"], reverse=True)[:limit]
