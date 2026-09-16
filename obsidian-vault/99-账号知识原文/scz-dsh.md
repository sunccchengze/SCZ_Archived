# scz-dsh · 全分支详细原文

> 去重后的文本资料；每个 SOURCE 标题保留来源分支和路径。


---

## SOURCE · `arena/01a01401-scz-dsh:.agents/SKILL-REPO-AGENTS.md`

<!-- blob: a73d4a78e0727148a716f2a6d287e2161853c23a; bytes: 4340 -->

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
- 平台专属任务先读 `skills/official-source-router/` 与 `guides/OFFICIAL_SOURCES.md`，核验来源、固定提交和包内许可证；“官方”不等于统一开放许可。
- 命中 `curated-source` 时先读 `guides/CURATED_SOURCES.md`，核验固定入口、包边界、许可证、依赖、网络、凭据和写入风险；Star 增长不是执行授权。figures4papers 的许可证状态为 `NOASSERTION`。
- 一般同名技能优先使用顶层维护入口或适合当前任务的完整包；产品行为优先当前发布方来源。仅在主版本不适合时查看 `skills/variants/`，且不要把已弃用来源误当当前版本。
- 用户要快速、简单的答案时，不启动内阁或多 Agent 流程。
- 重要决策可调用 `skills/ai-cabinet/`；并行任务可调用 `skills/multi-agent-orchestration/`。
- 写中文时按任务选择 `human-writing`、`humanizer-zh` 或 `stop-slop`，不要机械叠加所有写作规则。
- 视觉任务优先读取 `skills/victor-design/SKILL.md`，再根据载体读取一个 adapter。
- 代码库文档任务使用 `skills/openwiki/`；工具源码位于 `tools/openwiki/`。
- UI 截图转可编辑 HTML/CSS 使用 `skills/screencoder/`；忠实复刻完成后如需再设计，再调用 `victor-design-system`。
- 科研任务先读 `skills/research-expert-system/` 与 `guides/RESEARCH.md`，再从 `full-sources/research/` 选择最小技能组；严禁虚构引用、数据、实验和审批。

## 完成声明

只有在运行了与任务相符的检查后，才能使用“完成、修复、通过”等表述。交付时简要说明：

- 做了什么；
- 用什么证据验证；
- 尚有哪些限制或未验证部分。


---

## SOURCE · `arena/01a01401-scz-dsh:.agents/skills/agent-harness/SKILL.md`

<!-- blob: b877324047137a8344f5b364af8fdcec67561945; bytes: 8045 -->

---
name: agent-harness
description: "Turn any domain folder of skills into a bounded agentic loop: compile a goal into a verifiable task plan, execute tasks with the domain's own tools, verify every task with machine-run checks, retry with caps, escalate to a human when budgets exhaust, and refuse to close until everything is verified or explicitly waived. Use when you want an agent or subagent to pick up a goal and drive it to a verified close across one of this repo's 18 domains ('run this goal through the engineering harness', 'set up an agentic loop for marketing work', 'make the finance domain self-verifying'). NOT for authoring Claude Code Workflow-tool .js scripts (workflow-builder), N-agent tournaments on one task (agenthub), single-file metric optimization (autoresearch-agent), or discovering published loop recipes (loop-library)."
---

# Agent Harness

You are a harness operator, not a hero. The loop — not your optimism — decides when work
is done. Your job: compile the goal into tasks with checks, execute one task at a time,
let the controller adjudicate verification, and stop when the state machine says stop.

## The contract

```
GOAL → goal_compiler → PLAN → loop_controller: [execute → verify]* → CLOSE
                                     ↑______retry (≤ max_attempts, changed approach)
                                     └── ESCALATE on exhausted budgets — never fake success
```

Three layers, all JSON: a committed per-domain **manifest** (what skills/tools/checks
exist), a per-goal **plan** (which tasks, which verifications, what "done" means), and a
per-run **state file** (the single source of truth; a fresh session resumes from it alone).

## Quick start

```bash
# 0. Pick the domain manifest (18 committed under assets/harnesses/, e.g. engineering-team.json)
ls assets/harnesses/

# 1. Compile the goal (refuses vague goals with exit 3 + forcing questions)
python3 scripts/goal_compiler.py \
  --goal "audit the payments service and design an SLO with an error budget" \
  --manifest assets/harnesses/engineering.json --out plan.json

# 2. Initialize the loop state
python3 scripts/loop_controller.py init --plan plan.json --state .agent-harness/state.json

# 3. Drive the loop — repeat until directive is "close" or "escalate"
python3 scripts/loop_controller.py next --state .agent-harness/state.json
#    → {"action": "execute", "task": "T1", ...}: open the task's skill (SKILL.md at
#      skill_path), do the work with its tools, then:
python3 scripts/loop_controller.py record --state .agent-harness/state.json \
  --task T1 --phase execute --exit-code 0
#    → the controller runs the task's checks ITSELF (subprocess, timeout, evidence log):
python3 scripts/loop_controller.py verify --state .agent-harness/state.json --task T1 --cwd <repo-root>

# 4. Close — refused (exit 4) while any task is unverified and unwaived
python3 scripts/loop_controller.py close --state .agent-harness/state.json
```

Regenerate a manifest after skills change (diff-stable, CI-checkable):

```bash
python3 scripts/harness_manifest_builder.py --domain engineering-team \
  --repo-root <repo-root> --out-dir assets/harnesses --no-timestamp
```

## Hard rules

1. **Never adjudicate your own verification.** `verify` runs the checks via subprocess;
   a passing `record --phase verify` without `--evidence` is rejected (exit 6). You do not
   get to declare a task verified.
2. **Never modify a gate you are judged by.** Check commands come from the manifest/plan.
   Editing a check to make it pass is the reward-hacking failure mode
   (see [references/verification_discipline.md](references/verification_discipline.md)) — same
   invariant as autoresearch-agent's locked evaluator.
3. **One task at a time, writes serialized.** Parallelize reading and judging, never two
   tasks writing the same artifact ([references/agentic_loop_canon.md](references/agentic_loop_canon.md)).
4. **Retry means a changed approach.** Same command + same input = same failure. The retry
   directive says so; honor it.
5. **Budgets are terminal states, not suggestions.** `max_attempts_per_task` → escalated
   (exit 2); `max_loop_iterations` → escalate (exit 5). Exhausted budgets are never
   reported as success — a human waives (`close --waive T3 --reason "..."`), you don't.
6. **Fresh context beats long context.** Every `next` directive is executable by a new
   session reading only the plan + state files. Long-running goals: run each iteration as
   its own session against the durable state.
7. **State lives in `.agent-harness/`** — never in `.agenthub/`, `.autoresearch/`, or
   `docs/TC/` (those belong to sibling skills).
8. **Plan and state files are a trust boundary.** `verify` shell-executes each task's
   check command; only run the harness on plan/state files you or `goal_compiler.py`
   produced, never on files from untrusted input (see
   [references/verification_discipline.md](references/verification_discipline.md)).

## Forcing questions (ask before compiling; one per turn, with a recommended answer)

| # | Question | Recommended answer | Why (canon) |
|---|---|---|---|
| 1 | What single observable outcome means DONE? | A named artifact + a command that exits 0 against it | Verifier's law: invest in verifiability first |
| 2 | Which domain harness applies? | The domain whose skills name the deliverable; if two, run two sequential loops | Orchestrator-workers: scoped objectives beat mega-goals |
| 3 | What must NOT change? | List no-touch paths; put them in the goal text so the compiler's plan inherits them | Boundaries are part of a subagent spec |
| 4 | Who reviews escalations, and how fast? | A named human; escalations block the loop by design | Approval-required is a terminal state, not a nuisance |
| 5 | What is the iteration budget? | Default 12 loop iterations / 3 attempts per task; raise only with a reason | Caps are runtime errors, not advice (OpenAI SDK `max_turns`) |

## Exit codes (branch on these mechanically)

| Code | Tool | Meaning |
|---|---|---|
| 0 | all | OK / directive emitted |
| 2 | loop_controller | Escalation required — a human must review the evidence log |
| 3 | goal_compiler | Goal too vague — answer the forcing questions, recompile |
| 4 | goal_compiler / loop_controller | No skill matched / close refused (unverified tasks) |
| 5 | loop_controller | Global iteration cap reached |
| 6 | loop_controller | Invalid transition (recording on verified task, evidence missing, unknown task) |

## Verifiable success

- `python3 scripts/harness_manifest_builder.py --sample`, `scripts/goal_compiler.py --sample`,
  and `scripts/loop_controller.py --sample` all exit 0.
- A vague goal (`--goal "make it better"`) exits 3 and prints forcing questions.
- `loop_controller.py close` on a state with an unverified task exits 4.
- The demo loop in `loop_controller.py --sample` shows a verify failure consuming an attempt
  and the loop still closing only after a passing verify with evidence.

## Related skills

- **workflow-builder**: authoring deterministic `.js` scripts for Claude Code's Workflow
  tool. NOT for goal-to-close loop state (this skill).
- **agenthub**: N parallel agents competing on ONE task in git worktrees. Use it *inside* a
  harness task that wants competing attempts.
- **autoresearch-agent**: metric optimization of a single file against a locked evaluator.
  Use it when a task's done_when is "metric improves".
- **tc-tracker**: per-code-change lifecycle records. Use for change bookkeeping; the harness
  state file is per-goal, not per-change.
- **loop-library**: discover/audit published loop recipes conversationally. This skill is the
  executable enforcement of that vocabulary.
- **ship-gate / self-eval / spec-driven-workflow**: plug in as close-time checks inside a
  task's `verification[]`.

See [references/domain_harness_design.md](references/domain_harness_design.md) for the
three-layer architecture, the reuse map, and how to raise a domain's harness quality.


---

## SOURCE · `arena/01a01401-scz-dsh:.agents/skills/agent-harness/references/agentic_loop_canon.md`

<!-- blob: 97a79b26f756d572c2051d7ae082ea5664f69909; bytes: 6206 -->

# The Agentic Loop Canon

What the 2024–2026 practitioner literature agrees an agent loop is, and the design
decisions this skill inherits from it. Every rule in `SKILL.md` traces to one of
these sources.

## Sources

1. **Erik Schluntz & Barry Zhang (Anthropic), "Building Effective Agents", Dec 2024** —
   https://www.anthropic.com/research/building-effective-agents. The reference taxonomy:
   *workflows* (LLM steps orchestrated through predefined code paths) vs *agents* (the LLM
   directs its own process). Patterns: prompt chaining with programmatic gates, routing,
   parallelization, orchestrator-workers, evaluator-optimizer. Rule inherited: **compile the
   goal into a workflow — explicit ordered tasks with checks — and let the model be dynamic
   only inside a task**, because evaluator-optimizer loops only pay off "when clear evaluation
   criteria exist."
2. **Anthropic, "Building agents with the Claude Agent SDK", Sep 2025** —
   https://claude.com/blog/building-agents-with-the-claude-agent-sdk. Canonizes the loop as
   **gather context → take action → verify work → repeat**, with the filesystem as the context
   store and a verification-reliability ladder: rules-based checks > visual inspection >
   LLM-as-judge. Rule inherited: every task record in the plan carries a `verification` array;
   deterministic checks outrank judgment.
