import { getBlogs } from "@/lib/db";
import type { Metadata } from "next";
import BlogDetailClient from "./BlogDetailClient";
import Script from "next/script";

export async function generateStaticParams() {
  const allBlogs = await getBlogs();
  return allBlogs.map((blog) => ({
    slug: blog.slug
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const resolvedParams = await params;
  const allBlogs = await getBlogs();
  const blog = allBlogs.find((b) => b.slug === resolvedParams.slug);

  if (!blog) {
    return {
      title: 'Article | DigitalAds',
    };
  }

  return {
    title: `${blog.title} | DigitalAds Blog`,
    description: blog.excerpt,
    keywords: blog.tags.join(", ") + ", digital marketing Indore, Digitalads",
    alternates: {
      canonical: `https://thedigitalads.in/blog/${blog.slug}`
    },
    openGraph: {
      title: blog.title,
      description: blog.excerpt,
      url: `https://thedigitalads.in/blog/${blog.slug}`,
      siteName: "Digitalads",
      images: blog.image ? [{
        url: blog.image,
        width: 1200,
        height: 630,
        alt: blog.imageAlt || blog.title,
      }] : [{ url: "/logo.jpg", width: 1200, height: 630, alt: "Digitalads Blog" }],
      locale: "en_IN",
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: blog.title,
      description: blog.excerpt,
      images: blog.image ? [blog.image] : ["/logo.jpg"],
    },
  };
}

export default async function BlogDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const allBlogs = await getBlogs();
  const blog = allBlogs.find((b) => b.slug === resolvedParams.slug) || null;

  // JSON-LD Structured Data for BlogPosting
  const jsonLd = blog ? [
    {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      "headline": blog.title,
      "description": blog.excerpt,
      "image": blog.image ? `https://thedigitalads.in${blog.image}` : "https://thedigitalads.in/logo.jpg",
      "author": {
        "@type": "Person",
        "name": "Ankit Bairagi",
        "url": "https://www.linkedin.com/in/ankitbairagi"
      },
      "publisher": {
        "@type": "Organization",
        "name": "Digitalads",
        "logo": {
          "@type": "ImageObject",
          "url": "https://thedigitalads.in/logo.jpg"
        }
      },
      "datePublished": blog.date,
      "dateModified": blog.date,
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": `https://thedigitalads.in/blog/${blog.slug}`
      },
      "keywords": blog.tags.join(", "),
      "articleSection": blog.category
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://thedigitalads.in/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Blog",
          "item": "https://thedigitalads.in/blog"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": blog.title,
          "item": `https://thedigitalads.in/blog/${blog.slug}`
        }
      ]
    }
  ] : null;

  return (
    <>
      {jsonLd && (
        <Script
          id="blog-jsonld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      )}
      <BlogDetailClient 
        slug={resolvedParams.slug} 
        initialBlog={blog} 
        initialAllBlogs={allBlogs} 
      />
    </>
  );
}
