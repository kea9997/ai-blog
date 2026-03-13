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
        </div>
      </section>
    </div>
  );
}
