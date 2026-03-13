export default function Contact() {
  return (
    <div className="contact-container section-padding">
      <div className="glass section-padding text-center" style={{ borderRadius: '24px' }}>
        <h1 className="accent-gradient">Contact Us</h1>
        <p style={{ fontSize: '1.2rem', opacity: 0.8, marginBottom: '2rem' }}>
          협업 제안 및 문의는 아래 채널을 이용해 주세요.
        </p>

        <div style={{ textAlign: 'left', maxWidth: '400px', margin: '0 auto' }}>
          <div className="contact-item">
            <h3 style={{ color: 'hsl(var(--accent-primary))' }}>📧 Email</h3>
            <p><a href="mailto:kea9997@gmail.com" className="accent-link">kea9997@gmail.com</a></p>
          </div>
          
          <div className="contact-item mt-4">
            <h3 style={{ color: 'hsl(var(--accent-primary))' }}>🏢 Social</h3>
            <div className="social-links mt-2">
              <span className="badge">GitHub</span>
              <span className="badge">X</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
