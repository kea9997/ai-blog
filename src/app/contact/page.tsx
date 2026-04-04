export default function Contact() {
  return (
    <div className="contact-container section-padding">
      <div className="glass section-padding text-center" style={{ borderRadius: '24px' }}>
        <h1 className="accent-gradient">Contact Us</h1>
        <p style={{ fontSize: '1.2rem', opacity: 0.8, marginBottom: '2rem' }}>
          콘텐츠 오류 제보, 협업 제안, 기술적 문의를 환영합니다.
        </p>

        <div style={{ textAlign: 'left', maxWidth: '480px', margin: '0 auto' }}>
          <div className="contact-item">
            <h3 style={{ color: 'hsl(var(--accent-primary))' }}>이메일</h3>
            <p>
              <a href="mailto:kea9997@gmail.com" className="accent-link">
                kea9997@gmail.com
              </a>
            </p>
            <p className="small-text" style={{ marginTop: '0.4rem', opacity: 0.7 }}>
              문의 후 영업일 기준 2일 이내에 답변드립니다.
            </p>
          </div>

          <div className="contact-item mt-4">
            <h3 style={{ color: 'hsl(var(--accent-primary))' }}>문의 유형</h3>
            <ul style={{ lineHeight: '2', paddingLeft: '1.2rem', marginTop: '0.5rem' }}>
              <li>콘텐츠 오류 또는 사실 관계 제보</li>
              <li>기고 및 협업 제안</li>
              <li>광고 및 스폰서십 문의</li>
              <li>개인정보 처리 관련 요청</li>
              <li>저작권 관련 문의</li>
            </ul>
          </div>

          <div className="contact-item mt-4">
            <h3 style={{ color: 'hsl(var(--accent-primary))' }}>개인정보 처리 요청</h3>
            <p style={{ lineHeight: '1.8' }}>
              개인정보 열람·수정·삭제 요청은 이메일로 접수해 주세요.
              본인 확인 후 법정 기한(30일) 이내에 처리해 드립니다.
              자세한 내용은{' '}
              <a href="/privacy" className="accent-link">개인정보처리방침</a>을 확인하세요.
            </p>
          </div>

          <div className="contact-item mt-4" style={{
            padding: '1rem',
            background: 'hsla(var(--accent-primary), 0.1)',
            borderRadius: '12px',
            border: '1px solid hsla(var(--accent-primary), 0.2)'
          }}>
            <p className="small-text" style={{ lineHeight: '1.8', margin: 0 }}>
              <strong>운영자 정보</strong><br />
              블로그명: AI Optimized Blog<br />
              운영 국가: 대한민국<br />
              이메일: kea9997@gmail.com
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
