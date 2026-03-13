import type { Metadata } from "next";
import Script from "next/script";
import CookieConsent from "@/components/CookieConsent";
import "./globals.css";

// ... (metadata 생략)

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