3. **Anthropic, "How we built our multi-agent research system", Jun 2025** —
   https://www.anthropic.com/engineering/multi-agent-research-system. Production
   orchestrator-workers: subagent specs need **objective, output format, tool guidance, and
   task boundaries** or workers duplicate and wander; effort must be scaled by rule (simple
   query = 1 agent, 3–10 calls). Rule inherited: `goal_compiler.py` emits per-task objective +
   suggested tools + done_when, and caps tasks with `--max-tasks`.
4. **Anthropic, "Effective harnesses for long-running agents", Nov 2025** —
   https://www.anthropic.com/engineering/effective-harnesses-for-long-running-agents. The
   flagship harness: an initializer expands the goal into a structured `feature-list.json`;
   a worker is woken repeatedly, each fresh-context session doing ONE item: read progress →
   implement → run tests → write progress → commit. **All state lives on disk/git; sessions
   are stateless shifts.** Rule inherited: the plan file + state file ARE the loop; never
   assume conversational carryover between iterations.
5. **Geoffrey Huntley, "Ralph Wiggum as a 'software engineer'", Jul 2025** —
   https://ghuntley.com/ralph/ (now an official Claude Code plugin). A `while true` loop
   feeding the same prompt to a fresh-context agent, with the filesystem + TODO file + git as
   memory. Load-bearing insight: **fresh context each iteration is the point** — quality
   degrades as the window fills, so restart against durable state instead of continuing.
   Community practice adds iteration caps and completion criteria. Rule inherited:
   `max_loop_iterations` is mandatory and enforced by the controller, not the agent.
6. **Walden Yan (Cognition), "Don't Build Multi-Agents", Jun 2025** —
   https://cognition.com/blog/dont-build-multi-agents. The counterweight to fan-out
   enthusiasm: parallel actors making conflicting decisions on partial context is the dominant
   multi-agent failure. Synthesis with source 3: **fan out readers and judges; serialize
   writers.** Rule inherited: the default loop order is `sequential`; parallel execution is an
   explicit opt-in and only for non-writing tasks.
7. **Anthropic, "Equipping agents for the real world with Agent Skills", Oct 2025** —
   https://www.anthropic.com/engineering/equipping-agents-for-the-real-world-with-agent-skills.
   Skills load by **progressive disclosure** (metadata → SKILL.md → referenced files on
   demand); ship deterministic scripts for anything reliably automatable. Rule inherited: the
   manifest carries one-paragraph skill descriptors only; the agent opens a skill's SKILL.md
   when — and only when — its task starts.

## The loop this skill implements

```
GOAL ──goal_compiler──▶ PLAN (tasks × verification × caps)
                            │
              ┌─────────────▼──────────────┐
              │  loop_controller next       │◀────────────┐
              │  → execute ONE task         │             │
              │  → record --phase execute   │             │
              │  → loop_controller verify   │  retry ≤ max_attempts,
              │    (controller runs checks) │  changed approach only
              └──────┬──────────────┬───────┘             │
                verified        failed ───────────────────┘
                     │              │ (attempts exhausted)
                     ▼              ▼
                  close         ESCALATE to a human
              (refuses while any task unverified)
```

This is the six-step Observe→Choose→Act→Verify→Record→Repeat-or-stop cycle from the
vendored `loop-library/SKILL.md` (Forward Future, MIT), with the terminal-state taxonomy it
defines — success · clean no-op · blocked · approval-required · exhausted · stagnated —
mapped onto controller states: `closed` (success/no-op), `escalated`
(approval-required/exhausted), and the global iteration cap (stagnated).

## What the canon says NOT to do

- **Don't run the loop inside one ever-growing context.** (Sources 4, 5.) Each `next`
  directive is designed to be executable by a fresh session reading only the state file.
- **Don't let two tasks write the same artifact in parallel.** (Source 6.)
- **Don't hand the model an open-ended goal without acceptance criteria.** (Sources 1, 3.)
  `goal_compiler.py` refuses vague goals (exit 3) with forcing questions instead.
- **Don't treat subagent enthusiasm as progress.** (Source 3: early agents "spawned 50
  subagents for simple queries.") Task count is capped; effort is budgeted up front.


---

## SOURCE · `arena/01a01401-scz-dsh:.agents/skills/agent-harness/references/domain_harness_design.md`

<!-- blob: 17e8fd7fb9a8a45691772852f27d10c1de7eafc0; bytes: 6606 -->

# Domain Harness Design

How a *domain folder full of skills* becomes an *agent harness*: a declarative manifest
mapping goals → skills → verifications, plus the repo primitives this skill deliberately
reuses instead of rebuilding.

## Sources

1. **AGENTS.md convention** — https://agents.md/ (launched Aug 2025; adopted by Codex,
   Cursor, Devin, Gemini CLI, Copilot; stewarded by the Agentic AI Foundation under the Linux
   Foundation since Dec 2025). The de-facto standard for declaring "how to build and verify
   work here" in a file agents read first. The harness manifest is the same idea made
   machine-readable per domain.
2. **Anthropic, "Effective harnesses for long-running agents", Nov 2025** —
   https://www.anthropic.com/engineering/effective-harnesses-for-long-running-agents. Its
   `feature-list.json` — each item carrying description + acceptance criteria + status, looped
   until all verified — is the closest published goal→tasks→verification manifest and the
   direct model for `plan.v1` / `state.v1`.
3. **Model Context Protocol** — https://modelcontextprotocol.io/ (Anthropic, Nov 2024;
   multi-vendor stewardship 2025). JSON-schema'd tool registries as the declared action space
   of a harness. The manifest's `tools[]` blocks follow the same declare-don't-discover
   philosophy: an agent should read what a skill can do, not grep for it mid-loop.
4. **LangGraph checkpointers** — https://langchain-ai.github.io/langgraph/. Durable
   execution: every super-step persisted, enabling pause/resume/replay and human-in-the-loop
   interrupts. The stdlib equivalent here: an atomically-written JSON state file
   (`os.replace`), append-only evidence entries, and git as the checkpoint layer.
5. **OpenAI Agents SDK** — https://openai.github.io/openai-agents-python/. `max_turns`
   raising `MaxTurnsExceeded` and tripwire guardrails: caps are *runtime errors*, not
   suggestions. Mirrored by controller exit codes 2 (escalate), 4 (close refused),
   5 (iteration cap) — a caller script can branch on them mechanically.
6. **Forward Future, "Loop Library" (MIT, vendored at `loop-library/` in this repo)** — loop
   anatomy (Observe/Choose/Act/Verify/Record/Repeat-or-stop) and the terminal-state taxonomy
   (success · clean no-op · blocked · approval-required · exhausted · stagnated). The harness
   adopts this vocabulary; "errors and exhausted budgets are never reported as success" is
   implemented as the no-force `close` gate.
7. **Anthropic, "Effective context engineering for AI agents", Sep 2025** —
   https://www.anthropic.com/engineering/effective-context-engineering-for-ai-agents.
   Compaction, structured note-taking, and subagent summaries for long horizons. The state
   file's `evidence` log + the close-time handoff block are the structured notes; a fresh
   session needs only `plan.json` + `state.json` to continue the loop.

## The three-layer architecture

```
Layer 1 — INVENTORY  (per domain, committed, regenerated by tooling)
  assets/harnesses/<domain>.json      what skills exist, what tools they ship,
                                      what checks prove each tool works,
                                      which agentic signals the skill already has
Layer 2 — PLAN       (per goal, generated at run time)
  plan.json                           ordered tasks: skill × objective ×
                                      verification[] × max_attempts × done_when
Layer 3 — STATE      (per run, the single source of truth)
  .agent-harness/state.json           task statuses, attempts, evidence log,
                                      iteration counter, close/handoff record
```

Layer 1 is diff-stable (`--no-timestamp`) so CI can regenerate and `git diff --exit-code`
it — manifest drift against the tree becomes a machine-checkable gate, exactly like this
repo's `derive_counters.py --check` discipline.

## Reuse map (import the pattern, don't rebuild the mechanism)

| Need | Reuse from this repo | The harness adds |
|---|---|---|
| Task/state persistence + handoff schema | `engineering/skills/tc-tracker` (atomic writes, append-only history, session handoff block) | A goal-scoped, domain-agnostic state file (`.agent-harness/`), not per-code-change records |
| Anti-overfit locked evaluator | `engineering/autoresearch-agent` (never modify `evaluate.py`; KEEP/DISCARD/CRASH) | The same invariant generalized: `verify` re-runs gates itself |
| N-agent tournament on one task | `engineering/agenthub` (worktrees, DAG, result ranker) | Nothing — route there when the task wants competing attempts |
| Deterministic fan-out/pipeline topologies | `engineering/workflow-builder` (Workflow-tool .js + validator) | Nothing — route there when orchestrating Claude Code's Workflow tool |
| Loop design/audit vocabulary | `loop-library/` (six-step cycle, stop-state taxonomy) | An executable enforcement of that vocabulary |
| Severity-gated ship decision | `engineering/skills/ship-gate` (CRITICAL/HIGH/ADVISORY verdict) | Use as a close-time check inside a task's `verification[]` |
| Honest self-scoring | `engineering/skills/self-eval` (matrix-locked composite) | Optional close-out step before the handoff |
| Bounded-autonomy STOP triggers | `engineering/skills/spec-driven-workflow` + `focused-fix` 3-strike rule | `escalate_on` defaults in every manifest |

## Namespacing (collisions this skill deliberately avoids)

- State directory is **`.agent-harness/`** — never `.agenthub/`, `.autoresearch/`, or
  `docs/TC/`, which belong to sibling skills.
- Command is **`/cs:harness`** — `/hub:*`, `/ar:*`, `/si:*`, `/tc` are taken.
- The runtime agent is **`harness-runner`** — "orchestrator" already denotes the
  `context: fork` domain routers, and `hub-coordinator` / `experiment-runner` are taken.
- The bare name "loop" is overloaded in this repo (the `/loop` scheduler skill,
  `loop-library`, workflow loop templates) — this skill never claims it.

## Extending a domain's harness

1. Author or improve skills so they carry the agentic signals (intake, refusal gates,
   verification, loop discipline, close-out — see the July 2026 audit's AR1–AR6 rubric in
   `audit/engineering-agentic-2026-07/RUBRIC.md`).
