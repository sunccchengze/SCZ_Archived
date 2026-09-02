# ============================================================
# 上传 docx 到 GitHub 仓库 (sunccchengze/wendang11)
#
# 用法（在 PowerShell 里直接运行）：
#   1. 普通方式（推荐，用 git + 你电脑上已有的 GitHub 登录）：
#        .\scripts\upload-to-github.ps1
#
#   2. 如果电脑没装 git，改用 GitHub API 方式（需要 Token）：
#        $env:GITHUB_TOKEN = "你的PAT"
#        .\scripts\upload-to-github.ps1 -UseApi
#
# 也可用参数覆盖默认值，例如：
#   .\scripts\upload-to-github.ps1 -DocxPath "C:\xxx\别的文件.docx" -Branch "main"
# ============================================================

param(
    [string]$DocxPath = "C:\Users\45120\Desktop\英仔爱心社年度总结材料.docx",
    [string]$RepoUrl = "https://github.com/sunccchengze/wendang11.git",
    [string]$RepoOwner = "sunccchengze",
    [string]$RepoName = "wendang11",
    [string]$Branch = "main",
    [string]$WorkDir = "C:\Users\45120\Desktop\wendang11-upload",
    [string]$CommitMessage = "上传：英仔爱心社年度总结材料",
    [switch]$UseApi,
    [string]$Token = $env:GITHUB_TOKEN
)

$ErrorActionPreference = 'Stop'
# 让中文在控制台正常显示（PowerShell 5.1 兼容写法）
try { [Console]::OutputEncoding = [System.Text.Encoding]::UTF8 } catch {}

# ---------- 0. 检查源文件 ----------
if (-not (Test-Path -LiteralPath $DocxPath)) {
    throw "找不到要上传的文件: $DocxPath"
}
$sizeMB = [math]::Round((Get-Item -LiteralPath $DocxPath).Length / 1MB, 2)
Write-Host "待上传文件: $DocxPath ($sizeMB MB)"

# ---------- 方式一：git（推荐） ----------
if (-not $UseApi) {
    $git = Get-Command git -ErrorAction SilentlyContinue
    if (-not $git) {
        throw "电脑上没有安装 git。两种解决办法：`n  1) 安装 Git for Windows：https://git-scm.com/download/win （装完重新打开 PowerShell）`n  2) 用 API 方式上传：把脚本参数改为 -UseApi，并提供 -Token"
    }

    if (Test-Path -LiteralPath $WorkDir) {
        if (Test-Path -LiteralPath (Join-Path $WorkDir ".git")) {
            Write-Host "本地仓库已存在，先同步: $WorkDir"
            Push-Location $WorkDir
            try { git pull --rebase origin $Branch } catch { Write-Warning "pull 失败，继续尝试：$_" }
            Pop-Location
        } else {
            Write-Warning "目录 $WorkDir 已存在但不是 git 仓库，先删除再重新克隆"
            Remove-Item -LiteralPath $WorkDir -Recurse -Force
            git clone $RepoUrl $WorkDir
        }
    } else {
        Write-Host "克隆仓库到: $WorkDir"
        git clone $RepoUrl $WorkDir
    }

    Push-Location $WorkDir
    try {
        # 复制 docx 到仓库根目录
        Copy-Item -LiteralPath $DocxPath -Destination $WorkDir -Force
        git -c core.quotepath=false add -A

        # 把提交信息写入 UTF-8 临时文件，用 -F 提交，避免中文乱码
        $msgFile = Join-Path $env:TEMP ("commit_msg_" + [guid]::NewGuid().ToString("N") + ".txt")
        Set-Content -Path $msgFile -Value $CommitMessage -Encoding UTF8
        git commit -F $msgFile
        Remove-Item -LiteralPath $msgFile -ErrorAction SilentlyContinue

        git push origin $Branch
        Write-Host "`n================== 上传成功 ==================" -ForegroundColor Green
        Write-Host "已把以下文件推到 $Branch 分支："
        Write-Host "  https://github.com/$RepoOwner/$RepoName/blob/$Branch/英仔爱心社年度总结材料.docx"
    } finally {
        Pop-Location
    }
}

# ---------- 方式二：GitHub REST API（不需要 git，需要 Token） ----------
else {
    if ([string]::IsNullOrWhiteSpace($Token)) {
        throw "使用 -UseApi 需要提供 Token：`n  1) 打开 https://github.com/settings/tokens 生成 Personal Access Token（勾选 repo 权限）`n  2) 运行:  `$env:GITHUB_TOKEN = '你的token'`  再重新运行本脚本"
    }

    $fileName = Split-Path -Leaf $DocxPath
    $apiPath = "https://api.github.com/repos/$RepoOwner/$RepoName/contents/" + [uri]::EscapeDataString($fileName)

    # 文件超过 100MB 时 GitHub contents API 会拒绝（一般 docx 不会超）
    if ((Get-Item -LiteralPath $DocxPath).Length -gt 100MB) {
        throw "文件超过 100MB，contents API 无法上传，请改用 git 方式"
    }

    $headers = @{
        Authorization = "Bearer $Token"
        "User-Agent"  = "PowerShell"
    }
    $body = @{
        message = $CommitMessage
        content = [Convert]::ToBase64String([IO.File]::ReadAllBytes((Resolve-Path -LiteralPath $DocxPath)))
        branch  = $Branch
    } | ConvertTo-Json -Compress

    $null = Invoke-RestMethod -Uri $apiPath -Method Put -Headers $headers -Body $body -ContentType "application/json; charset=utf-8"
    Write-Host "`n================== 上传成功 ==================" -ForegroundColor Green
    Write-Host "已把文件提交到 $Branch 分支："
    Write-Host "  https://github.com/$RepoOwner/$RepoName/blob/$Branch/$fileName"
}

Write-Host "`n接下来告诉我一声，我就在云端把 docx 里的图片全部提取出来，建好 Picture 文件夹（1.JPG、2.JPG…… 全部 JPG、质量 100、不压缩）。"
