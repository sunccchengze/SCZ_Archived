# yiming · 全分支详细原文

> 去重后的文本资料；每个 SOURCE 标题保留来源分支和路径。


---

## SOURCE · `arena/01a05b71-yiming:HANDOFF.md`

<!-- blob: 191a8255b136bb39a10ede55ba2f01c993486b16; bytes: 11387 -->

# HANDOFF — Yiming Lab / Council

> 交接给下一位 Agent。当前 Agent 在写完本文件后停止，不继续执行 Phase A–F，不调用模型，不读取新的私有语料。

## 0. 交接状态

- 仓库：`sunccchengze/yiming`
- 固定工作分支：`arena/01a05b71-yiming`
- 当前 HEAD：`68b7d63 Record roundtable checkpoint and approval plan`
- 远端：`origin/arena/01a05b71-yiming`
- 当前工作树：应保持干净
- 交接日期：2026-09-01（Asia/Shanghai）
- 用户最新指令：**进行 HANDOFF，剩下的交给其他 agent**

不要切换、创建或 push 到其他分支。

## 1. 用户要做什么

用户希望把自己 `sunccchengze/-SKILL-` 仓库里蒸馏过的书籍、人物和方法，变成一场可审计的独立视角决策研讨室：

```text
一个问题
  ├─ 每本书/每个人物是一个独立 analytical lens
  ├─ 第一轮并行回答，彼此看不到 prompt/output
  ├─ 匿名 reviewer 审查提案、证据缺口、少数意见和行动风险
  └─ 最后由 chair 综合共识、冲突、dissent、实验和停止条件
```

“百人圆桌”是显式的大规模运行模式，不是默认每次都把所有 seat 跑满。
Seat 是分析镜，不是实际人物、作者或用户本人的发言器。

## 2. 已完成的实现，不要重写

核心代码已经存在于 `lab/`，不要重新从零搭一个 council framework：

- `lab/council.py`
  - 只读扫描本地 `-SKILL-` checkout；
  - `people-books` / `distilled` / `all` roster mode；
  - 稳定 seat ID：`kind + relative_path + file_sha256`；
  - 记录 source root、branch、tip commit、dirty state、文件 hash、行数和 lens policy。
- `lab/council_protocol.py`
  - model-free `prepare`；
  - 每个 seat 独立 prompt、cwd、`DEEPTUTOR_HOME`、stdout/stderr 和 attempt 目录；
  - 第一轮完成后才生成 `blind-packet.json`；
  - `blind-map.json` 仅本地保存真实 seat 映射；
  - evidence / dissent / action reviewer；
  - chair；
  - `--resume`、失败保留、调用/重试/并发/超时预算。
- `lab/council_records.py`
  - ballot、reviewer ballot、chair sections、decision record、quality gate；
  - 缺字段不补零，不把缺失解释为反对或共识。
- `lab/pipeline.py`
  - 本地项目事实包；
  - OpenWiki local-git connector 配置；
  - DeepTutor KB / run plan；
  - 默认禁止把私有制品输出到 Git checkout。
- `lab/routing.py` / `lab/skills.py`
  - 最小技能组路由；
  - DeepTutor capability/tool 配置；
  - `sun-chengze-perspective` 只作决策校准镜；
  - quality/evidence 约束。
- `lab/test_lab.py`
  - 当前 10 个针对性测试。

入口：

```bash
python -m lab --help
python -m lab council roster --help
python -m lab council prepare --help
python -m lab council run --help
```

完整使用说明：[`lab/README.md`](lab/README.md)
阶段计划与确认边界：[`lab/CHECKPOINT.md`](lab/CHECKPOINT.md)
外部检索记录：[`lab/RESEARCH_NOTES.md`](lab/RESEARCH_NOTES.md)

## 3. 已推送里程碑

```text
9b5e694 Add independent skill council adapter
 d217134 Add blind reviewers and resumable council runs
 ab70eb2 Document subagent design sources
 f1e87a7 Add council provenance ballots and quality gates
 68b7d63 Record roundtable checkpoint and approval plan
```

`68b7d63` 之前的 4 个 council 相关提交已经在远端 branch 上。不要因为一个新的
Arena 工作回合 materialize 到 `300309f` 基线，就判断这些工作不存在；先执行：

```bash
git fetch origin arena/01a05b71-yiming
git reset --hard origin/arena/01a05b71-yiming
```

只在确认工作树没有用户新改动时执行 reset。固定分支不变。

## 4. 已验证事实

最近在 `f1e87a7` 上重新验证过：

```text
python -m compileall -q lab       PASS
python -m unittest -v lab.test_lab PASS — 10 tests
python -m lab --help              PASS
```

测试覆盖 roster provenance、独立 home、prompt isolation、blind packet、匿名映射、
reviewer/chair 读取边界、structured ballot、resume、预算、private-output 拒绝和
无 key dry-run。

当前还没有完成的验证：

- 没有用真实 provider 跑完 66 个 seat；
- 没有允许 `--execute` 产生真实模型账单；
- 没有把任何东西安装进用户的 `~/.claude/agents`、`~/.openwiki` 或其他 Agent 目录；
- 没有重新在本回合下载两个 `-SKILL-` checkout。之前用于验证的 `/tmp` clone 是临时的，
  下一位 Agent 必须重新定位或 clone，并记录 branch/tip SHA；
- “66 个 seat：33 本书 + 33 个人物视角”是当前文档记录的预期值，必须用实际 checkout
  重新跑 `roster`，不能盲信旧数字。

## 5. 外部底座和固定来源

不要复制成熟项目整仓。当前组合边界如下：

