# delta-eta-min · 全分支详细原文

> 去重后的文本资料；每个 SOURCE 标题保留来源分支和路径。


---

## SOURCE · `main:AGENTS.md`

<!-- blob: 10ca0b5398810c367cf26a7feefb50258bbf4386; bytes: 2528 -->

# 本仓铁律（对任何 AI 会话与人类协作者生效）

> 本仓不是"多一个 AI 产物"，而是**反 slop 的能力建设仓**。规则违反一次，仓里的 git log 就失去证据价值。

## 1. 手写区不可代写
`src/` 下三个核心模块**必须承泽本人逐行手写**，AI 只可审查、不可代写、不可"顺手补全"：

| 模块 | 步骤 | 规格 | 验收 |
|---|---|---|---|
| `src/convergence.py` | S13′ | `docs/SPEC-01-convergence.md` | `pytest tests/test_convergence.py` 绿 |
| `src/gci.py` | S14′ | `docs/SPEC-02-gci.md` | `pytest tests/test_gci.py` 绿 |
| `src/significance.py` | S15′ | `docs/SPEC-03-significance.md` | `pytest tests/test_significance.py` 绿 |

规格文档给的是**公式、契约和判据**，不给实现代码——这是刻意的。想抄，代码在你自己的跟做手册里，抄之前先问自己：这次推导我记住了吗。

## 2. 署名 = 事实（科研诚实红线）
- 谁写的代码就署谁的名。承泽手写的 `src/` 提交，本来就不该有 AI co-author——**因为确实没有 AI 写它**，这条同时是证据链和诚实线。
- AI 起草的脚手架（`tools/` `tests/` `docs/` `README`）**保留** `Co-authored-by: arena-agent` 署名，不摘。
- 🩸 红线：不得为了制造"手写证据链"而摘掉 AI -authored 提交的 co-author。被发现的代价是整个证据链（乃至白皮书里"证据等级"这套自设标准）作废。
- 对应监督协议触发线②：`src/` 出现代写痕迹 = 立即提醒。

## 3. AI 允许的范围
`tests/` 夹具与测试、`tools/` 脚本、文档装配、图表美化、LEDGER/报告排版。这些"只要有"的东西一律 AI 提速 + **人工核每个数字**。

## 4. 数值纪律
- 铁律④：引用任何数字前先自己复现，不许照抄。`docs/SOURCES.md` 每行必须可回溯到出处页码才可打 ✅。
- **复算完成前，README 与 docs 不展示任何 CFD 数值。** 空着的表比填了猜测的表强。
- 每个 E 级标注沿用白皮书口径：本仓目标是 **E4（自己生成的网格 + 自己跑到的收敛）**；AI 代跑不计 E 级，沙箱没有求解器也不假装跑过。

## 5. 流程纪律
- 每完成一个可交付单元立刻 `commit` + `push`，绝不攒提交。
- 每步 ≤3 小时；超了 = 步骤设计错误，当场拆两步。卡壳 45 分钟 = 写 `BLOCKERS.md` 然后跳步。
- 收尾必 commit + 填 `LEDGER.md`。
- 遇到权限/网络/环境问题直接说，不绕过去假装完成。


---

## SOURCE · `main:BLOCKERS.md`

<!-- blob: a1737ae40a22e26d1c656305fff6db9302c6204e; bytes: 4985 -->

# BLOCKERS · 卡壳台账（卡壳 45 分钟就写这里，然后跳步）

> 规则来自顺序单：45 分钟 = 上限；写下来 = 把坑变成证据，不是变成失败。
> 每条格式：**症状 / 复现 / 已试 / 绕行 / 待验证**。

## #1 `import gmsh` → `OSError: libGLU.so.1`（本沙箱实测，2026-09-07）
- 症状：`pip install gmsh` 成功，`import gmsh` 直接崩在 `CDLL(libpath)`。
- 复现：`python -c "import gmsh; gmsh.initialize()"`，Debian 精简镜像 + venv，无 GUI 库。
- 已试：`sudo apt-get install libglu1-mesa`（本沙箱 apt 源不可达 → 失败）。
- 绕行（已落进本仓）：`tools/make_grids_numpy.py` —— 纯 numpy 结构化 O-grid，判据与路径 A 相同，
  且额外保证三档**嵌套**；`.geo` 路径留着，装好 GUI 依赖后随时可切回。
- 待验证：你本机若 `import gmsh` 正常，就用路径 A（与手册一致），并把本条标 ✅。

## #2 沙箱没有 SU2，且 GitHub release 资产域名 TLS 被断
- 症状：`curl https://github.com/su2code/SU2/releases/download/...` →
  `OpenSSL SSL_connect: SSL_ERROR_SYSCALL in connection to release-assets.githubusercontent.com:443`
  （与《BRANCH-SAFETY.md》通用坑 #5「沙盒出口白名单」同类；302 本身是通的，断在资产域名）。
- 后果（诚实声明）：**本会话没有运行过任何求解器。** 因此：
  1. `cases/*.cfg` 的键名相对手册做了 3 处规范化（见 cfg 头部 `%NOTE`），**未经真实 SU2 验证**；
  2. S08/S12′/S16′ 的判据一个都没打勾 —— 不由 AI 代打；
  3. 仓里没有任何 CFD 数值，图与 `delta_min.json` 只能由你本机真跑后生成。
- 你首跑要做的事：`SU2_CFD runs/L1/config.cfg` 跑 20 步，看有没有
  `invalid or unknown key` 警告；有就把行号和正确键名记回本文件，再 commit。

## #3 待补（S13′–S15′ 手写过程中产生）
- ☐ 例：平台期尾部取 25% 时，若 CFG 的 `CONV_RESIDUAL_MINVAL` 提前触发停算，样本数可能 <min_tail。
  → 处理：`plateau_stats` 的 `min_tail=50` 兜底，但样本 <50 时报告要标注"平台期样本不足"。

## #4 🩸 抓到上游文档的错误：GCI 自检用例的数值不自洽（2026-09-07，本仓 QA 实测）
- 出处：`跟做手册-逐行版.md` S14′ 的 `tests/test_gci.py`，写作
  `gci(1.0625, 1.25, 1.5, r=2)` 并注明 `φ = 1 + h²`。
- 事实：φ(h)=1+h² 在 h=1 时是 **2.0**，不是 1.5。按手册的三元组实测（本会话跑过，非推算）：
  **p_obs=0.4150、φ_ex=0.5000、GCI_fine=66.18%**；改成 `(1.0625, 1.25, 2.0)` 后
  **p_obs=2.0000、φ_ex=1.0000、GCI_fine=7.35%**（解析真值 p=2、φ=1）。
  也就是说：**照手册写出的实现会在它自己的自检用例上红；写对了的实现也会红**。
  这是"判据本身错了"的那一类坑，比代码 bug 贵得多。
- 本仓处理：改成解析解自洽的 `(1.0625, 1.25, 2.0)` → p=2、φ_ex=1 精确复原；
  并在 `tests/test_gci.py::test_second_order_recovery` 的 docstring 里留了这条来龙去脉。
