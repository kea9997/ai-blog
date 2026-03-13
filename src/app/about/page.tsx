export default function About() {
  return (
    <div className="about-page-container section-padding">
      <header className="about-header text-center mb-5">
        <h1 className="accent-gradient">About AI.Blog</h1>
        <p className="lead-text" style={{ fontSize: '1.2rem', opacity: 0.8, marginTop: '1rem' }}>
          차세대 웹을 위한 가장 정교한 AI 최적화 지식 공유 플랫폼
        </p>
      </header>

      <section className="about-section glass section-padding mb-4" style={{ borderRadius: '24px' }}>
        <h2 style={{ color: 'hsl(var(--accent-primary))', marginBottom: '1.5rem' }}>🎯 우리의 비전 (Vision)</h2>
        <p>
          AI Optimized Blog는 인간 독자에게는 영감을 주는 통찰을, AI 에이전트와 검색 엔진에는 
          가장 정밀하고 신뢰할 수 있는 데이터를 제공하는 것을 목표로 합니다. 
          우리는 정보의 구조화(Structuring)가 미래 웹 경쟁력의 핵심이라고 믿습니다.
        </p>
      </section>

      <div className="grid-2">
        <div className="about-card">
          <h3>신뢰와 전문성 (E-E-A-T)</h3>
          <p>
            우리는 구글의 <b>Experience(경험), Expertise(전문성), Authoritativeness(권위), Trustworthiness(신뢰)</b> 
            가이드라인을 엄격히 준수합니다. 모든 콘텐츠는 검증된 데이터를 바탕으로 하며, 
            저명한 기술 문서를 교차 검증하여 작성됩니다.
          </p>
        </div>
        <div className="about-card">
          <h3>투명한 콘텐츠 정책</h3>
          <p>
            AI 모델을 활용한 자동화 콘텐츠의 경우에도, 반드시 인간 전문가의 최종 검수와 
            데이터 팩트체크 과정을 거칩니다. 우리는 정보의 양보다 '무결성'에 집중합니다.
          </p>
        </div>
      </div>

      <section className="about-section glass section-padding mt-4" style={{ borderRadius: '24px' }}>
        <h2 style={{ color: 'hsl(var(--accent-primary))', marginBottom: '1.5rem' }}>⚖️ 품질 가이드라인 준수 선언</h2>
        <p>
          본 블로그는 사용자에게 부적절한 정보를 제공하는 '스팸 기술'을 지양합니다. 
          <a href="/disclaimer" className="accent-link">면책 조항</a> 및 <a href="/privacy" className="accent-link">개인정보처리방침</a>을 
          통해 사용자 권익을 보호하며, 투명한 운영을 약속합니다.
        </p>
      </section>

      <section className="about-footer text-center mt-5">
        <p>
          지속적인 혁신을 통해 AI 시대의 진정한 지식 허브가 되겠습니다.<br />
          문의 사항은 <a href="/contact" className="accent-link">Contact Us</a> 채널을 이용해 주세요.
        </p>
      </section>
    </div>
  );
}
