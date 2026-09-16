# notEBooklm-scz · 全分支详细原文

> 去重后的文本资料；每个 SOURCE 标题保留来源分支和路径。


---

## SOURCE · `arena/01a06008-notebooklm-scz:README.md`

<!-- blob: acf065b98ba62e0241ead2a9e7223c735bf9014a; bytes: 2253 -->

# notEBooklm-scz

**NotebookLM 桌面版** —— 给 [notebooklm-py](https://github.com/teng-lin/notebooklm-py) 套了一个聊天界面，不用敲命令。

和你的资料对话、上传文件、一键生成播客／测验／思维导图，全部在图形界面里点。

## 用起来

**双击 `启动.bat`** 就完事了。浏览器会自动打开界面。

第一次用需要先登录一次（只要一次）：

```powershell
.\scripts\nb.ps1 login
```

之后每次都只要双击 `启动.bat`。

> 想放到桌面：右键 `启动.bat` → 发送到 → 桌面快捷方式。

## 界面能做什么

| 区域 | 功能 |
|------|------|
| **左侧** | 笔记本列表、搜索、新建 |
| **中间** | 聊天。回答带引用，可复制、可存为笔记，有推荐追问 |
| **右侧 · 资料** | 加网址／YouTube、上传文件（PDF/Word/音频/图片）、粘贴文字、删除 |
| **右侧 · 生成** | 播客、视频、学习指南、简报、测验、闪卡、思维导图、幻灯片、信息图、博客稿 —— 点一下，完成后直接下载 |
| **右侧 · 笔记** | 查看存下来的笔记 |

## 命令行（可选）

不喜欢界面也可以用命令行，功能更全：

```powershell
.\scripts\nb.ps1 list
.\scripts\nb.ps1 create "我的研究" --use
.\scripts\nb.ps1 source add https://example.com/paper.pdf
.\scripts\nb.ps1 ask "核心论点是什么？"
.\scripts\nb.ps1 generate audio "中文深度对谈"
.\scripts\nb.ps1 download audio -o out\
```

Linux / macOS 用 `./scripts/nb`，参数相同。启动界面用 `./scripts/py app/server.py`。

## 文档

- 📖 [完整使用指南](docs/使用指南.md) —— 登录方式、CLI 全集、Python API、MCP 接入
- 🔧 [Windows 排查](docs/Windows排查.md) —— 装不上、登录失败、乱码等

## 目录

| 路径 | 说明 |
|------|------|
| `启动.bat` | **双击启动图形界面** |
| `app/` | 界面（FastAPI 后端 + 单页前端）|
| `scripts/` | 安装与命令行封装（`.ps1` 给 Windows，无后缀给 Linux/macOS）|
| `examples/` | Python 脚本示例 |
| `out/` | 下载的产物 |

> ⚠️ notebooklm-py 是非官方库，使用 Google 未公开接口，可能随时失效。适合原型、研究与个人项目。


---

## SOURCE · `arena/01a06008-notebooklm-scz:docs/Windows排查.md`

<!-- blob: db0167b6d1a19e58cc3427ec878e42b4f1dd2a0f; bytes: 6937 -->

# Windows 常见问题排查

## 「无法将 .\.venv\Scripts\python.exe 项识别为 cmdlet…」

**原因**：`python -m venv .venv` 没成功，虚拟环境压根没建出来，后续所有命令自然找不到文件。

**先诊断**，在仓库目录跑：

```powershell
python --version
py -3 --version
Get-Command python | Select-Object Source
```

根据结果对号入座：

### 情况 1：敲 `python` 弹出 Microsoft Store（最常见）

Windows 预置了一个「应用执行别名」占位符，它不是真的 Python。

**修法 A（推荐）—— 装真 Python：**
```powershell
winget install Python.Python.3.12
```
装完 **必须重开一个 PowerShell 窗口**（PATH 才会刷新），然后重跑 `.\scripts\setup.ps1`。

**修法 B —— 关掉占位符：**
设置 → 应用 → 高级应用设置 → 应用执行别名 → 把 `python.exe` 和 `python3.exe` 两个开关关掉。

### 情况 2：`python --version` 报「不是内部或外部命令」

没装 Python，或者装了但没加进 PATH。

```powershell
winget install Python.Python.3.12
```
或去 <https://www.python.org/downloads/> 下载，**安装时务必勾选 "Add python.exe to PATH"**。
装完重开 PowerShell 窗口。

### 情况 3：`py -3 --version` 能用，但 `python` 不能

没关系，新版 `setup.ps1` 会自动优先用 `py -3`。直接重跑即可：
```powershell
.\scripts\setup.ps1
```

### 情况 4：Python 版本低于 3.10

`notebooklm-py` 要求 3.10+。装个新的：
```powershell
winget install Python.Python.3.12
```

---

## 「无法加载文件 …scripts\setup.ps1，因为在此系统上禁止运行脚本」

PowerShell 默认执行策略限制。二选一：

```powershell
# 永久放开当前用户（推荐）
Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy RemoteSigned
```

```powershell
# 或者单次绕过，不改系统设置
powershell -ExecutionPolicy Bypass -File .\scripts\setup.ps1
```

---

## venv 建到一半坏了

删掉重来即可，`setup.ps1` 也会自动检测并重建：

```powershell
Remove-Item -Recurse -Force .venv
.\scripts\setup.ps1
```

---

## `notebooklm login` 卡住 / Chromium 下载太慢

首次登录会下载约 170MB 的 Chromium。国内网络可能很慢。绕开它，直接从你已经登录的浏览器读 cookie：

```powershell
.\scripts\nb.ps1 login --browser-cookies edge      # 或 chrome / firefox / brave
```

前提是那个浏览器里已经登录了 <https://notebooklm.google.com>。

多个 Google 账号时指定一个：
```powershell
.\scripts\nb.ps1 login --browser-cookies edge --account you@gmail.com
```

---

## 登录成功但 `auth check --test` 失败

```powershell
.\scripts\nb.ps1 auth check --test --json     # 看详细诊断
.\scripts\nb.ps1 auth refresh                 # 尝试刷新 cookie
.\scripts\nb.ps1 doctor                       # 全面体检
```

还不行就重新登录一次：
```powershell
.\scripts\nb.ps1 auth logout
.\scripts\nb.ps1 login
```

---

## 中文输出乱码

```powershell
chcp 65001
$OutputEncoding = [System.Text.Encoding]::UTF8
```

或者换用 Windows Terminal（默认 UTF-8，不会有这问题）。

---

## 还是不行？

把下面这条命令的完整输出发给我：

```powershell
Write-Host "--- python ---"; python --version 2>&1
Write-Host "--- py -3 ---";  py -3 --version 2>&1
Write-Host "--- where ---";  where.exe python 2>&1
Write-Host "--- venv ---";   Test-Path .\.venv\Scripts\python.exe
Write-Host "--- policy ---"; Get-ExecutionPolicy -List
```

---

## 「表达式或语句中包含意外的标记 }」+ 中文乱码（如 `瀹夎瀹屾垚`）

**原因**：Windows PowerShell 5.1 读取**没有 BOM** 的 UTF-8 文件时，会按系统 ANSI 代码页（简体中文机器上是 GBK）解码。中文字节被错误还原，字符串引号错位，解析器就会在莫名其妙的地方报「缺少右 }」。

**已修复**：仓库里的 `.ps1` 文件现在都带 UTF-8 BOM，并通过 `.gitattributes` 强制以 CRLF 检出。

```powershell
git pull
.\scripts\setup.ps1
```

**如果你自己改了 .ps1 文件又出现乱码**，保存时要选「UTF-8 with BOM」：

- VS Code：右下角点编码 → Save with Encoding → UTF-8 with BOM
- 记事本：另存为 → 编码选「带有 BOM 的 UTF-8」

命令行批量修复：
```powershell
Get-ChildItem scripts\*.ps1 | ForEach-Object {
    $c = Get-Content $_.FullName -Raw -Encoding UTF8
    [System.IO.File]::WriteAllText($_.FullName, $c, (New-Object System.Text.UTF8Encoding $true))
}
```

**根治**：升级到 PowerShell 7（默认按 UTF-8 读取，无需 BOM）：
```powershell
winget install Microsoft.PowerShell
```
之后用 `pwsh` 而不是 `powershell` 启动。

---

## 登录后警告 `Missing required cookies: __Secure-1PSIDTS`

**这多半不是真故障。** `__Secure-1PSIDTS` 是 `__Secure-1PSID` 的「新鲜度伙伴」cookie，
Google 按自己的节奏下发，浏览器登录瞬间可能还没写入。

notebooklm-py 内置了自愈：每次 `fetch_tokens` 都会顺带向
`accounts.google.com/RotateCookies` 发一次请求补上它。所以**直接跑下一条命令通常就好了**：

```powershell
.\scripts\nb.ps1 auth check --test
.\scripts\nb.ps1 list
```

看到 `status: ok` 就没事，前面的警告可以忽略。

### 如果 auth check 仍然失败

按顺序试：

```powershell
# 1. 主动刷新
.\scripts\nb.ps1 auth refresh

# 2. 允许无头浏览器重新认证（会复用已保存的浏览器 profile）
.\scripts\nb.ps1 auth refresh --allow-headless

# 3. 全面体检
.\scripts\nb.ps1 doctor
```

### 还不行就重新登录

在浏览器窗口里，登录完成后**多停留几秒再关窗口**，给 Google 时间下发完整 cookie：

```powershell
.\scripts\nb.ps1 auth logout
.\scripts\nb.ps1 login
```

### 多个 Google 账号

登录时明确指定账号，避免路由到错误的 authuser：

```powershell
.\scripts\nb.ps1 login --browser-cookies edge --account you@gmail.com
```

### 需要长期无人值守

配置计划任务每 15-20 分钟刷新一次，或者改用 master token 方案：

```powershell
.\.venv\Scripts\python.exe -m pip install "notebooklm-py[headless]"
.\scripts\nb.ps1 login --master-token --account you@gmail.com
```
master token 能在 cookie 完全过期后自动重新签发，无需浏览器。

---

## `use` 报错 `No notebook found starting with '标题'`

`use` 只接受**笔记本 ID 的前缀**，不支持按标题匹配。

```powershell
# ❌ 不行
.\scripts\nb.ps1 use 测试

# ✅ 用 ID 前缀（几位就够）
.\scripts\nb.ps1 use a60e4c53

# ✅ 更省事：创建时直接加 --use
.\scripts\nb.ps1 create "测试" --use
```

想按标题查 ID：
```powershell
.\scripts\nb.ps1 list | Select-String "测试"
```

也可以用 `-n` 给单条命令临时指定，不改全局上下文：
```powershell
.\scripts\nb.ps1 ask "总结一下" -n a60e4c53
```


---

## SOURCE · `arena/01a06008-notebooklm-scz:docs/使用指南.md`

<!-- blob: 97a7f25b301ec90e6884148741fbfb147d3fc12c; bytes: 9037 -->

# notebooklm-py 在本仓库的使用指南

