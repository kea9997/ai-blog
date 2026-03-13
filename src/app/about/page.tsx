export default function About() {
  return (
    <div className="about-container section-padding">
      <header className="about-header text-center mb-5">
        <h1 className="accent-gradient">About AI.Blog</h1>
        <p className="lead-text">
          우리는 인간과 AI가 함께 소통하는 차세대 지식 생태계를 구축합니다.
        </p>
      </header>

      <section className="about-section glass section-padding mb-4">
        <h2>블로그 운영 목적 및 전문성 (E-E-A-T)</h2>
        <p>
          AI Optimized Blog는 AI 에이전트(LLM)와 검색 엔진이 웹상의 지식을 어떻게 수집하고 
          처리하는지에 대한 기술적 통찰을 공유하기 위해 만들어졌습니다. 
          저희 개발팀은 수년간의 웹 최적화 및 검색 알고리즘 분석 경험을 바탕으로 
          인간과 기계 모두가 신뢰할 수 있는 정보를 제공하고자 노력합니다.
        </p>
      </section>

      <div className="grid-2">
        <div className="about-card glass">
          <h3>신뢰할 수 있는 데이터</h3>
          <p>
            단순한 추측이 아닌, Google의 공식 가이드라인(Search Essentials)과 
            기술 문서를 바탕으로 검증된 정보만을 게시합니다. 모든 내용은 
            최신 업데이트를 반영하여 정기적으로 관리됩니다.
          </p>
        </div>
        <div className="about-card glass">
          <h3>AI 친화적 아키텍처</h3>
          <p>
            Schema.org JSON-LD와 시맨틱 HTML 구조를 도입하여, AI 에이전트가 
            정보를 오해 없이 가장 효율적으로 추출할 수 있는 표준 규격을 준수합니다.
          </p>
        </div>
      </div>

      <section className="about-footer text-center mt-5">
        <p>
          더 자세한 기술적 배경이나 협업 문의는 <a href="/contact" className="accent-link">Contact</a> 페이지를 이용해 주세요.
        </p>
      </section>

      <style jsx>{`
        .about-container { max-width: 900px; margin: 0 auto; }
        .grid-2 {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 2rem;
          margin-bottom: 3rem;
        }
        .mb-4 { margin-bottom: 2rem; }
        .mb-5 { margin-bottom: 3rem; }
        .mt-5 { margin-top: 4rem; }
        .about-card { padding: 2rem; border-radius: 16px; transition: transform 0.3s ease; }
        .about-card:hover { transform: translateY(-5px); }
        h2, h3 { color: var(--accent-color); margin-bottom: 1.5rem; }
        p { line-height: 1.8; opacity: 0.9; }
        .accent-link { text-decoration: underline; color: var(--accent-color); }
      `}</style>
    </div>
  );
}
