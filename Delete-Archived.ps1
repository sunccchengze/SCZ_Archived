<#
.SYNOPSIS
  Batch-delete already-archived/idle repos under sunccchengze (irreversible).

.DESCRIPTION
  Default = Dry-Run + local precheck only. Add -Execute to really delete.

  Delete list (21) = repos already archived in `ai`, plus empty / merged /
  separately-archived ones:
    18 archived + fengdian001 (empty) + hogwarts-sorting-hat-quiz (PR#1 merged,
    content verified identical) + yiming-wish (archived separately).

  PROTECTED repos are never deleted even if listed:
    ai, wendang11, turbine-blade-ai-platform, 123, wode, yiming and every
    repo not in the list. wendang11 is kept because skills-library submodule
    (~1.2GB / 39,480 files) cannot fit in the archive repo limits; both
    wendang11 and turbine-blade-ai-platform are intentionally retained.

.PARAMETER Execute
  With -Execute, really call gh / GitHub API. Without it, only preview.

.PARAMETER UseAPI
  Skip gh and use GitHub REST API. Requires $env:GH_TOKEN or $env:GITHUB_TOKEN.

.PARAMETER Owner
  Default sunccchengze.

.PARAMETER ArchivePath
  Path to local checkout of the `ai` archive repo, used for the precheck of
  README.ARCHIVE.md / TIMESTAMP.md. Default = current directory.

.PARAMETER SkipPrecheck
  Skip local precheck (not recommended).

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

# ---- delete list (verified) ----
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

# ---- protected repos: never delete even if mistakenly added ----
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

# ---- sanity check: no overlap between delete list and protected list ----
foreach ($r in $DeleteList) {
    if ($Protected -contains $r) {
        throw "Error: '$r' is in both DeleteList and Protected. Fix the script first."
    }
}

Write-Host ''
Write-Host ('Archive path: ' + $ArchivePath) -ForegroundColor Cyan
Write-Host ('Repos to delete: ' + $DeleteList.Count) -ForegroundColor Cyan

# ---- 1. local precheck ----
if (-not $SkipPrecheck) {
    Write-Host '== Precheck: check identity cards exist ==' -ForegroundColor Yellow

    if (-not (Test-Path (Join-Path $ArchivePath '.git'))) {
        Write-Warning 'ArchivePath does not look like a git checkout (no .git). If this is expected, use -SkipPrecheck.'
    }

    $missing = @()
    foreach ($repo in $DeleteList) {
        if ($repo -eq 'fengdian001') {
            Write-Host ('  - {0,-28} empty repo, no content dir' -f $repo) -ForegroundColor DarkGray
            continue
        }
        $dir = Join-Path $ArchivePath $repo
        $rd  = Join-Path $dir 'README.ARCHIVE.md'
        $ts  = Join-Path $dir 'TIMESTAMP.md'
        if ((Test-Path $dir) -and (Test-Path $rd) -and (Test-Path $ts)) {
            Write-Host ('  - {0,-28} OK' -f $repo) -ForegroundColor Green
        } else {
            Write-Host ('  - {0,-28} missing (dir={1} README={2} TIMESTAMP={3})' -f $repo, (Test-Path $dir), (Test-Path $rd), (Test-Path $ts)) -ForegroundColor Red
            $missing += $repo
        }
    }

    if ($missing.Count -gt 0) {
        Write-Host ''
        Write-Warning ('Missing identity cards: ' + ($missing -join ', '))
        Write-Host 'If you are sure the repos are archived but this checkout is incomplete, add -SkipPrecheck. Otherwise stopping.' -ForegroundColor Magenta
        if (-not $SkipPrecheck) { return }
    } else {
        Write-Host 'Precheck passed.' -ForegroundColor Green
    }
}

# ---- 2. show plan ----
Write-Host ''
Write-Host '== Will delete these repos: ==' -ForegroundColor Cyan
$DeleteList | ForEach-Object { Write-Host ('  - {0}/{1}' -f $Owner, $_) }

if (-not $Execute) {
    Write-Host ''
    Write-Host 'Dry-Run finished. Nothing was deleted.' -ForegroundColor Yellow
    Write-Host 'To actually delete, run:  .\Delete-Archived.ps1 -Execute' -ForegroundColor Yellow
    return
}

# ---- 3. final warning ----
Write-Host ''
Write-Host '>>> About to irreversibly delete the repos above. Press Ctrl+C within 10 seconds to cancel. <<<' -ForegroundColor Magenta
Start-Sleep -Seconds 10

# ---- 4a. gh mode ----
if (-not $UseAPI) {
    if (-not (Get-Command gh -ErrorAction SilentlyContinue)) {
        Write-Warning 'gh CLI not found. Falling back to REST API.'
    } else {
        try {
            gh auth status | Out-Null
        } catch {
            Write-Host 'gh is not logged in. Run:  gh auth login' -ForegroundColor Yellow
        }
        Write-Host 'If delete fails with 403, first run:  gh auth refresh -s delete_repo' -ForegroundColor Yellow

        foreach ($repo in $DeleteList) {
            $full = "$Owner/$repo"
            Write-Host ('=> DELETE ' + $full) -ForegroundColor Cyan
            gh repo delete $full --yes
            if ($LASTEXITCODE -ne 0) {
                Write-Warning "Delete failed: $full (missing delete_repo scope / web confirmation / repo might not exist)."
            } else {
                Write-Host '   deleted' -ForegroundColor DarkGray
            }
        }
        return
    }
}

# ---- 4b. REST API mode ----
$token = $env:GH_TOKEN
if (-not $token) { $token = $env:GITHUB_TOKEN }
if (-not $token) {
    throw 'REST API mode needs $env:GH_TOKEN or $env:GITHUB_TOKEN. Or use gh mode (remove -UseAPI).'
}

$headers = @{
    'Authorization' = "token $token"
    'Accept'        = 'application/vnd.github+json'
    'User-Agent'    = 'powershell-delete-archived'
}

foreach ($repo in $DeleteList) {
    $uri = "https://api.github.com/repos/$Owner/$repo"
    Write-Host ('=> DELETE ' + $uri) -ForegroundColor Cyan
    try {
        Invoke-RestMethod -Method Delete -Uri $uri -Headers $headers | Out-Null
        Write-Host '   deleted' -ForegroundColor DarkGray
    } catch {
        $detail = $_.ErrorDetails.Message
        Write-Warning "Delete failed for $repo : $detail"
        if ($detail -match 'https://github.com/settings/connections/') {
            Write-Host '   Open that URL and confirm deletion authorization, then rerun.' -ForegroundColor Yellow
        }
    }
}

Write-Host ''
Write-Host 'Done.' -ForegroundColor Green
