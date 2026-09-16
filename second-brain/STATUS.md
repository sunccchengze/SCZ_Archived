# 第二大脑 MVP 收尾状态

更新时间：2026-09-16

## 已完成

- [x] Obsidian-first 本地后端
- [x] Markdown / TXT / RST / LaTeX / BibTeX 摄取
- [x] Git 仓库 `main` + `arena/*` 全 refs 摄取
- [x] repo / branch / commit / path / line provenance
- [x] 增量 hash 去重
- [x] SQLite FTS5 BM25
- [x] 中文 substring fallback
- [x] OpenAI-compatible embedding
- [x] BM25 + cosine hybrid retrieval
- [x] 查询变体生成
- [x] 轻量 reranker
- [x] `find / search / read` API
- [x] DeepSeek 证据约束回答
- [x] 无证据 abstain
- [x] 候选记忆 + 人工批准/拒绝
- [x] 跨分支冲突检测
- [x] `supports / contradicts / supersedes / derived_from` 关系
- [x] `valid_from / valid_until` 时间字段
- [x] 固定评测集与 `eval` 命令
- [x] 浏览器端记忆审核与冲突查看
- [x] Obsidian 薄插件客户端：提问、当前笔记搜索、引用展示、Inbox 草稿
- [x] Python 单元测试

## 当前明确边界

- Reranker 目前是可解释的轻量本地排序，不是独立 cross-encoder。
- 时间字段已落库，但自动抽取和自动失效策略还需要真实数据验收后开启。
- 关系需要人工或后续审核流程建立，不默认让模型自动创造大量边。
- Obsidian 插件是薄客户端，知识事实仍由 Markdown + 本地后端管理。
- 没有自动修改核心档案、自动发布或自动替用户做决定的能力。

## 验收

```text
Ran 5 tests
OK
```

## 启动顺序

```bash
cd second-brain
python -m venv .venv
. .venv/bin/activate
pip install -e .
python -m second_brain init-config --output second-brain.json
# 编辑 paths / repositories / llm / embedding
python -m second_brain ingest --config second-brain.json
python -m second_brain eval --config second-brain.json --questions eval/questions.json
python -m second_brain serve --config second-brain.json
```

随后编译 `obsidian-plugin/`，把 `main.js` 和 `manifest.json` 放入 Vault 的插件目录。
