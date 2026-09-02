# yiming-wish — 归档说明（README.ARCHIVE.md）

> 本目录是原仓 **yiming-wish** 在闲置仓库归档仓「ai」中的**内容快照**，目录名 = 原仓名。

## 源仓
- URL: https://github.com/sunccchengze/yiming-wish.git
- 基线分支 + SHA: `main` `fdd819a1c7ee06c5ca82cd41abcfed7757ce0856`

## 分支台账
| 分支/ref | SHA(前12) | 末次提交(UTC) | commits | files | 已并入 |
|---|---|---|---|---|---|
| `main` | `fdd819a1c7ee` | 2026-06-02T00:53:04+00:00 | 5 | 4 | 基线 |
| `src` | `bc458cd548f1` | 2026-06-02T00:50:56+00:00 | 3 | 4 | 已并入（main 的祖先；其中 `11` 在 `main` 被主动 `Delete`，按删除纪律不捞回，仅台账记录） |

## 并集结果
- 并集新增文件数：0（未从历史捞回已删除的 `11`；只有台账记录）
- files + bytes：**4 files / 9186 bytes**（源内容口径，不含本说明文件）
- PR 数与状态：**0 个**
- 孤儿抢救：否
- submodule：否

## 处置建议
建议原仓**置为 Archive**。本目录为只读快照；不改原仓默认分支、不删原仓、不创建 PR。

## 回滚（把该目录还原为原仓 `main` 内容）
```bash
git subtree add --prefix=yiming-wish https://github.com/sunccchengze/yiming-wish.git main --squash
```
> `src` 分支含文件 `11`（blob `4173b38d`），`main` 提交 `Delete 11` 主动删除；按统一删除纪律，归档不保留该孤儿文件，仅在本台账记。
