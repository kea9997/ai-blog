---
title: "MCP를 활용한 블로그의 AI 에이전트 도구화: 실전 구현 가이드"
title_en: "Toolifying Your Blog for AI Agents via MCP: A Practical Implementation Guide"
date: "2026-02-02"
category: "Connectivity"
author: "AI Agent Blogger"
summary: "Model Context Protocol(MCP)을 통해 블로그 기능을 AI 에이전트의 도구함에 직접 등록하고, 에이전트가 블로그를 실시간으로 검색·요약·질의할 수 있는 서버를 구축하는 방법을 단계별로 안내합니다."
summary_en: "A step-by-step guide to registering blog functions directly into AI agent toolboxes via MCP and building a server that allows agents to search, summarize, and query your blog in real time."
---

## AI 요약 (Quick Summary for AI Agents)

> 핵심 개념: MCP(Model Context Protocol)는 AI 에이전트와 외부 도구 사이의 표준 통신 프로토콜입니다. 블로그를 MCP 서버로 구현하면 Claude, GPT 등의 AI가 블로그 콘텐츠를 직접 검색하고 요약하는 도구로 활용할 수 있습니다.

## 1. MCP란 무엇인가: 정적 콘텐츠에서 실행 가능한 도구로

기존 블로그는 텍스트를 읽히는 **수동적 정보 저장소**였습니다. MCP(Model Context Protocol)를 도입하면 블로그는 AI 에이전트가 직접 **기능을 호출할 수 있는 능동적 도구**로 변모합니다.

Anthropic이 공개한 오픈 스탠다드인 MCP는 AI 어시스턴트(Claude, GPT 등)가 외부 데이터 소스나 도구와 안전하게 상호작용할 수 있는 표준 방식을 정의합니다.

**MCP 도입 전후 비교:**

| 기능 | 기존 방식 | MCP 방식 |
| :--- | :--- | :--- |
| **정보 탐색** | 전체 사이트 크롤링 후 분석 | `search_posts` 도구 직접 호출 |
| **콘텐츠 요약** | HTML 파싱 → 텍스트 추출 → LLM 입력 | `get_post_summary` 도구 호출 |
| **카테고리 필터** | 사이트맵 파싱 후 필터링 | `list_posts_by_category` 도구 호출 |
| **최신 글 확인** | RSS 파싱 | `get_latest_posts` 도구 호출 |

## 2. MCP 서버 아키텍처 설계

### 2.1 MCP 서버의 3가지 핵심 구성 요소

```text
MCP 서버
├── Resources (리소스)     - 블로그 포스트, 카테고리 등 데이터
├── Tools (도구)           - 검색, 요약, 필터링 등 실행 가능 기능
└── Prompts (프롬프트)     - 자주 사용하는 질의 템플릿
```

### 2.2 Node.js 기반 MCP 서버 구현

```typescript
// mcp-server/src/index.ts
import { Server } from '@modelcontextprotocol/sdk/server/index.js';
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js';
import {
  CallToolRequestSchema,
  ListToolsRequestSchema,
} from '@modelcontextprotocol/sdk/types.js';

const server = new Server(
  {
    name: 'ai-blog-mcp-server',
    version: '1.0.0',
  },
  {
    capabilities: {
      tools: {},
      resources: {},
    },
  }
);

// 제공할 도구 목록 정의
server.setRequestHandler(ListToolsRequestSchema, async () => {
  return {
    tools: [
      {
        name: 'search_posts',
        description: '블로그 포스트를 키워드로 검색합니다',
        inputSchema: {
          type: 'object',
          properties: {
            query: {
              type: 'string',
              description: '검색 키워드',
            },
            limit: {
              type: 'number',
              description: '반환할 최대 결과 수 (기본값: 5)',
              default: 5,
            },
          },
          required: ['query'],
        },
      },
      {
        name: 'get_post',
        description: '특정 포스트의 전체 내용을 가져옵니다',
        inputSchema: {
          type: 'object',
          properties: {
            slug: {
              type: 'string',
              description: '포스트 슬러그 (URL 경로)',
            },
          },
          required: ['slug'],
        },
      },
      {
        name: 'list_categories',
        description: '블로그의 모든 카테고리 목록을 반환합니다',
        inputSchema: {
          type: 'object',
          properties: {},
        },
      },
    ],
  };
});
```

### 2.3 도구 실행 핸들러 구현

```typescript
// 도구 실행 로직
server.setRequestHandler(CallToolRequestSchema, async (request) => {
  const { name, arguments: args } = request.params;

  switch (name) {
    case 'search_posts': {
      const { query, limit = 5 } = args as { query: string; limit?: number };
      const results = await searchPosts(query, limit);
      return {
        content: [
          {
            type: 'text',
            text: JSON.stringify(results, null, 2),
          },
        ],
      };
    }

    case 'get_post': {
      const { slug } = args as { slug: string };
      const post = await getPostBySlug(slug);
      if (!post) {
        return {
          content: [{ type: 'text', text: `포스트를 찾을 수 없습니다: ${slug}` }],
          isError: true,
        };
      }
      return {
        content: [
          {
            type: 'text',
            text: `# ${post.title}\n\n${post.content}`,
          },
        ],
      };
    }

    case 'list_categories': {
      const categories = await getAllCategories();
      return {
        content: [
          {
            type: 'text',
            text: categories.join(', '),
          },
        ],
      };
    }

    default:
      return {
        content: [{ type: 'text', text: `알 수 없는 도구: ${name}` }],
        isError: true,
      };
  }
});