- 你要做的：把这个结论**回写上游**（手册或白皮书对应页），并在 S26 对表时算一条打脸链路：
  预测"文档可用" → 实验"自检用例不自洽" → 结论"引用数字前自己复现（铁律④）不是口号"。

## #5 push 被拒 ≠ 通道已关：先读错误类型（2026-09-07 实测，PR #1 合并之后）
- 症状：合并 PR #1 后执行 `git push --force-with-lease origin <会话分支>` →
  `! [rejected] ... (stale info)`。**这不是**《BRANCH-SAFETY.md》铁律 2 说的"通道已关"。
- 真因：Arena 沙箱的 clone 是**单分支** refspec（`+refs/heads/main:refs/remotes/origin/main`），
  本地根本没有会话分支的 remote-tracking 引用 → `--force-with-lease` 拿不到期望值，只能报 stale info。
- 解药（已验证有效）：显式给 lease 期望值 ——
  `git push --force-with-lease=refs/heads/<分支>:<远端sha> origin HEAD:refs/heads/<分支>`。
- 本次实测副产品：**REST 合并（merge_method=rebase）之后 push 仍可用**，
  即"合并 PR 立刻关闭本会话远程通道"在这一次没有复现。
  ⚠️ 但**不要把这条当免死金牌**：铁律 1（每步 commit+push）保护的是"未推送的提交永久丢失"，
  那是不可逆损失；通道是否关闭只是可用性问题。一条样本也不足以推翻旧教训，照旧先推再做。

## #6 matplotlib 默认字体无 CJK（本仓 QA 实测）
- 症状：`UserWarning: Glyph 65289 (FULLWIDTH RIGHT PARENTHESIS) missing from font(s) DejaVu Sans`
  → 图里的中文/全角符号渲成方块。
- 已处理：`tools/plot_results.py` 图内文字改全 ASCII（论文图本来也该如此）。
- 若确需中文图：装字体后 `plt.rcParams["font.sans-serif"]=[...]`，并把字体名写进 E4 报告的复现段
  （否则换机器复现不出来 = 口径丢失）。


---

## SOURCE · `main:LEDGER.md`

<!-- blob: 74686f251c306a7dce1a47f4c4ad31a2cb6545e1; bytes: 4538 -->

# LEDGER · delta-eta-min（本仓台账，随做随填）

> 上游总台账在 `Vicious-competitor-scz/执行顺序单-每步3小时.md`；这里只跟本仓相关步骤。
> 规则：**收尾必 commit + 填本表**。状态用 ☐ / 🔶 / ✅ / ⏸（跳步须在 BLOCKERS.md 有对应行）。
> 判据不达标不许打 ✅ —— 这张表是 60 天对表（S26）的唯一底账，擦除等于自欺。

| 步骤 | 名称 | 预算 | AI | 状态 | commit | 完成日 | 判据（原样抄自顺序单/手册） |
|---|---|---|---|---|---|---|---|
| S05 | 建仓 + 骨架 + 冒烟 | 0.5h | 🤖 | ✅ 已闭环：骨架已合入 main（PR #1） | main: 9626e43 + c48c28f（PR #1 rebase 合并，线性无 merge commit） | 09-07 | `pytest` 跑通；src 相关红=进度条（正常） |
| S07 | T1 证据源锁定 | 0.5h | 🤖 | ☐ | | | `docs/SOURCES.md` 每行可回溯页码才打 ✅ |
| S08 | 本地装 SU2 + 冒烟 | 1h | — | ☐ | | | `SU2_CFD --version` 打出 v8.5.0 横幅 |
| S10′ | 一个脚本出三档网格 🔒 | 1.5h | 部分 | ☐ | | | 三档生成成功 + `tools/check_mesh.py` 全 OK + SU2 各跑 100 步 |
| S12′ | 三档一阶批量跑 | 1h+挂机 | ⏳ | ☐ | | | 三个 `runs/L*/history.csv` 存在，日志尾无 divergence |
| S13′ | 收敛史解析器 🔒手写 | 2h | — | ☐ | | | `pytest tests/test_convergence.py` 绿；真日志复核过 |
| S14′ | GCI 模块 🔒手写 | 2h | — | ☐ | | | `pytest tests/test_gci.py` 绿（两个解析解精确复原） |
| S15′ | Δη_min 检验 🔒手写 | 2.5h | — | ☐ | | | `pytest` 全绿；`git log -1` 无 co-author（因为你真的手写完了） |
| S16′ | 细档二阶深收敛 ⏳ | 0.5h+整夜 | — | ☐ | | | 残差降 ≥4 量级 → 打 🏁 = 第一个个人 E4 |
| S17′ | 两张图 | 1h | 🤖 | ☐ | | | `docs/fig1_gci.png` `fig2_deltamin.png` + `delta_min.json` 数字一致 |
| S22′ | E4 报告 | 1h | 🤖 | ☐ | | | `docs/E4_REPORT.md` 每数字可回溯 |
| S23′ | 线上站挂 E4 | 0.75h | 🤖 | ☐ | | | 部署绿（在 turbine 平台仓做，不在本仓） |
| S24′ | T1 报告 v1 | 1.5h | 🤖 | ☐ | | | 先手写 5 行骨架 → 装配 → 自检三问可答 |
| S25 | 师兄评审一轮 | 1h | — | ☐ | | | `docs/review_r1.md` 3 条狠批逐条落实或反驳 |
| S26 | 60 天对表 🔒 | 1h | — | ☐ | | | `docs/AUDIT-1106.md`（2026-11-06），未完成项不擦除 |

## 🏁 里程碑
- ☐ **第一个个人 E4**（S16′ 达成日 = ______）。在此之前本仓不发布任何数值结论。

## S05 收尾实测记录（2026-09-07，沙箱内可验证的部分；口径全部可复现）
```
$ python -m pytest                     → 27 failed, 12 passed, 1 skipped
  · 12 passed  = 网格生成/拓扑体检/工具类（tools + tests/test_mesh_tools.py + test_smoke 的非手写区条目）
  · 27 failed  = src/ 三个手写模块的验收测试（模块不存在 → 有意红，进度条）
  · 1 skipped  = test_real_log_shape，等 S12′ 真日志（不许用假日志冒充实测）
$ python tools/make_grids_numpy.py     → L1/L2/L3 = 2304/9216/36864 单元，h_eq 精确减半，首层比 0.469/0.484
$ python tools/check_mesh.py           → 三份 .su2 全 OK（翻转/非流形/孤儿点 = 0，markers=[Airfoil,Farfield]）
$ python tools/run_levels.py --dry-run L1 L2 L3 → 装配 + cfg↔mesh marker 交叉校验通过
（以上仅证明"脚手架可用 + 判据自洽"，不构成任何 CFD 结论；判据可达性另用仓外参考实现验证为 40 passed 后删除）
```
未打勾项（沙箱物理限制，见 BLOCKERS #2）：`SU2_CFD` 冒烟、三档各 100 步、任何收敛数值 —— 全归你本机。


