# scz-Game-Studio · 全分支详细原文

> 去重后的文本资料；每个 SOURCE 标题保留来源分支和路径。


---

## SOURCE · `arena/01a079a8-scz-game-studio:README.md`

<!-- blob: 564c4fed6ac395fa9d4dd0bd7ffe63e6f9d211dd; bytes: 987 -->

# scz-Game-Studio

SCZ 游戏工作室的创意工坊：游戏、角色卡与互动小实验的主场。

## 🃏 全息闪卡 · Holo Cards

| 编号 | 卡片 | 玩法 |
| ---- | ---- | ---- |
| No.001 | [八重神子 · 鸣神大社](cards/yae-miko/) | 拖动旋转 / 翻面 / 镭射滑杆 / 一键保存 |

每张卡由四层图（主体 / 背景 / 文字 / 线稿）实时合成：
视差景深、镭射光谱、Voronoi 星野、线稿呼吸光全部随视角流动，
卡片几何程序化生成，零依赖、打开即玩。

```bash
cd cards/yae-miko/web
node server.mjs        # http://127.0.0.1:4173
```

复刻一张新卡只需要四步：画主体 → 画背景 → 跑 `tools/make_layers.py` →
把四层 PNG 丢进 `web/assets/`。分层 prompt 规范见各卡目录下的 `prompts.md`。

> 全息合成思路致敬 [EverettFish/holo-card-studio](https://github.com/EverettFish/holo-card-studio)（MIT）。
> 本仓库卡面均为粉丝同人创作，与官方无关。


---

## SOURCE · `arena/01a079a8-scz-game-studio:cards/yae-miko/README.md`

<!-- blob: e0a76874a22c368347259d24c55581f8133efd89; bytes: 1363 -->

# No.001 八重神子 · 鸣神大社

![卡面预览](preview.png)

鸣神大社宫司大人亲临的第一张全息闪卡：雷樱夜宴为背景，
杀生樱雷光为引，翻到背面还有一枚「樱」纹藏品印。

## 玩法

```bash
cd web
node server.mjs        # http://127.0.0.1:4173
```

拖动旋转 · 滚轮缩放 · `F` 翻面 · `R` 复位 · 自动赏卡 ·
镭射/缩放/深度滑杆 · 一键保存此刻。

## 结构

| 路径 | 说明 |
| ---- | ---- |
| `assets/` | 四层图：主体 / 背景 / 文字 / 线稿（1024×1536，严格对位） |
| `web/` | 零依赖可运行站（three.js 已内置于 `vendor/`，几何程序化生成） |
| `tools/make_layers.py` | 分层流水线：rembg 抠图 → 线稿提取 → 思源宋体排版 → 体检 |
| `work/` | 原始生成图与质检图 |
| `card-config.json` / `prompts.md` | 卡片元数据与分层 prompt 存档 |

## 复刻下一张

1. 按 `prompts.md` 画好主体（纯黑底全身）与背景（竖构图，中央留空）；
2. `python3 tools/make_layers.py .` 生成四层图；
3. 把 `assets/*.png` 同步到 `web/assets/`，改 `web/card-config.json` 文案；
4. `node web/server.mjs` 开赏。

> 全息合成思路致敬 [EverettFish/holo-card-studio](https://github.com/EverettFish/holo-card-studio)（MIT）。
> 本卡为粉丝同人创作，与官方无关。


---

## SOURCE · `arena/01a079a8-scz-game-studio:cards/yae-miko/prompts.md`

<!-- blob: 65e74e88018d6c24ba4ac0a61ff10bb1c7f95c47; bytes: 1977 -->

# 八重神子 · 闪卡分层 prompt 存档

画布：1024 × 1536 竖构图，上下各预留约 15% 文字区。

## background（背景层，不透明）

> Vertical portrait anime background illustration, no people, no characters, no text:
> a grand night festival scene at a Japanese shrine on a mountaintop, giant glowing
> violet thunder-sakura tree with luminous petals drifting, vermillion torii gates,
> stone lanterns with warm light, distant purple lightning clouds and a huge pale moon,
> floating spirit wisps, deep indigo and violet palette with pink accents, painterly
> anime matte painting, detailed edges, calm empty center area for a character to stand,
> 2:3 portrait composition

## subject（主体层，纯黑底 → rembg 抠图）

以 3 张官图为形象参考（粉发狐耳、白衣绯袴、金饰雷纹）：

> Full-body anime key-visual illustration of the same character from the reference
> images: a beautiful shrine maiden with very long sakura-pink hair, golden fox ears,
> purple eyes, white and crimson shrine dress with wide flowing detached sleeves,
> purple obi sash, gold earrings and small bell ornaments. She stands gracefully in
> three-quarter view, one hand elegantly raised conjuring a small glowing violet
> electro sakura blossom with tiny lightning sparks, long sleeves and hair flowing.
> Head-to-toe fully visible and centered with clear margins, isolated on a solid pure
> black background, nothing else in the frame, no text, no border. Vertical 2:3
> portrait composition, clean bold contours, vibrant colors, highly detailed anime style.

## lineart（线稿层，零漂移）

不重新生成，由 `subject.png` 经形态学梯度（Max−Min）直接提取，保证与主体严格对位。

## text（文字层，程序排版）

`tools/make_layers.py` + 思源宋体（Noto Serif SC）精确排版：
八重神子 / 鸣神大社·宫司大人 / 大密法·天狐显真 / 杀生樱落，雷光乍现 / No.001·樱


---

## SOURCE · `main:README.md`

<!-- blob: 1e7d4deafcd18c751905c2f83f460aafba49ae77; bytes: 250 -->

# SCZ Game Studio · 停机坪

这里停着一艘还没点火的船。

**状态**：暂停营业（2026-09-06 起）
**重启日期**：暂未知
**期间纪律**：本仓不更新、不写代码、不接新坑——这不是遗忘，是排队。
