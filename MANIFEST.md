# MANIFEST — 闲置项目归档台账

> 快照时间：2026-09-02（本轮实测，远端 SHA/统计以本表为准）。
> 所有仓均保留原仓历史与默认分支；本仓只含内容并集快照 + `README.ARCHIVE.md` + `TIMESTAMP.md`。

| 目录 | 原仓 | 分支数 | 纳入并集的分支 | 被合并分支数 | 独有版本数 | files | bytes | 孤儿抢救 | PR 状态 | submodule | 未纳入项及理由 |
|---|---|---|---|---|---|---|---|---|---|---|---|
| `-0517` | `-0517` | 1 | main(基线) | 0 | 0 | 21 | 193938 (189.4 KB) | 否 | 无 | 否 | 无 |
| `0530-planck` | `0530-planck` | 1 | main(基线) | 0 | 0 | 25 | 1798228 (1.71 MB) | 否 | 无 | 否 | 无 |
| `06112cosmosagentmode` | `06112cosmosagentmode` | 1 | main(基线) | 0 | 0 | 41 | 159175 (155.4 KB) | 否 | 无 | 否 | 无 |
| `20260524` | `20260524` | 1 | main(基线) | 0 | 0 | 31 | 1250014 (1.19 MB) | 否 | 无 | 否 | 无 |
| `202606060606AI` | `202606060606AI` | 1 | main(基线) | 0 | 0 | 42 | 2542178 (2.42 MB) | 否 | 无 | 否 | 无 |
| `Goooodbye_s-g` | `Goooodbye_s-g` | 1 | main(基线) | 0 | 0 | 22 | 172684 (168.6 KB) | 否 | 无 | 否 | 无 |
| `IELTS20260423scz` | `IELTS20260423scz` | 1 | main(基线) | 0 | 0 | 11 | 157262 (153.6 KB) | 否 | 无 | 否 | 无 |
| `ai` | `ai` | 1 | main(基线) | 0 | 0 | 17 | 113501 (110.8 KB) | 否 | 无 | 否 | 无 |
| `claude-cpt` | `claude-cpt` | 1 | main(基线) | 0 | 0 | 45 | 386539 (377.5 KB) | 否 | 无 | 否 | 无 |
| `dawu-6.1` | `dawu-6.1` | 1 | main(基线) | 0 | 0 | 17 | 169316 (165.3 KB) | 否 | 无 | 否 | 无 |
| `gaoshu-6.1` | `gaoshu-6.1` | 1 | main(基线) | 0 | 0 | 26 | 177101 (173.0 KB) | 否 | 无 | 否 | 无 |
| `hogwarts-sorting-hat-quiz` | `hogwarts-sorting-hat-quiz` | 3 | cloudflare/workers-autoconfig(基线), pullh/1, main | 2 | 0 | 18 | 138385 (135.1 KB) | 否 | PR#1 closed / merged | 否 | 无（main 旧 .gitignore 已被基线分支更新覆盖） |
| `liangji` | `liangji` | 1 | main(基线) | 0 | 0 | 31 | 613784 (599.4 KB) | 否 | 无 | 否 | 无 |
| `physics-exam-1` | `physics-exam-1` | 1 | main(基线) | 0 | 0 | 11 | 143953 (140.6 KB) | 否 | 无 | 否 | 无 |
| `physics-exam-2` | `physics-exam-2` | 1 | main(基线) | 0 | 0 | 18 | 160715 (156.9 KB) | 否 | 无 | 否 | 无 |
| `ryh20260510` | `ryh20260510` | 1 | main(基线) | 0 | 0 | 28 | 206576 (201.7 KB) | 否 | 无 | 否 | 无 |
| `rzyz-2026-gaokaojiayou` | `rzyz-2026-gaokaojiayou` | 1 | main(基线) | 0 | 0 | 15 | 134641 (131.5 KB) | 否 | 无 | 否 | 无 |
| `sectionA-cet6` | `sectionA-cet6` | 1 | main(基线) | 0 | 0 | 20 | 237916 (232.3 KB) | 否 | 无 | 否 | 无 |
| `tushupdf` | `tushupdf` | 2 | arena/019ff894-tushupdf(基线), main | 1 | 1 | 4 | 16034 (15.7 KB) | 是（main 空壳） | 无 | 否 | main 空壳 README 已另存 docs/legacy/README-main.md |
| `wendang11` | `wendang11` | 3 | main(基线), pullh/2, pullh/1 | 2 | 55 | 152 | 26262157 (25.05 MB) | 是（54 个 PR1 孤儿文件） | PR#1 closed(未并)、PR#2 closed(merged) | 是（skills-library 未物料化，turbine 与 wendang11 均保留） | submodule skills-library 不解析；两仓均不删 |
| `yiming-wish` | `yiming-wish` | 2 | main(基线), src | 1 | 0 | 4 | 9186 (9.0 KB) | 否 | 无 | 否 | `11` 在 main 被主动删除，仅台账记录，不捞回 |
| `yimingshengri` | `yimingshengri` | 1 | main(基线) | 0 | 0 | 37 | 3600927 (3.43 MB) | 否 | 无 | 否 | 无 |

