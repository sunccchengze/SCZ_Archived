# wendang11 — 归档说明（README.ARCHIVE.md）

> 本目录是原仓 **wendang11** 在闲置仓库归档仓「ai」中的**内容快照**，目录名 = 原仓名。

## 源仓
- URL: https://github.com/sunccchengze/wendang11.git
- 基线分支 + SHA: `main` `c239a4f831f25ccfc4745149e55559370d752e7e`

## 分支台账
| 分支/ref | SHA(前12) | 末次提交(UTC) | commits | files | 已并入 |
|---|---|---|---|---|---|
| `main` | `c239a4f831f2` | 2026-08-12T01:04:36+00:00 | 9 | 98 | 基线 |
| `pullh/2` | `50f9e1b27567` | 2026-08-12T01:03:52+00:00 | 8 | 98 | 已并入（main 的祖先，经 PR#2 合并进 main） |
| `pullh/1` | `abffd0e645e6` | 2026-08-04T08:28:11+00:00 | 5 | 55 | 已并入（54 个独有文件；README 冲突版另存 docs/legacy/README-pr1.md） |

## 并集结果
- 并集新增文件数：54（另将 PR#1 冲突版 `README.md` 另存为 `docs/legacy/README-pr1.md`，+1 个独有版本）
- files + bytes：**152 files / 26262157 bytes（25.05 MB）**（源内容口径，不含本说明文件）
- PR 数与状态：**2 个**（PR#1 closed（未合并，54 个孤儿文件已抢救）；PR#2 closed（merged，为 main 祖先））
- 孤儿抢救：是（PR#1 head `abffd0e`：49 张 `Picture/荣誉*.jpg` + 3 个 `scripts/*` + `.gitignore` + docx = 54 个孤儿文件）
- submodule：是（`skills-library` 指向 `sunccchengze/turbine-blade-ai-platform` @ `736985ce2d21083849c1af95d7a18bb98cce0d7e`；归档形态下不解析，仅保留 `.gitmodules` + 本条说明）

## 处置建议
建议原仓**置为 Archive**。本目录为只读快照；不改原仓默认分支、不删原仓、不创建 PR。

## 回滚（把该目录还原为原仓 `main` 内容）
```bash
git subtree add --prefix=wendang11 https://github.com/sunccchengze/wendang11.git main --squash
```
> 源码并集路径集为 152（含 1 个 submodule gitlink）；落盘 152（gitlink 不解析，由 `.gitmodules` + legacy README 记录等价信息）。