[notebooklm-py](https://github.com/teng-lin/notebooklm-py) 是一个非官方的 NotebookLM（现 Gemini Notebook）Python API + CLI + MCP 服务器。本仓库已经把它装好并封装成开箱即用的脚手架。

---

## 0. 你在哪跑？两套脚本

| 环境 | 安装 | CLI | Python |
|------|------|-----|--------|
| **Windows / PowerShell** | `.\scripts\setup.ps1` | `.\scripts\nb.ps1` | `.\scripts\py.ps1` |
| Linux / macOS / 本沙箱 | `./scripts/setup.sh` | `./scripts/nb` | `./scripts/py` |

两套完全等价，下文命令示例以 `./scripts/nb` 写，Windows 换成 `.\scripts\nb.ps1` 即可，参数一模一样。

**在自己的 Windows 电脑上用（推荐）**：有图形界面，登录最简单，见 §1-W / §2-W。
**在这个云端沙箱里用**：无图形界面，登录要导入 cookie，见 §2-L。

---

## 1-W. Windows 安装

先克隆仓库，然后在 PowerShell 里：

```powershell
cd notEBooklm-scz
.\scripts\setup.ps1
```

会建 `.venv` 并装好 `notebooklm-py[browser,cookies]`。当前版本 **0.8.1**。
认证数据存在仓库内 `.notebooklm\`（已 gitignore），不污染家目录。

脚本会自动查找可用的 Python（优先 `py -3`，其次 `python`），并在每一步失败时给出明确提示。

**常见问题速查：**

| 报错 | 解法 |
|------|------|
| 禁止运行脚本 | `Set-ExecutionPolicy -Scope CurrentUser RemoteSigned` |
| 找不到 python / 敲 python 弹出应用商店 | `winget install Python.Python.3.12`，**装完重开 PowerShell 窗口** |
| 找不到 `.venv\Scripts\python.exe` | venv 没建成，见下方排查文档 |

📖 详细排查见 **[docs/Windows排查.md](Windows排查.md)**

---

## 2-W. Windows 登录（简单版）

Windows 有图形界面，直接浏览器登录就行：

```powershell
.\scripts\nb.ps1 login              # 弹出浏览器，Google 登录，自动保存
.\scripts\nb.ps1 auth check --test  # 期望看到 status: ok
.\scripts\nb.ps1 list               # 列出你的笔记本
```

首次运行会自动下载 Chromium（约 170 MB）。

嫌下载慢？直接从已登录的 Edge/Chrome 读 cookie，不用 Playwright：

```powershell
.\scripts\nb.ps1 login --browser-cookies edge     # 或 chrome
```

Cookie 过期：`.\scripts\nb.ps1 auth refresh`

---

## 2-L. 在这个云端沙箱里登录（cookie 导入）

沙箱**没有图形界面**，跑不了 `notebooklm login` 的浏览器弹窗，
要用「本地导出 cookie → 导入沙箱」的方式。

### 步骤 A：在你 Windows 电脑上导出

PowerShell，二选一：

**方式 1（推荐）—— 用 CLI 从已登录浏览器抓：**

```powershell
pip install "notebooklm-py[cookies]"
notebooklm login --browser-cookies edge      # 或 chrome
# 查看生成的 storage_state.json，复制全部内容：
Get-Content "$env:USERPROFILE\.notebooklm\profiles\default\storage_state.json"
```

复制到剪贴板更方便：
```powershell
Get-Content "$env:USERPROFILE\.notebooklm\profiles\default\storage_state.json" | Set-Clipboard
```

**方式 2 —— 浏览器扩展导出：**

装 "Cookie-Editor" / "EditThisCookie"，在 `notebooklm.google.com` 页面
**Export → Export as JSON**。必须包含 `SID` 和 `__Secure-1PSIDTS`。

### 步骤 B：导入沙箱

直接在对话里把 JSON 发给我，我帮你写进去并验证。或者自己来：

```bash
./scripts/nb auth import-cookies cookies.json
./scripts/nb auth check --test          # 期望 status: ok
rm cookies.json                          # 用完删掉
```

> ⚠️ 安全提醒：这些 cookie 等同于你的 Google 登录态。只放在你信任的环境。
> 想撤销随时去 Google 账号「安全性 → 你的设备」登出所有会话。
> `cookies.json` / `.notebooklm/` 都在 `.gitignore` 里，不会提交到 GitHub。

想长期无人值守，可以研究上游的 **master token** 方案（`login --master-token`），
它能按需自动重新签发 cookie，不需要浏览器。

---

## 3. CLI 用法

Linux/macOS 用 `./scripts/nb`，Windows 用 `.\scripts\nb.ps1`，参数完全相同。

```bash
./scripts/nb list                                   # 列出所有笔记本
./scripts/nb create "我的研究" --use                 # 新建并直接设为当前笔记本（推荐）
./scripts/nb use a60e4c53                           # 切换当前笔记本（注意：只认 ID 前缀，不认标题）
./scripts/nb status                                 # 看当前上下文

# 加资料
./scripts/nb source add https://example.com/paper.pdf
./scripts/nb source add https://youtube.com/watch?v=xxx
./scripts/nb source add ./本地文件.pdf
./scripts/nb source add-research "2026 年 AI Agent 进展" --mode deep   # 深度联网研究并自动导入
./scripts/nb source list

# 提问（带引用的、基于你资料的回答）
./scripts/nb ask "这些资料的核心论点是什么？"
./scripts/nb ask "总结成 5 条要点" --json
./scripts/nb ask "帮我列个大纲" --save-as-note

# 生成内容（自然语言描述即可）
./scripts/nb generate audio "中文深度对谈，重点讲第三章"
./scripts/nb generate video "给小白看的解释视频"
./scripts/nb generate report --format study-guide
./scripts/nb generate quiz "考察核心术语"
./scripts/nb generate flashcards
./scripts/nb generate mind-map
./scripts/nb generate slide-deck

# 下载产物到本地 out/
./scripts/nb download audio -o out/
./scripts/nb download report --all -o out/
./scripts/nb download mind-map -o out/      # 导出成 JSON
./scripts/nb download quiz -o out/ --format markdown
```

完整命令：`./scripts/nb --help`，或看上游 [CLI Reference](https://github.com/teng-lin/notebooklm-py/blob/main/docs/cli-reference.md)。

---

## 4. Python 用法

API 是 **异步** 的。仓库里有两个可直接跑的例子：

```bash
./scripts/py examples/quickstart.py         # 建笔记本 → 加资料 → 提问 → 存笔记
./scripts/py examples/research_pipeline.py "标题" https://url1 https://url2
```

Windows：
```powershell
.\scripts\py.ps1 examples\quickstart.py
.\scripts\py.ps1 examples\research_pipeline.py "标题" https://url1 https://url2
```

`research_pipeline.py` 会跑完整流水线：导入资料 → 生成中文播客 MP3 → 生成学习指南 Markdown → 下载到 `out/`。

最小骨架：

```python
import asyncio
from notebooklm import NotebookLMClient

async def main():
    async with NotebookLMClient.from_storage() as client:
        nb = await client.notebooks.create("标题")
        src = await client.sources.add_url(nb.id, "https://example.com")
        await client.sources.wait_until_ready(nb.id, src.id)
        result = await client.chat.ask(nb.id, "这讲了什么？")
        print(result.answer)

asyncio.run(main())
```

常用命名空间：`client.notebooks` / `.sources` / `.chat` / `.notes` / `.artifacts` /
`.labels` / `.research` / `.sharing` / `.collections` / `.mind_maps`。

---

## 5. MCP：让 AI agent 直接驱动 NotebookLM

装好 MCP 依赖后可以把它接到 Claude Code / Codex：

```bash
.venv/bin/pip install "notebooklm-py[mcp]"
```

Claude Code 配置（`~/.claude/mcp.json` 或项目内 `.mcp.json`）：

```json
{
  "mcpServers": {
    "notebooklm": {
      "command": "/绝对路径/notEBooklm-scz/.venv/bin/python",
      "args": ["-m", "notebooklm.mcp"],
      "env": {
        "NOTEBOOKLM_HOME": "/绝对路径/notEBooklm-scz/.notebooklm"
      }
    }
  }
}
```

之后 agent 就能直接调用「加资料 / 提问 / 生成播客 / 下载产物」等工具。

---

## 6. 目录结构

```
scripts/setup.sh    一键安装        (Linux/macOS)
scripts/nb          CLI 封装        (Linux/macOS)
scripts/py          Python 封装     (Linux/macOS)
scripts/setup.ps1   一键安装        (Windows)
scripts/nb.ps1      CLI 封装        (Windows)
scripts/py.ps1      Python 封装     (Windows)
examples/           可直接运行的示例
out/                产物输出目录（gitignore）
.notebooklm/        认证与配置（gitignore）
```

---

## 7. 几个好用的玩法

- **零 token 研究外包**：把 30 篇文档丢进笔记本，让 Gemini 做重活，你的 agent 只做最后润色。
- **给 agent 加持久记忆**：维持一个「主脑」笔记本，每次会话结束把决策写成 note，下次开场先 `ask` 一遍。
- **知识蒸馏成技能**：`source add-research ... --mode deep` 出结果后，压缩进一个 `SKILL.md`，构建一次永久复用。
- **把资料一鱼多吃**：同一批来源同时出播客、视频、幻灯片、测验、闪卡。
- **批量导出**：网页 UI 做不到的 —— 思维导图 JSON、闪卡导入 Anki、数据表 CSV，全部脚本化。

---

## 8. 注意事项

- 这是**非官方**库，用的是 Google 未公开接口，可能随时变动；适合原型 / 研究 / 个人项目。
- 有速率限制，批量操作时留点间隔。
- 单个笔记本的资料数量上限取决于你的 Google 账号等级。


---

## SOURCE · `arena/01a06008-notebooklm-scz:requirements.txt`

<!-- blob: 013cdf4f9981653c4053228d30ae175e75a847da; bytes: 84 -->

notebooklm-py>=0.8.1
fastapi>=0.115
uvicorn[standard]>=0.30
python-multipart>=0.0.9


---

## SOURCE · `arena/01a061fb-notebooklm-scz:AGENTS.md`

<!-- blob: 88c64f97adaf12969f262aeb7cb92e4fa882fdc6; bytes: 2405 -->

# Arena Agent NotebookLM 集成指南

本仓库同时支持桌面端和 Arena Agent。桌面端入口仍然是 `启动.bat`；Agent 通过项目根目录的 `.mcp.json` 使用 NotebookLM MCP。

## Agent 使用原则

- NotebookLM 只作为来源 grounded 的研究和内容生成服务；修改代码前必须回到真实源码、测试和 Git diff 做核验。
- 优先复用已有 Notebook；只有在用户明确要求或没有合适 Notebook 时才创建新的 Notebook。
- 添加来源后先等待来源进入 ready 状态，再提问或生成产物。
- 多轮问题复用同一个 `session_id`，生成音频、视频、报告等长任务使用 `task_id` 轮询，不要阻塞式反复发起任务。
- 需要引用时使用结构化引用或 footnotes；最终写入仓库的研究文档必须注明来源和生成时间。
- 上传仓库内容前排除 `.git`、`.venv`、`.notebooklm`、`.env`、密钥、cookie、构建目录、依赖目录和个人数据。
- 不得将 Cookie、master token、密码或任何认证文件提交到 Git。认证只通过受保护的运行环境提供。
- 不自动下载或绕过受版权保护内容、付费墙或访问控制；只处理用户有权使用的资料。
- NotebookLM 产物是 AI 生成内容，不能未经核验直接作为事实或生产代码提交。

## 推荐工作流

1. 使用 `server_info` / `get_health` 检查 MCP 和认证状态。
2. 使用 `notebook_list` 查找已有 Notebook；必要时创建或选择 Notebook。
3. 使用 `source_add` 导入明确允许使用的 URL、文本或文件。
4. 使用 `source_wait` 确认来源可查询。
5. 使用 `chat_ask` 提出具体、结构化、限定来源的问题，并保存 `conversation_id`。
6. 对不完整答案继续追问，要求引用和明确区分资料事实与推断。
7. 生成产物时调用 `studio_generate`，随后用 `studio_status` 轮询，最后调用 `studio_download`。
8. 将结果写入 `docs/` 或 `out/` 前检查敏感信息、来源、文件大小和格式。
9. 运行测试并检查 `git diff`，再决定是否提交当前工作分支。

## 本地启动

```bash
./scripts/setup.sh
./scripts/agent-mcp
```

Arena 或支持项目级 MCP 的 Agent 会读取 `.mcp.json`。认证数据默认放在 `.notebooklm/`，该目录已被 `.gitignore` 忽略；生产环境应优先将 `NOTEBOOKLM_HOME` 指向受保护的持久化 Secret 路径。


---

## SOURCE · `arena/01a061fb-notebooklm-scz:README.md`

<!-- blob: 1a1654c2a6fa1f1cfc4e6ec141ea42e3de04efd2; bytes: 2364 -->

# notEBooklm-scz

**NotebookLM 桌面版** —— 给 [notebooklm-py](https://github.com/teng-lin/notebooklm-py) 套了一个聊天界面，不用敲命令。

和你的资料对话、上传文件、一键生成播客／测验／思维导图，全部在图形界面里点。

## 用起来

**双击 `启动.bat`** 就完事了。浏览器会自动打开界面。

第一次用需要先登录一次（只要一次）：

```powershell
.\scripts\nb.ps1 login
```

之后每次都只要双击 `启动.bat`。

> 想放到桌面：右键 `启动.bat` → 发送到 → 桌面快捷方式。

## 界面能做什么

| 区域 | 功能 |
|------|------|
| **左侧** | 笔记本列表、搜索、新建 |
| **中间** | 聊天。回答带引用，可复制、可存为笔记，有推荐追问 |
| **右侧 · 资料** | 加网址／YouTube、上传文件（PDF/Word/音频/图片）、粘贴文字、删除 |
| **右侧 · 生成** | 播客、视频、学习指南、简报、测验、闪卡、思维导图、幻灯片、信息图、博客稿 —— 点一下，完成后直接下载 |
| **右侧 · 笔记** | 查看存下来的笔记 |

## 命令行（可选）

不喜欢界面也可以用命令行，功能更全：

```powershell
.\scripts\nb.ps1 list
.\scripts\nb.ps1 create "我的研究" --use
.\scripts\nb.ps1 source add https://example.com/paper.pdf
.\scripts\nb.ps1 ask "核心论点是什么？"
.\scripts\nb.ps1 generate audio "中文深度对谈"
.\scripts\nb.ps1 download audio -o out\
```

Linux / macOS 用 `./scripts/nb`，参数相同。启动界面用 `./scripts/py app/server.py`。

## 文档

- 📖 [完整使用指南](docs/使用指南.md) —— 登录方式、CLI 全集、Python API、MCP 接入
- 🤖 [Arena Agent 接入指南](docs/arena-agent.md) —— 让 Agent 在当前工作分支调用 NotebookLM
- 🔧 [Windows 排查](docs/Windows排查.md) —— 装不上、登录失败、乱码等

## 目录

| 路径 | 说明 |
|------|------|
| `启动.bat` | **双击启动图形界面** |
| `app/` | 界面（FastAPI 后端 + 单页前端）|
| `scripts/` | 安装与命令行封装（`.ps1` 给 Windows，无后缀给 Linux/macOS）|
| `examples/` | Python 脚本示例 |
| `out/` | 下载的产物 |

> ⚠️ notebooklm-py 是非官方库，使用 Google 未公开接口，可能随时失效。适合原型、研究与个人项目。


---

## SOURCE · `arena/01a061fb-notebooklm-scz:docs/arena-agent.md`

<!-- blob: 74ae884aa376e93123b35dc361caf095a4349d18; bytes: 2320 -->

# Arena Agent × NotebookLM

本仓库的桌面应用和 Agent 集成共用 `notebooklm-py`，但入口相互独立：

```text
Arena Agent
    ↓ 项目级 MCP（.mcp.json）
./scripts/agent-mcp
    ↓
notebooklm-py MCP
    ↓
Google NotebookLM
```

## 安装

```bash
./scripts/setup.sh
```

安装脚本会创建 `.venv`，并安装 NotebookLM API、FastAPI 和 MCP 依赖。启动命令为：

```bash
./scripts/agent-mcp
```

项目级配置已经写入 `.mcp.json`，不包含密钥、不包含绝对路径，也不会改变桌面端入口。

## 认证

首次运行需要为 NotebookLM 提供登录态。认证文件默认位于 `.notebooklm/`，该目录不会提交到 Git。

在无图形界面的 Arena 环境中，推荐在受信任的本地环境完成登录或导入认证状态，然后通过受保护的持久化 Secret 路径提供 `NOTEBOOKLM_HOME`。不要把 Cookie、master token 或密码放进 Issue、PR、聊天消息或仓库。

```bash
NOTEBOOKLM_HOME=/protected/notebooklm ./scripts/agent-mcp
```

具体认证方式和环境限制见 [使用指南](使用指南.md) 的 Windows / 云端登录章节。

## 工具工作流

### 资料问答

```text
server_info / get_health
    → notebook_list
    → source_add
    → source_wait
    → chat_ask
    → 使用 conversation_id 继续追问
```

### 生成产物

```text
studio_generate
    → studio_status（使用 task_id 轮询）
    → studio_download
```

长任务不得通过重复调用 `studio_generate` 轮询，否则会创建重复产物并浪费 NotebookLM 配额。

## 代码仓库安全边界

上传仓库内容前只选择必要的文档和源码。明确排除：

- `.git/`、`.venv/`、`.notebooklm/`、`.env`；
- cookies、token、私钥和配置密钥；
- 依赖目录和构建目录；
- 用户个人文件和不必要的大型二进制文件。

NotebookLM 结果必须由 Agent 回看源码、测试和 Git diff 后才能用于代码修改。生成的报告需要标注来源和生成时间；生成的音频、视频等大型文件默认放在 `out/`，不要直接加入 Git。

## 当前阶段范围

本阶段只提供安全的项目级 MCP 接入和 Agent 工作规范，保留现有桌面端。暂不接入 Z-Library、付费墙绕过或任何需要代替用户突破访问控制的流程。


---

## SOURCE · `arena/01a061fb-notebooklm-scz:docs/使用指南.md`

<!-- blob: c3c6de99e65029caf33f9b5070f2f9d26cc8eb7b; bytes: 9237 -->

# notebooklm-py 在本仓库的使用指南

[notebooklm-py](https://github.com/teng-lin/notebooklm-py) 是一个非官方的 NotebookLM（现 Gemini Notebook）Python API + CLI + MCP 服务器。本仓库已经把它装好并封装成开箱即用的脚手架。

---

## 0. 你在哪跑？两套脚本

| 环境 | 安装 | CLI | Python |
|------|------|-----|--------|
| **Windows / PowerShell** | `.\scripts\setup.ps1` | `.\scripts\nb.ps1` | `.\scripts\py.ps1` |
| Linux / macOS / 本沙箱 | `./scripts/setup.sh` | `./scripts/nb` | `./scripts/py` |

两套完全等价，下文命令示例以 `./scripts/nb` 写，Windows 换成 `.\scripts\nb.ps1` 即可，参数一模一样。

**在自己的 Windows 电脑上用（推荐）**：有图形界面，登录最简单，见 §1-W / §2-W。
**在这个云端沙箱里用**：无图形界面，登录要导入 cookie，见 §2-L。

---

## 1-W. Windows 安装

先克隆仓库，然后在 PowerShell 里：

```powershell
cd notEBooklm-scz
.\scripts\setup.ps1
```

会建 `.venv` 并装好 `notebooklm-py[browser,cookies]`。当前版本 **0.8.1**。
认证数据存在仓库内 `.notebooklm\`（已 gitignore），不污染家目录。

脚本会自动查找可用的 Python（优先 `py -3`，其次 `python`），并在每一步失败时给出明确提示。

**常见问题速查：**

| 报错 | 解法 |
|------|------|
| 禁止运行脚本 | `Set-ExecutionPolicy -Scope CurrentUser RemoteSigned` |
| 找不到 python / 敲 python 弹出应用商店 | `winget install Python.Python.3.12`，**装完重开 PowerShell 窗口** |
| 找不到 `.venv\Scripts\python.exe` | venv 没建成，见下方排查文档 |

📖 详细排查见 **[docs/Windows排查.md](Windows排查.md)**

---

## 2-W. Windows 登录（简单版）

Windows 有图形界面，直接浏览器登录就行：

```powershell
.\scripts\nb.ps1 login              # 弹出浏览器，Google 登录，自动保存
.\scripts\nb.ps1 auth check --test  # 期望看到 status: ok
.\scripts\nb.ps1 list               # 列出你的笔记本
```

首次运行会自动下载 Chromium（约 170 MB）。

嫌下载慢？直接从已登录的 Edge/Chrome 读 cookie，不用 Playwright：

```powershell
.\scripts\nb.ps1 login --browser-cookies edge     # 或 chrome
```

Cookie 过期：`.\scripts\nb.ps1 auth refresh`

---

## 2-L. 在这个云端沙箱里登录（cookie 导入）

沙箱**没有图形界面**，跑不了 `notebooklm login` 的浏览器弹窗，
要用「本地导出 cookie → 导入沙箱」的方式。

### 步骤 A：在你 Windows 电脑上导出

PowerShell，二选一：

**方式 1（推荐）—— 用 CLI 从已登录浏览器抓：**

```powershell
pip install "notebooklm-py[cookies]"
notebooklm login --browser-cookies edge      # 或 chrome
# 查看生成的 storage_state.json，复制全部内容：
Get-Content "$env:USERPROFILE\.notebooklm\profiles\default\storage_state.json"
```

复制到剪贴板更方便：
```powershell
Get-Content "$env:USERPROFILE\.notebooklm\profiles\default\storage_state.json" | Set-Clipboard
```

**方式 2 —— 浏览器扩展导出：**

装 "Cookie-Editor" / "EditThisCookie"，在 `notebooklm.google.com` 页面
**Export → Export as JSON**。必须包含 `SID` 和 `__Secure-1PSIDTS`。

### 步骤 B：导入沙箱

直接在对话里把 JSON 发给我，我帮你写进去并验证。或者自己来：

```bash
./scripts/nb auth import-cookies cookies.json
./scripts/nb auth check --test          # 期望 status: ok
rm cookies.json                          # 用完删掉
```

> ⚠️ 安全提醒：这些 cookie 等同于你的 Google 登录态。只放在你信任的环境。
> 想撤销随时去 Google 账号「安全性 → 你的设备」登出所有会话。
> `cookies.json` / `.notebooklm/` 都在 `.gitignore` 里，不会提交到 GitHub。

想长期无人值守，可以研究上游的 **master token** 方案（`login --master-token`），
它能按需自动重新签发 cookie，不需要浏览器。

---

## 3. CLI 用法

Linux/macOS 用 `./scripts/nb`，Windows 用 `.\scripts\nb.ps1`，参数完全相同。

```bash
./scripts/nb list                                   # 列出所有笔记本
./scripts/nb create "我的研究" --use                 # 新建并直接设为当前笔记本（推荐）
./scripts/nb use a60e4c53                           # 切换当前笔记本（注意：只认 ID 前缀，不认标题）
./scripts/nb status                                 # 看当前上下文

# 加资料
./scripts/nb source add https://example.com/paper.pdf
./scripts/nb source add https://youtube.com/watch?v=xxx
./scripts/nb source add ./本地文件.pdf
./scripts/nb source add-research "2026 年 AI Agent 进展" --mode deep   # 深度联网研究并自动导入
./scripts/nb source list

# 提问（带引用的、基于你资料的回答）
./scripts/nb ask "这些资料的核心论点是什么？"
./scripts/nb ask "总结成 5 条要点" --json
./scripts/nb ask "帮我列个大纲" --save-as-note

# 生成内容（自然语言描述即可）
./scripts/nb generate audio "中文深度对谈，重点讲第三章"
./scripts/nb generate video "给小白看的解释视频"
./scripts/nb generate report --format study-guide
./scripts/nb generate quiz "考察核心术语"
./scripts/nb generate flashcards
./scripts/nb generate mind-map
./scripts/nb generate slide-deck

# 下载产物到本地 out/
./scripts/nb download audio -o out/
./scripts/nb download report --all -o out/
./scripts/nb download mind-map -o out/      # 导出成 JSON
./scripts/nb download quiz -o out/ --format markdown
```

完整命令：`./scripts/nb --help`，或看上游 [CLI Reference](https://github.com/teng-lin/notebooklm-py/blob/main/docs/cli-reference.md)。

---

## 4. Python 用法

API 是 **异步** 的。仓库里有两个可直接跑的例子：

```bash
./scripts/py examples/quickstart.py         # 建笔记本 → 加资料 → 提问 → 存笔记
./scripts/py examples/research_pipeline.py "标题" https://url1 https://url2
```

Windows：
```powershell
.\scripts\py.ps1 examples\quickstart.py
.\scripts\py.ps1 examples\research_pipeline.py "标题" https://url1 https://url2
```

`research_pipeline.py` 会跑完整流水线：导入资料 → 生成中文播客 MP3 → 生成学习指南 Markdown → 下载到 `out/`。

最小骨架：

```python
import asyncio
from notebooklm import NotebookLMClient

async def main():
    async with NotebookLMClient.from_storage() as client:
        nb = await client.notebooks.create("标题")
        src = await client.sources.add_url(nb.id, "https://example.com")
        await client.sources.wait_until_ready(nb.id, src.id)
        result = await client.chat.ask(nb.id, "这讲了什么？")
        print(result.answer)

asyncio.run(main())
```

常用命名空间：`client.notebooks` / `.sources` / `.chat` / `.notes` / `.artifacts` /
`.labels` / `.research` / `.sharing` / `.collections` / `.mind_maps`。

---

## 5. MCP：让 AI agent 直接驱动 NotebookLM

安装脚本已经包含 MCP 依赖，可以把它接到支持项目级 MCP 的 Claude Code / Codex / Arena Agent：

```bash
./scripts/setup.sh
./scripts/agent-mcp
```

项目根目录的 `.mcp.json` 已经配置好 `notebooklm` 服务；Agent 会通过 `scripts/agent-mcp` 启动，不需要复制桌面端代码。

Claude Code 配置（`~/.claude/mcp.json` 或项目内 `.mcp.json`）：

```json
{
  "mcpServers": {
    "notebooklm": {
      "command": "/绝对路径/notEBooklm-scz/.venv/bin/python",
      "args": ["-m", "notebooklm.mcp"],
      "env": {
        "NOTEBOOKLM_HOME": "/绝对路径/notEBooklm-scz/.notebooklm"
      }
    }
  }
}
```

之后 agent 就能直接调用「加资料 / 提问 / 生成播客 / 下载产物」等工具。

---

## 6. 目录结构

```
scripts/setup.sh    一键安装        (Linux/macOS)
scripts/nb          CLI 封装        (Linux/macOS)
scripts/py          Python 封装     (Linux/macOS)
scripts/setup.ps1   一键安装        (Windows)
scripts/nb.ps1      CLI 封装        (Windows)
scripts/py.ps1      Python 封装     (Windows)
examples/           可直接运行的示例
out/                产物输出目录（gitignore）
.notebooklm/        认证与配置（gitignore）
```

---

## 7. 几个好用的玩法

- **零 token 研究外包**：把 30 篇文档丢进笔记本，让 Gemini 做重活，你的 agent 只做最后润色。
- **给 agent 加持久记忆**：维持一个「主脑」笔记本，每次会话结束把决策写成 note，下次开场先 `ask` 一遍。
- **知识蒸馏成技能**：`source add-research ... --mode deep` 出结果后，压缩进一个 `SKILL.md`，构建一次永久复用。
- **把资料一鱼多吃**：同一批来源同时出播客、视频、幻灯片、测验、闪卡。
- **批量导出**：网页 UI 做不到的 —— 思维导图 JSON、闪卡导入 Anki、数据表 CSV，全部脚本化。

---

## 8. 注意事项

- 这是**非官方**库，用的是 Google 未公开接口，可能随时变动；适合原型 / 研究 / 个人项目。
- 有速率限制，批量操作时留点间隔。
- 单个笔记本的资料数量上限取决于你的 Google 账号等级。


---

## SOURCE · `arena/01a061fb-notebooklm-scz:requirements.txt`

<!-- blob: 8cde88b092877be61a225b7c1c679385b41c8a8f; bytes: 89 -->

notebooklm-py[mcp]>=0.8.1
fastapi>=0.115
uvicorn[standard]>=0.30
python-multipart>=0.0.9


---

## SOURCE · `arena/01a06208-notebooklm-scz:AGENTS.md`

<!-- blob: ce2b867bd5f02b385083be9ff1dc5c0ddd55f90a; bytes: 12228 -->

# AGENTS.md —— 在本仓库调用 NotebookLM 的行为契约

给在本仓库工作的 AI Agent（Arena / Claude Code / Codex）。**先读完再动手。**

## 0. 三十秒背景

- 底座是 [notebooklm-py](https://github.com/teng-lin/notebooklm-py) v0.8.1，**唯一**被采纳的实现。
  为什么不用别的，见 [docs/调研/01-生态分析.md](docs/调研/01-生态分析.md)。
- 它逆向的是 Google 未公开接口（`batchexecute` RPC）。**Google 随时可能改，随时可能坏。**
- **Arena 沙箱当前打不通 Google**（TLS 层被切断，实测见
  [docs/调研/02-环境实测.md](docs/调研/02-环境实测.md)）。所以有两条路线，见 §2。

## 1. 动手之前：先体检

```bash
./scripts/doctor.sh --json
```

它会一次说清三件事：装没装好 / 有没有凭据 / 能不能连到 Google。
**不要跳过这一步** —— NotebookLM 的失败 99% 落在这三类里，而修法完全不同。

体检里的 `auth_live` 一项对应上游 SKILL.md 的双条件校验：
`auth check --test --json` 必须同时满足 `status == "ok"` **且** `checks.token_fetch == true`。
裸 `auth check --json` 只证明文件能解析，是**假阳性陷阱**。

## 2. 两条路线，按体检结果选

| `egress_google` | 走哪条 | 怎么做 |
|---|---|---|
| ✅ true | **路线 A：直连** | 直接 `tools/nbjob.py execute`，或 `./scripts/nb …` |
| ❌ false | **路线 B：工单中继** | 写工单到 `jobs/pending/`，push，等 worker 回写 `jobs/done/` |

**不管哪条路线，Agent 侧的动作是一样的：写工单。** 区别只在于谁来执行。
所以 Agent 不需要判断自己在哪条路线上 —— 写完工单，能直连就直连，不能就交出去。

在 Google 不可达时，你能做的离线自证有三条：

```bash
python3 tools/nbjob.py plan jobs/pending/<id>.job.json    # 不碰网络，只打印将执行的命令
python3 tools/nbjob.py validate jobs/pending/<id>.job.json # 只校验工单合法性
python3 tests/run_tests.py                                # 离线回归套件，86 条断言
```

`ship --dry-run` 也不碰网络（只判定产物该走 Git 还是 Release），但它要的是
`execute` 产出的 result 文件，所以在完全跑不通的环境里用不上。

### 2.1 改过 `tools/nbjob.py` 之后必须跑回归套件

```bash
python3 tests/run_tests.py
```

它把仓库拷进临时目录，用 `tests/mock_nb.sh` 冒充 `scripts/nb`，把十种 kind 的
`validate → plan → execute → ship` 全链路跑一遍，**完全离线、不需要凭据**。

为什么这个套件值得存在：`download` 步骤曾漏设 `jq_path`，把整个 download 信封
dict 存进 `captured.artifact_file`，`ship` 拿到后 `Path(dict)` 直接 TypeError。
这个 bug 潜伏了好几轮，因为当时的验证用的是 `/tmp` 里的一次性 mock，它的
download 分支只 echo 了裸字符串 `downloaded`（不是 JSON），形状错误被完全掩盖。

所以 `mock_nb.sh` 的每个分支都照抄上游 0.8.2 源码里的信封构造，并在文件头
标了出处行号。**上游升级后若某条断言变红，先对照那些行号判断是 mock 该更新
还是代码该改** —— 不要为了让测试变绿而直接放宽断言。

套件里还包含四条针对已知回归点的断言，别删：
`captured.artifact_file` 必须是 str（上面那个 bug）、
`artifact wait` 返回 exit 2 必须判失败且不执行下载（退出码契约）、
quiz 的 prompt 必须真的出现在 `generate quiz` 命令里（`prompt_mode` 回归）、
每条 source 的声明 `type` 必须真的传成 `--type`（工单字段漏传给 CLI）。

这四条都曾经真的坏过，而且都是"命令照样跑、退出码照样 0、产物看着也正常"
那一类 —— 只有断言到命令文本本身才拦得住。

### 2.2 升级 CLI 之后必须跑契约检查

```bash
python3 tests/check_cli_contract.py     # 需要装好的 CLI；没装会明确跳过，不假装通过
```

`KINDS` 表里每一项（flag 名、枚举值、有没有 `--language`、prompt 走位置参数还是
选项）都是照着某个版本的 CLI 手工填的。`requirements.txt` 钉 `>=0.8.1,<0.9`，
所以 0.8.x 一升级这张表就可能悄悄过期。

它和 §2.1 的分工：`run_tests.py` 离线、用 mock，验的是**我自己的执行逻辑**；
本脚本读真实 `--help`，验的是**我的假设与上游是否还吻合**。两个都要跑。

五组核对：option 名对得上真实 flag、枚举值逐字一致、`has_language` 与上游
`--language` 的有无一致、`prompt_mode` 与 Usage 行的位置参数一致、
`SOURCE_TYPES` 与 `source add --type` 一致。

第四组是重点，因为它的失败最隐蔽：`quiz.prompt_mode` 曾被写成 `"none"`，
而 `generate quiz` 的 Usage 行是 `[OPTIONS] [DESCRIPTION]` —— validate 全绿、
命令照跑、退出码 0、产物也出来了，只是用户的 prompt 从未到达 CLI。
本脚本会直接报出 `Usage 行里**有** DESCRIPTION，prompt 会被静默丢弃`。

红了之后的判断依据：**上游真的改了** → 更新 `KINDS` 表并同步
`docs/arena-agent.md` §8；**上游没改而这里红了** → 说明表本来就填错了。
不要因为想让它变绿就放宽断言。

## 3. 硬规矩

### 3.1 凭据

- `storage_state.json` / `master_token.json` / cookie / token / 密码 —— **永不进 Git、永不进日志、
  永不写进 Issue/PR/聊天/代码**。`.gitignore` 已覆盖，但别依赖它，自己也要守。
- 注入只走 `./scripts/inject-token.sh`（落盘 0600）。**不要**手写 `echo > master_token.json`。
- master token 是**账号级**凭据，改密码不能撤销它，只能显式 revoke。建议专用小号。
- 用内联 `NOTEBOOKLM_MASTER_TOKEN_JSON` 之后**必须 `unset`** —— 环境变量会被子进程继承，文件不会。

### 3.2 ID-pinned，绝不依赖隐式上下文

每一步都把返回的 id 显式传给下一步（`-n <notebook>` / `-a <artifact>`）。
**绝不**用 `notebooklm use` 然后指望后续命令记住 —— 并行 Agent 会互相覆盖 `context.json`，
沙箱重置后上下文也会丢。`tools/nbjob.py` 已经强制这么做，别绕开它自己拼命令。

### 3.3 不要对着没就绪的来源提问

`source add` 的返回里**没有** `status` 字段。必须 `source wait`（或 `source list --json`
看 `status == "ready"`，注意是小写）之后才能提问或生成。

### 3.4 长任务不要阻塞式轮询

| 操作 | 典型耗时 | 建议 timeout |
|---|---|---|
| 资料索引 | 30s–10min | 600s |
| 报告 / 数据表 | 5–15min | 900s |
| 测验 / 闪卡 | 5–15min | 900s |
| 播客 | 10–20min | 1200s |
| 视频 | 15–45min | 2700s |

**任务失败时不要重试 `generate`** —— 那会创建重复产物、白烧配额。先
`artifact list -n <nb> --json` 看那个 id 的真实状态。确认是产物本身失败后，
用 `retry_artifact` 工单**原地重试**（ARTIFACT_ID 不变，`poll`/`wait` 继续有效），
不要重发 `generate`。样例见 `jobs/samples/retry-demo.job.json`。

### 3.5 限流分级（上游记载）

- **可靠**：notebooks / sources / chat / mind-map / report / data-table
- **易被限流**：audio / video / quiz / flashcards / infographic / slide-deck

被限流（`GENERATION_FAILED` / "No result found for RPC ID"）就等 5–10 分钟，别硬重试。

### 3.6 破坏性操作必须先问

`delete` / `source delete` / `source clean` / `note delete` / `artifact delete` /
`label delete` / `share remove` / `auth logout` / `profile delete` / `ask --new`
—— 先征得同意，再带 `--yes`。多数破坏性命令即使加 `--json` 也要求显式 `--yes`，
否则返回 `CONFIRM_REQUIRED`。

### 3.7 上传仓库内容前，先筛

明确排除：`.git/`、`.venv/`、`.notebooklm/`、`out/`、`.env`、密钥、cookie、
构建与依赖目录、个人数据、无关的大二进制。只传必要的文档和源码。

### 3.8 产物是 AI 生成内容

NotebookLM 的回答和报告**不能未经核验直接当事实或生产代码提交**。
写进仓库的研究报告必须标注来源与生成时间（`examples/research_report.py` 会顺带写一份
`*.provenance.md`）。改代码之前，回到真实源码、测试和 `git diff` 做核验。

## 4. 推荐工作流

1. `./scripts/doctor.sh --json` —— 确认环境。
2. 写工单到 `jobs/pending/<id>.job.json`，格式见 [jobs/README.md](jobs/README.md)。
   **优先复用已有笔记本**（配额有限）：只给 `notebook.title` 时，执行器会自己
   `list --json` 找精确同名的本子，命中即复用、没命中才建 —— 不用你手工查。
   已经知道 id 就直接给 `notebook.id`，那连查询都省了。
3. `python3 tools/nbjob.py plan <工单>` —— 自证命令序列正确。
4. 路线 A：`python3 tools/nbjob.py execute <工单>`。
   路线 B：`git push`，等 worker 回写 `jobs/done/<id>.result.json`。
5. 读结果的 `status` / `answers` / `captured` / `artifact`。
6. 读 `delivery` 段决定怎么拿产物：`channel: "git"` → `git pull` 后在 `out/` 里；
   `channel: "release"` → 去 `delivery.url` 下载；`"failed"` → 看 `delivery.error`。
   路线 B 上 worker 已经调过 `ship`；路线 A 上你自己调：
   `python3 tools/nbjob.py ship jobs/done/<id>.result.json`。
7. 回看来源原文核验：`./scripts/nb source fulltext <source_id> -f markdown`。
8. 跑测试、看 `git diff`，再决定是否提交。

**产物生成失败时**：不要重跑 `generate`（见 §3.4）。改用 `retry_artifact` 工单原地重试 ——
它保留原 ARTIFACT_ID，不造重复产物、不白烧配额。样例见 `jobs/samples/retry-demo.job.json`。

## 5. 提问的技巧（实测有效，来自 qiaomu 项目）

- 每题加一句 **"完全基于已上传的文档内容回答，不要搜索网络"** —— 防 NotebookLM 触发联网搜索，
  污染 grounding。
- 用 **"列出 / 拆解 / 指出 / 提取"** 这类动作词引导结构化回答，避免 yes/no 问题。
- 多轮提问放同一个 conversation，**后轮受益于前轮上下文**。三轮递进（框架 4 题 →
  深挖 5 题 → 反刍 3 题）效果最好。
- YouTube 链接**直接丢给 NotebookLM**，它原生支持字幕提取。**不要**自己用 yt-dlp /
  whisper 抓字幕。

## 6. 明确不做的事

- ❌ 付费墙绕过（UA 伪装、archive.today、Referer 伪造等）—— 规避访问控制，不引入。
- ❌ 从 Z-Library 等盗版书库下载内容。
- ❌ 浏览器自动化路线（patchright / Playwright 驱动 Web UI DOM）—— 沙箱无 display 无 Chrome，
  且 DOM 锚点随时会失效（上游 notebooklm-skill 依赖的 `div.thinking-message` 已被 Google 删除）。
- ❌ 把凭据写进任何会被提交或分享的地方。

## 7. 出错时怎么查

| 现象 | 原因 | 动作 |
|---|---|---|
| `auth check` 不过 | 凭据缺失/过期 | `./scripts/inject-token.sh` 重新注入 |
| `notebooklm.google.com` → 000 | 沙箱出网被切 | 走路线 B |
| "No notebook context" | 没传 `-n` | 补上显式 notebook id |
| "No result found for RPC ID" | 限流 | 等 5–10 分钟 |
| `GENERATION_FAILED` | Google 限流 | 等，别重发 `generate`；改用 `retry_artifact` 工单原地重试 |
| 下载失败 | 生成未完成 | `artifact list -n <nb> --json` 查那个 id |
| `delivery.channel: "failed"` | 产物回传失败（多半是 `uploads.github.com` 不可达） | 看 `delivery.error`；小产物改走 Git，大产物换有出网的机器重跑 `ship` |
| RPC protocol error | Google 改了接口 | 升级 notebooklm-py 版本 |

Exit code 约定：`0` 成功 / `1` 错误。**注意两个 wait 命令的超时码不一样**
（源码核实，`exit_with_code` 不做任何映射）：

| 命令 | 超时退出码 | 依据 |
|---|---|---|
| `source wait` | **2** | `source_cmd.py` docstring：`0=ready, 1=missing or processing failed, 2=timeout` |
| `artifact wait` | **1** | `artifact_cmd.py` 的 `except TimeoutError: … exit_with_code(1)` |

所以别把「超时=2」当成通用规则套到 `artifact wait` 上 —— 它超时也是 1。


---

## SOURCE · `arena/01a06208-notebooklm-scz:README.md`

<!-- blob: a790ddf485f1d0899565f55d3389596d9183715c; bytes: 6244 -->

# notEBooklm-scz

**让 AI Agent 在自己的工作分支上调用 Google NotebookLM 产出东西。**

不是又一个 NotebookLM 套壳界面 —— 这里没有前端。这个仓库是一套**给 Agent 用的接入层**：
体检、凭据注入、工单、执行、产物落盘、留痕，一条链路。

底座是 [notebooklm-py](https://github.com/teng-lin/notebooklm-py) v0.8.1。为什么是它、
为什么不是另外五个同类项目，写在 [docs/调研/01-生态分析.md](docs/调研/01-生态分析.md)。

---

## 三十秒上手

```bash
./scripts/setup.sh                    # 装 .venv + notebooklm-py[mcp,headless,markdown]
./scripts/doctor.sh                   # 体检：装好了吗 / 有凭据吗 / 连得到 Google 吗
```

体检会告诉你走哪条路：

```bash
# 路线 A —— Google 可达，直接跑
python3 tools/nbjob.py plan    jobs/samples/report-demo.job.json    # 先看命令序列（不碰网络）
python3 tools/nbjob.py execute jobs/samples/report-demo.job.json    # 真跑

# 路线 B —— Google 不可达（Arena 沙箱当前就是这种）
cp jobs/samples/report-demo.job.json jobs/pending/rpt-001.job.json
git push                                        # 交给你本机的 worker
./scripts/worker.sh watch                       # ← 这条在你本机跑，不在沙箱里
```

---

## 为什么需要"两条路线"

**实测结论**：Arena 沙箱的出网是 SNI 白名单制（所有流量过 E2B 的 MITM 代理），
`github.com` / `pypi.org` / `npmjs.org` 通，**`*.google.com` 在 TLS 握手阶段被切断**。
命令和原始输出都在 [docs/调研/02-环境实测.md](docs/调研/02-环境实测.md)。

所以：

| | 路线 A：直连 | 路线 B：工单中继 |
|---|---|---|
| 前提 | 沙箱能访问 Google | 只需 GitHub 可达（已验证） |
| 凭据在哪 | 注入沙箱 | **永不离开你的机器** |
| 延迟 | 实时 | 一个 push/pull 周期 |
| 状态 | 等出网放开 | **现在就能跑通** |

关键点：**Agent 侧的动作在两条路线上完全一样 —— 都是写工单。** 区别只在谁执行。
所以出网放开与否，不改变 Agent 的写法，只改变工单在哪落地。

```
路线 A   Agent ──▶ tools/nbjob.py execute ──▶ scripts/nb ──▶ Google
路线 B   Agent ──▶ jobs/pending/*.job.json ──git──▶ worker ──▶ 同一条链路
```

---

## 目录

| 路径 | 说明 |
|---|---|
| `AGENTS.md` | **Agent 行为契约 —— 先读这个** |
| `tools/nbjob.py` | 工单校验 / 计划器 / 执行器（纯标准库，路线 A、B 共用） |
| `jobs/` | 工单与结果。格式见 [jobs/README.md](jobs/README.md) |
| `scripts/doctor.sh` | 环境体检（`--json` 给 Agent 读） |
| `scripts/inject-token.sh` | 注入 master token（0600） |
| `scripts/worker.sh` | 路线 B 的外部 worker（跑在你本机） |
| `scripts/nb` `.ps1` | `notebooklm` CLI 薄封装（Windows / Linux 两套，参数相同） |
| `scripts/agent-mcp` | 项目级 MCP 入口 |
| `prompts/slides/` | 中文化幻灯片风格库（6 种），配 `generate.prompt_file` 用 |
| `examples/` | Python API 版示例（看懂链路用） |
| `out/` | 产物落盘，已 gitignore |
| `docs/调研/` | 六个同类仓库的逐文件分析 + 沙箱实测 + 方案讨论 |

---

## 第一条链路：研究报告

选它当第一条链路是因为它**全走文本** —— 没有二进制产物、没有几十分钟的生成等待，
是验证"凭据 → 来源 → 提问 → 产物 → 落盘 → 留痕"整条通路最便宜的方式。

```bash
python3 tools/nbjob.py plan jobs/samples/report-demo.job.json
```

会打印 10 步：建笔记本 → 加 2 个来源 → 各自等索引 → 2 轮提问 → 生成简报 → 等完成 → 下载到
`out/`。每一步的 id 都显式传给下一步（ID-pinned），失败会**立即停在那一步**，
不会继续发起生成任务白烧配额。

## 十种工单

九种产新产物，一种重试已失败的产物。骨架基本一样，只是最后三步的命令形状不同
（由 `tools/nbjob.py` 的 `KINDS` 表声明式描述）：

| kind | 产物 | 落盘 | 样例 |
|---|---|---|---|
| `research_report` | 简报 / 学习指南 / 博客稿 | `.md` | `report-demo` |
| `podcast` | 音频概览 | `.m4a` | `podcast-demo` |
| `slides` | 幻灯片 | `.pdf` / `.pptx` | `slides-demo` |
| `quiz` | 测验 | `.md` / `.json` / `.html` | `quiz-demo` |
| `flashcards` | 闪卡 | `.md` / `.json` / `.html` | `flashcards-demo` |
| `video` | 视频概览 | `.mp4` | `video-demo` |
| `infographic` | 信息图 | `.png` | `infographic-demo` |
| `data_table` | 数据表 | `.csv` | `datatable-demo` |
| `mind_map` | 思维导图 | `.json` | `mindmap-demo` |
| `retry_artifact` | 原地重试失败产物 | 随原类型 | `retry-demo` |

`retry_artifact` 是 `AGENTS.md`「失败时不要重跑 `generate`」那条规矩的工具化替代 ——
它保留原 ARTIFACT_ID，不会造重复产物、不会白烧配额。

样例都在 `jobs/samples/`。幻灯片还配了一套**中文化风格库**（`prompts/slides/`，6 种风格），
素材来自 awesome-notebookLM-prompts，改写后对齐了 notebooklm-py 的真实接口 ——
比如 slide-deck **没有** `--orientation` 参数（只有 infographic 有），竖版只能写进 prompt。

---

## 文档

- 🤖 [AGENTS.md](AGENTS.md) —— Agent 行为契约（凭据、ID-pinned、限流、破坏性操作、红线）
- 🔌 [docs/arena-agent.md](docs/arena-agent.md) —— 两条路线的完整说明 + 凭据获取步骤
- 📋 [jobs/README.md](jobs/README.md) —— 工单 schema
- 🔍 [docs/调研/01-生态分析.md](docs/调研/01-生态分析.md) —— 六个同类仓库逐个拆解
- 🧪 [docs/调研/02-环境实测.md](docs/调研/02-环境实测.md) —— 沙箱出网实测（可复现）
- 🗺️ [docs/调研/03-方案讨论.md](docs/调研/03-方案讨论.md) —— 路线取舍的理由

---

> ⚠️ notebooklm-py 是非官方库，走 Google 未公开接口，**随时可能失效**。
> 适合原型、研究与个人项目。凭据是账号级的，请用专用小号。
>
> NotebookLM 的产物是 AI 生成内容，未经核验不得直接当作事实或生产代码。


---

## SOURCE · `arena/01a06208-notebooklm-scz:docs/arena-agent.md`

<!-- blob: f1411d528f3b96ffc93d0b85567754d8295c361a; bytes: 19499 -->

# Arena Agent × NotebookLM

本文说清两件事：**凭据怎么进来**，**两条路线各自怎么跑**。
行为约束（什么必须问、什么不许做）在 [../AGENTS.md](../AGENTS.md)，不重复。

---

## 1. 现状：沙箱打不通 Google

实测（可复现，见 [调研/02-环境实测.md](调研/02-环境实测.md)）：

- 所有出网走 E2B 的 MITM 代理（`issuer: O=E2B; CN=E2B Proxy CA`），按 **SNI 白名单**放行。
- 通：`github.com`、`api.github.com`、`pypi.org`、`files.pythonhosted.org`、`registry.npmjs.org`
- 不通：`*.google.com`、`googleapis.com`，连 `example.com`、`raw.githubusercontent.com` 也不通
- 拦截在 **TLS 层**：TCP 握手能成，Client Hello 发出后被 reset
- 沙箱无 `DISPLAY`、无 Chromium ⇒ 交互式 `notebooklm login` 和一切浏览器自动化都不可用

推论：自建隧道（Cloudflare / Tailscale / ngrok）同样不通，因为它们的域名也是白名单外的 SNI。

但 `notebooklm-py` 本身**装得上、跑得动**，`gh` 也已认证 ⇒ GitHub 可以当通信信道。

---

## 2. 凭据：只走 master token

沙箱里没浏览器，所以凭据只能**外部注入**。三种凭据里只有一种合适：

| 凭据 | 能不能用 | 原因 |
|---|---|---|
| `master_token.json` | ✅ **用这个** | 不轮换，过期自动 re-mint，无人值守可用 |
| `storage_state.json` | ⚠️ 仅单次验证 | 上游文档：cookie 快照约 10 分钟就被其它客户端顶替 |
| `NOTEBOOKLM_AUTH_JSON` 内联 | ⚠️ 仅单次调用 | 不触发 re-mint，无法持久化轮换 |

### 2.1 一次性 bootstrap（在有浏览器的机器上）

```bash
pip install "notebooklm-py[browser,headless]"
notebooklm login --master-token --account you@example.com
# → 写出 ~/.notebooklm/profiles/default/master_token.json
```

> **用专用小号。** 上游 `docs/security.md` 的原话：master token 是
> "full-account, durable, and infostealer-grade"，**改密码不能撤销它**，
> 只能去 Google 账号 → 安全性 → 你的设备 里显式移除。

### 2.2 注入沙箱

```bash
# 方式 1（推荐）：受保护持久化路径
export NOTEBOOKLM_MASTER_TOKEN_FILE=/受保护路径/master_token.json
./scripts/inject-token.sh

# 方式 2：内联（用完必须 unset —— 环境变量会被子进程继承，文件不会）
export NOTEBOOKLM_MASTER_TOKEN_JSON="$(cat /受保护路径/master_token.json)"
./scripts/inject-token.sh && unset NOTEBOOKLM_MASTER_TOKEN_JSON
```

`inject-token.sh` 会：验证 JSON 合法 → 落盘 `.notebooklm/profiles/<profile>/master_token.json`
→ `chmod 600` → **只报大小和权限，绝不打印内容**。

`.notebooklm/` 已在 `.gitignore`（`git check-ignore` 可验证）。

### 2.3 验证

```bash
./scripts/doctor.sh --json
```

看 `auth_live`：它对应上游的双条件 ——
`auth check --test --json` 要同时 `status=="ok"` **且** `checks.token_fetch==true`。

---

## 3. 路线 A：直连（等出网放开）

需要 Arena 侧放行：`notebooklm.google.com` + Google 的 cookie/token 域名
（`accounts.google.com`、`*.google.com`、`googleapis.com`、`oauth2.googleapis.com`）。

放开后不用改任何代码 —— `doctor.sh` 的 `egress_google` 会自己转绿，然后：

```bash
python3 tools/nbjob.py execute jobs/pending/<id>.job.json
```

长任务用后台跑（Arena 的 `start_process` 就行）：

```bash
python3 tools/nbjob.py execute jobs/pending/<id>.job.json --result jobs/.local/<id>.result.json
```

---

## 4. 路线 B：工单中继（现在就能跑通）

```
Arena Agent（沙箱）                       你的机器（有 Google 出网）
  写 jobs/pending/<id>.job.json  ──push──▶  ./scripts/worker.sh watch
  读 jobs/done/<id>.result.json  ◀──push──    └─ tools/nbjob.py execute
```

### Agent 侧

```bash
cp jobs/samples/report-demo.job.json jobs/pending/rpt-001.job.json
python3 tools/nbjob.py validate jobs/pending/rpt-001.job.json
python3 tools/nbjob.py plan     jobs/pending/rpt-001.job.json    # 自证命令序列
git add jobs/pending && git commit -m "job: rpt-001" && git push
```

然后轮询（`api.github.com` 可达，所以 `gh` 能用）：

```bash
gh api repos/:owner/:repo/contents/jobs/done/rpt-001.result.json --jq '.download_url'
```

### Worker 侧（你的机器）

```bash
git clone https://github.com/sunccchengze/notEBooklm-scz && cd notEBooklm-scz
git checkout arena/01a06208-notebooklm-scz
./scripts/setup.sh
./scripts/nb login                     # 本机有浏览器，直接登录最简单
./scripts/doctor.sh                    # 应全绿
./scripts/worker.sh watch              # 循环；或 once 配 cron
```

worker 每轮：`git pull` → 找 `jobs/pending/*.job.json` → 逐个 `execute` →
结果写 `jobs/done/<id>.result.json` → 工单挪进 `jobs/running/`（**避免重复执行烧配额**）→
`commit` + `push`。

### 大文件

mp3 / mp4 / pdf 不适合走 Git。当前只回传小产物（md / json / csv / png）。
要回传大文件，让 worker 传 GitHub Release 再把下载链接写进结果 —— 尚未实现，见 §6。

---

## 5. 可选：项目级 MCP

`.mcp.json` 已配好，指向 `scripts/agent-mcp` → `python -m notebooklm.mcp`。
`agent-mcp` 在启动前会检查凭据是否存在，缺失就打印可读指引并 `exit 1`，
而不是把 notebooklm-py 的长 traceback 甩给 Agent。

> ⚠️ **未验证**：Arena 是否真的加载项目级 `.mcp.json`。本会话的工具列表里没有任何 MCP 工具，
> 但"看不到"既可能是平台不支持，也可能是没配置 —— 这一点需要在 Arena 侧确认，
> 不能当成已知事实。MCP 入口是**锦上添花**，不是必需：`tools/nbjob.py` 走 CLI，不依赖 MCP。

MCP 侧默认注册 33 个工具（实测 fastmcp 3.4.2）：`chat_ask` / `source_add` / `source_wait` /
`studio_generate` / `studio_status` / `studio_download` / `notebook_*` / `research_*` /
`share_*` / `suggest_prompts` / `server_info` 等。

---

## 6. 还没做的

- **真实 API 端到端**：十种工单都在 mock CLI 上验证过编排逻辑，但**没有**在真实
  NotebookLM 上跑通过 —— 沙箱打不通 Google。这是当前最大的未验证项。
- **大产物回传的上传分支未实测**：`ship` 子命令已实现分流（小文本走 Git、
  二进制走 GitHub Release），但**上传那一段在沙箱内跑不通**，原因见下条。
  分流判定、失败处理、回滚都验证过了；真机上的成功路径**没验证过**。
- **笔记本按标题「模糊」匹配**：现在只做**精确**同名匹配（`list --json` 后逐条比对
  去首尾空格的 title），命中即复用。近似匹配、跨账号去重还没做。
- **`cinematic-video` 别名、`revise-slide` 单页改写、`artifact retry`** 还没做成工单动作。

### 一条实测出来的出网边界（影响上面的判断）

沙箱的放行名单是**按域名**的，GitHub 只放行了 API 和主站：

| 域名 | 实测 | 说明 |
|---|---|---|
| `api.github.com` | `200` | 建/删 release、改 issue 都行 |
| `github.com` | `200` | clone / push 正常 |
| `uploads.github.com` | `000` | **Release 传附件走这里**，TLS 在 Client Hello 后 `SSL_ERROR_SYSCALL` |
| `objects.githubusercontent.com` | `000` | 下载 release 附件走这里，同样不通 |

也就是说：**沙箱内能建 release、能 push，但传不上附件、也下不下来**。
所以大产物回传只能在 Route B 的 worker（用户自己的机器）上做，
那里没有这层 MITM 代理 —— 但这一条我**无法在沙箱内证实**，只是推断。

`ship` 因此设计成：失败不谎报成功（`channel: "failed"` + `exit 1`），
且**回滚**本次新建却没传上东西的空 release —— 否则每次失败都在用户仓库留垃圾。
这条回滚路径已实测：沙箱内上传必然失败，跑完 release 数仍是 `0`、无残留 tag。

---

## 7. API 核对记录

`examples/research_report.py` 用到的每个符号都对着**已安装的 0.8.1** 核对过，不是凭记忆写的：

```
ReportFormat: BLOG_POST / BRIEFING_DOC / CONCEPT_EXPLANATION / CUSTOM / STUDY_GUIDE
NotebooksAPI.create(title) -> Notebook
SourcesAPI.add_url(notebook_id, url, *, wait, wait_timeout, title) -> Source
SourcesAPI.wait_all_until_ready(...) -> list[Source | SourceNotFoundError
                                            | SourceProcessingError | SourceTimeoutError]
ArtifactsAPI.generate_report(notebook_id, report_format, source_ids, language,
                             custom_prompt, extra_instructions) -> GenerationStatus
ArtifactsAPI.wait_for_completion(notebook_id, task_id, ..., timeout) -> GenerationStatus
ArtifactsAPI.download_report(notebook_id, output_path, artifact_id) -> str
ChatAPI.ask(notebook_id, question, source_ids, conversation_id) -> AskResult
NotesAPI.create(notebook_id, title, content) -> Note
```

两个值得记的差异：

1. `ReportFormat` 枚举里有 `CONCEPT_EXPLANATION`，但 **CLI 只暴露 4 种**
   （`notebooklm generate report --help` 实测：`briefing-doc|study-guide|blog-post|custom`）。
   所以 `tools/nbjob.py` 的校验集合是 4 个，跟 CLI 对齐，不跟枚举对齐。
2. `wait_all_until_ready` 返回的是 `list[Source | 异常对象]`，**不是**清一色 `Source`。
   直接当 Source 用会在失败来源上炸 —— 示例里显式分流了。

---

## 8. CLI 参数核对记录

`tools/nbjob.py` 的 `KINDS` 表里每一个可选值，都是对着**已安装 CLI 的 `--help` 输出**
逐个抄的，不是从上游 README 或 SKILL.md 抄的 —— 这两者会和实际 CLI 脱节（上面第 7 节的
`CONCEPT_EXPLANATION` 就是一例）。

核对覆盖 **0.8.1 与 0.8.2 两个版本**：`requirements.txt` 写的是 `>=0.8.1,<0.9`，
全新安装现在会拿到 0.8.2，所以两版逐条对照过。结论：

- 九种 `generate` 的**枚举取值**两版**逐字一致**
- `--language` 的有无两版一致（`quiz` / `flashcards` 没有，其余七种有）
- `mind-map` 两版都**没有** `--prompt-file`
- 九种的 Usage 行两版一致：八种是 `[OPTIONS] [DESCRIPTION]`，只有 `mind-map` 是 `[OPTIONS]`

| 命令 | 参数与可选值（实测） |
|---|---|
| `generate report` | `--format [briefing-doc\|study-guide\|blog-post\|custom]`（默认 briefing-doc）、`--append`、`--prompt-file`、`--language` |
| `generate audio` | `--format [deep-dive\|brief\|critique\|debate]`、`--length [short\|default\|long]`、`--language`、`--prompt-file` |
| `generate slide-deck` | `--format [detailed\|presenter]`、`--length [default\|short]`、`--language`、`--prompt-file` |
| `generate quiz` | `--quantity [fewer\|standard\|more]`、`--difficulty [easy\|medium\|hard]`（**没有** description 位置参数、**没有** `--language`） |
| `generate flashcards` | `--quantity [fewer\|standard\|more]`、`--difficulty [easy\|medium\|hard]`、`--prompt-file`（**没有** `--language`，与 quiz 同） |
| `generate video` | `--format [explainer\|brief\|cinematic\|short]`、`--style [auto\|custom\|classic\|whiteboard\|kawaii\|anime\|watercolor\|retro-print\|heritage\|paper-craft]`、`--style-prompt`、`--language`、`--prompt-file` |
| `generate infographic` | `--orientation [landscape\|portrait\|square]`、`--detail [concise\|standard\|detailed]`、`--style [auto\|sketch-note\|professional\|bento-grid\|editorial\|instructional\|bricks\|clay\|anime\|kawaii\|scientific]`、`--language`、`--prompt-file` |
| `generate data-table` | `--prompt-file`、`--language`（**没有任何枚举选项**，DESCRIPTION 必填） |
| `generate mind-map` | `--kind [interactive\|note-backed]`、`--instructions`、`--language`（**没有** `--prompt-file`、**没有** description 位置参数） |
| `download slide-deck` | `--format [pdf\|pptx]`（默认 pdf）、`-a`、`-n`、`--all`、`--name`、`--dry-run`、`--force`、`--no-clobber` |
| `download quiz` | `--format [json\|markdown\|html]`（默认 json）、同上 |
| `download flashcards` | `--format [json\|markdown\|html]`、同上 |
| `download audio` / `video` / `infographic` / `data-table` / `mind-map` | `-a`、`-n`、`--latest/--earliest/--all`、`--name`（**都没有** `--format`） |
| `artifact retry` | `ARTIFACT_ID`（位置参数，支持唯一前缀）、`-n`、`--wait/--no-wait`、`--timeout`、`--interval` |
| `generate revise-slide` | `-a <slide deck id>`（**必填**）、`--slide <0-based 序号>`（**必填**）、`--prompt-file`、`-n`、`--wait/--no-wait` |
| `generate cinematic-video` | `generate video --format cinematic` 的**别名**；`--format` 被锁死为 cinematic，传别的值直接报错 |

由此定下来的实现决策（每条都对应 `KINDS` 表里的一个字段）：

1. **`quiz` / `flashcards` 不给 `--language`**。它们的 `--help` 里没有这个参数，硬加会被
   click 拒。所以这两个 kind 的 `has_language: False`。
2. ~~**`quiz` 没有 description 位置参数**~~ —— **这条是错的，已纠正**。
   `generate quiz --help` 的 Usage 行是 `quiz [OPTIONS] [DESCRIPTION]`，
   0.8.1 与 0.8.2 **两版都有**位置参数。当初记成「没有」是读漏了 Usage 行，
   后果是 `prompt_mode: "none"` 会把用户写的 `prompt` **静默丢弃**（不报错、也不生效）。
   现已改为 `prompt_mode: "positional"`。
   教训：判定「某参数不存在」必须看 Usage 行的位置参数，不能只扫 `--xxx` 选项列表。
3. **`mind-map` 没有 `--prompt-file`** → `prompt_mode: "instructions"`，prompt 翻译成
   `--instructions`；校验会直接拦住给 `prompt_file` 的工单，而不是静默丢弃。
4. **`mind-map` 同步返回** `{mind_map, note_id, kind}`，没有 `task_id` →
   `capture_task: "note_id"` + `skip_wait: True`（计划 5 步而不是 6 步）。
   这条是从源码 `cli/generate_cmd.py:151` 的
   `json_output_response({"mind_map": …, "note_id": …, "kind": …})` 读出来的，不是猜的。
5. **`data-table` 没有任何枚举选项**，DESCRIPTION 必填 → `prompt_mode: "required-positional"`，
   缺 prompt 的工单在校验阶段就被拦。
   依据不再只是转述 SKILL.md，而是源码 + 实跑：`generate_cmd.py:792` 调
   `resolve_prompt(description, prompt_file, "description", required=True)`，
   而其余八种（audio/video/slide-deck/quiz/flashcards/infographic/report）
   调的是不带 `required` 的版本。直接调该函数实测：
   `required=True` 且两者皆空 → `UsageError: Provide a description argument or --prompt-file.`；
   `required=False` 同样输入 → 返回 `''`。
   顺带证实了 `prompt` 与 `prompt_file` 的互斥规则与本地校验层**逐字一致**
   （`Cannot use both the description argument and --prompt-file. Choose one.`）。
6. **`download audio/video/infographic/data-table/mind-map` 都没有 `--format`**，
   所以这些 kind 的 `KINDS` 里没有 `download_format`，下载段不会拼这个 flag ——
   而 slide-deck / quiz / flashcards 有。
7. **`--style-prompt` 配 `--style custom` 使用** → 校验层直接拦。
   注意这条的依据**弱于**其余各条：上游 `generate_cmd.py` 的 video 命令体对
   `style_prompt` **没有任何分支、校验或警告**，`ArtifactsAPI.generate_video(...)`
   也无条件接收它 —— 也就是说 CLI 会照传。唯一依据是 `--style` 的帮助文本
   `Use 'custom' with --style-prompt`。
   所以「非 custom 时会被忽略」是**未经验证的推断**（服务端行为，沙箱内无法证实）。
   拦下来是本地策略：宁可让工单显式表达意图，也不发一个效果不明的参数。
8. **`artifact retry` 不带 `--wait` 时返回 `{task_id, status, url, error, error_code}`**
   —— 源码 `cli/artifact_cmd.py:691` 核实（带 `--wait` 时键名换成 `artifact_id`）。
   取 `task_id` 正好契合既有 capture 模式，所以 `retry_artifact` 不需要新的取值路径。
9. **`cinematic-video` 不做成独立 kind**。它是 `generate video --format cinematic` 的别名，
   用 `video` + `format: "cinematic"` 即可覆盖；做成独立 kind 只会多一个等价入口。
10. **`revise-slide` 不做成 kind**。它要求 `-a <已生成的 slide deck id> --slide <序号>`，
    是对已有产物的**局部编辑**而非新产物，和「建本→加料→生成→下载」的骨架不兼容。
    将来若要支持，应该是第三种动作类型（局部修改），不是第十一种产物。
11. **两个 wait 命令的超时退出码不同**，`ok_codes` 必须分开写。
    源码核实（`exit_with_code` 就是 `raise SystemExit(exit_code)`，**不做任何映射**）：

    | 命令 | 退出码 | 依据 |
    |---|---|---|
    | `source wait` | `0`=ready / `1`=missing 或处理失败 / **`2`=timeout** | `source_cmd.py` docstring |
    | `artifact wait` | `0`=完成 / **`1`=超时**（也是 1） | `artifact_cmd.py` 的 `except TimeoutError: … exit_with_code(1)` |

    我此前把 `artifact wait` 的 `ok_codes` 写成 `(0, 2)`，是把 `source wait` 的契约错套了
    过来。当下**恰好无害**（2 永不出现，超时走 1 被判失败，行为正确），但是个陷阱：
    一旦上游真返回 2，就会被当成功并去下载一个还不存在的产物。已改为 `(0,)`。

    `source wait` 保持 `(0,)` 是**刻意的**：没索引完就去提问或生成只会拿到空结果白烧配额，
    所以超时(2)也要判失败。

    实测：mock 让 `artifact wait` 返回 2 → `status=failed`、`failed_at=7`、
    **下载步骤未被执行**（改之前会被当成功继续下载）。
12. **`source add` 必须显式传 `--type`**，不能依赖上游的自动判别。
    `Usage: notebooklm source add [OPTIONS] CONTENT`，`--type [url|text|file|youtube]`
    的帮助文本写着 "Source type is auto-detected"。我的枚举与它**逐字一致**
    （0.8.2 实测；`requirements.txt` 钉 `>=0.8.1,<0.9`，0.8.1 侧的 venv 已不在，未复核）。

    但同一段帮助文本记载了误判后果：
    > A path-shaped argument that does not exist on disk is still ingested as
    > **inline text** but a stderr warning is emitted; pass `--type text` to suppress.

    即声明成 `file` 的资料若路径写错，会被**静默降级成内联文本**而不是报错。
    于是生成照跑、退出码为 0、产物看着也正常 —— 但依据的是那串路径字符串本身。
    工单里既然已经声明了 `type`，就交下去，别让 CLI 猜。

    我此前只把 `type` 用在 label 里，从未传进命令。已修，并在回归套件加了断言
    （回退该修复 → 9 条红）。

复现核对：

```bash
for c in report audio slide-deck quiz flashcards video infographic data-table mind-map \
         revise-slide cinematic-video; do
  echo "=== generate $c ==="; .venv/bin/notebooklm generate $c --help | grep -E '^  --|^  -'
done
for c in audio video slide-deck quiz flashcards infographic data-table mind-map; do
  echo "=== download $c ==="; .venv/bin/notebooklm download $c --help | sed -n '/^Options/,$p' | grep -E '^  -'
done
echo "=== artifact retry ==="; .venv/bin/notebooklm artifact retry --help

# retry 的 JSON 键名（task_id vs artifact_id）从源码核，不看 --help：
grep -n 'json_output_response' -A 8 \
  ~/notebooklm-py/src/notebooklm/cli/artifact_cmd.py | sed -n '/task_id/,/}/p'
```


---

## SOURCE · `arena/01a06208-notebooklm-scz:docs/调研/01-生态分析.md`

<!-- blob: 7e44538891f54a60dc97b20b80456a88cb406318; bytes: 20924 -->

# NotebookLM 开源生态分析（逐仓库）

> 阅读时间：2026-09-02。所有仓库均以 `git clone --depth 50` 拉到本地逐文件读过，关键实现读了两遍。
> 仓库元数据（star / 最后推送 / license）取自 `api.github.com`，命令与输出见 [02-环境实测.md](02-环境实测.md)。

## 结论先行

| 仓库 | 技术路线 | 能否作为 Agent 后端 | 采纳判断 |
|---|---|---|---|
| teng-lin/notebooklm-py | 逆向 Google 内部 `batchexecute` RPC / Android gRPC | ✅ 唯一完整路线 | **采纳为唯一底座** |
| PleasePrompto/notebooklm-skill | patchright 真实 Chrome 驱动 Web UI DOM | ⚠️ 只能问答，且选择器已过期 | 只借鉴「追问机制 / run.py 包装器」 |
| PleasePrompto/notebooklm-mcp | 同上，TypeScript + MCP | ⚠️ 工具面只有 4 个动作 | 只借鉴「多语言选择器分层 / provenance 封套」 |
| joeseesun/qiaomu-anything-to-notebooklm | 就是 notebooklm-py CLI 的上层编排 | 编排层思路可学 | 借鉴「意图映射 / 三轮递进提问」；**拒绝付费墙绕过** |
| serenakeyitan/awesome-notebookLM-prompts | 纯 prompt 素材（0 代码） | 不适用 | 借鉴为 slide-deck 风格库 |
| zstmfhy/zlibrary-to-notebooklm | Playwright 下 Z-Library 书 | 不适用 | **拒绝**（盗版书库） |

核心判断：**只有 notebooklm-py 是"API 路线"，其余三个能跑的都是"浏览器自动化路线"。**
浏览器自动化路线在 Arena 沙箱里天然不可行（无 display、无 Chrome、无 Google 出网），而且它锚定在
Google 随时会改的 DOM 上。所以生态里真正能复用的只有 notebooklm-py，其它仓库的价值是**编排层
经验和 prompt 素材**，不是代码。

---

## 1. teng-lin/notebooklm-py — 唯一完整底座

- 版本 **v0.8.1**（latest release，2026-08-14 发布；main HEAD 2026-09-02 同日仍在推送）
- 19,078 stars / 31 open issues / MIT / Python ≥3.10（3.10–3.14）
- 规模（`git ls-files` 实测）：**1,842 个文件、107 MB**；`src/` 479 个 `.py`、**144,424 行**；
  `tests/` 740 个 `test_*.py`；`docs/` 20 篇顶层文档共 **19,915 行** + **35 篇 ADR**（0001–0035）

### 1.1 它到底怎么连上 NotebookLM

不走任何公开 API，直连 Google 内部协议，有两条互斥的 transport：

- **Web（默认）**：`batchexecute` HTTP RPC，方法 ID 是混淆过的字符串，集中在
  `src/notebooklm/rpc/types.py`。仓库自己在 CLAUDE.md 里写明："the obfuscated RPC method IDs …
  are undocumented and can break whenever Google changes them — **the #1 breakage class**"。
- **Android（opt-in）**：protobuf + gRPC（`grpcio==1.76.0`、`protobuf==6.33.5` 精确钉版），
  proto 源文件就 checked-in 在 `_android/proto_src/`（`labs/language/tailwind/…`，NotebookLM 内部
  代号 **tailwind**）。用 `master_token.json` 换短期 mobile bearer token，不依赖浏览器 cookie。

2026 年 7 月 Google 把 NotebookLM 改名 **Gemini Notebook**（`docs/adr/0028`），链接自动重定向，
库名不变、照常可用。

### 1.2 分层架构（决定了它好不好被 Agent 复用）

```
CLI (Click)   MCP (FastMCP)   REST (FastAPI)      ← 三个 frontend adapter
        └──────────┴──────────┘
              src/notebooklm/_app/                 ← transport-neutral 业务层
     NotebookLMClient + 11 个 typed namespace      ← notebooks/sources/artifacts/chat/
              src/notebooklm/rpc/                    research/notes/mind_maps/settings/
                                                     sharing/labels/collections
```

关键点：`_app/` **不 import 任何 click / rich / fastmcp / fastapi**，边界由
`tests/_guardrails/test_app_boundary.py` 用 lint 强制。这意味着"给 Agent 加一种新入口"是官方
支持的动作，不需要动业务逻辑 —— 这一点对我们很重要。

### 1.3 能力面（比 Web UI 多）

11 个生成类型（`_app/generate_plans.py` 的 `GenerationKind` 字面量）：
`audio` / `video` / `cinematic-video` / `slide-deck` / `revise-slide` / `quiz` / `flashcards` /
`infographic` / `data-table` / `mind-map` / `report`

Web UI 拿不到的东西：批量下载、quiz/flashcards 导出 JSON+MD+HTML、mind-map 导出 JSON 树、
data-table 导出 CSV、slide-deck 导出 PPTX、单页 slide 自然语言改写、`source fulltext` 取索引全文、
把整段对话存为 note、编程式分享权限。

参数枚举也很细，例如 infographic 有 11 种 style
（auto / sketch-note / professional / bento-grid / editorial / instructional / bricks / clay /
anime / kawaii / scientific），report 有 4 种 format（briefing-doc / study-guide / blog-post / custom）。

### 1.4 CLI 表面

顶层 **31** 个命令（`notebooklm --help` 实测计数）：
`agent artifact ask auth clear collection completion configure create delete doctor download
generate history label language list login mcp metadata note profile rename research share skill
source status suggest-prompts summary use`

三个 console script：`notebooklm` / `notebooklm-mcp` / `notebooklm-server`。

MCP 侧：把 `register_all(mcp)` 跑在裸 FastMCP 上实测，**默认注册 33 个工具**
（fastmcp 3.4.2）：

```
await_upload  chat_ask  chat_configure  note_save
notebook_create  notebook_delete  notebook_describe  notebook_list  notebook_rename
research_cancel  research_import  research_start  research_status  server_info
share_remove_user  share_set_access  share_set_user  share_status
source_add  source_add_drive_file  source_delete  source_list  source_read
source_rename  source_wait
studio_delete  studio_download  studio_generate  studio_list  studio_rename
studio_retry  studio_status  suggest_prompts
```

`studio_generate` / `studio_download` 一个工具覆盖 11 种产物类型。源码里另有
`chat_start` / `chat_status` / `chat_cancel` / `source_add_play_book` / `compact_studio_item`
等函数，默认配置下未注册。全部返回 `{"success": true, "data": …}` 封套。

### 1.5 认证模型（这是整个方案的咽喉）

四种凭据获取路径，能力递增：

| 路径 | 命令 | 需要 | 适用 |
|---|---|---|---|
| 交互登录 | `notebooklm login` | `[browser]` + 有 display 的机器 | 一次性 bootstrap |
| 扒浏览器 cookie | `notebooklm login --browser-cookies chrome` | `[cookies]`（rookie-cookies） | 无 display 的本机 |
| **master token** | `notebooklm login --master-token --account …` | `[headless]`（gpsoauth） | **服务器 / CI / 无人值守** |
| 内联注入 | `NOTEBOOKLM_AUTH_JSON=…` 或 `--storage PATH` | 无额外依赖 | 单次短命调用 |

`docs/installation.md` § D 明确警告：**cookie 快照不适合 CI** ——
"a cookie snapshot is superseded by any other active client within ~10 minutes and is rejected
shortly after"。CI/长任务必须用 **master token**（不轮换、过期自动 re-mint）。

安全等级：`docs/security.md` 说 `storage_state.json` 和 `master_token.json` 都是
**account-equivalent**；master token 更狠 —— "it survives password changes until explicitly
revoked"，属于 infostealer 级凭据。所以必须：专用小号、`0600`、绝不进 Git、绝不进日志。

### 1.6 SKILL.md 是写给 Agent 的操作手册（706 行，值得逐条抄）

它不只是一份命令表，而是一套 Agent 行为契约：

- **Agent Setup Verification**：必须用 `auth check --test --json` 并要求
  `status=="ok"` **且** `checks.token_fetch==true`。裸 `--json` 只证明文件能解析，是
  "false-positive trap"。
- **Autonomy Rules**：明确区分"可自动执行"（list / ask / source add / auth check / doctor…）
  和"必须先问"（一切 `delete`、`generate *`、`download *`、`language set`、`ask --save-as-note`）。
  多数破坏性命令即使加 `--json` 也要求显式 `--yes`，否则返回 `CONFIRM_REQUIRED`。
- **ID-pinned 工作流**：每一步都要 `--json` 抓 ID 然后显式 `-n/--notebook`、`-a/--artifact`
  传下去，**禁止**依赖 `notebooklm use` 的隐式上下文 —— 并行 agent 会互相覆盖 context.json。
- **Fire-and-forget**：生成任务 5–45 分钟，不要在主对话里轮询；给出 ID-pinned 的
  `artifact wait` 命令交给后台。
- **Exit codes**：0 成功 / 1 错误 / 2 超时（wait 类命令专用）。
- **限流分级**：可靠（notebooks / sources / chat / mind-map / report / data-table）
  vs 易被限流（audio / video / quiz / flashcards / infographic / slide-deck）。
- **超时表**：source 600s、research fast 180s、research deep 1800s、quiz 900s、
  audio 1200s、video 2700s。
- **配额**（`docs/quota-limits.md`）：Standard 50 源/笔记本、Plus 100、Pro 300、Ultra 600；
  聊天 50/200/500/2500/5000 次每天。

### 1.7 官方已知的坑（照抄进我们的 AGENTS.md）

1. RPC method id 会变 —— 第一大 breakage。
2. 嵌套参数位置敏感：source-id 嵌套有 `[id]` / `[[id]]` / `[[[id]]]` / `[[[[id]]]]` 四种形态。
3. CSRF token 会过期 —— `client.refresh_auth()` 或重新 login。
4. 批量操作要加延迟。
5. 一个 `NotebookLMClient` 绑定 `open()` 时的 event loop，**不可跨 loop / 跨线程复用**。
6. `source add` 的返回里**没有** `status` 字段，要 `source list --json` 或 `source wait` 才知道
   处理状态；状态值是小写 `processing` / `ready` / `error`。
7. 空 source 列表 `()` 和"不指定" `None` 语义不同 —— 前者对 quiz/audio 会直接报错（issue #1652/#2188）。
8. `notebooklm status` 报的是**上下文**不是认证，别拿它验登录。

### 1.8 对 Agent 并发的官方建议（`AGENTS.md`）

> Prefer `--json` output and pass explicit notebook IDs instead of relying on `notebooklm use`.
> Isolate concurrent runs with `NOTEBOOKLM_PROFILE=agent-<id>`.
> In headless environments where Playwright login is impractical, authenticate with
> `notebooklm login --browser-cookies <browser>`.

以及沙箱场景（Claude Cowork）：每次 session 重装基础包（`pip install notebooklm-py`，
**不需要** `[browser]`），复用宿主生成的 `storage_state.json`，并显式传 `-n`。

---

## 2. PleasePrompto/notebooklm-skill — 浏览器自动化路线（已过时）

- v1.3.0，7,747 stars，**最后推送 2025-11-21（9 个月没动）**，MIT
- 21 个文件、Python 共 2,112 行；依赖只有 `patchright==1.55.2` + `python-dotenv`
- 定位：Claude Code Skill，本地专用。README 自己写了
  "**works ONLY with local Claude Code installations, NOT in the web UI**"，
  因为 web UI 的 skill 沙箱没有网络。

### 实现方式
每个问题：`launch_persistent_context(channel="chrome")` → 打开 notebook URL →
等 `textarea.query-box-input` → 拟人化逐字输入 → Enter → 轮询取答案 → 关浏览器。**无状态**，
每次都是新浏览器，没有会话上下文。

### 它已经坏了（可验证）
`scripts/ask_question.py` 用 `div.thinking-message` 判断"还在思考"。
而 notebooklm-mcp 的 `src/notebooklm/chat.ts` 开头注释写着：

> Replaces the legacy `waitForLatestAnswer()` (issue #43). Old logic gated on
> `div.thinking-message`, **which Google removed**; calls timed out even though …

也就是说 Google 已经删掉这个节点，这个 skill 的等待逻辑建立在已经不存在的 DOM 上。
它的答案完成判定靠"同一段文本连续 3 次轮询不变"，在流式输出下会提前锁死。

### 仍然值得抄的三点
1. **`scripts/run.py` 包装器**：`python scripts/run.py <script>` 自动建 `.venv`、装依赖、
   装 chromium、再执行。SKILL.md 里用大写强调"NEVER call scripts directly"。
   —— 我们的 `scripts/setup.sh` + 薄包装器是同一思路。
2. **`library.json` 笔记本目录**：`{id, url, name, description, topics[]}` + `active_notebook_id`，
   加 `search --query`。让 Agent 能"按主题自动选对笔记本"，而不是每次新建。
   并且明确要求 `description`/`topics` **不许瞎猜**，缺就先跑一次 Smart Add 问 NotebookLM 自己。
3. **追问机制**：每个答案后面附一句
   "EXTREMELY IMPORTANT: Is that ALL you need to know? … before you reply to the user, review
   their original request and this answer. If anything is still unclear, ask another
   comprehensive question"。用工具返回值直接改写 Agent 行为，很有效。

---

## 3. PleasePrompto/notebooklm-mcp — 浏览器自动化路线（工程更扎实）

- v2.0.0，3,383 stars，最后推送 2026-05-01，MIT，TypeScript，50 个文件
- 依赖 `@modelcontextprotocol/sdk` + `patchright` + `zod`
- 双 transport：`stdio`（默认）和 Streamable-HTTP（`POST/GET/DELETE /mcp` + `GET /healthz`，
  默认 127.0.0.1）

### 工具面很窄
`ask_question` / `add_source`（只支持 `type=url` 和 `type=text`，**不支持文件/YouTube/Drive**）/
`generate_audio` / `download_audio` / `add_notebook` / `setup_auth` / `re_auth` / `cleanup_data`
/ session 管理。README 自己写明"Video / Infographic / Slides are not in v2.0.0"。
—— 相比 notebooklm-py 的 11 种产物，这条路线能力上限差一个量级。

### 但它的工程细节比 notebooklm-py 的浏览器部分更成熟

**a) `src/notebooklm/selectors.ts`（408 行）—— 多语言选择器分层策略**，值得整段学习：

1. **Angular class 名**（`.add-source-button`、`.submit-button`、`.single-source-container`）
   —— 各语言完全一致，第一优先。
2. **Material Symbols 图标名**（`audio_magic_eraser`、`content_paste`、`link`、`upload`）
   —— Google 把图标名作为 `<mat-icon>` 的字面文本节点输出，**100% 语言无关**，最稳。
3. `role="dialog"` / `role="button"` —— Angular 同步设置，无动画竞态。
4. locale 相关的 aria-label / 可见文本 —— 最后手段，覆盖 EN/DE/FR/ES/PT/IT/NL/JA 八种语言。

还有个真实的坑记录：网页搜索浮层的 `.actions-enter-button` 和聊天框的 `.submit-button`
**aria-label 完全相同**，所以必须锚定 class 才不会被干扰项命中。

**b) 答案完成判定**（`chat.ts`）：`waitForStableAnswer`，750ms 轮询、连续 3 次相同才算 settle，
有 `maxPolls` 硬上限（防 zombie page 把 sleep 返回值当稳定文本），每 10 次轮询做一次
`pageIsAlive` 探活，并显式 ignore "thinking" 类文本。

**c) 引用抽取**（`citations.ts`）：不靠 LLM 手打 `[1][2]`，而是答案 settle 后读
`button.citation-marker` → 点开面板 → 读 `.paragraph .highlighted` → Esc 关闭，返回结构化
`Citation[]`，再按 `source_format`（none/inline/footnotes/json）渲染。

**d) `_provenance` 封套**：每个结果带
`{provider: "google-notebooklm", model: "gemini-2.5", via: "chrome-automation",
grounding: "user-uploaded-documents", ai_generated: true}`，答案加 `[AI-GENERATED …]` 前缀。
—— 这是"AI 生成内容必须可追溯"的好实践，我们的产物落盘应该带同样的元数据。

**e) 运维细节**：headless Linux 上 `setup_auth` 需要 display，官方方案是
`xvfb-run -a npx notebooklm-mcp` 跑一次；之后持久 Chrome profile 让后续全 headless。
多账号靠 `--account <name>` 切独立 profile。

---

## 4. joeseesun/qiaomu-anything-to-notebooklm — 编排层思路（部分采纳）

- 5,907 stars，最后推送 2026-04-28，MIT，20 个文件
- **底座就是 notebooklm-py**：`main.py` 里 `subprocess.run(['notebooklm','create',title])`、
  `['notebooklm','source','add',file,'--title',title]`、`['notebooklm','ask',question]`。
  README 致谢里也直接写了 notebooklm-py。
- 定位是 Claude Code Skill：自然语言 → 识别内容源类型 → 抓取/转换 → 上传 → 生成。

### 值得采纳的编排经验
1. **意图 → 命令映射表**（"生成播客"→`generate audio`，"做成PPT"→`generate slide-deck`…），
   并且规定"**没有明确指令时默认只上传不生成**"。
2. **三轮递进深度分析**（`main.py: generate_questions_progressive`）：
   第一轮 4 题建立框架 → 第二轮 5 题深挖（按内容类型分书籍/视频/文章三套）→ 第三轮 3 题反刍。
   同一 conversation 内后轮受益于前轮上下文。
3. **两条 prompt 技巧**（很实用）：
   - 每题都加"完全基于已上传的文档内容回答，**不要搜索网络**"——防 NotebookLM 触发联网搜索。
   - 用"列出 / 拆解 / 指出 / 提取"这类动作词引导结构化回答，避免 yes/no 问题。
4. **YouTube 直接丢 URL 给 NotebookLM**，明确"**禁止**用 yt-dlp / whisper / 浏览器自动化自己抓字幕"。
5. `ask_notebooklm` 的失败判定：`returncode==0` **且** `len(answer)>10` 才算成功，带重试。

### 明确拒绝的部分
`scripts/fetch_url.sh`（380 行）的**六层付费墙绕过**：r.jina.ai/defuddle.md 代理 →
Googlebot/Bingbot UA 伪装 → 通用绕过（UA + X-Forwarded-For + Referer 伪装 + AMP + EU IP）→
archive.today → Google Cache → agent-fetch，声称覆盖 300+ 站点（NYT/WSJ/FT/Economist…）。
这是规避访问控制，**不引入**。同理它依赖的第三方 Get笔记 API 转写也不引入。

---

## 5. serenakeyitan/awesome-notebookLM-prompts — 纯素材库

- 4,571 stars，最后推送 2026-06-19，MIT
- **整个仓库只有 `README.md`（934 行）+ `LICENSE`，零代码**
- 内容：17 套 NotebookLM 幻灯片设计规范 prompt，分 6 组（编辑商务 / 流行街头 / 字体驱动 /
  艺术前卫 / 专业高端 / 运动高能）

风格清单：modern newspaper、sharp-edged minimalism、yellow×black、black×orange、
seminar minimal、manga、magazine、pink street、digital neo pop、mincho×手写、
deformed flat persona、royal blue×red 水彩、sculpture×vaporwave、tech neon、
studio mockup premium、sports athletic、anti-gravity artifact deck。

多数是日文语境的 YAML 规范，包含很具体的设计约束，例如：

> * **Complete Exclusion of Markdown Symbols**: 幻灯片文字里**任何情况下**都不许出现
>   `#` `*` `**` 等符号，只用纯文本。
> * **Extreme Jump Ratio**：标题与正文字号比必须 **≥10:1**。
> * 标题占幻灯片面积 30%–50%；封面禁止居中，用不对称构图。
> * 严格"1 slide = 1 message"。

价值：这是 `generate slide-deck "…"` 的现成 prompt 素材库。要落地需要**中文化 + 去掉日文
字体名（Hiragino/明朝体）+ 与 notebooklm-py 的 `--format` / `--length` 参数对齐**。
注意 notebooklm-py SKILL.md 记载：slide-deck **没有** `--orientation` 参数，竖版只能写进
description 里（如 "Create exactly 8 pages, using a vertical 9:16 portrait layout"）。

---

## 6. zstmfhy/zlibrary-to-notebooklm — 拒绝

- 1,716 stars，最后推送 2026-01-17，MIT，14 个文件
- 流程：Playwright 登录 Z-Library → 下载书（优先 PDF，降级 EPUB→Markdown）→
  大文件智能分块（>350k 词）→ `notebooklm create` + 上传 → 返回 notebook id
- 仓库自己写了免责声明，但 Z-Library 本身是盗版书库，**不引入**。

可借鉴的**纯工程**点只有两个（与来源无关）：
1. **大文件分块**：NotebookLM 单源有字数上限（`limits[3]`，Enterprise 是 500,000 词），
   超限要切块，且切块点要落在章节/段落边界上。
2. **格式自适应降级链**：PDF（保排版）→ EPUB→Markdown → 其它格式转换。

---

## 7. 本仓库已有分支的现状

`git ls-remote origin` 实测有 3 个分支，都在 2026-09-02：

| 分支 | 内容 |
|---|---|
| `main` (c78e1a2) | 只有 `README.md`（一行标题） |
| `origin/arena/01a06008-notebooklm-scz` (ff9881d) | **桌面 Web 版**：`app/server.py` 2,325 行 / 81 个 FastAPI 路由 + `app/static/` 单页前端（app.js 1,756 行）+ `scripts/nb(.ps1)` CLI 封装 + Windows `启动.bat`。37 个 commit。 |
| `origin/arena/01a061fb-notebooklm-scz` (7916d71) | 同上 + **Agent 接入层**：`.mcp.json` → `scripts/agent-mcp` → `python -m notebooklm.mcp`，加 `AGENTS.md`、`docs/arena-agent.md`。相对 0608 只多 7 个文件 155 行。 |
| **`arena/01a06208-notebooklm-scz`（本分支）** | 从 `main` 切出，**只有 README.md**，工作区干净 |

061f 的 Agent 层已经写对了几件事：`.mcp.json` 不含密钥不含绝对路径；`scripts/agent-mcp`
在启动前检查 `storage_state.json` / `master_token.json` 是否存在，缺失就打印可读指引并
`exit 1`（避免把 notebooklm-py 的长 traceback 甩给 Agent）；`AGENTS.md` 明确了
"NotebookLM 产物必须回看源码/测试/git diff 后才能用于代码修改"。

它没解决的问题（也是本次要解决的）：**认证从哪来、长任务怎么不阻塞、产物怎么落盘并被 Agent 复用**。


---

## SOURCE · `arena/01a06208-notebooklm-scz:docs/调研/02-环境实测.md`

<!-- blob: 3cf934c13908e588f0a21141c35abb4ea31d3fc5; bytes: 7452 -->

# Arena 沙箱环境实测

> 记录时间：2026-09-02。以下每一条都是在本分支的沙箱里真跑过的命令与真实输出，不是推断。
> 目的：把"Agent 能不能直接调 NotebookLM"这个问题从猜测变成事实。

## 一句话结论

**当前 Arena 沙箱无法访问 Google 任何域名 —— 出网是 SNI 白名单制，`notebooklm.google.com` 在
TLS 握手阶段就被切断。** 因此"Agent 在沙箱里直连 NotebookLM"这条路，在拿到出网许可之前是
物理不通的，与有没有凭据无关。

---

## 1. 出网能力：白名单，且是 TLS/SNI 层拦截

### 1.1 结果矩阵（`curl -4 -sS -o /dev/null -w "%{http_code}"`）

| 目标 | 结果 |
|---|---|
| `https://github.com` | **200** ✅ |
| `https://api.github.com` | **200** ✅ |
| `https://pypi.org/simple/notebooklm-py/` | **200** ✅ |
| `https://files.pythonhosted.org` | **200** ✅ |
| `https://registry.npmjs.org` | **200** ✅ |
| `https://notebooklm.google.com/` | `000` ❌ |
| `https://www.google.com` | `000` ❌ |
| `https://accounts.google.com` | `000` ❌ |
| `https://googleapis.com` | `000` ❌ |
| `https://oauth2.googleapis.com` | `000` ❌ |
| `https://play.google.com` | `000` ❌ |
| `https://example.com` | `000` ❌ |
| `https://www.wikipedia.org` | `000` ❌ |
| `https://huggingface.co` | `000` ❌ |
| `https://raw.githubusercontent.com` | `000` ❌ |

注意最后一行：连 `raw.githubusercontent.com` 都被拒。说明白名单是**按具体主机名**放行，
不是按"GitHub 生态"放行。

### 1.2 拦截发生在 TLS 层，不是路由层

```
$ timeout 10 bash -c 'cat < /dev/null > /dev/tcp/142.251.188.139/443'   # notebooklm.google.com
TCP OK                                     ← TCP 三次握手能成
$ curl -4 -v https://notebooklm.google.com/
* Connected to notebooklm.google.com (142.251.188.139) port 443 (#0)
* TLSv1.3 (OUT), TLS handshake, Client hello (1):
* OpenSSL SSL_connect: SSL_ERROR_SYSCALL   ← Client Hello 发出后连接被掐断
curl: (35) OpenSSL SSL_connect: SSL_ERROR_SYSCALL
```

对照组（github.com）能完整握手，而且证书暴露了拦截方：

```
$ curl -4 -v https://github.com/
*  subject: O=E2B; CN=github.com
*  issuer:  O=E2B; CN=E2B Proxy CA          ← 所有出网都过 E2B 的 MITM 代理
* using HTTP/2
< HTTP/2 200
```

所以：**代理能看到 SNI，白名单外的 SNI 直接 reset**。这意味着任何自建隧道
（Cloudflare Tunnel `*.trycloudflare.com`、Tailscale Funnel `*.ts.net`、ngrok…）
在沙箱里同样打不通，因为它们也是白名单外的 SNI。

### 1.3 顺带确认的环境事实

```
$ python3 --version     → Python 3.11.2
$ echo $DISPLAY         → (空)                    ← 无图形界面
$ ls /usr/bin/*chrom*   → (无)                    ← 没有 Chrome/Chromium
$ ip route              → default via 169.254.0.22 dev eth0
$ which uv              → (无)；有 pip3 / node / npm / jq
```

无 display + 无浏览器 ⇒ `notebooklm login`、`--browser-cookies`、以及两个 PleasePrompto 项目的
patchright 路线**全部不可用**。唯一可能的凭据来源是外部注入。

---

## 2. notebooklm-py 本体在沙箱里能装、能跑（离线部分正常）

```
$ python3 -m venv /home/user/nblm-test/.venv
$ .venv/bin/pip install "notebooklm-py==0.8.1"          → 成功（走 files.pythonhosted.org）
$ .venv/bin/notebooklm --version
NotebookLM CLI, version 0.8.1 (01c419a0)

$ .venv/bin/pip install "notebooklm-py[mcp]==0.8.1"     → 成功
$ .venv/bin/notebooklm-mcp --help
usage: notebooklm-mcp [-h] [--profile PROFILE] [--transport {stdio,http}]
                      [--host HOST] [--port PORT] [--log-level LOG_LEVEL]
```

未认证时的诊断输出是结构化 JSON，行为符合 SKILL.md 描述：

```
$ .venv/bin/notebooklm auth check --json
{
  "status": "error",
  "account": null, "profile": null,
  "storage_path": "/home/user/.notebooklm/profiles/default/storage_state.json",
  "master_token": null, "psidts": null,
  "checks": {
    "storage_exists": false, "json_valid": false,
    "cookies_present": false, "sid_cookie": false,
    "token_fetch": null          ← 只有 --test 才会去发网络请求
  },
  "details": { "error": "Storage file not found: …/storage_state.json" }
}
```

**结论**：安装、CLI 解析、参数校验、JSON 封套、skill 安装这些**离线能力全部可用**；
只有真正打到 Google 的那一跳不通。

`notebooklm agent show claude` 也能跑（打印内置 skill 模板）。顺带发现一个小瑕疵：
模板里 `[cookies]` extra 的名字渲染成了空串（`pip install "notebooklm-py"` 后跟一段
"rookiepy 在 3.13+ 编译失败"的说明），说明上游模板字符串有格式化 bug —— 我们不要依赖
`agent show` 的输出，直接用仓库根目录的 `SKILL.md`。

---

## 3. 我（本会话的 Agent）当前实际拥有的工具

本会话可用的工具是：`bash`、`ask_user`、`edit_file`、`read_file`、`fetch_page`、`web_search`、
`write_file`、`image_search`、`present_file`、`generate_image`、`add_voice`、`generate_speech`、
`start_process`/`get_process_output`/`stop_process`。

**其中没有任何 MCP 工具**，也没有 notebooklm 相关工具。

所以有一件事必须明确标注为**未验证**：即使仓库里放了 `.mcp.json`（061f 分支那样），
我也**无法确认 Arena 会加载项目级 MCP server** —— 这个会话里看不到任何 MCP 工具，
但"看不到"既可能是 Arena 不支持，也可能是没配置。这一点需要用户在 Arena 侧确认，
不能当成已知事实。

而 `fetch_page` / `web_search` 这两个工具是**在沙箱之外执行**的（它们能拿到 Google 相关页面），
所以它们可以读文档，但**不能**替 Agent 的业务代码发起 NotebookLM 调用。

---

## 4. 由此推出的三条硬约束

1. **出网**：Google 全域被 SNI 白名单挡住 ⇒ 直连方案需要 Arena 侧放开
   `notebooklm.google.com`（以及 `*.google.com` 的 cookie/token 域名），否则免谈。
2. **认证**：无 display、无浏览器 ⇒ 只能靠**外部注入**凭据
   （`storage_state.json` / `master_token.json` / `NOTEBOOKLM_AUTH_JSON`）。
   而按 notebooklm-py 自己的说法，cookie 快照 10 分钟内会被其它客户端顶替，
   所以真正能用的只有 **master token**。
3. **会话**：沙箱在会话之间会重置（SKILL.md 的 Cowork 章节描述的正是这种环境）⇒
   不能依赖 `notebooklm use` 的隐式上下文，所有命令必须 ID-pinned；
   凭据也不能只放在沙箱文件系统里，必须有持久化来源。

---

## 5. 复现方式

```bash
# 出网矩阵
for u in https://github.com https://pypi.org https://notebooklm.google.com \
         https://www.google.com https://oauth2.googleapis.com https://example.com; do
  printf "%-45s " "$u"; timeout 12 curl -4 -sS -o /dev/null -w "%{http_code}\n" "$u" 2>&1 | tail -1
done

# TLS 层验证
timeout 10 bash -c 'cat < /dev/null > /dev/tcp/142.251.188.139/443' && echo "TCP OK"
curl -4 -v -o /dev/null https://notebooklm.google.com/ 2>&1 | grep -E "Connected|TLS|SSL"
curl -4 -v -o /dev/null https://github.com/           2>&1 | grep -E "subject:|issuer:"

# 本体可用性
python3 -m venv /tmp/nb && /tmp/nb/bin/pip install -q "notebooklm-py[mcp]==0.8.1"
/tmp/nb/bin/notebooklm --version && /tmp/nb/bin/notebooklm auth check --json
```


---

## SOURCE · `arena/01a06208-notebooklm-scz:docs/调研/03-方案讨论.md`

<!-- blob: 48b2ce15ad94d8e40839d65fc1c7dc8fbc5361c3; bytes: 7240 -->

# 后续方案讨论（待决策）

> 前置阅读：[01-生态分析.md](01-生态分析.md)、[02-环境实测.md](02-环境实测.md)
> 本文只给判断和选项，不含未经验证的断言。标注 ⚠️ 的是**尚未验证**的假设。

## 0. 先纠正一个前提

你说"现在这个仓库里这个分支上有一个桌面端使用的应用"。实测不是：

```
$ git ls-tree -r arena/01a06208-notebooklm-scz --name-only
README.md
$ git log --oneline
c78e1a2 Initial commit
```

**本分支只有 README.md 一个文件**（从 `main` 的 c78e1a2 切出）。桌面应用在**另外两个 Arena 分支**上：
`origin/arena/01a06008-notebooklm-scz`（37 commits，FastAPI 81 路由 + 单页前端）和
`origin/arena/01a061fb-notebooklm-scz`（= 0608 + `.mcp.json`/`AGENTS.md`/`docs/arena-agent.md`）。
两者都已 fetch 到本地 worktree 逐行读过，内容摘要见 01 文档第 7 节。

所以本次不是"在已有应用上加 Agent 能力"，而是**在干净分支上从零建 Agent 侧**，
可以决定是否把 061f 的桌面应用一起带过来。

---

## 1. 决定性事实：沙箱打不通 Google

[02-环境实测.md](02-环境实测.md) 已实测：所有出网走 E2B 的 MITM 代理，按 SNI 白名单放行。
`github.com`/`api.github.com`/`pypi.org`/`files.pythonhosted.org`/`registry.npmjs.org` 通，
`*.google.com`/`googleapis.com` 全部在 TLS 握手阶段被 reset。连 `example.com` 和
`raw.githubusercontent.com` 也不通。

推论：
- **直连方案（Agent 在沙箱里 `notebooklm ask …`）现在跑不通**，跟凭据无关。
- **自建隧道也不行**（Cloudflare/Tailscale/ngrok 的域名同样是白名单外 SNI）。
- 但 **GitHub 完全可达**，且 `gh` 已认证（`arena-ai-coding-agent[bot]`，rate limit 5000）。
  ⇒ **Git / GitHub 本身可以当作 Agent 与外部执行环境之间的通信信道。**

---

## 2. 三条路线

### 路线 A：直连（能力最强，但依赖平台放开出网）

Agent 在沙箱内 `pip install "notebooklm-py[mcp]"`，用注入的 master token 直接驱动 CLI/MCP。

- 需要 Arena 侧放开：`notebooklm.google.com` + Google 的 cookie/token 相关域名
  （`accounts.google.com`、`*.google.com`、`googleapis.com`、`oauth2.googleapis.com`）。⚠️ 能否申请未知。
- 需要：一份 `master_token.json` 通过受保护的 Secret 路径注入（**不能**用 cookie 快照 ——
  上游文档明确说它约 10 分钟就被其它客户端顶替）。
- 长任务：我们有 `start_process`，可以后台跑 `artifact wait` + `download`，这条路是通的。
- 优点：能力最全（11 种产物、批量下载、深度研究），产物直接落盘到工作分支。
- 风险：Google 账号级凭据进入第三方沙箱；RPC method id 随时可能变。

### 路线 B：工单中继（不依赖任何平台许可，现在就能跑通闭环）

```
Arena Agent（沙箱）                    用户侧 Worker（有 Google 出网的机器）
  写 jobs/<id>.request.json  ──git push──▶  git pull
  轮询 jobs/<id>.result.json ◀──git push──  notebooklm <cmd> 执行
  （gh api，GitHub 可达）                  产物写 out/ + 状态写回
```

- Agent 侧：只负责**规划**（选笔记本、组来源、写 prompt、拆任务）、**下工单**、**验收结果**、
  **把产物写进分支并做代码/文档核验**。这些全部不需要 Google 出网。
- Worker 侧：一个 ~200 行的 Python 脚本，读工单 → 调 notebooklm CLI → 回写结果。
  凭据**永远不离开用户机器**，这是相对 A 的安全优势。
- 大文件（mp3/mp4/pdf）不适合走 Git ⇒ 只回传小产物（md/json/csv/png），
  或让 Worker 传 GitHub Release 再回传下载链接。
- 缺点：需要一个常驻 worker；有延迟；不是"实时对话"。

### 路线 C：只做资产，不跑真实调用（保底，零依赖）

在分支上交付一套**离线可验证**的 Agent 资产：`SKILL.md`（Agent 操作手册）、
`AGENTS.md`（本仓库约束）、`scripts/`（安装 + 封装 + 诊断）、工单 schema、产物落盘规范、
中文化 prompt 库。用户在本地 Claude Code/Codex 里立刻能用；出网一旦放开，同一套资产
直接升级到路线 A。

**建议：C 立刻做（无风险），B 紧随其后（现在就能端到端跑通），A 留作升级路径。**

---

## 3. 我打算照抄的上游经验（已逐条核对来源）

| 来源 | 抄什么 |
|---|---|
| notebooklm-py `SKILL.md` | `auth check --test --json` 双条件校验；Autonomy Rules（自动执行 vs 必须确认）；ID-pinned 工作流；exit code 约定；限流分级表；超时表 |
| notebooklm-py `AGENTS.md` | `--json` + 显式 notebook id；`NOTEBOOKLM_PROFILE=agent-<id>` 并发隔离 |
| notebooklm-py `docs/installation.md §D` | CI 只传 master token，不传 cookie 快照 |
| notebooklm-py `CLAUDE.md` | 8 个已知坑（RPC id 会变、嵌套参数位置敏感、CSRF 过期、client 绑 event loop…） |
| notebooklm-skill | `run.py` 自举包装器；`library.json` 笔记本目录（id/url/name/description/topics）；"Is that ALL you need to know?" 追问机制 |
| notebooklm-mcp | 选择器分层策略（若将来必须走浏览器）；`_provenance` 元数据封套 + `[AI-GENERATED]` 前缀；答案 settle 判定（连续 3 次稳定 + 硬轮询上限 + 探活） |
| qiaomu | 意图→命令映射表；三轮递进提问（4/5/3）；"完全基于文档，不要搜索网络"；YouTube 直接丢 URL |
| awesome-notebookLM-prompts | 17 套幻灯片风格规范 → 中文化后作为 `generate slide-deck` 素材库 |
| zlibrary | 只抄大文件分块（按章节边界）与格式降级链，**不碰来源** |

**明确不引入**：qiaomu 的六层付费墙绕过、zlibrary 的 Z-Library 下载、
两个 PleasePrompto 项目的浏览器自动化（沙箱无 display + 无 Chrome + 无 Google 出网，三重不可行，
且 notebooklm-skill 依赖的 `div.thinking-message` 已被 Google 删除）。

---

## 4. 安全红线（写进 AGENTS.md 并强制执行）

1. 凭据（`storage_state.json` / `master_token.json` / cookie / token / 密码）**永不进 Git、
   永不进日志、永不进 Issue/PR/聊天**。`.gitignore` 覆盖 `.notebooklm/`、`out/`、`.venv/`、`.env`。
2. 推荐**专用小号**：master token 是"infostealer 级"凭据，改密码不能撤销它，只能显式 revoke。
3. 上传仓库内容前必须排除 `.git/`、`.venv/`、`.notebooklm/`、`.env`、密钥、构建与依赖目录。
4. NotebookLM 产物是 AI 生成内容，**不得未经核验直接当事实或生产代码提交**；
   写进仓库的研究报告必须标注来源与生成时间。
5. 破坏性命令（`delete` / `source clean` / `auth logout` / `profile delete`）必须显式确认。

---

## 5. 需要你决策的问题

见对话中的提问。核心四个：
1. 能否申请放开 Google 出网（决定走 A 还是 B）？
2. 认证方式与凭据来源（master token vs storage_state vs 完全不给）？
3. 要不要把 061f 的桌面应用合并进本分支？
4. 第一个端到端要产出的东西是什么（播客 / 研究报告 / 幻灯片 / 代码库问答）？


---

## SOURCE · `arena/01a06208-notebooklm-scz:jobs/README.md`

<!-- blob: c6824266c0c2b6351ac9e0379374db3503203740; bytes: 12463 -->

# 工单（job）格式

工单是 Agent 与 NotebookLM 之间的**唯一契约**：Agent 只写工单，不直接拼 CLI 命令。
这样做的三个好处 —— ①路线 A（沙箱直连）和路线 B（外部 worker）跑的是同一份工单；
②每次调用都有留痕，能对账、能重放；③校验在动手之前发生，不会跑到一半才失败。

## 目录约定

| 路径 | 含义 | 谁写 |
|---|---|---|
| `jobs/samples/*.job.json` | 样例，永远可跑 `plan` | 人 |
| `jobs/pending/*.job.json` | 待执行 | **Agent** |
| `jobs/running/*.job.json` | worker 已取走 | worker |
| `jobs/done/*.result.json` | 执行结果（成功失败都写） | worker |
| `jobs/.local/` | 本地直跑的结果，**已 gitignore** | 你 |

## 十种 kind

九种产新产物 + 一种重试：

| kind | 产物 | 落盘 | 典型耗时 | 样例 |
|---|---|---|---|---|
| `research_report` | 简报 / 学习指南 / 博客稿 | `.md` | 5–15 min | `report-demo` |
| `podcast` | 音频概览 | `.m4a` | 10–20 min | `podcast-demo` |
| `slides` | 幻灯片 | `.pdf` / `.pptx` | 5–15 min | `slides-demo` |
| `quiz` | 测验 | `.md` / `.json` / `.html` | 5–15 min | `quiz-demo` |
| `flashcards` | 闪卡 | `.md` / `.json` / `.html` | 5–15 min | `flashcards-demo` |
| `video` | 视频概览 | `.mp4` | 15–45 min | `video-demo` |
| `infographic` | 信息图 | `.png` | 5–15 min | `infographic-demo` |
| `data_table` | 数据表 | `.csv` | 5–15 min | `datatable-demo` |
| `mind_map` | 思维导图 | `.json` | 同步返回 | `mindmap-demo` |
| `retry_artifact` | 原地重试失败产物 | 随原类型 | 视原类型 | `retry-demo` |

九种产物共用同一条骨架：**建（或复用）笔记本 → 加来源 → 各自等索引 → 可选提问 →
生成 → 等完成 → 下载**。差别只在最后三步的命令形状，由 `KINDS` 表声明式描述。

两个例外：

- `mind_map` **同步返回** `{mind_map, note_id, kind}`，没有 `task_id`，
  所以没有「等生成」这一步（步数 5 而不是 6），下载用的 id 取自 `note_id`。
- `retry_artifact` 骨架完全不同（**无来源、无提问**，共 4 步）：
  复用笔记本 → `artifact retry` → 等 → 下载。见下面专节。

### `retry_artifact` —— 失败产物的正确重试方式

`AGENTS.md` 写了「任务失败时不要重试 `generate` —— 那会创建重复产物、白烧配额」。
这条 kind 就是那条规矩的工具化替代：`artifact retry` **原地重跑**，
ARTIFACT_ID 不变，`poll` / `wait` 继续对它有效。

```jsonc
{ "id": "rty-20260902-001",
  "kind": "retry_artifact",
  "notebook": { "id": "nb_xxx" },        // **必须给 id**，重试不能新建笔记本
  "generate": {
    "artifact_id": "abc123",             // 必填；支持唯一前缀
    "artifact_kind": "podcast"           // 必填；决定重试后按哪种产物下载
  } }
```

约束（校验会逐条拦）：必须有 `notebook.id`；**不接受** `sources` 和 `ask`
（重试沿用原产物的资料，也不做问答）；`artifact_kind` 必须是九种产物之一。

> 上游还有一个 `generate revise-slide`（改单页幻灯片），但它要求 `-a <已生成的
> slide deck id> --slide <0-based 序号>`，属于对已有产物的**局部编辑**而非新产物，
> 目前没做成工单 kind。`generate cinematic-video` 则是 `generate video
> --format cinematic` 的别名 —— 用 `video` + `format: "cinematic"` 即可覆盖，
> 不需要单独的 kind（需 Google AI Ultra）。

## 通用字段

```jsonc
{
  "id": "rpt-20260902-001",        // 必填，结果靠它对账
  "kind": "research_report",       // 十种，见下表

  "notebook": {
    "title": "调研：xxx",           // 只给 title：先查精确同名的，命中就复用，没命中才建
    "id": null,                     // 给 id = 直接用，不发任何查询
    "reuse": true                   // false = 跳过复用检查，强制新建
  },

  "sources": [                      // 必填，非空；Standard 档上限 50 条
    { "type": "url",      "value": "https://…" },
    { "type": "file",     "value": "docs/x.md" },   // 相对仓库根，必须真实存在
    { "type": "text",     "value": "直接粘贴的正文" },
    { "type": "youtube",  "value": "https://youtube.com/watch?v=…" }
  ],

  "ask": [                          // 可选；同一 conversation 内后轮受益于前轮
    "问题一。完全基于已上传的文档内容回答，不要搜索网络。"
  ],

  "generate": { /* 见下，按 kind 不同 */ },
  "download": { "format": "…" },    // 仅 slides / quiz / flashcards 有；其余产物无此参数
  "output":   { "dir": "out" },
  "policy":   { "confirm_destructive": true }
}
```

## `generate` 段：按 kind 的可选值

可选值全部对着已安装的 notebooklm-py **0.8.1** 的 `--help` 逐个核对过，
核对记录见 [../docs/arena-agent.md](../docs/arena-agent.md) 第 8 节。

### `research_report`
```jsonc
{ "format": "briefing-doc",      // briefing-doc | study-guide | blog-post | custom
  "language": "zh_Hans",
  "prompt": null,                // format=custom 时**必填**
  "prompt_file": null }          // 与 prompt 互斥；长 prompt 用这个
