from __future__ import annotations

import json
from http.server import BaseHTTPRequestHandler, ThreadingHTTPServer
from urllib.parse import parse_qs, urlparse

from .config import Config
from .db import Database
from .ingest import ingest
from .embedding import EmbeddingClient
from .service import chat


HTML = """<!doctype html><meta charset=utf-8><title>SCZ Second Brain</title>
<style>body{max-width:900px;margin:40px auto;font:16px system-ui;color:#222}textarea{width:100%;height:100px;padding:12px}button{padding:10px 18px;margin:8px 0}pre{white-space:pre-wrap;background:#f5f5f5;padding:16px;border-radius:8px}.cite{color:#666;font-size:13px}</style>
<h1>SCZ Second Brain</h1><p>本地、可引用、分支感知。没有证据时不会替模型补编。</p>
<textarea id=q placeholder="问你的仓库、项目、个人方法或历史状态"></textarea><br><button onclick=ask()>检索并回答</button><button onclick=ingestNow()>重新摄取</button><pre id=a></pre><div id=c></div>
<script>
async function ask(){let q=document.getElementById('q').value;let r=await fetch('/chat',{method:'POST',headers:{'content-type':'application/json'},body:JSON.stringify({message:q})});let x=await r.json();document.getElementById('a').textContent=x.answer;document.getElementById('c').innerHTML='<h3>来源</h3>'+x.citations.map(y=>'<div class=cite>'+JSON.stringify(y)+'</div>').join('')}
async function ingestNow(){let r=await fetch('/ingest',{method:'POST'});document.getElementById('a').textContent=JSON.stringify(await r.json(),null,2)}
</script>"""


class Handler(BaseHTTPRequestHandler):
    db: Database
    config: Config
    embedder: EmbeddingClient

    def _json(self, value: object, code: int = 200) -> None:
        body = json.dumps(value, ensure_ascii=False).encode()
        self.send_response(code); self.send_header("Content-Type", "application/json; charset=utf-8"); self.send_header("Content-Length", str(len(body))); self.end_headers(); self.wfile.write(body)

    def do_GET(self) -> None:
        parsed = urlparse(self.path)
        if parsed.path == "/":
            body = HTML.encode(); self.send_response(200); self.send_header("Content-Type", "text/html; charset=utf-8"); self.send_header("Content-Length", str(len(body))); self.end_headers(); self.wfile.write(body); return
        if parsed.path == "/health": self._json({"ok": True, **self.db.stats()}); return
        if parsed.path in ("/search", "/tools/search"):
            q = parse_qs(parsed.query); rows = self.db.search_hybrid(q.get("q", [""])[0], limit=int(q.get("limit", [8])[0]), repo=q.get("repo", [None])[0], branch=q.get("branch", [None])[0]); self._json({"results": rows}); return
        if parsed.path in ("/find", "/tools/find"):
            q = parse_qs(parsed.query); rows = self.db.find_documents(q.get("path", [""])[0], q.get("repo", [None])[0], q.get("branch", [None])[0], int(q.get("limit", [50])[0])); self._json({"results": rows}); return
        if parsed.path.startswith("/read/") or parsed.path.startswith("/tools/read/"):
            document_id = int(parsed.path.rstrip("/").split("/")[-1]); row = self.db.read_document(document_id); self._json(row or {"error": "not found"}, 200 if row else 404); return
        if parsed.path == "/memory/pending": self._json({"memories": self.db.pending_memories()}); return
        if parsed.path == "/conflicts":
            q = parse_qs(parsed.query); self._json({"conflicts": self.db.conflicts(q.get("repo", [None])[0])}); return
        if parsed.path == "/relations":
            q = parse_qs(parsed.query); self._json({"relations": self.db.relations(int(q.get("document_id", [0])[0]))}); return
        self._json({"error": "not found"}, 404)

    def do_POST(self) -> None:
        length = int(self.headers.get("Content-Length", "0")); raw = self.rfile.read(length) if length else b"{}"
        data = json.loads(raw or b"{}")
        if self.path == "/chat":
            self._json(chat(self.db, self.config.llm, data.get("message", ""), int(data.get("limit", 8)), data.get("repo"), data.get("branch"), self.embedder)); return
        if self.path == "/ingest": self._json(ingest(self.config, self.db)); return
        if self.path == "/memory/propose":
            self._json({"id": self.db.propose_memory(data.get("text", ""), data.get("source", ""), data.get("confidence"))}); return
        if self.path == "/relations":
            self._json({"id": self.db.add_relation(int(data["from_document_id"]), int(data["to_document_id"]), data["relation_type"], data.get("note", ""))}); return
        if self.path.startswith("/memory/") and self.path.endswith("/approve"):
            memory_id = int(self.path.split("/")[2]); self._json({"ok": self.db.review_memory(memory_id, bool(data.get("approve")))}); return
        self._json({"error": "not found"}, 404)

    def log_message(self, *_: object) -> None: return


def serve(config: Config, host: str = "127.0.0.1", port: int = 8787) -> None:
    db = Database(config.database)
    Handler.db = db; Handler.config = config; Handler.embedder = EmbeddingClient(config.embedding)
    ThreadingHTTPServer((host, port), Handler).serve_forever()
