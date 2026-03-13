'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

interface Post {
  slug: string;
  title: string;
  title_en: string;
  summary: string;
  summary_en: string;
  category: string;
}

export default function SearchOverlay({ onClose }: { onClose: () => void }) {
  const [query, setQuery] = useState('');
  const [posts, setPosts] = useState<Post[]>([]);
  const [results, setResults] = useState<Post[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    // 모든 포스트 데이터를 가져옴 (실제 프로젝트에서는 API 엔드포인트나 정적 JSON 파일을 사용)
    fetch('/api/posts')
      .then(res => res.json())
      .then(data => setPosts(data))
      .catch(err => console.error('Search data fetch failed', err));

    inputRef.current?.focus();
    
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  useEffect(() => {
    if (!query) {
      setResults([]);
      return;
    }
    const filtered = posts.filter(post => 
      post.title.toLowerCase().includes(query.toLowerCase()) ||
      post.title_en?.toLowerCase().includes(query.toLowerCase()) ||
      post.summary.toLowerCase().includes(query.toLowerCase()) ||
      post.summary_en?.toLowerCase().includes(query.toLowerCase()) ||
      post.category.toLowerCase().includes(query.toLowerCase())
    ).slice(0, 8);
    setResults(filtered);
  }, [query, posts]);

  return (
    <div className="search-overlay">
      <button className="close-search" onClick={onClose} aria-label="Close search">×</button>
      <div className="search-modal">
        <div className="search-input-wrapper">
          <span className="search-icon">🔍</span>
          <input 
            ref={inputRef}
            type="text" 
            placeholder="어떤 지식을 찾으시나요?" 
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>

        <div className="search-results">
          {query && results.length === 0 && (
            <div style={{ textAlign: 'center', padding: '2rem', color: 'hsl(var(--text-muted))' }}>
              일치하는 지식이 없습니다. 다른 키워드로 검색해보세요.
            </div>
          )}
          {results.map(post => (
            <Link 
              key={post.slug} 
              href={`/posts/${post.slug}`} 
              className="search-result-item"
              onClick={onClose}
            >
              <span className="small-text accent-gradient">{post.category}</span>
              <h3 style={{ fontSize: '1.25rem', marginTop: '0.25rem' }}>{post.title}</h3>
              <p className="small-text mt-2" style={{ lineClamp: 1, overflow: 'hidden' }}>{post.summary}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
