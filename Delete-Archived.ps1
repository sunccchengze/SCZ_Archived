<#
.SYNOPSIS
  批量删除账号 sunccchengze 下已归档/已核对的闲置仓库（不可逆）。

.DESCRIPTION
  默认只做 Dry-Run + 预检，绝不动服务器。
  加 -Execute 才会真正删除。

  删除清单（21 个）是本次归档已完成、或空仓/已合并/已单独归档的仓库：
    18 个已完整入档 + fengdian001（空仓） + hogwarts-sorting-hat-quiz（PR#1 已合并且已入档）
    + yiming-wish（已单独入档）。

  ⚠️ 下列仓库是“保护名单”，脚本根本不会删除：
    ai, wendang11, turbine-blade-ai-platform, 123, wode, yiming, 以及清单外的其它所有仓。
    wendang11 因 skills-library 子模块（1.2GB / 39,480 文件）超出归档仓上限而未物料化，
    按当前决定“两个仓都保留”，所以不删。

.PARAMETER Execute
  加 -Execute 才真正调用 gh / GitHub API 删除；否则只预览。

.PARAMETER UseAPI
  跳过 gh，走 GitHub REST API。需要 $env:GH_TOKEN 或 $env:GITHUB_TOKEN。

.PARAMETER Owner
  默认 sunccchengze。

.PARAMETER ArchivePath
  ai 归档仓在本机的检出路径。用于预检每个目录里的 README.ARCHIVE.md / TIMESTAMP.md。
  默认当前目录。

.PARAMETER SkipPrecheck
  跳过本地预检（不推荐，仅用于确认知道自己在做什么）。

.EXAMPLE
  .\Delete-Archived.ps1
  .\Delete-Archived.ps1 -Execute
  .\Delete-Archived.ps1 -Execute -UseAPI
  .\Delete-Archived.ps1 -ArchivePath C:\path\to\ai -Execute
#>
param(
    [switch]$Execute,
    [switch]$UseAPI,
    [switch]$SkipPrecheck,
    [string]$Owner = 'sunccchengze',
    [string]$ArchivePath = (Get-Location).Path
)

$ErrorActionPreference = 'Stop'

# ---- 删除清单（已核对） ----
$DeleteList = @(
    'IELTS20260423scz',
    'physics-exam-1',
    'physics-exam-2',
    'rzyz-2026-gaokaojiayou',
    'dawu-6.1',
    'gaoshu-6.1',
    'sectionA-cet6',
    '-0517',
    'ryh20260510',
    '20260524',
    '0530-planck',
    'liangji',
    '202606060606AI',
    '06112cosmosagentmode',
    'Goooodbye_s-g',
    'claude-cpt',
    'yimingshengri',
    'tushupdf',
    'fengdian001',
    'hogwarts-sorting-hat-quiz',
    'yiming-wish'
)

# ---- 保护名单：即使有人误加也绝不删 ----
$Protected = @(
    'ai',
    'wendang11',
    'turbine-blade-ai-platform',
    '123',
    'wode',
    'yiming',
    'zixue2026',
    '-SKILL-',
    '-',
    'notEBooklm-scz',
    '0824-2026',
    'sucheng',
    'wind_farm_viz'
)

# ---- 防止清单与保护名单冲突 ----
foreach ($r in $DeleteList) {
    if ($Protected -contains $r) {
        throw "错误：'$r' 同时出现在删除清单和保护名单，请先修正脚本后重试。"
    }
}

Write-Host ''
Write-Host ('正在使用归档仓路径: ' + $ArchivePath) -ForegroundColor Cyan
Write-Host ('将要删除的仓库数: ' + $DeleteList.Count) -ForegroundColor Cyan

