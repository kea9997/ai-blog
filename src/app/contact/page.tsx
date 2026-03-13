export default function Contact() {
  return (
    <div className="contact-container section-padding">
      <div className="glass section-padding text-center">
        <h1 className="accent-gradient">Contact Us</h1>
        <p className="lead-text">
          블로그 내용에 대한 문의나 협업 제안은 언제든 환영합니다.
        </p>

        <div className="contact-info mt-4">
          <div className="contact-item">
            <h3>📧 Email</h3>
            <p><a href="mailto:admin@example.com">admin@example.com</a></p>
          </div>
          
          <div className="contact-item mt-4">
            <h3>🏢 Channels</h3>
            <p>
              보다 빠른 소통을 위해 아래 채널들을 이용하실 수 있습니다.
            </p>
            <div className="social-links mt-2">
              <span className="badge">GitHub</span>
              <span className="badge">LinkedIn</span>
              <span className="badge">X (Twitter)</span>
            </div>
          </div>
        </div>

        <div className="contact-notice mt-4">
          <p className="small-text">
            * 보내주신 메일은 확인 후 영업일 기준 2~3일 내에 답변 드립니다.
          </p>
        </div>
      </div>

      <style jsx>{`
        .contact-container {
          max-width: 700px;
          margin: 0 auto;
        }
        .contact-info {
          text-align: left;
          max-width: 400px;
          margin: 0 auto;
        }
        .mt-4 { margin-top: 3rem; }
        .mt-2 { margin-top: 1rem; }
        .lead-text { font-size: 1.2rem; opacity: 0.8; margin-bottom: 2rem; }
        .badge {
          display: inline-block;
          padding: 0.4rem 1rem;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 20px;
          margin-right: 0.5rem;
          font-size: 0.9rem;
        }
        .small-text { font-size: 0.85rem; color: #888; }
        h3 { color: var(--accent-color); margin-bottom: 0.5rem; }
      `}</style>
    </div>
  );
}
