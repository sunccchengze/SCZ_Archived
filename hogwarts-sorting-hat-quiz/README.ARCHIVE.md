
# hogwarts-sorting-hat-quiz — 归档说明（README.ARCHIVE.md）

> 本目录是原仓 **hogwarts-sorting-hat-quiz** 在闲置仓库归档仓「ai」中的**内容快照**，目录名 = 原仓名。

## 源仓
- URL: https://github.com/sunccchengze/hogwarts-sorting-hat-quiz.git
- 基线分支 + SHA: `main` `2bd0b628f3fef45928b44ea8455e0eff277ba3c9`（PR#1 已合并后的主分支；内容树与 cloudflare/workers-autoconfig 一致）

## 分支台账
| 分支/ref | SHA(前12) | 末次提交(UTC) | commits | files | 已并入 |
|---|---|---|---|---|---|
| `main` | `2bd0b628f3fe` | 2026-04-20T00:43:32+00:00 | 6 | 17 | 基线主分支（PR#1 合并后树含 wrangler 配置；合并 commit 2026-09-02T06:10:20Z） |
| `cloudflare/workers-autoconfig` | `2ea9591b25f4` | 2026-04-20T00:44:06+00:00 | 7 | 18 | 已并入（内容基线最早来源；本目录内容 = 该分支树） |
| `pullh/1` | `2ea9591b25f4` | 2026-04-20T00:44:06+00:00 | 7 | 18 | 已并入（与本分支同 tip） |

## 并集结果
- 并集新增文件数：0
- files + bytes：**18 files / 138385 bytes（135.1 KB）**（源内容口径，不含本说明文件）
- PR 数与状态：**1 个（closed / merged）**（PR#1 Add Cloudflare Workers configuration，+19/-0：.gitignore 增 wrangler 规则 + 新增 wrangler.jsonc）
- 孤儿抢救：否
- submodule：否

## 处置建议
建议原仓**置为 Archive**。本目录为只读快照；不改原仓默认分支、不删原仓、不创建 PR。

## 回滚（把该目录还原为原仓 `main` 内容）
```bash
git subtree add --prefix=hogwarts-sorting-hat-quiz https://github.com/sunccchengze/hogwarts-sorting-hat-quiz.git main --squash
```
> 归档内容取自 cloudflare/workers-autoconfig（含 `wrangler.jsonc`），其内容与 PR#1 合并后的 `main` 树完全一致（已实测 18 文件无差异）；本卡片以合并后的 `main` `2bd0b628` 作为基线标识。
