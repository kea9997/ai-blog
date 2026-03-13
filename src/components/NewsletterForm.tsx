'use client';

import { useState } from 'react';

export default function NewsletterForm() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setStatus('loading');
    // 실제 서버 연동 대신 시뮬레이션
    setTimeout(() => {
      setStatus('success');
      setEmail('');
    }, 1200);
  };

  return (
    <div className="newsletter-form mt-2">
      {status === 'success' ? (
        <div className="newsletter-success-msg">
          ✨ 감사합니다! 곧 지능형 인사이트를 보내드릴게요.
        </div>
      ) : (
        <form onSubmit={handleSubmit} style={{ display: 'flex', gap: '1rem', width: '100%' }}>
          <input 
            type="email" 
            placeholder="your-email@example.com" 
            className="glass" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            disabled={status === 'loading'}
          />
          <button 
            type="submit" 
            className="cta-button" 
            style={{ marginTop: 0 }}
            disabled={status === 'loading'}
          >
            {status === 'loading' ? 'Joining...' : 'Subscribe'}
          </button>
        </form>
      )}
    </div>
  );
}
