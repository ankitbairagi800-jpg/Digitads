import { getBlogs } from "@/lib/db";
import type { Metadata } from "next";
import BlogDetailClient from "./BlogDetailClient";

export async function generateStaticParams() {
  return [
    { slug: "ai-future-marketing" },
    { slug: "ai-local-seo" },
    { slug: "meta-vs-google" },
    { slug: "whatsapp-automation" },
    { slug: "clinic-landing-pages" }
  ];
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
    alternates: {
      canonical: `https://thedigitalads.in/blog/${blog.slug}`
    }
  };
}

export default async function BlogDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const allBlogs = await getBlogs();
  const blog = allBlogs.find((b) => b.slug === resolvedParams.slug) || null;

  return (
    <BlogDetailClient 
      slug={resolvedParams.slug} 
      initialBlog={blog} 
      initialAllBlogs={allBlogs} 
    />
  );
}
