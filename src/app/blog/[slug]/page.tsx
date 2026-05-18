"use client";

import { use, useState, useEffect } from "react";
import Link from "next/link";
import { getBlogs, BlogPost } from "@/lib/db";
import "./blog-detail.css";

export default function BlogDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = use(params);
  const [blog, setBlog] = useState<BlogPost | null>(null);
  const [allBlogs, setAllBlogs] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchBlog() {
      try {
        const blogsList = await getBlogs();
        setAllBlogs(blogsList);
        const found = blogsList.find((b) => b.slug === resolvedParams.slug);
        setBlog(found || null);
      } catch (err) {
        console.error("Error loading blog details page", err);
      } finally {
        setLoading(false);
      }
    }
    fetchBlog();
  }, [resolvedParams.slug]);

  // A basic markdown to HTML renderer so headings, lists, blockquotes, and paragraphs render beautifully!
  const renderMarkdownContent = (markdownText: string) => {
    if (!markdownText) return { __html: "" };
    
    let html = markdownText
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;");

    // Headers
    html = html.replace(/^### (.*$)/gim, '<h3>$1</h3>');
    html = html.replace(/^## (.*$)/gim, '<h2>$1</h2>');
    html = html.replace(/^# (.*$)/gim, '<h2>$1</h2>'); // Render main title as h2 inside the rich text container for SEO structure

    // Blockquotes
    html = html.replace(/^&gt; (.*$)/gim, '<blockquote><p>$1</p></blockquote>');

    // Horizontal rules
    html = html.replace(/^\-\-\-$/gim, '<hr />');

    // Bold text
    html = html.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');

    // Lists (simplified list item wrapper)
    html = html.replace(/^\- (.*$)/gim, '<li>$1</li>');

    // Paragraphs wrapper
    const lines = html.split(/\n\n+/);
    html = lines.map(line => {
      const trimmed = line.trim();
      if (!trimmed) return '';
      if (trimmed.startsWith('<h') || trimmed.startsWith('<blockquote') || trimmed.startsWith('<hr') || trimmed.startsWith('<li>')) {
        return trimmed;
      }
      return `<p>${trimmed.replace(/\n/g, '<br />')}</p>`;
    }).join('\n');

    return { __html: html };
  };

  if (loading) {
    return (
      <main className="blog-detail-wrapper">
        <div className="container" style={{ textAlign: "center", padding: "120px 0" }}>
          <p style={{ color: "rgba(255,255,255,0.4)" }}>Loading premium article...</p>
        </div>
      </main>
    );
  }

  if (!blog) {
    return (
      <main className="blog-detail-wrapper">
        <div className="container" style={{ textAlign: "center", padding: "120px 0" }}>
          <h2 style={{ fontSize: "28px", fontWeight: "800", marginBottom: "16px" }}>Article Not Found</h2>
          <p style={{ color: "rgba(255,255,255,0.4)", marginBottom: "24px" }}>
            The blog post you are looking for might have been moved or deleted.
          </p>
          <Link href="/blog" className="btn btn-primary">
            Back to Blog Index
          </Link>
        </div>
      </main>
    );
  }

  // Get recent posts excluding current one
  const recentPosts = allBlogs.filter(p => p.id !== blog.id).slice(0, 3);

  return (
    <main className="blog-detail-wrapper">
      <div className="container">
        
        {/* Breadcrumb & Blog Header */}
        <header className="blog-detail-header">
          <nav aria-label="Breadcrumb" className="breadcrumb" style={{ marginBottom: "20px" }}>
            <Link href="/">Home</Link>
            <span className="breadcrumb-sep">›</span>
            <Link href="/blog">Blog</Link>
            <span className="breadcrumb-sep">›</span>
            <span className="breadcrumb-current" style={{ opacity: 0.6 }}>{blog.title}</span>
          </nav>
          <h1>{blog.title}</h1>
          
          <div className="meta-bar">
            <span><i className="fa-solid fa-folder-open"></i> {blog.category}</span>
            <span><i className="fa-regular fa-calendar"></i> {blog.date}</span>
            <span><i className="fa-regular fa-clock"></i> {blog.readTime}</span>
          </div>
        </header>

        {/* Layout Grid */}
        <div className="blog-detail-layout">
          
          {/* Main Rich Content */}
          <article className="blog-rich-content" dangerouslySetInnerHTML={renderMarkdownContent(blog.content)} />

          {/* Sidebar */}
          <aside className="blog-detail-sidebar">
            
            {/* Author details card */}
            <div className="author-card">
              <div className="author-img">
                <i className="fa-solid fa-user-tie"></i>
              </div>
              <h3>Ankit Bairagi</h3>
              <span className="author-title">Founder, Digitalads</span>
              <p>Performance marketer specializing in GMB optimization, Meta/Google Ads, and WhatsApp automation for local Indore businesses.</p>
              
              <div className="author-socials">
                <a 
                  href="https://www.linkedin.com/in/ankitbairagi" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="author-social-link" 
                  aria-label="LinkedIn"
                >
                  <i className="fa-brands fa-linkedin-in"></i>
                </a>
                <a 
                  href="https://wa.me/918103202086" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="author-social-link" 
                  aria-label="WhatsApp"
                >
                  <i className="fa-brands fa-whatsapp"></i>
                </a>
              </div>
            </div>

            {/* Recent Posts widget */}
            {recentPosts.length > 0 && (
              <div className="sidebar-widget">
                <h3 className="sidebar-widget-title">Other Insights</h3>
                <ul className="sidebar-recent">
                  {recentPosts.map((post) => (
                    <li key={post.id}>
                      <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                      <span>{post.date}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Local Indore Strategy CTA */}
            <div className="sidebar-cta">
              <h3>Boost Indore Leads</h3>
              <p>Get a custom-crafted marketing blueprint for your medical clinic or coaching institute.</p>
              <Link href="/contact" className="btn btn-primary" style={{ width: "100%", padding: "12px 0", textAlign: "center" }}>
                Request Free Blueprint
              </Link>
            </div>

          </aside>

        </div>

      </div>
    </main>
  );
}
