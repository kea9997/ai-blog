export default function About() {
  return (
    <div className="about-container">
      <header className="about-header section-padding">
        <h1 className="accent-gradient">About AI.Blog</h1>
        <p className="lead-text">
          우리는 인간과 AI가 공존하는 미래의 지식 생태계를 구축합니다.
        </p>
      </header>

      <section className="about-content glass section-padding">
        <div className="grid-2">
          <div className="about-card">
            <h3>Vision</h3>
            <p>
              단순한 정보 전달을 넘어, AI 에이전트가 정보를 가장 정확하고 빠르게 수집할 수 있는 
              표준화된 지식 저장소를 목표로 합니다. AI가 여러분의 글을 읽고 더 나은 답변을 
              제공할 수 있도록 돕습니다.
            </p>
          </div>
          <div className="about-card">
            <h3>Technology</h3>
            <p>
              Next.js 15, Schema.org JSON-LD, 시맨틱 HTML5 등 최신 웹 기술을 총동원하여 
              검색 엔진 최적화(SEO)와 AI 파싱 성능을 극대화했습니다.
            </p>
          </div>
        </div>

        <div className="about-mission mt-4">
          <h2>Our Mission</h2>
          <p>
            내일의 검색은 오늘과 다를 것입니다. 우리는 그 변화의 중심에서 
            모든 데이터를 가치 있게 연결하는 브릿지 역할을 수행합니다.
          </p>
        </div>
      </section>

      <style jsx>{`
        .about-container {
          max-width: 900px;
          margin: 0 auto;
        }
        .grid-2 {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
          margin-bottom: 3rem;
        }
        .about-card {
          padding: 1.5rem;
          border-radius: 12px;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }
        .mt-4 {
          margin-top: 3rem;
        }
        .lead-text {
          font-size: 1.25rem;
          opacity: 0.8;
          margin-top: 1rem;
        }
      `}</style>
    </div>
  );
}