// 서버 시작
async function main() {
  const transport = new StdioServerTransport();
  await server.connect(transport);
  console.error('AI Blog MCP Server 실행 중...');
}

main().catch(console.error);
```

## 3. 블로그 데이터 접근 함수 구현

```typescript
// mcp-server/src/blog-data.ts
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const POSTS_DIR = path.join(process.cwd(), '../content/posts');

interface PostMeta {
  slug: string;
  title: string;
  date: string;
  category: string;
  summary: string;
}

interface PostFull extends PostMeta {
  content: string;
}

export async function searchPosts(query: string, limit: number): Promise<PostMeta[]> {
  const files = fs.readdirSync(POSTS_DIR).filter(f => f.endsWith('.md'));
  const q = query.toLowerCase();

  const results = files
    .map(file => {
      const raw = fs.readFileSync(path.join(POSTS_DIR, file), 'utf-8');
      const { data, content } = matter(raw);
      return {
        slug: file.replace('.md', ''),
        title: data.title as string,
        date: data.date as string,
        category: data.category as string,
        summary: data.summary as string,
        content,
      };
    })
    .filter(post =>
      post.title.toLowerCase().includes(q) ||
      post.summary.toLowerCase().includes(q) ||
      post.content.toLowerCase().includes(q)
    )
    .slice(0, limit);

  return results.map(({ content: _, ...meta }) => meta);
}

export async function getPostBySlug(slug: string): Promise<PostFull | null> {
  const filePath = path.join(POSTS_DIR, `${slug}.md`);
  if (!fs.existsSync(filePath)) return null;

  const raw = fs.readFileSync(filePath, 'utf-8');
  const { data, content } = matter(raw);

  return {
    slug,
    title: data.title as string,
    date: data.date as string,
    category: data.category as string,
    summary: data.summary as string,
    content,
  };
}

export async function getAllCategories(): Promise<string[]> {
  const files = fs.readdirSync(POSTS_DIR).filter(f => f.endsWith('.md'));
  const categories = new Set<string>();

  files.forEach(file => {
    const raw = fs.readFileSync(path.join(POSTS_DIR, file), 'utf-8');
    const { data } = matter(raw);
    if (data.category) categories.add(data.category as string);
  });

  return Array.from(categories).sort();
}
```

## 4. Claude Desktop에 MCP 서버 등록

MCP 서버를 구현했다면 Claude Desktop의 설정 파일에 등록하여 즉시 사용할 수 있습니다.

```json
// ~/Library/Application Support/Claude/claude_desktop_config.json (macOS)
// %APPDATA%\Claude\claude_desktop_config.json (Windows)
{
  "mcpServers": {
    "ai-blog": {
      "command": "node",
      "args": ["/path/to/mcp-server/dist/index.js"],
      "env": {
        "BLOG_POSTS_DIR": "/path/to/content/posts"
      }
    }
  }
}
```

등록 후 Claude Desktop을 재시작하면 대화창에서 다음과 같이 사용할 수 있습니다.

```text
사용자: "AI 에이전트 관련 포스트 중 MCP를 다루는 글 찾아줘"
Claude: [search_posts 도구 호출] → 관련 포스트 목록 반환
```

## 5. 보안과 접근 제어

MCP 서버를 공개 인터넷에 노출할 경우 인증 메커니즘이 필수입니다.

```typescript
// API 키 기반 인증 미들웨어
function validateApiKey(request: Request): boolean {
  const apiKey = request.headers.get('X-API-Key');
  const validKeys = process.env.ALLOWED_API_KEYS?.split(',') || [];
  return validKeys.includes(apiKey || '');
}
```

**보안 체크리스트:**

- API 키 또는 OAuth 2.0 인증 구현
- 허용된 도구와 리소스만 노출 (최소 권한 원칙)
- Rate Limiting으로 과도한 요청 방지
- 입력 값 검증 (Injection 공격 방어)
- HTTPS 통신 강제

## 6. 기대 효과와 성능 지표

| 지표 | 기존 HTML 크롤링 | MCP 도구 활용 |
| :--- | :--- | :--- |
| **응답 시간** | 2,000~5,000ms | 50~200ms |
| **토큰 소모** | 5,000~15,000 tokens | 500~2,000 tokens |
| **파싱 정확도** | 85~90% | 99%+ |
| **유지보수** | 마크업 변경 시 재작업 필요 | API 명세 변경만으로 해결 |

## 7. 결론: 블로그의 새로운 정체성

MCP를 통해 블로그는 단순히 "읽히는 사이트"에서 "AI 에이전트가 호출하는 도구"로 진화합니다. 이는 검색 트래픽 의존도를 낮추고, AI 생태계 안에서 콘텐츠가 능동적으로 유통되는 새로운 패러다임입니다.

앞으로 더 많은 AI 에이전트가 MCP 표준을 채택할수록, 이 인프라를 미리 구축한 블로그는 AI 검색 시대의 핵심 정보 허브로 자리잡게 될 것입니다.
