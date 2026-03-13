import Link from 'next/link';
import { getSortedPostsData } from '@/lib/posts';

export const metadata = {
  title: "All Posts",
  description: "최신 AI 기술 정보와 대응 전략을 확인하세요.",
};

export default function PostsPage() {
  const allPostsData = getSortedPostsData();

  return (
    <div className="posts-container">
      <header className="page-header">
        <h1 className="accent-gradient">All Knowledge</h1>
        <p>AI 에이전트와 인간을 위한 깊이 있는 통찰</p>
      </header>

      <div className="posts-grid container">
        {allPostsData.map(({ slug, date, title, summary, category }) => (
          <Link href={`/posts/${slug}`} key={slug} className="post-card glass glass-hover">
            <span className="date">{date} • {category}</span>
            <h2>{title}</h2>
            <p>{summary}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
