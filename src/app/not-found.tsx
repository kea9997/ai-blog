import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '페이지를 찾을 수 없습니다 | AI Optimized Blog',
  description: '요청하신 페이지가 존재하지 않습니다. 홈으로 돌아가 원하시는 콘텐츠를 탐색해 보세요.',
};

export default function NotFound() {
  return (
    <div style={{
      minHeight: '60vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      padding: '4rem 1rem',
    }}>
      <h1 className="accent-gradient" style={{ fontSize: '6rem', fontWeight: 900, lineHeight: 1, marginBottom: '1rem' }}>
        404
      </h1>
      <h2 style={{ fontSize: '1.8rem', marginBottom: '1rem' }}>
        페이지를 찾을 수 없습니다
      </h2>
      <p style={{ opacity: 0.7, maxWidth: '480px', lineHeight: '1.8', marginBottom: '2.5rem' }}>
        요청하신 페이지가 삭제되었거나 주소가 변경되었을 수 있습니다.
        아래 링크를 통해 원하시는 콘텐츠를 찾아보세요.
      </p>
      <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
        <Link href="/" className="cta-button">
          홈으로 돌아가기
        </Link>
        <Link href="/posts" style={{
          padding: '0.75rem 1.5rem',
          border: '1px solid hsl(var(--accent-primary))',
          borderRadius: '8px',
          color: 'hsl(var(--accent-primary))',
          textDecoration: 'none',
          fontWeight: 600,
          transition: 'var(--transition-smooth)',
        }}>
          모든 포스트 보기
        </Link>
      </div>
      <div style={{ marginTop: '3rem', opacity: 0.5, fontSize: '0.85rem' }}>
        <p>도움이 필요하신가요? <Link href="/contact" className="accent-link">Contact</Link> 페이지에서 문의해 주세요.</p>
      </div>
    </div>
  );
}
