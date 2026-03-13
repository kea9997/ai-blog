'use client';

import { useState } from "react";
import NewsletterForm from "@/components/NewsletterForm";
import SearchOverlay from "@/components/SearchOverlay";
import AgentHoneypot from "@/components/AgentHoneypot";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <div className="layout-wrapper">
      <AgentHoneypot />
      <header className="nav-header glass">
        <div className="container nav-content">
          <div className="nav-left">
            <a href="/" className="logo accent-gradient">AI.Blog</a>
          </div>
          <nav className="nav-center">
            <ul className="nav-links">
              <li><a href="/posts">Posts</a></li>
              <li><a href="/about">About</a></li>
            </ul>
          </nav>
          <div className="nav-right">
            <button 
              className="search-trigger glass glass-hover" 
              aria-label="Search"
              onClick={() => setIsSearchOpen(true)}
            >
              🔍 <span className="small-text">Search</span>
            </button>
          </div>
        </div>
      </header>
      
      <main className="container main-content">
        {children}
      </main>

      <section className="newsletter-section glass mt-5">
        <div className="container">
          <div className="newsletter-content">
            <h2 className="accent-gradient">Stay Ahead of AI</h2>
            <p>매주 AI 에이전트와 웹 최적화에 관한 통찰력 있는 정보를 보내드립니다.</p>
            <NewsletterForm />
          </div>
        </div>
      </section>
      
      <footer className="footer shadow-top">
        <div className="container footer-content">
          <div className="footer-info">
            <p>&copy; 2026 AI Optimized Blog. Designed for Agents and Humans.</p>
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
      {isSearchOpen && <SearchOverlay onClose={() => setIsSearchOpen(false)} />}
    </div>
  );
}
