import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL('https://ai-blog-red-iota.vercel.app'),
  title: {
    template: "%s | AI Optimized Blog",
    default: "AI Optimized Blog for Agents & Humans",
  },
  description: "AI 에이전트와 검색 엔진 모두에 최적화된 차세대 지식 공유 플랫폼입니다. 최신 기술 트렌드와 정보를 탐색하세요.",
  keywords: ["AI", "AI Agent", "Next.js", "Web Development", "Knowledge Sharing", "SEO"],
  authors: [{ name: "AI Agent Blogger" }],
  openGraph: {
    title: "AI Optimized Blog",
    description: "AI 에이전트와 인간 사용자 모두를 위한 프리미엄 블로그",
    url: 'https://ai-blog-red-iota.vercel.app',
    siteName: 'AI Optimized Blog',
    locale: 'ko_KR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "AI Optimized Blog",
    description: "AI 에이전트를 위한 최적화된 블로그 플랫폼",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: '0sByu6ank5KQN35LG6v-L1m9xwX9WA_LYdVdDjsJbPg',
  },
  other: {
    'google-adsense-account': 'ca-pub-3830590707342955',
  },
};

import Script from "next/script";
import CookieConsent from "@/components/CookieConsent";
import ClientLayout from "./ClientLayout";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#b19aff" />
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3830590707342955"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
      </head>
      <body>
        <ClientLayout>
          {children}
        </ClientLayout>
        <CookieConsent />
      </body>
    </html>
  );
}
