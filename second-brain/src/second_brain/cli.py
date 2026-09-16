from __future__ import annotations

import argparse
import json

from .config import Config, write_example
from .db import Database
from .http_api import serve
from .ingest import ingest


def main() -> None:
    parser = argparse.ArgumentParser(prog="second-brain")
    sub = parser.add_subparsers(dest="command", required=True)
    init = sub.add_parser("init-config"); init.add_argument("--output", default="second-brain.json")
    ing = sub.add_parser("ingest"); ing.add_argument("--config", required=True)
    srv = sub.add_parser("serve"); srv.add_argument("--config", required=True); srv.add_argument("--host", default="127.0.0.1"); srv.add_argument("--port", type=int, default=8787)
    ev = sub.add_parser("eval"); ev.add_argument("--config", required=True); ev.add_argument("--questions", default="eval/questions.json")
    args = parser.parse_args()
    if args.command == "init-config": write_example(args.output); print(f"wrote {args.output}"); return
    config = Config.from_file(args.config)
    if args.command == "ingest":
        db = Database(config.database); print(json.dumps(ingest(config, db), ensure_ascii=False, indent=2)); return
    if args.command == "eval":
        from .evaluate import run_eval
        db = Database(config.database); print(json.dumps(run_eval(db, config, args.questions), ensure_ascii=False, indent=2)); return
    serve(config, args.host, args.port)
