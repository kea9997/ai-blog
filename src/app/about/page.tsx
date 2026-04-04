import Image from 'next/image';

export default function About() {
  return (
    <div className="about-page-container">
      {/* 1. Hero Section */}
      <section className="about-hero-section">
        <Image
          src="/about-hero.png"
          alt="AI Research and Knowledge Sharing"
          className="about-hero-image"
          fill
          priority
        />
        <div className="about-hero-overlay"></div>
        <div className="about-hero-content">
          <h1 className="accent-gradient glow-text mb-4" style={{ fontSize: '4rem' }}>Intelligence Redefined</h1>
          <p className="lead-text" style={{ fontSize: '1.4rem', color: 'white', opacity: 0.9 }}>
            인간의 통찰과 AI의 논리가 결합된 차세대 지식 생태계를 구축합니다.
          </p>
        </div>
      </section>

      {/* 2. Stats Section */}
      <div className="container">
        <div className="stats-grid">
          <div className="stat-card">
            <span className="stat-number accent-gradient">40+</span>
            <p className="small-text">Published Posts</p>
          </div>
          <div className="stat-card">
            <span className="stat-number accent-gradient">24/7</span>
            <p className="small-text">Always Accessible</p>
          </div>
          <div className="stat-card">
            <span className="stat-number accent-gradient">100%</span>
            <p className="small-text">Expert Reviewed</p>
          </div>
          <div className="stat-card">
            <span className="stat-number accent-gradient">E-E-A-T</span>
            <p className="small-text">Google Quality Standard</p>
          </div>
        </div>

        {/* 3. Our Philosophy */}
        <section className="about-section mb-5">
          <h2 className="mb-4" style={{ fontSize: '2.5rem' }}>Our Philosophy</h2>
          <div className="glass section-padding" style={{ borderRadius: '24px', lineHeight: '2' }}>
            <p style={{ fontSize: '1.2rem', marginBottom: '1.5rem' }}>
              "지식은 널리 퍼져야 하지만, 인간의 통찰과 검증을 통해서만 진정한 가치가 완성됩니다."
            </p>
            <p>
              AI Optimized Blog는 단순한 정보 나열을 지양합니다. 10년 이상의 웹 엔지니어링 실무 경험과
              최신 AI 기술(LLM)을 결합하여, 독자들에게 실질적인 도움이 되는 전문적인 기술 가이드를 제공합니다.
              모든 콘텐츠는 AI의 보조를 받되, 반드시 전문가의 철저한 사실 확인(Fact-check)과
              실무 경험을 바탕으로 한 재구성을 거쳐 발행됩니다.
            </p>
          </div>
        </section>

        {/* 4. Who We Are */}
        <section className="about-section mb-5">
          <h2 className="mb-4" style={{ fontSize: '2.2rem' }}>Who We Are</h2>
          <div className="glass section-padding" style={{ borderRadius: '24px', lineHeight: '1.9' }}>
            <p style={{ marginBottom: '1rem' }}>
              이 블로그는 웹 개발과 AI 엔지니어링 분야에서 10년 이상 실무를 경험한 개발자가 운영합니다.
              Next.js, TypeScript, 구조화 데이터(Schema.org), LLM 파이프라인 설계 등에 깊은 이해를 바탕으로,
              급변하는 AI 검색 생태계에서 실질적으로 적용 가능한 인사이트를 공유합니다.
            </p>
            <p>
              콘텐츠 작성 과정에서 Claude, GPT 등의 AI 도구를 활용하며, 이 사실을 투명하게 공개합니다.
              AI가 보조하는 초안은 반드시 운영자의 실무 경험과 최신 공식 문서를 기준으로 검수·보완된 후 게재됩니다.
              AI 활용 사실을 숨기지 않는 것 자체가 이 블로그의 신뢰성 원칙입니다.
            </p>
          </div>
        </section>

        {/* 5. Tech Stack Showcase */}
        <section className="about-section mb-5">
          <h2 className="mb-4" style={{ fontSize: '2.2rem' }}>Core Technologies</h2>
          <div className="tech-stack-container" style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
            <span className="tech-tag">Next.js 15 (App Router)</span>
            <span className="tech-tag">TypeScript</span>
            <span className="tech-tag">Schema.org JSON-LD</span>
            <span className="tech-tag">Model Context Protocol (MCP)</span>
            <span className="tech-tag">Edge Computing (Vercel)</span>
            <span className="tech-tag">Semantic HTML5</span>
            <span className="tech-tag">LLM-Aware Content Design</span>
            <span className="tech-tag">Generative Engine Optimization</span>
          </div>
        </section>

        {/* 6. Our Journey Timeline */}
        <section className="about-section mb-5">
          <h2 className="mb-4" style={{ fontSize: '2.2rem' }}>Our Journey</h2>
          <div className="timeline-container">
            <div className="timeline-item">
              <h4 style={{ color: 'hsl(var(--accent-primary))' }}>2026.01 — The Beginning</h4>
              <p>AI 에이전트와 인간 독자 모두를 위한 시맨틱 블로그 아키텍처 설계 및 첫 포스트 발행. AI 최적화 콘텐츠 방법론 정립 시작.</p>
            </div>
            <div className="timeline-item">
              <h4 style={{ color: 'hsl(var(--accent-primary))' }}>2026.02 — Infrastructure Build</h4>
              <p>Vercel Edge Network 기반 글로벌 배포 완료. MCP 서버 연동, JSON-LD 구조화 데이터 전면 도입. PWA 지원 추가.</p>
            </div>
            <div className="timeline-item">
              <h4 style={{ color: 'hsl(var(--accent-primary))' }}>2026.03 — Content Expansion</h4>
              <p>AI 에이전트 최적화, 이커머스 데이터 분석, 개인정보 보호 전략 등 핵심 카테고리 40개 이상 포스트 발행.</p>
            </div>
            <div className="timeline-item">
              <h4 style={{ color: 'hsl(var(--accent-primary))' }}>2026.04 — AdSense & Monetization</h4>
              <p>구글 애드센스 정책 완전 준수 달성. 광고 수익 모델과 API 수익화 모델을 결합한 지속 가능한 운영 기반 구축.</p>
            </div>
          </div>
        </section>

        {/* 7. Editorial Policy */}
        <section className="about-section mb-5">
          <h2 className="mb-4" style={{ fontSize: '2.2rem' }}>Editorial Policy</h2>
          <div className="grid-2">
            <div className="about-card">
              <h3 style={{ marginBottom: '1rem' }}>콘텐츠 기준</h3>
              <ul style={{ lineHeight: '2', paddingLeft: '1.2rem' }}>
                <li>공식 문서 및 검증된 데이터에 근거한 사실 작성</li>
                <li>실무 경험 기반의 재현 가능한 예시 제공</li>
                <li>AI 도구 활용 사실 투명하게 공개</li>
                <li>오류 발견 시 즉시 수정 및 변경 이력 기록</li>
              </ul>
            </div>
            <div className="about-card">
              <h3 style={{ marginBottom: '1rem' }}>금지 사항</h3>
              <ul style={{ lineHeight: '2', paddingLeft: '1.2rem' }}>
                <li>서비스 이용약관을 위반하는 데이터 수집 방법 안내</li>
                <li>타인의 저작물 무단 복제 또는 표절</li>
                <li>검증되지 않은 정보를 사실처럼 제시</li>
                <li>법적으로 문제가 될 수 있는 기술적 방법 교육</li>
              </ul>
            </div>
          </div>
        </section>

        {/* 8. Legal & Trust */}
        <div className="grid-2 mb-5">
          <div className="about-card">
            <h3 style={{ marginBottom: '1rem' }}>E-E-A-T 준수</h3>
            <p>
              구글의 E-E-A-T(경험·전문성·권위·신뢰) 가이드라인을 엄격히 준수합니다.
              기술적 정확성을 위해 공식 문서와 검증된 벤치마크 데이터를 기반으로 작성하며,
              이론에 그치지 않는 실무 중심의 인사이트를 제공합니다.
            </p>
          </div>
          <div className="about-card">
            <h3 style={{ marginBottom: '1rem' }}>투명성 정책</h3>
            <p>
              정보의 투명성을 위해 AI 기술의 활용 범위를 명확히 공개하며,
              사용자의 알 권리와 개인정보 보호를 최우선 가치로 삼습니다.
              광고 게재 사실 및 제휴 관계는 반드시 명시합니다.
            </p>
          </div>
        </div>

        <section className="about-footer text-center mt-5 mb-5 section-padding glass" style={{ borderRadius: '24px' }}>
          <h2 className="mb-3">함께 지식을 만들어 갑시다</h2>
          <p className="mb-4">오류 제보, 협업 제안, 기술적 문의는 언제든지 환영합니다.</p>
          <a href="/contact" className="cta-button">Contact Us</a>
        </section>
      </div>
    </div>
  );
}
