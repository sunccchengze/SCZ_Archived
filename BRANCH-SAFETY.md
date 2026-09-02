# ⚠️ 合并纪律：不要用 PR 合并 Arena 会话分支

> 面向所有进入本仓库的 AI agent 与人类协作者。**动手改 `main` 之前先读完这页。**

## 一句话结论

**用快进推送(fast-forward push)把分支内容送上 `main`，不要开 PR 合并。**

```bash
# 推荐：内容进 main，会话链接不受影响
git push origin <你的分支>:main

# 不推荐：PR 合并，会导致 Arena 会话与 GitHub 的链接被强行切断
gh pr create ... && gh pr merge ...
```

前提：`main` 是你分支的祖先（快进可行）。可先自检：

```bash
git fetch origin main
git merge-base --is-ancestor origin/main HEAD && echo "FF 安全" || echo "需要先 rebase"
```

## 症状：链接断裂，**不是**分支被删

这一点最容易误判，务必看清：

> **PR 合并后，分支通常还好端端地在远端，但 Arena 会话与 GitHub 的链接已经断了，会话无法继续。**

所以：

- **不要用"分支还在不在"来判断有没有出事**——分支在，不代表没事。
- 这与 GitHub 的 `delete_branch_on_merge` 设置**无关**。在 `turbine-blade-ai-platform`
  上该设置为关闭（`null`），链接照样断。关掉它并不能免疫。

## 实测记录（2026-09-02 采集）

仓库：`sunccchengze/turbine-blade-ai-platform`，`delete_branch_on_merge = null`（关闭）

| PR | 分支 | 合并时间 (UTC) | 合并后分支 |
|---|---|---|---|
| #1 | `arena/019fb618-...` | 2026-07-31T07:07:38 | **仍在** |
| #2 | `arena/019fb74d-...` | 2026-07-31T08:42:26 | **仍在** |
| #3 | `arena/019fb74d-...` | 2026-07-31T08:52:02 | **仍在** |
| #4 | `arena/019fb778-...` | 2026-07-31T11:10:45 | **仍在** |
| #5 | `arena/019fb861-...` | 2026-08-01T15:35:22 | 已无 |
| #6 | `arena/019fbdff-...` | 2026-08-01T15:50:15 | **仍在** |
| #7 | `arena/019fc343-...` | 2026-08-03T01:23:56 | 已无 |

**关键读法**：7 个 PR 里有 5 个分支合并后依然存在——而这些会话的 GitHub 链接
依旧被切断了。分支存活与链接断裂是两件独立的事，前者不能用来推断后者。

（表中 #5、#7 分支消失属另一回事，与本页要防的问题无关，仅如实记录。）

对照组：从未开过 PR、只用推送的 6 个分支，至今全部存活且会话链接正常：
`arena/019fb8ff-...`、`arena/019fc539-...`、`arena/019fe072-...`、
`arena/019feb03-...`、`arena/019ff6c7-...`、`arena/019ffee7-...`

## 复核方法

```bash
# 该仓是否开启了"合并后自动删除分支"（本案为关闭，仍然出事）
gh api repos/<owner>/<repo> --jq '.delete_branch_on_merge'

# 哪些分支走过 PR，各自现在还在不在
gh pr list --repo <owner>/<repo> --state all --limit 50 \
  --json number,headRefName,mergedAt --jq '.[] | "\(.number)\t\(.headRefName)"'
git ls-remote --heads https://github.com/<owner>/<repo>.git | sed 's#.*refs/heads/##'
```

> 注意：链接是否断裂**无法从 GitHub 侧查出来**，只能在 Arena 会话里观察到。
> 上面的命令只能核对分支状态，不能用来判断链接健康与否。

## 诚实的边界

- 本页记录的是**可复现的操作经验**，不是对 Arena/GitHub 内部机制的证明。
  确切成因尚未定位，只知道 PR 合并路径会触发。
- 已排除的解释：`delete_branch_on_merge`（该仓为关闭状态，链接仍断）。
- 快进推送的代价是**没有 PR 记录、没有 review**。对本仓这种只读归档仓，
  线性历史反而更合适；若你的项目依赖 PR 评审流程，请自行权衡。

## 本仓实际做法

`main` 上的全部归档内容，均通过 `git push origin arena/01a060a9-ai:main`
快进推送送达，**全程未创建任何 PR**。截至归档完成，工作分支与会话链接均完好。
