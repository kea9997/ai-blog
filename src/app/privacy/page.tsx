export default function PrivacyPolicy() {
  return (
    <div className="policy-container section-padding">
      <h1 className="accent-gradient">개인정보처리방침</h1>
      
      <section className="policy-section">
        <p className="last-updated">최종 수정일: 2026년 3월 13일</p>
        <p>
          AI Optimized Blog는 이용자의 개인정보를 소중하게 생각하며, 
          관련 법령을 준수하고 있습니다.
        </p>
      </section>

      <section className="policy-section">
        <h2 style={{ color: 'hsl(var(--accent-primary))', margin: '2rem 0 1rem' }}>1. 수집 항목</h2>
        <p>
          본 블로그는 별도의 회원가입 없이 이용이 가능합니다. 다만 문의 시 이메일 주소를 수집할 수 있습니다.
        </p>
      </section>

      <section className="policy-section">
        <h2 style={{ color: 'hsl(var(--accent-primary))', margin: '2rem 0 1rem' }}>2. 쿠키 및 광고</h2>
        <p>
          본 블로그는 Google AdSense를 이용하며, 맞춤형 광고 제공을 위해 쿠키를 사용합니다. 
          사용자는 브라우저 설정에서 이를 거부할 수 있습니다.
        </p>
      </section>
    </div>
  );
}