---

## 原仓删除记录（2026-09-02 执行）

> 归档完成后已批量删除原仓。删除前逐仓做过 blob OID 校验（466 源文件，diff=0），
> 且确认 21 个原仓自归档快照后**无任何新提交**（远端 tip 与身份卡基线逐仓相等）。

- **已删除：21 个**，删除后经 GitHub API 独立复核，全部返回 404（确认不存在）。
- **执行方式**：`Delete-Archived.ps1 -Execute`（gh CLI 模式，`sunccchengze` 本人凭据）。
- **账实核对**：删除前 34 个仓 → 删除后 **13 个**，恰为受保护清单，无误删。

### 已删除清单（21）

| # | 原仓 | 归档位置 | 备注 |
|---|---|---|---|
| 1 | `IELTS20260423scz` | `IELTS20260423scz/` | |
| 2 | `physics-exam-1` | `physics-exam-1/` | |
| 3 | `physics-exam-2` | `physics-exam-2/` | |
| 4 | `rzyz-2026-gaokaojiayou` | `rzyz-2026-gaokaojiayou/` | |
| 5 | `dawu-6.1` | `dawu-6.1/` | |
| 6 | `gaoshu-6.1` | `gaoshu-6.1/` | |
| 7 | `sectionA-cet6` | `sectionA-cet6/` | |
| 8 | `-0517` | `-0517/` | |
| 9 | `ryh20260510` | `ryh20260510/` | |
| 10 | `20260524` | `20260524/` | |
| 11 | `0530-planck` | `0530-planck/` | |
| 12 | `liangji` | `liangji/` | |
| 13 | `202606060606AI` | `202606060606AI/` | |
| 14 | `06112cosmosagentmode` | `06112cosmosagentmode/` | |
| 15 | `Goooodbye_s-g` | `Goooodbye_s-g/` | |
| 16 | `claude-cpt` | `claude-cpt/` | |
| 17 | `yimingshengri` | `yimingshengri/` | |
| 18 | `tushupdf` | `tushupdf/` | 2 分支已并集 |
| 19 | `fengdian001` | —（无目录） | 空仓，0 文件 0 提交，无内容可归档 |
| 20 | `hogwarts-sorting-hat-quiz` | `hogwarts-sorting-hat-quiz/` | PR#1 已 merged，合并后 main 与归档逐文件一致 |
| 21 | `yiming-wish` | `yiming-wish/` | `src` 分支为 main 祖先；`11` 于 main 主动删除，未捞回 |

### 保留未删（13）

| 仓 | 理由 |
|---|---|
| `ai` | 本归档仓 |
| `wendang11` | submodule `skills-library` 约 1.2GB / 39,480 文件，超出归档仓容量，未物料化，故原仓保留 |
| `turbine-blade-ai-platform` | 上述 submodule 的实际来源仓，与 `wendang11` 同进退，一并保留 |
| `123` | 真实内容在 `arena/01a053b1-123`（30 commits / 105 files），未并入 main，未纳入归档 |
| `wode` | 仍活跃（`arena/01a0609b-wode`，2026-09-02 仍有提交） |
| `yiming` | 仍活跃（`arena/01a05c5e-yiming`，25 commits / 53 files） |
| `zixue2026` `-SKILL-` `-` `notEBooklm-scz` `0824-2026` `sucheng` `wind_farm_viz` | 不在本次归档范围内 |

> 删除不可逆。如需找回某仓内容，见对应目录 `README.ARCHIVE.md` 中的 `git subtree add` 命令，
> 或直接取用该目录快照。注意：**归档只保留内容快照，原仓的提交历史与 PR 讨论已随删除消失**。