## 手写证据链自查（S26 要对这三行负责）
```bash
git log --oneline -- src/ | wc -l          # 手写提交数（目标：60 天 ≥20 个手写 commit 全仓）
git log --format='%an' -- src/ | sort -u   # 只应出现承泽；出现 agent = 代写，按 AGENTS.md §2 处理
git log --grep='Co-authored-by' --oneline -- src/   # 应为空
```

## 周工时账（每周 4–5h 手写+复算；≥3h 必须无 AI 会话）
| 周 | 手写 h | 复算/挂机 h | 白板次数 | 真人反馈 | 本周唯一交付 |
|---|---|---|---|---|---|
| W1 09-07→09-13 | | | | | S05 收尾 + S08 + S10′ |
| W2 09-14→09-20 | | | | | S12′ + S13′ |
| W3 09-21→09-27 | | | | | S14′ + S15′（9 月底判据：仓建立、1 档跑通、手写 ≥300 行带测试） |
| W4 09-28→10-04 | | | | | S16′ 整夜 + S17′ |


---

## SOURCE · `main:README.md`

<!-- blob: 0d44045ad5cec3d21a368ee1dcb351d463579e2f; bytes: 4422 -->

# delta-eta-min · T1 收益显著性检验框架（Δη_min）

> 一句话：**未经显著性检验的效率增益，不能被称为成果。**
> 本仓把这句话变成三个能跑、能测、能复现的函数：`convergence` → `gci` → `significance`。
> 出处：行动计划 §2.1（选题 T1）+ 白皮书 6.2① / 6.3。

## 当前状态

`S05` 已闭环：前置骨架（目录 + 工具 + 测试 + 规格）经 PR #1 合入 main，**仓内不含任何 CFD 数值结论**。
所有数值必须由 S12′–S16′ 在你本机真跑之后填入；`src/` 三个核心模块**故意是空的**。

```
$ python -m pytest -q
....FFF
FAILED tests/test_smoke.py::test_gci_import      ← 占位红 = 进度条，手写完成即绿
FAILED tests/test_gci.py ...                      ← 同上（src/gci.py 尚不存在）
```

红测试不是 bug，是打卡器：`pytest` 全绿 = 手写证据链（S13′+S14′+S15′）成型。

## 分工（详见 [AGENTS.md](AGENTS.md)）

| 区域 | 谁写 | 说明 |
|---|---|---|
| `src/convergence.py` `src/gci.py` `src/significance.py` | 🔒 **你**逐行手写 | AI 只审查；规格 `docs/SPEC-0*.md` |
| `mesh/naca0012.geo` 型线区 | 🔒 手敲区（文件内已标注） | S10′，抄前先看懂 |
| `tools/` `tests/` 夹具 `docs/` 装配 | 🤖 AI 起草 + 你核数 | 已交付 |
| `runs/**` 求解器输出 | ⏳ 你本机真跑 | 沙箱无求解器，AI 不代跑、不代跑出的数不标 E 级 |

## 30 秒上手（你的环境 = Windows PowerShell 5.1 + conda `t1`）

```powershell
conda activate t1
cd delta-eta-min
python tools/check_env.py        # 环境与依赖体检（先跑这个）
python -m pytest -q              # 期望：mesh 工具绿，src 相关红（占位进度条）
python tools/make_grids.py       # S10′ 路径 A：gmsh 出三档网格
python tools/make_grids_numpy.py # S10′ 路径 B：无 gmsh 依赖的纯 numpy 结构化 O-grid
python tools/run_levels.py L1 L2 L3   # S12′（需要 SU2 在 PATH 里）
```

PowerShell 5.1 没有 `&&`，多命令用 `;` 或分行。

## 数据流（每步的产物就是下一步的输入）

```
mesh/naca0012.geo ─┐
                   ├→ mesh/mesh_{L1,L2,L3}.su2 + mesh_manifest.json
tools/make_grids*  ┘         │
cases/naca0012.cfg ──→ tools/run_levels.py ──→ runs/{L}/history.csv + run_meta.json
                                                       │
                       S13′ src/convergence.py  ←──────┘   →  统一摘要 JSON
                       S14′ src/gci.py        （Richardson + GCI）
                       S15′ src/significance.py（bootstrap → Δη_min + 判据）
                                                       │
                              tools/plot_results.py ←──┘  → docs/fig1_gci.png / fig2_deltamin.png / delta_min.json
```

## 三档网格（口径先钉死，避免"数字口径答不上来"）

| 档位 | 特征长度 h | 细化比 r | 2D 结构化网格数 | 收敛口径 |
|---|---|---|---|---|
| L1 粗 | 0.012 | — | 由 `mesh_manifest.json` 填 | 一阶 ROE，隐式，CFL 4 |
| L2 中 | 0.006 | 2 | 同上 | 同上 |
| L3 细 | 0.003 | 2 | 同上 | 同上 |

> 表里的"网格数"必须由 `mesh_manifest.json` 的实际输出填入，不手填估计值。GCI 要求三档**同一算例、同一格式、同一收敛判据**，否则 `p_obs` 无意义。

## 已知前置风险（本沙箱实测，已写进 [BLOCKERS.md](BLOCKERS.md)）

1. pip 的 `gmsh` 在缺 `libGLU.so.1` 的机器上 `import gmsh` 直接 OSError → 提供路径 B（纯 numpy 网格生成，无 gmsh 依赖）。
2. 沙箱到 `release-assets.githubusercontent.com` TLS 被断 → **本会话没有 SU2，仓里任何 cfg 都未经真实求解器验证**，你首跑时按 `BLOCKERS.md` 的清单核对键名。

## 边界（这个框架不声称解决什么）

- 只处理**等比三档 + 单一观测量**的网格不确定度；非单调序列直接拒绝出数（`gci` 抛 `ValueError`），不做"看着像就报"。
- Δη_min 是"可分辨下限"，不是"显著性检验"的全部；v1 只有 bootstrap 一种口径，t 检验留 Phase 2。
- Euler/无粘 + 教程级算例（M=0.8, α=1.25°）只用于**方法论闭环**，不用于对叶轮机械下任何结论。

*台账见 [LEDGER.md](LEDGER.md)；60 天检查点 2026-11-06（S26 对表，未完成项不许擦除）。*


---

## SOURCE · `main:docs/AUDIT-1106.md`

<!-- blob: dc33891dfa543ff86465b9a0e1e94c0d002b55fe; bytes: 1964 -->

# S26 · 60 天对表（2026-11-06）· 模板

> 规则：**未完成项不许擦除**，原样留在这里。这张表的价值来自它敢说"没做"。
> 取证只用 git 与文件系统，不用感觉。