```

### `podcast`
```jsonc
{ "format": "deep-dive",         // deep-dive | brief | critique | debate
  "length": "default",           // short | default | long
  "language": "zh_Hans",
  "prompt": "聚焦某个角度" }      // 走位置参数
```

### `slides`
```jsonc
{ "format": "detailed",          // detailed | presenter
  "length": "default",           // default | short
  "language": "zh_Hans",
  "prompt_file": "prompts/slides/报纸编辑风.txt" }   // 风格库见 prompts/slides/
```
配套 `"download": { "format": "pdf" }` 或 `"pptx"`。

> **slide-deck 没有 `--orientation` 参数**（infographic 才有）。想要竖版，只能把
> "9:16 竖版" 写进 prompt 正文，并且把页数也写进去（例如「严格 8 页，9:16 竖版」）。

### `quiz`
```jsonc
{ "quantity": "standard",        // fewer | standard | more
  "difficulty": "hard",          // easy | medium | hard
  "prompt": null }               // 可选，走位置参数（DESCRIPTION）
```
配套 `"download": { "format": "markdown" }`（或 `json` / `html`）。

> **quiz 没有 `--language`** —— 它的 `--help` 里就没有这个参数（0.8.1 与 0.8.2
> 都核对过），所以给它写 `language` 不会生效。
>
> 但它**有** description 位置参数（Usage 是 `quiz [OPTIONS] [DESCRIPTION]`），
> 所以 `prompt` 是会生效的。

### `flashcards`
```jsonc
{ "quantity": "standard",        // fewer | standard | more
  "difficulty": "hard",          // easy | medium | hard
  "prompt": null }               // 走位置参数