# ---- 1. 本地预检 ----
if (-not $SkipPrecheck) {
    Write-Host '== 预检：归档目录是否已保留身份卡 ==' -ForegroundColor Yellow
    if (-not (Test-Path (Join-Path $ArchivePath '.git'))) {
        Write-Warning 'ArchivePath 看起来不是 git 仓库目录（找不到 .git）。如果没错可加 -SkipPrecheck。'
    }

    $missing = @()
    foreach ($repo in $DeleteList) {
        if ($repo -eq 'fengdian001') {
            # 空仓本就没有内容目录，跳过
            Write-Host ('  - {0,-28} (空仓，无内容目录)' -f $repo) -ForegroundColor DarkGray
            continue
        }
        $dir  = Join-Path $ArchivePath $repo
        $rd   = Join-Path $dir 'README.ARCHIVE.md'
        $ts   = Join-Path $dir 'TIMESTAMP.md'
        $ok   = (Test-Path $dir) -and (Test-Path $rd) -and (Test-Path $ts)
        if ($ok) {
            Write-Host ('  - {0,-28} OK' -f $repo) -ForegroundColor Green
        } else {
            Write-Host ('  - {0,-28} 缺文件 dir={1} README={2} TIMESTAMP={3}' -f $repo, (Test-Path $dir), (Test-Path $rd), (Test-Path $ts)) -ForegroundColor Red
            $missing += $repo
        }
    }

    if ($missing.Count -gt 0) {
        Write-Host ''
        Write-Warning ("以下仓库在本机归档目录中没找到 README.ARCHIVE.md / TIMESTAMP.md：" + ($missing -join ', '))
        Write-Host '若你已确认仓库已归档、只是本机 checkout 不完全，可加 -SkipPrecheck；否则脚本不继续。' -ForegroundColor Magenta
        if (-not $Execute) { return }
        if (-not $SkipPrecheck) { return }   # 无 -SkipPrecheck 时，即便 -Execute 也拒绝删除
    } else {
        Write-Host '✔ 预检通过（fengdian001 空仓除外）。' -ForegroundColor Green
    }
}

# ---- 2. 展示清单 ----
Write-Host ''
Write-Host '== 将执行删除：==' -ForegroundColor Cyan
$DeleteList | ForEach-Object { Write-Host ('  - {0}/{1}' -f $Owner, $_) }

if (-not $Execute) {
    Write-Host ''
    Write-Host 'Dry-Run 结束：未删除任何仓库。' -ForegroundColor Yellow
    Write-Host '确认后运行： .\Delete-Archived.ps1 -Execute' -ForegroundColor Yellow
    return
}

# ---- 3. 再次强调 ----
Write-Host ''
Write-Host '>>> 即将不可逆删除以上仓库。10 秒内 Ctrl+C 可取消。 <<<' -ForegroundColor Magenta
Start-Sleep -Seconds 10

# ---- 4a. gh 模式 ----
if (-not $UseAPI) {
    if (-not (Get-Command gh -ErrorAction SilentlyContinue)) {
        Write-Warning '未找到 gh CLI，改为尝试 REST API。'
    } else {
        # 确保有 delete_repo scope
        try {
            gh auth status | Out-Null
        } catch {
            Write-Host 'gh 未登录，先： gh auth login' -ForegroundColor Yellow
        }
        Write-Host '提示：如果删除报 403 Resource not accessible，请先在 Powershell 执行： gh auth refresh -s delete_repo' -ForegroundColor Yellow

        foreach ($repo in $DeleteList) {
            $full = "$Owner/$repo"
            Write-Host ('=> 删除 ' + $full) -ForegroundColor Cyan
            gh repo delete $full --yes
            if ($LASTEXITCODE -ne 0) {
                Write-Warning "删除 $full 失败。可能原因：缺 delete_repo scope / 需要网页确认 / 仓库不存在。"
            } else {
                Write-Host '   已删除' -ForegroundColor DarkGray
            }
        }
        return
    }
}

# ---- 4b. REST API 模式 ----
$token = $env:GH_TOKEN
if (-not $token) { $token = $env:GITHUB_TOKEN }
if (-not $token) {
    throw 'REST API 模式需要 $env:GH_TOKEN 或 $env:GITHUB_TOKEN；或改用 gh 模式（去掉 -UseAPI）。'
}

$headers = @{
    'Authorization' = "token $token"   # 若你的 token 是 Bearer 型可改成 "Bearer $token"
    'Accept'        = 'application/vnd.github+json'
    'User-Agent'    = 'powershell-delete-archived'
}

foreach ($repo in $DeleteList) {
    $uri = "https://api.github.com/repos/$Owner/$repo"
    Write-Host ('=> DELETE ' + $uri) -ForegroundColor Cyan
    try {
        Invoke-RestMethod -Method Delete -Uri $uri -Headers $headers | Out-Null
        Write-Host '   已删除' -ForegroundColor DarkGray
    } catch {
        $detail = $_.ErrorDetails.Message
        Write-Warning "删除 $repo 失败: $detail"
        if ($detail -match 'https://github.com/settings/connections/') {
            Write-Host '   需要打开该 URL 并在 GitHub 确认删除授权；确认后再重跑。' -ForegroundColor Yellow
        }
    }
}

Write-Host ''
Write-Host '完成。' -ForegroundColor Green