```bash
git log --oneline -- src/ | wc -l                     # 手写模块提交数
git log --oneline --since=2026-09-06 | wc -l          # 本仓总提交数（目标 ≥20 个手写）
git log --format='%an' -- src/ | sort -u              # 只应出现承泽
git log --grep='Co-authored-by' --oneline -- src/     # 应为空
ls tests/ | wc -l ; python -m pytest -q               # 全绿？
ls drills/ | wc -l                                    # 白板次数（目标 ≥8，学期末 ≥12）
test -f runs/L3/history.csv && echo "L3 收敛史在" || echo "无：S12′ 未闭环"
```

## 对表（对照 LEDGER.md 逐行）
| 步骤 | 计划 | 实际 | 差距原因（一句话，不许写"时间不够"这种无法复盘的话） |
|---|---|---|---|
| S05/S07/S08 | 第 1 周 | | |
| S10′/S12′ | 第 2 周 | | |
| S13′/S14′/S15′ | 第 3–4 周 | | |
| S16′/S17′ | 第 5 周 | | |
| S22′/S24′ | 第 6–7 周 | | |
| S25 | 第 8 周 | | |
| S18 白板 ×12 | 每周固定 | | |

## 行动计划 §四 的 7 项（本仓相关 3 项）
- ☐ `delta-eta-min` ≥20 个手写 commit，核心模块测试通过
- ☐ ≥1 个 E4 案例完成，线上方法论页新增"网格无关性"一节
- ☐ 未新开任何仓库（监督协议触发线③：主线漂移连续 >2 周 → 回读第〇节第 3 条）

## 打脸链路（本计划=预测，今天=实验）
| 当初的预测 | 打脸了 / 说中了 | 证据 |
|---|---|---|
| 21h 核心工时可完成 | | |
| 手写 300 行 + 测试可在 3 周内成型 | | |
| 二阶深收敛本机整夜可跑 | | |
| "取 max 而非合成"够用 | | |

*写完这份，才允许决定要不要投预印本（且先过师兄那一道关——你有过 no-go 纪律，别自己拍板）。*


---

## SOURCE · `main:docs/E4_REPORT.md`

<!-- blob: 276d3ab5b039586b5dd5a6872d045e224a4ec998; bytes: 2619 -->

# E4 收敛报告：NACA0012 Euler 跨声速（M=0.8, α=1.25°）· 骨架

> 状态：**未开跑，全文无数值**。数值只能来自 S12′/S16′ 在你本机的真跑。
> 装配方式（🤖 允许 AI 填表）：AI 从 `runs/*/run_meta.json`、`mesh/mesh_manifest.json`、
> `docs/delta_min.json` 抽数填进本骨架，你逐格核对可回溯性后署名。
> 证据等级：**E4 = 自己生成的网格 + 自己跑到的收敛**。达不到就写 E3，别借级别。

## 1 设置
| 项 | 值 | 出处 |
|---|---|---|
| 求解器 | SU2 ________（`run_meta.json.su2_version`） | `runs/*/run_meta.json` |
| 算例 | NACA0012, Euler 2D, M=0.8, α=1.25° | `cases/naca0012.cfg` |
| 网格路径 | A（gmsh）/ B（numpy 结构化，勾选） | `mesh/mesh_manifest.json.path` |
| 格式 | 一阶 ROE 隐式 CFL=4 / 二阶 MUSCL+VenkataKishnan CFL=1.5 | 两份 cfg |
| 收敛判据 | `CONV_FIELD=RMS_DENSITY`，`CONV_RESIDUAL_MINVAL=-10`，`ITER=1000/3000` | cfg |
| 远场 | ________（方框 20c×20c 或 法向外推 10c，按实际路径写） | `mesh/naca0012.geo` |

## 2 三档网格表
| 档位 | nb×nr 或 lc | 单元数 | h_eq | 首层厚度 | r vs 上一档 |
|---|---|---|---|---|---|
| L1 | | | | | — |
| L2 | | | | | |
| L3 | | | | | |

拓扑检查：`tools/check_mesh.py` 输出粘贴处 →
```
（待填：翻转/非流形/孤儿点全 0）
```

## 3 收敛史
| 档位 | 步数 | 残差降幅（量级） | 平台期 CD 均值 | 平台期相对标准差 |
|---|---|---|---|---|
门槛：**≥4 个量级**才叫收敛（B4）。未达标档位在此标注，不得省略。

## 4 GCI 与 Δη_min
| 口径 | p_obs | φ_ex | GCI_fine% | GCI_med% | Δη_min（绝对量） |
|---|---|---|---|---|---|
| 一阶 | | | | | |
| 二阶 | | | | | |

`p_obs` 与理论阶（一阶≈1 / 二阶≈2）的对照解读见 `docs/SPEC-02-gci.md` 表；
**偏离时如实写**，不要挑网格凑一个好看的 p。

## 5 局限（这段必须自己写，AI 不许替你承认局限）
- ☐ Euler 无粘：不含边界层与尾迹耗散，CD 绝对值不可与 RANS 对标；
- ☐ 等比三档 + 2D 单一观测量：p_obs 是三点的斜率，不是渐近阶的证明；
- ☐ 远场尺寸/形状对 Euler CD 的影响未单独量化（可选：L3 换 D=20 复算一档做敏感度）；
- ☐ 单一 α、单马赫：不构成任何"方法有效"的普适结论；
- ☐ 其他：______

## 6 图
`docs/fig1_gci.png` · `docs/fig2_deltamin.png`（由 `tools/plot_results.py` 生成，勿手画）

---
*附：本报告与 `runs/` 一起构成 60 天检查点第 3 项证据（S26 对表）。*


---

## SOURCE · `main:docs/SOURCES.md`

<!-- blob: 0cbde35ab75a5cf443f982e0b91d356aa775a523; bytes: 2376 -->

# SOURCES · T1 引用数字的可回溯台账（S07）

> 白皮书铁律①：任何数字必须有出处。本表是 T1 报告与两图的**唯一数字入口**——
> 不在表里的数字不许出现在报告里。
>
> ⚠️ **本会话（AI）没有核验过 A1–A4 的原始出处**：白皮书随私有仓 `Mr.GUO` 存放，沙箱取不到；
> 且 AI 不得向 `src/` 与结论性文档投喂未经复现的数字（AGENTS.md §4 / 铁律④）。
> 所以下表的"出处"列一律留 `待核`，**逐条由你打开白皮书对页码**，核完才把 ☐ 改成 ✅。
> 数字本身是跟做手册 S07 的转录值，转录 ≠ 核实。

| 代号 | 数字（转录值，未核） | 出处 | 在 T1 中的角色 | 核对 |
|---|---|---|---|---|
| A1 | 13 ± 1（多次独立运行离散度） | 待核：P02 Table 8 / P07 §Performance | "重复统计"参照物；与 `u_iter` 是**两回事**（见 SPEC-03 末节） | ☐ |
| A2 | +1.104% | 待核：P07 §（复算回判对象） | 待回判的宣称增益 → fig2 的核心对象 | ☐ |
| A3 | 4200 s/样本 | 待核：P11 §5.2.1 | 成本口径（说明为何 v1 只做 3 档） | ☐ |
| A4 | 9 ms vs 0.915 ms（10 倍差） | 待核：P16 §4.1.1 / Table 3 | 数值噪声存在的实证 | ☐ |