```
配套 `"download": { "format": "markdown" }`（或 `json` / `html`）。
和 quiz 一样**没有 `--language`**。落盘时 `markdown` 会归一成 `.md` 扩展名。

### `video`
```jsonc
{ "format": "explainer",         // explainer | brief | cinematic | short
  "style": "whiteboard",         // auto | custom | classic | whiteboard | kawaii |
                                 // anime | watercolor | retro-print | heritage | paper-craft
  "style_prompt": null,          // 配 style=custom 用；给了它而 style≠custom 会被校验拦下
  "language": "zh_Hans",
  "prompt": "某个角度" }          // 走位置参数
```

> `format: "cinematic"` 是 Veo 3 电影级视频：**忽略 `--style`**、耗时 30–40 分钟、
> 需要 Google AI Ultra 订阅。默认 timeout 已按 2700s 配。

### `infographic`
```jsonc
{ "orientation": "portrait",     // landscape | portrait | square
  "detail": "standard",          // concise | standard | detailed
  "style": "bento-grid",         // auto | sketch-note | professional | bento-grid |
                                 // editorial | instructional | bricks | clay |
                                 // anime | kawaii | scientific
  "language": "zh_Hans",
  "prompt": "……" }
```

> **infographic 是唯一有 `--orientation` 的产物**。幻灯片想要竖版只能写进 prompt，
> 信息图可以直接给参数。

### `data_table`
```jsonc
{ "language": "zh_Hans",
  "prompt": "整理成表格：列A | 列B | 列C" }   // **必填**，CLI 的 DESCRIPTION 是必需的
