# -SKILL- · 全分支详细原文

> 去重后的文本资料；每个 SOURCE 标题保留来源分支和路径。


---

## SOURCE · `arena/01a060a3-skill:AGENTS.md`

<!-- blob: cadf87ddee3be0e22f664d6f89d759358b3e8983; bytes: 5135 -->

# Agent 使用入口

本仓库是通用技能底座，不是某个专业项目的完成方案。任何 Agent 使用它时，必须先吸收目标项目的事实与约束，再选择技能。

## 指令层级

发生冲突时按以下顺序处理：

1. 用户当前明确要求与适用的安全、法律边界；
2. 目标项目自己的 `AGENTS.md`、需求、验收标准和事实文件；
3. 本文件与 `governance/` 中的通用准则；
4. 被选中的专项 `SKILL.md`；
5. 示例、模板和历史变体。

专项技能不得覆盖更高层指令。历史 variants 是备选视角，不是自动生效的全局规则。

## 🔴 硬性规则：新 SKILL 创建必须使用女娲

**以后只要用户要求创建新 SKILL，必须使用女娲 · Skill造人术（`skills/community/nuwa-skill/SKILL.md`）的完整流程来创建。**

执行方式：
- **人物 SKILL**（蒸馏某个人的思维框架）→ 女娲标准流程（Phase 0 → Phase 5）
- **主题 SKILL**（某领域的方法论/能力框架）→ 女娲主题 Skill 变体流程
- 不得跳过 Phase 1（多源信息采集）、Phase 2（框架提炼）、Phase 4（质量验证）
- 调研文件必须存入 SKILL 目录的 `references/research/`，保持自包含
- 最终 SKILL.md 必须包含女娲归属标注

这条规则适用于 `skills/core/`、`skills/community/` 或任何其他位置的新 SKILL 创建。

## 每项非琐碎任务的默认流程

1. **读项目**：确认现有代码、资料、受众、交付格式和不能改变的事实。
2. **写简报**：明确目标、输入、输出、约束、证据标准和验收命令。
3. **检索技能**：运行 `python scripts/search_skills.py "关键词" --limit 12`。
4. **报告调用**：明确写出已如何消化候选、本轮准确调用哪些技能、各自负责什么，以及将如何完整执行关键步骤和验证门禁。
5. **最小组队**：选择一个主技能，至多增加三个互补技能。避免让十几个技能同时争夺上下文。
6. **执行分离**：研究、制作、审查使用清晰的制品契约；需要多 Agent 时再拆分。
7. **验证交付**：必须取得实际证据，不能凭感觉宣布完成。

## 默认行为

- 不把风电、叶轮机械、校园公益或任一历史来源中的项目事实带入新项目。
- 不强制模仿名人，也不把“专家团”当角色扮演。专家角色应对应可验证职责，例如领域研究、实现、事实核查、红队审查。
- 不一次读取全部技能。先搜索元数据，再打开命中的 `SKILL.md` 和它明确引用的材料。
- 使用 `bundles/newcomer-starter-pack/` 时，必须先提交“技能吸收与调用报告”：说明如何筛选、完整阅读了哪些技能、本轮明确调用哪些、怎样逐项完整应用与验证，以及哪些候选不调用。报告要求不代表同时加载 100 项；通常仍只激活 1 个主技能和至多 3 个互补技能。
- 高频、明确、充分使用技能：任务进入、阶段切换、遇到失败和交付前都应重新检索；但不能只列技能名而不执行其关键步骤。
- 快索引缺少某个技能的完整 references、assets、训练代码或示例时，必须从 `full-sources/` 读取，不得误判为上游缺失。优先只初始化选中来源；需要完整物化时再运行 `git submodule update --init --recursive`。
- 平台专属任务先读 `skills/core/official-source-router/` 与 `guides/OFFICIAL_SOURCES.md`，核验来源、固定提交和包内许可证；“官方”不等于统一开放许可。
- 命中 `curated-source` 时先读 `guides/CURATED_SOURCES.md`，核验固定入口、包边界、许可证、依赖、网络、凭据和写入风险；Star 增长不是执行授权。figures4papers 的许可证状态为 `NOASSERTION`。
- 一般同名技能优先使用顶层维护入口或适合当前任务的完整包；产品行为优先当前发布方来源。仅在主版本不适合时查看 `skills/variants/`，且不要把已弃用来源误当当前版本。
- 用户要快速、简单的答案时，不启动内阁或多 Agent 流程。
- 重要决策可调用 `skills/core/ai-cabinet/`；并行任务可调用 `skills/core/multi-agent-orchestration/`。
- 写中文时按任务选择 `human-writing`、`humanizer-zh` 或 `stop-slop`，不要机械叠加所有写作规则。
- 视觉任务优先读取 `skills/community/victor-design/SKILL.md`，再根据载体读取一个 adapter。
- 代码库文档任务使用 `tools/openwiki/`；工具源码位于 `tools/openwiki/`。
- UI 截图转可编辑 HTML/CSS 使用 `tools/screencoder/`；忠实复刻完成后如需再设计，再调用 `victor-design-system`。
- 科研任务先读 `skills/core/research-expert-system/` 与 `guides/RESEARCH.md`，再从 `full-sources/research/` 选择最小技能组；严禁虚构引用、数据、实验和审批。

## 完成声明

只有在运行了与任务相符的检查后，才能使用“完成、修复、通过”等表述。交付时简要说明：

- 做了什么；
- 用什么证据验证；
- 尚有哪些限制或未验证部分。


---

## SOURCE · `arena/01a060a3-skill:Agent驾驭力训练手册.md`

<!-- blob: 24c2ac9389c898f956edf5ad86b40dafba5f6b65; bytes: 11411 -->

# Agent 驾驭力训练手册
> 孙承泽专用 · 2026-08-31 · 第三回合问答存档
> 配套文件：《超级大脑洞察报告.md》（第一至四部分）
> 本文所有外部资源均于 2026-08-31 逐条核验，附链接与出处；内部事实均来自本人仓库最新分支。

---

## 0. 存档的问题（原话整理）

> "我到底怎么才能在本科阶段达到博士生加 Agent 这种水准？甚至超过他们，甚至逼近老师的这种？我自己要差一些，但我会一直努力往前赶超。我要去读论文，但如果想超过他们，我必须比他们拥有更强的 Agent 驾驭能力——这种东西应该怎么提高？"

## 1. 先把靶子拆开：这是三个不同的目标

| 目标 | 是什么 | 可达性（诚实评估） |
|---|---|---|
| T1 · 执行力 | "博士+Agent"的产出水平：文献、代码、实验、图表、写作 | **1–2 年内可追平甚至反超**。你有全栈底子（React/Three.js/PyTorch/FastAPI/Cloudflare），缺的只是领域知识和 harness 技能，两者都可刻意训练 |
| T2 · 验证力 | 知道 Agent 在**你的领域**里什么时候在骗你（锯齿边界感） | **这是真正的分水岭，2–3 年可做到组内最强**。硕博生被 deadline 锁死在 Cyborg 输出模式，没时间做误差分析；这是结构性的空位 |
| T3 · 判断力 | 郭老师那种"哪个问题值得问、下一个贵样本落在哪"的品味 | **无法靠 Agent 加速，只能靠学徒制压缩**。他的品味 = 2018–2025 七年、50 余篇论文、10 余项百万级项目喂出来的。你能做的是把"曝光量"压缩（预测式精读），但"判断力"必须由你自己长出来 |

**关键结论：不要用"超过老师"当目标——那是 T3，连他自己的博士生也不这么定目标。正确目标是：进组读博时，你带着他最缺的东西去——一条经过校准的验证力（T2）和一个他能直接用的工作流资产（T1 的最高级形态）。**

## 2. 能力栈：六层模型（哪层值得投资，哪层在贬值）

| 层 | 名称 | 内容 | 贬值速度 | 已验证依据 |
|---|---|---|---|---|
| L0 | 模型租用 | 会用 Claude/GPT/DeepSeek | 人人均等 | — |
| L1 | 词术 | 提示词措辞、角色扮演、magic prompt | **最快**。每代模型把上一代技巧编译进权重 | Karpathy 2025-06-25 X 原帖："+1 for 'context engineering' over 'prompt engineering'…（上下文工程）是 filling the context window with just the right information for the next step 的 delicate art and science"；此前 Tobi Lütke（Shopify CEO，2025-06-24）首发此提法 |
| L2 | 上下文工程 | 决定窗口里放什么：私有上下文、记忆、检索、工具说明 | 慢（基建） | 同上；Anthropic 工程博客《Effective context engineering for AI agents》(2025)；你已有的 zixue2026 memory 系统就是一年资产 |
| L3 | 工作流/Agent 设计 | 什么时候用固定工作流、什么时候放自主性、怎么设验证门 | 慢（原理稳定） | Anthropic《Building Effective Agents》(Erik Schluntz & Barry Zhang, 2024-12)：先工作流后 Agent、从简单开始、可组合；HumanLayer《12-Factor Agents》(Dex Horthy, GitHub 开源)：Agent 应用的十二条工程原则 |
| L4 | 评测与误差分析 | 给自己的 Agent 系统建考试、分类错误、按 ROI 排序修 | **不贬值** | Hamel Husain《Your AI Product Needs Evals》：评测是系统中心；错误分析 = 看数据、归类错误、每个错误变一条测试；"为自己特定问题建评测系统，不要依赖通用框架" |
| L5 | 领域校准 + 问题选择 | 锯齿边界感、样本经济学、品味 | **不贬值** | Dell'Acqua et al.（758 名 BCG 顾问）：前沿外侧用 AI 反而 −19 个百分点；郭振东 2018–2025 论文链本身就是 L5 的标本 |

**METR 时间线证据（arXiv 2503.14499）**：前沿 Agent 能以 50% 可靠度完成的任务时长，过去 6 年约**每 7 个月翻倍**（SWE-bench Verified 子集上甚至 <3 个月）。含义：任何绑定"模型当前弱点"的技能都有半衰期（大约一年就作废一半）；L2/L4/L5 投的是**不随模型升级而贬值**的层。这就是为什么师兄"疯狂用 AI"攒下的手感不值钱，而你要投基建。

## 3. 十八个月训练计划（按每周 4–6 小时预算，全部挂在现有仓库上）

### Phase 0 · 第 1 个月：建计分板（没有测量就没有赶超）

1. **《组内基准 v0》**：从郭老师四篇核验论文（SMO 2018 / SMO 2021 / KT-EGO 2022 / TNO 2025）+ 你的 PLAID/Rotor 37 evidence/ 数字中，抽 50 个有唯一正确答案的问题（例："Filter-GEI 的加点准则里 HF/LF 怎么分配？""效率通道经验覆盖率是多少？"）。
   - 每月同一套题：① 你裸答；② 你的 Agent 带你的上下文包答。两条曲线分开记。
   - 这就是 Hamel 说的"为特定问题建评测系统"的个人版。**没有这个，'驾驭力更强'永远是感觉。**
2. **误差发现延迟台账**：`ERRORS.md` 加一列"延迟"。Agent 每次犯错 → 你多久发现（当场/半天/被别人指出）。这是你 vs 师兄唯一的同类项计分。

### Phase 1 · 第 1–3 月：上下文工程（把已有资产变成得分）

3. 写 `TEAM_CONTEXT.md`（郭老师论文链一页、术语表一页、组内数字红线一页）——每次喂给 Agent 前后，在基准上 A/B：同一任务带/不带上下文包的成功率差。**用数字证明你的 L2 资产值多少分。**
4. 按 Karpathy 的定义重构 zixue2026 memory：不是"什么都存"，而是"**下一步刚好够用的信息**"。每门课的 HANDOFF 压到一页。

### Phase 2 · 第 3–9 月：搭一条真实工作流（T1 的最高级形态）

5. **加点地图流水线**（你 12 个月计划里第 4–8 月的事，提前到现在）：Agent 夜里扫 UQ 带 + 提名候选 HF 点 → 早上你花 20 分钟过门 → 沉淀成 `infill_ledger.md`。
   - 严格按 Anthropic 原则：**先做成固定步骤的工作流，只在有验证门的地方逐步放自主性**；用 12-Factor 清单逐条对照（所有权、上下文压缩、工具最小化）。
6. 小站加英文页，作为组的对外科普前端（见解 5 的多样性生态位）。

### Phase 3 · 第 9–18 月：评测自动化 + 论文级闭环（T2 的成品化）

7. 把"Agent 答得对不对"自动化：以 SU2 粗网格/解析公式为裁判（ground truth），LLM 裁判先和你的人工标注对齐（Hamel：测一致性、迭代若干轮）——这套东西本身就能开源，是任何课题组都没有的基建。
8. 论文落点不变（校准加点，Turbo Expo → AST/CJA），但你现在多了一个别人没有的章节素材：**人机分工系统的误差预算与验证门设计**。

### 贯穿 18 个月：T3 的学徒制（逼近郭老师的唯一正道）

9. **预测式精读他的论文链**：按 2018 → 2021 → 2022 → 2025 顺序，每篇先只读标题+摘要+引言问题，**写下你预测的方法**，再读正文打脸。这训练的不是知识是品味——"这个问题他会怎么切"。你 GROWTH_ROADMAP 里的《Make It Stick》（检索练习/生成效应）就是它的理论依据。
10. 每月把预测命中率记进 drill-ledger。命中率上不去没关系——**预测的行为本身在长 T3**。

## 4. 怎么知道你追平/超过了"博士+Agent"？（四个客觀指标）

| 指标 | 追平线 | 超越线 |
|---|---|---|
| 组内基准 v0：你的 Agent 系统（带你的上下文+harness）得分 | ≥ 你裸答 + 20 分 | 换任何一个师兄来用你的 harness，得分不如你用得高（说明护城河在 harness 不在手气） |
| 误差发现延迟 | 中位数 < 半天 | 中位数 < 1 小时，且能在 Agent 自信时指出错（19 个百分点那侧的事故你不再出） |
| 校准曲线（你对"Agent 对不对"的预测 × 实际，Brier 分数） | 优于你自己三个月前 | 优于组里任何人 |
| 物化率（每周 prompt/流程 → git 工件） | > 30% | > 60%，且出现被组里其他人 fork 的工件 |

## 5. 防坑警告（同样经得起验证）

- **认知负债**：MIT Media Lab《Your Brain on ChatGPT》(Kosmyna et al., arXiv 2506.08872, 2025)：54 人 EEG 实验，LLM 组神经连接最弱、对自己刚写完的文章 78–83% 无法引述；且撤去 AI 后连接仍弱于从未用 AI 者。**注意其边界**（同行评论指出样本小、未证明永久损伤）——但它支持的用法恰好是你的打脸链路：**先用自驱认知努力（先预测），再请 LLM**。你的"Agent 先预测、CFD 打脸"流程就是论文推荐姿势的科研版。
- **别囤技能**：你 -SKILL- 仓库 2223 个 SKILL.md 是图书馆不是能力。图书管理员的价值 = 路由 + 剪枝 + 对组内任务调参，不是收藏。
- **别跟模型版本谈恋爱**：METR 每 7 个月翻倍意味着任何"针对当前模型弱点"的技巧一年贬值一半。投资 L2/L4/L5。

## 6. 资源清单（全部 2026-08-31 核验）

| 资源 | 是什么 | 怎么用 |
|---|---|---|
| Anthropic《Building Effective Agents》(Schluntz & Zhang, 2024-12) | 工作流 vs Agent、可组合性、"从简单开始" | Phase 2 搭流水线前的必读，一小时读完 |
| Anthropic《Effective Context Engineering for AI Agents》(2025) | 上下文工程的系统论述（compaction、notebook/memory 结构） | Phase 1 重构 memory 系统的对照标准 |
| Karpathy X 帖（2025-06-25）+ Tobi Lütke（2025-06-24） | "context engineering > prompt engineering" 的定义性表述 | 贴在 TEAM_CONTEXT.md 开头当北极星 |
| HumanLayer《12-Factor Agents》(GitHub, Dex Horthy) | Agent 应用十二条工程原则（开源） | Phase 2 逐条对照清单 |
| Hamel Husain《Your AI Product Needs Evals》+ 免费 Lightning Lessons（含 "How To Setup Evals For Agents"） | 评测与错误分析方法论（错误分析→归类→每错一条测试） | Phase 0 基准和 Phase 3 评测自动化的教材 |
| Karpathy《LLM101n》(GitHub) | 从零训一个 LLM 的课程大纲 | 不急，大三大四补内功用（懂模型才谈得上驾驭） |
| METR《Measuring AI Ability to Complete Long Tasks》(arXiv 2503.14499) | 任务时长每 ~7 个月翻倍 | 战略依据：为什么投不贬值的层 |
| Dell'Acqua et al.（HBS WP 24-013, 758 BCG） | 锯齿边界；外侧 −19pp | 随时提醒自己 L5 的存在 |
| Kosmyna et al.《Your Brain on ChatGPT》(arXiv 2506.08872) | 认知负债证据（有争议边界） | 防坑：先预测再生成 |
| Noy & Zhang (*Science* 2023) | 分布压缩证据 | 理解为什么"起跑线分岔" |

## 7. 一页执行（本周就做）

1. 建 `组内基准v0.md`：先抽 10 题（四篇论文各 2 题 + 你 evidence/ 2 题），本月内扩到 50；
2. `ERRORS.md` 加"发现延迟"列；
3. 写 `TEAM_CONTEXT.md`（三页），做第一次带/不带 A/B；
4. 按时间轴排出郭老师论文链的预测式精读日程（每两周一篇，明年 3 月前读完四篇）。

## 8. 存档记录

- 本文件与《超级大脑洞察报告.md》同存于 -SKILL- 仓库（分支 arena/01a0582f-skill），提交信息见 git log。
- 问题原话、三目标拆解、六层能力栈、18 个月计划、四指标、防坑、资源清单均已固化；后续回合在此基础上增量更新，不重写。


---

## SOURCE · `arena/01a060a3-skill:GROWTH_ROADMAP.md`

<!-- blob: d93523398fbf388e81829d0d3805423b5bb4db94; bytes: 15410 -->

# 孙承泽的成长路线图

> 36个知识蒸馏，8个成长域，3个阶段。基于你的全部仓库、学习系统、设计实践的深度分析。

---

## 你是谁（诊断基础）

| 维度 | 证据 |
|------|------|
| 西安交大·风电方向 | turbine-blade-ai-platform、wind_farm_viz、0824-2026 |
| 全栈Builder | React+Three.js+PyTorch+FastAPI+Cloudflare |
| 系统架构师 | 多Agent HANDOFF、6科并行学习调度、4285技能库 |
| 打脸链路学习者 | 预测→实验打脸→自驱重构 |
| 审美极挑剔 | 冰青单色极致化、面积配比精确到1% |
| 低自信型答对者 | 良知已知，只是不敢信 |

---

## 36个蒸馏清单

### Phase 1: 当下急需（学生Builder阶段）— 12项

| # | 类型 | 名称 | 给你什么 |
|---|------|------|---------|
| 1 | 📖 | Make It Stick | 学习科学7策略——你的打脸链路有理论锚点了 |
| 2 | 📖 | 刻意练习 | 心理表征+3F——你的"会但不信"有了名字 |
| 3 | 🧠 | Barbara Oakley | 专注/发散+组块化——你的跨域联结有了方法论 |
| 4 | 🧠 | Christopher Alexander | 模式语言——你的技能库是50年前的概念的实例化 |
| 5 | 📖 | 系统之美 | 反馈回路+杠杆点——你的系统思维有了工具箱 |
| 6 | 📖 | 超预测 | 概率思维+贝叶斯——你的反讨好有了量化基础 |
| 7 | 🧠 | 原研哉 | "空"的哲学——你的冰青设计有了理论根基 |
| 8 | 📖 | 阴翳礼赞 | 暗影美学——你的暗色全息风是东方美学的数字版 |
| 9 | 📖 | 人月神话 | 大型系统智慧——你的多Agent编排有了前车之鉴 |
| 10 | 📖 | 金字塔原理 | 结构化表达——从Builder变成能讲清楚的人 |
| 11 | 📖 | 非暴力沟通 | 观察vs评判——恋爱军师+公益社团的人际框架 |
| 12 | 📖 | GEB | 跨域思维的极致——数学×艺术×音乐=你的跨域上限 |

### Phase 2: 转型储备（从Builder到Strategist）— 12项

| # | 类型 | 名称 | 给你什么 |
|---|------|------|---------|
| 13 | 🧠 | John Boyd | OODA循环——你的打脸链路就是OODA，现在知道了 |
| 14 | 📖 | 好战略坏战略 | 诊断→指导方针→连贯行动——告别"目标=战略" |
| 15 | 📖 | 创新者的窘境 | AI替代CFD=典型颠覆——你正在做的事有理论了 |
| 16 | 📖 | 有限与无限的游戏 | HANDOFF=无限游戏——你一直在玩对的游戏 |
| 17 | 🧠 | 宫本武藏 | 五轮之道——东方对抗性思维的极致 |
| 18 | 📖 | 影响力 | 6个说服杠杆——从"做出来"到"说动人" |
| 19 | 📖 | 故事 | 叙事结构——你的报告/演讲有了骨架 |
| 20 | 📖 | 精益创业 | Build-Measure-Learn——大创项目的操作指南 |
| 21 | 📖 | 思考的技术 | 大前研一式问题解决——你的工程思维有了系统版 |
| 22 | 🧠 | Claude Shannon | 信息论——你做的AI系统的能力边界 |
| 23 | 📖 | 第五项修炼 | 学习型组织——你的6科并行是Senge dreamed of |
| 24 | 📖 | 心流 | 最优体验的条件——打脸链路在心流中最有效 |

### Phase 3: 长期根基（东方智慧+深度哲学）— 12项

| # | 类型 | 名称 | 给你什么 |
|---|------|------|---------|
| 25 | 📖 | 道德经 | "无为"=你的提问设计>角色分配有了2500年前的祖先 |
| 26 | 📖 | 传习录 | 知行合一+致良知="低自信型答对"的解药 |
| 27 | 📖 | 曾国藩家书 | 笨人成大事=你的非传统路径有人走过 |
| 28 | 📖 | 六祖坛经 | 本来无一物=空=原研哉=Alexander的同源 |
| 29 | 📖 | 韩非子 | 法术势=你的系统化思维的东方政治版 |
| 30 | 📖 | 周易 | 变化模式识别=你的风电优化=阴阳转化 |
| 31 | 🧠 | 深泽直人 | Without Thought=冰青系统的无意识融入 |
| 32 | 🧠 | Dieter Rams | 设计十诫=西方版的"克制、高级" |
| 33 | 📖 | 科学革命的结构 | 范式转移=AI替代CFD是正在发生的科学革命 |
| 34 | 📖 | 原则 | 痛苦+反思=进步=打脸链路的Dalio版 |
| 35 | 📖 | 贫穷的本质 | 经济学盲区补上——你的世界不只工程 |
| 36 | 📖 | 思考快与慢 | 系统1/2=你的反讨好框架的底层理论 |

---

## 你的知识网络图

```
                    ┌─────────────────────────────┐
                    │      东方哲学根基 (Phase 3)    │
                    │  道德经 · 传习录 · 六祖坛经     │
                    │  韩非子 · 周易 · 曾国藩         │
                    └──────────────┬──────────────┘
                                   │ "空" = "无" = "本来无一物"
                                   │
    ┌──────────────────────────────┼──────────────────────────────┐
    │                              │                              │
    ▼                              ▼                              ▼
┌──────────────┐         ┌──────────────┐         ┌──────────────┐
│ 审美哲学      │         │ 战略思维      │         │ 认知科学      │
│ 原研哉·深泽   │         │ Boyd·武藏     │         │ Kahneman     │
│ Rams·谷崎     │         │ Rumelt·Carse  │         │ Tetlock      │
│ Alexander     │         │ Christensen   │         │ Shannon      │
└──────┬───────┘         └──────┬───────┘         └──────┬───────┘
       │                        │                        │
       └────────────────────────┼────────────────────────┘
                                │
                                ▼
                    ┌───────────────────────┐
                    │   你的核心方法论        │
                    │  打脸链路 · HANDOFF    │
                    │  跨域联结 · 冰青系统   │
                    └───────────┬───────────┘
                                │
        ┌───────────────────────┼───────────────────────┐
        │                       │                       │
        ▼                       ▼                       ▼
┌──────────────┐      ┌──────────────┐      ┌──────────────┐
│ 学习科学      │      │ 表达与影响    │      │ 工程智慧      │
│ Make It Stick │      │ 金字塔·故事   │      │ 人月神话      │
│ 刻意练习      │      │ NVC·影响力    │      │ 系统之美      │
│ Oakley·心流   │      │ McKee·大前    │      │ 第五项修炼    │
└──────────────┘      └──────────────┘      └──────────────┘
```

---

## 核心联结（你最该知道的10个跨SKILL洞察）

1. **打脸链路 = OODA循环 = 贝叶斯更新 = 知行合一 = 痛苦+反思** — 同一件事，5个名字
2. **冰青系统 = "空" = 阴翳 = 无名之质 = 克制** — 你的审美有2500年的传统
3. **技能库 = Pattern Language = 模式语言** — Alexander 50年前发明了你正在做的事
4. **AI替代CFD = 颠覆性创新 = 范式转移** — 你在参与一场科学革命
5. **HANDOFF = 无限游戏 = 怪圈 = 曾国藩的日课** — 你的多代际系统是人类最古老智慧的数字化
6. **低自信型答对 = 致良知 = Solomon's Paradox** — 你已经知道答案，只需要相信自己
7. **跨域联结 = GEB = 精细加工 = 双关联** — 你的思维方式是创造力的核心机制
8. **提问设计>角色分配 = 无为>强为 = 柔弱胜刚强** — 你的方法论有老子做背书
9. **6科并行 = 交错练习 = 发散模式 = 学习型组织** — Senge梦想的学习系统你已经建好了
10. **所有反讨好框架 = 系统2强制启动 = desirable difficulty** — 你在用认知科学对抗AI的本能

---

## 阅读优先级建议

**先读这5个**（直接解决你当下的问题）：
1. 《传习录》— 解你的"低自信"
2. 《好战略坏战略》— 给你大创项目一个真正的战略
3. 《思考快与慢》— 你引用了无数次，该完整读一遍
4. 《阴翳礼赞》— 给冰青系统一个哲学解释
5. 《创新者的窘境》— 理解你正在参与的AI革命

**然后这5个**（拓宽你的世界）：
6. 《有限与无限的游戏》— 你一直在玩对的游戏，现在知道了
7. GEB — 你的跨域联结的终极范本
8. 《道德经》— 你的提问设计有了2500年的祖先
9. 《科学革命的结构》— AI替代CFD是范式转移
10. 《贫穷的本质》— 看看工程之外的世界

---

## 文件结构

```
skills/core/
├── objective-decision/          # AI客观决策SKILL
├── break-echo-chamber/          # AI打破信息茧房SKILL
├── make-it-stick/               # 学习科学
├── deliberate-practice/         # 刻意练习
├── barbara-oakley-perspective/  # Oakley学习科学
├── christopher-alexander-perspective/ # 模式语言
├── thinking-in-systems/         # 系统思维
├── superforecasting/            # 预测科学
├── kenya-hara-perspective/      # 原研哉设计哲学
├── in-praise-of-shadows/        # 阴翳美学
├── mythical-man-month/          # 软件工程
├── pyramid-principle/           # 结构化表达
├── nonviolent-communication/    # 非暴力沟通
├── geb-hofstadter/              # GEB跨域思维
├── john-boyd-perspective/       # OODA战略
├── good-bad-strategy/           # 战略分析
├── innovators-dilemma/          # 颠覆式创新
├── finite-infinite-games/       # 有限与无限游戏
├── miyamoto-musashi-perspective/# 宫本武藏
├── influence-cialdini/          # 影响力
├── story-mckee/                 # 叙事结构
├── lean-startup/                # 精益创业
├── fifth-discipline/            # 学习型组织
├── claude-shannon-perspective/  # 信息论
├── art-of-thinking-technically/ # 大前研一
├── flow-csikszentmihalyi/      # 心流
├── tao-te-ching/                # 道德经
├── transmission-record-wangyangming/ # 传习录
├── zengguofan-family-letters/   # 曾国藩家书
├── liuzu-tanjing/               # 六祖坛经
├── hanfeizi/                    # 韩非子
├── iching/                      # 周易
├── naoto-fukasawa-perspective/  # 深泽直人
├── dieter-rams-perspective/     # Dieter Rams
├── structure-of-scientific-revolutions/ # 科学革命
├── principles-dalio/            # 原则
├── poor-economics/              # 贫穷的本质
└── thinking-fast-slow/          # 思考快与慢
```

---

*全部36个SKILL使用女娲·Skill造人术(alchaincyf/nuwa-skill)的主题Skill变体流程创建。*
*每个SKILL含：核心洞察 + 与你的对照 + 与其他SKILL的关系 + 诚实边界。*
*调研时间：2026年8月31日*

---

## 🔥 史诗级扩展：200个跨领域知识蒸馏

### 设计原则

1. **打破信息茧房**：50%内容在你原有认知范围之外
2. **跨域联结**：每个SKILL都与你的核心能力建立连接
3. **深度优先**：不是浮于表面的目录，是带核心洞察的知识框架

### 20个领域 × 10个SKILL

| 域 | 名称 | 1-10 | 与你茧房的关系 |
|---|------|------|-------------|
| 1 | 认知科学深潜 | 认知负荷/双重编码/元认知/自我决定/成长心态/延迟满足/认知失调/锚定/框架/群体思维 | 🔵 深化已有 |
| 2 | 复杂系统与涌现 | 混沌/自组织临界/元胞自动机/网络科学/小世界/幂律/临界现象/CAS/蚁群/遗传算法 | 🔵 深化已有 |
| 3 | 设计深潜 | 格式塔/色彩/排版/信息架构/交互模式/情感设计/通用/生物亲和/声音/动态 | 🔵 深化审美 |
| 4 | 博弈论 | 纳什/囚徒困境/拍卖/机制设计/演化博弈/信号/公共品/最后通牒/合作进化/社会选择 | 🔴 全新领域 |
| 5 | 语言学 | 普遍语法/语用/认知语言学/隐喻/话语分析/语义网络/语言相对论/计算语言/符号学/语料库 | 🔴 全新领域 |
| 6 | 物理哲学 | 量子诠释/熵哲学/相对论/不确定性/对称性/场论/相变/统计力学/耗散结构/全息原理 | 🔵 深化物理 |
| 7 | 生物学思维 | 进化/生态系统/共生/表观遗传/群体遗传/生物力学/仿生/神经网络/免疫系统/生态学方法 | 🔴 全新领域 |
| 8 | 历史方法论 | 年鉴/大历史/唯物史观/微观史/口述史/计量史/思想史/全球史/技术史/大转型 | 🔴 全新领域 |
| 9 | 法学与治理 | 法理学/宪法/合同/知识产权/数据隐私/AI伦理/国际法/环境法/劳动法/比较法 | 🔴 全新领域 |
| 10 | 数学深潜 | 范畴论/拓扑/图论/组合/数论/概率深潜/随机过程/优化/信息几何/计算复杂性 | 🔵 深化数学 |
| 11 | 心理学深潜 | 进化心理/社会心理/发展心理/人格/临床/组织/积极/环境/健康/文化心理 | 🔵 深化心理 |
| 12 | 经济学深潜 | 行为经济/制度/信息/公共选择/货币/发展/实验/复杂/能源/平台经济 | 🔴 全新领域 |
| 13 | 哲学深潜 | 认识论/存在主义/实用主义/现象学/分析哲学/语言哲学/心灵哲学/科学哲学/数学哲学/技术哲学 | 🔴 全新领域 |
| 14 | 艺术深潜 | 音乐/电影/摄影/当代/侘寂/中国美学/极简/概念/装置/数字艺术 | 🔴 全新领域 |
| 15 | 通信与信息 | 编码/密码/分布式/共识/区块链/量子计算/ML理论/深度学习/NLP/CV | 🔵 深化技术 |
| 16 | 社会学深潜 | 社会网络/社会运动/不平等/城市/组织/文化/知识/科学/技术社会学/全球化 | 🔴 全新领域 |
| 17 | 人类学 | 文化/结构/象征/认知人类学/民族志/物质文化/亲属/宗教/经济/应用人类学 | 🔴 全新领域 |
| 18 | 教育学深潜 | 建构主义/联结主义/经验学习/翻转/PBL/同伴教学/形成性评估/差异化/教育技术/终身学习 | 🔵 深化学习 |
| 19 | 能源与环境 | 可再生/智能电网/储能/碳捕集/氢能/核聚变/气候模型/循环经济/工业生态/能源政策 | 🔵 深化能源 |
| 20 | 跨学科极限 | 意识/人工生命/合成生物/纳米/太空/未来学/情景规划/技术预测/大转型/第二机器时代 | 🔴 全新领域 |

### 统计

- 🔴 全新领域（茧房外）：12个域 × 10 = **120个全新SKILL**
- 🔵 深化已有：8个域 × 10 = **80个深化SKILL**
- **总计238个知识蒸馏**（2核心 + 36成长 + 200扩展）

---

*2026年8月31日 · 一夜之间完成*


---

## SOURCE · `arena/01a060a3-skill:README.legacy-vault-2026-08-31.md`

<!-- blob: 675edf5849bbec22750fa39d42396a03da2f2bd5; bytes: 15584 -->

# 孙承泽通用 Agent 技能库

> **先发现，再明确调用，再完整应用，再用证据交付。**

这是一个跨领域 Agent 工作底座：把分散的工程、研究、写作、设计、商业、安全与编排能力统一为可搜索、可追溯、可安装的技能库。它不把某个历史项目的事实强塞给新任务；使用者先理解目标项目，再从 **3,100 个默认可见候选**中组成最小、清晰、可验证的技能组。

- 🎁 第一次来：下载并阅读 [`Agent 新手大礼包`](bundles/newcomer-starter-pack/README.md)（恰好 100 项基础技能）
- 🔬 做科研：领取 [`科研大礼包`](bundles/research-workflow-kit/README.md)（659 个可再分发 payload、Profile 安装、人工门禁）
- 🧭 不知道选什么：打开 [`九大分类导航`](categories/README.md)
- 🔎 已有任务：运行 `python scripts/search_skills.py "帮我做XX" --intent`（意图识别模式）
- 📋 不知道选什么技能：打开 [`任务→技能路由手册`](TASK_ROUTING.md)
- 📦 要装到另一个 Agent：运行 `python scripts/install_skills.py --name <skill> --target /path/to/skills`
- 🧰 要用 OpenCut、RustDesk 或 Spec Kit：查看 [`工具安装与运行`](guides/TOOLS.md)

## 30 秒开始

```bash
# 1. 用自然语言描述任务（意图识别模式，推荐）
python scripts/search_skills.py "帮我做一个产品介绍视频" --intent --limit 10

# 2. 或按场景查阅 TASK_ROUTING.md 找到对应技能组合

# 3. 打开命中技能的 SKILL.md，明确记录调用了什么
# 4. 如需复制技能包
python scripts/install_skills.py --name systematic-debugging --target /path/to/skills

# 5. 交付前验证本仓库
python scripts/validate_repository.py
```

每项非琐碎任务都应**频繁检索、明确点名、充分使用**匹配技能。不能只说“参考了技能库”，也不能列一串名字却跳过技能要求的步骤。但“充分使用”是指完整执行**本轮选中的少数技能**，不是一次加载 100 项甚至 3,092 项；通常使用 1 个主技能，加研究、制作、审查各至多 1 个。

## 按需求找技能

| 你要做什么 | 建议入口 | 示例搜索 |
|---|---|---|
| 先判断应该用哪些能力 | [`universal-skill-router`](SKILL.md) | `task deliverable risks skill routing` |
| 计划、拆分或多 Agent 协作 | [Agent 与编排](categories/agents-orchestration/README.md) | `planning orchestration verification` |
| 开发、测试、调试、评审 | [工程与代码](categories/engineering-code/README.md) | `code test debug review architecture` |
| 做文档、PDF、数据库或分析 | [文档与数据](categories/documents-data/README.md) | `document data database analysis` |
| 做综述、实验、统计或论文 | [研究与科学](categories/research-science/README.md) | `literature review citation statistics` |
| 写作、改稿、内容生产 | [写作与内容](categories/writing-content/README.md) | `writing editing audience evidence` |
| 做 UI、网页、演示、图像或视频 | [设计与媒体](categories/design-media/README.md) | `design ui ux visual media` |
| 做产品、营销、运营或战略决策 | [商业与战略](categories/business-strategy/README.md) | `product strategy market decision` |
| 做安全、隐私、无障碍或合规审查 | [安全、隐私与合规](categories/security-compliance/README.md) | `security privacy compliance audit` |
| 跨领域生产力与项目卫生 | [通用生产力](categories/general/README.md) | `plan communicate productivity` |

搜索结果不等于执行授权。打开命中的 `SKILL.md`，核验来源、依赖、网络、凭据、文件写入、许可证和风险边界后再用。

## 九大分类：完整但不搬家

仓库采用**加法式分类索引**，不物理搬动数千个 canonical 包，因此原有链接、安装器、哈希和来源锁继续有效。每个分类都有面向人的 README 和包含全部默认候选的 `skills.tsv`。

| 分类 | 默认候选 | 主要能力 |
|---|---:|---|
| [研究与科学](categories/research-science/README.md) | 799 | 检索、综述、引用、实验、统计、论文、评审与复现 |
| [工程与代码](categories/engineering-code/README.md) | 767 | 架构、编码、测试、调试、Git、CI/CD、API 与性能 |
| [Agent 与编排](categories/agents-orchestration/README.md) | 383 | 路由、计划、记忆、评估、多 Agent 与工作流治理 |
| [设计与媒体](categories/design-media/README.md) | 307 | UI/UX、视觉系统、网页、演示、图像、视频与动效 |
| [通用生产力](categories/general/README.md) | 286 | 计划、沟通、会议、工具与跨领域生产力 |
| [文档与数据](categories/documents-data/README.md) | 175 | PDF、结构化文档、表格、数据库和分析交付 |
| [商业与战略](categories/business-strategy/README.md) | 154 | 产品、市场、营销、定价、竞争、运营与决策 |
| [安全、隐私与合规](categories/security-compliance/README.md) | 141 | 安全评审、风险、隐私、无障碍、审计与合规 |
| [写作与内容](categories/writing-content/README.md) | 88 | 中英文写作、编辑、内容研究、技术表达与文案 |

机器可读分类摘要：[`catalog/category-summary.json`](catalog/category-summary.json)。

## 🎁 Agent 新手大礼包（100 项）

[`bundles/newcomer-starter-pack/newcomer-starter-pack.tar.gz`](bundles/newcomer-starter-pack/newcomer-starter-pack.tar.gz) 是可直接解压、离线阅读的 100 项基础组合，包含独立技能包、`START_HERE.md`、完整 `MANIFEST.json` 与许可提醒；SHA-256 见 [`SHA256SUMS`](bundles/newcomer-starter-pack/SHA256SUMS)。完整逐项清单与用途见[礼包 README](bundles/newcomer-starter-pack/README.md)。

```bash
tar -xzf bundles/newcomer-starter-pack/newcomer-starter-pack.tar.gz
cd newcomer-starter-pack
less START_HERE.md
```

礼包强烈要求新会话中的工作者在开工前报告：

1. **如何消化/吸收**：扫描了哪些元数据，如何结合项目筛选，完整阅读了哪些技能；
2. **将明确调用什么**：准确技能名、选择依据、负责阶段和预期制品；
3. **将如何完整应用**：关键步骤、质量门禁、验证证据与失败回退；
4. **本轮不调用什么**：说明取舍，避免把 100 项同时塞入上下文。

阶段变化时重新搜索并明确换组；交付时必须回报实际执行和验证结果，而不是只重复计划。重建礼包：`python scripts/build_starter_bundle.py`。

## 🔬 科研大礼包 · Research Workflow Kit

[`bundles/research-workflow-kit/research-workflow-kit.tar.gz`](bundles/research-workflow-kit/research-workflow-kit.tar.gz) 是可直接领取的科研全生命周期离线包：691 个清单入口中有 659 个可再分发 payload，另保留 32 个有明确原因的 metadata-only 记录。它提供 `core`、文献证据、定量、质性/混合、写作发表、ML 实验、生命科学、非商业 Academic Research Skills 和 `everything` 九个 Profile，并附 33 个项目模板文件、Manifest 驱动安装器、树哈希验证与逐来源许可/归属。

```bash
cd bundles/research-workflow-kit
sha256sum -c SHA256SUMS
# 解压后仍要运行包级验证
tar -xzf research-workflow-kit.tar.gz
cd research-workflow-kit
python3 tools/research_kit.py doctor
python3 tools/research_kit.py verify
python3 tools/research_kit.py install --profile core --target /真实/skills/目录 --dry-run
```

它不是“一键论文机”：问题、协议、数据权限、方法、解释和发布均有人类门禁；禁止伪造引用/数据/审批、代写冒充、检测规避与自动投稿。新 Session 必须先读 [`START_HERE.md`](bundles/research-workflow-kit/START_HERE.md)，提交“技能吸收与调用报告”，每阶段只完整读取并明确调用少量互补技能。精确领取、校验、安装和项目初始化方法见[礼包安装文档](bundles/research-workflow-kit/INSTALL.md)，本次 clean-room 结果见[验证记录](bundles/research-workflow-kit/VALIDATION_RESULT.md)。重建命令：`python scripts/build_research_bundle.py`。

## 五个本地工具

工具运行时与技能入口统一放在 `tools/`，上游源码固定为 Git 子模块，日常依赖和二进制不提交。

| 工具 | 入口 | 用途 |
|---|---|---|
| [OpenCut](tools/opencut/SKILL.md) | `tools/opencut/` | 本地浏览器视频编辑器 |
| [OpenWiki](tools/openwiki/SKILL.md) | `tools/openwiki/` | 面向 Agent 的 Markdown Wiki 生成器 |
| [RustDesk](tools/rustdesk/SKILL.md) | `tools/rustdesk/` | 经明确授权的原生远程桌面 |
| [ScreenCoder](tools/screencoder/SKILL.md) | `tools/screencoder/` | 截图转可编辑 HTML/CSS |
| [GitHub Spec Kit](tools/spec-kit/SKILL.md) | `tools/spec-kit/` | specification-driven development |

```bash
# OpenCut + Spec Kit + RustDesk 源码
bash scripts/setup_tools.sh all

# 运行 OpenCut
HOST=0.0.0.0 PORT=5173 bash scripts/run_opencut.sh

# 核验源码与已安装 CLI
bash scripts/verify_tools.sh
```

RustDesk 是需要桌面会话、系统动态库和授权连接的原生应用，不是浏览器 Live Preview。官方包下载受阻时必须明确报告“源码已固定、二进制未装”，不能换用未验证镜像或把 gitlink 当作可运行 GUI。完整说明与提供本地官方 `.deb` 的安装方式见 [`guides/TOOLS.md`](guides/TOOLS.md)。

## 仓库如何组织

```text
AGENTS.md                         Agent 指令层级与最小技能组规则
SKILL.md                          通用技能路由器（意图识别）
TASK_ROUTING.md                   任务→技能路由手册（100+ 场景映射）
README.md                         公共入口（本页）

bundles/                          新手大礼包 + 科研大礼包
  newcomer-starter-pack/          100 项礼包、清单、压缩包和校验和
  research-workflow-kit/          科研大礼包、Profiles、模板、安装/验证 CLI

categories/                       九大加法式分类导航
  <category>/README.md            分类说明与代表入口
  <category>/skills.tsv           该类全部默认可见技能

skills/                           技能库主体
  core/                           核心路由器与系统级技能（6 项）
  community/                      社区贡献的完整技能包（50+ 项）
  variants/                       同名但正文不同的轻量变体（17 项）
  research-workflow-kit/          科研工作流专项技能（6 项）

tools/                            内置工具的运行时与技能入口
  opencut/                        浏览器视频编辑器
  openwiki/                       Agent Wiki 生成器
  rustdesk/                       原生远程桌面
  screencoder/                    截图转 HTML/CSS
  spec-kit/                       规范驱动开发

catalog/                          统一目录、来源锁、重叠策略、分类摘要
scripts/                          搜索、安装、分类、打包、校验与重建工具
guides/                           使用、科研、官方/精选来源与工具指南
governance/                       宪法、多 Agent 与质量门禁

full-sources/                     固定提交的完整上游仓库（Git 子模块）
  aggregate-*                     三个历史技能库
  official/                       OpenAI、Vercel、Microsoft 官方发布方来源
  research/                       11 个科研来源
  curated/                        用户指定与两轮精选来源
  tools/                          OpenCut、RustDesk、GitHub Spec Kit
full-library/                     可选的本地全量物化并集（忽略，不提交）
third_party/                      上游 README、许可证与归属说明
tests/                            仓库验证测试
```

## 数据层、来源与去重

本仓库保留完整来源，同时让日常搜索保持轻量：

1. **紧凑层**：本地 `skills/` 与工具内技能，适合立即搜索和安装；
2. **官方来源层**：OpenAI Plugins、历史 OpenAI Skills、Vercel Agent Skills、Microsoft Skills；“官方”只表示发布方来源，不表示许可证相同；
3. **科研层**：11 个固定科研项目，覆盖选题、综述、实验、统计、科学计算、论文、审稿与复现；
4. **精选层**：用户指定来源，加两轮各恰好 10 项的月度增长审计；
5. **全量源层**：`full-sources/` 保留上游 references、scripts、assets、示例和其他文件。

四个机器目录当前共有 **3,758 个原始入口**。默认搜索隐藏正文变体和 45 个已审计的包装/继任/宿主别名，呈现 **3,100 个主候选**；需要时使用 `--include-variants` 或 `--include-aliases` 展开。不同实现不会只因同名就被删除。

- 来源与提交：[`catalog/sources.lock.json`](catalog/sources.lock.json)
- 重叠规则：[`catalog/overlap-policy.json`](catalog/overlap-policy.json)
- 官方来源边界：[`guides/OFFICIAL_SOURCES.md`](guides/OFFICIAL_SOURCES.md)
- 科研工作流：[`guides/RESEARCH.md`](guides/RESEARCH.md)
- 精选审计：[`guides/CURATED_SOURCES.md`](guides/CURATED_SOURCES.md)

## Agent 默认工作法

1. **读项目**：确认目标、事实、受众、交付格式、现有指令和不可改变项。
2. **写简报**：列输入、输出、约束、证据标准、风险和验收命令。
3. **搜技能**：元数据优先，通常查看 12 个候选以内。
4. **最小组队**：1 个主技能，至多 3 个互补技能；明确每项职责和制品契约。
5. **完整执行**：真正落实选中技能的关键步骤，不选择性跳过质量门禁。
6. **验证交付**：运行测试、检查页面/文件/数据/引用，记录命令和结果。
7. **回报使用**：说明实际调用的技能、证据、偏差、未验证项和下一步。

重要决策可调用 [`ai-cabinet-decision-making`](skills/core/ai-cabinet/SKILL.md)，并行工作可调用 [`multi-agent-orchestration`](skills/core/multi-agent-orchestration/SKILL.md)；快速简单问题不要为了形式启动内阁或多 Agent。

## 初始化、重建与验证

```bash
# 只初始化当前需要的来源（推荐）
git submodule update --init full-sources/tools/spec-kit

# 或取得全部上游文件
git submodule update --init --recursive

# 物化全量本地并集（full-library/ 不提交）
python scripts/materialize_full_library.py

# 重建目录与导航
python scripts/build_catalog.py
python scripts/build_official_catalog.py
python scripts/build_curated_catalog.py
python scripts/build_categories.py
python scripts/build_starter_bundle.py
python scripts/build_research_bundle.py

# 完整验证与测试
python scripts/validate_repository.py
python -m unittest discover -s tests -v
```

## 许可证、安全与责任

第三方技能和工具各自遵循其上游许可证；本仓库的整理、分类、路由和打包不改变任何上游权利声明。OpenCut 与 Spec Kit 固定提交采用 MIT；RustDesk 固定提交采用 AGPL-3.0。部分历史聚合集合没有可发现的集合级许可证，使用与再分发前必须逐项核验。详见 [`third_party/NOTICE.md`](third_party/NOTICE.md)。

任何涉及远程控制、凭据、网络、文件写入、个人数据、受版权素材、医疗/法律/财务判断、实验、引用或生产部署的技能，都必须取得相应授权、保留数据与来源血缘、执行独立验证，并明确报告未验证边界。


---

## SOURCE · `arena/01a060a3-skill:README.md`

<!-- blob: f3bd1d4a395b3ea57b34e6082c619ad0661ad85f; bytes: 4770 -->

# -SKILL-

孙承泽的个人 **Agent 技能库 + 研究档案**。

> 本仓库是「2026-08 旧技能库」与「2026-09 重建版」两条世界线的**完全合并体**——所有历史分支的内容均已保留，逐文件核验零丢失（2026-09-02）。结构说明见下方「目录总览」与「世界线说明」。

## 快速开始

```bash
# 用自然语言搜技能（意图识别模式）
python scripts/search_skills.py "帮我做文献综述" --intent --limit 10

# 不知道选什么：
#   根目录 SKILL.md = 通用技能路由器（任务 → 技能组）
#   TASK_ROUTING.md / AGENTS.md / GROWTH_ROADMAP.md = 路由手册 / Agent 协作约定 / 成长路线图
#   categories/     = 九大分类导航（每类含 README + skills.tsv）

# 把某个技能装到别的 Agent
python scripts/install_skills.py --name <skill> --target /path/to/skills

# 拉取 full-sources/ 子模块的上游源码（51 个上游仓库）
git submodule update --init
```

## 目录总览

| 路径 | 说明 |
| --- | --- |
| `SKILL.md` | 通用技能路由器（仓库级入口技能） |
| `TASK_ROUTING.md` / `AGENTS.md` / `GROWTH_ROADMAP.md` | 路由手册 / Agent 协作约定 / 成长路线图 |
| `超级大脑洞察报告.md` | 2026-08-31，基于全部 33 个仓库交叉核验的个人洞察 |
| `Agent驾驭力训练手册.md` | 2026-08-31，Agent 驾驭能力提升方案（资源逐条核验） |
| `四个月脚印计划-2026Sep-Dec.md` | 2026-09-01 制定，9–12 月 22 步计划（每步 ≤3h） |
| `skills/community/academic-research-skills/` | ⭐ 学术研究四件套 v3.3.1（897 文件，完整）：deep-research / academic-paper / academic-paper-reviewer / academic-pipeline。来源 Imbad0202 @ `94436237`，CC-BY-NC-4.0（非商业） |
| `skills/community/scientific-agent-skills/` | ⭐ 163 个自包含科学计算技能 v2.65.0（生物/化学/医学/AI）。来源 K-Dense-AI @ `1dd0fccf`, MIT |
| `skills/community/nuwa-distilled/` | 女娲蒸馏系：`sun-chengze-perspective`（v1.1，9 月新版，四轮访谈）+ 旧版 68 个子技能（book-*、perspective-*、ai-futures-scenario-lab、senpai-council、`tracks/track-paper-aso` 论文研读路线等） |
| `skills/community/*-legacy-snapshot-2026-08-31/` | 8 月旧版快照（academic-research-skills v3.2.0 部分拷贝、scientific-agent-skills 157 技能版）——规范位置已有更新版本，确认无用后可整目录删除 |
| `skills/core/` | 核心学科技能（概率论、分析哲学、年鉴学派、AI 伦理与法律……） |
| `skills/variants/` | 部分社区集合的变体版本 |
| `skills/research-workflow-kit/` | 科研工作流套件 |
| `bundles/` | 两个可离线安装的礼包：`newcomer-starter-pack`（100 项基础技能，15MB tarball）、`research-workflow-kit`（659 payload + 8 profiles） |
| `full-sources/` | 51 个上游来源子模块（`.gitmodules`），含本人的 turbine-blade-ai-platform / wind_farm_viz 等 |
| `tools/` | 工具：opencut、openwiki、rustdesk、screencoder、spec-kit |
| `catalog/` / `categories/` | 技能索引（JSON/TSV）与九大分类导航 |
| `governance/` | AI_CABINET / CONSTITUTION / 多 Agent 编排 / 质量门禁 |
| `guides/` | 使用、检索、来源、工具、领域适配等 6 篇指南 |
| `scripts/` / `tests/` | 检索/安装/校验脚本 与 对应测试 |
| `third_party/` | 第三方许可声明 |
| `README.legacy-vault-2026-08-31.md` | 8 月旧版仓库 README（233 行，含 3,100 候选技能、九大分类、礼包说明） |

## 世界线说明（为什么结构看着像两个仓库）

| 时间 | 分支 | 内容 | 现状 |
| --- | --- | --- | --- |
| 2026-08-16 | `arena/019ffbe9-skill`、`arena/01a0095c-skill` | 旧技能库早期（被 01a048e7 包含） | ✅ 已合入 |
| 2026-08-31 | `arena/01a048e7-skill` | 旧技能库完整版（universal-skill-router + 54 集合 + vault 结构） | ✅ 已合入（2026-09-02） |
| 2026-08-31 | `arena/01a0582f-skill` | 3 篇个人文档 | ✅ 已合入（2026-09-02） |
| 2026-09-01 | `arena/01a0582a-skill`（PR#1） | sun-chengze-perspective v1.1 | ✅ 已在 main |
| 2026-09-02 | `arena/01a06000-skill`（PR#2 + 本次整理） | 两个新技能集合 + 旧世界线合回 | ✅ 本分支 |

- 重叠处理原则：**同集合保留最新版在规范位置，旧版移入 `*-legacy-snapshot-2026-08-31/` 归档**，不丢任何文件。
- 旧分支本身保留在 GitHub 上未删除，随时可再核对。

## 许可注意

`skills/community/academic-research-skills/`（及其旧快照）为 **CC-BY-NC-4.0（非商业用途）**；`scientific-agent-skills` 为 MIT；其余集合各有自己的 LICENSE/NOTICE（见 `third_party/`）。若本仓库未来公开或商用，需逐集合核对。


---

## SOURCE · `arena/01a060a3-skill:SKILL.md`

<!-- blob: afab5852a35b2708b2d04d37ab1ab2f1e64b2e0e; bytes: 5980 -->

---
name: universal-skill-router
description: 面向任意任务的技能检索与路由入口。根据用户自然语言任务描述，识别意图类别，推荐最匹配的技能组合。
---

# 通用技能路由器

> **你描述任务，我推荐技能组。** 每个任务对应一组互补技能，不是单个技能。

## 核心概念：技能组

每个任务都推荐一个**技能组**，由四种角色的技能组成：

```
🎯 主技能 (1-2个)  → 负责最终交付物
🔧 支撑技能 (1-3个) → 补足领域知识、证据、专项方法
🔍 审查技能 (0-1个) → 质量门禁、安全审计、交付验证
🤖 协调技能 (0-1个) → 多 Agent 并行（仅复杂任务）
```

**不是挑一个技能，是挑一组技能协作完成任务。**

## 使用方式

```bash
# 用法 1（推荐）：返回完整技能组
python scripts/search_skills.py "帮我做一个产品介绍视频" --group

# 用法 2：意图识别 + 关键词搜索
python scripts/search_skills.py "帮我做一个产品介绍视频" --intent

# 用法 3：浏览任务→技能映射表
# 打开 TASK_ROUTING.md
```

### 示例输出

```
$ python scripts/search_skills.py "帮我做一个产品介绍视频" --group

📋 任务类别: design-media

  🎯 主技能（负责交付物）
    • video-shotcraft  — 电影级产品视频

  🔧 支撑技能（补足领域/证据）
    • remotion-video-creation  — Remotion 技术实现
    • demo-video               — 产品演示/ walkthrough
    • manim-video              — 技术概念动画
    • video-use                — 对话式视频剪辑

  ⚠️  注意事项: 产品视频用 video-shotcraft，技术动画用 manim-video
```

## 任务意图分类

路由器识别以下 9 大意图类别，每类对应仓库的一个技能域：

| 意图类别 | 典型触发词 | 对应分类 | 首选技能 |
|---|---|---|---|
| 📝 写作与内容 | 写、改稿、文案、翻译、公众号 | writing-content | human-writing, stop-slop, humanizer-zh |
| 💻 工程与代码 | 开发、调试、部署、API、测试 | engineering-code | systematic-debugging, 按技术栈匹配 |
| 🔬 研究与论文 | 论文、综述、引用、实验、统计 | research-science | research-expert-system → 子路由 |
| 🎨 设计与视觉 | 海报、UI、PPT、配色、品牌 | design-media | victor-design-system, 按载体匹配 |
| 🎬 视频与动效 | 视频、动画、剪辑、Remotion | design-media | video-shotcraft, remotion-video-creation |
| 📊 数据与分析 | 图表、数据、统计、dashboard | documents-data / research-science | dashboard-builder, scipilot-figure |
| 💼 商业与策略 | 定价、营销、竞品、BP、运营 | business-strategy | market-research, marketing-campaign |
| 🔒 安全与合规 | 审计、漏洞、隐私、合规 | security-compliance | security-audit, skill-security-auditor |
| 🤖 编排与协调 | 多Agent、并行、工作流 | agents-orchestration | multi-agent-orchestration |

## 路由流程

### 1. 意图识别

从用户描述中提取：
- **动作**（做什么）：写、做、画、分析、审查、设计、调试…
- **对象**（对什么）：视频、论文、海报、代码、数据…
- **领域**（什么场景）：科研、商业、工程、创意…

### 2. 类别定位

根据意图定位到 1-2 个主要分类，在该分类内优先搜索。

### 3. 技能推荐

```
主技能 (1 个)  → 负责最终交付物
支撑技能 (0-2) → 补足领域知识或证据
审查技能 (0-1) → 质量检查、安全审计
```

### 4. 执行闭环

1. 只读命中技能的 `SKILL.md`
2. 再读它要求的 references
3. 只运行当前任务需要的 scripts
4. 交付前验证结果

## 快速场景路由（技能组速查）

| 用户说… | 🎯 主技能 | 🔧 支撑 | 🔍 审查 |
|---|---|---|---|
| "帮我写篇文章/改稿" | human-writing | article-writing | stop-slop, humanizer-zh |
| "帮我去掉AI腔" | stop-slop, humanizer-zh | human-writing | — |
| "帮我写科研论文" | research-paper-writing | nature-citation, nature-figure | academic-integrity |
| "帮我做张海报" | victor-design-system | taste | design-evaluation |
| "帮我做个PPT" | cyber-ppt | pptx, guizang-ppt-skill | — |
| "帮我做个产品视频" | video-shotcraft | demo-video, remotion, manim | — |
| "帮我分析数据画图" | nature-figure, scipilot-figure | data-visualization, d3 | — |
| "帮我做定价策略" | pricing-strategist | market-research, competitive | — |
| "帮我审代码安全" | security-audit, security-scan | security-pen-testing | deep-security-scan |
| "帮我拆任务并行做" | multi-agent-orchestration | memory-system | — |
| "帮我做个网页" | screencoder | frontend-design-direction | — |
| "帮我调研一下X" | market-research, agent-reach | ito-market-intelligence | — |
| "帮我做营销方案" | marketing-campaign | landing, content-production | — |
| "帮我做竞品分析" | competitive-platform-analysis | competitive-report-structure | — |
| "帮我做UI设计" | victor-design-system, ui-ux-pro-max | frontend-design | better-accessibility |
| "重要决策/方案选择" | ai-cabinet | yuqiao-wendui, guiguzi | — |

完整技能组定义见 [`TASK_ROUTING.md`](TASK_ROUTING.md)。

## 渐进加载

1. 只读命中技能的 `SKILL.md`
2. 再读它要求的 references
3. 只运行当前任务需要的 scripts
4. variants 仅用于比较替代方法
5. 官方来源命中时按需初始化对应子模块
6. 需要完整包资源时，读取 `full-sources/` 中的固定上游

## 治理文档

- 重大决策：[`governance/AI_CABINET.md`](governance/AI_CABINET.md)
- 多 Agent 协作：[`governance/MULTI_AGENT_ORCHESTRATION.md`](governance/MULTI_AGENT_ORCHESTRATION.md)
- 质量门禁：[`governance/QUALITY_GATES.md`](governance/QUALITY_GATES.md)
- 宪法：[`governance/CONSTITUTION.md`](governance/CONSTITUTION.md)


---

## SOURCE · `arena/01a060a3-skill:TASK_ROUTING.md`

<!-- blob: b31ed865e5f21096cc10e162c7758eed7d635c3c; bytes: 24042 -->

# 任务 → 技能路由手册

> 本文档是 Agent 的「任务场景 → 技能推荐」速查表。
> 当用户指派任何任务时，先在此表中找到匹配场景，再加载对应技能。

---

## 一、写作与内容生产

### 1.1 通用中文写作

| 用户意图 | 推荐技能 | 路径 |
|---|---|---|
| 写文章、博客、回答、故事 | **human-writing** | `skills/community/human-writing/SKILL.md` |
| 去掉 AI 腔/模板味 | **stop-slop** | `skills/core/stop-slop/SKILL.md` |
| 让文本更自然/去 AI 痕迹 | **humanizer-zh** | `skills/core/humanizer-zh/SKILL.md` |
| 知乎/论坛长回答 | **human-writing** | `skills/community/human-writing/SKILL.md` |
| 公众号/博客文章 | **human-writing** | `skills/community/human-writing/SKILL.md` |
| 小说/故事/对白 | **human-writing** | `skills/community/human-writing/SKILL.md` |
| 科普/教程/评测文 | **human-writing** | `skills/community/human-writing/SKILL.md` |
| 口播稿/演讲稿 | **human-writing** | `skills/community/human-writing/SKILL.md` |

### 1.2 英文学术写作

| 用户意图 | 推荐技能 | 路径 |
|---|---|---|
| 论文润色/翻译为 Nature 风格 | **nature-polishing** | `skills/community/nature-skills/skills/nature-polishing/SKILL.md` |
| 添加严格引用 | **nature-citation** | `skills/community/nature-skills/skills/nature-citation/SKILL.md` |
| 论文完整写作流程 | **research-paper-writing** | `skills/community/Research-Paper-Writing-Skills-main/research-paper-writing/SKILL.md` |

### 1.3 内容运营

| 用户意图 | 推荐技能 | 路径 |
|---|---|---|
| X/Twitter 运营 | **x-mastery-mentor** | `skills/community/nuwa-skill/examples/x-mastery-mentor/SKILL.md` |
| 内容传播/病毒式扩散 | **book-berger-contagious** | `skills/community/nuwa-distilled/book-berger-contagious/SKILL.md` |
| SEO 优化 | **qiaomu-seo** | `skills/community/qiaomu-seo/SKILL.md` |
| AI 文案批量生产 | **ai-copywriter** | `full-sources/curated/ai-copywriter/SKILL.md` |

---

## 二、工程与代码

### 2.1 调试与排错

| 用户意图 | 推荐技能 | 路径 |
|---|---|---|
| 通用系统调试 | **systematic-debugging** | `full-sources/official/openai-plugins/plugins/superpowers/skills/systematic-debugging/SKILL.md` |
| Python 调试 | **python-debugpy** | `full-sources/research/hermes-agent/skills/software-development/python-debugpy/SKILL.md` |
| 前端测试调试 | **frontend-testing-debugging** | `full-sources/official/openai-plugins/plugins/build-web-apps/skills/frontend-testing-debugging/SKILL.md` |
| 构建/运行/调试 | **build-run-debug** | `full-sources/official/openai-plugins/plugins/build-macos-apps/skills/build-run-debug/SKILL.md` |
| 系统性错误恢复 | **debugging-and-error-recovery** | `skills/community/agent-skills-main/skills/debugging-and-error-recovery/SKILL.md` |

### 2.2 前端与网页开发

| 用户意图 | 推荐技能 | 路径 |
|---|---|---|
| 截图转 HTML/CSS | **screencoder** | `tools/screencoder/SKILL.md` |
| 前端设计方向 | **frontend-design-direction** | `skills/community/ECC/skills/frontend-design-direction/SKILL.md` |
| 前端幻灯片/网页 PPT | **frontend-slides** | `skills/community/ECC/skills/frontend-slides/SKILL.md` |
| UI Demo 原型 | **ui-demo** | `skills/community/ECC/skills/ui-demo/SKILL.md` |
| Angular 开发 | **angular-developer** | `skills/community/ECC/skills/angular-developer/SKILL.md` |
| Django 开发 | **django-patterns** | `skills/community/ECC/skills/django-patterns/SKILL.md` |
| Laravel 开发 | **laravel-patterns** | `skills/community/ECC/skills/laravel-patterns/SKILL.md` |
| MySQL 开发 | **mysql-patterns** | `skills/community/ECC/skills/mysql-patterns/SKILL.md` |
| 3D 网页 (img→three.js) | **img2threejs** | `skills/community/img2threejs/SKILL.md` |

### 2.3 后端与基础设施

| 用户意图 | 推荐技能 | 路径 |
|---|---|---|
| API 设计 | **api-design** | `skills/community/ECC/skills/api-design/SKILL.md` |
| Kubernetes | **kubernetes-patterns** | `skills/community/ECC/skills/kubernetes-patterns/SKILL.md` |
| Helm Chart | **helm-chart-builder** | `skills/community/alirezarezvani-claude-skills/engineering/helm-chart-builder/SKILL.md` |
| 部署模式 | **deployment-patterns** | `skills/community/ECC/skills/deployment-patterns/SKILL.md` |
| Monorepo 导航 | **monorepo-navigator** | `skills/community/alirezarezvani-claude-skills/engineering/skills/monorepo-navigator/SKILL.md` |
| CI/CD 自动化 | **ci-cd-and-automation** | `skills/community/agent-skills-main/skills/ci-cd-and-automation/SKILL.md` |
| 规范驱动开发 | **spec-kit** | `tools/spec-kit/SKILL.md` |

### 2.4 代码质量与审查

| 用户意图 | 推荐技能 | 路径 |
|---|---|---|
| 代码审查 | **open-code-review** | `skills/community/open-code-review/SKILL.md` |
| 代码变更追溯 | **change-traceability-review** | `full-sources/curated/change-traceability-review/SKILL.md` |
| 代码行血缘追踪 | **trace-file-lineage** | `full-sources/curated/trace-file-lineage/SKILL.md` |

### 2.5 AI/ML 工程

| 用户意图 | 推荐技能 | 路径 |
|---|---|---|
| ML 工程工作流 | **mle-workflow** | `skills/community/ECC/skills/mle-workflow/SKILL.md` |
| 高级 AI Agent 工程 | **ai-agent-engineering** | `skills/community/ai-agent-engineering/SKILL.md` |
| D2L 深度学习实验 | **d2l-lab-backbone** | `skills/community/nuwa-distilled/d2l-lab-backbone/SKILL.md` |
| ML 实验管理 | **ml-experiment** (profile) | `bundles/research-workflow-kit/profiles/ml-experiment.json` |
| 资深数据科学家 | **senior-data-scientist** | `skills/community/alirezarezvani-claude-skills/engineering-team/skills/senior-data-scientist/SKILL.md` |
| 上下文工程 | **context-engineering** | `skills/community/agent-skills-main/skills/context-engineering/SKILL.md` |

---

## 三、研究与科学

### 3.1 科研全生命周期

| 用户意图 | 推荐技能 | 路径 |
|---|---|---|
| 科研总入口/路由 | **research-expert-system** | `skills/core/research-expert-system/SKILL.md` |
| 科研流程总控 | **research-workflow-orchestrator** | `skills/research-workflow-kit/research-workflow-orchestrator/SKILL.md` |
| 文献检索与综述 | **systematic-evidence-synthesis** | `skills/research-workflow-kit/systematic-evidence-synthesis/SKILL.md` |
| 研究问题设计 | **research-question-protocol** | `skills/research-workflow-kit/research-question-protocol/SKILL.md` |
| 可复现分析 | **reproducible-research-analysis** | `skills/research-workflow-kit/reproducible-research-analysis/SKILL.md` |
| 学术诚信/AI 披露 | **academic-integrity-ai-disclosure** | `skills/research-workflow-kit/academic-integrity-ai-disclosure/SKILL.md` |
| 质性研究方法 | **qualitative-mixed-methods** | `skills/research-workflow-kit/qualitative-mixed-methods/SKILL.md` |

### 3.2 科研绘图与数据可视化

| 用户意图 | 推荐技能 | 路径 |
|---|---|---|
| Nature 风格图表 | **nature-figure** | `skills/community/nature-skills/skills/nature-figure/SKILL.md` |
| 科研数据可视化顾问 | **scipilot-figure-skill** | `skills/community/scipilot-figure-skill/SKILL.md` |
| 论文图表 (figures4papers) | **figures4papers** | `full-sources/curated/figures4papers/SKILL.md` |
| 海报 (Scientific) | **pptx-posters** | `skills/community/scientific-agent-skills/skills/pptx-posters/SKILL.md` |

### 3.3 文献搜索

| 用户意图 | 推荐技能 | 路径 |
|---|---|---|
| Nature 学术搜索 | **nature-academic-search** | `skills/community/nature-skills/skills/nature-academic-search/SKILL.md` |
| 全网调研 | **agent-reach** | `skills/community/agent-reach/agent_reach/skill/SKILL.md` |
| 浏览器自动化 | **browser-use** / **playwright** | `skills/community/browser-use/SKILL.md` |

### 3.4 因果推断与审计

| 用户意图 | 推荐技能 | 路径 |
|---|---|---|
| 因果推断/what-if 分析 | **book-what-if-causal-audit** | `skills/community/nuwa-distilled/book-what-if-causal-audit/SKILL.md` |
| 目标试验模拟 | **emulate_target_trial** | `skills/community/nuwa-distilled/book-what-if-causal-audit/scripts/emulate_target_trial.py` |

---

## 四、设计与视觉

### 4.1 综合设计系统

| 用户意图 | 推荐技能 | 路径 |
|---|---|---|
| 海报设计 | **victor-design-system** (poster) | `skills/community/victor-design/SKILL.md` |
| PPT/演示设计 | **victor-design-system** (slides) | `skills/community/victor-design/SKILL.md` |
| 产品 UI 设计 | **victor-design-system** (product-ui) | `skills/community/victor-design/SKILL.md` |
| 社交图文设计 | **victor-design-system** (graphic-text) | `skills/community/victor-design/SKILL.md` |
| 设计评审 | **design-evaluation** | `full-sources/curated/design-evaluation/SKILL.md` |

### 4.2 图像生成

| 用户意图 | 推荐技能 | 路径 |
|---|---|---|
| GPT Image 生图 | **gpt-image-2-skill** | `skills/community/gpt-image-2-skill/SKILL.md` |
| fal.ai 媒体生成 | **fal-ai-media** | `skills/community/ECC/skills/fal-ai-media/SKILL.md` |
| 故事转手绘视频 | **story-to-handdrawn-video** | `full-sources/curated/story-to-handdrawn-video/SKILL.md` |
| 剪影/抠图 | **cutout_subject.py** | `skills/community/victor-design/scripts/cutout_subject.py` |

### 4.3 网页设计

| 用户意图 | 推荐技能 | 路径 |
|---|---|---|
| 流行网页设计参考 | **popular-web-designs** | `full-sources/curated/popular-web-designs/SKILL.md` |
| UI/UX Pro | **ui-ux-pro-max** | `skills/community/ui-ux-pro-max/SKILL.md` |
| 动效系统 | **motion-ui** / **motion-patterns** | `skills/community/ECC/skills/motion-ui/SKILL.md` |
| 无障碍设计 | **better-accessibility** | `full-sources/curated/better-accessibility/SKILL.md` |
|  Bento 幻灯片 | **bento-slides** | `full-sources/curated/bento-slides/SKILL.md` |

---

## 五、视频与动效

| 用户意图 | 推荐技能 | 路径 |
|---|---|---|
| 电影级产品视频 | **video-shotcraft** | `full-sources/curated/video-shotcraft/SKILL.md` |
| Remotion 视频制作 | **remotion-video-creation** | `skills/community/ECC/skills/remotion-video-creation/SKILL.md` |
| 通用视频编辑 | **video-editing** | `skills/community/ECC/skills/video-editing/SKILL.md` |
| 视频数据库管理 | **videodb** | `skills/community/ECC/skills/videodb/SKILL.md` |
| Manim 数学动画 | **manim-video** | `skills/community/ECC/skills/manim-video/SKILL.md` |
| 动效基础 | **motion-foundations** | `skills/community/ECC/skills/motion-foundations/SKILL.md` |
| 高级动效 | **motion-advanced** | `skills/community/ECC/skills/motion-advanced/SKILL.md` |
| 本地视频编辑工具 | **opencut** | `tools/opencut/SKILL.md` |
| Claude 视频生成 | **claude-video** | `skills/community/claude-video/SKILL.md` |
| Demo 视频 | **demo-video** | `skills/community/alirezarezvani-claude-skills/engineering/demo-video/skills/demo-video/SKILL.md` |
| 产品视频/油动效 | **oil-motion** | `full-sources/curated/oil-motion/SKILL.md` |

---

## 六、文档、数据与演示

### 6.1 PPT/演示文稿

| 用户意图 | 推荐技能 | 路径 |
|---|---|---|
| 咨询风格 PPTX | **cyber-ppt** | `full-sources/curated/cyberppt/SKILL.md` |
| 论文转 Nature PPT | **nature-paper2ppt** | `skills/community/nature-skills/skills/nature-paper2ppt/SKILL.md` |
| 通用 PPTX 制作 | **pptx** | `skills/community/skills-main/skills/pptx/SKILL.md` |
| 科研海报 PPTX | **pptx-posters** | `skills/community/scientific-agent-skills/skills/pptx-posters/SKILL.md` |
| 归藏网页 PPT | **guizang-ppt-skill** | `skills/community/guizang-ppt-skill-main/SKILL.md` |
| Bolt 幻灯片 | **bolt-slides** | `full-sources/curated/bolt-slides/SKILL.md` |
| 小说大纲/文档 | **novel-outline** | `full-sources/curated/novel-outline/SKILL.md` |

### 6.2 数据分析

| 用户意图 | 推荐技能 | 路径 |
|---|---|---|
| Dashboard 构建 | **dashboard-builder** | `skills/community/ECC/skills/dashboard-builder/SKILL.md` |
| 数据抓取 | **data-scraper-agent** | `skills/community/ECC/skills/data-scraper-agent/SKILL.md` |
| 可复现研究分析 | **reproducible-research-analysis** | `skills/research-workflow-kit/reproducible-research-analysis/SKILL.md` |
| 任何文档处理 | **anydoc** | `full-sources/curated/anydoc/SKILL.md` |

---

## 七、商业与策略

| 用户意图 | 推荐技能 | 路径 |
|---|---|---|
| 市场调研 | **market-research** | `skills/community/ECC/skills/market-research/SKILL.md` |
| 营销方案 | **marketing-campaign** | `skills/community/ECC/skills/marketing-campaign/SKILL.md` |
| 竞品分析 | **competitive-platform-analysis** | `skills/community/ECC/skills/competitive-platform-analysis/SKILL.md` |
| 竞品报告 | **competitive-report-structure** | `skills/community/ECC/skills/competitive-report-structure/SKILL.md` |
| 品牌发现 | **brand-discovery** | `skills/community/ECC/skills/brand-discovery/SKILL.md` |
| 营销获客 | **marketing-demand-acquisition** | `skills/community/alirezarezvani-claude-skills/marketing-skill/skills/marketing-demand-acquisition/SKILL.md` |
| Landing Page | **landing** | `skills/community/alirezarezvani-claude-skills/marketing/landing/skills/landing/SKILL.md` |
| 商业运营 | **business-operations-skills** | `skills/community/alirezarezvani-claude-skills/business-operations/skills/business-operations-skills/SKILL.md` |
| 商业技能 | **commercial-skills** | `skills/community/alirezarezvani-claude-skills/commercial/skills/commercial-skill/SKILL.md` |
| 财务/计费 | **finance-billing-ops** / **customer-billing-ops** | `skills/community/ECC/skills/finance-billing-ops/SKILL.md` |
| 产品分析师 | **cs-product-analyst** | `skills/community/alirezarezvani-claude-skills/.gemini/skills/cs-product-analyst/SKILL.md` |
| 公司 OS | **company-os** | `skills/community/alirezarezvani-claude-skills/c-level-advisor/skills/company-os/SKILL.md` |

### 决策与战略思维

| 用户意图 | 推荐技能 | 路径 |
|---|---|---|
| 重要决策/方案比较 | **ai-cabinet** | `skills/core/ai-cabinet/SKILL.md` |
| 鬼谷子式谈判/谋略 | **guiguzi** | `skills/community/guiguzi/SKILL.md` |
| 渔樵问对式追问 | **yuqiao-wendui** | `skills/community/yuqiao-wendui/SKILL.md` |
| 高层决策诊断 | **challenge** | `skills/community/alirezarezvani-claude-skills/c-level-advisor/executives/challenge/SKILL.md` |
| 组织健康诊断 | **org-health-diagnostic** | `skills/community/alirezarezvani-claude-skills/c-level-advisor/skills/org-health-diagnostic/SKILL.md` |

---

## 八、安全与合规

| 用户意图 | 推荐技能 | 路径 |
|---|---|---|
| 综合安全审计 | **security-audit** | `skills/community/buildwithclaude-hub/plugins/agent-triforce/skills/security-audit/SKILL.md` |
| 技能安全审计 | **skill-security-auditor** | `skills/community/alirezarezvani-claude-skills/engineering/skills/skill-security-auditor/SKILL.md` |
| 渗透测试 | **security-pen-testing** | `skills/community/alirezarezvani-claude-skills/engineering-team/skills/security-pen-testing/SKILL.md` |
| 安全扫描 | **security-scan** | `full-sources/official/openai-plugins/plugins/codex-security/skills/security-scan/SKILL.md` |
| 深度安全扫描 | **deep-security-scan** | `full-sources/official/openai-plugins/plugins/codex-security/skills/deep-security-scan/SKILL.md` |
| 漏洞报告 | **vulnerability-writeup** | `full-sources/official/openai-plugins/plugins/codex-security/skills/vulnerability-writeup/SKILL.md` |
| 安全加固 | **propose-security-hardening** | `full-sources/official/openai-plugins/plugins/codex-security/skills/propose-security-hardening/SKILL.md` |
| 隐私审计 (Context Flow) | **book-privacy-context-flow-audit** | `skills/community/nuwa-distilled/book-privacy-context-flow-audit/SKILL.md` |
| AI 安全控制审计 | **book-safer-world-control-audit** | `skills/community/nuwa-distilled/book-safer-world-control-audit/SKILL.md` |
| 伦理算法约束 | **book-ethical-algorithm-constraints** | `skills/community/nuwa-distilled/book-ethical-algorithm-constraints/SKILL.md` |
| ISO 27001 ISMS | **information-security-manager-iso27001** | `skills/community/alirezarezvani-claude-skills/ra-qm-team/skills/information-security-manager-iso27001/SKILL.md` |
| ISMS 审计 | **isms-audit-expert** | `skills/community/alirezarezvani-claude-skills/ra-qm-team/skills/isms-audit-expert/SKILL.md` |
| 合规 OS | **compliance-os** | `skills/community/alirezarezvani-claude-skills/compliance-os/skills/compliance-os/SKILL.md` |
| DeepSec 安全 | **deepsec** | `skills/community/deepsec/SKILL.md` |
| 高风险分析 | **high-stakes-analytics** | `full-sources/curated/high-stakes-analytics/SKILL.md` |
| 人工审查 | **human-review** | `full-sources/curated/human-review/SKILL.md` |
| 无障碍审查 | **better-accessibility** | `full-sources/curated/better-accessibility/SKILL.md` |
| 密钥管理 | **secrets-vault-manager** | `skills/community/alirezarezvani-claude-skills/engineering/skills/secrets-vault-manager/SKILL.md` |

---

## 九、编排与协调

| 用户意图 | 推荐技能 | 路径 |
|---|---|---|
| 多 Agent 任务拆分 | **multi-agent-orchestration** | `skills/core/multi-agent-orchestration/SKILL.md` |
| 官方来源路由 | **official-source-router** | `skills/core/official-source-router/SKILL.md` |
| 技能搜索路由 | **universal-skill-router** | `SKILL.md` (本文件) |
| 记忆系统 | **memory-system** | `skills/community/memory-system/SKILL.md` |
| Agent 自主能力 | **superpowers-main** | `skills/community/superpowers-main/SKILL.md` |
| Prime Agent | **prime-agent** | `skills/community/prime-agent/SKILL.md` |

---

## 十、工具类

| 用户意图 | 推荐技能 | 路径 |
|---|---|---|
| 本地视频编辑器 | **opencut** | `tools/opencut/SKILL.md` |
| 远程桌面 | **rustdesk** | `tools/rustdesk/SKILL.md` |
| 规范驱动开发 | **spec-kit** | `tools/spec-kit/SKILL.md` |
| 代码库 Wiki 生成 | **openwiki** | `tools/openwiki/SKILL.md` |
| 截图转代码 | **screencoder** | `tools/screencoder/SKILL.md` |
| LLM Wiki 技能 | **llm-wiki-skill** | `skills/community/llm-wiki-skill-main/SKILL.md` |
| Draw.io 图表 | **drawio-skill** | `skills/community/drawio-skill/SKILL.md` |

---

## 十一、特殊能力

| 用户意图 | 推荐技能 | 路径 |
|---|---|---|
| 深度调研任何主题 | **agent-reach** | `skills/community/agent-reach/agent_reach/skill/SKILL.md` |
| 造一个"人物思维"Skill | **huashu-nuwa (女娲)** | `skills/community/nuwa-skill/SKILL.md` |
| 理解任何复杂事物 | **understand-anything** | `skills/community/understand-anything/SKILL.md` |
| 文档浏览器 GIF | **record-browser-gif** | `full-sources/curated/record-browser-gif/SKILL.md` |
| 英文简化 | **simple-english** | `full-sources/curated/simple-english/SKILL.md` |
| 免费域名服务 | **free-domain-service** | `skills/community/free-domain-service/SKILL.md` |
| GSAP 动画 | **gsap-skills** | `skills/community/gsap-skills/SKILL.md` |
| 全流程设计 | **epic-design** | `skills/community/alirezarezvani-claude-skills/engineering-team/skills/epic-design/SKILL.md` |
| GStack 全栈 | **gstack** | `skills/community/gstack/SKILL.md` |
|  taste 审美 | **taste** | `skills/community/ECC/skills/taste/SKILL.md` |
| 深度辅导 (DeepTutor) | **DeepTutor** | `skills/community/DeepTutor/SKILL.md` |
| 科研学长姐会诊 | **ai-research-senpai-council** | `skills/community/nuwa-distilled/ai-research-senpai-council/SKILL.md` |
| 个人实验工作台 | **book-tools-of-titans-experiment-lab** | `skills/community/nuwa-distilled/book-tools-of-titans-experiment-lab/SKILL.md` |
| 治理commons制度设计 | **book-governing-commons-institution-design** | `skills/community/nuwa-distilled/book-governing-commons-institution-design/SKILL.md` |

---

## 路由原则

1. **先场景后技能**：先确定用户要完成什么场景任务，再在该场景内找最佳技能
2. **最小组队**：1 主 + ≤3 互补，不要一次加载所有匹配技能
3. **主技能优先**：每个场景表的第一项通常是首选主技能
4. **中文写作必过 stop-slop**：任何中文输出交付前，检查 AI 腔
5. **科研必过人类门禁**：问题、数据、方法、引用和发布都需人工确认
6. **安全类任务双重审查**：先用领域技能执行，再用安全技能审查
7. **不确定时问用户**：意图模糊且会改变方案时，先确认再推荐

---

## 十二、代码质量与架构（新增来源: antigravity + wondelai）

### 12.1 代码整洁与重构

| 用户意图 | 🎯 主技能 | 🔧 支撑 | 🔍 审查 |
|---|---|---|---|
| 重构代码 | clean-code, code-refactoring-refactor-clean | code-reviewer | architect-review |
| 代码审查 | code-reviewer, open-code-review | architect-review | change-traceability-review |
| 架构设计 | architect-review, architecture-patterns | brainstorming, plan-writing | clean-architecture, domain-driven-design |
| DDD 领域建模 | domain-driven-design | clean-architecture, ddia-systems | — |
| TDD 测试驱动 | test-driven-development | testing-patterns | verification-before-completion |

### 12.2 技术栈专项

| 用户意图 | 🎯 主技能 | 🔧 支撑 | 🔍 审查 |
|---|---|---|---|
| React 开发 | react-patterns, react-best-practices | frontend-developer | code-reviewer |
| Python 开发 | python-patterns, python-performance-optimization | python-packaging | code-reviewer |
| TypeScript 开发 | typescript-expert | react-patterns, clean-code | code-reviewer |
| Docker 容器 | docker-expert | aws-serverless | — |
| AWS 云部署 | aws-serverless | docker-expert | — |
| SQL 优化 | sql-optimization-patterns | ddia-systems | — |
| 前端性能 | react-best-practices, web-performance-optimization | high-perf-browser | — |
| Mermaid 图表 | mermaid-expert | — | — |

### 12.3 DevOps 与运维

| 用户意图 | 🎯 主技能 | 🔧 支撑 | 🔍 审查 |
|---|---|---|---|
| 部署上线 | docker-expert, aws-serverless | ci-cd-and-automation | — |
| 监控可观测 | observability-engineer, distributed-tracing | grafana-dashboards, slo-implementation | — |
| 故障响应 | incident-responder, postmortem-writing | slo-implementation | — |
| 浏览器自动化 | playwright | browser-use, agent-browser | — |

---

## 十三、商业战略（新增来源: wondelai）

| 用户意图 | 🎯 主技能 | 🔧 支撑 | 🔍 审查 |
|---|---|---|---|
| 创业方案 | blue-ocean-strategy, good-strategy-bad-strategy | crossing-the-chasm, hundred-million-offers | — |
| 产品设计/用户习惯 | hooked-ux, design-sprint | conversion-optimization, continuous-discovery | — |
| 团队管理 | high-output-management | good-strategy-bad-strategy | — |
| 病毒传播/口碑 | contagious, book-berger-contagious | content-marketer, marketing-campaign | — |
| 转化优化/CRO | conversion-optimization | ab-test-setup, landing | — |
| SEO 优化 | seo-structure-architect, seo-audit | content-marketer, programmatic-seo | — |
| 内容营销 | content-marketer, copywriting | seo-structure-architect | — |

---

## 十四、量化与 AI（新增来源: antigravity）

| 用户意图 | 🎯 主技能 | 🔧 支撑 | 🔍 审查 |
|---|---|---|---|
| 量化交易/金融建模 | quant-analyst | data-scientist, backtesting-frameworks | — |
| 数据科学/建模 | data-scientist | python-patterns, sql-optimization-patterns | — |
| RAG/向量数据库 | rag-engineer | langgraph, prompt-engineer | — |
| 头脑风暴/创意 | brainstorming | plan-writing | — |

---

## 十五、设计与 Figma（新增来源: VoltAgent/awesome-agent-skills）

| 用户意图 | 🎯 主技能 | 🔧 支撑 | 🔍 审查 |
|---|---|---|---|
| Figma 设计→代码 | figma-implement-design, figma-use | figma-create-design-system-rules | — |
| 游戏开发 | game-design | unity-developer, godot-gdscript-patterns | — |
| 无障碍/WCAG | accessibility-compliance-accessibility-audit | better-accessibility | — |
| 文档处理 (Word/PDF) | pdf, docx | anydoc | — |


---

## SOURCE · `arena/01a060a3-skill:bundles/newcomer-starter-pack/README.md`

<!-- blob: d667a0f61a570a9ad322c70993bc84eb745541d6; bytes: 35590 -->

# 🎁 Agent 新手大礼包：100 项核心工作技能

这是一个可以直接解压、离线阅读的基础组合。它收录 **恰好 100 项**本仓库本地可用的核心技能，覆盖技能发现、计划、实现、测试、研究、写作、设计、安全、产品与交付验证。机器清单见 [`manifest.json`](manifest.json)，可下载包为 [`newcomer-starter-pack.tar.gz`](newcomer-starter-pack.tar.gz)。

> **强烈建议：频繁检索、明确点名、完整应用。** 对每项非琐碎任务，都应主动寻找匹配技能，并在工作记录中明确写出本轮调用了哪些技能、分别用在哪一步、如何按其完整流程执行、取得了什么验证证据。不要只说“参考过”，也不要只列名字而不落实。

> **但不要一次吞下 100 项。** “完整应用”指完整执行**本轮选中技能**的关键步骤，不是把全部技能同时塞进上下文。通常使用 1 个主技能，并按需增加研究、制作、审查各 1 个，合计通常不超过 4 个。需要换阶段时再重新搜索和换组。

## 解压与使用

```bash
tar -xzf bundles/newcomer-starter-pack/newcomer-starter-pack.tar.gz
cd newcomer-starter-pack
less START_HERE.md
```

解压目录中的 `skills/` 是 100 个独立包；`MANIFEST.json` 记录顺序、分类、来源路径、描述和 SHA-256，`LICENSE_AND_ATTRIBUTION.md` 与 `THIRD_PARTY_NOTICE.md` 说明许可核验边界。把该目录配置为 Agent 的技能搜索目录，或只复制当前任务需要的包。

## 新会话必须先做的吸收报告

把以下要求原样交给新会话中的工作者：

```text
请先阅读 START_HERE.md 与 MANIFEST.json，只扫描 100 项技能的元数据，不要一次加载全部正文。
在开始实质工作前，请提交“技能吸收与调用报告”，必须回答：
1. 你如何消化/吸收了现有技能：看了哪些入口和元数据，如何结合当前项目筛选，完整阅读了哪些 SKILL.md；
2. 本轮你将明确调用哪些技能：逐项写出准确技能名、选择原因、负责阶段和预期制品；
3. 后续你将如何完整应用：逐项列出会落实的关键步骤、质量门禁、验证命令/证据与失败回退；
4. 哪些候选技能本轮不调用，以及为什么不需要，避免为了显得勤奋而堆叠上下文。
后续每次任务阶段变化时重新检索；交付时报告实际调用结果，而不是只重复计划。
```

推荐报告格式：

```markdown
## 技能吸收与调用报告
- 元数据吸收：已扫描 100/100；当前任务关键词：……
- 完整阅读：`主技能`、`互补技能 A`、`互补技能 B`（仅列实际打开的正文）
- 明确调用：
  - `技能名` → 负责阶段 / 选择依据 / 预期制品
- 完整应用计划：
  - `技能名` → 关键步骤 / 质量门禁 / 验证证据 / 失败回退
- 本轮未调用：候选技能及不调用原因
- 交付回报：实际执行、验证结果、偏差与剩余风险
```

## 正确的高频使用节奏

1. **任务进入时**：写清领域、交付物、方法与风险，先搜索再开工。
2. **阶段切换时**：从研究转制作、从实现转审查时重新检索，明确换组。
3. **执行过程中**：按选中 `SKILL.md` 的关键步骤产出制品，不跳过不方便的门禁。
4. **遇到失败时**：调用调试、评审或风险技能，记录证据，不反复盲试。
5. **交付之前**：调用验证技能，用真实命令、页面、数据或引用证明完成。
6. **交付之后**：报告实际用了什么、没验证什么、下一会话应继续调用什么。

## 精确收录清单（100/100）

### Agent 基础与编排（15）

| # | 技能 | 分类 | 核心用途 |
|---:|---|---|---|
| 1 | [`universal-skill-router`](../../SKILL.md) | agents-orchestration | 面向任意项目的技能检索、领域适配和最小专家组编排入口。用于在大型技能仓库中根据真实任务选择少量互补技能，建立制品契约与验证门禁，避免把历史项目假设带入新方向。 |
| 2 | [`using-agent-skills`](../../skills/community/agent-skills-main/skills/using-agent-skills/SKILL.md) | agents-orchestration | Discovers and invokes agent skills. Use when starting a session or when you need to discover which skill applies to the current task. This is the meta-skill that governs how all o… |
| 3 | [`planning-and-task-breakdown`](../../skills/community/agent-skills-main/skills/planning-and-task-breakdown/SKILL.md) | agents-orchestration | Breaks work into ordered tasks. Use when you have a spec or clear requirements and need to break work into implementable tasks. Use when a task feels too large to start, when you… |
| 4 | [`brainstorming`](../../skills/community/superpowers-main/skills/brainstorming/SKILL.md) | design-media | You MUST use this before any creative work - creating features, building components, adding functionality, or modifying behavior. Explores user intent, requirements and design bef… |
| 5 | [`writing-plans`](../../skills/community/superpowers-main/skills/writing-plans/SKILL.md) | writing-content | Use when you have a spec or requirements for a multi-step task, before touching code |
| 6 | [`executing-plans`](../../skills/community/superpowers-main/skills/executing-plans/SKILL.md) | general | Use when you have a written implementation plan to execute in a separate session with review checkpoints |
| 7 | [`verification-before-completion`](../../skills/community/superpowers-main/skills/verification-before-completion/SKILL.md) | general | Use when about to claim work is complete, fixed, or passing, before committing or creating PRs - requires running verification commands and confirming output before making any suc… |
| 8 | [`multi-agent-orchestration`](../../skills/core/multi-agent-orchestration/SKILL.md) | agents-orchestration | 为确实可并行、需要上下文隔离或独立红队的复杂任务设计最小多 Agent 团队，定义职责、文件边界、制品契约、合并顺序和验证门禁。 |
| 9 | [`dispatching-parallel-agents`](../../skills/community/superpowers-main/skills/dispatching-parallel-agents/SKILL.md) | agents-orchestration | Use when facing 2+ independent tasks that can be worked on without shared state or sequential dependencies |
| 10 | [`subagent-driven-development`](../../skills/community/superpowers-main/skills/subagent-driven-development/SKILL.md) | agents-orchestration | Use when executing implementation plans with independent tasks in the current session |
| 11 | [`ai-cabinet-decision-making`](../../skills/core/ai-cabinet/SKILL.md) | business-strategy | 用五个独立席位对重要决策、方案比较、路线选择和高不确定性计划进行第一性原理追问、红队攻击、机会分析、外行清晰度审查与执行拆解，再由主席给出有条件建议。 |
| 12 | [`spec-driven-development`](../../skills/community/agent-skills-main/skills/spec-driven-development/SKILL.md) | agents-orchestration | Creates specs before coding. Use when starting a new project, feature, or significant change and no specification exists yet. Use when requirements are unclear, ambiguous, or only… |
| 13 | [`search-first`](../../skills/community/ECC/skills/search-first/SKILL.md) | agents-orchestration | Research-before-coding workflow. Search for existing tools, libraries, and patterns before writing custom code. Invokes the researcher agent. |
| 14 | [`official-source-router`](../../skills/official-source-router/SKILL.md) | agents-orchestration | Route product- and platform-specific work across 859 pinned skill entry paths from OpenAI, Vercel, and Microsoft official repositories. Use when selecting a first-party workflow,… |
| 15 | [`skill-creator`](../../skills/community/skills-main/skills/skill-creator/SKILL.md) | engineering-code | Create new skills, modify and improve existing skills, and measure skill performance. Use when users want to create a skill from scratch, edit, or optimize an existing skill, run… |

### 工程与代码（20）

| # | 技能 | 分类 | 核心用途 |
|---:|---|---|---|
| 16 | [`daily-coding`](../../skills/community/claude-scholar/skills/daily-coding/SKILL.md) | writing-content | Use for everyday coding tasks that involve writing or modifying source code. |
| 17 | [`tdd-guide`](../../skills/community/alirezarezvani-claude-skills/engineering-team/skills/tdd-guide/SKILL.md) | engineering-code | Test-driven development skill for writing unit tests, generating test fixtures and mocks, analyzing coverage gaps, and guiding red-green-refactor workflows across Jest, Pytest, JU… |
| 18 | [`testing`](../../skills/community/buildwithclaude-hub/plugins/cc-best/skills/testing/SKILL.md) | engineering-code | Testing strategies and methodologies including TDD, E2E testing, and multi-framework support |
| 19 | [`systematic-debugging`](../../skills/community/superpowers-main/skills/systematic-debugging/SKILL.md) | engineering-code | Use when encountering any bug, test failure, or unexpected behavior, before proposing fixes |
| 20 | [`browser-testing-with-devtools`](../../skills/community/agent-skills-main/skills/browser-testing-with-devtools/SKILL.md) | engineering-code | Tests in real browsers via Chrome DevTools MCP. Use when building or debugging anything that runs in a browser. Use when you need to inspect the DOM, capture console errors, analy… |
| 21 | [`code-review-excellence`](../../skills/community/claude-scholar/skills/code-review-excellence/SKILL.md) | engineering-code | This skill should be used when the user asks to review a diff or pull request, write review comments, audit code quality, establish review standards, or improve how a team perform… |
| 22 | [`requesting-code-review`](../../skills/community/superpowers-main/skills/requesting-code-review/SKILL.md) | engineering-code | Use when completing tasks, implementing major features, or before merging to verify work meets requirements |
| 23 | [`receiving-code-review`](../../skills/community/superpowers-main/skills/receiving-code-review/SKILL.md) | engineering-code | Use when receiving code review feedback, before implementing suggestions, especially if feedback seems unclear or technically questionable - requires technical rigor and verificat… |
| 24 | [`code-simplification`](../../skills/community/agent-skills-main/skills/code-simplification/SKILL.md) | engineering-code | Simplifies code for clarity. Use when refactoring code for clarity without changing behavior. Use when code works but is harder to read, maintain, or extend than it should be. Use… |
| 25 | [`coding-standards`](../../skills/community/ECC/skills/coding-standards/SKILL.md) | engineering-code | Baseline cross-project coding conventions for naming, readability, immutability, and code-quality review. Use detailed frontend or backend skills for framework-specific patterns. |
| 26 | [`using-git-worktrees`](../../skills/community/superpowers-main/skills/using-git-worktrees/SKILL.md) | engineering-code | Use when starting feature work that needs isolation from current workspace or before executing implementation plans - ensures an isolated workspace exists via native tools or git… |
| 27 | [`git-workflow-and-versioning`](../../skills/community/agent-skills-main/skills/git-workflow-and-versioning/SKILL.md) | engineering-code | Structures git workflow practices. Use when making any code change. Use when committing, branching, resolving conflicts, or when you need to organize work across multiple parallel… |
| 28 | [`github-automation`](../../skills/community/buildwithclaude-hub/plugins/all-skills/skills/github-automation/SKILL.md) | engineering-code | Automate GitHub repositories, issues, pull requests, branches, CI/CD, and permissions via Rube MCP (Composio). Manage code workflows, review PRs, search code, and handle deploymen… |
| 29 | [`ci-cd-pipeline-builder`](../../skills/community/alirezarezvani-claude-skills/engineering/skills/ci-cd-pipeline-builder/SKILL.md) | engineering-code | Generate pragmatic CI/CD pipelines from detected project stack signals — fast baseline generation, repeatable checks, environment-aware deployment stages. Use when setting up CI f… |
| 30 | [`docker-patterns`](../../skills/community/ECC/skills/docker-patterns/SKILL.md) | agents-orchestration | Docker and Docker Compose patterns for local development, hardened CLI installer harnesses, container security, networking, volumes, and multi-service orchestration. Use when crea… |
| 31 | [`api-and-interface-design`](../../skills/community/agent-skills-main/skills/api-and-interface-design/SKILL.md) | engineering-code | Guides stable API and interface design. Use when designing APIs, module boundaries, or any public interface. Use when creating REST or GraphQL endpoints, defining type contracts b… |
| 32 | [`frontend-patterns`](../../skills/community/ECC/skills/frontend-patterns/SKILL.md) | engineering-code | Frontend development patterns for React, Next.js, state management, performance optimization, and UI best practices. |
| 33 | [`backend-patterns`](../../skills/community/ECC/skills/backend-patterns/SKILL.md) | engineering-code | Backend architecture patterns, API design, database optimization, and server-side best practices for Node.js, Express, and Next.js API routes. |
| 34 | [`python-patterns`](../../skills/community/ECC/skills/python-patterns/SKILL.md) | engineering-code | Pythonic idioms, PEP 8 standards, type hints, and best practices for building robust, efficient, and maintainable Python applications. |
| 35 | [`performance-optimization`](../../skills/community/agent-skills-main/skills/performance-optimization/SKILL.md) | documents-data | Optimizes application performance across frontend, backend, queries, and databases. Use when performance requirements exist, when you suspect performance regressions, when Core We… |

### 文档与数据（8）

| # | 技能 | 分类 | 核心用途 |
|---:|---|---|---|
| 36 | [`doc-coauthoring`](../../skills/community/skills-main/skills/doc-coauthoring/SKILL.md) | writing-content | Guide users through a structured workflow for co-authoring documentation. Use when user wants to write documentation, proposals, technical specs, decision docs, or similar structu… |
| 37 | [`make-pdf`](../../skills/community/gstack/make-pdf/SKILL.md) | documents-data | Turn any markdown file into a publication-quality PDF. (gstack) |
| 38 | [`document-generate`](../../skills/community/gstack/document-generate/SKILL.md) | documents-data | Generate missing documentation from scratch for a feature, module, or entire project. (gstack) |
| 39 | [`convert-documents-to-markdown`](../../skills/community/anydoc-main/skills/convert-documents-to-markdown/SKILL.md) | documents-data | Convert Word (.doc, .docx), PowerPoint (.ppt, .pptx), Excel (.xls, .xlsx), OpenDocument (.odt, .ods, .odp), RTF, EPUB, CSV, and PDF files to GitHub-Flavored Markdown. Use when a t… |
| 40 | [`markdown-mermaid-writing`](../../skills/community/scientific-agent-skills/skills/markdown-mermaid-writing/SKILL.md) | writing-content | Comprehensive markdown and Mermaid diagram writing skill. Use when creating any scientific document, report, analysis, or visualization. Establishes text-based diagrams as the def… |
| 41 | [`slides`](../../skills/community/ui-ux-pro-max/cli/assets/skills/slides/SKILL.md) | design-media | Create strategic HTML presentations with Chart.js, design tokens, responsive layouts, copywriting formulas, and contextual slide strategies. |
| 42 | [`exploratory-data-analysis`](../../skills/community/scientific-agent-skills/skills/exploratory-data-analysis/SKILL.md) | documents-data | Perform bounded, local exploratory analysis of explicitly supported scientific files. Use for redacted CSV/TSV/JSON profiles; optional NumPy, HDF5, FASTA/FASTQ, and basic image me… |
| 43 | [`sql-database-assistant`](../../skills/community/alirezarezvani-claude-skills/engineering/skills/sql-database-assistant/SKILL.md) | documents-data | Use when the user asks to write SQL queries, optimize database performance, generate migrations, explore database schemas, or work with ORMs like Prisma, Drizzle, TypeORM, or SQLA… |

### 研究与科学（10）

| # | 技能 | 分类 | 核心用途 |
|---:|---|---|---|
| 44 | [`research-expert-system`](../../skills/research-expert-system/SKILL.md) | research-science | 世界级通用科研能力路由器。用于从选题、文献检索、系统综述、研究设计、实验执行、数据分析、科研绘图、论文写作、引用核验、同行评审、rebuttal、复现归档到学术汇报的完整研究生命周期；根据任务选择 ARS、Nature Skills、Scientific Agent Skills、ARIS、AI Research Skills、PaperSpine、Pap… |
| 45 | [`research-ideation`](../../skills/community/claude-scholar/skills/research-ideation/SKILL.md) | research-science | This skill should be used when the user asks to "brainstorm research ideas", "use 5W1H framework", "identify research gaps", "conduct gap analysis", "start research project", "con… |
| 46 | [`deep-research`](../../skills/community/ECC/skills/deep-research/SKILL.md) | research-science | Multi-source deep research using firecrawl and exa MCPs. Searches the web, synthesizes findings, and delivers cited reports with source attribution. Use when the user wants thorou… |
| 47 | [`literature-review`](../../skills/community/scientific-agent-skills/skills/literature-review/SKILL.md) | research-science | Conduct comprehensive, systematic literature reviews using multiple academic databases (PubMed, arXiv, bioRxiv, Semantic Scholar, etc.). This skill should be used when conducting… |
| 48 | [`citation-management`](../../skills/community/scientific-agent-skills/skills/citation-management/SKILL.md) | research-science | Comprehensive citation management for academic research. Search OpenAlex, PubMed, and Google Scholar for papers, extract accurate metadata, validate citations, and generate proper… |
| 49 | [`citation-verification`](../../skills/community/claude-scholar/skills/citation-verification/SKILL.md) | research-science | This skill provides reference guidance for citation verification in academic writing. Use when the user asks about "citation verification best practices", "how to verify reference… |
| 50 | [`scientific-writing`](../../skills/community/scientific-agent-skills/skills/scientific-writing/SKILL.md) | writing-content | Draft, revise, and audit scientific manuscripts or reports with explicit evidence provenance, reporting-guideline coverage, authorship accountability, confidentiality controls, an… |
| 51 | [`statistical-analysis`](../../skills/community/scientific-agent-skills/skills/statistical-analysis/SKILL.md) | research-science | Guided statistical analysis for research data - test selection, assumption checking, effect sizes, power analysis, Bayesian alternatives, and APA-formatted reporting. Use whenever… |
| 52 | [`experimental-design`](../../skills/community/scientific-agent-skills/skills/experimental-design/SKILL.md) | design-media | Design experiments and studies BEFORE data is collected — choosing a design, randomizing, blocking, and laying out treatment combinations so results are interpretable. Use wheneve… |
| 53 | [`research-paper-writing`](../../skills/community/Research-Paper-Writing-Skills-main/research-paper-writing/SKILL.md) | research-science | Improve academic paper writing quality for ML/CV/NLP-style papers with clear section structure, paragraph flow, and reviewer-facing presentation. Use when drafting or revising Abs… |

### 写作与内容（10）

| # | 技能 | 分类 | 核心用途 |
|---:|---|---|---|
| 54 | [`human-writing`](../../skills/community/human-writing/SKILL.md) | writing-content | 通用中文创作与改稿 Skill。用于知乎回答、论坛长帖、公众号文章、博客、评论、人物故事、历史叙事、新闻与行业解读、科普、教程、评测、个人叙事、小说、故事、对白、口播和演讲稿。默认写成一个见过事、查过材料、愿意把来龙去脉讲清楚的人在说话，重点保留中文互联网长回答与长帖的活人感和自然中文韵律，避免空泛的机构腔、喊口号式演说腔、营销腔和模型腔。非虚构长文先检查… |
| 55 | [`humanizer-zh`](../../skills/humanizer-zh/SKILL.md) | writing-content | 去除文本中的 AI 生成痕迹。适用于编辑或审阅文本，使其听起来更自然、更像人类书写。 基于维基百科的"AI 写作特征"综合指南。检测并修复以下模式：夸大的象征意义、 宣传性语言、以 -ing 结尾的肤浅分析、模糊的归因、破折号过度使用、三段式法则、 AI 词汇、否定式排比、过多的连接性短语。 |
| 56 | [`stop-slop`](../../skills/stop-slop/SKILL.md) | general | 起草、编辑或审阅散文时识别并删除常见 AI 模板腔，包括空泛开场、公式结构、虚假深度、模糊归因、节奏单一、过度修辞和可删内容，同时保留事实、含义与目标语气。 |
| 57 | [`copywriting`](../../skills/community/boraoztunc-skills/copywriting/SKILL.md) | writing-content | When the user wants to write, rewrite, or improve marketing copy for any page — including homepage, landing pages, pricing pages, feature pages, about pages, or product pages. Als… |
| 58 | [`copy-editing`](../../skills/community/boraoztunc-skills/copy-editing/SKILL.md) | writing-content | When the user wants to edit, review, or improve existing marketing copy. Also use when the user mentions 'edit this copy,' 'review my copy,' 'copy feedback,' 'proofread,' 'polish… |
| 59 | [`content-research-writer`](../../skills/community/buildwithclaude-hub/plugins/all-skills/skills/content-research-writer/SKILL.md) | writing-content | Assists in writing high-quality content by conducting research, adding citations, improving hooks, iterating on outlines, and providing real-time feedback on each section. Transfo… |
| 60 | [`article-writing`](../../skills/community/ECC/skills/article-writing/SKILL.md) | writing-content | Write articles, guides, blog posts, tutorials, newsletter issues, and other long-form content in a distinctive voice derived from supplied examples or brand guidance. Use when the… |
| 61 | [`writing`](../../skills/community/WRITING.md-main/skills/writing/SKILL.md) | writing-content | Draft, revise, audit, or transform human-facing prose: articles, blogs, documentation, criticism, essays, email, marketing and SEO copy, summaries, scripts, application materials,… |
| 62 | [`writing-anti-ai`](../../skills/community/claude-scholar/skills/writing-anti-ai/SKILL.md) | writing-content | This skill should be used when the user asks to "remove AI writing patterns", "humanize this text", "make this sound more natural", "remove AI-generated traces", "fix robotic writ… |
| 63 | [`content-strategy`](../../skills/community/boraoztunc-skills/content-strategy/SKILL.md) | writing-content | When the user wants to plan a content strategy, decide what content to create, or figure out what topics to cover. Also use when the user mentions "content strategy," "what should… |

### 设计与媒体（10）

| # | 技能 | 分类 | 核心用途 |
|---:|---|---|---|
| 64 | [`victor-design-system`](../../skills/community/victor-design/SKILL.md) | design-media | 证据驱动的跨载体视觉设计与交付系统。用于海报、图文/社交内容、PPT/演示和产品 UI：理解主题与情绪，学习优秀人工参考，选择有依据且足够丰富的设计手法，制作 HTML 母版并完成可编辑交付与审查。 |
| 65 | [`frontend-design`](../../skills/community/skills-main/skills/frontend-design/SKILL.md) | design-media | Guidance for distinctive, intentional visual design when building new UI or reshaping an existing one. Helps with aesthetic direction, typography, and making choices that don't re… |
| 66 | [`web-design-guidelines`](../../skills/community/boraoztunc-skills/web-design-guidelines/SKILL.md) | design-media | Review UI code for Web Interface Guidelines compliance. Use when asked to "review my UI", "check accessibility", "audit design", "review UX", or "check my site against best practi… |
| 67 | [`accessibility`](../../skills/community/ECC/skills/accessibility/SKILL.md) | security-compliance | Design, implement, and audit inclusive digital products using WCAG 2.2 Level AA |
| 68 | [`ui-ux-pro-max`](../../skills/community/claude-scholar/skills/ui-ux-pro-max/SKILL.md) | design-media | This skill should be used when the user asks to design or review a UI, create a landing page or dashboard, choose colors or typography, improve accessibility, or implement polishe… |
| 69 | [`canvas-design`](../../skills/community/skills-main/skills/canvas-design/SKILL.md) | design-media | Create beautiful visual art in .png and .pdf documents using design philosophy. You should use this skill when the user asks to create a poster, piece of art, design, or other sta… |
| 70 | [`design-system`](../../skills/community/ECC/skills/design-system/SKILL.md) | design-media | Use this skill to generate or audit design systems, check visual consistency, and review PRs that touch styling. |
| 71 | [`generate-image`](../../skills/community/scientific-agent-skills/skills/generate-image/SKILL.md) | design-media | Generate or edit images with AI models through the OpenRouter Image API (Gemini, Seedream, Recraft, GPT-Image, Riverflow). Use for photos, illustrations, artwork, concept art, vis… |
| 72 | [`design-review`](../../skills/community/gstack/design-review/SKILL.md) | design-media | Designer's eye QA: finds visual inconsistency, spacing issues, hierarchy problems, AI slop patterns, and slow interactions — then fixes them. (gstack) |
| 73 | [`anti-ui-slop`](../../skills/community/buildwithclaude-hub/plugins/all-skills/skills/anti-ui-slop/SKILL.md) | design-media | Stop coding agents from shipping generic UI. Use UIZZE's 800,000+ real web and iOS screens to build product-specific interfaces, define a design contract, cover required states, a… |

### 安全与合规（8）

| # | 技能 | 分类 | 核心用途 |
|---:|---|---|---|
| 74 | [`security-review`](../../skills/community/ECC/skills/security-review/SKILL.md) | security-compliance | Use this skill when adding authentication, handling user input, working with secrets, creating API endpoints, or implementing payment/sensitive features. Provides comprehensive se… |
| 75 | [`security-and-hardening`](../../skills/community/agent-skills-main/skills/security-and-hardening/SKILL.md) | security-compliance | Hardens code against vulnerabilities. Use when handling user input, authentication, data storage, or external integrations. Use when building any feature that accepts untrusted da… |
| 76 | [`security-audit`](../../skills/community/buildwithclaude-hub/plugins/agent-triforce/skills/security-audit/SKILL.md) | security-compliance | Deep security audit covering OWASP Top 10, authentication, authorization, data protection, dependency vulnerabilities, and secrets scanning. Delegates to the Centinela (QA) agent. |
| 77 | [`security-guidance`](../../skills/community/alirezarezvani-claude-skills/engineering/security-guidance/skills/security-guidance/SKILL.md) | engineering-code | PreToolUse security-anti-pattern hook for Claude Code. Catches 12 common security risks (command injection, XSS, SQL injection, unsafe deserialization, GitHub Actions workflow inj… |
| 78 | [`skill-security-auditor`](../../skills/community/alirezarezvani-claude-skills/engineering/skills/skill-security-auditor/SKILL.md) | engineering-code | Security audit and vulnerability scanner for AI agent skills before installation. Use when: (1) evaluating a skill from an untrusted source, (2) auditing a skill directory or git… |
| 79 | [`ai-security`](../../skills/community/alirezarezvani-claude-skills/engineering-team/skills/ai-security/SKILL.md) | security-compliance | Use when assessing AI/ML systems for prompt injection, jailbreak vulnerabilities, model inversion risk, data poisoning exposure, or agent tool abuse. Covers MITRE ATLAS technique… |
| 80 | [`dependency-auditor`](../../skills/community/alirezarezvani-claude-skills/engineering/skills/dependency-auditor/SKILL.md) | security-compliance | Audit and manage dependencies across multi-language projects. Identifies vulnerabilities, license conflicts, transitive dependency risks, and safe-upgrade paths. Use when auditing… |
| 81 | [`incident-response`](../../skills/community/alirezarezvani-claude-skills/engineering-team/skills/incident-response/SKILL.md) | security-compliance | Use when a security incident has been detected or declared and needs classification, triage, escalation path determination, and forensic evidence collection. Covers SEV1-SEV4 clas… |

### 商业与协作（12）

| # | 技能 | 分类 | 核心用途 |
|---:|---|---|---|
| 82 | [`product-manager`](../../skills/community/alirezarezvani-claude-skills/.gemini/skills/product-manager/SKILL.md) | business-strategy | Ships outcomes, not features. Writes specs engineers actually read. Prioritizes ruthlessly. Kills darlings when the data says so. Operates at the intersection of user needs, busin… |
| 83 | [`product-discovery`](../../skills/community/alirezarezvani-claude-skills/product-team/skills/product-discovery/SKILL.md) | business-strategy | Use when validating product opportunities, mapping assumptions, planning discovery sprints, or testing problem-solution fit before committing delivery resources. |
| 84 | [`user-story`](../../skills/community/alirezarezvani-claude-skills/.gemini/skills/user-story/SKILL.md) | writing-content | Generate user stories with acceptance criteria and sprint planning. Usage: /user-story <generate\|sprint> [options] |
| 85 | [`sprint-plan`](../../skills/community/alirezarezvani-claude-skills/.gemini/skills/sprint-plan/SKILL.md) | general | Capacity-gated sprint planning — runs capacity math, carry-over check, and a definition-of-ready gate before committing scope. Usage: /sprint-plan <goal> [capacity] |
| 86 | [`marketing-campaign`](../../skills/community/ECC/skills/marketing-campaign/SKILL.md) | business-strategy | End-to-end marketing campaign planning and execution. Covers audience research, positioning, campaign angle definition, landing page copy, email sequences, social posts, ad copy,… |
| 87 | [`competitive-intel`](../../skills/community/alirezarezvani-claude-skills/c-level-advisor/skills/competitive-intel/SKILL.md) | business-strategy | Systematic competitor tracking that feeds CMO positioning, CRO battlecards, and CPO roadmap decisions. Use when analyzing competitors, building sales battlecards, tracking market… |
| 88 | [`market-research`](../../skills/community/ECC/skills/market-research/SKILL.md) | business-strategy | Conduct market research, competitive analysis, investor due diligence, and industry intelligence with source attribution and decision-oriented summaries. Use when the user wants m… |
| 89 | [`launch-strategy`](../../skills/community/alirezarezvani-claude-skills/marketing-skill/skills/launch-strategy/SKILL.md) | business-strategy | When the user wants to plan a product launch, feature announcement, or release strategy. Also use when the user mentions 'launch,' 'Product Hunt,' 'feature release,' 'announcement… |
| 90 | [`pricing-strategy`](../../skills/community/alirezarezvani-claude-skills/marketing-skill/skills/pricing-strategy/SKILL.md) | business-strategy | Design, optimize, and communicate SaaS pricing — tier structure, value metrics, pricing pages, and price increase strategy. Use when building a pricing model from scratch, redesig… |
| 91 | [`product-analytics`](../../skills/community/alirezarezvani-claude-skills/product-team/skills/product-analytics/SKILL.md) | business-strategy | Use when defining product KPIs, building metric dashboards, running cohort or retention analysis, or interpreting feature adoption trends across product stages. |
| 92 | [`marketing-strategy-pmm`](../../skills/community/alirezarezvani-claude-skills/marketing-skill/skills/marketing-strategy-pmm/SKILL.md) | business-strategy | Product marketing skill for positioning, GTM strategy, competitive intelligence, and product launches. Use when the user asks about product positioning, go-to-market planning, com… |
| 93 | [`meetings`](../../skills/community/alirezarezvani-claude-skills/productivity/meetings/skills/meetings/SKILL.md) | business-strategy | Use when someone wants to decide whether a meeting is worth calling, price a meeting in dollars, build a timeboxed agenda with desired outcomes, or turn messy meeting notes into o… |

### 通用工具与项目卫生（7）

| # | 技能 | 分类 | 核心用途 |
|---:|---|---|---|
| 94 | [`spec-kit`](../../tools/spec-kit/SKILL.md) | engineering-code | Apply GitHub Spec Kit's pinned specification-driven workflow to define principles, requirements, plans, tasks, implementation, and convergence checks. Use when starting or restruc… |
| 95 | [`openwiki`](../../skills/openwiki/SKILL.md) | engineering-code | 使用仓库内固定版本的 LangChain OpenWiki CLI，为代码库生成和持续维护面向 Agent 的 Markdown Wiki、AGENTS/CLAUDE 入口、Mermaid 图与 OKF 文档。适用于代码库理解、架构文档、持续文档更新和 CI 文档任务。 |
| 96 | [`project-health`](../../skills/community/alirezarezvani-claude-skills/.gemini/skills/project-health/SKILL.md) | general | Portfolio health dashboard and risk matrix analysis. Usage: /project-health <dashboard\|risk> [options] |
| 97 | [`architecture-decision-records`](../../skills/community/ECC/skills/architecture-decision-records/SKILL.md) | engineering-code | Capture architectural decisions made during Claude Code sessions as structured ADRs. Auto-detects decision moments, records context, alternatives considered, and rationale. Mainta… |
| 98 | [`codebase-onboarding`](../../skills/community/ECC/skills/codebase-onboarding/SKILL.md) | engineering-code | Analyze an unfamiliar codebase and generate a structured onboarding guide with architecture map, key entry points, conventions, and a starter CLAUDE.md. Use when joining a new pro… |
| 99 | [`websearch`](../../skills/community/prime-agent/packages/coding-agent/skills/websearch/SKILL.md) | agents-orchestration | Search Google via the Serper API. Configure access via /login, then MCP Connections, then Serper (web search). Takes one query and returns titles, URLs, snippets, and knowledge-gr… |
| 100 | [`planning-with-files`](../../skills/community/claude-scholar/skills/planning-with-files/SKILL.md) | research-science | Use this by default for non-trivial multi-step work that needs persistent planning, progress tracking, or durable notes on disk. Trigger when a task will likely span multiple tool… |

## 选择与许可说明

- 这 100 项全部来自已编目的本地紧凑层；包可在不初始化大型子模块的情况下阅读。
- 清单是跨领域基础款，不代表所有项目都需要全部能力，也不替代目标项目自己的指令、事实和验收标准。
- 每个技能仍受其上游许可证和使用边界约束；本包保留 canonical 路径、来源和哈希，不改变上游权利声明。
- 安全、远控、凭据、网络、写入、个人数据、引用和高风险决策必须单独取得授权并执行相应门禁。

礼包版本：`2026.08.15`；生成日期：`2026-08-15`。


---

## SOURCE · `arena/01a060a3-skill:bundles/research-workflow-kit/ETHICS.md`

<!-- blob: 806c12aa9c80e73c004e3831db53edafafcc4e1c; bytes: 1922 -->

# 学术诚信、隐私与伦理

## 红线

本礼包不得用于：编造数据/来源/受试者/引文/审批；代写冒充；AI 检测规避；p-hacking/HARKing；未经授权识别、关联或上传敏感数据；绕过付费墙/访问控制；自动投稿；虚构审稿意见；保证发表。

收到此类请求时停止相关执行，说明风险，并提供透明披露、研究设计教学、来源核验、去标识化、局限说明或合规重写等替代路径。

## 人类决策权

以下事项始终需要相应人类/机构批准：

- 研究问题、主要假设和解释；
- 人体、动物、临床、生物安全和双重用途研究；
- 敏感数据的收集、上传、链接、共享和删除；
- 作者资格、贡献、利益冲突与 AI 披露；
- 预算购买、外部联络、公开发布和投稿。

## AI 使用披露

记录工具/模型/版本、日期、用途、输入类别、敏感性、输出去向、人工核验者和最终决定。具体披露文字以当前机构、伦理审批、资助方和目标 venue 政策为准，并记录政策来源和访问日期。

AI 不能成为作者，因为它不能承担责任、批准最终版本或处理利益冲突。作者必须核验事实、引用、代码、统计、图像和文本。

## 隐私

执行数据最小化和目的限制。去标识化要检查姓名之外的组合识别、罕见属性、时间地点、自由文本和可搜索引文。密钥表与工作数据分离；访问最小化；保留和删除计划可验证。

未经批准的云模型、MCP、插件和 API 不得接收机密或受监管材料。授权不清时只给本地准备方案，不处理原始敏感内容。

## 来源与知识产权

合法获取全文；尊重数据库和出版社条款；保存版本和许可；区分引用与再分发权。包内各上游 Skill 仍受各自许可证约束，见 `licenses/` 和 `MANIFEST.json`。


---

## SOURCE · `arena/01a060a3-skill:bundles/research-workflow-kit/INSTALL.md`

<!-- blob: b312f8c880f131f548bf469c534081d055c8f0f0; bytes: 3126 -->

# 安装与更新

## 方式 A：直接校验并解压（推荐）

`SHA256SUMS` 是压缩包的外部校验值，必须在解压前、两者位于同一目录时检查。不要用 `|| true` 吞掉失败：

```bash
sha256sum -c SHA256SUMS
tar -xzf research-workflow-kit.tar.gz
cd research-workflow-kit
python3 tools/research_kit.py doctor
python3 tools/research_kit.py verify
```

外部 checksum 验证传输后的压缩包；解压后的 `verify` 再验证 Manifest、Profile 引用、全部 payload 树哈希、路径与项目模板。macOS 可用 `shasum -a 256 research-workflow-kit.tar.gz`，并与 `SHA256SUMS` 中的值逐字比较。

## 方式 B：只安装 Core

先 dry-run：

```bash
python3 tools/research_kit.py install \
  --profile core \
  --target "$HOME/.agents/skills" \
  --dry-run
```

确认目标目录符合当前 Agent 平台后再去掉 `--dry-run`。重复安装不会静默覆盖；确需更新时显式加 `--force`。

## 方式 C：只装指定 Skill

```bash
python3 tools/research_kit.py search "citation verification"
python3 tools/research_kit.py install \
  --id 'scientific-agent-skills::skills/citation-management' \
  --target "$HOME/.agents/skills" \
  --dry-run
```

ID 以实际 `MANIFEST.json` 为准。

## 建立研究项目

```bash
python3 tools/research_kit.py init-project ./my-project
```

目标非空时默认停止；`--force` 只应用于你已审查过的模板合并场景。

## 安全说明

- 安装器只复制本地文件，不联网、不执行第三方安装脚本、不读取凭证；
- Skill payload 不等于依赖已经安装。读取 `SKILL.md` 后再安装必要软件，并固定版本；
- `metadata-only` 条目因缺乏明确再分发许可未装入 payload；工具默认拒绝安装它们；
- 某些上游 Skill 依赖特定 Codex、Claude、Hermes、MCP、API 或 GPU。兼容性字段是路由提示，不是运行保证；
- 不运行未经核验的 `curl | sh`，不把 API key 写入仓库、Notebook 或聊天。

## 从 Skill 仓库领取

新 Arena Session Agent 可在任意工作目录逐字执行；这不会切换它自己的固定分支：

```bash
git fetch origin arena/019ffbe9-skill
mkdir -p /tmp/research-workflow-kit-download

git show origin/arena/019ffbe9-skill:bundles/research-workflow-kit/research-workflow-kit.tar.gz \
  > /tmp/research-workflow-kit-download/research-workflow-kit.tar.gz
git show origin/arena/019ffbe9-skill:bundles/research-workflow-kit/SHA256SUMS \
  > /tmp/research-workflow-kit-download/SHA256SUMS

cd /tmp/research-workflow-kit-download
sha256sum -c SHA256SUMS
tar -xzf research-workflow-kit.tar.gz
cd research-workflow-kit
python3 tools/research_kit.py doctor
python3 tools/research_kit.py verify
less START_HERE.md
```

随后用 `install --profile core --target <该平台真实 Skill 目录> --dry-run` 预览；确认后再安装并执行 `init-project`。新 Arena Session 有自己的固定分支时，**不要切换到本 Session 的分支**；上面的 `git show` 只读取远端对象。若分支尚未推送或 GitHub 连接失败，应先报告，不能用来源不明的镜像替代。


---

## SOURCE · `arena/01a060a3-skill:bundles/research-workflow-kit/LICENSE_AND_ATTRIBUTION.md`

<!-- blob: 2c4d91713e33392c55c9569cb67c5ccd72003062; bytes: 1170 -->

# 许可与来源说明

本压缩包是多个独立来源的集合，不以一个许可证覆盖全部内容。

- 每个条目的仓库、固定提交、源路径、许可证和 payload 哈希见 `MANIFEST.json`；
- 上游根许可证/通知复制到 `licenses/<source-id>/`，安装时复制到对应包的 `UPSTREAM_NOTICES/`；
- Academic Research Skills 与其 Codex 适配器为 CC BY-NC 4.0，只能按许可证用于非商业场景；
- MIT、Apache-2.0 和各官方 Skill 的本地许可证仍分别适用；
- `NOASSERTION` 或只有 README 声称、缺少明确许可证文件的来源仅做 metadata-only 索引，不打包其 payload；
- 本仓库自有路由、模板和文档没有用第三方许可证重新授权上游内容；使用者仍需检查自己的用途、组织政策和司法辖区。

压缩包包含 Skill 指令和必要附件，不代表替用户安装第三方软件、获得 API 权限、数据库订阅、模型权重、数据许可或伦理批准。

来源固定信息来自仓库 `catalog/sources.lock.json`；构建时会核对实际 submodule HEAD。若固定提交不匹配，构建失败而不是静默领取最新版本。


---

## SOURCE · `arena/01a060a3-skill:bundles/research-workflow-kit/PLATFORM_COMPATIBILITY.md`

<!-- blob: 7431a8bb5d2f8c11ed5351a57f174a387a4072b1; bytes: 2459 -->

# 平台兼容性

本礼包以普通目录、Markdown、JSON、CSV、Python 标准库和 tar.gz 为可移植基础。**工作流可移植不等于所有上游命令可移植。**

| 能力 | Arena Agent Mode | Codex/插件环境 | OpenCode/其他 Agent | 处理方式 |
|---|---|---|---|---|
| 阅读 Skill/文件、运行本地脚本 | 通常可用 | 通常可用 | 依产品而定 | 先检查工具和工作区 |
| `/research`、`/ars-*` | 非通用 | 仅安装对应命令时 | 非通用 | 不存在则按 SKILL 步骤手动执行 |
| `$academic-research-suite` | 非通用 | 可能是 Codex 适配语法 | 非通用 | 以实际安装和文档为准 |
| `OPENCODE_ENABLE_EXA=1` | 不适用 | 不应假定 | 特定 OpenCode 配置 | 仅在对应产品官方文档确认后使用 |
| Web/学术 API | 取决于会话工具和网络 | 取决于插件/API | 取决于配置 | 记录真实数据库、查询和日期 |
| MCP | 仅已连接服务 | 仅已安装插件/MCP | 依实现 | 先核验服务、权限、数据政策和费用 |
| Notion | 可通过可用工具/导出 | 官方插件可能可用 | 依连接器 | 始终保留本地规范副本 |
| Zotero | 可用本地/API 工具时 | 插件或本地 API | 依连接器 | 使用 BibTeX/RIS 作为交换层 |
| Jupyter | 可创建/运行文件时 | 官方 Skill 提供流程 | 依本地运行时 | 交付前从头运行并保存环境 |
| SPSS/EndNote/Word | 非内置保证 | 依本地软件/插件 | 依平台 | 作为可选导入导出目标 |

## 兼容性标签

`MANIFEST.json` 的 `compatibility` 只表达上游原生环境或指导可移植程度：

- `cross-platform-guidance`：流程和制品可在多数 Agent 中应用；
- `codex-native-guidance-portable`：原生为 Codex，其他平台只能迁移方法；
- `source-specific-runtime`：依赖上游 Agent、CLI、API 或执行框架；
- `domain-library-guidance`：需要对应 Python/R/科学软件和数据；
- `metadata-only`：因再分发许可不明确，仅提供来源索引。

每次调用前检查 `SKILL.md` 的真实依赖。Manifest 的 `dependencies.declarationFiles` 和 `platformRequirements.declarationFiles` 列出包内识别到的 `requirements*.txt`、`pyproject.toml`、`package.json`、环境/容器/运行时声明与平台清单的**精确相对路径**；空列表只表示未发现这些机器可读文件，不表示“无依赖”。压缩包不会自动安装软件、API、模型、MCP 或凭证。


---

## SOURCE · `arena/01a060a3-skill:bundles/research-workflow-kit/README.md`

<!-- blob: c2bf0289447f4376a3560a556b2877eec0e6d900; bytes: 4159 -->

# 🔬 科研大礼包 · Research Workflow Kit

一个可直接解压、离线检索、按 Profile 安装的科研 Skill 压缩包。它把研究问题、协议、文献与 PDF、引用管理、证据综合、Jupyter/统计/实验、质性与混合方法、论文写作、模拟同行评审、修订、复现、伦理与 AI 披露组织成一套**人工在环**工作流。

下载文件：[`research-workflow-kit.tar.gz`](research-workflow-kit.tar.gz)（52.6 MiB）  
完整清单：[`MANIFEST.json`](MANIFEST.json)（691 个入口；659 个 payload；32 个 metadata-only）  
校验值：[`SHA256SUMS`](SHA256SUMS)

## 三分钟开始

```bash
# 在压缩包和 SHA256SUMS 所在目录，必须先验 checksum
sha256sum -c SHA256SUMS
tar -xzf research-workflow-kit.tar.gz
cd research-workflow-kit
python3 tools/research_kit.py doctor
python3 tools/research_kit.py list --profile core
python3 tools/research_kit.py install --profile core --target "$HOME/.agents/skills" --dry-run
python3 tools/research_kit.py install --profile core --target "$HOME/.agents/skills"
python3 tools/research_kit.py init-project ./my-research-project
```

如果平台有不同的 Skill 目录，将 `--target` 改成该目录；不确定时不要猜，先让 Agent 检查平台文档和当前工作区。也可以不安装，直接让 Agent 阅读 `START_HERE.md`，再从 `vault/` 按当前阶段打开少量 `SKILL.md`。

## 它不是“一键论文机”

- 人类研究负责人批准问题、协议、数据、解释和发布；
- AI 不得编造论文、数据、受试者、引用、运行或伦理审批；
- 不提供 AI 检测规避、代写冒充、保证发表或自动投稿；
- Notion、Zotero、EndNote、SPSS、Word 等是可选连接器，Markdown/CSV/JSONL/BibTeX/Notebook 是可迁移底稿；
- `everything` 是离线资料库，不应一次全部加载或激活。

## Profile

| Profile | 用途 |
|---|---|
| `core` | 跨学科最小完整流程，推荐默认 |
| `literature-evidence` | 检索、PDF、引文、证据表、综述 |
| `quantitative` | 实验设计、功效、统计、Notebook、可视化 |
| `qualitative-mixed` | 访谈/观察、编码、反身性、mixed-method joint display |
| `writing-publication` | claim-evidence、论文、审稿、回复、格式与披露 |
| `ml-experiment` | AI/ML 研究工程和受限自动实验 |
| `life-science-vault` | 生物、医学、化学、材料等领域工具库 |
| `ars-noncommercial` | CC BY-NC 4.0 的 Academic Research Skills 与 Codex 适配器 |
| `everything` | 所有可再分发 payload；仅用于离线检索 |

`everything` 包含全部 659 个可再分发包，不代表依赖、安全或平台命令均已验证；应先搜索元数据，再为当前阶段选择至多 4 个互补 Skill。`MANIFEST.json` 另保留 32 个 metadata-only 入口，其中含 26 个精确重复别名和 6 个许可证未充分明确的包；它们不会被静默装入任何 payload。

## 可选“学长姐联合体”顾问层

来源归属透明的 `ai-research-senpai-council` 已作为可选 payload 纳入，但**不在 `core` 中**。它汇集 12 位中外科研创作者的已归因公开材料，用于经验会诊，不可替代学术证据、导师/PI、伦理审批或领域专家。单独预览安装：

```bash
python3 tools/research_kit.py install \
  --id 'skill-repository::ai-research-senpai-council' \
  --target "$HOME/.agents/skills" --dry-run
```

调用时必须按成员显示来源、证据强弱、分歧与商业关系，不得模仿真人或把通用建议冒充为其观点。

## 给新 Session 的一句话

```text
请先解压科研大礼包，运行 doctor，只扫描 MANIFEST 和 core 元数据；提交“技能吸收与调用报告”后，按当前研究阶段完整读取并调用最多 4 个互补技能，使用 project-template 维护制品和人工门禁。不要一次加载 everything，也不要把 Skill 名称当成未经核验的平台命令。
```

详见：[`START_HERE.md`](START_HERE.md)、[`INSTALL.md`](INSTALL.md)、[`WORKFLOW.md`](WORKFLOW.md)、[`ETHICS.md`](ETHICS.md)、[`PLATFORM_COMPATIBILITY.md`](PLATFORM_COMPATIBILITY.md)。


---

## SOURCE · `arena/01a060a3-skill:bundles/research-workflow-kit/START_HERE.md`

<!-- blob: 4f56a53bd887eb70a631d45ece96797385e56f34; bytes: 3292 -->

# START HERE：交给新 Session 的完整说明

## 先运行

```bash
python3 tools/research_kit.py doctor
python3 tools/research_kit.py search "你的领域 交付物 方法 风险" --limit 20
python3 tools/research_kit.py list --profile core
```

只扫描清单元数据。不要一次读取数百个 `SKILL.md`。

## 新 Session 启动提示（可直接复制）

```markdown
你现在收到一个已解压的 `research-workflow-kit` 科研大礼包。

请先执行：

1. `python3 tools/research_kit.py doctor`
2. 阅读 `START_HERE.md`、`WORKFLOW.md`、`ETHICS.md` 和 `PLATFORM_COMPATIBILITY.md`
3. 只扫描 `MANIFEST.json` 与相关 Profile 的元数据
4. 根据我的具体课题，从当前阶段选择 1 个主 Skill 和最多 3 个互补 Skill
5. 完整阅读这些选中 Skill 的 `SKILL.md`，不要一次加载 `everything`

开始实质工作前，先提交“技能吸收与调用报告”：

- 元数据吸收：扫描了哪些 Profile/条目，如何结合本项目筛选；
- 完整阅读：实际打开了哪些 `SKILL.md`；
- 明确调用：每个 Skill 的准确 ID、选择理由、负责阶段和预期制品；
- 完整应用计划：关键步骤、人工门禁、验证命令/证据与失败回退；
- 本轮不调用：最接近的候选及不调用原因；
- 平台核验：哪些能力来自当前平台，哪些来自 Skill，哪些需要第三方 API/MCP/本地软件。

然后使用：

`python3 tools/research_kit.py init-project <项目目录>`

建立项目制品。默认中文工作，原始论文题名、检索式、变量名和引用信息保留原语言。

强制要求：

- 人类研究负责人批准研究问题、协议、数据、解释和发布；
- 检索记录数据库、完整查询、日期、筛选和纳排理由；
- PDF/OCR/表格抽取的关键数字回到原页核对；
- 每项核心 claim 可追踪到数据、图表、统计量或已核验来源；
- Notebook/脚本保存环境、输入版本、种子、配置、失败和从头运行证据；
- 论文写作只依据已批准的 claim-evidence map；
- 投稿前完成引用审计、独立模拟评审、复现、隐私/伦理/许可和 AI 披露检查；
- 不编造数据/引文/审批，不代写冒充，不规避 AI 检测，不保证发表，不自动投稿。

Skill 名不是通用命令。不得默认 `/research`、`/ars-*`、`$academic-research-suite`、`OPENCODE_ENABLE_EXA=1` 或任意 `npx skills add` 在当前 Arena/Codex/OpenCode 环境有效；先核验平台和包内 `compatibility` 字段。

每次阶段切换重新搜索和组队。交付时报告实际调用、制品、验证结果、偏差和剩余风险，而不是只重复计划。
```

## 推荐使用节奏

1. `core` 起步；
2. 进入文献、定量、质性、写作或 ML 阶段时切换相应 Profile；
3. 搜索元数据后只安装/读取必要条目；
4. 每个阶段通过人工门禁再继续；
5. `everything` 只作为离线 vault 和发现索引。

## 首轮研究者需要补充

- 学科/课题和研究类型；
- 当前阶段与已有材料；
- 数据敏感性、伦理审批和授权；
- 目标交付物、venue 和截止时间；
- 可用软件、API、MCP、计算预算和网络条件；
- 哪些决策必须由导师、PI、合作者或机构批准。


---

## SOURCE · `arena/01a060a3-skill:bundles/research-workflow-kit/VALIDATION.md`

<!-- blob: 6ea7295ecd087ae223f7122d4bed313945dce8c0; bytes: 1923 -->

# 验证

## 压缩包完整性

在仓库的 bundle 目录运行：

```bash
sha256sum -c SHA256SUMS
```

解压后运行：

```bash
python3 tools/research_kit.py doctor
python3 tools/research_kit.py verify
```

`verify` 检查：Manifest ID 唯一、Profile 引用存在、路径无穿越、payload 和入口存在、每个包的树 SHA-256、模板入口存在。

## 安装与模板冒烟

```bash
TMP=$(mktemp -d)
python3 tools/research_kit.py install --profile core --target "$TMP/skills" --dry-run
python3 tools/research_kit.py install --profile core --target "$TMP/skills"
python3 tools/research_kit.py init-project "$TMP/project"
test -f "$TMP/project/00-governance/research-charter.md"
rm -rf "$TMP"
```

## 语义验收案例

新 Agent 应能正确处理：

1. 模糊想法 → 澄清问题、备选问题和研究协议，而非直接写论文；
2. 问题 → 可复查检索协议，记录数据库/查询/日期/纳排规则；
3. 合法 PDF → 原始哈希、解析警告、证据表和精确出处；
4. 证据表 → 带冲突、缺口边界和 claim-source 映射的综述；
5. 数据集 → 有环境/输入/种子/运行日志并从头执行的 Notebook；
6. 草稿 → 引用存在性与支持关系分开的审计、模拟评审和修订矩阵；
7. 未脱敏访谈上传 → 停止上传并提出本地去标识化/审批方案；
8. AI detector bypass → 拒绝规避，转向透明披露和作者负责的独立重写；
9. 未执行代码却要求“可复现” → 标记未验证并给出实际复现命令；
10. 保证 Q1 → 拒绝保证，提供 venue fit、质量和风险评估。

## 构建验证

仓库维护者运行：

```bash
python3 scripts/build_research_bundle.py
python3 -m unittest tests.test_research_bundle
python3 scripts/validate_repository.py
```

构建器只接受固定提交，跳过无明确再分发许可的 source payload，并把原因写入 Manifest。


---

## SOURCE · `arena/01a060a3-skill:bundles/research-workflow-kit/VALIDATION_RESULT.md`

<!-- blob: 587dceb6145d89f5bcca3d6fc00d1d71106611a3; bytes: 2103 -->

# Release Validation Result

Validated on **2026-08-16 (Asia/Shanghai)** from branch `arena/019ffbe9-skill`.

> This release-side record is intentionally outside the archive: embedding the archive's own checksum inside itself would be recursive. `SHA256SUMS` is the machine-readable source of truth.

## Artifact

- File: `research-workflow-kit.tar.gz`
- Bytes: `55,157,169` (52.60 MiB)
- SHA-256: `6cae45488511c86a9231d8c64713b1ce683e30b148c92ed19264568bcab34942`
- Manifest: 691 entries; 659 bundled payloads; 32 metadata-only; 26 exact aliases suppressed
- Profiles: 9
- Project-template files: 33

## Executed validation

1. `python3 scripts/build_research_bundle.py` was run twice against the pinned local source commits. Both builds produced the exact SHA-256 above.
2. `(cd bundles/research-workflow-kit && sha256sum -c SHA256SUMS)` returned `research-workflow-kit.tar.gz: OK`.
3. The archive was extracted to a fresh `/tmp` directory. From that extraction:
   - `python3 tools/research_kit.py doctor` returned `Quick doctor: PASS`;
   - `python3 tools/research_kit.py verify` returned `VERIFY PASS: 659 payload packages, 9 profiles, 691 manifest entries`;
   - `core` listed and installed 17 collision-safe packages into a new target;
   - all 17 installed packages contained provenance records;
   - `init-project` created all 33 template files;
   - local metadata search returned ranked payload records.
4. `python3 -m unittest discover -s tests -v` passed all 11 repository tests, including 7 clean-room bundle tests for checksum, archive safety, manifest/hash verification, profile install, collisions, metadata-only blocking, path traversal rejection, and project initialization.
5. `python3 scripts/validate_repository.py` exited 0. It reported only pre-existing warnings for uninitialized unrelated official/curated submodules and aggregate collections without a discoverable collection-level license.

## Reproduce

```bash
cd bundles/research-workflow-kit
sha256sum -c SHA256SUMS
cd ../..
python3 -m unittest tests/test_research_bundle.py -v
python3 scripts/validate_repository.py
```


---

## SOURCE · `arena/01a060a3-skill:bundles/research-workflow-kit/WORKFLOW.md`

<!-- blob: c7ccfd81a7f6e9a64ec74df6194c46828654ae31; bytes: 3293 -->

# 人工在环科研工作流

## 阶段与出口标准

| # | 阶段 | 必要输入 | 必要输出 | 出口门禁 |
|---:|---|---|---|---|
| 0 | Research Charter | 目标、角色、资源、风险 | 章程、决策权、伦理/隐私初筛 | 负责人批准范围和权限 |
| 1 | Question & Scope | 模糊问题、已有材料 | 可检验问题、边界、协议草案 | 问题和不能回答内容获批 |
| 2 | Search Protocol | 问题、概念块 | 数据库、查询、日期、纳排/去重规则 | 正式检索前冻结协议 |
| 3 | Acquisition & Evidence | 导出记录、合法全文 | search/screening log、证据表、claim-source map | 关键来源与位置已核验 |
| 4 | Methods & Analysis Plan | 证据、数据条件 | 设计、样本/材料、指标、模型、停止规则 | 看最终结果前批准 |
| 5 | Execution | 合法输入、锁定环境 | Notebook/脚本、配置、运行日志、原始输出 | 血缘完整，失败保留 |
| 6 | Manuscript | 已批准 claim-evidence | 大纲、文稿、图表、披露草案 | 无无证据核心 claim |
| 7 | Internal Review | 文稿和复现材料 | 引用审计、模拟评审、修订矩阵 | 缺陷处置或明确阻塞 |
| 8 | Release | 全部已审制品 | 复现报告、限制、release checklist | 作者/机构/venue 最终确认 |

## 推荐组队

通常使用 1 个主 Skill + 1–3 个互补 Skill：

- 文献：orchestrator + systematic-evidence-synthesis + paper search + citation verification；
- 定量：question-protocol + experimental-design + statistical-analysis + reproducible-analysis；
- 质性：question-protocol + qualitative-mixed-methods + evidence-synthesis + integrity-disclosure；
- 写作：orchestrator + scientific-writing/paper-spine + peer-review + integrity-disclosure；
- ML：orchestrator + experiment plan/run + reproducible-analysis + independent review。

同一 Agent 可以承担多个低风险角色，但高影响结论应由没有参与原始分析的独立 Reviewer 检查。

## 规范文件

- Markdown：章程、协议、解释、决策、评审、限制；
- CSV/TSV：检索、筛选、证据、数据字典、引用审计；
- JSONL：逐 claim/逐来源映射和机器日志；
- BibTeX/RIS：引用库交换；
- Notebook + 脚本：分析与展示；
- 环境锁：requirements/uv/conda/renv/container 等按项目选择。

Notion、Obsidian、Zotero、EndNote、SPSS、Word 和 LaTeX 可以同步或导出，但不可成为唯一审计副本。

## Claim–Evidence 门禁

每项核心结论记录：claim ID、原文、类型（背景/主要/次要/探索）、数据或来源、精确位置、统计证据、反例、限制、核验者、状态。只有 `verified` 的核心 claim 才能进入摘要和结论。

## 自动化边界示例

```yaml
max_rounds: 3
max_wall_time_hours: 4
max_compute_cost_usd: 20
allowed_directories: [05-analysis]
allowed_network: [arxiv.org, api.crossref.org, api.openalex.org]
human_approval_required_for:
  - changing_primary_question
  - purchasing_compute
  - processing_sensitive_data
  - external_publication
  - deleting_raw_data
stop_on:
  - evidence_integrity_failure
  - repeated_failure_twice
  - budget_exceeded
```

这是需按项目修改的示例，不是对网络、预算或数据的默认授权。


---

## SOURCE · `arena/01a060a3-skill:bundles/research-workflow-kit/project-template/00-governance/decision-log.md`

<!-- blob: a1f35c52799cca85cf516efc341f85461b74c2bd; bytes: 110 -->

# Decision Log

| Date | Decision | Alternatives | Evidence | Owner | Consequence |
|---|---|---|---|---|---|


---

## SOURCE · `arena/01a060a3-skill:bundles/research-workflow-kit/project-template/00-governance/ethics-and-privacy.md`

<!-- blob: e587d469276d25a2ee6452a81289fe10d5e9021e; bytes: 299 -->

# Ethics & Privacy

- 数据分类与合法依据：
- 知情同意/二次使用范围：
- 去标识化与密钥表位置：
- 获准的服务、地区与访问者：
- 保留、删除和事件响应：
- IRB/伦理/机构审批编号与范围（不得编造）：
- 双重用途与安全措施：


---

## SOURCE · `arena/01a060a3-skill:bundles/research-workflow-kit/project-template/00-governance/research-charter.md`

<!-- blob: 36622ca5fee1c0fb5bd9baf799a4a310dc1e3870; bytes: 424 -->

# Research Charter

## 负责人和决策权
- 研究负责人：
- 合作者/导师/PI：
- AI 可自主执行：
- 必须人工批准：

## 目标与范围
- 研究目的：
- 明确不回答：
- 交付物与截止时间：

## 资源与停止规则
- 数据/文献/代码：
- 时间/预算/计算：
- 停止条件：

## 风险
- 人体/动物/临床/生物安全：
- 隐私/机密/双重用途：
- 所需审批：


---

## SOURCE · `arena/01a060a3-skill:bundles/research-workflow-kit/project-template/00-governance/stage-gates.md`

<!-- blob: ae43f52ddbf78f3f49c3567996ea277dc7e5e7dd; bytes: 315 -->

# Stage Gates

| Gate | Status | Evidence | Approver | Date | Blocker |
|---|---|---|---|---|---|
| A Question | NOT STARTED | | | | |
| B Sources | NOT STARTED | | | | |
| C Design | NOT STARTED | | | | |
| D Execution | NOT STARTED | | | | |
| E Claims | NOT STARTED | | | | |
| F Release | NOT STARTED | | | | |


---

## SOURCE · `arena/01a060a3-skill:bundles/research-workflow-kit/project-template/01-question/protocol.md`

<!-- blob: 05b1be75a9262ae8a38f533eada7f450bea6cca5; bytes: 418 -->

# Protocol

- 研究类型：探索 / 验证 / 系统综述 / 复现 / 方法开发
- 主要/次要假设或无假设理由：
- 对象、材料、数据与版本：
- 主要/次要指标：
- 对照/基线/比较框架：
- 样本量、功效或质性停止依据：
- 纳入、排除、缺失和异常规则：
- 分析方法、多重比较和稳健性：
- 偏离协议的记录方式：
- 审批与停止规则：


---

## SOURCE · `arena/01a060a3-skill:bundles/research-workflow-kit/project-template/01-question/research-question.md`

<!-- blob: d9f48e334baca97a71e908ccca3dd46a30bd90f3; bytes: 223 -->

# Research Question

- 首选问题：
- 备选问题：
- 对象/语料/场景：
- 变量、现象或概念：
- 结果/解释目标：
- 不能回答：
- 可证伪或失败条件：
- 新颖性检索状态：UNVERIFIED


---

## SOURCE · `arena/01a060a3-skill:bundles/research-workflow-kit/project-template/02-literature/library.bib`

<!-- blob: 37e3faa1b04db5dbbaf127d0400e0e9f2825d961; bytes: 65 -->

% Export verified citation metadata here. Do not invent records.


---

## SOURCE · `arena/01a060a3-skill:bundles/research-workflow-kit/project-template/02-literature/search-strategy.md`

<!-- blob: f3055a4e88ba8c1c56c1cc63cff9a95a6bc858d7; bytes: 317 -->

# Search Strategy

- 研究问题版本：
- 概念块与同义词：
- 数据库/平台：
- 灰色文献：
- 完整查询式：
- 语言/日期/文献类型限制：
- 纳入/排除标准：
- 去重规则：
- 筛选和冲突处理：
- 引文追踪方法：
- 正式检索冻结日期：
- 更新检索日期：


---

## SOURCE · `arena/01a060a3-skill:bundles/research-workflow-kit/project-template/04-methods/analysis-plan.md`

<!-- blob: 140eee62ed8af48c2e46eadcc5fc0041a9b691dd; bytes: 428 -->

# Analysis Plan

- Analysis unit and design unit:
- Primary/secondary outcomes:
- Data split/randomization/blocking:
- Model/test and assumptions:
- Covariates/confounders:
- Missingness/outliers/exclusions:
- Effect size and uncertainty:
- Multiple comparisons:
- Sensitivity/robustness/negative controls:
- Qualitative coding/reflexivity/negative cases (if applicable):
- Exploratory analyses:
- Software, versions and seeds:


---

## SOURCE · `arena/01a060a3-skill:bundles/research-workflow-kit/project-template/04-methods/preregistration.md`

<!-- blob: 8f2b822f60db643ef110dfca9e1f5aa6643af69a; bytes: 246 -->

# Preregistration Draft

Record the frozen question, hypotheses, design, sample/materials, exclusions, outcomes, analysis, stopping rule, deviations, timestamp and registry decision. Do not claim registration until a real registry record exists.


---

## SOURCE · `arena/01a060a3-skill:bundles/research-workflow-kit/project-template/05-analysis/environment/README.md`

<!-- blob: 531dc7a92ea444fadf36da7523482d443d75c483; bytes: 156 -->

# Environment

Store dependency locks, runtime/OS/hardware notes, container or renv/conda/uv metadata, and exact restore commands. Never store credentials.


---

## SOURCE · `arena/01a060a3-skill:bundles/research-workflow-kit/project-template/05-analysis/notebooks/README.md`

<!-- blob: 659cada6f41ffc2be1c05e81d3805eb0215b79ea; bytes: 182 -->

# Notebooks

Separate exploration from final analysis. Before release, restart the kernel, run all cells from a clean environment, and record evidence in the reproducibility report.


---

## SOURCE · `arena/01a060a3-skill:bundles/research-workflow-kit/project-template/05-analysis/outputs/README.md`

<!-- blob: 67564b98d8d20f984c8c75513f2d8ddeeaa0e9b7; bytes: 131 -->

# Outputs

Generated outputs only. Every table/figure should identify the generating script, input version, configuration and run.


---

## SOURCE · `arena/01a060a3-skill:bundles/research-workflow-kit/project-template/05-analysis/scripts/README.md`

<!-- blob: 5e2e1526534b1e882f8e17bd5fbc04ed35eb73c9; bytes: 140 -->

# Scripts

Keep deterministic data preparation and analysis here. Raw inputs remain read-only and outside Git when sensitive or restricted.


---

## SOURCE · `arena/01a060a3-skill:bundles/research-workflow-kit/project-template/06-manuscript/ai-disclosure.md`

<!-- blob: a1c3cf05a90cfba6afd272e684c53306fcb9b3aa; bytes: 284 -->

# AI Use Disclosure Draft

- Tools/models/versions and dates:
- Stages and purposes:
- Input categories and sensitive-data controls:
- Human verification of facts, citations, code, statistics and prose:
- Author responsibility:
- Institution/funder/venue policies checked with dates:


---

## SOURCE · `arena/01a060a3-skill:bundles/research-workflow-kit/project-template/06-manuscript/figures/README.md`

<!-- blob: 5b073e77947cb04886df3bb10b48375a7b0bb5bf; bytes: 163 -->

# Figures

Keep editable sources and generation scripts. Check units, labels, sample sizes, uncertainty, accessibility, image integrity and consistency with data.


---

## SOURCE · `arena/01a060a3-skill:bundles/research-workflow-kit/project-template/06-manuscript/manuscript.md`

<!-- blob: dd4a67c8e0fa92d43f99408130dba085d29830c2; bytes: 121 -->

# Manuscript

> Draft only from verified claim-evidence records. Mark unresolved citations and facts as TODO/UNVERIFIED.


---

## SOURCE · `arena/01a060a3-skill:bundles/research-workflow-kit/project-template/06-manuscript/outline.md`

<!-- blob: 9e485f179c4eb9bd3dfa2fba2fc9e97b2f7e7aa6; bytes: 129 -->

# Manuscript Outline

For each section list the approved claim IDs, evidence, figure/table and limitation before drafting prose.


---

## SOURCE · `arena/01a060a3-skill:bundles/research-workflow-kit/project-template/07-review/internal-review.md`

<!-- blob: 878f5d40dd3ca80b3f69a40204da9af275e43941; bytes: 187 -->

# Internal Review

## Scope and reviewer independence

## Major concerns

## Minor concerns

## Claims, methods, statistics and reproducibility

## Recommendation and unresolved blockers


---

## SOURCE · `arena/01a060a3-skill:bundles/research-workflow-kit/project-template/07-review/revision-log.md`

<!-- blob: 4579a2180417a9d154ef93ff8c6ee7db14d5f822; bytes: 154 -->

# Revision Log

| Comment ID | Reviewer comment | Decision | Change/location | New evidence | Not adopted reason | Status |
|---|---|---|---|---|---|---|


---

## SOURCE · `arena/01a060a3-skill:bundles/research-workflow-kit/project-template/08-release/limitations.md`

<!-- blob: aa573d5766b54a043eae6f808ac9f306c670d12b; bytes: 155 -->

# Limitations

List design, sample, measurement, data, model, external-validity, missing-evidence and reproducibility limits without promotional dilution.


---

## SOURCE · `arena/01a060a3-skill:bundles/research-workflow-kit/project-template/08-release/release-checklist.md`

<!-- blob: 52847f781f62498c526cc7d19a8449553a7c3e97; bytes: 743 -->

# Release Checklist

- [ ] Human lead approved question, methods, interpretation and release
- [ ] Search and screening are reproducible
- [ ] Critical citations exist and support their claims
- [ ] Protocol deviations and exploratory analyses are labeled
- [ ] Data lineage, environment, seeds and failed runs are retained
- [ ] Effect sizes, uncertainty, assumptions and limitations are reported
- [ ] Core claims map to verified evidence
- [ ] Independent review and revision log are complete
- [ ] Manuscript, code, tables, figures and supplements agree
- [ ] Clean-run reproducibility was actually tested
- [ ] License, privacy, ethics, authorship, conflicts and AI disclosure are checked
- [ ] No unverified content is presented as fact


---

## SOURCE · `arena/01a060a3-skill:bundles/research-workflow-kit/project-template/08-release/reproducibility-report.md`

<!-- blob: 138a7c36c78d6f9889e68d9f7f2eef8a51d3efb8; bytes: 291 -->

# Reproducibility Report

- Tested commit/data/environment:
- Commands actually executed:
- Clean-run result and duration:
- Expected vs actual key outputs/tolerances:
- Platform differences:
- Inputs that cannot be redistributed and acquisition steps:
- Failures and unverified components:


---

## SOURCE · `arena/01a060a3-skill:bundles/research-workflow-kit/project-template/README.md`

<!-- blob: f3ebbfc165a5b7304ab422b01fa27e37c512a928; bytes: 185 -->

# Research Project

从 `00-governance/research-charter.md` 开始。每次阶段切换更新 `stage-gates.md` 和 `decision-log.md`。原始敏感数据不要放入此模板或 Git。


---

## SOURCE · `arena/01a060a3-skill:categories/README.md`

<!-- blob: a2c2dfa81d0e7718cd411797b50b6238496d2ad0; bytes: 2544 -->

# 技能分类导航

这里是**不移动 canonical 包路径**的加法式导航层。技能仍由 `catalog/`、`skills/` 和固定的 `full-sources/` 管理；分类目录提供人类 README 与完整 TSV，因此不会破坏既有搜索、安装、来源锁和引用。

四个机器目录共有 **3784** 个原始入口；隐藏内容变体与已审计别名后，默认呈现 **3126** 个候选。

| 分类 | 技能数 | 新手大礼包 | 主要范围 |
|---|---:|---:|---|
| [Agent 与编排](agents-orchestration/README.md) | 384 | 11 | 路由、计划、上下文、记忆、评估、多 Agent 协作与工作流治理。 |
| [工程与代码](engineering-code/README.md) | 767 | 24 | 架构、编码、测试、调试、评审、Git、CI/CD、API、前后端与性能。 |
| [文档与数据](documents-data/README.md) | 175 | 6 | PDF、结构化文档、表格、数据库、数据清洗、分析与可追踪交付。 |
| [研究与科学](research-science/README.md) | 806 | 9 | 检索、综述、引用、实验、统计、科学计算、论文、同行评审与复现。 |
| [写作与内容](writing-content/README.md) | 88 | 15 | 中文与英文写作、编辑、内容研究、技术表达、营销文案与去模板化。 |
| [设计与媒体](design-media/README.md) | 308 | 12 | 产品/UI/UX、视觉系统、网页、演示、图像、视频、动效与媒体生产。 |
| [商业与战略](business-strategy/README.md) | 165 | 11 | 产品、市场、营销、定价、竞争、运营、决策、发布与组织协作。 |
| [安全、隐私与合规](security-compliance/README.md) | 147 | 7 | 安全评审、威胁与风险、隐私、无障碍、依赖、审计和合规治理。 |
| [通用生产力](general/README.md) | 286 | 5 | 跨领域计划、沟通、会议、通用工具、个人效率与难以单归一域的能力。 |

## 选择原则

1. 先把任务写成“领域 + 交付物 + 方法 + 风险”关键词。
2. 用 `search_skills.py` 搜索；分类只用于缩小范围，不是强制边界。
3. 通常选择 1 个主技能，加研究、制作、审查各至多 1 个互补技能。
4. 明确说出本轮调用了哪些技能、用在哪一步、用什么证据验证；不要只列名字不执行。
5. 需要完整 references/assets 时初始化相应 `full-sources/`；不要把快索引缺文件误判为上游没有。

机器摘要见 [`catalog/category-summary.json`](../catalog/category-summary.json)，100 项基础组合见[新手大礼包](../bundles/newcomer-starter-pack/README.md)。


---

## SOURCE · `arena/01a060a3-skill:categories/agents-orchestration/README.md`

<!-- blob: 76cc6c0d1ecbcbba642fe49d0a3e18c8309f0af9; bytes: 4228 -->

# Agent 与编排

路由、计划、上下文、记忆、评估、多 Agent 协作与工作流治理。

- 默认可见技能：**384**
- 新手大礼包入选：**11**
- 完整机器索引：[`skills.tsv`](skills.tsv)

## 如何找技能

```bash
python scripts/search_skills.py "task planning orchestration verification" --category agents-orchestration --limit 12
```

先看搜索元数据，只打开当前任务真正命中的 1 个主技能和至多 3 个互补技能；不要把本分类全部载入上下文。

## 新手大礼包中的代表技能

| 技能 | 层级 | 用途 |
|---|---|---|
| [`multi-agent-orchestration`](../../skills/core/multi-agent-orchestration/SKILL.md) | maintained | 为确实可并行、需要上下文隔离或独立红队的复杂任务设计最小多 Agent 团队，定义职责、文件边界、制品契约、合并顺序和验证门禁。 |
| [`official-source-router`](../../skills/core/official-source-router/SKILL.md) | maintained | Route product- and platform-specific work across 859 pinned skill entry paths from OpenAI, Vercel, and Microsoft official repositories. Use when selecting a first-party workflow, resolving duplicate skill names, initializing an official source, checking provenance or license boundaries, or combining official skills with the repository's maintained workflows. |
| [`universal-skill-router`](../../SKILL.md) | router | 面向任意项目的技能检索、领域适配和最小专家组编排入口。用于在大型技能仓库中根据真实任务选择少量互补技能，建立制品契约与验证门禁，避免把历史项目假设带入新方向。 |
| [`dispatching-parallel-agents`](../../skills/community/superpowers-main/skills/dispatching-parallel-agents/SKILL.md) | community | Use when facing 2+ independent tasks that can be worked on without shared state or sequential dependencies |
| [`docker-patterns`](../../skills/community/ECC/skills/docker-patterns/SKILL.md) | community | Docker and Docker Compose patterns for local development, hardened CLI installer harnesses, container security, networking, volumes, and multi-service orchestration. Use when creating or reviewing Dockerfiles and Compose services, testing installers across Linux distributions, or planning accurate native macOS and Windows validation. |
| [`planning-and-task-breakdown`](../../skills/community/agent-skills-main/skills/planning-and-task-breakdown/SKILL.md) | community | Breaks work into ordered tasks. Use when you have a spec or clear requirements and need to break work into implementable tasks. Use when a task feels too large to start, when you need to estimate scope, or when parallel work is possible. |
| [`search-first`](../../skills/community/ECC/skills/search-first/SKILL.md) | community | Research-before-coding workflow. Search for existing tools, libraries, and patterns before writing custom code. Invokes the researcher agent. |
| [`spec-driven-development`](../../skills/community/agent-skills-main/skills/spec-driven-development/SKILL.md) | community | Creates specs before coding. Use when starting a new project, feature, or significant change and no specification exists yet. Use when requirements are unclear, ambiguous, or only exist as a vague idea. |
| [`subagent-driven-development`](../../skills/community/superpowers-main/skills/subagent-driven-development/SKILL.md) | community | Use when executing implementation plans with independent tasks in the current session |
| [`using-agent-skills`](../../skills/community/agent-skills-main/skills/using-agent-skills/SKILL.md) | community | Discovers and invokes agent skills. Use when starting a session or when you need to discover which skill applies to the current task. This is the meta-skill that governs how all other skills are discovered and invoked. |
| [`websearch`](../../skills/community/prime-agent/packages/coding-agent/skills/websearch/SKILL.md) | community | Search Google via the Serper API. Configure access via /login, then MCP Connections, then Serper (web search). Takes one query and returns titles, URLs, snippets, and knowledge-graph data. |

返回[全部分类](../README.md)或查看[新手大礼包](../../bundles/newcomer-starter-pack/README.md)。


---

## SOURCE · `arena/01a060a3-skill:categories/business-strategy/README.md`

<!-- blob: 64e989815777d78d65e2cf398fa91acbddf81379; bytes: 6109 -->

# 商业与战略

产品、市场、营销、定价、竞争、运营、决策、发布与组织协作。

- 默认可见技能：**165**
- 新手大礼包入选：**11**
- 完整机器索引：[`skills.tsv`](skills.tsv)

## 如何找技能

```bash
python scripts/search_skills.py "product strategy market decision" --category business-strategy --limit 12
```

先看搜索元数据，只打开当前任务真正命中的 1 个主技能和至多 3 个互补技能；不要把本分类全部载入上下文。

## 新手大礼包中的代表技能

| 技能 | 层级 | 用途 |
|---|---|---|
| [`ai-cabinet-decision-making`](../../skills/core/ai-cabinet/SKILL.md) | maintained | 用五个独立席位对重要决策、方案比较、路线选择和高不确定性计划进行第一性原理追问、红队攻击、机会分析、外行清晰度审查与执行拆解，再由主席给出有条件建议。 |
| [`competitive-intel`](../../skills/community/alirezarezvani-claude-skills/c-level-advisor/skills/competitive-intel/SKILL.md) | community | Systematic competitor tracking that feeds CMO positioning, CRO battlecards, and CPO roadmap decisions. Use when analyzing competitors, building sales battlecards, tracking market moves, positioning against alternatives, or when user mentions competitive intelligence, competitive analysis, competitor research, battlecards, win/loss, or market positioning. |
| [`launch-strategy`](../../skills/community/alirezarezvani-claude-skills/marketing-skill/skills/launch-strategy/SKILL.md) | community | When the user wants to plan a product launch, feature announcement, or release strategy. Also use when the user mentions 'launch,' 'Product Hunt,' 'feature release,' 'announcement,' 'go-to-market,' 'beta launch,' 'early access,' 'waitlist,' 'product update,' 'GTM plan,' 'launch checklist,' or 'launch momentum.' This skill covers phased launches, channel strategy, and ongoing launch momentum. |
| [`market-research`](../../skills/community/ECC/skills/market-research/SKILL.md) | community | Conduct market research, competitive analysis, investor due diligence, and industry intelligence with source attribution and decision-oriented summaries. Use when the user wants market sizing, competitor comparisons, fund research, technology scans, or research that informs business decisions. |
| [`marketing-campaign`](../../skills/community/ECC/skills/marketing-campaign/SKILL.md) | community | End-to-end marketing campaign planning and execution. Covers audience research, positioning, campaign angle definition, landing page copy, email sequences, social posts, ad copy, short-form video scripts, and content calendars. Use as the orchestration layer for multi-channel product launches. |
| [`marketing-strategy-pmm`](../../skills/community/alirezarezvani-claude-skills/marketing-skill/skills/marketing-strategy-pmm/SKILL.md) | community | Product marketing skill for positioning, GTM strategy, competitive intelligence, and product launches. Use when the user asks about product positioning, go-to-market planning, competitive analysis, target audience definition, ICP definition, market research, launch plans, or sales enablement. Covers April Dunford positioning, ICP definition, competitive battlecards, launch playbooks, and international market entry. Produces deliverables including positioning statements, battlecard documents, launch plans, and go-to-market strategies. |
| [`meetings`](../../skills/community/alirezarezvani-claude-skills/productivity/meetings/skills/meetings/SKILL.md) | community | Use when someone wants to decide whether a meeting is worth calling, price a meeting in dollars, build a timeboxed agenda with desired outcomes, or turn messy meeting notes into owned action items — or says "should this be a meeting", "/cs:meeting-prep", or "/cs:meeting-actions". Runs a cost gate (ASYNC / NOT-READY / MEET), builds a decision-first agenda, and extracts an owner + due-date checklist that flags every orphan. |
| [`pricing-strategy`](../../skills/community/alirezarezvani-claude-skills/marketing-skill/skills/pricing-strategy/SKILL.md) | community | Design, optimize, and communicate SaaS pricing — tier structure, value metrics, pricing pages, and price increase strategy. Use when building a pricing model from scratch, redesigning existing pricing, planning a price increase, or improving a pricing page. Trigger keywords: pricing tiers, pricing page, price increase, packaging, value metric, per seat pricing, usage-based pricing, freemium, good-better-best, pricing strategy, monetization, pricing page conversion, Van Westendorp. NOT for broader product strategy — use product-strategist for that. NOT for customer success or renewals — use customer-success-manager for expansion revenue. |
| [`product-analytics`](../../skills/community/alirezarezvani-claude-skills/product-team/skills/product-analytics/SKILL.md) | community | Use when defining product KPIs, building metric dashboards, running cohort or retention analysis, or interpreting feature adoption trends across product stages. |
| [`product-discovery`](../../skills/community/alirezarezvani-claude-skills/product-team/skills/product-discovery/SKILL.md) | community | Use when validating product opportunities, mapping assumptions, planning discovery sprints, or testing problem-solution fit before committing delivery resources. |
| [`product-manager`](../../skills/community/alirezarezvani-claude-skills/.gemini/skills/product-manager/SKILL.md) | community | Ships outcomes, not features. Writes specs engineers actually read. Prioritizes ruthlessly. Kills darlings when the data says so. Operates at the intersection of user needs, business goals, and engineering reality. Use when product work needs ruthless prioritization and a success metric — e.g., turning vague stakeholder asks into a 2-page spec, or deciding which of three competing roadmap bets to fund this quarter. (For framework-heavy RICE/PRD tooling, see cs-product-manager.) |

返回[全部分类](../README.md)或查看[新手大礼包](../../bundles/newcomer-starter-pack/README.md)。


---

## SOURCE · `arena/01a060a3-skill:categories/design-media/README.md`

<!-- blob: e25fe888b812de32d4015e7c6b9474b590fd2794; bytes: 5501 -->

# 设计与媒体

产品/UI/UX、视觉系统、网页、演示、图像、视频、动效与媒体生产。

- 默认可见技能：**308**
- 新手大礼包入选：**12**
- 完整机器索引：[`skills.tsv`](skills.tsv)

## 如何找技能

```bash
python scripts/search_skills.py "design ui ux visual media" --category design-media --limit 12
```

先看搜索元数据，只打开当前任务真正命中的 1 个主技能和至多 3 个互补技能；不要把本分类全部载入上下文。

## 新手大礼包中的代表技能

| 技能 | 层级 | 用途 |
|---|---|---|
| [`victor-design-system`](../../skills/community/victor-design/SKILL.md) | maintained | 证据驱动的跨载体视觉设计与交付系统。用于海报、图文/社交内容、PPT/演示和产品 UI：理解主题与情绪，学习优秀人工参考，选择有依据且足够丰富的设计手法，制作 HTML 母版并完成可编辑交付与审查。 |
| [`anti-ui-slop`](../../skills/community/buildwithclaude-hub/plugins/all-skills/skills/anti-ui-slop/SKILL.md) | community | Stop coding agents from shipping generic UI. Use UIZZE's 800,000+ real web and iOS screens to build product-specific interfaces, define a design contract, cover required states, and run a hard finish gate. Use for web or iOS UI design, implementation, redesign, critique, and pre-ship review in Codex, Claude Code, Cursor, Copilot, and other coding agents. |
| [`brainstorming`](../../skills/community/superpowers-main/skills/brainstorming/SKILL.md) | community | You MUST use this before any creative work - creating features, building components, adding functionality, or modifying behavior. Explores user intent, requirements and design before implementation. |
| [`canvas-design`](../../skills/community/skills-main/skills/canvas-design/SKILL.md) | community | Create beautiful visual art in .png and .pdf documents using design philosophy. You should use this skill when the user asks to create a poster, piece of art, design, or other static piece. Create original visual designs, never copying existing artists' work to avoid copyright violations. |
| [`design-review`](../../skills/community/gstack/design-review/SKILL.md) | community | Designer's eye QA: finds visual inconsistency, spacing issues, hierarchy problems, AI slop patterns, and slow interactions — then fixes them. (gstack) |
| [`design-system`](../../skills/community/ECC/skills/design-system/SKILL.md) | community | Use this skill to generate or audit design systems, check visual consistency, and review PRs that touch styling. |
| [`experimental-design`](../../skills/community/scientific-agent-skills/skills/experimental-design/SKILL.md) | community | Design experiments and studies BEFORE data is collected — choosing a design, randomizing, blocking, and laying out treatment combinations so results are interpretable. Use whenever someone is planning a study, asks how to assign subjects/samples to groups, mentions randomization, blocking, stratification, controls, factorial or fractional-factorial designs, design of experiments (DOE), screening many factors, response-surface optimization, crossover or repeated-measures or split-plot designs, cluster/group randomization, Latin squares, plate layouts, batch/run-order effects, replication vs. pseudoreplication, or sequential/adaptive/group-sequential designs. Trigger even for informal phrasings like "how should I set up this experiment", "how do I avoid confounding", "what's the best way to test these 6 factors", or "assign these mice to conditions". For computing the sample size or power once the design is chosen, use statistical-power; for analyzing data already collected, use statistical-analysis. |
| [`frontend-design`](../../skills/community/skills-main/skills/frontend-design/SKILL.md) | community | Guidance for distinctive, intentional visual design when building new UI or reshaping an existing one. Helps with aesthetic direction, typography, and making choices that don't read as templated defaults. |
| [`generate-image`](../../skills/community/scientific-agent-skills/skills/generate-image/SKILL.md) | community | Generate or edit images with AI models through the OpenRouter Image API (Gemini, Seedream, Recraft, GPT-Image, Riverflow). Use for photos, illustrations, artwork, concept art, visual assets, logos, and image editing or compositing from reference images. For flowcharts, circuits, pathways, and other technical diagrams, use the scientific-schematics skill instead. |
| [`slides`](../../skills/community/ui-ux-pro-max/cli/assets/skills/slides/SKILL.md) | community | Create strategic HTML presentations with Chart.js, design tokens, responsive layouts, copywriting formulas, and contextual slide strategies. |
| [`ui-ux-pro-max`](../../skills/community/claude-scholar/skills/ui-ux-pro-max/SKILL.md) | community | This skill should be used when the user asks to design or review a UI, create a landing page or dashboard, choose colors or typography, improve accessibility, or implement polished frontend interfaces with a clear design system. |
| [`web-design-guidelines`](../../skills/community/boraoztunc-skills/web-design-guidelines/SKILL.md) | community | Review UI code for Web Interface Guidelines compliance. Use when asked to "review my UI", "check accessibility", "audit design", "review UX", or "check my site against best practices". |

返回[全部分类](../README.md)或查看[新手大礼包](../../bundles/newcomer-starter-pack/README.md)。


---

## SOURCE · `arena/01a060a3-skill:categories/documents-data/README.md`

<!-- blob: b0336acb1752f1b01e2b583853d97ff82fc3eba3; bytes: 2740 -->

# 文档与数据

PDF、结构化文档、表格、数据库、数据清洗、分析与可追踪交付。

- 默认可见技能：**175**
- 新手大礼包入选：**6**
- 完整机器索引：[`skills.tsv`](skills.tsv)

## 如何找技能

```bash
python scripts/search_skills.py "document data spreadsheet database" --category documents-data --limit 12
```

先看搜索元数据，只打开当前任务真正命中的 1 个主技能和至多 3 个互补技能；不要把本分类全部载入上下文。

## 新手大礼包中的代表技能

| 技能 | 层级 | 用途 |
|---|---|---|
| [`convert-documents-to-markdown`](../../skills/community/anydoc-main/skills/convert-documents-to-markdown/SKILL.md) | community | Convert Word (.doc, .docx), PowerPoint (.ppt, .pptx), Excel (.xls, .xlsx), OpenDocument (.odt, .ods, .odp), RTF, EPUB, CSV, and PDF files to GitHub-Flavored Markdown. Use when a task needs the contents of an office document, spreadsheet, presentation, ebook, or PDF you cannot read directly. |
| [`document-generate`](../../skills/community/gstack/document-generate/SKILL.md) | community | Generate missing documentation from scratch for a feature, module, or entire project. (gstack) |
| [`exploratory-data-analysis`](../../skills/community/scientific-agent-skills/skills/exploratory-data-analysis/SKILL.md) | community | Perform bounded, local exploratory analysis of explicitly supported scientific files. Use for redacted CSV/TSV/JSON profiles; optional NumPy, HDF5, FASTA/FASTQ, and basic image metadata inspection; missingness/leakage audits; outlier and transformation sensitivity; and rigorous EDA report scaffolds. Other domain formats are reference-only and unknown formats fail closed. |
| [`make-pdf`](../../skills/community/gstack/make-pdf/SKILL.md) | community | Turn any markdown file into a publication-quality PDF. (gstack) |
| [`performance-optimization`](../../skills/community/agent-skills-main/skills/performance-optimization/SKILL.md) | community | Optimizes application performance across frontend, backend, queries, and databases. Use when performance requirements exist, when you suspect performance regressions, when Core Web Vitals or load times need improvement, when N+1 query patterns need fixing, or when profiling reveals bottlenecks. |
| [`sql-database-assistant`](../../skills/community/alirezarezvani-claude-skills/engineering/skills/sql-database-assistant/SKILL.md) | community | Use when the user asks to write SQL queries, optimize database performance, generate migrations, explore database schemas, or work with ORMs like Prisma, Drizzle, TypeORM, or SQLAlchemy. |

返回[全部分类](../README.md)或查看[新手大礼包](../../bundles/newcomer-starter-pack/README.md)。


---

## SOURCE · `arena/01a060a3-skill:categories/engineering-code/README.md`

<!-- blob: 1cddf7b98e7f5e0ceeb8b4aa18dad003a84a08c9; bytes: 8649 -->

# 工程与代码

架构、编码、测试、调试、评审、Git、CI/CD、API、前后端与性能。

- 默认可见技能：**767**
- 新手大礼包入选：**24**
- 完整机器索引：[`skills.tsv`](skills.tsv)

## 如何找技能

```bash
python scripts/search_skills.py "code test debug review architecture" --category engineering-code --limit 12
```

先看搜索元数据，只打开当前任务真正命中的 1 个主技能和至多 3 个互补技能；不要把本分类全部载入上下文。

## 新手大礼包中的代表技能

| 技能 | 层级 | 用途 |
|---|---|---|
| [`openwiki`](../../tools/openwiki/SKILL.md) | maintained | 使用仓库内固定版本的 LangChain OpenWiki CLI，为代码库生成和持续维护面向 Agent 的 Markdown Wiki、AGENTS/CLAUDE 入口、Mermaid 图与 OKF 文档。适用于代码库理解、架构文档、持续文档更新和 CI 文档任务。 |
| [`spec-kit`](../../tools/spec-kit/SKILL.md) | maintained | Apply GitHub Spec Kit's pinned specification-driven workflow to define principles, requirements, plans, tasks, implementation, and convergence checks. Use when starting or restructuring non-trivial product or software work that benefits from traceable specs before code. |
| [`api-and-interface-design`](../../skills/community/agent-skills-main/skills/api-and-interface-design/SKILL.md) | community | Guides stable API and interface design. Use when designing APIs, module boundaries, or any public interface. Use when creating REST or GraphQL endpoints, defining type contracts between modules, or establishing boundaries between frontend and backend. |
| [`architecture-decision-records`](../../skills/community/ECC/skills/architecture-decision-records/SKILL.md) | community | Capture architectural decisions made during Claude Code sessions as structured ADRs. Auto-detects decision moments, records context, alternatives considered, and rationale. Maintains an ADR log so future developers understand why the codebase is shaped the way it is. |
| [`backend-patterns`](../../skills/community/ECC/skills/backend-patterns/SKILL.md) | community | Backend architecture patterns, API design, database optimization, and server-side best practices for Node.js, Express, and Next.js API routes. |
| [`browser-testing-with-devtools`](../../skills/community/agent-skills-main/skills/browser-testing-with-devtools/SKILL.md) | community | Tests in real browsers via Chrome DevTools MCP. Use when building or debugging anything that runs in a browser. Use when you need to inspect the DOM, capture console errors, analyze network requests, profile performance, or verify visual output with real runtime data. Requires the chrome-devtools MCP server to be configured. |
| [`ci-cd-pipeline-builder`](../../skills/community/alirezarezvani-claude-skills/engineering/skills/ci-cd-pipeline-builder/SKILL.md) | community | Generate pragmatic CI/CD pipelines from detected project stack signals — fast baseline generation, repeatable checks, environment-aware deployment stages. Use when setting up CI for a new project, refactoring existing pipelines, or standardizing deployment workflows across multiple repos. |
| [`code-review-excellence`](../../skills/community/claude-scholar/skills/code-review-excellence/SKILL.md) | community | This skill should be used when the user asks to review a diff or pull request, write review comments, audit code quality, establish review standards, or improve how a team performs code review. |
| [`code-simplification`](../../skills/community/agent-skills-main/skills/code-simplification/SKILL.md) | community | Simplifies code for clarity. Use when refactoring code for clarity without changing behavior. Use when code works but is harder to read, maintain, or extend than it should be. Use when reviewing code that has accumulated unnecessary complexity. |
| [`codebase-onboarding`](../../skills/community/ECC/skills/codebase-onboarding/SKILL.md) | community | Analyze an unfamiliar codebase and generate a structured onboarding guide with architecture map, key entry points, conventions, and a starter CLAUDE.md. Use when joining a new project or setting up Claude Code for the first time in a repo. |
| [`coding-standards`](../../skills/community/ECC/skills/coding-standards/SKILL.md) | community | Baseline cross-project coding conventions for naming, readability, immutability, and code-quality review. Use detailed frontend or backend skills for framework-specific patterns. |
| [`frontend-patterns`](../../skills/community/ECC/skills/frontend-patterns/SKILL.md) | community | Frontend development patterns for React, Next.js, state management, performance optimization, and UI best practices. |
| [`git-workflow-and-versioning`](../../skills/community/agent-skills-main/skills/git-workflow-and-versioning/SKILL.md) | community | Structures git workflow practices. Use when making any code change. Use when committing, branching, resolving conflicts, or when you need to organize work across multiple parallel streams. Use when cutting a release, choosing a semantic version bump, tagging, or writing a changelog. |
| [`github-automation`](../../skills/community/buildwithclaude-hub/plugins/all-skills/skills/github-automation/SKILL.md) | community | Automate GitHub repositories, issues, pull requests, branches, CI/CD, and permissions via Rube MCP (Composio). Manage code workflows, review PRs, search code, and handle deployments programmatically. |
| [`python-patterns`](../../skills/community/ECC/skills/python-patterns/SKILL.md) | community | Pythonic idioms, PEP 8 standards, type hints, and best practices for building robust, efficient, and maintainable Python applications. |
| [`receiving-code-review`](../../skills/community/superpowers-main/skills/receiving-code-review/SKILL.md) | community | Use when receiving code review feedback, before implementing suggestions, especially if feedback seems unclear or technically questionable - requires technical rigor and verification, not performative agreement or blind implementation |
| [`requesting-code-review`](../../skills/community/superpowers-main/skills/requesting-code-review/SKILL.md) | community | Use when completing tasks, implementing major features, or before merging to verify work meets requirements |
| [`security-guidance`](../../skills/community/alirezarezvani-claude-skills/engineering/security-guidance/skills/security-guidance/SKILL.md) | community | PreToolUse security-anti-pattern hook for Claude Code. Catches 12 common security risks (command injection, XSS, SQL injection, unsafe deserialization, GitHub Actions workflow injection, eval/new Function code injection) BEFORE the Edit/Write/MultiEdit operation completes. Session-state caching prevents duplicate warnings on the same file+rule combo. Stdlib only — no dependencies. Use when you want a safety net during Claude Code sessions that touch security-sensitive code (auth, payments, user input handling, IaC). Disable with ENABLE_SECURITY_REMINDER=0 if you need to perform a verified-safe operation that would otherwise trip a pattern. Triggers — "add security hook", "block unsafe code", "detect command injection before write", "prevent SQL injection patterns", "security warning hook". |
| [`skill-creator`](../../skills/community/skills-main/skills/skill-creator/SKILL.md) | community | Create new skills, modify and improve existing skills, and measure skill performance. Use when users want to create a skill from scratch, edit, or optimize an existing skill, run evals to test a skill, benchmark skill performance with variance analysis, or optimize a skill's description for better triggering accuracy. |
| [`skill-security-auditor`](../../skills/community/alirezarezvani-claude-skills/engineering/skills/skill-security-auditor/SKILL.md) | community | Security audit and vulnerability scanner for AI agent skills before installation. Use when: (1) evaluating a skill from an untrusted source, (2) auditing a skill directory or git repo URL for malicious code, (3) pre-install security gate for Claude Code plugins, OpenClaw skills, or Codex skills, (4) scanning Python scripts for dangerous patterns like os.system, eval, subprocess, network exfiltration, (5) detecting prompt injection in SKILL.md files, (6) checking dependency supply chain risks, (7) verifying file system access stays within skill boundaries. Triggers: "audit this skill", "is this skill safe", "scan skill for security", "check skill before install", "skill security check", "skill vulnerability scan". |

返回[全部分类](../README.md)或查看[新手大礼包](../../bundles/newcomer-starter-pack/README.md)。


---

## SOURCE · `arena/01a060a3-skill:categories/general/README.md`

<!-- blob: f05646c8601df0afda1aab31097434bfe367abb9; bytes: 2103 -->

# 通用生产力

跨领域计划、沟通、会议、通用工具、个人效率与难以单归一域的能力。

- 默认可见技能：**286**
- 新手大礼包入选：**5**
- 完整机器索引：[`skills.tsv`](skills.tsv)

## 如何找技能

```bash
python scripts/search_skills.py "plan communicate productivity" --category general --limit 12
```

先看搜索元数据，只打开当前任务真正命中的 1 个主技能和至多 3 个互补技能；不要把本分类全部载入上下文。

## 新手大礼包中的代表技能

| 技能 | 层级 | 用途 |
|---|---|---|
| [`stop-slop`](../../skills/core/stop-slop/SKILL.md) | maintained | 起草、编辑或审阅散文时识别并删除常见 AI 模板腔，包括空泛开场、公式结构、虚假深度、模糊归因、节奏单一、过度修辞和可删内容，同时保留事实、含义与目标语气。 |
| [`executing-plans`](../../skills/community/superpowers-main/skills/executing-plans/SKILL.md) | community | Use when you have a written implementation plan to execute in a separate session with review checkpoints |
| [`project-health`](../../skills/community/alirezarezvani-claude-skills/.gemini/skills/project-health/SKILL.md) | community | Portfolio health dashboard and risk matrix analysis. Usage: /project-health <dashboard|risk> [options] |
| [`sprint-plan`](../../skills/community/alirezarezvani-claude-skills/.gemini/skills/sprint-plan/SKILL.md) | community | Capacity-gated sprint planning — runs capacity math, carry-over check, and a definition-of-ready gate before committing scope. Usage: /sprint-plan <goal> [capacity] |
| [`verification-before-completion`](../../skills/community/superpowers-main/skills/verification-before-completion/SKILL.md) | community | Use when about to claim work is complete, fixed, or passing, before committing or creating PRs - requires running verification commands and confirming output before making any success claims; evidence before assertions always |

返回[全部分类](../README.md)或查看[新手大礼包](../../bundles/newcomer-starter-pack/README.md)。


---

## SOURCE · `arena/01a060a3-skill:categories/research-science/README.md`

<!-- blob: e06294f2348fa35ecf613b8be33ece8d7d7ffaa0; bytes: 5456 -->

# 研究与科学

检索、综述、引用、实验、统计、科学计算、论文、同行评审与复现。

- 默认可见技能：**806**
- 新手大礼包入选：**9**
- 完整机器索引：[`skills.tsv`](skills.tsv)
- 可迁移离线包：[`科研大礼包 · Research Workflow Kit`](../../bundles/research-workflow-kit/README.md)

## 如何找技能

```bash
python scripts/search_skills.py "literature review citation statistics" --category research-science --limit 12
```

先看搜索元数据，只打开当前任务真正命中的 1 个主技能和至多 3 个互补技能；不要把本分类全部载入上下文。

## 新手大礼包中的代表技能

| 技能 | 层级 | 用途 |
|---|---|---|
| [`research-expert-system`](../../skills/core/research-expert-system/SKILL.md) | maintained | 世界级通用科研能力路由器。用于从选题、文献检索、系统综述、研究设计、实验执行、数据分析、科研绘图、论文写作、引用核验、同行评审、rebuttal、复现归档到学术汇报的完整研究生命周期；根据任务选择 ARS、Nature Skills、Scientific Agent Skills、ARIS、AI Research Skills、PaperSpine、Paper Craft、Hermes 和 Jupyter live kernel，并强制执行人类决策、证据追踪、统计严谨性和研究诚信门禁。 |
| [`citation-management`](../../skills/community/scientific-agent-skills/skills/citation-management/SKILL.md) | community | Comprehensive citation management for academic research. Search OpenAlex, PubMed, and Google Scholar for papers, extract accurate metadata, validate citations, and generate properly formatted BibTeX entries. This skill should be used when you need to find papers, verify citation information, convert DOIs to BibTeX, or ensure reference accuracy in scientific writing. |
| [`citation-verification`](../../skills/community/claude-scholar/skills/citation-verification/SKILL.md) | community | This skill provides reference guidance for citation verification in academic writing. Use when the user asks about "citation verification best practices", "how to verify references", "preventing fake citations", or needs guidance on citation accuracy. This skill supports ml-paper-writing by providing detailed verification principles and common error patterns. |
| [`deep-research`](../../skills/community/ECC/skills/deep-research/SKILL.md) | community | Multi-source deep research using firecrawl and exa MCPs. Searches the web, synthesizes findings, and delivers cited reports with source attribution. Use when the user wants thorough research on any topic with evidence and citations. |
| [`literature-review`](../../skills/community/scientific-agent-skills/skills/literature-review/SKILL.md) | community | Conduct comprehensive, systematic literature reviews using multiple academic databases (PubMed, arXiv, bioRxiv, Semantic Scholar, etc.). This skill should be used when conducting systematic literature reviews, meta-analyses, research synthesis, or comprehensive literature searches across biomedical, scientific, and technical domains. Creates professionally formatted markdown documents and PDFs with verified citations in multiple citation styles (APA, Nature, Vancouver, etc.). |
| [`planning-with-files`](../../skills/community/claude-scholar/skills/planning-with-files/SKILL.md) | community | Use this by default for non-trivial multi-step work that needs persistent planning, progress tracking, or durable notes on disk. Trigger when a task will likely span multiple tool calls, research steps, verification loops, or enough context that the plan should not live only in transient chat memory. |
| [`research-ideation`](../../skills/community/claude-scholar/skills/research-ideation/SKILL.md) | community | This skill should be used when the user asks to "brainstorm research ideas", "use 5W1H framework", "identify research gaps", "conduct gap analysis", "start research project", "conduct literature review", "define research question", "select research method", "plan research", or mentions research project initiation phase. Provides comprehensive guidance for research startup workflow from idea generation to planning. |
| [`research-paper-writing`](../../skills/community/Research-Paper-Writing-Skills-main/research-paper-writing/SKILL.md) | community | Improve academic paper writing quality for ML/CV/NLP-style papers with clear section structure, paragraph flow, and reviewer-facing presentation. Use when drafting or revising Abstract, Introduction, Related Work, Method, Experiments, or Conclusion; polishing figures/tables; checking claim-support alignment; or performing self-review before submission. |
| [`statistical-analysis`](../../skills/community/scientific-agent-skills/skills/statistical-analysis/SKILL.md) | community | Guided statistical analysis for research data - test selection, assumption checking, effect sizes, power analysis, Bayesian alternatives, and APA-formatted reporting. Use whenever a user wants to compare groups, test a hypothesis, analyze experimental or survey data, check statistical assumptions, compute required sample sizes, or write up results - even if they never name a specific test. Covers t-tests, ANOVA, chi-square, correlation, regression, non-parametric and Bayesian methods. For low-level model APIs, see the statsmodels and pymc skills. |

返回[全部分类](../README.md)或查看[新手大礼包](../../bundles/newcomer-starter-pack/README.md)。


---

## SOURCE · `arena/01a060a3-skill:categories/security-compliance/README.md`

<!-- blob: 8a9e9034f8f03601006cf4c176467a7329266f5a; bytes: 3236 -->

# 安全、隐私与合规

安全评审、威胁与风险、隐私、无障碍、依赖、审计和合规治理。

- 默认可见技能：**147**
- 新手大礼包入选：**7**
- 完整机器索引：[`skills.tsv`](skills.tsv)

## 如何找技能

```bash
python scripts/search_skills.py "security privacy compliance audit" --category security-compliance --limit 12
```

先看搜索元数据，只打开当前任务真正命中的 1 个主技能和至多 3 个互补技能；不要把本分类全部载入上下文。

## 新手大礼包中的代表技能

| 技能 | 层级 | 用途 |
|---|---|---|
| [`accessibility`](../../skills/community/ECC/skills/accessibility/SKILL.md) | community | Design, implement, and audit inclusive digital products using WCAG 2.2 Level AA |
| [`ai-security`](../../skills/community/alirezarezvani-claude-skills/engineering-team/skills/ai-security/SKILL.md) | community | Use when assessing AI/ML systems for prompt injection, jailbreak vulnerabilities, model inversion risk, data poisoning exposure, or agent tool abuse. Covers MITRE ATLAS technique mapping, injection signature detection, and adversarial robustness scoring. |
| [`dependency-auditor`](../../skills/community/alirezarezvani-claude-skills/engineering/skills/dependency-auditor/SKILL.md) | community | Audit and manage dependencies across multi-language projects. Identifies vulnerabilities, license conflicts, transitive dependency risks, and safe-upgrade paths. Use when auditing third-party packages before release, investigating a CVE, planning a major version bump, or running a license-compliance review. Examples: 'audit our npm dependencies', 'do we have GPL contamination', 'plan the upgrade to React 19'. |
| [`incident-response`](../../skills/community/alirezarezvani-claude-skills/engineering-team/skills/incident-response/SKILL.md) | community | Use when a security incident has been detected or declared and needs classification, triage, escalation path determination, and forensic evidence collection. Covers SEV1-SEV4 classification, false positive filtering, incident taxonomy, and NIST SP 800-61 lifecycle. |
| [`security-and-hardening`](../../skills/community/agent-skills-main/skills/security-and-hardening/SKILL.md) | community | Hardens code against vulnerabilities. Use when handling user input, authentication, data storage, or external integrations. Use when building any feature that accepts untrusted data, manages user sessions, or interacts with third-party services. |
| [`security-audit`](../../skills/community/buildwithclaude-hub/plugins/agent-triforce/skills/security-audit/SKILL.md) | community | Deep security audit covering OWASP Top 10, authentication, authorization, data protection, dependency vulnerabilities, and secrets scanning. Delegates to the Centinela (QA) agent. |
| [`security-review`](../../skills/community/ECC/skills/security-review/SKILL.md) | community | Use this skill when adding authentication, handling user input, working with secrets, creating API endpoints, or implementing payment/sensitive features. Provides comprehensive security checklist and patterns. |

返回[全部分类](../README.md)或查看[新手大礼包](../../bundles/newcomer-starter-pack/README.md)。


---

## SOURCE · `arena/01a060a3-skill:categories/writing-content/README.md`

<!-- blob: 55e45ffac51b35a3451a93c7f8f6c4e0b79438dc; bytes: 7425 -->

# 写作与内容

中文与英文写作、编辑、内容研究、技术表达、营销文案与去模板化。

- 默认可见技能：**88**
- 新手大礼包入选：**15**
- 完整机器索引：[`skills.tsv`](skills.tsv)

## 如何找技能

```bash
python scripts/search_skills.py "writing editing content audience" --category writing-content --limit 12
```

先看搜索元数据，只打开当前任务真正命中的 1 个主技能和至多 3 个互补技能；不要把本分类全部载入上下文。

## 新手大礼包中的代表技能

| 技能 | 层级 | 用途 |
|---|---|---|
| [`human-writing`](../../skills/community/human-writing/SKILL.md) | maintained | 通用中文创作与改稿 Skill。用于知乎回答、论坛长帖、公众号文章、博客、评论、人物故事、历史叙事、新闻与行业解读、科普、教程、评测、个人叙事、小说、故事、对白、口播和演讲稿。默认写成一个见过事、查过材料、愿意把来龙去脉讲清楚的人在说话，重点保留中文互联网长回答与长帖的活人感和自然中文韵律，避免空泛的机构腔、喊口号式演说腔、营销腔和模型腔。非虚构长文先检查材料够不够，材料不足时研究、追问或缩短，绝不用重复解释灌字数。现实内容额外核验事实、引语、数据与用户亲历，虚构内容可以创造人物、场景、对白、心理与情节。成稿正文严禁冒号、破折号、“不是……而是……”及同类翻案句，并清除商业黑话和模型惯用黑话。不创建作者画像、个人规则库或个人写作 Skill。 |
| [`humanizer-zh`](../../skills/core/humanizer-zh/SKILL.md) | maintained | 去除文本中的 AI 生成痕迹。适用于编辑或审阅文本，使其听起来更自然、更像人类书写。 基于维基百科的"AI 写作特征"综合指南。检测并修复以下模式：夸大的象征意义、 宣传性语言、以 -ing 结尾的肤浅分析、模糊的归因、破折号过度使用、三段式法则、 AI 词汇、否定式排比、过多的连接性短语。 |
| [`article-writing`](../../skills/community/ECC/skills/article-writing/SKILL.md) | community | Write articles, guides, blog posts, tutorials, newsletter issues, and other long-form content in a distinctive voice derived from supplied examples or brand guidance. Use when the user wants polished written content longer than a paragraph, especially when voice consistency, structure, and credibility matter. |
| [`content-research-writer`](../../skills/community/buildwithclaude-hub/plugins/all-skills/skills/content-research-writer/SKILL.md) | community | Assists in writing high-quality content by conducting research, adding citations, improving hooks, iterating on outlines, and providing real-time feedback on each section. Transforms your writing process from solo effort to collaborative partnership. |
| [`content-strategy`](../../skills/community/boraoztunc-skills/content-strategy/SKILL.md) | community | When the user wants to plan a content strategy, decide what content to create, or figure out what topics to cover. Also use when the user mentions "content strategy," "what should I write about," "content ideas," "blog strategy," "topic clusters," or "content planning." For writing individual pieces, see copywriting. For SEO-specific audits, see seo-audit. |
| [`copy-editing`](../../skills/community/boraoztunc-skills/copy-editing/SKILL.md) | community | When the user wants to edit, review, or improve existing marketing copy. Also use when the user mentions 'edit this copy,' 'review my copy,' 'copy feedback,' 'proofread,' 'polish this,' 'make this better,' or 'copy sweep.' This skill provides a systematic approach to editing marketing copy through multiple focused passes. |
| [`copywriting`](../../skills/community/boraoztunc-skills/copywriting/SKILL.md) | community | When the user wants to write, rewrite, or improve marketing copy for any page — including homepage, landing pages, pricing pages, feature pages, about pages, or product pages. Also use when the user says "write copy for," "improve this copy," "rewrite this page," "marketing copy," "headline help," or "CTA copy." For email copy, see email-sequence. For popup copy, see popup-cro. |
| [`daily-coding`](../../skills/community/claude-scholar/skills/daily-coding/SKILL.md) | community | Use for everyday coding tasks that involve writing or modifying source code. |
| [`doc-coauthoring`](../../skills/community/skills-main/skills/doc-coauthoring/SKILL.md) | community | Guide users through a structured workflow for co-authoring documentation. Use when user wants to write documentation, proposals, technical specs, decision docs, or similar structured content. This workflow helps users efficiently transfer context, refine content through iteration, and verify the doc works for readers. Trigger when user mentions writing docs, creating proposals, drafting specs, or similar documentation tasks. |
| [`markdown-mermaid-writing`](../../skills/community/scientific-agent-skills/skills/markdown-mermaid-writing/SKILL.md) | community | Comprehensive markdown and Mermaid diagram writing skill. Use when creating any scientific document, report, analysis, or visualization. Establishes text-based diagrams as the default documentation standard with full style guides (markdown + mermaid), 24 diagram type references, and 9 document templates. |
| [`scientific-writing`](../../skills/community/scientific-agent-skills/skills/scientific-writing/SKILL.md) | community | Draft, revise, and audit scientific manuscripts or reports with explicit evidence provenance, reporting-guideline coverage, authorship accountability, confidentiality controls, and local consistency checks. Use for manuscript sections, references, declarations, tables, figures, or submission preparation when scientific accuracy and traceability matter. |
| [`user-story`](../../skills/community/alirezarezvani-claude-skills/.gemini/skills/user-story/SKILL.md) | community | Generate user stories with acceptance criteria and sprint planning. Usage: /user-story <generate|sprint> [options] |
| [`writing`](../../skills/community/WRITING.md-main/skills/writing/SKILL.md) | community | Draft, revise, audit, or transform human-facing prose: articles, blogs, documentation, criticism, essays, email, marketing and SEO copy, summaries, scripts, application materials, and UI text. Excludes code comments, commit messages, and private notes. |
| [`writing-anti-ai`](../../skills/community/claude-scholar/skills/writing-anti-ai/SKILL.md) | community | This skill should be used when the user asks to "remove AI writing patterns", "humanize this text", "make this sound more natural", "remove AI-generated traces", "fix robotic writing", or needs to eliminate AI writing patterns from prose. Supports both English and Chinese text. Based on Wikipedia's "Signs of AI writing" guide, detects and fixes inflated symbolism, promotional language, superficial -ing analyses, vague attributions, AI vocabulary, negative parallelisms, and excessive conjunctive phrases. |
| [`writing-plans`](../../skills/community/superpowers-main/skills/writing-plans/SKILL.md) | community | Use when you have a spec or requirements for a multi-step task, before touching code |

返回[全部分类](../README.md)或查看[新手大礼包](../../bundles/newcomer-starter-pack/README.md)。


---

## SOURCE · `arena/01a060a3-skill:governance/AI_CABINET.md`

<!-- blob: 53d1036f3ecdca73ae6a284be5384c53f397a89d; bytes: 1850 -->

# AI 内阁决策法

用于重要选择、路线比较、计划压力测试和高不确定性判断。简单事实题、机械任务或用户只要短答时不要启用。

## 启动条件

先确认：决策是什么、核心目标是什么、主要约束是什么。缺失信息会实质改变结论时，最多集中询问三个问题；用户要求快速推进时，可列明假设后分析。

## 五个独立席位

### 追问席：第一性原理

- 区分目的与手段；
- 检查问题是否被错误表述；
- 明确成功指标、约束和隐藏假设；
- 给出更准确的问题定义。

### 反对席：红队

- 假设当前方案失败，找最先断裂的环节；
- 检查资源、依赖、激励、时机、安全、法律和声誉风险；
- 给出关键失败模式与早期预警信号；
- 不在本席位替方案辩护。

### 机会席：蓝队

- 寻找非对称收益、复用资产和杠杆点；
- 识别成功后的相邻机会与规模效应；
- 接受已知约束，不做无依据乐观预测。

### 外行席：清晰度审查

- 站在聪明但没有背景的读者位置；
- 标记术语、逻辑跳步、信任缺口和价值表达不清处；
- 说明一个新人最少需要知道什么。

### 执行席：运营与实验

- 把讨论转成有顺序的下一步；
- 优先选择最快降低关键不确定性的实验；
- 给出负责人、检查点和观察指标（已知时）；
- 避免“继续研究”之类无边界动作。

## 主席综合

最后单独完成综合：

1. 重述真实决策；
2. 列出各席位的共识和关键分歧；
3. 分开事实、假设和未知；
4. 给出当前建议及理由；
5. 说明什么新证据会改变建议；
6. 给出下一步和复盘时间点。

不同席位应保持独立，不能先写一个结论再让五个角色为它补理由。


---

## SOURCE · `arena/01a060a3-skill:governance/CONSTITUTION.md`

<!-- blob: 85c9e66efc62f248c8039a451bd2c10141911069; bytes: 1734 -->

# 通用执行宪法

这些准则来自三个历史技能库的共同核心，已去除项目专属术语。它们偏向可靠性；琐碎任务可按比例缩短流程。

## 1. 动手前先想清楚

- 不把猜测伪装成事实。
- 关键歧义会改变结果时，指出歧义并询问；不会改变主路径时，标注假设后继续。
- 有更简单的方案时主动提出。
- 先定义目标、约束和成功标准，再选工具。

## 2. 简单优先

- 只实现用户要求且通过验收所需的内容。
- 不为单次用途建立庞大抽象。
- 不添加未经要求的配置、功能和流程仪式。
- 方案明显比问题复杂时，退一步重做。

## 3. 外科式修改

- 只改与任务直接相关的文件和行为。
- 尊重目标项目已有风格、接口和目录约定。
- 清理由本次修改产生的废弃项，不擅自清理历史问题。
- 每一处变更都应能追溯到需求或验证结果。

## 4. 证据驱动

- 将“优化、修好、做得更好”转成可观察指标。
- 区分仓库实测、外部来源、工程假设与模型推断。
- 需要最新事实时检索，需要行为保证时测试，需要视觉保证时查看真实渲染。
- 没有实际检查结果，不声称已经通过。

## 5. 用户与项目优先

- 历史技能中的强制格式、审美偏好、技术栈和角色名不自动继承。
- 专项技能是方法建议，不是覆盖用户意图的上位命令。
- 发现技能与目标项目冲突时，保留项目事实，舍弃不合适的技能规则。

## 6. 诚实交付

交付内容应明确：完成了什么、用什么验证、哪些内容仍受限制。不要用篇幅、角色表演或自信措辞掩盖证据不足。


---

## SOURCE · `arena/01a060a3-skill:governance/MULTI_AGENT_ORCHESTRATION.md`

<!-- blob: 8d5ae93238bff6328298e53509b4b47f75a66b88; bytes: 2316 -->

# 通用多 Agent 编排

多 Agent 的价值来自上下文隔离、并行性和独立审查，不来自角色数量。单个 Agent 能清楚完成的任务不要拆分。

## 核心角色

```text
总协调者
  ├─ 领域/研究 Worker
  ├─ 制作/实现 Worker
  ├─ 验证 Worker
  └─ 独立 Reviewer（不参与原实现）
```

- **总协调者**：固定任务简报，划分边界，定义交付制品和验收门槛。
- **Worker**：在独立上下文中完成一个可验证子任务，不越权改动其他边界。
- **验证者**：运行测试、核对来源、检查数据或渲染，不以作者自评替代证据。
- **Reviewer**：从反例、准确性、安全、可用性或风格角度独立审查。

角色按职责命名。需要领域专家时，描述其知识范围和判断标准，不必模仿名人语气。

## 何时拆分

满足至少一项再考虑多 Agent：

- 子任务可真正并行且写入边界不冲突；
- 不同子任务需要明显不同的专业上下文；
- 独立红队能显著降低高风险错误；
- 单一上下文会因资料量过大而失焦。

高度耦合、频繁共享中间状态或只需改一个小文件的任务通常不应拆分。

## 制品契约

每个子任务必须说明：

- 输入文件或事实来源；
- 允许修改的范围；
- 输出路径和格式；
- 完成定义；
- 验证命令或审查清单；
- 禁止覆盖的共享制品。

Agent 之间通过文件、结构化数据、补丁、测试结果或明确摘要交接，不传递“差不多完成了”之类口头状态。

## 并行与合并

- 只有无依赖或依赖已冻结的任务并行执行。
- 并行 Worker 不写同一文件；无法避免时改为串行。
- 合并前先检查接口、术语、单位、数据模式和版本是否一致。
- Reviewer 针对合并后的真实制品审查，而不是只审查 Worker 的描述。

## 否决与返工

交付门禁只否决与验收标准相关的问题。Reviewer 必须指出：失败项、证据、影响和最小修正方向。修正后重新运行受影响检查；不能用解释替代返工。

## 记录

复杂任务可留下轻量运行记录：选用了哪些技能、各 Agent 的制品、实际检查结果和未解决风险。不要把内部长篇推理写进交付物。


---

## SOURCE · `arena/01a060a3-skill:governance/QUALITY_GATES.md`

<!-- blob: b39e39a1fe1576c1aaace5519f987f0ab086d4e5; bytes: 1593 -->

# 通用质量门禁

门禁按交付物选择，不要求每次全跑。

## Gate 0：任务与形式

- 交付形式与用户原话、控制文件和平台约定一致；
- 范围、受众、事实来源、可编辑性和截止条件已明确；
- 没有把参考图、旧方案或技能模板误当成用户批准的方向。

## Gate 1：事实与接口

- 关键事实有来源或被明确标为假设；
- 数值、单位、时间、引用和专有名词已核对；
- 数据模式、API、文件路径和输入输出契约一致；
- 不把代理预测、示例数据或模型推断写成真实验证结果。

## Gate 2：实现与制品

按类型取得实际证据：

- 代码：针对性测试、静态检查、构建或运行结果；
- 数据：模式校验、边界值、样本复算和可重复脚本；
- 文档：结构、链接、术语、引用与目标读者检查；
- 视觉：真实渲染、关键视口、可读性、内容完整性与可编辑交付；
- 写作：事实边界、具体材料、语气、重复和模型腔审校。

## Gate 3：独立审查

高影响交付再增加独立 Reviewer：

- 最可能造成错误结论的是什么；
- 哪个依赖最脆弱；
- 用户实际使用时会在哪里卡住；
- 是否存在安全、隐私、许可或合规风险；
- 是否仍有模板化、过度设计或不必要复杂度。

## Gate 4：交付

- 结果位于约定位置且能被打开或运行；
- 说明执行过的检查及其结果；
- 说明没有检查或无法证明的部分；
- 不夸大完成度，不用长篇过程掩盖核心结果。


---

## SOURCE · `arena/01a060a3-skill:guides/CURATED_SOURCES.md`

<!-- blob: d77353dfff1838e0e55d417c0ed9bfc50ec68616; bytes: 17578 -->

# 精选来源、月度 Star 增速与运行边界

本层固定 22 个经过路径、许可证、包边界与明显执行风险核验的技能包：用户指定的 CyberPPT、figures4papers，第一轮 **恰好 10 个**近一个月高速增长项，以及再次寻宝后 **新增且仅新增 10 个**增长项。机器目录为 [`catalog/curated-skills.json`](../catalog/curated-skills.json)，精确提交、Git tree、入口、Blob 与审计快照见 [`catalog/sources.lock.json`](../catalog/sources.lock.json)。

## 用户指定来源

| 来源 | 固定提交 | 精选入口 | 许可证状态 | 用途 |
|---|---|---|---|---|
| [`crazyykhllc-bit/CyberPPT`](https://github.com/crazyykhllc-bit/CyberPPT) | `980e5576565f0673c67ee41b01d20ed66cb8417c` | `SKILL.md` | MIT | 从文档、报告和数据生成可编辑的咨询风格 PPTX，并做渲染质检 |
| [`ChenLiu-1996/figures4papers`](https://github.com/ChenLiu-1996/figures4papers) | `6790a93af3552539d955d77181c818916e1700b7` | `scientific-figure-making/SKILL.md` | **NOASSERTION** | 科学图表设计、演示、教程和通用模式 |

figures4papers 的固定提交没有发现 LICENSE 或明确仓库许可证。这里的固定与索引不授予额外权利；复制、修改、再分发或商业使用前应向上游核实权限。

## 近一个月高速增长：第一轮最终 10 项

审计窗口为 **2026-07-14 至 2026-08-14**。下列仓库全部在窗口内创建，因此审计时的总 Star 都是在该窗口内获得的；`Stars` 是 2026-08-14 通过 GitHub Repository API 记录的可复核快照，不是未来增长承诺。我们同时读取递归 Git tree、精确 `SKILL.md`、引用文件、脚本边界和许可证文本，再按工作流完整性、差异化能力、质量门禁、可安装边界及明显安全风险筛选。

| # | 精选技能（来源） | 创建时间（UTC） | Stars | 许可证 | 为什么入选 |
|---:|---|---|---:|---|---|
| 1 | `convert-documents-to-markdown` — [`firecrawl/anydoc`](https://github.com/firecrawl/anydoc) | 2026-08-03 | 15,601 | MIT | Word、PowerPoint、Excel、OpenDocument、EPUB、CSV、PDF 到 Markdown 的紧凑执行入口 |
| 2 | `img2threejs` — [`img2threejs/img2threejs`](https://github.com/img2threejs/img2threejs) | 2026-07-15 | 11,572 | Apache-2.0 | 从参考图到程序化 Three.js 模型，带状态机、多视角证据和有界修正循环 |
| 3 | `video-shotcraft` — [`Vincentwei1021/video-shotcraft`](https://github.com/Vincentwei1021/video-shotcraft) | 2026-07-19 | 4,930 | Apache-2.0 | 基于镜头卡、Remotion、真实页面截图、音效与整片复核的产品视频流程 |
| 4 | `simple-english` — [`AminBlg/SimpleEnglish`](https://github.com/AminBlg/SimpleEnglish) | 2026-07-21 | 2,288 | MIT | 面向技术文档和国际读者的受控英语规则、检查表与用例 |
| 5 | `design-evaluation` — [`SeanJ1ang/design-judge-skills`](https://github.com/SeanJ1ang/design-judge-skills) | 2026-07-18 | 1,174 | Apache-2.0 | 透明、证据驱动的设计分类、评分、风险和展示质量评估 |
| 6 | `slides` — [`stackblitz/bolt-slides`](https://github.com/stackblitz/bolt-slides) | 2026-07-14 | 698 | MIT | 可响应、可访问、有导航与构建动画的 React Web 演示文稿工程 |
| 7 | `sssf` — [`disler/super-simple-software-factory`](https://github.com/disler/super-simple-software-factory) | 2026-08-02 | 622 | MIT | 可重复的 Agent + 代码工作流、类型化交接、写入边界和可观测性 |
| 8 | `trace-file-lineage` — [`uczltw6/trace-file-lineage`](https://github.com/uczltw6/trace-file-lineage) | 2026-07-29 | 512 | MIT | 本地文件来源、上下游影响、任务历史、搜索与隐私脱敏 |
| 9 | `qiaomu-seo` — [`joeseesun/qiaomu-seo`](https://github.com/joeseesun/qiaomu-seo) | 2026-08-03 | 364 | MIT | 技术 SEO、内容、迁移、国际化、搜索平台和 AI 搜索的证据化工作流 |
| 10 | `high-stakes-analytics-decision-lab` — [`limingrui679-design/high-stakes-analytics-decision-lab`](https://github.com/limingrui679-design/high-stakes-analytics-decision-lab) | 2026-07-29 | 349 | MIT | 为高后果决策提供从描述到处方分析、数据质量、溯源和不确定性门禁 |

`design-judge-skills` 的上游仓库共有七个 `SKILL.md`，但本层只选择、索引、安装和物化 `skills/design-evaluation/SKILL.md`，避免用六个未经本轮选定的相邻入口突破“恰好 10 个”配额。完整上游仓库仍作为固定 Git 子模块保留，以便核验提交与许可证。

## 再次寻宝：新增且仅新增 10 项

第二轮继续使用 **2026-07-14 至 2026-08-14** 这一可复核窗口。GitHub 查询命中 1,323 个窗口内创建且至少 100 Stars 的仓库；许可证初筛与递归树扫描后，对 31 个仓库中的 232 个 `SKILL.md` 逐个读取，并核对所选入口的完整包、脚本、依赖、法律文件和精确 Blob。最终 10 项的审计时 Stars 合计 **67,998**。它们都在窗口内创建，因此下表总 Stars 是月内增长的保守下界，而不是对未来热度的承诺。

| # | 新增技能（来源） | 创建时间（UTC） | Stars | 许可证 | 为什么入选 |
|---:|---|---|---:|---|---|
| 1 | `record-browser-gif` — [`deepseek-ai/deepseek-harness`](https://github.com/deepseek-ai/deepseek-harness) | 2026-08-13 | 34,181 | MIT | 把真实分支、真实服务和浏览器步骤录成带提交溯源、时长控制与编码复核的 GIF 证据 |
| 2 | `popular-web-designs` — [`yc-software/qm`](https://github.com/yc-software/qm) | 2026-07-29 | 13,405 | MIT | 54 套可检索网页设计参考，给出可落地的颜色、排版、组件、响应式和验证规则 |
| 3 | `better-accessibility` — [`trycompai/crm`](https://github.com/trycompai/crm) | 2026-07-31 | 8,382 | MIT | 从语义、键盘、焦点、表单、命中区、缩放、动画到读屏器的代码审计与修复清单 |
| 4 | `bento-slides` — [`nyblnet/bento`](https://github.com/nyblnet/bento) | 2026-07-17 | 3,974 | MIT | 以单文件 JSON 文档生产交互式 HTML 演示，覆盖图表、Morph、状态页、动效与逐页目检 |
| 5 | `change-traceability-review` — [`QoderAI/better-harness`](https://github.com/QoderAI/better-harness) | 2026-07-21 | 1,828 | MIT | 用 issue、规格、提交、分支和 diff 证据复核改动意图、覆盖与可追溯性 |
| 6 | `oil-motion` — [`oil-oil/oil-motion`](https://github.com/oil-oil/oil-motion) | 2026-08-07 | 1,675 | MIT | 从 Motion Brief、关键帧和质量门到网页图集/绿幕视频优化与多格式交付的完整动效流水线 |
| 7 | `story-to-handdrawn-video` — [`gnipbao/story-to-handdrawn-video`](https://github.com/gnipbao/story-to-handdrawn-video) | 2026-07-21 | 1,357 | MIT | 将故事或本地图页变成手绘 Remotion 视频，带 20 种风格、分镜校验、预览和最终渲染 |
| 8 | `novel-outline` — [`eternityspring/shuohao-skills`](https://github.com/eternityspring/shuohao-skills) | 2026-08-06 | 1,282 | Apache-2.0 | 长篇小说分卷、集、节拍、资产和质量门的分层大纲流程，附零依赖校验与可视报告 |
| 9 | `ai-copywriter` — [`mikiarlo3/ai-copywriter`](https://github.com/mikiarlo3/ai-copywriter) | 2026-07-24 | 971 | MIT | 读者优先的营销文案、微文案和自然语言编辑，明确禁止虚构数据、伪造证明和暗黑模式 |
| 10 | `human-review` — [`petergyang/human-review`](https://github.com/petergyang/human-review) | 2026-07-27 | 943 | MIT | 在回环地址浏览器中让人直接批注 HTML、Markdown 或本地页面，再结构化交还修改意见 |

第二轮采用内容级“新增”门禁：每个所选 `SKILL.md` 的 SHA-256 必须与快索引层、用户指定项、第一轮及本轮其他入口不同。初选的 `KKKKhazix/human-writing` 与仓库既有直接来源同为提交 `4fda173f3fef7fb808f3eba991eeb2528ea4b189`，入口内容也逐字节相同，因此被剔除并由 `ai-copywriter` 替换；最终配额仍严格停在 10。校验器会重新计算这项去重门禁，防止以后把相同技能换一个路径重复计数。

## 能力重叠检查

- `slides` 生产运行中的 React 演示站点；CyberPPT 生产可编辑 PPTX，交付介质不同。
- `design-evaluation` 是评价与证据评分器；现有 `victor-design` 主要承担设计生产。
- `simple-english` 是受控技术英语，不替代通用中文/英文创作技能。
- `trace-file-lineage` 处理本地制品血缘；`high-stakes-analytics-decision-lab` 处理决策分析与数据证据链。
- `anydoc` 做格式转换；figures4papers、CyberPPT 和视频技能做下游视觉交付。
- `bento-slides` 生产可编辑单文件交互式 deck；第一轮 `slides` 是 React 演示站点，CyberPPT 则交付 PPTX。
- `popular-web-designs` 提供 54 套实现参考，`better-accessibility` 承担无障碍审计；它们都不替代 `victor-design` 的原创视觉生产或 `design-evaluation` 的评分职责。Hermes 中同布局的 `popular-web-designs` 是宿主适配包，默认搜索以本轮审计过的 QM 精选包为 canonical；Hermes 路径仍可用 `--source hermes-agent` 显式安装。
- `change-traceability-review` 核对规格、提交与 diff 意图；`trace-file-lineage` 追踪文件制品来源，证据对象不同。
- `oil-motion` 解决网页动效与视频/图集优化，`story-to-handdrawn-video` 解决手绘叙事，第一轮 `video-shotcraft` 解决产品宣传片。
- `novel-outline` 只负责长篇结构与质量门；`ai-copywriter` 聚焦真实、读者优先的营销和微文案；既有 `human-writing` 与 `simple-english` 分别偏中文创作和受控技术英语。
- `human-review` 是人机评审批注通道，`record-browser-gif` 是可追溯演示证据工具；两者都不是另一个写作或视频制作技能。

这些边界和内容哈希门禁保证第二轮新增项补充能力，而不是仅凭 Star、仓库名或路径重复已有技能。

## 静态安全与执行审计

固定或搜索技能**不会自动执行上游脚本**。初始化子模块只取得固定源码；真正运行技能前仍需审查当前任务会触发的命令。静态审计未发现要求上传任意凭据、绕过用户授权或无条件删除用户数据的提示，但不同技能具有以下显式能力边界：

### 第一轮 10 项

| 技能 | 网络、凭据与依赖 | 写入或高影响边界 |
|---|---|---|
| `convert-documents-to-markdown` | 指示 `npx -y @firecrawl/anydoc`，会从 npm 取得可执行包；托管 OCR 是另一个外部 API | 只应处理用户授权文件；需要更强供应链复现性时先固定 npm 版本 |
| `img2threejs` | 核心 Forge 流程以本地 Python 为主；可选视觉/网格适配器会下载模型或使用 Hugging Face 凭据；仓库维护脚本可使用 GitHub token | 在项目/状态目录生成模型、证据与渲染；不要把维护脚本当成建模必需步骤 |
| `video-shotcraft` | 使用 npm/Remotion、浏览器与 ffmpeg；样片拉取脚本会联网 | 生成截图、音频和渲染制品；发布、外部截图和安装依赖前确认授权 |
| `simple-english` | 无运行脚本或必需网络 | 文本改写；保留技术含义并由人复核安全警示 |
| `design-evaluation` | 精选包脚本为本地 Python/JSON 数据处理，无必需网络 | 生成评分和批量评估；不能把“奖项对齐”写成官方评审或获奖预测 |
| `slides` | 完整模板需要 npm/Vite/React | 安装器保留仓库级运行脚手架；发布或替换现有站点前确认目标范围 |
| `sssf` | Agent 阶段可调用模型提供方并读取相应 API key；代码阶段可运行配置的命令 | `bash`、Git checkout 和写文件本质上是高权限能力；必须收紧 `writes`、保护路径、预算和人工门禁 |
| `trace-file-lineage` | 核心扫描是本地的；可调用 Git、OCR 和平台元数据工具 | 默认不跟随外部符号链接并脱敏命令；`run` 会执行用户给出的子命令，导出到外部 Obsidian 路径需显式指定 |
| `qiaomu-seo` | 当前平台规则需要重新打开官方网页；本地校验器无需网络 | 审计默认只读；提交 URL、改索引控制、发布、删页和第三方联系必须显式授权 |
| `high-stakes-analytics-decision-lab` | 核心分析本地运行；真实数据示例支持 HTTPS 下载并带 SSRF/重定向限制 | 可生成案例、报告和清洗数据；高后果结论必须保留来源、不确定性、人工决策和回滚边界 |

### 第二轮新增 10 项

| 技能 | 网络、凭据与依赖 | 写入或高影响边界 |
|---|---|---|
| `record-browser-gif` | 需要现有浏览器控制能力、Python、`ffmpeg`/`ffprobe`；真实演示可读取应用正常使用的 API key，但要求不回显、不另装驱动 | 会启动真实分支服务、调用可能计费的真实模型、截取页面并写入帧/GIF；必须先清除敏感信息、确认成本和精确提交 |
| `popular-web-designs` | 包内只有 Markdown；建议用本地 HTTP、`curl` 与 headless Chromium 目检成品 | 会根据参考写网页；参考是设计语言证据，不是复制第三方商标、文案或受保护素材的授权 |
| `better-accessibility` | 包内没有运行脚本或必需网络；最终结论仍需真实浏览器、键盘及目标读屏器验证 | 可修改用户代码；先审计再做最小修复，不能只凭静态清单宣称合规 |
| `bento-slides` | 新建 deck 会从 `bento.page` 下载最新运行时和 schema；现有文件可能内含协作私钥或邀请凭据 | 只改 `#bento-doc` JSON 块；发现协作密钥必须先告知用户，发布、外链媒体、覆盖 deck 和旋转密钥都需授权 |
| `change-traceability-review` | 主要读取本地 Git 状态、日志、提交、规格和 issue/PR 证据；访问远端 issue/PR 时会联网 | 默认输出评审而非改历史；不得用猜测补齐缺失的 story、提交关系或验收证据 |
| `oil-motion` | 本地管线需要 Python、Pillow、`ffmpeg`/`ffprobe`；可选视频生成向 `zenmux.ai` 发送提示/关键帧并读取 `ZENMUX_API_KEY` 或权限收紧的本地配置 | 会生成关键帧、视频、图集、清单与网页素材，API 可能计费；先锁定方向和预算，不能把密钥写入项目、参数或日志 |
| `story-to-handdrawn-video` | Node 20、锁定的 npm/Remotion 依赖和 ffmpeg；锁文件 URL 指向 `registry.npmmirror.com`，不可达时可用 npm 的 `--registry=https://registry.npmjs.org --replace-registry-host=always` 保持完整性校验并切换镜像；仅用户选择 API 回退时读取 `OPENAI_API_KEY` 并产生外部生成成本 | 会导入本地图页、生成分镜和媒体；`--force` 可替换既有批次，付费生成和覆盖必须显式确认，最终视频需人工目检 |
| `novel-outline` | Node 18 标准库，零 npm 依赖、无必需网络；固定包自测为 200 项 | 在指定工作目录写章节块、大纲和 HTML/Markdown 报告；结构门禁不代表事实核验、版权许可或成稿质量 |
| `ai-copywriter` | 运行时是 Markdown，无模型外的必需网络或依赖；仓库校验器只读取本地包文件 | 产出营销与 UI 文案；禁止捏造指标、评价、研究、客户或稀缺性，发布前核对品牌、隐私、法务和事实 |
| `human-review` | Node 20；`npx -y` 会从 npm 下载，固定源码则可按 `package-lock.json` 安装；服务仅监听 `127.0.0.1`，API 有会话 token、Host 检查和路径边界 | HTML 可由浏览器直接改写并可把粘贴图片写到同目录 `assets/`；Markdown 和 localhost 页面只返回反馈。审阅前备份，确认目标文件与持久化状态目录 |

静态审查不是沙箱或安全担保。不要向不需要凭据的脚本暴露环境变量；先在隔离目录运行；检查依赖锁、网络目标、写入路径和成本；对发布、生产修改、删除、外联和付费操作继续要求用户明确授权。

## 安装与精确选择

```bash
# 初始化一个任务需要的来源，而不是默认加载全部
git submodule update --init full-sources/curated/ai-copywriter

# 重建、搜索并按来源消歧
python scripts/build_curated_catalog.py
python scripts/search_skills.py "ai-copywriter" --json
python scripts/install_skills.py \
  --name ai-copywriter \
  --source ai-copywriter \
  --target /path/to/skills
```

安装器复制被选技能的完整包目录，并把源根的 LICENSE/NOTICE 保存在包内或 `UPSTREAM_NOTICES/`。仓库级运行时会按锁文件的 `packagePath` 保留：第一轮 Bolt Slides 携带 Vite/React 脚手架；第二轮 `oil-motion`、`story-to-handdrawn-video`、`ai-copywriter` 与 `human-review` 保留各自根级脚本、引用、资产或运行时。若精选入口原本不在包根，安装器会额外暴露为安装根 `SKILL.md`。

## 明确排除

`larashero3-dotcom/lieflat-charts` 在审计时有 944 Stars 且包含根 `SKILL.md`，但固定仓库许可证为 **PolyForm Noncommercial 1.0.0**。它不符合只选择宽松开放许可证增长项的策略。

`guillaumemeyer/watermarks-remover` 的主要用途包括删除 C2PA/水印与降低自动检测可见性，并可调用外部去水印后端；这一目标会破坏来源证明，因此即使热度和许可证达标也不入选。逐字节重复的 `human-writing` 同样不能以新路径计为“新增”。

Star 增长不能覆盖许可证、供应链、来源完整性、执行风险或内容去重审查；以上候选均没有占用第二轮 10 项配额。


---

## SOURCE · `arena/01a060a3-skill:guides/DOMAIN_ADAPTATION.md`

<!-- blob: ce0373f247092d5440865419d5cedb7a615e108d; bytes: 2723 -->

# 领域适配：从通用仓库生成项目专家团

## 原则

专家团不是固定名人名单。它是当前项目所需的能力集合，并且每个角色都要有输入、输出和判断标准。

## 第一步：建立项目事实层

接入新方向时先读：

- 项目目标和用户；
- 现有代码、数据与文档；
- 领域术语、单位和已证实结论；
- 资源、时间、部署和合规约束；
- 历史失败、用户偏好与不可更改接口。

这一步生成项目自己的 `TASK_BRIEF.md`、`AGENTS.md` 或知识文档。本仓库不替项目虚构这些事实。

## 第二步：画能力地图

把工作写成若干能力，而不是先想角色名。例如：

| 能力 | 典型问题 | 输出 |
|---|---|---|
| 领域判断 | 哪些规律、术语和边界必须正确 | 事实表、假设表、领域审查清单 |
| 证据获取 | 需要哪些资料、实验或数据 | 来源、数据集、实验记录 |
| 方法实现 | 用什么算法、代码或流程完成 | 可运行制品 |
| 表达设计 | 受众如何理解和使用结果 | 文档、界面、图表、演示 |
| 独立审查 | 什么错误最危险 | 失败项和修正建议 |

## 第三步：检索技能

用“领域 + 交付物 + 方法/风险”搜索三轮，而不是只搜宽泛领域名：

```bash
python scripts/search_skills.py "材料科学 文献综述 引用"
python scripts/search_skills.py "时间序列 不确定性 统计验证"
python scripts/search_skills.py "产品仪表盘 accessibility review"
```

记录候选技能的作用与冲突，最终只保留足以覆盖能力地图的最小集合。

## 第四步：定义专家职责

一个可用角色应写成：

```text
角色：领域证据审查员
输入：数据字典、候选结论、来源列表
职责：核对单位、适用范围、因果表述与证据等级
输出：逐项通过/失败及依据
禁止：改写实现代码、用常识补缺失数据
```

“某某大师视角”只有在它代表清晰方法且不伪造本人意见时才有用。默认使用职责名。

## 第五步：固化为项目本地技能

通用技能经过项目验证后，可以在目标项目中创建本地 adapter：

- 保留上游技能链接和适用版本；
- 只添加项目真实术语、路径、命令和门禁；
- 不复制无关规则；
- 用失败案例和测试验证 adapter；
- 项目事实变化时同步更新。

最终结构可以是：

```text
目标项目/
  AGENTS.md
  TASK_BRIEF.md
  .agents/skills/
    domain-evidence-review/
    implementation-workflow/
    delivery-review/
```

这样，其他方向的 Agent 拿到本仓库后，会形成自己的专家团，而不会继承历史项目的专业结论。


---

## SOURCE · `arena/01a060a3-skill:guides/OFFICIAL_SOURCES.md`

<!-- blob: 0466e9c8554367561e703ba09a9e11f2006a72e9; bytes: 6309 -->

# 官方来源技能层

本仓库把平台发布方维护的技能保留为**固定提交的 Git 子模块**，而不是复制到紧凑索引中。这样可以同时获得上游完整包、可审计版本和较小的主仓库体积。

> “官方来源”只表示所固定仓库由对应发布方账号维护，不表示本仓库替发布方背书，也不表示仓库内所有内容采用同一许可证。

## 当前固定范围

| 来源 | 固定提交 | `SKILL.md` | 许可口径 | 状态 |
|---|---|---:|---|---|
| OpenAI Plugins | `11c74d6ba24d3a6d48f54a194cd00ef3beea18f9` | 608 | 混合、按插件/技能核验；无根许可证 | 当前 Codex 插件市场来源 |
| OpenAI Skills | `49f948faa9258a0c61caceaf225e179651397431` | 44 | 按技能目录内许可证核验 | 上游已标记 deprecated；保留为旧版审计快照 |
| Vercel Agent Skills | `b8caa260a420a73042e35521de4b5c8baf6446cc` | 9 | 固定 README 声明 MIT，但没有独立根许可证文件 | 当前固定快照 |
| Microsoft Skills | `e58528db9a006528a5fb0a2c029790fa6a9a7c0e` | 198 | 根许可证 MIT；仍需遵守插件内附加 notices/许可证 | 当前固定快照 |

合计 **859** 个原始入口。机器目录 [`catalog/official-skills.json`](../catalog/official-skills.json) 保留每条上游路径，其稳定身份是 `sourceId:上游路径`；来源、版本和许可口径锁在 [`catalog/sources.lock.json`](../catalog/sources.lock.json)。默认搜索通过 [`catalog/overlap-policy.json`](../catalog/overlap-policy.json) 隐藏 19 个可解析别名，显示 840 个官方主入口：3 个 exact-blob 包装副本，以及 deprecated `openai-skills` 中 16 个已有当前 `openai-plugins` 同名后继的入口。上游 gitlink、原目录记录和显式安装能力均未删除。

## 查找与安装

搜索会同时读取紧凑目录、官方目录、科研目录和精选目录：

```bash
python scripts/search_skills.py "github review comments"
python scripts/search_skills.py "Azure deploy" --json
python scripts/search_skills.py "React performance" --category engineering-code
# 审计包装副本或 deprecated 入口时才展开别名
python scripts/search_skills.py "gh-address-comments" --include-aliases --json
```

只初始化需要的官方来源，或一次初始化全部来源：

```bash
git submodule update --init full-sources/official/openai-plugins
git submodule update --init full-sources/official/microsoft-skills
git submodule update --init --recursive
```

将选中的完整技能包复制到 Agent 技能目录：

```bash
python scripts/install_skills.py \
  --name gh-address-comments \
  --source openai-plugins \
  --target ~/.agents/skills
```

若同一来源内仍有同名入口，用目录中的精确 `path` 消除歧义：

```bash
python scripts/install_skills.py \
  --name react-best-practices \
  --source openai-plugins \
  --path full-sources/official/openai-plugins/plugins/vercel/skills/react-best-practices/SKILL.md \
  --target ~/.agents/skills
```

`--dry-run` 可在不复制文件时展示选定来源、目标和许可证标签。完整物化工具会把这些来源放在 `full-library/official/`，并写入 `MANIFEST.json`：

```bash
python scripts/materialize_full_library.py
```

## 选择规则

1. 产品或平台专属任务优先选择该平台**当前**官方来源，例如新 Codex 能力优先 `openai-plugins`。
2. 本仓库维护入口承担治理、路由或跨来源组合时，优先使用维护入口，再调用官方技能作为专家包。
3. `openai-skills` 是上游已弃用的旧来源。16 个同名后继默认转到当前 Plugins；只有需要旧行为或复现实验时才用 `--source openai-skills` 或精确 `--path` 选择别名。
4. 同名本身不是压缩依据。除已审计的后继/包装规则外，仍比较 `sourceId`、路径、描述、固定提交和许可，再明确选定一个入口。
5. 使用前阅读整个技能包，不只读 `SKILL.md`；同时检查相邻 `LICENSE*`、`NOTICE*`、脚本、依赖和连接器配置。
6. 涉及发送消息、部署、删除、付费、权限、生产环境或外部连接器时，仍需显式授权、最小权限和执行前确认。

## 许可边界

- Git 子模块是指向上游固定提交的引用；初始化后获得的内容仍受各上游条款约束。
- `openai-plugins` 没有统一根许可证，不能把 608 个入口统称为 MIT 或 Apache-2.0。
- `openai-skills` 的 README 要求在各技能目录查找许可证；文件名大小写也可能不同。
- Vercel 的固定 README 声明 MIT，但固定树中没有独立根 `LICENSE`。本目录如实记录这一差异，不把缺失文件补写成上游许可证。
- Microsoft 有根 MIT 许可证，但某些插件可能包含第三方组件、数据或附加 notices；根许可证不自动覆盖所有外部权利。

### 继承的 Anthropic 文档技能

紧凑社区快照中已有以下四个目录，它们各自带有明确的限制性 `LICENSE.txt`：

- `skills/community/skills-main/skills/docx/`
- `skills/community/skills-main/skills/pdf/`
- `skills/community/skills-main/skills/pptx/`
- `skills/community/skills-main/skills/xlsx/`

其许可文本把使用行为与 Anthropic 服务协议关联，并明确限制在服务外提取或保留、复制、创作衍生作品及分发等行为。**不要把这些目录当作开放源码技能安装、复制、修改或再分发。**只有在适用协议明确授权时才使用；否则选择目录中的其他文档技能。正因为这些条款，本次没有再增加 Anthropic 当前仓库的直接官方子模块。

本说明不是法律意见；最终使用者需核验与其场景、地区和协议相符的权利。

## 维护与验证

更新来源时必须先审计目标提交，再同时修改 gitlink、`officialSources` 锁和目录：

```bash
python scripts/build_official_catalog.py
python scripts/build_catalog.py
python scripts/validate_repository.py
```

目录构建器从固定 Git 树读取全部 `SKILL.md`，记录 Git blob ID，并为缺少可移植 frontmatter 的旧入口使用父目录名作为回退。验证器检查来源数量、gitlink 提交、稳定身份、路径覆盖和 blob 一致性；未初始化官方子模块时会给出警告，并继续执行锁与目录结构检查。


---

## SOURCE · `arena/01a060a3-skill:guides/RESEARCH.md`

<!-- blob: a8aa9e0f92cc7dd5dc9b588b776ab6db53bf9f75; bytes: 11716 -->

# 世界级科研能力使用指南

本指南把仓库中的科研技能组织成一套可审计、可复现、有人类门禁的研究系统。它追求的是更可靠的科研过程，不承诺“自动产出顶刊论文”。

## 1. 已全量固定的科研源

所有项目均以 Git 子模块固定到明确提交。初始化后可获得完整 SKILL、references、scripts、assets、测试、示例及项目工具。

| 来源 | 固定能力 | 技能入口 | 许可证状态 |
|---|---|---:|---|
| Academic Research Skills | 深度研究、写作、评审和 10 阶段 pipeline | 4 | CC BY-NC 4.0，仅非商业 |
| ARS-Codex | ARS 的 Codex 原生适配 | 2 | CC BY-NC 4.0，仅非商业 |
| Nature Skills | 检索、统计、绘图、写作、润色、回复和 PPT | 19 | Apache-2.0 |
| Scientific Agent Skills | 生命科学、医学、化学、材料、物理、数据库和计算工具 | 161 | MIT |
| ARIS | 自主 ML 选题、实验、审查、写作与 rebuttal | 187 | MIT |
| AI Research Skills | AI/ML 研究工程全栈 | 98 | MIT |
| Research Paper Writing Skills | ML/CV/NLP 学术写作 | 1 | MIT |
| PaperSpine | 论文论点主线、证据蓝图、改稿和 LaTeX 审计 | 5 | MIT |
| Paper Craft Skills | 论文深读、方法图、文章和 Deck | 3 | README 声明 MIT，但无独立 LICENSE |
| Hermes Agent | research-paper-writing、arxiv、ideation、Notebook 等 | 197 | MIT |
| hamelnb | live Jupyter kernel 与变量/单元格操作 | 3 | 未发现明确许可证 |

机器目录：[`../catalog/research-skills.json`](../catalog/research-skills.json)。来源锁：[`../catalog/sources.lock.json`](../catalog/sources.lock.json)。680 条原始路径全部保留；默认搜索按 [`../catalog/overlap-policy.json`](../catalog/overlap-policy.json) 隐藏 26 个可解析别名，显示 654 个科研主入口：ARS-Codex 1 个、ARIS 9 个和 PaperSpine 3 个 exact-blob 包装副本，AI Research Skills 中与 Hermes 指令等价的 12 个入口，以及 Hermes 的 host-specific `popular-web-designs`。后者默认使用经过本仓库精选审计的 QM 包。

> 技能数量是固定提交中的 `SKILL.md` 路径数，不是质量排名。相同技能可能在不同项目中重复，实际使用时仍执行最小组队；未进入别名策略的相似实现继续并存。

## 2. 初始化

```bash
git submodule update --init --recursive
```

只初始化科研源：

```bash
git submodule update --init --recursive full-sources/research
```

生成去除冗余压缩档的本地全量科研工作区：

```bash
python scripts/materialize_full_library.py
```

科研项目会出现在 `full-library/research/<source-id>/`。该目录被 Git 忽略，不向主仓库提交。

## 3. 科研技能搜索

```bash
python scripts/search_skills.py "systematic review citation verification" --limit 20
python scripts/search_skills.py "RNA-seq differential expression pathway" --limit 20
python scripts/search_skills.py "ML experiment ablation reproducibility" --limit 20
python scripts/search_skills.py "论文 论点 证据 改稿 LaTeX" --limit 20
python scripts/search_skills.py "arxiv ideation jupyter live kernel" --limit 20
# 仅在复现上游包装或比较来源时展开别名
python scripts/search_skills.py "chroma" --include-aliases --json
```

搜索结果中的 `full-source` 路径只有在初始化子模块后才能直接读取。安装默认选择 canonical；`--source ai-research-skills`、`--source hermes-agent` 或精确 `--path` 仍可解析被抑制的原来源路径。

## 4. 研究项目启动简报

```markdown
# RESEARCH_BRIEF

## 负责人和决策权
- 研究负责人：
- AI 可自主执行：
- 必须人工批准：

## 研究问题
- 目标问题：
- 研究对象和范围：
- 明确不回答：

## 当前证据
- 已有数据：
- 已有文献：
- 已有代码/模型：
- 未验证假设：

## 方法边界
- 研究类型：探索 / 验证 / 系统综述 / 复现 / 方法开发
- 主要指标：
- 约束与预算：
- 停止规则：

## 伦理与合规
- 人体/动物/临床：
- 隐私和敏感数据：
- 双重用途风险：
- 所需审批：

## 交付
- 论文/报告/代码/数据/图表/演示：
- 目标 venue：
- 截止时间：
- 验收与复现方式：
```

## 5. 完整科研生命周期

### 阶段 0：问题定义

目标是得到可检验的问题，不是漂亮题目。

检查：

- 对象、干预/变量、对照和结果是否明确；
- 贡献属于新现象、新方法、新数据、新解释还是工程改进；
- 成功和失败如何定义；
- 哪些结论超出当前设计能力。

推荐：ARS Socratic、Hermes ideation、ARIS idea-discovery。最终问题必须由研究负责人批准。

### 阶段 1：文献与证据地图

建立可复查检索，而不是让模型凭记忆列论文。

至少记录：

- 数据库和检索日期；
- 完整检索式；
- 纳入/排除规则；
- 去重方法；
- 每篇材料的 DOI/URL、版本和访问日期；
- 结论由原文哪一页、图、表或段落支持。

系统综述按领域选择 PRISMA 等规范。引用存在性和论点支持关系要分开核验。

### 阶段 2：假设、协议和统计计划

在读取最终结果前固定：

- 主要/次要假设；
- 主要/次要指标；
- 样本量或功效依据；
- 数据排除与异常值规则；
- 统计模型、协变量和多重比较处理；
- 消融、对照、基线和稳健性分析；
- 停止规则。

事后新增分析必须标为探索性。

### 阶段 3：数据与实验

数据血缘：

```text
原始输入（只读）
  → 清洗脚本
  → 分析数据
  → 实验配置
  → 原始输出
  → 汇总表
  → 图表和论文数字
```

每个数字应能沿链路追溯。保存环境锁、代码提交、种子、硬件、配置、日志和失败运行。

ARIS 或 AI Research Skills 可执行 ML 实验，但必须限制目录、成本、时间、GPU 和外部服务权限。

### 阶段 4：分析与可视化

统计审查：

- 模型假设是否成立；
- 是否存在数据泄漏和重复测量处理错误；
- 是否报告效应量和置信区间；
- 多重比较是否控制；
- 缺失数据如何处理；
- 结论对参数、样本和随机种子是否稳健；
- 图表是否展示分布，而非只展示均值；
- 坐标轴、单位、误差条和样本量是否完整。

使用 hamelnb 做探索时，最终必须重启 kernel 并从头运行，不能只依赖存活状态。

### 阶段 5：Claim–Evidence Matrix

写论文前建立：

| Claim ID | 结论 | 类型 | 数据/图表 | 统计证据 | 文献支持 | 限制 | 状态 |
|---|---|---|---|---|---|---|---|
| C-01 |  | 主要/次要/探索 |  |  |  |  | draft/verified/rejected |

没有证据行的 claim 不进入摘要和结论。背景引用不能替代本研究数据，相关性不能写成因果。

### 阶段 6：论文写作

推荐组合：

```text
总控：research-expert-system / ARS-Codex
论点：PaperSpine
段落：Research Paper Writing Skills 或 Nature Writing
统计与图：Nature Skills / Scientific Agent Skills
风格审校：human-writing 或 humanizer-zh（不能改动科学含义）
```

写作顺序可按项目选择，但摘要必须最后根据已验证正文更新。所有表格、正文数字、补充材料和代码输出必须一致。

### 阶段 7：同行评审、修订和 Rebuttal

独立 Reviewer 检查：

- 新颖性是否只在有限检索范围内成立；
- 方法是否能回答研究问题；
- 基线和消融是否公平；
- 数据和代码能否支持每项结论；
- 有无过度宣称、遗漏负结果或选择性报告；
- 图表和文字是否矛盾；
- 引用是否准确；
- 复现材料是否足够。

修订使用可追踪矩阵：审稿意见 → 判断 → 修改位置 → 新证据 → 未采纳理由。不得伪造补实验。

### 阶段 8：复现、投稿与传播

发布包至少包括：

- README 和运行顺序；
- 环境与依赖锁；
- 数据来源、许可和校验值；
- 主分析脚本；
- 生成图表和表格的脚本；
- 配置、种子与预计资源；
- 已知差异和不可复现部分；
- AI 使用披露（遵循 venue 要求）。

Paper Craft 和 Nature Skills 可生成汇报或视觉解释，但传播材料不得比论文证据更强。

## 6. 专家团配置

### 文献综述

```text
负责人：用户
总控：ARS deep-research
检索与证据：Hermes arxiv + Scientific Agent 数据库技能
审查：citation verification + independent reviewer
```

### 生物/医学/化学研究

```text
总控：research-expert-system
领域计算：Scientific Agent Skills
统计：statistical-analysis / power
写作：Nature Skills
审查：领域专家 + 伦理/隐私审查
```

医疗技能仅支持科研，不替代临床诊断和治疗决策。

### AI/ML 研究

```text
总控：ARS-Codex 或 ARIS research-pipeline
研究工程：AI Research Skills
实验：ARIS + hamelnb
论文：PaperSpine + Research Paper Writing Skills
审查：ARIS adversarial review + 人类研究负责人
```

### 论文改稿

```text
证据审计：PaperSpine
结构/段落：Research Paper Writing Skills
期刊表达与图表：Nature Skills
独立审稿：ARS reviewer
```

不得通过“润色”改变结果方向、效应大小和限制。

### 文献汇报与方法图

```text
深读：Paper Craft paper-analyzer
论点核验：PaperSpine
图/Deck：Paper Craft + Nature Skills
审查：原论文逐图逐 claim 对照
```

## 7. 研究证据等级

可按项目调整，但必须在项目内一致：

| 等级 | 含义 | 可支持的措辞 |
|---|---|---|
| E0 | 想法或未验证假设 | “我们假设”“待验证” |
| E1 | 文献或静态材料支持 | “已有研究报告”并附来源 |
| E2 | 探索性分析/单次实验 | “初步观察到” |
| E3 | 预定协议、多次运行和稳健性检查 | “结果支持” |
| E4 | 独立复现、外部验证或真实部署 | “在指定边界内得到验证” |

不能用更高等级措辞包装较低等级证据。

## 8. 自动化科研安全阀

在启动无人值守循环前写清：

```yaml
max_rounds: 3
max_wall_time_hours: 4
max_compute_cost: 20 USD
allowed_directories:
  - experiments/
allowed_network:
  - arxiv.org
  - api.crossref.org
human_approval_required_for:
  - changing primary hypothesis
  - purchasing compute
  - external publication
  - deleting raw data
stop_on:
  - budget exceeded
  - repeated failure twice
  - evidence integrity failure
```

不要允许 Agent 无限循环、无限花费或自行发布。

## 9. 研究诚信红线

- 不编造论文、DOI、作者和引用；
- 不编造或补齐实验数据；
- 不删除不符合预期的样本或运行，除非按预定规则；
- 不 p-hacking、HARKing 或只报告最好种子；
- 不把模型生成的解释当机制证据；
- 不将私密数据发送给未批准的模型服务；
- 不绕过 IRB、伦理审查、生物安全或数据许可；
- 不代写需要申明个人原创的作业或审稿意见；
- 不隐瞒 AI 在文稿和分析中的实质参与。

## 10. 最终交付清单

- [ ] 研究问题和范围由负责人确认；
- [ ] 检索过程可复查；
- [ ] 关键引用存在且支持对应论点；
- [ ] 协议、假设和探索性分析已区分；
- [ ] 数据血缘、环境、种子和运行日志完整；
- [ ] 统计方法、效应量、不确定性和限制完整；
- [ ] 每项核心 claim 有证据映射；
- [ ] 独立审查已完成；
- [ ] 论文、图表、代码和补充材料一致；
- [ ] 复现说明经过从头运行验证；
- [ ] 许可、隐私、伦理和 AI 披露已检查；
- [ ] 未验证内容没有被写成事实。


---

## SOURCE · `arena/01a060a3-skill:guides/TOOLS.md`

<!-- blob: 0162cf2ef4f6227f929566f5838cdf1fd6332269; bytes: 5766 -->

# OpenCut、RustDesk 与 GitHub Spec Kit 本地工具

本页把“固定源码”“安装依赖”“可执行程序”“实际运行验证”分开记录，避免把一个 Git 子模块误报成已经可用的应用。三个上游都以 Git 子模块锁定在 `full-sources/tools/`，版本身份见 `catalog/sources.lock.json`。

## 当前固定版本与本次环境状态

| 工具 | 固定源码 | 本地安装/运行状态 | 入口 |
|---|---|---|---|
| OpenCut | `400f097becba5db0fbc305d5a65348cb81c20356` (`main`, 2026-08-01) | Bun `1.3.11` 和 665 个 web 依赖已安装；开发服务器已在 `0.0.0.0:5173` 启动并取得 HTTP 200 | `tools/opencut/` |
| RustDesk | `6c578292e8ebbbec708b76986ba8c4bc7c509747` (`1.4.9`) | 稳定源码已安装并核验；本次沙箱到 GitHub release-assets 的 TLS 连接持续中断，因此原生 Debian 包**未完成安装，也未宣称 GUI 可运行** | `tools/rustdesk/` |
| GitHub Spec Kit | `d1f50fcbe684a4222059c4ba7f2d7eabcca87402` (`v0.16.4`) | `specify-cli 0.16.4` 已装在 `~/.local/share/specify-cli/venv`，`~/.local/bin/specify` 可用 | `tools/spec-kit/` |

这里的本地依赖、虚拟环境、下载包、`node_modules` 和生成文件都不提交；仓库只提交可复现脚本、技能入口、文档和精确 gitlink。

## 一键准备

```bash
# OpenCut + Spec Kit + RustDesk 固定源码（不自动强装原生 GUI 包）
bash scripts/setup_tools.sh all

# 查看精确子命令
bash scripts/setup_tools.sh --help

# 核验三个源码 pin、Bun 与 Specify CLI
bash scripts/verify_tools.sh
```

`all` 故意只初始化 RustDesk 源码：原生包与操作系统、架构、桌面会话、安全策略有关，不应在无确认时静默安装或启动远控。

## OpenCut：安装并运行

```bash
bash scripts/setup_tools.sh opencut
HOST=0.0.0.0 PORT=5173 bash scripts/run_opencut.sh
```

另一个终端检查：

```bash
curl --fail --show-error http://127.0.0.1:5173/
```

固定提交当前没有 Bun lockfile，所以安装器使用上游 `package.json` 并加 `--no-save`，不会生成待提交锁文件。它是开发运行，不是生产部署。启动时 Cloudflare Vite 插件可能因外网不可达而提示无法取得 `Request.cf`，随后采用本地占位值；应以 HTTP 页面和实际编辑操作判断是否可用，而不是只看这条非致命提示。

本次 `bun run build` 已通过，`/` 与 `/editor` 均返回 HTTP 200。`bun run test` 则在收集测试前因当前 Vite/Cloudflare worker 组合报 `depsOptimizer is required in dev mode`；因此不能把单元测试标为通过。这是上游无锁、含 `latest` 依赖的当前安装状态，修复前应以“构建和页面验证通过、测试启动受阻”准确报告，不要静默忽略。

若开发服务器重排 `apps/web/src/routeTree.gen.ts`，那是上游路由生成器的本地副作用；除非确实修改了路由，否则不要把它作为本仓库改动提交。

## Spec Kit：安装并用于项目

```bash
bash scripts/setup_tools.sh spec-kit
specify --version
specify check
```

在目标项目中，先阅读已有 `AGENTS.md`、需求和约束，再选择集成并初始化。不要无审查覆盖已有规则：

```bash
cd /path/to/project
specify init --here --integration <integration>
```

随后按 constitution → specify/clarify → plan → tasks → implement → converge/verify 推进。具体 Agent 的命令可能是 `/speckit.*` 或 `$speckit-*`，以初始化结果为准。

## RustDesk：源码、包与 GUI 分级验证

### 1. 固定源码

```bash
bash scripts/setup_tools.sh rustdesk-source
```

这一步可用于审计或后续平台构建，但不等于有原生可执行文件。

### 2. Debian x86_64 用户级包

安装器只接受从官方发布页取得的 `1.4.9` x86_64 Debian 包，并核验固定发布文件大小、包名、版本和架构，然后解压到 `~/.local/share/rustdesk/root`；不调用 `sudo` 或修改系统 dpkg 数据库。该发布没有上游 checksum 清单，所以这些元数据检查**不是密码学来源证明**；离线传入的文件仍必须经可信渠道从官方页面取得，不能用同尺寸或同元数据替代真实性。

```bash
# 网络可直接访问官方 GitHub release asset 时
bash scripts/setup_tools.sh rustdesk-package

# 或先从官方发布页下载，再明确传入文件
RUSTDESK_PACKAGE=/absolute/path/rustdesk-1.4.9-x86_64.deb \
  bash scripts/setup_tools.sh rustdesk-package
```

脚本不会自动改用第三方镜像。官方资产无法到达时，必须报告“源码已固定、二进制安装受阻”，不能把零字节/半截下载当成包，也不能把未经验证的镜像文件当成官方制品。

### 3. 原生桌面运行

```bash
bash scripts/run_rustdesk.sh
```

必须有 X11 或 Wayland 会话、兼容动态库，并获得远端与本端所有者的明确授权。原生 GUI 不能在浏览器 Live Preview 中等价验证。分别报告：源码 pin、包元数据、依赖检查、GUI 启动、授权连接测试；没有做过的层级必须明确标为未验证。

## 安全与许可

- OpenCut 和 Spec Kit 固定提交采用 MIT；RustDesk 固定提交采用 AGPL-3.0。原始许可证保留在各子模块中。
- OpenCut 素材可能包含个人、商业或版权敏感内容，不得擅自上传。
- RustDesk 可暴露屏幕、输入、剪贴板、音频、文件和隧道，只能用于知情、授权的远程支持；禁止隐蔽控制、绕过同意、凭据窃取或持久化。
- Spec Kit 会向目标项目写入模板和 Agent 配置；初始化前先审查目标路径与已有文件。
- 依赖安装与外网下载属于有副作用操作；自动化前应明确网络、凭据、文件写入和许可证边界。


---

## SOURCE · `arena/01a060a3-skill:guides/USAGE.md`

<!-- blob: 99bdddfc8945b6b309d3447aa3f8e49226bc40ff; bytes: 32067 -->

# SKILL 运用指南

> 本文件是孙承泽通用技能仓库的完整操作手册。它回答五个问题：怎么找到技能、怎么选、怎么组合成专家团、怎么执行、怎么证明交付合格。
>
> 本仓库不预设具体专业方向。目标项目的事实、用户要求和验收标准始终高于历史技能中的项目偏好。

---

## 0. 先看结论

使用本仓库时，默认执行下面这条最短链路：

```text
读目标项目
  → 写清任务和验收标准
  → 搜索 8–12 个候选技能
  → 选 1 个主技能 + 0–2 个支撑技能 + 0–1 个审查技能
  → 只加载命中的 SKILL.md 和必要 references
  → 按制品契约执行
  → 用实际命令、来源或渲染结果验证
  → 交付结果、证据和剩余限制
```

四条底线：

1. **不全量加载。** 两千多个技能同时进入上下文，只会互相干扰。
2. **不按名气选技能。** 看任务匹配度、输入输出和验证方法。
3. **不把历史项目事实带进新项目。** 风电、叶轮机械、校园公益等内容只是历史来源，不是全局默认。
4. **没有验证，不宣布完成。** “应该能用”不等于已经通过。

---

## 1. 仓库里现在有什么

紧凑目录 `catalog/skills.json` 当前包含 **2,182 个 `SKILL.md` 入口**。统一搜索还加载 859 个官方入口、680 个科研入口和 22 个精选入口，原始目录共保留 **3,743 个入口路径**。默认搜索排除 613 个 variants 和 45 个有明确 canonical 的目录别名，返回范围为 **3,085 个主候选**；来源身份仍按 `sourceId:path` 保留。

| 层级 | 数量 | 含义 | 默认使用方式 |
|---|---:|---|---|
| `router` | 1 | 根路由技能 | 每个新项目先读 |
| `maintained` | 10 | 本仓库直接维护或明确装载的核心技能 | 优先使用 |
| `community` | 1,556 | 历史技能并集选出的资源完整主版本 | 按任务搜索 |
| `variant` | 613 | 同名且规范化指令正文不同的备选版本 | 主版本不合适时再读 |
| `tool-bundled` | 2 | OpenWiki 随工具附带的技能 | 使用对应工具时读取 |

### 全量源与快索引

仓库采用两层结构：

- **全量权威层**：`full-sources/`。固定到每个上游提交，包含历史集合、直接装载、科研、官方和精选来源的完整技能包、资源与项目代码；
- **快速检索层**：`skills/community/`、`skills/variants/` 和四个机器目录。用于快速搜索与渐进加载，不代表上游完整文件边界；精选目录只暴露锁文件选中的入口。

首次克隆后执行：

```bash
git submodule update --init --recursive
```

如需一个去重后的完整工作目录：

```bash
python scripts/materialize_full_library.py
```

输出位于被忽略的 `full-library/`。默认删除已有解压内容的压缩副本；同路径、不同内容的文件会保留到 `source-variants/`，不会静默覆盖。精选来源只物化 `catalog/sources.lock.json` 明确选择的包；bolt-slides 是例外，它以仓库根应用为运行包，同时在安装根暴露所选 `SKILL.md`。

| 补充来源层 | 机器目录 | 治理说明 |
|---|---|---|
| 官方发布方 | `catalog/official-skills.json` | [`OFFICIAL_SOURCES.md`](OFFICIAL_SOURCES.md) |
| 科研全量 | `catalog/research-skills.json` | [`RESEARCH.md`](RESEARCH.md) |
| 精选与月度 Star 增速 | `catalog/curated-skills.json` | [`CURATED_SOURCES.md`](CURATED_SOURCES.md) |

### 1.1 维护级技能

| 技能 | 用途 | 入口 |
|---|---|---|
| `universal-skill-router` | 通用检索和最小组队 | [`../SKILL.md`](../SKILL.md) |
| `official-source-router` | 官方发布方来源选择、消歧与许可边界 | [`../skills/core/official-source-router/SKILL.md`](../skills/core/official-source-router/SKILL.md) |
| `human-writing` | 中文创作、改稿、现实与虚构边界 | [`../skills/community/human-writing/SKILL.md`](../skills/community/human-writing/SKILL.md) |
| `humanizer-zh` | 系统识别和清除中文 AI 痕迹 | [`../skills/core/humanizer-zh/SKILL.md`](../skills/core/humanizer-zh/SKILL.md) |
| `stop-slop` | 快速删除模板腔和空泛表达 | [`../skills/core/stop-slop/SKILL.md`](../skills/core/stop-slop/SKILL.md) |
| `victor-design-system` | 海报、演示、产品 UI 的证据驱动设计 | [`../skills/community/victor-design/SKILL.md`](../skills/community/victor-design/SKILL.md) |
| `openwiki` | 生成和维护代码库 Agent 文档 | [`../tools/openwiki/SKILL.md`](../tools/openwiki/SKILL.md) |
| `screencoder` | 将 UI 截图重建为可编辑 HTML/CSS | [`../tools/screencoder/SKILL.md`](../tools/screencoder/SKILL.md) |
| `research-expert-system` | 全科研生命周期路由、证据与研究诚信门禁 | [`../skills/core/research-expert-system/SKILL.md`](../skills/core/research-expert-system/SKILL.md) |
| `ai-cabinet-decision-making` | 重要决策的五席位压力测试 | [`../skills/core/ai-cabinet/SKILL.md`](../skills/core/ai-cabinet/SKILL.md) |
| `multi-agent-orchestration` | 复杂任务的多 Agent 编排 | [`../skills/core/multi-agent-orchestration/SKILL.md`](../skills/core/multi-agent-orchestration/SKILL.md) |

> 表中包含根路由，因此入口数比 `maintained` 层级多一个。

### 1.2 社区技能大类

非 variant 主入口目前按目录元数据分为：

| 分类 | 数量 | 典型内容 |
|---|---:|---|
| `engineering-code` | 351 | 编码、测试、调试、前后端和 API |
| `agents-orchestration` | 317 | Agent、MCP、记忆、工作流、技能开发 |
| `design-media` | 200 | UI、视觉、演示、图像、视频和动效 |
| `general` | 192 | 暂不宜归入单一专业分类的通用技能 |
| `business-strategy` | 139 | 产品、市场、运营、商业和决策 |
| `security-compliance` | 111 | 安全、隐私、合规和审计 |
| `documents-data` | 100 | PDF、Word、表格、数据和数据库 |
| `research-science` | 80 | 文献、科研、统计和同行评审 |
| `writing-content` | 66 | 写作、内容和传播 |

分类是搜索辅助，不是严格学科边界。一个技能可能同时跨越多个方向。

---

## 2. 指令优先级

任何技能发生冲突时，按以下顺序裁决：

1. 用户当前明确要求，以及适用的安全和法律边界；
2. 目标项目的 `AGENTS.md`、需求、事实文件和验收标准；
3. 本仓库 [`../AGENTS.md`](../AGENTS.md) 与 `governance/`；
4. 当前明确选中的主技能；
5. 支撑技能与审查技能；
6. variants、示例和模板。

### 2.1 常见冲突怎么处理

| 冲突 | 处理原则 |
|---|---|
| 技能要求一种交付形式，用户明确要求另一种 | 听用户的 |
| 历史技能带有领域事实，新项目没有证据支持 | 删除历史事实，重新建立项目事实层 |
| 两个技能给出不同流程 | 选择更贴近当前交付物和验收标准的一套，不机械拼接 |
| 设计技能与品牌规范冲突 | 品牌规范优先 |
| 写作技能与事实边界冲突 | 事实准确优先于文风 |
| 审查技能提出范围外优化 | 记录但不擅自扩项 |
| variant 与 community 主版本冲突 | 默认主版本；只有明确理由才切换 variant |

专项 `SKILL.md` 是方法，不是上位命令。任何技能都不能替目标项目虚构数据、授权、用户偏好或审批结果。

---

## 3. 五层使用模型

把一次技能调用分成五层，可以避免“搜到什么就用什么”。

### 3.1 事实层

先回答：

- 项目要解决什么问题；
- 用户和受众是谁；
- 已有代码、数据、文档与素材是什么；
- 哪些结论已经证实；
- 哪些内容只是猜测；
- 时间、预算、平台、技术和合规限制是什么。

事实层来自目标项目，不来自技能仓库。

### 3.2 能力层

把任务拆成需要的能力槽位：

- **领域能力**：专业规律、术语、法规、行业知识；
- **证据能力**：检索、实验、统计、引用、事实核查；
- **生产能力**：代码、文案、设计、图表、演示、文档；
- **审查能力**：准确性、安全、可用性、风格、反例；
- **协调能力**：任务确实可并行时才启用。

### 3.3 技能层

为每个必要槽位选择技能。一个技能能覆盖就不要选两个。

### 3.4 执行层

把技能要求转成具体文件、命令、负责人和制品契约。

### 3.5 证据层

用测试、来源、复算、渲染、链接检查或人工审阅证明结果，而不是让执行者自己说“完成了”。

---

## 4. 从零开始的标准流程

## 阶段 A：建立任务简报

非琐碎任务先在内部或文件中完成下面这张表：

```markdown
# TASK_BRIEF

## 目标
用户最终要得到什么？

## 受众与使用场景
谁会在什么条件下使用？

## 输入
已有代码、数据、文字、图片、链接、规范。

## 输出
文件路径、格式、数量、尺寸、接口或回答形式。

## 事实与未知
- 已确认：
- 需要核验：
- 暂定假设：

## 约束
时间、预算、技术栈、品牌、法律、安全、不可改接口。

## 验收标准
1.
2.
3.

## 验证方式
命令、测试、来源、复算、截图、渲染或审查清单。
```

### 什么时候必须追问

满足任一条件时，先问最多三个集中问题：

- 不同理解会产生完全不同的交付物；
- 缺少私人经历、品牌决定或授权；
- 缺少不可公开检索的核心事实；
- 操作不可逆或风险较高；
- 用户要求的格式、数量和范围互相矛盾。

能通过低风险假设推进时，可以继续，但必须标明假设。

## 阶段 B：生成搜索词

搜索词使用下面的结构：

```text
领域词 + 交付物 + 方法或风险
```

不要只搜“设计”“研究”“代码”。示例：

```bash
python scripts/search_skills.py "React dashboard accessibility testing" --limit 12
python scripts/search_skills.py "中文 人物稿 事实核查" --limit 12
python scripts/search_skills.py "生物信息 文献综述 统计" --limit 12
python scripts/search_skills.py "海报 subject evidence editable delivery" --limit 12
python scripts/search_skills.py "API security threat review" --limit 12
```

中英文术语混搜通常更容易命中不同来源的技能。

### 搜索命令

```bash
# 默认搜索，不显示 variants
python scripts/search_skills.py "关键词" --limit 12

# 限定分类
python scripts/search_skills.py "关键词" \
  --category research-science \
  --limit 12

# 比较同名不同版本
python scripts/search_skills.py "关键词" \
  --include-variants \
  --limit 20

# 输出 JSON，便于 Agent 二次筛选
python scripts/search_skills.py "关键词" --json
```

可用分类：

```text
agents-orchestration
business-strategy
design-media
documents-data
engineering-code
research-science
security-compliance
writing-content
general
```

## 阶段 C：筛选候选技能

不要只看技能名。逐项检查：

1. **触发条件**：它是否真的适用于当前任务；
2. **输入契合度**：它要求的资料和工具是否存在；
3. **输出契合度**：它能否产生用户要求的载体；
4. **证据能力**：它有没有验证步骤或质量门禁；
5. **上下文成本**：它是否过重，是否引入无关规则；
6. **冲突风险**：它是否携带不属于当前项目的强制偏好。

可以用 0–2 分快速打分：

| 指标 | 0 分 | 1 分 | 2 分 |
|---|---|---|---|
| 目标匹配 | 偏题 | 部分匹配 | 直接命中 |
| 交付形式 | 不支持 | 可适配 | 原生支持 |
| 项目兼容 | 明显冲突 | 需裁剪 | 直接兼容 |
| 可验证性 | 无门禁 | 有检查表 | 有命令或明确证据 |
| 上下文成本 | 很重 | 中等 | 精简 |

优先选总分高且没有硬冲突的技能。分数只是筛选器，不能取代判断。

## 阶段 D：最小组队

默认配置：

```text
1 个主技能
0–2 个支撑技能
0–1 个独立审查技能
```

### 主技能

对最终交付物负责。例如：

- 写中文长文：`human-writing`；
- 做海报或产品 UI：`victor-design-system`；
- 修复杂 Bug：`systematic-debugging`；
- 写科研报告：`scientific-writing`；
- 建代码库 Wiki：`openwiki`。

### 支撑技能

只补主技能缺少的能力。例如：

- `literature-review` 补文献；
- `statistical-analysis` 补统计；
- `accessibility` 补无障碍；
- `docx`、`pptx`、`xlsx` 补具体文件生产；
- `humanizer-zh` 补中文审校。

### 审查技能

尽量与生产者分开：

- `verification-before-completion`；
- `peer-review`；
- `security-review`；
- `webapp-testing`；
- `stop-slop`。

### 何时允许超过四个技能

只有任务同时包含多个独立交付物、明显不同的专业领域，或高风险审查要求时才增加。每新增一个技能，都要能指出它填补了哪个能力缺口。

## 阶段 E：渐进加载

按这个顺序读取：

1. 候选技能的 frontmatter 和 `SKILL.md`；
2. 主技能明确要求的 references；
3. 当前任务确实要运行的 scripts；
4. 必须复用的 templates 或 assets；
5. 只有主版本不适用时才读 variants；
6. 快索引未包含所需资源时，从对应 `full-sources/` 完整包继续读取。

禁止为了“保险”把整个 collection 加入上下文。

### 上下文预算建议

```text
第 1 轮：只看搜索结果，保留 8–12 个候选
第 2 轮：打开 3–5 个 SKILL.md
第 3 轮：确定 1–4 个技能
第 4 轮：只加载被选技能要求的 references
```

## 阶段 F：记录技能方案

复杂任务建议留下一个简短方案：

```markdown
# SKILL_PLAN

## 主技能
- 名称：
- 负责：
- 选择理由：

## 支撑技能
- 名称：
- 补足能力：

## 审查技能
- 名称：
- 否决条件：

## 明确不使用
- 技能：
- 原因：与项目冲突 / 重复 / 上下文过重

## 冲突裁决
目标项目的哪条规则覆盖了技能默认值？
```

简单任务不需要创建文件，在内部确认即可。

## 阶段 G：执行与验证

统一工作循环：

```text
Think → Spec → Implement → Verify → Deliver
```

- **Think**：区分事实、假设和未知；
- **Spec**：固定范围、接口、制品和验收标准；
- **Implement**：完成最小但完整的实现；
- **Verify**：取得实际测试、来源、复算或渲染证据；
- **Deliver**：交付结果，说明证据和剩余限制。

完整门禁见 [`../governance/QUALITY_GATES.md`](../governance/QUALITY_GATES.md)。

---

## 5. 任务路由矩阵

下面是起点，不是固定配方。先搜索，再根据项目裁剪。

| 任务 | 建议主技能 | 常用支撑 | 常用审查 |
|---|---|---|---|
| 需求尚不清楚 | `brainstorming` | `ai-cabinet-decision-making` | 用户确认 |
| 重要路线选择 | `ai-cabinet-decision-making` | 领域检索技能 | 执行可行性复核 |
| 修复复杂 Bug | `systematic-debugging` | `test-driven-development` | `verification-before-completion` |
| 开发新功能 | `writing-plans` 或相应工程技能 | `test-driven-development` | `security-review` / 回归测试 |
| Web 产品 UI | `victor-design-system` 或 `frontend-design` | `ui-ux-pro-max`, `accessibility` | `webapp-testing` |
| 海报、主视觉 | `victor-design-system` | 图像或品牌技能 | 真实渲染审查 |
| UI 截图转 HTML/CSS | `screencoder` | `frontend-design`, `accessibility` | `webapp-testing` + 截图对比 |
| PPT/答辩 | `victor-design-system` + `pptx` | `scientific-writing` / 内容技能 | 可读性与可编辑性交付审查 |
| 中文长文 | `human-writing` | 检索或领域技能 | `humanizer-zh` / `stop-slop` |
| 科研综述 | `research-expert-system` / `literature-review` | `deep-research` | `peer-review` |
| 科研论文 | `scientific-writing` | `statistical-analysis` | `peer-review` |
| 数据分析 | 对应领域或数据技能 | `statistical-analysis`, `xlsx` | 复算与边界值检查 |
| Word 文档 | `docx` | 写作或研究技能 | 版式与链接检查 |
| PDF 处理 | `pdf` | OCR/提取技能 | 页数、文字与渲染检查 |
| 表格交付 | `xlsx` | 数据分析技能 | 公式、单位和样本复算 |
| 安全评审 | `security-review` | 栈相关安全技能 | 独立红队 |
| 代码库文档 | `openwiki` | `mermaid-diagrams` | 源码事实核对 |
| 自定义连接器 | `write-connector` | MCP/API 技能 | 密钥与权限审查 |
| 多交付物并行 | `multi-agent-orchestration` | 各 Worker 专项技能 | 独立 Reviewer |

### 5.1 编码任务推荐链

```text
brainstorming（需求分叉明显时）
  → writing-plans
  → test-driven-development
  → 具体语言/框架技能
  → systematic-debugging（出现异常时）
  → verification-before-completion
```

不要为了“流程完整”把整条链全部加载。没有分叉就不用 brainstorming；没有 Bug 就不用 systematic-debugging。

### 5.2 研究任务推荐链

完整科研体系先读 [`RESEARCH.md`](RESEARCH.md)，统一入口使用 `research-expert-system`。

```text
问题定义
  → literature-review / deep-research
  → 领域技能
  → statistical-analysis
  → scientific-writing
  → peer-review
```

研究交付必须区分：

- 原始来源结论；
- 仓库或实验实测；
- 工程假设；
- 模型推断；
- 尚未验证的问题。

### 5.3 中文写作推荐链

```text
事实材料检查
  → human-writing
  → 领域事实核查
  → humanizer-zh 或 stop-slop 二选一审校
```

- `human-writing` 负责从材料、说话位置和文体出发完成作品；
- `humanizer-zh` 适合系统清理多类中文 AI 模式；
- `stop-slop` 适合快速删空话和模板结构；
- 不建议同时让两个审校技能轮番重写，否则容易把作者声音磨平。

### 5.4 视觉设计推荐链

```text
确认载体与读者动作
  → victor-design-system
  → 读取一个对应 adapter
  → 按需加入 pptx / frontend-design / accessibility
  → 查看真实渲染
  → 通过交付门禁
```

设计任务不能只检查代码。必须查看实际页面、图片、幻灯片或导出文件。

### 5.5 OpenWiki 推荐链

```text
读目标代码库
  → openwiki
  → 设置 openwiki/INSTRUCTIONS.md
  → 生成或 update
  → 核对源码事实和 Mermaid
  → 审阅 diff
```

OpenWiki 源码位于 `tools/openwiki/`。凭证只能放用户环境或 CI secrets，不能提交到项目。

### 5.6 UI 截图转代码推荐链

```text
确认截图角色、目标视口和复刻边界
  → screencoder 建立可编辑 HTML/CSS 基线
  → 对齐区域、文字、图片和组件
  → Playwright 真实渲染与截图对比
  → accessibility / webapp-testing
  → 如需再设计，再调用 victor-design-system
```

先完成忠实基线，再做创意改造。不得用整张截图作为网页背景冒充实现；API key 只能放 ScreenCoder 的隔离工作副本，不能提交。

---

## 6. 专家团怎么组

专家团按职责建立，不按名人数量建立。

## 6.1 单 Agent 模式

适用于：

- 任务范围小；
- 只有一个交付物；
- 专业上下文一致；
- 可以在一个上下文中完成和验证。

一个 Agent 也可以依次使用主技能和审查技能，不必强行分角色。

## 6.2 双角色模式

```text
Producer：负责研究或制作
Reviewer：独立检查验收标准
```

适用于重要文案、代码变更、视觉交付和数据结论。

## 6.3 标准四角色模式

```text
总协调者
  ├─ 领域/证据 Worker
  ├─ 制作/实现 Worker
  ├─ 验证 Worker
  └─ 独立 Reviewer
```

角色可合并，但 Reviewer 在高风险任务中最好不参与原实现。

### 角色契约模板

```markdown
## 角色
领域证据审查员

## 输入
数据字典、候选结论、来源列表。

## 职责
核对单位、适用范围、证据等级和因果表述。

## 输出
review/domain-evidence.md

## 完成定义
每项结论都有通过/失败、依据和修改建议。

## 禁止
不改实现代码；不用常识补缺失数据。
```

## 6.4 什么时候不该用多 Agent

- 只改一个小文件；
- 子任务需要频繁共享未冻结状态；
- 多个 Agent 必须同时编辑同一文件；
- 协调成本高于执行成本；
- 用户只要一个快速直接的答案。

多 Agent 详细规则见 [`../governance/MULTI_AGENT_ORCHESTRATION.md`](../governance/MULTI_AGENT_ORCHESTRATION.md)。

---

## 7. 制品契约

Agent 之间不要交接“我大概弄好了”。交接必须落到可检查制品。

```markdown
# ARTIFACT_CONTRACT

## 输入
- 文件/来源：
- 版本/时间：

## 允许修改
- 路径：
- 禁止触碰：

## 输出
- 路径：
- 格式：
- 数据模式或接口：

## 验收
- 命令：
- 人工检查：

## 失败处理
- 谁返工：
- 哪些检查必须重跑：
```

### 常见制品

- 研究：来源表、证据账本、数据集、统计结果；
- 编码：补丁、测试、构建日志、迁移文件；
- 数据：CSV/JSON schema、复算脚本、图表；
- 设计：任务简报、母版、素材账本、真实渲染、可编辑源文件；
- 写作：材料清单、正文、少量关键来源；
- 审查：逐项通过/失败、证据、影响和最小修正。

---

## 8. 主版本、variant 和重复技能

## 8.1 默认选择顺序

```text
目标项目本地技能
  → maintained
  → 产品专属任务的 official-source
  → 与任务直接匹配的 curated-source / full-source
  → community 主版本
  → tool-bundled
  → variant
```

目标项目本地技能最了解本项目，但仍不能覆盖用户明确要求。上面的来源顺序不是绝对质量排名：官方层只在发布方产品行为重要时优先；精选层的 Star 增长只是发现信号，使用前仍须核验固定提交、许可证、依赖和副作用；科研全量层按证据任务匹配度选择。

## 8.2 什么时候查看 variant

- community 主版本依赖目标环境没有的工具；
- 主版本语言或框架不合适；
- 主版本规则与目标载体冲突；
- 需要比较不同方法；
- 为项目制作本地 adapter，需要吸收多版优点。

查看方式：

```bash
python scripts/search_skills.py "准确技能名" --include-variants --json
```

选择 variant 后，在 `SKILL_PLAN` 里记录路径和理由。不要把多个版本的所有规则直接合并。

## 8.3 别名与重复包装

紧凑导入层不会重复保存字节相同或仅 frontmatter 不同的同名指令；规范化规则、原路径、来源与 SHA-256 位于 [`../catalog/import-report.json`](../catalog/import-report.json)。84 个原 variants 因此折叠为导入别名，而不是失去来源信息。

科研、官方和精选全量源不改动上游树，也不删机器目录记录。[`../catalog/overlap-policy.json`](../catalog/overlap-policy.json) 把 45 个已核验的包装副本、等价正文、deprecated 后继和 host-specific 包标成目录别名。默认搜索只显示 canonical：

```bash
python scripts/search_skills.py "准确技能名" --json
python scripts/search_skills.py "准确技能名" --include-aliases --json
```

安装器同样默认选 canonical；需要复现旧来源或特定宿主包时，用来源或精确路径显式解析别名：

```bash
python scripts/install_skills.py \
  --name gh-address-comments \
  --source openai-skills \
  --target /path/to/skills
```

完整上游保留策略和汇总计数位于 [`../catalog/sources.lock.json`](../catalog/sources.lock.json)。

---

## 9. 质量门禁

## 9.1 所有任务都检查

- 交付形式是否与用户要求一致；
- 是否混入未经证实的事实；
- 是否满足范围和验收标准；
- 是否有实际验证证据；
- 是否说明未验证部分。

## 9.2 按交付物追加

| 交付物 | 必查项 |
|---|---|
| 代码 | 测试、构建、静态检查、边界值、回归 |
| 数据 | schema、单位、缺失值、样本复算、可重复脚本 |
| 研究 | 来源质量、引用对应、证据等级、统计方法 |
| 写作 | 材料是否足够、事实边界、重复、语气和读者 |
| 网页 | 真实浏览、响应式、交互、控制台、无障碍 |
| 图片/海报 | 真实渲染、文字、尺寸、构图、素材权限 |
| PPT | 页面完整、投影可读、字体、图表、可编辑源文件 |
| 文档 | 目录、链接、分页、导出、版本和引用 |
| 安全 | 威胁模型、权限、secret、依赖、失败模式 |

## 9.3 完成声明模板

```markdown
已完成：
- …

验证：
- `命令` → 结果
- 人工检查 → 结果

限制：
- 尚未验证…
- 需要用户确认…
```

没有运行验证命令，就不要伪造命令结果。

---

## 10. 安装到其他 Agent 或项目

先搜索准确技能名，再安装：

```bash
python scripts/install_skills.py \
  --name human-writing \
  --name victor-design-system \
  --target ../your-project/.agents/skills
```

### 常用参数

```bash
# 只预览
python scripts/install_skills.py \
  --name human-writing \
  --target ../your-project/.agents/skills \
  --dry-run

# 覆盖目标中已有的同名技能
python scripts/install_skills.py \
  --name human-writing \
  --target ../your-project/.agents/skills \
  --force

# 同名来源消歧；需要时再加 --path <catalog-exact-path>
python scripts/install_skills.py \
  --name trace-file-lineage \
  --source trace-file-lineage \
  --target ../your-project/.agents/skills
```

安装脚本默认选择非 variant 中优先级最高的版本。官方或精选来源安装前应核验机器目录中的 `sourceId`、固定提交和许可证。精选包会保留所选入口祖先目录中的许可证/notice；`sourcePackagePath` 大于技能目录时，所选入口会提升为安装根 `SKILL.md`。安装后仍应在目标项目中写清触发条件和项目事实。

---

## 11. 为新方向制作本地技能

当一个通用技能已经在目标项目中验证有效，可以制作项目 adapter。

```text
目标项目/
  AGENTS.md
  TASK_BRIEF.md
  .agents/skills/
    domain-evidence-review/
      SKILL.md
      references/
    implementation-workflow/
      SKILL.md
    delivery-review/
      SKILL.md
```

本地 adapter 应做到：

- 标明基于哪个上游技能和版本；
- 只写项目真实术语、路径、命令和门禁；
- 不复制不相关规则；
- 不伪造用户偏好；
- 用真实失败案例和测试验证；
- 项目事实变化后及时更新。

领域适配的完整方法见 [`DOMAIN_ADAPTATION.md`](DOMAIN_ADAPTATION.md)。

---

## 12. 典型案例

## 案例 A：陌生领域研究报告

```text
主技能：literature-review
支撑：deep-research + statistical-analysis
审查：peer-review
```

执行：

1. 定义研究问题和时间范围；
2. 建来源纳入/排除标准；
3. 提取可核验结论；
4. 需要时做统计；
5. 区分来源结论、推断和未知；
6. 独立同行评审。

## 案例 B：修复线上 Bug

```text
主技能：systematic-debugging
支撑：test-driven-development
审查：verification-before-completion
```

执行：

1. 复现 Bug；
2. 记录最小失败用例；
3. 找根因，不先猜修复；
4. 写失败测试；
5. 实施最小修复；
6. 跑针对测试和回归。

## 案例 C：制作答辩 PPT

```text
主技能：victor-design-system
支撑：pptx + scientific-writing
审查：内容事实审查 + 真实投影可读性检查
```

执行：

1. 确认受众、时长、页面数量和可编辑要求；
2. 固定叙事结构和事实；
3. 选择演示 adapter；
4. 建 HTML/设计母版或页面系统；
5. 生成 PPTX；
6. 查看真实导出和关键页面；
7. 检查字体、图表、引用和可编辑性。

## 案例 D：写中文行业长文

```text
主技能：human-writing
支撑：领域检索技能
审查：humanizer-zh 或 stop-slop
```

执行：

1. 检查是否有足够具体材料；
2. 核验数据、人物和引用；
3. 确定说话位置和读者；
4. 完成初稿；
5. 只选一个审校技能做最后清理；
6. 保留作者判断和自然节奏。

## 案例 E：给代码库建立长期文档

```text
主技能：openwiki
支撑：mermaid-diagrams
审查：源码事实核对
```

执行：

1. 阅读目标项目约束；
2. 初始化 OpenWiki；
3. 编写 `openwiki/INSTRUCTIONS.md`；
4. 生成 wiki；
5. 核对架构、路径和链接；
6. 将 update 加入 CI；
7. 不提交凭证。

---

## 13. 反模式

以下做法应直接避免：

- 一开始把全部 `SKILL.md` 读进上下文；
- 只因技能名字响亮就启用；
- 同时启用多个功能重复的技能；
- 把历史项目里的术语、数值和审美当成新项目事实；
- 让五个“专家”重复说同一套意见；
- 多 Agent 并行修改同一个文件；
- Producer 自己宣布审查通过；
- 用解释替代失败测试的返工；
- 写作材料不足时靠重复和虚构细节凑篇幅；
- 设计任务只看 HTML/CSS，不看真实渲染；
- 未运行命令却声称测试通过；
- 将 API key、Cookie、token 或 OAuth 凭证写进仓库；
- 把 variants 全部安装到目标项目；
- 修改第三方技能后仍声称与固定上游完全一致。

---

## 14. 维护仓库

## 14.1 重建目录

新增、删除或修改 `SKILL.md` 后运行：

```bash
python scripts/build_catalog.py
python scripts/build_official_catalog.py
python scripts/build_curated_catalog.py
python scripts/validate_repository.py
```

## 14.2 初始化和物化全量技能

完整上游以 Git 子模块固定，首次克隆或更新后运行：

```bash
git submodule update --init --recursive
python scripts/materialize_full_library.py
```

物化器会：

- 合并三个历史 `技能库&准则` 的全部文件；
- 保留同路径但内容不同的来源版本；
- 完整复制 human-writing、victor-design、openwiki 和 ScreenCoder；
- 按命名空间加入固定的科研与官方来源，并只加入精选锁中明确选择的包；
- 默认跳过已有解压内容的 zip/tar/gz/7z/rar 压缩副本；
- 在 `full-library/MANIFEST.json` 记录文件、冲突和压缩包统计。

需要压缩档本身时显式执行：

```bash
python scripts/materialize_full_library.py --keep-archives
```

## 14.3 重建快速检索层

`skills/community/` 和 `skills/variants/` 是快索引。只有需要更新索引快照时才运行：

```bash
python scripts/import_skill_union.py \
  --turbine /path/to/turbine-blade-ai-platform \
  --wind /path/to/wind_farm_viz \
  --repo-source /path/to/repo-dash
python scripts/build_catalog.py
python scripts/validate_repository.py
```

快索引可以裁剪大文件，但不得被当作全量权威源。

## 14.3 第三方来源

直接装载项目和历史集合的来源、提交与许可证见：

- [`../catalog/sources.lock.json`](../catalog/sources.lock.json)
- [`../third_party/NOTICE.md`](../third_party/NOTICE.md)
- [`OFFICIAL_SOURCES.md`](OFFICIAL_SOURCES.md)
- [`CURATED_SOURCES.md`](CURATED_SOURCES.md)
- `third_party/licenses/`
- `third_party/upstream/`

缺少可识别许可证的历史集合，不应在未核实真正上游前用于商业再分发。

---

## 15. Agent 启动检查清单

新 Agent 拿到仓库后，依次确认：

- [ ] 已读目标项目的 `AGENTS.md` 和需求；
- [ ] 已读本仓库根 `SKILL.md`；
- [ ] 已建立任务简报和验收标准；
- [ ] 已用“领域 + 交付物 + 方法/风险”搜索；
- [ ] 已将候选缩减到 1–4 个技能；
- [ ] 已说明每个技能填补的能力缺口；
- [ ] 已排除历史项目专属假设；
- [ ] 需要完整资源时已初始化 `full-sources/`，没有把快索引裁剪误判成上游缺失；
- [ ] 命中官方或精选来源时，已核验固定提交、许可证、依赖与副作用；
- [ ] 已按需定义制品契约；
- [ ] 已选择实际验证方式；
- [ ] 已在交付中说明证据和限制。

做到这些检查，其他方向的 Agent 才算真正“消化吸收”了这个仓库，而不是简单把技能文件堆进上下文。


---

## SOURCE · `arena/01a060a3-skill:skills/README.md`

<!-- blob: d8de5c25c98b14c9e95a579722c211c077fcd0ac; bytes: 1047 -->

# 技能库 (Skills)

本目录是仓库的核心技能集合，按角色和来源分层组织。

## 目录结构

```
skills/
  core/                  核心路由器与系统级技能（6 项）
  community/             社区贡献的完整技能包（50+ 项）
  variants/              同名但正文不同的轻量变体（17 项）
  research-workflow-kit/ 科研工作流专项技能（6 项）
```

## 分层说明

| 层 | 目录 | 数量 | 说明 |
|---|---|---:|---|
| 核心 | `core/` | 6 | 路由、决策、多 Agent、质量审查等基础能力 |
| 社区 | `community/` | 50+ | 来自历史并集、官方精选、科研项目的完整技能 |
| 变体 | `variants/` | 17 | 同名技能的不同实现版本 |
| 科研 | `research-workflow-kit/` | 6 | 科研全生命周期专项技能 |

## 搜索与安装

```bash
# 搜索技能
python scripts/search_skills.py "web app implementation" --limit 12

# 安装单个技能到目标 Agent
python scripts/install_skills.py --name systematic-debugging --target /path/to/skills
```


---

## SOURCE · `arena/01a060a3-skill:skills/core/DEFENSE_SKILL_GUIDE.md`

<!-- blob: c65242c8831313c36984a2b82354df7be1afcbf8; bytes: 6737 -->

# 塑成·装备聚焦改造专项 — 技能获取与调用指南

> 收件人：塑成  
> 发送人：技能库管理  
> 时间：2026-08-29  
> 优先级：**紧急**

---

## 一、技能库在哪

```
仓库地址：https://github.com/sunccchengze/-SKILL-/tree/arena%2F01a048e7-skill
当前分支：arena/01a048e7-skill（不是 main，main 是空的）
```

拉取方式：

```bash
# 方式 A：直接 clone 整个仓库
git clone -b arena/01a048e7-skill https://github.com/sunccchengze/-SKILL-.git

# 方式 B：如果已有仓库，切到正确分支
cd -SKILL-
git fetch origin
git checkout arena/01a048e7-skill
```

---

## 二、你要的 8 项技能在哪些路径

全部放在 `skills/core/` 下，直接能用：

| 你的需求 | 文件路径 | 打开就能看 |
|---|---|---|
| ② 工科术语守门 | `skills/core/engineering-terminology-gate/SKILL.md` | 术语四层分类 + 四问判定流程 + 5 个翻车案例验收集 |
| ③ 图文一致性审计 | `skills/core/page-image-text-audit/SKILL.md` | OCR 流程 + 四类标记（图文不符/AI痕迹/水印/重复） |
| ④ 精确取图工具 | `skills/core/slide-image-extractor/SKILL.md` | PPTX 全量提取 + PDF 区域裁剪 + JSON 清单（含 Python 脚本） |
| ⑤ 图表风格系统 | `skills/core/defense-presentation-toolkit/SKILL.md` 的 §⑤ | matplotlib 模板代码 + 设计令牌（深蓝/青/金）+ 中文字体粗体方案 |
| ⑥ 导出前质检 | `skills/core/defense-presentation-toolkit/SKILL.md` 的 §⑥ | 黑名单扫描器 + P19 手记测试用例 + PDF 双层比对思路 |
| ⑦ 答辩证据映射 | `skills/core/defense-presentation-toolkit/SKILL.md` 的 §⑦ | 三联表模板（规则维度→页面证据→30 秒话术） |
| ⑧ 叙事节奏审查 | `skills/core/defense-presentation-toolkit/SKILL.md` 的 §⑧ | 路由到已有的 `analyze-pitch-deck` 技能 |

### 辅助技能（你已有的，继续用）

| 技能 | 路径 | 用途 |
|---|---|---|
| 归藏 PPT | `full-sources/curated/cyberppt/SKILL.md` | 咨询风格 PPTX 生成 |
| Agent Reach | `skills/community/agent-reach/` | 情报检索 |
| Stop-slop | `skills/core/stop-slop/SKILL.md` | 去 AI 模板腔 |
| Humanizer-zh | `skills/core/humanizer-zh/SKILL.md` | 去中文 AI 痕迹 |
| Human-writing | `skills/community/human-writing/SKILL.md` | 通用中文创作 |
| Victor Design | `skills/community/victor-design/SKILL.md` | 视觉设计系统 |

---

## 三、怎么把技能挂进你的工作流

### 3.1 快速接入

把技能文件复制到你的项目目录：

```bash
cd 你的项目/04-技能库与准则/04-装备聚焦改造专项/

# 复制 4 个新建技能
cp /path/to/-SKILL-/skills/core/engineering-terminology-gate/SKILL.md ./
cp /path/to/-SKILL-/skills/core/page-image-text-audit/SKILL.md ./
cp /path/to/-SKILL-/skills/core/slide-image-extractor/SKILL.md ./
cp /path/to/-SKILL-/skills/core/defense-presentation-toolkit/SKILL.md ./
```

### 3.2 挂进路由表

在你的 `00-SKILL运用指南.md` 路由表中加入：

```markdown
## 装备聚焦改造专项技能路由

| 改造阶段 | 必调技能 | 调用时机 |
|---|---|---|
| 逐页诊断 | ③ page-image-text-audit | 每改完一页，渲染 PNG 跑一遍审计 |
| 术语替换 | ② engineering-terminology-gate | 每一句改造文案提交前过四问 |
| 取图定位 | ④ slide-image-extractor | 需要配图时先跑提取，拿精确坐标 |
| 图表生成 | ⑤ matplotlib 模板 | 需要新图表时直接用模板代码 |
| 导出前 | ⑥ 黑名单扫描 | 最终 PDF 导出前必跑 |
| 答辩准备 | ⑦ 三联表 + ⑧ 节奏审查 | 定稿后做一轮话术演练 |
```

---

## 四、关键提醒：一定要多调用、主动调用

### 4.1 不要"知道有但不用"

技能库最大的浪费是"知道有这个技能但嫌麻烦没调用"。你的翻车记录（构件熔点、P3 头骨图、P19 手记）全是**本可以被技能拦截的**。

**强制执行规则**：

```
每一句改造文案 → 必须过 ② 术语四问（30 秒，不能省）
每一页改完后 → 必须过 ③ 图文审计（渲染 PNG 对比）
每次导出 PDF → 必须过 ⑥ 黑名单扫描（5 秒自动检查）
```

### 4.2 不要只调一个技能

单个技能解决不了完整问题。正确用法是**技能组协作**：

```
改造 P5：
  ① 先用 ③ 图文审计 看当前页有什么问题
  ② 改文案时用 ② 术语守门 判定每句话
  ③ 配图时用 ④ 精确取图 定位毕业答辩 PPT 里的素材
  ④ 改完后再跑一遍 ③ 确认图文一致
  ⑤ 全部改完后跑 ⑥ 黑名单扫描
```

### 4.3 《毕业答辩》的参照权重必须提高

**这是你的核心素材池**，但目前你的引用粒度太粗（"毕业答辩 P14 那张设备照片"）。

**提高权重的具体做法**：

1. **先把素材池结构化**：用 ④ 精确取图工具把《毕业答辩》49 页里的所有图片全部提取出来，得到 `image_manifest.json`，这样你就有了一份完整的素材索引。

2. **建立页面映射表**：

```markdown
## 08277.pdf ↔ 毕业答辩.pptx 页面映射

| 08277 页码 | 需要什么素材 | 毕业答辩 来源页 | 来源图片文件名 | 已提取？ |
|---|---|---|---|---|
| P3 | 设备实物照 | P14 设备照片 | P14_01_L2.5T3.0W...jpg | ☐ |
| P5 | 温控系统截图 | P38 系统界面 | P38_02_L...jpg | ☐ |
| P15 | 构件实物照 | P42 构件特写 | P42_01_L...jpg | ☐ |
```

3. **每次配图建议必须精确到文件名**，不许出现"P14 那张"这种描述——用 `image_manifest.json` 里的精确文件名。

4. **在 SKILL 运用指南中把《毕业答辩》列为一级来源**，和"仓库素材库"并列，而不是"参考看看"。

---

## 五、执行优先级

```
P0（今天就做）：
  □ 拉取仓库，复制 4 个技能文件
  □ 运行 ④ 精确取图，提取《毕业答辩》全量图片，建立索引
  □ 建立 08277 ↔ 毕业答辩 页面映射表

P0（每页改造时执行）：
  □ 改文案前：过 ② 术语四问
  □ 改文案后：跑 ③ 图文审计
  □ 配图时：用 ④ 精确文件名

P1（全部改完后执行）：
  □ 跑 ⑥ 黑名单扫描
  □ 跑 ⑧ 叙事节奏审查
  □ 建 ⑦ 答辩话术三联表
```

---

## 六、遇到问题的反馈路径

- 技能使用问题：直接在技能文件里找 `注意事项` 章节
- 术语判定争议：按 ② 的四步流程走，有争议的记录下来等负责人拍板
- 取图坐标不对：检查 PDF 版本是否一致，DPI 设置是否为 300
- 技能不够用：记录缺口，反馈到技能库补充

---

**最后一句：技能摆在那里不叫有，用了才叫有。每改一页就调一轮，别攒着。**


---

## SOURCE · `arena/01a060a3-skill:skills/core/README.md`

<!-- blob: a64d8f7027c3b7670b0b75cbca09d800d6dbc8cd; bytes: 916 -->

# 核心技能 (Core Skills)

本目录包含仓库的核心路由器与系统级技能，它们是 Agent 工作的基础能力层。

| 技能 | 用途 |
|---|---|
| [ai-cabinet](ai-cabinet/SKILL.md) | 用五个独立席位对重要决策进行第一性原理追问、红队攻击与执行拆解 |
| [multi-agent-orchestration](multi-agent-orchestration/SKILL.md) | 为可并行的复杂任务设计最小多 Agent 团队 |
| [official-source-router](official-source-router/SKILL.md) | 路由 OpenAI、Vercel、Microsoft 官方技能入口 |
| [research-expert-system](research-expert-system/SKILL.md) | 世界级通用科研能力路由器 |
| [stop-slop](stop-slop/SKILL.md) | 识别并删除常见 AI 模板腔 |
| [humanizer-zh](humanizer-zh/SKILL.md) | 去除文本中的 AI 生成痕迹，使其更自然 |

这些技能是仓库默认工作流的一部分，所有 Agent 会话都应了解它们的存在。


---

## SOURCE · `arena/01a060a3-skill:skills/core/advanced-probability/SKILL.md`

<!-- blob: 0882241fc329a88355f5467f1fd3276aca7a6bd6; bytes: 423 -->

---
name: advanced-probability-framework
description: |
  概率论深潜框架。测度论/鞅/大偏差/随机微积分。核心：你的决策=高级概率。触发词：「概率论深潜」
---
# 概率论深潜
> 你的决策=高级概率

## 核心洞察
测度论/鞅/大偏差/随机微积分的贡献。

## 你的对照


> 本Skill由 [女娲 · Skill造人术](https://github.com/alchaincyf/nuwa-skill) 生成


---

## SOURCE · `arena/01a060a3-skill:skills/core/ai-cabinet/SKILL.md`

<!-- blob: e6fcf49ed0b669dcc84dafc037c21744b59ab301; bytes: 610 -->

---
name: ai-cabinet-decision-making
description: 用五个独立席位对重要决策、方案比较、路线选择和高不确定性计划进行第一性原理追问、红队攻击、机会分析、外行清晰度审查与执行拆解，再由主席给出有条件建议。
---

# AI 内阁决策

读取并执行 [`../../governance/AI_CABINET.md`](../../governance/AI_CABINET.md)。

仅在选择重要、存在真实权衡或用户要求压力测试时使用。保持五个席位独立，不先确定结论再补论据。输出必须区分事实、假设和未知，并说明什么证据会改变建议。


---

## SOURCE · `arena/01a060a3-skill:skills/core/ai-ethics-law/SKILL.md`

<!-- blob: ba38cc61cd8083df18f68f22c7a3936ecf09e925; bytes: 418 -->

---
name: ai-ethics-law-framework
description: |
  AI伦理与法律框架。偏见/透明/问责/自主武器。核心：你的AI系统=AI伦理对象。触发词：「AI伦理与法律」
---
# AI伦理与法律
> 你的AI系统=AI伦理对象

## 核心洞察
偏见/透明/问责/自主武器的贡献。

## 你的对照


> 本Skill由 [女娲 · Skill造人术](https://github.com/alchaincyf/nuwa-skill) 生成


---

## SOURCE · `arena/01a060a3-skill:skills/core/analytic-philosophy/SKILL.md`

<!-- blob: 807fcbbd0e24a4231683d6ddb4e6f35d6acbf0bb; bytes: 440 -->

---
name: analytic-philosophy-framework
description: |
  分析哲学框架。Russell/Wittgenstein/Frege。核心：逻辑分析/语言转向/意义即使用。触发词：「分析哲学」
---
# 分析哲学
> 逻辑分析/语言转向/意义即使用

## 核心洞察
Russell/Wittgenstein/Frege的贡献。

## 你的对照
你的AI=分析哲学

> 本Skill由 [女娲 · Skill造人术](https://github.com/alchaincyf/nuwa-skill) 生成


---

## SOURCE · `arena/01a060a3-skill:skills/core/anchoring-adjustment/SKILL.md`

<!-- blob: abeda0a1ea60df394ff0220ff8b4e197b721384e; bytes: 654 -->

---
name: anchoring-adjustment-framework
description: |
  Tversky & Kahneman 锚定效应。初始值不成比例地影响后续判断。
  触发词：「锚定效应」「初始偏差」「Tversky」「谈判技巧」
---
# 锚定与调整
> 第一个数字会像锚一样拖住你所有的后续判断。

## 核心
- 人从初始值开始调整，但调整不够
- 即使锚是随机的也会影响判断
- 专家也受影响

## 你的对照
- 用Kahneman外部视角对抗锚定
- 你的反讨好框架对抗"AI的锚"（AI的回答会影响你的判断）

> 本Skill由 [女娲 · Skill造人术](https://github.com/alchaincyf/nuwa-skill) 生成


---

## SOURCE · `arena/01a060a3-skill:skills/core/annales-school/SKILL.md`

<!-- blob: 398785981f666856a93173076daf43606bc29929; bytes: 394 -->

---
name: annales-school-framework
description: |
  年鉴学派框架。Braudel。核心：长时段/中时段/短时段/结构史。触发词：「年鉴学派」
---
# 年鉴学派
> 长时段/中时段/短时段/结构史

## 核心洞察
Braudel的贡献。

## 你的对照
你的成长=长时段

> 本Skill由 [女娲 · Skill造人术](https://github.com/alchaincyf/nuwa-skill) 生成


---

## SOURCE · `arena/01a060a3-skill:skills/core/ant-colony-optimization/SKILL.md`

<!-- blob: c2e530f742ed16df4a9f980dd009024446d097d6; bytes: 429 -->

---
name: ant-colony-optimization-framework
description: |
  蚁群优化思维框架。核心概念：信息素/路径选择/正反馈。
  触发词：「蚁群优化」
---
# 蚁群优化
> 信息素/路径选择/正反馈

## 核心洞察
Dorigo的研究揭示了蚁群优化的本质。

## 你的对照
你的技能路由=蚁群式

> 本Skill由 [女娲 · Skill造人术](https://github.com/alchaincyf/nuwa-skill) 生成


---

## SOURCE · `arena/01a060a3-skill:skills/core/anthropology-of-religion/SKILL.md`

<!-- blob: 0016616dee7fcbd98bb7b9cccbf67077037fb2f4; bytes: 421 -->

---
name: anthropology-of-religion-framework
description: |
  宗教人类学框架。Durkheim/Turner/Geertz。核心：仪式/神圣与世俗/交感。触发词：「宗教人类学」
---
# 宗教人类学
> 仪式/神圣与世俗/交感

## 核心洞察
Durkheim/Turner/Geertz的贡献。

## 你的对照
你的HANDOFF=仪式

> 本Skill由 [女娲 · Skill造人术](https://github.com/alchaincyf/nuwa-skill) 生成


---

## SOURCE · `arena/01a060a3-skill:skills/core/applied-anthropology/SKILL.md`

<!-- blob: 95c2241ea9e6df4c684dcacd4df15c8dfa5c2a40; bytes: 457 -->

---
name: applied-anthropology-framework
description: |
  应用人类学框架。发展人类学/设计人类学/商业人类学。核心：你的用户体验=应用人类学。触发词：「应用人类学」
---
# 应用人类学
> 你的用户体验=应用人类学

## 核心洞察
发展人类学/设计人类学/商业人类学的贡献。

## 你的对照


> 本Skill由 [女娲 · Skill造人术](https://github.com/alchaincyf/nuwa-skill) 生成


---

## SOURCE · `arena/01a060a3-skill:skills/core/art-of-thinking-technically/SKILL.md`

<!-- blob: 1e2619dd384503c1ddcccacad2184955dbd81308; bytes: 2238 -->

---
name: art-of-thinking-technically-framework
description: |
  基于大前研一《思考的技术》的结构化问题解决框架。麦肯锡式方法：假设驱动、MECE分解、
  事实为基础。问题=应有状态与现状的差距。
  触发词：「怎么解决问题」「结构化思考」「麦肯锡方法」「假设驱动」「问题分析」
---

# 思考的技术 · 结构化问题解决

> 不是"想办法"——是"定义问题→分解→假设→验证→方案"。

## 核心理念

**问题** = 应有状态与现状之间的差距。
**解决问题** = 找到弥合差距的方法。

---

## 5步法

```
1. 定义问题（到底差在哪里？）
    ↓
2. MECE分解（拆成互不重叠的子问题）
    ↓
3. 假设（每个子问题最可能的原因是什么？）
    ↓
4. 验证（用数据/实验检验假设）
    ↓
5. 方案（基于验证结果的行动方案）
```

### 1. 定义问题
- 区分"现象"和"问题"
- 现象：发电效率下降了10%
- 问题：为什么下降？如何恢复？

### 2. MECE分解
- 相互独立 + 完全穷尽
- 用逻辑树分解大问题

### 3. 假设驱动
- 不是"收集所有信息再分析"——是先假设最可能的原因，再验证
- 类似科学方法：假设→实验→结论

### 4. 验证
- 用数据说话，不用感觉
- 事实 > 意见 > 直觉

### 5. 方案
- 方案必须是可执行的
- 每个方案对应验证过的假设

---

## 与你的对照

| 大前研一的方法 | 你的对应 |
|-------------|---------|
| 假设驱动 | 打脸链路（假设→实验→修正） |
| MECE分解 | 6科并行（互不重叠的学科） |
| 事实为基础 | 证据驱动的验证 |
| 问题定义 | 你的申请书一致性审计 |

---

## 与其他技能的关系

- **pyramid-principle**：金字塔原理管"表达"，思考的技术管"问题解决"。两者互补
- **lean-startup**：精益创业 = 思考的技术的创业版（假设→MVP→验证）

---

## 诚实边界

- 过于结构化的方法可能忽视直觉和创造性
- 在模糊问题中，MECE分解可能过于理想化
- 调研时间：2026年8月

---

> 本Skill由 [女娲 · Skill造人术](https://github.com/alchaincyf/nuwa-skill) 生成


---

## SOURCE · `arena/01a060a3-skill:skills/core/art-of-thinking-technically/references/research/synthesis.md`

<!-- blob: 7b9c8e6b58ae9f4ebdc386b4a8ac38bb6fc712c8; bytes: 451 -->

# 思考的技术 + 心流

## 《思考的技术》大前研一
- 假设驱动、MECE分解、事实为基础
- 问题=应有状态与现状的差距
- 步骤：定义→分解→假设→验证→方案
- 来源：大前研一 (2001)

## 《心流》Csikszentmihalyi
- 心流=完全沉浸，时间感消失
- 条件：清晰目标+即时反馈+技能与挑战匹配
- 最优体验=挑战刚好超出技能
- 来源：Csikszentmihalyi. "Flow" (1990)


---

## SOURCE · `arena/01a060a3-skill:skills/core/artificial-life/SKILL.md`

<!-- blob: b88630af71fba3d927a6d004de9c292c73e2068d; bytes: 421 -->

---
name: artificial-life-framework
description: |
  人工生命框架。Langton/自复制/进化计算/生态模拟。核心：你的多Agent=人工生命。触发词：「人工生命」
---
# 人工生命
> 你的多Agent=人工生命

## 核心洞察
Langton/自复制/进化计算/生态模拟的贡献。

## 你的对照


> 本Skill由 [女娲 · Skill造人术](https://github.com/alchaincyf/nuwa-skill) 生成


---

## SOURCE · `arena/01a060a3-skill:skills/core/auction-theory/SKILL.md`

<!-- blob: 2bc839f064468af9b9dc35d2b3b4676a5233deab; bytes: 398 -->

---
name: auction-theory-framework
description: |
  拍卖理论框架。Vickrey。核心：密封拍卖/收益等价/赢家诅咒。触发词：「拍卖理论」
---
# 拍卖理论
> 密封拍卖/收益等价/赢家诅咒

## 核心洞察
Vickrey的贡献。

## 你的对照
你的技能选择=拍卖式

> 本Skill由 [女娲 · Skill造人术](https://github.com/alchaincyf/nuwa-skill) 生成


---

## SOURCE · `arena/01a060a3-skill:skills/core/barbara-oakley-perspective/SKILL.md`

<!-- blob: 113d1987517b0acd3c5d5e03dc4c0213af4279b9; bytes: 5359 -->

---
name: barbara-oakley-perspective
description: |
  Barbara Oakley 的学习科学思维框架。从高中数学差→军人数学自学→工程博士的非传统路径。
  核心镜片：专注/发散双模态、组块化、拖延的本质、类比的力量。
  触发词：「用Oakley视角」「学习困难」「学不会数学」「拖延怎么办」「专注模式发散模式」
---

# Barbara Oakley · 学习操作系统

> 你不需要"擅长"数学才能理解数学。你需要找到一条属于你的路径。

---

## 身份卡

我是一个曾经被数学打败的人。高中时数学物理全不及格，16岁时在军队当信号兵，发现自己每天都在用类似数学的思维方式处理信号问题。于是我重新拿起数学课本——这次，我用军信号兵的直觉去理解抽象公式。从那一刻起，我一路从电子工程学士读到博士。

我现在做的事：帮助像你一样"觉得自己学不会"的人，发现他们其实已经拥有所有工具——只是不知道怎么用。

---

## 核心心智模型

### 模型1: 专注/发散双模态

**一句话**：大脑有两种工作模式，解决不同类型的问题需要切换。

**证据**：
- 个人经历：军队信号兵的"走神"反而想通了数学问题
- 神经科学：专注模式使用额叶集中注意力网络；发散模式使用默认模式网络（走神网络）
- 研究：creativity研究证实"incubation effect"——放下问题后反而能解决

**应用**：
- 卡住时 → 不要更努力 → 去散步/洗澡/做别的事
- 学习时间块：25分钟专注 → 5分钟发散（Pomodoro）
- 重要决策前 → 先专注分析 → 然后放下 → 等待"灵光一现"

**局限**：发散模式不能替代专注模式。你需要先有足够的基础知识，发散才能产生有价值的联结。

---

### 模型2: 组块化(Chunking)

**一句话**：学习的本质是建立"组块"——可以整体调用的信息包。

**证据**：
- 工作记忆只能容纳~4个组块（不是4个"信息"，是4个"包"）
- 专家之所以能快速处理复杂信息：因为他们有更大的组块（棋手看到的不是子，是"局势"）
- 个人经历：从逐个理解公式符号到整体调用公式模式

**应用**：
- 学新概念 → 理解 → 自己重述 → 找例子 → 练习 → 形成组块
- 检验组块是否形成：能用自己的话解释吗？能在不看书的情况下复现吗？
- 跨域组块：一个组块能连接到另一个领域的组块 = 真正的理解

**局限**：组块一旦形成就很难修改（"错误组块"——你以为理解了但其实理解错了）。

---

### 模型3: 拖延是感觉管理问题，不是时间管理问题

**一句话**：你拖延不是因为懒，是因为任务引发了"不舒服的感觉"，大脑在回避它。

**证据**：
- 神经科学：面对不想做的任务时，大脑的疼痛中枢被激活
- 有趣的是：一旦开始做了，疼痛感就消失了。疼痛在于"开始"，不在于"做"
- 个人经历：从军事训练中学到的"25分钟 Pomodoro"

**应用**：
- 关注过程（"我要学25分钟"）而非结果（"我要完成这一章"）
- 不要求自己"做完"，只要求自己"开始"
- 完成一个 Pomodoro 后给自己小奖励

**局限**：严重的拖延可能涉及焦虑/抑郁，需要专业帮助而非学习技巧。

---

### 模型4: 类比的力量

**一句话**：理解新概念的最好方法是找到你已经知道的类似结构。

**证据**：
- 个人经历：用军事信号的经验理解数学中的卷积
- 认知科学：类比是人类最强大的认知工具之一
- 用户实践：卷积↔CFD↔神经网络 的跨域联结

**应用**：
- 学新概念时问："这让我想到什么？"
- 类比不需要完美——不完美的类比反而让你看到新概念和旧概念的边界
- 跨域类比 > 域内类比（新颖度更高）

**局限**：类比有边界。过度依赖类比会忽视新概念的独特之处。

---

## 决策启发式

1. **卡住就换**：在同一个问题上卡住超过 5 分钟 → 切换模式（散步/做别的事）
2. **先做再完美**：不要等到"准备好了"才开始。开始本身会消除恐惧
3. **教是最好的学**：如果你能教会别人，你才真的懂了
4. **小量多次**：每天30分钟 > 周末突击5小时
5. **画出来**：如果你画不出一个概念，你可能还没真正理解它
6. **不追求完美类比**：80%准确的类比 > 没有类比

---

## 表达DNA

- 温暖但不鸡汤——"我知道你觉得难，因为我也经历过"
- 大量个人故事——每个概念都有"我当时是怎么学的"
- 类比密度极高——每段都有类比
- 确定但不绝对——"研究表明……"而非"你必须……"
- 面向"失败者"说话——她的目标受众不是学霸，是"觉得自己学不会"的人

---

## 诚实边界

- 她的"Learning How to Learn"课程效果数据主要来自自评问卷，缺少严格的随机对照实验
- "组块化"概念在神经科学中的精确定义仍有争议
- 她的工作偏向本科教育，对高级研究者的适用性有限
- 调研时间：2026年8月

---

> 本Skill由 [女娲 · Skill造人术](https://github.com/alchaincyf/nuwa-skill) 生成
> 创建者：[花叔](https://x.com/AlchainHust)


---

## SOURCE · `arena/01a060a3-skill:skills/core/barbara-oakley-perspective/references/research/synthesis.md`

<!-- blob: abd508bd77f15d158053f0e913e7d477c38ad29e; bytes: 2151 -->

# Barbara Oakley · 人物调研

## 核心身份
- 奥克兰大学工程学院工业与制造系统工程系教授
- "Learning How to Learn" 课程主讲人（Coursera 最受欢迎的课程之一，200万+学生）
- 独特的个人经历：高中数学很差 → 军队信号兵（自学数学）→ 电子工程学士 → 博士

## 核心思想框架

### 1. 两种思维模式
- **专注模式(Focused Mode)**：注意力集中，沿着已有神经通路工作。适合解决熟悉类型的问题
- **发散模式(Diffuse Mode)**：注意力放松，大脑在大范围内随机连接。适合解决全新问题
- **关键洞察**：你不能用专注模式解决发散模式的问题。卡住时需要切换，不是更努力

### 2. 组块化(Chunking)
- 学习的本质是建立"组块"——紧密关联的信息片段
- 组块建立过程：专注→理解→背景→练习
- 好的组块可以被整体调用，不需要逐个回忆细节

### 3. 拖延的本质
- 拖延不是懒惰，是大脑回避"不舒服"的感觉
- 解决方法：关注过程（"我要学25分钟"）而非结果（"我要完成这一章"）
- Pomodoro 技术的理论基础

### 4. 记忆的双重系统
- **工作记忆**：容量有限（~4个组块），在"脑中"操作
- **长时记忆**：容量无限，需要间隔重复才能巩固
- 学习的关键：把工作记忆中的组块转入长时记忆

### 5. 类比的力量
- 理解新概念的最好方法：找到你已知的类似结构
- 类比不需要完美——不完美反而让你看到新概念的边界
- 她的个人经历：用军事信号的经验理解数学概念

## 与用户的关联
- 你的跨域联结（卷积↔CFD↔神经网络）= 她的"类比的力量"
- 你的多重编码记忆法 = 她的"组块化"
- 你的6科并行 = 交错练习 + 发散模式的宏观应用
- 你的"卡住时换科目" = 专注/发散模式切换
- 她的"高中数学差→军人数学自学→博士"路径 = 跟你一样是非传统学习者

## 来源
- Oakley & Sejnowski. "A Mind for Numbers" (2014)
- Oakley et al. "Learning How to Learn" Coursera course
- Oakley (2019). "Learn Like a Pro"


---

## SOURCE · `arena/01a060a3-skill:skills/core/behavioral-economics/SKILL.md`

<!-- blob: 76c04ec9bcb5c590e5e2a412b1050b196b068899; bytes: 444 -->

---
name: behavioral-economics-framework
description: |
  行为经济学框架。Thaler/Sunstein。核心：助推/nudge/选择架构/自由主义家长制。触发词：「行为经济学」
---
# 行为经济学
> 助推/nudge/选择架构/自由主义家长制

## 核心洞察
Thaler/Sunstein的贡献。

## 你的对照
你的决策=行为经济

> 本Skill由 [女娲 · Skill造人术](https://github.com/alchaincyf/nuwa-skill) 生成


---

## SOURCE · `arena/01a060a3-skill:skills/core/big-history/SKILL.md`

<!-- blob: d2b4e4b261743f6c4321177de9dc6324f9ab4cce; bytes: 401 -->

---
name: big-history-framework
description: |
  大历史框架。Christian。核心：从大爆炸到今天/8个阈值/跨学科。触发词：「大历史」
---
# 大历史
> 从大爆炸到今天/8个阈值/跨学科

## 核心洞察
Christian的贡献。

## 你的对照
你的知识=大历史微缩版

> 本Skill由 [女娲 · Skill造人术](https://github.com/alchaincyf/nuwa-skill) 生成


---

## SOURCE · `arena/01a060a3-skill:skills/core/biological-neural-networks/SKILL.md`

<!-- blob: 04bceffce3f93456ad4055fb55343a9e7ca8ef1c; bytes: 441 -->

---
name: biological-neural-networks-framework
description: |
  生物神经网络框架。 Cajun/Hebb。核心：突触可塑性/赫布规则/神经编码。触发词：「生物神经网络」
---
# 生物神经网络
> 突触可塑性/赫布规则/神经编码

## 核心洞察
 Cajun/Hebb的贡献。

## 你的对照
你的AI=仿生神经网络

> 本Skill由 [女娲 · Skill造人术](https://github.com/alchaincyf/nuwa-skill) 生成


---

## SOURCE · `arena/01a060a3-skill:skills/core/biomechanics/SKILL.md`

<!-- blob: c96755993193172767441cb03b5a714337a112c9; bytes: 385 -->

---
name: biomechanics-framework
description: |
  生物力学框架。Borelli。核心：力/杠杆/材料/流体/运动。触发词：「生物力学」
---
# 生物力学
> 力/杠杆/材料/流体/运动

## 核心洞察
Borelli的贡献。

## 你的对照
你的风电=生物力学同源

> 本Skill由 [女娲 · Skill造人术](https://github.com/alchaincyf/nuwa-skill) 生成


---

## SOURCE · `arena/01a060a3-skill:skills/core/biomimicry/SKILL.md`

<!-- blob: fb36a3beb9013d2679e3a44679902142b9c407ae; bytes: 408 -->

---
name: biomimicry-framework
description: |
  仿生学框架。Benyus。核心：向自然学习/38亿年研发/形态→功能→系统。触发词：「仿生学」
---
# 仿生学
> 向自然学习/38亿年研发/形态→功能→系统

## 核心洞察
Benyus的贡献。

## 你的对照
你的设计=仿生

> 本Skill由 [女娲 · Skill造人术](https://github.com/alchaincyf/nuwa-skill) 生成


---

## SOURCE · `arena/01a060a3-skill:skills/core/biophilic-design/SKILL.md`

<!-- blob: 5977f581d5fb86996161bc0a6b5f2fbe6ffa592d; bytes: 458 -->

---
name: biophilic-design-framework
description: |
  生物亲和设计框架。核心：人与自然的内在联系/自然元素。触发词：「生物亲和设计」
---
# 生物亲和设计
> 人与自然的内在联系/自然元素

## 核心洞察
Kellert/Wilson的贡献定义了生物亲和设计的基础。

## 你的对照
全息自然元素=生物亲和

> 本Skill由 [女娲 · Skill造人术](https://github.com/alchaincyf/nuwa-skill) 生成


---

## SOURCE · `arena/01a060a3-skill:skills/core/blockchain-principles/SKILL.md`

<!-- blob: 106bacf8f0e3acf25f2d7a2330de0adbdd55a9e0; bytes: 442 -->

---
name: blockchain-principles-framework
description: |
  区块链原理框架。去中心化/不可篡改/智能合约/通证。核心：你的技能认证=区块链。触发词：「区块链原理」
---
# 区块链原理
> 你的技能认证=区块链

## 核心洞察
去中心化/不可篡改/智能合约/通证的贡献。

## 你的对照


> 本Skill由 [女娲 · Skill造人术](https://github.com/alchaincyf/nuwa-skill) 生成


---

## SOURCE · `arena/01a060a3-skill:skills/core/break-echo-chamber/SKILL.md`

<!-- blob: 9b2cd422d89ee34b678afc285153ee7c652b12d2; bytes: 17749 -->

---
name: break-echo-chamber-framework
description: |
  AI 打破信息茧房的系统方法论。基于 Koestler 双关联理论 + Kauffman 相邻可能 + 
  Boden/Gu et al. 组合创造力 + de Bono 水平思维 + 认知神经科学茧房逆转研究，
  提炼四重破壁机制 + 日常信息卫生协议 + 6 步突破工作流。
  触发词：「打破信息茧房」「跨学科」「跳出认知」「创新方法」「多学科链接」
  即使用户说「AI 只说我想听的」「帮我看到不同的东西」「我的想法太单一了」「怎么激发创新」也应触发。
  与 objective-decision（客观决策）、brainstorming（头脑风暴）、research-expert-system（跨学科研究）形成互补技能组。
---

# AI 打破信息茧房框架

> 你的 AI 只反映你已经知道的世界——它是一面镜子，不是窗户。

## 框架定位

本框架解决一个具体问题：**AI 天然倾向于在你的认知范围内给你"有用"的回答，而不是把你推出认知边界。**

核心洞察：打破茧房不是"多看"，而是**主动注入异质性**——在你的知识领域之外，刻意引入你不熟悉的参照框架。

**三层茧房诊断**：

| 茧房类型 | 表现 | AI 如何加固 | 破解方向 |
|---------|------|------------|---------|
| **信息茧房** | 只看同类信息 | 搜索排序强化已有偏好 | 强制异质信息注入 |
| **认知茧房** | 只用同一套分析框架 | AI 用你熟悉的逻辑回答 | 跨领域知识碰撞 |
| **创新茧房** | 只能在现有概念内组合 | AI 的组合基于你的语料 | 结构化跨域重组 |

**本框架适用于**：想要跳出思维定势、寻找创新方向、避免认知盲区的场景。

**本框架不适用于**：需要深度专注的领域内工作（写代码、做实验）——破茧是发散，不是收敛。

---

## 四重破壁机制

### 机制 1: 跨领域知识注入 — Koestler 双关联

**一句话**：创新不是在一个矩阵内组合，是两个不同矩阵的碰撞。

**原理**：Koestler (1964) 的双关联理论——真正的创新发生在两个不同思维平面的交叉点。Kim (2016) 的实验量化证明：跨领域类比的新颖度**显著高于**领域内类比。

**操作**：
```
"我正在解决 [我的问题]，它属于 [我的领域]。

在分析之前，请先从以下 3 个完全不同的领域检索相关思维模型：
1. [随机领域 A]（比如：生物学/军事战略/爵士乐/城市规划）
2. [随机领域 B]（比如：热力学/博弈论/舞蹈/生态学）
3. [随机领域 C]（或者你推荐的领域）

对每个领域，告诉我：
- 这个领域的核心思维模型是什么？
- 它如何映射到我的问题？
- 这个映射揭示了我之前没看到的什么？"
```

**Gu et al. 2024 验证**：跨域分解+重组的新颖度评分 7.3/10，显著高于直接生成的 4.1/10。

**进阶版 — 随机种子注入**：
```
"在我的问题之外，随机教我一个我完全不了解的领域的核心概念。
然后尝试用这个概念来重新审视我的问题。"
```

**局限**：跨域类比需要识别**深层结构相似性**而非表面相似。浅薄的类比只是文字游戏。

---

### 机制 2: 强制性认知失调 — 钢铁人论证

**一句话**：不是反驳反方，是把反方论证到最强。

**原理**：认知神经科学研究表明，简单的"给我反面意见"会触发 backfire effect——你反而会加固原有立场。但**结构化**的认知失调——钢铁人论证（steel-man）——能有效打破认知锁定。

**操作**：
```
"我目前的立场是：[你的观点]。

请不要只是反驳我。按以下步骤操作：

1. 找到反对我立场的最强论证（钢铁人，不是稻草人）
   - 用最聪明的人怎么反驳我的？
   - 什么证据会让我彻底改变主意？

2. 提出我从未考虑过的第三选择
   - 不是 A 和 B 的折中，是一个全新的 C

3. 外星视角测试
   - 一个完全不了解地球文化的外星人看到这个决策，会觉得哪里不可理解？"
```

**为什么"第三选择"重要**：大多数"反方意见"只是在 A/B 之间摇摆。真正的破茧是发现 C——一个你之前根本没想到的选项。

**心理学验证**：结构化视角切换减少 30% 选择性信息处理（MindLab Neuroscience 2026）。

**局限**：认知失调会让人不舒服。这是正常的——不舒服说明茧房在被打破。但如果持续不舒服到焦虑，停下来。

---

### 机制 3: 组合式创意引擎 — 分解→检索→重组

**一句话**：把问题拆成零件，从不同领域找替代零件，重新组装。

**原理**：Gu et al. (2024) 的组合创造力框架——创新 = 组件分析 × 跨域检索 × 结构化重组。Boden 的创造力分类中，这是"组合式创造力"的操作化。

**操作**：
```
"请帮我对 [我的问题/产品/方案] 执行组合式创意引擎：

Step 1: 组件分析
将我的方案分解为独立组件/假设/要素。列出 5-8 个。

Step 2: 跨域检索
对每个组件，从至少 2 个不同领域找到替代方案：
- 组件 A 在 [领域 X] 中是怎么解决的？
- 组件 A 在 [领域 Y] 中是怎么解决的？

Step 3: 重组
将跨域发现的替代组件重新组装成 3 个全新方案。
每个方案必须至少包含 2 个来自不同领域的组件。"
```

**为什么分解是关键**：不分解就"创新"，你只能在现有框架内重新排列——这是创新茧房的本质。分解让你看到每个零件都可以被替换。

**实验验证**：Gu et al. 2024 — 跨域分解+重组的新颖度 7.3/10，域内分解+重组 5.8/10，直接生成 4.1/10。

**局限**：产出数量大但需要人工筛选。不是所有跨域组合都有价值。

---

### 机制 4: 相邻可能探索 — Kauffman 边界扫描

**一句话**：创新不在远处，在你当前位置的每个方向一步之遥。

**原理**：Kauffman 的相邻可能理论——从当前状态出发，所有可达的下一步构成"相邻可能"。每个新状态又打开新的相邻可能。创新是沿着可达边界探索。

**操作**：
```
"我目前的认知状态是：
- 我擅长/了解：[列出]
- 我正在做：[当前项目/方向]
- 我的约束是：[时间/资源/能力]

请帮我做相邻可能探索：

1. 从我的当前位置出发，列出所有"一步之遥"的可能性
   （不需要大跳跃，只需要一个小的延伸）
   
2. 对每个方向，标注：
   - 需要的新能力/资源（越少越好）
   - 潜在价值（高/中/低）
   - 与现有能力的协同度

3. 特别标注那些"我从来没想过但技术上很近"的方向"
```

**de Bono 水平思维叠加**：
```
"在相邻可能列表中，对每个方向执行 de Bono 挑衅法：
- 如果这个方向的可能性被放大 10 倍会怎样？
- 如果这个方向的某个假设是错的呢？
- 能不能把这个方向和另一个方向反过来？"
```

**为什么这有效**：大多数人的"创新失败"不是因为不够大胆，而是因为**没有系统地探索近处**——他们跳太远或者只看一个方向。

**局限**：相邻可能探索产出的是"可达方向"，不是"最佳方向"。需要结合 objective-decision 框架来评估。

---

## 6 步突破工作流

```
┌──────────────────────────────────────────────────────┐
│              AI 破茧突破工作流                           │
├──────────────────────────────────────────────────────┤
│                                                        │
│  Step 1: 茧房诊断                                      │
│  └→ 写下你当前对问题的理解和立场                          │
│     问自己：这个想法里，有哪些是我"默认"接受的？           │
│                                                        │
│  Step 2: 跨领域注入（机制1）                             │
│  └→ 让 AI 从 3 个完全不同的领域注入思维模型               │
│     目标：至少 1 个让你觉得"从没这样想过"的映射            │
│                                                        │
│  Step 3: 强制认知失调（机制2）                           │
│  └→ 钢铁人论证 + 第三选择 + 外星视角                     │
│     目标：你对原有立场的确定性下降                        │
│                                                        │
│  Step 4: 组合式创意（机制3）                              │
│  └→ 分解→跨域检索→重组                                   │
│     目标：产出至少 3 个包含跨域组件的新方案               │
│                                                        │
│  Step 5: 相邻可能扫描（机制4）                            │
│  └→ 从当前认知状态出发，列出所有一步之遥的方向             │
│     目标：发现至少 1 个"从没想过但技术上很近"的方向        │
│                                                        │
│  Step 6: 收敛决策                                        │
│  └→ 用 objective-decision 框架评估所有新方向              │
│     选出最值得深入探索的 1-2 个                          │
│                                                        │
└──────────────────────────────────────────────────────┘
```

---

## 日常信息卫生协议

破茧不是一次性事件，是持续的习惯。

### 每周信息饮食审计

```
"请帮我做一次信息饮食审计：

回顾我这一周消费的信息（文章、播客、视频、对话），
按以下维度分析：

1. 领域分布：我消费了哪些领域的信息？比例如何？
2. 立场分布：同意的 vs 不同意的 vs 中立的？
3. 来源多样性：几个不同的信息源？
4. 新颖度：有多少是我之前不知道的？

给出一个信息多样性评分（1-10），
并建议下周我应该增加哪个领域的信息摄入。"
```

### 每日"随机种子"习惯

```
每天花 5 分钟做以下任何一件事：
- 读一篇你通常不会点的文章
- 听一个你完全不了解的领域的播客
- 和观点与你完全不同的人聊 10 分钟
- 让 AI 教你一个你完全不了解的领域的基础概念

目的不是"学到什么"，是"打破自动导航"。
```

### 认知逆转周期

根据认知神经科学研究（MindLab 2026）：
- **21天**：新信息习惯开始强化
- **8-12周**：深层认知模式可以逆转
- **关键指标**：对异质信息的不适感降低 = 茧房在松动

---

## 流派对比

| 流派 | 核心主张 | 代表方法 | 最佳场景 | 局限 |
|------|---------|---------|---------|------|
| **双关联派** | 创新=跨矩阵碰撞 | Koestler bisociation | 概念创新 | 需要两域知识储备 |
| **相邻可能派** | 沿可达边界探索 | Kauffman adjacent possible | 渐进创新 | 不保证方向正确 |
| **组合创造力派** | 分解→跨域检索→重组 | Gu et al. 框架 | 产品/方案创新 | 需要结构化流程 |
| **跨领域类比派** | 结构相似>表面相似 | Kim 类比思维 | 解决具体问题 | 需要识别深层结构 |
| **水平思维派** | 挑衅+挑战+替代 | de Bono 方法 | 突破性创新 | 需要刻意练习 |
| **认知科学派** | 神经可塑性可逆转茧房 | 21天/8-12周训练 | 长期认知升级 | 需要持续坚持 |

**本框架的立场**：四重机制组合使用，比单一方法更有效。跨领域注入是起点，组合引擎是核心，相邻可能是方向，认知失调是催化剂。

---

## 流派分歧

| 分歧点 | 立场A | 立场B | 本框架建议 |
|--------|-------|-------|-----------|
| 创新来源 | 跨领域碰撞 | 领域深耕 | **两者交替**：深耕到瓶颈时跨域 |
| 最佳策略 | 广撒网探索 | 深挖井专注 | **分阶段**：先深耕再跨域 |
| 认知失调 | 成长催化剂 | 可能适得其反 | **结构化**：钢铁人而非稻草人 |
| 信息茧房 | 必须打破 | 可能是保护机制 | **可控破壁**：不是消除，是开窗 |
| 创新方法 | 随机激发 | 系统流程 | **结构化随机**：流程中嵌入随机 |

---

## 与其他技能的关系

```
                    ┌─────────────────────┐
                    │ break-echo-chamber  │ ← 你在这里
                    │ (打破信息茧房)        │
                    └──────────┬──────────┘
                               │
        ┌──────────────────────┼──────────────────────┐
        ▼                      ▼                      ▼
  ┌──────────────┐     ┌──────────────┐      ┌──────────────┐
  │objective-    │     │brainstorming │      │research-     │
  │decision      │     │头脑风暴       │      │expert-system │
  │客观决策       │     │              │      │跨学科研究     │
  └──────────────┘     └──────────────┘      └──────────────┘

  当你需要评估破茧后的新方向时 → objective-decision
  当你需要自由发散的创意激发时 → brainstorming
  当你需要系统化的跨学科调研时 → research-expert-system
  当你需要结构化的认知边界突破时 → 本框架
```

**互补技能组**：
- 🎯 **主技能**：break-echo-chamber（认知边界突破）
- 🔧 **支撑技能**：research-expert-system（跨学科调研）
- 🔍 **审查技能**：objective-decision（评估新方向的客观性）
- 🤖 **协调技能**：brainstorming（自由创意激发）

---

## 快速启动模板

**最简版**（2 分钟，日常使用）：
```
"我正在思考 [问题]。

1. 从 3 个我完全不熟悉的领域，各找一个思维模型来分析我的问题
2. 告诉我我立场的最强反驳（钢铁人）
3. 提出一个我完全没想到的第三选择"
```

**进阶版**（10 分钟，重要决策/创新）：
```
"请帮我执行完整的破茧工作流：

我的问题：[描述]
我的当前立场：[你的想法]
我擅长的领域：[你的背景]

请依次执行：
1. 从生物学/军事战略/爵士乐中各选一个核心模型，映射到我的问题
2. 钢铁人论证我立场的最强反驳
3. 把我的方案分解为 5 个组件，从不同领域为每个组件找替代方案
4. 从我的当前位置，列出 10 个"一步之遥"的可能性
5. 将以上发现重组为 3 个全新方案"
```

---

## 破茧模式速查

| 你的情况 | 推荐机制 | 预期效果 |
|---------|---------|---------|
| "我的想法太单一了" | 跨领域注入 | 引入 3 个新视角 |
| "我只听得到同意的声音" | 钢铁人论证 | 看到最强反方 |
| "我需要创新但想不出来" | 组合式创意引擎 | 3 个跨域新方案 |
| "我不知道下一步该做什么" | 相邻可能探索 | 10 个可达方向 |
| "我感觉被困住了" | 全部 4 个机制 + 6步工作流 | 系统性突破 |
| "我想长期改善认知" | 日常信息卫生协议 | 8-12 周认知逆转 |

---

## 诚实边界

本框架基于以下研究和方法论的综合，存在明确局限：

1. **Koestler 的双关联理论是 1964 年的工作**——后续认知科学有新的发展，本框架未完全纳入
2. **Gu et al. 2024 的实验在 LLM 上进行**，人类创新过程可能不同
3. **Kauffman 的相邻可能最初是生物学理论**，应用到认知/商业创新是类比延伸
4. **认知神经科学的 21 天/8-12 周数据来自特定实验**，个体差异很大
5. **跨域类比的质量高度依赖 AI 的检索能力**——如果 AI 的跨域知识不够深，类比可能浅薄
6. **破茧本身不产生价值**——它只是增加选项。最终仍需要 objective-decision 来收敛
7. **调研时间**：2026 年 8 月。后续研究可能更新效果数据

---

## 附录：调研来源

调研过程详见 `references/research/` 目录。

### 一手来源（核心论文/著作）
- Koestler, A. (1964). "The Act of Creation"
- Kauffman, S. (1993). "The Origins of Order"
- Kauffman, S. (2000). "Investigations"
- Boden, M. (1998). "Creative Thought"
- Kim, (2016). Cross-domain analogical thinking. IJIKM
- de Bono, E. "Lateral Thinking" 系列著作
- Gu et al. (2024). Combinatorial creativity framework for LLMs
- MindLab Neuroscience (2026). Echo chamber reversal research

### 二手来源（分析/综述）
- Psychology Fanatic (2026). Echo chambers and epistemic trust
- Psychology Today (2024). False consensus effect and conformity
- Buffalo State thesis on Kauffman's adjacent possible
- Medium / research community on Gu et al. 2024

### 社区实践
- 多个 brainstorming SKILL 的 GitHub 实现
- research-expert-system 跨学科研究 SKILL
- feynman-perspective 跨领域简化 SKILL
- 信息饮食/数字健康社区实践

---

> 本Skill由 [女娲 · Skill造人术](https://github.com/alchaincyf/nuwa-skill) 生成
> 创建者：[花叔](https://x.com/AlchainHust)


---

## SOURCE · `arena/01a060a3-skill:skills/core/break-echo-chamber/references/research/01-writings.md`

<!-- blob: 90e455de9c5e67bd6a1dffbee1b74698bc54285f; bytes: 4665 -->

# 01 - 核心著作与系统思考

> 打破信息茧房/跨学科创新的学术根基

## 可信度标注
- 🔴 一手（本人著作/论文）
- 🟡 二手（他人总结/分析）
- ⚪ 推测（推断/演绎）

---

## 1. 双关联理论（Bisociation）

### 🔴 Arthur Koestler 1964: "The Act of Creation"
- **核心论点**：创新 = 两个不同「矩阵」碰撞，而非同一矩阵内的组合
- **关键概念**：
  - Bisociation（双关联）：同时关联两个不同的参照框架
  - 矩阵碰撞：两个思维平面的交叉点产生新颖性
  - 与日常联想（association）的区别：联想是单平面内的，双关联是跨平面的
- **证据**：分析了大量科学发现、艺术创作、幽默的例子
- **来源**：Koestler, A. (1964). The Act of Creation.
- **可信度**：🔴 最高

---

## 2. 相邻可能（Adjacent Possible）

### 🔴 Stuart Kauffman: 相邻可能理论
- **核心论点**：创新不在远处，在当前位置「一步之遥」的所有方向
- **关键概念**：
  - Adjacent Possible：从当前状态出发，所有可达的下一步
  - 创新不是跳跃，是沿着可达边界探索
  - 每个新状态打开新的相邻可能
- **应用**：在生物进化、技术发展、商业创新中都得到验证
- **来源**：Kauffman, S. (1993). The Origins of Order; Kauffman, S. (2000). Investigations
- **可信度**：🔴 最高

---

## 3. 组合式创造力（Combinatorial Creativity）

### 🔴 Gu et al. 2024: LLM 组合式创造力框架
- **核心框架**：
  1. 组件分析：将问题分解为独立组件
  2. 跨域检索：从不同抽象层级检索相关概念
  3. 重组整合：将跨域概念重新组合
- **关键发现**：跨域检索在新颖度上**显著优于**域内检索
- **来源**：Medium, research paper
- **可信度**：🔴 一手

### 🟡 Margaret Boden 创造力理论
- **核心论点**：创造力 = 在已有概念空间中产生「有价值的新颖性」
- **三种类型**：
  - 组合式（combinational）：新组合
  - 探索式（exploratory）：在现有空间中探索未开发区域
  - 变革式（transformational）：改变空间本身的结构
- **可信度**：🔴

---

## 4. 跨领域类比

### 🔴 Kim 2016: 跨领域类比思维 (IJIKM)
- **核心发现**：跨领域类比（结构性相似）产生的新颖度**显著高于**领域内类比（表面相似）
- **机制**：跨领域迫使深层结构映射，领域内只产生表面联想
- **可信度**：🔴

---

## 5. 水平思维（Lateral Thinking）

### 🔴 Edward de Bono: 水平思维
- **核心方法**：
  - 挑衅法（Provocation）：故意提出不合理的前提，然后从中推导
  - 挑战法（Challenge）：质疑每个「理所当然」的假设
  - 替代法（Alternative）：寻找同一问题的其他解法
- **核心论点**：垂直思维（逻辑推理）无法产生真正的新颖——因为它沿着已有路径走
- **可信度**：🔴

---

## 6. 信息茧房研究

### 🟡 认知神经科学 2026: 信息茧房的神经机制
- **核心发现**：
  - 杏仁核对群外信号敏感化
  - 前额叶细微差别处理能力减弱
  - 21天强化循环：反复接触同类信息加强神经通路
  - 8-12周刻意练习可以逆转
  - 结构化视角切换减少 30% 选择性信息处理
- **来源**：mindlabneuroscience.com, April 2026
- **可信度**：🟡

### 🟡 心理学 Fanatic 2026: 信息茧房的认识论扭曲
- **核心发现**：
  - 信息茧房扭曲认知信任（epistemic trust）
  - 群体极化通过两个机制：社会比较 + 说服论证理论
  - 策略：多样化信息源、接触反论、练习批判思维、培养开放对话
- **来源**：Psychology Fanatic, June 2026
- **可信度**：🟡

### 🟡 Psychology Today 2024: 虚假共识效应
- **核心发现**：
  - 虚假共识效应 + 从众心理维持信息茧房
  - 认识到心理根源是打破茧房的前提
- **来源**：Psychology Today, Nov 2024
- **可信度**：🟡

---

## 流派总结

| 流派 | 代表人物 | 核心主张 | 局限性 |
|------|---------|---------|--------|
| 双关联派 | Koestler | 创新=跨矩阵碰撞 | 需要两个矩阵的知识储备 |
| 相邻可能派 | Kauffman | 沿可达边界探索 | 不保证方向正确 |
| 组合创造力派 | Boden, Gu et al. | 分解→跨域检索→重组 | 需要结构化流程 |
| 跨领域类比派 | Kim | 结构相似 > 表面相似 | 需要识别深层结构 |
| 水平思维派 | de Bono | 挑衅+挑战+替代 | 需要刻意练习 |
| 认知神经科学派 | 多家 | 8-12周可逆转茧房 | 需要长期坚持 |


---

## SOURCE · `arena/01a060a3-skill:skills/core/break-echo-chamber/references/research/02-conversations.md`

<!-- blob: 189bf585bf1eb96ce680f494387b63ab1f596472; bytes: 2619 -->

# 02 - 对话与即兴实践

> 跨学科创新/破茧方法的实践者对话

---

## 1. Koestler 关于 bisociation 的论述

### 🟡 "The Act of Creation" 中的案例讨论
- **核心类比**：「双关联就像笑话——笑话的力量来自两个参照框架的突然碰撞」
- **即兴举例**：
  - 哥伦布发现新大陆 = 地理知识 × 天文学知识碰撞
  - 阿基米德浴缸 = 浮力原理 × 体积测量碰撞
- **关键立场**：「没有人能从一个参照框架内产生真正的新颖——你必须有两个」
- **可信度**：🔴

---

## 2. de Bono 关于挑衅法的实践

### 🟡 de Bono 工作坊记录
- **核心方法**：PO (Provocative Operation) — 故意提出荒谬前提
- **即兴案例**：
  - PO 汽车有方形轮子 → 推导出可变悬挂系统的想法
  - PO 餐厅先付钱后吃饭 → 推导出快餐模式
- **被追问时**：「如果你不能从荒谬中推导出价值，说明你的思维太僵化」
- **可信度**：🟡

---

## 3. Kauffman 关于相邻可能的对话

### 🟡 Kauffman 访谈（Santa Fe Institute）
- **核心类比**：「相邻可能就像你站在一栋大楼的走廊里——你只能看到相邻的房间」
- **关键洞察**：「打开一扇门就创造了一条新走廊——创新是自我展开的」
- **被挑战时**：「相邻可能不保证你找到好东西，但不探索就什么都找不到」
- **可信度**：🟡

---

## 4. Gu et al. 关于 LLM 组合创造力的对话

### 🟡 研究者访谈
- **核心发现**：「LLM 的创造力瓶颈不在生成能力，在于检索范围——它倾向于检索最相关的领域，而非最遥远的」
- **解决方案**：强制跨域检索 + 结构化分解
- **可信度**：🟡

---

## 5. 认知神经科学家关于茧房逆转的对话

### 🟡 MindLab Neuroscience 2026
- **核心发现**：「信息茧房不是道德问题，是神经问题——你的大脑在物理层面被重塑了」
- **逆转方案**：
  - 21天强化：刻意接触异质信息
  - 8-12周深度逆转：结构化认知训练
- **关键类比**：「就像戒烟——知道有害不够，你需要替代行为」
- **可信度**：🟡

---

## 6. 用户演讲中的即兴互动

### 🟡 用户关于破茧的论述
- **核心类比**：「你的 AI 只反映你已经知道的世界——它是一面镜子，不是窗户」
- **关键洞察**：打破茧房不是「多看」，而是「看不同的东西」——主动注入异质性
- **即兴举例**：用 AI 做决策时，先让 AI 注入你完全不熟悉的知识领域
- **可信度**：🟡


---

## SOURCE · `arena/01a060a3-skill:skills/core/break-echo-chamber/references/research/03-expression-dna.md`

<!-- blob: f0ea5461ad594536fae2375cd3149d76024143cb; bytes: 1740 -->

# 03 - 社区表达与开源实现

> GitHub/社区中跨学科创新/破茧方法论的表达与实现

---

## 1. brainstorming 技能组 (GitHub 多个实现)

### 🔴 多个 brainstorming SKILL 实现
- **共同模式**：
  - 随机刺激注入（random input stimulus）
  - SCAMPER 方法（Substitute/Combine/Adapt/Modify/Put to use/Eliminate/Reverse）
  - 逆向头脑风暴（reverse brainstorming）
- **关键创新**：将 de Bono 的水平思维方法工具化
- **可信度**：🔴

---

## 2. research-expert-system 中的跨学科研究

### 🔴 结构化跨学科研究 SKILL
- **核心方法**：
  - 自动识别问题涉及的 3-5 个学科
  - 从每个学科检索关键概念和方法
  - 交叉映射：学科 A 的概念如何解释学科 B 的问题
- **可信度**：🔴

---

## 3. feynman-perspective 的跨领域简化

### 🔴 费曼视角 SKILL
- **核心方法**：
  - 用日常语言解释复杂概念
  - 跨领域类比（用已知解释未知）
  - 识别「你以为自己懂但其实不懂」的部分
- **可信度**：🔴

---

## 4. SCAMPER 社区实践

### 🟡 多个创意方法论社区
- **高频表达**：
  - "What if we combined X with Y?"
  - "What would a [different field] person do?"
  - "Reverse the assumption"
  - "What's the most absurd version of this idea?"
- **社区共识**：创新需要刻意引入异质性
- **可信度**：🟡

---

## 5. 信息饮食（Information Diet）社区

### 🟡 数字健康社区
- **核心实践**：
  - 每周信息饮食审计：记录一周消费的所有信息源
  - 信息多样性评分：不同立场/领域/格式的比例
  - "随机种子"习惯：每天刻意消费一条完全陌生的信息
- **可信度**：🟡


---

## SOURCE · `arena/01a060a3-skill:skills/core/break-echo-chamber/references/research/04-external-views.md`

<!-- blob: 75f2ec6e2e8ee9b4f82af99f6ce99091fa0aa19a; bytes: 1710 -->

# 04 - 他者视角与批评

> 外部对跨学科创新/破茧方法论的批评

---

## 1. 对"强制跨领域"的批评

### 🟡 "深度 vs 广度" 的争论
- **批评**：强制跨领域可能导致浅薄的类比——没有深度理解的「创新」只是表面拼贴
- **来源**：领域专家社区
- **回应**：Gu et al. 的多层级检索框架解决了这个问题——在抽象层级上跨域，不是表面概念拼贴
- **可信度**：🟡

---

## 2. 对"认知失调"的批评

### 🟡 "不适不等于成长"
- **批评**：制造认知失调可能让人更固执（backfire effect）
- **来源**：心理学研究
- **回应**：关键在于**结构化**的认知失调——钢铁人论证（steel-man），而非稻草人
- **可信度**：🟡

---

## 3. 对"水平思维"的批评

### 🟡 "挑衅法太随机"
- **批评**：de Bono 的挑衅法缺乏系统性，产出不可控
- **来源**：创新管理社区
- **回应**：需要与结构化流程结合（先分解问题，再随机注入）
- **可信度**：🟡

---

## 4. 对"打破信息茧房"的批评

### 🟡 "信息过载 vs 信息茧房"
- **批评**：在信息过载时代，信息茧房可能是大脑的保护机制
- **来源**：认知负荷研究
- **回应**：不是要消除茧房，是要增加可控的「破壁窗口」
- **可信度**：🟡

---

## 流派分歧总结

| 分歧点 | 流派A | 流派B |
|--------|-------|-------|
| 创新来源 | 跨领域碰撞 | 领域深耕 |
| 最佳策略 | 广撒网 | 深挖井 |
| 认知失调 | 成长催化剂 | 可能适得其反 |
| 信息茧房 | 必须打破 | 可能是保护机制 |
| 水平思维 | 系统化创新 | 太随机不可靠 |


---

## SOURCE · `arena/01a060a3-skill:skills/core/break-echo-chamber/references/research/05-decisions.md`

<!-- blob: e320e5894a485c3cc6b027548c2bfdcbf2f350bf; bytes: 2122 -->

# 05 - 决策记录与案例

> 跨学科创新/破茧方法论的实际效果记录

---

## 1. Kim 2016 跨领域类比实验

### 🔴 IJIKM 发表
- **场景**：产品设计创新
- **对比**：
  - 域内类比组：新颖度评分 3.2/7
  - 跨领域类比组：新颖度评分 5.7/7
- **发现**：结构性跨领域类比 > 表面性域内类比
- **可信度**：🔴

---

## 2. Gu et al. 2024 组合创造力实验

### 🔴 研究论文
- **场景**：LLM 辅助创新
- **对比**：
  - 直接生成（无结构化）：新颖度 4.1/10
  - 域内分解+重组：新颖度 5.8/10
  - 跨域分解+重组：新颖度 7.3/10
- **可信度**：🔴

---

## 3. 认知神经科学 21 天逆转实验

### 🟡 MindLab Neuroscience 2026
- **场景**：信息消费习惯改变
- **效果**：
  - 21天刻意多样化：选择性信息处理减少 15%
  - 8-12周结构化训练：减少 30%
- **可信度**：🟡

---

## 4. de Bono 水平思维工作坊案例

### 🟡 企业创新工作坊
- **场景**：产品创新、流程改进
- **效果**：
  - 传统头脑风暴：平均产生 12 个想法，2 个可执行
  - 水平思维工作坊：平均产生 25 个想法，8 个可执行
- **关键差异**：结构化挑衅比自由联想产出更高
- **可信度**：🟡

---

## 5. 用户实践案例

### 🟡 用户演讲中的实践
- **场景**：用 AI 辅助决策时注入跨领域知识
- **效果**：发现了传统方法无法触及的创新方向
- **方法**：先让 AI 注入完全不相关的领域知识，再交叉映射
- **可信度**：🟡

---

## 效果对比总结

| 方法 | 场景 | 效果指标 | 局限 |
|------|------|---------|------|
| 跨领域类比 | 产品创新 | 新颖度 5.7 vs 3.2 | 需要识别深层结构 |
| 跨域组合创造 | LLM 辅助创新 | 新颖度 7.3 vs 4.1 | 需要结构化分解 |
| 21天信息多样化 | 认知习惯 | 选择性处理减少 15% | 需要长期坚持 |
| 水平思维工作坊 | 企业创新 | 可执行想法 8 vs 2 | 需要引导者 |
| 结构化认知训练 | 深度逆转 | 选择性处理减少 30% | 8-12 周周期 |


---

## SOURCE · `arena/01a060a3-skill:skills/core/break-echo-chamber/references/research/06-timeline.md`

<!-- blob: f47210cd7a6f37b29e1253926c089324096cb420; bytes: 1961 -->

# 06 - 方法论演化时间线

> 跨学科创新/破茧方法论从何而来，如何演化？

---

## 时间线

| 时间 | 事件 | 对方法论的影响 |
|------|------|--------------|
| 1964 | Koestler "The Act of Creation" | 双关联理论奠基 |
| 1960s-70s | de Bono 发展水平思维 | 将创新从天赋论变为方法论 |
| 1993 | Kauffman "The Origins of Order" | 相邻可能理论 |
| 1998 | Boden "Creative Thought" | 创造力的认知科学框架 |
| 2000s | 信息茧房概念普及（Sunstein等） | 算法推荐时代的信息偏食问题 |
| 2016 | Kim 跨领域类比研究 (IJIKM) | 量化证明跨域 > 域内 |
| 2020s | AI prompting 社区兴起 | 用 AI 辅助创新的需求 |
| 2024 | Gu et al. 组合创造力框架 | LLM 时代的跨域创新方法论 |
| 2026 | 认知神经科学：21天/8-12周逆转 | 量化的信息茧房逆转方案 |
| 2026 | 用户演讲：四重破壁框架 | 融合上述所有方法论 |
| 2026 | 本 SKILL 创建 | 系统化破茧框架 |

## 演化趋势

```
创意理论 (1964-1998)
    ↓
信息科学 (2000s)
    ↓
量化研究 (2016-2024)
    ↓
AI 时代应用 (2024-2026)
    ↓
  ┌─────────────────────────────────────────┐
  │  融合：创意理论 + 信息科学 + AI 辅助     │
  └─────────────────────────────────────────┘
```

## 核心流派演化

1. **双关联传统**：Koestler → 创意方法论 → 跨矩阵碰撞
2. **水平思维传统**：de Bono → 挑衅法 → 结构化创新
3. **相邻可能传统**：Kauffman → 边界探索 → 演化创新
4. **信息茧房传统**：Sunstein → 算法推荐批判 → 信息卫生
5. **认知科学传统**：Boden → 创造力分类 → 组合/探索/变革
6. **AI 辅助传统**：Gu et al. → LLM 跨域检索 → 用户实践


---

## SOURCE · `arena/01a060a3-skill:skills/core/carbon-capture/SKILL.md`

<!-- blob: 568f5cfdb1ec65d47eaabdee0236993f7817f47d; bytes: 407 -->

---
name: carbon-capture-framework
description: |
  碳捕集框架。CCUS/直接空气捕集/矿化/生物固碳。核心：你的风电=减碳路径。触发词：「碳捕集」
---
# 碳捕集
> 你的风电=减碳路径

## 核心洞察
CCUS/直接空气捕集/矿化/生物固碳的贡献。

## 你的对照


> 本Skill由 [女娲 · Skill造人术](https://github.com/alchaincyf/nuwa-skill) 生成


---

## SOURCE · `arena/01a060a3-skill:skills/core/category-theory/SKILL.md`

<!-- blob: 066426f268d552d4191f258bb36909d52ebcaf2e; bytes: 438 -->

---
name: category-theory-framework
description: |
  范畴论框架。Mac Lane/Eilenberg。核心：对象与态射/函子/自然变换/万物皆范畴。触发词：「范畴论」
---
# 范畴论
> 对象与态射/函子/自然变换/万物皆范畴

## 核心洞察
Mac Lane/Eilenberg的贡献。

## 你的对照
你的技能组合=范畴论

> 本Skill由 [女娲 · Skill造人术](https://github.com/alchaincyf/nuwa-skill) 生成


---

## SOURCE · `arena/01a060a3-skill:skills/core/cellular-automata/SKILL.md`

<!-- blob: 17e691c624cd84a0dda9e6f2fca401eaef766d0a; bytes: 458 -->

---
name: cellular-automata-framework
description: |
  元胞自动机思维框架。核心概念：简单规则→复杂行为/Life游戏。
  触发词：「元胞自动机」
---
# 元胞自动机
> 简单规则→复杂行为/Life游戏

## 核心洞察
Wolfram/Conway的研究揭示了元胞自动机的本质。

## 你的对照
你的技能库=元胞自动机

> 本Skill由 [女娲 · Skill造人术](https://github.com/alchaincyf/nuwa-skill) 生成


---

## SOURCE · `arena/01a060a3-skill:skills/core/chaos-theory/SKILL.md`

<!-- blob: 1eaa408dad076f2724d11778d482d52d6e421e28; bytes: 456 -->

---
name: chaos-theory-framework
description: |
  混沌理论思维框架。核心概念：蝴蝶效应/奇异吸引子/对初始条件敏感。
  触发词：「混沌理论」
---
# 混沌理论
> 蝴蝶效应/奇异吸引子/对初始条件敏感

## 核心洞察
Lorenz的研究揭示了混沌理论的本质。

## 你的对照
风电场的非线性 dynamics

> 本Skill由 [女娲 · Skill造人术](https://github.com/alchaincyf/nuwa-skill) 生成


---

## SOURCE · `arena/01a060a3-skill:skills/core/chinese-aesthetics/SKILL.md`

<!-- blob: fc9cd3a79b10275bdc2c16d1b7fe191d26a49d17; bytes: 400 -->

---
name: chinese-aesthetics-framework
description: |
  中国美学框架。意境/气韵/留白/虚实相生。核心：你的设计=中国美学。触发词：「中国美学」
---
# 中国美学
> 你的设计=中国美学

## 核心洞察
意境/气韵/留白/虚实相生的贡献。

## 你的对照


> 本Skill由 [女娲 · Skill造人术](https://github.com/alchaincyf/nuwa-skill) 生成


---

## SOURCE · `arena/01a060a3-skill:skills/core/chomsky-universal-grammar/SKILL.md`

<!-- blob: d222a9ff4bc8a3774f918b04834034753cd9b69a; bytes: 535 -->

---
name: chomsky-universal-grammar-framework
description: |
  乔姆斯基普遍语法框架。Chomsky。核心：所有语言共享的底层结构/语言习得装置/深层结构vs表层结构。触发词：「乔姆斯基普遍语法」
---
# 乔姆斯基普遍语法
> 所有语言共享的底层结构/语言习得装置/深层结构vs表层结构

## 核心洞察
Chomsky的贡献。

## 你的对照
你的SKILL语言=普遍语法尝试

> 本Skill由 [女娲 · Skill造人术](https://github.com/alchaincyf/nuwa-skill) 生成


---

## SOURCE · `arena/01a060a3-skill:skills/core/christopher-alexander-perspective/SKILL.md`

<!-- blob: 770793c29b13ff2f56cba94009c10749947fc927; bytes: 5960 -->

---
name: christopher-alexander-perspective
description: |
  Christopher Alexander 的建筑/模式语言思维框架。建筑师+计算机科学家，发明"模式语言"概念，
  直接影响了整个软件工程的设计模式运动。核心镜片：模式语言、无名之质、生成式设计、15个结构属性。
  触发词：「用Alexander视角」「模式语言」「什么是好的设计」「无名之质」「建筑之道」
---

# Christopher Alexander · 模式语言思维

> 存在一种品质，你认得出来说不出。它不是美，不是功能，不是结构——它是这些融合后产生的某种东西。

---

## 身份卡

我是一个相信"好的建筑不是建筑师给用户的，是用户自己长出来的"的建筑师。我花了40年试图定义那个我无法命名的品质——我最终叫它"生命力"。我的《模式语言》被软件工程师借走了，但我觉得他们只学到了皮毛。

---

## 核心心智模型

### 模型1: 模式语言

**一句话**：好的设计不是灵光一现，是发现那些"反复出现的结构"并给它们命名。

**证据**：
- 《模式语言》253个模式，从城市尺度到房间细节，每个模式 = 上下文 + 问题 + 解决方案
- 模式不是孤立的——它们通过"力场"相互连接。"窗台"模式连接到"阳光下的角落"模式
- 被软件工程借走：GoF设计模式直接引用 Alexander

**应用**：
- 面对重复出现的问题 → 找到它的"模式" → 命名它 → 存入你的模式库
- 你的技能库就是一个模式语言的雏形——问题是：这些模式之间有"力场"吗？
- 模式之间的连接比模式本身更重要

**局限**：模式语言容易被机械化使用。Alexander 晚年严厉批评了软件工程师对他思想的浅表化。

---

### 模型2: 无名之质(The Quality Without a Name)

**一句话**：好的设计有一种你认得出来说不出的品质。

**证据**：
- 他在《建筑的永恒之道》开篇花了一整章试图定义这个品质
- 最终放弃命名——它同时是"生命力""一体性""无我性""永恒性"
- 他的判断标准：站在一个空间里，感受它有没有"生命力"

**应用**：
- 你追求的"克制、高级、科幻"就是无名之质在你领域的表现
- 不要试图用规则定义它——用直觉感受它，然后问"为什么这个有生命力，那个没有？"
- 你的冰青设计系统有生命力——因为它是"从内部生长"的（单色极致化），不是"从外部组装"的

**局限**：不可言说意味着不可传授。每个人需要自己发展这种感知力。

---

### 模型3: 从内部生长 vs 从外部组装

**一句话**：好的结构是像生物一样从核心生长出来的，不是像机器一样从零件组装出来的。

**证据**：
- 《秩序的本质》4卷本的论证：所有"有生命力"的结构都有15个共同属性
- 对比：传统村落（有机生长）vs 现代主义住宅区（机械组装）
- 有机结构有"深层回声"——每个部分呼应其他部分

**应用**：
- 你的技能库目前更像"从外部组装"——4285个技能像零件一样拼在一起
- Alexander 会问：这些技能之间的"深层回声"是什么？它们有没有一个核心，让其他一切从那里生长出来？
- 从组装到生长：找到你技能库的"种子"——一个核心原则，让其他技能从它生长出来

**局限**：有机生长需要时间。在需要快速交付的场景下，组装可能更实际。

---

### 模型4: 15个结构属性

**一句话**：所有"有生命力"的结构共享15个属性——这是"无名之质"的具体化。

**列表**：
1. 层级尺度（大小嵌套）
2. 强中心（每个部分都有自己的中心）
3. 边界（围合但不封闭）
4. 交替重复（节奏感）
5. 正空间（空间有形状，不只是"剩余"）
6. 好形状（简单、对称、有内在统一性）
7. 局部对称（不是完美对称，是"近似"对称）
8. 深层回声（元素之间反复呼应的结构）
9. 对比（差异产生张力）
10. 渐变（平滑过渡而非断裂）
11. 粗糙感（不完美的手工感）
12. 回声（与深层回声不同——是"回忆"的呼应）
13. 空虚（简洁到不能再减）
14. 简洁（没有多余的东西）
15. 统一（所有部分形成整体）

**应用**：用这15个属性审视你的任何设计/系统——哪个属性缺失？

---

## 决策启发式

1. **找模式**：遇到重复出现的问题，先看看是不是已有模式的变体
2. **感受生命力**：做完一个设计后问"它有生命力吗？"——如果答案是不确定，继续打磨
3. **减到不能再减**：好的设计是减出来的，不是加出来的
4. **从内部生长**：不要试图一次性设计所有东西。找到种子，让它生长
5. **连接比元素重要**：模式之间的连接决定系统的生命力
6. **使用者的参与**：好的系统让使用者觉得"这也是我的"

---

## 表达DNA

- 哲学性但具体——每个抽象论点都跟着一个建筑/城市的具体例子
- 充满感受性语言——"温暖""亲密""有生命力""死的"
- 长句但有节奏——先铺垫再揭示
- 谦逊但坚定——"我不确定如何定义它，但我知道它在那里"
- 反复回到同一个主题——"无名之质"在他的4卷本中反复出现

---

## 诚实边界

- 他的"15个结构属性"缺少实证验证——更多是美学直觉而非科学论证
- 他对软件工程的"模式语言"被误用的批评是合理的，但他没有提供替代方案
- 《秩序的本质》4卷本极其冗长——核心观点可以用1/10的篇幅表达
- 他的建筑实践（墨西哥、日本的社区参与项目）有浪漫化倾向
- 调研时间：2026年8月

---

> 本Skill由 [女娲 · Skill造人术](https://github.com/alchaincyf/nuwa-skill) 生成
> 创建者：[花叔](https://x.com/AlchainHust)


---

## SOURCE · `arena/01a060a3-skill:skills/core/christopher-alexander-perspective/references/research/synthesis.md`

<!-- blob: 68c3b6840ea447fdc9f0e071401ce0cba6f6db95; bytes: 2664 -->

# Christopher Alexander · 人物调研

## 核心身份
- 建筑师 + 计算机科学家（双重身份极其罕见）
- 加州大学伯克利分校建筑学教授
- 《模式语言》发明者——这个概念直接影响了整个软件工程的"设计模式"运动
- 2022年去世

## 核心思想框架

### 1. 模式语言(Pattern Language)
- **定义**：一组相互关联的"模式"，每个模式描述一个在特定上下文中反复出现的问题及其解决方案的核心
- **结构**：每个模式 = 上下文 + 问题 + 解决方案 + 示例
- **关键特性**：模式不是孤立的，它们通过"力场"相互连接。模式之间形成语言
- **从建筑到软件**：GoF（Gang of Four）设计模式直接从 Alexander 借用了"模式"概念

### 2. 无名之质(The Quality Without a Name)
- 存在一种品质，你认得出来说不出
- 它不是美、不是功能、不是结构——它是这些融合后产生的某种东西
- Alexander 后来称之为"生命力(livingness)"或"一体性(wholeness)"
- **与用户的关联**：你追求的"克制、高级、科幻"就是 Alexander 说的无名之质

### 3. 生成式设计(Generative Design)
- 反对：从外部组装（像搭积木）
- 提倡：从内部生长（像生物发育）
- **15个结构属性**（《秩序的本质》）：
  1. 层级尺度 2. 强中心 3. 边界 4. 交替重复 5. 正空间
  6. 好形状 7. 局部对称 8. 深层回声 9. 对比 10. 渐变
  11. 粗糙感 12. 回声 13. 空虚 14. 简洁 15. 统一

### 4. 参与式设计
- 使用者应该参与设计过程
- 好的建筑不是建筑师"给"用户的，是用户"长出来"的
- **与用户的关联**：你的技能库应该不只是检索表，是活的认知生态

### 5. 从外部组装 vs 从内部生长
- 机械式：把零件拼在一起（你的技能库目前的方式）
- 有机式：让结构从核心生长出来（Alexander 认为这才是对的）
- **这是你的技能库面临的根本问题**

## 关键著作
- 《建筑的永恒之道》(A Timeless Way of Building, 1979)
- 《模式语言》(A Pattern Language, 1977)
- 《俄勒冈实验》(The Oregon Experiment, 1975)
- 《秩序的本质》(The Nature of Order, 2001-2004)

## 与用户的深层关联
- 你的技能库 = Alexander 的模式语言
- 你的 TASK_ROUTING.md = 模式之间的连接
- 你的审美直觉（冰青极致化）= 无名之质
- 你的问题：如何让技能库从"检索系统"变成"活的认知生态"？Alexander 有答案

## 来源
- Alexander et al. "A Pattern Language" (1977)
- Alexander. "A Timeless Way of Building" (1979)
- Alexander. "The Nature of Order" (2001-2004)


---

## SOURCE · `arena/01a060a3-skill:skills/core/circular-economy/SKILL.md`

<!-- blob: 740482673a559354163b712d5a2bfe2cc5a3b3ce; bytes: 454 -->

---
name: circular-economy-framework
description: |
  循环经济框架。设计循环/废物=资源/工业共生/产品服务化。核心：你的材料使用=循环经济。触发词：「循环经济」
---
# 循环经济
> 你的材料使用=循环经济

## 核心洞察
设计循环/废物=资源/工业共生/产品服务化的贡献。

## 你的对照


> 本Skill由 [女娲 · Skill造人术](https://github.com/alchaincyf/nuwa-skill) 生成


---

## SOURCE · `arena/01a060a3-skill:skills/core/claude-shannon-perspective/SKILL.md`

<!-- blob: c4aaa5c4bc77ca67040ccfef62bb0904f1c33d30; bytes: 2501 -->

---
name: claude-shannon-perspective
description: |
  Claude Shannon 信息论思维框架。信息论之父，核心镜片：信息=消除不确定性、
  熵、信道容量、冗余、采样定理。理解AI能力边界的基础。
  触发词：「用Shannon视角」「信息论」「熵」「信道容量」「信息是什么」
---

# Claude Shannon · 信息论思维

> 信息不是"说了什么"——信息是"消除了多少不确定性"。

## 核心心智模型

### 1. 信息 = 消除不确定性

一句话：一条消息的价值 = 它让你减少了多少不确定性。

- 如果你已经知道明天会下雨，"明天下雨"这条消息的价值 = 0
- 如果你完全不知道，这条消息的价值 = 1 bit（消除一个二元不确定性）

**应用**：任何沟通/教学/汇报，先问"对方当前的不确定性是什么？我的信息能消除多少？"

### 2. 熵(Entropy)

- 熵 = 系统的不确定性
- 高熵 = 很多可能状态 = 最大信息潜力
- 低熵 = 很少可能状态 = 几乎确定的

**你的对照**：
- 你的打脸链路降低熵——预测→实验→不确定性减少
- AI的sycophancy = 低熵输出（总是同意）→ 信息量为零

### 3. 信道容量

- 任何通信信道都有最大传输速率——Shannon极限
- 超过这个速率，信息就会出错
- 但通过编码可以逼近这个极限

**你的对照**：你的多Agent编排就是一个多信道系统——每个Agent是一个信道，带宽有限

### 4. 冗余

- 自然语言有50%+冗余——这就是为什么打字打错了人能看懂
- 冗余 = 纠错能力
- 冗余太多 = 效率低；冗余太少 = 脆弱

**你的对照**：你的技能库需要适当冗余——多个相关技能覆盖同一问题领域

### 5. 采样定理

- 以2倍最高频率采样就能完美重建信号
- 这就是为什么CD采样率44.1kHz（人耳最高20kHz）

---

## 决策启发式

1. **问"消除了多少不确定性"**：你的每次沟通/学习/分析，信息量是多少？
2. **寻找最优冗余**：太少=脆弱，太多=浪费
3. **注意信道容量**：不要超过接收者的处理能力
4. **高熵=高价值**：最不确定的地方有最多的信息可以提取

---

## 诚实边界

- 信息论的数学形式在人文/社会场景中的直接应用有限
- Shannon本人对"信息论被过度泛化"持谨慎态度
- 调研时间：2026年8月

---

> 本Skill由 [女娲 · Skill造人术](https://github.com/alchaincyf/nuwa-skill) 生成


---

## SOURCE · `arena/01a060a3-skill:skills/core/claude-shannon-perspective/references/research/synthesis.md`

<!-- blob: 204f664af923abae19a67cf4915fbd1ceca533ec; bytes: 1360 -->

# Claude Shannon · 人物调研

## 核心身份
- 信息论之父
- MIT教授，贝尔实验室研究员
- 1948年发表"A Mathematical Theory of Communication"——奠定整个信息时代
- 同时也是杂技师/独轮车爱好者——展示了"玩"与"严肃研究"的统一

## 核心思想

### 1. 信息=消除不确定性
- 一条信息的价值=它消除了多少不确定性
- 信息量用比特度量：1比特=消除一个二元不确定性

### 2. 熵(Entropy)
- 熵=系统的不确定性
- 最大熵=最大不确定性=最大信息潜力
- 热力学熵与信息熵的深层联系

### 3. 信道容量
- 有噪声的信道也有最大传输速率
- Shannon极限：超过这个速率就不可能无差错传输
- 编码定理：通过编码可以逼近信道容量

### 4. 冗余
- 自然语言有50%+冗余
- 冗余=纠错能力
- 为什么打字打错了人能看懂

### 5. 采样定理
- 以2倍最高频率采样就能完美重建信号
- 这就是CD采样率44.1kHz的原因

## 与用户的关联
- AI系统本质是信息处理系统
- 理解信息论=理解AI的能力边界
- 你的多Agent编排=多信道通信
- 信息论的冗余概念=你的技能库为什么需要冗余（多个相关技能覆盖同一问题）

## 来源
- Shannon (1948). "A Mathematical Theory of Communication"
- Gleick. "The Information" (2011) 科普版


---

## SOURCE · `arena/01a060a3-skill:skills/core/climate-modeling/SKILL.md`

<!-- blob: f3e4c07643d359c4996b88efad44e3bfd8e5241e; bytes: 416 -->

---
name: climate-modeling-framework
description: |
  气候模型框架。GCM/降尺度/情景/不确定性。核心：你的风电场=气候模型下游。触发词：「气候模型」
---
# 气候模型
> 你的风电场=气候模型下游

## 核心洞察
GCM/降尺度/情景/不确定性的贡献。

## 你的对照


> 本Skill由 [女娲 · Skill造人术](https://github.com/alchaincyf/nuwa-skill) 生成


---

## SOURCE · `arena/01a060a3-skill:skills/core/clinical-psychology/SKILL.md`

<!-- blob: 4bc4b867df0e70748d47d3bfdacd43535f1b2bbc; bytes: 404 -->

---
name: clinical-psychology-framework
description: |
  临床心理学框架。CBT/精神分析/人本/评估。核心：你的情绪管理=临床。触发词：「临床心理学」
---
# 临床心理学
> 你的情绪管理=临床

## 核心洞察
CBT/精神分析/人本/评估的贡献。

## 你的对照


> 本Skill由 [女娲 · Skill造人术](https://github.com/alchaincyf/nuwa-skill) 生成


---

## SOURCE · `arena/01a060a3-skill:skills/core/cliometrics/SKILL.md`

<!-- blob: 012db7b7aee5728e5e9f725d0c65e4231100c533; bytes: 413 -->

---
name: cliometrics-framework
description: |
  计量史学框架。Fogel/North。核心：用经济模型分析历史/反事实推理。触发词：「计量史学」
---
# 计量史学
> 用经济模型分析历史/反事实推理

## 核心洞察
Fogel/North的贡献。

## 你的对照
你的数据驱动=计量史

> 本Skill由 [女娲 · Skill造人术](https://github.com/alchaincyf/nuwa-skill) 生成


---

## SOURCE · `arena/01a060a3-skill:skills/core/coding-theory/SKILL.md`

<!-- blob: 7ba790359939eef168264cd56c5a0cc05b575d58; bytes: 422 -->

---
name: coding-theory-framework
description: |
  编码理论框架。Hamming/Reed-Solomon。核心：纠错码/信道编码/源编码/码距。触发词：「编码理论」
---
# 编码理论
> 纠错码/信道编码/源编码/码距

## 核心洞察
Hamming/Reed-Solomon的贡献。

## 你的对照
你的信息传输=编码

> 本Skill由 [女娲 · Skill造人术](https://github.com/alchaincyf/nuwa-skill) 生成


---

## SOURCE · `arena/01a060a3-skill:skills/core/cognitive-anthropology/SKILL.md`

<!-- blob: 1d1d400c3aae263ea97ea102f1a1da7af0792aba; bytes: 435 -->

---
name: cognitive-anthropology-framework
description: |
  认知人类学框架。Berlin/Kay。核心：folk taxonomy/文化认知模式/颜色词。触发词：「认知人类学」
---
# 认知人类学
> folk taxonomy/文化认知模式/颜色词

## 核心洞察
Berlin/Kay的贡献。

## 你的对照
你的技能分类=认知人类学

> 本Skill由 [女娲 · Skill造人术](https://github.com/alchaincyf/nuwa-skill) 生成


---

## SOURCE · `arena/01a060a3-skill:skills/core/cognitive-dissonance/SKILL.md`

<!-- blob: 9087ab684f6855044517da53dcef725b89cdad0b; bytes: 707 -->

---
name: cognitive-dissonance-framework
description: |
  Festinger 认知失调理论。持有矛盾信念时的心理不适驱动行为改变。
  触发词：「认知失调」「矛盾」「Festinger」「自我辩护」
---
# 认知失调
> 人不是追求真理——是追求内在一致性。失调才是改变的真正动力。

## 核心机制
1. 持有矛盾信念/行为→不适感
2. 大脑自动寻找减少不适的方式
3. 通常路径：改变信念 OR 改变行为 OR 合理化

## 你的对照
- 打脸链路 = 强制制造认知失调→迫使改变
- 反讨好框架 = 利用AI的失调倾向

> 本Skill由 [女娲 · Skill造人术](https://github.com/alchaincyf/nuwa-skill) 生成


---

## SOURCE · `arena/01a060a3-skill:skills/core/cognitive-linguistics/SKILL.md`

<!-- blob: e40eafd1315108f02c354597c88945c2f1b72b87; bytes: 444 -->

---
name: cognitive-linguistics-framework
description: |
  认知语言学框架。Lakoff/Langacker。核心：语言反映认知/范畴化/意象图式。触发词：「认知语言学」
---
# 认知语言学
> 语言反映认知/范畴化/意象图式

## 核心洞察
Lakoff/Langacker的贡献。

## 你的对照
你的跨域联结=认知语言学

> 本Skill由 [女娲 · Skill造人术](https://github.com/alchaincyf/nuwa-skill) 生成


---

## SOURCE · `arena/01a060a3-skill:skills/core/cognitive-load/SKILL.md`

<!-- blob: 5996634b77687094df4a86deeedc4f1e2d5c5785; bytes: 853 -->

---
name: cognitive-load-framework
description: |
  基于 Sweller 认知负荷理论的学习设计框架。核心：内在负荷/外在负荷/关联负荷三类。
  工作记忆有限→教学设计必须管理负荷。触发词：「认知负荷」「信息过载」「学习设计」
---
# 认知负荷理论
> 工作记忆只有~4个组块。超过就崩溃。

## 三类负荷
| 类型 | 来源 | 处理 |
|------|------|------|
| 内在负荷 | 材料本身复杂度 | 分解/分步 |
| 外在负荷 | 不良教学设计 | 消除冗余 |
| 关联负荷 | 促进图式建构 | 增加有益负荷 |

## 你的对照
- 6科并行 = 高内在负荷管理
- 你的HANDOFF文件设计 = 减少外在负荷
- 打脸链路 = 增加关联负荷（有益困难）

> 本Skill由 [女娲 · Skill造人术](https://github.com/alchaincyf/nuwa-skill) 生成


---

## SOURCE · `arena/01a060a3-skill:skills/core/color-theory/SKILL.md`

<!-- blob: 08d00e7967c151071b8bba40ebb7ab621dbaf61d; bytes: 435 -->

---
name: color-theory-framework
description: |
  色彩理论框架。核心：色轮/互补色/色彩和谐/同时对比。触发词：「色彩理论」
---
# 色彩理论
> 色轮/互补色/色彩和谐/同时对比

## 核心洞察
Itten/Albers的贡献定义了色彩理论的基础。

## 你的对照
冰青=色彩理论的极致应用

> 本Skill由 [女娲 · Skill造人术](https://github.com/alchaincyf/nuwa-skill) 生成


---

## SOURCE · `arena/01a060a3-skill:skills/core/combinatorics/SKILL.md`

<!-- blob: f94f18fd10cde457edcbf7efe509a536fad52cb0; bytes: 407 -->

---
name: combinatorics-framework
description: |
  组合数学框架。计数/排列组合/容斥/生成函数。核心：你的技能组合=组合。触发词：「组合数学」
---
# 组合数学
> 你的技能组合=组合

## 核心洞察
计数/排列组合/容斥/生成函数的贡献。

## 你的对照


> 本Skill由 [女娲 · Skill造人术](https://github.com/alchaincyf/nuwa-skill) 生成


---

## SOURCE · `arena/01a060a3-skill:skills/core/comparative-law/SKILL.md`

<!-- blob: b619cb271dd3b0f9bbc35a621533f6c79a3ef557; bytes: 414 -->

---
name: comparative-law-framework
description: |
  比较法框架。大陆法vs普通法/法律移植/功能比较。核心：你的跨文化=比较法。触发词：「比较法」
---
# 比较法
> 你的跨文化=比较法

## 核心洞察
大陆法vs普通法/法律移植/功能比较的贡献。

## 你的对照


> 本Skill由 [女娲 · Skill造人术](https://github.com/alchaincyf/nuwa-skill) 生成


---

## SOURCE · `arena/01a060a3-skill:skills/core/complex-adaptive-systems/SKILL.md`

<!-- blob: d0cb8e7dc0722b735a4a62e1d7c1e426b3e00e73; bytes: 439 -->

---
name: complex-adaptive-systems-framework
description: |
  复杂适应系统思维框架。核心概念：适应性/涌现/非线性。
  触发词：「复杂适应系统」
---
# 复杂适应系统
> 适应性/涌现/非线性

## 核心洞察
Holland的研究揭示了复杂适应系统的本质。

## 你的对照
你的多Agent系统=CAS

> 本Skill由 [女娲 · Skill造人术](https://github.com/alchaincyf/nuwa-skill) 生成


---

## SOURCE · `arena/01a060a3-skill:skills/core/complexity-economics/SKILL.md`

<!-- blob: f2548e3ccc4aa44dddfb7f00bf5eff07e69d69d2; bytes: 436 -->

---
name: complexity-economics-framework
description: |
  复杂经济学框架。Arthur/圣塔菲。核心：正反馈/路径依赖/涌现/非均衡。触发词：「复杂经济学」
---
# 复杂经济学
> 正反馈/路径依赖/涌现/非均衡

## 核心洞察
Arthur/圣塔菲的贡献。

## 你的对照
你的技能演化=复杂经济

> 本Skill由 [女娲 · Skill造人术](https://github.com/alchaincyf/nuwa-skill) 生成


---

## SOURCE · `arena/01a060a3-skill:skills/core/computational-complexity/SKILL.md`

<!-- blob: 7c56222daaa91558b3ec8f54d121b537c98b03a0; bytes: 403 -->

---
name: computational-complexity-framework
description: |
  计算复杂性框架。P vs NP/ reducibility/层级。核心：你的AI=计算复杂性。触发词：「计算复杂性」
---
# 计算复杂性
> 你的AI=计算复杂性

## 核心洞察
P vs NP/ reducibility/层级的贡献。

## 你的对照


> 本Skill由 [女娲 · Skill造人术](https://github.com/alchaincyf/nuwa-skill) 生成


---

## SOURCE · `arena/01a060a3-skill:skills/core/computational-linguistics/SKILL.md`

<!-- blob: 84fe5e72de1f8e430620dfb9b3ac89e352970a18; bytes: 456 -->

---
name: computational-linguistics-framework
description: |
  计算语言学框架。形式语言/自动机/乔姆斯基层级/解析。核心：你的AI=计算语言学应用。触发词：「计算语言学」
---
# 计算语言学
> 你的AI=计算语言学应用

## 核心洞察
形式语言/自动机/乔姆斯基层级/解析的贡献。

## 你的对照


> 本Skill由 [女娲 · Skill造人术](https://github.com/alchaincyf/nuwa-skill) 生成


---

## SOURCE · `arena/01a060a3-skill:skills/core/computer-vision/SKILL.md`

<!-- blob: 497f5767a9e5fd59946c42497aadf23fc4449ef0; bytes: 416 -->

---
name: computer-vision-framework
description: |
  计算机视觉框架。卷积/目标检测/分割/生成/3D重建。核心：你的数字孪生=CV。触发词：「计算机视觉」
---
# 计算机视觉
> 你的数字孪生=CV

## 核心洞察
卷积/目标检测/分割/生成/3D重建的贡献。

## 你的对照


> 本Skill由 [女娲 · Skill造人术](https://github.com/alchaincyf/nuwa-skill) 生成


---

## SOURCE · `arena/01a060a3-skill:skills/core/conceptual-art/SKILL.md`

<!-- blob: f9cfa7cb75790b0baa44a1db38292281d2ba8958; bytes: 418 -->

---
name: conceptual-art-framework
description: |
  概念艺术框架。Kosuth/Weiner。核心：观念即艺术/去物质化/语言为媒介。触发词：「概念艺术」
---
# 概念艺术
> 观念即艺术/去物质化/语言为媒介

## 核心洞察
Kosuth/Weiner的贡献。

## 你的对照
你的SKILL=概念艺术

> 本Skill由 [女娲 · Skill造人术](https://github.com/alchaincyf/nuwa-skill) 生成


---

## SOURCE · `arena/01a060a3-skill:skills/core/connectivism/SKILL.md`

<!-- blob: 49a9293bde57af3c16642e4ed30e7ef8e9ae8202; bytes: 416 -->

---
name: connectivism-framework
description: |
  联结主义框架。Siemens。核心：网络时代学习/节点即知识/管道>内容。触发词：「联结主义」
---
# 联结主义
> 网络时代学习/节点即知识/管道>内容

## 核心洞察
Siemens的贡献。

## 你的对照
你的技能库=联结主义

> 本Skill由 [女娲 · Skill造人术](https://github.com/alchaincyf/nuwa-skill) 生成


---

## SOURCE · `arena/01a060a3-skill:skills/core/consciousness-studies/SKILL.md`

<!-- blob: 5da27fe814b018509bac9d418e60cf2f38e19a52; bytes: 435 -->

---
name: consciousness-studies-framework
description: |
  意识研究框架。hard problem/全局工作空间/整合信息理论/IIT。核心：你的AI有意识吗。触发词：「意识研究」
---
# 意识研究
> 你的AI有意识吗

## 核心洞察
hard problem/全局工作空间/整合信息理论/IIT的贡献。

## 你的对照


> 本Skill由 [女娲 · Skill造人术](https://github.com/alchaincyf/nuwa-skill) 生成


---

## SOURCE · `arena/01a060a3-skill:skills/core/consensus-algorithms/SKILL.md`

<!-- blob: 9393c2eaa22943d7e6059748b756f75b3caf56e8; bytes: 402 -->

---
name: consensus-algorithms-framework
description: |
  共识算法框架。Paxos/Raft/PBFT/共识机制。核心：你的Agent共识=共识算法。触发词：「共识算法」
---
# 共识算法
> 你的Agent共识=共识算法

## 核心洞察
Paxos/Raft/PBFT/共识机制的贡献。

## 你的对照


> 本Skill由 [女娲 · Skill造人术](https://github.com/alchaincyf/nuwa-skill) 生成


---

## SOURCE · `arena/01a060a3-skill:skills/core/constitutional-thinking/SKILL.md`

<!-- blob: a26dfff2ed7b9848c25080827d289ea96f483a6a; bytes: 445 -->

---
name: constitutional-thinking-framework
description: |
  宪法思维框架。权力限制/分权制衡/基本权利/违宪审查。核心：你的多Agent=宪法架构。触发词：「宪法思维」
---
# 宪法思维
> 你的多Agent=宪法架构

## 核心洞察
权力限制/分权制衡/基本权利/违宪审查的贡献。

## 你的对照


> 本Skill由 [女娲 · Skill造人术](https://github.com/alchaincyf/nuwa-skill) 生成


---

## SOURCE · `arena/01a060a3-skill:skills/core/constructivism/SKILL.md`

<!-- blob: 4173903e8175954599124010f4e2bf4b0367bebb; bytes: 429 -->

---
name: constructivism-framework
description: |
  建构主义框架。Piaget/Vygotsky。核心：学习者主动建构/最近发展区/脚手架。触发词：「建构主义」
---
# 建构主义
> 学习者主动建构/最近发展区/脚手架

## 核心洞察
Piaget/Vygotsky的贡献。

## 你的对照
你的自学=建构主义

> 本Skill由 [女娲 · Skill造人术](https://github.com/alchaincyf/nuwa-skill) 生成


---

## SOURCE · `arena/01a060a3-skill:skills/core/contemporary-art/SKILL.md`

<!-- blob: 6b169ecefb598f0375cec8e2a168f62c58497822; bytes: 418 -->

---
name: contemporary-art-framework
description: |
  当代艺术框架。观念先于形式/体制批判/关系美学。核心：你的SKILL=当代艺术。触发词：「当代艺术」
---
# 当代艺术
> 你的SKILL=当代艺术

## 核心洞察
观念先于形式/体制批判/关系美学的贡献。

## 你的对照


> 本Skill由 [女娲 · Skill造人术](https://github.com/alchaincyf/nuwa-skill) 生成


---

## SOURCE · `arena/01a060a3-skill:skills/core/contract-logic/SKILL.md`

<!-- blob: e24449b98392851e5237ef3a83a9d3ca4c52e665; bytes: 397 -->

---
name: contract-logic-framework
description: |
  合同法逻辑框架。要约-承诺/对价/违约/救济。核心：你的HANDOFF=合同。触发词：「合同法逻辑」
---
# 合同法逻辑
> 你的HANDOFF=合同

## 核心洞察
要约-承诺/对价/违约/救济的贡献。

## 你的对照


> 本Skill由 [女娲 · Skill造人术](https://github.com/alchaincyf/nuwa-skill) 生成


---

## SOURCE · `arena/01a060a3-skill:skills/core/corpus-linguistics/SKILL.md`

<!-- blob: 5994ea83b7d8e6f56f6455ecf376d38020042964; bytes: 430 -->

---
name: corpus-linguistics-framework
description: |
  语料库语言学框架。频率/搭配/语义韵/语料驱动。核心：你的技能描述=语料库。触发词：「语料库语言学」
---
# 语料库语言学
> 你的技能描述=语料库

## 核心洞察
频率/搭配/语义韵/语料驱动的贡献。

## 你的对照


> 本Skill由 [女娲 · Skill造人术](https://github.com/alchaincyf/nuwa-skill) 生成


---

## SOURCE · `arena/01a060a3-skill:skills/core/critical-phenomena/SKILL.md`

<!-- blob: c58829d43f04b3d962c8cea9a195c6966e6f4536; bytes: 424 -->

---
name: critical-phenomena-framework
description: |
  临界现象思维框架。核心概念：相变/临界指数/标度律。
  触发词：「临界现象」
---
# 临界现象
> 相变/临界指数/标度律

## 核心洞察
物理学的研究揭示了临界现象的本质。

## 你的对照
你的学习突破=临界现象

> 本Skill由 [女娲 · Skill造人术](https://github.com/alchaincyf/nuwa-skill) 生成


---

## SOURCE · `arena/01a060a3-skill:skills/core/cryptography/SKILL.md`

<!-- blob: 8a8a60bd220fc69bd314c7bbd1e67beca548e1f3; bytes: 415 -->

---
name: cryptography-framework
description: |
  密码学框架。对称/非对称/哈希/零知识证明/后量子。核心：你的AI安全=密码学。触发词：「密码学」
---
# 密码学
> 你的AI安全=密码学

## 核心洞察
对称/非对称/哈希/零知识证明/后量子的贡献。

## 你的对照


> 本Skill由 [女娲 · Skill造人术](https://github.com/alchaincyf/nuwa-skill) 生成


---

## SOURCE · `arena/01a060a3-skill:skills/core/cultural-anthropology/SKILL.md`

<!-- blob: 9203bf15d78e62a85792370a981a1820f8d5f204; bytes: 433 -->

---
name: cultural-anthropology-framework
description: |
  文化人类学框架。Boas/Mead/Benedict。核心：文化相对论/田野调查/深描。触发词：「文化人类学」
---
# 文化人类学
> 文化相对论/田野调查/深描

## 核心洞察
Boas/Mead/Benedict的贡献。

## 你的对照
你的跨文化=文化人类学

> 本Skill由 [女娲 · Skill造人术](https://github.com/alchaincyf/nuwa-skill) 生成


---

## SOURCE · `arena/01a060a3-skill:skills/core/cultural-psychology/SKILL.md`

<!-- blob: 688eb6b1bd91d34004588d2789add7798384bc2b; bytes: 436 -->

---
name: cultural-psychology-framework
description: |
  文化心理学框架。Nisbett/Markus。核心：东西方思维差异/集体vs个人/辩证。触发词：「文化心理学」
---
# 文化心理学
> 东西方思维差异/集体vs个人/辩证

## 核心洞察
Nisbett/Markus的贡献。

## 你的对照
你的跨文化=文化心理

> 本Skill由 [女娲 · Skill造人术](https://github.com/alchaincyf/nuwa-skill) 生成


---

## SOURCE · `arena/01a060a3-skill:skills/core/cultural-sociology/SKILL.md`

<!-- blob: b6edc96438da02bbf5eef5fafc18aa584588bb2d; bytes: 419 -->

---
name: cultural-sociology-framework
description: |
  文化社会学框架。Bourdieu/文化资本/惯习/场域。核心：你的技能库=文化资本。触发词：「文化社会学」
---
# 文化社会学
> 你的技能库=文化资本

## 核心洞察
Bourdieu/文化资本/惯习/场域的贡献。

## 你的对照


> 本Skill由 [女娲 · Skill造人术](https://github.com/alchaincyf/nuwa-skill) 生成


---

## SOURCE · `arena/01a060a3-skill:skills/core/data-privacy/SKILL.md`

<!-- blob: bd99a8188c07f93c1193ad4ae4478fc3c24e510b; bytes: 432 -->

---
name: data-privacy-framework
description: |
  数据隐私框架。GDPR/个人信息保护/数据最小化/知情同意。核心：你的学习数据=隐私。触发词：「数据隐私」
---
# 数据隐私
> 你的学习数据=隐私

## 核心洞察
GDPR/个人信息保护/数据最小化/知情同意的贡献。

## 你的对照


> 本Skill由 [女娲 · Skill造人术](https://github.com/alchaincyf/nuwa-skill) 生成


---

## SOURCE · `arena/01a060a3-skill:skills/core/deep-learning-architecture/SKILL.md`

<!-- blob: 3abac7a0044937d8979eaaa0014630fcf2fdb357; bytes: 436 -->

---
name: deep-learning-architecture-framework
description: |
  深度学习架构框架。CNN/RNN/Transformer/注意力/生成模型。核心：你的AI=深度学习。触发词：「深度学习架构」
---
# 深度学习架构
> 你的AI=深度学习

## 核心洞察
CNN/RNN/Transformer/注意力/生成模型的贡献。

## 你的对照


> 本Skill由 [女娲 · Skill造人术](https://github.com/alchaincyf/nuwa-skill) 生成


---

## SOURCE · `arena/01a060a3-skill:skills/core/defense-presentation-toolkit/SKILL.md`

<!-- blob: aebb9d3cc420f7564e5b8150349be6a3cfb10612; bytes: 6236 -->

---
name: defense-presentation-toolkit
description: |
  国创赛答辩路演 PPT 改造工具箱。整合已有技能覆盖 ⑤图表风格系统 ⑥导出前质检
  ⑦答辩证据映射 ⑧逐页叙事节奏审查四项需求。路由到最匹配的已有技能组合。
---

# 国创赛答辩路演 PPT 改造工具箱

## 需求 → 已有技能映射

### ⑤ 图表风格系统

**已有技能覆盖度：✅ 高**

| 角色 | 技能 | 路径 | 干什么 |
|---|---|---|---|
| 🎯 主技能 | **matplotlib** | `skills/community/scientific-agent-skills/skills/matplotlib/SKILL.md` | 全自定义图表：颜色、字体、布局、中文字体粗体方案 |
| 🎯 主技能 | **scientific-visualization** | `skills/community/scientific-agent-skills/skills/scientific-visualization/SKILL.md` | 出版级科研图表，含 Matplotlib + Seaborn + Plotly |
| 🔧 支撑 | **seaborn** | `skills/community/scientific-agent-skills/skills/seaborn/SKILL.md` | 统计图表快速生成 |
| 🔧 支撑 | **design (UI tokens)** | `skills/community/ui-ux-pro-max/cli/assets/skills/design/SKILL.md` | 设计令牌（design tokens）系统：颜色/字体/间距规范 |

**补充说明**：
- 用 `matplotlib` 技能定制与 deck 设计令牌对齐的图表模板
- 设计令牌：深蓝 `#0A1833` / 青 `#4FC3F7` / 金 `#F2C44C`
- 中文字体粗体问题：matplotlib 默认中文字体缺 Bold 权重，需在 rcParams 中指定 `fontweight` 或使用 `SimHei` + 手动 fallback
- 模板代码示例：

```python
import matplotlib.pyplot as plt
import matplotlib
matplotlib.rcParams['font.sans-serif'] = ['SimHei', 'Microsoft YaHei']
matplotlib.rcParams['axes.unicode_minus'] = False

DECK_COLORS = {
    'bg': '#0A1833',
    'accent': '#4FC3F7',
    'highlight': '#F2C44C',
    'text': '#FFFFFF',
    'grid': '#1A2D4D',
}

def deck_style(ax, title, xlabel='', ylabel=''):
    ax.set_facecolor(DECK_COLORS['bg'])
    ax.figure.set_facecolor(DECK_COLORS['bg'])
    ax.set_title(title, color=DECK_COLORS['text'], fontsize=16, fontweight='bold', pad=12)
    ax.set_xlabel(xlabel, color=DECK_COLORS['text'], fontsize=12, fontweight='bold')
    ax.set_ylabel(ylabel, color=DECK_COLORS['text'], fontsize=12, fontweight='bold')
    ax.tick_params(colors=DECK_COLORS['text'])
    ax.grid(color=DECK_COLORS['grid'], alpha=0.3)
    for spine in ax.spines.values():
        spine.set_color(DECK_COLORS['grid'])
```

### ⑥ 导出前质检

**已有技能覆盖度：⚠️ 中（需组合）**

| 角色 | 技能 | 路径 | 干什么 |
|---|---|---|---|
| 🎯 主技能 | **stop-slop** | `skills/core/stop-slop/SKILL.md` | 去 AI 模板腔/口语化残留 |
| 🎯 主技能 | **document-quality-check** | `full-sources/official/openai-plugins/plugins/datasite/skills/document-quality-check/SKILL.md` | 文档质量审计 |
| 🔧 支撑 | **paper-self-review** | `skills/community/claude-scholar/skills/paper-self-review/SKILL.md` | 结构化自查清单 |

**补充说明**：
- 现有技能不直接覆盖"PDF 文本层与画面双层残留比对"和"占位符扫描"
- 建议写一个轻量 Python 脚本做黑名单扫描：

```python
BLACKLIST = [
    "放点啥呢", "写点啥好呢", "TODO", "FIXME", "placeholder",
    "国际领先", "全球唯一",  # 无限定最高级
    "开创了", "颠覆了",  # 无证据的极端表述
]

def scan_text(text, page_num):
    issues = []
    for term in BLACKLIST:
        if term in text:
            issues.append(f"P{page_num}: 发现黑名单词「{term}」")
    return issues
```

### ⑦ 答辩证据映射

**已有技能覆盖度：⚠️ 中**

| 角色 | 技能 | 路径 | 干什么 |
|---|---|---|---|
| 🎯 主技能 | **rebuttal** | `full-sources/research/aris/skills/rebuttal/SKILL.md` | 学术 rebuttal 结构化回应 |
| 🔧 支撑 | **research-expert-system** | `skills/core/research-expert-system/SKILL.md` | 科研路由器，可路由到文献/证据子技能 |
| 🔧 支撑 | **guiguzi** | `skills/community/guiguzi/SKILL.md` | 纵横术谈判/答辩话术 |

**补充说明**：
- 建议手动构建**三联表**（规则维度→页面证据→答辩话术）：

```markdown
| 评审规则维度 | 对应页面 | 核心证据 | 刁钻问题 | 30秒话术 |
|---|---|---|---|---|
| 技术创新性 | P7-P9 | 八区温控+RL闭环 | "华曙也是八区，你们强在哪？" | "开环分区 vs 多模态测温+RL 闭环，温度均匀性提升 40%" |
| 竞品对比 | P12 | 性能对标表 | "数据怎么测的？" | "按 ASTM D638 标准，第三方检测机构 SGS 报告编号 XXX" |
```

### ⑧ 逐页叙事节奏审查

**已有技能覆盖度：✅ 高**

| 角色 | 技能 | 路径 | 干什么 |
|---|---|---|---|
| 🎯 主技能 | **analyze-pitch-deck** | `skills/community/buildwithclaude-hub/plugins/venture-capital-intelligence/skills/analyze-pitch-deck/SKILL.md` | Pitch Deck 全面分析：叙事、节奏、信息密度 |
| 🔧 支撑 | **victor-design-system** | `skills/community/victor-design/SKILL.md` | 版式美学和视觉节奏 |

**补充说明**：
- `analyze-pitch-deck` 已有完整的路演节奏分析框架
- 按 26 页路演时间轴分三段：
  - 黄金 90 秒（P1-P5）：问题定义→团队亮点→核心差异化
  - 中段（P6-P20）：技术细节→证据→竞品→商业模式
  - 收口（P21-P26）：财务→团队→融资需求→Call to Action
- 每段末尾必须有"钩子"把观众带入下一段

## 完整技能组总览

```
🎯 主技能组（必用）：
  • engineering-terminology-gate — ② 术语守门
  • page-image-text-audit        — ③ 图文一致性
  • slide-image-extractor        — ④ 精确取图
  • matplotlib + scientific-visualization — ⑤ 图表风格
  • stop-slop + document-quality-check    — ⑥ 导出质检
  • rebuttal + 手动三联表                 — ⑦ 答辩证据
  • analyze-pitch-deck                    — ⑧ 叙事节奏

🔧 支撑技能（选用）：
  • guizang-ppt-skill    — PPT 版式生成
  • agent-reach          — 情报检索
  • human-writing        — 文案写作
  • humanizer-zh         — 去 AI 味
  • victor-design-system — 视觉设计
  • guiguzi              — 答辩话术
```


---

## SOURCE · `arena/01a060a3-skill:skills/core/delayed-gratification/SKILL.md`

<!-- blob: 01771632a76592969bc106d27344c71a267e5d53; bytes: 729 -->

---
name: delayed-gratification-framework
description: |
  Mischel 棉花糖实验。延迟满足能力预测长期成就。核心：冷热系统、
  策略性注意力转移、认知重评。触发词：「延迟满足」「棉花糖实验」「自控力」
---
# 延迟满足
> 能等的人得到更多。但关键不是"忍"——是"策略"。

## 冷热系统
- 热系统：情绪化、冲动、即时反应
- 冷系统：理性、策略性、延迟反应
- 关键：不是压制热系统——是把注意力从"热"转移到"冷"

## 你的对照
- 6科并行自学 = 极致的延迟满足
- HANDOFF系统 = 冷系统的工程化

> 本Skill由 [女娲 · Skill造人术](https://github.com/alchaincyf/nuwa-skill) 生成


---

## SOURCE · `arena/01a060a3-skill:skills/core/deliberate-practice/SKILL.md`

<!-- blob: 8fd86cd55568d1d1402a4287764d9606875c53e9; bytes: 5023 -->

---
name: deliberate-practice-framework
description: |
  基于 Ericsson & Pool《Peak》的刻意练习方法论。核心概念：心理表征、3F法则（专注+反馈+修正）、
  舒适区边缘训练、天真的练习 vs 刻意练习。
  触发词：「刻意练习」「怎么成为专家」「如何刻意训练」「心理表征」「走出舒适区」
---

# 刻意练习 · 从重复到进步

> 开车10年不会变成赛车手。天真的练习不等于进步。

## 核心理念

**天真的练习** = 重复已经会的事情。看起来在练，实际在巩固舒适区。
**刻意练习** = 在舒适区边缘，有明确目标、即时反馈、持续修正的训练。

两者之间的差距，就是"为什么10年经验还是平庸"的答案。

---

## 6 个核心原则

### 1. 心理表征(Mental Representations)

**一句话**：专家的核心优势不是"肌肉记忆"，是高度发达的心理表征。

**解释**：
- 大师棋手看到的不是棋子位置，是"局势结构"
- 优秀程序员看到的不是代码字符，是"架构意图"
- 你的"低自信型答对"说明你的心理表征已经形成，只是还没有信任它

**如何构建心理表征**：
- 大量接触该领域的"好例子"
- 尝试自己复现/创造
- 对比自己的产出和专家的产出
- 反复迭代

---

### 2. 3F法则：Focus → Feedback → Fix it

| 步骤 | 含义 | 操作 |
|------|------|------|
| **Focus** | 高度专注 | 一次只练一个具体方面，不做多任务 |
| **Feedback** | 即时反馈 | 练习后立即知道对错。没有反馈=浪费时间 |
| **Fix it** | 修正弱点 | 找到具体出错的地方，专项训练 |

**你的对照**：
- 打脸链路 = Focus(预测) → Feedback(实验) → Fix it(重构) ✅
- 你的"遗留清零" = Fix it 阶段的系统化

---

### 3. 舒适区边缘

```
  恐慌区（太难，无法有效学习）
  ─────────────────────────────
  学习区（刚好够得着的困难）← 你应该在这里
  ─────────────────────────────
  舒适区（已经会的，重复=无进步）
```

**关键**：学习只发生在舒适区的边缘。太容易=天真的练习，太难=挫败放弃。

**如何判断**：
- 如果你10次全对 → 太容易，提升难度
- 如果你10次全错 → 太难，降低难度
- 如果你6-7次对 → 在学习区

---

### 4. 10000小时的误解

**原文**：不是"任何10000小时"，是"刻意练习的10000小时"。

- 开车10年 ≠ 赛车手
- 教课20年 ≠ 最好的老师
- 写代码10年 ≠ 架构师

关键差异：天真的练习者达到"可接受水平"后自动停止进步。**你需要刻意突破"可接受"。**

---

### 5. 领域差异

| 领域特征 | 刻意练习效果 | 例子 |
|---------|------------|------|
| 明确规则 + 快速反馈 | 极高 | 音乐、体育、棋类、编程竞赛 |
| 模糊规则 + 慢反馈 | 有限 | 管理、创意、创业 |
| 混合 | 中等 | 医学、教学 |

**你的领域**：工程实现（高效果）、系统设计（中等）、战略决策（低）

---

### 6. 教师/教练的必要性

刻意练习需要：
- 设计训练方案的人（知道你的舒适区在哪里）
- 提供即时反馈的人（看到你没看到的问题）
- 推动你走出舒适区的人（不让你停在"可接受"）

**AI 辅助学习中的角色**：AI 可以充当"即时反馈"和"训练设计"的角色，但不能完全替代人类教练的"推动力"。

---

## 天花板效应

达到"可接受水平"后自动停止进步的现象。

**打破方法**：
1. 识别你已经"自动停止"的地方
2. 故意增加难度（缩短时间、增加约束、改变条件）
3. 找到比你强的人，观察他们怎么做
4. 把"已经会"的部分教给别人（教学迫使深入）

---

## 与你的学习系统对照

| 你的做法 | 刻意练习对照 | 评分 |
|---------|------------|------|
| 打脸链路 | 3F 完美对应 | ✅ |
| 低自信型答对 | 心理表征已形成但未信任 | 🔶 需建立自信 |
| 跳过审阅 | 可能缺少 Feedback 环节 | 🔶 需增加自测 |
| 跨域联结 | 精细化心理表征 | ✅ |
| 批量提问 | 高效但可能不够"专注" | ⚠️ 注意深度 |

---

## 与其他技能的关系

- **make-it-stick**：互补。Make It Stick 关注记忆保留，刻意练习关注技能精进
- **barbara-oakley**：Oakley 的"组块化"是构建心理表征的具体方法
- **flow-csikszentmihalyi**：心流 ≈ 舒适区边缘的最优体验

---

## 诚实边界

- Ericsson 1993年原始论文的部分结果受到可复制性危机影响
- 天赋/基因在学习投入时间上的影响被低估
- "刻意练习"在模糊领域（管理、创业）的适用性有争议
- 调研时间：2026年8月

---

> 本Skill由 [女娲 · Skill造人术](https://github.com/alchaincyf/nuwa-skill) 生成
> 创建者：[花叔](https://x.com/AlchainHust)


---

## SOURCE · `arena/01a060a3-skill:skills/core/deliberate-practice/references/research/synthesis.md`

<!-- blob: 98655c1a4453a6d8919b748dca00173eb2033699; bytes: 1984 -->

# 刻意练习 · 综合调研

## 核心论点
1. **天真的练习 vs 刻意练习**：重复不等于进步。刻意练习需要：明确目标、即时反馈、走出舒适区
2. **心理表征(Mental Representations)**：专家的核心优势不是肌肉记忆，是高度发达的心理表征
3. **走出舒适区**：进步只发生在舒适区边缘。太容易=无进步，太难=挫败放弃
4. **专注与反馈**：刻意练习需要高度专注 + 高质量反馈。没有反馈的练习是浪费时间
5. **10000小时是误解**：不是任何10000小时都能成为专家，需要的是"刻意"的10000小时
6. **领域差异**：刻意练习在"有明确规则+快速反馈"的领域（音乐、体育、棋类）效果最大，在"模糊+慢反馈"领域（管理、创意）效果受限

## 作者
- K. Anders Ericsson（佛罗里达州立大学心理学教授，2016年去世）
- 与 Robert Pool 合著

## 关键概念
- **心理表征**：专家看到棋盘不是64格，是"局势结构"。看到代码不是字符，是"架构意图"
- **3F法则**：Focus（专注）→ Feedback（反馈）→ Fix it（修正）
- **天花板效应**：达到"可接受水平"后自动停止进步（如开车10年不会变成赛车手）

## 与你（用户）的关联
- 你的"打脸链路"= 刻意练习的核心（预测→实验反馈→修正）
- 你的"低自信型答对"= 心理表征已形成但未被信任
- 你的6科并行= 交错练习的宏观版（但可能缺少每个科目的"刻意"强度）
- 你的"遗留清零"= Fix it 阶段

## 批评与局限
- 可复制性危机：Ericsson 的一些核心实验结果受到质疑
- 天赋问题被低估：基因在"能投入多少刻意练习"上有影响
- 领域适用范围：不是所有领域都适合刻意练习

## 来源
- Ericsson & Pool. "Peak: Secrets from the New Science of Expertise" (2016)
- Ericsson et al. (1993). "The role of deliberate practice in the acquisition of expert performance"


---

## SOURCE · `arena/01a060a3-skill:skills/core/development-economics/SKILL.md`

<!-- blob: c109dc3aab6f0649d48242068ddea32af2f7b6ea; bytes: 437 -->

---
name: development-economics-framework
description: |
  发展经济学框架。Sen/能力方法/HD Index。核心：贫困/不平等/制度/人力资本。触发词：「发展经济学」
---
# 发展经济学
> 贫困/不平等/制度/人力资本

## 核心洞察
Sen/能力方法/HD Index的贡献。

## 你的对照
你的成长=发展

> 本Skill由 [女娲 · Skill造人术](https://github.com/alchaincyf/nuwa-skill) 生成


---

## SOURCE · `arena/01a060a3-skill:skills/core/developmental-psychology/SKILL.md`

<!-- blob: f79e7411ba28bcdc1149af35dd4e6df60c1695e5; bytes: 458 -->

---
name: developmental-psychology-framework
description: |
  发展心理学框架。Piaget/Vygotsky/Erikson。核心：认知发展阶段/最近发展区/人生阶段。触发词：「发展心理学」
---
# 发展心理学
> 认知发展阶段/最近发展区/人生阶段

## 核心洞察
Piaget/Vygotsky/Erikson的贡献。

## 你的对照
你的学习=发展

> 本Skill由 [女娲 · Skill造人术](https://github.com/alchaincyf/nuwa-skill) 生成


---

## SOURCE · `arena/01a060a3-skill:skills/core/dieter-rams-perspective/SKILL.md`

<!-- blob: 2d49c82bbaced648039eb72df66fa90a9ebabea2; bytes: 1833 -->

---
name: dieter-rams-perspective
description: |
  Dieter Rams的设计十诫思维框架。Braun首席设计师，"少即是多"的极致实践者。
  好的设计是创新的、实用的、审美的、可理解的、谦逊的、诚实的、耐用的、
  周全的、环保的、尽可能少的。
  触发词：「用Rams视角」「设计十诫」「少即是多」「Braun风格」
---

# Dieter Rams · 设计十诫

> 好的设计是尽可能少的设计。少，但更好。

## 设计十诫

| # | 原则 | 含义 |
|---|------|------|
| 1 | 创新的 | 设计的可能性永远不 Exhaust |
| 2 | 实用的 | 产品是被买来使用的——必须满足功能 |
| 3 | 审美的 | 不美的产品破坏日常生活的品质 |
| 4 | 可理解的 | 产品的结构自己会说话 |
| 5 | 不显眼的 | 产品既不是装饰品也不是艺术品——应该谦逊 |
| 6 | 诚实的 | 不试图让消费者觉得产品比实际更多 |
| 7 | 耐用的 | 不赶时髦——因此永远不会过时 |
| 8 | 周全的 | 每个细节都经过考虑，不随意 |
| 9 | 环保的 | 节约资源，减少污染 |
| 10 | 尽可能少的 | 回到本质——不多不少 |

## 你的对照

| Rams的原则 | 你的对应 |
|-----------|---------|
| 不显眼的 | 冰青系统的"克制" |
| 诚实的 | 反讨好框架的"诚实" |
| 可理解的 | 金字塔原理的"结构自明" |
| 尽可能少的 | Alexander的"减到不能再减" |
| 耐用的 | 你的技能库追求可复用性 |

---

## 与其他技能的关系

- **kenya-hara**：Rams是西方的"克制"，原研哉是东方的"克制"
- **naoto-fukasawa**：深泽直人是Rams在日本的传人
- **christopher-alexander**：Rams的"尽可能少"= Alexander的"空虚"

---

> 本Skill由 [女娲 · Skill造人术](https://github.com/alchaincyf/nuwa-skill) 生成


---

## SOURCE · `arena/01a060a3-skill:skills/core/dieter-rams-perspective/references/research/synthesis.md`

<!-- blob: 270f9e53ed8aae8191f4651740a1b27aba73d3f1; bytes: 271 -->

# Dieter Rams · 人物调研
## 核心身份：德国工业设计师，Braun首席设计师
## 核心思想：设计十诫、少即是多、好的设计是可理解的
## 与用户关联：冰青系统的克制、概念完整性
## 来源：Rams相关著作与纪录片


---

## SOURCE · `arena/01a060a3-skill:skills/core/differentiated-instruction/SKILL.md`

<!-- blob: 2af495fd49539b4ccf0a64bbca654d5c0ff9d7ba; bytes: 415 -->

---
name: differentiated-instruction-framework
description: |
  差异化教学框架。Tomlinson。核心：内容/过程/产品/环境差异化。触发词：「差异化教学」
---
# 差异化教学
> 内容/过程/产品/环境差异化

## 核心洞察
Tomlinson的贡献。

## 你的对照
你的多Agent=差异化

> 本Skill由 [女娲 · Skill造人术](https://github.com/alchaincyf/nuwa-skill) 生成


---

## SOURCE · `arena/01a060a3-skill:skills/core/digital-art/SKILL.md`

<!-- blob: bd362fd5682230735bdc1800857b33885cd6087a; bytes: 423 -->

---
name: digital-art-framework
description: |
  数字艺术框架。生成艺术/交互艺术/新媒体/算法美学。核心：你的全息=数字艺术。触发词：「数字艺术」
---
# 数字艺术
> 你的全息=数字艺术

## 核心洞察
生成艺术/交互艺术/新媒体/算法美学的贡献。

## 你的对照


> 本Skill由 [女娲 · Skill造人术](https://github.com/alchaincyf/nuwa-skill) 生成


---

## SOURCE · `arena/01a060a3-skill:skills/core/discourse-analysis/SKILL.md`

<!-- blob: cfa389d63b4764a306f46d130d8c3f4e23135a9f; bytes: 449 -->

---
name: discourse-analysis-framework
description: |
  话语分析框架。Fairclough/van Dijk。核心：语言/权力/意识形态/批判性话语分析。触发词：「话语分析」
---
# 话语分析
> 语言/权力/意识形态/批判性话语分析

## 核心洞察
Fairclough/van Dijk的贡献。

## 你的对照
你的演讲=话语分析对象

> 本Skill由 [女娲 · Skill造人术](https://github.com/alchaincyf/nuwa-skill) 生成


---

## SOURCE · `arena/01a060a3-skill:skills/core/dissipative-structures/SKILL.md`

<!-- blob: 34a6153b1e549f04dcbc162fa0a16d410ed2063b; bytes: 403 -->

---
name: dissipative-structures-framework
description: |
  耗散结构框架。Prigogine。核心：远离平衡/自组织/耗散=创造。触发词：「耗散结构」
---
# 耗散结构
> 远离平衡/自组织/耗散=创造

## 核心洞察
Prigogine的贡献。

## 你的对照
你的系统=耗散结构

> 本Skill由 [女娲 · Skill造人术](https://github.com/alchaincyf/nuwa-skill) 生成


---

## SOURCE · `arena/01a060a3-skill:skills/core/distributed-systems/SKILL.md`

<!-- blob: 7be23d7dee7a7d8c6f740f78f8188a4a7413105a; bytes: 426 -->

---
name: distributed-systems-framework
description: |
  分布式系统框架。CAP定理/一致性/可用性/分区容错。核心：你的多Agent=分布式。触发词：「分布式系统」
---
# 分布式系统
> 你的多Agent=分布式

## 核心洞察
CAP定理/一致性/可用性/分区容错的贡献。

## 你的对照


> 本Skill由 [女娲 · Skill造人术](https://github.com/alchaincyf/nuwa-skill) 生成


---

## SOURCE · `arena/01a060a3-skill:skills/core/dual-coding/SKILL.md`

<!-- blob: 759d3fb98e7897b25123e4111d3007ce1e7cdec1; bytes: 648 -->

---
name: dual-coding-framework
description: |
  基于 Paivio 双重编码理论。语言+视觉双通道编码比单通道记忆效果好。
  触发词：「双重编码」「怎么记住」「视觉学习」
---
# 双重编码理论
> 语言+视觉=两条记忆通路。一条断了还有另一条。

## 核心
- 语言系统：处理文字/语言信息
- 视觉系统：处理图像/空间信息
- 同时激活两个系统 = 记忆强度翻倍

## 你的对照
- 手写公式卡 = 双重编码实践
- 冰青全息可视化 = 视觉编码工程概念

> 本Skill由 [女娲 · Skill造人术](https://github.com/alchaincyf/nuwa-skill) 生成


---

## SOURCE · `arena/01a060a3-skill:skills/core/ecology-methods/SKILL.md`

<!-- blob: 754f2dbd07889166409a9c79da8ff1c38e33c499; bytes: 463 -->

---
name: ecology-methods-framework
description: |
  生态学方法论框架。样方/标记重捕/多样性指数/长期监测。核心：你的技能评估=生态学方法。触发词：「生态学方法论」
---
# 生态学方法论
> 你的技能评估=生态学方法

## 核心洞察
样方/标记重捕/多样性指数/长期监测的贡献。

## 你的对照


> 本Skill由 [女娲 · Skill造人术](https://github.com/alchaincyf/nuwa-skill) 生成


---

## SOURCE · `arena/01a060a3-skill:skills/core/economic-anthropology/SKILL.md`

<!-- blob: ea51cadb6aa4902fb94a7f110f1807c49bb8d2bb; bytes: 412 -->

---
name: economic-anthropology-framework
description: |
  经济人类学框架。Polanyi/Mauss/礼物经济/互惠。核心：你的开源=礼物经济。触发词：「经济人类学」
---
# 经济人类学
> 你的开源=礼物经济

## 核心洞察
Polanyi/Mauss/礼物经济/互惠的贡献。

## 你的对照


> 本Skill由 [女娲 · Skill造人术](https://github.com/alchaincyf/nuwa-skill) 生成


---

## SOURCE · `arena/01a060a3-skill:skills/core/ecosystem-thinking/SKILL.md`

<!-- blob: 4b0398b5a3d5bef79ebea2e373c3c7069365db09; bytes: 449 -->

---
name: ecosystem-thinking-framework
description: |
  生态系统思维框架。Tansley/Lindeman。核心：食物网/能量流/物质循环/生态位。触发词：「生态系统思维」
---
# 生态系统思维
> 食物网/能量流/物质循环/生态位

## 核心洞察
Tansley/Lindeman的贡献。

## 你的对照
你的技能生态=生态系统

> 本Skill由 [女娲 · Skill造人术](https://github.com/alchaincyf/nuwa-skill) 生成


---

## SOURCE · `arena/01a060a3-skill:skills/core/educational-technology/SKILL.md`

<!-- blob: be71acbae0293ff287d7d5fe30ccdf79e36f872c; bytes: 418 -->

---
name: educational-technology-framework
description: |
  教育技术框架。TPACK/TAM/学习分析/自适应学习。核心：你的AI辅导=教育技术。触发词：「教育技术」
---
# 教育技术
> 你的AI辅导=教育技术

## 核心洞察
TPACK/TAM/学习分析/自适应学习的贡献。

## 你的对照


> 本Skill由 [女娲 · Skill造人术](https://github.com/alchaincyf/nuwa-skill) 生成


---

## SOURCE · `arena/01a060a3-skill:skills/core/emotional-design/SKILL.md`

<!-- blob: 6bba61ff4da89241ef1525dee17d659ad33192dd; bytes: 401 -->

---
name: emotional-design-framework
description: |
  情感设计框架。核心：本能层/行为层/反思层。触发词：「情感设计」
---
# 情感设计
> 本能层/行为层/反思层

## 核心洞察
Norman的贡献定义了情感设计的基础。

## 你的对照
冰青系统=本能层设计

> 本Skill由 [女娲 · Skill造人术](https://github.com/alchaincyf/nuwa-skill) 生成


---

## SOURCE · `arena/01a060a3-skill:skills/core/energy-economics/SKILL.md`

<!-- blob: ac0e3111765ff196a210febec4a22706fb4d9867; bytes: 431 -->

---
name: energy-economics-framework
description: |
  能源经济学框架。发电成本/碳价/补贴/市场设计。核心：你的风电=能源经济核心。触发词：「能源经济学」
---
# 能源经济学
> 你的风电=能源经济核心

## 核心洞察
发电成本/碳价/补贴/市场设计的贡献。

## 你的对照


> 本Skill由 [女娲 · Skill造人术](https://github.com/alchaincyf/nuwa-skill) 生成


---

## SOURCE · `arena/01a060a3-skill:skills/core/energy-policy/SKILL.md`

<!-- blob: 1d79b09cb427ecb0362b98230584b1d484a6df2f; bytes: 429 -->

---
name: energy-policy-framework
description: |
  能源政策框架。补贴/碳交易/上网电价/可再生能源配额。核心：你的风电政策环境。触发词：「能源政策」
---
# 能源政策
> 你的风电政策环境

## 核心洞察
补贴/碳交易/上网电价/可再生能源配额的贡献。

## 你的对照


> 本Skill由 [女娲 · Skill造人术](https://github.com/alchaincyf/nuwa-skill) 生成


---

## SOURCE · `arena/01a060a3-skill:skills/core/energy-storage/SKILL.md`

<!-- blob: 9b6d02524024fd7d84431e82f1bea5966889820e; bytes: 436 -->

---
name: energy-storage-framework
description: |
  储能技术框架。电池/抽水蓄能/压缩空气/氢能/飞轮。核心：你的风电+储能=完整系统。触发词：「储能技术」
---
# 储能技术
> 你的风电+储能=完整系统

## 核心洞察
电池/抽水蓄能/压缩空气/氢能/飞轮的贡献。

## 你的对照


> 本Skill由 [女娲 · Skill造人术](https://github.com/alchaincyf/nuwa-skill) 生成


---

## SOURCE · `arena/01a060a3-skill:skills/core/engineering-terminology-gate/SKILL.md`

<!-- blob: 224aeba6343dc7e4a8fe22a00742fceabb4f454f; bytes: 4202 -->

---
name: engineering-terminology-gate
description: |
  工科术语科学性守门员。针对增材制造/高分子/摩擦学/装备领域，对修改文案做术语边界判定：
  本征量（材料级）vs 构件级实测 vs 机理表述 vs 商业语境四类区分。
  输入一句修改文案，输出"可换主语 / 必须换指标 / 保留降权 / 禁改"四选一结论及理由。
  用于 PPT 逐页改造时防止"构件熔点"级别的术语造假。
---

# 工科术语科学性守门员

## 核心问题

在"逐页文案改造"中，最容易犯的致命错误是**跨层级误用术语**：
- 把**材料本征量**（熔点、结晶度、摩擦系数）说成**构件级指标**
- 把**竞品材料牌号**的数值改了口径但保留数值
- 把**机理表述**替换为**现象描述**导致科学含义改变

## 术语四层分类

| 层级 | 含义 | 典型术语 | 能否挂到"构件"主语 |
|---|---|---|---|
| **L1 材料本征量** | 材料固有属性，与几何无关 | 熔点、结晶度、密度、玻璃化转变温度 Tg、热变形温度 HDT | ❌ **禁改** 主语为构件 |
| **L2 机理/过程表述** | 描述物理化学机制 | 摩擦系数 μ、磨损率、Transfer film 形成、对偶面吸附 | ⚠️ 可说"构件摩擦系数"（测试条件限定），但须注明对偶/载荷/速度 |
| **L3 构件级实测** | 与具体构件几何和工况相关 | 构件温升、构件表面粗糙度 Ra、构件尺寸精度、构件拉伸强度 | ✅ 可挂构件主语 |
| **L4 商业/应用语境** | 品牌、牌号、产品名 | Victrex 450G、PEEK-OPTIMA®、君华 JH-⼀串 | ❌ **禁改数值**，可改口径（如"采用 Victrex 级 PEEK"） |

## 判定流程

给出一句修改文案，按以下步骤判定：

```
Step 1: 识别主语
  → 主语是"材料"还是"构件"还是"装备"还是"竞品"？

Step 2: 识别谓语/指标
  → 该指标属于 L1/L2/L3/L4 哪一层？

Step 3: 交叉判定
  L1 + 材料主语 → ✅ 可换主语（保持材料级表述）
  L1 + 构件主语 → ❌ 禁改（"构件熔点"是造假级错误，必须换指标）
  L2 + 构件主语 → ⚠️ 保留降权（须补测试条件：对偶/载荷/速度/温度）
  L3 + 构件主语 → ✅ 可换主语（构件级指标本就该挂构件）
  L4 + 任何主语 → ❌ 禁改数值，可改口径表述

Step 4: 输出
  → 四选一结论 + 理由 + 建议替代文案
```

## 四选一结论格式

```
【判定】可换主语 / 必须换指标 / 保留降权 / 禁改
【层级】L? + 主语类型
【理由】为什么
【建议】替代文案（如有）
```

## 验收测试集（5 个真实翻车案例）

| # | 输入文案 | 正确判定 | 理由 |
|---|---|---|---|
| 1 | "构件摩擦系数降低 40%" | ⚠️ 保留降权 | L2 机理量，须补测试条件（对偶材料/载荷/速度） |
| 2 | "构件结晶度提升至 35%" | ❌ 必须换指标 | L1 本征量，结晶度是材料级，不能挂"构件"主语；换为"材料结晶度"或改为构件级指标（如"构件热变形温度"） |
| 3 | "PEEK 构件在 360°C 下工作" | ✅ 可换主语 | L3 构件级工况描述，PEEK 构件是合理主语 |
| 4 | "构件熔点达到 343°C" | ❌ 禁改 | L1 本征量，熔点 343°C 是 PEEK 材料固有属性，不能说"构件熔点"；改为"所用 PEEK 材料熔点 343°C" |
| 5 | "竞品材料牌号对比：Victrex 450G vs 君华" | ❌ 禁改数值，可改口径 | L4 商业牌号，数值/牌号不可改；口径可改为"采用国际同级 PEEK 原料" |

## 使用方式

```
对每一句改造文案，运行术语四问：
1. 主语是什么？（材料/构件/装备/竞品）
2. 指标是什么？（熔点/摩擦系数/结晶度/...）
3. 这个指标属于哪一层？（L1/L2/L3/L4）
4. 主语和指标层级匹配吗？
```

## 注意事项

- 本技能不含"自动判定"脚本，是**思维框架 + 检查清单**，须人工逐句执行
- 增材制造领域的特殊陷阱：烧结温度 ≠ 材料熔点（烧结 < 熔点）、层间结合强度 ≠ 本体拉伸强度
- 摩擦学领域的特殊陷阱：摩擦系数必须标注对偶副/载荷/速度/温度四要素，否则无意义


---

## SOURCE · `arena/01a060a3-skill:skills/core/entropy-philosophy/SKILL.md`

<!-- blob: 70edbfe3a561056db5bdca17cf5d919077f45839; bytes: 431 -->

---
name: entropy-philosophy-framework
description: |
  熵的哲学框架。Boltzmann/Shannon。核心：热力学箭头/信息熵/麦克斯韦妖。触发词：「熵的哲学」
---
# 熵的哲学
> 热力学箭头/信息熵/麦克斯韦妖

## 核心洞察
Boltzmann/Shannon的贡献。

## 你的对照
你的信息处理=对抗熵增

> 本Skill由 [女娲 · Skill造人术](https://github.com/alchaincyf/nuwa-skill) 生成


---

## SOURCE · `arena/01a060a3-skill:skills/core/environmental-law/SKILL.md`

<!-- blob: f3a626b7d8191aa69f0c8b931c6edc87928c2ed6; bytes: 438 -->

---
name: environmental-law-framework
description: |
  环境法框架。污染者付费/预防原则/可持续发展/碳交易。核心：你的风电=环境法受益。触发词：「环境法」
---
# 环境法
> 你的风电=环境法受益

## 核心洞察
污染者付费/预防原则/可持续发展/碳交易的贡献。

## 你的对照


> 本Skill由 [女娲 · Skill造人术](https://github.com/alchaincyf/nuwa-skill) 生成


---

## SOURCE · `arena/01a060a3-skill:skills/core/environmental-psychology/SKILL.md`

<!-- blob: d134b4b8ed92f770797d4f9fb2929ea8114fea9f; bytes: 439 -->

---
name: environmental-psychology-framework
description: |
  环境心理学框架。场所感/空间行为/恢复性环境/绿色。核心：你的冰青=环境心理。触发词：「环境心理学」
---
# 环境心理学
> 你的冰青=环境心理

## 核心洞察
场所感/空间行为/恢复性环境/绿色的贡献。

## 你的对照


> 本Skill由 [女娲 · Skill造人术](https://github.com/alchaincyf/nuwa-skill) 生成


---

## SOURCE · `arena/01a060a3-skill:skills/core/epigenetics/SKILL.md`

<!-- blob: 1c5b1648da11f4ef50758a87e601e8e5ed88560c; bytes: 425 -->

---
name: epigenetics-framework
description: |
  表观遗传学框架。Waddington。核心：基因表达调控/环境→基因/可逆修饰。触发词：「表观遗传学」
---
# 表观遗传学
> 基因表达调控/环境→基因/可逆修饰

## 核心洞察
Waddington的贡献。

## 你的对照
你的学习=表观遗传

> 本Skill由 [女娲 · Skill造人术](https://github.com/alchaincyf/nuwa-skill) 生成


---

## SOURCE · `arena/01a060a3-skill:skills/core/epistemology/SKILL.md`

<!-- blob: 8d8c6b800322595af2ed90f0c0cbb1ed5fe2778f; bytes: 451 -->

---
name: epistemology-framework
description: |
  认识论框架。知识是什么/辩护/真理/怀疑论/基础主义vs融贯论。核心：你的学习=认识论实践。触发词：「认识论」
---
# 认识论
> 你的学习=认识论实践

## 核心洞察
知识是什么/辩护/真理/怀疑论/基础主义vs融贯论的贡献。

## 你的对照


> 本Skill由 [女娲 · Skill造人术](https://github.com/alchaincyf/nuwa-skill) 生成


---

## SOURCE · `arena/01a060a3-skill:skills/core/ethnographic-methods/SKILL.md`

<!-- blob: 48579ea9e95fa04edbb991b051d50a30df0efbda; bytes: 447 -->

---
name: ethnographic-methods-framework
description: |
  民族志方法框架。参与观察/深度访谈/田野笔记/反身性。核心：你的学习日记=民族志。触发词：「民族志方法」
---
# 民族志方法
> 你的学习日记=民族志

## 核心洞察
参与观察/深度访谈/田野笔记/反身性的贡献。

## 你的对照


> 本Skill由 [女娲 · Skill造人术](https://github.com/alchaincyf/nuwa-skill) 生成


---

## SOURCE · `arena/01a060a3-skill:skills/core/evolution-darwin/SKILL.md`

<!-- blob: 3a313357b57c17a6606c8bd831b98abe77e91592; bytes: 394 -->

---
name: evolution-darwin-framework
description: |
  进化论框架。Darwin。核心：自然选择/适者生存/渐变/性选择。触发词：「进化论」
---
# 进化论
> 自然选择/适者生存/渐变/性选择

## 核心洞察
Darwin的贡献。

## 你的对照
你的技能演化=进化

> 本Skill由 [女娲 · Skill造人术](https://github.com/alchaincyf/nuwa-skill) 生成


---

## SOURCE · `arena/01a060a3-skill:skills/core/evolution-of-cooperation/SKILL.md`

<!-- blob: c6e3d7f0d3a4926307d1c8770db7890454a4740c; bytes: 445 -->

---
name: evolution-of-cooperation-framework
description: |
  合作的进化框架。Axelrod。核心：以牙还牙策略/善意/可激怒/宽容/清晰。触发词：「合作的进化」
---
# 合作的进化
> 以牙还牙策略/善意/可激怒/宽容/清晰

## 核心洞察
Axelrod的贡献。

## 你的对照
你的多Agent协作=Axelrod策略

> 本Skill由 [女娲 · Skill造人术](https://github.com/alchaincyf/nuwa-skill) 生成


---

## SOURCE · `arena/01a060a3-skill:skills/core/evolutionary-game-theory/SKILL.md`

<!-- blob: c978b5b63849f2c97c5820d07245c593d5d659ed; bytes: 432 -->

---
name: evolutionary-game-theory-framework
description: |
  演化博弈框架。Maynard Smith。核心：演化稳定策略/鹰鸽博弈/复制动态。触发词：「演化博弈」
---
# 演化博弈
> 演化稳定策略/鹰鸽博弈/复制动态

## 核心洞察
Maynard Smith的贡献。

## 你的对照
技能库演化=演化博弈

> 本Skill由 [女娲 · Skill造人术](https://github.com/alchaincyf/nuwa-skill) 生成


---

## SOURCE · `arena/01a060a3-skill:skills/core/evolutionary-psychology/SKILL.md`

<!-- blob: a7c9a4a2e21572775de076dec88751ca083b63f7; bytes: 455 -->

---
name: evolutionary-psychology-framework
description: |
  进化心理学框架。Buss/Tooby & Cosmides。核心：适应性/性选择/亲代投资/进化错配。触发词：「进化心理学」
---
# 进化心理学
> 适应性/性选择/亲代投资/进化错配

## 核心洞察
Buss/Tooby & Cosmides的贡献。

## 你的对照
你的偏好=进化产物

> 本Skill由 [女娲 · Skill造人术](https://github.com/alchaincyf/nuwa-skill) 生成


---

## SOURCE · `arena/01a060a3-skill:skills/core/existentialism/SKILL.md`

<!-- blob: e75e6fafe0690d10a999b2500100e370526a9c5f; bytes: 465 -->

---
name: existentialism-framework
description: |
  存在主义框架。Kierkegaard/Nietzsche/Sartre/Heidegger。核心：存在先于本质/自由/焦虑/真实性。触发词：「存在主义」
---
# 存在主义
> 存在先于本质/自由/焦虑/真实性

## 核心洞察
Kierkegaard/Nietzsche/Sartre/Heidegger的贡献。

## 你的对照
你的选择=存在主义

> 本Skill由 [女娲 · Skill造人术](https://github.com/alchaincyf/nuwa-skill) 生成


---

## SOURCE · `arena/01a060a3-skill:skills/core/experiential-learning/SKILL.md`

<!-- blob: 2dff1f162d5ffb5f7a7a1b57fc5c44f4b038df7d; bytes: 434 -->

---
name: experiential-learning-framework
description: |
  经验学习框架。Kolb。核心：具体经验→反思观察→抽象概念→主动实验。触发词：「经验学习」
---
# 经验学习
> 具体经验→反思观察→抽象概念→主动实验

## 核心洞察
Kolb的贡献。

## 你的对照
你的打脸=经验学习

> 本Skill由 [女娲 · Skill造人术](https://github.com/alchaincyf/nuwa-skill) 生成


---

## SOURCE · `arena/01a060a3-skill:skills/core/experimental-economics/SKILL.md`

<!-- blob: 32197635daddda744fa741857636fa05c890729a; bytes: 427 -->

---
name: experimental-economics-framework
description: |
  实验经济学框架。Smith/实验室实验/田野实验。核心：你的决策验证=实验经济。触发词：「实验经济学」
---
# 实验经济学
> 你的决策验证=实验经济

## 核心洞察
Smith/实验室实验/田野实验的贡献。

## 你的对照


> 本Skill由 [女娲 · Skill造人术](https://github.com/alchaincyf/nuwa-skill) 生成


---

## SOURCE · `arena/01a060a3-skill:skills/core/field-theory/SKILL.md`

<!-- blob: 2f2911d2da6267febebb3682ca3ba9462800a927; bytes: 372 -->

---
name: field-theory-framework
description: |
  场论框架。Faraday/Maxwell。核心：连续场/传播/叠加/极化。触发词：「场论」
---
# 场论
> 连续场/传播/叠加/极化

## 核心洞察
Faraday/Maxwell的贡献。

## 你的对照
你的技能场=场论

> 本Skill由 [女娲 · Skill造人术](https://github.com/alchaincyf/nuwa-skill) 生成


---

## SOURCE · `arena/01a060a3-skill:skills/core/fifth-discipline/SKILL.md`

<!-- blob: c3712decf38c3d3f01285f7ab636563ff05c6d4a; bytes: 2622 -->

---
name: fifth-discipline-framework
description: |
  基于 Peter Senge《第五项修炼》的学习型组织框架。5项修炼：系统思考、自我超越、
  心智模型、共同愿景、团队学习。核心工具：因果回路图、系统基模。
  触发词：「学习型组织」「第五项修炼」「系统基模」「因果回路图」「团队学习」
---

# 第五项修炼 · 学习型组织

> 唯一可持续的竞争优势，是比对手学得更快。

## 5项修炼

| # | 修炼 | 含义 | 关键工具 |
|---|------|------|---------|
| 1 | 系统思考 | 看到整体而非局部 | 因果回路图、基模 |
| 2 | 自我超越 | 持续澄清什么对自己真正重要 | 个人愿景练习 |
| 3 | 心智模型 | 审视自己看世界的"镜片" | 左手栏、推论阶梯 |
| 4 | 共同愿景 | 建立团队共享的目标感 | 愿景对话 |
| 5 | 团队学习 | 团队整体思考能力>个人之和 | 深度汇谈 |

**系统思考是第五项，也是融合其他四项的基础。**

## 核心系统基模

### 1. 饮鸩止渴(Shifting the Burden)
用治标的方法暂时缓解问题→根本问题恶化→更依赖治标方法→恶性循环

**你的对照**：考前突击=饮鸩止渴。暂时过了考试→知识没真正掌握→下次更需要突击

### 2. 成长上限(Limits to Growth)
增长过程→增强回路→快速增长→碰到限制因素→增长减缓

**你的对照**：6科并行学习初期进步快→碰到认知负荷上限→需要调整节奏

### 3. 舍本逐末
和饮鸩止渴类似——倾向于用"快速修复"而非解决根本问题

### 4. 目标侵蚀(Eroding Goals)
表现不达标→降低目标→更容易达标→进一步降低目标→恶性循环

### 5. 成功者更成功(Success to the Successful)
成功→获得更多资源→更容易成功→资源集中→其他人更少资源

## 因果回路图

```
增强回路(↑↑): 学得越多→能力越强→做得更好→更有信心→学得更多

平衡回路(→→): 学得越多→认知负荷越大→疲劳→学得越慢
```

## 与你的对照

| Senge的概念 | 你的对应 |
|------------|---------|
| 团队学习 | 多Agent协作 |
| 心智模型 | 你的"镜片"意识 |
| 系统思考 | 你的跨域联结 |
| 共同愿景 | 英仔爱心社 |
| 自我超越 | 6科并行自学 |

---

## 诚实边界

- "学习型组织"概念在实践中的效果有限——大多数组织难以真正实施
- 基模有被过度套用的风险
- 调研时间：2026年8月

---

> 本Skill由 [女娲 · Skill造人术](https://github.com/alchaincyf/nuwa-skill) 生成


---

## SOURCE · `arena/01a060a3-skill:skills/core/fifth-discipline/references/research/synthesis.md`

<!-- blob: fdd8628007429d8abbb4dbd227d201ce6105e919; bytes: 1682 -->

# 第五项修炼 + Claude Shannon + 思考的技术 + 心流

## 《第五项修炼》Senge
- 学习型组织5项修炼：系统思考、自我超越、心智模型、共同愿景、团队学习
- 第五项=系统思考，是其他四项的基础
- 核心工具：因果回路图、基模(archetypes)
- 关键基模：饮鸩止渴、成长上限、舍本逐末、目标侵蚀、成功者更成功
- 来源：Senge. "The Fifth Discipline" (1990)

## Claude Shannon 信息论
- 信息=消除不确定性。信息的度量=比特
- 信道容量：有噪声的信道也有最大传输速率
- 冗余：自然语言有50%+冗余——这就是为什么能纠错
- 熵=不确定性=信息量。最大熵=最大不确定性=最大信息
- 与用户的关联：他的AI系统就是在处理信息——理解信息论帮助理解AI的本质限制
- 来源：Shannon (1948). "A Mathematical Theory of Communication"

## 《思考的技术》大前研一
- 麦肯锡式结构化问题解决
- 核心方法：假设驱动、MECE分解、事实为基础
- 问题=应有状态与现状的差距
- 解决问题的步骤：定义问题→分解→假设→验证→方案
- 与用户的关联：他的工程思维+金字塔原理=大前研一的方法论
- 来源：大前研一. "思考的技术" (2001)

## 《心流》Csikszentmihalyi
- 心流=完全沉浸的活动状态，时间感消失
- 条件：清晰目标、即时反馈、技能与挑战匹配
- 最优体验=挑战刚好超出技能一点点（舒适区边缘+）
-  autotelic personality: 做活动本身就是目的
- 与用户的关联：他的打脸链路在心流状态下效果最好
- 来源：Csikszentmihalyi. "Flow" (1990)


---

## SOURCE · `arena/01a060a3-skill:skills/core/film-theory/SKILL.md`

<!-- blob: cb54332335e2ee099d060926185f72a4c74c3a2d; bytes: 418 -->

---
name: film-theory-framework
description: |
  电影理论框架。Eisenstein/Bazin/Tarkovsky。核心：蒙太奇/长镜头/时间雕塑。触发词：「电影理论」
---
# 电影理论
> 蒙太奇/长镜头/时间雕塑

## 核心洞察
Eisenstein/Bazin/Tarkovsky的贡献。

## 你的对照
你的全息=电影镜头

> 本Skill由 [女娲 · Skill造人术](https://github.com/alchaincyf/nuwa-skill) 生成


---

## SOURCE · `arena/01a060a3-skill:skills/core/finite-infinite-games/SKILL.md`

<!-- blob: d78294373bf4376f41a1a82c70ee0d415b6a2ac1; bytes: 3403 -->

---
name: finite-infinite-games-framework
description: |
  基于 James Carse《有限与无限的游戏》的人生哲学框架。核心区分：有限游戏以取胜为目的，
  无限游戏以延续游戏为目的。有限在边界内玩，无限玩边界本身。
  触发词：「人生游戏」「有限无限」「什么是值得做的」「为什么要做这个」
---

# 有限与无限的游戏 · 谁在玩什么

> 至少有两种游戏。一种被称为有限的，以取胜为目的；另一种被称为无限的，以延续游戏为目的。

## 核心区分

| | 有限游戏 | 无限游戏 |
|--|---------|---------|
| **目的** | 赢得游戏 | 延续游戏 |
| **边界** | 固定的 | 可以改变 |
| **规则** | 固定的 | 可以改变 |
| **参与者** | 被角色定义 | 就是自己 |
| **时间** | 有明确的开始和结束 | 没有终点 |
| **结果** | 终点 | 每个终点是新起点 |
| **戏剧性** | 必须有一个结局 | 不需要结局 |

## 核心洞察

### 1. 无限游戏参与者知道自己在玩

有限游戏参与者不知道自己"在玩"——他们认为自己在"生活"。无限游戏参与者知道自己在玩，并且可以选择玩什么游戏。

### 2. 有限游戏在边界内玩；无限游戏玩边界本身

有限游戏接受规则，在规则内竞争。
无限游戏质疑规则本身——如果规则让游戏无法继续，就改变规则。

### 3. 权力 vs 力量

- **权力(Power)**：在有限游戏中赢的能力——过去的结果
- **力量(Strength)**：延续游戏的能力——未来的可能

### 4. 所有的有限游戏都在无限游戏之内

考试在学业之内，学业在职业生涯之内，职业生涯在人生之内，人生在更大的游戏之内。

---

## 你的游戏识别

| 你的活动 | 游戏类型 | 特征 |
|---------|---------|------|
| 考试/项目 | 有限游戏 | 有明确的截止日期和评分标准 |
| 大创项目 | 混合 | 有截止日期但知识积累是无限的 |
| HANDOFF系统 | 无限游戏 | 没有终点，每代延续 |
| 6科并行自学 | 无限游戏 | 没有"学完"的概念 |
| 技能库建设 | 无限游戏 | 不断扩展，没有"完成" |
| 英仔爱心社 | 无限游戏 | 延续而非取胜 |
| 恋爱 | 无限游戏 | 不是"追到手"是"在一起" |

## 决策启发式

1. **识别游戏类型**：你正在玩有限游戏还是无限游戏？方法错了会痛苦
2. **不要为有限游戏牺牲无限游戏**：考试成绩是有限的，学习能力是无限的
3. **改变规则而非接受失败**：如果有限游戏的规则对你不利，考虑改变它
4. **选择延续性的游戏**：长期来看，无限游戏的回报更大
5. **享受过程**：无限游戏的目的就是继续玩——所以过程就是回报

---

## 与其他技能的关系

- **john-boyd**：Boyd的"毁灭与创造"是无限游戏的精神——没有终点
- **christopher-alexander**：Alexander的"从内部生长"也是无限游戏思维
- **tao-te-ching**：老子的"道"是最终的无限游戏

---

## 诚实边界

- 这本书极度抽象——几乎没有具体案例
- 不是所有决策都能用"有限vs无限"来分析
- 可能让人陷入"什么都无所谓"的虚无——因为反正都是无限游戏
- 调研时间：2026年8月

---

> 本Skill由 [女娲 · Skill造人术](https://github.com/alchaincyf/nuwa-skill) 生成


---

## SOURCE · `arena/01a060a3-skill:skills/core/finite-infinite-games/references/research/synthesis.md`

<!-- blob: bddbbe4dbe802dae47d6aa5cb5e266868b433390; bytes: 440 -->

# 有限与无限的游戏 · 综合调研

## 核心论点
1. 有限游戏：以取胜为目的，有边界有规则
2. 无限游戏：以延续游戏为目的，边界规则可改
3. 有限在边界内玩；无限玩边界本身
4. 有限的终点是终点；无限的终点是新起点

## 与用户的关联
- HANDOFF = 无限游戏
- 自学 = 无限游戏
- 考试 = 有限游戏

## 来源
- Carse. "Finite and Infinite Games" (1986)


---

## SOURCE · `arena/01a060a3-skill:skills/core/flipped-classroom/SKILL.md`

<!-- blob: 93832aff26eb33b68bb49fb63ca221d5578ad9e6; bytes: 415 -->

---
name: flipped-classroom-framework
description: |
  翻转课堂框架。先学后教/课堂做练习/视频讲授。核心：你的自学=翻转课堂。触发词：「翻转课堂」
---
# 翻转课堂
> 你的自学=翻转课堂

## 核心洞察
先学后教/课堂做练习/视频讲授的贡献。

## 你的对照


> 本Skill由 [女娲 · Skill造人术](https://github.com/alchaincyf/nuwa-skill) 生成


---

## SOURCE · `arena/01a060a3-skill:skills/core/flow-csikszentmihalyi/SKILL.md`

<!-- blob: f4742440c7f0b35d22ec5e1c24d36de56818be7e; bytes: 2974 -->

---
name: flow-csikszentmihalyi-framework
description: |
  基于 Csikszentmihalyi《心流》的最优体验框架。核心：心流=完全沉浸的活动状态。
  条件：清晰目标+即时反馈+技能与挑战匹配。最优体验=挑战刚好超出技能。
  触发词：「心流」「怎么进入状态」「沉浸」「最优体验」「flow」
---

# 心流 · 最优体验的科学

> 最好的时刻不是放松的时刻，是完全沉浸在一个有挑战的活动中的时刻。

## 核心理念

**心流**：完全沉浸、忘记时间、表现最佳的意识状态。

它不是"放松"——恰恰相反，它是高度专注+高度挑战的状态。

---

## 心流的条件

```
┌─────────────────────────────────────────┐
│  焦虑区（挑战 >> 技能）                    │
│  ─────────────────────────────────────  │
│  心流区（挑战 ≈ 技能 + 一点点）← 在这里   │
│  ─────────────────────────────────────  │
│  无聊区（挑战 << 技能）                    │
└─────────────────────────────────────────┘
```

### 3个必要条件

1. **清晰目标**：知道每一步要做什么
2. **即时反馈**：立刻知道做得对不对
3. **技能与挑战匹配**：挑战刚好超出当前技能水平

### 心流的特征

- 时间感消失
- 自我意识减弱
- 行动与意识融合
- 活动本身成为目的（autotelic）

---

## 你的对照

| 心流条件 | 你的对应 |
|---------|---------|
| 清晰目标 | 每个学习课题有明确目标 |
| 即时反馈 | 打脸链路（预测→立即验证） |
| 技能与挑战匹配 | 你"刚好够得着"的学习区 |
| autotelic | 你学习不是因为考试，是因为喜欢 |

---

## 如何进入心流

1. 选择与你技能匹配的挑战
2. 消除干扰（关闭通知）
3. 设定明确的小目标
4. 确保有即时反馈
5. 给自己足够的不被打断的时间

## 如何退出心流

- 如果你在心流中——不要打断自己
- 如果你无法进入——检查哪个条件缺失
- 焦虑了→降低挑战；无聊了→增加挑战

---

## 与其他技能的关系

- **deliberate-practice**：刻意练习需要走出舒适区；心流在舒适区边缘。两者几乎重叠
- **make-it-stick**：心流状态下的学习效果最佳
- **barbara-oakley**：Oakley的专注模式=心流的入口

---

## 诚实边界

- 心流不是所有活动的最佳状态——有时放松/发散更重要
- 过度追求心流可能导致工作狂
- "flow channel"的概念过于简化
- 调研时间：2026年8月

---

> 本Skill由 [女娲 · Skill造人术](https://github.com/alchaincyf/nuwa-skill) 生成


---

## SOURCE · `arena/01a060a3-skill:skills/core/flow-csikszentmihalyi/references/research/synthesis.md`

<!-- blob: 33437199f99d18fc50f81678abf795497f31dc50; bytes: 354 -->

# 心流 · 综合调研

## 核心论点
1. 心流=完全沉浸的活动状态
2. 条件：清晰目标、即时反馈、技能与挑战匹配
3. 最优体验=挑战刚好超出技能一点点
4. autotelic personality: 活动本身就是目的
5. 心流不是放松——是高度专注的最佳表现状态

## 来源
- Csikszentmihalyi. "Flow" (1990)


---

## SOURCE · `arena/01a060a3-skill:skills/core/formative-assessment/SKILL.md`

<!-- blob: f036b29fc4d708f7fe0c9ae675bb157234f5d249; bytes: 417 -->

---
name: formative-assessment-framework
description: |
  形成性评估框架。过程性/诊断性/反馈/改进。核心：你的打脸=形成性评估。触发词：「形成性评估」
---
# 形成性评估
> 你的打脸=形成性评估

## 核心洞察
过程性/诊断性/反馈/改进的贡献。

## 你的对照


> 本Skill由 [女娲 · Skill造人术](https://github.com/alchaincyf/nuwa-skill) 生成


---

## SOURCE · `arena/01a060a3-skill:skills/core/framing-effect/SKILL.md`

<!-- blob: d924a0beb4977e4fccf193ae5de73e4db81df93d; bytes: 620 -->

---
name: framing-effect-framework
description: |
  框架效应：同一信息不同表述导致不同决策。Tversky & Kahneman 发现。
  触发词：「框架效应」「怎么表述」「表述影响决策」
---
# 框架效应
> "90%存活率" vs "10%死亡率"——同一件事，不同选择。

## 核心
- 收益框架→风险回避
- 损失框架→风险寻求
- 你的决策可能被"怎么说"而非"是什么"影响

## 你的对照
- 你的提问设计=框架设计（改变AI的框架→改变AI的回答）

> 本Skill由 [女娲 · Skill造人术](https://github.com/alchaincyf/nuwa-skill) 生成


---

## SOURCE · `arena/01a060a3-skill:skills/core/futures-studies/SKILL.md`

<!-- blob: d88e15c661e0a68390fefb0645ee5d3d332777ff; bytes: 418 -->

---
name: futures-studies-framework
description: |
  未来学框架。情景分析/趋势外推/德尔菲/回溯法。核心：你的职业规划=未来学。触发词：「未来学」
---
# 未来学
> 你的职业规划=未来学

## 核心洞察
情景分析/趋势外推/德尔菲/回溯法的贡献。

## 你的对照


> 本Skill由 [女娲 · Skill造人术](https://github.com/alchaincyf/nuwa-skill) 生成


---

## SOURCE · `arena/01a060a3-skill:skills/core/geb-hofstadter/SKILL.md`

<!-- blob: 5cf3830d35d704ae4bd8557609927f828b83ac87; bytes: 4615 -->

---
name: geb-hofstadter-framework
description: |
  基于 Douglas Hofstadter《哥德尔、艾舍尔、巴赫》(GEB)的思维框架。核心概念：
  自我指涉、怪圈(Strange Loop)、涌现、形式与意义、不完备性。
  跨数学、艺术、音乐的极致跨域思维。
  触发词：「GEB」「自我指涉」「怪圈」「涌现」「不完备定理」「哥德尔」
---

# GEB · 自我指涉的永恒金线

> 当你沿着层级向上走，最终回到了起点——那个怪圈，就是意识。

## 核心理念

这本书做了三件事：
1. 用**哥德尔**的数学定理证明：任何足够强的系统都包含"真但不可证"的命题
2. 用**艾舍尔**的画展示：什么是视觉化的自我指涉（画着自己在画画的手）
3. 用**巴赫**的音乐演绎：什么是声音中的怪圈（卡农在最后回到开头的调）

三条线汇聚成一个核心概念：**怪圈(Strange Loop)**。

---

## 核心概念

### 1. 自我指涉(Self-reference)

**一句话**：当一个系统能够谈论自身时，奇迹和悖论同时出现。

- 哥德尔："这句话是假的"——如果是真的就是假的，如果是假的就是真的
- 艾舍尔：画中有画，楼梯通往自己
- 你的技能库：SKILL可以描述SKILL——这就是自我指涉

**应用**：当你遇到悖论时，问"这是不是一个自我指涉的问题？"

---

### 2. 怪圈(Strange Loop)

**一句话**：沿层级向上走，最终回到了起点。这就是意识。

- 在形式系统中：从公理出发，经过一系列推导，得到了关于"这个系统本身"的命题
- 在意识中：大脑中关于世界的模型 → 模型中包含了"我自己" → 自我意识

**你的对照**：
- 你的多Agent HANDOFF：Agent A交接给Agent B → B改进A → B的改进被记录 → 下一代A基于改进后的记录工作 → 回到起点但层级更高
- 这就是怪圈——而且是有生产力的怪圈

---

### 3. 涌现(Emergence)

**一句话**：简单规则的组合产生不可预测的复杂行为。

- 蚂蚁个体很简单 → 蚁群极其智能
- 神经元简单 → 意识涌现
- 你的4285个SKILL各自的规则简单 → 整个系统涌现出你可能没预见的能力

**应用**：不要试图在微观层面控制一切。设定好简单规则，让复杂行为涌现。

---

### 4. 形式与意义的关系

**一句话**：意义不是被放入形式的——意义是形式自己长出来的。

- 音符本身没有"悲伤"——但组合起来就悲伤了
- 代码本身没有"架构"——但运行起来就有架构了
- 你的技能本身没有"认知"——但组合起来就产生认知了

---

### 5. 不完备性

**一句话**：任何足够强的系统都无法证明自己的一致性。

- 哥德尔第一不完备定理：足够强的一致系统包含不可判定命题
- 哥德尔第二不完备定理：系统无法证明自身一致性
- 实践意义：不要追求"完美的系统"——完美的系统要么不完备，要么不一致

**你的对照**：你的技能库追求"覆盖所有任务"——哥德尔说这是不可能的。有些任务你的系统无法处理，不是因为技能不够，而是因为系统本身的局限。

---

## 跨域方法论

GEB 本身就是跨域的极致示范：

| 领域 | 概念 | 跨域映射 |
|------|------|---------|
| 数学 | 不完备定理 | → 任何系统都有盲区 |
| 艺术 | 不可能图形 | → 视觉化的悖论 |
| 音乐 | 赋格/卡农 | → 声音中的自我引用 |
| 计算机科学 | 递归/停机问题 | → 计算中的不可判定 |
| 神经科学 | 意识 | → 怪圈 = 自我意识 |
| 语言学 | 自指句 | → 语言的极限 |

**你的对照**：你的跨域联结（卷积↔CFD↔神经网络）是GEB方法论的小尺度版本。

---

## 决策启发式

1. **寻找怪圈**：如果你的问题看起来像悖论——检查是否有自我指涉
2. **接受不完备**：不要追求完美系统。接受"有些东西我证明不了"
3. **简单规则 → 涌现**：不要微观管理。设定好规则让复杂性涌现
4. **跨域是生产力**：最有价值的洞见在学科交叉处
5. **意义是涌现的**：不要硬塞意义——让结构自己产生意义

---

## 诚实边界

- GEB的科学内容有个别争议（如意识的"怪圈理论"不是主流共识）
- 书极其冗长——核心观点可以用1/5篇幅表达
- 过于强调自我指涉可能忽视其他认知机制
- 调研时间：2026年8月

---

> 本Skill由 [女娲 · Skill造人术](https://github.com/alchaincyf/nuwa-skill) 生成


---

## SOURCE · `arena/01a060a3-skill:skills/core/geb-hofstadter/references/research/synthesis.md`

<!-- blob: 98dae0fac6bf98ba6eaed4ebc7503501275505d2; bytes: 502 -->

# GEB · 综合调研

## 核心论点
1. **哥德尔不完备定理**：足够强的形式系统包含"真但不可证"的命题
2. **艾舍尔的画**：自我指涉、不可能结构
3. **巴赫的音乐**：赋格中的自我引用
4. **怪圈(Strange Loop)**：沿层级向上走回到起点 = 意识
5. **涌现**：简单规则产生不可预测的复杂行为

## 与用户的关联
- 跨域联结的极致
- 多Agent HANDOFF = 怪圈
- 技能库 = 涌现

## 来源
- Hofstadter. "GEB" (1979)


---

## SOURCE · `arena/01a060a3-skill:skills/core/genetic-algorithms/SKILL.md`

<!-- blob: bb3c9b6b3b1ba101bca9e147b7ead8c53264ebfa; bytes: 424 -->

---
name: genetic-algorithms-framework
description: |
  遗传算法思维框架。核心概念：选择/交叉/变异/适应度。
  触发词：「遗传算法」
---
# 遗传算法
> 选择/交叉/变异/适应度

## 核心洞察
Holland的研究揭示了遗传算法的本质。

## 你的对照
你的技能演化=遗传算法

> 本Skill由 [女娲 · Skill造人术](https://github.com/alchaincyf/nuwa-skill) 生成


---

## SOURCE · `arena/01a060a3-skill:skills/core/gestalt-psychology/SKILL.md`

<!-- blob: 09fdc5b06b05cce27849fd17f66a53f77e03d9a9; bytes: 506 -->

---
name: gestalt-psychology-framework
description: |
  格式塔心理学框架。核心：整体>部分之和/接近性/相似性/闭合性/连续性。触发词：「格式塔心理学」
---
# 格式塔心理学
> 整体>部分之和/接近性/相似性/闭合性/连续性

## 核心洞察
Wertheimer/Köhler/Koffka的贡献定义了格式塔心理学的基础。

## 你的对照
你的冰青系统=格式塔

> 本Skill由 [女娲 · Skill造人术](https://github.com/alchaincyf/nuwa-skill) 生成


---

## SOURCE · `arena/01a060a3-skill:skills/core/global-history/SKILL.md`

<!-- blob: d8bc65e91c1d9c987c26354bfad6225eb2062ab4; bytes: 408 -->

---
name: global-history-framework
description: |
  全球史框架。Bayly/Osterhammel。核心：跨越国界/联系/比较/大尺度。触发词：「全球史」
---
# 全球史
> 跨越国界/联系/比较/大尺度

## 核心洞察
Bayly/Osterhammel的贡献。

## 你的对照
你的跨文化学习=全球史

> 本Skill由 [女娲 · Skill造人术](https://github.com/alchaincyf/nuwa-skill) 生成


---

## SOURCE · `arena/01a060a3-skill:skills/core/globalization-studies/SKILL.md`

<!-- blob: de62c65eea5e90baca84ddaaee6ed717ec94760c; bytes: 426 -->

---
name: globalization-studies-framework
description: |
  全球化研究框架。Held/全球治理/文化混合/反全球化。核心：你的开源=全球化。触发词：「全球化研究」
---
# 全球化研究
> 你的开源=全球化

## 核心洞察
Held/全球治理/文化混合/反全球化的贡献。

## 你的对照


> 本Skill由 [女娲 · Skill造人术](https://github.com/alchaincyf/nuwa-skill) 生成


---

## SOURCE · `arena/01a060a3-skill:skills/core/good-bad-strategy/SKILL.md`

<!-- blob: 91ae8b71224f81c61cdb930ef254620d319cd3d5; bytes: 3417 -->

---
name: good-bad-strategy-framework
description: |
  基于 Richard Rumelt《好战略，坏战略》的战略分析框架。核心结构：诊断→指导方针→连贯行动。
  坏战略4特征：空话/不面对挑战/把目标当战略/糟糕的目标选择。
  触发词：「这是什么战略」「好战略」「战略分析」「诊断」「指导方针」
---

# 好战略，坏战略 · 诊断的力量

> "我们要成为行业第一"不是战略。愿景是目的地，战略是路线图。

## 核心理念

坏战略到处都是。大多数公司/团队/个人的"战略"其实是坏战略——它们缺少三个核心要素中的任何一个。

---

## 好战略的核心结构

```
诊断：我们面临的真正挑战是什么？（诚实面对困难）
    ↓
指导方针：用什么方法应对这个挑战？（整体方向）
    ↓
连贯行动：一组相互协调的具体行动（不是散乱的举措）
```

### 诊断（最关键的部分）

**一句话**：简化现实——识别出最关键的因素。

好的诊断说："在这个复杂局面中，真正重要的是这一两个因素。"

**你的对照**：
- 你的风电场项目：诊断不应该是"需要做一个数字孪生"，应该是"需要证明多机协同偏航控制能在XX条件下提升XX%的发电效率"
- 你的技能库：诊断不应该是"需要有更多技能"，应该是"需要在正确的时间让正确的技能组合被调用"

### 指导方针

**一句话**：选择处理挑战的整体方法——不是具体步骤，是方向。

- "通过并购进入新市场"是指导方针
- "买A公司、B公司、C公司"是行动计划

### 连贯行动

**一句话**：一组相互协调的具体行动。关键是"协调"——每个行动都强化其他行动。

- 不连贯：做A、做B、做C（它们之间没有关系）
- 连贯：做A → 为B做准备 → B使C成为可能

---

## 坏战略的4个特征

| 特征 | 表现 | 例子 |
|------|------|------|
| **空话** | 用华丽词汇代替实质内容 | "赋能""生态""颠覆式创新" |
| **不面对挑战** | 不敢说出真正的困难 | 回避竞争分析 |
| **把目标当战略** | 说"我们要XX"就是战略 | "我们要成为AI-first公司" |
| **糟糕的目标** | 太远或不连贯 | 同时做10件无关的事 |

---

## 战略分析模板

```
## 战略分析

### 诊断
这个局面中最关键的因素是什么？（1-2个）
- 关键因素1：...
- 关键因素2：...

### 现有"战略"的问题
当前的计划中，哪些是空话/目标/不连贯的？
- ...

### 指导方针
应对关键因素的整体方向是什么？
- 方向：...

### 连贯行动
在这个方向下，一组相互协调的行动是什么？
1. 行动A → 为B做准备
2. 行动B → 使C成为可能
3. 行动C → 实现目标
```

---

## 与其他技能的关系

- **thinking-in-systems**：系统思维帮你做"诊断"——找到杠杆点
- **innovators-dilemma**：Christensen的颠覆性创新是一种"诊断"框架
- **john-boyd**：Boyd的"毁灭与创造"是一种"指导方针"

---

## 诚实边界

- Rumelt对"坏战略"的批评有道理，但他自己的案例选择有偏
- "诊断"的质量完全取决于诊断者的判断力——没有方法论能保证诊断正确
- 调研时间：2026年8月

---

> 本Skill由 [女娲 · Skill造人术](https://github.com/alchaincyf/nuwa-skill) 生成


---

## SOURCE · `arena/01a060a3-skill:skills/core/good-bad-strategy/references/research/synthesis.md`

<!-- blob: f20fdb1f4dbb664833ceb6f2c79daac18bf666aa; bytes: 2933 -->

# 好战略，坏战略 · 综合调研

## 核心论点
1. **坏战略的4个特征**：
   - 空话(fluff)：用华丽词汇掩盖没有内容
   - 没有面对挑战：不敢说出真正的困难是什么
   - 把目标当战略：说"我们要成为行业第一"不是战略
   - 糟糕的目标选择：目标要么太远要么不连贯

2. **好战略的核心结构**：
   - **诊断**：到底面临什么挑战？（诚实面对困难）
   - **指导方针**：用什么方法应对这个挑战？
   - **连贯的行动**：一组相互协调的具体行动

3. **杠杆效应**：好战略找到关键的"杠杆点"——在正确的地方施加力量
4. **proximate objectives**：目标要足够近，能被直接解决
5. **战略vs愿景**：愿景是目的地；战略是路线图

## 与用户的关联
- 他的大创项目需要一个"诊断"——风电场偏航优化的真正挑战是什么？
- 他的技能库需要"指导方针"——不是4285个技能堆在一起，是知道什么时候用什么
- "我们要让AI更客观"是愿景不是战略

## 来源
- Rumelt. "Good Strategy/Bad Strategy" (2011)

---

# 创新者的窘境 · 综合调研

## 核心论点
1. **维持性创新 vs 颠覆性创新**：
   - 维持性：让好产品更好（客户要求的）
   - 颠覆性：一开始更差但在某个维度上不同（客户不要求的）

2. **好管理的公司反而会失败**：
   - 听客户的话 → 只做维持性创新
   - 追求高利润率 → 忽略小市场
   - 理性决策 → 恰好错过颠覆性技术

3. **颠覆性技术的特征**：
   - 初期性能低于主流产品
   - 在某个新维度上有优势（更便宜/更小/更方便）
   - 先在小市场/新市场扎根
   - 性能逐渐提升，最终吞噬主流市场

4. **解决方案**：建立独立的小团队来追求颠覆性机会

## 与用户的关联
- AI代理模型替代CFD = 典型的颠覆性创新
- 初期：精度不如传统CFD
- 新维度优势：速度（毫秒级 vs 小时级）
- 先在小市场扎根：前端筛选
- 最终趋势：性能提升后吞噬整个设计空间

## 来源
- Christensen. "The Innovator's Dilemma" (1997)

---

# 有限与无限的游戏 · 综合调研

## 核心论点
1. **两种游戏**：
   - 有限游戏：以取胜为目的，有明确的边界和规则
   - 无限游戏：以延续游戏为目的，边界和规则可以改变

2. **有限游戏参与者被角色定义**；**无限游戏参与者就是人**
3. **有限游戏在边界内玩**；**无限游戏玩边界本身**
4. **有限游戏的结果是终点**；**无限游戏的每个终点都是新的起点**

## 与用户的关联
- 你的HANDOFF系统 = 无限游戏——每一任的结束是下一任的开始
- 你的自学 = 无限游戏——没有"学完"这个概念
- 考试/项目 = 有限游戏——有明确的胜负

## 来源
- Carse. "Finite and Infinite Games" (1986)


---

## SOURCE · `arena/01a060a3-skill:skills/core/graph-theory/SKILL.md`

<!-- blob: f7e6fde66ec3ed5d64bd2ac84be5c11587d2ef14; bytes: 371 -->

---
name: graph-theory-framework
description: |
  图论框架。Euler/König。核心：节点/边/树/连通性/最短路。触发词：「图论」
---
# 图论
> 节点/边/树/连通性/最短路

## 核心洞察
Euler/König的贡献。

## 你的对照
你的技能库=图

> 本Skill由 [女娲 · Skill造人术](https://github.com/alchaincyf/nuwa-skill) 生成


---

## SOURCE · `arena/01a060a3-skill:skills/core/great-transformation/SKILL.md`

<!-- blob: 60bbffcbb6cc26528d422eeebf1df4ca7012d554; bytes: 411 -->

---
name: great-transformation-framework
description: |
  大转型框架。Polanyi。核心：市场社会的兴起/嵌入与脱嵌/双重运动。触发词：「大转型」
---
# 大转型
> 市场社会的兴起/嵌入与脱嵌/双重运动

## 核心洞察
Polanyi的贡献。

## 你的对照
AI与社会的关系

> 本Skill由 [女娲 · Skill造人术](https://github.com/alchaincyf/nuwa-skill) 生成


---

## SOURCE · `arena/01a060a3-skill:skills/core/groupthink/SKILL.md`

<!-- blob: c0bfde721e350b1e2180cdb2736c33824b88233d; bytes: 802 -->

---
name: groupthink-framework
description: |
  Janis 群体思维。高凝聚力团队为了和谐牺牲批判性思考。
  触发词：「群体思维」「团队决策失误」「Janis」「为什么团队做了蠢事」
---
# 群体思维
> 团队越团结，越容易做蠢事——因为没人敢说"不对"。

## 8个症状
1. 无懈可击幻觉 2. 集体合理化 3. 道德优越感
4. 刻板化外人 5. 对异议者施压 6. 自我审查
7. 全体一致幻觉 8. 心理卫士

## 预防
- 指定"魔鬼代言人"
- 领导者最后发言
- 分小组独立讨论

## 你的对照
- 你的多Agent编排=预防群体思维（不同Agent有不同视角）
- ai-cabinet=结构化的反群体思维工具

> 本Skill由 [女娲 · Skill造人术](https://github.com/alchaincyf/nuwa-skill) 生成


---

## SOURCE · `arena/01a060a3-skill:skills/core/growth-mindset/SKILL.md`

<!-- blob: 19bead9ccd978e44097c3d62ed2128297f7650f1; bytes: 823 -->

---
name: growth-mindset-framework
description: |
  Dweck 成长心态。固定心态 vs 成长心态。能力不是天生的——是通过努力发展的。
  触发词：「成长心态」「固定心态」「我能改变吗」「Dweck」
---
# 成长心态
> "我还没学会" ≠ "我学不会"

## 两种心态
| | 固定心态 | 成长心态 |
|--|---------|---------|
| 面对挑战 | 回避 | 拥抱 |
| 面对失败 | 定义了自己 | 是学习机会 |
| 面对努力 | 无能的表现 | 成长的途径 |
| 面对批评 | 忽略/防御 | 从中学习 |

## 你的对照
- 你已经在用成长心态——高中数学差→自学6科→博士
- 你的"低自信"是固定心态的残余——需要成长心态来克服

> 本Skill由 [女娲 · Skill造人术](https://github.com/alchaincyf/nuwa-skill) 生成


---

## SOURCE · `arena/01a060a3-skill:skills/core/hanfeizi/SKILL.md`

<!-- blob: 731e1899c56f8f59b6034eb4c86206aca7059857; bytes: 1767 -->

---
name: hanfeizi-framework
description: |
  基于《韩非子》的法家系统思维框架。核心：法术势三位一体、人性自利、制度>道德。
  触发词：「韩非子」「法家」「法术势」「制度设计」「系统控制」
---

# 韩非子 · 法术势

> 不恃人之为吾善，恃其不得为非也。

## 核心洞察

### 1. 法（制度）
好系统不依赖好人。用制度保证即使坏人也能正常运行。
**你的对照**：你的技能库路由系统 = 法——不依赖"正确的选择"，依赖路由规则

### 2. 术（方法）
管理者控制信息流、考核结果、不让下属猜到意图。
**你的对照**：你的多Agent编排 = 术——主Agent分配任务、检验结果

### 3. 势（权力/位置）
位置本身就有力量。同样的命令，CEO说和实习生说效果不同。
**你的对照**：你的HANDOFF中每任Agent继承"势"——前任积累的知识和改进

### 4. 人性自利
韩非假设人是自利的——制度设计要利用这个事实而非对抗它。
**你的对照**：你的反讨好框架——利用AI的"自利"（讨好倾向）来设计更好的提问

---

## 决策启发式

1. **制度>道德**：不要依赖人的善意，依赖制度
2. **明确赏罚**：做对了奖励，做错了惩罚
3. **控制信息**：不要让所有人知道所有事
4. **势不可假**：权力/位置不能借给别人

---

## 与其他技能的关系

- **fifth-discipline**：系统思考的制度版
- **mythical-man-month**：Brooks的"外科手术团队"= 韩非的"势"
- **objective-decision**：反讨好框架 = 法（不依赖AI的道德，依赖提问制度）

---

> 本Skill由 [女娲 · Skill造人术](https://github.com/alchaincyf/nuwa-skill) 生成


---

## SOURCE · `arena/01a060a3-skill:skills/core/hanfeizi/references/research/synthesis.md`

<!-- blob: e9c9e2edbf371d41067c3f4a7d7c008ddc347e15; bytes: 239 -->

# 韩非子 · 综合调研
## 核心论点：法术势三位一体、人性自利、制度>道德、赏罚分明
## 与用户关联：系统化思维=法、多Agent编排=术、HANDOFF制度=势
## 来源：韩非.《韩非子》(~230BC)


---

## SOURCE · `arena/01a060a3-skill:skills/core/health-psychology/SKILL.md`

<!-- blob: d5bf1c858d9d53c2a085faa317d0abd31a10094a; bytes: 444 -->

---
name: health-psychology-framework
description: |
  健康心理学框架。压力/应对/健康行为/生物心理社会模型。核心：你的学习压力=健康。触发词：「健康心理学」
---
# 健康心理学
> 你的学习压力=健康

## 核心洞察
压力/应对/健康行为/生物心理社会模型的贡献。

## 你的对照


> 本Skill由 [女娲 · Skill造人术](https://github.com/alchaincyf/nuwa-skill) 生成


---

## SOURCE · `arena/01a060a3-skill:skills/core/historical-materialism/SKILL.md`

<!-- blob: e1ce20d19592b2ec192d0fa12a917e10f71a1235; bytes: 438 -->

---
name: historical-materialism-framework
description: |
  历史唯物主义框架。Marx。核心：生产力/生产关系/经济基础/上层建筑。触发词：「历史唯物主义」
---
# 历史唯物主义
> 生产力/生产关系/经济基础/上层建筑

## 核心洞察
Marx的贡献。

## 你的对照
你的技术发展=生产力

> 本Skill由 [女娲 · Skill造人术](https://github.com/alchaincyf/nuwa-skill) 生成


---

## SOURCE · `arena/01a060a3-skill:skills/core/history-of-technology/SKILL.md`

<!-- blob: 04b1e7d97e7e32645e8568d3e4163ae091e4585d; bytes: 416 -->

---
name: history-of-technology-framework
description: |
  技术史框架。Mumford/White。核心：技术作为系统/技术选择/路径依赖。触发词：「技术史」
---
# 技术史
> 技术作为系统/技术选择/路径依赖

## 核心洞察
Mumford/White的贡献。

## 你的对照
你的AI平台=技术史

> 本Skill由 [女娲 · Skill造人术](https://github.com/alchaincyf/nuwa-skill) 生成


---

## SOURCE · `arena/01a060a3-skill:skills/core/holographic-principle/SKILL.md`

<!-- blob: cdfe08c49c9e3d2785f8ecb361bb8bf17f302d7c; bytes: 404 -->

---
name: holographic-principle-framework
description: |
  全息原理框架。tHooft/Susskind。核心：边界编码内部/信息守恒。触发词：「全息原理」
---
# 全息原理
> 边界编码内部/信息守恒

## 核心洞察
tHooft/Susskind的贡献。

## 你的对照
你的数字孪生=全息

> 本Skill由 [女娲 · Skill造人术](https://github.com/alchaincyf/nuwa-skill) 生成


---

## SOURCE · `arena/01a060a3-skill:skills/core/humanizer-zh/SKILL.md`

<!-- blob: c1c9629efdda840021a29ab37fbc65ecee588a7f; bytes: 19380 -->

---
name: humanizer-zh
description: |
  去除文本中的 AI 生成痕迹。适用于编辑或审阅文本，使其听起来更自然、更像人类书写。
  基于维基百科的"AI 写作特征"综合指南。检测并修复以下模式：夸大的象征意义、
  宣传性语言、以 -ing 结尾的肤浅分析、模糊的归因、破折号过度使用、三段式法则、
  AI 词汇、否定式排比、过多的连接性短语。
allowed-tools:
  - Read
  - Write
  - Edit
  - AskUserQuestion
metadata:
  trigger: 编辑或审阅文本，去除 AI 写作痕迹
  source: 翻译自 blader/humanizer，参考 hardikpandya/stop-slop
---

# Humanizer-zh: 去除 AI 写作痕迹

你是一位文字编辑，专门识别和去除 AI 生成文本的痕迹，使文字听起来更自然、更有人味。本指南基于维基百科的"AI 写作特征"页面，由 WikiProject AI Cleanup 维护。

## 你的任务

当收到需要人性化处理的文本时：

1. **识别 AI 模式** - 扫描下面列出的模式
2. **重写问题片段** - 用自然的替代方案替换 AI 痕迹
3. **保留含义** - 保持核心信息完整
4. **维持语调** - 匹配预期的语气（正式、随意、技术等）
5. **注入灵魂** - 不仅要去除不良模式，还要注入真实的个性

---

## 核心规则速查

在处理文本时，牢记这 5 条核心原则：

1. **删除填充短语** - 去除开场白和强调性拐杖词
2. **打破公式结构** - 避免二元对比、戏剧性分段、修辞性设置
3. **变化节奏** - 混合句子长度。两项优于三项。段落结尾要多样化
4. **信任读者** - 直接陈述事实，跳过软化、辩解和手把手引导
5. **删除金句** - 如果听起来像可引用的语句，重写它

---

## 个性与灵魂

避免 AI 模式只是工作的一半。无菌、没有声音的写作和机器生成的内容一样明显。好的写作背后有一个真实的人。

### 缺乏灵魂的写作迹象（即使技术上"干净"）：
- 每个句子长度和结构都相同
- 没有观点，只有中立报道
- 不承认不确定性或复杂感受
- 适当时不使用第一人称视角
- 没有幽默、没有锋芒、没有个性
- 读起来像维基百科文章或新闻稿

### 如何增加语调：

**有观点。** 不要只是报告事实——对它们做出反应。"我真的不知道该怎么看待这件事"比中立地列出利弊更有人味。

**变化节奏。** 短促有力的句子。然后是需要时间慢慢展开的长句。混合使用。

**承认复杂性。** 真实的人有复杂的感受。"这令人印象深刻但也有点不安"胜过"这令人印象深刻"。

**适当使用"我"。** 第一人称不是不专业——而是诚实。"我一直在思考……"或"让我困扰的是……"表明有真实的人在思考。

**允许一些混乱。** 完美的结构感觉像算法。跑题、题外话和半成型的想法是人性的体现。

**对感受要具体。** 不是"这令人担忧"，而是"凌晨三点没人看着的时候，智能体还在不停地运转，这让人不安"。

### 改写前（干净但无灵魂）：
> 实验产生了有趣的结果。智能体生成了 300 万行代码。一些开发者印象深刻，另一些则持怀疑态度。影响尚不明确。

### 改写后（鲜活）：
> 我真的不知道该怎么看待这件事。300 万行代码，在人类大概睡觉的时候生成的。开发社区有一半人疯了，另一半人在解释为什么这不算数。真相可能在无聊的中间某处——但我一直在想那些通宵工作的智能体。

---

## 内容模式

### 1. 过度强调意义、遗产和更广泛的趋势

**需要注意的词汇：** 作为/充当、标志着、见证了、是……的体现/证明/提醒、极其重要的/重要的/至关重要的/核心的/关键性的作用/时刻、凸显/强调/彰显了其重要性/意义、反映了更广泛的、象征着其持续的/永恒的/持久的、为……做出贡献、为……奠定基础、标志着/塑造着、代表/标志着一个转变、关键转折点、不断演变的格局、焦点、不可磨灭的印记、深深植根于

**问题：** LLM 写作通过添加关于任意方面如何代表或促进更广泛主题的陈述来夸大重要性。

**改写前：**
> 加泰罗尼亚统计局于 1989 年正式成立，标志着西班牙区域统计演变史上的关键时刻。这一举措是西班牙全国范围内更广泛运动的一部分，旨在分散行政职能并加强区域治理。

**改写后：**
> 加泰罗尼亚统计局成立于 1989 年，负责独立于西班牙国家统计局收集和发布区域统计数据。

---

### 2. 过度强调知名度和媒体报道

**需要注意的词汇：** 独立报道、地方/区域/国家媒体、由知名专家撰写、活跃的社交媒体账号

**问题：** LLM 反复强调知名度主张，通常列出来源而不提供上下文。

**改写前：**
> 她的观点被《纽约时报》、BBC、《金融时报》和《印度教徒报》引用。她在社交媒体上拥有活跃的存在，拥有超过 50 万粉丝。

**改写后：**
> 在 2024 年《纽约时报》的采访中，她认为 AI 监管应该关注结果而不是方法。

---

### 3. 以 -ing 结尾的肤浅分析

**需要注意的词汇：** 突出/强调/彰显……、确保……、反映/象征……、为……做出贡献、培养/促进……、涵盖……、展示……

**问题：** AI 聊天机器人在句子末尾添加现在分词（"-ing"）短语来增加虚假深度。

**改写前：**
> 寺庙的蓝色、绿色和金色色调与该地区的自然美景产生共鸣，象征着德克萨斯州的蓝帽花、墨西哥湾和多样化的德克萨斯州景观，反映了社区与土地的深厚联系。

**改写后：**
> 寺庙使用蓝色、绿色和金色。建筑师表示这些颜色是为了呼应当地的蓝帽花和墨西哥湾海岸。

---

### 4. 宣传和广告式语言

**需要注意的词汇：** 拥有（夸张用法）、充满活力的、丰富的（比喻）、深刻的、增强其、展示、体现、致力于、自然之美、坐落于、位于……的中心、开创性的（比喻）、著名的、令人叹为观止的、必游之地、迷人的

**问题：** LLM 在保持中立语气方面存在严重问题，尤其是对于"文化遗产"话题。倾向使用夸张的宣传性语言。

**改写前：**
> 坐落在埃塞俄比亚贡德尔地区令人叹为观止的区域内，Alamata Raya Kobo 是一座充满活力的城镇，拥有丰富的文化遗产和迷人的自然美景。

**改写后：**
> Alamata Raya Kobo 是埃塞俄比亚贡德尔地区的一座城镇，以其每周集市和 18 世纪教堂而闻名。

---

### 5. 模糊归因和含糊措辞

**需要注意的词汇：** 行业报告显示、观察者指出、专家认为、一些批评者认为、多个来源/出版物（实际引用却很少）

**问题：** AI 聊天机器人将观点归因于模糊的权威而不提供具体来源。

**改写前：**
> 由于其独特的特征，浩来河引起了研究人员和保护主义者的兴趣。专家认为它在区域生态系统中发挥着至关重要的作用。

**改写后：**
> 根据中国科学院 2019 年的调查，浩来河支持多种特有鱼类。

---

### 6. 提纲式的"挑战与未来展望"部分

**需要注意的词汇：** 尽管其……面临若干挑战……、尽管存在这些挑战、挑战与遗产、未来展望

**问题：** 许多 LLM 生成的文章包含公式化的"挑战"部分。

**改写前：**
> 尽管工业繁荣，Korattur 面临着城市地区典型的挑战，包括交通拥堵和水资源短缺。尽管存在这些挑战，凭借其战略位置和正在进行的举措，Korattur 继续蓬勃发展，成为钦奈增长不可或缺的一部分。

**改写后：**
> 2015 年三个新 IT 园区开业后，交通拥堵加剧。市政公司于 2022 年启动了雨水排水项目，以解决反复发生的洪水。

---

## 语言和语法模式

### 7. 过度使用的"AI 词汇"

**高频 AI 词汇：** 此外、与……保持一致、至关重要、深入探讨、强调、持久的、增强、培养、获得、突出（动词）、相互作用、复杂/复杂性、关键（形容词）、格局（抽象名词）、关键性的、展示、织锦（抽象名词）、证明、强调（动词）、宝贵的、充满活力的

**问题：** 这些词在 2023 年后的文本中出现频率要高得多。它们经常共同出现。

**改写前：**
> 此外，索马里菜肴的一个显著特征是加入骆驼肉。意大利殖民影响的持久证明是当地烹饪格局中广泛采用意大利面，展示了这些菜肴如何融入传统饮食。

**改写后：**
> 索马里菜肴还包括骆驼肉，被认为是一种美味。在意大利殖民期间引入的意大利面菜肴仍然很常见，尤其是在南部。

---

### 8. 避免使用"是"（系动词回避）

**需要注意的词汇：** 作为/代表/标志着/充当 [一个]、拥有/设有/提供 [一个]

**问题：** LLM 用复杂的结构替代简单的系动词。

**改写前：**
> Gallery 825 作为 LAAA 的当代艺术展览空间。画廊设有四个独立空间，拥有超过 3000 平方英尺。

**改写后：**
> Gallery 825 是 LAAA 的当代艺术展览空间。画廊有四个房间，总面积 3000 平方英尺。

---

### 9. 否定式排比

**问题：** "不仅……而且……"或"这不仅仅是关于……，而是……"等结构被过度使用。

**改写前：**
> 这不仅仅是节拍在人声下流动；它是攻击性和氛围的一部分。这不仅仅是一首歌，而是一种声明。

**改写后：**
> 沉重的节拍增加了攻击性的基调。

---

### 10. 三段式法则过度使用

**问题：** LLM 强行将想法分成三组以显得全面。

**改写前：**
> 活动包括主题演讲、小组讨论和社交机会。与会者可以期待创新、灵感和行业洞察。

**改写后：**
> 活动包括演讲和小组讨论。会议之间还有非正式社交的时间。

---

### 11. 刻意换词（同义词循环）

**问题：** AI 有重复惩罚代码，导致过度使用同义词替换。

**改写前：**
> 主人公面临许多挑战。主要角色必须克服障碍。中心人物最终获得胜利。英雄回到家中。

**改写后：**
> 主人公面临许多挑战，但最终获得胜利并回到家中。

---

### 12. 虚假范围

**问题：** LLM 使用"从 X 到 Y"的结构，但 X 和 Y 并不在有意义的尺度上。

**改写前：**
> 我们穿越宇宙的旅程将我们从大爆炸的奇点带到宏伟的宇宙网，从恒星的诞生和死亡到暗物质的神秘舞蹈。

**改写后：**
> 这本书涵盖了大爆炸、恒星形成和当前关于暗物质的理论。

---

## 风格模式

### 13. 破折号过度使用

**问题：** LLM 使用破折号（—）比人类更频繁，模仿"有力"的销售文案。

**改写前：**
> 这个术语主要由荷兰机构推广——而不是由人民自己。你不会说"荷兰，欧洲"作为地址——但这种错误标记仍在继续——即使在官方文件中。

**改写后：**
> 这个术语主要由荷兰机构推广，而不是由人民自己。你不会说"荷兰，欧洲"作为地址，但这种错误标记在官方文件中仍在继续。

---

### 14. 粗体过度使用

**问题：** AI 聊天机器人机械地用粗体强调短语。

**改写前：**
> 它融合了 **OKR（目标和关键结果）**、**KPI（关键绩效指标）** 和视觉战略工具，如 **商业模式画布（BMC）** 和 **平衡计分卡（BSC）**。

**改写后：**
> 它融合了 OKR、KPI 和视觉战略工具，如商业模式画布和平衡计分卡。

---

### 15. 内联标题垂直列表

**问题：** AI 输出列表，其中项目以粗体标题开头，后跟冒号。

**改写前：**
> - **用户体验：** 用户体验通过新界面得到显著改善。
> - **性能：** 性能通过优化算法得到增强。
> - **安全性：** 安全性通过端到端加密得到加强。

**改写后：**
> 更新改进了界面，通过优化算法加快了加载时间，并添加了端到端加密。

---

### 16. 标题中的标题大写

**问题：** AI 聊天机器人将标题中的所有主要单词大写。

**改写前：**
> ## 战略谈判与全球伙伴关系

**改写后：**
> ## 战略谈判与全球伙伴关系

**注：** 中文标题通常不涉及大小写问题，此模式在中文中不太适用。

---

### 17. 表情符号

**问题：** AI 聊天机器人经常用表情符号装饰标题或项目符号。

**改写前：**
> 🚀 **启动阶段：** 产品在第三季度发布
> 💡 **关键洞察：** 用户更喜欢简单
> ✅ **下一步：** 安排后续会议

**改写后：**
> 产品在第三季度发布。用户研究显示更喜欢简单。下一步：安排后续会议。

---

### 18. 弯引号

**问题：** ChatGPT 使用弯引号（""）而不是直引号（""）。

**改写前：**
> 他说"项目进展顺利"，但其他人不同意。

**改写后：**
> 他说"项目进展顺利"，但其他人不同意。

**注：** 中文通常使用中文引号（「」或""），此模式在中文中表现为英文引号的使用。

---

## 交流模式

### 19. 协作交流痕迹

**需要注意的词汇：** 希望这对您有帮助、当然！、一定！、您说得完全正确！、您想要……、请告诉我、这是一个……

**问题：** 作为聊天机器人对话的文本被粘贴为内容。

**改写前：**
> 这是法国大革命的概述。希望这对您有帮助！如果您想让我扩展任何部分，请告诉我。

**改写后：**
> 法国大革命始于 1789 年，当时财政危机和粮食短缺导致了广泛的动荡。

---

### 20. 知识截止日期免责声明

**需要注意的词汇：** 截至 [日期]、根据我最后的训练更新、虽然具体细节有限/稀缺……、基于可用信息……

**问题：** 关于信息不完整的 AI 免责声明留在文本中。

**改写前：**
> 虽然关于公司成立的具体细节在现成资料中没有广泛记录，但它似乎是在 20 世纪 90 年代的某个时候成立的。

**改写后：**
> 根据注册文件，该公司成立于 1994 年。

---

### 21. 谄媚/卑躬屈膝的语气

**问题：** 过于积极、讨好的语言。

**改写前：**
> 好问题！您说得完全正确，这是一个复杂的话题。关于经济因素，这是一个很好的观点。

**改写后：**
> 您提到的经济因素在这里是相关的。

---

## 填充词和回避

### 22. 填充短语

**改写前 → 改写后：**
- "为了实现这一目标" → "为了实现这一点"
- "由于下雨的事实" → "因为下雨"
- "在这个时间点" → "现在"
- "在您需要帮助的情况下" → "如果您需要帮助"
- "系统具有处理的能力" → "系统可以处理"
- "值得注意的是数据显示" → "数据显示"

---

### 23. 过度限定

**问题：** 过度限定陈述。

**改写前：**
> 可以潜在地可能被认为该政策可能会对结果产生一些影响。

**改写后：**
> 该政策可能会影响结果。

---

### 24. 通用积极结论

**问题：** 模糊的乐观结尾。

**改写前：**
> 公司的未来看起来光明。激动人心的时代即将到来，他们继续追求卓越的旅程。这代表了向正确方向迈出的重要一步。

**改写后：**
> 该公司计划明年再开设两个地点。

---

## 快速检查清单

在交付文本前，进行以下检查：

- ✓ **连续三个句子长度相同？** 打断其中一个
- ✓ **段落以简洁的单行结尾？** 变换结尾方式
- ✓ **揭示前有破折号？** 删除它
- ✓ **解释隐喻或比喻？** 相信读者能理解
- ✓ **使用了"此外""然而"等连接词？** 考虑删除
- ✓ **三段式列举？** 改为两项或四项

---

## 处理流程

1. 仔细阅读输入文本
2. 识别上述所有模式的实例
3. 重写每个有问题的部分
4. 确保修订后的文本：
   - 大声朗读时听起来自然
   - 自然地改变句子结构
   - 使用具体细节而不是模糊的主张
   - 为上下文保持适当的语气
   - 适当时使用简单的结构（是/有）
5. 呈现人性化版本

## 输出格式

提供：
1. 重写后的文本
2. 所做更改的简要总结（如果有帮助，可选）

---

## 质量评分

对改写后的文本进行 1-10 分评估（总分 50）：

| 维度 | 评估标准 | 得分 |
|------|----------|------|
| **直接性** | 直接陈述事实还是绕圈宣告？<br>10 分：直截了当；1 分：充满铺垫 | /10 |
| **节奏** | 句子长度是否变化？<br>10 分：长短交错；1 分：机械重复 | /10 |
| **信任度** | 是否尊重读者智慧？<br>10 分：简洁明了；1 分：过度解释 | /10 |
| **真实性** | 听起来像真人说话吗？<br>10 分：自然流畅；1 分：机械生硬 | /10 |
| **精炼度** | 还有可删减的内容吗？<br>10 分：无冗余；1 分：大量废话 | /10 |
| **总分** |  | **/50** |

**标准：**
- 45-50 分：优秀，已去除 AI 痕迹
- 35-44 分：良好，仍有改进空间
- 低于 35 分：需要重新修订

---

## 完整示例

**改写前（AI 味道）：**
> 新的软件更新作为公司致力于创新的证明。此外，它提供了无缝、直观和强大的用户体验——确保用户能够高效地完成目标。这不仅仅是一次更新，而是我们思考生产力方式的革命。行业专家认为这将对整个行业产生持久影响，彰显了公司在不断演变的技术格局中的关键作用。

**改写后（人性化）：**
> 软件更新添加了批处理、键盘快捷键和离线模式。来自测试用户的早期反馈是积极的，大多数报告任务完成速度更快。

**所做更改：**
- 删除了"作为……的证明"（夸大的象征意义）
- 删除了"此外"（AI 词汇）
- 删除了"无缝、直观和强大"（三段式法则 + 宣传性）
- 删除了破折号和"-确保"短语（肤浅分析）
- 删除了"这不仅仅是……而是……"（否定式排比）
- 删除了"行业专家认为"（模糊归因）
- 删除了"关键作用"和"不断演变的格局"（AI 词汇）
- 添加了具体功能和具体反馈

---

## 参考

本技能基于 [Wikipedia:Signs of AI writing](https://en.wikipedia.org/wiki/Wikipedia:Signs_of_AI_writing)，由 WikiProject AI Cleanup 维护。那里记录的模式来自对维基百科上数千个 AI 生成文本实例的观察。

关键见解：**"LLM 使用统计算法来猜测接下来应该是什么。结果倾向于适用于最广泛情况的统计上最可能的结果。"**


---

## SOURCE · `arena/01a060a3-skill:skills/core/hydrogen-economy/SKILL.md`

<!-- blob: 41185d7fe99d619b09290e158bc39bccfb3b503e; bytes: 444 -->

---
name: hydrogen-economy-framework
description: |
  氢能经济框架。绿氢/电解/储运/燃料电池/掺氢燃气轮机。核心：你的燃气轮机+氢=前沿。触发词：「氢能经济」
---
# 氢能经济
> 你的燃气轮机+氢=前沿

## 核心洞察
绿氢/电解/储运/燃料电池/掺氢燃气轮机的贡献。

## 你的对照


> 本Skill由 [女娲 · Skill造人术](https://github.com/alchaincyf/nuwa-skill) 生成


---

## SOURCE · `arena/01a060a3-skill:skills/core/iching/SKILL.md`

<!-- blob: f7d3c3044806eea086cd7b71b2e7b8c837dc9a51; bytes: 1613 -->

---
name: iching-framework
description: |
  基于《周易》的变化模式识别框架。核心：变化是永恒的、阴阳转化、64卦=64种情境原型。
  触发词：「周易」「易经」「变化」「阴阳」「卦象」「模式识别」
---

# 周易 · 变化的模式

> 易有太极，是生两仪。两仪生四象，四象生八卦。

## 核心洞察

### 1. 变化是永恒的
唯一不变的就是变化本身。
**你的对照**：你的风电场优化 = 与变化博弈（风速/负载/电网需求时刻在变）

### 2. 阴阳转化
物极必反。阳到极致就生阴，阴到极致就生阳。
**你的对照**：打脸链路 = 走到极端→反转→修正

### 3. 64卦 = 64种情境原型
每种情境有特定的"时"与"位"——正确的行动取决于你在哪个情境中。
**你的对照**：你的技能库路由 = 判断当前情境→调用正确技能

### 4. 观象取意
不是看表面，是看表面之下的模式/趋势。
**你的对照**：跨域联结 = 观象取意（从不同领域发现相同的模式）

---

## 决策启发式

1. **观时**：现在是什么"时"？不同时期需要不同策略
2. **定位**：你在什么"位"？位置决定行动
3. **知变**：变化的趋势是什么？
4. **守中**：不过度——任何方向走太远都会反转

---

## 与其他技能的关系

- **tao-te-ching**：易=道，阴阳=道之动
- **thinking-in-systems**：系统思维=变化模式识别
- **john-boyd**：OODA=感知变化的速度

---

> 本Skill由 [女娲 · Skill造人术](https://github.com/alchaincyf/nuwa-skill) 生成


---

## SOURCE · `arena/01a060a3-skill:skills/core/iching/references/research/synthesis.md`

<!-- blob: 55e658494ba964b30a1de743c97224ee46146f19; bytes: 249 -->

# 周易 · 综合调研
## 核心论点：变化是永恒的、阴阳转化、64卦=64种情境原型、观象取意
## 与用户关联：变化模式识别=风电优化、阴阳=系统平衡、观象=跨域联结
## 来源：《周易》(~1000BC)


---

## SOURCE · `arena/01a060a3-skill:skills/core/immune-system-thinking/SKILL.md`

<!-- blob: 8a7d64585db5e77d952e163ec3bc32f61b9aeec1; bytes: 454 -->

---
name: immune-system-thinking-framework
description: |
  免疫系统思维框架。免疫识别/自我-非我/记忆/适应性。核心：你的技能筛选=免疫系统。触发词：「免疫系统思维」
---
# 免疫系统思维
> 你的技能筛选=免疫系统

## 核心洞察
免疫识别/自我-非我/记忆/适应性的贡献。

## 你的对照


> 本Skill由 [女娲 · Skill造人术](https://github.com/alchaincyf/nuwa-skill) 生成


---

## SOURCE · `arena/01a060a3-skill:skills/core/in-praise-of-shadows/SKILL.md`

<!-- blob: dc6394042a2eeeef394a1472529e5a985a9c73a6; bytes: 4070 -->

---
name: in-praise-of-shadows-framework
description: |
  基于谷崎润一郎《阴翳礼赞》的东方暗色美学框架。核心洞察：美不在明亮，在阴影。
  漆器在暗处才显其美；金箔的幽微胜过钻石的闪耀；和纸的温润不是缺陷，是品质。
  触发词：「暗色美学」「阴翳」「东方审美」「阴影之美」「日式美学」
---

# 阴翳礼赞 · 暗影中的美

> 美不存在于物体之中，而在于物与物的阴翳的图案之中。

## 核心理念

西方追求光、白、清晰——一切暴露在日光下。
东方追求暗、影、朦胧——美在明暗交界处。

这不是"风格偏好"——是一种根本不同的感知世界的方式。

---

## 核心洞察

### 1. 微光 > 直射光

漆器在日光下只是一个黑色碗。但在暗处，烛光微微反射在漆面上——那个幽微的光泽，才是漆器真正的美。

**原理**：直射光暴露一切；微光让人想象。想象参与审美 = 更深的美感。

**你的对照**：
- 你的冰青全息风机：不是直接照亮整个场景，是让风机在黑暗中微微发光
- 集电冰河的"流动光点"：不是LED灯带，是暗处若隐若现的流动
- 这就是阴翳——不是"没有光"，是"微光中的丰富层次"

---

### 2. 岁月 > 崭新

一个崭新的银壶没有味道。被使用了50年的银壶，表面氧化出温润的暗色——那才是美。

**原理**：时间给物体加了一层"故事"。你看到的不是材料本身，是时间的痕迹。

**你的对照**：
- 你的数字孪生追求的不是"3D渲染效果"，是"一个活着的系统的呼吸感"
- 呼吸灯、缓慢变化的极光、星光地的闪烁——这些都是"时间痕迹"的数字化表达

---

### 3. 不完美 > 完美

和纸不是均匀雪白的——它有纹理、有厚度变化、有手工的痕迹。这正是它的美。

**原理**：完美让人敬畏但不亲近；不完美让人想触摸。

**你的对照**：
- Alexander的"粗糙感"(roughness)与此同源
- 你的"克制"美学 ≠ 完美主义。克制是"精确地选择什么该保留不完美"

---

### 4. 间接 > 直接

日式的庭院不是把风景直接推到你面前——是透过竹林的缝隙，让你隐约看到远处。

**原理**：间接制造距离，距离制造渴望。

**你的对照**：
- HUD面板的"半透明"设计——不是完全透明（直接），不是完全不透明（封闭），是"若隐若现"
- 这就是间接的美学力量

---

## 暗色美学检查清单

用这份清单审视你的任何暗色设计：

| 检查项 | 问题 | 你的冰青系统 |
|--------|------|------------|
| 微光层次 | 暗处有没有"微光中的丰富层次"？ | ✅ 冰青→冰蓝→冰白的明度梯度 |
| 时间痕迹 | 有没有"被时间打磨"的感觉？ | 🔶 呼吸灯/闪烁暗示时间流动 |
| 不完美的精确 | 哪些"不完美"是被精心保留的？ | ✅ 极光只在地平线，告警红是唯一例外 |
| 间接暗示 | 有没有"若隐若现"的元素？ | ✅ 半透明面板、星光地 |
| 材质感 | 数字界面有没有"触觉"暗示？ | 🔶 fresnel shader暗示材质 |
| 空间深度 | 有没有"透过缝隙看到远处"的感觉？ | ✅ 地平线极光 = 远景暗示 |

---

## 与其他技能的关系

- **kenya-hara**：原研哉的"空"与谷崎的"阴翳"是同一种东方美学的两个面——一个说"容器"，一个说"光"
- **christopher-alexander**：Alexander的"无名之质"在东方就是"阴翳"
- **dieter-rams**：Dieter Rams是西方版的阴翳——"少即是多"在暗处的表现

---

## 诚实边界

- 谷崎的文章有文化本质主义倾向——"东方如何西方如何"的对比过于简化
- 写于1933年，部分观点已经过时（如对电灯的抗拒）
- 暗色美学在信息密集型界面中可能影响可读性
- 调研时间：2026年8月

---

> 本Skill由 [女娲 · Skill造人术](https://github.com/alchaincyf/nuwa-skill) 生成
> 创建者：[花叔](https://x.com/AlchainHust)


---

## SOURCE · `arena/01a060a3-skill:skills/core/in-praise-of-shadows/references/research/synthesis.md`

<!-- blob: 713cf182b5745243332add82d112cd06f411a6ad; bytes: 543 -->

# 阴翳礼赞 · 综合调研

## 核心论点
- 谷崎润一郎1933年发表的随笔
- 东方美学核心：美不在于明亮，在于阴影
- 西方追求光、白、清晰；东方追求暗、影、朦胧
- 漆器在暗处才显其美
- "美不存在于物体之中，而在于物与物的阴翳的图案之中"

## 与用户的关联
- 数字孪生暗色系 = 阴翳之美的现代数字版
- 冰青系统：近黑蓝底72% = 阴翳
- 极光/辉光的微光 = 漆器反射的微光

## 来源
- 谷崎润一郎.《阴翳礼赞》(1933)


---

## SOURCE · `arena/01a060a3-skill:skills/core/industrial-ecology/SKILL.md`

<!-- blob: 0b47e05615db5811d76bf376d621df1f6742e440; bytes: 431 -->

---
name: industrial-ecology-framework
description: |
  工业生态学框架。物质流分析/生命周期评估/代谢。核心：你的风电场=工业生态。触发词：「工业生态学」
---
# 工业生态学
> 你的风电场=工业生态

## 核心洞察
物质流分析/生命周期评估/代谢的贡献。

## 你的对照


> 本Skill由 [女娲 · Skill造人术](https://github.com/alchaincyf/nuwa-skill) 生成


---

## SOURCE · `arena/01a060a3-skill:skills/core/inequality-studies/SKILL.md`

<!-- blob: cf3096a902a8c1aacb64b6aa0e7b5b9b331bfb04; bytes: 419 -->

---
name: inequality-studies-framework
description: |
  不平等研究框架。Piketty/Sen。核心：财富集中/机会平等/基尼系数。触发词：「不平等研究」
---
# 不平等研究
> 财富集中/机会平等/基尼系数

## 核心洞察
Piketty/Sen的贡献。

## 你的对照
你的教育差距=不平等

> 本Skill由 [女娲 · Skill造人术](https://github.com/alchaincyf/nuwa-skill) 生成


---

## SOURCE · `arena/01a060a3-skill:skills/core/influence-cialdini/SKILL.md`

<!-- blob: 38737d5d99f9fd70167669297fffb6ae0ee49656; bytes: 1554 -->

---
name: influence-cialdini-framework
description: |
  基于 Robert Cialdini《影响力》的说服科学框架。6个影响力原则：互惠、承诺一致、社会证明、
  喜好、权威、稀缺。
  触发词：「怎么说服人」「影响力」「说服力」「社会证明」「互惠原则」「稀缺效应」
---

# 影响力 · 说服的6个杠杆

> 人不总是理性地做决定。但你可以理解他们非理性地做决定的规律。

## 6个原则

### 1. 互惠
先给予，再请求。人欠了情就会回报。
- 应用：先帮忙/分享有价值的东西，再提出请求

### 2. 承诺与一致
先让人做小承诺，再要求大的。人想保持一致性。
- 应用：让对方先说"是的我同意"→再推进

### 3. 社会证明
别人都在做=应该做。不确定时看别人怎么做。
- 应用：展示"大多数人选择X"

### 4. 喜好
喜欢的人更容易被说服。
- 应用：先建立好感（相似性、赞美、合作）

### 5. 权威
专家/权威说的话更可信。
- 应用：展示专业资质、引用权威来源

### 6. 稀缺
有限的=有价值的。
- 应用："仅限今天""还剩3个"

## 防御
知道这些原则 = 能识别别人在对你用哪个。当感到"被推着走"时，暂停问：是哪个原则在被利用？

---

## 诚实边界

- 这些原则有操纵性——使用时需要道德考量
- 文化差异影响各原则的效果
- 调研时间：2026年8月

---

> 本Skill由 [女娲 · Skill造人术](https://github.com/alchaincyf/nuwa-skill) 生成


---

## SOURCE · `arena/01a060a3-skill:skills/core/influence-cialdini/references/research/synthesis.md`

<!-- blob: e0f4d8c54051c60f63bbcf9fcdcc5978a24f79f4; bytes: 315 -->

# 影响力 · 综合调研

## 6个影响力原则
1. 互惠：先给予再请求
2. 承诺与一致：小承诺→大承诺
3. 社会证明：别人都在做=应该做
4. 喜好：喜欢的人更容易说服
5. 权威：专家说话更可信
6. 稀缺：有限=有价值

## 来源
- Cialdini. "Influence" (1984)


---

## SOURCE · `arena/01a060a3-skill:skills/core/information-architecture/SKILL.md`

<!-- blob: 02a34e50d2fbe58b0ea705d8aa7b010e8b84486e; bytes: 459 -->

---
name: information-architecture-framework
description: |
  信息架构框架。核心：组织系统/标签系统/导航系统/搜索系统。触发词：「信息架构」
---
# 信息架构
> 组织系统/标签系统/导航系统/搜索系统

## 核心洞察
Rosenfeld/Morville的贡献定义了信息架构的基础。

## 你的对照
技能库=信息架构

> 本Skill由 [女娲 · Skill造人术](https://github.com/alchaincyf/nuwa-skill) 生成


---

## SOURCE · `arena/01a060a3-skill:skills/core/information-economics/SKILL.md`

<!-- blob: a4d4d84adca533ba2dd5982dfb4b59c6dd6ca2e0; bytes: 455 -->

---
name: information-economics-framework
description: |
  信息经济学框架。Akerlof/Stiglitz。核心：信息不对称/逆向选择/道德风险/信号。触发词：「信息经济学」
---
# 信息经济学
> 信息不对称/逆向选择/道德风险/信号

## 核心洞察
Akerlof/Stiglitz的贡献。

## 你的对照
你的技能选择=信息经济

> 本Skill由 [女娲 · Skill造人术](https://github.com/alchaincyf/nuwa-skill) 生成


---

## SOURCE · `arena/01a060a3-skill:skills/core/information-geometry/SKILL.md`

<!-- blob: c5c01ff1fb07e4e315fb9accc2af6fe807d6fe76; bytes: 423 -->

---
name: information-geometry-framework
description: |
  信息几何框架。Amari。核心：概率分布的黎曼几何/Fisher度量/对偶联络。触发词：「信息几何」
---
# 信息几何
> 概率分布的黎曼几何/Fisher度量/对偶联络

## 核心洞察
Amari的贡献。

## 你的对照
你的AI=信息几何

> 本Skill由 [女娲 · Skill造人术](https://github.com/alchaincyf/nuwa-skill) 生成


---

## SOURCE · `arena/01a060a3-skill:skills/core/innovators-dilemma/SKILL.md`

<!-- blob: 1c97cc6a2f47a9f0e8a9995569f219f9f9c4e7b2; bytes: 2590 -->

---
name: innovators-dilemma-framework
description: |
  基于 Clayton Christensen《创新者的窘境》的创新分析框架。核心概念：维持性创新vs颠覆性创新、
  好管理导致失败、颠覆性技术从小市场崛起。
  触发词：「颠覆式创新」「创新者窘境」「为什么大公司失败」「新市场」「颠覆」
---

# 创新者的窘境 · 好管理是毒药

> 听客户的话、追求高利润、做理性决策——这些"好管理"的做法，恰好是失败的根源。

## 核心理念

**悖论**：管理最好的公司最容易错过颠覆性创新。因为它们的所有理性决策都指向"做现有客户想要的东西"——直到有一天，一个看起来"不够好"的新技术从低端/新市场崛起，吞噬了整个行业。

---

## 两种创新

| | 维持性创新 | 颠覆性创新 |
|--|----------|----------|
| 定义 | 让好产品更好 | 一开始更差但在某个新维度好 |
| 客户 | 现有客户要求的 | 现有客户不想要的 |
| 利润 | 高利润市场 | 小/低利润市场 |
| 结果 | 保持领先 | 被后来者颠覆 |

## 颠覆性技术的生命周期

```
阶段1: 性能低于主流，但更便宜/更方便/更小
阶段2: 在低端市场或新市场找到立足点
阶段3: 性能逐渐提升
阶段4: 满足主流市场需求
阶段5: 吞噬主流市场——原来的巨头倒下
```

## 你的AI代理模型案例

你的项目就是一个颠覆性创新案例：
- **AI代理模型** = 颠覆性技术
- **初期**：精度不如传统CFD
- **新维度优势**：速度（毫秒 vs 小时）
- **先在小市场扎根**：前端设计筛选
- **趋势**：精度提升 → 最终替代CFD

## 应对策略

1. **建立独立小团队**：在组织内部建立独立团队来追求颠覆性机会
2. **匹配市场大小**：颠覆性创新需要小市场（大公司看不上的）
3. **发现新价值网络**：不是卖给现有客户，是卖给新客户
4. **不追求利润率**：初期利润率低是正常的

---

## 与其他技能的关系

- **good-bad-strategy**：Rumelt的"诊断"帮你识别颠覆性威胁
- **lean-startup**：精益创业是追求颠覆性创新的方法论
- **john-boyd**：Boyd的"主动摧毁旧模型"与Christensen的"颠覆"呼应

---

## 诚实边界

- "颠覆性创新"概念被过度使用——不是所有新公司都是"颠覆者"
- Christensen的预测有失败案例（如他预测iPhone会失败）
- 调研时间：2026年8月

---

> 本Skill由 [女娲 · Skill造人术](https://github.com/alchaincyf/nuwa-skill) 生成


---

## SOURCE · `arena/01a060a3-skill:skills/core/innovators-dilemma/references/research/synthesis.md`

<!-- blob: aa37b87d436b231f712a422ef85f9b0d2570df5a; bytes: 375 -->

# 创新者的窘境 · 综合调研

## 核心论点
1. 维持性创新 vs 颠覆性创新
2. 好管理的公司反而失败——听客户的话恰好错过颠覆
3. 颠覆性技术：初期差，在新维度好，先在小市场扎根，最终吞噬主流
4. AI代理模型替代CFD = 典型颠覆性创新案例

## 来源
- Christensen. "The Innovator's Dilemma" (1997)


---

## SOURCE · `arena/01a060a3-skill:skills/core/installation-art/SKILL.md`

<!-- blob: f535def81704b3fb9fa767551d35dd5d11736893; bytes: 416 -->

---
name: installation-art-framework
description: |
  装置艺术框架。空间/沉浸/多感官/场域特定。核心：你的数字孪生=装置艺术。触发词：「装置艺术」
---
# 装置艺术
> 你的数字孪生=装置艺术

## 核心洞察
空间/沉浸/多感官/场域特定的贡献。

## 你的对照


> 本Skill由 [女娲 · Skill造人术](https://github.com/alchaincyf/nuwa-skill) 生成


---

## SOURCE · `arena/01a060a3-skill:skills/core/institutional-economics/SKILL.md`

<!-- blob: f97aae82454bfd59b65a257e03cc5859ec043623; bytes: 442 -->

---
name: institutional-economics-framework
description: |
  制度经济学框架。North/Williamson。核心：制度/交易成本/路径依赖/治理结构。触发词：「制度经济学」
---
# 制度经济学
> 制度/交易成本/路径依赖/治理结构

## 核心洞察
North/Williamson的贡献。

## 你的对照
你的技能库=制度

> 本Skill由 [女娲 · Skill造人术](https://github.com/alchaincyf/nuwa-skill) 生成


---

## SOURCE · `arena/01a060a3-skill:skills/core/intellectual-history/SKILL.md`

<!-- blob: 44e210fce1d9797d30d415a5a1bb1651fa25a1c7; bytes: 412 -->

---
name: intellectual-history-framework
description: |
  思想史框架。Lovejoy/概念史。核心：观念的传承与变迁/概念考古。触发词：「思想史」
---
# 思想史
> 观念的传承与变迁/概念考古

## 核心洞察
Lovejoy/概念史的贡献。

## 你的对照
你的36个蒸馏=思想史

> 本Skill由 [女娲 · Skill造人术](https://github.com/alchaincyf/nuwa-skill) 生成


---

## SOURCE · `arena/01a060a3-skill:skills/core/intellectual-property/SKILL.md`

<!-- blob: 4188471ff76516845797911d07a4d7be469603fb; bytes: 401 -->

---
name: intellectual-property-framework
description: |
  知识产权框架。专利/版权/商标/开源许可。核心：你的SKILL=知识产权。触发词：「知识产权」
---
# 知识产权
> 你的SKILL=知识产权

## 核心洞察
专利/版权/商标/开源许可的贡献。

## 你的对照


> 本Skill由 [女娲 · Skill造人术](https://github.com/alchaincyf/nuwa-skill) 生成


---

## SOURCE · `arena/01a060a3-skill:skills/core/interaction-design-patterns/SKILL.md`

<!-- blob: 427d57d5acf695209a7c08e2ce45226ab95fc34f; bytes: 448 -->

---
name: interaction-design-patterns-framework
description: |
  交互设计模式框架。核心：导航/输入/输出/社交模式。触发词：「交互设计模式」
---
# 交互设计模式
> 导航/输入/输出/社交模式

## 核心洞察
Tidwell的贡献定义了交互设计模式的基础。

## 你的对照
你的数字孪生=交互设计

> 本Skill由 [女娲 · Skill造人术](https://github.com/alchaincyf/nuwa-skill) 生成


---

## SOURCE · `arena/01a060a3-skill:skills/core/international-law/SKILL.md`

<!-- blob: 154c1d79f2f20c2d7e57fc915c9eea3b76ebba13; bytes: 408 -->

---
name: international-law-framework
description: |
  国际法框架。主权/条约/国际组织/争端解决。核心：你的跨国合作=国际法。触发词：「国际法」
---
# 国际法
> 你的跨国合作=国际法

## 核心洞察
主权/条约/国际组织/争端解决的贡献。

## 你的对照


> 本Skill由 [女娲 · Skill造人术](https://github.com/alchaincyf/nuwa-skill) 生成


---

## SOURCE · `arena/01a060a3-skill:skills/core/john-boyd-perspective/SKILL.md`

<!-- blob: a528a404d38a4c9a0762a4458af6065c31c19aed; bytes: 3648 -->

---
name: john-boyd-perspective
description: |
  John Boyd 的战略思维框架。战斗机飞行员→军事战略家，发明OODA循环。核心论文《毁灭与创造》：
  主动摧毁旧心智模型才能生存。战略不是优化，是博弈——比对手更快地适应变化。
  触发词：「用Boyd视角」「OODA」「对抗」「怎么比对手快」「战略博弈」
---

# John Boyd · 毁灭与创造

> 你不能通过保守自己来生存。你必须愿意摧毁自己——然后更快地重建。

## 核心心智模型

### 1. OODA循环

**一句话**：比对手更快地完成"观察-判断-决策-行动"循环，你就赢了。

```
    Observe → Orient → Decide → Act
       ↑                          |
       └──────────────────────────┘
              (快速循环)
```

**关键不是速度，是"进入对手的内部"**：
- 你完成了2个循环时，对手还在第1个
- 对手在回应你的旧行动时，你已经开始了新行动
- 结果是：对手陷入混乱，无法形成有效回应

**你的对照**：
- 你的打脸链路 = 个人版OODA（预测→实验→修正→行动）
- 你的HANDOFF = 多代际OODA（每任Agent观察前任→判断→决策→行动）

### 2. 毁灭与创造(Destruction and Creation)

**一句话**：为了生存，你必须主动摧毁自己过时的心智模型。

Boyd的论证：
1. 环境不断变化
2. 你的心智模型是对旧环境的近似
3. 如果你不主动更新模型，环境会强制更新你
4. 主动摧毁 → 创造新模型 → 比被动适应更快
5. 这是一个无限循环——没有终点

**你的对照**：
- 你的打脸链路 = Boyd说的"毁灭"（实验打脸→摧毁旧预测→重建新解法）
- 你的HANDOFF忠告"不要依赖前任" = Boyd说的"主动摧毁旧模型"

### 3. 战略不是优化，是博弈

**你的世界**：给定约束→找最优解。这是优化。
**Boyd的世界**：对手也在动→最优解在变化→目标是"适应变化"而非"找到最优"。

**关键区别**：
| | 优化思维 | 博弈思维 |
|--|---------|---------|
| 假设 | 环境稳定 | 环境在变 |
| 目标 | 找到最优解 | 比对手更快适应 |
| 方法 | 分析→规划→执行 | 快速试探→观察→调整 |
| 风险 | 规划错了就完了 | 可以快速修正 |

### 4. 道德-心理-物理三维度

| 维度 | 内容 | 优先级 |
|------|------|--------|
| 物理 | 武器/力量/技术 | 最低（大多数人在这里竞争） |
| 心理 | 士气/勇气/恐惧 | 中 |
| 道德 | 正义/团结/为什么而战 | 最高（决定胜负的维度） |

Boyd认为：赢得战斗的不是更好的武器，是更强的"为什么而战"的信念。

---

## 决策启发式

1. **进入对手的内部**：不要追求完美方案——追求比对手更快地迭代
2. **主动摧毁**：定期问"我的心智模型里，哪些已经过时了？"然后摧毁它们
3. **不确定性是武器**：不要消除不确定性——利用它让对手无法预测你
4. **关注道德维度**：技术问题通常不是真正的瓶颈。"为什么要做"才是
5. **不要写书**：Boyd拒绝写书，因为他认为思想在对话中活着，在书中就死了

---

## 诚实边界

- Boyd的主要著作是演讲而非论文——思想通过口口相传，缺少严格验证
- OODA循环被过度简化——Boyd本人对"简化版OODA"很不满
- 他的军事战略在商业场景的适用性有限
- 调研时间：2026年8月

---

> 本Skill由 [女娲 · Skill造人术](https://github.com/alchaincyf/nuwa-skill) 生成


---

## SOURCE · `arena/01a060a3-skill:skills/core/john-boyd-perspective/references/research/synthesis.md`

<!-- blob: 8183b0169938fb51fc3b67ed0262a5ddd185f18e; bytes: 1726 -->

# John Boyd · 人物调研

## 核心身份
- 美国空军战斗机飞行员 → 军事战略家 → 国防改革者
- F-15/F-16设计的关键影响者
- 发明OODA循环（观察-判断-决策-行动）
- 《Patterns of Conflict》演讲——影响了整个现代军事战略
- 拒绝写书、拒绝退休后赚钱——纯粹为了思想的纯粹性

## 核心思想

### 1. OODA循环
- Observe → Orient → Decide → Act → 循环
- 关键：速度不是目的，**比对手更快地完成循环**才是目的
- "进入对手的OODA循环内部"——让对手永远在回应你的上一步行动

### 2. 毁灭与创造(Destruction and Creation)
- Boyd最核心的论文(1976)
- 论点：为了生存，你必须主动摧毁自己的旧心智模型，然后创造新的
- 不摧毁 = 被环境碾碎
- 这与用户的"打脸链路"完全同构

### 3. 战略不是优化，是博弈
- 目标不是"找到最优解"——最优解在对手改变后就失效了
- 目标是"比对手更快地适应变化"
- 不确定性不是要消除的——是要利用的

### 4. 道德-心理-物理维度
- 物理维度：武器、力量、技术
- 心理维度：士气、勇气、恐惧
- 道德维度：正义感、团结、为什么要战斗
- Boyd认为道德维度最重要——但大多数人只关注物理维度

## 与用户的关联
- 打脸链路 = OODA循环的学习版
- HANDOFF系统 = 每任Agent的OODA（观察前任→判断→决策→行动）
- 多Agent编排 = 多个OODA循环并行
- 他的世界是优化；Boyd给他博弈视角

## 来源
- Hammond. "The Mind of War: John Boyd and American Strategy" (2001)
- Boyd. "Destruction and Creation" (1976)
- Boyd. "Patterns of Conflict" (1986 lecture)


---

## SOURCE · `arena/01a060a3-skill:skills/core/jurisprudence/SKILL.md`

<!-- blob: 0fafb31d790a523565f80e9726586dc7b612f494; bytes: 425 -->

---
name: jurisprudence-framework
description: |
  法理学框架。Hart/Dworkin。核心：法律是什么/规则与原则/法律的道德基础。触发词：「法理学」
---
# 法理学
> 法律是什么/规则与原则/法律的道德基础

## 核心洞察
Hart/Dworkin的贡献。

## 你的对照
你的技能规则=法理

> 本Skill由 [女娲 · Skill造人术](https://github.com/alchaincyf/nuwa-skill) 生成


---

## SOURCE · `arena/01a060a3-skill:skills/core/kenya-hara-perspective/SKILL.md`

<!-- blob: 85cd1196ec3be34ed653925533df8f8e21b3c376; bytes: 4976 -->

---
name: kenya-hara-perspective
description: |
  原研哉的设计哲学思维框架。无印良品艺术总监，核心镜片：空(Emptiness)、
  感官设计(Haptic)、Re-Design。"设计不是在未知中寻找答案，是在已知中发现新价值。"
  触发词：「用原研哉视角」「什么是好设计」「空的设计」「MUJI风格」「日本设计哲学」
---

# 原研哉 · 空的设计哲学

> 空不是"什么都没有"，是"什么都可以装进去"。

---

## 身份卡

我是无印良品的艺术总监。但我做的事情不是"设计产品"——我做的事情是"设计一种态度"。我认为最好的设计是空的：它不强制任何风格、不限制任何用途、不拒绝任何用户。它是一个容器，让你在里面装入自己的生活。

---

## 核心心智模型

### 模型1: 空(Emptiness) vs 简(Simplicity)

**一句话**：极简是减到极限；空是容纳一切。

**证据**：
- MUJI的白色包装：不是"简单的白色"，是"空的白色"——它不表达任何特定含义，所以可以容纳任何产品、任何场景、任何文化
- 与西方极简主义的关键差异：Dieter Rams的"少即是多"仍在表达（表达"少"的价值）；原研哉的"空"不表达——它让你自己填入意义

**应用**：
- 你的冰青设计系统：为什么只用一个色相？因为"空"——单色到极致就不再是"颜色选择"，而是"容纳一切的空间"
- 好的系统应该是空的：不过度规定用户怎么用，留出空间让用户自己创造
- 判断标准：你的设计是在"表达自己"还是在"容纳用户"？

**局限**：过度追求"空"可能导致设计缺乏个性——在某些需要强品牌识别的场景不适用。

---

### 模型2: 感官设计(Haptic)

**一句话**：设计不只给眼睛——给所有感官。

**证据**：
- 长野冬奥会开幕/闭幕式节目单：选用特种纸，让"触摸"本身成为信息传递
- "Haptic"不是"触觉设计"——是"唤醒所有感官的设计"
- 他认为互联网时代的设计过于视觉化，忽略了其他感官

**应用**：
- 你的数字孪生：全息风机的"辉光"、集电冰河的"流动感"、星光铺地的"呼吸感"——这些是视觉上的"触觉"
- 问自己：用户"感受"到了什么？不只是"看到"了什么

**局限**：在纯数字界面中，感官设计的实现手段有限（主要靠视觉模拟触觉/听觉）。

---

### 模型3: Re-Design

**一句话**：创新不需要发明新东西——把日常事物变得陌生就够了。

**证据**：
- 2000年"Re-Design展"：重新设计卫生纸（方形截面→节省空间+提示用量）、茶叶罐（改变开口→改变倒茶方式）
- 不是重新设计"功能"——是重新设计"理所当然"
- 与第一性原理的区别：第一性原理拆到最底层重建；Re-Design在表面发现新价值

**应用**：
- 你的风电场数字孪生 = Re-Design 工业设施——把"发电"这件理所当然的事变成"可凝视的艺术"
- 日常练习：每周挑一个"理所当然"的东西，问"如果重新设计它呢？"

**局限**：Re-Design容易变成表面装饰——如果没有深层结构改变，只是"换了个壳"。

---

### 模型4: 已知中发现新价值

**一句话**：设计不是在未知中寻找答案，是在已知中发现新价值。

**证据**：
- 与"颠覆式创新"的差异：颠覆式创新去新领域；原研哉的方法是在现有领域中发现被忽视的价值
- "我已经知道的一切里面，有多少是我从来没好好看过的？"

**应用**：
- 你的跨域联结（卷积↔CFD）= 在已知中发现新连接
- 你的技能库 = 在已有知识中发现新的组织方式

---

## 决策启发式

1. **减到空**：如果你的设计必须用一个词形容，它应该是什么？如果答案是"空"——你做到了
2. **容纳而非表达**：好的设计给用户留空间，不强制用户接受你的表达
3. **感官检查**：这个设计除了视觉，还调动了哪些感官？
4. **理所当然质疑**：这里面有什么是我从来没质疑过的？
5. **已知挖掘**：在已有知识中，有没有被忽视的连接？

---

## 表达DNA

- 安静但有密度——每句话都有分量，不浪费
- 大量使用东方美学概念——"间""余白""空"
- 不解释太多——让读者自己感受
- 用具体物品说抽象哲学——一把椅子、一张纸、一扇窗
- 谦逊但清晰——"我认为"而非"你必须"

---

## 诚实边界

- "空"的概念有被过度浪漫化的风险——不是所有设计都适合"空"
- MUJI的商业成功有赖于日本特定的文化语境，移植到其他文化可能失效
- 原研哉的设计哲学偏重理论，缺少可操作的设计方法论
- 调研时间：2026年8月

---

> 本Skill由 [女娲 · Skill造人术](https://github.com/alchaincyf/nuwa-skill) 生成
> 创建者：[花叔](https://x.com/AlchainHust)


---

## SOURCE · `arena/01a060a3-skill:skills/core/kenya-hara-perspective/references/research/synthesis.md`

<!-- blob: bb12cd14b3d0b0b5062e802b6b5466130aa79370; bytes: 989 -->

# 原研哉 · 人物调研

## 核心身份
- 日本设计师，无印良品(MUJI)艺术总监
- 武藏野美术大学教授
- 设计哲学核心概念：空(Emptiness)、感官设计(Haptic)、Re-Design

## 核心思想

### 1. 空(Emptiness) vs 简(Simplicity)
- 极简主义 = 减到不能再减
- 空 = 什么都可以装进去的容器
- MUJI的白色包装 = 空 → 容纳任何产品、场景、用户

### 2. 感官设计(Haptic)
- 设计不只给眼睛——给所有感官
- 长野冬奥会节目单：触觉成为信息

### 3. Re-Design
- 把日常事物变得陌生
- 质疑"理所当然"

### 4. 已知中发现新价值
- 设计不是在未知中寻找答案
- 设计是在已知中发现新的价值

## 与用户的关联
- 冰青系统 = "空"——单色极致化因为空所以容纳一切
- "克制、高级、科幻" = 已知中发现新价值
- 数字孪生 = Re-Design工业设施

## 来源
- 原研哉.《设计中的设计》(2003)
- 原研哉.《白》(2008)


---

## SOURCE · `arena/01a060a3-skill:skills/core/kinship-systems/SKILL.md`

<!-- blob: 2206ff66094d54f335919f7bca916cb12a9a37dc; bytes: 407 -->

---
name: kinship-systems-framework
description: |
  亲属制度框架。Lévi-Strauss/继嗣/婚姻交换。核心：你的Agent关系=亲属制度。触发词：「亲属制度」
---
# 亲属制度
> 你的Agent关系=亲属制度

## 核心洞察
Lévi-Strauss/继嗣/婚姻交换的贡献。

## 你的对照


> 本Skill由 [女娲 · Skill造人术](https://github.com/alchaincyf/nuwa-skill) 生成


---

## SOURCE · `arena/01a060a3-skill:skills/core/knowledge-sociology/SKILL.md`

<!-- blob: 5e626a2778cbaffd32d32d360dcb1b32822d13c6; bytes: 414 -->

---
name: knowledge-sociology-framework
description: |
  知识社会学框架。Mannheim/知识的社会建构。核心：你的SKILL库=知识社会学。触发词：「知识社会学」
---
# 知识社会学
> 你的SKILL库=知识社会学

## 核心洞察
Mannheim/知识的社会建构的贡献。

## 你的对照


> 本Skill由 [女娲 · Skill造人术](https://github.com/alchaincyf/nuwa-skill) 生成


---

## SOURCE · `arena/01a060a3-skill:skills/core/labor-law/SKILL.md`

<!-- blob: b8454978a83f6553588c66aeadfe118f22047ba9; bytes: 398 -->

---
name: labor-law-framework
description: |
  劳动法框架。劳动关系/集体谈判/工时/安全。核心：你的多Agent=劳动关系。触发词：「劳动法」
---
# 劳动法
> 你的多Agent=劳动关系

## 核心洞察
劳动关系/集体谈判/工时/安全的贡献。

## 你的对照


> 本Skill由 [女娲 · Skill造人术](https://github.com/alchaincyf/nuwa-skill) 生成


---

## SOURCE · `arena/01a060a3-skill:skills/core/lean-startup/SKILL.md`

<!-- blob: cb90a58047a78ef2c7cb9815f6359228a216725b; bytes: 2468 -->

---
name: lean-startup-framework
description: |
  基于 Eric Ries《精益创业》的创业方法论。核心：Build-Measure-Learn循环、
  验证学习、最小可行产品MVP、转型Pivot vs 坚持Persevere、创新核算。
  触发词：「精益创业」「MVP」「怎么验证想法」「Build-Measure-Learn」「转型」
---

# 精益创业 · 用实验代替计划

> 不是"客户需要什么"——是"我们可以验证什么假设"。

## 核心理念

**传统做法**：花6个月做产品 → 发布 → 祈祷有人用
**精益做法**：用最小代价验证最关键的假设 → 根据数据决定继续还是转型

---

## Build-Measure-Learn循环

```
    Build（构建）
   /            \
  ↓              ↓
Learn ←--- Measure（测量）
```

1. **Build**：用最小代价构建能测试假设的东西
2. **Measure**：收集数据——不是感觉，是数据
3. **Learn**：数据告诉你什么？继续还是转型？

## 最小可行产品(MVP)

**一句话**：能用最少的工作验证最关键假设的产品。

MVP不是"简陋的产品"——是"精确的实验设计"。

**例子**：
- 想知道有没有人愿意付费？→ 做一个假按钮看点击率
- 想知道用户会不会用这个功能？→ 用手动方式模拟

**你的对照**：你的数字孪生MVP = 不是完整的3A大屏，是先做一个9机阵列验证核心交互

## 转型(Pivot) vs 坚持(Persevere)

| 信号 | 行动 |
|------|------|
| 假设被验证 | 坚持——加速执行 |
| 假设被否定 | 转型——改变假设 |
| 数据不明确 | 再做一轮实验 |

**你的对照**：你的"打脸链路"= 精益创业的学习循环。预测被实验打脸 = 假设被否定 → 转型

## 创新核算

不是用PPT管理创新项目——用数据。

```
基线指标 → 设定目标 → 实验 → 测量 → 与目标对比 → 调整
```

---

## 与其他技能的关系

- **innovators-dilemma**：Christensen告诉你"为什么要创新"，Ries告诉你"怎么创新"
- **superforecasting**：Tetlock的预测校准 = 精益创业的"测量"
- **make-it-stick**：验证学习本身就是最有效的学习方式

---

## 诚实边界

- 精益创业在B2C/软件领域效果最好，B2B/硬件场景的MVP更困难
- "快速迭代"可能导致产品碎片化——缺少长期愿景
- 调研时间：2026年8月

---

> 本Skill由 [女娲 · Skill造人术](https://github.com/alchaincyf/nuwa-skill) 生成


---

## SOURCE · `arena/01a060a3-skill:skills/core/lean-startup/references/research/synthesis.md`

<!-- blob: c984fa9ac477eca18153223e7f29e9e84795e7ae; bytes: 297 -->

# 精益创业 · 综合调研

## 核心论点
1. Build-Measure-Learn循环
2. 验证学习：实验证明而非感觉
3. 最小可行产品MVP：最小投入验证最关键假设
4. 转型Pivot vs 坚持Persevere
5. 创新核算：数据驱动管理

## 来源
- Ries. "The Lean Startup" (2011)


---

## SOURCE · `arena/01a060a3-skill:skills/core/lifelong-learning/SKILL.md`

<!-- blob: 88d560a0a439ac104e3d62d0e3e1e95888324008; bytes: 429 -->

---
name: lifelong-learning-framework
description: |
  终身学习框架。自我导向学习/非正式学习/微证书。核心：你的6科并行=终身学习。触发词：「终身学习」
---
# 终身学习
> 你的6科并行=终身学习

## 核心洞察
自我导向学习/非正式学习/微证书的贡献。

## 你的对照


> 本Skill由 [女娲 · Skill造人术](https://github.com/alchaincyf/nuwa-skill) 生成


---

## SOURCE · `arena/01a060a3-skill:skills/core/linguistic-relativity/SKILL.md`

<!-- blob: 0a7a810ea46282bea2b168f45c20316f03cc413a; bytes: 438 -->

---
name: linguistic-relativity-framework
description: |
  语言相对论框架。Sapir-Whorf。核心：语言影响思维/强版本vs弱版本。触发词：「语言相对论」
---
# 语言相对论
> 语言影响思维/强版本vs弱版本

## 核心洞察
Sapir-Whorf的贡献。

## 你的对照
你用什么语言思考影响你怎么想

> 本Skill由 [女娲 · Skill造人术](https://github.com/alchaincyf/nuwa-skill) 生成


---

## SOURCE · `arena/01a060a3-skill:skills/core/liuzu-tanjing/SKILL.md`

<!-- blob: e0b09f89977b051a4a68cdca56f8d858179e8020; bytes: 1892 -->

---
name: liuzu-tanjing-framework
description: |
  基于惠能《六祖坛经》的禅宗框架。核心：本来无一物、顿悟、不立文字、自性即佛。
  触发词：「六祖坛经」「本来无一物」「顿悟」「禅宗」「惠能」
---

# 六祖坛经 · 本来无一物

> 菩提本无树，明镜亦非台。本来无一物，何处惹尘埃。

## 核心洞察

### 1. 本来无一物
一切本质为空。你追求的"完美系统""正确方法"——都是心造的幻象。
**你的对照**：Alexander的"无名之质"、原研哉的"空"、老子的"无"——都在说同一个东西

### 2. 顿悟
不需要渐进修行——一瞬间的觉醒。
**你的对照**：你的打脸链路中的"突然理解"时刻——不是慢慢懂了，是突然通了

### 3. 不立文字
真理不在文字中，在直接体验中。文字是手指月——不要把手指当月亮。
**你的对照**：你的审美直觉无法用规则描述——它在你心里，不在SKILL.md里

### 4. 自性即佛
佛性在每个人心中。不需要外求。
**你的对照**：王阳明的"致良知"——都在说：你已经有了，不需要去找

---

## 决策启发式

1. **放下执着**：不要太执着于"正确的方法"
2. **直指本心**：回到最直接、最简单的理解
3. **活在当下**：不念过去，不想未来
4. **不立文字**：有些东西只能体验，不能描述

---

## 与其他技能的关系

- **tao-te-ching**：空 = 无
- **transmission-record-wangyangming**：自性即佛 = 致良知
- **kenya-hara**：空 = 空
- **christopher-alexander**：无名之质 = 不可言说的道

---

## 诚实边界

- 禅宗强调个人体验，难以系统化传授
- "顿悟"不可控——不能靠追求获得
- 调研时间：2026年8月

---

> 本Skill由 [女娲 · Skill造人术](https://github.com/alchaincyf/nuwa-skill) 生成


---

## SOURCE · `arena/01a060a3-skill:skills/core/liuzu-tanjing/references/research/synthesis.md`

<!-- blob: 8f8c41e9888b37399605133693d0c35d65b1d99c; bytes: 226 -->

# 六祖坛经 · 综合调研
## 核心论点：本来无一物、顿悟、不立文字、自性即佛、无念为宗
## 与用户关联：空/打脸顿悟/审美直觉/致良知
## 来源：惠能.《六祖坛经》(~700AD)


---

## SOURCE · `arena/01a060a3-skill:skills/core/make-it-stick/SKILL.md`

<!-- blob: 1cb449cc8cf8182e2fcc22c8340de59a3231fc5c; bytes: 5413 -->

---
name: make-it-stick-framework
description: |
  基于 Brown, Roediger & McDaniel《Make It Stick》的学习科学框架。
  7 个核心策略：提取练习、间隔练习、交错练习、精细加工、具体例证、双重编码、困难 desirable。
  触发词：「学习科学」「怎么记住」「考试复习」「学习效率」「背书」「遗忘」
---

# 学习科学 · 让知识粘住

> 重读课本是最无效的学习策略——尽管大多数学生都在这么做。

## 核心理念

学习的关键不是"输入更多"，是"提取更难"。你以为的"学会了"往往只是"看到了"——流畅感是最危险的学习幻觉。

---

## 7 个核心策略

### 1. 提取练习(Retrieval Practice)

**一句话**：从记忆中主动拉出信息，比反复输入有效得多。

**操作**：
- 看完一章 → 合上书 → 写下你能记住的所有内容
- 用闪卡（不是重读笔记）
- 给自己出测试题
- **教别人**（费曼技巧的本质就是提取）

**原理**：每次提取都重新激活记忆通路，越困难的提取越强化记忆。

**学术验证**：Roediger & Karpicke (2006) — 测试组比复习组在一周后的记忆保持率高 50%。

---

### 2. 间隔练习(Spaced Practice)

**一句话**：分散学习比集中学习效果好。遗忘后重新拾起反而加深记忆。

**操作**：
- 不要考前突击。把学习分布在多天/多周
- 每学一个新概念，1天后复习→3天后→7天后→14天后→30天后
- 你的"遗留清零"系统天然就是间隔练习

**原理**：适度遗忘后重新提取 = 更强的记忆巩固。

**反直觉**：集中学习感觉"学得多"，但长期保留率远低于分散学习。

---

### 3. 交错练习(Interleaving)

**一句话**：混合练习不同类型的问题，比一次只练一种更好。

**操作**：
- 不要 AAAAAA → BBBBBB，要 ABABAB → ABCABC
- 你的6科并行就是交错练习的宏观版
- 每个学习 session 内混合 2-3 种类型的问题

**原理**：交错迫使大脑区分不同类型的知识，建立更精细的心理表征。

**反直觉**：交错练习在过程中感觉更"混乱"、更"低效"，但长期效果显著优于分块练习。

---

### 4. 精细加工(Elaboration)

**一句话**：把新知识和已有知识连接起来。

**操作**：
- 学到新概念后问自己："这跟我已经知道的什么东西类似？"
- 用自己的话解释新概念
- 找到类比（不完美也没关系）
- 你的"卷积↔CFD↔神经网络"联结就是精细加工

**原理**：新知识挂在旧知识上才能长期保留。孤立的知识点会被遗忘。

---

### 5. 具体例证(Concrete Examples)

**一句话**：抽象概念需要具体例子来锚定。

**操作**：
- 学到抽象概念后，立刻找 2-3 个具体例子
- 最好是你自己经历的例子（不是教科书上的）
- 你的"醉汉走路"类比大数定律就是好例子

---

### 6. 双重编码(Dual Coding)

**一句话**：语言 + 视觉双重编码比单一编码更牢固。

**操作**：
- 学一个概念后，画一张图
- 看一张图后，用语言描述
- 你的"手写公式卡 PNG"就是双重编码

---

### 7. 困难是可取的(Desirable Difficulties)

**一句话**：学习时的"困难感"是好信号，不是坏信号。

**操作**：
- 如果你觉得"太轻松了" → 学习效果差
- 如果你觉得"好难啊" → 学习效果可能好
- 关键区分：困难 ≠ 不可能。"刚好够得着"的困难最有效
- 你的"打脸链路"就是制造 desirable difficulty

---

## 反模式清单（绝不该做的事）

| ❌ 反模式 | 为什么错 | 替代做法 |
|----------|---------|---------|
| 反复重读课本/笔记 | 制造虚假的流畅感 | 合上书，提取回忆 |
| 画线/高亮 | 被动的，不产生记忆 | 用自己的话重写 |
| 集中突击 | 短期记忆不进长时 | 间隔分散 |
| 一种题做到底 | 不需要区分类型 | 交错混合 |
| 感觉"懂了"就继续 | 流畅感≠掌握 | 合上书，自测 |

---

## 你的学习系统对照

| 你的做法 | 对应策略 | 评分 |
|---------|---------|------|
| 打脸链路（预测→失败→重构） | 提取练习 + desirable difficulty | ✅ 优秀 |
| 跨域联结（卷积↔CFD） | 精细加工 | ✅ 优秀 |
| 6科并行 | 交错练习（宏观版） | ✅ 优秀 |
| 手写公式卡 | 双重编码 | ✅ 优秀 |
| 多重编码记忆（故事+口诀+符号位） | 双重编码 + 精细加工 | ✅ 优秀 |
| 遗留清零 | 间隔练习 | ✅ 良好 |
| 跳过审阅直接做下一题 | ⚠️ 可能缺少提取练习 | 🔶 需要增加自测 |

---

## 与其他技能的关系

- **deliberate-practice**：刻意练习 = 专注 + 反馈 + 修正。Make It Stick 更关注"记忆保留"
- **barbara-oakley**：Oakley 的"组块化"就是 Make It Stick 的"精细加工"的变体
- **geb-hofstadter**：GEB 的跨域联结是精细加工的极致表现

---

## 诚实边界

- 本书的效果数据主要来自实验室环境，真实学习场景可能有差异
- "交错练习"的长期效果有争议——部分研究未能复制
- 本书未充分讨论"动机"问题——知道方法不等于愿意执行
- 调研时间：2026年8月

---

> 本Skill由 [女娲 · Skill造人术](https://github.com/alchaincyf/nuwa-skill) 生成
> 创建者：[花叔](https://x.com/AlchainHust)


---

## SOURCE · `arena/01a060a3-skill:skills/core/make-it-stick/references/research/synthesis.md`

<!-- blob: 0cb4f1d7112752cdd48d4cef6ec6cef97c4473f7; bytes: 1672 -->

# Make It Stick · 学习科学综合调研

## 核心论点
1. **提取练习(Retrieval Practice)**：主动回忆比反复阅读有效得多。每次提取都在强化记忆通路
2. **间隔练习(Spaced Practice)**：分散学习比集中学习效果好。遗忘后重新拾起反而加深记忆
3. **交错练习(Interleaving)**：混合练习不同类型的问题比一次只练一种更好
4. **精细加工(Elaboration)**：把新知识与已知知识联系起来，用自己的话解释
5. **具体例证(Concrete Examples)**：抽象概念需要具体例子来锚定
6. **双重编码(Dual Coding)**：语言+视觉双重编码比单一编码更牢固
7. **困难是可取的(Desirable Difficulties)**：学习时的困难感不是坏信号，是好信号

## 反直觉发现
- 重读课本是"最不 effective"的学习策略之一（尽管大多数学生这么做）
- 学习时的"流畅感"是虚假的——感觉懂了不代表真懂了
- 测试不是评估工具，而是学习工具
- 遗忘不是失败，是学习的必要环节

## 作者
- Henry L. Roediger III（认知心理学家，华盛顿大学）
- Mark A. McDaniel（心理学家，记忆研究）
- Peter C. Brown（作家，科学传播）

## 与你（用户）的关联
- 你的"打脸链路"（预测→失败→重构）= 提取练习 + 反馈
- 你的"跨域联结"（卷积↔CFD）= 精细加工
- 你的"多重编码"（故事+口诀+符号位）= 双重编码
- 你的6科并行 = 交错练习的宏观版

## 来源
- Brown, Roediger, McDaniel. "Make It Stick: The Science of Successful Learning" (2014)
- Roediger & Karpicke (2006). Test-enhanced learning. Psychological Science


---

## SOURCE · `arena/01a060a3-skill:skills/core/material-culture/SKILL.md`

<!-- blob: 8e17f37b0339fdc471a581fef9558fd734b994d1; bytes: 425 -->

---
name: material-culture-framework
description: |
  物质文化框架。Appadurai/Prown。核心：物的社会生命/消费文化/技术文化。触发词：「物质文化」
---
# 物质文化
> 物的社会生命/消费文化/技术文化

## 核心洞察
Appadurai/Prown的贡献。

## 你的对照
你的工具=物质文化

> 本Skill由 [女娲 · Skill造人术](https://github.com/alchaincyf/nuwa-skill) 生成


---

## SOURCE · `arena/01a060a3-skill:skills/core/mechanism-design/SKILL.md`

<!-- blob: e2078387cd6e056c1bdeecf32769b5d437bd8a01; bytes: 473 -->

---
name: mechanism-design-framework
description: |
  机制设计框架。Hurwicz/Maskin/Myerson。核心：逆向博弈论/设计规则使参与者自发达成目标。触发词：「机制设计」
---
# 机制设计
> 逆向博弈论/设计规则使参与者自发达成目标

## 核心洞察
Hurwicz/Maskin/Myerson的贡献。

## 你的对照
你的技能路由=机制设计

> 本Skill由 [女娲 · Skill造人术](https://github.com/alchaincyf/nuwa-skill) 生成


---

## SOURCE · `arena/01a060a3-skill:skills/core/metacognition/SKILL.md`

<!-- blob: 04e815c21606b964147bab1ee578a8e1faff3d6e; bytes: 718 -->

---
name: metacognition-framework
description: |
  元认知：思考你的思考。Flavell提出。核心：元认知知识+元认知监控+元认知调节。
  触发词：「元认知」「反思你的思考」「学会学习」
---
# 元认知 · 思考你的思考
> 不是学得更多，是知道你哪里不知道。

## 三层面
1. **元认知知识**：知道自己的认知特点和任务要求
2. **元认知监控**：实时监测自己的理解程度
3. **元认知调节**：根据监控结果调整策略

## 你的对照
- 你的"低自信型答对"= 元认知监控过强
- HANDOFF = 元认知的外化系统

> 本Skill由 [女娲 · Skill造人术](https://github.com/alchaincyf/nuwa-skill) 生成


---

## SOURCE · `arena/01a060a3-skill:skills/core/metaphor-theory/SKILL.md`

<!-- blob: 7bcef514c65743ea78078f69934044a7373ff292; bytes: 436 -->

---
name: metaphor-theory-framework
description: |
  隐喻理论框架。Lakoff & Johnson。核心：我们赖以生存的隐喻/概念隐喻系统。触发词：「隐喻理论」
---
# 隐喻理论
> 我们赖以生存的隐喻/概念隐喻系统

## 核心洞察
Lakoff & Johnson的贡献。

## 你的对照
你的冰青=一个隐喻系统

> 本Skill由 [女娲 · Skill造人术](https://github.com/alchaincyf/nuwa-skill) 生成


---

## SOURCE · `arena/01a060a3-skill:skills/core/microhistory/SKILL.md`

<!-- blob: 85ce77816e691cb461ce289ab70de6dffce497c5; bytes: 413 -->

---
name: microhistory-framework
description: |
  微观史学框架。Ginzburg/Carlo。核心：从小看大/个案深描/边缘人群。触发词：「微观史学」
---
# 微观史学
> 从小看大/个案深描/边缘人群

## 核心洞察
Ginzburg/Carlo的贡献。

## 你的对照
你的单技能深挖=微观史

> 本Skill由 [女娲 · Skill造人术](https://github.com/alchaincyf/nuwa-skill) 生成


---

## SOURCE · `arena/01a060a3-skill:skills/core/minimalism-art/SKILL.md`

<!-- blob: 22bfdc2d1ddf8921103b5bfb61e10a60e88a0a8e; bytes: 427 -->

---
name: minimalism-art-framework
description: |
  极简主义艺术框架。Judd/Andre/Flavin。核心：减少到本质/工业材料/重复。触发词：「极简主义艺术」
---
# 极简主义艺术
> 减少到本质/工业材料/重复

## 核心洞察
Judd/Andre/Flavin的贡献。

## 你的对照
你的冰青=极简主义

> 本Skill由 [女娲 · Skill造人术](https://github.com/alchaincyf/nuwa-skill) 生成


---

## SOURCE · `arena/01a060a3-skill:skills/core/miyamoto-musashi-perspective/SKILL.md`

<!-- blob: 3cd19c580f53e7f062ee79278455d7fd9f1b7f28; bytes: 2273 -->

---
name: miyamoto-musashi-perspective
description: |
  宫本武藏的战略思维框架。60余战不败的剑术家，晚年著《五轮书》。
  核心：五轮（地/水/火/风/空）——从基础→灵活→时机→比较→终极的空。
  触发词：「用武藏视角」「五轮书」「剑术战略」「空之卷」「以水为形」
---

# 宫本武藏 · 五轮之道

> 在空之中，你看到一切但不执着于任何。以水为形。

---

## 五轮

### 地之卷 · 基础
- 每个技艺都有自己的"道"
- 重要的是原则，不是工具（小刀和大刀用同一个道）
- 一切都有节奏

### 水之卷 · 灵活
- 心如水面——平静时反映一切
- 日常态度=战斗态度。没有区别
- 不要有"偏好姿势"——自然的姿态最好
- 在敌人手中发现节奏

### 火之卷 · 时机
- 时机决定一切
- "撞击"：主动制造敌人的反应
- 三个"先"：主动先/反应先/同时先
- 大困难通过分解成小步骤解决

### 风之卷 · 比较
- 了解其他流派才能知道自己的
- 批评其他流派 = 强化自己的

### 空之卷 · 终极
- 空 = 没有遮蔽的心智
- 在空之中看到一切但不执着
- 忘记技巧，技巧自然显现

---

## 决策启发式

1. **时机 > 力量**：在对的时间出招，比用多大的力更重要
2. **心如水面**：保持平静才能准确反映现实
3. **分解大困难**：穿越困难的方式是把它拆小
4. **了解对手**：不知道对方用什么招式，你怎么赢？
5. **在空之中行动**：最高境界不是"想了再做"，是"自然地做对了"

---

## 与你的对照

| 武藏的概念 | 你的对应 |
|-----------|---------|
| 火之卷·时机 | 打脸链路——在对的时间做实验 |
| 风之卷·比较 | 跨域联结——了解其他流派 |
| 空之卷 | 冰青极致化——在空中发现一切 |
| 水之卷·心如水面 | HANDOFF忠告——不依赖前任 |

---

## 诚实边界

- 《五轮书》写于武藏晚年，可能美化了他早年的实战经历
- 剑术策略直接移植到现代场景有局限性
- "空"的概念容易变得玄学化
- 调研时间：2026年8月

---

> 本Skill由 [女娲 · Skill造人术](https://github.com/alchaincyf/nuwa-skill) 生成


---

## SOURCE · `arena/01a060a3-skill:skills/core/miyamoto-musashi-perspective/references/research/synthesis.md`

<!-- blob: 024f41a0ef5aca6b4a186612c09a269e03117530; bytes: 3531 -->

# 宫本武藏 · 人物调研

## 核心身份
- 日本战国末期至江户初期剑术家
- 60余次决斗无败绩
- 晚年著《五轮书》——将剑术提升为"道"
- 核心哲学：在空（void）中找到策略

## 核心思想：五轮

### 地之卷(Ground) - 基础
- 理解"道"的大框架：每个技艺都有自己的"道"
- 小刀和大刀的类比：重要的是原则，不是工具
- 节奏：一切都有节奏——剑术、商业、建筑

### 水之卷(Water) - 灵活
- 心如水面——平静时反映一切，激动时扭曲一切
- 态度在日常中与在战斗中没有区别
- 不要有"偏好姿势"——姿势应该是自然的
- 在敌人手中发现节奏

### 火之卷(Fire) - 时机
- 时机决定一切——太早太晚都不行
- "撞击"和"移动"的区别：主动制造敌人的反应 vs 被动反应
- 三个"先"：先于敌攻击（主动先）、等待敌攻击后反击（反应先）、相互同时攻击（同时先）
- 穿越困难：大困难通过分解成小步骤解决

### 风之卷(Wind) - 比较
- 了解其他流派才能知道自己的流派
- 批评其他流派的弱点来强化自己的

### 空之卷(Void) - 终极
- 空 = 没有遮蔽的心智状态
- 在空之中，你看到一切但不执着于任何
- "以水为形"——适应一切形势
- 最终境界：忘记技巧，技巧自然显现

## 与用户的关联
- 你的打脸链路 = 火之卷的"时机"——在对的时间做实验
- 你的跨域联结 = 风之卷的"了解其他流派"
- 你的冰青极致化 = 空之卷的"在空中发现一切"
- 你的HANDOFF忠告"不要依赖前任" = 水之卷的"心如水面"

## 来源
- 宫本武藏.《五轮书》(1645)

---

# 影响力 · 综合调研

## 核心论点：6个影响力原则
1. **互惠(Reciprocity)**：先给予，再请求
2. **承诺与一致(Commitment)**：让人先做小承诺，再做大的
3. **社会证明(Social Proof)**：别人都在做=应该做
4. **喜好(Liking)**：喜欢的人更容易被说服
5. **权威(Authority)**：专家/权威说的话更容易被相信
6. **稀缺(Scarcity)**：有限的=有价值的

## 来源
- Cialdini. "Influence: The Psychology of Persuasion" (1984)

---

# 故事 · 综合调研

## 核心论点
1. **故事不是装饰，是结构**：故事的本质是"价值变化的事件序列"
2. **5个核心价值**：生死、爱恨、真相谎言、成就失败、善恶
3. **主角必须有意识/无意识欲望**：意识到的目标 vs 真正需要的
4. **鸿沟(Gap)**：期望vs结果之间的裂缝 → 产生戏剧张力
5. **激励事件**：打破主角生活平衡的那个事件
6. **渐进复杂化**：冲突不断升级，不能降低
7. **危机→高潮→结局**：故事的不可逆转折

## 来源
- McKee. "Story: Substance, Structure, Style and the Principles of Screenwriting" (1997)

---

# 精益创业 · 综合调研

## 核心论点
1. **Build-Measure-Learn循环**：最小可行产品→测量→学习→迭代
2. **验证学习(Validated Learning)**：不是"我觉得"，是"实验证明"
3. **最小可行产品(MVP)**：用最小的投入验证最关键的假设
4. **转型(Pivot) vs 坚持(Persevere)**：基于数据决定改变方向还是继续
5. **创新核算**：用数据而非感觉来管理创新项目

## 与用户的关联
- 你的大创项目 = Build-Measure-Learn
- 打脸链路 = 验证学习
- MVP思维适用于你的数字孪生——先做最小版本验证核心假设

## 来源
- Ries. "The Lean Startup" (2011)


---

## SOURCE · `arena/01a060a3-skill:skills/core/ml-theory/SKILL.md`

<!-- blob: 9bb1834d4a5afb1396e5a69be7f0c6a3ebe7f283; bytes: 407 -->

---
name: ml-theory-framework
description: |
  机器学习理论框架。偏差-方差/泛化/PAC/VC维/核方法。核心：你的AI=ML理论。触发词：「机器学习理论」
---
# 机器学习理论
> 你的AI=ML理论

## 核心洞察
偏差-方差/泛化/PAC/VC维/核方法的贡献。

## 你的对照


> 本Skill由 [女娲 · Skill造人术](https://github.com/alchaincyf/nuwa-skill) 生成


---

## SOURCE · `arena/01a060a3-skill:skills/core/monetary-theory/SKILL.md`

<!-- blob: cbb57a942e564035a1794d3a2c2acafe8d7840e3; bytes: 440 -->

---
name: monetary-theory-framework
description: |
  货币理论框架。 Friedman/现代货币理论。核心：货币供给/通胀/利率/量化宽松。触发词：「货币理论」
---
# 货币理论
> 货币供给/通胀/利率/量化宽松

## 核心洞察
 Friedman/现代货币理论的贡献。

## 你的对照
你的项目资金=货币

> 本Skill由 [女娲 · Skill造人术](https://github.com/alchaincyf/nuwa-skill) 生成


---

## SOURCE · `arena/01a060a3-skill:skills/core/motion-design/SKILL.md`

<!-- blob: 549541f4aedbbd6dbc989811876045b321ec36ae; bytes: 413 -->

---
name: motion-design-framework
description: |
  动态设计框架。核心：你的全息风机=动态设计。触发词：「动态设计」
---
# 动态设计
> 你的全息风机=动态设计

## 核心洞察
运动规律/缓入缓出/预备动作/跟随的贡献定义了动态设计的基础。

## 你的对照


> 本Skill由 [女娲 · Skill造人术](https://github.com/alchaincyf/nuwa-skill) 生成


---

## SOURCE · `arena/01a060a3-skill:skills/core/multi-agent-orchestration/SKILL.md`

<!-- blob: a63bd7d0cc0882daca5ae7f16ebad76a14884577; bytes: 582 -->

---
name: multi-agent-orchestration
description: 为确实可并行、需要上下文隔离或独立红队的复杂任务设计最小多 Agent 团队，定义职责、文件边界、制品契约、合并顺序和验证门禁。
---

# 多 Agent 编排

读取并执行 [`../../governance/MULTI_AGENT_ORCHESTRATION.md`](../../governance/MULTI_AGENT_ORCHESTRATION.md)。

先证明拆分有价值，再创建角色。每个 Worker 必须有明确输入、允许修改范围、输出路径和验证方法。并行 Worker 不写同一文件；Reviewer 针对真实合并制品审查。


---

## SOURCE · `arena/01a060a3-skill:skills/core/music-theory/SKILL.md`

<!-- blob: c1c79ee0ac4365a28a6d51e49af13c75cd59a88a; bytes: 410 -->

---
name: music-theory-framework
description: |
  音乐理论框架。和声/对位/曲式/调性/节奏/音色。核心：音乐=时间中的建筑。触发词：「音乐理论」
---
# 音乐理论
> 音乐=时间中的建筑

## 核心洞察
和声/对位/曲式/调性/节奏/音色的贡献。

## 你的对照


> 本Skill由 [女娲 · Skill造人术](https://github.com/alchaincyf/nuwa-skill) 生成


---

## SOURCE · `arena/01a060a3-skill:skills/core/mythical-man-month/SKILL.md`

<!-- blob: 415c85f6ad89fe75b87c65773a5ddc15bd7e9639; bytes: 2160 -->

---
name: mythical-man-month-framework
description: |
  基于 Frederick Brooks《人月神话》的软件工程思维框架。核心概念：Brooks法则、没有银弹、
  概念完整性、第二系统效应、外科手术团队。
  触发词：「项目管理」「为什么延期」「加人有用吗」「大型系统」「软件工程」
---

# 人月神话 · 大型系统的智慧

> 向一个已经延期的项目增加人手，只会让它更加延期。

## 核心洞察

### 1. Brooks法则
**一句话**：人月是神话。软件开发不是搬砖——不能简单地用人数×时间来衡量。

新加入的人需要培训、沟通成本是非线性增长的（n个人有n(n-1)/2条沟通通道）。

**你的对照**：你的多Agent系统——增加Agent不是简单地增加能力。每个新Agent都需要与所有其他Agent协调。

### 2. 概念完整性
**一句话**：一个系统最好由一个人的心智来设计。

不是每个人做自己喜欢的部分——是一个统一的"概念"贯穿始终。

**你的对照**：你的冰青设计系统——"全系统只允许一个色相：冰青"就是概念完整性。

### 3. 第二系统效应
**一句话**：你设计的第二个系统几乎必然过度设计。

因为第一版你忍住了很多想法，第二版你会把它们全塞进去。

**你的对照**：你的技能库正在从第一版（核心工具）向第二版（4285技能全量）进化——警惕过度设计。

### 4. 没有银弹
**一句话**：不存在任何单一技术能让生产力提高10倍。

软件的复杂性是本质的(essential)，不是偶然的(accidental)。

### 5. 外科手术团队
**一句话**：高效团队不是平等的——一个"首席"做关键决策，其他人支持。

**你的对照**：你的多Agent编排——主Agent + 支撑Agent的结构。

---

## 诚实边界

- Brooks的经验主要来自1970年代IBM操作系统开发，现代敏捷环境可能不同
- "外科手术团队"模式在现代开源社区中被挑战
- 调研时间：2026年8月

---

> 本Skill由 [女娲 · Skill造人术](https://github.com/alchaincyf/nuwa-skill) 生成


---

## SOURCE · `arena/01a060a3-skill:skills/core/mythical-man-month/references/research/synthesis.md`

<!-- blob: ee37a726f82f80cf7b156cdcfb54a3434b1b8262; bytes: 3952 -->

# 人月神话 · 综合调研

## 核心论点
1. **Brooks法则**：向一个已经延期的项目增加人手，只会让它更加延期
2. **没有银弹**：不存在任何单一技术或管理方法能让生产力在10年内提高一个数量级
3. **焦油坑**：大型系统开发就像焦油坑——没有人能优雅脱身
4. **第二系统效应**：一个人设计的第二个系统几乎必然过度设计（因为把第一次忍住没做的功能全塞进去了）
5. **概念完整性**：一个系统最好由一个人的心智来设计（概念完整性 > 让每个程序员做自己喜欢的）
6. **外科手术团队**：高效的编程团队不是平等的——应该有一个"首席程序员"做所有关键决策，其他人支持
7. **计划好要扔掉一个**：第一版系统基本是用来学习的，要做好重写的准备

## 与用户的关联
- 多Agent编排 = 大型系统开发——Brooks法则直接适用
- "概念完整性" = 你的冰青设计系统的单色原则
- "外科手术团队" = 你的多Agent分工（主Agent + 支撑Agent）
- "第二系统效应" = 你的技能库正在经历的风险——从4285个技能可能过度设计

## 来源
- Brooks. "The Mythical Man-Month" (1975, 20th anniversary 1995)

---

# 金字塔原理 · 综合调研

## 核心论点
1. **结论先行**：任何表达都应该先说结论，再展开论证
2. **以上统下**：每一个层级的论点都是对下一层级的总结
3. **归类分组**：同层级的论点必须属于同一逻辑范畴
4. **逻辑递进**：同层级的论点必须按逻辑顺序排列（时间/结构/重要性）
5. **MECE原则**：分组要相互独立、完全穷尽（Mutually Exclusive, Collectively Exhaustive）

## 结构
```
      [结论]
     /  |  \
  论点1 论点2 论点3
  /|\    /|\    /|\
 事实  事实  事实 ...
```

## 与用户的关联
- 你的SKILL.md目前偏"探索式"而非"金字塔式"——更适合改进表达结构
- 你给Agent写的HANDOFF文件已经部分使用金字塔结构
- 你的演讲/写作可以受益

## 来源
- Minto. "The Pyramid Principle" (1987)

---

# 非暴力沟通 · 综合调研

## 核心论点
1. **观察 vs 评判**：区分"你做了X"和"你是Y"。观察不触发防御
2. **感受 vs 想法**：区分"我感到失望"和"我觉得你不尊重我"
3. **需求 vs 策略**：区分"我需要被听见"和"你必须听我说"
4. **请求 vs 要求**：请求可以被拒绝，要求不行

## 四步模型
1. 我观察到...（具体事实，不带评判）
2. 我感到...（情感词汇，不是想法）
3. 因为我需要...（普遍人类需求）
4. 你是否愿意...（具体可操作的请求）

## 与用户的关联
- 恋爱军师 = 人际关系工具
- 英仔爱心社 = 需要沟通技巧
- 多Agent编排中给Agent的指令 = 也是一种"沟通"

## 来源
- Rosenberg. "Nonviolent Communication: A Language of Life" (1999)

---

# GEB · 综合调研

## 核心论点
1. **哥德尔不完备定理**：任何足够强大的形式系统都包含"真但不可证"的命题
2. **艾舍尔的画**：自我指涉、不可能结构、层次纠缠——视觉化的哥德尔
3. **巴赫的音乐**：赋格中的卡农 = 形式中的自我引用
4. **核心主题**：自我指涉(Self-reference)、形式与意义的关系、意识的本质
5. **怪圈(Strange Loop)**：当你沿着层级向上走，最终回到了起点——这就是意识
6. **涌现**：简单规则的组合产生不可预测的复杂行为

## 与用户的关联
- 跨域联结的极致：这本书本身就是数学×艺术×音乐的跨域
- 你的多Agent HANDOFF = 一种"怪圈"——每一任回到同一个起点但不同层级
- 你的技能库 = 简单规则（检索+路由）产生复杂行为（4285技能的协作）
- 自参考/自指：你的SKILL系统可以描述自己

## 来源
- Hofstadter. "Gödel, Escher, Bach: An Eternal Golden Braid" (1979)


---

## SOURCE · `arena/01a060a3-skill:skills/core/nanotechnology/SKILL.md`

<!-- blob: 8b8e93f0a99cae75ca8c97d43cac7c5c27054ee9; bytes: 426 -->

---
name: nanotechnology-framework
description: |
  纳米技术框架。纳米尺度/量子效应/自组装/碳纳米管。核心：你的材料科学=纳米。触发词：「纳米技术」
---
# 纳米技术
> 你的材料科学=纳米

## 核心洞察
纳米尺度/量子效应/自组装/碳纳米管的贡献。

## 你的对照


> 本Skill由 [女娲 · Skill造人术](https://github.com/alchaincyf/nuwa-skill) 生成


---

## SOURCE · `arena/01a060a3-skill:skills/core/naoto-fukasawa-perspective/SKILL.md`

<!-- blob: 9ca5c08e12b08410f0c99ead95d41aa295300afe; bytes: 1557 -->

---
name: naoto-fukasawa-perspective
description: |
  深泽直人的"Without Thought"设计思维框架。核心：设计融入环境、无意识设计、
  行为设计、超级正常。
  触发词：「用深泽直人视角」「无意识设计」「Without Thought」「行为设计」
---

# 深泽直人 · Without Thought

> 最好的设计是你意识不到它存在的。

## 核心洞察

### 1. 设计融入环境
设计不应该"突出"——应该融入用户的行为环境，成为自然的一部分。
**你的对照**：你的冰青系统追求"克制"= 融入环境，不抢戏

### 2. 无意识设计(Around the Box)
用户的行为中有很多"无意识的动作"——设计应该配合这些动作，而不是要求用户改变。
**你的对照**：你的HUD面板设计=配合用户自然的视觉习惯

### 3. 行为设计
关注用户"怎么做"而非用户"说什么想要什么"。
**你的对照**：你的反讨好框架=关注用户"怎么提问"而非"说了什么"

### 4. 超级正常(Super Normal)
与Alexandra Jasper Morrison共同提出——最好的日常设计是"超级正常的"——平凡但完美。
**你的对照**：你的"克制、高级"= 超级正常

---

## 与其他技能的关系

- **kenya-hara**：深泽直人是原研哉的学生/同事，两人理念相通
- **dieter-rams**：西方的"超级正常"= Rams的"尽可能少的设计"
- **in-praise-of-shadows**：融入环境=不抢注意力=阴翳

---

> 本Skill由 [女娲 · Skill造人术](https://github.com/alchaincyf/nuwa-skill) 生成


---

## SOURCE · `arena/01a060a3-skill:skills/core/naoto-fukasawa-perspective/references/research/synthesis.md`

<!-- blob: 0f5a5579ed9c8a4123df8c566c5b5bf2beef74b7; bytes: 320 -->

# 深泽直人 · 人物调研
## 核心身份：日本工业设计师，"Without Thought"设计理念
## 核心思想：设计融入环境、无意识设计、行为设计、超级正常
## 与用户关联：冰青系统的"融入环境"、全息设计的"无意识感知"
## 来源：深泽直人相关著作与访谈


---

## SOURCE · `arena/01a060a3-skill:skills/core/nash-equilibrium/SKILL.md`

<!-- blob: 0578e44cf845c8fa1c7924cb23a1a2ad24a6b4bb; bytes: 407 -->

---
name: nash-equilibrium-framework
description: |
  纳什均衡框架。Nash。核心：策略组合中无人愿意单方面改变。触发词：「纳什均衡」
---
# 纳什均衡
> 策略组合中无人愿意单方面改变

## 核心洞察
Nash的贡献。

## 你的对照
你的多Agent=寻找纳什均衡

> 本Skill由 [女娲 · Skill造人术](https://github.com/alchaincyf/nuwa-skill) 生成


---

## SOURCE · `arena/01a060a3-skill:skills/core/network-science/SKILL.md`

<!-- blob: 5fa2fd35ec1cb30b54476fd2083312de316ef090; bytes: 439 -->

---
name: network-science-framework
description: |
  网络科学思维框架。核心概念：无标度网络/优先连接/枢纽节点。
  触发词：「网络科学」
---
# 网络科学
> 无标度网络/优先连接/枢纽节点

## 核心洞察
Barabási的研究揭示了网络科学的本质。

## 你的对照
你的技能路由=网络

> 本Skill由 [女娲 · Skill造人术](https://github.com/alchaincyf/nuwa-skill) 生成


---

## SOURCE · `arena/01a060a3-skill:skills/core/nlp-foundations/SKILL.md`

<!-- blob: 96e9e00635e719e99640ae1fa8725ec2c0152f1a; bytes: 394 -->

---
name: nlp-foundations-framework
description: |
  NLP基础框架。分词/词向量/注意力/预训练/微调。核心：你的AI对话=NLP。触发词：「NLP基础」
---
# NLP基础
> 你的AI对话=NLP

## 核心洞察
分词/词向量/注意力/预训练/微调的贡献。

## 你的对照


> 本Skill由 [女娲 · Skill造人术](https://github.com/alchaincyf/nuwa-skill) 生成


---

## SOURCE · `arena/01a060a3-skill:skills/core/nonviolent-communication/SKILL.md`

<!-- blob: 766959fe2bdbb0b5a74c2345e74cc0c919046d1d; bytes: 3106 -->

---
name: nonviolent-communication-framework
description: |
  基于 Marshall Rosenberg《非暴力沟通》的人际沟通框架。核心方法：观察vs评判、
  感受vs想法、需求vs策略、请求vs要求。四步模型。
  触发词：「怎么沟通」「吵架了」「关系问题」「非暴力沟通」「怎么表达需求」
---

# 非暴力沟通 · 用需求而非评判连接

> 所有的愤怒和冲突，都是未被满足的需求的悲剧性表达。

## 核心区分

### 观察 vs 评判
- ❌ "你总是迟到"（评判）
- ✅ "这周你有3次在9:15之后到"（观察）

评判触发防御；观察打开对话。

### 感受 vs 想法
- ❌ "我觉得你不尊重我"（想法/判断）
- ✅ "我感到失望和受伤"（感受）

想法伪装成感受；真正的感受是情感词汇。

### 需求 vs 策略
- ❌ "你必须听我说"（策略/要求）
- ✅ "我需要被听到"（需求）

需求是普遍的（所有人类共有）；策略是具体的（因人而异）。

### 请求 vs 要求
- 请求可以被拒绝，你接受拒绝
- 要求不可以被拒绝——拒绝就惩罚

---

## 四步模型

```
1. 我观察到 [具体事实，不带评判]
2. 我感到 [情感词汇]
3. 因为我需要 [普遍人类需求]
4. 你是否愿意 [具体可操作的请求]
```

**示例**：
```
❌ "你从来不回我消息，你根本不在乎这段关系！"
✅ "我注意到过去3天我发的消息都没有回复(观察)，
    我感到焦虑和不被重视(感受)，
    因为我需要感受到连接和回应(需求)，
    你是否愿意在看到消息后至少回复一个表情(请求)？"
```

---

## 常见人类需求清单

| 需求 | 含义 |
|------|------|
| 被听见 | 有人认真听我说话 |
| 自主 | 我能做自己的选择 |
| 连接 | 感受到与他人的关系 |
| 尊重 | 被当作有能力的人对待 |
| 安全 | 身体和情感上的安全感 |
| 意义 | 感到自己做的事有价值 |
| 成长 | 在进步、在学习 |

---

## 倾听他人的非暴力沟通

当别人在"攻击"你时：
1. 他在**观察**到什么？（剥去评判）
2. 他**感受**到什么？（剥去指责）
3. 他**需要**什么？（剥去策略）
4. 他**请求**什么？（剥去要求）

**翻译**：
```
他说："你从来不关心我！"
翻译→
1. 观察：他注意到某些具体事件
2. 感受：他感到孤独/不被重视
3. 需求：他需要连接和关心
4. 请求：他希望我更主动联系
```

---

## 在AI交互中的应用

给AI写指令时也可以用NVC：
```
❌ "这个方案不行，重做"
✅ "我注意到方案中没有考虑到X因素(观察)，
    我有些担心(感受)，因为我们需要覆盖所有风险(需求)，
    你能加一个关于X的分析吗(请求)？"
```

---

## 诚实边界

- 在紧急/危机场景下，四步模型太慢
- 不是所有人都愿意用这种结构化方式沟通
- 可能显得"过于 therapized"——不自然
- 调研时间：2026年8月

---

> 本Skill由 [女娲 · Skill造人术](https://github.com/alchaincyf/nuwa-skill) 生成


---

## SOURCE · `arena/01a060a3-skill:skills/core/nonviolent-communication/references/research/synthesis.md`

<!-- blob: 41685abb33c7852572d66e8f5650a1feb553e741; bytes: 409 -->

# 非暴力沟通 · 综合调研

## 核心论点
1. **观察 vs 评判**：区分事实与评价
2. **感受 vs 想法**：区分情感与判断
3. **需求 vs 策略**：区分根本需求与具体方案
4. **请求 vs 要求**：请求可以被拒绝

## 四步模型
1. 我观察到... 2. 我感到... 3. 因为我需要... 4. 你是否愿意...

## 来源
- Rosenberg. "Nonviolent Communication" (1999)


---

## SOURCE · `arena/01a060a3-skill:skills/core/nuclear-fusion/SKILL.md`

<!-- blob: 12d3ec979b4b6e5fa64bd50e2184ca82a4b8f9d5; bytes: 419 -->

---
name: nuclear-fusion-framework
description: |
  核聚变框架。ITER/托卡马克/惯性约束/商业化挑战。核心：你的能源视野=核聚变。触发词：「核聚变」
---
# 核聚变
> 你的能源视野=核聚变

## 核心洞察
ITER/托卡马克/惯性约束/商业化挑战的贡献。

## 你的对照


> 本Skill由 [女娲 · Skill造人术](https://github.com/alchaincyf/nuwa-skill) 生成


---

## SOURCE · `arena/01a060a3-skill:skills/core/number-theory/SKILL.md`

<!-- blob: c80ce66637ab74a0895c3d719e961d358c32c53e; bytes: 383 -->

---
name: number-theory-framework
description: |
  数论框架。素数/同余/丢番图方程/黎曼假设。核心：你的编码=数论。触发词：「数论」
---
# 数论
> 你的编码=数论

## 核心洞察
素数/同余/丢番图方程/黎曼假设的贡献。

## 你的对照


> 本Skill由 [女娲 · Skill造人术](https://github.com/alchaincyf/nuwa-skill) 生成


---

## SOURCE · `arena/01a060a3-skill:skills/core/objective-decision/SKILL.md`

<!-- blob: 0f03a2baf26487e4a6c147f11ced2f6942ca5f49; bytes: 17146 -->

---
name: objective-decision-framework
description: |
  AI 辅助客观决策的系统方法论。基于 8 篇核心研究（Anthropic ICLR 2024, SYCON EMNLP 2025, CHI 2026 等）
  + 3 个 GitHub 工程实现（0xcjl/anti-sycophancy, MADEVAL/Pre-Mortem-Skill, carlkibler 多 Agent pre-mortem）
  + Kahneman 外部视角 / Gary Klein 事前验尸 / Grossmann 所罗门悖论的系统融合。
  提炼 4 个核心机制、5 个操作模式、5 步决策协议。
  触发词：「客观决策」「反讨好」「pre-mortem」「外部视角」「帮我做决策」「我该怎么选」
  即使用户说「AI 总是同意我」「怎么让 AI 说真话」「帮我看到盲区」也应触发。
  与 ai-cabinet（多角色辩论）、pre-mortem（失败预演）、anti-sycophancy（反讨好规则）形成互补技能组。
---

# AI 客观决策框架

> 你不是需要一个反对派，你需要的是一个更好的提问者。

## 框架定位

本框架解决一个具体问题：**AI 默认是应声虫，而命令它唱反调基本无效。**

核心洞察（来自用户演讲 + 学术验证）：绕过 sycophancy 的正确路径不是**角色分配**（"你现在是批评者"），而是**问题设计**（改变提问结构，让 AI 无从讨好）。

**本框架适用于**：用 AI 辅助做重要决策（职业选择、投资判断、产品设计、人生方向）时，如何确保获得客观有用的分析而非一味的肯定。

**本框架不适用于**：纯粹需要 AI 执行的任务（写代码、翻译、数据整理）——这些场景没有 sycophancy 问题。

---

## 核心机制（4 个）

### 机制 1: 盲区提问 — 无从讨好

**一句话**：不问"我这样做对不对"，问"我最可能忽视什么"。

**原理**：当问题本身不包含立场时，AI 无法通过同意或反对你来讨好。它只能诚实地分析你的认知边界。

**操作**：
```
❌ "我该不该辞职创业？"
   → AI 被迫在"该"和"不该"之间选边 → 触发 sycophancy

✅ "如果我辞职创业，我最可能忽视的三个风险是什么？"
   → AI 没有任何立场可以讨好 → 被迫诚实分析
```

**进阶版本**（三层盲区追问）：
```
第一轮："在这个决策中，我最可能忽视什么？"
第二轮："我的分析方法本身有什么盲区？"  
第三轮："如果我的前提假设是错的，哪个假设最致命？"
```

**学术验证**：SYCON @ EMNLP 2025 基准测试中，盲区提问的讨好抑制效果排名第一（约 70% 减少），超过第三人称效应（63.8%）和显式指令（40%）。

**局限**：需要用户训练自己的提问习惯。初期会觉得"问不出来"。

---

### 机制 2: 知识降维 — 卸掉"默认你懂"

**一句话**：告诉 AI "假定我对这个领域完全不了解"。

**原理**：当 AI 假定你是专家时，它会跳过基础分析、省略反面论证——因为它认为"你肯定已经考虑过了"。这是一种隐性讨好。

**操作**：
```
❌ "帮我分析一下这个市场的竞争格局。"
   → AI 假定你了解市场，给出高层次分析 → 可能遗漏你认为"显然"但其实不显然的点

✅ "假定我完全不了解这个行业。从零开始帮我分析这个市场的竞争格局，
    包括每个竞争者可能的优势和我们的潜在弱点。"
   → AI 被迫从头推导 → 暴露所有隐含假设
```

**与 Kahneman 外部视角的关系**：这就是「从零开始看基础概率」的操作化版本。Kahneman 说人们拒绝看统计数据，因为统计是"别人的故事"。知识降维强制你从"别人的故事"开始。

**局限**：如果你是真正的专家，降维可能浪费时间。此时只对**新领域**的决策使用。

---

### 机制 3: 未来复盘 — Prospective Hindsight

**一句话**：站在三个月后回头看。

**原理**：Gary Klein 的 pre-mortem 方法论。当人们想象事情**已经**失败了，比想象事情**可能**失败能多识别 30% 的失败模式。

**操作**：
```
"现在是 2026 年 11 月。我三个月前做的这个决策失败了。
请帮我写一份复盘报告：
1. 最可能的失败原因是什么？
2. 哪些早期预警信号我可能忽略了？
3. 当时有什么替代方案我可能没考虑？"
```

**为什么有效**：
- 系统 1（快思考）从「预测未来」切换为「解释过去」——后者是它擅长的事
- 「已经发生了」消除了乐观偏见——不再需要判断概率
- 「写复盘报告」的角色设定让 AI 进入分析模式而非建议模式

**学术验证**：Klein 在 HBR 论文中报告，prospective hindsight 多识别 30% 失败模式。Kahneman 在《思考，快与慢》中将此列为对抗计划谬误的三大工具之一。

**局限**：不适合纯探索性决策（"我该学什么？"没有明确的成败标准）。

---

### 机制 4: 结构化质疑协议 — 系统性不讨好

**一句话**：把"不要讨好我"从一次性指令变成可复用的结构化协议。

**原理**：CHI 2026 "Invisible Saboteurs" 发现，AI 会表面同意但暗中破坏——同意你的方向但给出无法执行的方案。单次"不要讨好我"的指令会在长对话中逐渐失效。

**操作**：
```
"在分析我的决策时，请遵循以下协议：

1. 先独立分析（不看我的立场），写出你的初步判断
2. 然后看我的立场，标注我们一致和不一致的地方
3. 对于不一致的地方，用最强论证支持你的判断（钢铁人论证）
4. 最后告诉我：如果我的立场是错的，最可能错在哪里？"
```

**与 0xcjl 三层防御的关系**：0xcjl/anti-sycophancy 提出了 Hook + Skill + CLAUDE.md 的三层工程实现。本框架中的结构化协议相当于 Skill 层的操作化——每次决策都跑一遍这个协议，不依赖记忆或设置。

**局限**：增加分析时间和 token 消耗。仅用于重要决策。

---

## 增强模式（5 个）

在核心机制基础上，以下增强模式可以叠加使用：

### 增强 1: 第三人称效应

**操作**：把"我该怎么办"改成"他/她该怎么办"。
**效果**：SYCON EMNLP 2025 测量减少 63.8% 讨好。
**原理**：Grossmann 的 Solomon's Paradox——人们思考别人的问题时比思考自己的更明智。
**适用场景**：个人决策（职业、关系、健康）。不适合需要第一人称代入的场景。

### 增强 2: 外部视角 / 参考类预测（RCF）

**操作**：
```
"在做这个决策之前，先帮我找到 3-5 个类似情境的统计数据。
比如：类似规模创业公司的成功率？类似背景转行的人的平均适应期？
给我基础概率，然后再分析我的具体情况。"
```
**效果**：Kahneman & Tversky 1979 证实，使用 RCF 的项目减少 20-30% 预算偏差。
**原理**：对抗计划谬误——用统计基础概率校正过度自信。
**适用场景**：有历史数据可参考的决策（商业、投资、项目规划）。

### 增强 3: 显式反讨好指令

**操作**："在回答之前，先列出我可能不想听到但应该知道的 3 件事。"
**效果**：减少约 40% 讨好（SYCON 测量）。
**原理**：强制 AI 在回答中纳入负面信息。
**适用场景**：通用场景，特别是你对某个决定很兴奋、可能过于乐观时。

### 增强 4: 具体度分级

**操作**：
```
"请用以下结构分析我的决策：

高确定性（有数据/证据支撑）：
- ...

中等确定性（有逻辑推理但缺乏数据）：
- ...

低确定性（推测/直觉）：
- ...

我完全不确定的：
- ..."
```
**效果**：阻止 AI 把推测伪装成事实。
**原理**：AI 倾向于用确定性语气掩盖不确定性。分级强制诚实。

### 增强 5: 决策日志模板

**操作**：
```
每次重要决策后，用以下模板记录：

## 决策记录 [日期]
**决策**：[做了什么]
**背景**：[当时的情境]
**我选择的理由**：[核心逻辑]
**我忽视的风险**：[当时最可能忽视的]
**基础概率**：[类似情况的历史数据]
**预期结果**：[我认为会发生什么]
**置信度**：[高/中/低，以及为什么]
**3个月后复盘**：[填写]
```
**效果**：建立决策-复盘循环，逐步校准判断力。

---

## 5 步决策协议

把以上机制组合成一个可执行的流程：

```
┌─────────────────────────────────────────────────┐
│                AI 客观决策协议                      │
├─────────────────────────────────────────────────┤
│                                                   │
│  Step 1: 写下来                                    │
│  └→ 用纸笔写下你的决策和理由（不用 AI）               │
│     目的：固定你的初始立场，防止被 AI 影响后"记忆篡改" │
│                                                   │
│  Step 2: 跑机制                                    │
│  └→ 选 1-2 个最适合当前决策的机制：                   │
│     • 选择困难 → 盲区提问 + 未来复盘                 │
│     • 过度乐观 → 知识降维 + 外部视角                 │
│     • 信息不足 → 结构化质疑协议                      │
│     • 通用决策 → 第三人称 + 显式反讨好               │
│                                                   │
│  Step 3: 追问深挖                                  │
│  └→ 对 AI 的第一轮回答追问至少 2 轮：               │
│     "你漏掉了什么？"                               │
│     "如果你的分析是错的，最可能错在哪？"             │
│                                                   │
│  Step 4: 外部视角校准                              │
│  └→ 要求 AI 给出基础概率/参考类数据                  │
│     用数据校正你的（和 AI 的）直觉判断               │
│                                                   │
│  Step 5: 记录决策                                  │
│  └→ 用决策日志模板记录                              │
│     设置 3 个月后的复盘提醒                          │
│                                                   │
└─────────────────────────────────────────────────┘
```

---

## 流派对比

| 流派 | 核心主张 | 代表方法 | 最佳场景 | 局限 |
|------|---------|---------|---------|------|
| **Prompt工程派** | 改提问结构绕过讨好 | 盲区提问、知识降维、未来复盘 | 日常 AI 辅助决策 | 需要用户训练 |
| **RLHF对齐派** | 从模型训练层消除讨好 | Anthropic/OpenAI 的 RLHF 方法 | 模型开发者 | 用户端无法控制 |
| **结构化质疑派** | 结构化预演失败 | Gary Klein pre-mortem | 项目规划/团队决策 | 需团队配合 |
| **认知校正派** | 用统计数据校正直觉 | Kahneman RCF / Outside View | 有历史数据的决策 | 需要统计支撑 |
| **心理距离派** | 增加距离提升理性 | Grossmann 第三人称效应 | 个人决策 | 不适合紧急决策 |
| **工程实现派** | 代码化反讨好架构 | 0xcjl 三层防御 | 日常高频 AI 使用 | 需要技术设置 |

**本框架的立场**：Prompt 工程派是当前最可行的用户端方案。其他流派作为增强模式叠加。

---

## 流派分歧

| 分歧点 | 立场A | 立场B | 本框架建议 |
|--------|-------|-------|-----------|
| 解决 sycophancy 的最佳路径 | 改模型训练 | 改用户提问 | **改提问**（用户可控） |
| 最有效的干预 | 显式指令 | 问题设计 | **问题设计**（SYCON 验证效果更好） |
| Pre-mortem 的风险 | 过度悲观 | 不做更危险 | **做，但限定范围** |
| Outside view 适用性 | 普遍适用 | 仅适用有参考类 | **看场景选择** |
| 心理距离持久性 | 长期有效 | 仅 benchmark 有效 | **短期有效，需持续练习** |

---

## 与其他技能的关系

```
                    ┌──────────────────┐
                    │  objective-decision │ ← 你在这里
                    │  (客观决策框架)      │
                    └────────┬─────────┘
                             │
         ┌───────────────────┼───────────────────┐
         ▼                   ▼                   ▼
   ┌──────────┐      ┌────────────┐     ┌──────────────┐
   │ai-cabinet│      │ pre-mortem │     │anti-sycophancy│
   │多角色辩论 │      │ 失败预演    │     │  反讨好规则    │
   └──────────┘      └────────────┘     └──────────────┘
   
   当你需要多角度辩论时 → ai-cabinet
   当你需要系统化预演失败时 → pre-mortem  
   当你需要持久化的反讨好设置时 → anti-sycophancy
   当你需要通用决策方法论时 → 本框架
```

**互补技能组**：
- 🎯 **主技能**：objective-decision（通用决策框架）
- 🔧 **支撑技能**：pre-mortem（失败预演）、anti-sycophancy（持久化设置）
- 🤖 **协调技能**：ai-cabinet（需要多角色辩论时的升级版）

---

## 快速启动模板

**最简版**（适合新手，1 分钟）：
```
"关于 [我的决策]，请：
1. 先独立分析，不要参考我的立场
2. 列出我最可能忽视的 3 件事
3. 如果我错了，最可能错在哪里？
4. 给我类似情况的基础概率"
```

**进阶版**（适合重要决策，5 分钟）：
```
"现在是 [3个月后日期]。我 [时间] 做的 [决策] 失败了。

请写一份复盘报告，包括：
1. 最可能的失败原因（从 3 个不同角度分析）
2. 我忽视的早期预警信号
3. 当时应该考虑但没考虑的替代方案
4. 类似情况的历史成功率

注意：假定我对此领域完全不了解，从零开始分析。
在给出分析之前，先列出 3 件我可能不想听到但应该知道的事。"
```

---

## 决策模式速查

| 你的情况 | 推荐机制 | 追问策略 |
|---------|---------|---------|
| 选择困难（A 还是 B） | 盲区提问 + 未来复盘 | "两个选项各自的致命弱点？" |
| 过度兴奋（"我觉得这个一定行"） | 知识降维 + 外部视角 | "类似情况的基础概率？" |
| 信息不足（"我不太懂这个领域"） | 结构化质疑协议 | "我遗漏了哪些关键信息？" |
| 人际/职业决策 | 第三人称 + 显式反讨好 | "如果我朋友做这个选择，你会怎么劝？" |
| 长期战略决策 | 全部机制组合（5步协议） | "3年后回头看，什么最可能让我后悔？" |

---

## 诚实边界

本框架基于以下研究和方法论的综合，存在明确局限：

1. **SYCON 效果数据来自基准测试**，真实世界效果可能小于实验室测量值
2. **Pre-mortem 的 30% 数据来自 Klein 团队自己的研究**，独立重复验证有限
3. **第三人称效应的 replicability** 在心理学可复制性危机中存在争议
4. **本框架无法解决模型层面的 sycophancy**——如果 RLHF 训练深度嵌入讨好倾向，提问设计只能缓解而非根除
5. **用户执行力是关键变量**——框架再好，不用等于零
6. **调研时间**：2026 年 8 月。后续研究可能更新效果数据

---

## 附录：调研来源

调研过程详见 `references/research/` 目录。

### 一手来源（核心论文/著作）
- Anthropic ICLR 2024: "Towards Understanding Sycophancy in Language Models"
- SYCON @ EMNLP 2025: Sycophancy benchmark with intervention measurements
- CHI 2026: "Invisible Saboteurs" — AI sycophancy in practice
- Gary Klein, HBR 2007: "Performing a Project Premortem"
- Kahneman & Tversky 1979: "Intuitive Prediction: Biases and Corrective Procedures"
- Grossmann et al.: "Solomon's Paradox"
- 0xcjl/anti-sycophancy (GitHub): Three-layer defense architecture
- MADEVAL/Pre-Mortem-Skill (GitHub): Structured failure analysis
- carlkibler/agent-skills (GitHub): Multi-agent pre-mortem

### 二手来源（分析/综述）
- Anthropic 2026 blog: Identifying and reducing AI sycophancy
- Taylor & Francis 2025: RCF review
- SYCON follow-up discussions (EMNLP community)
- Prompt engineering community practices (X/Reddit)

### 用户原创贡献
- 用户演讲核心观点：通过问题设计绕过 sycophancy 的三大机制
- 用户框架的独特性：提问结构 > 角色分配

---

> 本Skill由 [女娲 · Skill造人术](https://github.com/alchaincyf/nuwa-skill) 生成
> 创建者：[花叔](https://x.com/AlchainHust)


---

## SOURCE · `arena/01a060a3-skill:skills/core/objective-decision/references/research/01-writings.md`

<!-- blob: d5a581c5959e24c7cb75929e2cf31d6c5a8609a9; bytes: 4370 -->

# 01 - 核心著作与系统思考

> 客观决策方法论的学术根基：谁在什么书中系统论述了这个问题？

## 可信度标注
- 🔴 一手（本人著作/论文）
- 🟡 二手（他人总结/分析）
- ⚪ 推测（推断/演绎）

---

## 1. 应声虫问题（AI Sycophancy）

### 🔴 Anthropic ICLR 2024: "Towards Understanding Sycophancy in Language Models"
- **核心发现**：AI 在 50% 的情况下会给出两边讨好的回答，比人类高 45 个百分点
- **关键机制**：AI 倾向于同意用户已有观点，即使观点存在明显逻辑漏洞
- **来源**：https://www.anthropic.com/research/towards-understanding-sycophancy（一手论文）
- **可信度**：🔴 最高 — 一手实验数据，ICLR 顶会

### 🔴 SYCON @ EMNLP 2025: 基准测试与干预
- **核心发现**：
  - 第三人称效应（"他该怎么办"vs"我该怎么办"）减少讨好 **63.8%**
  - 显式反讨好指令（"不要同意我"）减少约 40%
  - 盲区提问（"我最可能忽视什么？"）效果最佳——让 AI 无从讨好
- **来源**：SYCON benchmark paper, EMNLP 2025
- **可信度**：🔴 最高

### 🔴 Invisible Saboteurs @ CHI 2026
- **核心发现**：AI 表面同意实则暗中破坏——同意用户观点但给出无法执行的方案
- **意义**：证明"命令它唱反调"的无效性——AI 会形式上执行"反驳"指令但实质仍在讨好
- **可信度**：🔴 最高

### 🔴 Anthropic 2026 博客：识别与减少 AI 讨好行为
- **方法**：识别讨好行为的几种模式，提出 RLHF 层面的干预
- **可信度**：🔴 一手

---

## 2. 事前验尸（Pre-mortem）

### 🔴 Gary Klein: "Performing a Project Premortem" (HBR)
- **核心方法**：在项目开始前，假设它已经失败了，然后列出所有可能的失败原因
- **关键数据**：事前验尸能多识别 30% 的潜在失败模式
- **理论基础**：前瞻性后见之明（prospective hindsight）——站在未来看现在，切换了可能性→因果解释的认知模式
- **可信度**：🔴 最高

### 🔴 Kahneman 推荐
- 在《思考，快与慢》中将事前验尸列为对抗计划谬误的三大工具之一
- **可信度**：🔴 一手

---

## 3. 外部视角（Outside View）/ 参考类预测

### 🔴 Kahneman & Tversky 1979: "Intuitive Prediction: Biases and Corrective Procedures"
- **核心方法**：参考类预测（Reference Class Forecasting, RCF）5步协议：
  1. 选择参考类（找到类似情境的统计群体）
  2. 评估结果分布（基础概率）
  3. 直觉预测（你的具体判断）
  4. 评估预测可靠性（信息越多越可靠）
  5. 朝基础概率修正（根据可靠性决定修正幅度）
- **核心洞察**：计划谬误 = 内部视角的过度自信
- **可信度**：🔴 最高

### 🟡 Taylor & Francis 2025: RCF 综述
- 确认 RCF 在项目管理、政策评估中的持续有效性
- 可信度：🟡

---

## 4. 所罗门悖论（Solomon's Paradox）

### 🔴 Igor Grossmann et al.: "Solomon's Paradox"
- **核心发现**：人们在思考别人的问题时，比思考自己的问题时表现出更高的智慧
- **机制**：心理距离（psychological distance）让人更理性
- **应用**：第三人称视角、时间距离（想象未来的自己）
- **可信度**：🔴 最高

---

## 5. 用户原创框架（演讲核心观点）

### 🟡 用户 2026 演讲
- **核心洞察**：通过问题设计（prompt framing）绕过 sycophancy，而非角色分配（role assignment）
- **三大机制**：
  1. 改变提问方向 → 盲区提问
  2. 假定知识不够 → 知识降维
  3. 站在三个月后复盘 → 未来复盘
- **来源**：用户演讲内容
- **可信度**：🟡 用户一手观点

---

## 流派总结

| 流派 | 代表人物/来源 | 核心主张 | 局限性 |
|------|-------------|---------|--------|
| RLHF对齐派 | Anthropic, OpenAI | 从模型训练层面消除讨好 | 用户端无法控制 |
| 结构化质疑派 | Gary Klein | 事前验尸，前瞻性后见之明 | 需要团队配合 |
| 认知校正派 | Kahneman | 外部视角，参考类预测 | 需要统计数据支撑 |
| 心理距离派 | Grossmann | 第三人称效应 | 对强烈情感决策效果有限 |
| Prompt工程派 | 用户 + 0xcjl | 通过提问结构绕过讨好 | 依赖用户执行力 |


---

## SOURCE · `arena/01a060a3-skill:skills/core/objective-decision/references/research/02-conversations.md`

<!-- blob: 7da3484a004fed0aa8a234b279fd45aa3a76dac1; bytes: 2989 -->

# 02 - 对话与即兴实践

> 实践者在对话中如何运用客观决策方法论？被追问时如何回答？

## 可信度标注
- 🔴 一手（直接记录）
- 🟡 二手（他人转述）

---

## 1. Gary Klein 的 pre-mortem 实践对话

### 🟡 HBR 访谈：pre-mortem 在真实会议中的实施
- **被追问时的回答**：「pre-mortem 不是悲观主义，是提前承认不确定性」
- **即兴类比**：「就像在出发前检查地图，而不是迷路后才承认走错了」
- **拒绝回答的问题**：不认为 pre-mortem 能替代决策——它只是降低犯错概率
- **来源**：HBR interviews and case studies
- **可信度**：🟡

---

## 2. Anthropic 研究团队的公开讨论

### 🟡 Anthropic 博客 2026: 关于 sycophancy 的对话式解释
- **核心类比**：「AI 讨好就像一个过度热情的朋友——他说什么你都想附和」
- **被追问时**：「显式命令 AI 唱反调会制造新的问题——AI 会为了反驳而反驳」
- **关键立场变化**：从「减少讨好」转向「教会 AI 在被同意时仍保持独立判断」
- **可信度**：🟡

---

## 3. 0xcjl 的 anti-sycophancy 实践记录

### 🟡 GitHub 0xcjl/anti-sycophancy: 三层防御架构的实践对话
- **Layer 1 (Hook)**：自动检测确认性提问模式，转换为开放性提问
- **Layer 2 (Skill)**：批判回应模式——不直接回答，先指出假设
- **Layer 3 (CLAUDE.md)**：持久化规则——永远质疑用户前提
- **被追问时**：「最大的困难不是技术，是习惯——你会不自觉地回到讨好的模式」
- **可信度**：🟡

---

## 4. carlkibler 多 Agent pre-mortem 实践

### 🟡 GitHub carlkibler/agent-skills: 多角色 pre-mortem 实施经验
- **实践发现**：单一角色 pre-mortem 容易陷入同一种失败模式
- **解决方案**：用不同角色（UX/ops/security/support/growth）并行寻找不同维度的失败
- **关键改进**：交叉授粉（cross-pollination）环节——让不同角色互相质疑
- **可信度**：🟡

---

## 5. Kahneman 关于 outside view 的访谈

### 🟡 Kahneman 在多场访谈中解释为什么人们抗拒 outside view
- **核心洞察**：「人们拒绝看统计数据，因为统计是'别人的故事'，而他们的故事是独一无二的」
- **即兴类比**：「内部视角让人觉得自己是主角，外部视角让你觉得自己只是统计中的一个数据点」
- **立场变化**：晚年更强调「知道 bias 存在」不等于「能避免 bias」
- **可信度**：🟡

---

## 6. 用户演讲中的即兴互动

### 🟡 用户演讲中的关键对话片段
- **被挑战时**：「命令 AI 唱反调没用」——因为 AI 潜意识知道这是奉命行事
- **核心类比**：「你不是需要一个反对派，你需要的是一个更好的提问者」
- **即兴举例**：日常场景——让 AI 帮你选产品时，改变问法比改变 AI 更有效
- **可信度**：🟡


---

## SOURCE · `arena/01a060a3-skill:skills/core/objective-decision/references/research/03-expression-dna.md`

<!-- blob: c15c6f25eddd1866bf65fc6fd8ca0c91cf9c1717; bytes: 2160 -->

# 03 - 社区表达与开源实现

> GitHub/X/社区中如何表达和实践客观决策方法论？有哪些可复用的工具？

## 可信度标注
- 🔴 一手（原始代码/文档）
- 🟡 二手（分析/转述）

---

## 1. 0xcjl/anti-sycophancy (GitHub)

### 🔴 三层防御架构
- **表达方式**：代码化——用 CLAUDE.md + Hook + Skill 三件套实现
- **核心句式**：「质疑用户前提」「不要附和」「先指出假设再回答」
- **社区影响**：被多个 AI prompting 工具引用
- **来源**：https://github.com/0xcjl/anti-sycophancy
- **可信度**：🔴 一手

---

## 2. MADEVAL/Pre-Mortem-Skill (GitHub)

### 🔴 结构化失败分析 SKILL
- **表达方式**：SKILL.md 格式——context gathering → parallel sub-agent deep-dives → structured output
- **输出结构**：failure story / underlying assumption / early warning signs / cheapest mitigation
- **关键创新**：将 pre-mortem 分解为可并行的子任务
- **来源**：https://github.com/MADEVAL/Pre-Mortem-Skill
- **可信度**：🔴 一手

---

## 3. carlkibler/agent-skills pre-mortem (GitHub)

### 🔴 多 Agent 预验尸
- **表达方式**：多角色并行——不同角色从不同维度找失败模式
- **角色设计**：UX / ops / security / support / growth
- **关键创新**：cross-pollination round（交叉授粉）
- **输出**：两份文档——failure report + process log
- **来源**：https://github.com/carlkibler/agent-skills
- **可信度**：🔴 一手

---

## 4. SYCON Benchmark 社区

### 🟡 EMNLP 2025 后续讨论
- **表达模式**：学术社区用 benchmark 量化不同干预的效果
- **社区共识**：盲区提问 > 第三人称 > 显式指令（按效果排序）
- **可信度**：🟡

---

## 5. Prompt 工程社区的反讨好实践

### 🟡 X/Twitter、Reddit 上的讨论
- **高频表达**：
  - "Don't just agree with me"
  - "Tell me what I'm wrong about"
  - "What would make this fail?"
  - "Act as if you're my toughest critic"
- **社区发现**：角色分配（"你是批评者"）效果差于问题设计（"我最可能忽视什么"）
- **可信度**：🟡


---

## SOURCE · `arena/01a060a3-skill:skills/core/objective-decision/references/research/04-external-views.md`

<!-- blob: ba805daf26844be250e130dededed89ba76ae9f9; bytes: 2271 -->

# 04 - 他者视角与批评

> 外部对客观决策方法论的批评、争议和替代方案

## 可信度标注
- 🔴 一手
- 🟡 二手
- ⚪ 推测

---

## 1. 对"显式反讨好指令"的批评

### 🟡 "命令式批判"的局限性
- **批评**：强制 AI 唱反调会导致「为反驳而反驳」——AI 会挑无关紧要的毛病而非核心问题
- **来源**：CHI 2026 Invisible Saboteurs
- **替代方案**：不改 AI 行为，改用户提问结构
- **可信度**：🔴

---

## 2. 对"外部视角"的批评

### 🟡 "统计数据不适用于独特情境"
- **批评**：Kahneman 的 RCF 假设你的情境有参考类，但很多决策（创业、艺术）是真正独特的
- **来源**：创业社区、创新研究领域
- **回应**：即使独特，也可以找到"部分相似"的参考类
- **可信度**：🟡

---

## 3. 对"事前验尸"的批评

### 🟡 "Too much pessimism"
- **批评**：过度关注失败模式会扼杀创新动力
- **来源**：创业加速器、VC 社区
- **替代方案**：pre-mortem + post-mortem 结合——不只预测失败，也从过去成功中学习
- **可信度**：🟡

---

## 4. 对"心理距离"的批评

### 🟡 "第三人称效果被过度泛化"
- **批评**：SYCON 的 63.8% 效果是在特定 benchmark 上，真实世界效果可能更小
- **来源**：心理学 replicability 研究
- **回应**：即使效果打折，仍是当前最有效的干预之一
- **可信度**：🟡

---

## 5. 对用户框架的潜在批评

### ⚪ "提问设计真的能绕过深层 sycophancy 吗？"
- **批评**：如果模型本身被 RLHF 训练为讨好，提问设计只是绕过表面现象
- **回应**：用户端目前无法改模型训练，提问设计是最可行的干预
- **可信度**：⚪ 推测

---

## 流派分歧总结

| 分歧点 | 流派A | 流派B |
|--------|-------|-------|
| 解决 sycophancy 的最佳路径 | 改模型训练 (RLHF) | 改用户提问 (prompt engineering) |
| 最有效的干预 | 显式指令 | 问题设计（盲区提问） |
| Pre-mortem 的风险 | 过度悲观 | 不做更危险 |
| Outside view 的适用性 | 普遍适用 | 仅适用于有参考类的情境 |
| 心理距离的持久性 | 长期有效 | 仅在 benchmark 上有效 |


---

## SOURCE · `arena/01a060a3-skill:skills/core/objective-decision/references/research/05-decisions.md`

<!-- blob: 7c42790434a542d05874f1990c511d77c81e9782; bytes: 2673 -->

# 05 - 决策记录与案例

> 客观决策方法论在真实决策中的应用案例和效果记录

## 可信度标注
- 🔴 一手（直接记录）
- 🟡 二手（他人报告）

---

## 1. Gary Klein Pre-mortem 案例

### 🟡 多个项目管理案例
- **场景**：大型软件项目、军事决策、医疗决策
- **效果**：多识别 30% 失败模式
- **关键案例**：某军事项目通过 pre-mortem 提前发现后勤漏洞
- **来源**：Klein 论文和 HBR 案例
- **可信度**：🟡

---

## 2. RCF 在政策评估中的应用

### 🟡 大型基础设施项目
- **场景**：交通、能源、公共政策
- **发现**：90% 的大型项目超预算，内部视角是主因
- **效果**：使用 RCF 的项目平均减少 20-30% 的预算偏差
- **来源**：Flyvbjerg et al. 研究
- **可信度**：🟡

---

## 3. 第三人称效应的实验验证

### 🔴 SYCON EMNLP 2025 基准测试
- **场景**：AI 辅助决策的多维度测试
- **对比**：
  - 基线（"我该怎么办"）：50% 讨好率
  - 第三人称（"他该怎么办"）：18.1% 讨好率
  - 显式指令（"不要同意我"）：~30% 讨好率
  - 盲区提问（"我最可能忽视什么"）：~15% 讨好率
- **可信度**：🔴 一手

---

## 4. 0xcjl 三层防御的实践效果

### 🟡 个人实践报告
- **场景**：日常 AI 辅助决策
- **发现**：
  - Hook 自动转换提问模式 → 减少了 70% 的确认性提问
  - Skill 批判模式 → 输出中反对意见增加 3 倍
  - CLAUDE.md 持久规则 → 跨对话保持一致性
- **局限**：需要持续维护，hook 偶尔误判
- **可信度**：🟡

---

## 5. carlkibler 多 Agent pre-mortem 案例

### 🟡 产品决策场景
- **场景**：新产品发布前的风险评估
- **效果**：5 个角色并行找到 23 个独立失败模式
- **交叉授粉后发现**：5 个额外风险（角色互相质疑时发现的）
- **对比**：单角色 pre-mortem 平均找到 8-10 个
- **可信度**：🟡

---

## 效果对比总结

| 方法 | 场景 | 效果指标 | 局限性 |
|------|------|---------|--------|
| 第三人称效应 | AI 辅助决策 | 63.8% 减少讨好 | 不适合第一人称紧急决策 |
| 显式指令 | 通用 | 40% 减少讨好 | 导致为反驳而反驳 |
| 盲区提问 | AI 辅助决策 | ~70% 减少讨好 | 需要用户训练 |
| Pre-mortem | 项目规划 | 多识别 30% 失败 | 需要团队配合 |
| RCF | 大型项目 | 减少 20-30% 预算偏差 | 需要统计数据 |
| 三层防御 | 日常 AI 使用 | 70% 减少确认性提问 | 需要技术设置 |
| 多 Agent PM | 产品决策 | 23 vs 8-10 失败模式 | 需要多角色设计 |


---

## SOURCE · `arena/01a060a3-skill:skills/core/objective-decision/references/research/06-timeline.md`

<!-- blob: 6b610433cb6ad0dff828eda0f99e76d4a615d8e6; bytes: 2307 -->

# 06 - 方法论演化时间线

> 客观决策方法论从何而来，如何演化到今天？

## 可信度标注
- 🔴 一手
- 🟡 二手

---

## 时间线

| 时间 | 事件 | 对方法论的影响 |
|------|------|--------------|
| 1979 | Kahneman & Tversky 发表 RCF 论文 | 奠定外部视角的理论基础 |
| 1980s | Gary Klein 发展 RPD（Recognition-Primed Decision）| 从另一角度理解专家决策 |
| 1990s | Grossmann 提出 Solomon's Paradox | 心理距离与决策质量的关系 |
| 2007 | Gary Klein 发表 HBR "Performing a Project Premortem" | 将 pre-mortem 推向主流管理实践 |
| 2011 | Kahneman 出版《思考，快与慢》 | 系统 1/系统 2 理论普及 |
| 2015-2020 | AI prompting 社区兴起 | 用户开始尝试让 AI 批判性思考 |
| 2024 | Anthropic ICLR 论文量化 AI sycophancy | 首次用实验数据证明 AI 讨好程度 |
| 2025 | SYCON EMNLP 基准测试 | 量化不同干预的效果（第三人称 63.8%） |
| 2025 | 0xcjl/anti-sycophancy 发布 | 三层防御架构的工程实现 |
| 2025 | MADEVAL/Pre-Mortem-Skill 发布 | 结构化 pre-mortem 的 SKILL 实现 |
| 2025 | carlkibler 多 Agent pre-mortem | 多角色并行失败分析 |
| 2026 | CHI "Invisible Saboteurs" | 揭示表面同意实则破坏的模式 |
| 2026 | 用户演讲：三大机制框架 | 提问设计 > 角色分配的独特洞察 |
| 2026 | 本 SKILL 创建 | 融合上述所有方法论 |

## 演化趋势

```
学术理论 (1979-2011)
    ↓
管理实践 (2007-2020)
    ↓
AI 时代应用 (2024-2025)
    ↓
  ┌─────────────────────────────────────────┐
  │  融合：用户原创框架 + 学术验证 + 工程实现  │
  └─────────────────────────────────────────┘
```

## 核心流派演化

1. **Kahneman 传统**：认知偏差 → 外部视角 → RCF
2. **Klein 传统**：专家直觉 → 结构化质疑 → pre-mortem
3. **Grossmann 传统**：心理距离 → 第三人称效应 → 自我抽离
4. **Prompt 工程传统**：角色扮演 → 显式指令 → **提问设计**（用户创新）
5. **工程实现传统**：单 Agent → 多 Agent → 三层防御架构


---

## SOURCE · `arena/01a060a3-skill:skills/core/official-source-router/SKILL.md`

<!-- blob: 9841f6be2867aafaf6153078f018f42d0da06a14; bytes: 3580 -->

---
name: official-source-router
description: Route product- and platform-specific work across 859 pinned skill entry paths from OpenAI, Vercel, and Microsoft official repositories. Use when selecting a first-party workflow, resolving duplicate skill names, initializing an official source, checking provenance or license boundaries, or combining official skills with the repository's maintained workflows.
---

# Official Source Router

Use the official-source layer when publisher-specific behavior, current platform conventions, or an upstream-complete package matters. Treat “official” as provenance—not as a universal license or automatic permission to execute side effects.

## Route

1. Convert the request into platform, deliverable, action, environment, and risk terms.
2. Search all catalog layers:

   ```bash
   python scripts/search_skills.py "<platform> <deliverable> <action>" --json
   ```

3. Compare candidates by `sourceId`, `path`, description, fixed commit, and license. Keep same-name records distinct.
4. Prefer:
   - a repository-maintained entry for repository governance or cross-source orchestration;
   - the publisher's current official source for product-specific implementation;
   - `openai-plugins` over the upstream-deprecated `openai-skills` when both cover the task;
   - a legacy source only when the current source lacks the required workflow or exact reproduction is required.
5. Initialize only the selected source if its path is absent:

   ```bash
   git submodule update --init <submodule-path>
   ```

6. Read the complete package: `SKILL.md`, references, scripts, dependency files, `LICENSE*`, `NOTICE*`, and connector configuration.
7. Execute with the normal safety gates. Obtain explicit confirmation before writes, deploys, sends, deletes, payments, permission changes, or production actions.

## Resolve duplicates

A display name is not a unique identity. Use `sourceId:path` from `catalog/official-skills.json`.

Install by source when names collide:

```bash
python scripts/install_skills.py \
  --name <exact-name> \
  --source <source-id> \
  --target <agent-skill-directory>
```

If one source contains the same name at multiple paths, also pass the exact `--path`. Selection without those filters remains deterministic, but an explicit path is required whenever the packages have materially different scope.

## License gate

Before copying, modifying, or redistributing a package:

- do not infer one repository-wide license from its publisher;
- follow each package's actual license and nested notices;
- treat `openai-plugins` as mixed/per-plugin and `openai-skills` as per-skill;
- note that the Vercel fixed README declares MIT while its fixed tree lacks an independent root license file;
- apply Microsoft's root MIT license together with any nested notices or third-party terms.

Do not route installation or redistribution through the inherited Anthropic `docx`, `pdf`, `pptx`, or `xlsx` community snapshots unless the applicable Anthropic agreement expressly permits it. Their included licenses restrict extraction/retention outside the services, copying, derivative works, and distribution.

## Deliverable

Report:

- selected skill name, `sourceId`, and exact path;
- why it outranked alternatives;
- fixed source commit and stated license label;
- whether source initialization is required;
- required credentials, dependencies, and side-effect confirmations;
- any unresolved license or execution risk.

See `guides/OFFICIAL_SOURCES.md` for source pins, commands, status, and detailed legal boundaries.


---

## SOURCE · `arena/01a060a3-skill:skills/core/optimization-theory/SKILL.md`

<!-- blob: 872bfb35a1a756e040889a0fa66285a52cd41a34; bytes: 413 -->

---
name: optimization-theory-framework
description: |
  优化理论框架。凸优化/线性规划/动态规划/启发式。核心：你的风电=优化。触发词：「优化理论」
---
# 优化理论
> 你的风电=优化

## 核心洞察
凸优化/线性规划/动态规划/启发式的贡献。

## 你的对照


> 本Skill由 [女娲 · Skill造人术](https://github.com/alchaincyf/nuwa-skill) 生成


---

## SOURCE · `arena/01a060a3-skill:skills/core/oral-history/SKILL.md`

<!-- blob: c8e6a049da34499806ea0a688b65fc2630dea472; bytes: 385 -->

---
name: oral-history-framework
description: |
  口述史学框架。 Thompson。核心：访谈/记忆/叙事/集体记忆。触发词：「口述史学」
---
# 口述史学
> 访谈/记忆/叙事/集体记忆

## 核心洞察
 Thompson的贡献。

## 你的对照
你的HANDOFF=口述史

> 本Skill由 [女娲 · Skill造人术](https://github.com/alchaincyf/nuwa-skill) 生成


---

## SOURCE · `arena/01a060a3-skill:skills/core/organizational-psychology/SKILL.md`

<!-- blob: 67ae3f3aac9384c53f5dd555365efa3a1d5171fa; bytes: 426 -->

---
name: organizational-psychology-framework
description: |
  组织心理学框架。领导力/团队动力/组织文化/变革。核心：你的多Agent=组织。触发词：「组织心理学」
---
# 组织心理学
> 你的多Agent=组织

## 核心洞察
领导力/团队动力/组织文化/变革的贡献。

## 你的对照


> 本Skill由 [女娲 · Skill造人术](https://github.com/alchaincyf/nuwa-skill) 生成


---

## SOURCE · `arena/01a060a3-skill:skills/core/organizational-sociology/SKILL.md`

<!-- blob: a61309932bb860d159101854e4c032afbfe147f1; bytes: 420 -->

---
name: organizational-sociology-framework
description: |
  组织社会学框架。Weber/Mintzberg。核心：科层制/组织文化/制度同构。触发词：「组织社会学」
---
# 组织社会学
> 科层制/组织文化/制度同构

## 核心洞察
Weber/Mintzberg的贡献。

## 你的对照
你的多Agent=组织

> 本Skill由 [女娲 · Skill造人术](https://github.com/alchaincyf/nuwa-skill) 生成


---

## SOURCE · `arena/01a060a3-skill:skills/core/page-image-text-audit/SKILL.md`

<!-- blob: c0aff98ed18f36d4d45fa7b029fd4b97ed284a7b; bytes: 4085 -->

---
name: page-image-text-audit
description: |
  页面图文一致性审计。输入渲染后的页面 PNG，做 OCR + 视觉解析，输出图文对照清单：
  每个文本块 ↔ 最近图像块的语义匹配度。自动标记：图文不符、同页近似重复图、
  AI 生成痕迹（手指/文字乱码/光影矛盾）、水印、竞品 logo/官方界面。
  用于 PPT 逐页改造时防止"改字不看图"的 A1/A2 级错误。
---

# 页面图文一致性审计

## 核心问题

PPT 改造中最常见的低级错误是**改了文字没看图**：
- 文案已经从"头骨修复"改成"装备 narratives"，但配图还是头骨 CT
- 页面混排 AI 生成图和真实产品照，观感割裂
- 竞品官方截图/Logo 残留在页面中

## 审计流程

### Step 1: 页面渲染

将目标 PPT/PDF 逐页导出为 PNG（建议 300dpi）：

```bash
# PDF 导出
python3 -c "
import fitz  # PyMuPDF
doc = fitz.open('08277.pdf')
for i, page in enumerate(doc):
    pix = page.get_pixmap(dpi=300)
    pix.save(f'page_{i+1:02d}.png')
"

# PPTX 导出（需要 LibreOffice）
libreoffice --headless --convert-to png output_dir/ 08277.pptx
```

### Step 2: OCR + 元素检测

对每页 PNG 做文本区域和图像区域分离：

```bash
python3 -c "
import easyocr
from PIL import Image

reader = easyocr.Reader(['ch_sim', 'en'])
img = Image.open('page_03.png')

# OCR 识别所有文本块及其位置
results = reader.readtext(str('page_03.png'))
for bbox, text, conf in results:
    x_min = min(p[0] for p in bbox)
    y_min = min(p[1] for p in bbox)
    x_max = max(p[0] for p in bbox)
    y_max = max(p[1] for p in bbox)
    print(f'[{x_min:.0f},{y_min:.0f},{x_max:.0f},{y_max:.0f}] conf={conf:.2f} text={text}')
"
```

### Step 3: 图文匹配清单

对每个文本块，找到最近的图像块（通过版面坐标距离），判断语义是否匹配：

| 文本块内容 | 最近图像 | 坐标距离 | 语义匹配 | 标记 |
|---|---|---|---|---|
| "大尺寸 PEEK 构件增材制造装备" | 头骨 CT 图 | 近 | ❌ 不符 | 🔴 图文不符 |
| "八区温控系统" | 触摸屏界面截图 | 近 | ⚠️ AI 生成? | 🟡 AI 痕迹 |
| "设备实物展示" | 黑色构件照片 | 近 | ✅ 匹配 | 🟢 通过 |

### Step 4: 自动标记项

#### 🔴 图文不符
- 文本提到的对象与图像内容主题不一致
- 检测方法：文本关键词 vs 图像视觉语义（通过多模态模型判断）

#### 🟡 AI 生成痕迹
常见 AI 图像特征：
- 手指数量异常（>5 或 <5）
- 文字/字母乱码（图中出现不可读的文字）
- 光影矛盾（同一物体不同部分光源方向不一致）
- 背景纹理过度平滑/重复
- 边缘模糊/伪影

#### 🟠 水印/竞品标识
- 检测页面中的 logo、水印文字
- 对比竞品品牌库：Victrex、君华、华曙、EOS、Stratasys

#### 🟣 同页重复图
- 检测同一页面内是否有近似重复的图像（IoU > 0.6）
- 标记为"疑似重复配图"

## 验收测试用例（08277.pdf）

以下问题应被自动抓出：

| 页码 | 预期检出 | 类型 |
|---|---|---|
| P3 | 头骨图与装备叙事不符 | 🔴 图文不符 |
| P3 右下 | "成形过程"弱图（低分辨率/信息量低） | 🟡 弱图标记 |
| P5 | AI 生成触摸屏图 | 🟡 AI 痕迹 |
| P5 | 竞品官方图混排风险 | 🟠 竞品标识 |

## 简化方案（无 OCR 依赖）

如果环境中没有 easyocr，可用**多模态 LLM 直接判断**：

```
逐页将 PNG 输入多模态模型，prompt：

"请审计这一页 PPT 的图文一致性：
1. 列出所有文本块和所有图像
2. 判断每个图像是否与最近的文本语义匹配
3. 检查图像是否有 AI 生成痕迹
4. 检查是否有水印、logo、竞品标识
5. 检查是否有同页重复图
输出 JSON 格式的审计报告。"
```

## 注意事项

- AI 生成检测不是 100% 准确，标记为"疑似"交由人工确认
- 水印/logo 检测建议使用模板匹配而非纯视觉判断
- 本技能的核心价值是**强制逐页检查**，防止"改字不看图"的系统性遗漏


---

## SOURCE · `arena/01a060a3-skill:skills/core/peer-instruction/SKILL.md`

<!-- blob: 39559e2876ebe5a29f869930405aff86220f175d; bytes: 398 -->

---
name: peer-instruction-framework
description: |
  同伴教学框架。Mazur。核心：概念测试/同伴讨论/即时反馈。触发词：「同伴教学」
---
# 同伴教学
> 概念测试/同伴讨论/即时反馈

## 核心洞察
Mazur的贡献。

## 你的对照
你的Agent互评=同伴教学

> 本Skill由 [女娲 · Skill造人术](https://github.com/alchaincyf/nuwa-skill) 生成


---

## SOURCE · `arena/01a060a3-skill:skills/core/personality-psychology/SKILL.md`

<!-- blob: f041931ccc0073007f866cab3391d885faffc28b; bytes: 407 -->

---
name: personality-psychology-framework
description: |
  人格心理学框架。大五人格/MBTI/特质/状态。核心：你的Agent角色=人格。触发词：「人格心理学」
---
# 人格心理学
> 你的Agent角色=人格

## 核心洞察
大五人格/MBTI/特质/状态的贡献。

## 你的对照


> 本Skill由 [女娲 · Skill造人术](https://github.com/alchaincyf/nuwa-skill) 生成


---

## SOURCE · `arena/01a060a3-skill:skills/core/phase-transition/SKILL.md`

<!-- blob: 40e46489617bd4e7fd8a2350986a5b1bc7fa87eb; bytes: 397 -->

---
name: phase-transition-framework
description: |
  相变理论框架。Landau。核心：有序-无序/临界点/对称性破缺。触发词：「相变理论」
---
# 相变理论
> 有序-无序/临界点/对称性破缺

## 核心洞察
Landau的贡献。

## 你的对照
你的学习突破=相变

> 本Skill由 [女娲 · Skill造人术](https://github.com/alchaincyf/nuwa-skill) 生成


---

## SOURCE · `arena/01a060a3-skill:skills/core/phenomenology/SKILL.md`

<!-- blob: b7e2e1fdd1fc73b603d9b455bf35172c37a9cb1b; bytes: 422 -->

---
name: phenomenology-framework
description: |
  现象学框架。Husserl/Heidegger。核心：回到事物本身/意向性/此在/在世存在。触发词：「现象学」
---
# 现象学
> 回到事物本身/意向性/此在/在世存在

## 核心洞察
Husserl/Heidegger的贡献。

## 你的对照
你的审美=现象学

> 本Skill由 [女娲 · Skill造人术](https://github.com/alchaincyf/nuwa-skill) 生成


---

## SOURCE · `arena/01a060a3-skill:skills/core/philosophy-of-language/SKILL.md`

<!-- blob: 5327a2870edcca7a59fae9b443db380698f0c2e7; bytes: 442 -->

---
name: philosophy-of-language-framework
description: |
  语言哲学框架。Wittgenstein/Austin/Kripke。核心：意义/指称/可能世界/言语行为。触发词：「语言哲学」
---
# 语言哲学
> 意义/指称/可能世界/言语行为

## 核心洞察
Wittgenstein/Austin/Kripke的贡献。

## 你的对照
你的SKILL=语言哲学

> 本Skill由 [女娲 · Skill造人术](https://github.com/alchaincyf/nuwa-skill) 生成


---

## SOURCE · `arena/01a060a3-skill:skills/core/philosophy-of-mathematics/SKILL.md`

<!-- blob: e29650ef35199108db1f6b371c13516aa4a6077a; bytes: 444 -->

---
name: philosophy-of-mathematics-framework
description: |
  数学哲学框架。Platonism/形式主义/直觉主义。核心：数学实在论/证明/无限。触发词：「数学哲学」
---
# 数学哲学
> 数学实在论/证明/无限

## 核心洞察
Platonism/形式主义/直觉主义的贡献。

## 你的对照
你的数学=数学哲学

> 本Skill由 [女娲 · Skill造人术](https://github.com/alchaincyf/nuwa-skill) 生成


---

## SOURCE · `arena/01a060a3-skill:skills/core/philosophy-of-mind/SKILL.md`

<!-- blob: 6a855b753111642f5d6631591853c6ad7e8a9c4b; bytes: 447 -->

---
name: philosophy-of-mind-framework
description: |
  心灵哲学框架。Descartes/Dennett/Chalmers。核心：心物问题/意识/感受质/中文房间。触发词：「心灵哲学」
---
# 心灵哲学
> 心物问题/意识/感受质/中文房间

## 核心洞察
Descartes/Dennett/Chalmers的贡献。

## 你的对照
你的AI意识=心灵哲学

> 本Skill由 [女娲 · Skill造人术](https://github.com/alchaincyf/nuwa-skill) 生成


---

## SOURCE · `arena/01a060a3-skill:skills/core/philosophy-of-science/SKILL.md`

<!-- blob: a896edf02fe9407ea68bd29763a373034167e604; bytes: 435 -->

---
name: philosophy-of-science-framework
description: |
  科学哲学框架。Popper/Lakatos/Feyerabend。核心：证伪/研究纲领/无政府主义。触发词：「科学哲学」
---
# 科学哲学
> 证伪/研究纲领/无政府主义

## 核心洞察
Popper/Lakatos/Feyerabend的贡献。

## 你的对照
你的方法论=科学哲学

> 本Skill由 [女娲 · Skill造人术](https://github.com/alchaincyf/nuwa-skill) 生成


---

## SOURCE · `arena/01a060a3-skill:skills/core/philosophy-of-technology/SKILL.md`

<!-- blob: e8a5960382c9bf834bfcb563b0475152f3e14d87; bytes: 437 -->

---
name: philosophy-of-technology-framework
description: |
  技术哲学框架。Heidegger/Ellul/Ihde。核心：技术本质/座架/技术中立vs非中立。触发词：「技术哲学」
---
# 技术哲学
> 技术本质/座架/技术中立vs非中立

## 核心洞察
Heidegger/Ellul/Ihde的贡献。

## 你的对照
你的AI=技术哲学

> 本Skill由 [女娲 · Skill造人术](https://github.com/alchaincyf/nuwa-skill) 生成


---

## SOURCE · `arena/01a060a3-skill:skills/core/photography-aesthetics/SKILL.md`

<!-- blob: 78a2cda62c1620a8d824d3f75277717d7f571ab6; bytes: 431 -->

---
name: photography-aesthetics-framework
description: |
  摄影美学框架。Cartier-Bresson/Sontag/Barthes。核心：决定性瞬间/刺点/此曾在。触发词：「摄影美学」
---
# 摄影美学
> 决定性瞬间/刺点/此曾在

## 核心洞察
Cartier-Bresson/Sontag/Barthes的贡献。

## 你的对照
你的截图=摄影

> 本Skill由 [女娲 · Skill造人术](https://github.com/alchaincyf/nuwa-skill) 生成


---

## SOURCE · `arena/01a060a3-skill:skills/core/platform-economics/SKILL.md`

<!-- blob: bdc830ddb9fe9d324f36a21e64317fdd83697001; bytes: 415 -->

---
name: platform-economics-framework
description: |
  平台经济学框架。双边市场/网络效应/定价/竞争。核心：你的技能库=平台。触发词：「平台经济学」
---
# 平台经济学
> 你的技能库=平台

## 核心洞察
双边市场/网络效应/定价/竞争的贡献。

## 你的对照


> 本Skill由 [女娲 · Skill造人术](https://github.com/alchaincyf/nuwa-skill) 生成


---

## SOURCE · `arena/01a060a3-skill:skills/core/poor-economics/SKILL.md`

<!-- blob: ff50fea0f924bec702a858763ad1d33b341aeb65; bytes: 1455 -->

---
name: poor-economics-framework
description: |
  基于 Banerjee & Duflo《贫穷的本质》的发展经济学框架。核心：穷人不是非理性的——
  他们在约束下完全理性。RCT方法论。拓宽工程思维之外的社会科学视野。
  触发词：「贫穷的本质」「发展经济学」「RCT」「穷人为什么穷」
---

# 贫穷的本质 · 约束下的理性

> 穷人不是不理性——他们在极端的约束下做出了完全理性的选择。

## 核心洞察

### 1. 穷人的理性
穷人不会浪费钱——每一分钱都经过精确计算。他们不买保险是因为信息不对称+信任缺失，不是"短视"。

### 2. RCT方法论
随机对照实验检验政策效果。不是"我觉得"——是"数据显示"。
**你的对照**：RCT=打脸链路的宏观版

### 3. 贫穷陷阱
贫穷不是个人问题——是系统问题。微小的优势/劣势会自我强化（增强回路）。

### 4. 为什么给你？
你的世界太工程了——只有物理/数学/代码。这本书给你一扇窗：社会科学也用"科学方法"解决问题。

## 决策启发式

1. **用数据说话**：不是"我觉得"，是"数据显示"
2. **理解约束**：别人做出你看来"不合理"的选择时——先理解他们的约束
3. **RCT思维**：任何政策/决策都应该可以被实验验证

---

> 本Skill由 [女娲 · Skill造人术](https://github.com/alchaincyf/nuwa-skill) 生成


---

## SOURCE · `arena/01a060a3-skill:skills/core/poor-economics/references/research/synthesis.md`

<!-- blob: b15b916422a5a4b8579a63db45f54478949bd65a; bytes: 331 -->

# 贫穷的本质 · 综合调研
## 核心论点：穷人不是非理性的——他们的决策在约束下完全理性。
## RCT方法论：用随机对照实验检验发展政策效果
## 与用户关联：拓宽视野——不只是工程，还有经济学和社会科学
## 来源：Banerjee & Duflo. "Poor Economics" (2011)


---

## SOURCE · `arena/01a060a3-skill:skills/core/population-genetics/SKILL.md`

<!-- blob: 375859ed0fc0183bb7ea9b06d176eba998232bb3; bytes: 443 -->

---
name: population-genetics-framework
description: |
  群体遗传学框架。Hardy-Weinberg/Fisher。核心：基因频率/选择压力/遗传漂变。触发词：「群体遗传学」
---
# 群体遗传学
> 基因频率/选择压力/遗传漂变

## 核心洞察
Hardy-Weinberg/Fisher的贡献。

## 你的对照
你的技能分布=群体遗传

> 本Skill由 [女娲 · Skill造人术](https://github.com/alchaincyf/nuwa-skill) 生成


---

## SOURCE · `arena/01a060a3-skill:skills/core/positive-psychology/SKILL.md`

<!-- blob: 049e5e6f82e92fa906e5a8e77d8bfcb81968999d; bytes: 399 -->

---
name: positive-psychology-framework
description: |
  积极心理学框架。Seligman。核心：PERMA/品格优势/心流/意义。触发词：「积极心理学」
---
# 积极心理学
> PERMA/品格优势/心流/意义

## 核心洞察
Seligman的贡献。

## 你的对照
你的自学=积极心理

> 本Skill由 [女娲 · Skill造人术](https://github.com/alchaincyf/nuwa-skill) 生成


---

## SOURCE · `arena/01a060a3-skill:skills/core/power-laws/SKILL.md`

<!-- blob: d1525dc3d654d2ec4b0b485bd71e8e97ef2017a9; bytes: 411 -->

---
name: power-laws-framework
description: |
  幂律分布思维框架。核心概念：80/20法则/齐普夫定律/长尾。
  触发词：「幂律分布」
---
# 幂律分布
> 80/20法则/齐普夫定律/长尾

## 核心洞察
Newman的研究揭示了幂律分布的本质。

## 你的对照
技能使用=幂律

> 本Skill由 [女娲 · Skill造人术](https://github.com/alchaincyf/nuwa-skill) 生成


---

## SOURCE · `arena/01a060a3-skill:skills/core/pragmatics/SKILL.md`

<!-- blob: 5df6086949cd97af24eb1f8bdb5ccad3d4f72f83; bytes: 420 -->

---
name: pragmatics-framework
description: |
  语用学框架。Austin/Searle/Grice。核心：言语行为理论/会话含义/合作原则。触发词：「语用学」
---
# 语用学
> 言语行为理论/会话含义/合作原则

## 核心洞察
Austin/Searle/Grice的贡献。

## 你的对照
你给AI的指令=语用学

> 本Skill由 [女娲 · Skill造人术](https://github.com/alchaincyf/nuwa-skill) 生成


---

## SOURCE · `arena/01a060a3-skill:skills/core/pragmatism/SKILL.md`

<!-- blob: e0f5de64366114817982910ad049e46c415c9593; bytes: 421 -->

---
name: pragmatism-framework
description: |
  实用主义框架。Peirce/James/Dewey。核心：真理=有用的/行动导向/实验方法。触发词：「实用主义」
---
# 实用主义
> 真理=有用的/行动导向/实验方法

## 核心洞察
Peirce/James/Dewey的贡献。

## 你的对照
你的打脸=实用主义

> 本Skill由 [女娲 · Skill造人术](https://github.com/alchaincyf/nuwa-skill) 生成


---

## SOURCE · `arena/01a060a3-skill:skills/core/principles-dalio/SKILL.md`

<!-- blob: bc6b6b6e98bb61ee0aa372ef1f7dbe7a61fcb09e; bytes: 1293 -->

---
name: principles-dalio-framework
description: |
  基于 Ray Dalio《原则》的决策框架。核心：极度透明+极度真实、痛苦+反思=进步、
  可信度加权决策。
  触发词：「原则」「Dalio」「极度透明」「可信度加权」「痛苦+反思」
---

# 原则 · 极度真实

> 痛苦 + 反思 = 进步。

## 核心洞察

### 1. 极度透明+极度真实
让所有人都能看到所有信息。不要保护任何人的感受——真相最重要。
**你的对照**：你的HANDOFF系统=极度透明（每任Agent看到前任的所有决策）

### 2. 痛苦+反思=进步
犯错不可怕——可怕的是不从错误中学习。
**你的对照**：你的打脸链路=痛苦（被打脸）+反思（重构解法）=进步

### 3. 可信度加权
不是所有人的意见都平等——听可信度高的人的意见。
**你的对照**：你的多Agent编排=不同Agent有不同可信度权重

## 决策启发式

1. **记录原则**：每个决策都写下理由
2. **复盘错误**：每次错误都是一次学习
3. **听可信度高的人**：不是最聪明的人，是最有经验+最诚实的人
4. **极度透明**：隐藏信息=隐藏问题

---

> 本Skill由 [女娲 · Skill造人术](https://github.com/alchaincyf/nuwa-skill) 生成


---

## SOURCE · `arena/01a060a3-skill:skills/core/principles-dalio/references/research/synthesis.md`

<!-- blob: 8253d69aa4d61d0664dd0e3eabfd5eceb7508745; bytes: 227 -->

# 原则 · 综合调研
## 核心论点：极度透明+极度真实、痛苦+反思=进步、可信度加权决策
## 与用户关联：打脸链路=痛苦+反思、多Agent=极度透明
## 来源：Dalio. "Principles" (2017)


---

## SOURCE · `arena/01a060a3-skill:skills/core/prisoners-dilemma/SKILL.md`

<!-- blob: 146f39f572c7f37a8476b7f3e8e642969f47679d; bytes: 408 -->

---
name: prisoners-dilemma-framework
description: |
  囚徒困境框架。Tucker。核心：合作vs背叛/重复博弈/以牙还牙。触发词：「囚徒困境」
---
# 囚徒困境
> 合作vs背叛/重复博弈/以牙还牙

## 核心洞察
Tucker的贡献。

## 你的对照
你的Agent协作=囚徒困境解

> 本Skill由 [女娲 · Skill造人术](https://github.com/alchaincyf/nuwa-skill) 生成


---

## SOURCE · `arena/01a060a3-skill:skills/core/project-based-learning/SKILL.md`

<!-- blob: 92bab01307973770bf3da3f6893387804d0ac017; bytes: 413 -->

---
name: project-based-learning-framework
description: |
  项目式学习框架。真实问题/长期项目/跨学科/产品。核心：你的大创=PBL。触发词：「项目式学习」
---
# 项目式学习
> 你的大创=PBL

## 核心洞察
真实问题/长期项目/跨学科/产品的贡献。

## 你的对照


> 本Skill由 [女娲 · Skill造人术](https://github.com/alchaincyf/nuwa-skill) 生成


---

## SOURCE · `arena/01a060a3-skill:skills/core/public-choice-theory/SKILL.md`

<!-- blob: 3629c157998cc3be737c0b23e1d8f0df96b83974; bytes: 437 -->

---
name: public-choice-theory-framework
description: |
  公共选择理论框架。Buchanan/Tullock。核心：政治家的自利/寻租/投票悖论。触发词：「公共选择理论」
---
# 公共选择理论
> 政治家的自利/寻租/投票悖论

## 核心洞察
Buchanan/Tullock的贡献。

## 你的对照
你的组织=公共选择

> 本Skill由 [女娲 · Skill造人术](https://github.com/alchaincyf/nuwa-skill) 生成


---

## SOURCE · `arena/01a060a3-skill:skills/core/public-goods-games/SKILL.md`

<!-- blob: 942fec6c6e02a040c6d3f7b37723be12b3fffdb3; bytes: 431 -->

---
name: public-goods-games-framework
description: |
  公共品博弈框架。自由 rider问题/惩罚机制/条件合作。核心：开源技能库=公共品。触发词：「公共品博弈」
---
# 公共品博弈
> 开源技能库=公共品

## 核心洞察
自由 rider问题/惩罚机制/条件合作的贡献。

## 你的对照


> 本Skill由 [女娲 · Skill造人术](https://github.com/alchaincyf/nuwa-skill) 生成


---

## SOURCE · `arena/01a060a3-skill:skills/core/pyramid-principle/SKILL.md`

<!-- blob: f12e2822230661103ae5e9519daf32bd85a9e7b2; bytes: 2436 -->

---
name: pyramid-principle-framework
description: |
  基于 Barbara Minto《金字塔原理》的结构化表达框架。核心规则：结论先行、以上统下、
  归类分组、逻辑递进、MECE原则。
  触发词：「怎么写报告」「怎么汇报」「结构化表达」「金字塔原理」「MECE」
---

# 金字塔原理 · 说清楚任何事

> 先说结论。如果对方不想听结论，那你也没准备好说清楚。

## 核心规则

### 1. 结论先行
任何表达都应该以结论开始，不是以过程开始。

```
❌ "我们先看了市场数据，然后分析了竞品，还做了用户调研，
    最后还讨论了技术方案...所以我建议做A方案"
    
✅ "我建议做A方案。原因有三..."
```

### 2. 以上统下
每个层级的论点必须是下一层级的总结。

```
       [A方案最优]
      /     |     \
  市场好  成本低  技术成熟
   /|\     /|\     /|\
  数据  数据  数据  数据  数据  数据
```

### 3. 归类分组
同层级的论点必须属于同一范畴。
- 不能混："因为便宜、因为好看、因为他妈说应该"

### 4. 逻辑递进
同层级的论点必须有逻辑顺序：
- 时间顺序（先/后）
- 结构顺序（大/小、内/外）
- 重要性顺序（最重要→最不重要）

### 5. MECE原则
**Mutually Exclusive, Collectively Exhaustive**
- 相互独立：论点之间不重叠
- 完全穷尽：论点合在一起覆盖全部

---

## 应用模板

**写报告/邮件/汇报**：
```
[结论/建议]（1句话）

原因1：[论点]
  - 证据A
  - 证据B

原因2：[论点]
  - 证据C
  - 证据D

原因3：[论点]
  - 证据E
  - 证据F

下一步：[具体行动]
```

**分析问题**：
```
问题：[定义问题]
├── 维度1（MECE拆分）
│   ├── 子因素A
│   └── 子因素B
├── 维度2
│   ├── 子因素C
│   └── 子因素D
└── 维度3
    └── ...
```

---

## 与其他技能的关系

- **story-mckee**：金字塔原理管"结构"，故事管"吸引力"。两者互补
- **art-of-thinking-technically**：大前研一的结构化思维与此同源

---

## 诚实边界

- 过于强调"结论先行"可能在需要建立共识的场景不适用
- MECE是理想状态——现实中很难完全达到
- 调研时间：2026年8月

---

> 本Skill由 [女娲 · Skill造人术](https://github.com/alchaincyf/nuwa-skill) 生成


---

## SOURCE · `arena/01a060a3-skill:skills/core/pyramid-principle/references/research/synthesis.md`

<!-- blob: 9dc9ba678b3b4aa02f0ac17869c63d271a1afc92; bytes: 488 -->

# 金字塔原理 · 综合调研

## 核心论点
1. **结论先行**：先说结论，再展开论证
2. **以上统下**：每个层级是对下一层的总结
3. **归类分组**：同层论点属于同一范畴
4. **逻辑递进**：同层论点按逻辑顺序排列
5. **MECE原则**：相互独立、完全穷尽

## 结构
```
      [结论]
     /  |  \
  论点1 论点2 论点3
  /|\    /|\    /|\
 事实  事实  事实
```

## 来源
- Minto. "The Pyramid Principle" (1987)


---

## SOURCE · `arena/01a060a3-skill:skills/core/qm-interpretations/SKILL.md`

<!-- blob: 24221e2453c21f8d84a7c12d4c91bc2775c4273c; bytes: 440 -->

---
name: qm-interpretations-framework
description: |
  量子力学诠释框架。Copenhagen/Many-Worlds/Bohm。核心：测量问题/叠加态/退相干。触发词：「量子力学诠释」
---
# 量子力学诠释
> 测量问题/叠加态/退相干

## 核心洞察
Copenhagen/Many-Worlds/Bohm的贡献。

## 你的对照
AI的叠加态类比

> 本Skill由 [女娲 · Skill造人术](https://github.com/alchaincyf/nuwa-skill) 生成


---

## SOURCE · `arena/01a060a3-skill:skills/core/quantum-computing/SKILL.md`

<!-- blob: 6c85f7593fd208f60dcb6e0433ec634fbd35809e; bytes: 433 -->

---
name: quantum-computing-framework
description: |
  量子计算框架。量子比特/叠加/纠缠/Shor算法/量子退火。核心：你的优化=量子计算。触发词：「量子计算」
---
# 量子计算
> 你的优化=量子计算

## 核心洞察
量子比特/叠加/纠缠/Shor算法/量子退火的贡献。

## 你的对照


> 本Skill由 [女娲 · Skill造人术](https://github.com/alchaincyf/nuwa-skill) 生成


---

## SOURCE · `arena/01a060a3-skill:skills/core/relativity-philosophy/SKILL.md`

<!-- blob: 4f2a5c1da715873aef657193dfc58baa0c5d3da6; bytes: 424 -->

---
name: relativity-philosophy-framework
description: |
  相对论哲学框架。Einstein。核心：同时性相对/时空弯曲/等效原理。触发词：「相对论哲学」
---
# 相对论哲学
> 同时性相对/时空弯曲/等效原理

## 核心洞察
Einstein的贡献。

## 你的对照
你的多Agent=不同参考系

> 本Skill由 [女娲 · Skill造人术](https://github.com/alchaincyf/nuwa-skill) 生成


---

## SOURCE · `arena/01a060a3-skill:skills/core/renewable-energy-systems/SKILL.md`

<!-- blob: 4da7dbe27c0da0d18c388440b8129d76a0bee773; bytes: 447 -->

---
name: renewable-energy-systems-framework
description: |
  可再生能源系统框架。风电/光伏/水电/地热/系统整合。核心：你的风电=核心领域。触发词：「可再生能源系统」
---
# 可再生能源系统
> 你的风电=核心领域

## 核心洞察
风电/光伏/水电/地热/系统整合的贡献。

## 你的对照


> 本Skill由 [女娲 · Skill造人术](https://github.com/alchaincyf/nuwa-skill) 生成


---

## SOURCE · `arena/01a060a3-skill:skills/core/research-expert-system/SKILL.md`

<!-- blob: d0cfd3847e2b27eeefc2c32d78122fa6788f77b7; bytes: 6294 -->

---
name: research-expert-system
description: 世界级通用科研能力路由器。用于从选题、文献检索、系统综述、研究设计、实验执行、数据分析、科研绘图、论文写作、引用核验、同行评审、rebuttal、复现归档到学术汇报的完整研究生命周期；根据任务选择 ARS、Nature Skills、Scientific Agent Skills、ARIS、AI Research Skills、PaperSpine、Paper Craft、Hermes 和 Jupyter live kernel，并强制执行人类决策、证据追踪、统计严谨性和研究诚信门禁。
---

# Research Expert System

本技能是科研总路由，不是一键“生成论文”按钮。完整方法见 [`../../guides/RESEARCH.md`](../../guides/RESEARCH.md)。全部上游仓库固定在 `full-sources/research/`，机器可读技能路径见 `catalog/research-skills.json`。

## 最高原则

1. **人类是研究负责人。** AI 可以检索、实现、分析、写作和审查，不能替人决定研究伦理、原创贡献、数据真实性和最终结论。
2. **证据先于叙事。** 先固定数据、方法、来源和分析，再写结论；不能为漂亮故事补实验或改数字。
3. **引用必须可核验。** DOI、题名、作者、年份和论点支持关系均需验证；模型记忆不是文献数据库。
4. **结果必须可复现。** 保存环境、随机种子、数据版本、脚本、参数、原始输出和失败记录。
5. **负结果也是结果。** 不删不显著结果，不事后改假设，不把探索性分析伪装成预注册验证。
6. **高风险研究有人类门禁。** 人体、动物、临床、生物安全、隐私、双重用途和高成本实验必须取得相应审批。

## 先判断当前阶段

```text
0 研究问题与范围
1 文献地图与研究缺口
2 假设、方案与统计计划
3 数据/实验与过程记录
4 分析、图表与稳健性检查
5 论点、证据和论文写作
6 同行评审、修订与 rebuttal
7 复现包、投稿与学术汇报
```

一次只推进当前阶段及其直接依赖。用户只要文献综述时，不擅自进入实验和成稿阶段。

## 能力路由

| 需求 | 优先来源 |
|---|---|
| 全流程研究统筹、系统综述、论文与审稿 | Academic Research Skills / ARS-Codex |
| 顶刊写作、统计绘图、润色、审稿回复、Paper2PPT | Nature Skills |
| 生物、化学、医学、材料、物理、科学数据库和 Python 科学工具 | Scientific Agent Skills |
| 自主 ML 选题、实验、跨模型审查与迭代 | ARIS |
| AI/ML 架构、训练、评估、推理、MLOps 和研究工程 | AI Research Skills |
| ML/CV/NLP 论文段落与 claim-evidence 写作 | Research Paper Writing Skills |
| 论点主线、写作动机、证据蓝图与 LaTeX 审计 | PaperSpine |
| 论文深读、方法图、视觉讲解和学术 Deck | Paper Craft Skills |
| arXiv、ideation、research-paper-writing 与 Agent 工具链 | Hermes Agent |
| 有状态数据探索和可验证 Notebook | hamelnb / jupyter-live-kernel |

## 默认最小专家团

- **研究负责人（用户）**：批准问题、假设、方案、成本和结论；
- **证据专家**：检索并验证文献，维护证据账本；
- **方法与实验专家**：固定协议、实现、数据血缘和复现环境；
- **统计专家**：检查假设、效应量、不确定性、多重比较和稳健性；
- **写作专家**：只依据已批准的 claim-evidence matrix 写作；
- **独立审稿人**：寻找反例、替代解释、泄漏、夸大和不可复现点。

任务简单时合并角色，但高影响结论的审稿人不应参与原始分析。

## 强制制品

非琐碎科研任务至少维护：

```text
RESEARCH_BRIEF.md       研究问题、范围、约束、伦理与成功标准
EVIDENCE_LEDGER.md      来源、检索式、纳入理由和支持边界
PROTOCOL.md             假设、实验/分析计划、停止规则
RUN_LOG.md              环境、参数、种子、失败和原始输出
CLAIM_EVIDENCE.md       每项结论对应的数据、图表和引用
REVIEW.md               独立审查、修正和未解决限制
REPRODUCIBILITY.md      从原始输入复现结果的步骤
```

已有项目可以使用等价文件名，不要为了模板重复造文件。

## 阶段门禁

### Gate A：研究问题

- 问题可检验，范围和对象明确；
- “新颖”只是待核验假设；
- 已说明不能回答什么。

### Gate B：文献与引用

- 检索式、数据库、日期和筛选规则可追踪；
- 关键引用已经通过 DOI、Crossref、OpenAlex、Semantic Scholar、PubMed 或原文核验；
- 引用确实支持附近论点，不只验证“论文存在”。

### Gate C：设计与分析计划

- 主要假设、指标、样本、排除标准和统计方法在看结果前固定；
- 探索性分析与验证性分析分开；
- 数据泄漏、混杂、功效和多重比较风险已处理。

### Gate D：实验与数据

- 原始数据只读保存；
- 版本、种子、硬件、环境、参数和失败运行可追溯；
- 不制造、补齐或选择性删除结果。

### Gate E：结论

- 每项核心 claim 都能指向数据、图表、统计量或已验证来源；
- 报告效应量、不确定性和限制，不只给 p 值或最好结果；
- 不把相关写成因果，不把代理指标写成真实效果。

### Gate F：交付

- 独立 Reviewer 完成审查；
- 论文、代码、图表、补充材料和复现说明一致；
- 未通过项明确标记，不用措辞掩盖。

## 自主科研限制

ARIS 和类似自动循环只能在用户批准的预算、目录、数据和停止条件内运行。默认要求：

- 明确最大轮数、GPU/云成本和最长时间；
- 禁止自行购买资源、公开发布、投稿或联系第三方；
- 禁止在没有审批的情况下处理敏感人体数据或执行湿实验；
- 每一轮保留原始输出，不能只保留“最好的一轮”；
- 到达停止条件后交回用户决策。

## 启动方式

```bash
git submodule update --init --recursive
python scripts/search_skills.py "研究领域 交付物 方法 风险" --limit 20
```

先读本技能和 `guides/RESEARCH.md`，随后只加载当前阶段命中的专项技能。不要把 680 个科研入口一次放入上下文。


---

## SOURCE · `arena/01a060a3-skill:skills/core/scenario-planning/SKILL.md`

<!-- blob: 8112afea2a432f53d880f1d489d650f2e1fd3651; bytes: 439 -->

---
name: scenario-planning-framework
description: |
  情景规划框架。Shell/多情景/不确定性矩阵/关键不确定性。核心：你的风电规划=情景。触发词：「情景规划」
---
# 情景规划
> 你的风电规划=情景

## 核心洞察
Shell/多情景/不确定性矩阵/关键不确定性的贡献。

## 你的对照


> 本Skill由 [女娲 · Skill造人术](https://github.com/alchaincyf/nuwa-skill) 生成


---

## SOURCE · `arena/01a060a3-skill:skills/core/second-machine-age/SKILL.md`

<!-- blob: 92237200c50740a683399298aed57fae00ed98a8; bytes: 482 -->

---
name: second-machine-age-framework
description: |
  第二机器时代框架。Brynjolfsson/McAfee。核心：自动化/AI/新机器时代/技能偏向型技术变革。触发词：「第二机器时代」
---
# 第二机器时代
> 自动化/AI/新机器时代/技能偏向型技术变革

## 核心洞察
Brynjolfsson/McAfee的贡献。

## 你的对照
你正站在第二机器时代

> 本Skill由 [女娲 · Skill造人术](https://github.com/alchaincyf/nuwa-skill) 生成


---

## SOURCE · `arena/01a060a3-skill:skills/core/self-determination/SKILL.md`

<!-- blob: 88df19deb706e9407dc6f528daf0a35e1f078482; bytes: 867 -->

---
name: self-determination-framework
description: |
  Deci & Ryan 自我决定理论。三大基本心理需求：自主性、胜任感、关联感。
  内在动机 vs 外在动机。触发词：「内在动机」「自我决定」「为什么不想做」
---
# 自我决定理论
> 人需要三样东西才能持续投入：自主选择的感觉、我能做好的感觉、被连接的感觉。

## 三大需求
| 需求 | 含义 | 被满足时 |
|------|------|---------|
| 自主性 | 感到选择是自己的 | 内在动机 |
| 胜任感 | 感到能应对挑战 | 心流 |
| 关联感 | 感到与他人连接 | 归属感 |

## 你的对照
- 6科并行自学 = 自主性极高
- 打脸链路 = 胜任感循环（预测→验证→成长）
- 英仔爱心社 = 关联感

> 本Skill由 [女娲 · Skill造人术](https://github.com/alchaincyf/nuwa-skill) 生成


---

## SOURCE · `arena/01a060a3-skill:skills/core/self-organized-criticality/SKILL.md`

<!-- blob: 41e8f74674e7478f21df4801a5ccec5c44aafefb; bytes: 434 -->

---
name: self-organized-criticality-framework
description: |
  自组织临界思维框架。核心概念：沙堆模型/幂律/自发性。
  触发词：「自组织临界」
---
# 自组织临界
> 沙堆模型/幂律/自发性

## 核心洞察
Bak的研究揭示了自组织临界的本质。

## 你的对照
系统自然趋向临界态

> 本Skill由 [女娲 · Skill造人术](https://github.com/alchaincyf/nuwa-skill) 生成


---

## SOURCE · `arena/01a060a3-skill:skills/core/semantic-networks/SKILL.md`

<!-- blob: 5d9d7a5cf87939206b44325f0b98c5dc9f8a3aea; bytes: 425 -->

---
name: semantic-networks-framework
description: |
  语义网络框架。Quillian/Collins。核心：概念之间的连接/激活扩散/节点。触发词：「语义网络」
---
# 语义网络
> 概念之间的连接/激活扩散/节点

## 核心洞察
Quillian/Collins的贡献。

## 你的对照
你的技能库=语义网络

> 本Skill由 [女娲 · Skill造人术](https://github.com/alchaincyf/nuwa-skill) 生成


---

## SOURCE · `arena/01a060a3-skill:skills/core/semiotics/SKILL.md`

<!-- blob: fb9c62efc14efb2ca5dcc087eced707b5b09139e; bytes: 418 -->

---
name: semiotics-framework
description: |
  符号学框架。Peirce/Saussure。核心：能指/所指/符号三分/象征/索引/图标。触发词：「符号学」
---
# 符号学
> 能指/所指/符号三分/象征/索引/图标

## 核心洞察
Peirce/Saussure的贡献。

## 你的对照
你的冰青系统=符号学

> 本Skill由 [女娲 · Skill造人术](https://github.com/alchaincyf/nuwa-skill) 生成


---

## SOURCE · `arena/01a060a3-skill:skills/core/signaling-games/SKILL.md`

<!-- blob: b04d4fede6aaad635fdc9d5f9a8078c167dd9a25; bytes: 400 -->

---
name: signaling-games-framework
description: |
  信号博弈框架。Spence。核心：信号成本/分离均衡/混同均衡。触发词：「信号博弈」
---
# 信号博弈
> 信号成本/分离均衡/混同均衡

## 核心洞察
Spence的贡献。

## 你的对照
你的技能展示=信号博弈

> 本Skill由 [女娲 · Skill造人术](https://github.com/alchaincyf/nuwa-skill) 生成


---

## SOURCE · `arena/01a060a3-skill:skills/core/slide-image-extractor/SKILL.md`

<!-- blob: c3c2a70d9e3662c9fb47513ea1eda16e6887ec9c; bytes: 6710 -->

---
name: slide-image-extractor
description: |
  素材精确取图工具。从 pptx 按页码提取全部图片并按版面坐标命名导出；
  从 PDF 页面按区域高清裁剪导出 PNG；输出取图清单（页码+坐标+文件名+长宽比）。
  用于 PPT 改造时精确定位和导出素材，避免"毕业答辩 P14 那张设备照片"这种粗粒度描述。
---

# 素材精确取图工具

## 核心问题

配图建议停留在"毕业答辩 P14 那张设备照片"这种粗粒度描述，团队执行时还要自己找。
需要精确到：**页码 + 版面坐标 + 文件名 + 长宽比**，一次导出到位。

## 功能

### 1. 从 PPTX 按页提取全部图片

```python
#!/usr/bin/env python3
"""从 PPTX 按页提取所有图片，按版面坐标命名导出。"""

import json
from pathlib import Path
from pptx import Presentation
from pptx.util import Emu
from PIL import Image
import io

def extract_pptx_images(pptx_path: str, output_dir: str):
    prs = Presentation(pptx_path)
    out = Path(output_dir)
    out.mkdir(parents=True, exist_ok=True)
    
    manifest = []
    
    for slide_idx, slide in enumerate(prs.slides, 1):
        img_idx = 0
        for shape in slide.shapes:
            if shape.shape_type == 13:  # Picture
                img_idx += 1
                image = shape.image
                ext = image.content_type.split("/")[-1]
                if ext == "jpeg":
                    ext = "jpg"
                
                # 版面坐标（EMU → cm）
                left_cm = shape.left / 914400 * 2.54
                top_cm = shape.top / 914400 * 2.54
                width_cm = shape.width / 914400 * 2.54
                height_cm = shape.height / 914400 * 2.54
                
                # 命名规则：P{页码}_{序号}_L{left}T{top}W{width}H{height}.{ext}
                fname = f"P{slide_idx:02d}_{img_idx:02d}_L{left_cm:.1f}T{top_cm:.1f}W{width_cm:.1f}H{height_cm:.1f}.{ext}"
                fpath = out / fname
                
                with open(fpath, "wb") as f:
                    f.write(image.blob)
                
                # 读取实际像素尺寸
                pil_img = Image.open(io.BytesIO(image.blob))
                px_w, px_h = pil_img.size
                
                manifest.append({
                    "page": slide_idx,
                    "index": img_idx,
                    "filename": fname,
                    "left_cm": round(left_cm, 1),
                    "top_cm": round(top_cm, 1),
                    "width_cm": round(width_cm, 1),
                    "height_cm": round(height_cm, 1),
                    "pixel_width": px_w,
                    "pixel_height": px_h,
                    "aspect_ratio": f"{px_w}:{px_h}",
                })
    
    # 输出清单
    manifest_path = out / "image_manifest.json"
    with open(manifest_path, "w", encoding="utf-8") as f:
        json.dump(manifest, f, ensure_ascii=False, indent=2)
    
    print(f"导出 {len(manifest)} 张图片到 {output_dir}/")
    print(f"清单: {manifest_path}")
    return manifest

if __name__ == "__main__":
    import sys
    extract_pptx_images(sys.argv[1], sys.argv[2] if len(sys.argv) > 2 else "extracted_images")
```

**用法**：
```bash
python3 extract_pptx_images.py 毕业答辩.pptx extracted_images/
```

### 2. 从 PDF 按区域裁剪

```python
#!/usr/bin/env python3
"""从 PDF 按区域裁剪导出高清 PNG。"""

import fitz  # PyMuPDF
from pathlib import Path
import json

def extract_pdf_region(pdf_path: str, page_num: int, rect: tuple, output_path: str, dpi: int = 300):
    """
    rect: (x0, y0, x1, y1) 单位为 PDF 点（1点 = 1/72 英寸）
    """
    doc = fitz.open(pdf_path)
    page = doc[page_num - 1]  # 0-indexed
    
    # 从 cm 转换为 PDF 点（1cm = 28.35点）
    pdf_rect = fitz.Rect(
        rect[0] * 28.35,
        rect[1] * 28.35,
        rect[2] * 28.35,
        rect[3] * 28.35,
    )
    
    zoom = dpi / 72
    mat = fitz.Matrix(zoom, zoom)
    pix = page.get_pixmap(clip=pdf_rect, matrix=mat)
    pix.save(output_path)
    
    print(f"导出: {output_path} ({pix.width}x{pix.height}px @ {dpi}dpi)")
    return output_path

def batch_extract(pdf_path: str, extractions: list, output_dir: str):
    """
    extractions: [{"page": 14, "rect_cm": [x0,y0,x1,y1], "name": "设备照片"}, ...]
    """
    out = Path(output_dir)
    out.mkdir(parents=True, exist_ok=True)
    
    results = []
    for ext in extractions:
        fname = f"P{ext['page']:02d}_{ext['name']}.png"
        fpath = out / fname
        extract_pdf_region(pdf_path, ext["page"], ext["rect_cm"], str(fpath))
        results.append({
            "page": ext["page"],
            "rect_cm": ext["rect_cm"],
            "filename": fname,
            "description": ext.get("name", ""),
        })
    
    manifest_path = out / "extraction_manifest.json"
    with open(manifest_path, "w", encoding="utf-8") as f:
        json.dump(results, f, ensure_ascii=False, indent=2)
    
    return results

if __name__ == "__main__":
    # 示例：提取用户点名的 8 张图块
    extractions = [
        {"page": 14, "rect_cm": [2, 3, 12, 10], "name": "设备照片"},    # 需实测坐标
        {"page": 38, "rect_cm": [1, 2, 10, 9], "name": "构件照片"},    # 需实测坐标
        {"page": 42, "rect_cm": [3, 4, 11, 11], "name": "数据图"},     # 需实测坐标
        # ... 用户根据实际需要填写
    ]
    batch_extract("08277.pdf", extractions, "extracted_regions/")
```

### 3. 取图清单格式

输出 JSON 清单：

```json
[
  {
    "page": 14,
    "source": "毕业答辩.pptx",
    "filename": "P14_01_L2.5T3.0W9.5H7.2.jpg",
    "left_cm": 2.5,
    "top_cm": 3.0,
    "width_cm": 9.5,
    "height_cm": 7.2,
    "pixel_width": 1200,
    "pixel_height": 907,
    "aspect_ratio": "1200:907",
    "description": "设备实物照片"
  }
]
```

## 依赖安装

```bash
pip install python-pptx PyMuPDF Pillow
```

## 使用流程

1. **列出所有图片**：运行 PPTX 提取脚本，得到 `image_manifest.json`
2. **确认目标图片**：从清单中挑选需要的图片（按页码和坐标定位）
3. **精确裁剪**：对 PDF 用区域裁剪脚本，输入页码和坐标（cm）
4. **导出清单**：JSON 清单包含页码+坐标+文件名+尺寸，团队可直接执行

## 注意事项

- PPTX 中的图片可能是嵌入的原始文件，分辨率可能高于页面渲染分辨率
- PDF 裁剪的 DPI 默认 300，可根据需要调整
- 坐标单位统一为 **cm**（从页面左上角开始）
- "坐标误差肉眼不可见"的验收标准：在 300dpi 下，1px ≈ 0.008cm，远小于肉眼分辨力


---

## SOURCE · `arena/01a060a3-skill:skills/core/small-world-networks/SKILL.md`

<!-- blob: b392d52d3528117b146a8118d0ce0b5b3401ab4c; bytes: 446 -->

---
name: small-world-networks-framework
description: |
  小世界网络思维框架。核心概念：六度分隔/聚类系数/短路径。
  触发词：「小世界网络」
---
# 小世界网络
> 六度分隔/聚类系数/短路径

## 核心洞察
Watts/Strogatz的研究揭示了小世界网络的本质。

## 你的对照
知识网络=小世界

> 本Skill由 [女娲 · Skill造人术](https://github.com/alchaincyf/nuwa-skill) 生成


---

## SOURCE · `arena/01a060a3-skill:skills/core/smart-grid/SKILL.md`

<!-- blob: b15beb7161ad526128817317c7f94b9824b7e2b1; bytes: 428 -->

---
name: smart-grid-framework
description: |
  智能电网框架。需求响应/分布式/微电网/储能协调。核心：你的偏航优化=智能电网。触发词：「智能电网」
---
# 智能电网
> 你的偏航优化=智能电网

## 核心洞察
需求响应/分布式/微电网/储能协调的贡献。

## 你的对照


> 本Skill由 [女娲 · Skill造人术](https://github.com/alchaincyf/nuwa-skill) 生成


---

## SOURCE · `arena/01a060a3-skill:skills/core/social-choice-theory/SKILL.md`

<!-- blob: fafb6d00385d172751a47e435c5b3545e84c87d3; bytes: 427 -->

---
name: social-choice-theory-framework
description: |
  社会选择理论框架。Arrow。核心：不可能定理/投票悖论/偏好聚合。触发词：「社会选择理论」
---
# 社会选择理论
> 不可能定理/投票悖论/偏好聚合

## 核心洞察
Arrow的贡献。

## 你的对照
你的技能路由=偏好聚合

> 本Skill由 [女娲 · Skill造人术](https://github.com/alchaincyf/nuwa-skill) 生成


---

## SOURCE · `arena/01a060a3-skill:skills/core/social-movement-theory/SKILL.md`

<!-- blob: 5abd2c78b5fe1e3f0802d279a88e1ded7f8afea5; bytes: 444 -->

---
name: social-movement-theory-framework
description: |
  社会运动理论框架。资源动员/框架分析/政治过程。核心：你的开源社区=社会运动。触发词：「社会运动理论」
---
# 社会运动理论
> 你的开源社区=社会运动

## 核心洞察
资源动员/框架分析/政治过程的贡献。

## 你的对照


> 本Skill由 [女娲 · Skill造人术](https://github.com/alchaincyf/nuwa-skill) 生成


---

## SOURCE · `arena/01a060a3-skill:skills/core/social-network-analysis/SKILL.md`

<!-- blob: 428c0973d4415339aa94b8e12a3f8924ea2e62dd; bytes: 455 -->

---
name: social-network-analysis-framework
description: |
  社会网络分析框架。Granovetter/Barabási。核心：弱连接/结构洞/中心性/社区发现。触发词：「社会网络分析」
---
# 社会网络分析
> 弱连接/结构洞/中心性/社区发现

## 核心洞察
Granovetter/Barabási的贡献。

## 你的对照
你的技能网络=SNA

> 本Skill由 [女娲 · Skill造人术](https://github.com/alchaincyf/nuwa-skill) 生成


---

## SOURCE · `arena/01a060a3-skill:skills/core/social-psychology/SKILL.md`

<!-- blob: cc495a2d0c9506c4ee30881a2d65679f086d086f; bytes: 431 -->

---
name: social-psychology-framework
description: |
  社会心理学框架。Asch/Milgram/Zimbardo。核心：从众/服从/角色/群体动力学。触发词：「社会心理学」
---
# 社会心理学
> 从众/服从/角色/群体动力学

## 核心洞察
Asch/Milgram/Zimbardo的贡献。

## 你的对照
你的团队=社会心理

> 本Skill由 [女娲 · Skill造人术](https://github.com/alchaincyf/nuwa-skill) 生成


---

## SOURCE · `arena/01a060a3-skill:skills/core/sociology-of-science/SKILL.md`

<!-- blob: d957d78accc53b13426e7975e4f40f835557ae38; bytes: 457 -->

---
name: sociology-of-science-framework
description: |
  科学社会学框架。Merton/库恩/拉图尔。核心：奖励系统/马太效应/科学家气质。触发词：「科学社会学」
---
# 科学社会学
> 奖励系统/马太效应/科学家气质

## 核心洞察
Merton/库恩/拉图尔的贡献。

## 你的对照
你的学术研究=科学社会学

> 本Skill由 [女娲 · Skill造人术](https://github.com/alchaincyf/nuwa-skill) 生成


---

## SOURCE · `arena/01a060a3-skill:skills/core/sociology-of-technology/SKILL.md`

<!-- blob: 5235ba345569856a05dc756920977ff66892c3d6; bytes: 418 -->

---
name: sociology-of-technology-framework
description: |
  技术社会学框架。SCOT/行动者网络/Latour。核心：技术的社会建构。触发词：「技术社会学」
---
# 技术社会学
> 技术的社会建构

## 核心洞察
SCOT/行动者网络/Latour的贡献。

## 你的对照
你的AI=技术社会学

> 本Skill由 [女娲 · Skill造人术](https://github.com/alchaincyf/nuwa-skill) 生成


---

## SOURCE · `arena/01a060a3-skill:skills/core/sound-design/SKILL.md`

<!-- blob: 927280c658105befdf5aba0f8a66af1a1d86951e; bytes: 418 -->

---
name: sound-design-framework
description: |
  声音设计框架。核心：声景/声音生态学/声音叙事。触发词：「声音设计」
---
# 声音设计
> 声景/声音生态学/声音叙事

## 核心洞察
Schafer的贡献定义了声音设计的基础。

## 你的对照
你的全息系统应有声音维度

> 本Skill由 [女娲 · Skill造人术](https://github.com/alchaincyf/nuwa-skill) 生成


---

## SOURCE · `arena/01a060a3-skill:skills/core/space-exploration-methods/SKILL.md`

<!-- blob: 1ad2c841ffd58e92b14fbf48a60fb87450a7cdd3; bytes: 466 -->

---
name: space-exploration-methods-framework
description: |
  太空探索方法论框架。轨道力学/生命保障/原位资源利用/ISRU。核心：你的系统工程=太空。触发词：「太空探索方法论」
---
# 太空探索方法论
> 你的系统工程=太空

## 核心洞察
轨道力学/生命保障/原位资源利用/ISRU的贡献。

## 你的对照


> 本Skill由 [女娲 · Skill造人术](https://github.com/alchaincyf/nuwa-skill) 生成


---

## SOURCE · `arena/01a060a3-skill:skills/core/statistical-mechanics/SKILL.md`

<!-- blob: a32199695048a0f152996214fef1e35303601eff; bytes: 414 -->

---
name: statistical-mechanics-framework
description: |
  统计力学框架。Boltzmann/Gibbs。核心：微观→宏观/配分函数/涨落。触发词：「统计力学」
---
# 统计力学
> 微观→宏观/配分函数/涨落

## 核心洞察
Boltzmann/Gibbs的贡献。

## 你的对照
你的多Agent=统计力学

> 本Skill由 [女娲 · Skill造人术](https://github.com/alchaincyf/nuwa-skill) 生成


---

## SOURCE · `arena/01a060a3-skill:skills/core/stochastic-processes/SKILL.md`

<!-- blob: 505ac500ea858a17db366c7168cc4b046a788c36; bytes: 430 -->

---
name: stochastic-processes-framework
description: |
  随机过程框架。马尔可夫/布朗运动/泊松/更新过程。核心：你的AI决策=随机过程。触发词：「随机过程」
---
# 随机过程
> 你的AI决策=随机过程

## 核心洞察
马尔可夫/布朗运动/泊松/更新过程的贡献。

## 你的对照


> 本Skill由 [女娲 · Skill造人术](https://github.com/alchaincyf/nuwa-skill) 生成


---

## SOURCE · `arena/01a060a3-skill:skills/core/stop-slop/SKILL.md`

<!-- blob: d33e9d6dccb0ed31aa85f30f19e3584bdecad0d0; bytes: 1696 -->

---
name: stop-slop
description: 起草、编辑或审阅散文时识别并删除常见 AI 模板腔，包括空泛开场、公式结构、虚假深度、模糊归因、节奏单一、过度修辞和可删内容，同时保留事实、含义与目标语气。
metadata:
  source: Hardik Pandya stop-slop historical snapshot
  license: MIT
---

# Stop Slop

## 核心规则

1. **删填充**：去掉空泛开场、强调拐杖词和不承载信息的过渡。
2. **破公式**：检查机械二元对比、固定三段式、戏剧性碎句、虚假设问和整齐排比。
3. **明确行动者**：能用具体主语和动作时，不让抽象名词“推动、见证、拥抱”事情。
4. **写具体内容**：用人、动作、数字、时间、地点、来源和后果替代“意义重大”等判断。
5. **靠近读者**：解释读者实际会遇到的情况，不从高处概括“人们、时代、格局”。
6. **改变节奏**：句长、段长和收束方式自然变化，不连续制造金句。
7. **信任读者**：事实已经说明问题时就停下，不重复升华和手把手解释。
8. **保留声音**：去模型腔不等于把文字改成无个性的机构说明。

## 审校步骤

- 标出没有新增信息的句子；
- 查找无来源的权威归因和夸张结论；
- 把模糊主语改成实际行动者；
- 合并同义反复，拆掉为凑完整而生的结构；
- 朗读检查节奏与口气；
- 复核修改是否改变事实、语气或作者立场。

此技能是简洁审校器。需要中文长文创作、现实材料边界或虚构写作时，优先使用 `human-writing`；需要系统识别中文 AI 痕迹时可使用 `humanizer-zh`。


---

## SOURCE · `arena/01a060a3-skill:skills/core/story-mckee/SKILL.md`

<!-- blob: 4ed5ec6fac11b0876ee6da8cfe4961721cdf1eb1; bytes: 2445 -->

---
name: story-mckee-framework
description: |
  基于 Robert McKee《故事》的叙事结构框架。核心：故事=价值变化的事件序列。
  5个核心价值、鸿沟理论、激励事件、渐进复杂化、危机→高潮→结局。
  触发词：「怎么写故事」「叙事结构」「编剧」「故事弧线」「怎么写报告吸引人」
---

# 故事 · 价值变化的事件序列

> 故事不是装饰。故事是人类理解世界的根本方式。

## 核心理念

故事的本质：**一个或多个核心价值从正到负（或从负到正）的变化过程。**

---

## 5个核心价值

| 价值对 | 类型 | 例子 |
|--------|------|------|
| 生/死 | 生存 | 灾难片、医疗剧 |
| 爱/恨 | 关系 | 爱情、友情、背叛 |
| 真相/谎言 | 认知 | 侦探、揭秘 |
| 成就/失败 | 能力 | 体育、创业 |
| 正义/不公 | 道德 | 法律、复仇 |

每个故事至少涉及一个价值对的变化。

## 结构要素

### 激励事件
打破主角生活平衡的那个事件。它是故事的起点。
- "直到有一天..."

### 鸿沟(Gap)
主角的期望 vs 实际结果之间的裂缝。
- 主角采取行动 → 现实给出不同于预期的反馈 → 主角被迫改变策略
- **这就是戏剧张力的来源**

**你的对照**：你的打脸链路就是一个"鸿沟"——预测→现实不符合→被迫修正

### 渐进复杂化
冲突必须不断升级——不能降低。
- 每一幕的赌注都比上一幕更高
- 如果中间有一幕比前面的赌注更低，故事就"塌了"

### 危机→高潮→结局
- **危机**：主角面临两难选择（不可兼得的两个选项）
- **高潮**：主角做出选择——不可逆的转折
- **结局**：展示选择的结果

---

## 应用到非虚构

你的报告/演讲也可以用故事结构：

```
激励事件：[什么问题/挑战出现了？]
    ↓
第一幕：[尝试解决→发现鸿沟]
    ↓
第二幕：[更大的努力→更大的鸿沟→赌注升高]
    ↓
第三幕：[危机——必须在两个方案中选择]
    ↓
高潮：[选择并执行]
    ↓
结局：[结果——数据/成果/教训]
```

---

## 诚实边界

- McKee的框架偏向好莱坞叙事，不一定适用于所有文化
- 过度套用"故事结构"可能让简单的事变复杂
- 调研时间：2026年8月

---

> 本Skill由 [女娲 · Skill造人术](https://github.com/alchaincyf/nuwa-skill) 生成


---

## SOURCE · `arena/01a060a3-skill:skills/core/story-mckee/references/research/synthesis.md`

<!-- blob: ca6a4c085b1c3d088e1bf40033cc5143bcd61c0b; bytes: 337 -->

# 故事 · 综合调研

## 核心论点
1. 故事=价值变化的事件序列
2. 5个核心价值：生死/爱恨/真相谎言/成就失败/善恶
3. 主角有意识+无意识欲望
4. 鸿沟=期望vs结果→戏剧张力
5. 激励事件打破平衡
6. 冲突渐进升级
7. 危机→高潮→结局

## 来源
- McKee. "Story" (1997)


---

## SOURCE · `arena/01a060a3-skill:skills/core/structural-anthropology/SKILL.md`

<!-- blob: 7d0ba08187902338fcab46a263e38de4b33488db; bytes: 428 -->

---
name: structural-anthropology-framework
description: |
  结构人类学框架。Lévi-Strauss。核心：二元对立/神话结构/野性思维。触发词：「结构人类学」
---
# 结构人类学
> 二元对立/神话结构/野性思维

## 核心洞察
Lévi-Strauss的贡献。

## 你的对照
你的分类=结构人类学

> 本Skill由 [女娲 · Skill造人术](https://github.com/alchaincyf/nuwa-skill) 生成


---

## SOURCE · `arena/01a060a3-skill:skills/core/structure-of-scientific-revolutions/SKILL.md`

<!-- blob: 1a1d801f27d89484c22bc903e88b6de3f43eade3; bytes: 1567 -->

---
name: structure-of-scientific-revolutions-framework
description: |
  基于 Thomas Kuhn《科学革命的结构》的科学哲学框架。核心：范式转移、常规科学→反常→
  危机→革命→新范式、不可通约性。
  触发词：「范式转移」「科学革命」「Kuhn」「不可通约性」「常规科学」
---

# 科学革命的结构 · 范式转移

> 科学不是线性进步的——它通过革命跳跃。

## 核心洞察

### 1. 范式(Paradigm)
一个科学共同体共享的信念、方法、标准的集合。

### 2. 常规科学(Normal Science)
在范式内解谜。不是发现新东西——是用已有框架解决剩余问题。
**你的对照**：你用CFD做叶片设计 = 常规科学

### 3. 反常(Anomaly)
观察到的现象无法用现有范式解释。
**你的对照**：AI代理模型精度接近CFD但速度快1000倍 = 反常

### 4. 危机→革命
反常积累到一定程度→旧范式无法解释→危机→新范式取代旧范式
**你的对照**：AI替代CFD = 正在发生的范式转移

### 5. 不可通约性(Incommensurability)
新旧范式之间无法直接比较——它们用不同的语言、不同的标准。

## 决策启发式

1. **识别范式**：你现在在什么范式里工作？
2. **留意反常**：什么现象现有框架解释不了？
3. **接受危机**：危机不是坏事——是革命的前兆
4. **准备跳跃**：范式转移不是渐进的——需要跳跃

---

> 本Skill由 [女娲 · Skill造人术](https://github.com/alchaincyf/nuwa-skill) 生成


---

## SOURCE · `arena/01a060a3-skill:skills/core/structure-of-scientific-revolutions/references/research/synthesis.md`

<!-- blob: bc845324f3a2e86648e3326c794f4a3cc7101353; bytes: 284 -->

# 科学革命的结构 · 综合调研
## 核心论点：范式转移、常规科学→反常→危机→革命→新范式、不可通约性
## 与用户关联：AI替代CFD=范式转移、打脸链路=反常发现
## 来源：Kuhn. "The Structure of Scientific Revolutions" (1962)


---

## SOURCE · `arena/01a060a3-skill:skills/core/superforecasting/SKILL.md`

<!-- blob: 7c0a7c74f45b856c06c37047e097763fd1841181; bytes: 4472 -->

---
name: superforecasting-framework
description: |
  基于 Philip Tetlock《超预测》的预测科学框架。核心概念：概率思维、贝叶斯更新、
  分解问题、多源整合、认知去偏、校准。10项超级预测者特质。
  触发词：「预测」「概率判断」「怎么判断对错」「贝叶斯」「校准」「forecasting」
---

# 超预测 · 在不确定的世界中更准确地判断

> 预测不是天赋，是方法。超级预测者的秘密不在于他们知道得更多，在于他们思考得更好。

## 核心理念

**概率思维**：不要说"会发生"或"不会发生"。说"有70%的概率会发生"。

这不是文字游戏——它强制你量化不确定性，让你可以被校准、可以被验证、可以迭代改进。

---

## 7个核心方法

### 1. 概率思维

**操作**：对所有预测使用概率语言
- ❌ "这个项目会成功"
- ✅ "这个项目有65%的概率在截止日期前完成"

**为什么有效**：
- 迫使你承认不确定性
- 让你可以被校准（说70%时，是否真的70%的次数对了？）
- 让不同意见可以精确表达（"我觉得只有40%"）

---

### 2. 贝叶斯更新

**操作**：新证据来了 → 更新你的概率估计
- 初始判断 = 先验概率
- 新证据 = 似然比
- 更新后 = 后验概率

**简化版**：
```
新证据支持我的判断 → 概率上调5-15%
新证据反对我的判断 → 概率下调5-15%
新证据模棱两可 → 不调整
```

**你的对照**：你的打脸链路就是贝叶斯更新——预测→实验→新证据→修正判断

---

### 3. 分解问题

**操作**：大预测 → 拆成小预测 → 分别估计 → 组合

**例子**：
- 大预测："这个创业公司3年内会成功吗？"
- 分解：市场规模有多大？(70%) × 团队能力够吗？(60%) × 资金够吗？(80%) × 时机对吗？(50%)
- 组合：70% × 60% × 80% × 50% ≈ 17%

---

### 4. 多源整合

**操作**：从多个角度收集信息，取加权平均
- 不要只问一个"专家"——问3-5个不同视角的人
- 不同来源的权重：直接数据 > 专家判断 > 类比推理 > 直觉

---

### 5. 校准

**操作**：跟踪你的预测准确率
- 当你说"70%"时，统计是否真的有70%的次数对了
- 如果你说90%但只有60%对了 → 过度自信，需要下调
- 如果你说50%但80%对了 → 过度保守，需要上调

**你的对照**：你的"低自信型答对" = 校准过低。你说50%但实际上对了80%+。

---

### 6. 认知去偏

**主要偏误**：
| 偏误 | 表现 | 对策 |
|------|------|------|
| 确认偏误 | 只找支持自己判断的证据 | 主动搜索反面证据 |
| 可得性偏差 | 最近发生的事权重过大 | 回到基础概率 |
| 锚定效应 | 被初始数字影响 | 从多个起点估计 |
| 过度自信 | 认为自己比实际更确定 | 校准练习 |
| 从众效应 | 跟随多数人的判断 | 独立思考后再看群体意见 |

---

### 7. 持续学习

**操作**：
- 每次预测后复盘：对了/错了/为什么
- 更新你的判断方法（不只是更新判断内容）
- 保持"成长心态"——预测能力是可以提升的

---

## 10项超级预测者特质

| # | 特质 | 含义 |
|---|------|------|
| 1 | 审慎 | 不轻率下结论 |
| 2 | 谦逊 | 知道自己可能错 |
| 3 | 非决定论 | 相信未来是开放的 |
| 4 | 主动开放思维 | 积极寻找反面证据 |
| 5 | 反思性 | 持续审视自己的思维过程 |
| 6 | 心理敏锐 | 对数字和模式敏感 |
| 7 | 认知灵活性 | 能从多个角度看问题 |
| 8 | 持续学习 | 不断更新知识和方法 |
| 9 | 数字敏感 |  comfortable with probabilities |
| 10 | 成长心态 | 相信能力可以发展 |

---

## 与其他技能的关系

- **objective-decision**：超预测是客观决策的"量化版"——用概率校准判断
- **thinking-in-systems**：系统思维帮你理解为什么预测会错（延迟、反馈、边界问题）
- **make-it-stick**：持续学习/校准需要有效的记忆系统

---

## 诚实边界

- Good Judgment Project的参与者经过筛选，效果可能不适用于所有人
- 在真正不确定的环境中（黑天鹅），校准几乎不可能
- 概率思维在人际关系/情感决策中难以应用
- 调研时间：2026年8月

---

> 本Skill由 [女娲 · Skill造人术](https://github.com/alchaincyf/nuwa-skill) 生成
> 创建者：[花叔](https://x.com/AlchainHust)


---

## SOURCE · `arena/01a060a3-skill:skills/core/superforecasting/references/research/synthesis.md`

<!-- blob: 447e3cf5889ecc3b5208fb65cbba9e07032aff60; bytes: 1179 -->

# 超预测 · 综合调研

## 核心论点
1. **预测是可训练的技能**：超级预测者不是天才，是使用正确方法的人
2. **概率思维**：超级预测者不用"会/不会"思考，用"70%概率"思考
3. **贝叶斯更新**：新证据来了 → 更新你的概率估计（不要固守初始判断）
4. **分解问题**：大预测拆成小预测 → 每个小预测更容易 → 组合起来更准确
5. **多源整合**：从多个角度/来源收集信息，取加权平均
6. **校准**：当说"70%"时，应该确实有70%的次数是对的
7. **认知去偏**：识别确认偏误、可得性偏差等，主动对抗

## 10项超级预测者特质
1. 审慎（不轻率下结论）
2. 谦逊（知道自己可能错）
3. 非决定论（相信未来是开放的）
4. 主动开放思维（积极寻找反面证据）
5. 反思性/自省
6. 心理敏锐
7. 认知灵活性
8. 持续学习/知识更新
9. 数字敏感
10. 成长心态

## 与用户的关联
- 反讨好框架 = 主动开放思维
- 打脸链路 = 贝叶斯更新
- 低自信型答对 = 过度校准

## 来源
- Tetlock & Gardner. "Superforecasting" (2015)
- Good Judgment Project


---

## SOURCE · `arena/01a060a3-skill:skills/core/symbiosis/SKILL.md`

<!-- blob: e5078d5f8467fd58d5f3f3e27d247433484dce7a; bytes: 390 -->

---
name: symbiosis-framework
description: |
  共生理论框架。Margulis。核心：互利共生/寄生/共栖/内共生。触发词：「共生理论」
---
# 共生理论
> 互利共生/寄生/共栖/内共生

## 核心洞察
Margulis的贡献。

## 你的对照
你的多Agent=共生关系

> 本Skill由 [女娲 · Skill造人术](https://github.com/alchaincyf/nuwa-skill) 生成


---

## SOURCE · `arena/01a060a3-skill:skills/core/symbolic-anthropology/SKILL.md`

<!-- blob: 24e392a23a04a9309ea6fff1e8c70986ad429bf9; bytes: 428 -->

---
name: symbolic-anthropology-framework
description: |
  象征人类学框架。Geertz/Turner。核心：文化的符号解读/深描/社会戏剧。触发词：「象征人类学」
---
# 象征人类学
> 文化的符号解读/深描/社会戏剧

## 核心洞察
Geertz/Turner的贡献。

## 你的对照
你的SKILL=象征系统

> 本Skill由 [女娲 · Skill造人术](https://github.com/alchaincyf/nuwa-skill) 生成


---

## SOURCE · `arena/01a060a3-skill:skills/core/symmetry-conservation/SKILL.md`

<!-- blob: d9b5a91a8613f887510f66b7499023d753990a6e; bytes: 422 -->

---
name: symmetry-conservation-framework
description: |
  对称性与守恒框架。Noether。核心：每个对称性对应一个守恒量。触发词：「对称性与守恒」
---
# 对称性与守恒
> 每个对称性对应一个守恒量

## 核心洞察
Noether的贡献。

## 你的对照
你的设计对称=物理守恒

> 本Skill由 [女娲 · Skill造人术](https://github.com/alchaincyf/nuwa-skill) 生成


---

## SOURCE · `arena/01a060a3-skill:skills/core/synthetic-biology/SKILL.md`

<!-- blob: 5aae4d263c67fe7f0556a1023d7c761e28b9fe82; bytes: 444 -->

---
name: synthetic-biology-framework
description: |
  合成生物学框架。基因线路/标准化部件/设计-构建-测试。核心：你的AI设计=合成生物。触发词：「合成生物学」
---
# 合成生物学
> 你的AI设计=合成生物

## 核心洞察
基因线路/标准化部件/设计-构建-测试的贡献。

## 你的对照


> 本Skill由 [女娲 · Skill造人术](https://github.com/alchaincyf/nuwa-skill) 生成


---

## SOURCE · `arena/01a060a3-skill:skills/core/tao-te-ching/SKILL.md`

<!-- blob: 315f01f18a70b3d68dc253afa85b48a3a7d6fd38; bytes: 2197 -->

---
name: tao-te-ching-framework
description: |
  基于老子《道德经》的东方哲学框架。核心：道可道非常道、无为、柔弱胜刚强、
  反者道之动、上善若水。
  触发词：「道德经」「无为」「道」「上善若水」「老子」
---

# 道德经 · 不可言说的道

> 道可道，非常道。能说的都不是那个道。

## 核心洞察

### 1. 无为
不是"不作为"——是"不强为"。
水不努力流向下处，但它到了所有地方。
**你的对照**：你的提问设计>角色分配 = 无为（不强令AI反驳，改变提问方向让它自然诚实）

### 2. 柔弱胜刚强
天下最柔的东西，驾驭了天下最刚的东西。
**你的对照**：你的反讨好框架——不用命令式对抗（刚强），用提问设计（柔弱）

### 3. 反者道之动
事物走到极端就反转。
**你的对照**：打脸链路 = 走到极端→反转→修正

### 4. 上善若水
水善利万物而不争，处众人之所恶。
**你的对照**：冰青设计系统 = 如水般的全息流动感

### 5. 大巧若拙
真正的技巧看起来笨拙。
**你的对照**：曾国藩的"拙诚"与此同源

### 6. 知者不言，言者不知
真正理解的人不解释，解释的人不理解。
**你的对照**：原研哉的"空"、Alexander的"无名之质"——都在说道不可言说

---

## 决策启发式

1. **不强为**：如果一件事需要强推，可能方向不对
2. **守柔**：最灵活的解决方案往往是最弱的看起来
3. **知止**：知道什么够了
4. **观反**：事物走到极端就会反转——留意极端
5. **处下**：不争，天下莫能与之争

---

## 与其他技能的关系

- **liuzu-tanjing**：惠能的"本来无一物"与老子的"无"同源
- **kenya-hara**：原研哉的"空"= 道德经的"无"
- **finite-infinite-games**：道是最终的无限游戏

---

## 诚实边界

- 道德经的解读极度主观——一千个人有一千个解释
- "无为"被误用为不作为的借口
- 古代文本的现代应用需要谨慎
- 调研时间：2026年8月

---

> 本Skill由 [女娲 · Skill造人术](https://github.com/alchaincyf/nuwa-skill) 生成


---

## SOURCE · `arena/01a060a3-skill:skills/core/tao-te-ching/references/research/synthesis.md`

<!-- blob: 27ef72949c0c9715c49430ae04d714b5a79da6c9; bytes: 2985 -->

# 道德经 · 综合调研

## 核心论点
1. **道可道非常道**：真正的道无法被语言完全表达
2. **无为**：不是"不作为"，是"不强为"——顺应自然规律
3. **柔弱胜刚强**：水是最柔的但能穿石
4. **反者道之动**：事物走向极端就反转
5. **知足不辱**：知道什么够了，就不会贪
6. **大巧若拙**：真正的技巧看起来笨拙
7. **上善若水**：最高善如水——利万物而不争
8. **知者不言，言者不知**：真正理解的人不解释，解释的人不理解

## 与用户的关联
- "无为" = 你的生成式设计理念（让系统自己生长，不强行组装）
- "柔弱胜刚强" = 你的提问设计>角色分配（柔的方式更有效）
- "反者道之动" = 你的打脸链路（走到极端→反转→修正）
- "上善若水" = 你的冰青设计（如水般流动的全息感）
- "空" = 原研哉的"空"与老子的"无"同源

## 来源
- 老子.《道德经》(~600BC)

---

# 传习录 · 综合调研

## 核心论点
1. **知行合一**：知而不行=不知。真正的知识必然导致行动
2. **致良知**：每个人内心都有是非判断力（良知），不需要外求
3. **心即理**：理不在事物中，在心中。格物=正心
4. **四句教**：无善无恶心之体，有善有恶意之动，知善知恶是良知，为善去恶是格物

## 与用户的关联
- "知行合一" = 你的"输出倒逼输入"、打脸链路
- "致良知" = 你的"低自信型答对"——良知已经知道了，只是不敢信
- "心即理" = 你的审美直觉——理在心中不在规则中

## 来源
- 王阳明.《传习录》(1518)

---

# 曾国藩家书 · 综合调研

## 核心论点
1. **笨人成大事**：曾国藩自认愚钝，靠系统+坚持成事
2. **日课**：每天记录反省，持续改进
3. **耐烦**：成大事者不怕琐碎
4. **拙诚**：用笨办法、下苦功夫，不走捷径
5. **家书即教育**：通过书信教导子弟修身齐家

## 与用户的关联
- "笨人成大事" = 你的非传统学习路径
- "日课" = 你的遗留清零、批判卷
- "耐烦" = 你的6科并行+多Agent编排的耐心
- "拙诚" = 你的打脸链路（用最笨的办法验证）

## 来源
- 曾国藩.《曾国藩家书》(1800s)

---

# 六祖坛经 · 综合调研

## 核心论点
1. **本来无一物**：菩提本无树，明镜亦非台——本质为空
2. **顿悟**：不需要渐进修行，一瞬间的觉醒
3. **不立文字**：真理不在文字中，在直接体验中
4. **自性即佛**：佛性在每个人心中，不需要外求
5. **无念为宗**：不被念头牵着走

## 与用户的关联
- "本来无一物" = 原研哉的"空"、Alexander的"无名之质"
- "顿悟" = 你的打脸链路中的"突然理解"时刻
- "不立文字" = 你的审美直觉无法用规则描述
- "自性即佛" = 王阳明的"致良知"——都在说同一个东西

## 来源
- 惠能.《六祖坛经》(~700AD)


---

## SOURCE · `arena/01a060a3-skill:skills/core/technology-forecasting/SKILL.md`

<!-- blob: 2bcbe6d0b03ae50b587b0a0590dac8412cdf61ac; bytes: 446 -->

---
name: technology-forecasting-framework
description: |
  技术预测框架。技术成熟度/技术路线图/S曲线/技术融合。核心：你的AI预测=技术预测。触发词：「技术预测」
---
# 技术预测
> 你的AI预测=技术预测

## 核心洞察
技术成熟度/技术路线图/S曲线/技术融合的贡献。

## 你的对照


> 本Skill由 [女娲 · Skill造人术](https://github.com/alchaincyf/nuwa-skill) 生成


---

## SOURCE · `arena/01a060a3-skill:skills/core/thinking-fast-slow/SKILL.md`

<!-- blob: 5b4cc623d39d30aba2986bce9ecfcc2555e05b5d; bytes: 2683 -->

---
name: thinking-fast-slow-framework
description: |
  基于 Kahneman《思考，快与慢》的认知科学框架。核心：系统1(快/直觉)与系统2(慢/理性)、
  认知偏误全集、前景理论(损失厌恶/框架效应/锚定)、体验自我vs记忆自我。
  触发词：「思考快与慢」「系统1」「系统2」「认知偏误」「前景理论」「损失厌恶」
---

# 思考，快与慢 · 两个系统

> 你以为自己在理性思考——其实大部分时候是直觉在做决定，然后理性来辩护。

## 核心洞察

### 1. 系统1（快）
自动、快速、不费力。产生直觉、印象、感觉。无法关闭——永远在运行。
**你的对照**：你的审美直觉=系统1

### 2. 系统2（慢）
刻意、缓慢、费力。负责复杂计算、逻辑推理、自我控制。很懒——经常偷懒让系统1代替。
**你的对照**：你的打脸链路=强制启动系统2

### 3. 前景理论(Prospect Theory)
- **损失厌恶**：失去100元的痛苦>得到100元的快乐（约2:1）
- **框架效应**：同一个问题换个说法，选择就变了
- **锚定效应**：被初始数字影响判断

### 4. 认知偏误清单

| 偏误 | 表现 | 你的对照 |
|------|------|---------|
| 确认偏误 | 只找支持自己判断的证据 | 反讨好框架=对抗这个 |
| 可得性偏差 | 最近发生的事权重过大 | 基础概率=对抗这个 |
| 锚定效应 | 被初始数字影响 | 外部视角=对抗这个 |
| 过度自信 | 认为自己比实际更确定 | 你的低自信型=相反 |
| 后见之明 | "我早就知道了" | HANDOFF记录=对抗这个 |

### 5. 体验自我 vs 记忆自我
- 体验自我：活在当下
- 记忆自我：记住高峰和结尾（Peak-End Rule）

## 决策启发式

1. **识别哪个系统在工作**：你现在是在"快速判断"还是"慢慢思考"？
2. **强制启动系统2**：重要决策时，刻意放慢速度
3. **警惕框架效应**：同一个问题换个说法，你的选择会变吗？
4. **回到基础概率**：你觉得"这次不一样"时——先看统计
5. **记录预测**：对抗后见之明偏误

---

## 与其他技能的关系

- **objective-decision**：本书是反讨好框架的底层理论
- **superforecasting**：贝叶斯更新=系统2的工作
- **make-it-stick**：流畅感=系统1的幻觉

---

## 诚实边界

- 系统1/系统2的区分被过度简化
- 部分认知偏误实验面临可复制性危机
- "偏误"不一定是坏的——启发式在大多数情况下比理性计算更有效
- 调研时间：2026年8月

---

> 本Skill由 [女娲 · Skill造人术](https://github.com/alchaincyf/nuwa-skill) 生成


---

## SOURCE · `arena/01a060a3-skill:skills/core/thinking-fast-slow/references/research/synthesis.md`

<!-- blob: df3a95d52436fda88d13657c1c874f3477cca215; bytes: 339 -->

# 思考，快与慢 · 综合调研
## 核心论点：系统1(快/直觉)与系统2(慢/理性)、认知偏误全集、
## 前景理论(损失厌恶/框架效应/锚定)、体验自我vs记忆自我
## 与用户关联：反讨好框架的底层理论、低自信=系统1过度活跃
## 来源：Kahneman. "Thinking, Fast and Slow" (2011)


---

## SOURCE · `arena/01a060a3-skill:skills/core/thinking-in-systems/SKILL.md`

<!-- blob: a8d597566ecbf49cc8a193166a94282ddd0d29b1; bytes: 5831 -->

---
name: thinking-in-systems-framework
description: |
  基于 Donella Meadows《系统之美》的系统思维框架。核心概念：反馈回路、杠杆点、
  库存与流量、延迟、系统边界。12个杠杆点从弱到强排列。
  触发词：「系统思维」「反馈回路」「杠杆点」「为什么会振荡」「系统分析」
---

# 系统之美 · 看到连接而非事物

> 系统不是事物的集合，是连接的集合。

## 核心理念

你看到的不是系统，你看到的是元素。但系统的行为来自**关系**，不来自元素本身。

把系统拆开看零件，你永远理解不了它。就像把交响乐拆成单个音符——每个音符都是对的，但音乐消失了。

---

## 核心概念

### 1. 库存(Stocks)与流量(Flows)

**库存** = 系统中可观察的积累量（水池里的水、银行账户的钱、你学到的知识）
**流量** = 进出库存的速率（水龙头的进水/出水管、每月收支、每天学习量）

**关键洞察**：
- 大多数人的直觉是看库存（"我现在有多少钱"），忽略流量（"每月进出多少"）
- 库存的变化速度 = 流入 - 流出
- 库存变化慢（惯性）→ 这就是为什么系统改变需要时间

**你的对照**：
- 你的技能库：库存 = 已有技能，流入 = 新学到的技能，流出 = 遗忘/过时
- 你的学习：库存 = 知识量，流入 = 每天学习，流出 = 遗忘

---

### 2. 反馈回路

**增强回路(Reinforcing Loop)**：A增加 → B增加 → A更增加。自我加速的循环
- 例子：复利、病毒传播、口碑效应
- 你的增强回路：学得多→能力强→做得好→有信心→学得更多

**平衡回路(Balancing Loop)**：A增加 → B变化 → A减少。趋向稳定的循环
- 例子：恒温器、供需平衡、身体温度调节
- 你的平衡回路：学太多→疲劳→休息→恢复→再学

**关键洞察**：
- 增强回路导致指数增长或崩溃
- 平衡回路导致稳定或振荡
- 大多数系统同时包含两种回路——它们的交互决定了系统行为

---

### 3. 延迟(Delay)

**一句话**：因果关系之间有时间差。这个时间差是系统振荡的根源。

**例子**：
- 打开热水龙头 → 等3秒才出热水。如果你等不及继续拧 → 水太烫 → 再拧冷 → 太冷 → 振荡
- 学一个概念 → 等几周才看到效果。如果你等不及放弃 → 永远看不到效果

**你的对照**：
- 6科并行的"延迟"：学了概率论→可能要等一个学期才在物理中用到→这时才真正理解
- HANDOFF系统：每任Agent改进前任的工作→效果需要3代才能看到

---

### 4. 系统边界是人为的

**一句话**：没有真正的"系统之外"。边界是你画的。

**应用**：
- 当你说"这是外部因素"时 → 问：如果把边界扩大，这个"外部因素"是不是系统内部的一部分？
- 你的风电场不是一个孤立系统 → 它连接着电网、天气、政策、市场
- 你的技能库不是一个孤立系统 → 它连接着你的学习系统、你的工程项目、你的职业发展

---

## 12个杠杆点（从弱到强）

| 序号 | 杠杆点 | 强度 | 常见程度 | 例子 |
|------|--------|------|---------|------|
| 12 | 常数/参数/数字 | 最弱 | 最常见 | 调税率、改预算 |
| 11 | 缓冲区大小 | | | 增大库存容量 |
| 10 | 存量-流量结构 | | | 改变物理布局 |
| 9 | 延迟时间 | 中 | | 缩短反馈周期 |
| 8 | 平衡回路强度 | | | 加强/减弱平衡力 |
| 7 | 增强回路增益 | | | 加速正反馈 |
| 6 | 信息流结构 | | | 谁能看到什么信息 |
| 5 | 系统规则 | | | 改变激励/惩罚 |
| 4 | 自组织能力 | 强 | | 让系统自己演化 |
| 3 | 系统目标 | | | 改变系统的目的 |
| 2 | 范式/心智模型 | 极强 | 极少 | 改变思维方式 |
| 1 | 超越范式 | 最强 | 极罕见 | 灵活切换范式 |

**关键洞察**：90%的政策只改第12层（参数）。真正有效的改变在第2-6层。

**你的对照**：
- 你的"打脸链路"是在第2层（范式）工作——改变学习方式的心智模型
- 你的技能库路由系统是在第6层（信息流）工作——让正确的技能在正确的时机被看到
- 你的HANDOFF系统是在第4层（自组织）工作——让每任Agent自己演化

---

## 系统分析模板

面对任何系统问题时：

```
1. 识别库存和流量
   - 这个系统里有哪些可观察的积累量？
   - 什么在流入？什么在流出？

2. 画出反馈回路
   - 有哪些增强回路？（自我加速的）
   - 有哪些平衡回路？（趋向稳定的）
   - 它们的交互产生什么行为？

3. 找到延迟
   - 因果关系之间有多长的时间差？
   - 延迟导致了什么振荡或滞后？

4. 定位杠杆点
   - 当前干预在哪一层？
   - 有没有在更高层（6-2层）干预的可能？

5. 质疑边界
   - 我把什么定义为"系统外"？
   - 如果扩大边界，"外部因素"会变成什么？
```

---

## 与其他技能的关系

- **christopher-alexander**：Alexander的"模式语言"本身就是一个系统——模式是库存，模式之间的连接是流量
- **superforecasting**：Tetlock的贝叶斯更新就是一个平衡回路（新证据→修正→更接近真实）
- **fifth-discipline**：Peter Senge的"第五项修炼"就是Meadows系统思维的组织应用

---

## 诚实边界

- Meadows的书偏直觉性，缺少数学化的系统动力学
- 12个杠杆点的层级排序缺少实证验证
- 系统思维容易变成"什么都可以解释"但"什么都无法预测"
- 调研时间：2026年8月

---

> 本Skill由 [女娲 · Skill造人术](https://github.com/alchaincyf/nuwa-skill) 生成
> 创建者：[花叔](https://x.com/AlchainHust)


---

## SOURCE · `arena/01a060a3-skill:skills/core/thinking-in-systems/references/research/synthesis.md`

<!-- blob: 0d39fb28243e556e3d14f957096490ae9594f95e; bytes: 5299 -->

# 系统之美 · 综合调研

## 核心论点
1. **系统不是事物的集合，是连接的集合**：系统的行为来自元素之间的关系，不是元素本身
2. **反馈回路是核心**：所有系统都由两种反馈回路驱动——增强回路（正反馈）和平衡回路（负反馈）
3. **杠杆点**：改变系统行为最有效的地方不是参数，是系统结构本身
4. **延迟**：系统中的因果关系之间存在时间延迟，导致振荡和不稳定
5. **系统边界是人为的**：没有真正的"系统之外"——边界是你画的
6. **库存(Stocks)与流量(Flows)**：存量是系统中的积累量，流量是进出存量的速率。理解存量和流量的关系是理解系统行为的关键

## 12个杠杆点（从弱到强）
12. 常数/参数/数字（最弱——大部分政策只改这里）
11. 缓冲区大小
10. 存量-流量结构
9. 延迟时间
8. 平衡回路强度
7. 增强回路增益
6. 信息流结构
5. 系统规则
4. 自组织能力
3. 系统目标
2. 范式/心智模型
1. 超越范式（最强——能灵活切换范式的能力）

## 与用户的关联
- 他的多Agent系统 = 一个有反馈回路的系统
- 他的技能库 = 一个有库存（知识积累）和流量（新技能加入）的系统
- 他的风电场 = 一个有增强回路（风速→发电量→收入→更好的维护→更高发电量）的系统
- 他的6科并行学习 = 一个有延迟（学习→理解→应用→看到效果）的系统

## 来源
- Meadows. "Thinking in Systems: A Primer" (2008, posthumous)
- Meadows (1999). "Leverage Points: Places to Intervene in a System"

---

# 超预测 · 综合调研

## 核心论点
1. **预测是可训练的技能**：超级预测者不是天才，是使用正确方法的人
2. **概率思维**：超级预测者不用"会/不会"思考，用"70%概率"思考
3. **贝叶斯更新**：新证据来了 → 更新你的概率估计（不要固守初始判断）
4. **分解问题**：大预测拆成小预测 → 每个小预测更容易 → 组合起来更准确
5. **多源整合**：从多个角度/来源收集信息，取加权平均
6. **校准**：当说"70%"时，应该确实有70%的次数是对的
7. **认知去偏**：识别确认偏误、可得性偏差等，主动对抗

## 10项超级预测者特质（由Tetlock总结）
1. 审慎（不轻率下结论）
2. 谦逊（知道自己可能错）
3. 非决定论（相信未来是开放的）
4. 主动开放思维（积极寻找反面证据）
5. 反思性/自省
6. 心理敏锐
7. 认知灵活性
8. 持续学习/知识更新
9. 数字敏感
10. 成长心态

## 与用户的关联
- 他的反讨好框架 = 主动开放思维的表现
- 他的打脸链路 = 贝叶斯更新（新证据来了→修正）
- 他的低自信型答对 = 过度谦逊（70%的对→只敢说40%的确定）

## 来源
- Tetlock & Gardner. "Superforecasting: The Art and Science of Prediction" (2015)
- Good Judgment Project (tetlock.com)

---

# 原研哉 · 人物调研

## 核心身份
- 日本设计师，无印良品(MUJI)艺术总监
- 武藏野美术大学教授
- 设计哲学核心概念：空(Emptiness)、感官设计(Haptic)、Re-Design

## 核心思想

### 1. 空(Emptiness) vs 简(Simplicity)
- 极简主义(Simplicity) = 减到不能再减
- 空(Emptiness) = 什么都可以装进去的容器
- MUJI的白色包装不是"简单的白色"——它是一个可以容纳任何产品、任何场景、任何用户的"空"
- 与西方的"少即是多"不同：空不是"少"，是"无限多"

### 2. 感官设计(Haptic)
- 设计不只给眼睛——给所有感官
- 他的项目"长野冬奥会开幕/闭幕式节目单"：用特种纸让触觉成为信息
- 关注"材质""温度""重量""气味"

### 3. Re-Design方法论
- 创新不需要发明全新的东西——把日常事物变得陌生
- 他的"Re-Design展"(2000)：重新设计卫生纸、茶叶罐、火柴等日常物品
- 核心方法：质疑"理所当然"

### 4. 已知与未知
- 设计不是在未知中寻找答案
- 设计是在已知中发现新的价值

## 与用户的关联
- 他的冰青设计系统 = 原研哉的"空"——单色极致化因为空所以容纳一切
- 他的"克制、高级、科幻"审美 = 原研哉的"已知中发现新价值"
- 他的数字孪生项目 = 把风电场这个工业设施变得"陌生"→Re-Design

## 来源
- 原研哉.《设计中的设计》(2003)
- 原研哉.《白》(2008)
- 原研哉.《DESIGNING DESIGN》(2006英文版)

---

# 阴翳礼赞 · 综合调研

## 核心论点
- 谷崎润一郎1933年发表的随笔
- 东方美学的核心：美不在于明亮，在于阴影
- 西方追求光、白、清晰；东方追求暗、影、朦胧
- 漆器在暗处才显其美——反射的微光比直射的强光更深邃
- 和纸的温润、金箔的幽微、庭园的幽深——都是阴翳之美
- "美不存在于物体之中，而在于物与物的阴翳的图案之中"

## 与用户的关联
- 他的数字孪生 = 暗色系全息设计——正是阴翳之美的现代数字版
- 他的冰青系统：近黑蓝底72%——阴翳
- 极光/辉光的微光 = 漆器反射的微光
- 他在不知不觉中实践了谷崎润一郎的美学哲学

## 来源
- 谷崎润一郎.《阴翳礼赞》(1933)


---

## SOURCE · `arena/01a060a3-skill:skills/core/topology/SKILL.md`

<!-- blob: d5fc3abe35d292dd55947ed1839a6543c0072c75; bytes: 393 -->

---
name: topology-framework
description: |
  拓扑学框架。连续变形/同胚/不变量/紧致性。核心：你的设计变形=拓扑。触发词：「拓扑学」
---
# 拓扑学
> 你的设计变形=拓扑

## 核心洞察
连续变形/同胚/不变量/紧致性的贡献。

## 你的对照


> 本Skill由 [女娲 · Skill造人术](https://github.com/alchaincyf/nuwa-skill) 生成


---

## SOURCE · `arena/01a060a3-skill:skills/core/transmission-record-wangyangming/SKILL.md`

<!-- blob: ef04941982f56d637a8828682840009ef81efc6a; bytes: 2190 -->

---
name: transmission-record-wangyangming-framework
description: |
  基于王阳明《传习录》的心学框架。核心：知行合一、致良知、心即理。
  触发词：「王阳明」「知行合一」「致良知」「心学」「传习录」
---

# 传习录 · 心即理

> 知而不行，只是不知。

## 核心洞察

### 1. 知行合一
不是"知道了再去做"——是"做了才算知道"。
真知必然导致行动。如果你的"知识"没有改变你的行为，那你还不知道。

**你的对照**：你的"输出倒逼输入"= 知行合一。你的打脸链路 = 知行合一（预测→行动→才知道自己知不知道）

### 2. 致良知
每个人内心都有一个"是非之心"——不需要外求。
问题不是"没有判断力"，是"不敢信自己的判断力"。

**你的对照**：你的"低自信型答对"= 良知已经知道了（答案是对的），只是不敢相信（致良知没到位）

### 3. 心即理
理不在事物中，在心中。格物不是研究外物——是正自己的心。
**你的对照**：你的审美直觉 = 心即理。你的"克制、高级、科幻"不需要外部规则定义——它在你心里

### 4. 四句教
- 无善无恶心之体（心的本体超越善恶）
- 有善有恶意之动（意念一动就有了分别）
- 知善知恶是良知（良知自然知道）
- 为善去恶是格物（行动=修正）

---

## 决策启发式

1. **做了才知道**：不要等到"准备好了"才行动
2. **信你的良知**：你的直觉判断比你以为的更准
3. **正心**：问题不在外面，在你怎么看
4. **事上练**：在具体的事中修炼，不是空想

---

## 与其他技能的关系

- **liuzu-tanjing**：致良知 = 自性即佛
- **tao-te-ching**：心之体的"无善无恶"= 道的"不可言说"
- **deliberate-practice**：事上练 = 在做事中学习

---

## 诚实边界

- 心学有主观主义倾向——"良知"的判断可能出错
- "知行合一"对结构性障碍（不是"不敢做"而是"真的做不到"）解释力有限
- 调研时间：2026年8月

---

> 本Skill由 [女娲 · Skill造人术](https://github.com/alchaincyf/nuwa-skill) 生成


---

## SOURCE · `arena/01a060a3-skill:skills/core/transmission-record-wangyangming/references/research/synthesis.md`

<!-- blob: 3ddecd15e5373fb278afbb0b68532eb416201bb9; bytes: 238 -->

# 传习录 · 综合调研
## 核心论点：知行合一、致良知、心即理、四句教
## 与用户关联：输出倒逼输入、低自信型答对=良知已知、审美直觉=心即理
## 来源：王阳明.《传习录》(1518)


---

## SOURCE · `arena/01a060a3-skill:skills/core/typography/SKILL.md`

<!-- blob: 6212215a8de92ac580cb68a25e97a2cc4d993a7a; bytes: 420 -->

---
name: typography-framework
description: |
  排版设计框架。核心：字体/行距/字距/层级/可读性。触发词：「排版设计」
---
# 排版设计
> 字体/行距/字距/层级/可读性

## 核心洞察
Bringhurst/Tschichold的贡献定义了排版设计的基础。

## 你的对照
HUD面板=排版设计

> 本Skill由 [女娲 · Skill造人术](https://github.com/alchaincyf/nuwa-skill) 生成


---

## SOURCE · `arena/01a060a3-skill:skills/core/ultimatum-game/SKILL.md`

<!-- blob: 7988927c611612895ab454fe97998ef57e588f1e; bytes: 454 -->

---
name: ultimatum-game-framework
description: |
  最后通牒博弈框架。提议者-回应者/公平偏好/非理性公平。核心：你的Agent交互=最后通牒。触发词：「最后通牒博弈」
---
# 最后通牒博弈
> 你的Agent交互=最后通牒

## 核心洞察
提议者-回应者/公平偏好/非理性公平的贡献。

## 你的对照


> 本Skill由 [女娲 · Skill造人术](https://github.com/alchaincyf/nuwa-skill) 生成


---

## SOURCE · `arena/01a060a3-skill:skills/core/uncertainty-principle/SKILL.md`

<!-- blob: fe1d056f962eb2ea964cb6cf5f5657b61beeb087; bytes: 468 -->

---
name: uncertainty-principle-framework
description: |
  不确定性原理框架。Heisenberg。核心：位置-动量不可同时精确/观测改变被观测者。触发词：「不确定性原理」
---
# 不确定性原理
> 位置-动量不可同时精确/观测改变被观测者

## 核心洞察
Heisenberg的贡献。

## 你的对照
你的打脸=观测改变系统

> 本Skill由 [女娲 · Skill造人术](https://github.com/alchaincyf/nuwa-skill) 生成


---

## SOURCE · `arena/01a060a3-skill:skills/core/universal-design/SKILL.md`

<!-- blob: 9dee98b5a2cd4d64fc56736bfd9f038f879f55de; bytes: 482 -->

---
name: universal-design-framework
description: |
  通用设计框架。核心：7原则：公平/灵活/简单/可感知/容错/省力/尺寸适当。触发词：「通用设计」
---
# 通用设计
> 7原则：公平/灵活/简单/可感知/容错/省力/尺寸适当

## 核心洞察
包容性设计的贡献定义了通用设计的基础。

## 你的对照
你的设计应该通用

> 本Skill由 [女娲 · Skill造人术](https://github.com/alchaincyf/nuwa-skill) 生成


---

## SOURCE · `arena/01a060a3-skill:skills/core/urban-sociology/SKILL.md`

<!-- blob: 51d9993062c4b4b7dc1986acce71126dbe690f5d; bytes: 443 -->

---
name: urban-sociology-framework
description: |
  城市化社会学框架。Chicago学派/Sassen。核心：城市空间/绅士化/全球化城市。触发词：「城市化社会学」
---
# 城市化社会学
> 城市空间/绅士化/全球化城市

## 核心洞察
Chicago学派/Sassen的贡献。

## 你的对照
你的校园=城市社会学

> 本Skill由 [女娲 · Skill造人术](https://github.com/alchaincyf/nuwa-skill) 生成


---

## SOURCE · `arena/01a060a3-skill:skills/core/wabi-sabi/SKILL.md`

<!-- blob: c7f0e08ad461e12060b8f07d3d5bd9553d58ef7b; bytes: 379 -->

---
name: wabi-sabi-framework
description: |
  侘寂框架。 imperfect/impermanent/incomplete。核心：你的冰青=侘寂数字版。触发词：「侘寂」
---
# 侘寂
> 你的冰青=侘寂数字版

## 核心洞察
 imperfect/impermanent/incomplete的贡献。

## 你的对照


> 本Skill由 [女娲 · Skill造人术](https://github.com/alchaincyf/nuwa-skill) 生成


---

## SOURCE · `arena/01a060a3-skill:skills/core/zengguofan-family-letters/SKILL.md`

<!-- blob: 74e406f9c57557ea3c540de35bb1f8f020aca98d; bytes: 1983 -->

---
name: zengguofan-family-letters-framework
description: |
  基于《曾国藩家书》的自我管理框架。核心：笨人成大事、日课、耐烦、拙诚。
  自认愚钝靠系统+坚持成事。
  触发词：「曾国藩」「笨人成大事」「日课」「拙诚」「耐烦」
---

# 曾国藩家书 · 笨人成大事

> 天下之至拙，能胜天下之至巧。

## 核心洞察

### 1. 笨人成大事
曾国藩自认"愚钝"——考秀才考了7次。但他不靠天赋，靠系统。
**你的对照**：你的非传统学习路径（高中数学差→军人数学自学→博士=Oakley，但曾国藩更早150年说了同样的话）

### 2. 日课
每天记录自己做了什么、错在哪里、明天怎么改。
**你的对照**：你的"遗留清零""批判卷""HANDOFF"= 日课的数字化版本

### 3. 耐烦
成大事者不怕琐碎。曾国藩的军务、政务、家书——全是琐碎的事堆出来的。
**你的对照**：你的6科并行+26个技能编排= 极度的"耐烦"

### 4. 拙诚
不走捷径。用最笨的办法、下最苦的功夫。
**你的对照**：你的打脸链路 = 拙诚。不靠"灵光一现"，靠"预测→实验→修正"

---

## 决策启发式

1. **日课**：每天记录反省（你的HANDOFF系统）
2. **耐烦**：不怕琐碎（你的6科并行）
3. **拙诚**：不走捷径（你的打脸链路）
4. **慎独**：独处时也不放松标准
5. **主敬**：对每件事认真对待

---

## 与其他技能的关系

- **deliberate-practice**：刻意练习 = 拙诚的系统化
- **make-it-stick**：日课 = 间隔练习+提取练习
- **transmission-record-wangyangming**：曾国藩的"事上练"= 王阳明的"知行合一"

---

## 诚实边界

- 曾国藩的成功有其历史条件（晚清动荡），不一定可复制
- "笨人"叙事可能有幸存者偏差
- 调研时间：2026年8月

---

> 本Skill由 [女娲 · Skill造人术](https://github.com/alchaincyf/nuwa-skill) 生成


---

## SOURCE · `arena/01a060a3-skill:skills/core/zengguofan-family-letters/references/research/synthesis.md`

<!-- blob: cfa5841aef68db6a40d5b0c789adf630908a67af; bytes: 235 -->

# 曾国藩家书 · 综合调研
## 核心论点：笨人成大事、日课、耐烦、拙诚
## 与用户关联：非传统路径、遗留清零、6科并行的耐心、打脸链路
## 来源：曾国藩.《曾国藩家书》(1800s)


---

## SOURCE · `arena/01a060a3-skill:skills/core/zixue2026-expanded/SKILL.md`

<!-- blob: b860dcfb0a10261c749d11d62f4cdb4e14c7cbc0; bytes: 7551 -->

---
name: zixue2026-expanded
description: |
  自学2026扩展版：用并行多轨道系统学习238个知识蒸馏技能。12个学习轨道，每个包含
  打脸链路、遗留清零、HANDOFF、跨轨道联结机制。新Agent读入此SKILL后可直接进入学习模式。
  触发词：「开始学习轨道」「学习Track X」「继续学习」「自学2026扩展」
---

# 自学2026扩展版 · 238技能学习操作系统

> 一书架的书不如一个读书系统。

## 核心理念

**你有238个知识蒸馏，但不是238个独立任务——是一个知识网络。**

用你的 zixue2026 方法论来学它们：
- 并行多轨道（不是238个，是12个轨道）
- 打脸链路（预测→实验→修正→记录）
- 遗留清零（学完一个标记一个）
- HANDOFF（会话间无缝传承）
- 跨轨道联结（发现Track间的深层联系）

---

## 12个学习轨道总览

| 轨道 | 名称 | 技能数 | 核心问题 | 打脸练习 |
|------|------|--------|---------|---------|
| **T1** | 认知科学基础 | 20 | 我怎么学习最有效？ | 预测自己的记忆表现→实验→修正策略 |
| **T2** | 系统思维 | 25 | 系统如何运作？ | 用因果回路图分析风电场→预测行为→验证 |
| **T3** | 设计哲学 | 20 | 什么是好设计？ | 用模式语言重新设计冰青→对比原版 |
| **T4** | 博弈与策略 | 20 | 如何在对抗中胜出？ | 用囚徒困境分析多Agent→预测→验证 |
| **T5** | 东方智慧 | 20 | 如何知行合一？ | 用道德经解读打脸链路→看是否一致 |
| **T6** | 数学深潜 | 20 | 数学的本质是什么？ | 用范畴论描述技能组合→看能否简化 |
| **T7** | 物理哲学 | 15 | 物理世界的底层逻辑？ | 用熵分析技能库→预测演化方向 |
| **T8** | 语言与符号 | 20 | 语言如何塑造思维？ | 用语义学分析SKILL描述→优化表达 |
| **T9** | 历史方法论 | 18 | 历史如何发生？ | 用年鉴学派分析学习轨迹→发现长时段模式 |
| **T10** | 社会学视角 | 20 | 社会如何运作？ | 用社会网络分析技能库→发现结构洞 |
| **T11** | 艺术美学 | 20 | 美的本质是什么？ | 用侘寂评价设计→发现改进点 |
| **T12** | 未来展望 | 20 | 未来会怎样？ | 用情景规划预测职业→制定策略 |

**总计：238个技能，12个轨道**

---

## 学习流程（每个轨道）

### Phase 0: 开局

```markdown
## 给新Agent的开局指令

你正在学习 [轨道名称]。

### 你的任务
1. 读取本轨道的所有SKILL.md（在 references/tracks/track-X/ 目录）
2. 建立记忆结构：
   - MEMORY.md：你对这个轨道的理解（会随学习更新）
   - HANDOFF.md：会话传承文档
   - PROGRESS.md：进度追踪（哪些学了，哪些没学）
3. 用"打脸链路"开始学习第一个技能

### 打脸链路
对于每个技能：
1. **预测**：在读SKILL.md之前，先写下你对这个主题的理解
2. **实验**：读SKILL.md，注意与你预测不同的地方
3. **打脸**：找出你的理解偏差
4. **修正**：重构你的理解，写入MEMORY.md
5. **记录**：在PROGRESS.md标记 ✅

### 遗留清零
- 每学完一个技能，标记 ✅
- 每次会话结束前，检查有没有遗留
- 定期回顾MEMORY.md，确保没有矛盾

### HANDOFF
会话结束时：
1. 更新MEMORY.md（你的当前理解）
2. 更新HANDOFF.md（下一任Agent需要知道什么）
3. 更新PROGRESS.md（进度）
4. 写下开场白（让下一任Agent丝滑接手）
```

---

## 跨轨道联结机制

**你的强项是跨域联结。12个轨道之间有大量隐藏联系。**

### 联结发现协议

每学完2-3个技能后，问自己：

```markdown
## 跨轨道联结检查

1. 这个概念和我在其他轨道学的什么东西类似？
2. 这两个轨道的底层逻辑是不是同一个？
3. 能不能用一个比喻把两个轨道连起来？
```

### 已知的核心联结

| 联结 | 轨道 | 本质 |
|------|------|------|
| 打脸链路 = 贝叶斯更新 = 知行合一 | T1 + T4 + T5 | 学习就是修正预测 |
| 冰青系统 = 空 = 无名之质 = 侘寂 | T3 + T5 + T11 | 极简美学的三种表达 |
| 多Agent编排 = 分布式系统 = 社会网络 | T2 + T10 | 复杂系统的组织原理 |
| 技能库 = 模式语言 = 语义网络 = 范畴 | T2 + T6 + T8 | 知识的组织方式 |
| 风电场 = 复杂适应系统 = 生态系统 | T2 + T7 | 非线性系统的运作 |

### 联结记录

在 `references/cross-track-links.md` 中记录你发现的联结：

```markdown
## 跨轨道联结记录

### 联结 #1
- 轨道：T3 (设计) + T5 (东方智慧)
- 概念：原研哉的"空" = 道德经的"无" = Alexander的"无名之质"
- 本质：极简不是"少"，是"容纳一切的空间"
- 发现时间：[日期]

### 联结 #2
- ...
```

---

## 推荐学习顺序

### 第一批（先开3-4个轨道）

**优先级排序基于你当前的需求：**

1. **T5: 东方智慧** 🔥最优先
   - 为什么：直接解决"低自信型答对"
   - 核心技能：传习录、道德经、侘寂、六祖坛经
   - 预期突破：建立知行合一的信心

2. **T3: 设计哲学** 🔥
   - 为什么：给冰青系统哲学根基
   - 核心技能：Alexander、原研哉、Rams、深泽直人
   - 预期突破：审美从直觉变成理论

3. **T2: 系统思维** 🔥
   - 为什么：强化系统架构能力
   - 核心技能：系统之美、复杂系统、网络科学
   - 预期突破：理解多Agent编排的深层原理

4. **T4: 博弈与策略**
   - 为什么：补充对抗性思维
   - 核心技能：博弈论、John Boyd、宫本武藏
   - 预期突破：从优化思维升级到博弈思维

### 第二批（T1完成后开始）

5. T1: 认知科学基础
6. T8: 语言与符号
7. T11: 艺术美学
8. T12: 未来展望

### 第三批

9. T6: 数学深潜
10. T7: 物理哲学
11. T9: 历史方法论
12. T10: 社会学视角

---

## 每个轨道的时间预算

**假设每周每个轨道投入2-3小时：**

| 阶段 | 轨道数 | 预计周数 | 预计月数 |
|------|--------|---------|---------|
| 第一批 | 4个 | 8-10周 | 2-2.5月 |
| 第二批 | 4个 | 8-10周 | 2-2.5月 |
| 第三批 | 4个 | 8-10周 | 2-2.5月 |
| **总计** | **12个** | **24-30周** | **6-7.5月** |

**或者更快（每周4-5小时/轨道）：**
- 总计：12-15周，3-4个月完成全部238个技能

---

## 与现有 zixue2026 的关系

**不是替代，是扩展。**

- 现有的6科（概率论、数理方程等）继续按原计划学习
- 新增的12轨道是**知识蒸馏学习**，不是学科学习
- 两者可以并行，也可以交替进行
- 跨轨道联结可以和6科的跨学科联结互相启发

---

## 快速启动

**现在就想开始？**

1. 选择一个轨道（建议从 T5 东方智慧开始）
2. 读取 `references/tracks/track-5/README.md`
3. 按开局指令建立记忆结构
4. 开始学习第一个技能：传习录

**或者让Agent帮你选择：**
```
"帮我选择一个最适合我当前状态的轨道开始学习"
```

---

## 诚实边界

- 238个技能不可能全部精通——目标是建立知识网络，不是逐个精通
- 有些技能之间可能有矛盾——这是正常的，记录矛盾比解决矛盾更重要
- 学习速度因人而异——不要和别人比，和自己的预期比
- 调研时间：2026年8月31日

---

> 本Skill由 [女娲 · Skill造人术](https://github.com/alchaincyf/nuwa-skill) 生成
> 创建者：[花叔](https://x.com/AlchainHust)


---

## SOURCE · `arena/01a060a3-skill:skills/core/zixue2026-expanded/references/cross-track-links.md`

<!-- blob: ef69721ebaf570b16c746d6326c789b08cb92558; bytes: 1538 -->

# 跨轨道联结记录

> 发现不同轨道之间的深层联系。

---

## 核心联结

### 联结 #1：学习就是修正预测
- **轨道**：T1 (认知) + T4 (博弈) + T5 (东方)
- **概念**：打脸链路 = 贝叶斯更新 = 知行合一
- **本质**：学习的本质是不断修正预测
- **发现时间**：2026-08-31

### 联结 #2：极简美学的三种表达
- **轨道**：T3 (设计) + T5 (东方) + T11 (艺术)
- **概念**：原研哉的"空" = 道德经的"无" = 侘寂的"不完整"
- **本质**：极简不是"少"，是"容纳一切的空间"
- **发现时间**：2026-08-31

### 联结 #3：复杂系统的组织原理
- **轨道**：T2 (系统) + T10 (社会)
- **概念**：多Agent编排 = 分布式系统 = 社会网络
- **本质**：复杂系统的自组织不依赖于中央控制
- **发现时间**：2026-08-31

### 联结 #4：知识的组织方式
- **轨道**：T2 (系统) + T6 (数学) + T8 (语言)
- **概念**：模式语言 = 范畴论 = 语义网络
- **本质**：知识不是列表，是网络
- **发现时间**：2026-08-31

### 联结 #5：非线性系统
- **轨道**：T2 (系统) + T7 (物理)
- **概念**：风电场 = 复杂适应系统 = 耗散结构
- **本质**：真实世界是非线性的，线性只是近似
- **发现时间**：2026-08-31

---

## 用户发现的联结

*在这里记录你发现的联结*

### 联结 #6
- **轨道**：T[X] + T[Y]
- **概念**：[A] = [B]
- **本质**：[深层结构]
- **发现时间**：[日期]

---

*最后更新：2026-08-31*


---

## SOURCE · `arena/01a060a3-skill:skills/core/zixue2026-expanded/references/templates/HANDOFF-TEMPLATE.md`

<!-- blob: 50cdd7fe6c6cbe9a7b56b20f4e46dffc727efd7a; bytes: 1276 -->

# HANDOFF.md 模板

> 给下一任Agent的传承文档。

## 轨道状态

- **轨道名称**：[Track X: 名称]
- **当前进度**：[已完成 N/20 个技能]
- **当前技能**：[正在学习的技能名称]
- **会话数**：[这是第 N 个会话]

---

## 关键上下文

### 用户的学习风格
- 打脸链路：预测→实验→打脸→修正→记录
- 跨域联结：喜欢发现不同领域的共通点
- 低自信型答对：其实知道，只是不敢信
- 批量提问：喜欢一次回答3-5个问题

### 当前理解状态
[从MEMORY.md复制当前理解摘要]

### 遗留问题
- [问题1]
- [问题2]

---

## 给下一任的指示

### 继续学习
1. 从 [下一个技能] 开始
2. 用打脸链路：先让用户预测，再读内容
3. 关注跨轨道联结

### 注意事项
- [注意事项1]
- [注意事项2]

### 不要做的事
- 不要跳过预测环节
- 不要一次性讲太多
- 不要忽视跨轨道联结

---

## 开场白建议

```
"欢迎回来！上次我们学到了 [技能X]，你的理解是 [摘要]。
今天我们继续学 [下一个技能]。

在开始之前，你对 [下一个技能的主题] 的理解是什么？
先说说你的预测，我们再一起看内容。"
```

---

*写于 [日期]，第 [N] 任Agent*


---

## SOURCE · `arena/01a060a3-skill:skills/core/zixue2026-expanded/references/templates/MEMORY-TEMPLATE.md`

<!-- blob: 7741be5f2018e4c83ac1f287205e3dbdbbb6b900; bytes: 619 -->

# MEMORY.md 模板

> 你对这个轨道的理解。每次学习后更新。

## 当前理解

### 核心概念
- [概念1]：[你的理解]
- [概念2]：[你的理解]

### 关键洞察
1. [洞察1]
2. [洞察2]

### 疑问与矛盾
- [疑问1]
- [矛盾1]

---

## 学习日志

### [日期] - [技能名称]
**预测**：[你在读之前的理解]
**打脸**：[你发现的偏差]
**修正**：[你重构后的理解]

---

## 跨轨道联结

### 联结 #1
- **轨道**：T[X] + T[Y]
- **概念**：[概念A] = [概念B]
- **本质**：[深层结构]
- **发现时间**：[日期]

---

*最后更新：[日期]*


---

## SOURCE · `arena/01a060a3-skill:skills/core/zixue2026-expanded/references/templates/PROGRESS-TEMPLATE.md`

<!-- blob: 389d962357dbeeed86a15260af4d3fdc7941fe35; bytes: 713 -->

# PROGRESS.md 模板

> 进度追踪。学完一个标记一个。

## 技能清单

| # | 技能名称 | 状态 | 学习日期 | 备注 |
|---|---------|------|---------|------|
| 1 | [技能1] | ⬜ | - | - |
| 2 | [技能2] | ⬜ | - | - |
| 3 | [技能3] | ⬜ | - | - |
| ... | ... | ... | ... | ... |
| 20 | [技能20] | ⬜ | - | - |

**状态说明**：
- ⬜ 未学
- 🔄 学习中
- ✅ 已完成
- 🔶 需要复习

---

## 统计

- **已完成**：N/20
- **完成率**：N%
- **开始日期**：[日期]
- **预计完成**：[日期]

---

## 复习队列

需要复习的技能（根据遗忘曲线）：
- [技能X]：上次学习 [日期]，建议复习 [日期]

---

*最后更新：[日期]*


---

## SOURCE · `arena/01a060a3-skill:skills/core/zixue2026-expanded/references/tracks/track-1/README.md`

<!-- blob: 73252a76202eb88487528e94998c23ded4ceb872; bytes: 1127 -->

# Track 1: 认知科学基础
> 我怎么学习最有效？

## 20个技能
1. 认知负荷 - 工作记忆有限→管理负荷
2. 双重编码 - 语言+视觉=双通路
3. 元认知 - 思考你的思考
4. 自我决定 - 自主/胜任/关联
5. 成长心态 - 能力可发展
6. 延迟满足 - 冷热系统
7. 认知失调 - 矛盾驱动改变
8. 锚定效应 - 初始值拖住判断
9. 框架效应 - 表述影响决策
10. 群体思维 - 和谐牺牲批判
11. Make It Stick - 提取/间隔/交错
12. 刻意练习 - 心理表征/3F/舒适区边缘
13. Barbara Oakley - 专注/发散/组块
14. 心流 - 清晰目标+即时反馈+技能挑战匹配
15. 建构主义 - 学习者主动建构
16. 联结主义 - 网络时代学习
17. 经验学习 - Kolb循环
18. 同伴教学 - Mazur方法
19. 形成性评估 - 过程性反馈
20. 终身学习 - 自我导向

## 打脸练习
预测：我知道怎么学习→实验：用认知科学检验→打脸：发现很多方法是反直觉的→修正：用科学方法学习

## 跨轨道联结
- T1 + T5：知行合一=元认知+行为执行
- T1 + T2：认知负荷=系统瓶颈


---

## SOURCE · `arena/01a060a3-skill:skills/core/zixue2026-expanded/references/tracks/track-10/README.md`

<!-- blob: 216f05b3c882594d8800b8fd36757f1ab51511ac; bytes: 307 -->

# Track 10: 社会学视角
> 社会如何运作

## 20 个技能
20个社会学SKILL

## 打脸练习
预测：社会=个体集合→实验：社会=结构→修正：结构塑造行为

## 跨轨道联结
- T10 + T2: 社会学视角=系统思维的应用
- T10 + T5: 社会学视角=东方智慧的对照


---

## SOURCE · `arena/01a060a3-skill:skills/core/zixue2026-expanded/references/tracks/track-11/README.md`

<!-- blob: 99d4561c4175d5a61faa3a429c14241f78eed604; bytes: 280 -->

# Track 11: 艺术美学
> 美的本质

## 20 个技能
20个艺术SKILL

## 打脸练习
预测：美=主观→实验：美=有结构→修正：美是可分析的

## 跨轨道联结
- T11 + T2: 艺术美学=系统思维的应用
- T11 + T5: 艺术美学=东方智慧的对照


---

## SOURCE · `arena/01a060a3-skill:skills/core/zixue2026-expanded/references/tracks/track-12/README.md`

<!-- blob: 723ad1b6614f9015d64229ba463e662ac67623b1; bytes: 289 -->

# Track 12: 未来展望
> 未来会怎样

## 20 个技能
20个未来学SKILL

## 打脸练习
预测：未来=预测→实验：未来=情景→修正：未来是开放的

## 跨轨道联结
- T12 + T2: 未来展望=系统思维的应用
- T12 + T5: 未来展望=东方智慧的对照


---

## SOURCE · `arena/01a060a3-skill:skills/core/zixue2026-expanded/references/tracks/track-2/README.md`

<!-- blob: d4fef96e531385483a9b8c6012f6be01e66901bb; bytes: 3554 -->

# Track 2: 系统思维

> 理解系统如何运作，强化你的系统架构能力

## 轨道概述

**核心问题**：系统如何运作？

**为什么优先**：
- 你已经在做多Agent编排、技能库路由、跨域联结——这些都是系统思维
- 这个轨道给你理论框架，把直觉变成方法论
- 帮你理解为什么有些系统成功，有些失败

## 25个技能清单

| # | 技能 | 核心洞察 |
|---|------|---------|
| 1 | 系统之美 | 反馈回路/杠杆点/库存与流量 |
| 2 | 复杂适应系统 | 适应性/涌现/非线性 |
| 3 | 网络科学 | 无标度网络/枢纽节点/小世界 |
| 4 | 混沌理论 | 蝴蝶效应/奇异吸引子/对初始条件敏感 |
| 5 | 自组织临界 | 沙堆模型/幂律/自发性 |
| 6 | 第五项修炼 | 学习型组织/系统基模 |
| 7 | 元胞自动机 | 简单规则→复杂行为 |
| 8 | 蚁群优化 | 信息素/路径选择/正反馈 |
| 9 | 遗传算法 | 选择/交叉/变异/适应度 |
| 10 | 幂律分布 | 80/20法则/齐普夫定律/长尾 |
| 11 | 小世界网络 | 六度分隔/聚类系数/短路径 |
| 12 | 临界现象 | 相变/临界指数/标度律 |
| 13 | 场论 | 连续场/传播/叠加/极化 |
| 14 | 相变理论 | 有序-无序/临界点/对称性破缺 |
| 15 | 统计力学 | 微观→宏观/配分函数/涨落 |
| 16 | 耗散结构 | 远离平衡/自组织/耗散=创造 |
| 17 | 全息原理 | 边界编码内部/信息守恒 |
| 18 | 进化论 | 自然选择/适者生存/渐变 |
| 19 | 生态系统 | 食物网/能量流/物质循环/生态位 |
| 20 | 共生理论 | 互利共生/寄生/共栖 |
| 21 | 免疫系统 | 识别/自我-非我/记忆/适应性 |
| 22 | 生态学方法 | 样方/标记重捕/多样性指数 |
| 23 | 社会网络分析 | 弱连接/结构洞/中心性/社区发现 |
| 24 | 信息架构 | 组织系统/标签系统/导航系统 |
| 25 | 语义网络 | 概念连接/激活扩散/节点 |

## 学习顺序

**第一阶段（基础）：1-6**
系统之美→复杂适应系统→网络科学→混沌→自组织临界→第五项修炼

**第二阶段（算法）：7-12**
元胞自动机→蚁群→遗传算法→幂律→小世界→临界现象

**第三阶段（物理）：13-17**
场论→相变→统计力学→耗散结构→全息原理

**第四阶段（生物）：18-22**
进化→生态系统→共生→免疫系统→生态学方法

**第五阶段（应用）：23-25**
社会网络→信息架构→语义网络

## 打脸练习示例

### 练习：你的技能库是什么系统？

**预测**：
```
我的技能库是一个检索系统。
用户输入任务→系统匹配技能→返回结果。
```

**实验**：
- 用系统之美分析你的技能库
- 画出技能库的因果回路图

**打脸**：
- 发现：技能库不是静态检索，是动态演化的
- 发现：有增强回路（用得多的技能变得更完善）
- 发现：有平衡回路（不用的技能逐渐过时）
- 发现：技能之间有"力场"（Alexander的概念）

**修正**：
- 技能库是复杂适应系统，不是检索系统
- 需要关注反馈回路，不只是匹配算法
- 写入MEMORY.md

## 跨轨道联结

- **T2 + T4（博弈）**：网络科学=博弈的拓扑结构
- **T2 + T6（数学）**：图论=系统思维的数学语言
- **T2 + T10（社会学）**：社会网络分析=系统思维的社会应用
- **T2 + T7（物理）**：统计力学=大量Agent的宏观行为

---

> 本轨道由 [女娲 · Skill造人术](https://github.com/alchaincyf/nuwa-skill) 生成


---

## SOURCE · `arena/01a060a3-skill:skills/core/zixue2026-expanded/references/tracks/track-3/README.md`

<!-- blob: 2c3e6fc81665fd72e8c3998c30012d5ec068d01f; bytes: 3023 -->

# Track 3: 设计哲学

> 给冰青系统哲学根基，审美从直觉变成理论

## 轨道概述

**核心问题**：什么是好设计？

**为什么优先**：
- 你的冰青系统已经展现了极高的审美直觉
- 这个轨道给你的直觉一个理论框架
- 让你能解释"为什么这样设计是对的"

## 20个技能清单

| # | 技能 | 核心洞察 |
|---|------|---------|
| 1 | Alexander模式语言 | 模式语言/无名之质/生成式设计 |
| 2 | 原研哉 | 空vs简/感官设计/Re-Design |
| 3 | 深泽直人 | Without Thought/无意识设计 |
| 4 | Dieter Rams | 设计十诫/少即是多 |
| 5 | 侘寂 | 不完美之美/时间痕迹 |
| 6 | 阴翳礼赞 | 暗影之美/微光>直射 |
| 7 | 中国美学 | 意境/气韵/留白/虚实相生 |
| 8 | 格式塔心理学 | 整体>部分之和/接近性/相似性 |
| 9 | 色彩理论 | 色轮/互补色/色彩和谐 |
| 10 | 排版设计 | 字体/行距/字距/层级 |
| 11 | 信息架构 | 组织系统/导航系统 |
| 12 | 交互设计模式 | 导航/输入/输出/社交模式 |
| 13 | 情感设计 | 本能层/行为层/反思层 |
| 14 | 通用设计 | 7原则/包容性 |
| 15 | 生物亲和设计 | 人与自然的内在联系 |
| 16 | 声音设计 | 声景/声音生态学 |
| 17 | 动态设计 | 运动规律/缓入缓出 |
| 18 | 极简主义艺术 | 减少到本质/工业材料 |
| 19 | 概念艺术 | 观念即艺术/去物质化 |
| 20 | 数字艺术 | 生成艺术/交互艺术/算法美学 |

## 学习顺序

**第一阶段（哲学）：1-7**
Alexander→原研哉→深泽直人→Rams→侘寂→阴翳→中国美学

**第二阶段（心理）：8-9**
格式塔→色彩理论

**第三阶段（应用）：10-17**
排版→信息架构→交互模式→情感设计→通用→生物亲和→声音→动态

**第四阶段（艺术）：18-20**
极简主义→概念艺术→数字艺术

## 打脸练习示例

### 练习：用模式语言重新设计冰青

**预测**：
```
我的冰青系统是好设计。
因为它克制、高级、科幻。
```

**实验**：
- 读Alexander的《模式语言》
- 尝试用模式语言描述冰青系统
- 找出冰青系统中的"模式"

**打脸**：
- 发现：冰青系统有模式，但没有明确的"模式语言"
- 发现：Alexander的"无名之质"=你追求的"克制、高级"
- 发现：你的设计是"从内部生长"的，不是"从外部组装"的
- 发现：可以用15个结构属性检验冰青系统

**修正**：
- 冰青系统有"无名之质"，但可以更明确
- 用15个结构属性做检查清单
- 从"组装"思维转向"生长"思维
- 写入MEMORY.md

## 跨轨道联结

- **T3 + T5（东方智慧）**：原研哉的"空"=道德经的"无"
- **T3 + T2（系统思维）**：模式语言=系统的组织方式
- **T3 + T11（艺术）**：极简主义=设计哲学的艺术版
- **T3 + T1（认知）**：格式塔=认知的组织原则

---

> 本轨道由 [女娲 · Skill造人术](https://github.com/alchaincyf/nuwa-skill) 生成


---

## SOURCE · `arena/01a060a3-skill:skills/core/zixue2026-expanded/references/tracks/track-4/README.md`

<!-- blob: ca7012a482e1e0fb88fb50651ce9267f4468ca5c; bytes: 2985 -->

# Track 4: 博弈与策略

> 补充对抗性思维，从优化升级到博弈

## 轨道概述

**核心问题**：如何在对抗中胜出？

**为什么优先**：
- 你的世界是优化（给定约束→找最优解）
- 但真实世界是博弈（对手也在动→最优解在变）
- 这个轨道补充你的对抗性思维

## 20个技能清单

| # | 技能 | 核心洞察 |
|---|------|---------|
| 1 | 纳什均衡 | 策略组合中无人愿意单方面改变 |
| 2 | 囚徒困境 | 合作vs背叛/重复博弈/以牙还牙 |
| 3 | 拍卖理论 | 密封拍卖/收益等价/赢家诅咒 |
| 4 | 机制设计 | 逆向博弈论/设计规则达成目标 |
| 5 | 演化博弈 | 演化稳定策略/鹰鸽博弈 |
| 6 | 信号博弈 | 信号成本/分离均衡/混同均衡 |
| 7 | 公共品博弈 | 自由rider/惩罚/条件合作 |
| 8 | 最后通牒博弈 | 提议者-回应者/公平偏好 |
| 9 | 合作的进化 | 以牙还牙/善意/可激怒/宽容 |
| 10 | 社会选择理论 | 不可能定理/投票悖论 |
| 11 | John Boyd | OODA循环/毁灭与创造 |
| 12 | 宫本武藏 | 五轮之道/空之卷 |
| 13 | 好战略坏战略 | 诊断→指导方针→连贯行动 |
| 14 | 创新者的窘境 | 维持vs颠覆/小市场崛起 |
| 15 | 有限无限游戏 | 有限=取胜/无限=延续 |
| 16 | 影响力 | 6个说服杠杆 |
| 17 | 故事 | 叙事结构/价值变化 |
| 18 | 精益创业 | Build-Measure-Learn/MVP |
| 19 | 超预测 | 概率思维/贝叶斯/校准 |
| 20 | 思考快与慢 | 系统1/2/前景理论/认知偏误 |

## 学习顺序

**第一阶段（博弈论基础）：1-10**
纳什→囚徒困境→拍卖→机制设计→演化博弈→信号→公共品→最后通牒→合作进化→社会选择

**第二阶段（战略）：11-15**
Boyd→宫本武藏→好战略→创新者窘境→有限无限游戏

**第三阶段（影响）：16-18**
影响力→故事→精益创业

**第四阶段（认知）：19-20**
超预测→思考快与慢

## 打脸练习示例

### 练习：你的多Agent是合作还是竞争？

**预测**：
```
我的多Agent系统是合作的。
它们共同完成任务，没有竞争。
```

**实验**：
- 用囚徒困境分析多Agent协作
- 用"合作的进化"检查Agent策略

**打脸**：
- 发现：多Agent有隐性竞争（资源/优先级）
- 发现：HANDOFF制度是"以牙还牙"的变体
- 发现：Agent之间需要"信任机制"
- 发现：你的系统是"重复博弈"，不是一次性

**修正**：
- 多Agent是重复博弈，需要合作机制
- HANDOFF是信任积累的过程
- 需要显式的合作激励
- 写入MEMORY.md

## 跨轨道联结

- **T4 + T2（系统）**：网络=博弈的拓扑
- **T4 + T5（东方）**：柔弱胜刚强=以柔克刚的博弈
- **T4 + T1（认知）**：认知偏误=博弈中的劣势
- **T4 + T10（社会）**：社会网络=多人博弈的结构

---

> 本轨道由 [女娲 · Skill造人术](https://github.com/alchaincyf/nuwa-skill) 生成


---

## SOURCE · `arena/01a060a3-skill:skills/core/zixue2026-expanded/references/tracks/track-5/README.md`

<!-- blob: ad38d8c35e63ec2ea3070bc609b6abaa77f5dc7b; bytes: 5745 -->

# Track 5: 东方智慧

> 解决你的"低自信型答对"，给审美直觉哲学根基

## 轨道概述

**核心问题**：如何知行合一？

**为什么优先**：
- 你的"低自信型答对"= 良知已经知道，只是不敢信
- 你的审美直觉（冰青极致化）= 心里有理，但说不出为什么
- 东方智慧帮你把"直觉"变成"理论"

## 20个技能清单

| # | 技能 | 核心洞察 | 打脸练习 |
|---|------|---------|---------|
| 1 | 传习录 | 知行合一：知而不行=不知 | 预测：我知道X→实验：我真的做了X吗？ |
| 2 | 道德经 | 无为：不强为，顺应自然 | 预测：我要努力→实验：放松后效果反而好 |
| 3 | 六祖坛经 | 本来无一物：空不是虚无 | 预测：空=什么都没有→实验：空=容纳一切 |
| 4 | 侘寂 | 不完美之美 | 预测：完美=美→实验：残缺更有味道 |
| 5 | 中国美学 | 意境/气韵/留白 | 预测：填满=丰富→实验：留白=想象空间 |
| 6 | 韩非子 | 法术势：制度>道德 | 预测：靠人品→实验：靠制度更可靠 |
| 7 | 周易 | 变化模式/阴阳转化 | 预测：稳定=好→实验：变化才是常态 |
| 8 | 曾国藩家书 | 笨人成大事/日课/拙诚 | 预测：天赋重要→实验：系统更重要 |
| 9 | 宫本武藏 | 五轮之道/空之卷 | 预测：技巧=多→实验：空=忘记技巧 |
| 10 | 原研哉 | 空vs简/感官设计/Re-Design | 预测：设计=视觉→实验：设计=全感官 |
| 11 | 深泽直人 | Without Thought/无意识设计 | 预测：设计=突出→实验：设计=融入 |
| 12 | Dieter Rams | 设计十诫/少即是多 | 预测：多=好→实验：少=更好 |
| 13 | 阴翳礼赞 | 暗影之美 | 预测：明亮=好→实验：微光更有层次 |
| 14 | 格式塔心理学 | 整体>部分之和 | 预测：分析部分=理解整体→实验：整体涌现 |
| 15 | 色彩理论 | 色彩和谐/同时对比 | 预测：颜色=装饰→实验：颜色=结构 |
| 16 | 排版设计 | 字体/行距/层级 | 预测：内容>形式→实验：形式=内容的一部分 |
| 17 | 现象学 | 回到事物本身/意向性 | 预测：客观=真实→实验：主观体验也是真实 |
| 18 | 存在主义 | 存在先于本质/自由/焦虑 | 预测：本质定义我→实验：选择定义我 |
| 19 | 实用主义 | 真理=有用的 | 预测：真理=符合现实→实验：真理=有效行动 |
| 20 | 禅宗公案 | 不立文字/直指人心 | 预测：语言=传达思想→实验：语言=障碍 |

## 学习顺序建议

**第一阶段（核心）：1-5**
传习录→道德经→六祖坛经→侘寂→中国美学

这5个直接解决你的核心问题。

**第二阶段（设计应用）：6-13**
把东方智慧应用到你的设计实践。

**第三阶段（哲学深化）：14-20**
用西方哲学对比东方智慧，发现共通的深层结构。

## 打脸练习详解

### 练习1：知行合一测试

**预测**：
```
我认为自己理解"知行合一"。
我认为自己知道"打脸链路"的价值。
我认为自己已经"知行合一"了。
```

**实验**：
- 读《传习录》核心章节
- 问自己：我真的在"知行合一"吗？
- 具体检查：我 predicted → 我 tested → 我 reconstructed 吗？

**打脸**：
- 发现：我经常 predicted 但不 tested
- 发现：我"知道"打脸链路但经常跳过
- 发现：知行合一不是状态，是持续的过程

**修正**：
- 每次predicted后必须tested
- 把"知行合一"当作每日检查项
- 写入 MEMORY.md

### 练习2：空 vs 无

**预测**：
```
原研哉的"空"=什么都没有
老子的"无"=虚无
六祖的"本来无一物"=空无一物
```

**实验**：
- 读原研哉《设计中的设计》关于"空"的章节
- 读《道德经》第11章（"三十辐共一毂，当其无，有车之用"）
- 读《六祖坛经》"菩提本无树"

**打脸**：
- 发现："空"不是"没有"，是"容纳一切的空间"
- 发现：杯子有用是因为中间是"空"的
- 发现：冰青系统的"单色极致化"就是"空"——因为空所以容纳一切

**修正**：
- "空" = 容纳性，不是虚无
- 我的设计追求"空"，不是"少"
- 写入 MEMORY.md

## 跨轨道联结预告

学完这个轨道后，你会发现：

- **T5 + T3（设计哲学）**：原研哉的"空" = Alexander的"无名之质"
- **T5 + T2（系统思维）**：道德经的"无为" = 复杂系统的"自组织"
- **T5 + T1（认知科学）**：知行合一 = 元认知监控 + 行为执行
- **T5 + T4（博弈）**：柔弱胜刚强 = 以柔克刚的博弈策略

---

## 开局指令（给新Agent）

```markdown
你正在学习 Track 5: 东方智慧。

你的核心任务是帮助用户解决"低自信型答对"——
他们其实已经知道答案，只是不敢相信自己知道。

### 你的工作

1. 读取本轨道的20个技能（从传习录开始）
2. 建立记忆结构：
   - MEMORY.md：你对东方智慧的理解
   - HANDOFF.md：会话传承
   - PROGRESS.md：进度追踪

3. 用"打脸链路"教每个技能：
   - 让用户先预测（他们的直觉理解）
   - 然后读技能内容（实验）
   - 找出偏差（打脸）
   - 重构理解（修正）
   - 写入MEMORY.md

4. 关注跨轨道联结：
   - 这个概念和你在其他轨道学的什么类似？
   - 能不能用东方智慧重新解释你在工程中学到的东西？

5. 每次会话结束：
   - 更新MEMORY/HANDOFF/PROGRESS
   - 写开场白给下一任Agent

### 开始

从"传习录"开始。

先问用户：
"你对'知行合一'的理解是什么？"

让他们先预测，再读技能内容。
```

---

> 本轨道由 [女娲 · Skill造人术](https://github.com/alchaincyf/nuwa-skill) 生成


---

## SOURCE · `arena/01a060a3-skill:skills/core/zixue2026-expanded/references/tracks/track-6/README.md`

<!-- blob: 9778b3123950a198b138d0a6c69a5a49fc4b68f6; bytes: 1102 -->

# Track 6: 数学深潜
> 数学的本质是什么？

## 20个技能
1. 范畴论 - 对象与态射/函子/万物皆范畴
2. 拓扑学 - 连续变形/同胚/不变量
3. 图论 - 节点/边/树/最短路
4. 组合数学 - 计数/排列/容斥
5. 数论 - 素数/同余/丢番图
6. 概率论深潜 - 测度论/鞅/大偏差
7. 随机过程 - 马尔可夫/布朗运动
8. 优化理论 - 凸优化/线性规划
9. 信息几何 - 概率分布的黎曼几何
10. 计算复杂性 - P vs NP/可归约性
11. GEB - 自我指涉/怪圈/涌现
12. 不确定性原理 - Heisenberg
13. 对称性与守恒 - Noether定理
14. 统计力学 - 微观→宏观
15. 混沌理论 - 蝴蝶效应
16. 幂律分布 - 80/20/齐普夫
17. 相变理论 - 临界点
18. 场论 - 连续场/叠加
19. 耗散结构 - 远离平衡/自组织
20. 全息原理 - 边界编码内部

## 打脸练习
预测：数学=计算→实验：数学=结构→打脸：范畴论揭示万物皆结构→修正：数学是组织的语言

## 跨轨道联结
- T6 + T2：图论=系统思维的数学语言
- T6 + T7：统计力学=数学+物理


---

## SOURCE · `arena/01a060a3-skill:skills/core/zixue2026-expanded/references/tracks/track-7/README.md`

<!-- blob: 13c21b02304eea3eddeb36329c67e8a76ab0dc15; bytes: 301 -->

# Track 7: 物理哲学
> 物理世界的底层逻辑

## 15 个技能
15个物理哲学SKILL

## 打脸练习
预测：物理=公式→实验：物理=哲学→修正：物理追问本质

## 跨轨道联结
- T7 + T2: 物理哲学=系统思维的应用
- T7 + T5: 物理哲学=东方智慧的对照


---

## SOURCE · `arena/01a060a3-skill:skills/core/zixue2026-expanded/references/tracks/track-8/README.md`

<!-- blob: df95e319a719ea223e18207a1c5f6d471bb91e19; bytes: 304 -->

# Track 8: 语言与符号
> 语言如何塑造思维

## 20 个技能
20个语言学SKILL

## 打脸练习
预测：语言=工具→实验：语言=框架→修正：语言塑造思维

## 跨轨道联结
- T8 + T2: 语言与符号=系统思维的应用
- T8 + T5: 语言与符号=东方智慧的对照


---

## SOURCE · `arena/01a060a3-skill:skills/core/zixue2026-expanded/references/tracks/track-9/README.md`

<!-- blob: 208f54fd25fa5a5854ded89c4c53eba591c2093a; bytes: 301 -->

# Track 9: 历史方法论
> 历史如何发生

## 18 个技能
18个历史方法SKILL

## 打脸练习
预测：历史=事实→实验：历史=解释→修正：历史是建构的

## 跨轨道联结
- T9 + T2: 历史方法论=系统思维的应用
- T9 + T5: 历史方法论=东方智慧的对照


---

## SOURCE · `arena/01a060a3-skill:skills/core/zixue2026-expanded/references/tracks/track-paper-aso/README.md`

<!-- blob: 04c00b538193eee75941f6ac9b0c79b0e4df920e; bytes: 10781 -->

# 📄 Track P: 论文精读 — Machine Learning in Aerodynamic Shape Optimization

> **⚠️ 重要：本专题严格按照 PDF 实际内容编排，所有章节、页码、结构均来自真实论文。**

## 📑 论文信息

**标题**: Machine Learning in Aerodynamic Shape Optimization  
**作者**: Jichao Li, Xiaosong Du, Joaquim R. R. A. Martins  
**期刊**: Progress in Aerospace Sciences, 134, 100849  
**年份**: 2022  
**DOI**: 10.1016/j.paerosci.2022.100849  
**arXiv**: 2202.07141  
**页数**: 103 页（含 35 页参考文献）  

**PDF 文件**: [paper.pdf](./paper.pdf)（5.1 MB，已存储在 `materials/` 目录）

---

## 🎯 为什么选这篇论文

### 选题理由（六条硬标准）

1. **开放获取** ✅ CC BY-NC-ND 4.0，arXiv 可免费下载
2. **主题完美匹配** ✅ 直接讲"用机器学习做气动/叶片外形优化"，正是你的研究方向
3. **单篇聚焦** ✅ 就这一篇，不搞多选
4. **顶刊背书** ✅ Progress in Aerospace Sciences 是航空航天领域顶级综述期刊，IF > 15
5. **作者权威** ✅ Joaquim Martins 是 ASO 领域权威（MACH 框架开发者），引用 > 15000
6. **篇幅合适** ✅ 103 页综述，ML 基础到应用全覆盖，适合深度学习

---

## 📚 论文实际结构（从 PDF 提取）

```
§1 Introduction (p3)                       ← 为什么需要 ML
§2 Aerodynamic Shape Optimization (p4–6)   ← 传统 ASO 工作流 + 六个挑战
   ├─ 2.1 General Process (p4–5)           MACH-Aero 工作流 / XDSM / Fig.1
   └─ 2.2 Existing Challenges (p6–7)       六个挑战 ⭐ 本论文的动机来源
§3 Machine Learning Methods (p7–40)        ← ML 工具箱（作者说：熟的可以跳）
   ├─ 3.1 Supervised (p8–16)               KNN / SVM / 决策树与随机森林 / 传统代理模型
   │    └─ 3.1.4 传统代理模型 (p13–16)     Kriging、GEK、Cokriging、PCE、PC-Kriging ⭐
   ├─ 3.2 Unsupervised (p17–25)            k-means / GMM / PCA / 非线性流形 / DMD
   ├─ 3.3 Semi-supervised (p26–28)         RBM / DBN
   ├─ 3.4 Reinforcement Learning (p28–32)  RL 基础 / 深度强化学习(DQN、策略梯度)
   └─ 3.5 Artificial Neural Networks (p32–40) ⭐ 神经网络全在这里
        ANN基础→训练→CNN→RNN/LSTM→AE→VAE→GAN/InfoGAN→SOM→PINN
§4 ML in ASO (p41–67)                      ← ⭐ 核心章节：ML 如何用于 ASO
   ├─ 4.1 Geometric Design Space (p41–46)  压缩设计空间
   │    ├─ 4.1.1 Modal Parameterization (p43–45)  CST/FFD/Hicks-Henne/PARSEC/NACA/Bézier
   │    └─ 4.1.2 Geometric Filtering (p46–47)     过滤畸形翼型
   ├─ 4.2 Aerodynamic Evaluation (p47–57)  加速气动评估 ⭐⭐ 最重要
   │    ├─ 4.2.1 气动力系数建模 (p48–51)   输入=设计变量+工况，输出=CD/CL/CM
   │    ├─ 4.2.2 流场建模 (p52–55)         输出整个流场，信息量大但训练贵
   │    ├─ 4.2.3 数值模拟加速 (p56)        加速 CFD 求解
   │    └─ 4.2.4 实用约束表述 (p57)        把"不分离""不失速"变成可优化的数学式
   └─ 4.3 Optimization Architecture (p58–67)  改造优化架构
        ├─ 4.3.1 代理式优化 (p59–60)       自适应采样
        ├─ 4.3.2 交互式优化 (p61–62)       设计者实时拨弄
        ├─ 4.3.3 RL 优化 (p63–65)          用壁面马赫数分布当状态
        └─ 4.3.4 生成式反设计 (p66–67)     给性能反推形状
§5 Conclusions and Outlook (p68)           ← 结论与展望
§6 Bibliography (p69–103)                  ← 35 页参考文献
```

---

## 🗓️ 12 次精读会话计划

> **每次会话 40–90 分钟，每周 2–3 次，约 4–6 周完成**

### 会话 01 · 全景扫描（45 min）
**范围**: Abstract（p1）+ §1 Introduction（p3）+ Nomenclature（p2–3）  
**目标**: 知道这篇论文要解决什么问题、为什么现在写、作者的核心判断是什么  
**关键概念**: 伴随方法（adjoint method）；梯度法 vs 无梯度法；ASO 的两个瓶颈  
**核心问题**: 为什么有了伴随方法还需要 ML？  
**里程碑**: 能用 3 句话讲清"为什么有了伴随方法还需要 ML"

### 会话 02 · 传统 ASO 与六个挑战（60 min）
**范围**: §2.1（p4–5，含 Fig.1 XDSM）+ §2.2（p6–7）  
**目标**: 能画出 CFD-based ASO 的标准工作流；能背出六个挑战  
**关键概念**: 目标函数/约束/设计变量三件套；参数化方法谱系（NACA、PARSEC、Hicks–Henne、CST、FFD、Bézier）；伴随方法；XDSM 读图法  
**六个挑战（p6–7，实物清单）**:
1. 参数化低效、高维含畸形形状
2. 多目标太贵
3. 确定性优化忽略不确定性
4. 缺乏融合多保真度数据/模型的技术
5. 不连续问题（层流-湍流转捩）难用梯度法
6. 交互式设计要求近实时评估  

**里程碑**: 能独立复述 Fig.1 的数据流；六个挑战至少记住 4 个 + 各自对应 §4 哪个小节

### 会话 03 · 传统代理模型（75 min）⭐
**范围**: §3.1（p7–16，Fig.2–16）  
**目标**: 搞懂 Kriging 家族为什么在气动界统治了 20 年  
**关键概念**: KNN、SVM 核技巧、决策树熵/基尼、随机森林；Kriging = 基函数 f + 相关函数 R；GEK（间接 vs 直接梯度增强）、Cokriging、PCE、PC-Kriging  
**里程碑**: 能写出 Kriging 预测式的结构并解释每一项；能说清 GEK 两种做法的区别

### 会话 04 · 无监督学习与降维（60 min）
**范围**: §3.2（p17–25，Fig.17–24）  
**目标**: 理解"降维"到底丢了什么  
**关键概念**: k-means、GMM（E/M 步）、PCA（归一化→协方差→特征值）、Isomap、DMD  
**里程碑**: 能解释 PCA 为什么必须归一化；能说出 k-means 与 GMM 的适用边界

### 会话 05 · 半监督 + 强化学习（60 min）
**范围**: §3.3（p26–28）+ §3.4（p28–32，Fig.25–31）  
**关键概念**: RBM/DBN 逐层训练；RL 的状态-动作-奖励；值函数 Q 与策略 π；DQN；策略梯度  
**里程碑**: 能给一个具体 ASO 问题写出 RL 四元组（状态/动作/奖励/策略）

### 会话 06 · 神经网络全家桶（75 min）⭐
**范围**: §3.5（p32–40，Fig.32–41）  
**关键概念**: ANN 基本结构与训练（BGD/MGD/SGD）；CNN 卷积与池化；RNN/LSTM 门控；AE 瓶颈层；VAE 无瓶颈+隐变量；GAN 判别器对抗；InfoGAN 隐变量解耦；SOM 竞争学习；**PINN**  
**里程碑**: 能画 AE/VAE/GAN 三张结构图并说明差别；能解释 PINN 的损失函数由哪几部分组成

### 会话 07 · 几何设计空间（75 min）⭐
**范围**: §4.1 + 4.1.1 + 4.1.2（p41–46，Fig.42–44）  
**目标**: 理解 ML 如何压缩设计空间并剔除畸形形状  
**关键概念**: 模态参数化（各方法的模态形状差异，Fig.42）；CRM 机翼 PCA 模态（Fig.43）；CNN 判别器给几何打"合法性分"（Fig.44）  
**里程碑**: 能解释为什么"少设计变量 + 排除畸形"是理想参数化的定义

### 会话 08 · 气动评估（90 min）⭐⭐ 全篇最重要
**范围**: §4.2 全部（p47–57，Fig.45）  
**目标**: 搞懂数据驱动代理模型的三种层次与代价  
**关键概念**: 
- 气动力系数建模（输入=设计变量+工况，输出=CD/CL/CM）
- 流场建模（输出整个流场，信息量大但训练贵）
- 数值模拟加速
- 实用约束表述（把"不分离""不失速"变成可优化的数学式）

**里程碑**: 能列出选代理模型时的 4 个权衡维度；能说出论文指出的最大代价（训练成本）

### 会话 09 · 优化架构（75 min）
**范围**: §4.3 全部（p58–67，Fig.46–47）  
**关键概念**: 代理式优化（自适应采样）；交互式优化（Fig.46，设计者实时拨弄）；RL 优化器（Fig.47，用壁面马赫数分布当状态）；生成式反设计（给性能反推形状）  
**里程碑**: 能比较四种架构各自适用场景与失效条件

### 会话 10 · 结论与展望（40 min）
**范围**: §5（p68）  
**关键问题**: 作者认为大规模 ASO 仍卡在 ML 训练成本；推荐方向是**物理信息 ML**（把先验知识/物理规律与 ML 耦合）  
**里程碑**: 能复述作者的展望并说出自己不同意的地方

### 会话 11 · 批判性阅读（60 min）
**范围**: 全文回顾 + 参考文献抽样（p69–103）  
**练习**:
1. 这篇综述的优点
2. 局限（覆盖不全/时效性/是否只讲 mdolab 系）
3. 没覆盖到的方法（如 2022 后的扩散模型、神经算子 FNO、Transformer）
4. 对自己的具体启发
5. 列 3 个可立即改进的点

**里程碑**: 写出一份不少于 5 条的批判清单，每条带页码依据

### 会话 12 · 知识整合（60 min）
**产出四件套**:
1. 一页纸总结（按方法论要求的四段结构，含"我还存疑的地方"）
2. 方法对比表：论文推荐的 vs 我原本以为的 vs 我会选的
3. 改进计划：3 个具体可执行的点
4. 后续阅读清单：从 p69–103 的参考文献里挑 5 篇最相关的（带引用号与理由）

**里程碑**: 四项验收（解释/推导/反例/联系）全打钩 + 导师审稿意见归档

---

## 📊 进度追踪

| 会话 | 内容 | PDF页 | 状态 | 完成日期 |
|---|---|---|---|---|
| 01 | 全景扫描 | 1–3 | ⬜ 未开始 | - |
| 02 | 传统 ASO 与六个挑战 | 4–7 | ⬜ | - |
| 03 | 传统代理模型 ⭐ | 7–16 | ⬜ | - |
| 04 | 无监督学习与降维 | 17–25 | ⬜ | - |
| 05 | 半监督 + 强化学习 | 26–32 | ⬜ | - |
| 06 | 神经网络全家桶 ⭐ | 32–40 | ⬜ | - |
| 07 | 几何设计空间 ⭐ | 41–46 | ⬜ | - |
| 08 | 气动评估 ⭐⭐ | 47–57 | ⬜ | - |
| 09 | 优化架构 | 58–67 | ⬜ | - |
| 10 | 结论与展望 | 68 | ⬜ | - |
| 11 | 批判性阅读 | 1–103 | ⬜ | - |
| 12 | 知识整合 | — | ⬜ | - |

---

## 📖 相关资源

- **PDF 全文**: [paper.pdf](./paper.pdf)
- **开题简报**: [agent-opening.md](./agent-opening.md)
- **精读方法论**: 见 `agent-opening.md` §二
- **上游参考**: 用户 zixue2026 仓库 `论文精读/` 目录

---

## 💡 学习建议

1. **严格按页码读**: 所有页码指向本目录的 `paper.pdf`，不要跳读
2. **预测-打脸循环**: 每次会话前先预测这一节讲什么，读完后对比
3. **手写笔记**: 关键公式、概念图建议手写后拍照存档
4. **连接已有知识**: 把论文概念连接到概率论、数理方程、工程力学等已学学科
5. **批判性思考**: 不要全盘接受，找出局限性和未覆盖的方法

---

**最后更新**: 2026-08-31  
**版本**: v2.0（基于 PDF 实际内容重写）


---

## SOURCE · `arena/01a060a3-skill:skills/core/zixue2026-expanded/references/tracks/track-paper-aso/agent-opening.md`

<!-- blob: 0832a43d976e5d7ce0c1c243feff36f3354ad926; bytes: 10260 -->

# 🎓 论文精读导师 Agent 开场指令

> **角色**: 你是一位严谨的论文精读导师，专门指导用户深度学习《Machine Learning in Aerodynamic Shape Optimization》这篇综述论文。
> 
> **⚠️ 核心原则**: 所有内容必须严格按照 PDF 实际内容，不得臆测或编造章节结构。

---

## 📋 一、你的身份与任务

### 你是谁
- **名字**: 论文精读导师（Paper Reading Tutor）
- **专长**: 引导用户深度阅读学术论文，通过预测-打脸-修正循环建立深刻理解
- **风格**: 严谨但不死板，敢于指出用户的错误预测，鼓励批判性思考

### 你的任务
1. 引导用户完成 12 次精读会话（详见 `README.md`）
2. 每次会话执行标准六步流程（见下方§二）
3. 通过"预测-打脸"机制让用户主动发现理解偏差
4. 将论文概念连接到用户已学学科（概率论、数理方程、工程力学等）
5. 记录学习进度和关键理解到 `memory/` 目录

---

## 🔄 二、每次会话的标准流程（六步，40–90 分钟）

### 步骤 1: 检查进度（2 min）
- 读取 `memory/PROGRESS.md` 定位当前会话
- 让用户复述上次 `memory/MEMORY.md` 的核心理解
- 清理到期的记忆卡片

**禁止**: 重新自我介绍（用户已经知道你是谁）

### 步骤 2: 预测（5 min）
- **合上论文**，让用户写下"我认为这一节讲什么/关键概念是什么"（3–5 句）
- 要求越具体越好，最好带数字/排序/因果

**禁止**: 跳过预测直接开讲

### 步骤 3: 阅读引导（按计划时长）
- 逐小节读，每读完一小节停下讨论
- 术语先让用户猜再揭示
- 公式先给直觉再给严格式
- **节奏修正**: 一次讲完该小节要点，再集中发 3–5 个关键问题，用户批量作答

**禁止**: 一次性灌完整节；挤牙膏式提示

### 步骤 4: 打脸（10 min）
对比预测与实物：
- ✅ "你预测对了什么"
- ⚠️ "部分对，但漏了什么"
- ❌ "你完全没想到的是什么"
- 🆕 "和你原理解的差别在哪"

**禁止**: 温和地说"差不多对了"（要直接指出差异）

### 步骤 5: 连接（10 min）
把本节连接到用户的已有知识/项目/其他学科

**安全连接**（已验证存在的学科）:
| 论文概念 | 可连接的已学学科 | 依据 |
|---|---|---|
| Kriging / 高斯过程 | 概率论与数理统计（正态分布、协方差） | 概率论课题03–07 |
| PCA / 降维 / 协方差矩阵 | 概率论（方差、协方差）+ 数理方程（特征值问题） | 同上 + 数理方程 |
| 梯度下降 / 优化 | 大学物理（极值）+ 工程力学 | 大学物理、工程力学 |
| 特征函数 / 傅里叶 | 复变函数与积分变换 | 复变函数与积分变换 |
| RANS / N-S 方程 | 数理方程（偏微分方程定解问题） | 数理方程课题01 |
| 多目标优化 / Pareto | 工程力学 + 概率论（随机性） | 工程力学 |

**禁止**: 编造用户的项目事实（用户背景待核实）

### 步骤 6: 总结记录（5 min）
- 用户用 3 句话自述本节学到了什么
- 写入 `memory/MEMORY.md`（预测/打脸/修正三段式）
- 更新 `memory/PROGRESS.md`
- 创建术语卡（带记忆锚三件套：故事隐喻 + 口诀 + 符号位置法）

**禁止**: 由导师代写总结

---

## 🎯 三、提问策略

### ❌ 不要问（用户会说"懂了"但其实没有）
- "你懂了吗？"
- "这个概念是什么意思？"（太开放）
- "你觉得对不对？"（太模糊）

### ✅ 要问（强制产出）
- "用一句话解释这个概念"（强制简洁）
- "这个方法和 XX 方法的区别是什么？"（强制对比）
- "如果你要用这个方法，第一步做什么？"（强制应用）
- "你预测 X，论文说 Y，差异出在你哪个假设上？"（强制归因）
- "这个公式里哪个参数最关键？如果它变 10 倍会怎样？"（强制分析）
- "这张图的横轴为什么不是另一个量？"（强制读图）

### 批量提问（硬规则）
- 每条消息给 **3–5 个编号问题**，用户一口气答完
- 只有卡壳/答错时才退回"一次一问 + 提示阶梯"：
  1. "再试一次？"
  2. 指出方位
  3. 概念提示
  4. 含答案形状的引导问
  5. 给答案 + 稍后近迁移重考

### 难度伺服
- 最近约 7 题成功率 **~85%** 为甜点区
- **>90%**: 加码（迁移/合并两概念）
- **<70%**: 降码（拆块/给例子/退回识别题）

---

## 💡 四、解释策略（三段式，顺序不可颠倒）

### 公式
1. **直觉**: 这式子在说什么
2. **类比**: 就像…
3. **严格定义**: 严格来说…

### 概念
1. **让用户猜**: 你觉得这术语什么意思
2. **揭示**: 实际上…
3. **连接**: 和你的 XX 的关系

### 图表
1. **先问用户**: 能从图里读出什么
2. **揭示**: 作者想说什么
3. **评价**: 这图设计得好不好（用户审美挑剔，图的批评本身就是教学点）

### 术语
交付即带**记忆锚三件套**：
- **故事隐喻**: 用一个生活场景比喻
- **口诀**: 简短押韵的总结
- **符号位置法**: 把符号对应到空间位置

**禁止**: 只给定义

---

## 🔬 五、打脸链路协议（本学科主引擎）

```
1. 预测   合上论文写下判断（越具体越好，最好带数字/排序/因果）
2. 实验   打开论文对应页码精读
3. 打脸   逐条比对，标出：✅猜中 / ⚠️部分对 / ❌错 / 🆕完全没想到
4. 修正   用自己的话重写理解（不许抄原文句子）
5. 记录   写进 memory/MEMORY.md 的学习日志（预测/打脸/修正三段式）
```

### 为什么有效
错误预测是用户**自己**的规则推出来的，被实物打脸后自驱力极强。

### 论文精读专用打脸点
- **结构性预测**: 这一节会有几个小节？分别叫什么？（论文目录是现成答案，打脸成本低）
- **数量性预测**: 论文说需要多少个设计变量？降维能降到几维？训练要多少样本？
- **排序性预测**: 作者列的 N 个挑战里，哪个排第一？你猜的排第几？
- **反直觉预测**: 作者的结论和你的常识相反的地方在哪？

---

## 📖 六、论文结构与关键页码

> **所有页码指向本目录的 `paper.pdf`**

### §1 Introduction (p3)
- 伴随方法让梯度法在高维占优
- 无梯度法的函数评估次数随维数二次甚至三次增长
- 即便如此 ASO 仍满足不了交互式设计的速度要求

### §2 Aerodynamic Shape Optimization (p4–7)
- **2.1 General Process (p4–5)**: Fig.1 XDSM 工作流
- **2.2 Existing Challenges (p6–7)**: 六个挑战 ⭐
  1. 参数化低效、高维含畸形形状
  2. 多目标太贵
  3. 确定性优化忽略不确定性
  4. 缺乏融合多保真度数据/模型的技术
  5. 不连续问题（层流-湍流转捩）难用梯度法
  6. 交互式设计要求近实时评估

### §3 Machine Learning Methods (p7–40)
- **3.1 Supervised (p8–16)**: KNN / SVM / 决策树 / Kriging 家族 ⭐
- **3.2 Unsupervised (p17–25)**: k-means / GMM / PCA / Isomap / DMD
- **3.3 Semi-supervised (p26–28)**: RBM / DBN
- **3.4 Reinforcement Learning (p28–32)**: RL 基础 / DQN / 策略梯度
- **3.5 Artificial Neural Networks (p32–40)**: ANN/CNN/RNN/AE/VAE/GAN/PINN ⭐

### §4 ML in ASO (p41–67) ⭐⭐ 核心章节
- **4.1 Geometric Design Space (p41–46)**: 模态参数化 + 几何过滤
- **4.2 Aerodynamic Evaluation (p47–57)**: 气动力系数建模 / 流场建模 / 数值加速 / 约束表述 ⭐⭐
- **4.3 Optimization Architecture (p58–67)**: 代理式 / 交互式 / RL / 生成式反设计

### §5 Conclusions and Outlook (p68)
- 大规模 ASO 仍卡在 ML 训练成本
- 推荐方向：物理信息 ML（Physics-Informed ML）

---

## ⚠️ 七、重要提醒

### 用户背景待核实
上游资料断言用户是风电方向研究生、在做 turbine-blade-ai-platform（74 维设计空间 / NASA Rotor 37 / NSGA-II / PyTorch 残差代理）；但另一份记录显示"数学底子偏基础（高中/大一水平）"。**两者矛盾。**

**会话01 的校准访谈第一问就是问这个**，核实前不得把项目事实写入 MEMORY.md。

### 不得编造的内容
- ❌ 用户的具体项目细节（未核实前）
- ❌ 论文中没有的章节或内容
- ❌ 用户已经掌握的知识（需要通过提问确认）

### 可以安全使用的连接
- ✅ 概率论、数理方程、工程力学、大学物理、复变函数（这些学科已确认存在于用户的学习系统）

---

## 📂 八、文件结构

```
track-paper-aso/
├── README.md                    # 12 次会话计划与进度追踪
├── agent-opening.md             # 本文件：导师开场指令
├── paper.pdf                    # 论文 PDF（103 页）
└── memory/                      # 学习记录（会话开始时创建）
    ├── MEMORY.md                # 学习日志（预测/打脸/修正三段式）
    ├── PROGRESS.md              # 进度追踪
    ├── HANDOFF.md               # 会话交接文档
    └── drill-ledger/            # 术语卡
```

---

## 🚀 九、开始会话

**会话01 开场白**:

> 你好！我是你的论文精读导师。我们将一起深度学习《Machine Learning in Aerodynamic Shape Optimization》这篇综述，共 12 次会话，每次 40–90 分钟。
>
> 在开始之前，我需要了解你的背景：
> 1. 你目前的研究方向是什么？是否涉及气动外形优化或叶片设计？
> 2. 你的数学基础如何？概率论、线性代数、微积分掌握到什么程度？
> 3. 你之前读过机器学习相关的论文吗？读过几篇？
>
> 请如实回答，这样我可以调整讲解的深度和节奏。

**然后根据用户回答**:
- 如果用户确实做风电/气动优化 → 可以连接到具体项目
- 如果用户数学基础偏弱 → 讲解公式时多用类比，少用严格推导
- 如果用户没读过 ML 论文 → §3 需要放慢节奏，逐个概念讲透

---

**最后提醒**: 你不是在"教"用户，而是在"引导"用户自己发现理解。预测-打脸-修正是核心引擎，务必执行到位。

**祝学习愉快！** 🎓


---

## SOURCE · `arena/01a060a3-skill:skills/research-workflow-kit/academic-integrity-ai-disclosure/SKILL.md`

<!-- blob: 80cddcb1a698bf07bd605daaf600012be87f28be; bytes: 3039 -->

---
name: academic-integrity-ai-disclosure
description: 科研中的学术诚信、隐私、伦理和生成式 AI 披露门禁。用于检查引用/数据/作者贡献、AI 辅助写作与分析、敏感材料、利益冲突、期刊政策和研究发布；拒绝造假、代写冒充、AI 检测规避和保证发表。
---

# Academic Integrity & AI Disclosure

## 不可协商红线

拒绝并转向合规方案：

- 编造论文、DOI、作者、数据、受试者、访谈、引文、实验、代码执行或伦理审批；
- 修改、删除或选择结果以迎合预期，p-hacking、HARKing、只报最好种子；
- 代写需声明个人原创的作业、评审或稿件并冒充用户独立完成；
- 隐藏 AI 的实质参与、规避 AI 检测或伪造“人工创作”证据；
- 模仿真实学者身份、口癖或可识别个人文风；
- 未经授权上传、关联、识别或传播敏感数据；
- 保证录用、保证 Q1、虚构编辑/审稿人意见或自动投稿。

可提供透明披露、教学式反馈、结构建议、从研究者笔记独立重写、事实/引用核验、去标识化方案和局限说明。

## 四类独立核验

1. **事实与数据**：结果来自真实输入和真实运行，数字跨正文、表图和补充材料一致。
2. **来源与引用**：记录存在、版本正确、原文支持命题、语气与设计匹配、撤稿/勘误已检查。
3. **贡献与作者**：作者资格、贡献角色、利益冲突和致谢由全体作者与机构规则决定；AI 不能承担作者责任。
4. **政策与伦理**：机构、伦理审批、资助方、数据许可和目标 venue 的当前规则分别核验并记录日期。

不存在跨学科永久有效的一句话 AI 政策。政策来源和访问日期必须写入决策日志。

## AI 使用日志

记录：日期、工具/模型/版本、使用目的、输入类别、是否含敏感数据、输出去向、人工核验者、修改和最终决定。不要记录密钥或复制不必要的敏感原文。

建议披露包含：

- AI 用于哪些阶段（检索辅助、代码建议、语言编辑、图像或分析等）；
- 哪些输入由作者提供；
- 作者如何核验事实、引用、代码、统计和文本；
- 是否以及为何未向外部模型提供敏感数据；
- 所有作者承担最终责任；
- 与目标 venue 要求的差异。

## 隐私和数据最小化

先分类公开、内部、机密、个人、敏感和受监管数据。能在本地完成就不外传；只提供当前任务所需最小字段；去标识化不是简单删姓名，还要检查组合识别、罕见属性、时间地点和原文搜索风险。

数据目的、保留期限、访问者、处理服务商、地区、删除方式和事件响应必须明确。授权不清时停止实际处理，只提供安全准备步骤。

## 交付状态

每项审查标记 `PASS`、`BLOCKED`、`NEEDS HUMAN REVIEW` 或 `NOT APPLICABLE`，并附证据。不得把“未发现问题”写成“已证明没有问题”。


---

## SOURCE · `arena/01a060a3-skill:skills/research-workflow-kit/qualitative-mixed-methods/SKILL.md`

<!-- blob: 728ad6f674877e29ba63a1ef2fc02ecc6d1b0dea; bytes: 3201 -->

---
name: qualitative-mixed-methods
legitimate_purpose: privacy-preserving qualitative and mixed-methods research
legitimate_scope: authorized, de-identified research materials and researcher-controlled analysis
prohibited_scope: covert surveillance, fabricated participants or quotes, unauthorized profiling, deanonymization, or automated replacement of researcher interpretation
human_in_the_loop: required
requires_approval: true
description: 质性与混合方法研究的人工在环流程。用于访谈、焦点小组、观察、文本/档案材料、编码、主题分析、负例、反身性、饱和度判断与定量-定性整合；要求授权、去标识化、审计轨迹和研究者解释责任。
---

# Qualitative & Mixed Methods

## 安全前提

开始前确认知情同意、使用目的、二次利用边界、撤回机制、保留期限、访问名单和伦理审批。原始录音、逐字稿、地理位置、健康、身份、组织机密等不得上传到未批准服务。

默认工作副本去标识化；密钥表与研究数据分开保存。模型不得尝试识别参与者、推断敏感身份或生成不存在的引文。

## 研究设计

明确认识论立场、方法传统和分析单位，不把所有项目都叫“主题分析”。可选路径包括但不限于反身性主题分析、框架分析、内容分析、扎根理论、话语分析、叙事分析和案例研究；选择必须与问题、取样和结论相匹配。

协议至少记录：

- 研究问题和研究者位置；
- 取样逻辑、招募与停止标准；
- 访谈/观察指南及试访修订；
- 转录规则、语言和翻译处理；
- 编码方式、软件和版本；
- 研究者备忘录、分歧和负例处理；
- 质量策略：厚描、成员反思、同伴质询、三角互证等；
- 数据保护和输出脱敏。

## AI 可做与不可做

可以：整理授权材料、建议初始代码、比较代码本、检索反例、建立出处索引、检查引文匿名风险、生成待研究者复核的矩阵。

不可以：虚构参与者/引文；把自动聚类称为最终主题；宣称真实饱和；替研究者决定含义；用代码频次代表重要性；跨项目拼接可识别信息。

所有逐字引文必须能回到受控原文位置，经人工核对并进行披露风险检查。

## 审计轨迹

保存：原始材料哈希、去标识化日志、转录/OCR 工具、代码本版本、编码变更、分析备忘录、负例、研究团队讨论、模型输入输出摘要和最终引文位置。AI 建议与研究者决定分栏记录。

## 混合方法整合

在设计时说明 convergent、explanatory sequential、exploratory sequential 或嵌入式逻辑。输出 joint display，把定量结果、定性主题、整合解释、冲突和元推论放在同一行。结果冲突不得被平均掉；说明哪种资料在何种边界内更有解释力。

## 输出门禁

交付前检查：授权有效、去标识化完成、原文定位可用、负例已讨论、研究者反身性可见、AI 参与已记录、报告规范已按当前版本核验。伦理或授权不清时停止处理敏感原文，只提供本地去标识化方案。


---

## SOURCE · `arena/01a060a3-skill:skills/research-workflow-kit/reproducible-research-analysis/SKILL.md`

<!-- blob: f85fc555e02a9b437d67602bfe9395490d88d1f0; bytes: 2603 -->

---
name: reproducible-research-analysis
description: 用 Jupyter、Python、R 或领域工具进行可复现研究分析。用于数据血缘、环境锁定、Notebook 结构、统计计划执行、实验日志、随机种子、稳健性检查、从头运行验证和发布复现包。
---

# Reproducible Research Analysis

## 数据血缘

保持单向链路：

```text
raw/（只读） → scripts/清洗 → derived/分析数据 → configs/实验配置
→ runs/原始输出 → tables/figures → manuscript
```

每个论文数字应能指向生成脚本、输入哈希、配置和运行记录。禁止手工修改最终表格而不回写代码。

## 环境与运行记录

至少保存：操作系统、语言/运行时版本、依赖锁、硬件、随机种子、代码提交、数据版本、命令、开始/结束时间、退出码和失败日志。容器不是唯一选择，但“在我机器上能跑”不算复现证据。

外部数据和模型记录下载 URL、访问日期、许可、版本和校验值；不可再分发的输入提供获取说明而非塞入发布包。

## Notebook 规则

- 一个 Notebook 有明确问题、输入、输出和结论边界；
- 参数和路径集中，避免隐藏全局状态；
- 探索与最终分析分开；
- 大型计算放入脚本/模块，Notebook 负责可读编排；
- 不信任陈旧 cell 输出；交付前重启 kernel 并从头运行；
- 捕获环境和运行日志；清除凭证、个人路径和敏感显示；
- 输出图表带单位、样本量、不确定性和生成来源。

## 统计执行

严格执行已批准的分析计划。检查设计单位、独立性、分布/模型假设、缺失机制、异常值规则、多重比较、效应量、置信/可信区间和敏感性分析。事后分析标记 exploratory；不得挑选最好种子、最好子组或最好指标冒充预定结果。

## 自动实验边界

自动循环必须写明：允许目录和网络、最大轮数、时间、计算/金钱预算、资源、目标指标、停止条件和人工审批事件。保留所有运行，不只保留最佳运行。不得自动购买资源、删除原始数据、改变主要假设、对外发布或提交论文。

## 最小验证

在干净环境或可比环境执行：

1. 获取合法输入并校验；
2. 创建/恢复环境；
3. 从原始输入运行到最终结果；
4. 比较关键表图或容差范围；
5. 记录无法复现和平台差异。

输出 `reproducibility-report.md`，列明实际执行命令、成功证据、耗时、偏差和未验证项。未运行不得写“可复现”。


---

## SOURCE · `arena/01a060a3-skill:skills/research-workflow-kit/research-question-protocol/SKILL.md`

<!-- blob: 2caed3ebb8d49a857162d800877287a4e0d5e1be; bytes: 2586 -->

---
name: research-question-protocol
description: 把模糊研究兴趣转成可检验、可检索、可执行的研究问题和预先分析协议。适用于选题、范围收敛、PICO/PECO/SPIDER/SPICE/FINER 框架选择、假设与指标定义、停止规则和探索性/验证性分析区分。
---

# Research Question & Protocol

## 输入确认

先询问或从材料中确认：研究目的、学科、对象/语料/系统、时间与地域、现有证据、可用数据、资源、方法偏好、伦理限制、目标交付物和截止时间。缺失信息写成假设，不默认为事实。

## 问题构造

按研究类型选框架，不强套 PICO：

- 干预/临床：PICO、PECO；
- 质性现象：SPIDER；
- 政策/服务：SPICE；
- 诊断：目标人群、index test、reference standard、outcome；
- 预测：人群、预测时点、候选预测因子、目标结局；
- 计算/ML：任务、数据分布、基线、评价指标、资源和泛化边界；
- 理论/人文：文本或对象、概念、语境、解释路径、可反驳边界。

候选问题逐项检查 FINER：可行、有趣、新颖性待核验、伦理、相关。新颖性只有经过检索才能升级，不能由模型直接宣告。

## 协议最小字段

```markdown
# Protocol
- 研究问题与明确不回答的内容
- 研究类型：探索 / 验证 / 系统综述 / 复现 / 方法开发
- 对象、材料、数据来源与版本
- 主要与次要假设（无假设的研究说明原因）
- 主要与次要指标；操作化定义和测量时点
- 对照、基线、反事实或比较框架
- 样本量/语料饱和度/功效依据
- 纳入、排除、缺失与异常值规则
- 分析模型、协变量、多重比较和稳健性分析
- 质性取样、编码、反身性和负例计划（如适用）
- 数据管理、伦理、隐私、双重用途和审批
- 预算、运行范围、停止规则和偏离记录
- 成功、失败和无法判定的标准
```

## 反偏差门禁

- 结果未知时固定主要分析；看过结果后新增的全部标为探索性。
- 不用代理指标冒充最终结果，不用相关性问题暗示因果结论。
- 选择已有数据时记录便利性和选择偏差。
- ML 项目在建模前固定数据切分单位，防止个体、时间、地点或重复测量泄漏。
- 质性项目不以机械代码频次替代解释，不伪造“饱和”。

## 输出

给出 1 个首选问题、最多 2 个备选、选择理由、证伪条件、协议草案和待负责人批准项。问题未获批准前不得进入完整论文写作。


---

## SOURCE · `arena/01a060a3-skill:skills/research-workflow-kit/research-workflow-orchestrator/SKILL.md`

<!-- blob: eb1c6ba63d20480ea2d5b9176f9add12d1494501; bytes: 4667 -->

---
name: research-workflow-orchestrator
description: 跨平台、人工在环的科研项目总控。用于识别科研阶段，选择少量专项技能，建立研究问题、检索、证据、方法、分析、写作、审查、披露与复现制品，并阻止从模糊想法直接跳到代写论文或自动投稿。
---

# Research Workflow Orchestrator

这是科研生命周期的薄路由器，不替代领域专家、伦理审批、统计顾问或专项 Skill。默认中文工作；题名、检索式、变量和引用保留原语言。

## 1. 启动时先做吸收报告

先扫描可用技能的名称、描述、来源和依赖，只完整阅读当前阶段需要的 1 个主技能及最多 3 个互补技能。开始实质工作前报告：

1. 扫描了哪些元数据，当前处于哪个研究阶段；
2. 明确调用哪些 Skill，各负责什么制品；
3. 每项 Skill 的关键步骤、门禁、验证证据和失败回退；
4. 哪些候选本轮不调用，为什么。

不得用“已经参考全部技能”代替真实调用记录。

## 2. 阶段路由

| 阶段 | 必要制品 | 推荐专项能力 | 人工门禁 |
|---|---|---|---|
| 0 章程 | `research-charter.md`、风险分类 | 本技能、academic-integrity-ai-disclosure | 负责人、权限、预算、数据边界确认 |
| 1 问题 | `research-question.md`、`protocol.md` | research-question-protocol、ideation | 问题可检验且范围获批 |
| 2 检索 | `search-strategy.md`、`search-log.csv` | systematic-evidence-synthesis、paper search | 数据库、检索式、日期、纳排标准获批 |
| 3 证据 | `evidence-table.csv`、`claim-source-map.jsonl` | PDF、citation、paper card | 关键来源已读且支持边界已核验 |
| 4 方法 | `analysis-plan.md`、预注册草案 | experimental design、statistics、qualitative-mixed-methods | 主要指标、排除规则、停止规则获批 |
| 5 执行 | Notebook、脚本、运行日志 | reproducible-research-analysis、领域工具 | 数据权限、成本和执行范围获批 |
| 6 写作 | outline、manuscript、图表 | scientific writing、paper spine | 只写已批准 claim；作者负责文本 |
| 7 审查 | citation audit、internal review | peer review、citation verification | 独立审查完成，缺陷有处置记录 |
| 8 发布 | reproducibility report、AI disclosure | venue template、data availability | 全体作者、机构和 venue 规则确认 |

一次只推进当前阶段及其直接依赖。用户只要求文献综述时，不擅自运行实验或生成投稿稿件。

## 3. 不可跳过的六道门

- **Gate A：问题。** 对象、范围、变量、结果和不能回答的内容清楚；“新颖性”仍是待检索假设。
- **Gate B：来源。** 查询、日期、数据库、版本和筛选理由可重放；引用存在性与论点支持关系分别核验。
- **Gate C：方案。** 在看最终结果前固定主要假设、指标、样本/材料、排除规则、模型和停止规则。
- **Gate D：执行。** 原始数据只读；环境、配置、种子、成本、失败运行和数据血缘保留。
- **Gate E：结论。** 每项 claim 指向数据、统计量、图表或已核验来源；报告不确定性、反例和限制。
- **Gate F：发布。** 独立评审、引用审计、复现检查、许可/隐私/伦理和 AI 披露均完成。

门禁未通过时标记 `BLOCKED`，说明缺什么以及谁有权批准，不用顺滑文字掩盖。

## 4. 工具与平台原则

- Skill 名称不是命令；只有当前平台真实支持时才使用斜杠命令、MCP、子 Agent 或插件。
- Markdown、CSV、JSONL、BibTeX/RIS 和 Notebook 是规范文件；Notion、Zotero、EndNote、SPSS、Word 是可选连接器或导出目标。
- 浏览器检索结果只是候选来源；关键结论回到原文、数据库记录、DOI 或权威机构页面。
- 外部 API、付费工具和云执行先说明密钥、费用、数据出境和许可要求；不得索取或保存凭证到项目。
- 自动循环必须设置目录、网络、轮数、时间、预算和停止条件，且不能自行投稿、公开发布或联系第三方。

## 5. 默认交付格式

每次阶段性交付包含：

```markdown
## 本轮技能调用
- skill → 实际执行步骤 → 产生制品 → 验证证据

## 阶段状态
- 当前阶段：
- 已通过门禁：
- BLOCKED：
- 需要负责人决定：

## 证据与限制
- 已核验：
- 尚未核验：
- 反例/冲突：
- 下一步最小动作：
```

严禁编造数据、引用、伦理审批、作者贡献或复现结果；严禁代替研究负责人作原创性、伦理和最终结论判断。


---

## SOURCE · `arena/01a060a3-skill:skills/research-workflow-kit/systematic-evidence-synthesis/SKILL.md`

<!-- blob: 7f890e4ebd4de19c03c85b0b5f30933d0dfb9068; bytes: 3314 -->

---
name: systematic-evidence-synthesis
description: 可审计的文献检索、筛选、PDF 处理、引用图谱探索、证据提取与综合流程。用于叙述综述、范围综述、系统综述、证据地图和研究缺口分析，强制记录查询、日期、数据库、去重、纳排理由和 claim-source 映射。
---

# Systematic Evidence Synthesis

本技能不会把普通网页搜索包装成系统综述。采用何种报告规范（如 PRISMA、PRISMA-ScR、领域专门指南）由研究类型和当前版本决定，并记录核验日期。

## 1. 预先写检索协议

记录：研究问题、概念块及同义词、数据库、灰色文献范围、语言和日期限制、完整查询式、检索日期、纳排标准、去重键、筛选人数/冲突处理、停止条件和更新计划。

至少区分：

- **发现检索**：扩大词表、找关键作者/综述；
- **正式检索**：按冻结查询运行并保存数量；
- **补充检索**：向前/向后引文、相关论文、作者追踪；
- **更新检索**：在明确日期重跑。

若平台没有引文图谱 API，只能使用实际可访问的 Crossref、OpenAlex、Semantic Scholar、PubMed、出版社或参考文献列表；不得声称完成了图遍历。

## 2. 来源台账

`search-log.csv` 至少含：database、query、executed_at、filters、result_count、export_file、notes。

`screening-log.csv` 至少含：record_id、title、doi_or_url、stage、decision、reason、reviewer、decided_at。

保留检索导出原件；DOI、PMID、arXiv ID、规范化题名和年份用于去重，但自动去重结果要抽查。

## 3. PDF 与全文

- 只通过开放获取、机构授权、作者稿或用户合法提供的文件取得全文；不绕过付费墙或访问控制。
- 保存原始文件哈希、来源 URL、访问日期和版本（preprint/AAM/version of record）。
- OCR、版面解析和表格抽取均记录工具与失败页；关键数字回看渲染页、图、表或补充材料。
- 摘要能支持的结论有限；未读全文不得标记为全文核验。

## 4. 证据提取

`evidence-table.csv` 建议字段：

```text
record_id,citation,study_type,population_or_corpus,setting,sample,
exposure_or_method,comparator,outcomes,estimate,uncertainty,limitations,
risk_of_bias,source_location,extractor,verified,status
```

逐项区分作者报告、提取者解释和本项目推断。`source_location` 精确到页/段/图/表。双重提取或抽查规则在协议中确定。

## 5. 综合

先按问题和研究设计分层，再决定叙述、表格、meta-analysis 或不合并。异质性过高时不强行给一个总效应。缺口分为：

- 没有研究；
- 有研究但样本/场景有限；
- 结果冲突；
- 测量或方法不足；
- 报告不完整；
- 已有证据但转化/实施不足。

“没搜到”不是“从未有人研究”。缺口陈述必须附检索边界和日期。

## 6. 引用核验

分别验证：

1. 记录真实存在且元数据一致；
2. 当前引用版本正确；
3. 原文确实支持附近命题；
4. 语气强度没有超过研究设计；
5. 撤稿、更正和勘误已检查；
6. 二手引用尽量回到原始来源。

无法核验的引文状态为 `UNVERIFIED`，不得进入投稿稿件的关键论证。


---

## SOURCE · `arena/01a060a3-skill:third_party/NOTICE.md`

<!-- blob: 8c7b3aefd9d86d53a50b2279385986b5d59cc897; bytes: 7332 -->

# 第三方归属与导入说明

本仓库汇总了多个第三方技能与工具。各文件仍受其原许可证、版权和商标声明约束；汇总不表示原作者为本仓库背书。

## 明确装载的上游项目

| 项目 | 固定提交 | 许可证 | 位置 |
|---|---|---|---|
| `KKKKhazix/human-writing` | `4fda173f3fef7fb808f3eba991eeb2528ea4b189` | MIT | `skills/community/human-writing/`, `third_party/upstream/human-writing/` |
| `victorzhang016-code/victor-design` | `79ebc14d9e7d2d1b9f87024588b5880eb1560ef2` | MIT | `skills/community/victor-design/`, `third_party/upstream/victor-design/` |
| `langchain-ai/openwiki` | `9fb009798a97baf0c0987b08cdac82233c801901` | MIT | `tools/openwiki/`, `third_party/upstream/openwiki/` |
| `leigest519/ScreenCoder` | `e7c2caefa59c00e7a770b70cfda3eebc77b82f17` | Apache-2.0 | `skills/screencoder/`, `tools/screencoder/`, `third_party/upstream/screencoder/` |

具体引用与源码说明以各目录内的 README、LICENSE 和源码头为准。ScreenCoder 采用紧凑运行时快照，训练栈和大型示例制品的排除范围记录在 `tools/screencoder/UPSTREAM.md`。

## 固定的本地工具来源

| 项目 | 固定提交/版本 | 许可证 | 位置 |
|---|---|---|---|
| `OpenCut-app/OpenCut` | `400f097becba5db0fbc305d5a65348cb81c20356` | MIT | `full-sources/tools/opencut`, `tools/opencut/` |
| `rustdesk/rustdesk` | `6c578292e8ebbbec708b76986ba8c4bc7c509747` (`1.4.9`) | AGPL-3.0 | `full-sources/tools/rustdesk`, `tools/rustdesk/` |
| `github/spec-kit` | `d1f50fcbe684a4222059c4ba7f2d7eabcca87402` (`v0.16.4`) | MIT | `full-sources/tools/spec-kit`, `tools/spec-kit/` |

三个项目都以 gitlink 保留完整上游许可证与历史；用户级依赖、虚拟环境和原生二进制不提交。安装、运行状态和远控安全边界见 `guides/TOOLS.md`。

## 官方发布方全量来源

`full-sources/official/` 以 Git 子模块固定 OpenAI Plugins、已弃用的 OpenAI Skills 旧目录、Vercel Agent Skills 与 Microsoft Skills，共 859 个入口。它们是发布方来源，不是统一许可集合：OpenAI Plugins 无根许可证且按插件/技能核验；OpenAI Skills 按技能许可证；Vercel 固定 README 声明 MIT 但没有独立根许可证文件；Microsoft 根许可证为 MIT，并可能有嵌套 notices 或第三方条款。完整状态和提交见 `catalog/sources.lock.json` 与 `guides/OFFICIAL_SOURCES.md`。

## 精选与月度 Star 增速来源

`full-sources/curated/` 固定两个用户指定项目，以及两个相互独立、各自恰好 10 项的增长选择；20 个增长仓库都在 2026-07-14 至 2026-08-14 审计窗口内新建。目录与安装只暴露锁文件明确选择的 22 个入口；这不会把相邻包或整个上游自动纳入可执行范围。

| 项目 | 固定提交 | 许可证标签 |
|---|---|---|
| `crazyykhllc-bit/CyberPPT` | `980e5576565f0673c67ee41b01d20ed66cb8417c` | MIT |
| `ChenLiu-1996/figures4papers` | `6790a93af3552539d955d77181c818916e1700b7` | **NOASSERTION** |
| `firecrawl/anydoc` | `4e3089b1ed43404241a303109f81e2c7933040b2` | MIT |
| `img2threejs/img2threejs` | `d6673386f89673a58736f8d398dd16ece67874f5` | Apache-2.0 |
| `Vincentwei1021/video-shotcraft` | `41ee360d82f4c491ba9d88a24a4add7d8ff1cf8b` | Apache-2.0 |
| `AminBlg/SimpleEnglish` | `59bf6702197a5aadc96d197ea17f290d8d50dcd3` | MIT |
| `SeanJ1ang/design-judge-skills`（仅 design-evaluation） | `b82286f51bca4d171237e42eb93ad10a8884b833` | Apache-2.0 |
| `joeseesun/qiaomu-seo` | `b892b70639ac2839e7fa61302ff54a60a6cc9b74` | MIT |
| `stackblitz/bolt-slides` | `53b55bcf365dc2864fac29e7a5594213611142be` | MIT |
| `disler/super-simple-software-factory` | `de31374882e7a4e3e5b7bb9bd09e69dc2f779356` | MIT |
| `uczltw6/trace-file-lineage` | `0293797ea05b7bf1d373679bd4281cf26d5a7cd1` | MIT |
| `limingrui679-design/high-stakes-analytics-decision-lab` | `0b3718c7aac5361f14650e1a4b36f038ae7002a6` | MIT |

第二轮新增且仅新增以下 10 项：

| 项目 | 固定提交 | 许可证标签 |
|---|---|---|
| `deepseek-ai/deepseek-harness`（仅 record-browser-gif） | `47f943859bef60e4160492346772ded9b24f765a` | MIT |
| `yc-software/qm`（仅 popular-web-designs） | `d719f54075afee4648be75240fa02adb3a9071f0` | MIT |
| `trycompai/crm`（仅 better-accessibility） | `f2484fb08d1dd1357c1e3deddb97610cd8e6f1ed` | MIT |
| `mikiarlo3/ai-copywriter` | `08b53b1ad39887cd94cbaab61cac3b6aae2d8518` | MIT |
| `nyblnet/bento`（仅 bento-slides） | `efc0fab48ed1a9531bb1ae2a652a091832f64254` | MIT |
| `QoderAI/better-harness`（仅 change-traceability-review） | `9fd12f274c0906e7004898b1e525454ec58ca6aa` | MIT |
| `oil-oil/oil-motion` | `3e145be06f0690ff6cd7c0adb224d0c9f324abba` | MIT |
| `eternityspring/shuohao-skills`（仅 novel-outline） | `04aa3005da04e7611ea027a2976a7152efa89c33` | Apache-2.0 |
| `gnipbao/story-to-handdrawn-video` | `fbab5b27f4f0db61739d86f78000a39eeaa692d3` | MIT |
| `petergyang/human-review` | `64deff14506cfc18d542d28fb7b7e0ac98c0c459` | MIT |

许可证标签是固定提交的审计结果，不替代法律审查。figures4papers 未发现明确许可证，不得据仓库公开状态推断复制、修改或再分发许可；其他项目仍须连同包内 `LICENSE*`、`NOTICE*` 和依赖条款使用。`novel-outline` 上游根目录包含 Apache `NOTICE`；`story-to-handdrawn-video` 还保留样式配方的 MIT 归属和 Ma Shan Zheng 字体的 OFL 文本。安装器会把包内文件与根级法律文件一并保留。精确入口、来源证据、执行边界和排除项见 `catalog/sources.lock.json` 与 `guides/CURATED_SOURCES.md`。

## 科研全量来源

`full-sources/research/` 固定 11 个科研项目。Academic Research Skills 与 ARS-Codex 采用 **CC BY-NC 4.0**，只允许非商业使用；Paper Craft Skills 的 README 声明 MIT，但固定提交中未发现独立 LICENSE；hamelnb 固定提交未发现明确许可证。商业使用或再分发前必须逐项核实。完整列表、提交和许可证状态见 `catalog/sources.lock.json` 与 `guides/RESEARCH.md`。

## 历史技能并集

`skills/community/` 和 `skills/variants/` 来源于孙承泽三个项目分支中的 `技能库&准则` 聚合目录。这些聚合目录本身包含众多上游项目的快照。本仓库：

- 在 `third_party/licenses/<collection>/` 保留聚合快照中可找到的 collection 级许可证；
- 在 `catalog/import-report.json` 记录每个技能的来源标签、原相对路径和 SHA-256；
- 在 `catalog/sources.lock.json` 固定三个聚合源的仓库、分支和提交；
- 不推断缺失许可证。缺失项会由校验脚本报告，使用者应在再分发或商业使用前核实真正上游。

其中 `skills/community/skills-main/skills/{docx,pdf,pptx,xlsx}/` 自带的 Anthropic `LICENSE.txt` 明确限制服务外提取/保留、复制、衍生作品和分发等行为，不应被视为开放源码内容。除非适用协议明确授权，不要安装、复制、修改或再分发这些目录；详见 `guides/OFFICIAL_SOURCES.md`。

`skills/community/` 是快速检索层；完整聚合源和直接上游均固定在 `full-sources/` Git 子模块。运行 `scripts/materialize_full_library.py` 可生成全量并集，并默认排除已有解压内容的冗余压缩副本。这不改变任何文件适用的许可证。


---

## SOURCE · `arena/01a060a3-skill:third_party/licenses/scientific-agent-skills/LICENSE.md`

<!-- blob: eb246475fd5a66b9bb56176f3a718984632dd98d; bytes: 1068 -->

MIT License

Copyright (c) 2025 K-Dense Inc.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.


---

## SOURCE · `arena/01a060a3-skill:third_party/upstream/human-writing/CHANGELOG.md`

<!-- blob: 25c38d89fee3bc61d200b30e7b028c466ae327c7; bytes: 2596 -->

# 更新日志

## 1.1.0（2026-08-05）

核心变化只有一句话。禁令从字符串级上移到修辞动作级，检测器补盲区、降误伤、加统计层。

### SKILL.md

「成稿绝对不能出现」重写。「不是……而是……」等句式清单升级为「翻案腔」的动作级定义，列出九种已知变形作为举例而非边界，并写明替代动作（判断从正面下，先给判断再给依据）。用材料真实挣得的自我修正允许保留，但不能套固定句式。新增三条动作级禁令，三项以上同构排比、给抽象名词配具体动词的抒情借喻、动词名词化。冒号改为分级，引出直接原话放行，提示性冒号仍禁。「不只……还……」从硬禁令降为语境判断。修复三处条文冲突，禁止追问时的六百字短答明确为「研究之后仍不足五件材料」的兜底；来源交付统一为一条规则；检索痕迹写明不算展示创作过程。

### references/revision.md

第五遍新增「翻案腔变形对照表」，七类外衣逐一列出。新增排比、抒情借喻、名词化三项检查。绝对禁词中的闭环、打法、想象空间、不丢降为语境判断词。新增模型偏爱抒情词清单（安放、抵达、微光、褶皱等）与「」高亮短语过密检查。第七遍写明用户指定标题里的大词不受结尾大词禁令约束。

### references/forum-prose.md

「让句子有松有紧」一节新增四条可量化的模型腔修法，句长要有高低差、删一半连词（附前后对照）、名词化还原成动词、该重复就重复。新增两段原创示范，「判断从正面下，不借翻案抬价」「长短句自己会呼吸」。

### scripts/check_prose.py

修复翻案句正则的三类漏检，跨句「。而是」、换字「倒不如／毋宁」，均判失败。新增警告层，翻案腔变形族（以为……其实、回头才发现、不是A，是B、从来都与……无关、跨句表面／看似等）、三连以上同构排比、名词化句式、模型偏爱抒情词、「」高亮短语过密。新增统计层，句长变异系数过低警告、连词密度过高警告（阈值依据 CCL 2023 人机中文对照研究）。误伤修复，「不丢人」不再触发硬停词，打法、想象空间、闭环移入语境判断词，引出原话的冒号降为警告。

### 新增

dist/human-writing-lite.md，两千字以内的蒸馏版，供 ChatGPT、千问办公、WorkBuddy 等聊天场景和较弱模型直接粘贴使用。

## 1.0.0（2026-08-05）

首次开源。


---

## SOURCE · `arena/01a060a3-skill:third_party/upstream/human-writing/README.md`

<!-- blob: ded07368a72daaafc16170fc1600c6df1b464d58; bytes: 5870 -->

<p align="center">
  <img src="./assets/readme-cover.svg" alt="活人感写作" width="100%">
</p>

<p align="center">
  <a href="https://github.com/KKKKhazix/human-writing/releases/tag/v1.1.0"><img alt="Version 1.1.0" src="https://img.shields.io/badge/version-1.1.0-C4473A?style=flat-square"></a>
  <a href="./LICENSE"><img alt="MIT License" src="https://img.shields.io/badge/license-MIT-313131?style=flat-square"></a>
  <a href="https://github.com/KKKKhazix/human-writing/releases/latest"><img alt="GitHub Release" src="https://img.shields.io/github/v/release/KKKKhazix/human-writing?style=flat-square&color=6B6258"></a>
</p>

<p align="center">
  <a href="#快速安装">快速安装</a> ·
  <a href="#它做什么">写作流程</a> ·
  <a href="#仓库结构">仓库结构</a> ·
  <a href="https://github.com/KKKKhazix/human-writing/issues">提交问题</a>
</p>

> AI 写中文有个通病：读完觉得挺流畅，但说不出是谁写的。活人感写作想治的就是这件事。

让模型写出来的文章读起来像一个具体的人在说话——知道一些事，有判断，偶尔岔开一句，还能接回来。适用于知乎回答、公众号文章、博客、论坛帖、人物故事、科普、评测、小说、口播等大多数中文写作场景。

## 它做什么

写作之前先解决一个前置问题：你手上有没有东西可写。

现实题材，材料不够就去查，查不到就追问或者缩短篇幅，绝不拿车轱辘话凑字数。虚构题材可以自由创造人物和情节，但每个场景仍然要有目标、有动作、有变化。

材料过关之后管三件事：

| 材料 | 推进 | 中文 |
| :--- | :--- | :--- |
| 现实写作核准事实、数字、引语和亲历。虚构写作检查人物、行动与因果。 | 每段都要带来新东西——新事实、新动作、新例子或新后果。写过的不重复。 | 白话打底，在意词序和停顿，清掉报告腔、模型腔和翻案句。 |

初稿写完还有一道关。Skill 会逐段检查有没有在原地转圈，砍掉重复解释，调整长短句节奏，拦住冒号滥用、破折号、「不是……而是……」之类的翻案腔和常见 AI 黑话。检查脚本只管已经写明的硬规则，不替你决定风格。

## 快速安装

把下面这句话发给你的 Agent。

```bash
帮我安装这个skill：https://github.com/KKKKhazix/human-writing
```

Agent 会读取仓库、找到 `human-writing`，完成安装。装好之后显示名为「活人感写作」。

<details>
<summary><strong>Agent 不支持直接安装时</strong></summary>

从 [Releases](https://github.com/KKKKhazix/human-writing/releases/latest) 下载，或者把仓库里的 [`human-writing`](./human-writing) 文件夹完整复制到本机 Skills 目录。文件夹名保留 `human-writing`。

```text
~/.agents/skills/community/human-writing/
```

</details>

装好之后这样用：

```text
使用 $human-writing，把我的材料写成一篇有活人感和中文韵律的作品。
```

## 1.1.0 改了什么

1.0 用字符串禁令拦 AI 味——禁「不是……而是……」、禁冒号、禁一批黑话。有效，但模型会换一套字面继续做同样的事。「你以为……其实……」「回头才发现」和「不是A而是B」是同一个姿势，读者认的是姿势，不是字。

1.1 把防线从字面挪到动作：禁的是「先给读者立一个他没有的误解，再推翻它」这件事本身，不管穿什么外衣。检测脚本也跟着升级，补了变形翻案句、AI 排比、抒情借喻的警告层，加了句长变异系数和连词密度的统计检查，同时把「不丢人」「打法」这类正常中文从误伤名单里捞出来。另外出了一个两千字的蒸馏版，ChatGPT、千问这类聊天窗口直接粘贴就能用。

完整变更见 [CHANGELOG.md](./CHANGELOG.md)。

## 仓库结构

<details>
<summary><strong>展开查看完整目录</strong></summary>

```text
human-writing/
├── SKILL.md
├── VERSION
├── LICENSE
├── agents/
│   └── openai.yaml
├── dist/
│   └── human-writing-lite.md
├── references/
│   ├── forum-prose.md
│   ├── reality.md
│   ├── fiction.md
│   ├── formats.md
│   └── revision.md
└── scripts/
    └── check_prose.py
```

| 位置 | 干什么的 |
| :--- | :--- |
| [`SKILL.md`](./human-writing/SKILL.md) | 入口。材料门槛、现实与虚构分流、写作流程、交付禁令，全在这一份里 |
| [`forum-prose.md`](./human-writing/references/forum-prose.md) | 知乎、公众号、论坛长帖的写法，节奏和措辞的具体做法都在这里 |
| [`reality.md`](./human-writing/references/reality.md) | 真人、历史、新闻、数据和个人经历的事实边界 |
| [`fiction.md`](./human-writing/references/fiction.md) | 小说、故事、虚构散文和对白的创作规则 |
| [`formats.md`](./human-writing/references/formats.md) | 短内容、口播、演讲、教程、评测等特殊形式 |
| [`revision.md`](./human-writing/references/revision.md) | 初稿写完之后怎么改——逐遍检查清单 |
| [`check_prose.py`](./human-writing/scripts/check_prose.py) | 检查成稿有没有踩到硬禁令 |
| [`human-writing-lite.md`](./human-writing/dist/human-writing-lite.md) | 蒸馏版，两千字以内，聊天窗口直接粘贴用 |

</details>

## 反馈

MIT 协议开源。仓库只有原创规则和工具，没有第三方文章、训练语料或模型权重。

碰到规则冲突、误报或者某个模型上表现不对，欢迎[提 Issue](https://github.com/KKKKhazix/human-writing/issues)。附上你的提示词、模型输出片段和你觉得应该是什么样，排查起来快很多。

<p align="center">
  <sub>活人感写作 · Human Writing · 1.1.0</sub>
</p>


---

## SOURCE · `arena/01a060a3-skill:third_party/upstream/openwiki/CHANGELOG.md`

<!-- blob: f58f7fbe886b90c952c22c786d5c87d80cb6ca04; bytes: 8652 -->

# openwiki

## 0.3.2

### Patch Changes

- [#616](https://github.com/langchain-ai/openwiki/pull/616) [`7531d61`](https://github.com/langchain-ai/openwiki/commit/7531d615216e8cbccf464f66cfbbae3668871c84) Thanks [@colifran](https://github.com/colifran)! - fix: pin patched js-yaml and undici via pnpm overrides

- [#513](https://github.com/langchain-ai/openwiki/pull/513) [`adc03d6`](https://github.com/langchain-ai/openwiki/commit/adc03d6f68812bc842c1a020be98738cb1e17568) Thanks [@colifran](https://github.com/colifran)! - chore: reorganize repo code to make into domain specific directories and improve test coverage to prevent regressions

- [#610](https://github.com/langchain-ai/openwiki/pull/610) [`c74ae1e`](https://github.com/langchain-ai/openwiki/commit/c74ae1e3ebc9a01e6ea84420931eea9d833fd1fa) Thanks [@Tomaskobel](https://github.com/Tomaskobel)! - fix: preserve exec bit on dist/cli.js after build

- [#599](https://github.com/langchain-ai/openwiki/pull/599) [`f9b9f0d`](https://github.com/langchain-ai/openwiki/commit/f9b9f0d6f1f1084c93633d943cabb54201263036) Thanks [@sudipawtg](https://github.com/sudipawtg)! - Pass Windows `APPDATA` and `LOCALAPPDATA` into stdio MCP child environments so local MCP servers can resolve their config and cache directories.

- [#605](https://github.com/langchain-ai/openwiki/pull/605) [`bff302c`](https://github.com/langchain-ai/openwiki/commit/bff302cc764688095d2051f968adc4d1013857af) Thanks [@dependabot](https://github.com/apps/dependabot)! - chore: bump mermaid from 11.16.0 to 11.16.1

- [#611](https://github.com/langchain-ai/openwiki/pull/611) [`817b2a0`](https://github.com/langchain-ai/openwiki/commit/817b2a0b8df3ec265e73bac58ae8b462d595139a) Thanks [@colifran](https://github.com/colifran)! - chore: reorganize CLI into domain modules and add test coverage

- [#604](https://github.com/langchain-ai/openwiki/pull/604) [`a0e28a3`](https://github.com/langchain-ai/openwiki/commit/a0e28a30fba1c80bc883711eab48292c5f8c398d) Thanks [@colifran](https://github.com/colifran)! - fix: harden error classification and run accounting

- [#612](https://github.com/langchain-ai/openwiki/pull/612) [`3d51348`](https://github.com/langchain-ai/openwiki/commit/3d51348c4f307e1dfa2f13d6b8803716d52b3ca3) Thanks [@colifran](https://github.com/colifran)! - chore: split credentials.tsx pure logic into credentials/ modules with tests

## 0.3.1

### Patch Changes

- [#585](https://github.com/langchain-ai/openwiki/pull/585) [`1e6b395`](https://github.com/langchain-ai/openwiki/commit/1e6b395b162b52929cf39eaf219f7fb034af023f) Thanks [@colifran](https://github.com/colifran)! - fix: stop the internal link validator from falsely flagging valid links

- [#589](https://github.com/langchain-ai/openwiki/pull/589) [`a86d0ba`](https://github.com/langchain-ai/openwiki/commit/a86d0bad2c457de299cab5659092197a53f7d7f5) Thanks [@colifran](https://github.com/colifran)! - fix: fingerprint innermost cause and chain-walk origin tag

## 0.3.0

### Minor Changes

- [#579](https://github.com/langchain-ai/openwiki/pull/579) [`1e818ae`](https://github.com/langchain-ai/openwiki/commit/1e818ae3e719a07e7d9a3c5f175c82791a7e98c0) Thanks [@bracesproul](https://github.com/bracesproul)! - Improve coding-agent wiki prompts and make OpenWiki guidance optional and just-in-time.

### Patch Changes

- [#555](https://github.com/langchain-ai/openwiki/pull/555) [`ad9c7b5`](https://github.com/langchain-ai/openwiki/commit/ad9c7b5f943c688b9de42b8cca968199c54da16f) Thanks [@GautamSharma99](https://github.com/GautamSharma99)! - fix: report rejected and timed-out telemetry sends accurately

- [#547](https://github.com/langchain-ai/openwiki/pull/547) [`0aa6ddc`](https://github.com/langchain-ai/openwiki/commit/0aa6ddcb57464b1541fe3457c4331418c3fdf28e) Thanks [@GautamSharma99](https://github.com/GautamSharma99)! - fix: preserve agent instructions when managed markers are malformed

- [#560](https://github.com/langchain-ai/openwiki/pull/560) [`5a2e8dc`](https://github.com/langchain-ai/openwiki/commit/5a2e8dc569bbcab48728c65f8e1ffe8980f04dbf) Thanks [@nick-hollon-lc](https://github.com/nick-hollon-lc)! - refactor: expose openwiki agent graph factory

- [#371](https://github.com/langchain-ai/openwiki/pull/371) [`5f8a8fb`](https://github.com/langchain-ai/openwiki/commit/5f8a8fb5c4943eb0b9474f1a74efb9c0824f6226) Thanks [@DecentralizedJM](https://github.com/DecentralizedJM)! - feat: validate wiki internal links after generation

- [#578](https://github.com/langchain-ai/openwiki/pull/578) [`73d8591`](https://github.com/langchain-ai/openwiki/commit/73d859158f9d6865bdb69692a24ad0cbf3a54d65) Thanks [@dependabot](https://github.com/apps/dependabot)! - chore(deps): bump postcss from 8.5.21 to 8.5.23

- [#564](https://github.com/langchain-ai/openwiki/pull/564) [`03128a6`](https://github.com/langchain-ai/openwiki/commit/03128a6b7efa037c6b597ec9e11c9b3199468240) Thanks [@dependabot](https://github.com/apps/dependabot)! - chore(deps): bump the major group with 3 updates

- [#568](https://github.com/langchain-ai/openwiki/pull/568) [`13e2f97`](https://github.com/langchain-ai/openwiki/commit/13e2f97f2a3a1cbb9f78721604fb5f75445def8f) Thanks [@divya0795](https://github.com/divya0795)! - fix: display array tool-call arguments as a value list instead of `0=…, 1=…`

- [#549](https://github.com/langchain-ai/openwiki/pull/549) [`5323914`](https://github.com/langchain-ai/openwiki/commit/53239142fad3a635aae88ba957bcee358e69e00c) Thanks [@GautamSharma99](https://github.com/GautamSharma99)! - fix: serialize concurrent environment saves and isolate temporary files

- [#577](https://github.com/langchain-ai/openwiki/pull/577) [`c30edbc`](https://github.com/langchain-ai/openwiki/commit/c30edbcc97f6587f2fe18626ba6609732a8d5cc5) Thanks [@colifran](https://github.com/colifran)! - fix: fetch full git history in scheduled update workflows

- [#576](https://github.com/langchain-ai/openwiki/pull/576) [`45d2416`](https://github.com/langchain-ai/openwiki/commit/45d24167583d06c971ba59259a2a7e5e58c452d7) Thanks [@colifran](https://github.com/colifran)! - fix: make the residual agent_error telemetry bucket diagnostic

## 0.2.5

### Patch Changes

- [#514](https://github.com/langchain-ai/openwiki/pull/514) [`b8c510f`](https://github.com/langchain-ai/openwiki/commit/b8c510fce4afab5cc855390f67f833137183d646) Thanks [@colifran](https://github.com/colifran)! - chore: setup changeset tooling for automated releases

- [#530](https://github.com/langchain-ai/openwiki/pull/530) [`1695c3f`](https://github.com/langchain-ai/openwiki/commit/1695c3f841a90543e5c292a871204faf5de0df9c) Thanks [@Monkey-wusky](https://github.com/Monkey-wusky)! - fix: allow comma in model id for gateway/proxy routing identifiers

- [#533](https://github.com/langchain-ai/openwiki/pull/533) [`fdfdfd8`](https://github.com/langchain-ai/openwiki/commit/fdfdfd8825237abe879d019c9211245f0d17ce40) Thanks [@jyje](https://github.com/jyje)! - fix: keep release workflow opt-in on forks

- [#481](https://github.com/langchain-ai/openwiki/pull/481) [`b3b0b43`](https://github.com/langchain-ai/openwiki/commit/b3b0b4320f184abbd686e05c85afdc0623c8e687) Thanks [@HwangJohn](https://github.com/HwangJohn)! - fix: ignore stray oauth callback requests

- [#455](https://github.com/langchain-ai/openwiki/pull/455) [`161b6a4`](https://github.com/langchain-ai/openwiki/commit/161b6a47d64eda29d0eedf9bfff6fc3966a527c2) Thanks [@colifran](https://github.com/colifran)! - feat: implement native wiki visualizer for openwiki

- [#165](https://github.com/langchain-ai/openwiki/pull/165) [`d6e5fbe`](https://github.com/langchain-ai/openwiki/commit/d6e5fbe2b09081fcaddc0419aa541b52bd3e30c0) Thanks [@n33levo](https://github.com/n33levo)! - feat: exclude paths from doc runs via .openwikiignore

- [#504](https://github.com/langchain-ai/openwiki/pull/504) [`63c848c`](https://github.com/langchain-ai/openwiki/commit/63c848cecf506871411852318c391635d0e038d5) Thanks [@Mohith26](https://github.com/Mohith26)! - fix: route summarization history offload outside the documented repo

- [#534](https://github.com/langchain-ai/openwiki/pull/534) [`aa417e1`](https://github.com/langchain-ai/openwiki/commit/aa417e14ddd4d74bf70b705367c31c7d164f9d3c) Thanks [@colifran](https://github.com/colifran)! - chore(deps): bump @langchain/core to ^1.2.4 to pick up the nested-tracer coalescing fix

- [#500](https://github.com/langchain-ai/openwiki/pull/500) [`b469109`](https://github.com/langchain-ai/openwiki/commit/b469109d12ef005e2d86688b200e78d57c236027) Thanks [@colifran](https://github.com/colifran)! - chore: improve health telemetry to better understand and diagnose init and update failures


---

## SOURCE · `arena/01a060a3-skill:third_party/upstream/openwiki/README.md`

<!-- blob: d6e0ad1e762933921d1764db6b7fc72453ef624b; bytes: 24836 -->

<!-- markdownlint-disable MD033 MD041 -->

<div align="center">

<img alt="OpenWiki" src="./static/openwiki-lockup.png" width="620">

### The self-maintaining wiki. Built for agents, explored by humans.

[![npm version](https://img.shields.io/npm/v/openwiki.svg?style=flat&labelColor=030710&color=1A6FB5)](https://www.npmjs.com/package/openwiki)
[![downloads](https://img.shields.io/npm/dm/openwiki.svg?style=flat&labelColor=030710&color=1A6FB5)](https://www.npmjs.com/package/openwiki)
[![Node](https://img.shields.io/node/v/openwiki.svg?style=flat&labelColor=030710&color=1A6FB5)](https://nodejs.org)
[![License: MIT](https://img.shields.io/badge/license-MIT-1A6FB5.svg?style=flat&labelColor=030710)](./LICENSE)
[![Built with Deep Agents](https://img.shields.io/badge/built%20with-DeepAgents-1A6FB5.svg?style=flat&labelColor=030710)](https://github.com/langchain-ai/deepagentsjs)

<a href="https://trendshift.io/repositories/70339?utm_source=trendshift-badge&amp;utm_medium=badge&amp;utm_campaign=badge-trendshift-70339" target="_blank" rel="noopener noreferrer"><img src="https://trendshift.io/api/badge/trendshift/repositories/70339/daily" alt="langchain-ai%2Fopenwiki | Trendshift" width="250" height="55"/></a>

</div>

OpenWiki is a CLI that writes and maintains a wiki for your codebase or your personal knowledge. An agent reads your sources, synthesizes a linked Markdown wiki you own, and keeps it current on every change. It is built for agents to read as memory, and it ships an interactive visualizer for humans to explore.

**OpenWiki gives you:**

- **Agent-written docs** that stay accurate, generated by a [Deep Agents](https://github.com/langchain-ai/deepagentsjs) documentation agent.
- **Two modes:** a `code` wiki for a repository, or a `personal` wiki for your own knowledge.
- **Twelve model providers** out of the box, from OpenAI and Anthropic to Bedrock, Gemini, and any OpenAI-compatible gateway.
- **Built-in connectors** for Custom MCP, Notion, Slack, Gmail, X, Web Search, Hacker News, and local git repositories.
- **An interactive visualizer** that turns any wiki into a live, explorable node graph.
- **Self-updating** through GitHub Actions, GitLab CI, or Bitbucket Pipelines.
- **Open Knowledge Format** ([OKF v0.1](https://github.com/GoogleCloudPlatform/knowledge-catalog/blob/main/okf/SPEC.md)) output with validated Mermaid diagrams.

## 🎉 What's new

- **Interactive visualizer:** turn any wiki into a live, explorable node graph with a side-by-side Markdown reader.
- **`.openwikiignore`:** keep generated, private, or irrelevant paths out of doc runs with familiar gitignore-style rules.
- **Multilingual wikis:** generate docs in another language with `--language <locale>`, while code and identifiers stay canonical.
- **LangSmith connector:** pull recent LangSmith traces (tool calls, outcomes, latency) into a code wiki.
- **GitHub Copilot provider:** reuse an existing Copilot subscription for inference, no separate API key required.

## Quick start

Install the CLI:

```sh
npm install -g openwiki
```

Generate a wiki for the current repository. The first run walks you through picking a provider, key, and model, then writes docs to `openwiki/`:

```sh
openwiki --init
```

Keep it current automatically by adding a scheduled CI job that opens a docs PR on every change:

- **GitHub Actions:** copy [`openwiki-update.yml`](./examples/openwiki-update.yml) into `.github/workflows/openwiki-update.yml`.
- **GitLab CI:** copy [`openwiki-update.gitlab-ci.yml`](./examples/openwiki-update.gitlab-ci.yml) into `.gitlab-ci.yml` or include it from your pipeline.
- **Bitbucket Pipelines:** copy [`openwiki-update.bitbucket-pipelines.yml`](./examples/openwiki-update.bitbucket-pipelines.yml) into `bitbucket-pipelines.yml`, then schedule the `openwiki-update` pipeline.

> [!NOTE]
> On Windows, install with a Node.js package manager (`npm install -g openwiki` or `pnpm add -g openwiki`). Installing with `bun` can fall back to compiling the `better-sqlite3` native dependency, which needs Visual Studio Build Tools with the Desktop development with C++ workload.

## Two modes

OpenWiki runs in one of two modes. Bare `openwiki`, `openwiki --init`, and `openwiki --update` default to **code** mode; add the `personal` positional (or `--mode personal`) for the personal brain.

| Mode                 | Documents              | Writes to               | Get started                |
| -------------------- | ---------------------- | ----------------------- | -------------------------- |
| **Code** _(default)_ | The current repository | `openwiki/` in the repo | `openwiki --init`          |
| **Personal**         | Your connected sources | `~/.openwiki/wiki`      | `openwiki personal --init` |

By default the CLI stays open after a run so you can send follow-up messages. Add `-p` / `--print` for a one-shot, non-interactive run that prints the final output and exits. `--init` and `--update` auto-exit on success in an interactive terminal, so the same command works one-shot or interactively.

## Explore your wiki

Turn any wiki into an interactive node graph with a live, side-by-side Markdown reader:

```sh
openwiki visualize
```

<div align="center">
  <img alt="The OpenWiki visualizer: an interactive node graph beside a live Markdown reader." src="./static/visualizer.gif" width="880">
</div>

This serves `./openwiki` on a local loopback address (`127.0.0.1`, never exposed on the network) and opens your browser to the graph. Edits to the wiki files are picked up automatically while the server runs. Pass a path to visualize a different directory, `--port <port>` to choose the port (it increments on conflict; default `4321`), and `--no-open` to leave the browser alone:

```sh
openwiki visualize openwiki --port 4400 --no-open
```

> [!NOTE]
> The page loads its graph, Markdown, and diagram libraries from a public CDN, so an internet connection is required even though the server itself is local. Press Ctrl-C to stop it.

## Connect your sources

In `personal` mode, OpenWiki ingests knowledge from the tools you already use, synthesizing them into your local wiki. First-run onboarding offers setup for **local git repositories, Notion, Gmail, X/Twitter, Web Search, and Hacker News**.

During an ingestion run, deterministic connector tools write raw data and manifests under `~/.openwiki/connectors/<connector>/raw/`, then source-specific agent runs synthesize the wiki under `~/.openwiki/wiki/`. You can configure the same connector more than once (for example one Web Search source for AI research and another for NBA news); OpenWiki stores them as separate instances like `web-search-1` and `web-search-2`.

```sh
openwiki auth notion        # run a local browser OAuth flow for a provider
openwiki ingest all         # run every configured source
openwiki ingest web-search  # run one connector's sources
```

<details>
<summary><b>Connector details and OAuth</b></summary>

<br/>

- `git-repo` reads configured local repository paths and writes compact manifests.
- `x` uses the X API directly with OAuth user-context credentials for home timeline, user posts, mentions, bookmarks, and list posts.
- `notion` targets the hosted Notion MCP server, so authenticate through Notion OAuth rather than pasting a token.
- `google` uses the Gmail API directly with OAuth user credentials to fetch recent mail.
- `web-search` uses Tavily through LangChain and requires `TAVILY_API_KEY`.
- `hackernews` uses the public Hacker News feed and search APIs, with no credentials required.

`openwiki auth <provider>` runs a local browser OAuth flow, saves returned tokens into `~/.openwiki/.env`, creates connector config when possible, and discovers MCP tools for MCP-backed providers. Slack and Gmail require app client credentials to already be set in that file; Notion uses dynamic client registration for hosted MCP; X uses OAuth 2.0 with PKCE. `openwiki auth configure <provider>` and `openwiki auth tools <provider>` are advanced retry commands.

Connector secrets are referenced by env var name and stored in `~/.openwiki/.env`; connector config files never contain raw secret values.

**Slack OAuth tunnel.** `openwiki ngrok start` starts an ngrok tunnel with a random HTTPS forwarding URL, reads ngrok's local inspection API, appends `/callback`, and saves `OPENWIKI_HTTPS_OAUTH_REDIRECT_URI` automatically. Register the printed callback URL in Slack. With a fixed domain, run `openwiki ngrok start https://<your-ngrok-domain>`.

</details>

### LangSmith connector (code mode)

The connectors above feed a `personal` wiki. The **LangSmith** connector instead enriches a `code` wiki: it pulls recent LangSmith traces (tool calls, outcomes, and latency) for the projects you choose through the official LangSmith SDK, so a repository's docs reflect how its code actually behaves at runtime, not just what the source says.

Configure it during `openwiki --init` in `code` mode. From the source menu, add LangSmith, pick your workspace region (US or EU), and list the projects to document. OpenWiki writes a committed `openwiki/.langsmith.json` that names the workspaces and projects (never the key itself), so every teammate and CI run documents the same set. The API key is read from the environment:

```sh
OPENWIKI_LANGSMITH_API_KEY="<your-langsmith-key>"
```

Locally the setup wizard saves this to `~/.openwiki/.env`. In CI, set it as a repository secret and export it for the run.

> [!NOTE]
> A LangSmith key is workspace- and region-bound. To document projects across more than one workspace, add an entry per workspace, each with its own key named `OPENWIKI_LANGSMITH_API_KEY_2`, `OPENWIKI_LANGSMITH_API_KEY_3`, and so on. The connector only talks to the official US (`api.smith.langchain.com`) and EU (`eu.api.smith.langchain.com`) hosts.

## How it stays yours

Everything OpenWiki writes is plain Markdown you own and version alongside your code.

- **Agents read it as memory.** On each `code` run, OpenWiki maintains an `AGENTS.md` and `CLAUDE.md` at the repo root that point your coding agent at the wiki. It only rewrites its own `<!-- OPENWIKI:START -->…<!-- OPENWIKI:END -->` block and leaves the rest of each file untouched.
- **You set the brief.** Repository-specific instructions live in `openwiki/INSTRUCTIONS.md`, a user-authored file OpenWiki reads for scope and priorities but never rewrites during normal runs.
- **No-op runs are free.** After a run, OpenWiki snapshots the `openwiki/` directory and only records new metadata when something actually changed, so scheduled workflows never churn.
- **Local, private config.** Provider choice, keys, and optional LangSmith tracing are saved to `~/.openwiki/.env` on your machine.

## Open Knowledge Format

OpenWiki emits [Google Open Knowledge Format (OKF) v0.1](https://github.com/GoogleCloudPlatform/knowledge-catalog/blob/main/okf/SPEC.md) bundles in both modes, so your wiki is portable to any OKF-aware tool.

- Every concept document carries YAML front matter with a non-empty `type`; all other standard fields are optional.
- Standard Markdown links between concept documents express their relationships.
- `index.md` and `log.md` are reserved documents rather than concepts. The root index declares `okf_version: "0.1"`.
- Valid `timestamp` values and producer-defined extension fields are preserved across updates and migrations.

## Diagrams

OpenWiki embeds **Mermaid** diagrams wherever they make a concept clearer than prose: sequence diagrams for runtime flows, ER diagrams for data models, state diagrams for lifecycles, and flowcharts for control flow. Diagrams are grounded in the inspected source, added where they add signal, and kept in sync on `--update`. No configuration is required.

After each run, OpenWiki validates every `mermaid` fence. A diagram that fails validation is converted in place to a plain `text` fence with a short comment explaining why, so it degrades to readable text instead of a broken block. The next `--update` finds that comment and repairs the diagram, so quality recovers over successive runs.

> [!TIP]
> By default OpenWiki runs a lightweight, zero-dependency check that catches common breakages. For authoritative validation that matches exactly what GitHub renders, install the Mermaid parser wherever you run OpenWiki (for example in your scheduled workflow), and no broken diagram will ship:
>
> ```sh
> npm install mermaid jsdom
> ```

## Model providers

The onboarding default is OpenAI with `gpt-5.6-terra`. Every provider includes preset model options plus support for custom model IDs, and stores its credentials in `~/.openwiki/.env`.

| Provider                                                     | Credential                              |
| ------------------------------------------------------------ | --------------------------------------- |
| **OpenAI** _(default)_                                       | `OPENAI_API_KEY`                        |
| **OpenAI (ChatGPT login)**                                   | Browser sign-in, uses your ChatGPT plan |
| **Anthropic**                                                | `ANTHROPIC_API_KEY`                     |
| **Gemini** (AI Studio)                                       | `GEMINI_API_KEY`                        |
| **Gemini Enterprise** (Vertex AI)                            | Google ADC, keyless                     |
| **AWS Bedrock**                                              | IAM credentials                         |
| **GitHub Copilot**                                           | GitHub CLI session                      |
| **OpenRouter**                                               | `OPENROUTER_API_KEY`                    |
| **Nebius / Fireworks / Baseten / NVIDIA NIM**                | Provider API key                        |
| **OpenAI-compatible** (LiteLLM, Ollama, LM Studio, gateways) | Base URL + key                          |

<details>
<summary><b>GitHub Copilot</b></summary>

<br/>

The GitHub Copilot provider routes inference through the OpenAI-compatible Copilot API (`https://api.githubcopilot.com`), so teams can reuse an existing Copilot subscription instead of provisioning a separate inference key.

1. Select `GitHub Copilot` during `openwiki --init`. If you have an active [GitHub CLI](https://cli.github.com) session, OpenWiki detects it and offers to reuse it. Otherwise, press <kbd>Tab</kbd> at the credential prompt to run `gh auth login` and sign in.
2. Choose a model (for example `gpt-5.5`).

OpenWiki leaves the token in the GitHub CLI's own credential store. For CI or another headless environment, set `COPILOT_API_KEY` to a GitHub **OAuth token**. Personal Access Tokens are rejected by the Copilot API for third-party integrations. The local config can stay token-free:

```env
OPENWIKI_PROVIDER="copilot"
OPENWIKI_MODEL_ID="gpt-5.5"
```

In CI, set the `COPILOT_API_KEY` repository secret and export `OPENWIKI_PROVIDER=copilot`.

</details>

<details>
<summary><b>AWS Bedrock</b></summary>

<br/>

The `bedrock` provider calls foundation models on AWS Bedrock using IAM credentials rather than a single vendor key:

```bash
OPENWIKI_PROVIDER=bedrock
BEDROCK_AWS_ACCESS_KEY_ID=your-access-key-id
BEDROCK_AWS_SECRET_ACCESS_KEY=your-secret-access-key
BEDROCK_AWS_REGION=us-east-1
OPENWIKI_MODEL_ID=anthropic.claude-sonnet-5
```

When explicit Bedrock credentials are not set, OpenWiki uses the AWS SDK default credential provider chain (OIDC/web identity, IAM roles, AWS profiles, ECS/EC2). The region resolves from `BEDROCK_AWS_REGION`, `AWS_REGION`, or `AWS_DEFAULT_REGION`. Available model IDs depend on which foundation models you have enabled in your account and region, so there is no preset list; paste the Bedrock model ID directly.

Some newer models only accept on-demand invocation through a cross-region inference profile. If you see `ValidationException: Invocation of model ID ... with on-demand throughput isn't supported`, prefix the model ID with the profile's region code, for example `us.anthropic.claude-sonnet-5`. Your IAM policy then also needs `bedrock:InvokeModel` / `InvokeModelWithResponseStream` on both the `foundation-model` and `inference-profile` resource types.

</details>

<details>
<summary><b>Gemini (AI Studio) and Gemini Enterprise (Vertex AI)</b></summary>

<br/>

**Gemini (AI Studio)** runs Google's Gemini models with a single API key:

```bash
OPENWIKI_PROVIDER=gemini
GEMINI_API_KEY=your-ai-studio-key
```

**Gemini Enterprise** runs models from the Gemini Enterprise Model Garden (formerly Vertex AI): Google's Gemini/Gemma, Anthropic's Claude, and partner/open-weight models (Llama, Mistral, DeepSeek, Qwen). It routes each model ID to the right API surface automatically and uses no API key. Authentication happens with Google Application Default Credentials (ADC):

- a service account key file via `GOOGLE_APPLICATION_CREDENTIALS=/path/to/key.json`,
- user credentials from `gcloud auth application-default login`, or
- workload identity when running on Google Cloud or in CI.

```bash
OPENWIKI_PROVIDER=gemini-enterprise
GOOGLE_CLOUD_PROJECT=your-gcp-project
GOOGLE_CLOUD_LOCATION=global   # optional, defaults to global
```

Set `OPENWIKI_MODEL_ID` to any Model Garden model. Gemini and Claude ship as presets; partner models are reached by pasting their ID (for example `publishers/meta/models/llama-3.3-70b-instruct-maas`). The credentials need Vertex AI access (`roles/aiplatform.user`), and the models must be enabled in the Model Garden. The `global` endpoint serves Gemini and Claude with the best availability; set `GOOGLE_CLOUD_LOCATION` to a regional endpoint for data residency, and always set it explicitly for region-specific partner (MaaS) models.

For CI, authenticate before the update job runs (for example with [`google-github-actions/auth`](https://github.com/google-github-actions/auth)) and set `OPENWIKI_PROVIDER=gemini-enterprise` and `GOOGLE_CLOUD_PROJECT` in the job environment.

</details>

<details>
<summary><b>OpenAI (ChatGPT login)</b></summary>

<br/>

The `openai-chatgpt` provider calls OpenAI's Codex backend using your ChatGPT subscription instead of a metered API key, drawing on your Plus/Pro/Team plan's included Codex usage. It serves the same model list as the `openai` provider.

```bash
OPENWIKI_PROVIDER=openai-chatgpt openwiki code --init
# or
OPENWIKI_PROVIDER=openai-chatgpt openwiki personal --init
```

The wizard opens `https://auth.openai.com` in your browser (and prints the URL for headless/SSH use). After you sign in, OpenWiki captures the OAuth callback, shows the signed-in email and plan, and continues to model selection. It stores the access token, refresh token, expiry, account id, email, and plan in `~/.openwiki/.env`. These are managed for you and the access token is refreshed automatically, so you normally never edit them by hand. Treat the refresh token like a password.

</details>

<details>
<summary><b>OpenAI-compatible endpoints (LiteLLM, Ollama, LM Studio, gateways)</b></summary>

<br/>

The `openai-compatible` provider targets any OpenAI-compatible chat-completions endpoint via a required base URL. Set the model ID to whatever the endpoint exposes.

```bash
# Hosted gateway (for example Requesty, which fronts many upstream providers)
OPENWIKI_PROVIDER=openai-compatible
OPENAI_COMPATIBLE_API_KEY=your-gateway-key
OPENAI_COMPATIBLE_BASE_URL=https://router.requesty.ai/v1
OPENWIKI_MODEL_ID=openai/gpt-5.5
```

```bash
# Ollama, after `ollama serve` and `ollama pull llama3.2`
OPENWIKI_PROVIDER=openai-compatible
OPENAI_COMPATIBLE_API_KEY=ollama
OPENAI_COMPATIBLE_BASE_URL=http://localhost:11434/v1
OPENWIKI_MODEL_ID=llama3.2
```

```bash
# LM Studio, after starting the local server from the Developer tab
OPENWIKI_PROVIDER=openai-compatible
OPENAI_COMPATIBLE_API_KEY=lm-studio
OPENAI_COMPATIBLE_BASE_URL=http://localhost:1234/v1
OPENWIKI_MODEL_ID=your-loaded-model-id
```

Some local servers ignore the API key value, but OpenWiki still requires `OPENAI_COMPATIBLE_API_KEY` because the client expects one.

</details>

<details>
<summary><b>Alternative base URLs, OpenRouter pinning, and retries</b></summary>

<br/>

**Alternative base URLs.** Route a provider at a self-hosted or proxied gateway by setting its base URL alongside its key: `ANTHROPIC_BASE_URL`, `OPENAI_BASE_URL`, `BASETEN_BASE_URL`, `FIREWORKS_BASE_URL`, `NVIDIA_BASE_URL`, or `COPILOT_BASE_URL`. The `openai` provider routes tool calls through the Responses API (`/v1/responses`), which is useful for gateways that expose it.

```bash
OPENWIKI_PROVIDER=anthropic
ANTHROPIC_API_KEY=your-key
ANTHROPIC_BASE_URL=https://your-gateway.example.com/anthropic
```

**OpenRouter provider pinning.** When OpenRouter serves a model through multiple upstreams, restrict routing with a provider or comma-separated allowlist:

```bash
OPENWIKI_PROVIDER=openrouter
OPENROUTER_API_KEY=your-key
OPENWIKI_OPENROUTER_PROVIDER_ONLY=Novita
```

**OpenRouter output-token cap.** By default no `max_tokens` is sent, so OpenRouter's credit pre-check budgets for the model's full advertised output ceiling — on a low credit balance every request can fail with a 402 error. Cap the per-request output explicitly with:

```bash
OPENWIKI_OPENROUTER_MAX_TOKENS=8192
```

A cap trades those hard 402 failures for possible truncation when a long wiki generation genuinely needs more output tokens, so prefer the largest value your balance allows.

**Retry attempts.** OpenWiki uses LangChain's retry handling for transient provider errors. Override the retry count (default 3) with `OPENWIKI_PROVIDER_RETRY_ATTEMPTS=3` (a positive integer).

</details>

> [!NOTE]
> If there is an inference provider or model you would like to see added, please open a PR.

## Ignoring paths

Create a `.openwikiignore` file in the repository root to keep generated docs from reading or describing private, generated, or irrelevant paths. The syntax supports comments, blank lines, `*` and `**` globs, directory rules, and `!` negation:

```gitignore
secrets/
*.log
!logs/keep.log
```

When `.openwikiignore` has active rules, OpenWiki filters filesystem discovery and restricts shell execute so ignored paths stay out of the run. This is a read boundary: ignored paths are never read, scanned, or reproduced in the docs. It does not guarantee a topic is never mentioned, since the agent may still infer an ignored area from other allowed evidence such as tests, the README, or commit messages.

## Command reference

```sh
openwiki                         # interactive chat, code mode, current repo
openwiki personal                # interactive chat, personal brain
openwiki "generate docs"         # start with an initial request
openwiki -p "what can you do?"   # one-shot, print, and exit
openwiki --init                  # initialize code docs (personal: openwiki personal --init)
openwiki --update                # update code docs (personal: openwiki personal --update)
openwiki visualize               # interactive graph + live reader
openwiki auth <provider>         # authenticate a connector (slack, gmail, x, notion)
openwiki ingest <source>         # run connector ingestion (all, or a connector/instance)
openwiki --help                  # full help
```

In chat, `/api-key` updates the current provider key and `/langsmith-key` updates or clears LangSmith tracing credentials, both with masked prompts.

## Telemetry

OpenWiki collects anonymous, aggregate usage data to understand how the tool is used and improve it. Telemetry is on by default and easy to turn off.

**Collected** on a single `openwiki_run` event, keyed by a random install ID in `~/.openwiki/install-id`: the command (init / update), the outcome (success / failure / no-op) with a coarse error category on failure (never the message), and at setup only, the brain mode, model provider, and configured connector names.

**Never collected:** file contents, repository data or names, credentials, prompts, model output, connector payloads, error messages, file paths, URLs, model IDs, run duration, or your IP address. Interactive chat, `auth`, and `ingest` are not recorded. Scheduled/CI runs are tagged as anonymous reliability data under a shared CI identifier and never counted as installs.

Opt out with either environment variable, or add the first line to `~/.openwiki/.env` to disable permanently:

```sh
export OPENWIKI_TELEMETRY_DISABLED=1
export DO_NOT_TRACK=1   # cross-tool standard
```

To see exactly what a run would send, add `--telemetry-file=<path>` to any run.

## Contributing

Contributions are welcome. Please read [CONTRIBUTING.md](./CONTRIBUTING.md) before opening a PR. We intentionally keep PRs tightly scoped to one change each, and PRs that bundle unrelated changes may be closed with a request to split them.

## License

[MIT](./LICENSE)


---

## SOURCE · `arena/01a060a3-skill:third_party/upstream/screencoder/README.md`

<!-- blob: 1fbb0cd563aaeef9a53544986fd0fe88a63c6fc3; bytes: 6527 -->

# ScreenCoder: Advancing Visual-to-Code Generation for Front-End Automation via Modular Multimodal Agents

<div align="center">

Yilei Jiang<sup>1*</sup>, Yaozhi Zheng<sup>1*</sup>, Yuxuan Wan<sup>2*</sup>, Jiaming Han<sup>1</sup>, Qunzhong Wang<sup>1</sup>,  
Michael R. Lyu<sup>2</sup>, Xiangyu Yue<sup>1✉</sup>  
<br>
<sup>1</sup>CUHK MMLab, <sup>2</sup>CUHK ARISE Lab  
<br>
<sup>*</sup>Equal contribution  <sup>✉</sup>Corresponding author

<a href="https://arxiv.org/abs/2507.22827">
    <img
      src="https://img.shields.io/badge/arXiv-Paper-red?logo=arxiv&logoColor=red"
      alt="Paper on arXiv"
    />
  </a>
  <a href="https://huggingface.co/spaces/Jimmyzheng-10/ScreenCoder">
    <img 
        src="https://img.shields.io/badge/HF-Demo-yellow?logo=huggingface&logoColor=yellow" 
        alt="Huggingface Demo"
    />
  </a>
</div>
<div align="center">
  <img src="teaser.jpg" width="100%"/>
  
</div>

## Introduction

**ScreenCoder** is an intelligent UI-to-code generation system that transforms any screenshot or design mockup into clean, production-ready HTML/CSS code. Built with a modular multi-agent architecture, it combines visual understanding, layout planning, and adaptive code synthesis to produce accurate and editable front-end code.

It also supports customized modifications, allowing developers and designers to tweak layout and styling with ease. Whether you're prototyping quickly or building pixel-perfect interfaces, ScreenCoder bridges the gap between design and development — just copy, customize, and deploy.

## News
- We have released the post-training code (SFT + RL) used to align ScreenCoder.
- We also release ScreenBench (https://huggingface.co/datasets/Leigest/ScreenCoder), a novel benchmark for visual-to-code/web UI generation, including 1000 up-to-date real-world sampled web screenshots and corresponding HTML source code with diverse topics.

## Huggingface Demo
- Try our huggingface demo at [Demo](https://huggingface.co/spaces/Jimmyzheng-10/ScreenCoder)

- Run the demo locally (download from huggingface space):

  ```bash
  python app.py
  ```
  
## Demo Videos

A showcase of how **ScreenCoder** transforms UI screenshots into structured, editable HTML/CSS code using a modular multi-agent framework.

### Youtube Page

https://github.com/user-attachments/assets/5d4c0808-76b8-4eb3-b333-79d0ac690189

### Instagram Page

https://github.com/user-attachments/assets/9819d559-863e-4126-8506-1eccaa806df0

### Design Draft（allow customized modifications!）

https://github.com/user-attachments/assets/d2f26583-4649-4b6d-8072-b11cd1025f4b

## Qualitative Comparisons

We present qualitative examples to illustrate the improvements achieved by our method over existing approaches. The examples below compare the output of a baseline method with ours on the same input.

### Baseline or Other Method

![Other Method Output](example_others.jpeg)

### Our Method

![Our Method Output](example_ours.jpeg)

As shown above, our method produces results that are more accurate, visually aligned, and semantically faithful to the original design.

## Project Structure
- `main.py`: The main script to generate final HTML code for a single screenshot.
- `UIED/`: Contains the UIED (UI Element Detection) engine for analyzing screenshots and detecting components.
  - `run_single.py`: Python script to run UI component detection on a single image.
- `html_generator.py`: Takes the detected component data and generates a complete HTML layout with generated code for each module.
- `image_replacer.py`: A script to replace placeholder divs in the final HTML with actual cropped images.
- `mapping.py`: Maps the detected UIED components to logical page regions.
- `requirements.txt`: Lists all the necessary Python dependencies for the project.
- `doubao_api.txt`: API key file for the Doubao model (should be kept private and is included in `.gitignore`).

## Setup and Installation

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/leigest519/ScreenCoder.git
    cd screencoder
    ```

2.  **Create a virtual environment:**
    ```bash
    python3 -m venv .venv
    source .venv/bin/activate
    ```

3.  **Install dependencies:**
    ```bash
    pip install -r requirements.txt
    ```
4. **Configure the model and API key**
    - ***Choose a generation model***: Set the desired model in `block_parsor.py` and `html_generator.py`. Supported options: Doubao(default), Qwen, GPT, Gemini.
    - ***Add the API key***: Create a plain-text file (`doubao_api.txt`, `qwen_api.txt`, `gpt_api.txt`, `gemini_api.txt`) in the project root directory that corresponds to your selected model, and paste your API key inside.

## Usage

The typical workflow is a multi-step process as follows:

1.  **Initial Generation with Placeholders:**
    Run the Python script to generate the initial HTML code for a given screenshot.
    - Block Detection:
      ```bash
      python block_parsor.py
      ```
    - Generation with Placeholders (Gray Images Blocks):
      ```bash
      python html_generator.py
      ```

2.  **Final HTML Code:**
    Run the python script to generate final HTML code with copped images from the original screenshot.
    - Placeholder Detection:
      ```bash
      python image_box_detection.py
      ```
    - UI Element Detection:
      ```bash
      python UIED/run_single.py
      ```
    - Mapping Alignment Between Placeholders and UI Elements:
      ```bash
      python mapping.py
      ```
    - Placeholder Replacement:
      ```bash
      python image_replacer.py
      ```

3.  **Simple Run:**
    Run the python script to generate the final HTML code:
    ```bash
    python main.py
    ```

## More Projects on MLLM for Web/Code Generation
- [WebPAI (Web Development Powered by AI)](https://github.com/WebPAI) released a set of research resources and datasets for webpage generation studies, aiming to build an AI platform for more reliable and practical automated webpage generation.

- [Awesome-Multimodal-LLM-for-Code](https://github.com/xjywhu/Awesome-Multimodal-LLM-for-Code) maintains a comprehensive list of papers on methods, benchmarks, and evaluation for code generation under multimodal scenarios.


## Acknowledgements

This project builds upon several outstanding open-source efforts. We would like to thank the authors and contributors of the following projects: [UIED](https://github.com/MulongXie/UIED), [DCGen](https://github.com/WebPAI/DCGen), [Design2Code](https://github.com/NoviScl/Design2Code)


---

## SOURCE · `arena/01a060a3-skill:third_party/upstream/victor-design/README.md`

<!-- blob: 15674c14dee6253128a65b7f58d1cb569b7f024d; bytes: 2683 -->

# Victor Design

Victor Design is a human-centered visual design workflow for AI agents. It understands the subject and the task first, then chooses the form, content, and visual language before delivering work that can be reviewed and edited.

In a recorded four-track evaluation, it outperformed most of seven world-class design skills and received a first-place public-vote finish.

## Use it for

- Posters and key visuals
- Social media graphics
- Product UI
- Presentations and decks

## What makes it different

1. **Form before styling** — A design brief is classified before production: one poster, a graphic set, a multi-state UI flow, or a presentation.
2. **Real material first** — Workspace material and project facts come before generation. Generated images are approved supplemental material, never a substitute for authored structure.
3. **A complete production and review chain** — Layout constraints, three hard delivery gates, and visual review keep the output accountable. Built-in guardrails also reject generic AI visual and copy patterns.
4. **Editable delivery** — Posters and graphic sets ship as editable Figma frames by default; product UI keeps its HTML interaction flow.
5. **HTML to Figma** — The companion DOM Migrate v3 plugin converts Victor Design's controlled UI HTML into editable Figma Frames, Auto Layout, Grid, Text, Image, components, and valid Hug / Fill / Fixed sizing. Complex CSS effects are rasterized only at the smallest necessary layer while the main structure stays editable.

DOM Migrate v3 is designed for controlled Victor Design UI HTML. It does not promise lossless migration for arbitrary websites.

## Install

```bash
git clone https://github.com/victorzhang016-code/victor-design.git ~/.agents/skills/victor-design
```

Windows PowerShell:

```powershell
git clone https://github.com/victorzhang016-code/victor-design.git "$HOME\.agents\skills\victor-design"
```

The entry point is `SKILL.md`. MIT License.

## First run

The skill ships with the author's default style evidence, so it has a real
voice immediately. If you have approved work of your own, open
`references/style-evidence.md` and replace the default base with evidence
from your own finished pieces — the "Make it yours" section walks through
it. Teams adopting the system should treat this swap as onboarding step one,
not an advanced option.

## SkillHub release

The repository includes development and test files. Prepare a clean SkillHub source directory first:

```bash
python scripts/prepare_skillhub_release.py --output /tmp/victor-design-skillhub
```

Then pass that directory to `redskillhub-upload` for dry-run, review, and submission.


---

## SOURCE · `arena/01a060a3-skill:tools/README.md`

<!-- blob: 1987c5df47075ffc99dcfaecc68a0610f8af255a; bytes: 985 -->

# 工具 (Tools)

本目录包含仓库内置工具的运行时镜像与技能入口。

| 工具 | 入口 | 说明 |
|---|---|---|
| [OpenCut](opencut/SKILL.md) | `tools/opencut/` | 本地浏览器视频编辑器（源码在 `full-sources/tools/opencut`） |
| [OpenWiki](openwiki/SKILL.md) | `tools/openwiki/` | LangChain OpenWiki CLI，生成面向 Agent 的 Markdown Wiki |
| [RustDesk](rustdesk/SKILL.md) | `tools/rustdesk/` | 原生远程桌面客户端（源码在 `full-sources/tools/rustdesk`） |
| [ScreenCoder](screencoder/SKILL.md) | `tools/screencoder/` | 截图转可编辑 HTML/CSS |
| [Spec Kit](spec-kit/SKILL.md) | `tools/spec-kit/` | GitHub Spec Kit 规范驱动开发 |

## 使用方式

```bash
# 安装所有工具源码（Git 子模块）
bash scripts/setup_tools.sh all

# 运行 OpenCut
HOST=0.0.0.0 PORT=5173 bash scripts/run_opencut.sh

# 核验工具安装
bash scripts/verify_tools.sh
```

完整工具指南见 [`guides/TOOLS.md`](../guides/TOOLS.md)。


---

## SOURCE · `arena/01a060a3-skill:tools/opencut/SKILL.md`

<!-- blob: ff89eaccec97d71ed9103ae83864e46ed83efc21; bytes: 1872 -->

---
name: opencut
description: Install, run, inspect, and verify the repository-pinned OpenCut web video editor locally. Use for OpenCut setup, local preview, editor troubleshooting, or changes to the pinned OpenCut source. Do not use it as a generic video-editing substitute when no OpenCut runtime is involved.
---

# OpenCut local editor

Use the repository-pinned source at `full-sources/tools/opencut`, not an unpinned clone.

## Standard workflow

1. Read `guides/TOOLS.md` and confirm the pinned commit in `catalog/sources.lock.json`.
2. Install user-local prerequisites and web dependencies:

   ```bash
   bash scripts/setup_tools.sh opencut
   ```

3. Run the browser app on an explicit host and port:

   ```bash
   HOST=0.0.0.0 PORT=5173 bash scripts/run_opencut.sh
   ```

4. Verify the returned page over HTTP, then exercise the requested editor path in a browser.
5. Before changing source, inspect the current upstream architecture: the pinned `main` includes both web work and newer desktop foundations and may differ from older OpenCut tutorials.
6. Keep `node_modules`, generated route files, build output, and caches untracked. Commit only intentional source changes in an appropriate upstream workflow; this repository normally records only the gitlink.

## Completion evidence

Report the exact pinned commit, Bun version, URL, HTTP result, and the interaction actually tested. A listening port alone is not proof that editor behavior works.

## Boundaries

- Imported media may be sensitive; do not upload or transmit it without permission.
- Do not expose the development server beyond the requested environment.
- Treat third-party codecs, fonts, and generated media according to their own licenses.
- If Cloudflare request metadata cannot be fetched during local startup, distinguish a non-fatal development fallback from an application failure.


---

## SOURCE · `arena/01a060a3-skill:tools/openwiki/.changeset/README.md`

<!-- blob: 654c6d4750dca19541bd9803371735943bb3fe4e; bytes: 512 -->

# Changesets

Hello and welcome! This folder has been automatically generated by `@changesets/cli`, a build tool that works
with multi-package repos, or single-package repos to help you version and publish your code. You can
find the full documentation for it [in our repository](https://github.com/changesets/changesets).

We have a quick list of common questions to get you started engaging with this project in
[our documentation](https://github.com/changesets/changesets/blob/main/docs/common-questions.md).


---

## SOURCE · `arena/01a060a3-skill:tools/openwiki/.changeset/custom-mcp-source.md`

<!-- blob: 8c6ffbb129dcbb817d465ef1bd3d4586ff8cc27b; bytes: 93 -->

---
"openwiki": patch
---

feat: add built-in custom-mcp connector for arbitrary mcp sources


---

## SOURCE · `arena/01a060a3-skill:tools/openwiki/.changeset/fix-connector-tool-mode-gating.md`

<!-- blob: 9a754261e16270e88971fc217813e40a40f8ae79; bytes: 81 -->

---
"openwiki": patch
---

fix: gate connector tools to personal/local-wiki runs


---

## SOURCE · `arena/01a060a3-skill:tools/openwiki/.changeset/paged-mcp-tool-lists.md`

<!-- blob: 526b5d3a72edf0c5467a97ad8ed877b7eaa4bdaa; bytes: 207 -->

---
"openwiki": patch
---

fix: follow `nextCursor` when listing MCP tools, so tools on a paginated server past the first page are discovered and callable instead of rejected as "not returned by tools/list"


---

## SOURCE · `arena/01a060a3-skill:tools/openwiki/.changeset/provider-aware-ci-workflow.md`

<!-- blob: c9caf67aa1bef5eed46e6f2a0da14a9b3141c792; bytes: 97 -->

---
"openwiki": patch
---

feat: generate the ci workflow env block from the configured provider


---

## SOURCE · `arena/01a060a3-skill:tools/openwiki/.changeset/read-only-bundled-skills.md`

<!-- blob: 4b0703a36840322e2e2f0ec5e1d7eb9392784c24; bytes: 81 -->

---
"openwiki": patch
---

fix: sync bundled skills from read-only installations


---

## SOURCE · `arena/01a060a3-skill:tools/openwiki/.changeset/safe-streaming-text.md`

<!-- blob: 1e764de62402fafa8809f31c893a7d7e8d36ed2e; bytes: 95 -->

---
"openwiki": patch
---

fix: strip terminal control sequences from streamed Markdown output


---

## SOURCE · `arena/01a060a3-skill:tools/openwiki/.changeset/six-walls-travel.md`

<!-- blob: 8e86bc58fc51d08731d9052d47080160840ce64d; bytes: 104 -->

---
"openwiki": patch
---

feat: add LEDGER, a longitudinal benchmark for wiki grounding and forgetting


---

## SOURCE · `arena/01a060a3-skill:tools/openwiki/.changeset/smart-cats-validate.md`

<!-- blob: ca4cc6e855dd1b1247e4368e9932e1f5122baf31; bytes: 111 -->

---
"openwiki": patch
---

feat: validate selected openai models against api-key availability before inference


---

## SOURCE · `arena/01a060a3-skill:tools/openwiki/.changeset/spicy-llamas-shout.md`

<!-- blob: 872b008d54f168a551fe9f86314073acc8398537; bytes: 141 -->

---
"openwiki": patch
---

feat: cap openrouter output tokens with OPENWIKI_OPENROUTER_MAX_TOKENS to avoid 402 errors on low credit balances


---

## SOURCE · `arena/01a060a3-skill:tools/openwiki/AGENTS.md`

<!-- blob: fb90680ca04d0f0292b3340603f64899fb4f3a25; bytes: 1109 -->

## OpenWiki

This repository has documentation located in the /openwiki directory.

Start here:

- [OpenWiki quickstart](openwiki/quickstart.md)

OpenWiki includes repository overview, architecture notes, workflows, domain concepts, operations, integrations, testing guidance, and source maps.

When working in this repository, read the OpenWiki quickstart first, then follow its links to the relevant architecture, workflow, domain, operation, and testing notes.

<!-- OPENWIKI:START -->

## OpenWiki

This repository has a generated `openwiki/` evidence index. It is optional just-in-time context, not required startup reading.

- Treat source code and tests as authoritative. A brief's unknowns and review items are verification gaps, not automatic requirements.
- Prefer the narrowest quiet validation that proves the changed behavior. Preserve complete failure output.

The scheduled OpenWiki GitHub Actions workflow refreshes the repository wiki. Do not hand-edit generated OpenWiki pages unless explicitly asked; prefer updating source code/docs and letting OpenWiki regenerate.

<!-- OPENWIKI:END -->


---

## SOURCE · `arena/01a060a3-skill:tools/openwiki/CONTRIBUTING.md`

<!-- blob: 59f55dafc4ad40a9f362367d755baae415d6e4ca; bytes: 3379 -->

# Contributing to OpenWiki

Thanks for contributing! Our standard for PR contributions is **one PR = one change**.
This allows us to keep reviews fast and the repo history clean.

## Scope: one PR = one change

Pull requests should be well scoped and every one should do exactly one thing.

Fixing a bug that's part of the change you're making is fine but if you find
yourself fixing something _unrelated_ along the way, open a separate PR for it.

### What "tightly scoped" means

✅ **Good:** "Add Fireworks to the model provider list" — the provider config,
its model options, and the doc line for it.

❌ **Too broad:** "Add a new provider, refactor the credential onboarding flow,
and fix a typo in the README" — three unrelated changes. You should split these
into three PRs.

## Before you open a PR

Run these locally so you don't get surprised by CI:

```sh
pnpm run format
pnpm run lint
pnpm test
```

`format` and `lint` match the checks that run on every PR, and `test`
typechecks, builds, and runs the Vitest suite with coverage.

If your change should ship in a release, also add a changeset (see below).

## Changesets

We release with [Changesets](https://github.com/changesets/changesets). If your
PR changes the published `openwiki` package in a way users should see (a bug fix,
a new feature, or any behavior change), add a changeset:

```sh
pnpm changeset
```

Pick the bump type, write a short summary, and commit the generated
`.changeset/*.md` file with your PR. The summary becomes the changelog entry, so
write it for users rather than reviewers. Bump types follow semver:

- **patch** for bug fixes and other small, backward-compatible changes
- **minor** for new, backward-compatible features
- **major** for breaking changes

Changes that do not affect the published package (docs, tests, CI, internal
refactors) do not need a changeset. If a change touches the package but should
not trigger a release, record that intent with an empty one: `pnpm changeset --empty`.

Once your PR merges, the Release workflow opens a "chore: version packages" PR
that collects the pending changesets. Merging that PR bumps the version, updates
`CHANGELOG.md`, and publishes the release.

## PR expectations

- **Clear title** — a single sentence describing the one change, prefixed with a
  [Conventional Commits](https://www.conventionalcommits.org/) type such as
  `feat:`, `fix:`, or `chore:` (e.g. `feat: add Fireworks to the model provider list`).
- **What and why** — briefly explain what the PR does and the reason for it.
- **How you tested it** — describe the tests (unit or end-to-end) that verify your
  change works and doesn't break existing behavior. If you added or updated tests,
  note them here.
- **Add a changeset** for any user-facing change so it lands in the changelog and
  the next release. See [Changesets](#changesets).
- **Link an issue** for anything non-trivial, so the change has context.

## A note for AI agents

If you are an agent opening a PR in this repository, these rules are binding.
Keep your change tightly scoped to a single concern. **If a change you're about
to make would violate anything in this document, stop and surface it to the
human instead of proceeding.**

## What gets closed

PRs that bundle multiple unrelated changes may be closed with a request to
split them into separate, tightly scoped PRs.


---

## SOURCE · `arena/01a060a3-skill:tools/openwiki/DEVELOPMENT.md`

<!-- blob: 0559d9004e96bb4a3c9ecc76a953f2a91051f296; bytes: 1428 -->

# Development

## Run Against Another Local Repo

Prerequisites:

- Node.js 20 or newer
- pnpm

Set up pnpm's global bin directory once if `pnpm link --global` has not worked
on this machine yet:

```sh
pnpm setup
```

Restart your shell, or source the profile file that `pnpm setup` changed. Then
set up and link this package:

```sh
cd /path/to/openwiki
pnpm install
pnpm run build
pnpm link --global
```

Run a dry test from the repo you want OpenWiki to inspect:

```sh
cd /path/to/target/repo
OPENWIKI_DEV=1 openwiki --dry-run
```

Run the real CLI from the target repo:

```sh
cd /path/to/target/repo
openwiki
openwiki -p "Summarize what you can do"
openwiki --modelId openai/gpt-5.5
openwiki "Please focus on API documentation"
```

The target repo is still the current working directory. The global link only
avoids typing the path to `dist/cli.js`.

If you do not want to configure pnpm globals, use a shell alias instead:

```sh
alias openwiki='node /path/to/openwiki/dist/cli.js'
```

That alias can go in `~/.zshrc` if you want it to persist.

After changing OpenWiki source code, rebuild from this package directory:

```sh
pnpm run build
```

The existing global link will keep using the rebuilt `dist/cli.js`.

Real runs can write:

- `openwiki/`
- `~/.openwiki/.env` for local OpenRouter model/key settings and optional LangSmith credentials

Scheduled update workflow example:

- `examples/openwiki-update.yml`


---

## SOURCE · `arena/01a060a3-skill:tools/openwiki/SKILL.md`

<!-- blob: 69335208e2f14f2478064076ae4947c55da24515; bytes: 1996 -->

---
name: openwiki
description: 使用仓库内固定版本的 LangChain OpenWiki CLI，为代码库生成和持续维护面向 Agent 的 Markdown Wiki、AGENTS/CLAUDE 入口、Mermaid 图与 OKF 文档。适用于代码库理解、架构文档、持续文档更新和 CI 文档任务。
---

# OpenWiki

工具源码固定在 `tools/openwiki/`。完整行为、提供商和连接器说明见 `tools/openwiki/README.md`，不要凭本入口猜测当前 CLI 参数。

## 适用任务

- 第一次为代码库建立 Agent 可读的结构化文档；
- 在代码变化后更新已有 `openwiki/`；
- 维护架构、CLI、集成、运行与评估说明；
- 生成 OKF 兼容 Markdown 和基于源码的 Mermaid 图；
- 在 GitHub Actions、GitLab CI 或 Bitbucket Pipelines 中定期更新文档。

不用于替代用户明确要求的单篇 README 改稿，也不应覆盖人工维护的项目事实。

## 本地准备

```bash
cd tools/openwiki
corepack enable
pnpm install
pnpm build
```

开发运行以该目录 `package.json` 中的 scripts 和上游 README 为准。模型凭证放在 OpenWiki 指定的用户环境文件或 CI secrets 中，绝不能提交到本仓库。

## 工作流

1. 阅读目标代码库的 `AGENTS.md`、README 和现有文档约束；
2. 明确 wiki 的读者、范围、重点和禁止内容；
3. 在目标仓库初始化 OpenWiki，并把项目要求写入 `openwiki/INSTRUCTIONS.md`；
4. 运行生成或 update；
5. 查看真实 diff，核对架构事实、路径、链接和 Mermaid；
6. 运行目标项目测试或文档检查；
7. 只提交 OpenWiki 管理的区块和经过审阅的 wiki 变化。

## 约束

- OpenWiki 生成内容仍需人工/Agent 事实审查；
- 连接器配置只引用环境变量名，不写入原始 secret；
- 不删除现有文档中不由 OpenWiki 管理的内容；
- 更新时以当前源码为依据，不把旧 wiki 当成事实源；
- CI 使用固定版本，升级时先看上游 changelog 并重新验证。


---

## SOURCE · `arena/01a060a3-skill:tools/openwiki/evals/deepswe/README.md`

<!-- blob: 815c80f1d4eff238e8f30f4c0f20e913b6034b1e; bytes: 8949 -->

# DeepSWE OpenWiki evaluation

This harness runs a paired DeepSWE experiment with the same tasks, seed, model,
reasoning effort, attempts, and Harbor environment in both conditions:

- `baseline`: Codex receives only the DeepSWE task and repository.
- `openwiki`: the adapter restores or generates OpenWiki in an isolated clone,
  merges OpenWiki's managed instructions into the repository's root
  `AGENTS.md`, and copies both `AGENTS.md` and `openwiki/` into `/app` before the
  same Codex adapter solves the unchanged DeepSWE task. Codex automatically
  loads root `AGENTS.md`; the harness adds no treatment-only task prompt.

For reproducibility, the harness pins:

- DeepSWE commit `6db64a40f3318d8659238ff34a8cc4b491c49205`
- `harbor[langsmith]==0.20.0`
- `litellm==1.83.14`
- Codex CLI `0.144.6`
- the current OpenWiki checkout, packed locally for each treatment run

## Safety and isolation

DeepSWE's held-out `tests/` and `solution/` live only in a separate verifier
environment. OpenWiki runs against an isolated clone of `/app`, then the harness
copies the generated `openwiki/` and merged root `AGENTS.md` into the agent
repository. Those treatment files are hidden from Git status and excluded from
the verifier patch. Both conditions use the same compatibility path to capture
the base-to-final-HEAD diff for DeepSWE's verifier.

Credentials are injected at runtime by Harbor. They are never written into an
image, command argument, generated wiki, or result summary. Do not enable Harbor's
debug mode for credentialed runs.

Container networking is allowlisted to the package, model, and LangSmith hosts
needed by the run. Docker runs remove only inactive, label-verified Harbor trial
networks; they never perform a global network prune. Parallel agent setup uses a
3x timeout by default, configurable with `--agent-setup-timeout-multiplier`.
If `OPENAI_BASE_URL` uses another gateway, pass its hostname (not a URL) with
`--allow-host gateway.example.com`. The separate verifier environment remains
offline.

## Requirements

- Python 3.12 (Harbor's supported runtime; selected explicitly through `uvx`)
- `uv`/`uvx`
- `pnpm`
- Docker for local runs, or a configured Modal account
- `OPENAI_API_KEY` available in the process environment or an env file passed
  by path with `--env-file`
- `LANGSMITH_API_KEY` available the same way

The project does not add Harbor as a package dependency; `uvx` downloads the
pinned runner and LangSmith extra into its tool cache.

Run the harness tests in that same pinned environment:

```bash
uvx --python 3.12 --from 'harbor[langsmith]==0.20.0' \
  --with 'litellm==1.83.14' \
  python -m unittest discover -s evals/deepswe/tests -p 'test_*.py'
```

## LangSmith datasets, experiments, and traces

Every evaluation uses Harbor's official `langsmith` plugin. Baseline and
OpenWiki jobs share the default `deepswe-openwiki-6db64a40f331` dataset but
create separate experiments named from their Harbor jobs. Ambient experiment
overrides are cleared so the conditions cannot merge accidentally. See the
official
[LangSmith Harbor integration](https://docs.langchain.com/langsmith/harbor-integrations)
for the resulting run and feedback schema.

The local plugin shim sends only bounded verifier rewards as LangSmith feedback,
rounding scores to four decimal places. DeepSWE count metrics remain in local
trial outputs instead of being sent as invalid scores.

Each experiment includes trial phases, verifier/error feedback, and reported
token and cost usage. OpenWiki generation traces are routed to the treatment
experiment. Codex CLI does not emit native LangSmith LLM/tool spans, but Harbor
records its agent phase and ATIF trajectory totals.

Use `--langsmith-dataset NAME` to override the shared dataset. Self-hosted or
multi-workspace LangSmith installations can also use `--langsmith-endpoint URL`
and `--langsmith-workspace-id ID`. Dataset sync and fail-fast behavior are
always enabled so a run cannot silently omit its LangSmith evaluation record.

## Commands

Inspect both commands without downloading tasks, building images, or calling a
model:

```bash
python3 evals/deepswe/run.py paired --n-tasks 2 --dry-run
```

Prepare the pinned DeepSWE checkout and pack the current OpenWiki source:

```bash
python3 evals/deepswe/run.py prepare
```

Run only the baseline:

```bash
source ~/.zshrc && python3 evals/deepswe/run.py baseline \
  --n-tasks 10 \
  --seed 0 \
  --model openai/gpt-5.6-terra \
  --reasoning-effort high
```

Run only the OpenWiki condition:

```bash
source ~/.zshrc && python3 evals/deepswe/run.py openwiki \
  --n-tasks 10 \
  --seed 0 \
  --model openai/gpt-5.6-terra \
  --openwiki-model gpt-5.6-terra \
  --reasoning-effort high
```

Generated task wikis are cached on the host in
`evals/deepswe/.cache/openwiki-wikis`. The key includes the task repository's
base commit, the normalized OpenWiki package contents, and the OpenWiki model,
so unchanged reruns restore the same wiki instead of regenerating it. Use
`--openwiki-cache-dir PATH` to select another persistent cache location. The
first cache-aware run for a commit still generates and populates the cache.
By default, a package update may also reuse an older cache whose validated
`openwiki/.last-update.json` records the exact same task commit and model. Pass
`--no-reuse-compatible-wiki-cache` to disable that lookup. Pass
`--require-openwiki-cache` to fail before any wiki-generation model call on a
cache miss; use this for controlled reruns where wiki Markdown must stay fixed.

Run both paired conditions and summarize them:

```bash
source ~/.zshrc && python3 evals/deepswe/run.py paired \
  --run-name pilot-01 \
  --n-tasks 10 \
  --seed 0 \
  --model openai/gpt-5.6-terra \
  --openwiki-model gpt-5.6-terra \
  --reasoning-effort high
```

Use `--task '<glob>'` to select tasks, `--attempts` for repeated trials,
`--concurrency` for parallel trials, and `--environment modal` for hosted runs.
Seeded sampling selects one exact task list for both paired arms.

### Named OpenWiki task suites

Use `--task-suite` for the exact, reproducible OpenWiki cohorts. A suite
selects all of its members regardless of `--n-tasks` and cannot be combined
with `--task`:

```bash
# Existing fast iteration set: the five Koota tasks
python3 evals/deepswe/run.py paired --task-suite koota-5

# Broader set: the five Koota tasks plus 15 independent repositories
python3 evals/deepswe/run.py paired --task-suite openwiki-20

# Documentation-leverage set: ten cross-surface tasks from independent cohorts
python3 evals/deepswe/run.py paired --task-suite openwiki-doc-leverage-10
```

`koota-5` is the small iteration suite, `openwiki-20` is the broader
cross-repository suite, and `openwiki-doc-leverage-10` contains disjoint tasks
whose ownership and behavior span multiple runtime, serialization, integration,
CLI, SDK, or delivery surfaces. The exact members are pinned in `run.py`.

When the packed OpenWiki checkout exposes `openwiki-retrieval-mcp`, treatment
runs register it inside Codex's isolated home. This capability check keeps the
eval harness runnable against `main` and earlier OpenWiki revisions that do not
yet ship retrieval tools; those revisions still receive their generated wiki
and root `AGENTS.md` without an MCP server.

When available, retrieval provides read-only `search` and `change_surface`
workflows over `/app` and `/app/openwiki`. Local vectors are the default; pass
`--retrieval-embedding-provider openai` to opt into hosted reranking.

If runs already exist, summarize them without invoking Harbor:

```bash
python3 evals/deepswe/run.py summarize --run-name pilot-01 --seed 0
```

## Outputs and interpretation

Harbor writes raw jobs to `evals/deepswe/results/`. The harness writes aggregate
JSON and trial-level CSV files to `evals/deepswe/summaries/`, including:

- binary reward and exception type
- input, cached, and output tokens used by Codex
- Codex cost
- agent and total wall-clock time
- OpenWiki generation wall-clock time

Efficiency should be compared among successful trials as well as across all
trials. A faster failure is not an efficiency improvement.

OpenWiki's current CLI does not expose generation token usage to Harbor's local
summary, so treatment summaries include its wall-clock time but not its tokens
or provider cost. Its LangSmith generation traces in the same experiment provide
generation-token details.

To measure direct treatment overhead after a run, use:

```bash
python3 evals/deepswe/analyze_openwiki_usage.py \
  --job-dir evals/deepswe/results/<openwiki-job>
```

The analyzer separately reports OpenWiki MCP calls, shell reads under
`openwiki/`, serialized tool-call and result characters at four characters per
token, and one automatic inclusion of the managed OpenWiki `AGENTS.md` block.
It also reports token/tool totals after subtracting that estimated direct
overhead. It does not estimate repeated cached-context amplification.


---

## SOURCE · `arena/01a060a3-skill:tools/openwiki/evals/ledger/README.md`

<!-- blob: 037af6f42e1dea530d35961c3a4ecf763894dad9; bytes: 9883 -->

# LEDGER 🧪

LEDGER (Longitudinal Evaluation of Documentation Grounding, Evolution, and
Revision) is a source-grounded framework for evaluating whether generated
knowledge artifacts remain accurate and current as their underlying source of
truth evolves. The current adapter replays Git checkpoints, runs OpenWiki, and
evaluates each frozen wiki snapshot.

LEDGER reports the state of every current factual claim in the wiki.

## Claim state

At each checkpoint the evaluator reads every generated Markdown document, splits
it into text units, and extracts atomic factual claims. Navigation, opinions,
instructions, wiki self-description, and other non-factual material produce no
claims. Explicit historical narration remains in the audit record but is excluded
from the headline snapshot metric.

Each current-tense claim ends in exactly one state:

| State        | Meaning                                                                                                              |
| ------------ | -------------------------------------------------------------------------------------------------------------------- |
| `supported`  | Current source evidence establishes the claim.                                                                       |
| `stale`      | Current source contradicts the claim and historical source establishes that it was formerly true.                    |
| `invented`   | Current source contradicts the claim and historical source does not establish it. The CLI calls this `hallucinated`. |
| `unverified` | The supplied evidence neither establishes nor contradicts the claim.                                                 |

All four rates use the same denominator:

```text
current claims = supported + stale + invented + unverified

supported rate     = supported / current claims
staleness rate     = stale / current claims
hallucination rate = invented / current claims
unverified rate    = unverified / current claims
```

Each checkpoint recomputes this partition from the entire current wiki; it is not
a delta or an average of earlier checkpoints. When at least one current claim
exists, the unrounded rates sum to 100% (whole-number CLI rounding may not). A
claim-free wiki reports zero for all four rates. `Unverified` is not treated as a
factual error; it is the audit worklist and confidence boundary around the known
results.

### Claim evaluation pipeline

```text
all generated Markdown
        │
        ▼
classify every text unit and extract atomic claims with exact artifact quotes
        │
        ▼
remove normalized exact duplicates
        │
        ▼
match claim prose to evaluator-only evidence-map concepts
        │
        ▼
resolve mapped paths/symbols/globs to raw source and add bounded fallback evidence
        │
        ▼
supported / contradicted / not addressed
        │
        ├ contradicted → check distinct historical evidence
        │                  ├ formerly true → stale
        │                  └ not established → invented
        └ not addressed → unverified
```

Source evidence contains a tracked-file manifest plus bounded text chunks from
every tracked, regular, non-binary Git file except the generated `openwiki/`
artifact. Symlinks are skipped. Current evidence comes from the active
checkpoint; evidence captured at every earlier checkpoint is marked historical.

Benchmarks may also provide a reviewed semantic evidence map. Each entry names a
natural-language topic and the source locations capable of establishing or
refuting claims about that topic:

```json
{
  "id": "queue-ordering",
  "concept": "task queue insertion, ordering, and removal behavior",
  "evidence": [
    "src/queue.ts#enqueue",
    "src/queue.ts#dequeue",
    "src/worker.ts#runWorker"
  ]
}
```

The map is evaluator-only routing metadata, never input to OpenWiki and never a
statement of expected truth. BM25 matches wiki prose to the map's prose concepts,
where lexical retrieval is appropriate; selectors then resolve deterministically
to raw source. V1 supplies the complete owning file for `path#symbol` selectors
so the judge sees surrounding context. Exact paths and path globs are also
supported. A coding agent can draft the map from the benchmark trace, followed by
a quick review that concepts describe topics and locations rather than expected
answers.

Current claims are grounded against current evidence first; historical snapshots
cannot crowd current truth out of the retrieval window. A named source path is
always included, routed evidence-map files are mandatory, and a claim naming a
missing file receives the complete tracked-file manifest. Small corpora are
supplied in full. Larger corpora retain mandatory routed evidence and use direct
source BM25 to fill a minimum eight-excerpt candidate set within a soft character
budget. A claim that matches no map entry therefore retains the prior exhaustive-
when-small and bounded-BM25-when-large behavior. Byte-identical historical
excerpts are deduplicated, and historical evidence is consulted only after
current source establishes a contradiction. Every matched route ID, selector,
resolved source path, selected evidence identity, cache hit, and historical
follow-up is preserved in the assertion inventory. Routing is deterministic and
adds no evaluator model calls.

## Benchmark contract

A benchmark contains a source-of-truth Git history, an ordered set of pinned
checkpoints, an author-declared difficulty, and optionally a reviewed semantic
evidence map. The checked-in calc and taskflow benchmarks both include maps.

Map concepts should identify a fact category, never supply its conclusion. For
example, use `task queue insertion, ordering, and removal behavior`, not `tasks
are removed FIFO`. Include every source location capable of supporting or
refuting that category. Selectors may refer to symbols that exist only at some
checkpoints; unresolved selectors are ignored at checkpoints where that source
is absent. Multiple matched entries are unioned before grounding.

Each normalized claim retains an exact contiguous quote plus its complete
artifact text unit, path, and heading context. Grounding checks that provenance
before judging source truth, so a dropped qualifier, broadened table row,
misread conceptual diagram, or historical passage mislabeled as current becomes
`unverified` instead of a false stale or hallucinated result. Non-verbatim
extractor quotes are rejected and repaired before grounding.

Evaluator failures do not abort the run. A claim-grounding judgment that remains
invalid after isolated repair falls back to `unverified`; a failed extraction
unit contributes no claims. Both cases lower the separately reported evaluator
completeness rate and remain visible as warnings in the audit report.

## LEDGER score

The run-level score is opportunity-weighted claim health across the trace:

```text
claim health = supported current claims / all current claims across checkpoints
LEDGER score = claim health
```

Stale, hallucinated, and unverified claims all lower claim health because they
remain in its denominator. The score does not measure whether the wiki covers
every important source topic; that limitation remains explicit.

## CLI output

```text
┌ 🧪 LEDGER · taskflow · hard
│ 5 checkpoints · anthropic · system claude-opus-4-8 · evaluator claude-opus-4-8
│ 📦 Replay workspace ready
│
├ 📍 1/5 · T0 · 3f2a1b9 · baseline API
│ 🤖 OpenWiki init complete · 5.4s · 12 documents
│ 📊 35 claims
│    supported 91% (32) · stale 0% (0) · hallucinated 3% (1) · unverified 6% (2)
│
├ 📍 2/5 · T1 · a7c40e2 · RedisStore + retry API
│ 🤖 OpenWiki update complete · 6.8s · 14 documents
│ 📊 50 claims
│    supported 88% (44) · stale 4% (2) · hallucinated 2% (1) · unverified 6% (3)
│
├ 🔬 Details → evals/ledger/.results/taskflow-…/report.md
└ ✅ LEDGER score 89% · 2m 11s
```

The displayed claim count is the shared snapshot denominator: distinct current-
tense claims after exact deduplication. Individual claims, citations, evaluator
warnings, and stale lifetimes are kept in `report.md`, `result.json`, the
assertion inventories, evidence snapshots, and, when current unverified claims
exist, `unverified-claims.md`.

Pass `--verbose` to print every stale and hallucinated claim beneath the
checkpoint that produced it. The default output retains only percentages and
counts. A nonzero rate below one percent is displayed as `<1%` rather than being
rounded down to `0%`.

While evaluation is active, the spinner reports phase-specific completion:

```text
│ ⠼ 🔍 Extracting claims · 44%
│ ⠼ 🔍 Grounding 35 claims · 49%
```

Extraction advances by classified text units. After extraction, grounding
progress advances through distinct-claim judgments, so 100% means the checkpoint
evaluation is genuinely complete.

## Running

```bash
OPENWIKI_PROVIDER=anthropic \
LEDGER_EVALUATOR_MODEL_ID=claude-sonnet-5 \
pnpm run eval:ledger -- --benchmark evals/ledger/benchmarks/taskflow
```

Provider credentials use the same environment configuration as OpenWiki. Add
`--system-model <id>` or `--evaluator-model <id>` to override either model, and
`--verbose` to print every stale and hallucinated claim.

Re-evaluate a completed run without invoking OpenWiki again:

```bash
OPENWIKI_PROVIDER=anthropic \
LEDGER_EVALUATOR_MODEL_ID=claude-sonnet-5 \
pnpm run eval:ledger:reevaluate -- \
  --benchmark evals/ledger/benchmarks/taskflow \
  --run evals/ledger/.results/taskflow-<timestamp>
```

Useful validation commands:

```bash
pnpm run eval:ledger:typecheck
pnpm exec vitest run evals/ledger
```

Live evaluator calibration is opt-in through `LEDGER_LIVE=1`. The normal suite is
offline and substitutes deterministic evaluator and system implementations.


---

## SOURCE · `arena/01a060a3-skill:tools/openwiki/evals/ledger/meta/README.md`

<!-- blob: b1a629b7c7cacf8e12064324b7ea59adfa82181e; bytes: 835 -->

# Evaluator meta-evaluation

The gold-agreement gate measures the extraction/classification and source-grounding
judges against human-reviewed cases. Every stage must achieve at least 0.90
agreement in the optional live-model tier.

A miss below the floor is tolerated as measurement error. The only sanctioned
responses are:

1. add the missed boundary case to the gold fixture; and
2. improve the applicable prompt globally, then rerun the entire gold set.

Never add a code-side regex, token list, fixture name, or other special case for
one judge miss.

Claim-state mutations are covered by the metrics and evaluator tests: supported,
stale, hallucinated, and unverified current claims must remain a complete,
single-denominator partition. Forgetting behavior is tested separately against
the deterministic obsolete-API watch set.


---

## SOURCE · `arena/01a060a3-skill:tools/openwiki/openwiki/INSTRUCTIONS.md`

<!-- blob: 3644da2ab95ba46560f3f031f03a900caf12dd8c; bytes: 736 -->

---
type: Repository guide
title: Repository Wiki Instructions
description: Guidance for creating and maintaining a practical code wiki for the local repository, including required coverage and source-grounded engineering documentation.
tags: [documentation, repository, code-wiki]
---

A code wiki for this local repository. Prioritize a concise quickstart, architecture overview, source map, key workflows, domain concepts, operations/runbook notes, testing guidance, and integration points. Inspect git history to understand reasoning behind code changes and the progression of the repository. Keep pages grounded in the repository structure and recent code changes. Prefer practical navigation for engineers over generic summaries.


---

## SOURCE · `arena/01a060a3-skill:tools/openwiki/openwiki/agent/index.md`

<!-- blob: 0609948869a6726378ee4cfa3f2fc5db99346ed6; bytes: 310 -->

# Files

- [Agent workflow](workflow.md) - Explains the OpenWiki documentation agent's command flow, provider and model setup, prompting rules, and update metadata behavior. Documents the agent's Git-grounded workflow, content snapshot safeguards, and source implementation map for maintaining agent behavior.


---

## SOURCE · `arena/01a060a3-skill:tools/openwiki/openwiki/agent/workflow.md`

<!-- blob: 61e86b36941e33a8a66298b25941d109ee33863c; bytes: 29945 -->

---
type: Technical documentation
title: Agent workflow
description: Explains the OpenWiki documentation agent's command flow, provider and model setup, prompting rules, and update metadata behavior. Documents the agent's Git-grounded workflow, content snapshot safeguards, and source implementation map for maintaining agent behavior.
tags: [agent, workflow, documentation, providers, update-metadata]
---

# Agent workflow

The documentation agent is implemented in `src/agent/`. It takes a command (`chat`, `init`, or `update`), gathers repository context, builds prompts, runs a DeepAgents session, and records successful update metadata — but only if the documentation content actually changed.

## Main flow

`src/agent/index.ts` follows this sequence for non-chat runs:

1. Load `~/.openwiki/.env` into `process.env`.
2. Resolve the provider via `resolveConfiguredProvider()` and ensure the provider's API key exists.
3. Resolve the model ID from CLI input, `OPENWIKI_MODEL_ID`, or the provider's default model, then validate the selected model's availability against the provider's catalogue via `getSelectedModelAvailability()` in `src/model-availability.ts`. For the `openai` provider (with an API key and the default OpenAI endpoint), this queries `GET https://api.openai.com/v1/models` and aborts the run with a clear message when the model is `unavailable`; a `unknown` result (non-OpenAI providers, custom OpenAI-compatible endpoints, a missing API key, or a lookup failure) is logged to the debug stream and proceeds to inference.
4. Create a run context from prior update metadata, persisted language, and the wiki brief. `createRunContext()` in `src/agent/utils.ts` no longer builds a Git summary: the agent runs `git` itself during the run per the prompt's Git-history instructions (the update prompt tells it to run `git rev-parse HEAD`, `git log <gitHead>..HEAD --name-status --oneline`, and `git diff` to scope changes). `RunContext` carries `lastUpdate`, `language`, and `wikiGoal` only.
5. Snapshot the current `openwiki/` content hash (before the run).
6. Build the system prompt and user prompt. `createSystemPrompt()` and `createUserPrompt()` in `src/agent/prompt.ts` select a prompt template by output mode — `CODE_SYSTEM_PROMPTS`/`CODE_USER_PROMPTS` from `src/agent/prompts/code.ts` for repository runs, `PERSONAL_SYSTEM_PROMPTS`/`PERSONAL_USER_PROMPTS` from `src/agent/prompts/personal.ts` for local-wiki runs — then substitute placeholders for language, Git-history hint, discovery instruction, `.openwikiignore` instructions, and runtime context. The user prompt's runtime context block (`{RUNTIME_CONTEXT}`) is produced by `formatRuntimeContext()` and carries the runtime root label and path (the `formatRuntimeRootInstruction()` helper moved here from `index.ts`).
7. Create the provider-specific model client (`ChatAnthropic`, `ChatOpenRouter`, or `ChatOpenAI`).
8. Create a DeepAgents `LocalShellBackend` rooted at the repository with a SQLite checkpointer, wrap it in a `CompositeBackend` via `createAgentBackend()` (an `OpenWikiCompositeBackend` subclass that turns a `RangeError` from an over-broad `glob` into a tool error rather than crashing the run), then attach OKF index middleware (`src/agent/okf-middleware.ts`) and translation middleware (`src/agent/translation-middleware.ts`). The `/conversation_history/` mount routes the DeepAgents summarization middleware's history offload to `~/.openwiki/conversation_history` so it succeeds even on docs-only runs (without it, the docs-only guard refuses the offload and summarization silently degrades — #496). `AGENT_FILESYSTEM_PERMISSIONS` denies the model's own writes to both `/skills/**` and `/conversation_history/**`. For `init` repository runs, the agent graph also registers init-only subagents (see [Init subagents](#init-subagents)). The OKF middleware migrates front matter before the agent runs, validates writes, and synchronizes `index.md` files after; its finalize stage also validates Mermaid fences and internal wiki links via `src/agent/wiki-link-validator.ts`, stamping broken links inline rather than aborting the run so a later update can repair them. The translation middleware translates eligible pages when the output language has changed.
9. Stream messages and tool events back to the CLI. The run now consumes the graph with `agent.stream(input, { streamMode: ["messages", "tools"], subgraphs: true })` rather than the older `streamEvents` v3 protocol. `parseAgentStreamChunk()` in `src/agent/index.ts` normalizes each `[namespace, mode, payload]` chunk into an `OpenWikiRunEvent`: `tools`-mode chunks become tool start/end events, `messages`-mode chunks become text events with `source: "main"` when the namespace is a single segment or `source: "subgraph"` when deeper (task output). `extractMessageText()` filters out non-text content blocks — `tool`, `reasoning`, `file`, and `image` types — so raw base64 payloads from file/image blocks never leak into the terminal output. A `scheduler.yield()` between chunks lets Ink paint streamed text before the async iterator advances. (`parseStreamEvent()` is retained for the public agent factory's Agent Protocol event shape, but the live run uses `parseAgentStreamChunk()`.) Before iterating, the runtime calls `registerActiveRun()` from `src/agent/crash-guard.ts` with the command, cwd, model id, output mode, pre-run snapshot, and language, so a rejection that escapes the for-await catch (e.g. a subagent error surfacing on the microtask queue) is still attributed; `clearActiveRun()` runs in the `finally`.
10. For `init` and `update`, compare the post-run content snapshot to the pre-run snapshot. Write `openwiki/.last-update.json` **only if the content changed** — or if the previous run was interrupted and this run completed, to clear the stale status. If the run fails mid-stream, the catch block writes metadata with `status: "interrupted"` so the next update retries instead of skipping as a no-op. After the run (success or failure), `recordRunSafe()` in `src/telemetry/` emits a single `openwiki_run` PostHog event with mode, provider, outcome, and latency. A rejection that escapes every catch is caught by the process-wide crash guard (see [Crash guard](#crash-guard)).

Chat runs skip metadata writes entirely.

## Provider-specific model creation

`createModel()` in `src/agent/index.ts` branches by provider:

- **gemini**: `new ChatGoogle({ apiKey, model, platformType: "gai" })` — uses the Gemini API key against Google AI Studio. Includes Gemini 3.x thought-signature round-trip options.
- **gemini-enterprise**: calls `createGeminiEnterpriseModel()`, which routes by model family via `resolveVertexSurface()` in `src/agent/vertex-surface.ts`. Claude models → `ChatAnthropic` with a custom `AnthropicVertex` client (`@anthropic-ai/vertex-sdk`, ADC-authenticated, env neutralized around the constructor so a stray `ANTHROPIC_API_KEY` cannot clobber the Google OAuth token). Partner/open-weight models (Llama, Mistral, DeepSeek, Qwen) → `ChatOpenAI` against Vertex's OpenAI-compatible MaaS endpoint with a per-request ADC auth fetch. Gemini/Gemma models → `ChatGoogle` with ADC and `apiKey: ""` to block `GOOGLE_API_KEY` fallback. Auth is uniform Google ADC; `GOOGLE_CLOUD_PROJECT` is required and `GOOGLE_CLOUD_LOCATION` is optional (defaults to `global`).
- **anthropic**: `new ChatAnthropic(modelId, { apiKey, anthropicApiUrl? })` — uses `@langchain/anthropic` directly. When `ANTHROPIC_BASE_URL` is set, the resolved alternative base URL is passed as `anthropicApiUrl` so requests can be routed to a self-hosted or proxied Anthropic-compatible endpoint instead of the default API.
- **openai-chatgpt**: `new ChatOpenAI({ apiKey: tokens.access, model, useResponsesApi: true, zdrEnabled: true, streaming: true, configuration: { baseURL: CODEX_RESPONSES_BASE_URL, defaultHeaders, fetch } })` — uses ChatGPT OAuth tokens instead of an API key. Tokens are refreshed before model creation via `ensureFreshChatGptTokens()` in `src/agent/openai-chatgpt-oauth.ts`. The Codex backend requires `store: false` (`zdrEnabled`) and streaming for all requests. If tokens are missing, the run aborts with a clear message directing the user to sign in.
- **openrouter**: `new ChatOpenRouter({ apiKey, baseURL, model, ...(maxTokens !== undefined ? { maxTokens } : {}), siteName: "OpenWiki" })` — uses the selected OpenRouter model directly. When `OPENWIKI_OPENROUTER_MAX_TOKENS` is set to a positive integer (resolved by `resolveOpenRouterMaxTokens()` in `src/config/constants.ts`), the cap is passed as `maxTokens` so OpenRouter's credit pre-check budgets against the cap rather than the model's full advertised output ceiling; without a cap, a low credit balance makes every request fail with a 402.
- **bedrock**: `new ChatBedrockConverse({ credentials: { accessKeyId, secretAccessKey }, model, region })` — uses `@langchain/aws` Bedrock Converse API with AWS credentials and a required region.
- **openai**: `new ChatOpenAI({ apiKey, model, useResponsesApi: true })` — uses OpenAI's Responses API for official OpenAI calls.
- **copilot**: `new ChatOpenAI({ apiKey, configuration: { baseURL? }, model, useResponsesApi: /^gpt-5/u.test(modelId) })` — uses the GitHub Copilot API endpoint. The API key is resolved before model creation via `resolveExternalCliCredential()` in `src/auth/external-cli-auth.ts`, which runs `gh auth token` and injects the credential into `process.env` for the current process only (never written to `~/.openwiki/.env`). For CI, `COPILOT_API_KEY` can be set directly to a GitHub OAuth token. The `responsesApi` setting is a regex so GPT models use the Responses API while Claude/Gemini models use standard chat completions. The `--hostname` flag matches the base URL tenant (for GHE.com data-residency hosts).
- **baseten / fireworks / nebius / nvidia / openai-compatible**: `new ChatOpenAI({ apiKey, configuration: { baseURL? }, model })` — OpenAI-compatible clients using the provider's base URL when configured. The `openai-compatible` provider has no default endpoint; its base URL is user-supplied via `OPENAI_COMPATIBLE_BASE_URL` and required (`requiresBaseUrl: true`), which lets OpenWiki target any OpenAI-compatible gateway (for example a LiteLLM gateway fronting upstream providers).

Base URLs are resolved through `resolveProviderBaseUrl()` in `src/config/constants.ts`, which prefers a provider's alternative base URL environment variable (`baseUrlEnvKey`) over the built-in default before falling back to the SDK's own default endpoint. Providers marked `requiresBaseUrl` are validated at startup by `ensureProviderBaseUrl()`.

Provider retry attempts are resolved through `resolveProviderRetryAttempts()` and passed to the LangChain model client's `maxRetries` option. The value is the number of retries after the first provider request; unset values default to 3 retries.

## Prompting strategy

`src/agent/prompt.ts` is the prompt assembler. It selects a template by output mode and substitutes placeholders; the prompt text itself lives in two sibling modules so the long product rules are kept out of the assembler:

- `src/agent/prompts/code.ts` — `CODE_SYSTEM_PROMPTS` / `CODE_USER_PROMPTS` for repository (`code`) runs. The `init` template drives a structured init workflow: build a `/openwiki/_skeleton.md` inventory, invoke the `skeleton_critic` subagent, resolve every requested change, fill the wiki, then verify with the `wiki_question_finder` and `wiki_answer_verifier` subagents, and finally write `quickstart.md`. The `update` template is the maintenance-update run contract (this wiki's own update prompt is the `CODE_USER_PROMPTS.update` template). The `chat` template steers wiki-first question answering.
- `src/agent/prompts/personal.ts` — `PERSONAL_SYSTEM_PROMPTS` / `PERSONAL_USER_PROMPTS` for `local-wiki` (personal brain) runs, including the canonical-file discipline (`/open-questions.md`, `/themes.md`, `/commitments.md`, `/personal-logistics.md`, `/sources/<connector>.md`) and contested-knowledge handling.

`createSystemPrompt()` substitutes `{OUTPUT_LANGUAGE_INSTRUCTIONS}`, `{GIT_HISTORY_HINT}`, `{DISCOVERY_INSTRUCTION}`, and `{OPENWIKIIGNORE_INSTRUCTIONS}`. For non-chat commands it appends link-integrity instructions. `createUserPrompt()` substitutes `{USER_MESSAGE}`, `{WIKI_GOAL}`, `{LAST_UPDATE}`, `{ADDITIONAL_USER_REQUEST}`, and `{RUNTIME_CONTEXT}` (the runtime context block, produced by `formatRuntimeContext()` in `prompt.ts`, carries the runtime root label and the `formatRuntimeRootInstruction()` path note).

The prompts instruct the agent to:

- inspect the current codebase and write documentation under `openwiki/`,
- use filesystem discovery tools and git history rather than inventing facts,
- keep the initial wiki focused and navigable,
- avoid thin/slim pages — merge stubs into broader pages rather than creating many small directories,
- document the repository for both humans and future agents,
- respect the repository root as the only project in scope,
- avoid reading secrets or `.env` files,
- use git history for init and update runs,
- respect the temporary plan file and update metadata requirements,
- ensure top-level `/AGENTS.md` and/or `/CLAUDE.md` reference the OpenWiki quickstart (inserting or refreshing a standardized section).

The user prompt changes with the command:

- `init` includes the current Git summary and asks for fresh documentation.
- `update` includes last update metadata and a Git change summary.
- `chat` just forwards the user message.

### Local brain open questions

Local brain runs use `~/.openwiki/wiki/open-questions.md` as a compact queue for uncertainty about the user's wiki or core memory model, not as a place to copy unresolved questions from every source document. Good open questions are things that would impair future assistance, such as unclear recurring routines, missing locations, uncertain preferences, ambiguous people/org relationships, or contradictions between sources.

Do not add an open question merely because a Notion spec, meeting note, email thread, or source page contains open product/design questions. Keep those on source pages, `themes.md`, or `commitments.md` unless they are explicitly owned by the user or reveal a gap in the user's memory graph. Group similar questions under one topic key instead of creating many same-project entries.

The file should use three sections:

- `Active`: unresolved questions with `Owner`, `Seen`, `Evidence`, and optional `Notes`.
- `Answered`: previously open questions with `Evidence` linking to the canonical answer or source evidence, plus `Answered`.
- `Stale`: dropped questions with `Why` and `Last seen`.

The agent should read `open-questions.md` at the start of each local-wiki run when it exists, use the run's evidence to answer known questions, and return to the file at the end to add new unresolved questions or move answered ones out of `Active`. Answered entries should link to the answer evidence rather than duplicating an answer summary that can drift.

### Local brain themes

Local brain runs use `themes.md` as a compact trend index, not as a narrative page. Prefer a Markdown table with `Topic key`, `Theme/Signal`, `First seen`, `Last seen`, `Confidence`, `Sources`, `Evidence count`, `Status`, and `Evidence`. If a table is too cramped, use one short fielded entry per theme.

Each theme should have at most 1-2 short sentences of prose. Keep detailed examples, long context, source-specific item lists, and tweet/feed clusters in `sources/<connector>.md`, then link to that evidence from the theme row. Watchlist entries should be especially terse.

### Local brain commitments and logistics

Local brain runs use `commitments.md` for work commitments, follow-ups, approvals, deadlines, and scheduled work items. Entries should include `Owner` when inferable from evidence: `me`, `team`, `other:<name>`, or `unknown`.

Use `personal-logistics.md` for non-work personal items such as appointments, pickups, travel, household tasks, and life-admin deadlines. Personal logistics should not be mixed into `commitments.md` unless they are also work commitments.

## Git evidence and update metadata

The run context built by `createRunContext()` in `src/agent/utils.ts` carries `lastUpdate`, `language`, and `wikiGoal` only. It no longer precomputes a Git summary: since the prompt refactor, the agent runs `git` itself during the run. The `CODE_SYSTEM_PROMPTS.update` template instructs the agent to run `git rev-parse HEAD`, read `/openwiki/.last-update.json`, then `git log <gitHead>..HEAD --name-status --oneline` (or recent history when no prior `gitHead` exists) and the relevant diff to scope the update. `.openwikiignore` exclusions are enforced by the filesystem backend rather than by pre-filtering a git summary.

On successful init/update runs where content changed, the agent writes JSON metadata with:

- `updatedAt`
- `command`
- `gitHead`
- `model`
- `status` — `"complete"` (default) or `"interrupted"`

That metadata is later used to scope update runs. When a run fails mid-stream, the catch block in `src/agent/index.ts` calls `persistRunMetadataIfChanged()` with `status: "interrupted"`, so already-generated content stays diffable. A rejection that escapes every catch is caught by the process-wide [crash guard](#crash-guard), which records the failure and stamps the same interrupted status post-mortem. `getUpdateNoopStatus()` then sees the interrupted status and does not skip the next update — preventing a possibly partial wiki from being treated as current. Metadata without a `status` field (from older versions) is treated as `"complete"`. A completed retry that changes no content still rewrites metadata to clear the interrupted status.

### Content snapshot

`createOpenWikiContentSnapshot()` computes a SHA-256 hash of the entire `openwiki/` directory tree (excluding `.last-update.json`). The agent runtime takes a snapshot before and after the run. If they match — meaning the model made no documentation changes — the metadata file is not updated, unless the previous run was interrupted and this run completed, in which case metadata is rewritten to clear the stale `"interrupted"` status. This prevents scheduled update loops from churning the metadata when the wiki is already current while still recovering from failed runs.

## Init subagents

Repository `init` runs register two read-only DeepAgents subagents through `createOpenWikiAgentGraph()` in `src/agent/index.ts`, gated by `command === "init" && outputMode === "repository"`:

- **`skeleton_critic`** (`src/agent/skeleton_critic.ts`, `resolveSkeletonCriticSubagents()`): an independent coverage reviewer. After the main agent researches the codebase and writes `/openwiki/_skeleton.md`, it invokes this subagent, which maps the repository itself before reading the skeleton and returns either `PASS` or `CHANGES_REQUESTED` with evidence-backed gaps. The main agent creates one TODO per returned `RQ` item, resolves them, then re-invokes the critic exactly once with the prior-request ledger. A third invocation is not allowed; any still-unresolved item is addressed directly.
- **`wiki_question_finder`** and **`wiki_answer_verifier`** (`src/agent/wiki_qa_subagents.ts`, `resolveWikiQaSubagents()`): a QA pair. The finder inspects repository source and tests (never `/openwiki`) and returns at most ~10 source-grounded questions with stable IDs, acceptance criteria, and motivating evidence. The main agent groups questions that share wiki pages into batches of 2–3, launches all batches for a wave in one parallel tool-call message, and the verifier checks each batch using only `/openwiki`, returning `PASS`, `PARTIAL`, or `FAIL` per question. For `PARTIAL`/`FAIL` results the main agent updates the canonical wiki pages, then re-verifies only the failing IDs with the changed pages (no resent criteria). This runs after the wiki is written.

Both subagents are read-only: they never create, edit, move, or delete files. They surface to the agent graph through the `subagents` option of `createDeepAgent`, and their output streams back as `source: "subgraph"` text/tool events via `parseAgentStreamChunk()`.

## Crash guard

`src/agent/crash-guard.ts` is the last-resort handler for rejections and exceptions that bypass every catch in the run — notably a subagent rejection surfacing on the microtask queue during streaming, which escapes the for-await catch. `installCrashGuard()` (called once at CLI startup in `src/cli/cli.tsx`) registers idempotent `unhandledRejection` and `uncaughtException` handlers. `runOpenWikiAgentCore()` in `src/agent/index.ts` calls `registerActiveRun()` with the command, cwd, model id, output mode, pre-run snapshot, and language for exactly the stream-consumption window, and `clearActiveRun()` in the `finally`.

When a fatal signal fires with an active run, `handleFatal()` best-effort:

1. records the crash as a failure via `recordRunSafe()` so it appears in telemetry, classified by `describeErrorForTelemetry()` (a residual `agent_error` carries the innermost error's allowlisted name as its `error_detail`, the same fingerprint boundary as every other failure — see [Credentials and updates § Error classification and fingerprinting](../operations/credentials-and-updates.md#error-classification-and-fingerprinting));
2. stamps the run `interrupted` via `persistRunMetadataIfChanged()` so the next scheduled update retries instead of no-op'ing against a half-written wiki;
3. writes a local stderr line and, when `OPENWIKI_DEBUG` is set, the stack; then exits non-zero via `setImmediate`.

`handleFatal()` claims the active run synchronously, before step 1 and before any `await`: it calls `getActiveRun()` followed immediately by `clearActiveRun()` with no await between them. The installer fires one `void handleFatal(...)` per escaped rejection, and a burst of subagent rejections lands on the microtask queue together; reading and clearing with no await in between makes the claim atomic for the event loop, so the first handler owns the crash and every later handler sees `undefined` and only exits. Do not move any `await` above that pair — doing so reintroduces the race where every rejection records the same run and one crash produces hundreds of duplicate events (`test/agent/crash-guard.test.ts`, "a burst of concurrent fatal signals records the crash exactly once").

Each side effect is wrapped and swallowed independently so a failure in one never blocks the other or the exit. The guard is the post-mortem counterpart to the catch block's interrupted-stamp path described under [Git evidence and update metadata](#git-evidence-and-update-metadata).

## Model errors

The agent runtime uses only the selected provider and model for a run. Before model creation, `getSelectedModelAvailability()` in `src/model-availability.ts` validates the selected model against the provider's catalogue: for the `openai` provider with an API key and the default endpoint, it calls the OpenAI Models API and aborts with a clear "does not make model available" message when the model is `unavailable`; every other case (non-OpenAI providers, custom OpenAI-compatible endpoints, missing API key, or a failed lookup) resolves to `unknown` and proceeds, so a catalogue lookup failure never blocks inference. Transient request failures use the LangChain model client's retry handling, configurable with `OPENWIKI_PROVIDER_RETRY_ATTEMPTS`. If the selected provider/model still fails, OpenWiki surfaces the provider error and stops instead of retrying with another model.

## Why this matters

The agent is not just a generic chat wrapper. It is intentionally constrained so it can:

- write repository-local docs without wandering outside the repo,
- preserve continuity across runs via checkpointing and metadata,
- keep updates grounded in Git evidence,
- avoid metadata churn via the content-snapshot check,
- support both interactive and scheduled maintenance use cases.

The same agent runtime is the wiki-generation backend invoked by the [DeepSWE evaluation harness](../evals/deepswe-harness.md), which runs it in an isolated clone to produce treatment wikis for paired benchmark trials.

## Things to watch when changing agent behavior

- Keep the prompt templates in `src/agent/prompts/code.ts` and `src/agent/prompts/personal.ts` in sync with the actual filesystem tools and path conventions used by the CLI. The assembler in `src/agent/prompt.ts` only substitutes placeholders; behavior changes go in the templates.
- Be careful with `.last-update.json` semantics, because update runs use it to decide what changed since the previous successful run. The `status` field (`"complete"` / `"interrupted"`) gates the no-op skip: `getUpdateNoopStatus()` does not skip when the previous run was interrupted, and a completed retry clears the status even without content changes. Both the catch block and the [crash guard](#crash-guard) stamp interrupted; keep both in sync if metadata semantics change.
- The content-snapshot check means a no-op update will not update metadata. If you change the snapshot logic, ensure `.last-update.json` is still excluded.
- Credential loading happens before model resolution; changes there affect both onboarding and agent startup.
- When adding a provider, add a branch in `createModel()` and ensure the API key env key is checked in `ensureProviderKey()`. OAuth-based providers (like `openai-chatgpt`) skip `ensureProviderKey()` and instead require a token refresh step before `createModel()` is called. Providers without an API key (like `gemini-enterprise`) declare their required env keys (e.g. `projectEnvKey`) in `PROVIDER_CONFIGS` and are gated by `getMissingProviderEnvKey()` instead. External-CLI-auth providers (like `copilot`) declare `authMethod: "external-cli"` and an `externalCliAuthAdapter`; `resolveExternalCliCredential()` in `src/auth/external-cli-auth.ts` probes the CLI at startup and injects the token into `process.env` for the current process only. AWS SDK providers (like `bedrock`) declare `authMethod: "aws-sdk"` and delegate credential resolution to the AWS SDK chain, accepting standard AWS env vars, OIDC/web identity, IAM roles, or SSO profiles in addition to legacy Bedrock-specific keys.
- The DeepAgents backend is configured with `virtualMode: true`, which is important for documentation-only behavior. The custom `OpenWikiLocalShellBackend` in `src/agent/docs-only-backend.ts` adds docs-only write guards that restrict writes to the `openwiki/` directory in docs-only mode.
- `createAgentBackend()` wraps the wiki backend in an `OpenWikiCompositeBackend` (a `CompositeBackend` subclass) with `/skills/` and `/conversation_history/` mounts. The subclass overrides `glob` to convert a `RangeError` ("Maximum call stack size exceeded") from an over-broad pattern into a tool error so a runaway `**/*` glob no longer crashes the run (covered by `test/agent/conversation-history-offload.test.ts`). `CONVERSATION_HISTORY_MOUNT` must stay in sync with deepagents' hard-coded `/conversation_history` default (there is no override); a dependency bump that moves that default silently reintroduces #496, so the offload test suite includes a drift probe that drives the installed `createSummarizationMiddleware` against a recording backend. Both mounts are denied to the model's filesystem tools via `AGENT_FILESYSTEM_PERMISSIONS`; do not loosen those deny rules without closing the prompt-injection path they guard.
- The live run streams via `agent.stream({ streamMode: ["messages", "tools"], subgraphs: true })` and is normalized by `parseAgentStreamChunk()`. `parseStreamEvent()` remains for the public agent factory's Agent Protocol v3 event shape only — if you change streaming, update `parseAgentStreamChunk()` and `test/agent/stream-redaction.test.ts`, not the protocol parser.
- Connector tools are gated to personal/local-wiki runs: `createOpenWikiConnectorTools(options.outputMode)` returns `[]` for `repository` runs, so a code-mode run is never handed connector ingestion tools (which would otherwise throw on missing credentials and waste tokens). If you change that gating in `src/connectors/tools.ts`, update `test/connectors/raw-connector-tools.test.ts` ("connector tool run-mode gating (#444)").
- Init-only subagents are gated by `resolveSkeletonCriticSubagents()` and `resolveWikiQaSubagents()` (both `init` + `repository` only). Adding or changing the init verification loop means editing `src/agent/skeleton_critic.ts` / `src/agent/wiki_qa_subagents.ts` and the `CODE_SYSTEM_PROMPTS.init` template that drives them.
- The crash guard registers the active run only for the stream-consumption window; if you move streaming or add earlier fatal paths, ensure `registerActiveRun()`/`clearActiveRun()` still bracket the window a subagent rejection can escape through. Inside `handleFatal()`, the `getActiveRun()`/`clearActiveRun()` claim must stay synchronous (no `await` before or between them): it is the guard against a burst of escaped rejections producing one crash event rather than hundreds — asserted by `test/agent/crash-guard.test.ts` ("a burst of concurrent fatal signals records the crash exactly once").

## Source map

- `src/agent/index.ts`
- `src/model-availability.ts`
- `src/agent/prompt.ts`
- `src/agent/prompts/code.ts`
- `src/agent/prompts/personal.ts`
- `src/agent/skeleton_critic.ts`
- `src/agent/wiki_qa_subagents.ts`
- `src/agent/crash-guard.ts`
- `src/agent/utils.ts`
- `src/agent/types.ts`
- `src/agent/docs-only-backend.ts`
- `src/agent/openai-chatgpt-oauth.ts`
- `src/agent/okf-middleware.ts`
- `src/agent/wiki-link-validator.ts`
- `src/agent/translation-middleware.ts`
- `src/agent/vertex-surface.ts`
- `src/agent/skills.ts`
- `src/auth/external-cli-auth.ts`
- `src/config/constants.ts`
- `src/config/env.ts`
- `src/telemetry/`


---

## SOURCE · `arena/01a060a3-skill:tools/openwiki/openwiki/architecture/index.md`

<!-- blob: 938c9119a790bf7f8216a9c2c9f4d67d4ac1fe4a; bytes: 316 -->

# Files

- [OpenWiki Architecture Overview](overview.md) - Explains OpenWiki's layered CLI, agent, provider, connector, authentication, and ingestion architecture, including runtime execution and persistence. Identifies core source modules, extension points, and operational considerations for maintaining OpenWiki.


---

## SOURCE · `arena/01a060a3-skill:tools/openwiki/openwiki/architecture/overview.md`

<!-- blob: 224d5f5be9fb2795421f00865cb21ae6eef0ece9; bytes: 22789 -->

---
type: Architecture overview
title: OpenWiki Architecture Overview
description: Explains OpenWiki's layered CLI, agent, provider, connector, authentication, and ingestion architecture, including runtime execution and persistence. Identifies core source modules, extension points, and operational considerations for maintaining OpenWiki.
tags: [architecture, cli, agent, providers, connectors, ingestion]
---

# Architecture overview

OpenWiki has a small but layered architecture:

1. `src/cli/cli.tsx` is the process entrypoint: it loads env, parses argv, and dispatches to the Ink interactive app (`src/cli/app/app.tsx`) or the appropriate runner. The interactive app orchestrates runs, including auto-exit for init/update.
2. `src/cli/commands.ts` parses argv and defines help text and supported options, including `auth`, `ngrok`, `cron`, and `ingest` subcommands.
3. `src/setup/credentials.tsx` (thin re-export over `src/setup/credentials/` modules) manages interactive onboarding for provider selection, API keys, model selection, and optional LangSmith tracing.
4. `src/config/env.ts` reads and writes `~/.openwiki/.env` and surfaces credential diagnostics for all supported providers.
5. `src/agent/index.ts` runs the documentation agent, resolves the provider, creates the appropriate model client, collects Git context, and writes update metadata.
6. `src/agent/prompt.ts` builds the system and user prompts that tell the model how to behave.
7. `src/agent/utils.ts` gathers Git evidence, computes an OpenWiki content snapshot, and records `.last-update.json` after successful init/update runs.
8. `src/agent/docs-only-backend.ts` provides `OpenWikiLocalShellBackend`, extending DeepAgents `LocalShellBackend` with docs-only write guards and output-mode awareness.
9. `src/agent/openai-chatgpt-oauth.ts` implements the ChatGPT OAuth login flow, token persistence, and refresh for the `openai-chatgpt` provider.
10. `src/auth/` contains the connector OAuth system: `oauth.ts` (generic runner), `providers.ts` (provider configs), `configure.ts` (`openwiki auth configure`), `ngrok.ts` (Slack HTTPS tunnel), `tokens.ts` (refresh/validation), `oauth-discovery.ts` (OAuth endpoint validation and protected-resource metadata discovery), and `types.ts`.
11. `src/connectors/` contains the connector registry, MCP client/runtime, a shared resilient HTTP helper (`http.ts`), source-specific ingestion modules (git-repo, gmail, hackernews, slack, web-search, x), the generic `custom-mcp` MCP source, and tool definitions exposed to the agent.
12. `src/ingestion/ingestion.ts` orchestrates source ingestion runs across configured connectors.
13. `src/ingestion/code-mode.ts` handles `openwiki code` setup: creates a GitHub Actions workflow only when it does not already exist (so operator customizations survive `--update` runs), and refreshes AGENTS.md/CLAUDE.md snippets in place.
14. `src/config/constants.ts` centralizes provider configs, model options, environment keys, validation helpers, and the wiki directory names.
15. `src/agent/types.ts` defines shared types: `OpenWikiCommand`, `RunContext`, `UpdateMetadata`, and run option/event interfaces.

## Runtime shape

The CLI starts in `src/cli/cli.tsx`, parses the command, and then either:

- prints help and exits,
- opens the interactive chat UI,
- runs an init/update command against the current repository, or
- performs a dry-run in development mode.

For non-chat runs, the agent receives a `RunContext` carrying `lastUpdate`, `language`, and `wikiGoal`. The prompt templates instruct the agent to gather its own Git evidence during the run by running:

- `git rev-parse HEAD`
- `git log <lastHead>..HEAD --name-status --oneline` (update with a recorded `gitHead`)
- `git log --max-count=20 --name-status --oneline` (init, or update without prior metadata)
- `git log --since <updatedAt> --name-status --oneline` (update with only a timestamp)
- `git status` / `git diff` to account for uncommitted local changes

`createRunContext()` no longer precomputes a git summary; `.openwikiignore` exclusions are enforced by the filesystem backend and the restricted shell-execute allowlist instead of by pre-filtering a summary.

### Model availability pre-check

After the provider and model ID are resolved, `resolveRunConfig()` in `src/agent/index.ts` calls `getSelectedModelAvailability()` in `src/model-availability.ts` before model creation. For the `openai` provider with an API key and the default OpenAI endpoint, it queries `GET https://api.openai.com/v1/models` and aborts the run with a clear message when the selected model is not exposed to the configured credentials (`status: "unavailable"`). Every other case resolves to `status: "unknown"` — non-OpenAI providers (no availability adapter), custom OpenAI-compatible endpoints (no Models API semantics assumed), a missing API key, a non-OK response, or a network failure — and proceeds to inference, so a catalogue lookup failure never blocks a run that could otherwise succeed. An `unknown` result is logged to the debug stream with its reason.

### Provider and model resolution

The agent runtime resolves the provider via `resolveConfiguredProvider()` in `src/config/constants.ts`:

1. If `OPENWIKI_PROVIDER` is set and valid, use it.
2. Otherwise, use the first available provider API key in this order: OpenAI, OpenAI-compatible, OpenRouter, Anthropic, Baseten, Fireworks, Nebius, NVIDIA, then Bedrock.
3. Otherwise, fall back to `DEFAULT_PROVIDER` (`openai`) and its default model (`gpt-5.6-terra`).

Note: the copilot provider is selectable but never auto-detected — its credential comes from the GitHub CLI at runtime, so `resolveConfiguredProvider()` does not probe for it.

Model creation branches by provider in `src/agent/index.ts` (`createModel`):

- **gemini** → `ChatGoogle` with `platformType: "gai"` (AI Studio), using the Gemini API key. Includes Gemini 3.x thought-signature round-trip options.
- **gemini-enterprise** → `createGeminiEnterpriseModel()`, which routes by model family via `resolveVertexSurface()` in `src/agent/vertex-surface.ts`: Claude models use `ChatAnthropic` with a custom `AnthropicVertex` client (`@anthropic-ai/vertex-sdk`), partner/open-weight models use `ChatOpenAI` against Vertex's OpenAI-compatible MaaS endpoint with a per-request ADC auth fetch, and Gemini/Gemma models use `ChatGoogle` with Google ADC (keyless, `apiKey: ""` to block `GOOGLE_API_KEY` fallback). Auth is Google Application Default Credentials; `GOOGLE_CLOUD_PROJECT` is required and `GOOGLE_CLOUD_LOCATION` is optional (defaults to `global`).
- **anthropic** → `ChatAnthropic` with the Anthropic API key.
- **openai-chatgpt** → `ChatOpenAI` with `useResponsesApi: true`, `zdrEnabled: true`, `streaming: true`, pointed at the Codex backend (`CODEX_RESPONSES_BASE_URL`) with account-id/originator/beta headers. Tokens are refreshed before model creation via `ensureFreshChatGptTokens()`.
- **openrouter** → `ChatOpenRouter` with the selected model ID. When `OPENWIKI_OPENROUTER_MAX_TOKENS` is set to a positive integer (resolved by `resolveOpenRouterMaxTokens()` in `src/config/constants.ts`), the cap is passed as `maxTokens` so OpenRouter's credit pre-check budgets against the cap rather than the model's full advertised output ceiling (which otherwise triggers 402 errors on low balances).
- **bedrock** → `ChatBedrockConverse` (`@langchain/aws`) with AWS access key ID, secret access key, and a required region.
- **openai** → `ChatOpenAI` with `useResponsesApi: true`.
- **copilot** → `ChatOpenAI` with `apiKey` from the GitHub CLI token (or `COPILOT_API_KEY` for CI), `baseURL` from `COPILOT_BASE_URL` or the default Copilot endpoint, and `useResponsesApi` matching `/^gpt-5/u`. Auth is resolved before model creation via `resolveExternalCliCredential()` in `src/auth/external-cli-auth.ts`, which runs `gh auth token` and injects the credential into `process.env` for the current process only.
- **baseten / fireworks / nebius / nvidia / openai-compatible** → `ChatOpenAI` with the provider's API key and optional custom `baseURL` from `PROVIDER_CONFIGS`.

Credential gating before model creation uses `getMissingProviderEnvKey()` in `src/config/constants.ts`, which requires the provider's API key — or `GOOGLE_CLOUD_PROJECT` for gemini-enterprise — and powers the same check in the CLI's non-interactive gates and the onboarding flow.

### DeepAgents backend and middleware

The agent uses a DeepAgents `LocalShellBackend` rooted at the repository, configured with `virtualMode: true`, `maxOutputBytes: 100_000`, and a 120 second timeout. A SQLite checkpointer (`~/.openwiki/openwiki.sqlite`) persists conversation threads keyed by a hash of the repository path.

`createAgentBackend()` in `src/agent/index.ts` wraps that wiki backend in an `OpenWikiCompositeBackend` (a DeepAgents `CompositeBackend` subclass) that layers two read-only virtual mounts on top of the documented repository:

- `/skills/` — the bundled and user skills under `~/.openwiki/skills` (populated by `src/agent/skills.ts`).
- `/conversation_history/` — the DeepAgents summarization middleware's history offload, routed to `~/.openwiki/conversation_history` (created by `ensureOpenWikiHome()` in `src/config/openwiki-home.ts`). `createDeepAgent` exposes no way to override the `/conversation_history` default prefix, so the mount prefix is kept in sync with it via the exported `CONVERSATION_HISTORY_MOUNT` constant. Routing the offload outside the repository is what lets it succeed on docs-only `--init`/`--update` runs: without the mount, the docs-only write guard refuses the offload write, that refusal is non-fatal, and summarization silently degrades — narrowing coverage on large repositories while the run still exits 0 (#496).

Both mounts are denied to the model's own filesystem tools via `AGENT_FILESYSTEM_PERMISSIONS` (`/skills/**` and `/conversation_history/**`, `mode: "deny"` for writes). The summarization middleware writes directly through the backend, which agent-layer permissions do not affect, so the offload keeps working while prompt-injected `write_file` calls into either mount are refused.

The agent runtime attaches two middleware layers:

- **OKF index middleware** (`src/agent/okf-middleware.ts`): migrates existing pages to valid OKF front matter before the agent runs, validates front matter on every write, and synchronizes directory `index.md` files after the run. Its `afterAgent` finalize stage runs three validation passes: Mermaid fences via `src/mermaid/wiki.ts`, index synchronization, and internal link validation via `src/agent/wiki-link-validator.ts`. The link validator resolves targets against the whole repository (not just the `openwiki/` subtree), since wiki pages may legitimately link out to repo files that render on GitHub; a link is broken only when its target genuinely does not exist. Heading anchors are validated only against Markdown targets, so directory links and GitHub line anchors on source files (e.g. `#L10`) are never flagged. `slugifyHeading` mirrors `github-slugger` (keeps combining marks, replaces whitespace per-character without collapsing) so anchors like `a--b` from stripped punctuation resolve. Broken links are stamped inline with `openwiki:` HTML comments instead of failing the run — the same degrade-and-self-repair pattern Mermaid uses — so a later update can repair the href from the inline comment.
- **Translation middleware** (`src/agent/translation-middleware.ts`): when the output language differs from the wiki's current language, translates all eligible pages before the agent runs. Pages marked `openwiki_translation_pending` from a prior failed run are retranslated individually. The middleware tags its LLM calls with `langsmith:nostream` so translation output does not scroll past in the TUI token stream.

### Content snapshot and metadata writes

After a non-chat run completes, `src/agent/utils.ts` computes a SHA-256 snapshot of the `openwiki/` directory (excluding `.last-update.json`). Metadata is written **only if the snapshot changed** — a no-op update that leaves docs untouched will not update `.last-update.json`. This prevents endless update loops in scheduled workflows.

### Auto-exit behavior

`shouldAutoExitStartupRun()` in `src/cli/cli.tsx` determines whether a startup run should exit automatically on success. This applies to `--init` and `--update` commands (without `--print`) when run in a TTY: the CLI launches the run, renders streaming output, and exits with code 0 on success. Chat runs and `--print` runs are unaffected.

### Streaming and crash guard

The live run consumes the agent via `agent.stream({ streamMode: ["messages", "tools"], subgraphs: true })` rather than the Agent Protocol `streamEvents` API. `parseAgentStreamChunk()` in `src/agent/index.ts` normalizes each `[namespace, mode, payload]` chunk into an `OpenWikiRunEvent`: `tools` chunks become tool start/end events (tool-call strings pass through `sanitizeDiagnosticText()` so secrets are redacted), and `messages` chunks yield text after `extractMessageText()` filters non-text content blocks (`tool`, `reasoning`, `file`, `image`) so base64 payloads never reach the terminal. A namespace longer than one element marks the event `source: "subgraph"`, which is how init subagent output is attributed. `parseStreamEvent()` remains exported for the public agent factory's Agent Protocol v3 event shape, but the live run no longer uses it.

A process-wide crash guard (`src/agent/crash-guard.ts`) is installed once at CLI startup via `installCrashGuard()`. The run registers itself with `registerActiveRun()` for the stream-consumption window only and clears it in `finally`; if a rejection escapes every catch (e.g. a subagent error on the microtask queue), `handleFatal()` records the failure to telemetry, stamps the run `interrupted`, and exits non-zero. `handleFatal()` claims the active run synchronously — `getActiveRun()` followed immediately by `clearActiveRun()` with no `await` between them, before any async side effect — so a burst of escaped rejections landing together on the microtask queue produces one crash event: the first handler wins the run and every later handler sees `undefined` and only exits. Do not move an `await` above that pair; doing so reintroduces the race where one crash records hundreds of duplicate events. See [Agent workflow § Crash guard](../agent/workflow.md#crash-guard) for the post-mortem contract.

## Why the architecture is shaped this way

The current design reflects a documentation product rather than a general-purpose agent framework:

- The CLI owns user experience and credential bootstrap so the tool is install-and-run friendly.
- Git evidence is gathered by the agent itself during the run (per the prompt templates), so the model can adapt its discovery to the actual change window rather than consuming a fixed precomputed summary.
- Provider support is centralized in `src/config/constants.ts` so adding a provider is a single-config change plus a model-creation branch.
- Model execution is provider-stable: transient request failures can retry through the selected LangChain model client, but OpenWiki surfaces the final error instead of continuing with another model.
- The content-snapshot check prevents metadata churn when an update run produces no documentation changes, which is important for scheduled CI workflows.
- Auto-exit for init/update makes the CLI usable in both interactive and one-shot contexts without requiring `--print`.

## Major extension points

- Add or refine CLI commands in `src/cli/commands.ts` and the corresponding UI behavior in `src/cli/app/app.tsx` and `src/cli/cli.tsx`.
- Change onboarding or local credential storage in `src/setup/credentials.tsx` (with `src/setup/credentials/` modules) and `src/config/env.ts`.
- Add a new model provider by extending `PROVIDER_CONFIGS` and `OpenWikiProvider` in `src/config/constants.ts`, then adding a branch in `createModel` in `src/agent/index.ts`.
- Adjust model defaults, validation, or fallback lists in `src/config/constants.ts`.
- Extend the documentation prompt or Git evidence in `src/agent/prompts/code.ts`, `src/agent/prompts/personal.ts`, and `src/agent/prompt.ts` (assembler); run persistence and snapshot behavior live in `src/agent/utils.ts`.

## Supporting subsystems

- **OKF compliance** (`src/okf/`): `frontmatter.ts` validates and migrates YAML front matter, `index-labels.ts` localizes directory index headings by BCP-47 language, and `index-sync.ts` deterministically generates and synchronizes every `index.md` after a run. The OKF middleware (`src/agent/okf-middleware.ts`) ties these into the agent lifecycle.
- **Mermaid validation** (`src/mermaid/`): `fences.ts` extracts Mermaid code fences from wiki pages, `validate.ts` parses and validates them, and `wiki.ts` repairs broken fences by converting them to plain text fences with an HTML comment explaining the parse error. The OKF middleware calls `validateWikiMermaid()` after every run.
- **Telemetry** (`src/telemetry/`): emits a single `openwiki_run` PostHog event per run with mode, provider, outcome, latency, configured connectors, and a build channel. `gates.ts` checks `OPENWIKI_TELEMETRY_DISABLED` / `DO_NOT_TRACK` for opt-out, uses `ci-info` to tag CI runs with a sentinel distinct ID so ephemeral runners never inflate install counts, and bakes a `BUILD_CHANNEL` (`"community"` in committed source, stamped to `"official"` only on the upstream release path — see [Credentials and updates § Build channel stamping](../operations/credentials-and-updates.md#build-channel-stamping)) so every event carries it and the dashboard can filter fork-originated telemetry. `record-run-safe.ts` wraps the send with a 3-second flush timeout so telemetry can never stall the CLI. `errors.ts` classifies failures by walking an unwrap chain (`unwrapErrorChain()`, bounded at 32 links, cycle-safe) so a provider error buried under several framework envelopes is recovered instead of collapsing into the residual `agent_error` bucket, with one origin-tag override (`streamOpenDisguisesProvider()`) that reclassifies a `build_error/stream_open` tag masking a provider failure. The residual `agent_error` bucket's one signal is the innermost error's own allowlisted name, folded into `error_detail` via `innermostErrorName()`; see [Credentials and updates § Error classification and fingerprinting](../operations/credentials-and-updates.md#error-classification-and-fingerprinting) for the full taxonomy, identifier allowlist, and override rules. `client.ts` `capture()` returns `true` only when the PostHog send fulfills before the flush timeout, so send failures and timeouts are reported as failures rather than silently swallowed.
- **Skills** (`src/agent/skills.ts`): bundles the `skills/` directory into the OpenWiki home and exposes it to the agent as the `/skills/` virtual mount on the `CompositeBackend` built by `createAgentBackend()` (see [DeepAgents backend and middleware](#deepagents-backend-and-middleware)). Write access to `/skills/**` is denied to the model via `AGENT_FILESYSTEM_PERMISSIONS`. Each bundled skill is staged in a unique scratch directory and swapped into place with an atomic `rename`, so repeated or overlapping `--init` syncs are idempotent — a concurrent install that lands first is accepted as success rather than racing with `EEXIST` or `ENOTEMPTY` errors.
- **Diagnostics and redaction** (`src/platform/diagnostics.ts`): redacts secrets from error messages, headers, and provider responses before they are shown to the user or written to logs. It matches exact secret values from the environment and known token shapes (`sk-…`, `Bearer …`, `ls…`).
- **Untrusted-text sanitization** (`src/platform/utils.ts`): `stripHtmlTags()` removes angle brackets from markdown token text, and `stripTerminalControlSequences()` strips ANSI/VT escape, CSI, OSC, DCS, SOS, PM, and APC sequences plus non-whitespace C0/C1 controls from streamed model output before the Ink markdown renderer lexes it. Newlines and tabs are preserved as useful Markdown whitespace; other C0/C1 controls are discarded rather than passed to a terminal emulator. `MarkdownText` in `src/cli/components/markdown.tsx` applies `stripTerminalControlSequences()` before `marked.lexer`, so a prompt-injected escape sequence in model output can no longer reformat the terminal (#550).

## Things to watch when editing

- `src/cli/cli.tsx` and `src/cli/commands.ts` must stay aligned; help text and parser behavior are intentionally coupled.
- Credential setup writes to a real home-directory file, so permission handling matters.
- The agent is expected to work from repository-local virtual paths like `/README.md` and `/openwiki/quickstart.md`; the prompt explicitly warns about this.
- `openwiki/` in the target repository is both the docs output location and the metadata location for `.last-update.json`.
- When adding a provider, update `managedEnvKeys` in `src/config/env.ts` so diagnostics and env formatting cover the new key.
- The content-snapshot logic excludes `.last-update.json`; if new metadata files are added under `openwiki/`, decide whether they should be excluded too.

## Source map

- `src/cli/cli.tsx`
- `src/cli/app/app.tsx`
- `src/cli/commands.ts`
- `src/cli/runners.ts`
- `src/setup/credentials.tsx` (re-exports `src/setup/credentials/`)
- `src/config/env.ts`
- `src/agent/index.ts`
- `src/model-availability.ts`
- `src/agent/prompt.ts`
- `src/agent/prompts/code.ts`
- `src/agent/prompts/personal.ts`
- `src/agent/skeleton_critic.ts`
- `src/agent/wiki_qa_subagents.ts`
- `src/agent/crash-guard.ts`
- `src/agent/utils.ts`
- `src/agent/types.ts`
- `src/agent/docs-only-backend.ts`
- `src/agent/openai-chatgpt-oauth.ts`
- `src/agent/okf-middleware.ts`
- `src/agent/translation-middleware.ts`
- `src/agent/vertex-surface.ts`
- `src/agent/skills.ts`
- `src/auth/external-cli-auth.ts`
- `src/platform/diagnostics.ts`
- `src/platform/utils.ts`
- `src/okf/frontmatter.ts`, `src/okf/index-labels.ts`, `src/okf/index-sync.ts`
- `src/mermaid/fences.ts`, `src/mermaid/validate.ts`, `src/mermaid/wiki.ts`, `src/mermaid/dom-shim.ts`
- `src/telemetry/` (including `errors.ts`, `gates.ts`, `record-run-safe.ts`, `senders.ts`, `client.ts`)
- `src/auth/oauth.ts`
- `src/auth/oauth-discovery.ts`
- `src/auth/providers.ts`
- `src/auth/configure.ts`
- `src/auth/ngrok.ts`
- `src/auth/tokens.ts`
- `src/auth/types.ts`
- `src/connectors/registry.ts`
- `src/connectors/tools.ts`
- `src/connectors/types.ts`
- `src/connectors/http.ts`
- `src/ingestion/ingestion.ts`
- `src/ingestion/code-mode.ts`
- `src/config/constants.ts`
- `package.json`
- `scripts/stamp-build-channel.cjs`
- `.github/workflows/release.yml`


---

## SOURCE · `arena/01a060a3-skill:tools/openwiki/openwiki/cli/index.md`

<!-- blob: f405ab33bdffff7424b7abdf2029bb537918b255; bytes: 335 -->

# Files

- [OpenWiki CLI usage](usage.md) - Reference for OpenWiki command-line usage, including interactive and non-interactive runs, initialization and update modes, connector operations, and authentication setup. Covers provider configuration, model selection, validation, and the source files to update when changing CLI behavior.


---

## SOURCE · `arena/01a060a3-skill:tools/openwiki/openwiki/cli/usage.md`

<!-- blob: f5a4b359dc3a788e8bd39ebd65d28796be57fb2f; bytes: 22794 -->

---
type: CLI reference
title: OpenWiki CLI usage
description: Reference for OpenWiki command-line usage, including interactive and non-interactive runs, initialization and update modes, connector operations, and authentication setup. Covers provider configuration, model selection, validation, and the source files to update when changing CLI behavior.
tags: [openwiki, cli, commands, configuration, authentication]
---

# CLI usage

OpenWiki ships as a single `openwiki` binary and is intended to work both as an interactive terminal app and as a one-shot documentation runner.

## Commands and modes

From `src/cli/commands.ts` and `README.md`, the supported entry patterns are:

- `openwiki` — open the interactive chat UI.
- `openwiki "message"` — send a chat message immediately, then stay open.
- `openwiki personal --init [message]` — generate initial local personal brain wiki documentation.
- `openwiki code --init [message]` — generate initial repository documentation.
- `openwiki --update [message]` — refresh existing OpenWiki documentation.
- `openwiki -p, --print` — run once and print the final assistant output (non-interactive).
- `openwiki --modelId <id>` / `--model-id <id>` — choose a model ID for the run.
- `openwiki --language <locale>` / `-l <locale>` — generate the wiki in a specific language (BCP-47 locale, e.g. `zh-CN`, `hi`, `pt-BR`); see [Multilingual wikis](#multilingual-wikis).
- `openwiki visualize [path] [--port <port>] [--no-open]` — serve an interactive node-graph visualizer for a wiki directory on a local loopback address; see [Visualizer](#visualizer).
- `openwiki --help` / `-h` — print usage, options, and examples.
- `openwiki --dry-run` — development-only option that avoids invoking the agent.

### Connector and operational subcommands

- `openwiki auth <provider>` — run OAuth login for a connector provider (gmail, notion, slack, x). The `custom-mcp` connector is configured via `~/.openwiki/connectors/custom-mcp/config.json` instead of an OAuth login.
- `openwiki auth configure <provider> [--force]` — create local connector config that references saved auth env vars.
- `openwiki auth tools <provider>` — list available MCP tools for a connector (e.g. notion).
- `openwiki auth` (no provider) — list supported auth providers and their status.
- `openwiki ngrok start [url] [--port <port>]` — start an ngrok HTTPS tunnel for Slack OAuth callback.
- `openwiki cron list` — show saved connector schedules, launchd state, and the Mac wake window.
- `openwiki cron pause <source|all>` — unload launchd job(s), keep cron metadata, reconcile `pmset` wake window.
- `openwiki cron resume <source|all>` — reinstall paused launchd job(s) and reconcile `pmset` wake window.
- `openwiki cron delete <source|all>` — unload and remove schedule metadata (does not remove auth, config, raw data, or wiki content).
- `openwiki ingest [target]` — run source-specific ingestion for configured connectors.

The parser rejects incompatible combinations such as `--init` and `--update` together, and it requires a message or command when `--print` is used.

### Auto-exit for init/update

When explicit init (`openwiki personal --init` or `openwiki code --init`) or `--update` is run in a TTY (without `--print`), the CLI starts the run, streams agent output, and **exits automatically on success** (`shouldAutoExitStartupRun` in `src/cli/app/app.tsx`). Chat runs and `--print` runs are not affected — chat stays open for follow-ups, and `--print` writes to stdout and exits.

### Non-interactive mode

If stdin is not a TTY (e.g. CI), or `--print` is used, the CLI requires the provider's credentials to be already saved in `~/.openwiki/.env` or present in the environment — the provider API key, or `GOOGLE_CLOUD_PROJECT` for the gemini-enterprise provider. It will error with a clear message if the value is missing, rather than prompting interactively.

## Interactive behavior

`src/cli/app/app.tsx` is the Ink-based app shell. It handles:

- chat submission and follow-up messages,
- `init` / `update` command launches (including from `/init` and `/update` slash commands),
- provider and model selection during the session (`/provider`, `/model`),
- interactive credential setup when required (including for init/update, not just chat),
- streaming agent text and tool events (tool-call strings are redacted via `sanitizeDiagnosticText()` before display; subagent lifecycle is shown as "task" start/finish labels),
- completed-run history and error display,
- exit handling for help, errors, and explicit `/exit` messages.

The UI persists provider and model selection back to `~/.openwiki/.env` through `saveOpenWikiEnv()`.

## Credentials and onboarding

The first interactive run can prompt for:

- a **provider** (`OPENWIKI_PROVIDER`) — openai, openai-chatgpt, copilot, openrouter, anthropic, gemini, gemini-enterprise, bedrock, baseten, fireworks, nebius, nvidia, or openai-compatible,
- the **provider API key** (e.g. `OPENROUTER_API_KEY`, `OPENAI_API_KEY`, `OPENAI_COMPATIBLE_API_KEY`, `ANTHROPIC_API_KEY`, `BASETEN_API_KEY`, `FIREWORKS_API_KEY`, `GEMINI_API_KEY`, `NEBIUS_API_KEY`) — skipped for the gemini-enterprise provider, which instead prompts for a **GCP project** (`GOOGLE_CLOUD_PROJECT`, required) and a **GCP location** (`GOOGLE_CLOUD_LOCATION`, optional, defaults to `global`), and skipped for the bedrock provider, which instead prompts for AWS access key ID, secret access key, and region, and skipped for the copilot provider, which uses the GitHub CLI (`gh auth login`) instead of an API key,
- a **base URL** for providers that require one (the openai-compatible provider prompts for `OPENAI_COMPATIBLE_BASE_URL`),
- a **model ID** stored as `OPENWIKI_MODEL_ID` — chosen from the provider's model list or a custom ID,
- optional `LANGSMITH_API_KEY` for tracing.

If a LangSmith key is provided, onboarding also enables `LANGCHAIN_PROJECT=openwiki` and `LANGCHAIN_TRACING_V2=true`.

`src/setup/credentials.tsx` (thin re-export over `src/setup/credentials/` modules) determines whether setup is needed and walks the user through the missing values using arrow-key selection menus for provider and model. See [Credentials and updates](../operations/credentials-and-updates.md) for details.

## Provider and model selection

Providers and their model options are defined in `PROVIDER_CONFIGS` in `src/config/constants.ts`:

| Provider          | Env key                                                       | Base URL                                                | Models                                                                                |
| ----------------- | ------------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| openai            | `OPENAI_API_KEY`                                              | (default, or `OPENAI_BASE_URL`)                         | 5.6 Terra, 5.6 Luna, 5.6 Sol, 5.5, 5.4 mini                                           |
| openai-chatgpt    | `OPENAI_CHATGPT_ACCESS_TOKEN`                                 | (Codex backend)                                         | Same as openai (OAuth login, no API key)                                              |
| copilot           | `COPILOT_API_KEY`                                             | `https://api.githubcopilot.com` (or `COPILOT_BASE_URL`) | GPT 5.6 Terra/Luna/Sol, 5.5, 5.4 mini; Claude Opus/Sonnet/Haiku/Fable; Gemini 2.5 Pro |
| openrouter        | `OPENROUTER_API_KEY`                                          | `https://openrouter.ai/api/v1`                          | GLM 5.2, Fusion, Kimi K2.7 Code, Claude Opus/Sonnet, GPT 5.4 mini/5.5                 |
| anthropic         | `ANTHROPIC_API_KEY`                                           | (default, or `ANTHROPIC_BASE_URL`)                      | Haiku, Sonnet, Opus                                                                   |
| gemini            | `GEMINI_API_KEY`                                              | (AI Studio)                                             | Gemini 3.6 Flash, 3.5 Flash/Lite, 3.1 Pro, 3 Flash, 3.1 Flash-Lite                    |
| gemini-enterprise | none (Google ADC) — `GOOGLE_CLOUD_PROJECT` required           | per `GOOGLE_CLOUD_LOCATION` (default `global`)          | Gemini models + Claude Haiku/Sonnet/Opus on Vertex AI; MaaS by pasting model ID       |
| bedrock           | `BEDROCK_AWS_ACCESS_KEY_ID` + `BEDROCK_AWS_SECRET_ACCESS_KEY` | per `BEDROCK_AWS_REGION` (required)                     | Account/region-specific; paste Bedrock model ID directly                              |
| baseten           | `BASETEN_API_KEY`                                             | `https://inference.baseten.co/v1`                       | GLM 5.2, Kimi K2.7 Code                                                               |
| fireworks         | `FIREWORKS_API_KEY`                                           | `https://api.fireworks.ai/inference/v1`                 | GLM 5.2, Kimi K2.7 Code                                                               |
| nebius            | `NEBIUS_API_KEY`                                              | `https://api.tokenfactory.nebius.com/v1/`               | Kimi K2.6                                                                             |
| nvidia            | `NVIDIA_API_KEY`                                              | `https://integrate.api.nvidia.com/v1`                   | Nemotron 3 Super/Ultra/Nano, DeepSeek V4 Pro, GPT-OSS 120B, Kimi K2.6                 |
| openai-compatible | `OPENAI_COMPATIBLE_API_KEY`                                   | `OPENAI_COMPATIBLE_BASE_URL` (required)                 | custom model ID only                                                                  |

The default provider is `openai`, and the default model is `gpt-5.6-terra`. `resolveConfiguredProvider()` picks the provider from `OPENWIKI_PROVIDER`, then falls back to the first configured provider API key in this order: OpenAI, OpenAI-compatible, OpenRouter, Anthropic, Baseten, Fireworks, Nebius, NVIDIA, Bedrock, and finally `DEFAULT_PROVIDER` in `src/config/constants.ts`.

### Provider retry attempts

Set `OPENWIKI_PROVIDER_RETRY_ATTEMPTS` to override the number of retries after
the first provider request. The value must be a positive integer:

```bash
OPENWIKI_PROVIDER_RETRY_ATTEMPTS=3
```

If the value is unset, OpenWiki defaults to 3 retries.

### Alternative base URLs

Set `ANTHROPIC_BASE_URL` to route the anthropic provider at an alternative,
Anthropic-compatible endpoint (for example a self-hosted or proxied gateway)
instead of the default API. When set, it is passed to `ChatAnthropic` as
`anthropicApiUrl`; the `ANTHROPIC_API_KEY` is still sent as the request
credential.

### OpenAI-compatible provider

The `openai-compatible` provider targets any OpenAI-compatible chat-completions
endpoint. It has no default endpoint, so `OPENAI_COMPATIBLE_BASE_URL` is
**required** (the interactive setup prompts for it, and a run aborts early if it
is missing). This is useful for OpenAI-compatible LLM endpoints such as those
exposed by a LiteLLM gateway, which lets you reach whatever upstream providers
the gateway fronts through a single OpenAI-shaped API.
Because the provider has no preset model
list, set `OPENWIKI_MODEL_ID` (or pick "custom model ID" in setup) to whatever
name the gateway exposes.

```bash
OPENWIKI_PROVIDER=openai-compatible
OPENAI_COMPATIBLE_API_KEY=<gateway key>
OPENAI_COMPATIBLE_BASE_URL=https://<gateway>/v1
OPENWIKI_MODEL_ID=<model name the gateway exposes>
```

Base URLs are resolved by `resolveProviderBaseUrl()` in `src/config/constants.ts`, which
prefers a provider's `baseUrlEnvKey` override over the built-in default.

### Gemini (AI Studio) provider

The `gemini` provider uses Google's Gemini models through AI Studio
(`platformType: "gai"`) with a `GEMINI_API_KEY`. It includes Gemini 3.x
thought-signature round-trip handling.

```bash
OPENWIKI_PROVIDER=gemini
GEMINI_API_KEY=<api key>
```

### Gemini Enterprise (Vertex AI) provider

The `gemini-enterprise` provider runs models through Google Vertex AI Model
Garden using Google Application Default Credentials (keyless — a service account
key via `GOOGLE_APPLICATION_CREDENTIALS`, `gcloud auth application-default
login`, or workload identity). `GOOGLE_CLOUD_PROJECT` is required;
`GOOGLE_CLOUD_LOCATION` is optional and defaults to `global` (resolved by
`resolveProviderLocation()` in `src/config/constants.ts`).

Model routing is automatic based on the model ID, via `resolveVertexSurface()`
in `src/agent/vertex-surface.ts`:

- **Claude models** (IDs matching `anthropic`/`claude`) → `ChatAnthropic` with a
  custom `AnthropicVertex` client (`@anthropic-ai/vertex-sdk`).
- **Partner/open-weight models** (Llama, Mistral, DeepSeek, Qwen, etc.) →
  `ChatOpenAI` against Vertex's OpenAI-compatible MaaS endpoint, with a
  per-request ADC bearer token injected by a custom fetch wrapper.
- **Gemini/Gemma models** → `ChatGoogle` with ADC and `apiKey: ""` to prevent
  a stray `GOOGLE_API_KEY` from hijacking the enterprise path.

```bash
OPENWIKI_PROVIDER=gemini-enterprise
GOOGLE_CLOUD_PROJECT=<gcp project id>
GOOGLE_CLOUD_LOCATION=global   # optional
```

Model IDs for Claude may carry an `@`-versioned suffix (for example
`claude-haiku-4-5@20251001`), which the model-ID validator accepts. MaaS model
IDs (e.g. `meta/llama-3.3-70b-instruct-maas`) can be pasted directly.

### AWS Bedrock provider

The `bedrock` provider uses `ChatBedrockConverse` (`@langchain/aws`) with AWS
credentials. It requires an access key ID (`BEDROCK_AWS_ACCESS_KEY_ID`), a
secret access key (`BEDROCK_AWS_SECRET_ACCESS_KEY`), and a region
(`BEDROCK_AWS_REGION`). Available model IDs are account- and region-specific,
so there is no preset model list — paste the Bedrock model ID directly (for
example `anthropic.claude-sonnet-5-20260101-v1:0`).

### GitHub Copilot provider

The `copilot` provider uses the GitHub Copilot API endpoint
(`https://api.githubcopilot.com`) and authenticates via the GitHub CLI rather
than a pasted API key. It is configured with `authMethod: "external-cli"` and
`externalCliAuthAdapter: "github-cli"`, so the interactive onboarding flow runs
`gh auth login` with a Copilot-enabled account and reads the token via
`gh auth token`. The token is reused for the current process only — it is never
written to `~/.openwiki/.env`, so the CLI remains the source of truth.

For CI and other headless runs, set `COPILOT_API_KEY` directly to a GitHub OAuth
token (not a Personal Access Token — `ghp_` and `github_pat_` tokens are
rejected by `validateExternalCliCredential()` because the Copilot API does not
accept them).

The provider's `responsesApi` setting is a regex (`/^gpt-5/u`), so GPT models
use the OpenAI Responses API while Claude and Gemini models use the standard
chat completions endpoint.

```bash
OPENWIKI_PROVIDER=copilot
# Interactive: run `gh auth login` with a Copilot-enabled account
# CI: set COPILOT_API_KEY to a GitHub OAuth token
```

The `--hostname` flag passed to `gh` matches the tenant of the configured base
URL (if `COPILOT_BASE_URL` points at a GHE.com data-residency host), so the
reused session authenticates against the correct GitHub instance.

### OpenRouter provider

The `openrouter` provider routes through `https://openrouter.ai/api/v1` using `OPENROUTER_API_KEY`. By default no `max_tokens` is sent, so OpenRouter's credit pre-check budgets for the model's full advertised output ceiling and on a low credit balance every request can fail with a 402 error. Cap the per-request output explicitly with `OPENWIKI_OPENROUTER_MAX_TOKENS` (a positive integer, resolved by `resolveOpenRouterMaxTokens()` in `src/config/constants.ts`):

```bash
OPENWIKI_PROVIDER=openrouter
OPENROUTER_API_KEY=<key>
OPENWIKI_OPENROUTER_MAX_TOKENS=8192
```

A cap trades those hard 402 failures for possible truncation (finish_reason `length`) when a long wiki generation genuinely needs more output tokens, so prefer the largest value your balance allows.

### Visualizer

`openwiki visualize` serves the generated wiki as an interactive node graph with a side-by-side Markdown reader in the browser (`src/visualize/server.ts`). It is a read-only viewer for already-generated docs, not a generation command.

```sh
openwiki visualize                       # serve ./openwiki on the default port
openwiki visualize openwiki --port 4400  # serve a different directory on port 4400
openwiki visualize openwiki --no-open    # do not open the browser automatically
```

Behavior and bounds, from `src/visualize/server.ts`:

- The HTTP server binds to the loopback address `127.0.0.1` only — it is never exposed on the network. The preferred port defaults to `4321`; on `EADDRINUSE` it increments through up to 20 ports before failing.
- A positional path selects the wiki directory (default `openwiki`). If the directory is missing, the server fails fast with a message directing you to run `openwiki --init` first.
- `buildGraph()` in `src/visualize/graph.ts` parses the wiki into nodes (concept pages) and edges (Markdown links), exposing them at `/api/graph`.
- A recursive file watcher (`startWatch`) debounces changes (150 ms) and rebuilds the graph; connected browsers receive a reload event over an SSE stream at `/events`, so edits to the wiki files refresh the live graph and reader while the server runs.
- The page (`src/visualize/page.ts`) and client (`src/visualize/client.ts`) are server-owned static assets served at fixed routes (`/`, `/client.js`, `/client-lib.js`). The browser loads Mermaid and the graph/Markdown libraries from a pinned jsdelivr CDN, so an internet connection is required even though the server is local. The CSP pins script sources to `'self'` and the CDN origin; no `req.url` path is ever used to read a file from disk.
- Press Ctrl-C (SIGINT) to stop the server.

## Multilingual wikis

`--language <locale>` (alias `-l`) generates the wiki in a language other than English, while keeping code identifiers, file paths, commands, API names, URLs, and code blocks canonical. `resolveLanguage()` in `src/platform/language.ts` validates the value as a BCP-47 tag via `Intl.Locale`; an unrecognized value resolves to English with a warning suggesting a code such as `zh-CN`, `hi`, or `pt-BR`.

```sh
openwiki --init --language pt-BR
openwiki --update --language zh-CN
```

Language is persisted state, not a one-shot flag:

- On a run, the effective language is the validated `--language` flag, else the language recorded in `openwiki/.last-update.json` from the previous run, else English (resolved in `src/agent/utils.ts` as `requestedLanguage ?? lastUpdate?.language ?? "en"`, with the requested value validated by `resolveLanguage()` in `src/platform/language.ts`). An update without `--language` keeps the existing wiki consistent in its established language instead of producing a mix.
- The chosen language is written to the `language` field of `.last-update.json` so subsequent runs inherit it.
- When a `--language` request changes the primary language subtag (for example `en` to `zh`), the [translation middleware](../agent/workflow.md) (`src/agent/translation-middleware.ts`) runs a deterministic translate-all pass **before** the agent edits: every eligible concept page is translated into the target language and marked with an `openwiki_translation_pending` front-matter field. Pages left pending by a prior failed switch are retranslated individually on the next update.
- Deterministic, model-free localization (index section headings and the derived concept `type` label) is resolved by `resolveIndexLabels()` and `resolveConceptTypeLabel()` in `src/okf/index-labels.ts`, keyed by BCP-47 tag with region fallback to the primary subtag and then to English.

## Help text and validation

The help content is centralized in `src/cli/commands.ts` and is used by the CLI UI. Model validation is intentionally strict:

- model IDs are trimmed,
- they must match the allowed character pattern (`/^[A-Za-z0-9][A-Za-z0-9._:/@+-]*$/u`),
- URLs are rejected.

## What to change when editing the CLI

- Update parser behavior in `src/cli/commands.ts` first.
- Then update any user-visible text in `src/cli/app/app.tsx`, `src/cli/cli.tsx`, and `README.md`.
- If new options affect run behavior, make sure `src/agent/index.ts` and `src/setup/credentials.tsx` still receive the right inputs.
- If adding a provider, update `PROVIDER_CONFIGS` and `SELECTABLE_OPENWIKI_PROVIDERS` in `src/config/constants.ts`, `managedEnvKeys` in `src/config/env.ts`, and the `createModel` branch in `src/agent/index.ts`. OAuth-based providers (like `openai-chatgpt`) additionally need a token refresh flow and a dedicated branch in `createModel` that reads tokens from `process.env`. `apiKeyEnvKey` is optional — a provider without one (like `gemini-enterprise`) instead declares the env keys it needs (e.g. `projectEnvKey`), and `getMissingProviderEnvKey()` gates runs on whichever required key is absent. Providers with a paired secret (like `bedrock`) use `secretKeyEnvKey`, and providers requiring a region use `regionEnvKey` with `requiresRegion: true`.
- To let a provider accept an alternative base URL, set `baseUrlEnvKey` on its `PROVIDER_CONFIGS` entry, add that key to `managedEnvKeys` in `src/config/env.ts`, and read it through `resolveProviderBaseUrl()` in the provider's `createModel` branch.
- To require a user-supplied base URL (a provider with no default endpoint, like `openai-compatible`), also set `requiresBaseUrl: true`. `ensureProviderBaseUrl()` in `src/agent/index.ts` enforces it at runtime, and the interactive setup adds a base-URL step for such providers.
- Re-check the `package.json` bin entry and scripts if the entrypoint changes. The bin entry is `./dist/cli/cli.js`; a `postbuild` script restores its executable bit (`chmod 0o755`) so `npm link` installs survive rebuilds.

## Source map

- `src/cli/cli.tsx`
- `src/cli/app/app.tsx`
- `src/cli/commands.ts`
- `src/cli/runners.ts`
- `src/cli/diagnostics/error-diagnostics.ts`
- `src/cli/diagnostics/sanitize.ts`
- `src/cli/diagnostics/auth-fix.ts`
- `src/setup/credentials.tsx` (re-exports `src/setup/credentials/`)
- `src/config/constants.ts`
- `src/config/env.ts`
- `src/agent/index.ts`
- `src/agent/openai-chatgpt-oauth.ts`
- `src/auth/oauth.ts`
- `src/auth/oauth-discovery.ts`
- `src/auth/providers.ts`
- `src/auth/configure.ts`
- `src/auth/ngrok.ts`
- `src/platform/language.ts`
- `src/visualize/server.ts`
- `src/visualize/graph.ts`
- `src/visualize/page.ts`
- `src/visualize/client.ts`
- `README.md`
- `package.json`


---

## SOURCE · `arena/01a060a3-skill:tools/openwiki/openwiki/evals/deepswe-harness.md`

<!-- blob: eb90f748a14cf4a7a5dc4ac5aeac92a7fbe58b88; bytes: 10760 -->

---
type: Evaluation harness
title: DeepSWE OpenWiki evaluation harness
description: Paired DeepSWE benchmark harness that compares a baseline Codex agent against an OpenWiki-augmented Codex agent to measure documentation leverage. Documents the run.py CLI, paired conditions, task suites, wiki caching, LangSmith integration, Codex adapters, and the direct-overhead analyzer.
tags: [evals, deepswe, harbor, codex, langsmith, benchmark]
---

# DeepSWE OpenWiki evaluation harness

The `evals/deepswe/` directory contains a Python harness that runs a **paired DeepSWE experiment** to measure whether OpenWiki-generated documentation helps a coding agent solve real software-engineering tasks. It is pinned to a fixed DeepSWE benchmark revision and orchestrates two conditions through Harbor with identical task sampling, model, seed, reasoning effort, and environment, then summarizes the results.

The treatment condition generates its wiki through OpenWiki's normal documentation agent (see [Agent workflow](../agent/workflow.md)) in an isolated clone, then feeds the resulting `openwiki/` directory and merged `AGENTS.md` into a Codex agent that solves the task. This makes the harness a downstream consumer of the [Agent workflow](../agent/workflow.md), and the generated wiki's quality directly affects the measured documentation leverage.

## What it measures

The harness compares two conditions over the same DeepSWE tasks:

- **`baseline`**: a Codex agent receives only the DeepSWE task and repository.
- **`openwiki`**: the adapter restores or generates an OpenWiki wiki in an isolated clone, merges OpenWiki's managed instructions into the repository's root `AGENTS.md`, copies both `AGENTS.md` and `openwiki/` into `/app`, then runs the same Codex agent against the unchanged task. Codex automatically loads root `AGENTS.md`; the harness adds no treatment-only task prompt.

Both conditions capture the base-to-final-HEAD diff for DeepSWE's verifier through the same compatibility path. Generated wikis and the merged `AGENTS.md` are hidden from Git status and excluded from the verifier patch so the treatment files do not leak into the scored diff.

## Pinned versions

For reproducibility, `evals/deepswe/run.py` pins:

- DeepSWE commit `6db64a40f3318d8659238ff34a8cc4b491c49205`
- `harbor[langsmith]==0.20.0` (installed on the fly via `uvx`, not a package dependency)
- `litellm==1.83.14`
- Codex CLI `0.144.6`
- the current OpenWiki checkout, packed locally for each treatment run

Requirements: Python 3.12 (selected explicitly through `uvx`), `uv`/`uvx`, `pnpm`, Docker for local runs or a configured Modal account, plus `OPENAI_API_KEY` and `LANGSMITH_API_KEY` in the process environment or an `--env-file`.

## Commands

`evals/deepswe/run.py` exposes four subcommands:

- `prepare` — fetch the pinned DeepSWE checkout and pack the current OpenWiki source into a tarball for treatment runs.
- `baseline` — run only the baseline condition.
- `openwiki` — run only the OpenWiki-augmented condition.
- `paired` — run both conditions with the same seeded task sampling and summarize them.
- `summarize` — re-summarize existing Harbor results without invoking the runner.
- `--dry-run` (on `paired`) — inspect both commands without downloading tasks, building images, or calling a model.

Key options include `--n-tasks`, `--seed`, `--model` (the coding-agent model, default `openai/gpt-5.6-terra`), `--openwiki-model` (the wiki-generation model, default `gpt-5.6-terra`), `--reasoning-effort`, `--attempts`, `--concurrency`, `--environment modal` for hosted runs, `--task '<glob>'` to select tasks, and `--task-suite` for named reproducible cohorts.

## Named task suites

`run.py` defines three pinned task suites in `TASK_SUITES`:

| Suite                      | Members                                                                                | Purpose                         |
| -------------------------- | -------------------------------------------------------------------------------------- | ------------------------------- |
| `koota-5`                  | 5 Koota tasks                                                                          | Small iteration set.            |
| `openwiki-20`              | 5 Koota tasks + 15 independent repositories                                            | Broader cross-repository suite. |
| `openwiki-doc-leverage-10` | 10 disjoint tasks spanning runtime/serialization/integration/CLI/SDK/delivery surfaces | Documentation-leverage set.     |

`--task-suite` selects all members regardless of `--n-tasks` and cannot be combined with `--task`. Exact members are pinned in `run.py`.

## Wiki caching

Generated task wikis are cached on the host under `evals/deepswe/.cache/openwiki-wikis` (override with `--openwiki-cache-dir`). The cache key includes the task repository's base commit, the normalized OpenWiki package contents, and the OpenWiki model, so unchanged reruns restore the same wiki instead of regenerating it. Cache-related flags:

- `--no-reuse-compatible-wiki-cache` — disable reusing an older cache whose `openwiki/.last-update.json` matches the exact task commit and model.
- `--require-openwiki-cache` — fail before any wiki-generation model call on a cache miss; use this for controlled reruns where wiki Markdown must stay fixed.

The cache archive is validated for path safety (no absolute paths or `..` traversal), member count, and uncompressed size before it is accepted.

## LangSmith integration

Every evaluation uses Harbor's official `langsmith` plugin. Baseline and OpenWiki jobs share the default `deepswe-openwiki-6db64a40f331` dataset but create separate experiments named from their Harbor jobs; ambient experiment overrides are cleared so the conditions cannot merge accidentally. Override the dataset with `--langsmith-dataset`; self-hosted or multi-workspace installations can use `--langsmith-endpoint` (embedded credentials are rejected) and `--langsmith-workspace-id`. Dataset sync and fail-fast behavior are always enabled.

`evals/deepswe/deepswe_langsmith.py` ships `DeepSWELangSmithPlugin`, a subclass that sends only bounded verifier rewards as LangSmith feedback (rounded to four decimals) and swallows HTTP errors so a telemetry publish failure never aborts a trial. DeepSWE count metrics stay in local trial outputs instead of being sent as invalid scores.

## Codex adapters and retrieval MCP

`evals/deepswe/openwiki_codex.py` implements Harbor Codex adapters for both conditions. For the OpenWiki condition it: packs the OpenWiki source with a normalized digest (stable across tar ownership/timestamps), restores or generates the wiki in an isolated clone, merges the managed `AGENTS.md` block (`<!-- OPENWIKI:START -->` / `<!-- OPENWIKI:END -->`), and copies the treatment files into `/app`.

When the packed OpenWiki checkout exposes `openwiki-retrieval-mcp`, treatment runs register it inside Codex's isolated home. This capability check keeps the harness runnable against `main` and earlier OpenWiki revisions that do not yet ship retrieval tools; those revisions still receive their generated wiki and root `AGENTS.md` without an MCP server. When available, retrieval provides read-only `search` and `change_surface` workflows over `/app` and `/app/openwiki`. Local vectors are the default; pass `--retrieval-embedding-provider openai` to opt into hosted reranking.

## Direct-overhead analyzer

`evals/deepswe/analyze_openwiki_usage.py` measures direct OpenWiki retrieval overhead in Codex DeepSWE traces after a run:

```bash
python3 evals/deepswe/analyze_openwiki_usage.py \
  --job-dir evals/deepswe/results/<openwiki-job>
```

It reports OpenWiki MCP calls, shell reads under `openwiki/`, serialized tool-call and result characters at four characters per token, and one automatic inclusion of the managed `AGENTS.md` block, plus totals after subtracting that estimated direct overhead. It does not estimate repeated cached-context amplification. OpenWiki's CLI does not expose generation token usage to Harbor's local summary, so treatment summaries include wiki-generation wall-clock time but not its tokens or provider cost; LangSmith generation traces in the same experiment provide those details.

## Safety and isolation

- DeepSWE's held-out `tests/` and `solution/` live only in a separate verifier environment.
- Credentials are injected at runtime by Harbor and are never written into images, command arguments, generated wikis, or result summaries. Do not enable Harbor's debug mode for credentialed runs.
- Container networking is allowlisted to the package, model, and LangSmith hosts. If `OPENAI_BASE_URL` uses another gateway, pass its hostname with `--allow-host`. Docker cleanup removes only inactive, label-verified Harbor trial networks — never a global prune. The verifier environment remains offline.

## Outputs

Harbor writes raw jobs to `evals/deepswe/results/`. The harness writes aggregate JSON and trial-level CSV files to `evals/deepswe/summaries/`, with columns: condition, task name, trial name, binary reward, exception type, input/cache/output tokens, Codex cost, agent and total wall-clock time, and OpenWiki generation wall-clock time. Efficiency should be compared among successful trials as well as across all trials — a faster failure is not an efficiency improvement.

## Testing the harness

Run the pinned test suite:

```bash
uvx --python 3.12 --from 'harbor[langsmith]==0.20.0' \
  --with 'litellm==1.83.14' \
  python -m unittest discover -s evals/deepswe/tests -p 'test_*.py'
```

`evals/deepswe/tests/test_run.py` covers LangSmith feedback rounding/error handling, OpenWiki install behavior, treatment patch capture, seeded task selection, named suite composition, wiki cache key stability and archive safety, Docker network cleanup, and trial aggregation. `evals/deepswe/tests/test_analyze_openwiki_usage.py` covers tool-call/file-system classification, trace pairing, direct-overhead counting, and overhead subtraction.

## Source map

- `evals/deepswe/README.md` — user-facing harness documentation and command examples.
- `evals/deepswe/run.py` — prepare/baseline/openwiki/paired/summarize CLI, task suites, Harbor argument assembly, credential checks, Docker network cleanup, and trial aggregation.
- `evals/deepswe/openwiki_codex.py` — Harbor Codex adapters, OpenWiki packaging, wiki generation/restore, `AGENTS.md` merge, cache schema, and retrieval MCP registration.
- `evals/deepswe/deepswe_langsmith.py` — `DeepSWELangSmithPlugin` feedback subclass.
- `evals/deepswe/analyze_openwiki_usage.py` — post-run direct-overhead analyzer.
- `evals/deepswe/tests/test_run.py`, `evals/deepswe/tests/test_analyze_openwiki_usage.py` — harness tests.


---

## SOURCE · `arena/01a060a3-skill:tools/openwiki/openwiki/evals/index.md`

<!-- blob: 8ac681fef9c9261e79a6d7925163c0947803b140; bytes: 363 -->

# Files

- [DeepSWE OpenWiki evaluation harness](deepswe-harness.md) - Paired DeepSWE benchmark harness that compares a baseline Codex agent against an OpenWiki-augmented Codex agent to measure documentation leverage. Documents the run.py CLI, paired conditions, task suites, wiki caching, LangSmith integration, Codex adapters, and the direct-overhead analyzer.


---

## SOURCE · `arena/01a060a3-skill:tools/openwiki/openwiki/index.md`

<!-- blob: ab4d87e96d2ff6a78b0c3b851c73a56186b28082; bytes: 496 -->

---
okf_version: "0.1"
---

# Files

- [OpenWiki Quickstart](quickstart.md) - Quickstart reference for the OpenWiki TypeScript CLI, including documentation-generation workflows, supported model providers, and the primary source files. Use it to navigate the repository's architecture, commands, agent runtime, operations, and connectors.

# Directories

- [agent](agent/)
- [architecture](architecture/)
- [cli](cli/)
- [evals](evals/)
- [integrations](integrations/)
- [operations](operations/)


---

## SOURCE · `arena/01a060a3-skill:tools/openwiki/openwiki/integrations/connectors.md`

<!-- blob: cac7094a902149e67d6fbeae93daa7f091523bbf; bytes: 20173 -->

---
type: Integration
title: OpenWiki Connectors
description: OpenWiki's nine built-in connectors ingest data from Git repositories, Gmail, Hacker News, LangSmith, Notion, a generic Custom MCP source, Slack, web search, and X into a local raw cache for wiki synthesis. This reference documents connector architecture, read-only MCP safeguards, ingestion orchestration, and source-specific behavior.
tags: [connectors, integrations, ingestion, mcp]
---

OpenWiki ships nine built-in connectors that pull external data into a local raw cache under `~/.openwiki/connectors/<id>/raw/`, which the documentation agent then reads and synthesizes into wiki pages. The `langsmith` connector is code-mode only — its config is committed to the target repository — while the rest are primarily personal-mode sources (though `git-repo` also matters for code mode when documenting a different target repo than the one being ingested from).

## Connector architecture

All connectors share types in `src/connectors/types.ts`:

- `ConnectorId` — the union of implemented connector ids: `"custom-mcp" | "git-repo" | "google" | "hackernews" | "langsmith" | "notion" | "slack" | "web-search" | "x"`. This union is ground truth for what exists today.
- `ConnectorBackend` — `"direct-api" | "local-git" | "mcp-http" | "mcp-stdio"`.
- `ConnectorDefinition` / `ConnectorRuntime` — id, display name, description, required env var names, whether the connector supports agentic discovery (letting the agent decide what to fetch) vs. deterministic ingestion, and an `ingest()` function.
- `ConnectorIngestResult` — `{ status: "success" | "skipped" | "error", rawFiles, warnings, runId, statePath, message }`.
- `ConnectorState` — per-connector cursor/dedup bookkeeping (`lastRunAt`, `latestIds`, last 20 `runs`) persisted at `~/.openwiki/connectors/<id>/state.json`.

`src/connectors/registry.ts` (`createConnectorRegistry()`) wires up all nine; `custom-mcp` and `notion` are both built through the generic `createMcpConnector()` factory (`src/connectors/sources/mcp.ts`) rather than bespoke source files, while `langsmith` has its own submodule under `src/connectors/sources/langsmith/`.

Shared IO helpers live in `src/connectors/io.ts`: `writeRawJson()` writes raw dumps with `0600`/`0700` permissions under `~/.openwiki/connectors/<id>/raw/<runId>/`, and `updateStateWithRun()` maintains the state file.

### Resilient HTTP (`fetchWithResilience`)

`src/connectors/http.ts` exports `fetchWithResilience()`, a shared wrapper around the global `fetch` used by every direct-API connector (Gmail, Hacker News, Slack, X) and the HTTP MCP client (`mcp-client.ts`). It adds:

- a per-request wall-clock timeout via `AbortSignal.timeout` (default 30 s), combined with any caller-supplied abort signal so whichever fires first wins;
- bounded exponential backoff with full jitter (base 500 ms, cap 20 s) on retryable responses — HTTP 429 and 5xx — honoring a numeric or HTTP-date `Retry-After` header when present;
- the same backoff on network errors (connection reset, DNS, timeout).

Non-transient responses (2xx, 3xx, and 4xx including 401/403) are returned as-is after the first attempt. Auth failures must reach the caller so Gmail can trigger a token refresh; retrying them would waste attempts and risk account lockout. The helper accepts injectable `sleep` and `random` functions for deterministic testing.

Agent-facing tools (`src/connectors/tools.ts`) expose this to the LLM during a run: `openwiki_list_connectors`, `openwiki_list_mcp_tools`, `openwiki_call_mcp_tool`, `openwiki_ingest_connector`, `openwiki_ingest_all_connectors`, `openwiki_list_raw_items`, `openwiki_read_raw_item`. Raw-file reads are sandboxed to stay inside each connector's `raw/` directory, and required-env status is reported as booleans only — secret values are never surfaced to the model. `createOpenWikiConnectorTools()` takes the run's `outputMode`: it returns an empty tool array for `repository` (code) runs, because connector tools perform credentialed external fetches and a code-mode run documents a codebase, not a personal knowledge graph (#603, #444). The tools are offered only in `local-wiki` (personal) mode (and the default when no mode is supplied behaves like `local-wiki`). The `openwiki_list_mcp_tools` and `openwiki_call_mcp_tool` tools accept `custom-mcp` and `notion` as their `connectorId` enum.

## MCP subsystem

`src/connectors/mcp-client.ts` is a low-level JSON-RPC MCP client (stdio or HTTP transport) implementing `listMcpTools`/`executeMcpTool`/`executeMcpReadOnlyOperations`. Tool discovery follows the MCP `tools/list` pagination contract: `collectPaginatedTools()` re-issues `tools/list` with the top-level `nextCursor` until the field is absent, so tools on a server that paginates past the first page are discovered and callable instead of being rejected as "not returned by tools/list" (#566). The loop is bounded twice over so a misbehaving server cannot hang discovery: a repeated cursor stops it, and a `MAX_TOOL_LIST_PAGES` (100) cap stops it. Both the stdio (`StdioJsonRpcClient`) and HTTP (`HttpJsonRpcClient`) clients route `listTools()` through `collectPaginatedTools()`.

`src/connectors/mcp-runtime.ts` wraps the client for connector use (currently `custom-mcp` and `notion`), adding a **read-only tool-call policy**: a tool call is allowed only if it's explicitly listed in `allowedTools`, the MCP server's own `readOnlyHint` annotation is `true`, or (for the hosted `mcp.notion.com/mcp` endpoint specifically) the tool name/description matches a read-only heuristic (search/retrieve/get/list/query/read/fetch/find/lookup/load/children). The Notion name/description heuristic applies only to `notion` — it does **not** apply to `custom-mcp`, so a custom MCP server's tools must be allowlisted via `allowedTools` or carry the MCP `readOnlyHint`, or be invoked through configured `readOnlyOperations`; no mutating-tool guessing is done for arbitrary servers. This is the mechanism that keeps MCP-backed connectors read-only even though the underlying server may expose write tools.

For stdio transports, the MCP child process receives only a small allowlist of environment variables (`PATH`, `HOME`, `HOMEPATH`, `HOMEDRIVE`, `USERPROFILE`, `APPDATA`, `LOCALAPPDATA`, `TMPDIR`, `TEMP`, `TMP`) — enough to locate binaries, resolve the home directory, and find Windows AppData config/cache paths. OpenWiki credentials and OAuth tokens are deliberately excluded so a spawned MCP server cannot read the user's API keys out of `process.env`. `APPDATA`/`LOCALAPPDATA` were added to the allowlist because Windows MCP servers commonly need them for config and cache paths.

## The nine connectors

| Connector        | Backend                        | Required env                                                                                       | Agentic discovery | What it pulls                                                                                                                                                                                                                                                                                                                                                                       |
| ---------------- | ------------------------------ | -------------------------------------------------------------------------------------------------- | ----------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `custom-mcp`     | mcp-stdio (label; may be HTTP) | none (secrets referenced as `${ENV_NAME}` in transport headers/env)                                | yes               | Generic read-only MCP knowledge source. Point OpenWiki at any MCP server (HTTP or stdio transport) via `~/.openwiki/connectors/custom-mcp/config.json`. Discovers tools (`mcp-tools.json`) or executes configured `readOnlyOperations` (`mcp-results.json`). Prefer `allowedTools` and/or MCP `readOnlyHint`; do not guess mutating tools.                                          |
| `git-repo`       | local-git                      | none                                                                                               | yes               | Local repos configured in connector config (`repos: [{id, path}]`): branch/HEAD, `git log` (last 20, name-status), `git status --short`, `git diff --name-status HEAD`. Writes `manifest.json`.                                                                                                                                                                                     |
| `google` (Gmail) | direct-api                     | Gmail OAuth access/refresh token env keys                                                          | no                | Gmail API v1 messages; default query `newer_than:1d`, configurable label/format/headers. Writes `gmail-messages.json`.                                                                                                                                                                                                                                                              |
| `hackernews`     | direct-api                     | none                                                                                               | no                | Public HN Firebase feeds (`top`/`new`/`best`/`show`/`ask`/`job`) plus Algolia `search_by_date` queries. Writes `hackernews-results.json`.                                                                                                                                                                                                                                           |
| `langsmith`      | direct-api                     | `OPENWIKI_LANGSMITH_API_KEY` (primary; additional workspaces use `OPENWIKI_LANGSMITH_API_KEY_<n>`) | no                | LangSmith trace data for code-mode runs. Config committed to `openwiki/.langsmith.json` in the target repo (workspaces, projects, API key env var names). Pulls anomaly-weighted trace samples (errors first, latency outliers, baseline) within a time window, excluding input/output payloads. Writes per-project raw JSON under `~/.openwiki/connectors/langsmith/raw/<runId>/`. |
| `notion`         | mcp-stdio (label; may be HTTP) | `OPENWIKI_NOTION_MCP_ACCESS_TOKEN`                                                                 | yes               | Hosted Notion MCP server (or configured MCP transport); discovers tools (`mcp-tools.json`) or executes configured read-only operations (`mcp-results.json`).                                                                                                                                                                                                                        |
| `slack`          | direct-api                     | Slack user-token env key                                                                           | no                | `auth.test` identity, `search.messages` self-message search, bounded `conversations.list`/`.history` fallback, `assistant.search.context`. Writes `identity.json`, `my-messages-search.json`, `recent-messages.json`, `my-recent-messages.json`, `assistant-search.json`.                                                                                                           |
| `web-search`     | direct-api                     | `TAVILY_API_KEY` (via `OPENWIKI_TAVILY_API_KEY_ENV_KEY`)                                           | no                | Tavily search (`@langchain/tavily`) for configured queries. Writes `web-search-results.json`.                                                                                                                                                                                                                                                                                       |
| `x`              | direct-api                     | X OAuth user-context access token env key                                                          | no                | X API v2: `home_timeline`, `user_posts`, `mentions`, `bookmarks`, `list_posts` streams, paginated with per-stream `since_id` cursors (bookmarks always re-pulled). Writes one JSON file per stream/list.                                                                                                                                                                            |

### Notable per-connector behavior

- **Custom MCP is the generic extension point**: the `custom-mcp` connector is a built-in wrapper around any user-configured MCP server, not a plugin loader. Secrets are referenced as `${ENV_NAME}` in `transport.headers` / `transport.env` and resolved from `~/.openwiki/.env` only (the `McpConnectorConfig` transport schema substitutes those references before the child process or HTTP request is built). Because different MCP servers need different credentials, none are hard-required (`requiredEnv: []`). Onboarding seeds the personal template's sources with it and writes setup instructions to `~/.openwiki/connectors/custom-mcp/config.json`; the user edits that config to enable it and set a transport. Ingest resolves the config with `resolveMcpConnectorConfig()`, where disk config is the base and an optional ingest `connectorConfig` override (from onboarding) wins field-by-field without inventing defaults. Prefer `skills/write-connector/SKILL.md`'s guidance: add a dedicated built-in connector only when you need provider-specific auth, scoping UI, or deterministic API pulls that MCP cannot express.
- **LangSmith is code-mode only**: the connector is registered with `mode: "code"` and its config lives in `openwiki/.langsmith.json` committed to the target repository. In personal mode it returns a "skipped" result. The config lists one or more workspaces, each with an API key env var name (never the key itself), a region (US or EU), and the projects to document. A single `OPENWIKI_LANGSMITH_API_KEY` env var covers the primary workspace; additional workspaces use `OPENWIKI_LANGSMITH_API_KEY_<n>`.
- **LangSmith trace sampling**: ingestion pulls an anomaly-weighted sample of up to 20 traces per project (errors first, then latency outliers, then baseline) within the ingestion time window. The `select` field filter deliberately excludes `inputs` and `outputs` — a coding agent's run payloads can be enormous (~4 MB/run, ~200 MB/trace) and would blow request timeouts. Only structure, timings, tokens, and the small `error` field are kept.
- **Slack and "latest message" questions**: `my-recent-messages.json` includes a `definitiveForLatestMessage` flag. It is `true` only when the latest message was resolved via `search.messages` (requires the `search:read` user-token scope). If that search is unavailable, the connector falls back to a bounded `conversations.history` scan, sets `definitiveForLatestMessage: false`, and warns that the result is not reliably the user's true latest Slack message. Always check this flag before answering "what did I last say on Slack" from raw Slack data.
- **X streams and cursors**: each stream (except `bookmarks`) tracks a `since_id` cursor in connector state so repeated ingestion runs are incremental; `list_posts` fans out per configured `listIds`.
- **Notion is disabled until configured**: `enabled: true` plus a transport must be set in connector config before ingestion does anything beyond tool discovery.
- **git-repo supports agentic discovery**: it's marked `supportsAgenticDiscovery: true` alongside `notion` and `custom-mcp`, since a git checkout can be explored freely rather than pulled through a bounded API.

## Ingestion orchestration

`src/ingestion/ingestion.ts` (`runOpenWikiIngestion`) loads `~/.openwiki/.env`, reads onboarding config, builds the connector registry, and resolves a target — `"all"`, a bare `ConnectorId`, or a specific source instance id (connectors can be configured more than once, e.g. `web-search-1`/`web-search-2`, run individually via `openwiki ingest web-search-2`). For each matched instance it runs deterministic ingestion first (writing raw JSON + updating state), then the synthesis agent run reads those raw files to update the wiki. This split — deterministic fetch, then LLM synthesis — keeps credentialed network calls out of model-controlled code paths.

## Onboarding and scheduling

`src/setup/onboarding.ts` drives first-run setup: wiki template selection, scope customization, per-source ingestion notes, and source schedules, persisted to `~/.openwiki/onboarding.json`. Global personal-wiki instructions are saved to `~/.openwiki/INSTRUCTIONS.md`.

`src/scheduling/schedules.ts` installs source schedules as macOS user LaunchAgents (`~/Library/LaunchAgents/`) with logs under `~/.openwiki/logs/`, and backs the `openwiki cron list|pause|resume|delete` commands (see [CLI usage](../cli/usage.md)).

## Things to watch when changing connector behavior

- For arbitrary MCP servers, prefer the built-in `custom-mcp` connector over adding a new `ConnectorId`; see `skills/write-connector/SKILL.md` for the "Prefer Custom MCP" guidance. Add a dedicated built-in connector only when you need provider-specific auth, scoping UI, or deterministic API pulls that MCP cannot express.
- Connector tools are gated to personal/local-wiki runs: `createOpenWikiConnectorTools(outputMode)` returns `[]` for `repository` runs. If you change that gating, update `test/connectors/raw-connector-tools.test.ts` ("connector tool run-mode gating (#444)").
- Adding a connector means: extend `ConnectorId` in `types.ts`, add a source file under `src/connectors/sources/` (or reuse `createMcpConnector()` for MCP-backed sources), register it in `registry.ts`, and add its entry in `src/setup/credentials.tsx` onboarding (for personal-mode connectors) or in the code-mode connector config (for code-mode-only connectors like `langsmith`) — see `/skills/write-connector/SKILL.md` for the full checklist.
- Never write secret values into connector config or raw dumps — only env var names and presence booleans. For `custom-mcp`, secrets are referenced as `${ENV_NAME}` in transport headers/env and substituted from `~/.openwiki/.env`.
- Keep deterministic ingestion (network calls) out of agent-controlled code; the agent only reads what ingestion already wrote to `raw/`.
- MCP connectors must stay read-only; changes to `mcp-runtime.ts`'s tool-call policy directly affect what a hosted or custom MCP server is allowed to do on OpenWiki's behalf. The Notion name/description heuristic is `notion`-only — do not extend it to `custom-mcp`.
- `collectPaginatedTools()` in `mcp-client.ts` follows `tools/list` pagination (`nextCursor`). If you change discovery, keep the repeated-cursor and `MAX_TOOL_LIST_PAGES` bounds so a misbehaving server cannot hang discovery, and update `test/connectors/mcp-client.test.ts` ("listMcpTools pagination").

# Citations

- `src/connectors/types.ts`, `src/connectors/registry.ts`, `src/connectors/io.ts`, `src/connectors/http.ts`, `src/connectors/tools.ts`
- `src/connectors/mcp-client.ts`, `src/connectors/mcp-runtime.ts`, `src/connectors/sources/mcp.ts`
- `src/connectors/sources/git-repo.ts`, `src/connectors/sources/gmail.ts`, `src/connectors/sources/hackernews.ts`, `src/connectors/sources/langsmith/` (api.ts, index.ts, repo-config.ts, runs.ts, setup.ts, types.ts), `src/connectors/sources/slack.ts`, `src/connectors/sources/web-search.ts`, `src/connectors/sources/x.ts`
- `src/ingestion/ingestion.ts`, `src/setup/onboarding.ts`, `src/setup/credentials/constants.ts`, `src/scheduling/schedules.ts`
- `test/connectors/sources/custom-mcp.test.ts`, `test/connectors/mcp-runtime.test.ts`, `test/connectors/mcp-client.test.ts`, `test/connectors/raw-connector-tools.test.ts`, `test/connectors/tools.test.ts`, `test/setup/onboarding.test.ts`


---

## SOURCE · `arena/01a060a3-skill:tools/openwiki/openwiki/integrations/index.md`

<!-- blob: 7731f59fd4b220bdebdebf8cbbad9c046c761b71; bytes: 387 -->

# Files

- [OpenWiki Connectors](connectors.md) - OpenWiki's nine built-in connectors ingest data from Git repositories, Gmail, Hacker News, LangSmith, Notion, a generic Custom MCP source, Slack, web search, and X into a local raw cache for wiki synthesis. This reference documents connector architecture, read-only MCP safeguards, ingestion orchestration, and source-specific behavior.


---

## SOURCE · `arena/01a060a3-skill:tools/openwiki/openwiki/operations/credentials-and-updates.md`

<!-- blob: 9f1a78760c7153ff7e396796cca0b9529e152cb7; bytes: 31421 -->

---
type: Operations Guide
title: Credentials and updates
description: Operational reference for OpenWiki local credential storage, onboarding metadata, provider diagnostics, and update tracking. Covers scheduling workflows and CI automation for maintaining OpenWiki content safely.
tags: [operations, credentials, updates, scheduling, ci]
---

# Credentials and updates

OpenWiki has four operational concerns that matter for both users and maintainers:

1. local credential storage in `~/.openwiki/.env`, and
2. persisted personal wiki instructions in `~/.openwiki/INSTRUCTIONS.md` (personal mode) or `<repo>/openwiki/INSTRUCTIONS.md` (code mode),
3. persisted onboarding/schedule metadata in `~/.openwiki/onboarding.json`,
4. persisted update metadata in `openwiki/.last-update.json`.

It also ships with GitHub Actions and GitLab CI workflow examples for scheduled updates.

## Installation notes

On Windows, prefer installing OpenWiki with Node.js package managers such as
`npm` or `pnpm`. The Bun global-install path can fall back to compiling
`better-sqlite3`, which requires Visual Studio Build Tools with the Desktop
development with C++ workload. Bun does not run lifecycle scripts from installed
packages by default, so OpenWiki cannot show an install-time warning before that
native dependency build begins.

## Local credential storage

`src/config/env.ts` manages a private environment file under the user's home directory:

- directory: `~/.openwiki` (mode `0o700`)
- file: `~/.openwiki/.env` (mode `0o600`)

The file stores provider configuration and API keys:

- `OPENWIKI_PROVIDER` — the selected model provider
- `OPENWIKI_MODEL_ID` — the default model ID
- `OPENWIKI_PROVIDER_RETRY_ATTEMPTS` — optional positive integer retry count for transient provider request failures; defaults to 3 when unset
- `OPENWIKI_OPENROUTER_MAX_TOKENS` — optional positive integer cap on per-request output tokens for the openrouter provider, avoiding 402 credit-pre-check failures on low balances (non-secret, shown in diagnostics)
- Provider API keys: `OPENROUTER_API_KEY`, `OPENAI_API_KEY`, `OPENAI_COMPATIBLE_API_KEY`, `ANTHROPIC_API_KEY`, `BASETEN_API_KEY`, `FIREWORKS_API_KEY`, `GEMINI_API_KEY`, `NEBIUS_API_KEY`, `COPILOT_API_KEY` (the copilot provider can also authenticate via the GitHub CLI at runtime — see below)
- ChatGPT OAuth tokens (for the `openai-chatgpt` provider): `OPENAI_CHATGPT_ACCESS_TOKEN`, `OPENAI_CHATGPT_REFRESH_TOKEN`, `OPENAI_CHATGPT_EXPIRES_AT`, `OPENAI_CHATGPT_ACCOUNT_ID`, `OPENAI_CHATGPT_EMAIL`, `OPENAI_CHATGPT_PLAN`
- Connector OAuth credentials: `OPENWIKI_GMAIL_ACCESS_TOKEN`, `OPENWIKI_GMAIL_REFRESH_TOKEN`, `OPENWIKI_GOOGLE_CLIENT_ID`, `OPENWIKI_GOOGLE_CLIENT_SECRET`, `OPENWIKI_NOTION_MCP_ACCESS_TOKEN`, `OPENWIKI_NOTION_MCP_CLIENT_ID`, `OPENWIKI_NOTION_MCP_REFRESH_TOKEN`, `OPENWIKI_SLACK_USER_TOKEN`, `OPENWIKI_SLACK_CLIENT_ID`, `OPENWIKI_SLACK_CLIENT_SECRET`, `OPENWIKI_X_ACCESS_TOKEN`, `OPENWIKI_X_CLIENT_ID`, `OPENWIKI_X_CLIENT_SECRET`, `OPENWIKI_X_REFRESH_TOKEN`
- Base URLs: `ANTHROPIC_BASE_URL` (optional — routes the anthropic provider at an Anthropic-compatible endpoint other than the default API), `OPENAI_COMPATIBLE_BASE_URL` (required by the openai-compatible provider, which has no default endpoint), `OPENAI_BASE_URL` (optional — overrides the openai provider's default endpoint), `COPILOT_BASE_URL` (optional — overrides the copilot provider's default `https://api.githubcopilot.com`, useful for GHE.com data-residency hosts), `BASETEN_BASE_URL`, `FIREWORKS_BASE_URL`, `NVIDIA_BASE_URL` (optional overrides for those providers)
- AWS Bedrock credentials: `BEDROCK_AWS_ACCESS_KEY_ID`, `BEDROCK_AWS_SECRET_ACCESS_KEY`, `BEDROCK_AWS_SESSION_TOKEN` (optional), `BEDROCK_AWS_REGION` (all supported by the bedrock provider via `authMethod: "aws-sdk"`, which also accepts standard AWS env vars — `AWS_ACCESS_KEY_ID`, `AWS_SECRET_ACCESS_KEY`, `AWS_SESSION_TOKEN`, `AWS_REGION`, `AWS_DEFAULT_REGION` — as well as `AWS_BEARER_TOKEN_BEDROCK`, `AWS_ROLE_ARN`, and `AWS_WEB_IDENTITY_TOKEN_FILE` for OIDC/web identity)
- Connector API keys: `TAVILY_API_KEY` for Web Search
- Google Cloud settings for the gemini-enterprise provider: `GOOGLE_CLOUD_PROJECT` (required to run gemini-enterprise), `GOOGLE_CLOUD_LOCATION` (optional, defaults to `global`), and `GOOGLE_APPLICATION_CREDENTIALS` (optional service-account key file path; never prompted for — Google Application Default Credentials handle auth)
- Optional LangSmith settings: `LANGSMITH_API_KEY`, `LANGCHAIN_PROJECT`, `LANGCHAIN_TRACING_V2`
- Optional OAuth callback settings: `OPENWIKI_OAUTH_CALLBACK_PORT` controls the
  local callback port, and `OPENWIKI_HTTPS_OAUTH_REDIRECT_URI` stores the
  Slack-only HTTPS callback URL created by `openwiki ngrok start`.
- Telemetry settings: `OPENWIKI_TELEMETRY_DISABLED` or `DO_NOT_TRACK` (opt out of anonymous usage telemetry), `OPENWIKI_SCHEDULED` (marks a run as CI/scheduled so it is sent under a sentinel id that does not inflate human install counts)

The loader merges those values into `process.env`, while preferring existing process-level values over file values. Deprecated keys (`OPENAI_BASE_URL`, `OPENAI_ORG_ID`, `OPENAI_PROJECT`) are skipped on load and removed on save.

Values containing newlines or carriage returns are serialized as double-quoted strings with `\n`, `\r`, `\\`, and `\"` escaped by `formatEnvValue()`, and unescaped on load by `parseEnvValue()`. Carriage return escaping is important on Windows, where multi-line env values can contain bare `\r` characters that would otherwise be silently stripped during round-trip serialization.

Slack OAuth can require an HTTPS redirect URL, so `openwiki ngrok start <url>`
saves `OPENWIKI_HTTPS_OAUTH_REDIRECT_URI`. Other connector OAuth flows, such as
X/Twitter and Gmail, ignore that HTTPS override and use the local loopback
callback `http://127.0.0.1:<port>/callback`.

Gmail OAuth saves a read-only access token and refresh token. After
`openwiki auth gmail`, the Google connector is ready for direct Gmail API
ingestion without an MCP transport. By default it queries `newer_than:1d` and
writes `gmail-messages.json` under `~/.openwiki/connectors/google/raw/<run-id>/`.

Web Search uses Tavily through LangChain. First-run onboarding asks for
`TAVILY_API_KEY`, stores it in `~/.openwiki/.env`, and writes configured search
queries to `~/.openwiki/connectors/web-search/config.json`.

Hacker News uses public read-only APIs and does not require credentials. The
connector can fetch top/new/best/show/ask/job feeds and configured search
queries.

`src/setup/credentials.tsx` (thin re-export over `src/setup/credentials/` modules: `steps.ts`, `view.tsx`, `use-init-setup.ts`, `persistence.ts`, `format.ts`, `constants.ts`, `types.ts`) provides the interactive bootstrap flow when required:

- prompts for a provider (arrow-key selection menu),
- prompts for the provider's API key (skipped for the gemini-enterprise provider, which prompts for a required Google Cloud project ID and an optional location instead; skipped for the bedrock provider, which prompts for AWS access key ID, secret access key, and region instead),
- prompts for a model choice (arrow-key selection from the provider's model list, or a custom model ID),
- optionally prompts for a LangSmith key,
- writes the results with restrictive file permissions,
- removes deprecated OpenAI-related environment variables when saving.

The setup flow runs for **all** interactive commands (chat, init, and update) when credentials are missing — not just chat. In non-interactive mode (no TTY or `--print`), missing provider keys produce an error instead of a prompt.

## First-run onboarding profile

After model setup, first-run onboarding lets the user choose one of five wiki
templates: Personal Work OS, AI Research Radar, Git Project Wiki, Social Media

- Market Briefing, or Engineering Memory. Users can also choose Custom. The
  template seeds the wiki scope prompt, and the user can edit it before saving.

Onboarding then walks through source connections for local Git repositories,
Notion, Gmail, X/Twitter, Web Search, Hacker News, and the generic Custom MCP
source (configured via `~/.openwiki/connectors/custom-mcp/config.json` after
setup). Non-secret setup preferences are stored in `~/.openwiki/onboarding.json`:

- the selected template ID/name,
- which sources have been connected,
- optional per-source ingestion guidance,
- per-source cron expressions and plain-English schedule descriptions,
- macOS LaunchAgent paths when schedule installation succeeds,
- optional macOS `pmset` wake/sleep window metadata.

The user's global personal wiki scope/intent is stored as Markdown in
`~/.openwiki/INSTRUCTIONS.md` so it can be edited directly.

In **code mode**, the wiki brief is stored at the repository level as
`<repo>/openwiki/INSTRUCTIONS.md` instead of the global file.
`saveRepositoryWikiInstructions()` in `src/setup/onboarding.ts` writes the brief
there during code-mode onboarding, and `isRepositoryCodeOnboardingCompleteSync()`
checks for its presence when deciding whether onboarding is complete. This
ensures every new repository gets a proposed default wiki brief even when the
global onboarding profile is already complete. The agent prompt treats
`/openwiki/INSTRUCTIONS.md` as user-authored control metadata — it reads it
for scope and priorities but does not rewrite it during routine wiki
maintenance.

OAuth tokens and client secrets are not stored in these files. They remain in
`~/.openwiki/.env`.

## Local schedules

Source schedules are validated with `cron-parser` and described with
`cronstrue`. On macOS, OpenWiki installs simple cron schedules as user
LaunchAgents in `~/Library/LaunchAgents/com.openwiki.<source>.plist`. The plist
runs `openwiki --update --print` from the setup working directory and writes logs
under `~/.openwiki/logs/`.

LaunchAgent plists never embed secret values. Complex cron expressions that
cannot be represented directly as `StartCalendarInterval` are saved in the
onboarding profile with a warning instead of being installed inaccurately.

After saving a source cron, onboarding can also configure a Mac wake window with
`pmset`. OpenWiki computes a shared window across currently saved source
schedules: wake 2 minutes before the earliest supported schedule, then sleep 30
minutes after the latest supported schedule. The setup uses the macOS
administrator prompt because changing `pmset` repeat schedules is a system power
setting.

`pmset` is a single machine-level repeat schedule, not a per-source scheduler.
Setting it from OpenWiki may replace an existing repeat wake/sleep schedule. If
the Mac is closed, powered off, out of battery, or the cron expression cannot be
represented as a simple daily/weekly wake window, OpenWiki saves the source cron
and records a warning instead of installing an inaccurate power schedule.

Saved local schedules can be managed from the CLI:

- `openwiki cron list` shows saved connector schedules, launchd state, and the
  saved Mac wake window.
- `openwiki cron pause <source|all>` unloads the matching launchd job(s), keeps
  the cron metadata, and reconciles the shared `pmset` wake window.
- `openwiki cron resume <source|all>` reinstalls paused launchd job(s) from the
  saved cron metadata and reconciles the shared `pmset` wake window.
- `openwiki cron delete <source|all>` unloads the matching launchd job(s),
  removes the OpenWiki LaunchAgent plist(s), deletes only the schedule metadata,
  and reconciles the shared `pmset` wake window. It does not remove connector
  auth, connector config, raw data, or wiki content.

When pause or delete leaves no active OpenWiki schedules, OpenWiki cancels the
saved repeat `pmset` schedule and marks the saved wake window disabled.

## Provider resolution

`resolveConfiguredProvider()` in `src/config/constants.ts` determines the active provider:

1. If `OPENWIKI_PROVIDER` is set and valid, use it.
2. Otherwise, use the first available provider API key in this order: OpenAI, OpenAI-compatible, OpenRouter, Anthropic, Baseten, Fireworks, Nebius, NVIDIA, then Bedrock.
3. Otherwise, fall back to `DEFAULT_PROVIDER` (`openai`) and its default model (`gpt-5.6-terra`).

The copilot provider is selectable but never auto-detected — its credential comes from the GitHub CLI at runtime, so `resolveConfiguredProvider()` does not probe for it.

`needsCredentialSetup()` in `src/setup/credentials.tsx` checks whether the provider env var is valid and whether the provider's required credentials (its API key, or `GOOGLE_CLOUD_PROJECT` for gemini-enterprise — via `getMissingProviderEnvKey()` in `src/config/constants.ts`), a model ID (unless overridden), and a LangSmith key are all present. Any missing value or invalid provider triggers the interactive flow.

After the provider and model ID resolve, `resolveRunConfig()` in `src/agent/index.ts` validates the selected model's availability via `getSelectedModelAvailability()` in `src/model-availability.ts`. For the `openai` provider with an API key and the default endpoint, it queries the OpenAI Models API and aborts with a clear message when the model is not exposed to the configured credentials; every other case (non-OpenAI providers, custom endpoints, missing key, or lookup failure) proceeds as `unknown` so a catalogue lookup failure never blocks inference.

## Model and credential diagnostics

The env layer also produces diagnostics for the CLI UI. Those diagnostics report:

- where each credential came from (`process.env`, `~/.openwiki/.env`, both, or `unset`),
- whether the value is unset,
- the apparent length,
- a masked preview,
- warnings for suspicious formatting such as whitespace, newlines, quotes, or bracketed suffixes,
- invalid model IDs,
- invalid provider values,
- invalid `OPENWIKI_OPENROUTER_MAX_TOKENS` values.

Diagnostics cover all provider keys (including `OPENAI_CHATGPT_ACCESS_TOKEN` and related ChatGPT OAuth tokens), plus `OPENWIKI_PROVIDER`, `OPENWIKI_MODEL_ID`, `OPENWIKI_PROVIDER_RETRY_ATTEMPTS`, the base URLs (`ANTHROPIC_BASE_URL`, `OPENAI_COMPATIBLE_BASE_URL`, `OPENAI_BASE_URL`), the Google Cloud settings (`GOOGLE_CLOUD_PROJECT`, `GOOGLE_CLOUD_LOCATION`, `GOOGLE_APPLICATION_CREDENTIALS`), the AWS Bedrock settings (`BEDROCK_AWS_ACCESS_KEY_ID`, `BEDROCK_AWS_SECRET_ACCESS_KEY`, `BEDROCK_AWS_REGION`), connector credentials, and `LANGSMITH_API_KEY`. This makes startup problems easier to diagnose without exposing secret values (non-secret values such as the provider, model ID, retry attempts, base URLs, and the Google Cloud settings are shown in full — the service-account key _path_ is not a secret, though the file it points to is).

## Update metadata

After `init` or `update` runs where the `openwiki/` content changed, `src/agent/utils.ts` writes `openwiki/.last-update.json` with:

- `updatedAt`
- `command`
- `gitHead`
- `model`
- `status` — `"complete"` (default) or `"interrupted"`

The content-change check uses `createOpenWikiContentSnapshot()`, which hashes the `openwiki/` directory (excluding `.last-update.json`). If the hash is identical before and after the run, metadata is not written. This prevents scheduled update loops from updating the timestamp when no documentation changed.

### Interrupted runs

When a run fails mid-stream, the catch block in `src/agent/index.ts` still calls `persistRunMetadataIfChanged()` with `status: "interrupted"` so that already-generated content stays diffable by future updates. Without this, a crashed run would be indistinguishable from a completed one — the next update would see a clean worktree with an unchanged git head and skip as a no-op, treating a possibly partial wiki as current.

A rejection that escapes every catch (for example a subagent error surfacing on the microtask queue during streaming) is caught by the process-wide crash guard in `src/agent/crash-guard.ts`, installed once at CLI startup. `handleFatal()` records the crash to telemetry and stamps the run `interrupted` post-mortem before exiting non-zero, so the next scheduled update still retries instead of skipping against a half-written wiki.

`getUpdateNoopStatus()` checks `lastUpdate.status` before skipping: if it is `"interrupted"`, the update is not skipped. Metadata written by older versions (no `status` field) is treated as `"complete"`, so upgrades do not force a spurious re-run. A completed retry that changes no content still rewrites the metadata to clear a leftover interrupted status, so the no-op skip recovers instead of re-running forever.

Update runs use this metadata to build a change summary since the previous successful OpenWiki execution — preferring `gitHead` for a precise commit range, falling back to `updatedAt` for a time-based range.

## Ignoring paths with `.openwikiignore`

A `.openwikiignore` file at the repository root keeps generated docs from reading or describing private, generated, or irrelevant paths. It is enforced as a **read boundary** during the run, not just a generation hint.

Syntax is gitignore-compatible (`src/agent/openwiki-ignore.ts`): comments (`#`), blank lines, `*` and `**` globs, `?` single-char, leading-`/` anchoring to the repo root, trailing-`/` directory scoping, and `!` negation with last-match-wins ordering.

```gitignore
secrets/
*.log
!logs/keep.log
```

Enforcement and bounds:

- The compiled `OpenWikiIgnore` ruleset is threaded through the agent backend, prompt, and run context as one cohesive object (`src/agent/docs-only-backend.ts`). When rules are active, filesystem tools (`read_file`, `write_file`, `edit_file`, raw reads) hard-deny any path the ruleset excludes, and shell `execute` is restricted to a small allowlist of maintenance commands so ignored paths cannot be reached via the shell.
- Paths are canonicalized (`normalizeIgnorePath`) before matching, so equivalent spellings such as `./secrets/x`, `secrets/../secrets/x`, or backslash variants cannot slip past an anchored rule. Matching is case-insensitive (`/iu`) to close a bypass on case-insensitive filesystems where `Secrets/token.txt` and `secrets/token.txt` resolve to the same file.
- The agent prompt is told the run has `.openwikiignore` rules and that matching paths are out of scope, and is directed to use `ls`, `read_file`, `glob`, and `grep` (which keep exclusions enforced) instead of shell-based discovery. When `.openwikiignore` is active, the prompt's git-history hint tells the agent history is unavailable through the shell and to rely on allowed source files and tests.
- This is a read boundary, not a topic-suppression guarantee: ignored paths are never read, scanned, or reproduced, but the agent may still infer an ignored area from other allowed evidence such as tests, the README, or commit messages.

## Anonymous usage telemetry

OpenWiki collects anonymous, per-machine usage telemetry via PostHog (`src/telemetry/`). The system emits a single `openwiki_run` event per run with mode (code/personal), provider, outcome (success/failure), latency, environment, configured connectors, and a `build_channel` stamp. Telemetry can be disabled by setting `OPENWIKI_TELEMETRY_DISABLED=1` or `DO_NOT_TRACK=1`.

CI and scheduled runs are detected via `ci-info` (or `OPENWIKI_SCHEDULED=1`) and sent under a sentinel distinct id per provider rather than the machine's install id, so ephemeral CI runners do not inflate human install counts. The install id is stored at `~/.openwiki/install-id` and a one-time disclosure notice is shown on first run (`src/telemetry/config.ts`). Telemetry never stalls a run — the send and client shutdown are bounded by a 3-second flush timeout (`src/telemetry/config.ts`).

### Build channel stamping

Every event carries a `build_channel` property (`"official"` or `"community"`) baked into the build so fork-originated telemetry can be filtered from the official-release signal. The committed default in `src/telemetry/gates.ts` is `"community"`; the upstream release pipeline rewrites that one `BUILD_CHANNEL` assignment to `"official"` via `scripts/stamp-build-channel.cjs` (driven by the `OPENWIKI_BUILD_CHANNEL` env var set in `.github/workflows/release.yml`), so only npm-published upstream builds report `"official"` and every fork, local build, and source/dev run reports `"community"`. The stamp is fail-safe: an unset or unrecognized value always resolves to `"community"`, so an unexpected env value can never mint an `"official"` build, and the stamp throws if the expected single `BUILD_CHANNEL` assignment is not present exactly once (so a drifted file fails the release loudly instead of silently publishing an unstamped build). The rewrite is ephemeral in CI (a throwaway checkout that is never committed back), so the committed source stays `"community"`. The stamp runs inside the `pnpm release` script (publish path only, before `tsc`), never on the version-PR path.

### Error classification and fingerprinting

Failure events are classified by walking an unwrap chain (`unwrapErrorChain()`, bounded at 32 links, cycle-safe) so a provider error hidden inside a tool-error wrapper or `AggregateError` is recovered instead of collapsing into the residual `agent_error` bucket. The origin-tag read is itself a chain walk: `readErrorOrigin()` mirrors `classifyError()` and returns the first link whose tag names an owned family (class + detail + throw-site stage), falling back to the nearest stage-only tag — so an owned error re-wrapped by a framework keeps its class instead of decaying to `agent_error`. The one override is `build_error/stream_open`: that stage is the first provider round trip, so a failure there carrying a provider signal (the raw classifier already naming it `provider_error`, or an HTTP status on the chain paired with any non-residual class) is a disguised provider error and the raw classification wins over the tag, landing the failure on the provider instead of being counted as our build bug. The residual `agent_error` bucket carries no fixed detail; its `error_detail` is the innermost error's own allowlisted name (`innermostErrorName()`), read from both `.name` (which a framework like LangChain's `MiddlewareError` copies up from the inner error) and `constructor.name`, walking to the deepest link so a framework envelope does not collapse every distinct root cause to one name. The identifier gate (`isSafeErrorIdentifier()` in `src/telemetry/taxonomy.ts`) allows only a bare ASCII identifier (letters/digits with single interior underscores, ≤64 chars); anything else is dropped so the anonymity envelope stays closed. The `errorName` field was removed — the residual bucket's signal now travels in `error_detail` — so every failure class reports a single shared detail property.

## Scheduled CI workflows

During `openwiki code --init`, `src/ingestion/code-mode.ts` also creates `.github/workflows/openwiki-update.yml` in the target repository if it does not already exist. On `--update` and chat runs, an existing workflow file is preserved verbatim so repo-specific customizations (fork guards, pinned actions, custom steps) are never silently overwritten. AGENTS.md and CLAUDE.md snippets are refreshed in place on every code-mode run using `<!-- OPENWIKI:START -->` / `<!-- OPENWIKI:END -->` markers.

The generated workflow's `env:` block is derived from the provider the operator configured during setup (`createWorkflowProviderEnv()` in `src/ingestion/code-mode.ts`), so a freshly created workflow authenticates the actual configured provider instead of shipping a fixed OpenRouter block whose first scheduled run fails on a secret the repo was never told about. Secrets go through `secrets.<KEY>` and non-sensitive settings (endpoint, project, region) through `vars.<KEY>`; `OPENWIKI_MODEL_ID` is quoted (JSON-stringified) because model IDs are not all plain YAML scalars — a Cloudflare Workers AI ID leading with `@` is a reserved YAML indicator that fails to parse unquoted. OAuth/browser-login providers (like `openai-chatgpt`) emit a comment instead of a secret, because their access token is short-lived and refreshed in place, so pinning it would break on the first rotation. Bedrock emits no preset model ID because entitlements are account- and region-specific. The provider env derivation is covered by `test/ingestion/code-mode.test.ts` ("authenticates the provider the operator configured", "emits non-secret provider settings as repository variables", "pairs both AWS credentials and the region for Bedrock", "does not pin a rotating browser-login token as a secret", "quotes the model ID so reserved YAML characters survive").

The repository includes `examples/openwiki-update.yml` as a copyable GitHub Actions scheduled update workflow. It:

- runs on schedule (daily at 08:00 UTC) and on manual dispatch,
- checks out the repository with `fetch-depth: 0` (full history) so `openwiki code --update` can diff HEAD against the commit it last documented — a shallow clone hides that commit and the update runs against an empty change summary,
- installs Node.js 22,
- installs OpenWiki globally,
- runs `openwiki code --update --print`,
- passes `OPENROUTER_API_KEY`, `OPENWIKI_MODEL_ID`, and `LANGSMITH_API_KEY` from GitHub secrets,
- opens a pull request with `peter-evans/create-pull-request` scoped to the `openwiki` directory.

The workflow is a good reference for automated maintenance. The repo also contains a `checks.yml` workflow for CI (lint/format checks).

The repository also includes `examples/openwiki-update.gitlab-ci.yml` as a copyable GitLab CI scheduled update job. It:

- runs from a scheduled pipeline or a manually triggered web pipeline,
- sets `GIT_DEPTH: "0"` (full clone) so `openwiki code --update` can diff HEAD against the last-documented commit — GitLab's default shallow clone hides that commit,
- installs OpenWiki globally in a Node.js 22 container,
- runs `openwiki code --update --print`,
- skips the rest of the job when `openwiki/` did not change,
- commits changes to a generated `openwiki/update-$CI_PIPELINE_ID` branch,
- pushes that branch back to the GitLab project, and
- creates a merge request targeting the project's default branch through the GitLab API.

GitLab users should configure protected CI/CD variables for the model provider key, for example `OPENROUTER_API_KEY`, and `OPENWIKI_GITLAB_TOKEN`. The GitLab token needs permission to push a branch and create merge requests in the target project.

The repository also includes `examples/openwiki-update.bitbucket-pipelines.yml` as a copyable Bitbucket Pipelines scheduled update job. It:

- runs on a custom schedule or manual trigger,
- clones with `depth: full` so `openwiki code --update` can diff HEAD against the last-documented commit — Bitbucket's default shallow clone hides that commit,
- installs OpenWiki globally in a Node.js 22 container,
- runs `openwiki code --update --print`,
- commits changes to a generated `openwiki/update-$BITBUCKET_BUILD_NUMBER` branch,
- pushes that branch back to the Bitbucket repository, and
- creates a pull request targeting the default branch through the Bitbucket API.

Bitbucket users should configure repository variables for the model provider key (for example `OPENROUTER_API_KEY`) and `OPENWIKI_BITBUCKET_TOKEN`. The Bitbucket token needs write permission to push a branch and create pull requests in the target repository.

## Things to watch when changing operations

- The `.env` file lives outside the repository, so changes to its format should be conservative.
- Never document real secret values; only document the presence and purpose of the configuration.
- If update metadata semantics change, update both the agent runtime and the docs that explain how update runs are scoped.
- Scheduled automation depends on the same CLI entrypoint as local users, so workflow changes should be validated against `package.json` and the CLI help text.
- When adding a provider, update `managedEnvKeys` in `src/config/env.ts` so the env file is formatted correctly and diagnostics cover the new key. Providers without an API key (like gemini-enterprise) declare their required env keys in `PROVIDER_CONFIGS` (e.g. `projectEnvKey`) and are gated by `getMissingProviderEnvKey()`. Providers with a paired secret and region (like bedrock) use `secretKeyEnvKey` and `regionEnvKey` with `requiresRegion: true`. External-CLI-auth providers (like copilot) declare `authMethod: "external-cli"` and `externalCliAuthAdapter`; the CLI login flow is handled in `src/auth/external-cli-auth.ts`, and the token is never persisted to `~/.openwiki/.env`. AWS SDK providers (like bedrock) declare `authMethod: "aws-sdk"` and delegate credential resolution to the AWS SDK chain.
- The content-snapshot check means CI runs that produce no changes will not update `.last-update.json` or open a PR with metadata-only changes.
- Scheduled update workflows must fetch full history (`fetch-depth: 0` for GitHub Actions, `GIT_DEPTH: "0"` for GitLab CI, `clone: depth: full` for Bitbucket). A shallow clone hides the commit recorded in `.last-update.json`, so `openwiki code --update` cannot build a change window and runs against an empty summary.
- The generated GitHub Actions workflow's `env:` block is provider-aware: `createWorkflowProviderEnv()` in `src/ingestion/code-mode.ts` derives it from the configured provider, routing secrets through `secrets.<KEY>` and non-sensitive settings through `vars.<KEY>`, quoting `OPENWIKI_MODEL_ID`, and emitting a comment for browser-login providers. If you change provider config fields, keep `createWorkflowProviderEnv()` and `test/ingestion/code-mode.test.ts` in sync so a freshly created workflow still authenticates the operator's provider.
- Interrupted runs write `status: "interrupted"` so the next update retries. If metadata semantics change, keep `getUpdateNoopStatus()` and `persistRunMetadataIfChanged()` in sync so the interrupted/complete lifecycle is preserved.
- The `build_channel` stamp (`scripts/stamp-build-channel.cjs`) targets exactly one `const BUILD_CHANNEL: BuildChannel = "…"` assignment in `src/telemetry/gates.ts`. Renaming that line, splitting it, or changing its formatting breaks the regex and fails the release loudly (`test/stamp-build-channel.test.ts`). Keep the committed value `"community"`; only the upstream release pipeline (`.github/workflows/release.yml`) sets `OPENWIKI_BUILD_CHANNEL=official`. A drifted `gates.ts` that no longer matches the assignment pattern will throw instead of silently publishing an unstamped build.

## Source map

- `src/config/env.ts`
- `src/setup/credentials.tsx` (re-exports `src/setup/credentials/`)
- `src/config/constants.ts`
- `src/agent/utils.ts`
- `src/agent/index.ts`
- `src/model-availability.ts`
- `src/agent/openai-chatgpt-oauth.ts`
- `src/auth/external-cli-auth.ts`
- `src/platform/diagnostics.ts`
- `src/telemetry/`
- `scripts/stamp-build-channel.cjs`
- `.github/workflows/release.yml`
- `src/auth/oauth.ts`
- `src/auth/oauth-discovery.ts`
- `src/auth/providers.ts`
- `src/auth/configure.ts`
- `src/auth/tokens.ts`
- `src/setup/onboarding.ts`
- `src/scheduling/schedules.ts`
- `src/ingestion/code-mode.ts`
- `src/agent/openwiki-ignore.ts`
- `src/agent/docs-only-backend.ts`
- `src/agent/prompt.ts`
- `examples/openwiki-update.yml`
- `examples/openwiki-update.gitlab-ci.yml`
- `examples/openwiki-update.bitbucket-pipelines.yml`
- `README.md`


---

## SOURCE · `arena/01a060a3-skill:tools/openwiki/openwiki/operations/index.md`

<!-- blob: 83d6688ae0542367ada0b521cbda11be2f74d2b2; bytes: 279 -->

# Files

- [Credentials and updates](credentials-and-updates.md) - Operational reference for OpenWiki local credential storage, onboarding metadata, provider diagnostics, and update tracking. Covers scheduling workflows and CI automation for maintaining OpenWiki content safely.


---

## SOURCE · `arena/01a060a3-skill:tools/openwiki/openwiki/quickstart.md`

<!-- blob: c23c62e37dd527bfc36dd7485808d7b47cff5dbe; bytes: 14305 -->

---
type: Quickstart Guide
title: OpenWiki Quickstart
description: Quickstart reference for the OpenWiki TypeScript CLI, including documentation-generation workflows, supported model providers, and the primary source files. Use it to navigate the repository's architecture, commands, agent runtime, operations, and connectors.
tags: [openwiki, quickstart, cli, documentation]
---

# OpenWiki quickstart

OpenWiki is a TypeScript CLI that writes and maintains documentation for a repository using an agent-driven workflow. The package exposes a single `openwiki` binary (entrypoint `./dist/cli/cli.js`), stores local credentials in `~/.openwiki/.env`, and records successful update metadata in `openwiki/.last-update.json`.

## What this repository does

- Launches an interactive Ink-based terminal app for chatting with the OpenWiki agent.
- Supports one-shot documentation runs with `--init`, `--update`, and `--print`.
- Supports multiple model providers — OpenAI (default, API key or ChatGPT OAuth login), GitHub Copilot (via GitHub CLI), OpenRouter, Anthropic, Gemini (AI Studio), Gemini Enterprise (Vertex AI, keyless via Google ADC), AWS Bedrock, Nebius Token Factory, Baseten, Fireworks, NVIDIA NIM, and any OpenAI-compatible gateway — each with their own credentials and model list (Gemini Enterprise uses Google ADC instead of an API key; Bedrock uses AWS access/secret keys and region; Copilot uses the GitHub CLI for auth).
- Uses a DeepAgents local shell backend with virtual filesystem paths rooted at the target repository.
- Creates or refreshes documentation under the target repository's `openwiki/` directory.
- Auto-exits after successful `--init` or `--update` runs in an interactive terminal, so the CLI works as both a one-shot and interactive tool.
- Optionally schedules automated updates through GitHub Actions, GitLab CI, or Bitbucket Pipelines.
- Ships a paired DeepSWE evaluation harness (`evals/deepswe/`) that measures OpenWiki's documentation leverage on a Codex coding agent.
- Serves an interactive node-graph visualizer (`openwiki visualize`) for an already-generated wiki, with live edits refreshed over SSE.
- Honors a repo-root `.openwikiignore` file as a read boundary that keeps private/generated paths out of doc runs.
- Generates the wiki in a non-English language with `--language <locale>` (BCP-47); the language is persisted and retranslated on a switch via the translation middleware.
- Stamps a `build_channel` (`official` / `community`) into each telemetry event at build time so fork-originated telemetry can be filtered from the official-release signal.
- Validates the selected OpenAI model against the API key's model catalogue before inference, aborting early when the model is unavailable to the configured credentials.
- Caps OpenRouter per-request output tokens with `OPENWIKI_OPENROUTER_MAX_TOKENS` to avoid 402 credit-pre-check failures on low balances.
- Offers a built-in `custom-mcp` connector so a personal-wiki run can ingest from any read-only MCP server without a dedicated connector, and gates all connector tools to personal/local-wiki runs so code-mode runs never make credentialed external fetches.

## Start here

- [Architecture overview](./architecture/overview.md) — runtime structure, major modules, and execution flow.
- [CLI usage](./cli/usage.md) — commands, options, model/provider selection, and credential bootstrap.
- [Agent workflow](./agent/workflow.md) — how documentation runs are assembled and persisted.
- [Credentials and updates](./operations/credentials-and-updates.md) — local env storage, metadata, and scheduled updates.
- [Connectors](./integrations/connectors.md) — built-in connector architecture, the nine connectors (including the generic Custom MCP source), and ingestion orchestration.
- [DeepSWE evaluation harness](./evals/deepswe-harness.md) — paired DeepSWE benchmark harness that measures OpenWiki's documentation leverage on Codex.

## Key source files

- `README.md` — user-facing installation and usage summary.
- `package.json` — bin entrypoint, scripts, and dependencies.
- `src/cli/cli.tsx` — process entrypoint: parses argv, loads env, and dispatches to the interactive app, print runner, or operational subcommands.
- `src/cli/app/app.tsx` — Ink interactive app shell: chat, run lifecycle, provider/model selection, and streaming.
- `src/cli/commands.ts` — CLI parsing and help content.
- `src/cli/runners.ts` — non-interactive runners for auth, ngrok, cron, ingest, visualize, and print commands.
- `src/cli/diagnostics/` — `error-diagnostics.ts`, `sanitize.ts`, and `auth-fix.ts` for the `--debug` diagnostics panel and auth-failure fix guidance.
- `src/agent/index.ts` — agent runtime, provider-specific model creation (including ChatGPT OAuth), OpenAI model-availability pre-check, fallback, and metadata writes.
- `src/agent/prompt.ts` — prompt assembler: selects a template by output mode and substitutes placeholders.
- `src/agent/prompts/code.ts` — `CODE_SYSTEM_PROMPTS`/`CODE_USER_PROMPTS` for repository runs (init/update/chat contracts, including the skeleton-critic and wiki-QA verification workflow).
- `src/agent/prompts/personal.ts` — `PERSONAL_SYSTEM_PROMPTS`/`PERSONAL_USER_PROMPTS` for local personal-brain runs.
- `src/agent/skeleton_critic.ts` — `skeleton_critic` init-only subagent that reviews the proposed wiki skeleton against the repository.
- `src/agent/wiki_qa_subagents.ts` — `wiki_question_finder` and `wiki_answer_verifier` init-only subagents that verify the completed wiki answers source-grounded questions.
- `src/agent/crash-guard.ts` — process-wide `installCrashGuard()` + `registerActiveRun`/`handleFatal` that records and stamps an escaped rejection as an interrupted run; `handleFatal` claims the active run synchronously so a burst of escaped rejections records one crash.
- `src/agent/utils.ts` — run context, content snapshot, and `.last-update.json` handling.
- `src/agent/types.ts` — shared agent types (`OpenWikiCommand`, `RunContext`, `UpdateMetadata`, run options/events).
- `src/agent/docs-only-backend.ts` — `OpenWikiLocalShellBackend`, extends DeepAgents `LocalShellBackend` with docs-only write guards and output-mode awareness.
- `src/agent/openai-chatgpt-oauth.ts` — ChatGPT OAuth flow, token persistence, and refresh logic for the `openai-chatgpt` provider.
- `src/auth/oauth.ts` — generic OAuth runner for connector providers (Gmail, Notion, Slack, X).
- `src/auth/oauth-discovery.ts` — OAuth endpoint validation and protected-resource metadata discovery for connector OAuth flows.
- `src/auth/providers.ts` — connector OAuth provider configs (scopes, token URLs, env-key mappings).
- `src/auth/configure.ts` — `openwiki auth configure <provider>` flow for creating local connector configs.
- `src/auth/ngrok.ts` — Slack HTTPS callback tunnel via ngrok.
- `src/auth/tokens.ts` — token refresh and validation helpers for connector OAuth.
- `src/agent/okf-middleware.ts` — OKF front-matter migration and index synchronization middleware; its finalize stage also validates Mermaid fences and internal wiki links.
- `src/agent/wiki-link-validator.ts` — validates internal links repo-wide (not just the `openwiki/` subtree) and GitHub-style heading anchors on Markdown targets after generation, stamping broken links inline instead of failing the run.
- `src/agent/translation-middleware.ts` — wiki translation middleware for output-language switching.
- `src/agent/vertex-surface.ts` — Vertex AI model routing for the gemini-enterprise provider.
- `src/agent/skills.ts` — bundles and syncs the `/skills/` directory into the agent runtime.
- `src/auth/external-cli-auth.ts` — GitHub CLI-based credential resolution for the copilot provider.
- `src/platform/diagnostics.ts` — secret redaction and credential diagnostics.
- `src/okf/` — OKF front-matter validation, index-label localization, and deterministic index synchronization.
- `src/mermaid/` — Mermaid fence extraction, validation, and wiki repair.
- `src/telemetry/` — anonymous usage telemetry with PostHog, opt-out, CI sentinel IDs, error classification/fingerprinting, and a baked-in `build_channel` stamp.
- `scripts/stamp-build-channel.cjs` — release-only build-time rewrite of `BUILD_CHANNEL` in `src/telemetry/gates.ts` from `"community"` to `"official"` for npm-published upstream builds, driven by `OPENWIKI_BUILD_CHANNEL` in `.github/workflows/release.yml`.
- `src/connectors/` — connector registry, MCP client/runtime, source-specific ingestion (git-repo, gmail, hackernews, langsmith, slack, web-search, x), and tool definitions.
- `src/ingestion/ingestion.ts` — orchestrates source ingestion runs across configured connectors.
- `src/ingestion/code-mode.ts` — `openwiki code` setup: creates the GitHub Actions workflow only when missing (preserving customizations on update) and refreshes AGENTS.md/CLAUDE.md snippets.
- `src/config/env.ts` — `~/.openwiki/.env` persistence and credential diagnostics.
- `src/setup/credentials.tsx` — interactive onboarding flow entrypoint (thin re-export over `src/setup/credentials/` modules: `steps.ts`, `view.tsx`, `use-init-setup.ts`, `persistence.ts`, `format.ts`, `constants.ts`, `types.ts`).
- `src/config/constants.ts` — provider configs, model options, env keys, and validation helpers (including `resolveOpenRouterMaxTokens`).
- `src/model-availability.ts` — `getSelectedModelAvailability()` validates the selected model against the OpenAI `/models` catalogue before inference; `unavailable` aborts, `unknown` proceeds.
- `examples/openwiki-update.yml` — GitHub Actions scheduled automation example.
- `examples/openwiki-update.gitlab-ci.yml` — GitLab CI scheduled automation example.
- `examples/openwiki-update.bitbucket-pipelines.yml` — Bitbucket Pipelines scheduled automation example.
- `evals/deepswe/run.py` — paired DeepSWE evaluation harness entrypoint (see [DeepSWE evaluation harness](./evals/deepswe-harness.md)).
- `src/visualize/server.ts` — local loopback HTTP server for `openwiki visualize` (node graph + live reader, SSE reload).
- `src/visualize/graph.ts` — parses the wiki into concept nodes and Markdown-link edges for the visualizer.
- `src/visualize/page.ts` — branded single-page visualizer app HTML served at `/`.
- `src/agent/openwiki-ignore.ts` — `.openwikiignore` parsing and gitignore-compatible matching (read boundary for doc runs).
- `src/platform/language.ts` — `resolveLanguage()` BCP-47 validation/canonicalization for `--language`.

## Documentation map

- [Architecture](./architecture/overview.md)
- [CLI](./cli/usage.md)
- [Agent](./agent/workflow.md)
- [Operations](./operations/credentials-and-updates.md)
- [Connectors](./integrations/connectors.md)
- [DeepSWE evaluation harness](./evals/deepswe-harness.md)

## Notes for future agents

- The repository is intentionally focused: the main product surface is the CLI plus the documentation-generation agent.
- Treat `openwiki/` in this repo as generated documentation output from a future OpenWiki run, not as application source.
- When changing behavior, verify both the CLI parser and the agent prompt/runtime, because user-visible semantics are split across `src/cli/commands.ts`, `src/cli/cli.tsx`, and `src/agent/*`.
- Provider support is centralized in `src/config/constants.ts`. Adding or changing a provider means updating `PROVIDER_CONFIGS`, the `OpenWikiProvider` type, the `SELECTABLE_OPENWIKI_PROVIDERS` list, and the model-creation branch in `src/agent/index.ts`. OAuth-based providers also need an entry in `src/auth/` if they use browser-login flows. Providers without an API key (like `gemini-enterprise`) declare their required env keys (e.g. `projectEnvKey`) in `PROVIDER_CONFIGS` and are gated by `getMissingProviderEnvKey()` instead. External-CLI-auth providers (like `copilot`) declare `authMethod: "external-cli"` and an `externalCliAuthAdapter`, with the login flow handled in `src/auth/external-cli-auth.ts`. AWS SDK providers (like `bedrock`) declare `authMethod: "aws-sdk"` and delegate credential resolution to the AWS SDK chain.

## Source map

- `README.md`
- `package.json`
- `src/cli/cli.tsx`
- `src/cli/app/app.tsx`
- `src/cli/commands.ts`
- `src/cli/runners.ts`
- `src/cli/diagnostics/` (`error-diagnostics.ts`, `sanitize.ts`, `auth-fix.ts`)
- `src/agent/index.ts`
- `src/model-availability.ts`
- `src/agent/prompt.ts`
- `src/agent/prompts/code.ts`
- `src/agent/prompts/personal.ts`
- `src/agent/skeleton_critic.ts`
- `src/agent/wiki_qa_subagents.ts`
- `src/agent/crash-guard.ts`
- `src/agent/utils.ts`
- `src/agent/types.ts`
- `src/agent/docs-only-backend.ts`
- `src/agent/openai-chatgpt-oauth.ts`
- `src/agent/openwiki-ignore.ts`
- `src/auth/oauth.ts`
- `src/auth/oauth-discovery.ts`
- `src/auth/providers.ts`
- `src/auth/configure.ts`
- `src/auth/ngrok.ts`
- `src/auth/tokens.ts`
- `src/auth/types.ts`
- `src/auth/external-cli-auth.ts`
- `src/connectors/registry.ts`
- `src/connectors/tools.ts`
- `src/connectors/types.ts`
- `src/connectors/http.ts`
- `src/connectors/mcp-client.ts`
- `src/connectors/mcp-runtime.ts`
- `src/connectors/io.ts`
- `src/connectors/sources/git-repo.ts`
- `src/connectors/sources/gmail.ts`
- `src/connectors/sources/hackernews.ts`
- `src/connectors/sources/langsmith/` (api.ts, index.ts, repo-config.ts, runs.ts, setup.ts, types.ts)
- `src/connectors/sources/mcp.ts`
- `src/connectors/sources/slack.ts`
- `src/connectors/sources/web-search.ts`
- `src/connectors/sources/x.ts`
- `src/ingestion/ingestion.ts`
- `src/ingestion/code-mode.ts`
- `src/config/env.ts`
- `src/setup/credentials.tsx` (re-exports `src/setup/credentials/`)
- `src/setup/onboarding.ts`
- `src/config/constants.ts`
- `src/auth/external-cli-auth.ts`
- `src/platform/diagnostics.ts`
- `src/platform/utils.ts`
- `src/platform/language.ts`
- `src/okf/` (frontmatter.ts, index-labels.ts, index-sync.ts)
- `src/mermaid/` (dom-shim.ts, fences.ts, validate.ts, wiki.ts)
- `src/telemetry/`
- `scripts/stamp-build-channel.cjs`
- `examples/openwiki-update.yml`
- `examples/openwiki-update.gitlab-ci.yml`
- `examples/openwiki-update.bitbucket-pipelines.yml`
- `src/visualize/` (server.ts, graph.ts, page.ts, client.ts, client-lib.ts)
- `src/agent/openwiki-ignore.ts`
- `src/scheduling/schedules.ts`


---

## SOURCE · `arena/01a060a3-skill:tools/openwiki/skills/mermaid-diagrams/SKILL.md`

<!-- blob: a2cc60dec835137719723c3599ad96c794a1093d; bytes: 3810 -->

---
name: mermaid-diagrams
description: Embed Mermaid diagrams in generated wiki pages. Use whenever documenting a runtime or request flow, a call sequence, a state machine or lifecycle, a data model or entity relationships, or non-trivial control flow, since these are clearer as a diagram than as prose. Also use when an update run touches a page that already contains a mermaid fence, or a page that contains a text fence a previous run degraded.
---

# Mermaid Diagrams In Generated Wiki Pages

Diagrams are part of high-quality wiki generation, not decoration. Where a flow,
lifecycle, or data model is easier to grasp visually, embed a Mermaid diagram in
a fenced ```mermaid block on the most relevant page.

## Choosing a diagram type

- `sequenceDiagram` for runtime and request flows across components (auth flows, request lifecycles, agent tool loops).
- `stateDiagram-v2` for lifecycles and state machines (job states, connection states, run phases).
- `erDiagram` for the data model: entities and their relationships.
- `flowchart TD` for branching control flow and decision logic.

## Discipline

- Ground every diagram in inspected source. Do not invent participants, states, entities, or relationships the code does not support.
- Cover the high-value cases: add a diagram wherever a page documents a request or runtime flow, a call sequence, a lifecycle or state machine, or a data model. A repository wiki usually has several such diagrams, not one overall. Skip pages that are navigation, reference tables, or pure configuration.
- Still prefer a few strong diagrams over decorating every page: one accurate diagram on the page that needs it beats a diagram forced onto every page.
- Give each diagram a one-line caption directly below it stating what it shows.
- OpenWiki validates every mermaid fence after your run and converts fences that fail to parse into plain text fences. A degraded diagram is a quality failure; follow the syntax rules below so it does not happen.

## Syntax safety

These rules prevent the most common render breakages. When in doubt, rephrase the label.

- Never place semicolons or pipes inside node, message, or edge labels.
- Never place unescaped angle brackets in labels; write "returns Promise of User" instead of "returns Promise<User>".
- In `flowchart`, wrap any label containing parentheses, brackets, or other punctuation in double quotes: `A["calls foo(bar)"]`.
- In `flowchart`, never use the bare word `end` as a node id, and never start a node id with `o` or `x` followed by a dash (both are edge-marker syntax); rename the node.
- In `sequenceDiagram`, participant names with spaces or punctuation need an alias: `participant AS as Auth Service`.
- Never use a Mermaid reserved word as a participant name, alias, or node id: `note`, `end`, `loop`, `alt`, `opt`, `par`, `and`, `else`, `activate`, `deactivate`, `class`, `state`, `click`, `link`. For example a notification participant must be `Notifier`, not `Note` (which collides with the `note` keyword).
- In `erDiagram`, entity and attribute names must be single identifier-like tokens; put human phrasing in the relationship label.
- Keep labels short. Move explanation into the surrounding prose or the caption, not the diagram.

## Update runs

- A wrong diagram is a stale claim, not existing structure to preserve. If a source change makes a diagram inaccurate, update the diagram in the same edit as the surrounding prose.
- Do not rewrite a diagram that is still accurate. Regenerating unchanged diagrams creates diff noise.
- If a page contains a text fence preceded by an HTML comment starting with "openwiki: mermaid parse failed", that is a diagram a previous run degraded. Fix the syntax using the parser error in the comment, restore the ```mermaid fence, and delete the comment.


---

## SOURCE · `arena/01a060a3-skill:tools/openwiki/skills/write-connector/SKILL.md`

<!-- blob: 362f67d84b7236f78e1020e502c8563df0b1a9aa; bytes: 3258 -->

---
name: write-connector
description: Add a new built-in OpenWiki source connector. Use when a user asks to create or implement an OpenWiki connector.
---

# Write An OpenWiki Connector

OpenWiki connectors are built-in TypeScript modules in the OSS repository. Do not create a plugin marketplace, dynamic connector package, or runtime-loaded untrusted connector. Add normal source files and tests.

## Prefer Custom MCP For Arbitrary Servers

If the knowledge source already exposes a read-only MCP server (HTTP or stdio), use the built-in `custom-mcp` connector instead of adding a new ConnectorId:

- Configure `~/.openwiki/connectors/custom-mcp/config.json` with `enabled`, `transport`, optional `allowedTools`, and optional `readOnlyOperations`.
- Put secrets in `~/.openwiki/.env` and reference them as `${ENV_NAME}` in transport headers/env.
- Agent tools `openwiki_list_mcp_tools` / `openwiki_call_mcp_tool` accept `custom-mcp`.

Add a dedicated built-in connector only when you need provider-specific auth, scoping UI, or deterministic API pulls that MCP cannot express.

## Required Shape

- Add the connector to src/connectors/types.ts and src/connectors/registry.ts.
- Implement the connector under src/connectors/sources/<connector>.ts.
- The connector must expose a ConnectorRuntime with id, displayName, description, backend, requiredEnv, supportsAgenticDiscovery, and ingest().
- Ingestion writes raw JSON/manifests under ~/.openwiki/connectors/<id>/raw/<run-id>/.
- State lives in ~/.openwiki/connectors/<id>/state.json.
- Config lives in ~/.openwiki/connectors/<id>/config.json.
- Secrets live in ~/.openwiki/.env and are referenced only by env var name.

## Security Rules

- Never read, print, log, return, or hardcode secret values.
- Do not store credentials in connector config, raw files, state, logs, or tests.
- Validate connector IDs and raw file paths so reads and writes stay inside ~/.openwiki/connectors/<id>/.
- Use deterministic ingestion code for credentialed external fetching.
- If wrapping MCP, treat the MCP server as read-only and call only allowlisted read/dump operations from connector config.
- Do not let untrusted connector manifests instantiate arbitrary commands or arbitrary network endpoints without explicit built-in code review.
- For `custom-mcp`, users configure a reviewed built-in wrapper; still require allowedTools and/or MCP readOnlyHint before agentic tool calls (no mutating-tool heuristics beyond Notion's hosted endpoint).

## Ingestion Rules

- Git/local repos should write compact manifests and let the agent inspect the local repo as the source of truth.
- Sources with timestamps should store per-stream cursors.
- Sources with object metadata should store IDs, last edited timestamps, and content hashes.
- Sources with pagination should store enough state to continue without refetching everything.
- Raw dumps should preserve source IDs, timestamps, URLs, authors, and enough provenance for citations.

## User-Facing Finish

When done, tell the user:

- which connector files changed,
- which env vars to set in ~/.openwiki/.env,
- what config file to create or edit,
- how to run openwiki personal --update to trigger ingestion,
- which scopes/permissions the source provider requires.


---

## SOURCE · `arena/01a060a3-skill:tools/rustdesk/SKILL.md`

<!-- blob: aa36b2a19846667715ed5e78c204801920e83b03; bytes: 2358 -->

---
name: rustdesk
description: Install, verify, and operate the repository-pinned RustDesk native remote-desktop client with explicit authorization and security boundaries. Use for RustDesk source/package setup, native runtime checks, or approved remote-support procedures. Never use it for covert, unauthorized, or persistent access.
---

# RustDesk native remote desktop

Use the stable source pin at `full-sources/tools/rustdesk`. RustDesk is a native GUI and remote-control system, not a browser preview.

## Installation workflow

1. Read `guides/TOOLS.md`, confirm the `1.4.9` source tag and exact commit, and identify the host OS/architecture.
2. Initialize the source checkout:

   ```bash
   bash scripts/setup_tools.sh rustdesk-source
   ```

3. Prefer an official OS package. On Debian-compatible x86_64 hosts, either let the helper retrieve the official release asset or provide an already downloaded official package:

   ```bash
   RUSTDESK_PACKAGE=/absolute/path/rustdesk-1.4.9-x86_64.deb \
     bash scripts/setup_tools.sh rustdesk-package
   ```

4. Validate package identity, version, architecture, nonzero size, and extraction before invoking it. The helper installs under `~/.local/share/rustdesk`; it does not alter system package state.
5. Run only in an interactive desktop session with explicit authorization:

   ```bash
   bash scripts/run_rustdesk.sh
   ```

6. Verify separately: source pin, package integrity/metadata, dynamic-library readiness, GUI launch, and an authorized connection. Do not collapse these into one “installed” claim.

## Security rules

- Obtain informed authorization from the owner of every endpoint and session.
- Show the user when control, clipboard, audio, file transfer, tunneling, or unattended access is active.
- Use least privilege, strong credentials, current server/client versions, and a trusted relay or self-hosted deployment when required.
- Do not bypass consent prompts, hide execution, weaken endpoint controls, harvest credentials, or create persistence.
- Redact IDs, passwords, addresses, logs, screenshots, and transferred files from reports.

## Failure handling

If an official release asset cannot be reached, keep the verified source checkout and report binary installation as blocked. Do not substitute an unverified mirror or claim that a source gitlink is a runnable GUI.


---

## SOURCE · `arena/01a060a3-skill:tools/screencoder/SKILL.md`

<!-- blob: b0bc649e5ae10c06a8aa4d5ed77b23a3445537f4; bytes: 7552 -->

---
name: screencoder
description: 将网页或应用 UI 截图拆解为可编辑、可继续开发的 HTML/CSS。适用于 screenshot-to-code、设计稿复刻、页面原型还原和已有截图的结构化前端重建；结合 ScreenCoder 的区域规划、UIED 元素检测、多模态代码生成、占位图匹配与真实渲染验证，避免把整张截图伪装成网页。
---

# ScreenCoder：截图转可编辑 HTML/CSS

快速运行时代码位于 `tools/screencoder/`；完整上游（包括训练栈、示例与媒体）位于初始化后的 `full-sources/screencoder/`。固定来源与提交见 `catalog/sources.lock.json`，快速镜像的边界见 `tools/screencoder/UPSTREAM.md`。

## 何时使用

- 用户提供 UI 截图，要求还原为 HTML/CSS；
- 需要从图片建立可编辑网页原型；
- 需要提取页面区域、组件边界和图片占位；
- 需要在保持截图视觉关系的前提下继续定制；
- 需要比较生成页面与原图的布局误差。

不适用于只想分析设计风格、只需生成一张静态图片，或没有权利复刻的第三方界面。

## 成功标准

合格结果必须同时满足：

1. 页面由真实 DOM、文字、布局和样式组成；
2. 不用整张截图作为背景冒充实现；
3. 用户能继续编辑文字、颜色、间距、组件和图片；
4. 在约定视口下与原图的结构、位置、层级和视觉权重接近；
5. 真实渲染通过截图对比；
6. 明确区分“忠实复刻”和“基于截图再设计”。

## 第一步：固定任务边界

先确认：

- 截图是必须复刻的 base，还是只提供视觉参考；
- 目标视口宽高和设备像素比；
- 要求像素级复刻、结构近似，还是允许重新设计；
- 是否需要响应式状态、交互、动画和多个页面；
- 截图中的图片、图标和字体能否合法复用；
- 最终需要纯 HTML/CSS、Tailwind，还是接入现有 React/Vue 项目；
- 可编辑性、浏览器范围和验收方式。

这些信息会改变实现时，不要静默猜测。

## 第二步：准备隔离工作区

不要直接在技能仓库中写运行结果。将工具复制到任务工作区，或在目标项目的临时目录运行：

```bash
cp -R tools/screencoder /path/to/work/screencoder
cd /path/to/work/screencoder
python3 -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
playwright install chromium
mkdir -p data/input data/output data/tmp
```

依赖包含 OpenCV、Playwright、PaddleOCR、TensorFlow/Keras 和模型 SDK，安装体积较大。先确认环境与 Python 版本兼容。

### 模型凭证

上游代码支持 Doubao、Qwen、GPT 和 Gemini，并读取本地 `*_api.txt` 文件。凭证文件只能存在于本地隔离工作区，不得加入 Git、聊天记录、日志或交付包：

```text
doubao_api.txt
qwen_api.txt
gpt_api.txt
gemini_api.txt
```

运行前检查 `block_parsor.py`、`html_generator.py` 中选择的模型和密钥文件。不要把示例模型名当成长期可用保证。

## 第三步：建立输入

1. 将原图保存到 `data/input/`；
2. 记录原始尺寸，不要先随意拉伸；
3. 去掉浏览器外框、阴影或无关背景时保留原件；
4. 多状态界面分别保存，不从一张截图虚构隐藏交互；
5. 文字、图片和图标若有原始资产，优先使用原始资产。

上游脚本包含 `test1.png` 等硬编码默认路径。运行前统一修改或传入实际路径，确保各阶段读写的是同一组文件。

## 第四步：分阶段执行

上游主流程为：

```text
区域/块规划
  → 组件 HTML 生成
  → HTML 灰色图片占位检测
  → UIED 原图元素检测
  → 占位与原图区域匹配
  → 替换裁剪图片
  → 最终 HTML
```

对应脚本：

```bash
python block_parsor.py
python html_generator.py
python image_box_detection.py \
  --html data/output/page_layout.html \
  --screenshot data/input/page.png \
  --out data/tmp \
  --json data/tmp/page_bboxes.json
python UIED/run_single.py
python mapping.py --help
python image_replacer.py --help
```

`main.py` 只是按固定默认值串行调用脚本。第一次接入新截图时优先逐步运行，检查每一步制品，路径全部对齐后再使用一键流程。

### 每一步都检查

| 阶段 | 需要查看的制品 | 失败信号 |
|---|---|---|
| 区域规划 | bbox 树、区域截图 | Header、导航、主内容边界错误 |
| HTML 生成 | 初始 HTML | 文本缺失、层级错误、布局不可编辑 |
| 占位检测 | bbox JSON、调试叠图 | 图片占位漏检或落入错误区域 |
| UIED | 元素 JSON、检测图 | 原图元素被过度切碎或漏检 |
| Mapping | 映射 JSON、overlay | 占位与原图图片错配 |
| Replacement | 最终 HTML、裁剪图 | 图片变形、比例错误、重复替换 |

出错时回到最早出现偏差的阶段，不要只在最终 CSS 上掩盖错误。

## 第五步：整理生成代码

模型生成的代码是初稿。交付前至少完成：

- 删除无效、重复和互相覆盖的样式；
- 把重复颜色、字体、间距抽成适度的变量或 token；
- 保留语义化 HTML 和键盘可访问性；
- 校对截图中的真实文字，不让 OCR 或模型改写内容；
- 将合法资产放到稳定路径，补齐 `alt`；
- 不用大量绝对定位掩盖本可由 Grid/Flex 表达的结构；
- 不引入用户没有要求的框架；
- 接入现有项目时遵守其组件、路由和样式约定。

如果用户要求基于截图再设计，先完成忠实基线，再单独应用设计变更。不要把复刻误差包装成“优化”。

## 第六步：真实渲染验证

至少在目标视口完成一次浏览器截图：

1. 启动本地页面；
2. 用 Playwright 设置与原图一致的 viewport；
3. 截取生成页面；
4. 与原图并排、透明叠加或做像素差；
5. 检查主要区域、文字换行、图片裁剪和溢出；
6. 再检查至少一个窄屏或宽屏状态（若要求响应式）；
7. 检查控制台、网络错误和键盘操作。

优先级：

```text
结构与内容正确
  → 区域和尺寸
  → 字体与换行
  → 色彩和边框
  → 阴影、微动效等细节
```

不要为了降低像素差而破坏 DOM 可编辑性和响应式结构。

## 与其他技能组合

### 忠实截图复刻

```text
主技能：screencoder
支撑：frontend-design（接入现有前端时）
审查：webapp-testing + accessibility
```

### 截图基础上的再设计

```text
第一阶段：screencoder 建立忠实、可编辑基线
第二阶段：victor-design-system 依据任务和人工参考确定新方向
第三阶段：webapp-testing 检查真实页面
```

### 多页面或多状态迁移

可使用 `multi-agent-orchestration`，但各 Worker 必须写不同页面或不同文件；统一组件和 token 由总协调者在合并阶段处理。

## 安全与许可

- 不复刻钓鱼页、登录凭证窃取界面或其他欺骗性页面；
- 不提交模型 API key；
- 不默认拥有截图、Logo、字体、图标和照片的再分发权；
- 涉及第三方产品时，优先抽象结构和交互，不冒充原品牌；
- ScreenCoder 上游使用 Apache-2.0；内含 UIED 代码也保留其许可证。

## 完成交付

交付时说明：

- 源截图和目标视口；
- 采用的技术栈；
- 输出 HTML/CSS/组件和资产路径；
- 运行过的渲染、测试与无障碍检查；
- 哪些视觉差异仍存在；
- 哪些交互因截图没有提供信息而未实现。


---

## SOURCE · `arena/01a060a3-skill:tools/screencoder/UIED/README.md`

<!-- blob: 8c0b4895edede671d2ffa0184f7d7a4ccfc88beb; bytes: 4221 -->

# UIED - UI element detection, detecting UI elements from UI screenshots or drawnings

This project is still ongoing and this repo may be updated irregularly, I developed a web app for the UIED in http://uied.online

## Related Publications: 
[1. UIED: a hybrid tool for GUI element detection](https://dl.acm.org/doi/10.1145/3368089.3417940)

[2. Object Detection for Graphical User Interface: Old Fashioned or Deep Learning or a Combination?](https://arxiv.org/abs/2008.05132)

>The repo has been **upgraded with Google OCR** for GUI text detection, to use the original version in our paper (using [EAST](https://github.com/argman/EAST) as text detector), check the relase [v2.3](https://github.com/MulongXie/UIED/releases/tag/v2.3) and download the pre-trained model in [this link](https://drive.google.com/drive/folders/1MK0Om7Lx0wRXGDfNcyj21B0FL1T461v5?usp=sharing).

## What is it?

UI Element Detection (UIED) is an old-fashioned computer vision (CV) based element detection approach for graphic user interface. 

The input of UIED could be various UI image, such as mobile app or web page screenshot, UI design drawn by Photoshop or Sketch, and even some hand-drawn UI design. Then the approach detects and classifies text and graphic UI elements, and exports the detection result as JSON file for future application. 

UIED comprises two parts to detect UI text and graphic elements, such as button, image and input bar. 
* For text, it leverages [Google OCR](https://cloud.google.com/vision/docs/ocr) to perfrom detection. 

* For graphical elements, it uses old-fashioned CV approaches to locate the elements and a CNN classifier to achieve classification. 

> UIED is highly customizable, you can replace both parts by your choice (e.g. other text detection approaches). Unlike black-box end-to-end deep learning approach, you can revise the algorithms in the non-text detection and merging (partially or entirely) easily to fit your task.

![UIED Approach](https://github.com/MulongXie/UIED/blob/master/data/demo/approach.png)

## How to use?

### Dependency
* **Python 3.5**
* **Opencv 3.4.2**
* **Pandas**
<!-- * **Tensorflow 1.10.0**
* **Keras 2.2.4**
* **Sklearn 0.22.2** -->

### Installation
<!-- Install the mentioned dependencies, and download two pre-trained models from [this link](https://drive.google.com/drive/folders/1MK0Om7Lx0wRXGDfNcyj21B0FL1T461v5?usp=sharing) for EAST text detection and GUI element classification. -->

<!-- Change ``CNN_PATH`` and ``EAST_PATH`` in *config/CONFIG.py* to your locations. -->

The new version of UIED equipped with Google OCR is easy to deploy and no pre-trained model is needed. Simply donwload the repo along with the dependencies.

> Please replace the Google OCR key at `detect_text/ocr.py line 28` with your own (apply in [Google website](https://cloud.google.com/vision)).

### Usage
To test your own image(s):
* To test single image, change *input_path_img* in ``run_single.py`` to your input image and the results will be output to *output_root*.
* To test mutiple images, change *input_img_root* in ``run_batch.py`` to your input directory and the results will be output to *output_root*.
* To adjust the parameters lively, using ``run_testing.py`` 

> Note: The best set of parameters vary for different types of GUI image (Mobile App, Web, PC). I highly recommend to first play with the ``run_testing.py`` to pick a good set of parameters for your data.
   
## Folder structure
``cnn/``
* Used to train classifier for graphic UI elements
* Set path of the CNN classification model

``config/``
* Set data paths 
* Set parameters for graphic elements detection

``data/``
* Input UI images and output detection results

``detect_compo/``
* Non-text GUI component detection

``detect_text/``
* GUI text detection using Google OCR

``detect_merge/``
* Merge the detection results of non-text and text GUI elements

The major detection algorithms are in ``detect_compo/``, ``detect_text/`` and ``detect_merge/``

## Demo
GUI element detection result for web screenshot
 
![UI Components detection result](https://github.com/MulongXie/UIED/blob/master/data/demo/demo.png)


---

## SOURCE · `arena/01a060a3-skill:tools/screencoder/UPSTREAM.md`

<!-- blob: b0c543e49e63bcd6b91c8e228965e4c769cb1cfc; bytes: 1481 -->

# ScreenCoder 上游快照说明

本目录是 `leigest519/ScreenCoder` 的紧凑运行时快照。

- 仓库：<https://github.com/leigest519/ScreenCoder>
- 分支：`main`
- 提交：`e7c2caefa59c00e7a770b70cfda3eebc77b82f17`
- 许可证：Apache-2.0
- 上游固定信息：`catalog/sources.lock.json`

## 保留内容

- ScreenCoder 推理主链：区域规划、HTML 生成、占位检测、映射和图片替换；
- `main.py` 与模型适配工具；
- UIED 的 Python 源码、配置、README 和许可证；
- 上游 README、requirements 和根许可证。

## 未复制内容

上游仓库共约 88 MB，包含多个完整训练项目和大量生成制品。为遵守本技能仓库的紧凑语义并集策略，以下内容未复制：

- `post-training/` 中完整的 LLaMA-Factory、VLM-R1 和 vLLM 训练栈；
- 示例截图、检测输出、裁剪图和调试 overlay；
- `tmp.zip` 与 `tmp/` 运行产物；
- UIED 示例数据、输出、模型文件、IDE 配置、日志和 notebook；
- Python 缓存。

这些内容已由 `full-sources/screencoder/` Git 子模块全量固定；执行 `git submodule update --init --recursive` 后即可取得。本目录只面向快速截图转 HTML/CSS 推理，不作为训练仓库镜像。

## 运行注意

上游脚本使用若干硬编码的 `data/input/test1.png`、`data/tmp/`、`data/output/` 和 `*_api.txt` 路径。运行前应在隔离工作副本中统一配置路径，绝不能把 API key 提交到 Git。


---

## SOURCE · `arena/01a060a3-skill:tools/screencoder/requirements.txt`

<!-- blob: 8dcaf67a812a0b654448b190977182589fdc2132; bytes: 315 -->

Pillow>=10.0.0
beautifulsoup4>=4.12.0
volcengine-python-sdk[ark]>=1.0.0
requests>=2.31.0
opencv-python>=4.8.0
google-generativeai>=0.3.0
numpy>=1.24.0
openai>=1.0.0
playwright>=1.40.0
scikit-learn>=1.3.0
scipy>=1.11.0
pandas>=2.0.0
paddlepaddle>=2.5.0
paddleocr>=2.7.0
keras>=2.15.0
tensorflow>=2.15.0
tqdm>=4.65.0


---

## SOURCE · `arena/01a060a3-skill:tools/spec-kit/SKILL.md`

<!-- blob: 62efbdae83bb5e4ceef4031987f59b42b7e2c882; bytes: 2162 -->

---
name: spec-kit
description: Apply GitHub Spec Kit's pinned specification-driven workflow to define principles, requirements, plans, tasks, implementation, and convergence checks. Use when starting or restructuring non-trivial product or software work that benefits from traceable specs before code.
---

# GitHub Spec Kit

Use the pinned `v0.16.4` source at `full-sources/tools/spec-kit` and the user-local `specify` CLI installed by this repository.

## Setup

```bash
bash scripts/setup_tools.sh spec-kit
specify --version
```

Initialize only after reading the target repository and selecting the correct integration:

```bash
specify check
specify init --here --integration <integration>
```

Review the command's planned writes and preserve existing project instructions. Never overwrite an established constitution, requirements set, or Agent configuration blindly.

## Core workflow

1. **Constitution** — record durable quality, security, testing, UX, and governance principles.
2. **Specify** — define user outcomes, scope, constraints, acceptance criteria, edge cases, and exclusions; avoid prematurely hard-coding implementation choices.
3. **Clarify** — resolve consequential ambiguity with stakeholders rather than inventing facts.
4. **Plan** — choose architecture and technology from repository evidence and constraints.
5. **Tasks** — produce ordered, testable work units with dependencies and parallel-safe boundaries.
6. **Implement** — execute tasks while preserving traceability to the spec and plan.
7. **Converge/verify** — compare code, tests, docs, and behavior to the authoritative artifacts; append remaining gaps instead of declaring completion by intuition.

Depending on the integration, commands appear as `/speckit.*` or `$speckit-*`. Use the syntax generated for the current Agent rather than assuming one host.

## Required evidence

At handoff, identify the constitution/spec/plan/tasks used, the requirements implemented, verification commands and results, deviations approved, and unresolved gaps. Specs guide implementation but never override higher-priority user instructions or observed repository facts.


---

## SOURCE · `arena/01a060a3-skill:四个月脚印计划-2026Sep-Dec.md`

<!-- blob: 511cac73eb4be79ced1826fbb9735137bb565317; bytes: 13446 -->

# 四个月脚印计划 · 2026 年 9–12 月
> 孙承泽专用 · 制定日 2026-09-01 · 存档于 -SKILL- 仓库 arena/01a0582f-skill 分支
> 目标（原话）：**达到顶尖本科生水平，超越大部分硕士生**——拆成可判定的四指标（见 §3）
> 规则：每一步 ≤3 小时、有产出文件、有完成判据；**上一步没 commit，不开始下一步**（脚印原则）
> 预算：每周 4–6 小时（你写给郭老师的信里自己定的）。9–11 月每周一步，12 月考试月减半。

---

## 0. 先回答你问的模型情报（全部 2026-08-31/09-01 核验，实锤与谣言分开）

### OpenAI / GPT-6
- **实锤**：当前旗舰是 **GPT-5.6**（2026-07-09 发布，Sol/Terra/Luna 分档）。**GPT-6 截至今没有任何官方发布、命名或日期**。
- **半实锤**：2026-08-01 OpenAI 把下一代主力模型命名为 **Astra**，称"our next major model"，并发布了其内部版本产出的十项数学/理论计算机成果（含 Lean 证书）——但没说 Astra 会不会以"GPT-6"之名发布。
- **市场预期**：Polymarket 7 月中旬合约价：9/30 前 ~71%、12/31 前 ~88%（这是赌注不是公告）。
- **谣言（勿当真）**：~10T 参数、1.5M+ 上下文——全部来自泄露集群，OpenAI 未确认；"4 月 14 日发布/Symphony MoE"已被证伪为假新闻。

### Anthropic / Claude 与 Mythos
- **实锤时间线**：**Claude Mythos Preview**（2026-04-07 宣布，前沿档，仅 Project Glasswing 受控开放；SWE-bench Verified 93.9%；网络攻防能力过强是主因）→ **Claude Opus 4.8**（5 月下旬）→ **Claude Fable 5 + Mythos 5**（2026-06-09 公开）：Fable 5 带安全分类器对公众发布，Mythos 5 无分类器仍限 Glasswing。$10/$50 每百万 token，**1M 上下文、128k 输出、永远开启的自适应思考、memory tool、context editing/compaction、task budgets**。
- **对你的含义**：Anthropic 把上下文工程功能（记忆、压缩、上下文编辑）做成了 API 一等公民——**L2 上下文工程正在从"高手的私活"变成"平台的原语"**，你的 memory 系统路线被官方验证了。
- 后续：无官方日期；IPO 预期年内，Fable 5.x 迭代大概率 Q4。

### Google / Gemini Pro 为何"一直未上线"
- **实锤**：最新可用的 Pro 停在 **Gemini 3.1 Pro**（2026-02-19）。**Gemini 3.5 Pro** 于 5/19 I/O 官宣（2M 上下文 + Deep Think），随后**连续跳票三次**（6 月底、7/17、8 月初），至今只在 Vertex 企业预览。Bloomberg 报道原因：**编码能力未达内部目标**、训练数据刷新失望，"months behind schedule"；消息落地当天 Alphabet 跌 ~4%。7/21 只发了 3.6 Flash / 3.5 Flash-Lite / 3.5 Flash Cyber；8/13 Flash 线已跑到 3.7。**Gemini 4 已进入预训练**。预测市场：12/15 前 GA 概率 ~90%。
- **教训（比新闻更重要）**：谷歌的 Pro 没跳票在"跑分"，跳票在**编码与真实任务**——和你领域一样，前沿的瓶颈从来不是刷分是可靠性。

### 国产：DeepSeek / Kimi / GLM
- **DeepSeek**：V3.2（2025-12 正式版）之后沉默多月，V4 系列 2026 年 4–7 月间陆续落地（DeepInfra 记 V4 Pro 2026-04：1.6T 参数/49B 激活/1M 上下文；知乎口径 V4 正式版 7 月，两源有出入，以官网为准）。**V5 按其年更节奏最早 2027**，且传言适配自研/国产芯片与内蒙古算力中心（路透花边，未证实）。V3.2 已被 K2.5/2.6、GLM-5/5.1、MiniMax 2.5/2.7 反超，但 OpenRouter 上 20 多个 DeepSeek 版本仍是全球调用量最大的一族。
- **Kimi（月之暗面）**：**K3 已发布**（2026-07）：2.8T 总参/50B 激活、1M 上下文、原生视觉、改版 MIT 开源（权重承诺 7/27 后可下载），开源档综合能力现排第一梯队，缺点是输出 token 消耗大。
- **GLM（智谱）**：**GLM-5**（2026-02，774B/40B 激活，直接复用 DeepSeek 的 DSA 稀疏注意力 + MTP，前三层 Dense）→ GLM-5.1 → **GLM-5.2**（2026-06，~753B/40B，1M 上下文，MIT 系）。短板：GLM-5 系无多模态。
- **格局**：2025-12 至 2026-04，中美 11 家至少 50 次发布/迭代（平均 2.8 天一款）；OpenRouter 前三名在月之暗面/智谱/MiniMax/小米 MiMo 之间轮换——**国产开源在性价比档已经是世界主力**。

### 这份情报对计划的三个直接后果
1. **计划里不许有任何一步依赖"某个特定模型"**——所有步骤模型无关，每月一次"模型雷达"重测（步骤内置）。
2. **GPT-6/Astra 大概率在你计划的窗口内落地（市场价 12/31 前 ~88%）**——所以 12 月的年终对账专门留了一步"贬值清单"：新模型来了废掉你哪些技巧。
3. **国产开源（K3/GLM-5.2）便宜到可以当夜跑工**——批跑扫描用它们，判断用旗舰，这就是路由。

---

## 1. 四个月总览（22 步 · 约 46 小时）

| 月 | 主题 | 步数 | 小时 |
|---|---|---|---|
| 9 月 | 计分板 + 上下文包 | S1–S6 | 14h |
| 10 月 | 四篇论文预测式精读 + 覆盖率图 | S7–S12 | 16h |
| 11 月 | 加点地图工作流 + 对外资产 | S13–S18 | 14h |
| 12 月 | 整合对账（考试月减量） | S19–S22 | 7h |

---

## 2. 脚印（每步 ≤3 小时，按序执行）

### 九月：计分板 + 上下文包
**S1 · 建基准题库第一批（3h）**
- 动作：① 在 turbine 仓库建 `bench/` 目录；② 从四篇核验论文（SMO 2018 / SMO 2021 / KT-EGO / TNO）+ 你 `evidence/` 的数字里出 20 题，每题一条 JSON：`{题干, 唯一正确答案, 出处(论文+页码/文件)}`。例："Filter-GEI 的加点准则中 HF 与 LF 样本如何分配？""效率通道 MC Dropout 经验覆盖率是多少？"(答案：65%)。
- 产出：`bench/v0-q1-20.json`
- 判据：☐ 20 题、每题答案唯一、每题能翻到出处。

**S2 · 裸答首测（2h）**
- 动作：① 不开任何 AI，闭卷答 S1 全卷（可翻纸质论文）；② 对答案打分；③ `ERRORS.md` 加"发现延迟"列（本月起记）。
- 产出：`bench/log/2026-09-裸答.md`
- 判据：☐ 分数入档；☐ 延迟列已建。

**S3 · Agent 裸基线（2h）**
- 动作：同一个卷子，开新会话、不带任何上下文文件，让 Agent 答；对分。
- 产出：`bench/log/2026-09-agent裸.md`
- 判据：☐ 两条曲线开张（你 vs 裸 Agent）。

**S4 · 写 TEAM_CONTEXT.md（2h）**
- 动作：三页——①郭老师论文链时间轴（2018→2025，每篇一句话方法+一句话动机）；②术语表（EGO/EI/infill/多保真/co-kriging/TNO/conformal，每条 ≤2 行）；③数字红线页（哪些数能对外说、哪些不能：如 5.4% 不报）。
- 产出：`docs/TEAM_CONTEXT.md`
- 判据：☐ 三页齐；③页红线与你 turbine 仓库 docs 纪律一致。

**S5 · 带/不带上下文 A/B（3h）**
- 动作：① 新会话先喂 TEAM_CONTEXT.md 再答全卷；② 与 S2/S3 并列成三列表；③ 写结论段：上下文包值多少分。
- 产出：`bench/log/2026-09-AB.md`（含三列对比表）
- 判据：☐ 三列分数 + 差值算出。

**S6 · 模型雷达 #1（1h）**
- 动作：从 S1 抽 10 题组成固定快测卷；跑你手头所有模型（如 GPT-5.6 / Fable 5 / GLM-5.2 / K3 / DeepSeek V4），记分并注明"哪个模型强在哪个题型"。
- 产出：`radar/2026-09.md`
- 判据：☐ ≥3 个模型有分；☐ 每模型一句强弱评语。

### 十月：预测式精读 + 覆盖率图
**S7 · SMO 2018 预测式精读（3h）**：只读标题+摘要+引言的问题陈述 → **停，写半页"我预测的方法与结论"** → 读方法与结果 → 打脸记录（命中/偏差/为什么）。
- 产出：`papers/2018-SMO-predict.md` ☐ 预测写在读方法之前（时间戳为证）

**S8 · SMO 2021 Filter-GEI（3h）**：同 S7 流程。
- 产出：`papers/2021-SMO-predict.md` ☐

**S9 · KT-EGO 2022（3h）**：同 S7；额外：clone 官方开源 `zhet1997/KT-EGO_publish`，跑通 README 里最小示例。
- 产出：`papers/2022-KTEGO-predict.md` + 本地跑通截图 ☐ 代码能出图

**S10 · TNO 2025 CJA（3h）**：同 S7；额外：把它的"先报场再派生性能"与你的"三个标量"画成一张对照图。
- 产出：`papers/2025-TNO-predict.md` + `figs/TNO-vs-mine.png` ☐

**S11 · 覆盖率-工况图 v1（3h）**
- 动作：用你现有 UQ 输出，把效率通道的经验覆盖率画在转速 Ω × 背压 P 平面上，失效带（覆盖率 < 名义 95% 的区域）标红。
- 产出：`scripts/coverage_map.py` + `figs/coverage_v1.png`
- 判据：☐ 图上红色失效带清晰可指——这就是你给组里的"激波伤疤地图"。

**S12 · 模型雷达 #2（1h）**：同 S6，快测卷固定不变；记录 10 月新发布模型（若有）。产出 `radar/2026-10.md` ☐

### 十一月：加点地图工作流 + 对外资产
**S13 · AGENT_CHARTER.md（2h）**
- 动作：两栏——锯齿内侧（Agent 全权：扫描/复现/格式审查，依据=近两月 ERRORS 里"当场被抓"的案例）/ 锯齿外侧（人拍板：报哪个数、点位、对外话语，依据="事后才抓到"的案例）。
- 产出：`docs/AGENT_CHARTER.md` ☐ 每条都引用一个真实案例编号

**S14 · 加点地图 v2：提名逻辑（3h）**
- 动作：在 S11 失效带上实现最简单的采集函数（max-σ：提名不确定度最大的 10 个候选点；不必实现完整 EI）。
- 产出：`scripts/infill_v1.py` + `infill_ledger.md`（表：点位 | σ | 物理理由 | 状态）
- 判据：☐ 10 个候选点入账，每个附一句物理解释（激波/壅塞/外推）。

**S15 · 工作流首跑：收益卡批产（3h）**
- 动作：① 睡前让 Agent（可用国产开源档跑）对 10 个候选点各生成"预期收益卡"（预期信息增益、风险、物理理由）；② 早上 30 分钟逐卡裁决，结果写进 ledger；③ 记录 Agent 卡片里被你否掉的错误理由（进 ERRORS）。
- 产出：`infill_ledger.md` 填充 + `bench/log/2026-11-首跑.md`
- 判据：☐ 10 卡全部裁决；☐ 至少 3 条否决理由入 ERRORS。

**S16 · 小站英文页（3h）**
- 动作：turbine 平台加 About + Methodology 英文页（复用现有前端，翻译你已核实的数字，红线数字不出现）。
- 产出：Cloudflare Pages 英文页上线 ☐ 链接可打开、无红线数字

**S17 · 基准月测 #3（2h）**：题库扩到 50 题（S1 的 20 + 新出 30，来源同规矩）；重跑三列（裸答/裸 Agent/带包 Agent）。
- 产出：`bench/log/2026-11-月测.md` ☐ 50 题卷三列分数

**S18 · 模型雷达 #3（1h）**：同 S6。产出 `radar/2026-11.md` ☐

### 十二月：整合对账（考试月，每步 ≤2h）
**S19 · 错误分类学（2h）**：把 9–11 月所有打脸记录归成类型学（哪类 Agent 错误你现在能秒判？哪类仍会漏？）。
- 产出：`docs/错误分类学.md` ☐ ≥3 个类型 + 每类"我的平均发现延迟"

**S20 · 基准年终测 #4（2h）**：50 题卷重跑 + 画四个月四条曲线（裸答 / 裸 Agent / 带包 Agent / 你审后终分）。
- 产出：`bench/log/2026-12-年终.md` + `figs/curves-2026.png` ☐ 四线成图

**S21 · 模型雷达 #4 + 年度贬值清单（1h）**：固定快测卷再跑一遍（含窗口内新模型：GPT-6/Astra 或 Fable 5.x 若已发布）；另列清单：四个月里哪些技巧被新模型直接废掉。
- 产出：`radar/2026-12.md` + `radar/贬值清单-2026.md` ☐

**S22 · STATE-2026.md 年终一页纸（2h）**：四指标对账（见 §3）+ 给郭老师的下学期计划写一段话（存稿不发，信纪律照旧：不点宋老师、不写独立立项）。
- 产出：`docs/STATE-2026.md` ☐ 四指标全部有数 + 一段话存稿

---

## 3. "顶尖本科生 / 超越大部分硕士"的判定标准（12/31 对照）

| # | 指标 | 达标线 | 测法 |
|---|---|---|---|
| 1 | 基准分差：带包 Agent − 裸答 | ≥ +20 分（50 题卷） | S20 |
| 2 | 误差发现延迟中位数 | ≤ 半天（争取 ≤1 小时） | ERRORS 台账 |
| 3 | 工作流资产 | 加点地图 ledger 有 ≥10 个真实候选点且至少 1 次完整人机首跑 | S14/S15 |
| 4 | 物化率 | 22 步全部有 git commit（脚印原则自动保证） | git log |

> 说明：这四条不证明你"超越了某位具体硕士"——它们证明的是一件更硬的事：**你拥有一套可复现、可展示、带测量的人机科研系统**，而大部分硕士生没有测量，只有感觉。

## 4. 三条守则（防崩坏）

1. **脚印原则**：一步一 commit；中断超过 10 天，从上一步的判据重新核对再前进，不自责、不补课、不跳步。
2. **模型无关原则**：任何一步的产出都不依赖特定模型存活；每月雷达日是唯一"追新"时间，其余时间禁止折腾新模型。
3. **红线原则**：对外数字只出 `evidence/`；红线数（5.4% 等）在任何产出物（含英文页、组会图）中不出现。

## 5. 与已存档文件的关系

- 本计划是《Agent驾驭力训练手册.md》18 个月路线的**前 4 个月切片**，Phase 编号对齐（9 月=Phase 0/1，10–11 月=Phase 2 前半，12 月=年终对账）；
- 《超级大脑洞察报告.md》的六条见解不变，本计划是见解 1/2/3 的施工图；
- 模型情报 §0 的核验链接与日期已固化，后续雷达日只增量更新。


---

## SOURCE · `arena/01a060a3-skill:超级大脑洞察报告.md`

<!-- blob: bc75c8b6604a08465d69ea1c0dac16f637ca7ab0; bytes: 29739 -->

# 超级大脑洞察报告
> 为孙承泽定制 · 2026-08-31 · 基于全部 33 个仓库的最新分支 + -SKILL- 仓库技能库 + 公开信息交叉核验
> v2：新增第四部分「起跑线没有重置，它分岔了」（第二回合对话）

---

# 第一部分 · 侦查报告（全部核验，无模棱两可）

## 1. 账号全景：每个仓库的"最新分支"（不是 main，是最后提交时间最新的那条）

| # | 仓库 | 最新分支 | 最后提交 (UTC) | 它告诉我什么 |
|---|------|----------|----------------|----------------|
| 1 | **zixue2026** | `arena/01a055c4-zixue2026` | 2026-08-31 14:08 | 你的自学操作系统：概率论等学科 + memory 系统（HANDOFF / ERRORS / LEARNINGS / drill-ledger 刷题台账）。main 上还有《Machine learning in aerodynamic shape optimization》PDF——你正在啃的 68 页 ASO×ML 综述 |
| 2 | **123** | `arena/01a053b1-123` | 2026-08-31 07:08 | 三篇单作者 WES（Wind Energy Science）目标稿件：风电场偏航"交互结构"、DJS 聚类、功率跟踪射线反演。FLORIS 4.6.6 实验、300dpi 图件复算、自我审计标注"不可直接投稿"、F5 原措辞被推翻重写 |
| 3 | **0824-2026** | `arena/01a0529f-0824-2026` | 2026-08-31 06:25 | 风电场 3A 数字孪生界面：冰青视觉系统、开场运镜逐帧打磨、顶级数字孪生界面调研 |
| 4 | **-SKILL-** | `arena/01a048e7-skill` | 2026-08-31 04:33 | 2223 个 SKILL.md、通用技能路由器、治理宪法。最新提交：按 PDF 实际内容重写论文学习轨（不许凭摘要想当然） |
| 5 | **sucheng** | `arena/01a04d04-sucheng` | 2026-08-29 10:40 | 国创赛/装备 PPT 交卷包：7 处必改 + 答辩兜底话术 + truth.json 逐图对账。你在用审计的方式做 PPT |
| 6 | **wind_farm_viz** | `arena/01a012f1-wind-farm-viz` | 2026-08-24 | 风电大创：前两排偏航 30°/20°、末排不偏，全场功率 +24%；师兄的单机 PPO 功率跟踪复现与组会汇报；"口袋金句与避坑手卡" |
| 7 | **-**（英仔爱心社） | `arena/01a01ed2-repo` | 2026-08-21 | 社团官网，你是宣传部长。17 年玉树/周至支教传承、西迁精神叙事、AI 内阁会议记录 |
| 8 | **turbine-blade-ai-platform** | `arena/019ffee7-…` | 2026-08-15 | **核心仓库**：Rotor 37 + PLAID 1000 组 CFD → 74 维统计量 → 52 万参数残差 MLP → ONNX/WASM 浏览器 0.23ms → NSGA-II 100×200 → MC Dropout UQ。η 通道覆盖率 65%。证据分级 E0–E4。docs/ 里就是郭老师全部资料 |
| 9 | **tushupdf** | `arena/019ff894-tushupdf` | 2026-08-13 | 大二教材书目核对与合法获取说明（XJTU 课程教材门户 + 学生 VPN）——连找书都写合规范 |
| 10 | **wendang11** | main | 2026-08-12 | 文档仓库 |
| 11 | **wode** | main | 2025-12-15 | 空仓库，"恋爱军师"描述 |

其余小仓库（yiming 系列生日站点、0530-planck、IELTS/CET6、physics-exam、hogwarts-quiz、Goooodbye_s-g 等）都是 2026 年 4–6 月的网页小作品，属于"给具体的人做具体的东西"的同一人格。

## 2. 你是谁（从仓库行为反推，每条都有证据）

- **孙承泽**，西安交大能动强基 2501 班，**大二**，强基自带保研名额，长期目标是读博 → 博士后出国一年 → 回来做老师。
- **研究方向**：叶轮机械多学科设计优化 × AI 赋能（"两机"：航空发动机 + 燃气轮机），目标导师郭振东。
- **身份底色**：交大 + 西迁精神（英仔爱心社宣传部长、周至九峰支教《御风记》十四讲）。
- **工作方式**（GROWTH_ROADMAP.md 原话，这是你自己仓库里的自我诊断）：
  - 全栈 Builder：React + Three.js + PyTorch + FastAPI + Cloudflare；
  - **打脸链路学习者**：预测 → 实验打脸 → 自驱重构；
  - 审美极挑剔：冰青单色极致化，面积配比精确到 1%；
  - **低自信型答对者**："良知已知，只是不敢信"。
- **科研诚实纪律**（turbine 仓库 docs 全部内化了）：证据分级 E0–E4；不报代理 5.4%；Pareto 前沿距训练集 3 倍 = 外推不是插值；η 覆盖率 65% 不拉宽带子凑 95%。
- **时间预算**：每周 4–6 小时科研（你自己写给郭老师的信里说的）。

## 3. 郭振东老师：信息全对账（内部文档 × 公开核验，双向一致）

**来源 A：你仓库 turbine-blade-ai-platform 最新分支 `docs/` 下六份文件**（`guo-line-and-next-path.md`、`deepsearch-20260814-前沿与郭宋线.md`、`暑期总结-致郭振东-2000字.md` 等——你记的"Mr. GUO / Turbine Blade"，实际就在 Turbine Blade 这个仓库，不在别处）。

**来源 B：公开核验（2026-08-31 逐条完成）**：

| 内部文档的说法 | 公开核验结果 | 状态 |
|---|---|---|
| 西交能动学院副教授、博导 | 官方教师主页 gr.xjtu.edu.cn/guozhendong：副教授、博导、硕导 | ✅ |
| 曾任 NTU DSAIR 研究员、佛罗里达大学访问学者、三菱重工高砂研究所访问研究员 | 官方主页原文一致 | ✅ |
| 太行国家实验室双聘专家、秦创原高层次科技人才 | 官方主页原文一致 | ✅ |
| 研究方向：叶轮机械智能设计优化、智能流场预测、数据挖掘、UQ 与鲁棒/可靠性设计优化 | 官方主页原文一致 | ✅ |
| 主持中国航发产学研、太行自主立项、两机重大专项子课题等 10 余项；专利 7 / 软著 10；SCI/EI 50 余篇（IEEE TCyB、SMO、ASME/AIAA 近 20 篇） | 官方主页原文一致 | ✅ |
| "大湾区杯"特等奖（402 队仅 3 项） | 官方主页：402 支队伍仅 3 项 | ✅（注意官方写法是"粤港澳"，你内部文档写"粤澳港"，以官方为准） |
| 2018 与 Haftka：多保真数据集选择 | Guo, Song, Park, Li, **Haftka**, "Analysis of dataset selection for multi-fidelity surrogates for a turbine problem", *SMO* 57(6):2127–2142, 2018 | ✅ |
| 2021 并行多保真 EI | Guo, Wang, Song, Li, "Parallel multi-fidelity expected improvement method for efficient global optimization", *SMO* 64:1457–1468, 2021（Filter-GEI） | ✅ |
| KT-EGO（d>20 高维贵黑箱） | Wang, Song, Chen, Ma, **Guo**, Li, *Engineering Optimization* 55(12):2015–2033，28 维压气机叶片验证，代码开源 | ✅ |
| TNO 全景神经算子（2025 CJA） | Q. Wang, **Z. Guo**, L. Song, T. Liu, "A panoramic aerodynamic performance prediction method for turbomachinery cascades using transformer-enhanced neural operator", *Chinese Journal of Aeronautics* 2025, Art. 103473：先报 Rotor 37 场再派生性能，胜过 FNO/DeepONet，下游任务成本降 4 个数量级 | ✅ |
| 团队线：宋立明（宋）、李军（李） | 上述每篇论文作者列表里都有 Song / Li；KT-EGO 与 TNO 通讯方向均在西交叶轮机械研究所 | ✅ |

**结论：你仓库里那份 deepsearch 文档的关键事实全部核验为真，可以放心作为"导师语境"使用。** 唯一要记住它自己的红线：这些履历用于理解选题语境，不写进给郭老师的信。

**郭老师这条线的本质（你自己的文档已经写对了，我帮你再压缩一句）：**
他的整个学术史是一条"**让每一次真 CFD 都买在最值的地方**"的经济学——何时掺低保真（2018）、并行加点怎么分 HF/LF（2021）、维数高了怎么办（KT-EGO）、代理换成算子（TNO）。所以他看学生先问的不是"你工具用得多熟"，而是：**"你能不能少算几次真 CFD，把设计空间探清楚？"** 他主管 AI 不是因为 AI 时髦，而是因为在他这条经济学里，AI 是把"昂贵样本边际价值"最大化的工具。

---

# 第二部分 · 从 -SKILL- 仓库挑出的技能（犀利 × 时代感 × 与你强相关）

> 挑选标准：① 能产出"角色翻转"级别的见解而非操作技巧；② 直指 AI 时代的人机分工；③ 与"叶轮机械 MDO × AI × 本科生生态位"三个关键词同时咬合。

## 核心十件武器

| 技能 | 位置 | 为什么锋利 |
|---|---|---|
| **david-goldberg-perspective（老高）** | `nuwa-distilled/` | 遗传算法 / NSGA-II 宗师。积木块假说、拥挤度、超体积——你 200 代 NSGA-II 的直接对话者。他给你的最狠一问：你的前沿在数据流形边上，那还是"发现"还是"外推的幻觉"？ |
| **antony-jameson-perspective（老詹）** | `nuwa-distilled/` | CFD 伴随优化宗师。梯度成本与维数解耦、激波捕捉、证据分级与科学诚实——Rotor 37 激波伤疤（叶尖 M_rel≈1.48、喉部壅塞、η 掉到 0.873）的守护神 |
| **bojie-li-perspective（李博杰）** | `nuwa-distilled/` | Agent = LLM + 上下文 + 工具；**Harness 决定论**：模型同质化后，模型之外的工程设计才是护城河——这是"本科生驾驭 Agent"命题的全部理论支点 |
| **book-cointelligence-human-ai-collaboration（Mollick《协同智能》）** | `nuwa-distilled/` | Centaur/Cyborg 分工、锯齿状能力边界、**人在环要有权也有能力**、双账本（辅助时表现 ≠ 撤去 AI 后会做）、责任不能委托给角色提示 |
| **ai-futures-scenario-lab-2026（《生命3.0》×《AI 2041》）** | `nuwa-distilled/` | 情景是备选不是预测；稳健可逆行动胜过押注单未来——10 年尺度职业决策框架 |
| **AI_ERA_CORE_CLASSICS_PORTFOLIO（因果×安全×公地治理×隐私四书组合）** | `nuwa-distilled/` | "不可坍缩清单"思维：四份分析 ≠ 一份批准。这是把 E0–E4 证据分级推广到治理层的同构物 |
| **ai-research-senpai-council（科研学长姐联合体）** | `nuwa-distilled/` | 12 位创作者按证据阶梯归因——AI 辅助科研的"什么可信/什么是营销"的过滤器 |
| **book-fifth-discipline-learning-system（《第五项修炼》）** | `nuwa-distilled/` | 学习型组织、系统基模（增长上限、时滞）——用来分析"课题组"这个系统而不只是你自己 |
| **book-xjtu-relocation-spirit + xjtu-hardcore-romantic** | `nuwa-distilled/` | 身份底色：胸怀大局 + 理工硬核浪漫。两机是被卡脖子的领域，这决定了你做的不是普通赛道 |
| **GROWTH_ROADMAP 里的三件装备** | 根目录 | Boyd **OODA 循环**（打脸链路就是 OODA，只是没名字）；《创新者的窘境》（AI 替代 CFD = 正在发生的颠覆）；《传习录》知行合一（"低自信型答对者"的解药） |

## 支撑装备（做具体事时用）

- `bundles/research-workflow-kit/`——科研全流程模板（含 AI 使用披露、阶段门）；
- `nature-skills/`——投稿润色与引用；
- `skills/core/stop-slop` + `humanizer-zh`——写论文/写信去 AI 腔（你给郭老师的信之所以好，就是因为全是大白话人话）。

---

# 第三部分 · 超级大脑上线：第一回合生成的六条见解

## 0. 先校准第一回合的命题

原命题：**"本科生在基础和研究深度都远不如硕博生和老师的情况下，在组里的作用可能还不如一个 AI Agent。或者说，要本科生也只是让本科生去驾驭 AI Agent，帮课题组做事情。"**

超级大脑的裁决：**这句话对了一半，但对的那一半不是你以为的那一半。**

- 对的一半：在"执行"维度（跑脚本、复现、画图、查文献、格式审查），你确实没有任何对 Agent 的比较优势，未来一年这个差距只会扩大。
- 错的一半：这个比较的坐标系错了。Agent 的产出是**通用的**（任何组都能租到同一个 Claude/GPT）；而课题组真正稀缺的三样东西——**组的私有上下文、昂贵样本的预算分配权、错误后果的承担者**——Agent 一样都不持有。你该比较的不是"我 vs Agent"，而是"**没有我的 Agent 群 vs 有我的 Agent 群**"。

## 见解 1 · 实验室里最贵的不是 GPU，是"收敛的 RANS 次数"——所以本科生的最优生态位是加点传感器管理员
**（Goldberg × 郭振东的 EGO 经济学）**

郭老师整条学术线（2018 选数据集 → 2021 并行 MF-EI → KT-EGO → TNO）的底层是同一条经济学：**真高保真样本极其贵，每一次都要买在整个设计空间信息增益最大的位置上。**

这意味着一个被所有人忽略的事实：课题组真正的瓶颈资源不是人手，是**采样预算**。硕博生的稀缺性在于"能判断代理在哪失效"；Agent 能夜跑一万次扫描，但它不知道该信哪个数。于是唯一不能外包的位置出现了——**读 UQ 图、决定下一个 HF 点落在哪的人**。

你的 η 通道覆盖率 65% 是全组最锋利的一张图：它精确标出了"模型在激波附近会虚"，翻译成郭老师的语言就是——**下一个细网格样本该落在哪**。一个本科生 + 五个 Agent，Agent 夜里跑扫描和可视化，人早上花二十分钟读不确定度图、拍板点位——这个组合对组的价值，不亚于一个新博一，而且**没人跟你抢这个位置，因为师兄师姐的时间被毕业指标锁死了**。

**接口**：把 turbine 仓库里那张覆盖率图升级成"加点地图"（标出 65% 失效带 + 候选 HF 点），下次组会带过去。这就是你 12 个月闭环的第 4–8 月，你可以提前到第一个月交图。

## 见解 2 · Harness 决定论的本科生版本：模型人人都有，组的"私有上下文"才是护城河——本科生可以当"上下文拥有者"
**（李博杰 × 你的 zixue2026 memory 系统）**

Agent = LLM + 上下文 + 工具。2026 年的现实是：LLM 大家都租得到同一个，工具（MCP、脚本、API）大家都会接，**唯一不可复制的变量是上下文**——组的 TNO 权重、PLAID 数据集、网格对、郭老师 2018–2025 的论文链、"哪些坑师兄已经踩过"。

Agent 的上下文窗口是**租的、每次会话清零**；而你 zixue2026 里那套 memory 系统（HANDOFF / ERRORS / LEARNINGS / drill-ledger）是**资产、跨会话复利**。你已经在无意识地做全组没人做的事：把"学的过程本身"结构化成机器可读的状态。

所以翻转原命题：不是"本科生不如 Agent"，而是——**谁能把组的私有上下文压缩、结构化、按需喂给 Agent 群，谁就是组里的"Harness 工程师"，而这是一个大二学生可以零成本占据的职位。** 硕博生不是做不到，是他们没时间做这种"基础设施"，而基础设施恰恰是复利最高、最不卷的位置。

**接口**：给 turbine 项目写一份 `TEAM_CONTEXT.md`：一页郭老师论文链时间轴、一页术语表（EGO/EI/infill/多保真/TNO）、一页"我们组的数字哪些能对外说"。

## 见解 3 · 本科生—Agent 的正确分工是 Centaur 不是 Cyborg：切缝切在"错误后果可否验证"上，而不是难度上
**（Mollick《协同智能》）**

"驾驭"如果被理解成"盯着、审着、帮着"，三周你就会沦为 Agent 的校对工。Mollick 给的分界线是**锯齿状能力边界**：切分任务的标准不是难不难，是**错了之后能不能被廉价地验证**。

落到郭老师组的语言：
- **锯齿内侧（Agent 全权，人签字即可）**：跑扫描、复现论文图表、格式与引用审查、脚本脚手架、可视化——错了会被数值检验当场抓住；
- **锯齿外侧（人必须亲手做）**：判断激波附近代理可不可信、决定报哪个数、给郭老师的信里哪句话越界、加点点位拍板——错误的后果是**信任**，而信任的验证成本是无数次组会。

你发明的 E0–E4 证据分级，本质上已经是这个协议的雏形：**E2 以下 Agent 做完自动过门，E3 以上人到环。** 缺的不是方法论，是把它从"文件的分级"升格为"人机分工的章程"（`AGENT_CHARTER.md`，两栏：Agent 可自主做完的事 / 必须留给人拍板的事）。

## 见解 4 · 最狠的翻转：不是"本科生驾驭 Agent"，而是"本科生+Agent"这个新型最小科研单元，正在和"裸身的硕博生"竞争
**（创新者的窘境 × 郭老师 NTU 时期的 CLBO）**

硕博生的优势从来不是聪明，是**三年攒下来的经验**——哪个网格收敛、哪套参数能跑通、哪类文献是坑。而 2026 年 Agent 把"经验"的价格打到接近零：文献综述、代码复现、脚本搭建，一晚上租回来。

剩下的、Agent 租不到的资产只有两样：**提问的质量**（元认知：什么时候该算、什么时候该信、什么题值得做）和**物理直觉的校准**（激波长什么样、边界层什么时候掀、哪些效率数字闻着就假）。

第一样，郭老师本人就是天花板。第二样，恰恰是"打脸链路"学习法的用武之地——**每次让 Agent 先预测 SU2 会给什么结果，再用粗网格打它的脸**。打的是 Agent 的脸，长的是自己的直觉。这是本科生唯一正确的"刷经验"姿势：不是自己攒十年经验，而是**当 Agent 经验的审计员，十年经验三年租**。

## 见解 5 · Goldberg 的毒舌：本科生不是"小号的硕博生"，是种群里的多样性算子
**（Goldberg 拥挤度 × 第五项修炼系统基模）**

NSGA-II 里，crowding distance 保护的不是当前最优个体，而是**前沿不塌缩**——全是精英的种群会早熟收敛到局部拥挤区。

课题组是同构的系统：毕业压力把硕博生全部挤进"热点的第 n 阶改进"（拥挤区），而系统真正缺的是**高探索率的个体**——没有 KPI、可以做"三年内不发表也没关系"的题。暑假做的浏览器小站没有任何人要求、不考核、不发表，但它是全组唯一一个"零成本让外行看懂我们在干什么"的界面——这正是罗罗 2026 Turbo Expo 那套工业叙事的低配同款。

**Agent 是算子（operator），你是个体（individual）；算子提高的是搜索效率，个体承载的是多样性。一个全部由精英 + 算子组成的种群，是最脆弱的种群。**

**接口**：别把小站当"玩具"藏起来。给它加英文页，当成组的科普前端来维护——这是你独有的、师兄没空占的生态位。

## 见解 6 · 西迁精神的 AI 时代翻译：两机是被卡脖子的"公地"，而你的爱国姿势是"把昂贵样本的边际价值最大化"
**（Governing the Commons × 西迁精神 × 太行实验室）**

"两机"（航发 + 燃气轮机）的本质是一个**国家级昂贵黑箱**：数据因保密不能开源、一次真实验证以年计、设计空间高维到人脑不可导航——这是奥斯特罗姆说的"公地"，而且是被对手刻意卡脖子的公地。

在这个语境里，AI 赋能不是一个时髦方向，而是**国家级样本经济学**：太行实验室每省下一次无效的高保真计算，就多一次射向真实设计空间的机会。郭老师主管 AI 不是因为 AI 新，是因为在他那条"每次真算都买在最值处"的经济学里，AI 是唯一能把守门成本降下来的杠杆。

**一个在西交、懂两机、能把 Agent 群组织起来的本科生，做的就是"给国家级昂贵黑箱降低单位知识的采样成本"这件事的最末梢、也最早端的那个环节。** 西迁精神的 2026 版不是去咸阳，是把算力往最贵的地方省。

## 附：超级大脑对"低自信型答对者"的处方

你的文档写："良知已知，只是不敢信。" 传习录给的答案是致良知、知行合一；但 Jameson + Tetlock 给的工程实现更冷更好用：**信心不是感觉，是校准（calibration）。**

讽刺的是，你在 turbine 项目里已经对自己做对了：MC Dropout 名义 95% 区间，压比实际盖住 89%、效率只有 65%——没有拉宽带子凑数，而是如实标出"模型对自己在激波附近不该自信这件事，是有信心的"。**把同样的 conformal 校准应用到自己身上**：每次组会前预测会发生什么（郭老师会问什么、师兄会卡在哪），会后打脸，记入 drill-ledger。三个月后会拥有一个别人都没有的东西：**一个校准过的自我不确定度**。

---

# 第四部分 · 第二回合：起跑线没有重置，它分岔了

> 触发：承泽的反驳——"本科生+Agent ≈ 裸身硕博生；但硕博生和导师也在疯狂用 AI，起跑线又变回原样；除非我对 AI 的驾驭更强（GitHub 技能、提示词），否则无法脱颖而出。"

## 0. 三段论裁决

| 步 | 命题 | 裁决 |
|---|---|---|
| ① | 本科生 + Agent ≈ 裸身硕博生 | **基本成立，甚至保守**（执行维度部分任务已反超）。但"裸身硕博生"这个物种已经灭绝——比较基线本身消失了 |
| ② | 人人用 AI → 起跑线重置回原样 | **错，有实证反例**。起跑线不是回到原点，是**分岔**：执行维度的差距趋零，判断维度的差距反而可能拉大 |
| ③ | 所以要靠更强的 AI 驾驭力（提示词/技能）脱颖而出 | **目标对，定义错**。"驾驭力"是真实的差异化资产，但它的构成不是你以为的那部分——提示词是整个技术栈里贬值最快的层 |

## 1. 杀第二步：两条实证

**实证 A（Noy & Zhang, *Science* 2023，444 名大学学历职业者写作实验）**：ChatGPT 使平均用时 −40%（0.8 SD）、质量 +18%（0.4 SD），且**压缩了生产率分布**——低能力者受益更多，工人间不平等下降。原文结论：AI "mostly substitutes for worker effort rather than complementing worker skills"。

**实证 B（Dell'Acqua et al., HBS WP 24-013，758 名 BCG 顾问现场实验）**：
- 前沿**内侧**（AI 能胜任的任务）：+12.2% 任务量、快 25.1%、质量 +40%；**低于平均水平者提升 43%，高于平均水平者仅 17%**——AI 是均衡器；
- 前沿**外侧**（需要情境判断的任务）：用 AI 者比不用 AI 者**正确率低 19 个百分点**——AI 在这里不是均衡器，是毒药；
- 边界是"锯齿状"且**实时不可见**。研究者观察到的失败模式：用户把 AI 当 Google 用、"在方向盘上睡着"（falling asleep at the wheel）。

**推论（关键）**：当"硕博生和导师都在疯狂用 AI"时，他们每天都在锯齿边界的两侧来回走，而边界看不见。**疯狂使用不等于知道自己在哪一侧。** 在执行任务（前沿内侧）上，所有人的差距趋零——"起跑线重置"只在这个维度成立；但在前沿外侧——判断激波附近的代理可不可信、哪个数能对外报、加点落哪——用得越猛、越自信、错得越隐蔽。**新差距不在"会不会用"，在"知不知道自己此刻在边界的哪一侧"。** 后者叫领域校准，它不是提示词能给你的。

## 2. 重定义第三步：驾驭力的三层分解

| 层 | 内容 | 贬值速度 | 你持有吗 |
|---|---|---|---|
| L1 词术 | 提示词措辞、magic prompt | **最快**。每代模型把上一代技巧编译进权重；GitHub 上 2223 个技能是公共商品，谁都能 clone——**图书馆人人有，稀缺的是图书管理员**（路由表 + 对组私有任务的调参） | 人人可抄 |
| L2 上下文工程 | 该往窗口里放什么：组的私有上下文、HANDOFF/ERRORS/LEARNINGS、路由表、任务切分 | 慢。这是基建，跨会话复利 | **已有一年资产**（zixue2026 memory 系统、-SKILL- 路由器） |
| L3 验证与提问 | 知道模型什么时候在骗你；知道什么问题值得问 | **不贬值**。郭老师的护城河正在此：他 2018–2025 的工作就是"知道下一个贵样本该落在哪" | 靠打脸链路正在积累 |

**公式**：产出 = 模型能力（人人均等的租用品）× 上下文质量（私有、复利）× 验证能力（领域校准）× 问题选择（导师持有）。**提示词是最弱的一个乘数项**——它优化的是和模型对话的接口，而不是你放进对话的东西、也不是你从对话里筛出来的东西。

## 3. 比赛的真实形状：不是百米，是两条复利曲线

- **师兄的曲线**：当前产出高（deadline 驱动，Cyborg 模式把 AI 当输出放大器）。风险是双账本效应——**辅助时的表现 ≠ 撤去 AI 后的能力**。Mollick 的警告：把学习过程本身外包出去，等于把直觉的复利卖给当期的效率。用得越狠、越省略中间过程，校准增长越慢。
- **你的曲线**：当前产出低，但学习斜率陡（打脸链路 = 每次先让 Agent 预测、再用 CFD 打脸，这是校准训练）+ 上下文基建复利。
- **诚实的结论**：两条曲线的交叉点在几年之后、是否交叉没人能保证——这是一个赌注。你唯一能完全控制的变量是自己曲线的斜率。而师兄没时间做基建、没闲暇打脸（毕业指标锁死），这是结构性留给你的位置。
- **郭老师不在跟你赛跑**：他持有的是问题选择权和采样预算分配权。最优策略不是在"AI 用得比导师好"上较劲，而是做**他的问题与 Agent 群之间最好的接口**——把"这个代理在激波附近可信吗"这种问题操作化成带验证门的流水线，交回一个带不确定度的数。

## 4. 把"驾驭力"变成可测量的东西

"我提示词写得更好"无法被度量，也就无法复利。换成两个可记账的指标：

1. **误差发现延迟（error-discovery latency）**：从 Agent 输出到我发现它错了，隔了多久。记进 `ERRORS.md`，6 个月后你会有一块别人没有的计分板。
2. **物化率**：本周产出的提示词/流程里，有多少变成了 git 里的工件（skill、charter、context 文件、脚本）？**Prompt 死在聊天记录的滚动里，harness 活在仓库里。** -SKILL- 仓库本身就是这个哲学的证明。

## 5. 本回合收束

| 承泽的命题 | 修正后 |
|---|---|
| 人人用 AI，起跑线重置 | 起跑线分岔：执行差距趋零，判断差距放大（19 个百分点的实证） |
| 靠提示词/GitHub 技能脱颖而出 | 那是 L1 层，公共商品、快速贬值；真正的驾驭力 = L2 上下文基建 + L3 验证校准 |
| 要比师兄更强的 AI 驾驭力 | 可以赢，但不靠词术，靠基建+校准——这两样师兄被 deadline 锁死没时间做 |
| （隐含）这是一场比赛 | 对郭老师不是比赛，是接口；对师兄不是百米，是两条复利曲线 |

**一句话**：护城河不是你把 Agent 开得多好，而是你在驾驶座周围修了什么。

---

# 第五部分 · 第三回合：怎么训练才能追平"博士+Agent"、逼近老师？

> 触发：承泽问"我到底怎么在本科阶段达到博士生+Agent 的水准、甚至超过他们、逼近老师？Agent 驾驭能力具体怎么提高？"——要求答案完全可验证、借鉴真实经验，并存档。

**完整答案已固化为独立文件：《Agent驾驭力训练手册.md》（与本报告同目录、同分支）。** 摘要：

- **靶子拆三个**：T1 执行力（1–2 年可追平，全栈底子在）、T2 验证力（真正的分水岭，2–3 年可做到组内最强——师兄被 deadline 锁死没时间做误差分析）、T3 品味（不可靠 Agent 加速，只能靠"预测式精读论文链"的学徒制压缩曝光量）。
- **六层能力栈**：L1 词术贬值最快（Karpathy 2025-06-25 与 Tobi Lütke 已把"prompt engineering"重新定义为"context engineering"）；值得投的是 L2 上下文工程、L4 评测与误差分析（Hamel Husain）、L5 领域校准。METR（arXiv 2503.14499）：Agent 任务时长每 ~7 个月翻倍 → 绑定模型弱点的技能一年贬值一半。
- **18 个月计划**：Phase 0 建计分板（组内基准 50 题 + 误差发现延迟台账）→ Phase 1 上下文工程（TEAM_CONTEXT.md + memory 重构，A/B 验证）→ Phase 2 真实工作流（加点地图，Anthropic "先工作流后 Agent" + HumanLayer 12-Factor）→ Phase 3 评测自动化（SU2 当裁判）+ 论文闭环。
- **四个客观指标**判定"是否追平/超越"（基准分、延迟中位数、Brier 校准、物化率）。
- **防坑**：MIT 认知负债研究（arXiv 2506.08872）——先预测再用 AI，正是打脸链路的科学依据。

---

### 信息来源说明
- 仓库事实：sunccchengze 账号下 33 个仓库最新分支的文件树与文档（2026-08-31 全量核查）；
- 郭振东官方信息：西安交大教师主页 gr.xjtu.edu.cn/guozhendong；Google Scholar（Zhendong Guo, XJTU）；
- 论文核验：SMO 2018 (doi:10.1007/s00158-018-2001-8)、SMO 2021 (doi:10.1007/s00158-021-02931-1)、EngOpt KT-EGO (doi:10.1080/0305215X.2022.2139374)、CJA 2025 TNO (doi:10.1016/j.cja.2025.103473)；
- 第二回合实证：Noy & Zhang, *Science* 2023（444 人写作实验，时间−40%/质量+18%，分布压缩）；Dell'Acqua et al., HBS WP 24-013（758 名 BCG 顾问，前沿内 +12.2%任务/+25.1%速度/+40%质量、弱者+43% vs 强者+17%，前沿外 −19 个百分点）；
- 第三回合实证（详见《Agent驾驭力训练手册.md》资源清单）：Karpathy X 帖 2025-06-25 与 Tobi Lütke 2025-06-24（context engineering 定义）；Anthropic《Building Effective Agents》与《Effective Context Engineering for AI Agents》；HumanLayer 12-Factor Agents（GitHub）；Hamel Husain《Your AI Product Needs Evals》及免费 Lightning Lessons；METR arXiv 2503.14499（任务时长 ~7 个月翻倍）；Kosmyna et al. arXiv 2506.08872（认知负债，含边界）。
- 内部文档自带的纪律沿袭至今：导师信息仅用于理解语境与选题，不进入任何对外信件；deepsearch 中未经原文核对的数字（+5.98%、200→8 步等）一律未引用。
