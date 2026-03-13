'use client';

import { useEffect, useState } from 'react';

interface TocItem {
  id: string;
  text: string;
  level: number;
}

export default function TableOfContents() {
  const [toc, setToc] = useState<TocItem[]>([]);
  const [activeId, setActiveId] = useState('');

  useEffect(() => {
    const headings = Array.from(document.querySelectorAll('.post-content h2, .post-content h3'));
    const tocItems: TocItem[] = headings.map((heading, index) => {
      const id = heading.id || `heading-${index}`;
      heading.id = id;
      return {
        id,
        text: heading.textContent || '',
        level: parseInt(heading.tagName[1]),
      };
    });
    setToc(tocItems);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: '-100px 0% -80% 0%' }
    );

    headings.forEach((heading) => observer.observe(heading));
    return () => observer.disconnect();
  }, []);

  if (toc.length === 0) return null;

  return (
    <nav className="toc-container glass">
      <h4 className="toc-title">Table of Contents</h4>
      <ul className="toc-list">
        {toc.map((item) => (
          <li 
            key={item.id} 
            className={`toc-item level-${item.level} ${activeId === item.id ? 'active' : ''}`}
          >
            <a href={`#${item.id}`}>{item.text}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