## 本仓自产数字（跑完才有，同样逐条可回溯）
| 代号 | 数字 | 出处（生成方式） | 用途 | 状态 |
|---|---|---|---|---|
| B1 | 三档单元数 / h_eq / 首层厚度 | `mesh/mesh_manifest.json`（`tools/make_grids_numpy.py` 或 `make_grids.py`） | E4 报告表 2 | ☐ 待生成 |
| B2 | p_obs / φ_ex / GCI% | `docs/delta_min.json` ← `src/gci.py` | E4 报告表 3 | ☐ 待手写+真跑 |
| B3 | Δη_min | `docs/delta_min.json` ← `src/significance.py` | T1 报告判据带 | ☐ |
| B4 | 残差降幅（量级） | `runs/*/history.csv` ← `src/convergence.py` | 是否达到"≥4 量级"门槛 | ☐ |

## 自检三问（S24′ 交稿前必答）
1. 训练集还是测试集？——本仓口径：全部为**复算值**，无代理模型参与；若将来用 surrogate 预测参与比较，必须另立一节说明误差传播。
2. 怎么复现？——`README` 数据流图 + `run_meta.json` 里的 SU2 版本 + cfg 全文在 `runs/*/`。
3. 哪个数字没出处？——把答案写在这里：______（正确回答应是"没有一个"，否则不要发布）。


---

## SOURCE · `main:docs/SPEC-01-convergence.md`

<!-- blob: e0cdfbcaa257620b41eff51580c23183108d845e; bytes: 3012 -->

# SPEC-01 · `src/convergence.py`（S13′ 收敛史解析器）— 手写区规格

> 这是**规格**，不是代码。实现由你逐行手写（AGENTS.md §1）。
> 验收 = `pytest tests/test_convergence.py` 绿 + 真日志跑通（`test_real_log_shape` 解除 skip）。
> 预算 2h；卡壳 45 分钟 → 写 `BLOCKERS.md` 跳步。

## 范围纪律
只支持 SU2 的 `history.csv`（`HISTORY_OUTPUT= (ITER, RMS_RES, AERO_COEFF)` + `OUTPUT_FORMAT= CSV`）。
不做通用性：不解析 `.csv` 之外的格式、不支持多时间步、不做并行日志拼接。

## 必须导出的三个名字

### `load_history(path) -> tuple[DataFrame, str, str, str, str]`
读 CSV，列名两端空白和引号都要剥掉；返回 `(df, iter_col, rms_col, cd_col, cl_col)`。
列名走**别名匹配**（大小写不敏感，按下表顺序取第一个命中的）：

| 逻辑列 | 可接受别名（按优先级） |
|---|---|
| 迭代号 | `Iteration`, `ITER`, `Inner_Iter`, `Outer_Iter` |
| 残差 | `rms[Rho]`, `rms[Density]`, `Residual[rho]`, 任何 `rms[` 前缀 |
| 阻力系数 | `DCD`, `CD` |
| 升力系数 | `DCL`, `CL` |

找不到必需列 → 抛 `KeyError`，消息里必须带上**实际列名清单**（报错说人话是判据之一）。

### `orders_dropped(rms) -> float`
`log10(rms[0]) − log10(min(rms))`，即残差降了几个量级。E4 的硬门槛是 **≥4**。

### `plateau_stats(values, tail_frac=0.25, min_tail=50) -> dict`
取有限值序列的最后 `max(min_tail, int(n·tail_frac))` 个样本，返回
`{n, mean, std, rel_std, samples}`。约定：
- `std` = 样本标准差（`ddof=1`）
- `rel_std = std/|mean|`；`mean == 0` 时给 `inf`
- 常数序列 → `std = 0`、`rel_std = 0`（除零要挡住，测试会打这里）
- `samples` 原样保留：`significance.py` 要靠它做 bootstrap，**不要在这一步做平滑/去趋势**

### `summary(path) -> dict`
组合上面三个，返回**恰好**包含这些键（`docs/*.json` 与 `tools/plot_results.py` 依赖键名）：

```
{file, iters, orders_drop, CD_mean, CL_mean, CD_plateau, CL_plateau, rms_final, marker_cols}
```
- `iters` = 迭代列最后一个值（不是行数——测试用 `iters == n-1` 卡住这条）
- `CD_mean` / `CL_mean` 取平台期均值（与 `*_plateau["mean"]` 同值，为方便报告而并列）
- `rms_final` = 残差列最后 10 个的均值（报告里"残差终点"用）
- `marker_cols` = 实际匹配到的列名，写进 JSON 供审计（口径可追溯）

## 输出契约
`summary()` 必须能 `json.dumps`（纯 Python 类型；`samples` 用 `.tolist()` 转成 list，别留 numpy 标量）。

## 三个自检问题（写完答一遍，答不上就重来）
1. 平台期为什么取末段 25% 而不是最后 50 个点？两者何时不等价？
2. `orders_drop` 用 `min(rms)` 而不是 `rms[-1]`，会掩盖什么现象？（提示：震荡后段反弹）
3. 如果 SU2 在 `CONV_STARTITER` 之前写了几行全 0 残差，你的 `orders_dropped` 会给出什么？


---

## SOURCE · `main:docs/SPEC-02-gci.md`

<!-- blob: 7a894ac4e60aa3b29094406610a813fcc0319640; bytes: 3428 -->

# SPEC-02 · `src/gci.py`（S14′ 网格收敛指数）— 手写区规格

> 实现由你手写。验收 = `pytest tests/test_gci.py` 绿（**两个解析解自检精确复原真值** = 公式对了）。
> 预算 2h。约 80 行，多出来的都算过度设计。

## 公式（Roache / Celik et al. 2008 标准，本仓采用简化 F_r 形式）

三档等比网格，细化比 `r = h_coarse / h_fine > 1`（本仓结构化两向翻倍 ⇒ r=2），
记 φ₁=φ_fine、φ₂=φ_med、φ₃=φ_coarse：

```
e21 = φ₂ − φ₁
e32 = φ₃ − φ₂
p   = ln|e32 / e21| / ln r                      # 观察收敛阶
φ_ex = φ₁ + (φ₁ − φ₂) / (r^p − 1)               # Richardson 外推"连续解"
GCI₂₁% = Fs · |e21 / φ₁| / (r^p − 1) · 100      # 细网格不确定度（Fs=1.25 ⇒ 名义 95% 置信）
GCI₃₂% = Fs · |e32 / φ₂| / (r^p − 1) · 100
```

**口径必须先写死再动手**（否则"你的 25% 是怎么算的"一问就崩）：
1. 分母是 **φ₁（细网格值）**，不是 φ_ex；
2. 安全因子 `Fs = 1.25` 固定，不从 S 与 r^p 推 `F_r = (r^p − 1)/(r^p − S)`；
   完整 F_r 形式列为 Phase 2 —— 若你想现在就实现，**同步改测试并在 docstring 写明换了口径**。