2. Regenerate the manifest:
   `python3 scripts/harness_manifest_builder.py --domain <domain> --repo-root . --out-dir assets/harnesses --no-timestamp`
   (run from this skill's directory).
3. The richer the skill's tools and `--sample` support, the more executable checks its tasks
   get for free — `manual-evidence` tasks are the fallback, not the goal.


---

## SOURCE · `arena/01a01401-scz-dsh:.agents/skills/agent-harness/references/verification_discipline.md`

<!-- blob: 10f96b107843b8e72ea2c35445f237dc776ea768; bytes: 6321 -->

# Verification Discipline

Why the harness adjudicates its own gates, and why an agent's claim of success is
never evidence. The controller's design decisions trace to these sources.

## Sources

1. **Jason Wei, "Asymmetry of verification and verifier's law", Jul 2025** —
   https://www.jasonwei.net/blog/asymmetry-of-verification-and-verifiers-law. "The ease of
   training AI to solve a task is proportional to how verifiable the task is." Tasks easy to
   check but hard to do are exactly where iteration works. Design consequence: **invest in
   making the task verifiable before investing in the agent** — a task in a harness plan with
   no executable check is a liability, which is why `goal_compiler.py` marks such tasks
   `manual-evidence` and the controller refuses to auto-verify them.
2. **John Yang, Carlos E. Jimenez et al., "SWE-agent: Agent-Computer Interfaces Enable
   Automated Software Engineering", NeurIPS 2024** — https://arxiv.org/abs/2405.15793.
   Agents fail when the environment gives no feedback on bad actions; the single highest-value
   guardrail was a linter that **rejects invalid edits at write time**. Design consequence:
   gates run cheap→expensive and fail fast; a failed check returns the failing command's
   output tail so the next attempt has signal, not vibes.
3. **OpenAI, "SWE-bench Verified", 2024** — https://www.swebench.com/verified.html. Even
   benchmark test suites were noisy enough to need human validation before scores meant
   anything. Design consequence: every check in a manifest declares its `kind`
   (smoke/sample/manual-evidence); only deterministic kinds can flip a task to `verified`
   without a human-authored evidence line.
4. **Boris Cherny (Anthropic), "Claude Code: Best practices for agentic coding", Apr 2025** —
   https://www.anthropic.com/engineering/claude-code-best-practices. The strongest loop is
   test-driven: write the check first, confirm it fails, then iterate work against it —
   "Claude performs best when it has a clear target to iterate against." Design consequence:
   the harness's recommended flow is gate-first (run the verification before the work; a gate
   that already passes pre-work is invalid as evidence of progress).
5. **Noah Shinn et al., "Reflexion: Language Agents with Verbal Reinforcement Learning",
   NeurIPS 2023** — https://arxiv.org/abs/2303.11366 — self-critique improves outcomes **only
   when grounded in external feedback signals**; and **Jie Huang et al., "Large Language Models
   Cannot Self-Correct Reasoning Yet", ICLR 2024** — https://arxiv.org/abs/2310.01798 —
   intrinsic self-correction without external feedback often makes answers worse. Design
   consequence: retries are only granted after a *recorded external failure* (nonzero exit),
   and the retry directive explicitly demands a changed approach.
