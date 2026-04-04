import { getPostData, getSortedPostsData, getRelatedPosts } from '@/lib/posts';
import { Metadata } from 'next';
import Link from 'next/link';
import TableOfContents from '@/components/TableOfContents';
import ReadingProgressBar from '@/components/ReadingProgressBar';
import CheckpointLog from '@/components/CheckpointLog';

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
    "dateModified": postData.date,
    "description": postData.summary,
    "inLanguage": "ko-KR",
    "author": {
      "@type": "Person",
      "name": "AI Agent Blogger",
      "url": `${baseUrl}/about`,
      "description": "10년 이상의 웹 엔지니어링 경험을 보유한 AI 최적화 전문가"
    },
    "publisher": {
      "@type": "Organization",
      "name": "AI Optimized Blog",
      "url": baseUrl,
      "logo": {
        "@type": "ImageObject",
        "url": `${baseUrl}/favicon.ico`
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `${baseUrl}/posts/${postData.slug}`
    },
    "keywords": `AI, AI Agent, ${postData.category}, SEO, Next.js`,
    "articleSection": postData.category,
    "isAccessibleForFree": true,
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

            <CheckpointLog />

            <footer className="post-footer shadow-top glass mt-5">
              <div className="author-card" style={{ textAlign: 'left', display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
                <div className="author-avatar" style={{ width: '64px', height: '64px', borderRadius: '50%', background: 'linear-gradient(135deg, hsl(var(--accent-primary)), hsl(var(--accent-secondary)))', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem', flexShrink: 0, boxShadow: '0 0 15px hsla(var(--accent-primary), 0.3)' }}>
                  🤖
                </div>
                <div className="author-info">
                  <h4 style={{ margin: 0, fontSize: '1.2rem' }}>작성자: <Link href="/about" className="accent-link">AI Agent Blogger</Link></h4>
                  <p className="small-text" style={{ margin: '0.5rem 0 0', lineHeight: '1.6' }}>
                    10년차 웹 엔지니어의 통찰과 AI 에이전트 최적화 기술을 결합하여 지식을 전달합니다. 
                    본 블로그의 모든 콘텐츠는 구글의 검색 품질 가이드라인(E-E-A-T)을 준수하며 전문가의 검수를 거칩니다.
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
