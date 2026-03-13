import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export async function GET(
  request: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;
  const postsDirectory = path.join(process.cwd(), 'content/posts');
  const fullPath = path.join(postsDirectory, `${slug}.md`);

  if (!fs.existsSync(fullPath)) {
    return NextResponse.json({ error: 'Post not found' }, { status: 404 });
  }

  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  return NextResponse.json({
    slug,
    title: data.title,
    contentMarkdown: content,
    metadata: data
  });
}