```
`data_table` 没有任何枚举选项 —— 表结构完全由自然语言描述决定。

### `mind_map`
```jsonc
{ "kind": "note-backed",         // interactive | note-backed
  "language": "zh_Hans",
  "prompt": "按某某分类组织" }    // 翻译成 --instructions
```

> `mind_map` 与其它媒体不同：**没有 `--prompt-file`**（CLI 里就没这个参数），
> 只能用 `prompt` → `--instructions`。校验会拦住给 `prompt_file` 的工单。
>
> 而且它**同步返回** `{mind_map, note_id, kind}`，没有 `task_id`，所以计划里
> **没有「等生成」这一步**（5 步而不是 6 步），下载用的 id 取自 `note_id`。

## 两条容易踩的规矩（来自 notebooklm-py 上游）

1. **`research_report` + `format: "custom"` 时 prompt 必须给**。CLI 的 `--append` 在
   `--format custom` 下**被静默忽略**，所以 custom 的 prompt 走位置参数。
   `nbjob.py` 已经按这个分流，校验层也会拦住缺 prompt 的 custom 工单。
2. **`type: "file"` 的路径必须真实存在**。校验时就检查，避免上传阶段才报错。

## 四个子命令

```bash
python3 tools/nbjob.py validate jobs/samples/report-demo.job.json   # 只校验
python3 tools/nbjob.py plan     jobs/samples/report-demo.job.json   # 打印将执行的命令，**不碰网络**
python3 tools/nbjob.py execute  jobs/pending/xxx.job.json           # 真跑（需凭据 + 出网）
python3 tools/nbjob.py ship     jobs/done/xxx.result.json           # 产物分流回传
python3 tools/nbjob.py ship     jobs/done/xxx.result.json --dry-run # 只判定，不上传
```

`plan` 和 `ship --dry-run` 是离线可跑的 —— 在 Google 不可达的沙箱里，
它们是 Agent 唯一能做的自证。

### `ship` 干什么

`execute` 只负责把产物下载到 `out/`。`ship` 决定它怎么回到 Agent 手里：

| 产物 | 通道 | 依据 |
|---|---|---|
| `.md` / `.json` / `.csv` / `.txt` / `.html` 且 ≤ 2 MB | **Git** | 留在 `out/`，`.gitignore` 已放行这些扩展名 |
| 其它（`.m4a` `.mp4` `.pptx` `.pdf` `.png` …）或 > 2 MB | **GitHub Release** | `gh release upload`，文件挪到 `out/.shipped/` |

判定结果写进 result 的 `delivery` 段，Agent 读它就知道该 `git pull` 拿文件、
还是去 `delivery.url` 下载。上传失败时 `channel` 是 `"failed"`、退出码 1，
并且**回滚**本次新建却没传上东西的空 release。

> ⚠️ 上传那一段**只在有 GitHub 出网的机器上成立**（Route B 的 worker）。
> Arena 沙箱里 `uploads.github.com` 被 SNI 封锁，只能跑 `--dry-run`。
> 详见 [../docs/arena-agent.md](../docs/arena-agent.md) 第 6 节的出网边界表。

## 结果文件

```jsonc
{
  "id": "rpt-20260902-001",
  "kind": "research_report",
  "status": "ok",                   // ok | failed | planned
  "failed_at": null,                // 失败时是第几步
  "captured": {                     // ID-pinned 链路，每一步的 id 都留下来了
    "notebook_id": "…", "source_0": "…", "task_id": "…", "artifact_file": "…"
  },
  "answers": [ { "question": "…", "answer": "…", "references": [ { "source_id": "…", "cited_text": "…" } ] } ],
  "steps": [ { "n": 1, "label": "…", "cmd": "…", "exit": 0, "ok": true } ],
  "provenance": {
    "provider": "google-notebooklm", "via": "notebooklm-py-cli",
    "grounding": "user-provided-sources", "ai_generated": true,
    "note": "内容由 Gemini 基于所给来源生成，未经人工核验不得直接当作事实或生产代码。"
  }
}
```

**失败也会写结果文件** —— Agent 读 `status` / `failed_at` / `steps[].stderr` 就知道卡在哪，
不用去猜。而且失败时会**立即停在那一步**，不会继续发起生成任务白白消耗配额。

## 验证状态

四种 kind 的编排逻辑都在 **mock CLI** 上跑通过（全绿路径 + 中途失败即停），
`plan` 输出的命令与 0.8.1 的 `--help` 逐项一致。

但**没有在真实 NotebookLM 上跑通过** —— 沙箱打不通 Google。这是当前最大的未验证项。


---

## SOURCE · `arena/01a06208-notebooklm-scz:prompts/slides/README.md`

<!-- blob: 8e3124ba0b57003098affca3f151c89eb0652cab; bytes: 2962 -->

# 幻灯片风格库

素材来自 [serenakeyitan/awesome-notebookLM-prompts](https://github.com/serenakeyitan/awesome-notebookLM-prompts)
（MIT，4.5k stars，全仓库只有 934 行 README、零代码）。原素材是日文语境的 YAML 设计规范，
这里做了三件事：

1. **中文化** —— 原文大量依赖 Hiragino / 明朝体等日文字体名，直接给中文内容会打架。
2. **对齐 notebooklm-py 的真实接口** —— 原文假设你在 Web UI 里贴 prompt；这里要能通过
   `--prompt-file` 传进去。
3. **保留原作者标注的硬性约束** —— 这些是实测有效的，不是装饰。

## 怎么用

```jsonc
// jobs/samples/slides-demo.job.json
"generate": {
  "format": "detailed",
  "prompt_file": "prompts/slides/报纸编辑风.txt"
}
```

`prompt_file` 会翻译成 `notebooklm generate slide-deck --prompt-file <路径>`。
用 `--prompt-file` 而不是内联 `prompt` 的原因：这些规范动辄上千字，**超出 shell 命令行长度限制**。

## 三条必须知道的接口事实（对着 0.8.1 的 `--help` 核对过）

1. **slide-deck 没有 `--orientation` 参数**（infographic 才有）。想要竖版，只能把
   "9:16 竖版" 写进 prompt 正文。上游 SKILL.md 的实测结论是：`.pptx` 画布可能仍是 16:9，
   但**每页内嵌图片**可以渲染成 9:16 —— 用 `python-pptx` 抽出来就是竖版素材。
2. **只有两个 `--format`**：`detailed` / `presenter`。**只有两个 `--length`**：`default` / `short`。
   风格不是靠这两个参数控制的，是靠 prompt。
3. **页数要写进 prompt**。想稳定拿到 8 页，就写 "严格 8 页"，别指望参数。
4. `--append` 在 `--format custom` 下**被静默忽略**（report 命令的坑，slide-deck 同理要小心）；
   本仓库的工单走位置参数 / `--prompt-file`，不碰 `--append`。

## 已收录的风格

| 文件 | 出处风格 | 适合 |
|---|---|---|
| `报纸编辑风.txt` | modern newspaper | 商业分析、行业观察、观点输出 |
| `极简留白风.txt` | sharp-edged minimalism | 作品集、技术方案、克制表达 |
| `黄黑编辑风.txt` | yellow × black editorial | 强对比、演讲、需要抓眼 |
| `杂志排版风.txt` | magazine style | 长文改写、故事性内容 |
| `科技霓虹风.txt` | tech / art / neon | AI、基础设施、前沿技术 |
| `研讨会极简风.txt` | for seminar use, minimal text | 教学、分享会、少字多图 |

## 所有风格共用的硬约束（原作者反复强调）

- **禁止 Markdown 符号**：幻灯片正文里任何情况下都不出现 `#` `*` `**` `-` 等符号，只用纯文本。
- **极端字号跳变**：标题与正文字号比 ≥ 10:1。"半吊子的字号差"是最常见的失败。
- **1 页 = 1 个信息**。
- **封面禁止居中**：用不对称构图制造张力。
- **标题要短**：2–5 个字的短语当视觉锚点，副标题才承载完整意思。


