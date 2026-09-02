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

# PowerShell 5.1 defaults to SSL3/TLS1.0, which GitHub's API rejects with
# "Could not create SSL/TLS secure channel". Force TLS 1.2.
try {
    [Net.ServicePointManager]::SecurityProtocol = `
        [Net.ServicePointManager]::SecurityProtocol -bor [Net.SecurityProtocolType]::Tls12
} catch { }

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

# ---- gh.exe locator ----
# winget installs gh but does NOT refresh PATH in an already-open shell.
# So look on PATH, then reload PATH from the registry, then probe the
# standard install locations.
function Find-GhExe {
    $c = Get-Command gh -ErrorAction SilentlyContinue
    if ($c) { return $c.Source }

    # reload PATH from Machine + User (picks up a fresh winget install)
    try {
        $m = [Environment]::GetEnvironmentVariable('Path','Machine')
        $u = [Environment]::GetEnvironmentVariable('Path','User')
        $env:Path = ($m, $u | Where-Object { $_ }) -join ';'
    } catch { }
    $c = Get-Command gh -ErrorAction SilentlyContinue
    if ($c) { return $c.Source }

    # NOTE: Join-Path throws on a null base when EAP='Stop', and
    # ProgramFiles(x86) is absent on some systems -- build paths defensively.
    $bases = @(
        @($env:ProgramFiles,            'GitHub CLI\gh.exe'),
        @(${env:ProgramFiles(x86)},     'GitHub CLI\gh.exe'),
        @($env:LOCALAPPDATA,            'Programs\GitHub CLI\gh.exe'),
        @($env:LOCALAPPDATA,            'Microsoft\WinGet\Links\gh.exe'),
        @($env:ProgramData,             'chocolatey\bin\gh.exe'),
        @($env:SCOOP,                   'shims\gh.exe'),
        @($env:USERPROFILE,             'scoop\shims\gh.exe')
    )
    foreach ($b in $bases) {
        $root = $b[0]
        if (-not $root) { continue }
        $pth = (($root.TrimEnd('\')) + '\' + $b[1])
        try { if (Test-Path -LiteralPath $pth) { return $pth } } catch { }
    }
    return $null
}

# ---- 3. resolve credentials BEFORE the countdown ----
# Decide up front how we will authenticate, so we never waste the 10s wait
# only to die on a missing token.

$mode  = $null      # 'gh' or 'api'
$token = $null

if (-not $UseAPI) {
    $ghExe = Find-GhExe
    if ($ghExe) {
        Write-Host ('Found gh: ' + $ghExe) -ForegroundColor DarkGray
        $ghOk = $true
        $eapSave = $ErrorActionPreference
        $ErrorActionPreference = 'Continue'
        try {
            $null = & $ghExe auth status 2>&1
            if ($LASTEXITCODE -ne 0) { $ghOk = $false }
        } catch { $ghOk = $false }
        $ErrorActionPreference = $eapSave
        if ($ghOk) {
            $mode = 'gh'
            Write-Host 'Auth: gh CLI (logged in).' -ForegroundColor Green
        } else {
            Write-Warning 'gh CLI found but not logged in.'
            Write-Host '  Run these two commands, then rerun this script:' -ForegroundColor Yellow
            Write-Host ('    & "' + $ghExe + '" auth login') -ForegroundColor Yellow
            Write-Host ('    & "' + $ghExe + '" auth refresh -s delete_repo') -ForegroundColor Yellow
        }
    } else {
        Write-Warning 'gh CLI not found (not on PATH and not in the standard install folders).'
    }
}

if (-not $mode) {
    $token = $env:GH_TOKEN
    if (-not $token) { $token = $env:GITHUB_TOKEN }

    if (-not $token) {
        Write-Host ''
        Write-Host 'No gh CLI and no token in environment.' -ForegroundColor Yellow
        Write-Host 'Paste a GitHub Personal Access Token to delete via REST API.' -ForegroundColor Yellow
        Write-Host 'Required scope:  delete_repo  (classic token), or a fine-grained' -ForegroundColor DarkGray
        Write-Host 'token with Administration: Read and write on these repos.' -ForegroundColor DarkGray
        Write-Host 'Create one at: https://github.com/settings/tokens' -ForegroundColor DarkGray
        Write-Host 'Input is hidden. Press Enter with nothing to abort.' -ForegroundColor DarkGray
        $sec = Read-Host -AsSecureString 'Token'
        if ($sec -and $sec.Length -gt 0) {
            $bstr  = [Runtime.InteropServices.Marshal]::SecureStringToBSTR($sec)
            $token = [Runtime.InteropServices.Marshal]::PtrToStringAuto($bstr)
            [Runtime.InteropServices.Marshal]::ZeroFreeBSTR($bstr)
        }
    }

    if (-not $token) {
        Write-Host ''
        Write-Host 'No credentials available. Nothing was deleted.' -ForegroundColor Red
        Write-Host 'Options:' -ForegroundColor Yellow
        Write-Host '  1. winget install --id GitHub.cli, then OPEN A NEW PowerShell window' -ForegroundColor Yellow
        Write-Host '     (PATH does not refresh in an existing one), gh auth login, rerun' -ForegroundColor Yellow
        Write-Host '  2. $env:GH_TOKEN = "ghp_xxx"        then  .\Delete-Archived.ps1 -Execute' -ForegroundColor Yellow
        return
    }

    $mode = 'api'
    $token = $token.Trim()

    # NOTE: PS 5.1 throws if User-Agent is passed inside -Headers; use -UserAgent.
    $headers = @{
        'Authorization' = "token $token"
        'Accept'        = 'application/vnd.github+json'
    }
    $UA = 'powershell-delete-archived'

    # verify the token works AND has admin on a sample repo, before countdown
    Write-Host ''
    Write-Host 'Verifying token...' -ForegroundColor Cyan
    try {
        $who = Invoke-RestMethod -Uri 'https://api.github.com/user' -Headers $headers -UserAgent $UA
        Write-Host ('  authenticated as: ' + $who.login) -ForegroundColor Green
    } catch {
        Write-Host '  Token rejected by GitHub (401). Nothing was deleted.' -ForegroundColor Red
        return
    }

    $probe = $DeleteList | Where-Object { $_ -ne 'fengdian001' } | Select-Object -First 1
    try {
        $pr = Invoke-RestMethod -Uri "https://api.github.com/repos/$Owner/$probe" -Headers $headers -UserAgent $UA
        if ($pr.permissions.admin) {
            Write-Host ('  admin rights on ' + $Owner + '/' + $probe + ': yes') -ForegroundColor Green
        } else {
            Write-Host ('  admin rights on ' + $Owner + '/' + $probe + ': NO') -ForegroundColor Red
            Write-Host '  This token cannot delete repos. Need delete_repo scope' -ForegroundColor Yellow
            Write-Host '  (classic) or Administration: Read and write (fine-grained).' -ForegroundColor Yellow
            Write-Host '  Nothing was deleted.' -ForegroundColor Red
            return
        }
    } catch {
        Write-Warning ('  Could not read ' + $Owner + '/' + $probe + '. Continuing anyway.')
    }
}

# ---- 4. final warning ----
Write-Host ''
Write-Host ('Auth mode: ' + $mode) -ForegroundColor Cyan
Write-Host '>>> About to irreversibly delete the repos above. Press Ctrl+C within 10 seconds to cancel. <<<' -ForegroundColor Magenta
Start-Sleep -Seconds 10

# ---- 5. delete ----
$okList   = @()
$failList = @()

foreach ($repo in $DeleteList) {
    $full = "$Owner/$repo"
    Write-Host ('=> DELETE ' + $full) -ForegroundColor Cyan

    if ($mode -eq 'gh') {
        $eapSave = $ErrorActionPreference
        $ErrorActionPreference = 'Continue'
        $ghOut = (& $ghExe repo delete $full --yes 2>&1 | Out-String)
        $ghCode = $LASTEXITCODE
        $ErrorActionPreference = $eapSave
        if ($ghCode -eq 0) {
            Write-Host '   deleted' -ForegroundColor DarkGray
            $okList += $repo
        } else {
            if ($ghOut -match 'Could not resolve|404|not found') {
                Write-Host '   already gone (404)' -ForegroundColor DarkGray
                $okList += $repo
                continue
            }
            Write-Warning ("Delete failed: $full -- " + $ghOut.Trim())
            Write-Host ('   If this is a scope error, run:  & "' + $ghExe + '" auth refresh -s delete_repo') -ForegroundColor Yellow
            $failList += $repo
        }
    } else {
        try {
            Invoke-RestMethod -Method Delete -Uri "https://api.github.com/repos/$Owner/$repo" -Headers $headers -UserAgent $UA | Out-Null
            Write-Host '   deleted' -ForegroundColor DarkGray
            $okList += $repo
        } catch {
            $code = $null
            if ($_.Exception.Response) { $code = [int]$_.Exception.Response.StatusCode }
            $detail = $_.ErrorDetails.Message
            if ($code -eq 404) {
                Write-Host '   already gone (404)' -ForegroundColor DarkGray
                $okList += $repo
            } else {
                Write-Warning ("Delete failed for $repo (HTTP $code): $detail")
                if ($detail -match 'https://github.com/settings/connections/') {
                    Write-Host '   Open that URL, authorize deletion, then rerun.' -ForegroundColor Yellow
                }
                $failList += $repo
            }
        }
    }
}

# ---- 6. verify: confirm each repo is really gone ----
Write-Host ''
Write-Host '== Verifying deletions ==' -ForegroundColor Yellow
$stillThere = @()
foreach ($repo in $DeleteList) {
    $exists = $false
    if ($mode -eq 'gh') {
        # use gh so private repos are checked with real credentials
        $eapSave = $ErrorActionPreference
        $ErrorActionPreference = 'Continue'
        $null = & $ghExe api "repos/$Owner/$repo" 2>&1
        if ($LASTEXITCODE -eq 0) { $exists = $true }
        $ErrorActionPreference = $eapSave
    } else {
        $vh = @{ 'Accept' = 'application/vnd.github+json'; 'Authorization' = "token $token" }
        try {
            Invoke-RestMethod -Uri "https://api.github.com/repos/$Owner/$repo" -Headers $vh -UserAgent $UA | Out-Null
            $exists = $true
        } catch { $exists = $false }
    }
    if ($exists) {
        Write-Host ('  {0,-28} STILL EXISTS' -f $repo) -ForegroundColor Red
        $stillThere += $repo
    } else {
        Write-Host ('  {0,-28} gone' -f $repo) -ForegroundColor Green
    }
}

# ---- 7. summary ----
Write-Host ''
Write-Host '================ SUMMARY ================' -ForegroundColor Cyan
Write-Host ('  requested : ' + $DeleteList.Count)
Write-Host ('  deleted   : ' + $okList.Count) -ForegroundColor Green
if ($failList.Count -gt 0) {
    Write-Host ('  failed    : ' + $failList.Count) -ForegroundColor Red
    Write-Host ('    ' + ($failList -join ', ')) -ForegroundColor Red
}
if ($stillThere.Count -gt 0) {
    Write-Host ('  still up  : ' + ($stillThere -join ', ')) -ForegroundColor Red
} else {
    Write-Host '  all target repos confirmed gone.' -ForegroundColor Green
}
Write-Host 'Protected (untouched): ai, wendang11, turbine-blade-ai-platform, 123, wode, yiming' -ForegroundColor DarkGray
Write-Host ''
Write-Host 'Done.' -ForegroundColor Green
