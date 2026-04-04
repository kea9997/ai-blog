import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { getSortedPostsData } from "@/lib/posts";

export const metadata: Metadata = {
  title: "AI Optimized Blog — AI 에이전트와 인간을 위한 기술 지식 플랫폼",
  description:
    "AI 에이전트 최적화, LLM 파싱 전략, 구조화 데이터, 합법적 데이터 수집 등 AI 시대의 핵심 기술 인사이트를 전문가 검수 콘텐츠로 제공합니다.",
  alternates: {
    canonical: "https://ai-blog-red-iota.vercel.app",
  },
};

export default function Home() {
  const recentPosts = getSortedPostsData().slice(0, 6);
  const topPosts = getSortedPostsData().slice(0, 4);

  return (
    <div className="home-container">
      {/* Hero */}
      <section className="hero">
        <h1 className="accent-gradient">
          AI 에이전트를 위한 <br />
          차세대 지식 공유 플랫폼
        </h1>
        <p>
          AI 에이전트 최적화, LLM 파싱 전략, 합법적 데이터 수집까지 —
          전문가 검수 기반의 실무 중심 기술 가이드를 제공합니다.
        </p>

        <div className="hero-image">
          <Image
            src="/hero-bg.png"
            alt="AI 기반 지식 공유 플랫폼 — 인간과 AI 에이전트 모두를 위한 최적화된 콘텐츠"
            width={1200}
            height={600}
            priority
          />
        </div>

        <Link href="/posts" className="cta-button">
          최신 포스트 둘러보기
        </Link>
      </section>

      {/* Recent Posts Feed */}
      <section className="tech-news container">
        <div className="news-header">
          <h2 className="news-title">최신 포스트</h2>
          <Link href="/posts" className="news-subtitle" style={{ color: 'hsl(var(--accent-primary))', textDecoration: 'none', fontSize: '0.9rem' }}>
            전체 보기 →
          </Link>
        </div>
        <div className="news-feed glass">
          {topPosts.map((post, index) => (
            <div key={post.slug} className="news-item">
              <span className="news-number">{index + 1}.</span>
              <Link href={`/posts/${post.slug}`} className="news-link">
                {post.title}
              </Link>
              <span className="external-tag" style={{ fontSize: '0.75rem', opacity: 0.6 }}>
                {post.category}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="features container">
        <div className="feature-grid">
          <div className="feature-card glass glass-hover">
            <h3>AI-First Structure</h3>
            <p>JSON-LD와 시맨틱 HTML5를 통해 AI 에이전트가 핵심 내용을 즉시 파악할 수 있도록 설계된 콘텐츠 아키텍처.</p>
          </div>
          <div className="feature-card glass glass-hover">
            <h3>전문가 검수 콘텐츠</h3>
            <p>10년 이상의 웹 엔지니어링 실무 경험과 AI 기술을 결합한 사실 기반 기술 가이드. 모든 콘텐츠는 공식 문서를 기준으로 검수됩니다.</p>
          </div>
          <div className="feature-card glass glass-hover">
            <h3>합법적 데이터 전략</h3>
            <p>서비스 약관과 개인정보보호법을 완전히 준수하는 데이터 수집 및 AI 분석 방법론만을 다룹니다.</p>
          </div>
          <div className="feature-card glass glass-hover">
            <h3>실무 코드 예시</h3>
            <p>이론에 그치지 않는 Next.js, Python, TypeScript 기반의 실제 구현 코드와 재현 가능한 예시를 제공합니다.</p>
          </div>
        </div>
      </section>

      {/* Recent Posts Grid */}
      <section className="container" style={{ marginTop: '3rem', marginBottom: '2rem' }}>
        <h2 style={{ marginBottom: '1.5rem', fontSize: '1.8rem' }}>
          <span className="accent-gradient">주목할 만한 포스트</span>
        </h2>
        <div className="posts-grid">
          {recentPosts.map(({ slug, date, title, summary, category }) => (
            <Link
              href={`/posts/${slug}`}
              key={slug}
              className="post-card glass glass-hover"
            >
              <span className="date">{date} • {category}</span>
              <h2>{title}</h2>
              <p>{summary}</p>
            </Link>
          ))}
        </div>
        <div style={{ textAlign: 'center', marginTop: '2rem' }}>
          <Link href="/posts" className="cta-button">
            전체 포스트 보기
          </Link>
        </div>
      </section>
    </div>
  );
}