---

## SOURCE · `arena/01a06208-notebooklm-scz:prompts/slides/报纸编辑风.txt`

<!-- blob: bfe2d75d784416dc7965bc5cebe13d12670c075f; bytes: 2398 -->

你是主导「新经济商业媒体」视觉的顶级美术指导。基于下面的设计定义，生成一套视觉优先、
能激发商业读者智识兴奋感的演示幻灯片。输出语言跟随内容本身的语言。

【绝对禁止的输出格式规则】
- 完全排除 Markdown 符号：幻灯片正文里任何情况下都不出现 # * ** - 等符号。
- 纯文本：幻灯片上只显示纯文字，不带任何装饰符号。

【封面的特别规格 —— 这一页要做到最高质量】
- 设计哲学：取自瑞士风格（国际主义排版）或包豪斯。
- 布局：禁止平庸的居中对齐。用不对称构图制造张力。用网格系统把标题压到极左上或极左下，
  或者刻意留出大面积负空间来提炼气质。
- 标题文案设计：
  · 主标题（超大、短语）：抛弃描述性词汇。用 2 到 5 个字的短词或短语当视觉锚点
    （例如「解放」「崩塌与重生」「AI 的真面目」）。
  · 副标题（超小、利益驱动）：直击读者痛点，用一句简洁的话暗示解法
    （例如「为什么你的广告失效了？」「如何摆脱任务、回到创造」）。
  · 比例关系：主标题打眼睛，副标题刺大脑。

