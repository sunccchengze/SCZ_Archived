# ============================================================
# 提取 docx 里的所有图片 -> Picture 文件夹，按编号命名 1.JPG、2.JPG……
# 规则：
#   - 原本就是 JPG/JPEG 的图片：直接复制原始文件字节（零损失、不重新编码）
#   - 其他格式（PNG/GIF/BMP/TIFF 等）：用最高质量(100)转成 JPG
#     （JPG 本身是有损格式，质量 100 已是 GDI+ 能输出的最高画质；
#       透明背景会填充为白色）
#
# 用法（在 PowerShell 里运行）：
#   .\scripts\extract-images.ps1
# 或指定文件：
#   .\scripts\extract-images.ps1 -DocxPath "C:\Users\45120\Desktop\英仔爱心社年度总结材料.docx"
# ============================================================

param(
    [string]$DocxPath = "C:\Users\45120\Desktop\英仔爱心社年度总结材料.docx",
    [string]$PictureDir = "C:\Users\45120\Desktop\Picture",
    [switch]$NoClean   # 加上 -NoClean 表示不删除旧的 Picture 文件夹，追加处理
)

$ErrorActionPreference = 'Stop'
try { [Console]::OutputEncoding = [System.Text.Encoding]::UTF8 } catch {}

if (-not (Test-Path -LiteralPath $DocxPath)) {
    throw "找不到文件: $DocxPath"
}
if (-not $NoClean -and (Test-Path -LiteralPath $PictureDir)) {
    Write-Host "删除旧的 Picture 文件夹: $PictureDir"
    Remove-Item -LiteralPath $PictureDir -Recurse -Force
}
New-Item -ItemType Directory -Path $PictureDir -Force | Out-Null

Add-Type -AssemblyName System.IO.Compression.FileSystem
Add-Type -AssemblyName System.Drawing

# docx 本质是 zip，解压到临时目录
$tmp = Join-Path $env:TEMP ("docx_extract_" + [guid]::NewGuid().ToString("N"))
New-Item -ItemType Directory -Path $tmp -Force | Out-Null

try {
    $docxFull = (Resolve-Path -LiteralPath $DocxPath).Path
    [System.IO.Compression.ZipFile]::ExtractToDirectory($docxFull, $tmp)
    $mediaDir = Join-Path $tmp "word\media"
    if (-not (Test-Path -LiteralPath $mediaDir)) {
        throw "这个文档里没有图片（word/media 目录不存在）"
    }

    # 按名字里的数字排序（image1、image2……image10 能排对顺序）
    $files = Get-ChildItem -LiteralPath $mediaDir -File | Sort-Object {
        $m = [regex]::Match($_.BaseName, '\d+')
        if ($m.Success) { [int]$m.Value } else { 999999 }
    }

    $n = 0
    foreach ($f in $files) {
        $n++
        $outPath = Join-Path $PictureDir ("{0}.JPG" -f $n)

        if ($f.Extension -match '(?i)^\.jpe?g$') {
            # 本来就是 JPG：直接复制，保持原始画质，完全不重新编码
            Copy-Item -LiteralPath $f.FullName -Destination $outPath -Force
        } else {
            # 其他格式：转 JPG，质量 100
            $img = [System.Drawing.Image]::FromFile($f.FullName)
            $bmp = $null
            try {
                $bmp = New-Object System.Drawing.Bitmap($img.Width, $img.Height)
                $g = [System.Drawing.Graphics]::FromImage($bmp)
                try {
                    $g.Clear([System.Drawing.Color]::White)   # 透明背景填白色
                    $g.DrawImage($img, 0, 0, $img.Width, $img.Height)
                } finally {
                    $g.Dispose()
                }

                $encoder = [System.Drawing.Imaging.ImageCodecInfo]::GetImageEncoders() |
                           Where-Object { $_.MimeType -eq 'image/jpeg' }
                $encParams = New-Object System.Drawing.Imaging.EncoderParameters(1)
                $encParams.Param[0] = New-Object System.Drawing.Imaging.EncoderParameter(
                    [System.Drawing.Imaging.Encoder]::Quality, [long]100)
                $bmp.Save($outPath, $encoder, $encParams)
                $encParams.Dispose()
            } finally {
                if ($bmp) { $bmp.Dispose() }
                $img.Dispose()
            }
        }
        Write-Host ("已处理 {0}: {1} -> {2}.JPG" -f $n, $f.Name, $n)
    }

    Write-Host "`n================== 完成 ==================" -ForegroundColor Green
    Write-Host "共提取 $n 张图片，全部为 JPG（质量 100），保存在："
    Write-Host "  $PictureDir"
} finally {
    Remove-Item -LiteralPath $tmp -Recurse -Force -ErrorAction SilentlyContinue
}
