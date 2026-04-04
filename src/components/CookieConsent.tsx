'use client';

import { useState, useEffect } from 'react';

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent-v2');
    if (!consent) {
      // 약간 지연 후 표시 (페이지 로딩 후)
      const timer = setTimeout(() => setIsVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAcceptAll = () => {
    localStorage.setItem('cookie-consent-v2', JSON.stringify({
      necessary: true,
      analytics: true,
      advertising: true,
      timestamp: new Date().toISOString(),
    }));
    setIsVisible(false);
  };

  const handleNecessaryOnly = () => {
    localStorage.setItem('cookie-consent-v2', JSON.stringify({
      necessary: true,
      analytics: false,
      advertising: false,
      timestamp: new Date().toISOString(),
    }));
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="cookie-banner-overlay">
      <div className="cookie-banner glass shadow-top">
        <div className="cookie-inner">
          <div className="cookie-text">
            <strong style={{ display: 'block', marginBottom: '0.4rem', fontSize: '1rem' }}>
              🍪 쿠키 및 개인정보 설정
            </strong>
            <p style={{ margin: 0, fontSize: '0.875rem', lineHeight: '1.7', opacity: 0.85 }}>
              본 사이트는 서비스 운영에 필요한 <strong>필수 쿠키</strong>와 더불어,
              방문 통계 분석을 위한 <strong>분석 쿠키</strong>,
              맞춤형 광고 제공을 위한 <strong>광고 쿠키</strong>(Google AdSense)를 사용합니다.
              {' '}
              <button
                onClick={() => setShowDetails(!showDetails)}
                style={{
                  background: 'none', border: 'none', color: 'hsl(var(--accent-primary))',
                  cursor: 'pointer', fontSize: '0.875rem', padding: 0, textDecoration: 'underline',
                }}
              >
                {showDetails ? '간략히 보기' : '자세히 보기'}
              </button>
            </p>

            {showDetails && (
              <div style={{
                marginTop: '0.75rem',
                padding: '0.75rem',
                background: 'hsla(var(--text-primary), 0.05)',
                borderRadius: '8px',
                fontSize: '0.8rem',
                lineHeight: '1.8',
              }}>
                <p style={{ margin: '0 0 0.4rem' }}>
                  <strong>필수 쿠키</strong> — 로그인 상태 유지, 보안 등 서비스 기본 기능에 필요합니다. 거부할 수 없습니다.
                </p>
                <p style={{ margin: '0 0 0.4rem' }}>
                  <strong>분석 쿠키</strong> — Google Analytics를 통해 방문자 수, 페이지 조회수 등을 익명으로 수집합니다.
                </p>
                <p style={{ margin: 0 }}>
                  <strong>광고 쿠키</strong> — Google AdSense를 통해 관심사에 맞는 광고를 제공합니다.
                  설정은 <a href="https://adssettings.google.com" target="_blank" rel="noopener noreferrer" style={{ color: 'hsl(var(--accent-primary))' }}>Google 광고 설정</a>에서 변경 가능합니다.
                </p>
              </div>
            )}

            <p style={{ margin: '0.5rem 0 0', fontSize: '0.8rem', opacity: 0.6 }}>
              자세한 내용은{' '}
              <a href="/privacy" style={{ color: 'hsl(var(--accent-primary))' }}>개인정보처리방침</a>을 확인하세요.
            </p>
          </div>

          <div className="cookie-actions">
            <button onClick={handleNecessaryOnly} className="cookie-btn-secondary">
              필수만 허용
            </button>
            <button onClick={handleAcceptAll} className="cookie-btn-primary">
              모두 허용
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
        .cookie-banner-overlay {
          position: fixed;
          bottom: 0;
          left: 0;
          right: 0;
          z-index: 9999;
        }
        .cookie-banner {
          padding: 1.25rem 0;
          border-top: 1px solid hsla(var(--accent-primary), 0.2);
          animation: slideUp 0.4s ease-out;
        }
        .cookie-inner {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 2rem;
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          gap: 2rem;
        }
        .cookie-text {
          flex: 1;
        }
        .cookie-actions {
          display: flex;
          gap: 0.75rem;
          align-items: center;
          flex-shrink: 0;
          padding-top: 0.25rem;
        }
        .cookie-btn-primary {
          background: hsl(var(--accent-primary));
          color: hsl(var(--bg-deep));
          border: none;
          padding: 0.6rem 1.25rem;
          border-radius: 8px;
          font-weight: 700;
          cursor: pointer;
          white-space: nowrap;
          font-size: 0.875rem;
          transition: opacity 0.2s;
        }
        .cookie-btn-primary:hover { opacity: 0.85; }
        .cookie-btn-secondary {
          background: transparent;
          color: hsl(var(--text-secondary));
          border: 1px solid hsla(var(--text-muted), 0.4);
          padding: 0.6rem 1.25rem;
          border-radius: 8px;
          font-weight: 600;
          cursor: pointer;
          white-space: nowrap;
          font-size: 0.875rem;
          transition: border-color 0.2s, color 0.2s;
        }
        .cookie-btn-secondary:hover {
          border-color: hsl(var(--accent-primary));
          color: hsl(var(--accent-primary));
        }
        @keyframes slideUp {
          from { transform: translateY(100%); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        @media (max-width: 768px) {
          .cookie-inner {
            flex-direction: column;
            gap: 1rem;
            padding: 0 1rem;
          }
          .cookie-actions {
            width: 100%;
            justify-content: stretch;
          }
          .cookie-btn-primary,
          .cookie-btn-secondary {
            flex: 1;
            text-align: center;
          }
        }
      `}</style>
    </div>
  );
}