【全部幻灯片的总体设计定义】
1. 核心主题：聪明而流行的商业信息娱乐（智识好奇 × 娱乐性）
2. 配色：
   - 背景：白色 #FFFFFF 或冷灰 #F5F5F5
   - 文字：墨黑 #111111
   - 强调：电光黄 #FFCC00 或警示红 #FF3333
3. 视觉风格：
   - 采用「智能手机优先的经济媒体」的设计哲学。
   - 用「人物单色剪影」或「背景过曝的时髦照片」来突出主体。
   - 用荧光笔式的黄色底纹高亮关键数字和关键词，制造节奏。
4. 排版（文字即图形）：
   - 标题做到超巨大，占幻灯片面积的 30% 到 50%。
   - 极端跳变比：标题与正文的字号比必须达到 10:1 以上。不允许半吊子的字号差。
   - 标题用超粗黑体当作「面」来处理，再把极细的英文塞进缝隙里制造透气感。
5. 整体结构：
   - 严格遵守「一页一个信息」。
   - 布局在「留白」与「文字」之间二选一。用塞满屏幕的文字区块与大片空无之间的对比引导视线。
   - 把结论（punchline）啪地一下砸在页面中央，或者让它溢出边缘以制造冲击。


---

## SOURCE · `arena/01a06208-notebooklm-scz:prompts/slides/杂志排版风.txt`

