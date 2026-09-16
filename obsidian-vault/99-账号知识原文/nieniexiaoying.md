# nieniexiaoying · 全分支详细原文

> 去重后的文本资料；每个 SOURCE 标题保留来源分支和路径。


---

## SOURCE · `main:README.md`

<!-- blob: 2ae56bd7ef613c3a7ab5fc3b4967e8857c4fda0c; bytes: 3187 -->

# 捏捏小鹰 · 软物研究所

一只可以捏的软乎乎小鹰。纯静态，**无构建步骤、无依赖、无后端** —— 整个文件夹直接丢上去就能跑。

按住捏一捏、双指拉长、蹭肚子挠痒、抛起来软软落地；长按会融化打盹闭眼，双击有隐藏小惊喜。9 只小鹰可以换，能生成一张「今日收藏卡」。

---

## 部署到 Cloudflare Pages

### 方式 A：直接上传（最快，不用 git）

1. Cloudflare Dashboard → **Workers & Pages** → **Create** → **Pages** → **Upload assets**
2. 项目名填 `soft-eagle`（或你喜欢的）
3. 把**本文件夹里的所有文件**拖进去 —— 注意是拖 `index.html` 那一层，不要多套一层文件夹
4. **Deploy** → 得到 `https://soft-eagle.pages.dev`

### 方式 B：连 Git 仓库（每次 push 自动部署）

- **Build command**：留空
- **Build output directory**：`soft-eagle`
- Framework preset：**None**

### 方式 C：命令行

```bash
npx wrangler pages deploy . --project-name soft-eagle
```

> 单文件上限 25 MiB（Cloudflare Pages 的硬限制）。这里最大的图 400 KB 左右，离得很远。

---

## 本地预览

双击 `preview.bat`，或者：

```bash
python -m http.server 8080
```

然后打开 <http://localhost:8080/>

> ⚠️ **不能双击 `index.html` 直接打开。** 代码用了 ES module，`file://` 协议下浏览器会以 CORS 为由拦掉模块加载，页面会白屏。必须走 HTTP。
>
> 实在想双击打开，得把 `app.js` / `renderer.js` / `audio.js` / `skins.js` 全部内联进 `index.html` 做成单文件 —— 需要的话说一声。

---

## 文件说明

| 文件 | 作用 |
|---|---|
| `index.html` | 页面结构 |
| `style.css` | 样式（含移动端适配） |
| `app.js` | 弹簧物理、四种玩法、UI、收藏卡 |
| `renderer.js` | WebGL 网格形变渲染器（形变发生在这里） |
| `audio.js` | WebAudio 实时合成音效，**没有任何音频文件** |
| `skins.js` | 自动生成：9 只小鹰的宽高比与眼睛坐标 |
| `assets/` | 9 张立绘 PNG，已裁掉透明边 |
| `favicon.svg` | 站点图标 |
| `_headers` | Cloudflare Pages 缓存策略（其它平台会自动忽略） |
| `preview.bat` | Windows 本地预览 |

所有路径都是**相对路径**，所以放在域名根目录或任意子路径下都能正常工作。

---

## 加姿态 / 换素材

`assets/` 里的图已经裁掉透明边，`skins.js` 里的 `aspect` 和 `eyes` 都是按裁切后的图算的。要加新姿态：

1. 把透明底 PNG 放进 `assets/`
2. 重新跑一遍自动分析（裁边 + 定位瞳孔 + 重新生成 `skins.js`）——
   用 WorkBuddy 技能 `soft-body-toy` 里的 `analyze.py`，**务必人工核对它输出的标记预览图**，眼睛定位错了眨眼就会歪
3. 在 `app.js` 顶部的 `SKINS` 顺序里调整出场次序

## 关于「颜色 / 材质 / 软糯程度」

这些都在「调一调」面板里，存在浏览器 `localStorage`（键名 `eagle-prefs`），不会上传任何数据。

---

素材：英仔爱心社「小鹰」。交互架构参考 [momo-soft-play](https://github.com/estherliu-lab/momo-soft-play)。
