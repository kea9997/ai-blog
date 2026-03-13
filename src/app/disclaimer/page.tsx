export default function Disclaimer() {
  return (
    <div className="policy-container section-padding">
      <h1 className="accent-gradient">면책 조항 (Disclaimer)</h1>
      
      <section className="policy-section">
        <p className="last-updated">최종 수정일: 2026년 3월 13일</p>
        <p>
          AI Optimized Blog(이하 '본 사이트')에 게재된 모든 정보는 일반적인 정보 제공만을 목적으로 하며, 
          어떠한 법적, 전문적 조언을 대신할 수 없습니다.
        </p>
      </section>

      <section className="policy-section">
        <h2 style={{ color: 'hsl(var(--accent-primary))', margin: '2rem 0 1rem' }}>1. 정보의 정확성</h2>
        <p>
          본 사이트는 최신 기술 트렌드와 정보를 제공하기 위해 노력하지만, 정보의 완전성, 정확성, 신뢰성에 대해 명시적 또는 묵시적인 보증을 하지 않습니다. 
          사이트 내 정보를 신뢰하여 발생한 결과에 대해 본 사이트는 책임을 지지 않습니다.
        </p>
      </section>

      <section className="policy-section">
        <h2 style={{ color: 'hsl(var(--accent-primary))', margin: '2rem 0 1rem' }}>2. AI 기술 활용 고지</h2>
        <p>
          본 사이트의 콘텐츠 생성 및 최적화 과정에는 데이터 분석 및 보조 수단으로 AI 기술이 활용될 수 있습니다. 
          이는 정보의 구조화 및 검색 최적화를 위함이며, 모든 최종 발행물은 운영자의 검수를 거칩니다.
        </p>
      </section>

      <section className="policy-section">
        <h2 style={{ color: 'hsl(var(--accent-primary))', margin: '2rem 0 1rem' }}>3. 외부 링크</h2>
        <p>
          본 사이트는 외부 웹사이트로의 링크를 포함할 수 있습니다. 당사는 타사 사이트의 내용이나 개인정보 보호 정책에 대해 통제권이 없으며, 
          이에 대한 책임을 지지 않습니다.
        </p>
      </section>

      <section className="policy-section mt-5">
        <p className="small-text">
          본 면책 조항의 내용에 대해 궁금한 점이 있으시면 <a href="/contact" className="accent-link">Contact</a> 페이지를 통해 문의해 주시기 바랍니다.
        </p>
      </section>
    </div>
  );
}
