import { getNews } from "@/lib/newsDb";
import type { Metadata } from "next";
import NewsDetailClient from "./NewsDetailClient";
import Script from "next/script";

export async function generateStaticParams() {
  const allNews = await getNews();
  return allNews.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const resolvedParams = await params;
  const allNews = await getNews();
  const post = allNews.find((n) => n.slug === resolvedParams.slug);

  if (!post) {
    return {
      title: "News Article | Digitalads",
    };
  }

  return {
    title: `${post.titleEn} | Digitalads Weekly News`,
    description: post.excerptEn,
    keywords: `${post.tagsEn.join(", ")}, AI marketing news, search engine news, local SEO Indore`,
    alternates: {
      canonical: `https://thedigitalads.in/news/${post.slug}`,
    },
    openGraph: {
      title: post.titleEn,
      description: post.excerptEn,
      url: `https://thedigitalads.in/news/${post.slug}`,
      siteName: "Digitalads",
      images: [
        {
          url: post.image,
          width: 1200,
          height: 630,
          alt: post.imageAlt || post.titleEn,
        },
      ],
      locale: "en_IN",
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: post.titleEn,
      description: post.excerptEn,
      images: [post.image],
    },
  };
}

export default async function NewsDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const resolvedParams = await params;
  const allNews = await getNews();
  const post = allNews.find((n) => n.slug === resolvedParams.slug) || null;

  // JSON-LD Structured Data for NewsArticle & BreadcrumbList
  const jsonLd = post
    ? [
        {
          "@context": "https://schema.org",
          "@type": "NewsArticle",
          "headline": post.titleEn,
          "alternativeHeadline": post.titleHi,
          "description": post.excerptEn,
          "image": [
            post.image.startsWith("/")
              ? `https://thedigitalads.in${post.image}`
              : post.image,
          ],
          "datePublished": new Date(post.date).toISOString(),
          "dateModified": new Date(post.date).toISOString(),
          "author": {
            "@type": "Person",
            "name": "Ankit Bairagi",
            "url": "https://www.linkedin.com/in/ankitbairagi",
          },
          "publisher": {
            "@type": "Organization",
            "name": "Digitalads",
            "logo": {
              "@type": "ImageObject",
              "url": "https://thedigitalads.in/logo.jpg",
            },
          },
          "inLanguage": ["en", "hi"],
          "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": `https://thedigitalads.in/news/${post.slug}`,
          },
          "keywords": post.tagsEn.join(", "),
        },
        {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            {
              "@type": "ListItem",
              "position": 1,
              "name": "Home",
              "item": "https://thedigitalads.in/",
            },
            {
              "@type": "ListItem",
              "position": 2,
              "name": "News",
              "item": "https://thedigitalads.in/news",
            },
            {
              "@type": "ListItem",
              "position": 3,
              "name": post.titleEn,
              "item": `https://thedigitalads.in/news/${post.slug}`,
            },
          ],
        },
      ]
    : null;

  return (
    <>
      {jsonLd && (
        <Script
          id="news-jsonld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      )}
      <NewsDetailClient
        slug={resolvedParams.slug}
        initialPost={post}
        initialAllNews={allNews}
      />
    </>
  );
}
