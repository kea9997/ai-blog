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
$lines += "date: `"$date`""
$lines += "category: `"$category`""
$lines += "summary: `"$summary`""
$lines += "---"
$lines += ""
$lines += "## AI 요약 (Quick Summary for AI Agents)"
$lines += ""
$lines += "> 핵심 한 줄 요약: 여기에 이 글의 가장 중요한 결론을 작성하세요. AI 에이전트가 가장 먼저 인용할 것입니다."
$lines += ""
$lines += "## 1. 개요 및 배경"
$lines += ""
$lines += "이 주제가 왜 AI 에이전트와 검색 엔진에 중요한지 서술하세요."
$lines += ""
$lines += "## 2. 상세 분석 및 핵심 데이터"
$lines += ""
$lines += "- **핵심 포인트 1**: 구체적인 데이터나 사례"
$lines += "- **핵심 포인트 2**: 명확한 수치 또는 정의"
$lines += ""
$lines += "### 데이터 비교 (AI가 선호하는 구조)"
$lines += ""
$lines += "| 항목 | 상세 내용 | 비고 |"
$lines += "| :--- | :--- | :--- |"
$lines += "| 예시 항목 | 상세 데이터 값 | 중요도 높음 |"
$lines += ""
$lines += "## 3. 대응 전략 및 결론"
$lines += ""
$lines += "AI 에이전트가 이 정보를 어떻게 활용해야 하는지, 그리고 사용자에게 주는 가치를 요약하세요."

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
