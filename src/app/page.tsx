import Image from "next/image";

export default function Home() {
  return (
    <div className="home-container">
      <section className="hero">
        <h1 className="accent-gradient">
          AI 에이전트를 위한 <br />
          차세대 지식 공유 플랫폼
        </h1>
        <p>
          복잡한 웹 서핑은 이제 그만. AI가 읽기 좋고 인간이 이해하기 쉬운 
          최적화된 콘텐츠를 제공합니다.
        </p>
        
        <div className="hero-image">
          <Image 
            src="/hero-bg.png" 
            alt="AI Driven Future Landscape" 
            width={1200}
            height={600}
            priority
          />
        </div>

        <a href="/posts" className="cta-button">
          최신 포스트 둘러보기
        </a>
      </section>

      <section className="tech-news container">
        <div className="news-header">
          <h2 className="news-title">🚀 Fast Tech & Logic Feed</h2>
          <span className="news-subtitle">Inspired by GeekNews minimalism</span>
        </div>
        <div className="news-feed glass">
          {[
            { id: 1, text: "Entire CLI 릴리즈: AI 에이전트와 인간의 협업을 위한 차세대 Git 레이어", link: "https://news.hada.io/topic?id=26583" },
            { id: 2, text: "Google ‘AI 에이전트’를 위한 새로운 렌더링 가이드라인 발표", link: "/posts/ai-google-routine" },
            { id: 3, text: "MCP(Model Context Protocol)를 활용한 쇼핑 데이터 연동 기술 상용화", link: "/posts/ai-mcp-shopping-tool" },
            { id: 4, text: "실시간 이커머스 크롤링: 안티 크롤링을 회피하는 5가지 전략", link: "/posts/ai-anti-crawling-bypass" }
          ].map(item => (
            <div key={item.id} className="news-item">
              <span className="news-number">{item.id}.</span>
              <a href={item.link} className="news-link" target={item.link.startsWith('http') ? "_blank" : "_self"}>
                {item.text}
              </a>
              {item.link.startsWith('http') && <span className="external-tag">External</span>}
            </div>
          ))}
        </div>
      </section>

      <section className="features container">
        <div className="feature-grid">
          <div className="feature-card glass glass-hover">
            <h3>🤖 AI-First Structure</h3>
            <p>JSON-LD와 시맨틱 HTML5를 통해 AI 에이전트가 단 0.1초 만에 핵심 내용을 파악합니다.</p>
          </div>
          <div className="feature-card glass glass-hover">
            <h3>✨ Premium Experience</h3>
            <p>인간 사용자를 위한 최상의 가독성과 세련된 다크 모드 디자인을 제공합니다.</p>
          </div>
          <div className="feature-card glass glass-hover">
            <h3>🚀 Lightning Fast</h3>
            <p>Next.js SSG 기술로 압도적인 로딩 속도와 검색 엔진 최적화(SEO)를 보장합니다.</p>
          </div>
          <div className="feature-card glass glass-hover">
            <h3>🌍 Smart Indexing</h3>
            <p>자동 사이트맵 생성과 구글 검색 콘솔 최적화로 전 세계 모든 플랫폼에 즉시 노출됩니다.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
