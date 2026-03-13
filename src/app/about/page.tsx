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
            우리는 인간의 통찰과 AI의 논리가 결합된 차세대 지식 생태계를 구축합니다.
          </p>
        </div>
      </section>

      {/* 2. Stats Section */}
      <div className="container">
        <div className="stats-grid">
          <div className="stat-card">
            <span className="stat-number accent-gradient">100%</span>
            <p className="small-text">AI Parser Optimized</p>
          </div>
          <div className="stat-card">
            <span className="stat-number accent-gradient">24/7</span>
            <p className="small-text">Real-time Indexing</p>
          </div>
          <div className="stat-card">
            <span className="stat-number accent-gradient">A+</span>
            <p className="small-text">Google Web Vitals</p>
          </div>
          <div className="stat-card">
            <span className="stat-number accent-gradient">Zero</span>
            <p className="small-text">Hallucination Quality</p>
          </div>
        </div>

        {/* 3. Our Philosophy */}
        <section className="about-section mb-5">
          <h2 className="mb-4" style={{ fontSize: '2.5rem' }}>Our Philosophy</h2>
          <div className="glass section-padding" style={{ borderRadius: '24px', lineHeight: '2' }}>
            <p style={{ fontSize: '1.2rem', marginBottom: '1.5rem' }}>
              "지식은 널리 퍼져야 하지만, 정확한 맥락 위에서만 가치를 갖습니다."
            </p>
            <p>
              AI Optimized Blog는 단순히 글을 쓰는 곳이 아닙니다. 우리는 웹상의 데이터가 AI 에이전트에 의해 
              어떻게 소비되고 재가공되는지 깊이 연구합니다. 인간에게는 읽기 쉬운 유려한 문장을, 
              기계에게는 명확한 시맨틱 구조를 제공함으로써 정보의 왜곡 없는 전달(Zero Noise)을 실현합니다.
            </p>
          </div>
        </section>

        {/* 4. Tech Stack Showcase */}
        <section className="about-section mb-5">
          <h2 className="mb-4" style={{ fontSize: '2.2rem' }}>Core Technologies</h2>
          <div className="tech-stack-container" style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
            <span className="tech-tag">Next.js 15 (App Router)</span>
            <span className="tech-tag">TypeScript</span>
            <span className="tech-tag">Schema.org JSON-LD</span>
            <span className="tech-tag">Model Context Protocol (MCP)</span>
            <span className="tech-tag">Edge Computing</span>
            <span className="tech-tag">Semantic HTML5</span>
            <span className="tech-tag">LLM-Aware Content Design</span>
          </div>
        </section>

        {/* 5. Our Journey Timeline */}
        <section className="about-section mb-5">
          <h2 className="mb-4" style={{ fontSize: '2.2rem' }}>Our Journey</h2>
          <div className="timeline-container">
            <div className="timeline-item">
              <h4 style={{ color: 'hsl(var(--accent-primary))' }}>2024.03 - The Beginning</h4>
              <p>AI 에이전트와 인간의 소통을 위한 시맨틱 블로그 아키텍처 설계 시작.</p>
            </div>
            <div className="timeline-item">
              <h4 style={{ color: 'hsl(var(--accent-primary))' }}>2024.03 - Global Deployment</h4>
              <p>Vercel Edge Network를 통한 초고속 글로벌 서비스 런칭.</p>
            </div>
            <div className="timeline-item">
              <h4 style={{ color: 'hsl(var(--accent-primary))' }}>2024.03 - AI Optimized Content</h4>
              <p>10종 이상의 AI 최적화 기술 전문 포스트 발행 및 에이전트 연동 성공.</p>
            </div>
          </div>
        </section>

        {/* 6. Legal & Trust */}
        <div className="grid-2 mb-5">
          <div className="about-card">
            <h3 style={{ marginBottom: '1rem' }}>E-E-A-T Excellence</h3>
            <p>
              구글의 검색 품질 가이드라인을 최우선으로 준수하며, 
              모든 기술 문서는 검증된 공식 오픈소스 및 학술 자료를 기반으로 작성됩니다.
            </p>
          </div>
          <div className="about-card">
            <h3 style={{ marginBottom: '1rem' }}>User-Centric Policy</h3>
            <p>
              우리는 사용자의 데이터를 소중히 여기며, 투명한 개인정보처리방침과 
              책임 있는 AI 활용 문화를 선도합니다.
            </p>
          </div>
        </div>

        <section className="about-footer text-center mt-5 mb-5 section-padding glass" style={{ borderRadius: '24px' }}>
          <h2 className="mb-3">Ready to Build the Future?</h2>
          <p className="mb-4">우리의 여정에 함께 하시겠습니까? 협업 모델 및 궁금한 점은 언제든지 문의해 주세요.</p>
          <a href="/contact" className="cta-button">Contact with Us</a>
        </section>
      </div>
    </div>
  );
}
