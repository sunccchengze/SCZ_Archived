# ai — 闲置项目归档仓

> # ⚠️ 改 `main` 前必读：[BRANCH-SAFETY.md](./BRANCH-SAFETY.md)
> **别用 PR 合并 Arena 会话分支**，改用 `git push origin <分支>:main` 快进推送。
> PR 合并会切断 Arena 会话与 GitHub 的链接。注意：**分支通常还在**，别拿"分支没消失"当没事（`delete_branch_on_merge` 关着也照样断）。

> 定位：一次性单页 App 产物收敛进一个仓，长期只读。About 建议填：闲置项目归档仓 · 21 个单页 App 的内容快照（含身份卡与时间戳台账）

## 规则
- 一个顶层目录 = 一个原仓（目录名 = 原仓名，含 `-0517`）；内含 `README.ARCHIVE.md`（身份证）与 `TIMESTAMP.md`（创建/末次提交时间）。
- 目录内保留原仓 `.gitignore`；根 `.gitignore` 不存在（避免父级规则吞子目录内容）。原仓历史不入档，这里是**内容并集快照**。

## 目录总表（22 仓）
| 目录 | 原仓 | 末次提交 | files | 内容 | 一句话 |
|---|---|---|---|---|---|
| `-0517` | `-0517` | 2026-05-17 `87a336a` | 21 | 21 files，目录名以 `-` 开头 | 5/17 单页 |
| `0530-planck` | `0530-planck` | 2026-05-30 `8acde3d` | 25 | 25 files，10 jpg 撑体积 | 普朗克/量子单页 |
| `06112cosmosagentmode` | `06112cosmosagentmode` | 2026-06-12 `c615af4` | 41 | 41 files，9 frag/7 vert three.js 着色器 | Cosmos 着色器页 |
| `20260524` | `20260524` | 2026-05-24 `e265737` | 31 | 31 files，含 6 jpg | 5/24 图片页 |
| `202606060606AI` | `202606060606AI` | 2026-06-06 `c995c02` | 42 | 42 files，10 jpg | AI 图片单页 |
| `Goooodbye_s-g` | `Goooodbye_s-g` | 2026-04-20 `e782081` | 22 | 22 files | 告别单页 |
| `IELTS20260423scz` | `IELTS20260423scz` | 2026-04-23 `7ced013` | 11 | 单文件 App：`src/App.tsx` 66KB | 雅思学习单页 |
| `ai` | `ai` | 2026-07-04 `5e4da9c` | 17 | Next+Drizzle，`api/health/route.ts` 149B | 原 ai 仓内容（已迁入 `ai/`） |
| `claude-cpt` | `claude-cpt` | 2026-07-04 `ada60b7` | 45 | 11 commits，45 files，本批唯一真迭代仓 | Claude CPT 迭代产物 |
| `dawu-6.1` | `dawu-6.1` | 2026-06-01 `4f3c7c0` | 17 | 单页 | 六一单页 |
| `gaoshu-6.1` | `gaoshu-6.1` | 2026-06-01 `b575393` | 26 | 16 tsx | 高数 6.1 组件页 |
| `hogwarts-sorting-hat-quiz` | `hogwarts-sorting-hat-quiz` | 2026-04-20 `2ea9591` | 18 | 18 files 含 `wrangler.jsonc`（PR#1 已合并） | 学院帽测验 + Cloudflare 配置 |
| `liangji` | `liangji` | 2026-07-03 `5102faa` | 31 | 31 files | 量级单页 |
| `physics-exam-1` | `physics-exam-1` | 2026-04-21 `24e9fea` | 11 | App.tsx 50KB | 物理考试练习单页 |
| `physics-exam-2` | `physics-exam-2` | 2026-04-21 `8737bb6` | 18 | 7 tsx（DraftPad/Evaluation） | 物理考试组件版 |
| `ryh20260510` | `ryh20260510` | 2026-05-10 `e6e96d7` | 28 | 18 tsx | 五一单页 |
| `rzyz-2026-gaokaojiayou` | `rzyz-2026-gaokaojiayou` | 2026-05-02 `d01338c` | 15 | 祝福网页，曾主动删除 Galaxy-themed | 高考加油祝福页 |
| `sectionA-cet6` | `sectionA-cet6` | 2026-06-01 `06832f5` | 20 | 单页 | CET6 Section A 练习 |
| `tushupdf` | `tushupdf` | 2026-08-13 `9012596` | 4 | 4 files（含 main 空壳 README 另存） | 大二上教材书目核对说明 |
| `wendang11` | `wendang11` | 2026-08-12 `c239a4f` | 152 | 152 files，54 孤儿文件；submodule 未物料化（两仓均保留） | 恋爱大师 · LoveMaster 技能库 |
| `yiming-wish` | `yiming-wish` | 2026-06-02 `fdd819a` | 4 | Cloudflare Worker 许愿页（`src/index.js` + `wrangler.toml`） | 许愿 Worker |
| `yimingshengri` | `yimingshengri` | 2026-06-02 `392d7cf` | 37 | 手工成品 23 js + 6 css + `assets/blessing.jpg` 2.17MB | 生日祝福手工成品 |

## 恢复方法
单个目录恢复成原仓：执行其 `README.ARCHIVE.md` 里的 `git subtree add` 一行；找某仓先看 `MANIFEST.md`。原 `ai` 内容在 `ai/`，其余 21 仓平铺在根；21 个原仓已于 2026-09-02 删除（删前 blob 校验，删后 API 复核全 404），明细见 `MANIFEST.md` 末节。
