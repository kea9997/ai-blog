'use client';

import { useState, useEffect } from 'react';

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const acceptConsent = () => {
    localStorage.setItem('cookie-consent', 'true');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="cookie-banner glass shadow-top">
      <div className="container banner-content">
        <div className="banner-text">
          <p>
            본 사이트는 사용자 경험 개선 및 광고 최적화를 위해 쿠키를 사용합니다. 
            계속 이용하시려면 <a href="/privacy" className="accent-link">개인정보처리방침</a>에 동의해 주세요.
          </p>
        </div>
        <button onClick={acceptConsent} className="accept-button">
          확인했습니다
        </button>
      </div>
      <style jsx>{`
        .cookie-banner {
          position: fixed;
          bottom: 0;
          left: 0;
          right: 0;
          z-index: 9999;
          padding: 1.5rem 0;
          animation: slideUp 0.5s ease-out;
        }
        .banner-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 2rem;
        }
        .banner-text p {
          font-size: 0.9rem;
          color: hsl(var(--text-secondary));
          margin: 0;
        }
        .accept-button {
          background: hsl(var(--accent-primary));
          color: hsl(var(--bg-deep));
          border: none;
          padding: 0.6rem 1.2rem;
          border-radius: 8px;
          font-weight: 600;
          cursor: pointer;
          white-space: nowrap;
          transition: var(--transition-smooth);
        }
        .accept-button:hover {
          transform: translateY(-2px);
          opacity: 0.9;
        }
        @keyframes slideUp {
          from { transform: translateY(100%); }
          to { transform: translateY(0); }
        }
        @media (max-width: 768px) {
          .banner-content {
            flex-direction: column;
            text-align: center;
            gap: 1rem;
          }
        }
      `}</style>
    </div>
  );
}