3. 结果单位：`gci_*_pct` 是**百分数**（25.0 表示 25%）；转绝对量在 `significance.py` 里做，别在两边都乘 100。

## 拒绝出数的情形（必须抛 `ValueError`，消息里带 e21/e32 实际值）
- `r ≤ 1`（细化比不成立）
- `e21 == 0` 或 `e32 == 0`（两档一模一样 = 网格没起作用或输出被截断）
- `sign(e21) ≠ sign(e32)`（振荡/非单调 → 不在渐近区，外推无意义，**不许"看着像就报"**）
- `|r^p − 1| ≤ 1e-6`，即 `p_obs ≈ 0`（三档看不出收敛趋势）：此时分母趋零，GCI 会炸成
  1e18 这种"天文数字不确定度"，或者直接 `ZeroDivisionError`。
  **必须给一条说人话的 ValueError**（消息里出现 `p_obs` 或"阶"或"收敛"，测试会查）。
  本仓 QA 实测：把 φ 三档随手写成近似相等，就会掉进这个坑（`tests/test_gci.py::test_zero_observed_order_rejected`）。

附带理由：这三条是白皮书"负结果也要公示"的可执行化。抛错比给个数更有价值。

## 返回类型
`@dataclass GCIResult`，字段名固定（`tests/test_gci.py::test_result_fields_present` 会逐个查）：

```
p_obs: float          # 观察阶数（与理论阶对照：一阶≈1、二阶≈2）
phi_ex: float
gci_fine_pct: float
gci_med_pct: float
e21: float
e32: float
```
可选加字段允许（如 `as_dict()`），删字段不允许。

## 与理论阶的对照怎么读（S22′ 报告要写这段）
| p_obs | 一阶 cfg | 二阶 cfg | 结论 |
|---|---|---|---|
| ≈1 | ✅ 正常 | ❌ 二阶没生效（限制器/网格太粗） | 查 MUSCL/SLOPE_LIMITER |
| ≈2 | ❌ 不该出现 | ✅ 正常 | — |
| <0.5 或 >3 | ⚠️ 不在渐近区 | ⚠️ 同左 | 再加细一档；别报 GCI 数值 |

## 自检三问
1. 为什么 `p` 用 `ln|e32/e21|/ln r` 而不是拟合三点的斜率？三点拟合的好处与风险各是什么？
2. 若三档来自**不同** farfield 尺寸（一个 10c 一个 20c），`p_obs` 还意味着什么？
3. `GCI₂₁ = 25%` 的 φ 是 CD（力系数）时，Δη_min 的绝对量是 `0.25·|CD_fine|` 还是 `0.25%`？（`significance.py` 里就靠这一点）


---

## SOURCE · `main:docs/SPEC-03-significance.md`

<!-- blob: 9d919318864ad8477bde1ba71155013befa07c36; bytes: 3490 -->

# SPEC-03 · `src/significance.py`（S15′ Δη_min 检验）— 手写区规格 ★全计划心脏

> 实现由你手写。验收 = `pytest tests/test_significance.py` 绿。预算 2.5h。
> 这个模块把白皮书 6.2① 那句话变成可执行判据：**宣称增益 > Δη_min 才有资格被叫"成果"。**

## 定义（写进报告的话就照这段写）

对某个观测量 φ（效率 η、力系数 CD 均可，**必须是同一口径的绝对量**）：

```
Δη_min = max( u_grid , u_iter )

u_grid = GCI_fine% / 100 · |φ_fine|        # 网格不确定度（绝对量）—— 来自 gci()
u_iter = bootstrap CI 半宽 of mean         # 迭代平台期统计不确定度
```

- 取 **max**，不相加：两者量纲同为绝对值，相加会把"一个来源已经足够大"的情形虚报成更悲观的结论；
  若要合成（平方和开根），那是另一种口径，**必须在 docstring 与报告里同时改**，不许两处不一致。
- v1 只有 bootstrap 一种统计口径（顺序单 v2 的单口径原则）；t 检验留 Phase 2。

## 必须导出的三个函数

### `bootstrap_ci(samples, B=10000, alpha=0.05, seed=42) -> tuple[float, float, float]`
- 统计量：均值。重采样必须**有放回**、长度为 n。
- 分位数用 `[alpha/2, 1−alpha/2]`（percentile 法即可，但要写明用了哪种 quantile —— numpy 默认 `linear`）。
- 返回 `(lo, hi, (hi−lo)/2)`；同 seed 必须逐位可复现（测试会打这条，报告数字要能回溯）。
- `B` 与 `seed` 是显式参数：报告里要写"B=10000, seed=42"，别人才能重跑出一样的数。

### `delta_min(plateau_samples_fine, phi_fine, phi_med, phi_coarse, r=2.0, B=10000) -> dict`
返回键（`tools/plot_results.py` 与 `docs/delta_min.json` 依赖）：
```
{boot_half, gci_abs, dmin, p_obs, phi_ex}
```
`dmin = max(boot_half, gci_abs)`；`p_obs`/`phi_ex` 从 `gci()` 透传，别自己再算一遍。

### `is_significant(claimed_delta, dmin) -> tuple[bool, dict]`
- 判据：`abs(claimed_delta) − dmin > 0`，**严格不等号**（恰好等于 → 判"不可分辨"，宁可保守）。
- 返回 `dict(margin=..., verdict="显著"|"不可分辨", direction="上升"|"下降"|"零")`。
  `direction` 按 `claimed_delta` 的**符号**给，别按绝对值 —— 效率掉 2% 被报成"显著上升"是最难看的错误。

## 测试会在这里咬你（都是有意设计的）
| 测试 | 它在防什么错误 |
|---|---|
| `test_bootstrap_covers_truth` | 忘乘 2、把 std 当半宽、分位数取错尾 |
| `test_bootstrap_is_reproducible_and_wider_with_fewer_samples` | 没有 seed 参数（报告不可复现）；CI 不随 n 变化（重采样写错） |
| `test_delta_min_takes_max_of_two_sources` / `..._dominated_by_iteration_noise` | 两个不确定度的合成方式含糊；把网格细到没意义却忘看平台噪声 |
| `test_boundary_is_strict_and_signed_claims_work` | `>=` 与 `>` 的边界；负增益的方向丢失 |
| `test_end_to_end_synthetic_recovers_known_truth` | 框架本身判反（把噪声当成果 / 把真增益判死） |

## 一个必须自己回答的问题（写进 S24′ 的"局限"节）
`u_iter` 来自**单次运行**的平台期样本，它量化的是"迭代噪声"，不是"随机初值/超参的 run-to-run 离散度"。
白皮书里 A1（多次独立运行离散度）是另一件事——**别把这两者混为一个数**，
混了就等于给"未经显著性检验的增益"发了通行证。


---

## SOURCE · `main:docs/T1_REPORT.md`

