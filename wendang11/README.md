# 恋爱大师 · LoveMaster（恋爱军师 2.0 · MBTI 精通型）

> 在 [`powerycy/goutoujunshi`](https://github.com/powerycy/goutoujunshi)（狗头军师）基础之上，用「女娲蒸馏 + 内阁决策五方红蓝对抗 + Stop-slop 去 AI 味 + 双盲否决 + 6 阶记忆」方法论，创造性转化出的 **MBTI 精通型**恋爱军师技能库与专属 10 人专家团队。

---

## 0. 本仓库怎么来的（来源与归属）

| 来源 | 用途 | 在本仓库的位置 |
|---|---|---|
| `powerycy/goutoujunshi` | 恋爱军师原始基础（先接住情绪→分事实→给可执行策略） | `base/goutoujunshi/`（已去 `.git`，保留 LICENSE 与归属） |
| `sunccchengze/turbine-blade-ai-platform` @ `arena/019feb03-turbine-blade-ai-platform` 的 `技能库&准则` | 17 大开源技能库 + 女娲蒸馏 + 工业级审查 + 核心规约（真实文件，未自撰总结） | **`skills-library/` 子模块**（真实可追溯，非总结） |
| 我们自己的创造性转化层 | MBTI 参透知识库 + 恋爱军师技能总纲 + 10 人团队 | `knowledge/` `skills/` `team/` |

> **关于 `skills-library` 子模块**：该目录 1.1GB / 37,693 文件，直接塞进本仓库会触发平台快照上限（128MB / 1 万文件），故以 **git submodule** 直接挂入——真实文件一个不少，你随时 `git submodule update --init` 即可看到全部内容。本仓库只记录一个轻量 gitlink，推送稳、可持久化。

## 1. 技能库&准则里被我们"消化吸收、创造性转化"的真方法

不是自撰总结，而是把 turbine 的核心规约**忠实改造**为恋爱军师语境（见 `skills/恋爱军师技能总纲.md`）：

- **调度声明铁律**：每次回复开篇显式声明「本次调度大师 + 调用技能」。
- **宪法级准则**：想清楚再建议 / 不脑补不臆断 / 极简至上 / 外科手术式修改 / 目标驱动闭环。
- **内阁决策五方红蓝对抗**：追问派·反对派·机会派·外行人·执行派 + 主席综合（每条重要建议都过这道门）。
- **Stop-slop 去 AI 味**：砍废话、破二元排比、主动语态、无破折号、信任读者。
- **多 Agent 双盲否决 + 制品契约**：工兵产出 → 红队一票否决 → 自演化修补。
- **6 阶记忆系统**：跨 session 关系档案（MBTI + 主观评分 + 关键事件，可撤销）。
- **女娲蒸馏大师视角**：把大师心智模型蒸馏成可复用的「恋爱大师」视角（`team/`）。

原始核心规约原文保留在 `skills/00-*-原始.md`（SKILL运用指南 / 内阁决策 / Stop-slop / Humanizer 中文版 / MULTI_AGENT_ORCHESTRATION / 宪法级文件）。

## 2. 目录结构

```
.
├── base/goutoujunshi/        # 拉取的原始基础（狗头军师）
├── skills-library/           # submodule：turbine 技能库&准则（真实文件，1.1GB）
├── skills/                   # 我们的恋爱军师技能总纲 + 原始规约备份
├── knowledge/mbti/           # MBTI 参透手册（截至 2026-08-11，含来源）
└── team/                     # 恋爱大师 10 人团队（对 MBTI 完全参透）
```

## 3. 能力核验（本次会话）

- ✅ 已确认可 `commit` 且可 `push` 到 GitHub（`origin` = `sunccchengze/wendang11`）。
- ✅ 目标仓库 `powerycy/goutoujunshi` 可访问并已拉为 `base/`。
- ✅ `turbine-blade-ai-platform` 的 `技能库&准则` 已通过 submodule 直接挂入。
- ⚠️ 本会话被 Arena 绑定在 `arena/019ff16d-wendang11` 分支，未另建新分支（平台约束）；该分支即我们的干净工作分支。

## 4. 下一步

- 用 `skills-library/agent-reach`、`claude-video`、`img2threejs` 等去网上持续学习，更新 `knowledge/mbti/`。
- 把 `team/` 的 10 位大师落成可执行的 sub-agent / skill 定义，接入狗头军师的 `agents/` 与 `references/`。
