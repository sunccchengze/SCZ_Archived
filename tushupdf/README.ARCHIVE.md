# tushupdf — 归档说明（README.ARCHIVE.md）

> 本目录是原仓 **tushupdf** 在闲置仓库归档仓「ai」中的**内容快照**，目录名 = 原仓名。

## 源仓
- URL: https://github.com/sunccchengze/tushupdf.git
- 基线分支 + SHA: `arena/019ff894-tushupdf` `9012596fdfb6cce58d641dcc929079df2ede6e19`

## 分支台账
| 分支/ref | SHA(前12) | 末次提交(UTC) | commits | files | 已并入 |
|---|---|---|---|---|---|
| `arena/019ff894-tushupdf` | `9012596fdfb6` | 2026-08-13T01:03:54+00:00 | 4 | 3 | 基线 |
| `main` | `836ccb3872ab` | 2026-08-13T00:40:22+00:00 | 1 | 1 | 已并入（旧版 README 别名 docs/legacy/README-main.md） |

## 并集结果
- 并集新增文件数：基线为分支内容；`main` 旧版 `README.md` 另存为 `docs/legacy/README-main.md`（+1 个独有版本）
- files + bytes：**4 files / 16034 bytes（15.7 KB）**（源内容口径，不含本说明文件）
- PR 数与状态：**0 个**（无 PR；main 为 1 文件空壳，真实内容在 arena/019ff894-tushupdf）
- 孤儿抢救：是（`main` 只有 README 空壳；真实内容在 `arena/019ff894-tushupdf`）
- submodule：否

## 处置建议
建议原仓**置为 Archive**。本目录为只读快照；不改原仓默认分支、不删原仓、不创建 PR。

## 回滚（把该目录还原为原仓 `main` 内容）
```bash
git subtree add --prefix=tushupdf https://github.com/sunccchengze/tushupdf.git main --squash
```
> 根 `README.md` 采用分支真实内容；`main` 空壳 README 另存 `docs/legacy/README-main.md`。