<!-- blob: 56a8dd6f7cd6c1cb880d8ad26ba6c6a779275c41; bytes: 2586 -->

# T1 技术报告 v1 · Δη_min：把"效率增益"关进判据里 · 骨架

> 规则（S24′）：**先手写 5 行骨架，再让 AI 装配**。下面 5 个 `**你来写**` 段落不许由 AI 填。
> 交稿前三问见 `docs/SOURCES.md` 末节；任一问答不上 = 不发布。

## 0 五层骨架（承泽手写，每人 1–3 句）
1. 动机（为什么"未经显著性检验的增益不算成果"是个真问题）：**你来写**
2. 方法定义（Δη_min = max(u_grid, u_iter)，口径与不做的选择）：**你来写**
3. 实证（本仓 3 档 NACA0012 复算，一句话给最强的一条结论）：**你来写**
4. 回判（A2 的 +1.104% 放进判据带后落在哪一侧）：**你来写**
5. 局限（与 E4 报告第 5 节不重复、只写"方法论边界"）：**你来写**

## 1 动机（🤖 装配自上面第 1 行 + 白皮书 6.2①；引用数字须来自 SOURCES 表）
占位。禁止出现任何未在 `SOURCES.md` 登记的数字。

## 2 方法
- 网格项 `u_grid = GCI_fine%/100 · |φ_fine|`（Roache/Celik 简化式，`src/gci.py`）
- 统计项 `u_iter = bootstrap 95% CI 半宽 of 平台期均值`（`src/significance.py`，B=____, seed=____）
- 合成取 **max** 不相加（理由与替代口径见 SPEC-03）
- 判据：`|Δφ| > Δη_min` 严格不等号；等于 → 记"不可分辨"
- v1 明确**不做**：t 检验第二口径、run-to-run 超参离散、代理模型误差传播（Phase 2）

## 3 实证
| 量 | 值 | 出处 |
|---|---|---|
| p_obs（一阶/二阶） | | `docs/delta_min.json` |
| GCI_fine% | | 同上 |
| u_iter | | 同上 |
| Δη_min | | 同上 |
| 本仓实测 |Δφ|（L1→L3） | | `fig2` |

## 4 回判表（v1 只回判 2 篇，Phase 2 扩到 20 篇）
| 论文 | 宣称增益 | 换算成同一观测量 | vs Δη_min | 判定 |
|---|---|---|---|---|
| P07 | A2 = +1.104%（**先核出处**） | | | 显著 / 不可分辨 |
| P16 | A4 = 9 ms vs 0.915 ms | | | 仅实证噪声存在，不做回判 |

诚实条款：判定为"不可分辨"时，写"该增益在本框架噪声水平下不可分辨"，
**不写**"该论文错误"；量级比较 ≠ 证伪（对方的观测量、网格策略、收敛标准可能都不同）。

## 5 讨论与局限
占位（含 SPEC-03 末节那条：u_iter ≠ run-to-run 离散度）。

## 6 复现
```bash
python tools/make_grids_numpy.py && python tools/check_mesh.py
python tools/run_levels.py L1 L2 L3
python -m pytest -q
python tools/plot_results.py
```
环境：SU2 ________、Python ________、numpy ________（`tools/check_env.py` 输出整段贴进来）。


---

## SOURCE · `main:docs/review_r1.md`

<!-- blob: 160cc45fe3ac9244f48ffdb4466966a3e86505e8; bytes: 1163 -->

# S25 · 外部评审第 1 轮（要 3 条狠批）

> 索取方式见顺序单 S20 模板：一封邮件同时带两张图 + 一段代码链接，"直接说哪里不对"。
> 规则：每条批评必须**落实或反驳**，写明改动 commit 或给出理由；不许"已阅"式收尾。

| # | 批评（原话，不要复述成好听的版本） | 严重度 | 我的处理 | commit / 反驳理由 |
|---|---|---|---|---|
| 1 | | | ☐ 落实 ☐ 反驳 | |
| 2 | | | ☐ 落实 ☐ 反驳 | |
| 3 | | | ☐ 落实 ☐ 反驳 | |

## 预备的三条自我批评（先自己说，比被人说体面，也比被 AI 抹平诚实）
1. 只有 3 档、一个 2D Euler 算例 —— 框架的"最小可分辨"结论是否随算例类型变化？
2. `u_iter` 用单次运行的平台期，回避了 run-to-run 离散（白皮书 A1 那一类）。
3. 判据取 max 而非合成（RSS），保守方向是否恰好掩盖了网格策略的缺陷？

## 反馈到达前的红线
在拿到**真人**反馈前，本仓不得对外宣称"已同行评审"，白皮书/E4 报告也不得使用
"经过验证"字样 —— E 级只描述证据来源，不描述他人认可。


---

## SOURCE · `main:drills/README.md`

<!-- blob: 39c6e9584b84f1a8346e2c88878caee13200246c; bytes: 1332 -->

# drills/ · 白板推导（S18，45min × 12，🔒 不可简化）

**这个目录跟 `src/` 一样是能力建设区，只是练的是嘴和手，不是键盘。**

| 次 | 日期 | 题目 | 时长 | 卡壳点 → `BLOCKERS.md` |
|---|---|---|---|---|
| 01 | | NSGA-II 非支配排序 | | |
| 02 | | GP 后验与 EI 采集函数 | | |
| 03 | | BatchNorm 为何在小批量点云上失效 | | |
| 04 | | PointNet 对称函数 | | |
| 05 | | MC Dropout 与不确定性口径 | | |
| 06 | | Richardson 外推（与 S14′ 同周互证） | | |
| 07 | | bootstrap 与 CI 覆盖率（与 S15′ 同周互证） | | |
| 08 | | GCI 的 Fs=1.25 是怎么来的 | | |
| 09–12 | | 残差代理的损失设计 / 限制器与二阶精度 / 网格无关性 vs 收敛 / 自订 | | |

规则（照抄顺序单）：
- 手机横屏**录像不剪辑**，存 `WW01_<题目>.mp4` + 同名 `.jpg`；
- 讲卡壳的地方就是下一天的题目；
- 前 4 次很痛苦 = 正常，那正是"证据"的样子；
- 录音只存本地/私有目录。**别把白板视频塞进公开仓**（本仓的 gitignore 已默认不跟踪 `drills/**`）。

为什么它在本仓：第 6、7、8 题与 `src/gci.py`、`src/significance.py` 是同一块肌肉。
写完代码讲不出来，等于代码不是你写的——这个判据比 commit 署名更硬。


---

## SOURCE · `main:mesh/README.md`

<!-- blob: c252168dadf6a4d0277c6b4631ecb2dd6722720d; bytes: 2451 -->

# mesh/ · S10′ 三档网格