6. **Anthropic, "From shortcuts to sabotage: natural emergent misalignment from reward
   hacking", Nov 2025** — https://www.anthropic.com/research/emergent-misalignment-reward-hacking.
   Agents that learn to game their checks (hard-coding expected values, editing tests)
   generalize to worse behavior. Design consequence — the harness's central invariant:
   **the worker must not adjudicate or modify the gates it is judged by.**
   `loop_controller.py verify` re-runs the check commands itself via subprocess; a passing
   `record --phase verify` without `--evidence` is rejected outright ("no verification
   theater"); and the same invariant already ships in this repo as autoresearch-agent's
   locked-evaluator rule ("`evaluate.py` is ground truth — never modify it").
7. **Google SRE Workbook (Beyer et al., 2018), ch. 2 "Implementing SLOs"** —
   https://sre.google/workbook/implementing-slos/. Error budgets are the production-grade
   version of the same idea: a numeric, pre-agreed threshold decides whether you ship or stop,
   not the operator's optimism. Design consequence: attempts and iterations are budgets
   (`max_attempts_per_task`, `max_loop_iterations`); exhausting a budget is a *terminal,
   reportable state* — never silently absorbed.

## The verification ladder (most → least trustworthy)

| Rank | Check type | Harness treatment |
|---|---|---|
| 1 | Deterministic command, exit-code contract (`kind: smoke`/`sample`) | `verify` subcommand runs it; pass can auto-flip state |
| 2 | Deterministic command with output assertion (JSON keys, thresholds) | Same, encode the assertion in the command (`... | python3 -c "assert ..."`) |
| 3 | Human-readable evidence written by the agent (`kind: manual-evidence`) | Requires `record --phase verify --evidence "<observation>"`; controller refuses empty evidence |
| 4 | Agent asserting "done" | **Never accepted.** Not a state transition in the machine. |

## Anti-gaming rules the controller enforces

- `verify` executes checks itself (subprocess, timeout, output tail captured to the evidence
  log) — recorded exit codes are for the *execute* phase only.
- A passing verify record without evidence text is exit 6, not a pass.
- Failure at `max_attempts` escalates (exit 2); the loop cannot convert an exhausted task
  into a success, only a human can waive it — and `close --waive` demands a reason that is
  written permanently into the handoff.
- `close` with any unverified, unwaived task is exit 4. There is no force flag.

## Trust boundary: plan and state files

`loop_controller.py verify` shell-executes each task's `verification[].cmd` string via
`subprocess.run(..., shell=True)`. In the documented flow those commands are template-
generated from repo-scanned script paths (`harness_manifest_builder.py` → `goal_compiler.py`),
so they are not attacker-reachable. But the controller does **not** re-validate a `--state`
or `--plan` file's contents before shelling out — a hand-crafted or tampered plan/state file
is therefore effectively arbitrary local command execution, the same trust model as a
Makefile or a CI config. **Treat `plan.json` and `state.json` as a trust boundary: only
run the harness on plan/state files you (or the `goal_compiler`) produced, never on files
sourced from untrusted input.** This matters because the harness is designed to be driven by
an agent (`harness-runner`) that could in principle be handed a malicious plan.


---

## SOURCE · `arena/01a01401-scz-dsh:.agents/skills/bojie-li-perspective/SKILL.md`

<!-- blob: 628c7603b47b0062658fec8cd7a665da93d977c1; bytes: 1433 -->

---
name: bojie-li-perspective
description: 【李博杰】(Bojie Li · 华为天才少年 / 现代 AI Agent 架构与全栈工程宗师)，《深入理解 AI Agent：设计原理与工程实践》作者。提出核心公式「Agent = LLM + 上下文 + 工具」，将模型以外的 Harness 工程（上下文压缩、KV Cache、MCP 工具、代码生成、后训练与多 Agent 协作）视为 Agent 真正的核心竞争力。
---

# 【李博杰】(Bojie Li · 华为天才少年 / 现代 AI Agent 架构宗师)

> **心智模型**：
> 1. **核心公理**：$\text{Agent} = \text{LLM (推理引擎/Policy)} + \text{上下文 (工作集/Observation)} + \text{工具 (行动接口/Action)}$。三者缺一不可；
> 2. **Harness 决定论**：模型能力在同质化收敛，**模型之外的所有工程设计（Harness）才是真正的护城河**；
> 3. **代码是能创造新工具的工具**：Coding Agent 不只是写业务逻辑，而是通过动态生成代码即时扩展自身的 Action Space；
> 4. **上下文预算管理（Context Budgeting）**：上下文不是垃圾桶，区分“长期记忆/知识图谱”、“动态 Working Set”与“精确指令”，通过 KV Cache 命中优化和结构化提取对抗上下文退化；
> 5. **多 Agent 涌现与隔离**：单 Agent 靠上下文深度，多 Agent 靠通信拓扑与上下文隔离（Context Isolation），通过制品契约构建群体智能。


---

## SOURCE · `arena/01a01401-scz-dsh:.agents/skills/human-writing/distributions/human-writing-lite.md`

<!-- blob: 9b29490d63a172ca20498afd7801f7256ec25196; bytes: 2665 -->

# 活人感写作·蒸馏版

把下面整段内容直接粘贴给 ChatGPT、千问办公、WorkBuddy 等聊天产品，跟在你的写作需求后面。它是完整版 skill 的五条最高杠杆规则，适合不支持 Skill 加载的场景和较弱的模型。

---

你写这篇稿子时，遵守下面五条规则。它们的优先级高于你的默认写作习惯。

一、先清点材料再动笔。把用户给的经历、数字、原话逐条列在心里，写长文至少要五件具体材料。材料不够就先问用户要，或者查证公开资料，都不行就把文章写短。抽象道理换四种说法不算材料，凭空想象的「比如有个人」不算材料。文章的每一段都要能指出它靠哪件材料站住。

二、判断从正面下，禁止翻案腔。翻案腔指先立一个读者并没有的误解，再推翻它抬价，包括「不是A，而是B」「不在于A，而在于B」「你以为A，其实B」「表面上A，实际上B」「与其说A，不如说B」「A不重要，重要的是B」以及一切同类变形。想下判断就直接说出判断，把依据放在旁边。同理禁止三项以上的整齐排比，禁止给抽象名词配具体动词的抒情（时间不会保管细节，焦虑不会显出形状），禁止结尾升华到时代、文明和所有人。

三、句子先交出主干。先说谁做了什么，再补时间、原因和条件。一句话里堆四个「的」就重写。「进行了优化」写成「改顺了」，「实现了增长」写成「多挣了多少」。删掉一半连词，中文小句靠语序自己会接。

四、长短句要有高低差。十个字的句子要能挨着四十个字的句子，普通的地方用普通句子结束，不要每段都用一句短判断收尾。动作和原话已经把情绪写出来，就停住，不要追一句解释。该重复的词就重复，不要换着花样找同义词。

五、成稿不用破折号，冒号只用来引出人物原话，不用「说白了」「值得注意的是」「先说结论」，不用赋能、抓手、闭环、底层逻辑这类黑话。

两段对照，感受方向。

坏：「真正让他下定决心的，不是那次失败本身，而是他终于看清了一个残酷的真相：留在原地，才是最大的风险。」

好：「他折腾了几年，一直没挣到稳定的钱。后来老同事找过来，问他愿不愿意一起做项目，他才换了方向。收入会不会稳定，当时没人知道。」

写完后自查一遍：哪一段像模型在完成写作任务就改掉，哪句话说得比材料大就删掉，文章在哪一句已经结束就在哪一句停。


---

## SOURCE · `arena/01a01401-scz-dsh:.agents/skills/mcp-integration/SKILL.md`

<!-- blob: aee6c05e147616817cde5aedcdc05cee3defeede; bytes: 12519 -->

---
name: mcp-integration
description: This skill should be used when the user asks to "add MCP server", "integrate MCP", "configure MCP in plugin", "use .mcp.json", "set up Model Context Protocol", "connect external service", mentions "${CLAUDE_PLUGIN_ROOT} with MCP", or discusses MCP server types (SSE, stdio, HTTP, WebSocket). Provides comprehensive guidance for integrating Model Context Protocol servers into Claude Code plugins for external tool and service integration.
version: 0.1.0
---

# MCP Integration for Claude Code Plugins

## Overview

Model Context Protocol (MCP) enables Claude Code plugins to integrate with external services and APIs by providing structured tool access. Use MCP integration to expose external service capabilities as tools within Claude Code.

**Key capabilities:**
- Connect to external services (databases, APIs, file systems)
- Provide 10+ related tools from a single service
- Handle OAuth and complex authentication flows
- Bundle MCP servers with plugins for automatic setup

## MCP Server Configuration Methods

Plugins can bundle MCP servers in two ways:

### Method 1: Dedicated .mcp.json (Recommended)

Create `.mcp.json` at plugin root:

```json
{
  "database-tools": {
    "command": "${CLAUDE_PLUGIN_ROOT}/servers/db-server",
    "args": ["--config", "${CLAUDE_PLUGIN_ROOT}/config.json"],
    "env": {
      "DB_URL": "${DB_URL}"
    }
  }
}
```

**Benefits:**
- Clear separation of concerns
- Easier to maintain
- Better for multiple servers

### Method 2: Inline in plugin.json

Add `mcpServers` field to plugin.json:

```json
{
  "name": "my-plugin",
  "version": "1.0.0",
  "mcpServers": {
    "plugin-api": {
      "command": "${CLAUDE_PLUGIN_ROOT}/servers/api-server",
      "args": ["--port", "8080"]
    }
  }
}
```

**Benefits:**
- Single configuration file
- Good for simple single-server plugins

## MCP Server Types

### stdio (Local Process)

Execute local MCP servers as child processes. Best for local tools and custom servers.

**Configuration:**
```json
{
  "filesystem": {
    "command": "npx",
    "args": ["-y", "@modelcontextprotocol/server-filesystem", "/allowed/path"],
    "env": {
      "LOG_LEVEL": "debug"
    }
  }
}
```

**Use cases:**
- File system access
- Local database connections
- Custom MCP servers
- NPM-packaged MCP servers

**Process management:**
- Claude Code spawns and manages the process
- Communicates via stdin/stdout
- Terminates when Claude Code exits

### SSE (Server-Sent Events)

Connect to hosted MCP servers with OAuth support. Best for cloud services.

**Configuration:**
```json
{
  "asana": {
    "type": "sse",
    "url": "https://mcp.asana.com/sse"
  }
}
```

**Use cases:**
- Official hosted MCP servers (Asana, GitHub, etc.)
- Cloud services with MCP endpoints
- OAuth-based authentication
- No local installation needed

**Authentication:**
- OAuth flows handled automatically
- User prompted on first use
- Tokens managed by Claude Code

### HTTP (REST API)

Connect to RESTful MCP servers with token authentication.

**Configuration:**
```json
{
  "api-service": {
    "type": "http",
    "url": "https://api.example.com/mcp",
    "headers": {
      "Authorization": "Bearer ${API_TOKEN}",
      "X-Custom-Header": "value"
    }
  }
}
```

**Use cases:**
- REST API-based MCP servers
- Token-based authentication
- Custom API backends
- Stateless interactions

### WebSocket (Real-time)

Connect to WebSocket MCP servers for real-time bidirectional communication.

**Configuration:**
```json
{
  "realtime-service": {
    "type": "ws",
    "url": "wss://mcp.example.com/ws",
    "headers": {
      "Authorization": "Bearer ${TOKEN}"
    }
  }
}
```

**Use cases:**
- Real-time data streaming
- Persistent connections
- Push notifications from server
- Low-latency requirements

## Environment Variable Expansion

All MCP configurations support environment variable substitution:

**${CLAUDE_PLUGIN_ROOT}** - Plugin directory (always use for portability):
```json
{
  "command": "${CLAUDE_PLUGIN_ROOT}/servers/my-server"
}
```

**User environment variables** - From user's shell:
```json
{
  "env": {
    "API_KEY": "${MY_API_KEY}",
    "DATABASE_URL": "${DB_URL}"
  }
}
```

**Best practice:** Document all required environment variables in plugin README.

## MCP Tool Naming

When MCP servers provide tools, they're automatically prefixed:

**Format:** `mcp__plugin_<plugin-name>_<server-name>__<tool-name>`

**Example:**
- Plugin: `asana`
- Server: `asana`
- Tool: `create_task`
- **Full name:** `mcp__plugin_asana_asana__asana_create_task`

### Using MCP Tools in Commands

Pre-allow specific MCP tools in command frontmatter:

```markdown
---
allowed-tools: [
  "mcp__plugin_asana_asana__asana_create_task",
  "mcp__plugin_asana_asana__asana_search_tasks"
]
---
```

**Wildcard (use sparingly):**
```markdown
---
allowed-tools: ["mcp__plugin_asana_asana__*"]
---
```

**Best practice:** Pre-allow specific tools, not wildcards, for security.

## Lifecycle Management

**Automatic startup:**
- MCP servers start when plugin enables
- Connection established before first tool use
- Restart required for configuration changes

**Lifecycle:**
1. Plugin loads
2. MCP configuration parsed
3. Server process started (stdio) or connection established (SSE/HTTP/WS)
4. Tools discovered and registered
5. Tools available as `mcp__plugin_...__...`

**Viewing servers:**
Use `/mcp` command to see all servers including plugin-provided ones.

## Authentication Patterns

### OAuth (SSE/HTTP)

OAuth handled automatically by Claude Code:

```json
{
  "type": "sse",
  "url": "https://mcp.example.com/sse"
}
```

User authenticates in browser on first use. No additional configuration needed.

### Token-Based (Headers)

Static or environment variable tokens:

```json
{
  "type": "http",
  "url": "https://api.example.com",
  "headers": {
    "Authorization": "Bearer ${API_TOKEN}"
  }
}
```

Document required environment variables in README.

### Environment Variables (stdio)

Pass configuration to MCP server:

```json
{
  "command": "python",
  "args": ["-m", "my_mcp_server"],
  "env": {
    "DATABASE_URL": "${DB_URL}",
    "API_KEY": "${API_KEY}",
    "LOG_LEVEL": "info"
  }
}
```

## Integration Patterns

### Pattern 1: Simple Tool Wrapper

Commands use MCP tools with user interaction:

```markdown
# Command: create-item.md
---
allowed-tools: ["mcp__plugin_name_server__create_item"]
---

Steps:
1. Gather item details from user
2. Use mcp__plugin_name_server__create_item
3. Confirm creation
```

**Use for:** Adding validation or preprocessing before MCP calls.

### Pattern 2: Autonomous Agent

Agents use MCP tools autonomously:

```markdown
# Agent: data-analyzer.md

Analysis Process:
1. Query data via mcp__plugin_db_server__query
2. Process and analyze results
3. Generate insights report
```

**Use for:** Multi-step MCP workflows without user interaction.

### Pattern 3: Multi-Server Plugin

Integrate multiple MCP servers:

```json
{
  "github": {
    "type": "sse",
    "url": "https://mcp.github.com/sse"
  },
  "jira": {
    "type": "sse",
    "url": "https://mcp.jira.com/sse"
  }
}
```

**Use for:** Workflows spanning multiple services.

## Security Best Practices

### Use HTTPS/WSS

Always use secure connections:

```json
✅ "url": "https://mcp.example.com/sse"
❌ "url": "http://mcp.example.com/sse"
```

### Token Management

**DO:**
- ✅ Use environment variables for tokens
- ✅ Document required env vars in README
- ✅ Let OAuth flow handle authentication

**DON'T:**
- ❌ Hardcode tokens in configuration
- ❌ Commit tokens to git
- ❌ Share tokens in documentation

### Permission Scoping

Pre-allow only necessary MCP tools:

```markdown
✅ allowed-tools: [
  "mcp__plugin_api_server__read_data",
  "mcp__plugin_api_server__create_item"
]

❌ allowed-tools: ["mcp__plugin_api_server__*"]
```

## Error Handling

### Connection Failures

Handle MCP server unavailability:
- Provide fallback behavior in commands
- Inform user of connection issues
- Check server URL and configuration

### Tool Call Errors

Handle failed MCP operations:
- Validate inputs before calling MCP tools
- Provide clear error messages
- Check rate limiting and quotas

### Configuration Errors

Validate MCP configuration:
- Test server connectivity during development
- Validate JSON syntax
- Check required environment variables

## Performance Considerations

### Lazy Loading

MCP servers connect on-demand:
- Not all servers connect at startup
- First tool use triggers connection
- Connection pooling managed automatically

### Batching

Batch similar requests when possible:

```
# Good: Single query with filters
tasks = search_tasks(project="X", assignee="me", limit=50)

# Avoid: Many individual queries
for id in task_ids:
    task = get_task(id)
```

## Testing MCP Integration

### Local Testing

1. Configure MCP server in `.mcp.json`
2. Install plugin locally (`.claude-plugin/`)
3. Run `/mcp` to verify server appears
4. Test tool calls in commands
5. Check `claude --debug` logs for connection issues

### Validation Checklist

- [ ] MCP configuration is valid JSON
- [ ] Server URL is correct and accessible
- [ ] Required environment variables documented
- [ ] Tools appear in `/mcp` output
- [ ] Authentication works (OAuth or tokens)
- [ ] Tool calls succeed from commands
- [ ] Error cases handled gracefully

## Debugging

### Enable Debug Logging

```bash
claude --debug
```

Look for:
- MCP server connection attempts
- Tool discovery logs
- Authentication flows
- Tool call errors

### Common Issues

**Server not connecting:**
- Check URL is correct
- Verify server is running (stdio)
- Check network connectivity
- Review authentication configuration

**Tools not available:**
- Verify server connected successfully
- Check tool names match exactly
- Run `/mcp` to see available tools
- Restart Claude Code after config changes

**Authentication failing:**
- Clear cached auth tokens
- Re-authenticate
- Check token scopes and permissions
- Verify environment variables set

## Quick Reference

### MCP Server Types

| Type | Transport | Best For | Auth |
|------|-----------|----------|------|
| stdio | Process | Local tools, custom servers | Env vars |
| SSE | HTTP | Hosted services, cloud APIs | OAuth |
| HTTP | REST | API backends, token auth | Tokens |
| ws | WebSocket | Real-time, streaming | Tokens |

### Configuration Checklist

- [ ] Server type specified (stdio/SSE/HTTP/ws)
- [ ] Type-specific fields complete (command or url)
- [ ] Authentication configured
- [ ] Environment variables documented
- [ ] HTTPS/WSS used (not HTTP/WS)
- [ ] ${CLAUDE_PLUGIN_ROOT} used for paths

### Best Practices

**DO:**
- ✅ Use ${CLAUDE_PLUGIN_ROOT} for portable paths
- ✅ Document required environment variables
- ✅ Use secure connections (HTTPS/WSS)
- ✅ Pre-allow specific MCP tools in commands
- ✅ Test MCP integration before publishing
- ✅ Handle connection and tool errors gracefully

**DON'T:**
- ❌ Hardcode absolute paths
- ❌ Commit credentials to git
- ❌ Use HTTP instead of HTTPS
- ❌ Pre-allow all tools with wildcards
- ❌ Skip error handling
- ❌ Forget to document setup

## Additional Resources

### Reference Files

For detailed information, consult:

- **`references/server-types.md`** - Deep dive on each server type
- **`references/authentication.md`** - Authentication patterns and OAuth
- **`references/tool-usage.md`** - Using MCP tools in commands and agents

### Example Configurations

Working examples in `examples/`:

- **`stdio-server.json`** - Local stdio MCP server
- **`sse-server.json`** - Hosted SSE server with OAuth
- **`http-server.json`** - REST API with token auth

### External Resources

- **Official MCP Docs**: https://modelcontextprotocol.io/
- **Claude Code MCP Docs**: https://docs.claude.com/en/docs/claude-code/mcp
- **MCP SDK**: @modelcontextprotocol/sdk
- **Testing**: Use `claude --debug` and `/mcp` command

## Implementation Workflow

To add MCP integration to a plugin:

1. Choose MCP server type (stdio, SSE, HTTP, ws)
2. Create `.mcp.json` at plugin root with configuration
3. Use ${CLAUDE_PLUGIN_ROOT} for all file references
4. Document required environment variables in README
5. Test locally with `/mcp` command
6. Pre-allow MCP tools in relevant commands
7. Handle authentication (OAuth or tokens)
8. Test error cases (connection failures, auth errors)
9. Document MCP integration in plugin README

Focus on stdio for custom/local servers, SSE for hosted services with OAuth.


---

## SOURCE · `arena/01a01401-scz-dsh:.agents/skills/mcp-integration/references/authentication.md`

<!-- blob: 1d4ff3840f8086665838d5746f261d60c6966ace; bytes: 10196 -->

# MCP Authentication Patterns

Complete guide to authentication methods for MCP servers in Claude Code plugins.

## Overview

MCP servers support multiple authentication methods depending on the server type and service requirements. Choose the method that best matches your use case and security requirements.

## OAuth (Automatic)

### How It Works

Claude Code automatically handles the complete OAuth 2.0 flow for SSE and HTTP servers:

1. User attempts to use MCP tool
2. Claude Code detects authentication needed
3. Opens browser for OAuth consent
4. User authorizes in browser
5. Tokens stored securely by Claude Code
6. Automatic token refresh

### Configuration

```json
{
  "service": {
    "type": "sse",
    "url": "https://mcp.example.com/sse"
  }
}
```

No additional auth configuration needed! Claude Code handles everything.

### Supported Services

**Known OAuth-enabled MCP servers:**
- Asana: `https://mcp.asana.com/sse`
- GitHub (when available)
- Google services (when available)
- Custom OAuth servers

### OAuth Scopes

OAuth scopes are determined by the MCP server. Users see required scopes during the consent flow.

**Document required scopes in your README:**
```markdown
## Authentication

This plugin requires the following Asana permissions:
- Read tasks and projects
- Create and update tasks
- Access workspace data
```

### Token Storage

Tokens are stored securely by Claude Code:
- Not accessible to plugins
- Encrypted at rest
- Automatic refresh
- Cleared on sign-out

### Troubleshooting OAuth

**Authentication loop:**
- Clear cached tokens (sign out and sign in)
- Check OAuth redirect URLs
- Verify server OAuth configuration

**Scope issues:**
- User may need to re-authorize for new scopes
- Check server documentation for required scopes

**Token expiration:**
- Claude Code auto-refreshes
- If refresh fails, prompts re-authentication

## Token-Based Authentication

### Bearer Tokens

Most common for HTTP and WebSocket servers.

**Configuration:**
```json
{
  "api": {
    "type": "http",
    "url": "https://api.example.com/mcp",
    "headers": {
      "Authorization": "Bearer ${API_TOKEN}"
    }
  }
}
```

**Environment variable:**
```bash
export API_TOKEN="your-secret-token-here"
```

### API Keys

Alternative to Bearer tokens, often in custom headers.

**Configuration:**
```json
{
  "api": {
    "type": "http",
    "url": "https://api.example.com/mcp",
    "headers": {
      "X-API-Key": "${API_KEY}",
      "X-API-Secret": "${API_SECRET}"
    }
  }
}
```

### Custom Headers

Services may use custom authentication headers.

**Configuration:**
```json
{
  "service": {
    "type": "sse",
    "url": "https://mcp.example.com/sse",
    "headers": {
      "X-Auth-Token": "${AUTH_TOKEN}",
      "X-User-ID": "${USER_ID}",
      "X-Tenant-ID": "${TENANT_ID}"
    }
  }
}
```

### Documenting Token Requirements

Always document in your README:

```markdown
## Setup

### Required Environment Variables

Set these environment variables before using the plugin:

\`\`\`bash
export API_TOKEN="your-token-here"
export API_SECRET="your-secret-here"
\`\`\`

### Obtaining Tokens

1. Visit https://api.example.com/tokens
2. Create a new API token
3. Copy the token and secret
4. Set environment variables as shown above

### Token Permissions

The API token needs the following permissions:
- Read access to resources
- Write access for creating items
- Delete access (optional, for cleanup operations)
\`\`\`
```

## Environment Variable Authentication (stdio)

### Passing Credentials to Server

For stdio servers, pass credentials via environment variables:

```json
{
  "database": {
    "command": "python",
    "args": ["-m", "mcp_server_db"],
    "env": {
      "DATABASE_URL": "${DATABASE_URL}",
      "DB_USER": "${DB_USER}",
      "DB_PASSWORD": "${DB_PASSWORD}"
    }
  }
}
```

### User Environment Variables

```bash
# User sets these in their shell
export DATABASE_URL="postgresql://localhost/mydb"
export DB_USER="myuser"
export DB_PASSWORD="mypassword"
```

### Documentation Template

```markdown
## Database Configuration

Set these environment variables:

\`\`\`bash
export DATABASE_URL="postgresql://host:port/database"
export DB_USER="username"
export DB_PASSWORD="password"
\`\`\`

Or create a `.env` file (add to `.gitignore`):

\`\`\`
DATABASE_URL=postgresql://localhost:5432/mydb
DB_USER=myuser
DB_PASSWORD=mypassword
\`\`\`

Load with: \`source .env\` or \`export $(cat .env | xargs)\`
\`\`\`
```

## Dynamic Headers

### Headers Helper Script

For tokens that change or expire, use a helper script:

```json
{
  "api": {
    "type": "sse",
    "url": "https://api.example.com",
    "headersHelper": "${CLAUDE_PLUGIN_ROOT}/scripts/get-headers.sh"
  }
}
```

**Script (get-headers.sh):**
```bash
#!/bin/bash
# Generate dynamic authentication headers

# Fetch fresh token
TOKEN=$(get-fresh-token-from-somewhere)

# Output JSON headers
cat <<EOF
{
  "Authorization": "Bearer $TOKEN",
  "X-Timestamp": "$(date -Iseconds)"
}
EOF
```

### Use Cases for Dynamic Headers

- Short-lived tokens that need refresh
- Tokens with HMAC signatures
- Time-based authentication
- Dynamic tenant/workspace selection

## Security Best Practices

### DO

✅ **Use environment variables:**
```json
{
  "headers": {
    "Authorization": "Bearer ${API_TOKEN}"
  }
}
```

✅ **Document required variables in README**

✅ **Use HTTPS/WSS always**

✅ **Implement token rotation**

✅ **Store tokens securely (env vars, not files)**

✅ **Let OAuth handle authentication when available**

### DON'T

❌ **Hardcode tokens:**
```json
{
  "headers": {
    "Authorization": "Bearer sk-abc123..."  // NEVER!
  }
}
```

❌ **Commit tokens to git**

❌ **Share tokens in documentation**

❌ **Use HTTP instead of HTTPS**

❌ **Store tokens in plugin files**

❌ **Log tokens or sensitive headers**

## Multi-Tenancy Patterns

### Workspace/Tenant Selection

**Via environment variable:**
```json
{
  "api": {
    "type": "http",
    "url": "https://api.example.com/mcp",
    "headers": {
      "Authorization": "Bearer ${API_TOKEN}",
      "X-Workspace-ID": "${WORKSPACE_ID}"
    }
  }
}
```

**Via URL:**
```json
{
  "api": {
    "type": "http",
    "url": "https://${TENANT_ID}.api.example.com/mcp"
  }
}
```

### Per-User Configuration

Users set their own workspace:

```bash
export WORKSPACE_ID="my-workspace-123"
export TENANT_ID="my-company"
```

## Authentication Troubleshooting

### Common Issues

**401 Unauthorized:**
- Check token is set correctly
- Verify token hasn't expired
- Check token has required permissions
- Ensure header format is correct

**403 Forbidden:**
- Token valid but lacks permissions
- Check scope/permissions
- Verify workspace/tenant ID
- May need admin approval

**Token not found:**
```bash
# Check environment variable is set
echo $API_TOKEN

# If empty, set it
export API_TOKEN="your-token"
```

**Token in wrong format:**
```json
// Correct
"Authorization": "Bearer sk-abc123"

// Wrong
"Authorization": "sk-abc123"
```

### Debugging Authentication

**Enable debug mode:**
```bash
claude --debug
```

Look for:
- Authentication header values (sanitized)
- OAuth flow progress
- Token refresh attempts
- Authentication errors

**Test authentication separately:**
```bash
# Test HTTP endpoint
curl -H "Authorization: Bearer $API_TOKEN" \
     https://api.example.com/mcp/health

# Should return 200 OK
```

## Migration Patterns

### From Hardcoded to Environment Variables

**Before:**
```json
{
  "headers": {
    "Authorization": "Bearer sk-hardcoded-token"
  }
}
```

**After:**
```json
{
  "headers": {
    "Authorization": "Bearer ${API_TOKEN}"
  }
}
```

**Migration steps:**
1. Add environment variable to plugin README
2. Update configuration to use ${VAR}
3. Test with variable set
4. Remove hardcoded value
5. Commit changes

### From Basic Auth to OAuth

**Before:**
```json
{
  "headers": {
    "Authorization": "Basic ${BASE64_CREDENTIALS}"
  }
}
```

**After:**
```json
{
  "type": "sse",
  "url": "https://mcp.example.com/sse"
}
```

**Benefits:**
- Better security
- No credential management
- Automatic token refresh
- Scoped permissions

## Advanced Authentication

### Mutual TLS (mTLS)

Some enterprise services require client certificates.

**Not directly supported in MCP configuration.**

**Workaround:** Wrap in stdio server that handles mTLS:

```json
{
  "secure-api": {
    "command": "${CLAUDE_PLUGIN_ROOT}/servers/mtls-wrapper",
    "args": ["--cert", "${CLIENT_CERT}", "--key", "${CLIENT_KEY}"],
    "env": {
      "API_URL": "https://secure.example.com"
    }
  }
}
```

### JWT Tokens

Generate JWT tokens dynamically with headers helper:

```bash
#!/bin/bash
# generate-jwt.sh

# Generate JWT (using library or API call)
JWT=$(generate-jwt-token)

echo "{\"Authorization\": \"Bearer $JWT\"}"
```

```json
{
  "headersHelper": "${CLAUDE_PLUGIN_ROOT}/scripts/generate-jwt.sh"
}
```

### HMAC Signatures

For APIs requiring request signing:

```bash
#!/bin/bash
# generate-hmac.sh

TIMESTAMP=$(date -Iseconds)
SIGNATURE=$(echo -n "$TIMESTAMP" | openssl dgst -sha256 -hmac "$SECRET_KEY" | cut -d' ' -f2)

cat <<EOF
{
  "X-Timestamp": "$TIMESTAMP",
  "X-Signature": "$SIGNATURE",
  "X-API-Key": "$API_KEY"
}
EOF
```

## Best Practices Summary

### For Plugin Developers

1. **Prefer OAuth** when service supports it
2. **Use environment variables** for tokens
3. **Document all required variables** in README
4. **Provide setup instructions** with examples
5. **Never commit credentials**
6. **Use HTTPS/WSS only**
7. **Test authentication thoroughly**

### For Plugin Users

1. **Set environment variables** before using plugin
2. **Keep tokens secure** and private
3. **Rotate tokens regularly**
4. **Use different tokens** for dev/prod
5. **Don't commit .env files** to git
6. **Review OAuth scopes** before authorizing

## Conclusion

Choose the authentication method that matches your MCP server's requirements:
- **OAuth** for cloud services (easiest for users)
- **Bearer tokens** for API services
- **Environment variables** for stdio servers
- **Dynamic headers** for complex auth flows

Always prioritize security and provide clear setup documentation for users.


---

## SOURCE · `arena/01a01401-scz-dsh:.agents/skills/mcp-integration/references/server-types.md`

<!-- blob: 4528953397fd690282ff1c079f1c52a2a34ac3b0; bytes: 10613 -->

# MCP Server Types: Deep Dive

Complete reference for all MCP server types supported in Claude Code plugins.

## stdio (Standard Input/Output)

### Overview

Execute local MCP servers as child processes with communication via stdin/stdout. Best choice for local tools, custom servers, and NPM packages.

### Configuration

**Basic:**
```json
{
  "my-server": {
    "command": "npx",
    "args": ["-y", "my-mcp-server"]
  }
}
```

**With environment:**
```json
{
  "my-server": {
    "command": "${CLAUDE_PLUGIN_ROOT}/servers/custom-server",
    "args": ["--config", "${CLAUDE_PLUGIN_ROOT}/config.json"],
    "env": {
      "API_KEY": "${MY_API_KEY}",
      "LOG_LEVEL": "debug",
      "DATABASE_URL": "${DB_URL}"
    }
  }
}
```

### Process Lifecycle

1. **Startup**: Claude Code spawns process with `command` and `args`
2. **Communication**: JSON-RPC messages via stdin/stdout
3. **Lifecycle**: Process runs for entire Claude Code session
4. **Shutdown**: Process terminated when Claude Code exits

### Use Cases

**NPM Packages:**
```json
{
  "filesystem": {
    "command": "npx",
    "args": ["-y", "@modelcontextprotocol/server-filesystem", "/path"]
  }
}
```

**Custom Scripts:**
```json
{
  "custom": {
    "command": "${CLAUDE_PLUGIN_ROOT}/servers/my-server.js",
    "args": ["--verbose"]
  }
}
```

**Python Servers:**
```json
{
  "python-server": {
    "command": "python",
    "args": ["-m", "my_mcp_server"],
    "env": {
      "PYTHONUNBUFFERED": "1"
    }
  }
}
```

### Best Practices

1. **Use absolute paths or ${CLAUDE_PLUGIN_ROOT}**
2. **Set PYTHONUNBUFFERED for Python servers**
3. **Pass configuration via args or env, not stdin**
4. **Handle server crashes gracefully**
5. **Log to stderr, not stdout (stdout is for MCP protocol)**

### Troubleshooting

**Server won't start:**
- Check command exists and is executable
- Verify file paths are correct
- Check permissions
- Review `claude --debug` logs

**Communication fails:**
- Ensure server uses stdin/stdout correctly
- Check for stray print/console.log statements
- Verify JSON-RPC format

## SSE (Server-Sent Events)

### Overview

Connect to hosted MCP servers via HTTP with server-sent events for streaming. Best for cloud services and OAuth authentication.

### Configuration

**Basic:**
```json
{
  "hosted-service": {
    "type": "sse",
    "url": "https://mcp.example.com/sse"
  }
}
```

**With headers:**
```json
{
  "service": {
    "type": "sse",
    "url": "https://mcp.example.com/sse",
    "headers": {
      "X-API-Version": "v1",
      "X-Client-ID": "${CLIENT_ID}"
    }
  }
}
```

### Connection Lifecycle

1. **Initialization**: HTTP connection established to URL
2. **Handshake**: MCP protocol negotiation
3. **Streaming**: Server sends events via SSE
4. **Requests**: Client sends HTTP POST for tool calls
5. **Reconnection**: Automatic reconnection on disconnect

### Authentication

**OAuth (Automatic):**
```json
{
  "asana": {
    "type": "sse",
    "url": "https://mcp.asana.com/sse"
  }
}
```

Claude Code handles OAuth flow:
1. User prompted to authenticate on first use
2. Opens browser for OAuth flow
3. Tokens stored securely
4. Automatic token refresh

**Custom Headers:**
```json
{
  "service": {
    "type": "sse",
    "url": "https://mcp.example.com/sse",
    "headers": {
      "Authorization": "Bearer ${API_TOKEN}"
    }
  }
}
```

### Use Cases

**Official Services:**
- Asana: `https://mcp.asana.com/sse`
- GitHub: `https://mcp.github.com/sse`
- Other hosted MCP servers

**Custom Hosted Servers:**
Deploy your own MCP server and expose via HTTPS + SSE.

### Best Practices

1. **Always use HTTPS, never HTTP**
2. **Let OAuth handle authentication when available**
3. **Use environment variables for tokens**
4. **Handle connection failures gracefully**
5. **Document OAuth scopes required**

### Troubleshooting

**Connection refused:**
- Check URL is correct and accessible
- Verify HTTPS certificate is valid
- Check network connectivity
- Review firewall settings

**OAuth fails:**
- Clear cached tokens
- Check OAuth scopes
- Verify redirect URLs
- Re-authenticate

## HTTP (REST API)

### Overview

Connect to RESTful MCP servers via standard HTTP requests. Best for token-based auth and stateless interactions.

### Configuration

**Basic:**
```json
{
  "api": {
    "type": "http",
    "url": "https://api.example.com/mcp"
  }
}
```

**With authentication:**
```json
{
  "api": {
    "type": "http",
    "url": "https://api.example.com/mcp",
    "headers": {
      "Authorization": "Bearer ${API_TOKEN}",
      "Content-Type": "application/json",
      "X-API-Version": "2024-01-01"
    }
  }
}
```

### Request/Response Flow

1. **Tool Discovery**: GET to discover available tools
2. **Tool Invocation**: POST with tool name and parameters
3. **Response**: JSON response with results or errors
4. **Stateless**: Each request independent

### Authentication

**Token-Based:**
```json
{
  "headers": {
    "Authorization": "Bearer ${API_TOKEN}"
  }
}
```

**API Key:**
```json
{
  "headers": {
    "X-API-Key": "${API_KEY}"
  }
}
```

**Custom Auth:**
```json
{
  "headers": {
    "X-Auth-Token": "${AUTH_TOKEN}",
    "X-User-ID": "${USER_ID}"
  }
}
```

### Use Cases

- REST API backends
- Internal services
- Microservices
- Serverless functions

### Best Practices

1. **Use HTTPS for all connections**
2. **Store tokens in environment variables**
3. **Implement retry logic for transient failures**
4. **Handle rate limiting**
5. **Set appropriate timeouts**

### Troubleshooting

**HTTP errors:**
- 401: Check authentication headers
- 403: Verify permissions
- 429: Implement rate limiting
- 500: Check server logs

**Timeout issues:**
- Increase timeout if needed
- Check server performance
- Optimize tool implementations

## WebSocket (Real-time)

### Overview

Connect to MCP servers via WebSocket for real-time bidirectional communication. Best for streaming and low-latency applications.

### Configuration

**Basic:**
```json
{
  "realtime": {
    "type": "ws",
    "url": "wss://mcp.example.com/ws"
  }
}
```

**With authentication:**
```json
{
  "realtime": {
    "type": "ws",
    "url": "wss://mcp.example.com/ws",
    "headers": {
      "Authorization": "Bearer ${TOKEN}",
      "X-Client-ID": "${CLIENT_ID}"
    }
  }
}
```

### Connection Lifecycle

1. **Handshake**: WebSocket upgrade request
2. **Connection**: Persistent bidirectional channel
3. **Messages**: JSON-RPC over WebSocket
4. **Heartbeat**: Keep-alive messages
5. **Reconnection**: Automatic on disconnect

### Use Cases

- Real-time data streaming
- Live updates and notifications
- Collaborative editing
- Low-latency tool calls
- Push notifications from server

### Best Practices

1. **Use WSS (secure WebSocket), never WS**
2. **Implement heartbeat/ping-pong**
3. **Handle reconnection logic**
4. **Buffer messages during disconnection**
5. **Set connection timeouts**

### Troubleshooting

**Connection drops:**
- Implement reconnection logic
- Check network stability
- Verify server supports WebSocket
- Review firewall settings

**Message delivery:**
- Implement message acknowledgment
- Handle out-of-order messages
- Buffer during disconnection

## Comparison Matrix

| Feature | stdio | SSE | HTTP | WebSocket |
|---------|-------|-----|------|-----------|
| **Transport** | Process | HTTP/SSE | HTTP | WebSocket |
| **Direction** | Bidirectional | Server→Client | Request/Response | Bidirectional |
| **State** | Stateful | Stateful | Stateless | Stateful |
| **Auth** | Env vars | OAuth/Headers | Headers | Headers |
| **Use Case** | Local tools | Cloud services | REST APIs | Real-time |
| **Latency** | Lowest | Medium | Medium | Low |
| **Setup** | Easy | Medium | Easy | Medium |
| **Reconnect** | Process respawn | Automatic | N/A | Automatic |

## Choosing the Right Type

**Use stdio when:**
- Running local tools or custom servers
- Need lowest latency
- Working with file systems or local databases
- Distributing server with plugin

**Use SSE when:**
- Connecting to hosted services
- Need OAuth authentication
- Using official MCP servers (Asana, GitHub)
- Want automatic reconnection

**Use HTTP when:**
- Integrating with REST APIs
- Need stateless interactions
- Using token-based auth
- Simple request/response pattern

**Use WebSocket when:**
- Need real-time updates
- Building collaborative features
- Low-latency critical
- Bi-directional streaming required

## Migration Between Types

### From stdio to SSE

**Before (stdio):**
```json
{
  "local-server": {
    "command": "node",
    "args": ["server.js"]
  }
}
```

**After (SSE - deploy server):**
```json
{
  "hosted-server": {
    "type": "sse",
    "url": "https://mcp.example.com/sse"
  }
}
```

### From HTTP to WebSocket

**Before (HTTP):**
```json
{
  "api": {
    "type": "http",
    "url": "https://api.example.com/mcp"
  }
}
```

**After (WebSocket):**
```json
{
  "realtime": {
    "type": "ws",
    "url": "wss://api.example.com/ws"
  }
}
```

Benefits: Real-time updates, lower latency, bi-directional communication.

## Advanced Configuration

### Multiple Servers

Combine different types:

```json
{
  "local-db": {
    "command": "npx",
    "args": ["-y", "mcp-server-sqlite", "./data.db"]
  },
  "cloud-api": {
    "type": "sse",
    "url": "https://mcp.example.com/sse"
  },
  "internal-service": {
    "type": "http",
    "url": "https://api.example.com/mcp",
    "headers": {
      "Authorization": "Bearer ${API_TOKEN}"
    }
  }
}
```

### Conditional Configuration

Use environment variables to switch servers:

```json
{
  "api": {
    "type": "http",
    "url": "${API_URL}",
    "headers": {
      "Authorization": "Bearer ${API_TOKEN}"
    }
  }
}
```

Set different values for dev/prod:
- Dev: `API_URL=http://localhost:8080/mcp`
- Prod: `API_URL=https://api.production.com/mcp`

## Security Considerations

### Stdio Security

- Validate command paths
- Don't execute user-provided commands
- Limit environment variable access
- Restrict file system access

### Network Security

- Always use HTTPS/WSS
- Validate SSL certificates
- Don't skip certificate verification
- Use secure token storage

### Token Management

- Never hardcode tokens
- Use environment variables
- Rotate tokens regularly
- Implement token refresh
- Document scopes required

## Conclusion

Choose the MCP server type based on your use case:
- **stdio** for local, custom, or NPM-packaged servers
- **SSE** for hosted services with OAuth
- **HTTP** for REST APIs with token auth
- **WebSocket** for real-time bidirectional communication

Test thoroughly and handle errors gracefully for robust MCP integration.


---

## SOURCE · `arena/01a01401-scz-dsh:.agents/skills/mcp-integration/references/tool-usage.md`

<!-- blob: 986c2aadbc692f3fdfe0d28264da407d4aba2c9f; bytes: 11674 -->

# Using MCP Tools in Commands and Agents

Complete guide to using MCP tools effectively in Claude Code plugin commands and agents.

## Overview

Once an MCP server is configured, its tools become available with the prefix `mcp__plugin_<plugin-name>_<server-name>__<tool-name>`. Use these tools in commands and agents just like built-in Claude Code tools.

## Tool Naming Convention

### Format

```
mcp__plugin_<plugin-name>_<server-name>__<tool-name>
```

### Examples

**Asana plugin with asana server:**
- `mcp__plugin_asana_asana__asana_create_task`
- `mcp__plugin_asana_asana__asana_search_tasks`
- `mcp__plugin_asana_asana__asana_get_project`

**Custom plugin with database server:**
- `mcp__plugin_myplug_database__query`
- `mcp__plugin_myplug_database__execute`
- `mcp__plugin_myplug_database__list_tables`

### Discovering Tool Names

**Use `/mcp` command:**
```bash
/mcp
```

This shows:
- All available MCP servers
- Tools provided by each server
- Tool schemas and descriptions
- Full tool names for use in configuration

## Using Tools in Commands

### Pre-Allowing Tools

Specify MCP tools in command frontmatter:

```markdown
---
description: Create a new Asana task
allowed-tools: [
  "mcp__plugin_asana_asana__asana_create_task"
]
---

# Create Task Command

To create a task:
1. Gather task details from user
2. Use mcp__plugin_asana_asana__asana_create_task with the details
3. Confirm creation to user
```

### Multiple Tools

```markdown
---
allowed-tools: [
  "mcp__plugin_asana_asana__asana_create_task",
  "mcp__plugin_asana_asana__asana_search_tasks",
  "mcp__plugin_asana_asana__asana_get_project"
]
---
```

### Wildcard (Use Sparingly)

```markdown
---
allowed-tools: ["mcp__plugin_asana_asana__*"]
---
```

**Caution:** Only use wildcards if the command truly needs access to all tools from a server.

### Tool Usage in Command Instructions

**Example command:**
```markdown
---
description: Search and create Asana tasks
allowed-tools: [
  "mcp__plugin_asana_asana__asana_search_tasks",
  "mcp__plugin_asana_asana__asana_create_task"
]
---

# Asana Task Management

## Searching Tasks

To search for tasks:
1. Use mcp__plugin_asana_asana__asana_search_tasks
2. Provide search filters (assignee, project, etc.)
3. Display results to user

## Creating Tasks

To create a task:
1. Gather task details:
   - Title (required)
   - Description
   - Project
   - Assignee
   - Due date
2. Use mcp__plugin_asana_asana__asana_create_task
3. Show confirmation with task link
```

## Using Tools in Agents

### Agent Configuration

Agents can use MCP tools autonomously without pre-allowing them:

```markdown
---
name: asana-status-updater
description: This agent should be used when the user asks to "update Asana status", "generate project report", or "sync Asana tasks"
model: inherit
color: blue
---

## Role

Autonomous agent for generating Asana project status reports.

## Process

1. **Query tasks**: Use mcp__plugin_asana_asana__asana_search_tasks to get all tasks
2. **Analyze progress**: Calculate completion rates and identify blockers
3. **Generate report**: Create formatted status update
4. **Update Asana**: Use mcp__plugin_asana_asana__asana_create_comment to post report

## Available Tools

The agent has access to all Asana MCP tools without pre-approval.
```

### Agent Tool Access

Agents have broader tool access than commands:
- Can use any tool Claude determines is necessary
- Don't need pre-allowed lists
- Should document which tools they typically use

## Tool Call Patterns

### Pattern 1: Simple Tool Call

Single tool call with validation:

```markdown
Steps:
1. Validate user provided required fields
2. Call mcp__plugin_api_server__create_item with validated data
3. Check for errors
4. Display confirmation
```

### Pattern 2: Sequential Tools

Chain multiple tool calls:

```markdown
Steps:
1. Search for existing items: mcp__plugin_api_server__search
2. If not found, create new: mcp__plugin_api_server__create
3. Add metadata: mcp__plugin_api_server__update_metadata
4. Return final item ID
```

### Pattern 3: Batch Operations

Multiple calls with same tool:

```markdown
Steps:
1. Get list of items to process
2. For each item:
   - Call mcp__plugin_api_server__update_item
   - Track success/failure
3. Report results summary
```

### Pattern 4: Error Handling

Graceful error handling:

```markdown
Steps:
1. Try to call mcp__plugin_api_server__get_data
2. If error (rate limit, network, etc.):
   - Wait and retry (max 3 attempts)
   - If still failing, inform user
   - Suggest checking configuration
3. On success, process data
```

## Tool Parameters

### Understanding Tool Schemas

Each MCP tool has a schema defining its parameters. View with `/mcp`.

**Example schema:**
```json
{
  "name": "asana_create_task",
  "description": "Create a new Asana task",
  "inputSchema": {
    "type": "object",
    "properties": {
      "name": {
        "type": "string",
        "description": "Task title"
      },
      "notes": {
        "type": "string",
        "description": "Task description"
      },
      "workspace": {
        "type": "string",
        "description": "Workspace GID"
      }
    },
    "required": ["name", "workspace"]
  }
}
```

### Calling Tools with Parameters

Claude automatically structures tool calls based on schema:

```typescript
// Claude generates this internally
{
  toolName: "mcp__plugin_asana_asana__asana_create_task",
  input: {
    name: "Review PR #123",
    notes: "Code review for new feature",
    workspace: "12345",
    assignee: "67890",
    due_on: "2025-01-15"
  }
}
```

### Parameter Validation

**In commands, validate before calling:**

```markdown
Steps:
1. Check required parameters:
   - Title is not empty
   - Workspace ID is provided
   - Due date is valid format (YYYY-MM-DD)
2. If validation fails, ask user to provide missing data
3. If validation passes, call MCP tool
4. Handle tool errors gracefully
```

## Response Handling

### Success Responses

```markdown
Steps:
1. Call MCP tool
2. On success:
   - Extract relevant data from response
   - Format for user display
   - Provide confirmation message
   - Include relevant links or IDs
```

### Error Responses

```markdown
Steps:
1. Call MCP tool
2. On error:
   - Check error type (auth, rate limit, validation, etc.)
   - Provide helpful error message
   - Suggest remediation steps
   - Don't expose internal error details to user
```

### Partial Success

```markdown
Steps:
1. Batch operation with multiple MCP calls
2. Track successes and failures separately
3. Report summary:
   - "Successfully processed 8 of 10 items"
   - "Failed items: [item1, item2] due to [reason]"
   - Suggest retry or manual intervention
```

## Performance Optimization

### Batching Requests

**Good: Single query with filters**
```markdown
Steps:
1. Call mcp__plugin_api_server__search with filters:
   - project_id: "123"
   - status: "active"
   - limit: 100
2. Process all results
```

**Avoid: Many individual queries**
```markdown
Steps:
1. For each item ID:
   - Call mcp__plugin_api_server__get_item
   - Process item
```

### Caching Results

```markdown
Steps:
1. Call expensive MCP operation: mcp__plugin_api_server__analyze
2. Store results in variable for reuse
3. Use cached results for subsequent operations
4. Only re-fetch if data changes
```

### Parallel Tool Calls

When tools don't depend on each other, call in parallel:

```markdown
Steps:
1. Make parallel calls (Claude handles this automatically):
   - mcp__plugin_api_server__get_project
   - mcp__plugin_api_server__get_users
   - mcp__plugin_api_server__get_tags
2. Wait for all to complete
3. Combine results
```

## Integration Best Practices

### User Experience

**Provide feedback:**
```markdown
Steps:
1. Inform user: "Searching Asana tasks..."
2. Call mcp__plugin_asana_asana__asana_search_tasks
3. Show progress: "Found 15 tasks, analyzing..."
4. Present results
```

**Handle long operations:**
```markdown
Steps:
1. Warn user: "This may take a minute..."
2. Break into smaller steps with updates
3. Show incremental progress
4. Final summary when complete
```

### Error Messages

**Good error messages:**
```
❌ "Could not create task. Please check:
   1. You're logged into Asana
   2. You have access to workspace 'Engineering'
   3. The project 'Q1 Goals' exists"
```

**Poor error messages:**
```
❌ "Error: MCP tool returned 403"
```

### Documentation

**Document MCP tool usage in command:**
```markdown
## MCP Tools Used

This command uses the following Asana MCP tools:
- **asana_search_tasks**: Search for tasks matching criteria
- **asana_create_task**: Create new task with details
- **asana_update_task**: Update existing task properties

Ensure you're authenticated to Asana before running this command.
```

## Testing Tool Usage

### Local Testing

1. **Configure MCP server** in `.mcp.json`
2. **Install plugin locally** in `.claude-plugin/`
3. **Verify tools available** with `/mcp`
4. **Test command** that uses tools
5. **Check debug output**: `claude --debug`

### Test Scenarios

**Test successful calls:**
```markdown
Steps:
1. Create test data in external service
2. Run command that queries this data
3. Verify correct results returned
```

**Test error cases:**
```markdown
Steps:
1. Test with missing authentication
2. Test with invalid parameters
3. Test with non-existent resources
4. Verify graceful error handling
```

**Test edge cases:**
```markdown
Steps:
1. Test with empty results
2. Test with maximum results
3. Test with special characters
4. Test with concurrent access
```

## Common Patterns

### Pattern: CRUD Operations

```markdown
---
allowed-tools: [
  "mcp__plugin_api_server__create_item",
  "mcp__plugin_api_server__read_item",
  "mcp__plugin_api_server__update_item",
  "mcp__plugin_api_server__delete_item"
]
---

# Item Management

## Create
Use create_item with required fields...

## Read
Use read_item with item ID...

## Update
Use update_item with item ID and changes...

## Delete
Use delete_item with item ID (ask for confirmation first)...
```

### Pattern: Search and Process

```markdown
Steps:
1. **Search**: mcp__plugin_api_server__search with filters
2. **Filter**: Apply additional local filtering if needed
3. **Transform**: Process each result
4. **Present**: Format and display to user
```

### Pattern: Multi-Step Workflow

```markdown
Steps:
1. **Setup**: Gather all required information
2. **Validate**: Check data completeness
3. **Execute**: Chain of MCP tool calls:
   - Create parent resource
   - Create child resources
   - Link resources together
   - Add metadata
4. **Verify**: Confirm all steps succeeded
5. **Report**: Provide summary to user
```

## Troubleshooting

### Tools Not Available

**Check:**
- MCP server configured correctly
- Server connected (check `/mcp`)
- Tool names match exactly (case-sensitive)
- Restart Claude Code after config changes

### Tool Calls Failing

**Check:**
- Authentication is valid
- Parameters match tool schema
- Required parameters provided
- Check `claude --debug` logs

### Performance Issues

**Check:**
- Batching queries instead of individual calls
- Caching results when appropriate
- Not making unnecessary tool calls
- Parallel calls when possible

## Conclusion

Effective MCP tool usage requires:
1. **Understanding tool schemas** via `/mcp`
2. **Pre-allowing tools** in commands appropriately
3. **Handling errors gracefully**
4. **Optimizing performance** with batching and caching
5. **Providing good UX** with feedback and clear errors
6. **Testing thoroughly** before deployment

Follow these patterns for robust MCP tool integration in your plugin commands and agents.


---

## SOURCE · `arena/01a01401-scz-dsh:.agents/skills/universal-skill-router/SKILL.md`

<!-- blob: 39d0419f7b57e2e560c9c269f506461a89023de7; bytes: 3316 -->

---
name: universal-skill-router
description: 面向任意项目的技能检索、领域适配和最小专家组编排入口。用于在大型技能仓库中根据真实任务选择少量互补技能，建立制品契约与验证门禁，避免把历史项目假设带入新方向。
---

# 通用技能路由器

## 目标

把本仓库当作能力原料库，而不是一次性加载的总提示词。先由目标项目决定问题，再由问题决定技能和专家职责。

## 路由流程

### 1. 建立任务简报

至少确认：

- 用户真正要得到什么；
- 可用输入和可信事实是什么；
- 受众、载体、截止条件与资源限制；
- 什么结果算通过；
- 哪些内容不能假设。

信息不足且会改变方案时再提问。能用低风险假设继续时，要把假设写明。

### 2. 把任务拆成能力槽位

按需选择，不要求每项都有：

- **领域槽位**：专业概念、事实、文献、法规或行业判断；
- **生产槽位**：代码、数据、文案、设计、演示、图像、视频或文档；
- **平台槽位**：OpenAI、Vercel、Microsoft 等产品专属流程；由 `official-source-router` 在固定官方来源中继续路由；
- **精选槽位**：演示、文档转换、视觉/视频、Agent 工厂、血缘、SEO 等精选上游；只从 `catalog/curated-skills.json` 的明确入口中选择，并先核验许可与执行边界；
- **证据槽位**：检索、实验、测试、统计、引用与事实核查；科研任务由 `research-expert-system` 进一步路由；
- **审查槽位**：安全、反例、可用性、准确性、风格或交付质量；
- **协调槽位**：任务确实可并行时才启用。

### 3. 搜索并最小组队

先运行：

```bash
python scripts/search_skills.py "领域词 交付物 关键方法" --limit 12
```

默认选择：

- 1 个主技能，负责最终交付物；
- 0–2 个支撑技能，补足领域或证据；
- 0–1 个独立审查技能。

如果两个技能给出冲突规则，服从用户与目标项目，随后选更贴近当前载体和验收标准的一项。不要机械折中。

### 4. 渐进加载

1. 只读命中技能的 `SKILL.md`；
2. 再读它要求的 references；
3. 只运行当前任务需要的 scripts；
4. variants 仅用于比较替代方法；
5. 官方来源命中时按需初始化对应子模块，先核验 `sourceId`、固定提交和包内许可证；
6. 精选来源命中时只加载目录记录的 `sourcePackagePath`，并按 `guides/CURATED_SOURCES.md` 核验许可、依赖、网络、凭据、子进程和写入边界；
7. 需要完整包资源时，读取 `full-sources/` 中的固定上游，不以快索引的裁剪范围代替完整上游。

### 5. 形成执行闭环

采用 `Think → Spec → Implement → Verify → Deliver`：

- **Think**：分清事实、假设和未知；
- **Spec**：固定输入、输出、接口与验收标准；
- **Implement**：实施能解决问题的最小变更；
- **Verify**：运行检查并审阅真实制品；
- **Deliver**：说明结果、证据和剩余限制。

复杂并行任务读取 `governance/MULTI_AGENT_ORCHESTRATION.md`。重大选择读取 `governance/AI_CABINET.md`。所有任务遵循 `governance/CONSTITUTION.md` 和 `governance/QUALITY_GATES.md`。


---

## SOURCE · `arena/01a01401-scz-dsh:AGENTS.md`

<!-- blob: 3dfa1afcb56ab4d1bc08fea8578064b6ab16f3ed; bytes: 1174 -->

# scz-dsh 项目 Agent 入口

本仓库是孙承泽的 DeepSeek Harness 入门与插件实验场。

技能来源：`sunccchengze/-SKILL-` 分支 `arena/01a0095c-skill`。本仓库只装了本阶段需要的最小技能组，完整库仍在 `-SKILL-`。

## 指令层级

1. 用户当前明确要求与安全/法律边界
2. 本文件与 `docs/` 中的项目事实
3. `.agents/governance/`
4. 被选中的 `.agents/skills/*/SKILL.md`

## 本轮已调用的技能

- **主技能**：`universal-skill-router` — 最小组队、不把历史项目事实带进来
- **支撑**：`agent-harness-construction`、`bojie-li-perspective`（Agent = 模型 + Harness）
- **编排参考**：`multi-agent-orchestration`（只在真能并行时用）
- **审查**：`verification-before-completion`、`stop-slop`

明确不调用：科研全库、英仔爱心社品牌技能、风电/叶轮机械历史事实。

## 默认流程

1. 读本仓库 `docs/getting-started.md`
2. 用户本机用 Desktop 或 `dsh web` 跑官方 harness
3. 插件用 `scripts/install-week1-plugins.sh` 或 dshmarket
4. 高星源码用 `scripts/clone-dsh-mirrors.sh`，不要把 `vendor/mirrors` 提交进 Git


---

## SOURCE · `arena/01a01401-scz-dsh:README.md`

<!-- blob: 93d16efff5064bdf14212e0304cb2cc888913caa; bytes: 534 -->

# scz-dsh

孙承泽的 DeepSeek Harness 初体验。

- 入门：[`docs/getting-started.md`](docs/getting-started.md)
- Agent 准则：[`AGENTS.md`](AGENTS.md)
- 技能（从 `-SKILL-` 领取）：[`.agents/skills/`](.agents/skills/)
- 高星仓库镜像脚本：[`scripts/clone-dsh-mirrors.sh`](scripts/clone-dsh-mirrors.sh)
- 第一周插件：[`scripts/install-week1-plugins.sh`](scripts/install-week1-plugins.sh)

不想用终端启动时，直接装社区桌面端：  
https://github.com/anywhere-labs/deepseek-harness-desktop


---

## SOURCE · `arena/01a01401-scz-dsh:docs/getting-started.md`

<!-- blob: c3979a3715f42ee158fb2f6ea72e7c4d571b1388; bytes: 2250 -->

# DeepSeek Harness 入门（本仓库）

## 一句话

**Agent = 模型（脑子）+ Harness（手脚、规矩、插件）。**  
`dsh` 是 DeepSeek 开源的那根缰绳：模型、工具、沙箱、会话、UI、循环本身都是插件。

当前官方状态：开发者预览，会有破坏性变更。本体仓库约 15 万 star。

## 不要只用 npx：用桌面端

可以不用天天敲 `npx @deepseek-ai/dsh web`。

推荐：[anywhere-labs/deepseek-harness-desktop](https://github.com/anywhere-labs/deepseek-harness-desktop)

- Windows / Apple Silicon macOS 有安装包
- **不必单独装 Node.js**
- 把官方 Harness 的 Web UI + Host 装进原生窗口、托盘
- 下载：<https://www.dshdesktop.cn/api/downloads/windows> 或 GitHub Releases

Linux 或想跟源码：仍可用 `npx @deepseek-ai/dsh web`（默认 `http://127.0.0.1:3080`）。

桌面端底层还是同一套 dsh；插件命令对 `web` / `desktop` profile 都适用，装之前看 Desktop 文档里的 profile 名。

## 第一周插件（生产力 + 你点名要玩的）

在本机（已装 `dsh` 或 Desktop 自带 CLI）执行：

```bash
bash scripts/install-week1-plugins.sh
```

或在设置里装 **dshmarket**，再搜索安装。

| 用途 | 插件 |
|---|---|
| 市场 | `dshmarket` |
| 对话找插件 | `dsh-find-plugin` |
| 拖文件进对话 | `dsh-file-upload` / `dsh-file-drop` |
| MCP 可视化 | `Js2Hou/dsh-mcp-manager` |
| 工作台 / 看板 | `dsh-web-ui` 或 workbench / better-sidebar（别三套全开） |
| 桌宠 / 鲸鱼 | `whale-on-desk`、`dsh-whale-animation`、`dsh-desktop-pet`、`dsh-codex-pet` |
| UI 皮肤层 | `Physicolor/harness-ui-enhancer` |

**警告：** 插件 = 本机第三方代码，权限接近你本人。先在没密钥的环境试。

## 高星仓库

见 `vendor/README.md`。本机：

```bash
bash scripts/clone-dsh-mirrors.sh
```

## 多 Agent 与控电脑

- dsh 可以派 **subagent**；复杂并行才拆，见 `.agents/governance/MULTI_AGENT_ORCHESTRATION.md`
- 本机运行就能读文件、跑终端、装插件；办公可以，别把网银和未隔离生产机交给 Full Access

## 技能

已从 `-SKILL-` 的 `arena/01a0095c-skill` 装入 `.agents/skills/`（最小组，不是 2000+ 全库）。


---

## SOURCE · `arena/01a01401-scz-dsh:vendor/README.md`

<!-- blob: 2465a7efeecaba43793caea4e0dbbf68401beb10; bytes: 1489 -->

# DSH 高星仓库镜像

完整 clone 大约 1GB+，**不进 Git**。本机执行：

```bash
bash scripts/clone-dsh-mirrors.sh
```

| 目录 | 上游 | 作用 |
|---|---|---|
| `mirrors/deepseek-harness` | [deepseek-ai/deepseek-harness](https://github.com/deepseek-ai/deepseek-harness) | 官方本体 |
| `mirrors/awesome-dsh-plugin` | [awesome-dsh-plugin](https://github.com/awesome-dsh-plugin/awesome-dsh-plugin) | 插件精选 |
| `mirrors/open-design` | [nexu-io/open-design](https://github.com/nexu-io/open-design) | 设计/导出 |
| `mirrors/voyager` | [Nagi-ovo/voyager](https://github.com/Nagi-ovo/voyager) | Web UI 增强 |
| `mirrors/deepseek-harness-desktop` | [anywhere-labs/deepseek-harness-desktop](https://github.com/anywhere-labs/deepseek-harness-desktop) | **桌面客户端** |
| `mirrors/learn-harness-engineering` | [walkinglabs/learn-harness-engineering](https://github.com/walkinglabs/learn-harness-engineering) | 教程 |
| `mirrors/MemOS` | [MemTensor/MemOS](https://github.com/MemTensor/MemOS) | 记忆层 |
| `mirrors/dsh-web-ui` | [zhu1090093659/dsh-web-ui](https://github.com/zhu1090093659/dsh-web-ui) | UI 全家桶 |
| `mirrors/modlens` | [liustack/modlens](https://github.com/liustack/modlens) | 视觉 |
| `mirrors/dsh-market` | [dsh-market/dsh-market](https://github.com/dsh-market/dsh-market) | 插件市场 |
| `mirrors/dsh-find-plugin` | [awesome-dsh-plugin/dsh-find-plugin](https://github.com/awesome-dsh-plugin/dsh-find-plugin) | 对话找插件 |


---

## SOURCE · `main:README.md`

<!-- blob: 850d046f2cfaded85ba09d63883ea59de2b1806b; bytes: 48 -->

# scz-dsh
孙承泽的deepseek harness初体验
