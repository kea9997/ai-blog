import { getPostData, getSortedPostsData, getRelatedPosts } from '@/lib/posts';
import { Metadata } from 'next';
import Link from 'next/link';
import TableOfContents from '@/components/TableOfContents';
import ReadingProgressBar from '@/components/ReadingProgressBar';

interface Params {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  const posts = getSortedPostsData();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const postData = await getPostData(slug);
  return {
    title: postData.title,
    description: postData.summary,
    openGraph: {
      title: postData.title,
      description: postData.summary,
      type: 'article',
      publishedTime: postData.date,
      authors: ['AI Agent Blogger'],
    },
  };
}

export default async function Post({ params }: Params) {
  const { slug } = await params;
  const postData = await getPostData(slug);
  const relatedPosts = getRelatedPosts(slug, postData.category);
  const baseUrl = 'https://ai-blog-red-iota.vercel.app';

  // AI 에이전트를 위한 확장된 JSON-LD 구조화 데이터
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": postData.title,
    "datePublished": postData.date,
    "description": postData.summary,
    "author": {
      "@type": "Person",
      "name": "AI Agent Blogger",
      "url": `${baseUrl}/about`
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `${baseUrl}/posts/${postData.slug}`
    },
    "keywords": "AI, AI Agent, SEO, Next.js",
    "relatedLink": relatedPosts.map(p => `${baseUrl}/posts/${p.slug}`)
  };

  return (
    <>
      <ReadingProgressBar />
      <article className="post-detail-container">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        
        <nav className="breadcrumbs mb-4" aria-label="Breadcrumb">
          <ul style={{ display: 'flex', listStyle: 'none', gap: '0.5rem', fontSize: '0.85rem', color: 'hsl(var(--text-muted))' }}>
            <li><Link href="/" className="hover-accent">Home</Link></li>
            <li>/</li>
            <li><Link href="/posts" className="hover-accent">Posts</Link></li>
            <li>/</li>
            <li style={{ color: 'hsl(var(--text-secondary))', fontWeight: 500 }}>{postData.title}</li>
          </ul>
        </nav>
        
        <div className="post-layout">
          <div className="post-main">
            <header className="post-header">
              <h1 className="accent-gradient ">{postData.title}</h1>
              <div className="post-meta">
                <time>{postData.date}</time>
                <span className="separator">•</span>
                <span className="category">{postData.category}</span>
              </div>
            </header>

            <div 
              className="post-content"
              dangerouslySetInnerHTML={{ __html: postData.contentHtml || '' }} 
            />

            <footer className="post-footer shadow-top glass mt-5">
              <div className="author-card" style={{ textAlign: 'left', display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
                <div className="author-avatar" style={{ width: '64px', height: '64px', borderRadius: '50%', background: 'hsl(var(--accent-primary))', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem', flexShrink: 0 }}>
                  🤖
                </div>
                <div className="author-info">
                  <h4 style={{ margin: 0, fontSize: '1.1rem' }}>작성자: AI Agent Blogger</h4>
                  <p className="small-text" style={{ margin: '0.25rem 0 0' }}>
                    웹 최적화 및 AI 에이전트 데이터 연동 전문가입니다. 
                    구글 서치 가이드라인 및 최신 기술 트렌드 기반의 블로그입니다.
                  </p>
                </div>
              </div>
            </footer>

            {relatedPosts.length > 0 && (
              <section className="related-posts-section">
                <h3 className="accent-gradient">Related Insights</h3>
                <div className="related-posts-grid">
                  {relatedPosts.map((post) => (
                    <Link key={post.slug} href={`/posts/${post.slug}`} className="related-post-card glass glass-hover">
                      <span className="small-text" style={{ color: 'hsl(var(--accent-primary))', fontWeight: 600 }}>{post.category}</span>
                      <h4 className="mt-2">{post.title}</h4>
                      <p className="small-text mt-2">{post.summary}</p>
                    </Link>
                  ))}
                </div>
              </section>
            )}
          </div>
          
          <aside className="post-sidebar">
            <TableOfContents />
          </aside>
        </div>
      </article>
    </>
  );
}
