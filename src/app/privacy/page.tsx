export default function PrivacyPolicy() {
  return (
    <div className="policy-container section-padding">
      <h1 className="accent-gradient">개인정보처리방침</h1>
      
      <section className="policy-section">
        <p className="last-updated">최종 수정일: 2026년 3월 13일</p>
        <p>
          AI Optimized Blog (이하 '본 블로그')는 이용자의 개인정보를 소중하게 생각하며, 
          정보통신망 이용촉진 및 정보보호 등에 관한 법률 등 관련 법령을 준수하고 있습니다.
        </p>
      </section>

      <section className="policy-section">
        <h2>1. 수집하는 개인정보 항목</h2>
        <p>
          본 블로그는 별도의 회원가입 없이 이용이 가능합니다. 다만, 문의하기 기능을 이용하는 경우 
          상담을 위해 아래와 같은 정보를 수집할 수 있습니다.
        </p>
        <ul>
          <li>필수항목: 이메일 주소, 문의 내용</li>
          <li>서비스 이용 과정에서 자동으로 생성되어 수집될 수 있는 항목: IP 주소, 쿠키, 방문 기록 등</li>
        </ul>
      </section>

      <section className="policy-section">
        <h2>2. 개인정보의 수집 및 이용목적</h2>
        <p>수집된 개인정보는 다음의 목적을 위해 활용됩니다.</p>
        <ul>
          <li>이용자 문의에 대한 답변 및 고객지원</li>
          <li>서비스 이용 기록 분석을 통한 서비스 개선 및 통계 분석</li>
          <li>애드센스 등 광고 서비스 제공을 위한 익명화된 데이터 활용</li>
        </ul>
      </section>

      <section className="policy-section">
        <h2>3. 쿠키(Cookie) 및 광고 안내</h2>
        <p>
          본 블로그는 Google AdSense를 이용하며, Google은 사용자가 본 사이트 또는 다른 사이트를 
          방문한 기록을 바탕으로 광고를 제공하기 위해 쿠키를 사용합니다.
        </p>
        <ul>
          <li>사용자는 Google 광고 설정에서 맞춤형 광고를 해제할 수 있습니다.</li>
          <li>쿠키 사용을 원치 않으시는 경우 웹 브라우저 설정에서 쿠키 저장을 거부할 수 있습니다.</li>
        </ul>
      </section>

      <style jsx>{`
        .policy-container {
          max-width: 800px;
          margin: 0 auto;
          line-height: 1.8;
        }
        .policy-section {
          margin-bottom: 2.5rem;
        }
        .last-updated {
          color: #888;
          font-size: 0.9rem;
          margin-bottom: 1rem;
        }
        h2 {
          margin-top: 2rem;
          margin-bottom: 1rem;
          color: var(--accent-color);
        }
        ul {
          padding-left: 1.5rem;
          margin-bottom: 1rem;
        }
        li {
          margin-bottom: 0.5rem;
        }
      `}</style>
    </div>
  );
}
