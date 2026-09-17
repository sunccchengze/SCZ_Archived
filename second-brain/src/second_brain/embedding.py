from __future__ import annotations

import json
import math
import urllib.request
from dataclasses import dataclass


@dataclass
class EmbeddingConfig:
    base_url: str = ""
    api_key: str = ""
    model: str = ""
    timeout_seconds: int = 120


class EmbeddingClient:
    def __init__(self, config: EmbeddingConfig):
        self.config = config

    @property
    def enabled(self) -> bool:
        return bool(self.config.base_url and self.config.model)

    def embed(self, texts: list[str], batch_size: int = 32) -> list[list[float]]:
        if not texts or not self.enabled:
            return []
        vectors: list[list[float]] = []
        for start in range(0, len(texts), max(1, batch_size)):
            batch = texts[start:start + max(1, batch_size)]
            request = urllib.request.Request(
                self.config.base_url.rstrip("/") + "/embeddings",
                data=json.dumps({"model": self.config.model, "input": batch}).encode(),
                headers={"Content-Type": "application/json", "Authorization": f"Bearer {self.config.api_key or 'local-only'}"},
            )
            with urllib.request.urlopen(request, timeout=self.config.timeout_seconds) as response:
                body = json.loads(response.read().decode())
            vectors.extend(item["embedding"] for item in sorted(body["data"], key=lambda item: item.get("index", 0)))
        if len(vectors) != len(texts):
            raise ValueError("embedding service returned an incomplete batch")
        return vectors


def cosine(a: list[float], b: list[float]) -> float:
    if not a or not b or len(a) != len(b):
        return 0.0
    dot = sum(x * y for x, y in zip(a, b))
    na = math.sqrt(sum(x * x for x in a)); nb = math.sqrt(sum(y * y for y in b))
    return dot / (na * nb) if na and nb else 0.0