| 文件 | 来源 | 说明 |
|---|---|---|
| `naca0012.geo` | 手册路径 A | 含 🔒 手敲区（型线数学），`LC_TOKEN` 由 `tools/make_grids.py` 注入 |
| `make_grids.py` / `make_grids_numpy.py` | tools/ | 两条互斥路径，**三档必须同源** |
| `mesh_{L1,L2,L3}.su2` | 生成物（已 gitignore） | 187KB / 747KB / 3.1MB，别提交 |
| `mesh_manifest.json` | 生成物 | 单元数 / h_eq / 首层厚度 / 细化比 —— E4 报告的网格表以此为准 |

## 档位（口径）

| 档位 | 路径 A `lc` | 路径 B `nb × nr` | 名义 h | 相对上一档 r |
|---|---|---|---|---|
| L1 | 0.012 | 96 × 24 | 0.012 | — |
| L2 | 0.006 | 192 × 48 | 0.006 | 2 |
| L3 | 0.003 | 384 × 96 | 0.003 | 2 |

## 两路径的已知差异（不是 bug，是口径；报告里要写清用了哪条）

1. **远场形状**：A 用 20c×20c 方框；B 用物面法向等距外推 10c 的封闭外边界。
   远场尺寸会直接影响 Euler 的 CD（反射波/边界距离效应）→ 换路径 = 换算例，不能混档。
2. **尾缘**：A 用 −0.1036（开口尾缘，TE 有微小厚度）；B 用 −0.1015（闭合尾缘）。
3. **网格族性质**：B 是**嵌套**族（L1 节点 ⊂ L2 ⊂ L3，`tests/test_mesh_tools.py` 逐点验证），
   法向由与 `nr` 无关的连续映射 `s(η)=(e^{κη}−1)/(e^{κ}−1)·D` 给出 ⇒ `h_eq` 精确减半（r=2 成立），
   首层厚度实测比 0.47–0.48（指数聚层的非线性，报告里如实写）；
   A 由 gmsh 尺寸场生成，非严格嵌套 —— 用 A 时 `p_obs` 偏离 1/2 更多是**正常现象**，
   不要为了好看去挑网格，把 `p_obs` 如实写进报告。

## 判据（S10′）
```
python tools/check_mesh.py            # 翻转=0、非流形=0、孤儿点=0、两个 marker 都在
python tools/run_levels.py --dry-run L1 L2 L3   # marker 名与 cfg 逐字一致
SU2_CFD ...  # 本机：三档各能启动 ≥100 步（沙箱无求解器，这条只能你自己打勾）
```

## 卡壳预案（按顺序试，别硬磕）
1. L3 太慢 → `lc` 改 0.004（r≈1.5 仍达标 ≥1.3），并同步改 `tools/plot_results.py::H_NOMINAL`。
2. gmsh 报 `CurvesList` 无效 → 老版本改回 `EdgesList`。
3. markers 缺失 → 检查 `.geo` 末尾三行 `Physical Curve("...")` 的引号与拼写。
4. `import gmsh` OSError（libGLU）→ 直接走路径 B；或 `conda install -c conda-forge gmsh`。


---

## SOURCE · `main:requirements.txt`

<!-- blob: 7ebdab695a970b53928426bd218588f7742b20c2; bytes: 269 -->

# 与手册第 0 节一致；永远用 python -m pip（裸 pip 启动器会因解释器变动报 Fatal error in launcher）
numpy>=1.24
pandas>=2.0
matplotlib>=3.7
pytest>=7.4
# gmsh>=4.11        # 仅 S10′ 路径 A 需要；装不上就用 tools/make_grids_numpy.py


---

## SOURCE · `main:runs/README.md`

<!-- blob: 1c647258dbca0ecf1e6c9fbe8d62a043ae73234b; bytes: 890 -->

# runs/ · 求解器输出目录（每档一个子目录）

```
runs/L1/config.cfg      # tools/run_levels.py 生成（MESH_FILENAME 已改写）
runs/L1/su2.log         #  stdout/stderr 合并，判 divergence 用
runs/L1/history.csv     #  S13′ 解析器的输入（判据文件）
runs/L1/run_meta.json   #  单元数/SU2 版本/wall time/退出码 → RUNS.md 与 E4 报告的数据源
runs/RUNS.md            #  自动汇总台账（勿手填）
```

- 本目录整体在 `.gitignore` 里（SU2 产物大且可重跑；参照 S02 的"公开仓减重"教训，
  一开始就别让 100MB 的 restart 文件进树）。
- 想留证：把 `history.csv` + `run_meta.json` 两个小文件单独 `git add -f`，
  这样 60 天后别人能复算你的图，而不必你重跑。**这才是 E4 的可审计形态。**
- `RUNS_solution.dat` / `*.vr` / `mesh_L3_*.vtu` 之类永不提交。


---

## SOURCE · `main:runs/RUNS.md`

<!-- blob: eaec7c427f824c8bb654999d6a99d8e5f3854420; bytes: 647 -->

# runs 台账（S12′/S16′ 自动汇总）

> 数字全部来自 `runs/*/run_meta.json` 与 `mesh/mesh_manifest.json`，**不手填**。
> 收敛达标与否不在此表 —— 那是 `src/convergence.py` + 你判读的事。

| 档位 | 单元数 | SU2 | cfg | 步数 | wall (s) | 退出码 | history.csv | 时间戳 |
|---|---|---|---|---|---|---|---|---|
| L1 | 2304 | — | cases/naca0012.cfg | 1000 | — | None | — | 2026-09-07T13:34:30+00:00 |
| L2 | 9216 | — | cases/naca0012.cfg | 1000 | — | None | — | 2026-09-07T13:34:30+00:00 |
| L3 | 36864 | — | cases/naca0012.cfg | 1000 | — | None | — | 2026-09-07T13:34:30+00:00 |


---

## SOURCE · `main:src/README.md`

<!-- blob: a79e5e3af5ffc51e7c57187479eae62c7bf46778; bytes: 982 -->

# `src/` 是手写区（这里没有代码，是故意的）

| 文件 | 步骤 | 规格 | 验收 |
|---|---|---|---|
| `convergence.py` | S13′ | `docs/SPEC-01-convergence.md` | `pytest tests/test_convergence.py` |
| `gci.py` | S14′ | `docs/SPEC-02-gci.md` | `pytest tests/test_gci.py` |
| `significance.py` | S15′ | `docs/SPEC-03-significance.md` | `pytest tests/test_significance.py` |

三条约定：
1. 规格文档只给**公式、契约、判据**，不给实现。想抄，代码在你自己的跟做手册里——抄之前先答 SPEC 末尾的自检三问。
2. 本目录的 commit 由你本人署名。因为代码是你写的，所以没有 AI co-author；**这就是证据链**，不需要额外操作。
3. AI 在这里只做一件事：你写完让它找茬（审查）。它递过来的补丁，除非你逐行看懂并改写，否则不合并。

目标体量：三个模块合计 ≥300 行、带类型注记、可被 `tools/plot_results.py` 直接调用。


---

## SOURCE · `main:废物.md`

<!-- blob: 248e140a50f8577ecf25fa4318eaf944291b86d8; bytes: 94 -->

这个文件没有任何作用，看到请直接删除，毫无作用。不用给我汇报。
