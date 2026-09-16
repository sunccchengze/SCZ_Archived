# SCZ Second Brain

Obsidian-first、local-first、branch-aware 的个人知识系统 MVP。

## 已实现

- Markdown / TXT / RST / LaTeX / BibTeX 文件摄取
- Git 仓库全部本地 refs 摄取（`main` 与 `arena/*`，保留 repo、branch、commit、path）
- SQLite 持久化：来源、文档、分块、索引任务、候选记忆
- FTS5 BM25 关键词检索；不依赖向量库也能工作
- 可选 OpenAI-compatible embedding + cosine hybrid retrieval
- DeepSeek / OpenAI-compatible 生成接口
- 元数据过滤：repo、branch、path、source_type
- 证据包：回答上下文中保留来源、分支、commit、路径和行号
- 严格回答规则：无证据时 abstain；事实、推断、建议分开
- 候选记忆审批：模型不能直接写入长期记忆
- 本地 HTTP API 与极简浏览器界面
- 端到端验收测试（引用、无证据拒答、分支元数据）

## 设计边界

这是第一阶段的后端 MVP，不替代 Obsidian 编辑器，也不默认修改 Vault。原始 Markdown 是事实主存储；SQLite 是可重建的索引和状态层。当前已支持可选 embedding hybrid retrieval；reranker、时间事实图谱和 Obsidian 插件会在本阶段验收后加入。

## 快速开始

```bash
cd second-brain
python -m venv .venv
. .venv/bin/activate
pip install -e .

# 1. 生成配置
python -m second_brain init-config --output second-brain.json

# 2. 将 paths 中的 vault / repositories 改成本机路径
# 3. 摄取
python -m second_brain ingest --config second-brain.json

# 4. 启动本地服务
python -m second_brain serve --config second-brain.json --host 127.0.0.1 --port 8787
```

打开 `http://127.0.0.1:8787`。

## DeepSeek

生成接口使用 OpenAI-compatible API。配置中设置：

```json
{
  "llm": {
    "base_url": "http://127.0.0.1:xxxx/v1",
    "api_key": "local-only",
    "model": "deepseek-chat"
  }
}
```

如果未配置 LLM，`/search` 仍可用；`/chat` 会返回带证据的检索结果，而不会假装已经生成回答。

没有配置 embedding 时使用 BM25 + 中文 substring fallback；配置 OpenAI-compatible embedding 后，摄取阶段保存向量，查询阶段使用 BM25 + cosine 的 hybrid retrieval。不会拿 DeepSeek 生成模型冒充 embedding 模型。

## API

- `GET /health`
- `GET /search?q=...&limit=8&repo=...&branch=...`
- `POST /chat`：`{"message":"...","limit":8}`
- `POST /memory/propose`：创建候选记忆
- `GET /memory/pending`
- `POST /memory/{id}/approve`
- `POST /ingest`

## 安全默认值

- 只监听 `127.0.0.1`
- 不上传 Vault 内容
- 不自动写回 Obsidian
- 不自动批准记忆
- 不会把检索不到的内容交给模型后让模型自由补全
- API key 只从环境变量或本地配置读取，不写入 Git

## 下一阶段

1. 接入本地 embedding + hybrid retrieval
2. 增加 reranker 和 query decomposition
3. 增加 Obsidian 插件侧 `find/search/read` 三个工具
4. 增加时间事实、supersedes、contradicts 与冲突面板
5. 用固定个人评测集量化 Recall@K、引用支持率和 abstention
