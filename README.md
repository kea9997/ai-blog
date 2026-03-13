# AI Optimized Blog Platform

AI 에이전트와 인간 사용자 모두에게 최적화된 프리미엄 다크 모드 블로그 플랫폼입니다.

## 🚀 시작하기

1. **의존성 설치**: `npm install`
2. **개발 서버 실행**: `npm run dev`
3. **브라우저 확인**: `http://localhost:3000`

## ✍️ 새 포스트 작성하기 (자동화 도구)

프론트매터 설정 등 번거로운 과정 없이 바로 새 글을 추가할 수 있습니다.

1. 프로젝트 루트의 `add-post.bat` 파일을 더블 클릭합니다.
2. 콘솔 창의 가이드에 따라 **제목, 카테고리, 요약** 정보를 입력합니다.
3. `content/posts/` 폴더에 생성된 `.md` 파일을 열어 본문을 작성합니다.
4. 저장 시 개발 서버에서 즉시 변경 사항이 반영됩니다.

---

## 🛠️ 주요 기술 스택

- **Framework**: Next.js 15+ (App Router)
- **Styling**: Vanilla CSS (Premium Dark Theme)
- **Content**: Markdown-based CMS
- **AI Optimization**: Schema.org JSON-LD dynamically injected

## 📁 주요 디렉토리 구조

- `src/app`: 페이지 레이아웃 및 라우팅
- `content/posts`: 블로그 포스트 마크다운 파일 보관함
- `src/lib`: 포스트 파싱 및 유틸리티 로직
- `scripts`: 관리용 자동화 스크립트
