# ⚠️ 合并纪律：不要用 PR 合并 Arena 会话分支

> 面向所有进入本仓库的 AI agent 与人类协作者。**动手改 `main` 之前先读完这页。**

## 一句话结论

**用快进推送(fast-forward push)把分支内容送上 `main`，不要开 PR 合并。**

```bash
# 推荐：内容进 main，分支与会话链接都保住
git push origin <你的分支>:main

# 不推荐：PR 合并，有概率导致分支消失 / Arena 会话链接被切断
gh pr create ... && gh pr merge ...
```

前提：`main` 是你分支的祖先（快进可行）。可先自检：

```bash
git fetch origin main
git merge-base --is-ancestor origin/main HEAD && echo "FF 安全" || echo "需要先 rebase"
```

## 为什么

在 `sunccchengze/turbine-blade-ai-platform` 上观察到：PR 合并后源分支消失，
Arena 会话与 GitHub 的链接被强行切断，会话无法继续。

**关键点：该仓 `delete_branch_on_merge` 是关闭的（值为 `null`）。**
也就是说，分支不是被 GitHub 的"合并后自动删除分支"设置删掉的——关掉它并不能免疫。

## 实测证据（2026-09-02 采集）

仓库：`sunccchengze/turbine-blade-ai-platform`，`delete_branch_on_merge = null`（关闭）

| 分支类别 | 数量 | 存活 | 消失 |
|---|---|---|---|
| **走过 PR** | 6 | 4 | **2** |
| **从未开 PR**（只用推送） | 6 | **6** | 0 |

逐个 PR：

| PR | 分支 | 合并时间 (UTC) | 分支现状 |
|---|---|---|---|
| #1 | `arena/019fb618-...` | 2026-07-31T07:07:38 | 存活 |
| #2 | `arena/019fb74d-...` | 2026-07-31T08:42:26 | 存活 |
| #3 | `arena/019fb74d-...` | 2026-07-31T08:52:02 | 存活 |
| #4 | `arena/019fb778-...` | 2026-07-31T11:10:45 | 存活 |
| #5 | `arena/019fb861-...` | 2026-08-01T15:35:22 | **已消失** |
| #6 | `arena/019fbdff-...` | 2026-08-01T15:50:15 | 存活 |
| #7 | `arena/019fc343-...` | 2026-08-03T01:23:56 | **已消失** |

从未开过 PR 而全部存活的 6 个分支：
`arena/019fb8ff-...`、`arena/019fc539-...`、`arena/019fe072-...`、
`arena/019feb03-...`、`arena/019ff6c7-...`、`arena/019ffee7-...`

**读法**：分支消失只出现在走过 PR 的分支里；纯推送的分支 6/6 全活。
PR 路径并非每次都出事（4/6 存活），所以它是**概率性风险**，不是必然失败——
这也是它容易被误判为"偶发问题"的原因。

## 复核方法

想自己验证，跑这两条：

```bash
# 1) 确认该仓并未开启"合并后自动删除分支"
gh api repos/<owner>/<repo> --jq '.delete_branch_on_merge'

# 2) 对照：哪些分支走过 PR，哪些还活着
gh pr list --repo <owner>/<repo> --state all --limit 50 --json headRefName \
  --jq '.[].headRefName' | sort -u > /tmp/pr_branches.txt
git ls-remote --heads https://github.com/<owner>/<repo>.git \
  | sed 's#.*refs/heads/##' | grep -v '^main$' | sort > /tmp/live_branches.txt
comm -23 /tmp/pr_branches.txt /tmp/live_branches.txt   # 开过 PR 但已消失的分支
```

## 诚实的边界

- 这是**基于 12 个分支的观测规律**，不是对 Arena/GitHub 内部机制的证明。
  确切成因（为何只有部分 PR 触发）尚未定位。
- 已排除的解释：`delete_branch_on_merge`（该仓为关闭状态，仍出事）。
- 快进推送的代价是**没有 PR 记录、没有 review**。对本仓这种只读归档仓，
  线性历史反而更合适；若你的项目依赖 PR 评审流程，请自行权衡，
  并考虑合并后立刻确认分支是否还在。

## 本仓实际做法

`main` 上的全部归档内容，均通过 `git push origin arena/01a060a9-ai:main`
快进推送送达，**全程未创建任何 PR**。截至归档完成，工作分支与会话链接均完好。
