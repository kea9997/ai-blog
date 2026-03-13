import { getPostData, getSortedPostsData } from '@/lib/posts';
import { Metadata } from 'next';

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
  const baseUrl = 'https://your-blog-domain.com';

  // AI 에이전트를 위한 JSON-LD 구조화 데이터
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": postData.title,
    "datePublished": postData.date,
    "description": postData.summary,
    "author": {
      "@type": "Person",
      "name": "AI Agent Blogger"
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `${baseUrl}/posts/${postData.slug}`
    }
  };

  return (
    <article className="post-detail-container">
      {/* JSON-LD 삽입 */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <header className="post-header">
        <h1 className="accent-gradient">{postData.title}</h1>
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

      <footer className="post-footer shadow-top glass">
        <h3>관련 정보를 AI 에이전트가 요약하길 원하시나요?</h3>
        <p>본 포스트는 AI 파싱에 최적화되어 있어, 어떠한 LLM에서도 정확하게 요약됩니다.</p>
      </footer>
    </article>
  );
}