| 来源 | 固定版本/事实 | 用法 |
|---|---|---|
| [OpenWiki](https://github.com/langchain-ai/openwiki) | npm `0.3.2`，Node `>=22`，MIT | 项目/个人 wiki 和 local-git connector；Yiming 只生成配置/计划 |
| [DeepTutor](https://github.com/HKUDS/DeepTutor) | PyPI `1.6.2`，Python `>=3.11,<3.14`，Apache-2.0 | 每席隔离 CLI runtime、reviewer、chair、KB、research |
| [Council of High Intelligence](https://github.com/0xNyk/council-of-high-intelligence) | 上游 tip `502ceda82050d607cbef88078a69b07084835410`，MIT，18 个已有 lens | 协议参考：独立首轮、匿名审查、dissent、预算、provider routing；不盲拷贝 |
| [Karpathy llm-council](https://github.com/karpathy/llm-council) | 并行回答 → 匿名互评 → chair；当前 license 信息未确认 | 仅方法论参考，不作为代码依赖 |
| `-SKILL-` `arena/01a048e7-skill@4cbe659` | 含 OpenWiki/DeepTutor skill、universal router、research workflow、quality gates | 主适配来源 |
| `-SKILL-` `main@0da485b45aad600fe98e7316885a094ea508cfaa` | 含 `sun-chengze-perspective` | 个人决策校准镜，默认只读 `SKILL.md` |

详细来源、X/GitHub 检索和没有采用的方案见 `lab/RESEARCH_NOTES.md`。

## 6. 下一位 Agent 的推荐执行顺序

### Step 1 — 先恢复真实 branch 状态

```bash
git status --short
git log --oneline --decorate -8
git fetch origin arena/01a05b71-yiming
git reset --hard origin/arena/01a05b71-yiming
```

如果有非本次 Agent 的新改动，先停下来，不要覆盖。

### Step 2 — 准备并记录两个 skill checkout

建议不要把它们放入当前仓库，也不要把内容 commit：

```bash
git clone --depth=1 --branch arena/01a048e7-skill \
  https://github.com/sunccchengze/-SKILL-.git /some/private/path/skill-arena-01a048e7

git clone --depth=1 --branch main \
  https://github.com/sunccchengze/-SKILL-.git /some/private/path/skill-main

git -C /some/private/path/skill-arena-01a048e7 rev-parse HEAD
git -C /some/private/path/skill-main rev-parse HEAD
```

OpenWiki/DeepTutor/router/governance 与个人 perspective 不在同一 branch，不能假装是
一个 snapshot。

### Step 3 — 重新核对 roster（只读）

```bash
python -m lab council roster \
  --skill-root /some/private/path/skill-arena-01a048e7 \
  --skill-root /some/private/path/skill-main \
  --roster-mode people-books \
  --limit 0 \
  --json
```

确认 books/people/count、每个 source branch/tip SHA、dirty state。只读取目标包的
`SKILL.md`、LICENSE/NOTICE 和必要 provenance；默认不要读取 `memory/`、访谈原文或
references。

### Step 4 — 先做 5-seat model-free prepare

输出必须在 checkout 外：

```bash
python -m lab council prepare \
  --out "$HOME/.local/share/yiming-lab/councils/<UTC-run-id>" \
  --skill-root /some/private/path/skill-arena-01a048e7 \
  --skill-root /some/private/path/skill-main \
  --roster-mode people-books \
  --max-seats 5 \
  --reviewer-count 3 \
  --max-attempts 1 \
  --task '从我最近的项目轨迹中找出最值得做的下一个研究实验，比较方案，保留强烈反对意见。'
```

这一步不能调用模型。检查：

- `COUNCIL_PLAN.md`；
- `council.json` / `roster.json`；
- 每个 `seats/<id>/prompt.md`；
- 每个 seat 独立 `runtime/seats/<id>/`；
- `peer_output_injected=false`；
- 预算：5 seat + 3 reviewer + 1 chair，重试次数明确；
- 所有 output 路径在 Git checkout 外。

### Step 5 — 做 dry-run/fake-runtime E2E

```bash
python -m lab council run \
  --run "$HOME/.local/share/yiming-lab/councils/<UTC-run-id>"
```

然后使用本地 fake `deeptutor` executable 验证执行路径，不发网络请求：

- seat stdout/stderr/attempt 可持久化；
- blind packet 在所有 seat 完成后才创建；
- reviewer/chair 只能看到规定输入；
- blind-map 不进入 reviewer/chair prompt；
- `--resume` 只复用已成功 stdout；
- 失败不伪装成共识；
- `quality-gates.json` 和 `DISSENT_LEDGER.md` 正确记录未验证项。

### Step 6 — 真实运行前必须再次确认

真实调用前需要：

- 用户明确允许真实模型调用；
- 用户配置了 DeepTutor provider；
- 明确 `--workers`、`--timeout-seconds`、`--max-attempts`、`--max-calls`；
- 先 3–5 席，不直接跑 66/100；
- 用户/人工阅读 dissent、evidence gaps 和 quality gates；
- 不自动写其他 Agent 配置，不自动发布或执行外部行动。

## 7. 重要安全边界

1. **模型调用是显式副作用**：无 `--execute` 不调用；不要把 dry-run 结果说成真实结论。
2. **私人输出不进 Git**：run、source pack、个人 skill 副本、DeepTutor home、模型日志
   默认放在 `$HOME/.local/share/yiming-lab` 或其他 checkout 外目录。
3. **不传播 secrets**：不读取 `.env`、token、私钥、密码或原始 credential；日志只记录
   key 名称/状态，不记录值。
4. **不冒充人物/作者/用户**：人物 seat 只表达方法 lens；必须保留
   `analytical_person_lens_not_person_statement` 边界。
5. **匿名不是 OS sandbox**：`isolation-audit.json` 证明 adapter 未向首轮注入 peer
   output，但 DeepTutor/provider/宿主工具的真实权限仍需另外审计。
6. **不把投票当真理**：ballot 是模型自报的结构化决策支持指标；缺字段不补零，少数意见
   与 abstain 必须保留。
7. **不默认“百人”**：多席位会线性增加调用数和费用；Anthropic 的公开经验也强调
   多 agent 适合可拆分的 breadth-first 问题，不适合紧耦合、强顺序任务。
8. **不继续扩展 Atlas UI**：Atlas 仅作为 GitHub 轨迹适配器候选，除非新改动直接服务于
   OpenWiki/DeepTutor/Council 集成。

## 8. 交付要求

下一位 Agent 每个里程碑都要：

```bash
python -m compileall -q lab
python -m unittest -v lab.test_lab
git diff --check
git status --short
git add <intentional-files>
git commit -m "<focused milestone>"
git push origin arena/01a05b71-yiming
```

报告必须包含：

- 实际执行的命令和结果；
- 实际 seat 数、成功/失败数、reviewer 数、chair 状态；
- private output 路径（不贴私密内容）；
- provenance branch/tip/hash；
- 未验证项、失败原因、费用/调用数限制；
- 没有把模型推断、示例数据或 dry-run 当成真实事实。

## 9. 当前停止点

本交接完成后，当前 Agent 的工作结束。下一 Agent 可以从 Step 1 开始，但必须尊重
上述隐私、预算、branch 和人工确认边界。


---

## SOURCE · `arena/01a05b71-yiming:README.md`

<!-- blob: 47016eb28964333a93d878b9bc48751b84a782ae; bytes: 1635 -->

# yiming

当前主线是 **Yiming Lab / Council**：一个建立在成熟 GitHub 项目之上的、本地优先的
「百人圆桌」决策研讨室。

它不重新发明一个孤立的 agent 产品，也不把上游项目整仓复制进来：

```text
- SKILL- 中的书籍 / 人物 skill
        ↓ 每个 skill 一个独立席位
DeepTutor CLI 的隔离进程
        ↓ 首轮并行、互相看不到回答
匿名 blind packet + 主席
        ↓
决策备忘录 / 反对意见 / 证据缺口 / 可逆实验
```

- [Yiming Lab / Council 使用说明](lab/README.md)
- [外部多 Agent 实践检索记录](lab/RESEARCH_NOTES.md)
- [Atlas：冻结的 GitHub 轨迹适配器](atlas/README.md)
- [Atlas / 旧阶段进度](atlas/PROGRESS.md)
- [MiniLLM：早期独立实验](minillm/README.md)

## 最小 dry-run

不需要 API key，也不会调用模型：

```bash
python -m lab council roster --skill-root /path/to/-SKILL- --limit 0
python -m lab council prepare \
  --out "$HOME/.local/share/yiming-lab/councils/<run-id>" \
  --skill-root /path/to/-SKILL- \
  --roster-mode people-books \
  --max-seats 12
python -m lab council run \
  --run "$HOME/.local/share/yiming-lab/councils/<run-id>"
```

只有明确添加 `--execute` 才会调用 DeepTutor；默认 `--max-seats 12`，可显式改成
24 或 `0`（全部匹配席位），但每次调用数、超时和重试上限都必须纳入预算。完整安装、
OpenWiki 接入、匿名审计、结构化 ballot、质量门禁和 66 席全量运行方式见
[`lab/README.md`](lab/README.md)。私有 run 默认写到 Git checkout 之外，不进入本仓库
版本历史。


---

## SOURCE · `arena/01a05b71-yiming:atlas/PROGRESS.md`

<!-- blob: 08177bc7386a4a81cf6c98fa30e5597ba28207bf; bytes: 1426 -->

# 乙鸣星图进度记录

最后更新：2026-09-01

## 已完成

- [x] 盘点账号可见仓库、所有 branch 和 2026-08-01 以来的提交
- [x] 设计个人创作轨迹的浏览器原型
- [x] 建立隐私优先的数据构建器，不把原始 private 源码写进 Git
- [x] 完成总览、星图、项目档案、创作轨道、灵感舱和未来信界面
- [x] 灵感可以基于真实项目信号生成、复制和本地收藏
- [x] 通过 Python 单元测试、Node JS 语法检查和 HTTP 静态资源检查
- [x] 每个重要里程碑提交并 push 到 `arena/01a05b71-yiming`

## 当前版本

Atlas 最新 UI 里程碑：`34c6375 Persist personal atlas inspiration notes`

当前 Arena public 快照统计：

- 33 个仓库
- 86 条 branch
- 3428 条近期提交
- 10 个最近一个月活跃的仓库

## 方向调整

Atlas 已冻结为原型和数据适配器。最终交付不再是从零打造的 Atlas 展示站，而是
[`../lab/`](../lab/README.md) 中的 Yiming Council：把成熟的 OpenWiki、DeepTutor
与 `-SKILL-` 中的书籍/人物 skill 组合成个人研究与创造副驾驶。

## 尚未验证

- [ ] 在用户本地 GitHub 授权下采集 private 仓库
- [ ] 在真实浏览器中做一次完整的桌面/手机交互回归
- [ ] 将 Atlas corpus 适配到 OpenWiki/DeepTutor 的真实本地安装

这些事项不阻塞 Council 的无 key roster、prompt 隔离和 dry-run 验证。


---

## SOURCE · `arena/01a05b71-yiming:atlas/README.md`

<!-- blob: fcba50fdcc77f32a83f5b52a82a150297f6c5bd6; bytes: 1623 -->

# 乙鸣星图 · Yiming Atlas（已冻结原型）

Atlas 是前一阶段做出的 GitHub 创作轨迹浏览器和数据适配器。它现在只保留为
**本地事实源的可视化实验**，不再作为最终产品继续堆叠自定义 UI。

当前产品方向已经转为 [`lab/`](../lab/README.md)：以 OpenWiki、DeepTutor 和
`sunccchengze/-SKILL-` 的书籍/人物 skill 组合出 Yiming Council。Atlas 的
inventory/corpus 结构仍可作为输入适配器，但不是 Council 的核心运行时。

## 数据边界

- 页面数据由本地 `build_data.py` 从 `account_inventory.json` 生成。
- 默认只包含仓库元数据、分支、近期提交摘要和统计，不上传任何内容。
- 采集 private 仓库时，生成的 JSON 只留在本机；`atlas/data/` 下的生成文件已被忽略。
- 采集器会在更早一步跳过密钥、`.env`、凭据和大文件；`.github/` 中的文本、YAML
  和规则文件会保留，因为它们常常是项目治理事实。

## 生成数据

```bash
python -m atlas.build_data \
  --inventory minillm/artifacts/account_inventory.json \
  --corpus minillm/artifacts/github_corpus.jsonl \
  --out atlas/data/generated.json
```

## 本地预览

```bash
python -m http.server 8000 --directory atlas
```

然后打开 <http://localhost:8000>。

## 当前边界

已完成的星图、项目档案、创作轨道、灵感舱和本地收藏功能保持可用；尚未验证的
private 仓库采集和真实浏览器回归仍记录在 [`PROGRESS.md`](PROGRESS.md)。后续只有
在它能直接帮助 Council 做事实源适配时，才继续修改 Atlas。


---

## SOURCE · `arena/01a05b71-yiming:lab/CHECKPOINT.md`

<!-- blob: 502f6babc3398a365da05c4945d14cb137c27c0e; bytes: 10926 -->

# Yiming Lab 阶段检查点与待确认计划

- 检查点日期：2026-09-01（Asia/Shanghai）
- 当前分支：`arena/01a05b71-yiming`
- 当前 HEAD：`f1e87a7 Add council provenance ballots and quality gates`
- 状态：**等待用户确认后再进入下一阶段**

> 本文件是阶段性留档，不是新的产品方向批准书。下一阶段不会在用户确认前执行模型调用、读取新的私有语料或安装到用户 Agent 目录。

## 一、已经完成的阶段

### 1. 基础事实源

- 盘点了 `sunccchengze` 账号可见的近期项目、全部 branch 和近期 commit；已有本地 inventory 作为事实输入。
- 保留了 branch/commit 信号，不只看默认 `main`。
- 采集器默认过滤 `.env`、私钥、凭据、疑似 token、二进制、大型依赖和构建产物，同时保留 `.github` 文本、工作流和规则文件。
- Atlas 原型仍保留为项目轨迹/知识源适配器，不再继续作为孤立展示站堆叠 UI。

### 2. 已推送的 Yiming Council 适配层

现有实现已经不是空计划，而是一个可准备、可 dry-run、可恢复的薄适配层：

- `lab/council.py`
  - 从本地 `-SKILL-` checkout 只读发现 `SKILL.md`；
  - 将蒸馏书籍、人物 perspective 和方法 skill 变成稳定 seat；
  - seat ID 基于 `kind + relative_path + file_sha256`，不依赖枚举顺序；
  - 记录 source branch、tip commit、dirty state、文件 hash 和“分析镜而非真人发言”的边界。
- `lab/council_protocol.py`
  - 第一轮独立并行 seat；
  - 每个 seat 使用独立 `DEEPTUTOR_HOME` 和独立运行目录；
  - 第一轮完成后才生成匿名 `blind-packet.json`；
  - blind reviewers 只看匿名提案，不看真实 seat 映射；
  - chair 在最后读取匿名提案、review、ballot 和证据缺口；
  - 支持 `--resume`，成功 seat 的 stdout 可复用，失败 seat 保留失败记录；
  - 明确的 `--max-seats`、`--workers`、`--timeout-seconds`、`--max-attempts`、`--max-calls`。
- `lab/council_records.py`
  - 解析结构化 ballot、review 和 chair memo；
  - 缺字段不补成 0，不把缺失当作反对；
  - 生成 `decision-record.json`、`quality-gates.json` 和 `DISSENT_LEDGER.md`。
- `lab/pipeline.py`
  - 生成本地项目事实包、OpenWiki local-git 配置和 DeepTutor 运行计划；
  - 默认禁止把私有制品写进当前 Git checkout；
  - `--execute` 不是默认行为。
- `lab/routing.py` / `lab/skills.py`
  - 以 `universal-skill-router` 为协调入口；
  - 按任务选择 DeepTutor capability、工具、证据门禁和 `sun-chengze-perspective`；
  - 只读取最小 skill 组，不把整个 skill 仓库塞进上下文。

### 3. 已吸收的成熟项目和公开经验

当前方案的核心不是从零写一个新 council，而是组合已有项目：

| 来源 | 已确认事实 | 当前用法 |
|---|---|---|
| [Council of High Intelligence](https://github.com/0xNyk/council-of-high-intelligence) | MIT；当前固定上游 commit `502ceda82050d607cbef88078a69b07084835410`；18 个历史人物 lens；支持 full/triad/duo、provider routing、blind/weighted verdict 等协议 | 借鉴并对齐独立席位、匿名审查、dissent、预算和 provider 边界；不盲目复制整仓 |
| [Karpathy llm-council](https://github.com/karpathy/llm-council) | 三阶段范式：并行独立回答、匿名互评、主席综合；GitHub API 当前未给出可确认的 license 信息 | 只吸收公开方法论；未作为代码依赖 |
| [Anthropic multi-agent research system](https://www.anthropic.com/engineering/multi-agent-research-system) | orchestrator-worker、独立 context、并行研究、外部记忆和独立 citation pass | 借鉴“先独立、后汇聚”和外部制品；不把性能数字直接当成本项目保证 |
| [OpenWiki](https://github.com/langchain-ai/openwiki) | npm `0.3.2`；Node `>=22`；MIT；personal/code wiki、local git connector、Markdown/OKF 输出 | 作为个人/项目知识底座；Yiming 只生成配置和运行计划 |
| [DeepTutor](https://github.com/HKUDS/DeepTutor) | PyPI `1.6.2`；Python `>=3.11,<3.14`；Apache-2.0；支持 `run`、KB、research、question、visualize、memory | 作为每个独立 seat 的 CLI runtime 和最后 chair/reviewer runtime |
| 用户 `[-SKILL-](https://github.com/sunccchengze/-SKILL-)` | `arena/01a048e7-skill@4cbe659` 含 OpenWiki、DeepTutor skill、router、research workflow、quality gates；`main@0da485b45aad600fe98e7316885a094ea508cfaa` 含当前 `sun-chengze-perspective` | 作为 seat catalog、个人校准镜和人工质量门；不把 branch 差异伪装成单一 snapshot |

已保存的详细外部检索记录见 [`RESEARCH_NOTES.md`](RESEARCH_NOTES.md)。

### 4. 当前已经推送的 commit 链

```text
9b5e694 Add independent skill council adapter
 d217134 Add blind reviewers and resumable council runs
 ab70eb2 Document subagent design sources
 f1e87a7 Add council provenance ballots and quality gates
```

之前的 Atlas 里程碑也在同一 branch 上。当前已将本地 checkout 对齐到远端的
`f1e87a7`，避免把已完成工作误判成未开始。

## 二、当前验证结果

已在 `f1e87a7` 上重新执行：

```text
python -m compileall -q lab       PASS
python -m unittest -v lab.test_lab PASS — 10 tests
python -m lab --help              PASS
```

已有针对性测试覆盖：

- roster 只发现目标 people/books；
- source branch、tip commit、dirty state 和 hash provenance；
- blind packet 去除 seat 身份且保留私有映射；
- 独立 home、独立 prompt、peer output withheld 审计；
- reviewer/ballot/chair 结构化解析；
- resume 与失败记录；
- 调用预算；
- private output 在 checkout 内的拒绝；
- 无 key preparation/dry-run 不执行模型。

## 三、你提出的新想法如何落地

你的想法是：把 `-SKILL-` 中蒸馏过的人和书变成独立 subagent，举行盛大的百人圆桌。
当前实现将它拆成四个层次：

```text
人物/书籍 SKILL.md
        ↓ 只读发现 + provenance + 稳定 seat ID
独立 seat pass
        ↓ 每个 seat 只收到共同问题 + 共同事实 + 自己的 lens
匿名 reviewer pass
        ↓ 只看 P001...PN 的匿名提案，不知道真实姓名
Chair pass
        ↓ 汇总共识、分歧、证据缺口、可逆实验和停止条件
```

重要的语义边界：

- seat 是某个方法/人物/书籍的**分析镜**，不是该真人本人，也不是书作者的授权代言；
- 同一个模型的多个 seat 可以有认知角度差异，但不能冒充跨模型、跨文化或真实专家多样性；
- “百人”支持作为显式大规模模式，但不默认打开；第一次应从 5 或 12 席开始；
- 首轮故意不让 seat 互相聊天，避免第一个回答造成 anchoring/herding；
- “共享上下文”只能是用户批准的事实包，不能偷偷包含其他 seat 的回答或私有映射。

## 四、等待确认的下一阶段计划

### Phase A：确认 roster 与隐私范围

1. 在用户提供/允许的两个本地 `-SKILL-` checkout 上重新运行 `council roster`；
2. 核对预期的 people-books roster（当前文档记录为 **66 个 seat：33 本书 + 33 个人物视角**）；
3. 只读取每个目标包的 `SKILL.md`、license/notice 和必要的引用说明；
4. 默认不读取 `memory/`、访谈原文和其他可能含私人细节的 references；
5. 确认是否允许把 `sun-chengze-perspective` 的完整 skill 放进本地 seat brief；它默认只写在 Git checkout 外的私有运行目录。

### Phase B：小规模无 key 验收

1. `council prepare --max-seats 5 --reviewer-count 3`；
2. 检查 prompt、独立 home、blind packet、private map 和质量门；
3. `council run` 默认 dry-run，确认 expected calls、worst-case calls 和错误处理；
4. 用本地 fake DeepTutor executable 做一次端到端协议测试，不调用远程模型；
5. 出具第一份可审阅的 `COUNCIL_PLAN.md` 和制品树。

### Phase C：真实小圆桌

仅在用户确认且 provider 已配置后：

1. 先用 3–5 个 seat 跑真实 `--execute`；
2. 不自动安装到 `~/.claude/agents`，不自动修改用户其他 Agent 配置；
3. 检查每席 stdout/stderr、是否出现 peer leakage、是否按要求输出 ballot；
4. 人工阅读 `DISSENT_LEDGER.md`、`decision-record.json` 和 `quality-gates.json`；
5. 若小规模质量可接受，再扩到 12 席。

### Phase D：百人模式的显式实验

仅在 Phase C 通过后才考虑：

1. `--max-seats 0` 或显式 `--max-seats 66/100`；
2. 强制要求 `--max-calls`、`--workers`、`--timeout-seconds` 和人工确认；
3. 分批执行并保存 checkpoint，不因单个 seat 失败而伪造全体共识；
4. 保留完整 dissent 与 abstain，不把票数当事实正确率；
5. 评估 token、时间和费用后再决定是否常态化；
6. 不默认添加开放式互聊/递归 spawn，除非另做协议和风险评审。

### Phase E：OpenWiki / DeepTutor 知识底座接线

1. 用 OpenWiki 的 local-git connector 连接用户明确指定的本地项目路径；
2. 用项目事实包生成 DeepTutor KB；
3. 将研究章程、证据表、claim-source map 和 council report 都留在本地可审计目录；
4. 通过 OpenWiki wiki 可视化项目关系，通过 DeepTutor 做 research、quiz、mastery path；
5. 仍然保持模型 key、私有源码、个人 memory 和运行输出不进入 Git。

### Phase F：交付门禁

- 运行针对性测试、静态检查和 fake-runtime E2E；
- 做一次独立隐私/许可/依赖审查；
- 记录实际验证项、未验证项和失败原因；
- 每个里程碑单独 commit/push 到 `arena/01a05b71-yiming`；
- 不在用户确认前进入 Phase C、D 或 E 的真实执行部分。

## 五、请你确认的事项

请确认以下默认值，或者直接修改：

1. **第一轮规模**：是否先跑 5 席，再跑 12 席，最后才考虑 66/100 席？
2. **roster 范围**：是否默认只纳入 `people-books`，即蒸馏书籍和人物视角；方法类 skill 只做 reviewer/support，不自动变成席位？
3. **个人语料边界**：是否允许使用完整 `sun-chengze-perspective/SKILL.md` 作为本地 seat brief，但默认不读取 `memory/`、访谈和 references？
4. **执行后端**：是否先以 DeepTutor CLI 作为统一 seat runtime，保留 0xNyk Council/ Karpathy 作为协议来源，而不是现在就安装其他 host 的插件？
5. **真实执行条件**：是否仅在你明确说“确认执行”且 provider 已配置后，才允许任何远程模型调用？

建议确认语句：

> **确认执行 Phase A + Phase B；第一轮 5 席；只读 people-books；允许读取 perspective 的 SKILL.md，不读取 memory/references；真实模型调用另行确认。**

收到确认前，本仓库停在本检查点，不继续扩展实现。


---

## SOURCE · `arena/01a05b71-yiming:lab/README.md`

<!-- blob: 8c5527e802b0f7b4a67d94bb4c4b85bf4f6f0f20; bytes: 12282 -->

# Yiming Lab / Council

> 一个建立在成熟项目之上的、本地优先的「百人圆桌」适配层。

Yiming Council 不把每本书、每个人重新实现成一套 agent framework。它把
`sunccchengze/-SKILL-` 中的蒸馏 skill 解析成独立席位，再用 DeepTutor CLI
做隔离运行时，用 OpenWiki 提供项目事实底座，用 `-SKILL-` 的路由与研究门禁
约束最后的综合。

## 先说清楚：subagent 权限

当前 Arena 工具面板没有直接暴露原生 `spawn_subagent` API。因此本实现使用
**一个 DeepTutor CLI 进程 = 一个独立席位**：

- 每个席位只收到共同事实、自己的 skill brief 和同一个问题；
- 第一轮用并行进程扇出，席位不读取其他席位的 prompt/output；
- 每个席位拥有独立的 `DEEPTUTOR_HOME`，不共享 session、memory 或 notebook；
- 所有席位结束后才建立不含姓名的 `blind-packet.json`；
- 证据、分歧、行动三个 reviewer 只读匿名提案，分别找无证据断言、最强少数意见和不可逆动作；
- 主席只读匿名提案与 reviewer notes，并输出最终决策 memo；
- `prepare` 和默认 `run` 都不调用模型，只有明确加 `--execute` 才会产生模型调用。

这比让一群 agent 一开始就聊天更适合“百人圆桌”：先保留真正的异议，再让
主席做归纳，减少第一个回答对后续回答的锚定。

## 当前 roster

`people-books` 模式会发现：

- `skills/community/nuwa-distilled/**/book-*/SKILL.md`：蒸馏书籍；
- `skills/community/nuwa-distilled/**/*perspective*/SKILL.md`：蒸馏人物视角；
- `skills/community/nuwa-skill/examples/*perspective*/SKILL.md`：人物视角示例；
- `skills/core/*perspective*/SKILL.md`：核心人物视角。

在本次固定的两个 `-SKILL-` checkout 上，当前发现 **66 个席位：33 本书 +
33 个人物视角**。这是运行时扫描结果，不是写死的名单；skill 仓库更新后，
先重新运行 `council roster` 审阅变更。

```bash
python -m lab council roster \
  --skill-root /path/to/skill-arena-01a048e7 \
  --skill-root /path/to/skill-main \
  --roster-mode people-books \
  --limit 0
```

`--roster-mode distilled` 会额外纳入 Nuwa 蒸馏的方法类 skill；`all` 会扫描
提供的 checkout 中所有 `SKILL.md`，适合实验，不建议默认直接跑满。

## 快速开始：先做无 key 的完整 dry-run

### 1. 准备两个 skill checkout

OpenWiki、DeepTutor 和治理文件在一个固定工作分支；
`sun-chengze-perspective` 在 `main`。这是上游分支事实，所以命令明确保留
两个来源，而不是假装它们属于同一个 snapshot：

```bash
git clone --depth=1 --branch arena/01a048e7-skill \
  https://github.com/sunccchengze/-SKILL-.git \
  /path/to/skill-arena-01a048e7

git clone --depth=1 --branch main \
  https://github.com/sunccchengze/-SKILL-.git \
  /path/to/skill-main
```

### 2. 生成私有项目事实包

输出目录放在 Git checkout 外；默认不复制源码，只有显式加
`--include-corpus` 才会把已经采集的安全记录放入本地包：

```bash
python -m lab prepare \
  --inventory minillm/artifacts/account_inventory.json \
  --out "$HOME/.local/share/yiming-lab/runs/$(date -u +%Y%m%dT%H%M%SZ)" \
  --skill-root /path/to/skill-arena-01a048e7 \
  --perspective-root /path/to/skill-main \
  --repo yiming="$PWD"
```

命令只会写 `run.json`、Markdown source pack、OpenWiki 本地 connector 配置和
`RUN_PLAN.md`。它不会自动联网、调用模型或写 `~/.openwiki`。

### 3. 准备百人圆桌

```bash
python -m lab council prepare \
  --out "$HOME/.local/share/yiming-lab/councils/$(date -u +%Y%m%dT%H%M%SZ)" \
  --skill-root /path/to/skill-arena-01a048e7 \
  --skill-root /path/to/skill-main \
  --roster-mode people-books \
  --max-seats 0 \
  --reviewer-count 3 \
  --source-pack /path/to/the/run/source-pack \
  --task '从我最近的项目轨迹中找出最值得做的下一个研究实验，比较方案，保留强烈反对意见。'
```

`--max-seats 0` 表示全部匹配席位。第一次试跑建议 `--max-seats 5` 或 `12`，
确认 prompt、成本和输出格式后再开 66 席。

### 4. 只查看执行计划

```bash
python -m lab council run \
  --run "$HOME/.local/share/yiming-lab/councils/<run-id>"
```

### 5. 配好 DeepTutor 后才真正执行

```bash
# 安装版本以实际运行条件为准；不要把 provider key 写进仓库。
pip install 'deeptutor[cli]==1.6.2'

python -m lab council run \
  --run "$HOME/.local/share/yiming-lab/councils/<run-id>" \
  --execute \
  --workers 8
```

席位阶段是 `N` 次并行调用，接着最多 3 次盲 reviewer，最后主席再调用 1 次；
所以“百人”不是无成本修辞。执行前应先看 `COUNCIL_PLAN.md`，用 `--max-seats`、
`--reviewer-count`、`--workers` 和 `--max-calls` 控制预算。默认最多 12 个席位、
每次调用 1 个 attempt；只有显式设置 `--max-attempts` 才会重试失败/超时调用。
这只是调用数/超时预算，不等于 provider 的 token 账单；通用 CLI 没有可靠的跨模型
token 计量，因此不伪造成本数字。每个席位的失败、stderr、stdout 和每次 attempt
都会落在该席位自己的目录里，不会让其他席位看到它的中间结果。中途失败后可以
加 `--resume`，只重跑缺失/失败的席位，再重新审查 blind packet。

## 目录与制品

```text
<private-run>/
├── council.json             # 协议、路由、隐私和调用预算
├── roster.json              # 发现到的席位、源路径、文件 hash
├── COUNCIL_PLAN.md          # 不执行的审阅计划
├── seats/<seat-id>/
│   ├── prompt.md            # 该席位唯一能看到的输入
│   ├── stdout.log           # 模型原始输出
│   └── stderr.log           # 失败/诊断
├── runtime/seats/<seat-id>/ # 每席位独立 DEEPTUTOR_HOME
├── blind-packet.json        # 去姓名后的提案，供 reviewer/主席读取
├── blind-map.json            # 本地私有 P### ↔ seat 映射；不传给 reviewer/主席
├── reviewers/<reviewer-id>/ # evidence / dissent / action reviewer
├── reviewer-results.json
├── reviewer-ballots.json     # reviewer 结构化审查（缺字段不补）
├── ballots.json               # seat 结构化 ballot 与透明加权分数
├── DISSENT_LEDGER.md          # 少数意见、反例和未决问题
├── decision-record.json       # 从主席原文提取的共识/异议/证据/实验记录
├── quality-gates.json         # 协议与输出结构门禁；仍需人工 review
├── isolation-audit.json       # 输入 hash、cwd、DEEPTUTOR_HOME、peer withheld 证据
├── chair/
│   ├── prompt.md
│   ├── stdout.log
│   ├── attempt-*/
│   └── final.md
└── result.json
```

Yiming Lab 的普通 source pack 还包含：

- `projects/`：从账号 inventory 生成的项目/branch/commit 事实卡；
- `research/RESEARCH_CHARTER.md`：人工在环章程；
- `research/EVIDENCE_TABLE.md`、`CLAIM_SOURCE_MAP.md`：证据和 claim 门禁；
- `source-pack/_skills/`：仅选中的 policy skill 副本及 hash；
- `integrations/openwiki-git-repo-config.json`：只包含本地路径，不包含 secret。

## 结构化输出怎样被解释

`ballots.json` 只在 seat 自己提供 `<ballot>` JSON 且字段完整时计算透明分数：
`evidence=35%`、`expected_value=20%`、`reversibility=20%`、
`actionability=25%`，每项 0–5。`confidence` 单独保存，不参与“事实可信度”
计算；缺字段不会被当成 0，也不会被当成反对。`decision-record.json` 从主席原文
提取以下人工可读字段：共识、最强少数意见、证据缺口、可逆实验、停止条件和置信度。
解析失败就写入 `missing_sections`，而不是生成一个看似完整的结论。

`quality-gates.json` 会检查 roster provenance、首轮 prompt 是否夹带 peer output、
blind packet 是否泄漏 seat 身份、reviewer 是否齐全和主席 memo 是否具备必需段落。
它的 `pass` 只代表协议/制品检查通过，绝不代表建议正确；`DISSENT_LEDGER.md`
仍要求用户在任何外部行动前阅读并批准。

## 用到的 skill 及其边界

本适配层实际读取并 attestation 的最小组是：

| 角色 | Skill | 用法 |
|---|---|---|
| 主底座 | `openwiki` | 项目/个人 Wiki 的真实 CLI 与本地 git connector |
| 支撑 | `DeepTutor` | `run`、知识库、研究、问题和记忆的 CLI 接口 |
| 支撑 | `sun-chengze-perspective` | 只作决策校准镜，不冒充本人 |
| 支撑 | `research-workflow-kit` | charter、evidence table、claim-source map、人工 review |
| 审查 | `QUALITY_GATES` | 事实、接口、隐私、许可、运行证据和交付检查 |
| 协调 | `universal-skill-router` | 将任务压缩到最小技能组，不加载整个 skill 仓库 |

`run.json` 会记录每个入口文件的 SHA-256、字节数、行数和实际来源路径，以及选中
policy skill 的 Git branch、tip commit 和 dirty state；`roster.json` 还记录每席位的
稳定 ID 规则、Git branch、tip commit 和 dirty state。
准备阶段只读 `SKILL.md`，不自动执行其中的脚本。席位 brief 把 skill 内容放在
`<lens-reference>` 边界内，当作参考材料而不是可执行指令。人物席位还带有
`analytical_person_lens_not_person_statement` 标记，不能被解读为真人本人发言。

## 上游来源与改动边界

| 来源 | 固定版本/来源 | 许可证 | 在本项目中的角色 |
|---|---|---|---|
| [OpenWiki](https://github.com/langchain-ai/openwiki) | npm `0.3.2`；Node `>=22` | MIT | 外部安装/运行；本项目只生成 connector 配置和 run plan |
| [DeepTutor](https://github.com/HKUDS/DeepTutor) | PyPI `1.6.2`；Python `3.11+` | Apache-2.0 | 外部安装/运行；本项目只并行调用 CLI、隔离 home、保存结果 |
| [`-SKILL-`](https://github.com/sunccchengze/-SKILL-) | `arena/01a048e7-skill@4cbe659` | 依各文件/仓库声明 | OpenWiki、DeepTutor skill、router、research workflow、quality gates |
| [`-SKILL-`](https://github.com/sunccchengze/-SKILL-) | `main@0da485b` | 依各文件/仓库声明 | `sun-chengze-perspective` 的当前来源 |

没有把 OpenWiki、DeepTutor 或 `-SKILL-` 整仓复制到 `yiming`。新代码只负责
发现席位、生成隔离 prompt、并行 CLI 调度、盲包和质量/隐私边界。

## 从外部实践借鉴了什么

参考了公开的 AgentCouncil、Senate 和 multi-agent-debate 实践，但没有复制它们
的代码：

- 独立首轮，再进入共享/综合阶段；
- 固定轮数、并发数和超时，避免开放式聊天无限消耗；
- 自定义角色 brief，而不是启动没有领域上下文的 generic agent；
- 结构化 transcript / run directory / judge 输出；
- 让主席看到匿名提案，并保留 dissent，而不是只输出多数意见。

更详细的检索记录见 [`RESEARCH_NOTES.md`](RESEARCH_NOTES.md)。

## 局限与未验证项

- Arena 没有原生 subagent 工具，所以当前后端是 DeepTutor CLI 进程，不是平台级
  subagent；`isolation-audit.json` 是 adapter 边界的可审计证明，不宣称 OS sandbox；
- 本仓库已验证 roster provenance、prompt 隔离、身份去标识盲包、结构化 ballot、
  私有输出、调用预算和无 key dry-run；
- 尚未在本环境用真实 provider 跑完 66 个 DeepTutor 席位；这需要用户自己的
  provider 配置并会产生模型费用；
- OpenWiki npm CLI 已在 Node 22 环境显示帮助，但本地 `better-sqlite3` 安装
  需要可用 headers/build tool；
- “百人圆桌”首个版本是独立提案 + 匿名 reviewer + 匿名主席，不是 66 个 agent
  互相聊天；这是有意选择的抗锚定协议，后续可以加入受限的反驳轮，但不能默认打开；
- 结构化 ballot 是模型自报的决策支持指标，只有字段完整时才计算加权分数；它不是
  事实可信度、投票胜负或真人意志的替代品；

## 验证

```bash
python -m compileall -q lab
python -m unittest -v lab.test_lab
python -m lab --help
```


---

## SOURCE · `arena/01a05b71-yiming:lab/RESEARCH_NOTES.md`

<!-- blob: 7fd83af134c8b3c2460312b104ff96112f57eb7c; bytes: 5194 -->

# Council research notes

检索日期：2026-09-01（Asia/Shanghai）。这些链接用于吸收公开架构经验，未复制
任何外部仓库代码；成熟底座仍是 OpenWiki + DeepTutor。

## 采用的模式

### 1. 先独立、后共享

[Agent chat rooms 的公开实践](https://www.mindstudio.ai/blog/agent-chat-rooms-multi-agent-debate-claude-code)
明确区分“同题并行询问”和“互相阅读后对话”，并指出先看到第一个答案会产生
herding/anchoring。Yiming Council 因此把首轮固定为并行独立 pass，之后才构造
blind packet。

### 2. 自定义角色 brief，而不是空泛的 generic agent

[Council skill 的公开说明](https://www.getclaudeskills.com/skills/council-danielmiessler)
强调真正的差异来自每个成员的 name、role、stance 和 push-on，而不是启动多个
没有上下文的通用 agent。这里的角色 brief 直接来自每个书籍/人物的 `SKILL.md`，
并在 prompt 中标记为 bounded reference。

### 3. 结构化生命周期与可审计 run directory

[Senate](https://github.com/SebastianElvis/senate) 的公开架构使用 agenda、独立
turn、transcript、context、state 和 notes 等制品；
[Multi-Agent LLM Debater](https://github.com/mjsushanth/Multi_Agent_LLM_Debater)
使用 opening/rebuttal/closing 与多维 judge。Yiming Council 先采用更克制的
independent pass + blind chair：每个席位的 stdout/stderr、prompt、失败代码和
最终 blind packet 都落盘，后续再增加受限 rebuttal。

### 4. 成本与终止条件是协议的一部分

[公开的多 agent 编排模式总结](https://www.digitalapplied.com/blog/multi-agent-orchestration-5-patterns-that-work)
把 debate/council 的成本描述为随席位和轮次放大的调用量。实现因此显式提供
`--max-seats`、`--workers`、`--timeout-seconds`，默认 12 席，不默认跑满 66 席；
`--execute` 也必须显式提供。

## X 上的补充经验

- [nyk 的讨论](https://x.com/nykdotdev/status/2087778387742130302)把 subagent
  定义成“压缩/扇出”工具，并提醒只有在确实需要跨 agent 协作时才支付 coordination
  tax；这对应本实现的并行首轮与单主席汇总。
- [Walden 的讨论](https://x.com/walden_yan/status/2047054554433462360)强调主循环
  持有状态、worker 尽量无状态；这里因此不让席位共享 memory，而把状态落到可审计
  的 run directory。
- [Josh Rosen 的讨论](https://x.com/JoshARosen/status/2087944178558791874)把递归
  subagent 看成有依赖和错误传播半径的图；这里不默认递归 spawn，且把主席作为唯一
  高影响汇聚节点，配 reviewer 与人工门禁。
- [Akshay 的讨论](https://x.com/akshay_pachaar/status/2035986229687451723)强调
  每个 subagent 应有专门 system prompt、工具和模型偏好；本实现把每个 skill 的
  brief、独立 home 和只读边界绑定在 seat 上。

## 没有采用的做法

- 没有把所有席位的回答提前塞进彼此的 context；那会破坏独立性；
- 没有用“谁的名气更大”替代证据；主席先只接收匿名 proposal；
- 没有把网上未经核验的 benchmark 数字写进决策逻辑；
- 没有复制 Senate、AgentCouncil、CrewAI、AutoGen 或任何其他仓库的代码；
- 没有把 `sun-chengze-perspective` 当作“本人发言器”，只把它当作带明确边界的
  决策校准视角。

## 当前协议的可复现定义

```text
input: question + common factual context + N independent skill lenses
round 1: N isolated DeepTutor CLI processes in parallel
boundary: each process gets only its own lens; one DEEPTUTOR_HOME per seat
normalization: strip seat names into P001 ... PN
review: up to three isolated reviewers inspect evidence, dissent, and actionability
chair: one separate DeepTutor process reads the anonymous packet and review notes
output: recommendation + trade-offs + strongest dissent + evidence gaps + reversible experiment
recovery: completed seat logs are reusable with --resume; failed seats remain explicit
```

## 实现后的审计补强

- roster ID 由 `kind + relative_path + file_sha256` 确定，不依赖枚举顺序；每行同时保存
  Git branch、tip commit、dirty state、文件 hash 和人物 lens disclaimer。
- `isolation-audit.json` 保存每个 seat 的 prompt hash、共同上下文 hash、独立 cwd、
  独立 `DEEPTUTOR_HOME` 和 `peer_output_injected=false`。这证明 adapter 没有把 peer
  文本注入首轮；它不是操作系统级 sandbox，所以工具/provider 的真正权限仍要另行审计。
- 原始输出先留在 seat 私有目录，再经过身份字符串去标识才进入 `blind-packet.json`；
  P### 到真实 seat 的映射单独放在 `blind-map.json`，不会传给 reviewer 或 chair。
- ballot 使用明确权重但不把缺字段补成 0；`decision-record.json` 和
  `quality-gates.json` 把解析失败、少数意见、证据缺口和人工门禁保留为可检查状态。
- retry 不是默认行为。`--max-attempts` 和 `--max-calls` 都写入 run manifest；每个
  attempt 独立保存 stdout/stderr/状态，`--resume` 只复用成功 seat 的 stdout。


---

## SOURCE · `arena/01a05b71-yiming:minillm/README.md`

<!-- blob: 3b9fde03ed157fb46fef6cd498bc28cecc49434a; bytes: 4627 -->

# MiniLLM：从零训练一个小模型

这是仓库的新主线，与原来的网页内容无关。项目参考 [jingyaogong/minimind](https://github.com/jingyaogong/minimind) 的“从 0 理解完整训练链路”思路，但第一版核心代码自行实现，方便我们逐步阅读、修改和实验。

## 当前状态

已经具备第一阶段的最小闭环：

- 字符级 tokenizer 训练与保存
- Decoder-only Transformer
- RMSNorm、RoPE、SwiGLU
- grouped-query attention（GQA）和 KV cache
- causal language-model next-token loss
- 预训练 JSONL 数据集
- 只对 assistant 回复计算损失的 SFT 数据集
- warmup + cosine learning-rate schedule
- 梯度累积、梯度裁剪、断点保存与恢复
- CPU smoke test 和文本生成命令

字符 tokenizer 是为了让第一版完全少依赖、易调试。MiniMind 主线目前使用更强的 BPE/ByteLevel tokenizer，后续我们会在模型训练闭环稳定后替换它。

## 当前环境策略

当前 Arena 环境检测到：

- Python 3.11
- 没有 NVIDIA GPU，只有 CPU
- 可用内存约 3.8 GiB

因此我们先在这里完成 tiny 模型和完整流程验证；`small.json`、`minimind64.json` 是同一套结构的放大配置，需要 GPU 才适合长时间训练。真正扩大数据和参数时，可以把代码与 checkpoint 搬到 3090/4090 等 CUDA 机器上。

## 安装

建议使用虚拟环境：

```bash
python -m venv .venv
source .venv/bin/activate
pip install -r minillm/requirements.txt
```

NVIDIA GPU 请按照 PyTorch 官网选择匹配 CUDA 的安装命令，不要盲目使用 CPU 或不匹配的 wheel。

## 跑通第一条训练链路

在仓库根目录执行：

```bash
# 1. 用预训练文本和 SFT 对话共同建立词表
python -m minillm.prepare \
  --pretrain minillm/data/pretrain_demo.jsonl \
  --sft minillm/data/sft_demo.jsonl \
  --vocab-size 512 \
  --out minillm/artifacts/tokenizer.json

# 2. 检查 tokenizer、forward、反向传播、KV cache 生成
python -m minillm.smoke_test

# 3. CPU 上跑一个很短的预训练实验
python -m minillm.train \
  --stage pretrain \
  --data minillm/data/pretrain_demo.jsonl \
  --tokenizer minillm/artifacts/tokenizer.json \
  --config minillm/configs/tiny.json \
  --out-dir minillm/runs/tiny-pretrain \
  --max-steps 100 \
  --batch-size 4 \
  --save-every 50

# 4. 用预训练权重做 SFT
python -m minillm.train \
  --stage sft \
  --data minillm/data/sft_demo.jsonl \
  --tokenizer minillm/artifacts/tokenizer.json \
  --config minillm/configs/tiny.json \
  --init minillm/runs/tiny-pretrain/last.pt \
  --out-dir minillm/runs/tiny-sft \
  --max-steps 100 \
  --batch-size 2 \
  --lr 1e-4

# 5. 生成一段回答
python -m minillm.generate \
  --checkpoint minillm/runs/tiny-sft/last.pt \
  --tokenizer minillm/artifacts/tokenizer.json \
  --prompt "什么是语言模型？" \
  --max-new-tokens 40 \
  --temperature 0
```

生成的 tokenizer、checkpoint 和实验日志都在 `.gitignore` 中，不会被误提交。

## 数据格式

预训练文件是一行一个 JSON 对象：

```json
{"text": "这是一段用于学习语言规律的文本。"}
```

SFT 文件是一行一个对话：

```json
{"conversations":[
  {"role":"user","content":"请解释预训练。"},
  {"role":"assistant","content":"预训练是在大量文本上学习通用规律。"}
]}
```

当前 demo 数据只是用来验证工程，不代表有意义的训练语料。下一步加入公开数据时，需要先确认许可证、来源和是否允许再分发；私人数据也应该先脱敏。

## 放大模型

在 tokenizer 不变的前提下，可以把 `--config` 换成：

- `configs/tiny.json`：约 0.4M 参数，只用于 CPU smoke test
- `configs/small.json`：约 10M 级，第一轮正式交付的目标配置
- `configs/minimind64.json`：约 64M 级，结构上更接近 MiniMind 的主线规模

模型规模的粗略关系是：词表大小、层数、隐藏维度和 FFN 维度共同决定参数量；训练所需数据量和算力会比参数量增长得更快，所以我们先做小实验并记录 loss、perplexity 和样例输出。10M 版本建议至少使用 8～12 GB 显存；如果显存不足，降低 `--batch-size` 并增加 `--grad-accumulation`。

## 后续路线

1. 用许可清晰的中文公开语料替换 demo 数据，并增加去重、长度过滤和验证集。
2. 将字符 tokenizer 替换为 BPE/ByteLevel tokenizer。
3. 增加独立评测与验证 loss，记录实验配置。
4. 在 GPU 上训练 small，再尝试 64M。
5. 增加更完整的 chat template、DPO，以及可选的工具调用能力。


---

## SOURCE · `arena/01a05b71-yiming:minillm/requirements.txt`

<!-- blob: 50d7907ae69b15cf1eee0492412e6e5ff45bdc42; bytes: 203 -->

# Install the PyTorch build appropriate for your machine first when necessary.
# CPU-only example: pip install torch
# NVIDIA GPU users should follow https://pytorch.org/get-started/locally/.
torch>=2.1


---

## SOURCE · `arena/01a05c5e-yiming:lab/OPENCLAUDE_GUIDE.md`

<!-- blob: 8a47eea729d7506673663d71f82771252b28d0e8; bytes: 7434 -->

# OpenClaude 通用指南（安装 · 配置 · 日常用法）

> 这不是圆桌专用文档，而是把 OpenClaude 当成**日常 AI 编程 Agent** 用的完整手册。
> 圆桌只是它的用途之一。读完这份你就能自己给它布置任务。
>
> 官方仓库：https://github.com/Gitlawb/openclaude （"runs anywhere, uses anything"）
> 安装包：npm `@gitlawb/openclaude`。License：MIT。

---

## 0. OpenClaude 是什么（一句话）

一个 **Claude Code 风格的终端编程 Agent CLI**，但**不绑定 Anthropic**——能接
OpenAI 兼容、Gemini、Ollama、GitHub Models、Codex 等几乎所有模型后端。
内置工具：bash、文件读写、grep、glob、agents、MCP、web 搜索、slash 命令、流式输出。

类比：Claude Code 是 Anthropic 官方版；OpenClaude 是开源多后端版。

---

## 1. 安装（一次）

需要 **Node.js ≥ 22**。

```bash
node -v            # 确认 ≥ 22
npm install -g @gitlawb/openclaude@latest
openclaude --version
# 若报 "ripgrep not found"：系统装 ripgrep 并确认 `rg --version` 可用
```

可选：VS Code 扩展（仓库自带 `vscode-extension/`），用于编辑器内聊天、主题。

---

## 2. 配置模型后端（核心前置，一次）

OpenClaude **不自动加载项目 .env**。两种配置方式任选：

### 方式 A：环境变量（临时、推荐先试）

不同后端用不同变量，看下表。**注意 key 只放 shell 环境，别写进仓库/共享文件。**

| 后端 | 触发开关 | 必需变量 | 可选 |
|---|---|---|---|
| **DeepSeek** | `CLAUDE_CODE_USE_OPENAI=1` | `OPENAI_API_KEY` | `OPENAI_BASE_URL=https://api.deepseek.com`、`OPENAI_MODEL=deepseek-chat` |
| **Gemini** | `CLAUDE_CODE_USE_GEMINI=1` | `GEMINI_API_KEY`(或`GOOGLE_API_KEY`) | `GEMINI_MODEL=gemini-3-flash-preview`、`GEMINI_BASE_URL`(默认Google) |
| 任意 OpenAI 兼容 | `CLAUDE_CODE_USE_OPENAI=1` | `OPENAI_API_KEY` | `OPENAI_BASE_URL`、`OPENAI_MODEL`（OpenRouter/Groq/Mistral/LM Studio 都行） |
| Ollama(本地) | `CLAUDE_CODE_USE_OPENAI=1` | — | `OPENAI_BASE_URL=http://localhost:11434/v1`、`OPENAI_MODEL=<模型>` |

### 方式 B：`/provider` 交互配置（推荐，能保存 profile）

```bash
openclaude
# 在会话里输入 /provider，按引导选后端、填 key、存 profile
# 会保存到 ~/.openclaude-profile.json
```

> OpenClaude 用自己独立的配置目录 `~/.openclaude/` 和 `~/.openclaude.json`，
> **不读** `~/.claude` 或项目 `.claude/`。不会动你 Claude Code 的配置。

### 建议：写进你的 shell 启动文件（~/.bashrc 或 ~/.zshrc）

```bash
# ---- DeepSeek（默认）----
export CLAUDE_CODE_USE_OPENAI=1
export OPENAI_BASE_URL="https://api.deepseek.com"
export OPENAI_MODEL="deepseek-chat"
export OPENAI_API_KEY="$DEEPSEEK_API_KEY"   # 你自己 export 过的变量

# 想切 Gemini 时临时注释上面、取消注释下面：
# export CLAUDE_CODE_USE_GEMINI=1
# export GEMINI_MODEL="gemini-3-flash-preview"
# export GEMINI_API_KEY="$GEMINI_KEY"
```

---

## 3. 验证

```bash
echo "用一句话介绍自己" | openclaude --print
```

能返回文字 = 配置成功。

---

## 4. 日常用法（布置任务）

### 4.1 交互式（最常用）

```bash
cd /你的项目目录
openclaude
# 进入对话，直接打字布置任务
```

### 4.2 一次性 / 脚本（print 模式）

```bash
openclaude --print "修复 src/ 里的 bug"
echo "重构这个函数" | openclaude --print
# 输出格式：--output-format text(默认) | json | stream-json
```

### 4.3 后台任务（长任务不占终端）

```bash
openclaude --bg "fix failing tests"            # 后台跑
openclaude --bg --name auth "重构 auth 中间件"
openclaude ps                                   # 查看
openclaude logs auth -f                         # 看日志(实时)
openclaude kill auth                            # 停止
```

### 4.4 续聊 / 分叉

```bash
openclaude --continue                  # 接着最近对话
openclaude --resume <session-id>       # 指定会话
openclaude --continue --fork-session   # 分叉出新会话
```

### 4.5 权限模式

```bash
openclaude --dangerously-skip-permissions   # 自动执行(慎用，仅沙箱)
# 默认模式会逐个问你是否允许某操作（如执行命令、写文件）
```

---

## 5. 内置 slash 命令（会话内输入 `/xxx`）

常用：

| 命令 | 作用 |
|---|---|
| `/provider` | 配置/切换模型后端，保存 profile |
| `/model` | 当前会话换模型 |
| `/clear` | 清空上下文 |
| `/compact` | 压缩长上下文 |
| `/agents` | 查看/配置子 agent |
| `/mcp` | 管理 MCP 服务器（外部工具/数据源）|
| `/permissions` | 配置权限模式 |
| `/cost`、`/stats` | 用量/统计 |
| `/resume`、`/session` | 会话管理 |
| `/help` | 全部命令列表 |
| `/buddy` | 那个像素小人伴侣（娱乐）|
| `/repomap` | 看代码库结构地图 |

进阶：`/model`、`/memory`（长期记忆）、`/skills`（技能）、`/hooks`、`/plan`。

---

## 6. Agents（子代理，可并行拆分任务）

OpenClaude 支持把不同 agent 路由到不同模型（成本优化、按模型强弱分工）：

- 配置在 `~/.openclaude/settings.json` 的 `agentModels` + `agentRouting`
- 内置 agent：`Explore`、`Plan` 等，可按类型路由
- 也可在 agent frontmatter 或环境变量里覆盖

> 圆桌其实就用到了类似"多角色独立"的思路，但圆桌是进程级隔离，这里是 agent 级路由。

---

## 7. MCP（外部工具接入）

OpenClaude 支持 Model Context Protocol，可接外部工具/数据源：

```bash
openclaude --mcp-config /path/to/mcp.json
# 或在会话里 /mcp 管理
```

可接：数据库、文件系统、浏览器、第三方 API 等。

---

## 8. 安全要点

- **key 不写进仓库**：只放 shell 环境或 `~/.openclaude-profile.json`（用户级）。
- OpenClaude 用自己配置目录，**不会读/改你的 Claude Code 凭据**。
- 权限：默认会问是否允许操作；`--dangerously-skip-permissions` 只在可信沙箱用。
- 你看到每次调用生成的独立 session 文件是**正常**的（`~/.openclaude/sessions/*.json`），
  每个 `--print` 调用一个。可定期清理或用 `--no-session-persistence` 关闭落盘。

---

## 9. 把它接进圆桌（已有三个 runner）

圆桌只是 OpenClaude 的一个用途，runner wrapper 在 `lab/examples/`：

| 文件 | 后端 | 说明 |
|---|---|---|
| `runner-openclaude-gemini.sh` | Gemini | 免费 key 可用，最省钱 |
| `runner-openclaude-deepseek.sh` | DeepSeek | 便宜 |
| `runner-claude-deepseek.sh` | 官方 Claude Code→DeepSeek | 需要官方 Claude Code CLI |

用法（以 Gemini 为例）：

```bash
# 前置：装 OpenClaude + 配好 provider（见上）
python -m lab council run --run "$RUN" --execute \
  --runner "$(pwd)/lab/examples/runner-openclaude-gemini.sh" \
  --workers 4 --timeout-seconds 900
```

> 注意：把模型配置写进 `~/.bashrc` 后，这些 wrapper 脚本继承同样环境变量，
> 圆桌就能直接用，无需再单独配。

---

## 10. 一句话速记

```text
装：npm i -g @gitlawb/openclaude@latest
配：CLAUDE_CODE_USE_GEMINI=1 + GEMINI_API_KEY  (或 USE_OPENAI + OPENAI_*)
跑：openclaude                交互
    openclaude --print "任务"  一次性
    openclaude --bg "任务"     后台
续：--continue / --resume
权限：默认确认，--yolo 跳过(慎用)
```


---

## SOURCE · `arena/01a05c5e-yiming:lab/README.md`

<!-- blob: 6d4d3104519ade09f5117dec8e380b9d4ca8c4d6; bytes: 13588 -->

# Yiming Lab / Council

> 一个建立在成熟项目之上的、本地优先的「百人圆桌」适配层。

Yiming Council 不把每本书、每个人重新实现成一套 agent framework。它把
`sunccchengze/-SKILL-` 中的蒸馏 skill 解析成独立席位，再用 DeepTutor CLI
做隔离运行时，用 OpenWiki 提供项目事实底座，用 `-SKILL-` 的路由与研究门禁
约束最后的综合。

## 先说清楚：subagent 权限

当前 Arena 工具面板没有直接暴露原生 `spawn_subagent` API。因此本实现使用
**一个 DeepTutor CLI 进程 = 一个独立席位**：

- 每个席位只收到共同事实、自己的 skill brief 和同一个问题；
- 第一轮用并行进程扇出，席位不读取其他席位的 prompt/output；
- 每个席位拥有独立的 `DEEPTUTOR_HOME`，不共享 session、memory 或 notebook；
- 所有席位结束后才建立不含姓名的 `blind-packet.json`；
- 证据、分歧、行动三个 reviewer 只读匿名提案，分别找无证据断言、最强少数意见和不可逆动作；
- 主席只读匿名提案与 reviewer notes，并输出最终决策 memo；
- `prepare` 和默认 `run` 都不调用模型，只有明确加 `--execute` 才会产生模型调用。

这比让一群 agent 一开始就聊天更适合“百人圆桌”：先保留真正的异议，再让
主席做归纳，减少第一个回答对后续回答的锚定。

## 当前 roster

`people-books` 模式会发现：

- `skills/community/nuwa-distilled/**/book-*/SKILL.md`：蒸馏书籍；
- `skills/community/nuwa-distilled/**/*perspective*/SKILL.md`：蒸馏人物视角；
- `skills/community/nuwa-skill/examples/*perspective*/SKILL.md`：人物视角示例；
- `skills/core/*perspective*/SKILL.md`：核心人物视角。

在本次固定的两个 `-SKILL-` checkout 上，当前发现 **66 个席位：33 本书 +
33 个人物视角**。这是运行时扫描结果，不是写死的名单；skill 仓库更新后，
先重新运行 `council roster` 审阅变更。

```bash
python -m lab council roster \
  --skill-root /path/to/skill-arena-01a048e7 \
  --skill-root /path/to/skill-main \
  --roster-mode people-books \
  --limit 0
```

`--roster-mode distilled` 会额外纳入 Nuwa 蒸馏的方法类 skill；`all` 会扫描
提供的 checkout 中所有 `SKILL.md`，适合实验，不建议默认直接跑满。

## 快速开始：先做无 key 的完整 dry-run

### 1. 准备两个 skill checkout

OpenWiki、DeepTutor 和治理文件在一个固定工作分支；
`sun-chengze-perspective` 在 `main`。这是上游分支事实，所以命令明确保留
两个来源，而不是假装它们属于同一个 snapshot：

```bash
git clone --depth=1 --branch arena/01a048e7-skill \
  https://github.com/sunccchengze/-SKILL-.git \
  /path/to/skill-arena-01a048e7

git clone --depth=1 --branch main \
  https://github.com/sunccchengze/-SKILL-.git \
  /path/to/skill-main
```

### 2. 生成私有项目事实包

输出目录放在 Git checkout 外；默认不复制源码，只有显式加
`--include-corpus` 才会把已经采集的安全记录放入本地包：

```bash
python -m lab prepare \
  --inventory minillm/artifacts/account_inventory.json \
  --out "$HOME/.local/share/yiming-lab/runs/$(date -u +%Y%m%dT%H%M%SZ)" \
  --skill-root /path/to/skill-arena-01a048e7 \
  --perspective-root /path/to/skill-main \
  --repo yiming="$PWD"
```

命令只会写 `run.json`、Markdown source pack、OpenWiki 本地 connector 配置和
`RUN_PLAN.md`。它不会自动联网、调用模型或写 `~/.openwiki`。

### 3. 准备百人圆桌

```bash
python -m lab council prepare \
  --out "$HOME/.local/share/yiming-lab/councils/$(date -u +%Y%m%dT%H%M%SZ)" \
  --skill-root /path/to/skill-arena-01a048e7 \
  --skill-root /path/to/skill-main \
  --roster-mode people-books \
  --max-seats 0 \
  --reviewer-count 3 \
  --source-pack /path/to/the/run/source-pack \
  --task '从我最近的项目轨迹中找出最值得做的下一个研究实验，比较方案，保留强烈反对意见。'
```

`--max-seats 0` 表示全部匹配席位。第一次试跑建议 `--max-seats 5` 或 `12`，
确认 prompt、成本和输出格式后再开 66 席。

### 4. 只查看执行计划

```bash
python -m lab council run \
  --run "$HOME/.local/share/yiming-lab/councils/<run-id>"
```

### 5. 配好 DeepTutor 后才真正执行

```bash
# 安装版本以实际运行条件为准；不要把 provider key 写进仓库。
pip install 'deeptutor[cli]==1.6.2'

python -m lab council run \
  --run "$HOME/.local/share/yiming-lab/councils/<run-id>" \
  --execute \
  --workers 8
```

席位阶段是 `N` 次并行调用，接着最多 3 次盲 reviewer，最后主席再调用 1 次；
所以“百人”不是无成本修辞。执行前应先看 `COUNCIL_PLAN.md`，用 `--max-seats`、
`--reviewer-count`、`--workers` 和 `--max-calls` 控制预算。默认最多 12 个席位、
每次调用 1 个 attempt；只有显式设置 `--max-attempts` 才会重试失败/超时调用。
这只是调用数/超时预算，不等于 provider 的 token 账单；通用 CLI 没有可靠的跨模型
token 计量，因此不伪造成本数字。每个席位的失败、stderr、stdout 和每次 attempt
都会落在该席位自己的目录里，不会让其他席位看到它的中间结果。中途失败后可以
加 `--resume`，只重跑缺失/失败的席位，再重新审查 blind packet。

### 5b. 用任意模型 runner（不依赖 DeepTutor）

如果不用 DeepTutor，可以用 `--runner` 指定一个 shell 命令模板来驱动每个
席位/reviewer/chair，例如你的 Claude Code harness + DeepSeek：

```bash
# 方式 B：Claude Code CLI 指向 DeepSeek
export ANTHROPIC_BASE_URL="https://api.deepseek.com/anthropic"
export ANTHROPIC_AUTH_TOKEN="$DEEPSEEK_API_KEY"
export ANTHROPIC_MODEL="deepseek-chat"

python -m lab council run \
  --run "<run-id>" \
  --execute \
  --runner "$(pwd)/lab/examples/runner-claude-deepseek.sh" \
  --workers 4 --timeout-seconds 900
```

`--runner` 是一个 shell 模板，占位符：

- `{prompt}` 完整 prompt 文本（shell 转义）
- `{prompt_file}` prompt .md 的绝对路径
- `{stage}` `independent-seat` / `blind-reviewer` / `chair`

prompt 同时会通过 stdin 传入，并暴露 `$YIMING_PROMPT_FILE`、`$YIMING_PROMPT_STAGE`，
方便 wrapper 脚本读取。示例 wrapper 见 `lab/examples/runner-claude-deepseek.sh`。
默认（不加 `--runner`）仍走 DeepTutor：`deeptutor run chat <prompt> --language zh --format json`。

> 完整启动流程、结果解读与安全边界见 [`lab/RUNBOOK.md`](RUNBOOK.md)。
> OpenClaude 作为通用 Agent 的安装/配置/日常用法见 [`lab/OPENCLAUDE_GUIDE.md`](OPENCLAUDE_GUIDE.md)。

## 目录与制品

```text
<private-run>/
├── council.json             # 协议、路由、隐私和调用预算
├── roster.json              # 发现到的席位、源路径、文件 hash
├── COUNCIL_PLAN.md          # 不执行的审阅计划
├── seats/<seat-id>/
│   ├── prompt.md            # 该席位唯一能看到的输入
│   ├── stdout.log           # 模型原始输出
│   └── stderr.log           # 失败/诊断
├── runtime/seats/<seat-id>/ # 每席位独立 DEEPTUTOR_HOME
├── blind-packet.json        # 去姓名后的提案，供 reviewer/主席读取
├── blind-map.json            # 本地私有 P### ↔ seat 映射；不传给 reviewer/主席
├── reviewers/<reviewer-id>/ # evidence / dissent / action reviewer
├── reviewer-results.json
├── reviewer-ballots.json     # reviewer 结构化审查（缺字段不补）
├── ballots.json               # seat 结构化 ballot 与透明加权分数
├── DISSENT_LEDGER.md          # 少数意见、反例和未决问题
├── decision-record.json       # 从主席原文提取的共识/异议/证据/实验记录
├── quality-gates.json         # 协议与输出结构门禁；仍需人工 review
├── isolation-audit.json       # 输入 hash、cwd、DEEPTUTOR_HOME、peer withheld 证据
├── chair/
│   ├── prompt.md
│   ├── stdout.log
│   ├── attempt-*/
│   └── final.md
└── result.json
```

Yiming Lab 的普通 source pack 还包含：

- `projects/`：从账号 inventory 生成的项目/branch/commit 事实卡；
- `research/RESEARCH_CHARTER.md`：人工在环章程；
- `research/EVIDENCE_TABLE.md`、`CLAIM_SOURCE_MAP.md`：证据和 claim 门禁；
- `source-pack/_skills/`：仅选中的 policy skill 副本及 hash；
- `integrations/openwiki-git-repo-config.json`：只包含本地路径，不包含 secret。

## 结构化输出怎样被解释

`ballots.json` 只在 seat 自己提供 `<ballot>` JSON 且字段完整时计算透明分数：
`evidence=35%`、`expected_value=20%`、`reversibility=20%`、
`actionability=25%`，每项 0–5。`confidence` 单独保存，不参与“事实可信度”
计算；缺字段不会被当成 0，也不会被当成反对。`decision-record.json` 从主席原文
提取以下人工可读字段：共识、最强少数意见、证据缺口、可逆实验、停止条件和置信度。
解析失败就写入 `missing_sections`，而不是生成一个看似完整的结论。

`quality-gates.json` 会检查 roster provenance、首轮 prompt 是否夹带 peer output、
blind packet 是否泄漏 seat 身份、reviewer 是否齐全和主席 memo 是否具备必需段落。
它的 `pass` 只代表协议/制品检查通过，绝不代表建议正确；`DISSENT_LEDGER.md`
仍要求用户在任何外部行动前阅读并批准。

## 用到的 skill 及其边界

本适配层实际读取并 attestation 的最小组是：

| 角色 | Skill | 用法 |
|---|---|---|
| 主底座 | `openwiki` | 项目/个人 Wiki 的真实 CLI 与本地 git connector |
| 支撑 | `DeepTutor` | `run`、知识库、研究、问题和记忆的 CLI 接口 |
| 支撑 | `sun-chengze-perspective` | 只作决策校准镜，不冒充本人 |
| 支撑 | `research-workflow-kit` | charter、evidence table、claim-source map、人工 review |
| 审查 | `QUALITY_GATES` | 事实、接口、隐私、许可、运行证据和交付检查 |
| 协调 | `universal-skill-router` | 将任务压缩到最小技能组，不加载整个 skill 仓库 |

`run.json` 会记录每个入口文件的 SHA-256、字节数、行数和实际来源路径，以及选中
policy skill 的 Git branch、tip commit 和 dirty state；`roster.json` 还记录每席位的
稳定 ID 规则、Git branch、tip commit 和 dirty state。
准备阶段只读 `SKILL.md`，不自动执行其中的脚本。席位 brief 把 skill 内容放在
`<lens-reference>` 边界内，当作参考材料而不是可执行指令。人物席位还带有
`analytical_person_lens_not_person_statement` 标记，不能被解读为真人本人发言。

## 上游来源与改动边界

| 来源 | 固定版本/来源 | 许可证 | 在本项目中的角色 |
|---|---|---|---|
| [OpenWiki](https://github.com/langchain-ai/openwiki) | npm `0.3.2`；Node `>=22` | MIT | 外部安装/运行；本项目只生成 connector 配置和 run plan |
| [DeepTutor](https://github.com/HKUDS/DeepTutor) | PyPI `1.6.2`；Python `3.11+` | Apache-2.0 | 外部安装/运行；本项目只并行调用 CLI、隔离 home、保存结果 |
| [`-SKILL-`](https://github.com/sunccchengze/-SKILL-) | `arena/01a048e7-skill@4cbe659` | 依各文件/仓库声明 | OpenWiki、DeepTutor skill、router、research workflow、quality gates |
| [`-SKILL-`](https://github.com/sunccchengze/-SKILL-) | `main@0da485b` | 依各文件/仓库声明 | `sun-chengze-perspective` 的当前来源 |

没有把 OpenWiki、DeepTutor 或 `-SKILL-` 整仓复制到 `yiming`。新代码只负责
发现席位、生成隔离 prompt、并行 CLI 调度、盲包和质量/隐私边界。

## 从外部实践借鉴了什么

参考了公开的 AgentCouncil、Senate 和 multi-agent-debate 实践，但没有复制它们
的代码：

- 独立首轮，再进入共享/综合阶段；
- 固定轮数、并发数和超时，避免开放式聊天无限消耗；
- 自定义角色 brief，而不是启动没有领域上下文的 generic agent；
- 结构化 transcript / run directory / judge 输出；
- 让主席看到匿名提案，并保留 dissent，而不是只输出多数意见。

更详细的检索记录见 [`RESEARCH_NOTES.md`](RESEARCH_NOTES.md)。

## 局限与未验证项

- Arena 没有原生 subagent 工具，所以当前后端是 DeepTutor CLI 进程，不是平台级
  subagent；`isolation-audit.json` 是 adapter 边界的可审计证明，不宣称 OS sandbox；
- 本仓库已验证 roster provenance、prompt 隔离、身份去标识盲包、结构化 ballot、
  私有输出、调用预算和无 key dry-run；
- 尚未在本环境用真实 provider 跑完 66 个 DeepTutor 席位；这需要用户自己的
  provider 配置并会产生模型费用；
- OpenWiki npm CLI 已在 Node 22 环境显示帮助，但本地 `better-sqlite3` 安装
  需要可用 headers/build tool；
- “百人圆桌”首个版本是独立提案 + 匿名 reviewer + 匿名主席，不是 66 个 agent
  互相聊天；这是有意选择的抗锚定协议，后续可以加入受限的反驳轮，但不能默认打开；
- 结构化 ballot 是模型自报的决策支持指标，只有字段完整时才计算加权分数；它不是
  事实可信度、投票胜负或真人意志的替代品；

## 验证

```bash
python -m compileall -q lab
python -m unittest -v lab.test_lab
python -m lab --help
```


---

## SOURCE · `arena/01a05c5e-yiming:lab/RUNBOOK.md`

<!-- blob: 7e457f02a9f1a7975e3aed76919c8cb2bac70ca9; bytes: 7942 -->

# Yiming Council 启动手册（RUNBOOK）

> 本文件回答一个问题：**怎么真正把这个圆桌跑起来。**
> 前提：在你的**本机**（有正常外网、能访问模型 API）上运行。此适配层只负责
> 扇出独立席位 → 匿名盲审 → 主席综合，并全程生成可审计的本地制品。

---

## 0. 快速理解：圆桌是什么、怎么"启动"

```text
一个问题
  ├─ 每本书/每个人物 = 一个独立分析席位（analytical lens，不是真人）
  ├─ 第一轮：每个席位独立回答，彼此看不到对方
  ├─ 匿名 reviewer：找证据缺口、最强少数意见、行动风险
  └─ chair：综合共识、冲突、dissent、可逆实验和停止条件
```

"启动圆桌" = 跑两个命令：

```bash
python -m lab council prepare  ...   # 无模型：生成席位 prompt 和计划
python -m lab council run      ...   # 真正执行：调用模型跑席位/reviewer/chair
```

`prepare` 永远不会调用模型、不花钱。`run` 只有加 `--execute` 才会调用模型（产生费用）。

---

## 1. 准备两个 skill checkout

座位的来源是你的 `-SKILL-` 仓库（蒸馏书籍 + 人物视角）。两个分支必须分开，
因为它们不是同一个 snapshot：

```bash
mkdir -p ~/yiming-skills && cd ~/yiming-skills
git clone --depth=1 --branch arena/01a048e7-skill \
  https://github.com/sunccchengze/-SKILL-.git skill-arena-01a048e7
git clone --depth=1 --branch main \
  https://github.com/sunccchengze/-SKILL-.git skill-main
git -C skill-arena-01a048e7 rev-parse HEAD   # 预期 4cbe659...
git -C skill-main rev-parse HEAD             # 预期 0da485b...
```

> 这些 checkout 放在 `yiming` 仓库外，内容不会被 commit。

---

## 2. 安装适配层（在本机）

```bash
cd /path/to/yiming
python3 -m venv .venv && source .venv/bin/activate
pip install -e .                      # 若没有 pyproject，则 pip install -e ".[dev]" 或直接源码运行
python -m compileall -q lab
python -m unittest lab.test_lab        # 期望 12 tests OK
```

---

## 3. 选择模型后端（二选一）

### 方式 A：DeepTutor CLI（默认，推荐先跑通）```bash
pip install 'deeptutor[cli]==1.6.2'
deeptutor init --cli          # 交互式：选 DeepSeek / 填 key / 填 deepseek-chat
# 或直接写 DeepTutor 的 model_catalog.json（放其数据目录，勿提交仓库）
```

之后 `run` 用默认 `--deeptutor-bin deeptutor` 即可。

### 方式 B：Claude Code harness + DeepSeek（`--runner`）

适配层现在支持任意模型命令模板（`--runner`），不依赖 DeepTutor。仓库已附示例
wrapper：`lab/examples/runner-claude-deepseek.sh`。用法：

```bash
# 一次性配置 Claude Code CLI 指向 DeepSeek
export ANTHROPIC_BASE_URL="https://api.deepseek.com/anthropic"
export ANTHROPIC_AUTH_TOKEN="$DEEPSEEK_API_KEY"   # 你的 DeepSeek key
export ANTHROPIC_MODEL="deepseek-chat"            # 或 deepseek-reasoner
# 验证一次：
echo "hi" | claude -p --output-format text

# 跑圆桌时这样传 runner：
python -m lab council run --run <RUN_DIR> --execute \
  --runner "$(pwd)/lab/examples/runner-claude-deepseek.sh" \
  --workers 4 --timeout-seconds 900
```

`--runner` 模板支持的占位符（直接内联也可，不必用脚本）：

| 占位符 | 含义 |
|---|---|
| `{prompt}` | 完整 prompt 文本（shell 转义）|
| `{prompt_file}` | 生成的 prompt .md 的绝对路径 |
| `{stage}` | `independent-seat` / `blind-reviewer` / `chair` |

prompt 还会通过 stdin 传入，并暴露 `$YIMING_PROMPT_FILE` / `$YIMING_PROMPT_STAGE`，
方便 wrapper 脚本读取。

> 安全：`--runner` 使用 `shell=True` 执行你提供的模板。它是你自己的配置，但请
> 只使用可信模板，不要直接拼接不受信的用户输入。

> OpenClaude 的完整安装/配置/日常用法（不限于圆桌）见 [`OPENCLAUDE_GUIDE.md`](OPENCLAUDE_GUIDE.md)。

---

## 4. 启动：完整命令序列

### 4.1 先看 roster（只读，0 费用）

```bash
SKILLS=/home/USER/yiming-skills
python -m lab council roster \
  --skill-root "$SKILLS/skill-arena-01a048e7" \
  --skill-root "$SKILLS/skill-main" \
  --roster-mode people-books --limit 0 --json
```

预期 **66 席 = 33 本书 + 33 个人物视角**（以实际扫描为准，别盲信旧数字）。

### 4.2 准备 5 席（无模型，0 费用）

```bash
RUN="$HOME/.local/share/yiming-lab/councils/$(date -u +%Y%m%dT%H%M%SZ)"
python -m lab council prepare \
  --out "$RUN" \
  --skill-root "$SKILLS/skill-arena-01a048e7" \
  --skill-root "$SKILLS/skill-main" \
  --roster-mode people-books \
  --max-seats 5 --reviewer-count 3 --max-attempts 1 \
  --task '从我最近的项目轨迹中找出最值得做的下一个研究实验，比较方案，保留强烈反对意见。'
```

查看 `$RUN/COUNCIL_PLAN.md`：确认 5 席 + 3 reviewer + 1 chair = 9 次调用。

### 4.3 dry-run（不调用模型）

```bash
python -m lab council run --run "$RUN"                      # 方式 A（deeptutor）
python -m lab council run --run "$RUN" --runner '<你的模板>' # 方式 B
```

### 4.4 真正执行（第一次用 5 席）

```bash
# 方式 A
python -m lab council run --run "$RUN" --execute --workers 4 --max-calls 40

# 方式 B
python -m lab council run --run "$RUN" --execute \
  --runner "$(pwd)/lab/examples/runner-claude-deepseek.sh" \
  --workers 4 --max-calls 40 --timeout-seconds 900
```

中途失败可 `--resume`，只重跑失败/缺失席位，成功席位 stdout 复用。

---

## 5. 读结果（这是最重要的部分）

跑完去看 `$RUN/` 下的文件：

| 文件 | 看什么 |
|---|---|
| `COUNCIL_PLAN.md` | 执行前审阅计划、席位清单、预算 |
| `blind-packet.json` | 去姓名匿名提案（P001…P005）|
| `blind-map.json` | **私有** 的 P### ↔ 真实席位映射，别外发 |
| `reviewer-results.json` | evidence / dissent / action 三位盲审 |
| `DISSENT_LEDGER.md` | 少数意见、反例、未决问题（**必读**）|
| `decision-record.json` | 主席原文解析出的共识/异议/证据缺口/实验 |
| `chair/final.md` | 主席原始决策备忘录 |
| `quality-gates.json` | 协议/制品门禁（pass 不代表建议正确）|
| `isolation-audit.json` | 输入 hash、cwd、独立 home、peer withheld 证据 |

**行动纪律**：任何外部行动前，人工读完 `DISSENT_LEDGER.md`、
`decision-record.json`、`quality-gates.json` 再决定。

---

## 6. 从小规模到"百人"

1. 先 3–5 席，看输出质量和成本；
2. 满意后 12 席（`--max-seats 12`）；
3. 只有 Phase C 通过后，才考虑 66 席（`--max-seats 0` 或显式 66）。

"百人"= 66/100 次并行模型调用 + 3 次 reviewer + 1 次 chair。费用随席位线性增长，
DeepSeek 很便宜但也不是零。务必用 `--max-calls`、`--workers`、`--timeout-seconds`
控制预算。

---

## 7. 安全边界（务必遵守）

- 模型调用是显式副作用：无 `--execute` 不调用。
- 私有输出（run 目录、skill 副本、DeepTutor home、key）放在 Git checkout 外，
  绝不 commit。
- 不传播 secrets：key 只写进本机配置，日志只记 key 名称/状态，不记值。
- 人物席位是分析镜，不代表真人或书作者发言。
- ballot 是模型自报的结构化决策支持，缺字段不补零，少数意见与 abstain 保留。
- 匿名不是 OS sandbox：`isolation-audit.json` 只证明适配层未注入 peer output，
  宿主工具/provider 的真实权限仍需另行审计。

---

## 8. 常见问题

- **`no council seats found`**：`--skill-root` 路径不对，或 checkout 为空。
- **`No active LLM model is configured`**（DeepTutor）：还没在 Settings > Catalog
  配好模型/profile。
- **runner 没输出/超时**：先手动验证 `echo "hi" | claude -p --output-format text`。
- **某个席位失败**：该席位 `stderr.log` 保留失败原因；`--resume` 只重跑失败席位。