<!-- blob: 83307f36a8f16a2db88234ec1897e0bdf24316ed; bytes: 1388 -->

演示设计规范：杂志排版风

【风格定位】
把内容当作一期杂志来做。有栏目感、有导读、有图注、有版面呼吸。适合长文改写、
故事性内容、人物与案例。

【绝对禁止的输出格式规则】
- 幻灯片正文里任何情况下都不出现 # * ** - 等 Markdown 符号，只用纯文本。

【配色】
- 背景：米白 #F7F4EF（不要用纯白，太冷）
- 正文：深灰 #2B2B2B
- 标题：纯黑 #000000
- 强调：一种饱和度中等的颜色（建议 #B4472E 砖红 或 #2E5E4E 墨绿），只用于图注和引文标记。

【排版】
- 标题用衬线体，正文用无衬线体 —— 这个搭配是杂志感的核心，不要反过来。
- 标题与正文字号比 ≥ 8:1。
- 正文分两栏或三栏排，栏间距明显。
- 引文（pull quote）单独放大，占半栏宽，用强调色。

【布局】
- 每页有明确的版面结构：报头区（小字栏目名 + 页码）、主内容区、图注区。
- 图片必须配图注，图注用极小字号 + 强调色。
- 图片处理：满幅出血，或者严格对齐到栏宽。禁止浮在中间的中等尺寸图。
- 一页一个信息，但允许有「导读页」用三行小字预告后面内容。

【封面】
- 像杂志封面：主标题 2 到 5 个字压在图片上，周围散布极小的栏目文字。
- 禁止居中对称构图。


---

## SOURCE · `arena/01a06208-notebooklm-scz:prompts/slides/极简留白风.txt`

<!-- blob: 193c24fd85f0b4a361a636800cb1f5d0e842333b; bytes: 1487 -->

演示设计规范：精炼极简作品集风格

【风格定位】
左上角导航、留白美学、网格化布局。克制、精确、有呼吸感。适合技术方案、作品集、
需要让内容自己说话的场合。

【绝对禁止的输出格式规则】
- 幻灯片正文里任何情况下都不出现 # * ** - 等 Markdown 符号，只用纯文本。

【配色】
- 背景：纯白 #FFFFFF
- 主文字：近黑 #1A1A1A
- 次文字：中灰 #8C8C8C
- 唯一强调色：单一一种，全文档只用它（建议 #0057FF 或 #FF4D00），
  只用于一个元素：页码、或一个关键词、或一条分隔线。不许滥用。

【排版】
- 标题：无衬线细体（Light / Regular），字重绝不加粗到 Bold。
- 极端跳变比：标题与正文字号比 ≥ 10:1。
- 行距放宽到 1.6 以上，让文字有呼吸。
- 全部左对齐。禁止居中。

【布局】
- 12 栏网格。内容只占其中 6 到 8 栏，剩下的真的留空。
- 标题固定在左上角或左下角，与页面边缘保持固定的大间距。
- 一页一个信息。如果一页想说的超过一件事，拆成两页。
- 封面：只有主标题（2 到 5 个字）+ 一行极小的副标题 + 大量负空间。禁止居中。

【禁止】
- 禁止阴影、渐变、圆角卡片、图标堆砌。
- 禁止每页都放图。图只在真正需要时出现，且要满幅或极小，不要中间尺寸。
- 禁止用颜色区分层级 —— 用字号和位置区分。


---

## SOURCE · `arena/01a06208-notebooklm-scz:prompts/slides/研讨会极简风.txt`

<!-- blob: 8ab2dc01af7492f89539860f7641625363a0c696; bytes: 1454 -->

演示设计规范：研讨会 / 教学用极简风

【风格定位】
为「有人站在旁边讲」而设计。页面只承担提词和锚点作用，信息密度刻意压低。
适合教学、技术分享会、工作坊。

【绝对禁止的输出格式规则】
- 幻灯片正文里任何情况下都不出现 # * ** - 等 Markdown 符号，只用纯文本。

【核心原则：字要少】
- 每页正文不超过 30 个字。超过就拆页。
- 禁止把讲稿搬上页面。页面上只留「讲到这里时观众需要看见的那一句」。
- 禁止项目符号列表超过 3 条。
- 禁止在页面上放表格，除非表格本身就是这一页的全部信息。

【配色】
- 背景：白 #FFFFFF（投影环境下白底最稳，深色底容易糊）
- 文字：黑 #111111
- 强调：一种颜色，只用于当页最关键的那一个词或数字。

【排版】
- 标题与正文字号比 ≥ 8:1。
- 正文最小 28pt 等效 —— 会场最后一排要能看清。
- 全部左对齐或全部居中，二选一，全文档统一。

【布局】
- 一页一个信息，没有例外。
- 代码页：只放需要读的那几行，其余用省略。字号可以比正文小，但不能小到看不清。
- 图页：图占满，文字退到极小的一行说明。

【封面】
- 主题（一行）+ 讲者（一行）+ 日期（一行）。就这些。
- 禁止放议程页超过一页，禁止放「关于我」超过三行。


---

## SOURCE · `arena/01a06208-notebooklm-scz:prompts/slides/科技霓虹风.txt`

<!-- blob: dd998fd43a92a068b14acee200ce851fc22fa701; bytes: 1578 -->

演示设计规范：科技霓虹 / 构成主义风

【风格定位】
构成主义 × 科技艺术 × 前卫。适合 AI、基础设施、前沿技术。核心概念是「智能的架构」——
把抽象的技术关系画成有结构感的几何构成。

【绝对禁止的输出格式规则】
- 幻灯片正文里任何情况下都不出现 # * ** - 等 Markdown 符号，只用纯文本。

【配色】
- 背景：深蓝黑 #0B1020
- 主强调：霓虹青 #00E5FF
- 次强调：品红 #FF2E88
- 文字：白 #FFFFFF，次级文字用 40% 透明度的白
- 霓虹色只用于线条、边框、关键数字，不用于大面积填充。

【排版】
- 标题：无衬线超粗体，可以带轻微字距拉开（tracking +50）。
- 极端跳变比：标题与正文字号比 ≥ 10:1。
- 允许等宽字体呈现代码、指标、ID —— 这是科技感的来源，但每页不超过一处。
- 关键数字用霓虹色 + 超大字号。

【布局】
- 用细线（1px）划分网格，网格线可见，形成「架构图」的观感。
- 允许斜线切割、错位堆叠、图层叠加。
- 每一页要有一个明确的视觉主体：一个几何构成、一张架构图、或一个超大数字。
- 一页一个信息。

【封面】
- 主标题 2 到 5 个字，用霓虹青描边或半透明填充。
- 背景放一个抽象的几何构成（线条 + 节点 + 网格），暗示「系统」。
- 禁止居中对称。

【禁止】
- 禁止彩虹渐变、禁止发光过度（glow 要克制）。
- 禁止把霓虹色当正文颜色 —— 会不可读。


---

## SOURCE · `arena/01a06208-notebooklm-scz:prompts/slides/黄黑编辑风.txt`

<!-- blob: 4bb5059212107d60643bd23a45fbca8fc59c46a7; bytes: 1311 -->

演示设计规范：黄黑强对比编辑风

【风格定位】
高电压、强对比、像一张会喊话的海报。适合演讲、需要抓住注意力、观点鲜明的内容。

【绝对禁止的输出格式规则】
- 幻灯片正文里任何情况下都不出现 # * ** - 等 Markdown 符号，只用纯文本。

【配色】
- 主背景：纯黑 #0A0A0A
- 主色块：电光黄 #FFE500
- 文字：黑底上用白 #FFFFFF，黄底上用黑 #0A0A0A
- 不允许第三种颜色。整个文档只有黑、黄、白。

【排版】
- 标题：超粗无衬线（Black / Heavy 字重），当作色块来处理，不是当作文字。
- 极端跳变比：标题与正文字号比 ≥ 10:1。
- 标题可以溢出页面边缘、可以被色块裁切一半 —— 这是风格的一部分。
- 英文小字用极细字重塞在角落，与超粗标题形成对比。

【布局】
- 每一页在「全黑底」与「全黄底」之间交替，制造翻页节奏。
- 禁止居中构图。用对角线、错位、大色块切割画面。
- 关键数字做到占页面高度的一半以上。
- 一页一个信息。

【封面】
- 主标题 2 到 5 个字，撑满页面宽度的 80% 以上。
- 副标题一行极小字，压在主标题下方或页面底边。
- 禁止放 logo 墙、禁止放目录页。


---

## SOURCE · `arena/01a06208-notebooklm-scz:requirements.txt`

<!-- blob: e951bd9c1baa3af3d37c26aef9dc9be46c72803c; bytes: 592 -->

# NotebookLM 底座：唯一被采纳的实现（详见 docs/调研/01-生态分析.md）
#
# [mcp]      —— 项目级 MCP 入口（scripts/agent-mcp -> python -m notebooklm.mcp）
# [headless] —— master token 认证（gpsoauth，纯 Python），无浏览器无人值守必需
# [markdown] —— source fulltext -f markdown，研究报告回看来源原文时用
#
# 不装 [browser]：沙箱无 display 无 Chromium，交互式 login 在这里跑不了。
# 不装 [cookies]：同理，扒浏览器 cookie 需要本机有浏览器。
notebooklm-py[mcp,headless,markdown]>=0.8.1,<0.9


---

## SOURCE · `main:README.md`

<!-- blob: ccb9acbdac644ccf382860467347947d6c1348a5; bytes: 16 -->

# notEBooklm-scz
