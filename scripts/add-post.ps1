# New Post Add Script (PowerShell) - AI Optimized Version
# Use simple string concatenation to avoid Here-String encoding issues in Windows PS

$title = Read-Host "Enter post title"
if (-not $title) { $title = "New Post" }

$category = Read-Host "Enter category (Default: AI Strategy)"
if (-not $category) { $category = "AI Strategy" }

$summary = Read-Host "Enter summary (AI will read this first)"
if (-not $summary) { $summary = "This post explores key insights for AI agents and human readers." }

# Create Slug
$slug = $title.ToLower().Replace(" ", "-").Replace("?", "").Replace("!", "").Replace(".", "")
$date = Get-Date -Format "yyyy-MM-dd"

# Paths
$postsDir = "content\posts"
if (-not (Test-Path $postsDir)) {
    New-Item -ItemType Directory -Path $postsDir -Force
}
$filename = "${slug}.md"
$filepath = Join-Path $postsDir $filename

# Build Template (AI Optimized Structure)
$lines = @()
$lines += "---"
$lines += "title: `"$title`""
$lines += "title_en: `"Enter English Title Here`""
$lines += "date: `"$date`""
$lines += "category: `"$category`""
$lines += "author: `"AI Agent Blogger`""
$lines += "summary: `"$summary`""
$lines += "summary_en: `"Enter English Summary Here`""
$lines += "---"
$lines += ""
$lines += "## AI 요약 (Quick Summary for AI Agents)"
$lines += ""
$lines += "> 핵심 한 줄 요약: 여기에 이 글의 가장 중요한 결론을 작성하세요."
$lines += ""
$lines += "## 1. 개요"
$lines += ""
$lines += "이 주제가 왜 중요한지 서술하세요."
$lines += ""
$lines += "![이미지 설명 필수](file:///URL_HERE)"
$lines += "*이미지 설명(Alt 텍스트)은 검색 엔진과 AI가 내용을 이해하는 데 매우 중요합니다.*"
$lines += ""
$lines += "## 2. 상세 정보 및 데이터"
$lines += ""
$lines += "| 항목 | 내용 |"
$lines += "| :--- | :--- |"
$lines += "| 예시 | 데이터 |"
$lines += ""
$lines += "## 3. 결론"
$lines += ""
$lines += "최종 요약을 제공하세요."

$template = $lines -join "`r`n"

# Save file (UTF8)
$template | Out-File -FilePath $filepath -Encoding utf8

Write-Host ""
Write-Host "==========================================" -ForegroundColor Cyan
Write-Host "[SUCCESS] AI-Optimized post created!" -ForegroundColor Green
Write-Host "File: $filepath"
Write-Host "==========================================" -ForegroundColor Cyan
Write-Host "Tip: AI loves headers (H2, H3) and Tables!"
Write-Host ""
pause
