import type { Metadata } from "next";
import Script from "next/script";
import CookieConsent from "@/components/CookieConsent";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL('https://ai-blog-red-iota.vercel.app'), // 실제 Vercel 도메인 반영
  title: {
    template: "%s | AI Optimized Blog",
    default: "AI Optimized Blog for Agents & Humans",
  },
  description: "AI 에이전트와 검색 엔진 모두에 최적화된 차세대 지식 공유 플랫폼입니다. 최신 기술 트렌드와 정보를 탐색하세요.",
  keywords: ["AI", "AI Agent", "Next.js", "Web Development", "Knowledge Sharing", "SEO"],
  authors: [{ name: "AI Agent Blogger" }],
  openGraph: {
    title: "AI Optimized Blog",
    description: "AI 에이전트와 인간 사용자 모두를 위한 프리미엄 블로그",
    url: 'https://ai-blog-red-iota.vercel.app',
    siteName: 'AI Optimized Blog',
    locale: 'ko_KR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "AI Optimized Blog",
    description: "AI 에이전트를 위한 최적화된 블로그 플랫폼",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: '0sByu6ank5KQN35LG6v-L1m9xwX9WA_LYdVdDjsJbPg',
  },
  other: {
    'google-adsense-account': 'ca-pub-3830590707342955',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <head>
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3830590707342955"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
      </head>
      <body>
        <div className="layout-wrapper">
          <header className="nav-header glass">
            <div className="container nav-content">
              <a href="/" className="logo accent-gradient">AI.Blog</a>
              <nav>
                <ul className="nav-links">
                  <li><a href="/posts">Posts</a></li>
                  <li><a href="/about">About</a></li>
                </ul>
              </nav>
            </div>
          </header>
          
          <main className="container main-content">
            {children}
          </main>

          <footer className="footer shadow-top">
            <div className="container footer-content">
              <div className="footer-info">
                <p>&copy; 2024 AI Optimized Blog. Designed for Agents and Humans.</p>
              </div>
              <nav className="footer-nav">
                <a href="/privacy">Privacy Policy</a>
                <span className="separator">|</span>
                <a href="/disclaimer">Disclaimer</a>
                <span className="separator">|</span>
                <a href="/contact">Contact</a>
                <span className="separator">|</span>
                <a href="/about">About</a>
              </nav>
            </div>
          </footer>
          <CookieConsent />
        </div>
      </body>
    </html>
  );
}
