"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { getBlogs, BlogPost } from "@/lib/db";
import SocialShare from "@/components/SocialShare";
import "./blog-detail.css";

// Markdown to HTML renderer with internal linking support
const renderMarkdownContent = (markdownText: string) => {
  if (!markdownText) return { __html: "" };
  
  let html = markdownText;

  // Links: [text](url)
  html = html.replace(/\[([^\]]+)\]\(([^)]+)\)/g, (_, text, url) => {
    const isInternal = url.startsWith("/");
    if (isInternal) {
      return `<a href="${url}" class="internal-link">${text}</a>`;
    }
    return `<a href="${url}" target="_blank" rel="noopener noreferrer">${text}</a>`;
  });

  // Images: ![alt](src)
  html = html.replace(/!\[([^\]]*)\]\(([^)]+)\)/g, '<figure class="blog-figure"><img src="$2" alt="$1" class="blog-content-image" loading="lazy" /><figcaption>$1</figcaption></figure>');

  // Headers
  html = html.replace(/^### (.*$)/gim, '<h3>$1</h3>');
  html = html.replace(/^## (.*$)/gim, '<h2>$1</h2>');
  html = html.replace(/^# (.*$)/gim, '<h2 class="blog-main-heading">$1</h2>');

  // Blockquotes
  html = html.replace(/^&gt; (.*$)/gim, '<blockquote><p>$1</p></blockquote>');

  // Horizontal rules
  html = html.replace(/^\-\-\-$/gim, '<hr />');

  // Bold text
  html = html.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');

  // Lists
  html = html.replace(/^\- (.*$)/gim, '<li>$1</li>');

  // Paragraphs
  const lines = html.split(/\n\n+/);
  html = lines.map(line => {
    const trimmed = line.trim();
    if (!trimmed) return '';
    if (
      trimmed.startsWith('<h') || 
      trimmed.startsWith('<blockquote') || 
      trimmed.startsWith('<hr') || 
      trimmed.startsWith('<li>') || 
      trimmed.startsWith('<figure') ||
      trimmed.startsWith('<')
    ) {
      return trimmed;
    }
    return `<p>${trimmed.replace(/\n/g, '<br />')}</p>`;
  }).join('\n');

  return { __html: html };
};

// Extract headings from markdown for Table of Contents
const extractHeadings = (content: string) => {
  const headingRegex = /^##\s+(.+)$/gm;
  const headings: { text: string; id: string }[] = [];
  let match;
  while ((match = headingRegex.exec(content)) !== null) {
    const text = match[1].replace(/\*\*/g, '').trim();
    const id = text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
    headings.push({ text, id });
  }
  return headings;
};

interface BlogDetailClientProps {
  slug: string;
  initialBlog: BlogPost | null;
  initialAllBlogs: BlogPost[];
}

export default function BlogDetailClient({ slug, initialBlog, initialAllBlogs }: BlogDetailClientProps) {
  const [blog, setBlog] = useState<BlogPost | null>(initialBlog);
  const [allBlogs, setAllBlogs] = useState<BlogPost[]>(initialAllBlogs);
  const [loading, setLoading] = useState(!initialBlog);
  const [readProgress, setReadProgress] = useState(0);

  useEffect(() => {
    if (blog) {
      document.title = `${blog.title} | DigitalAds Blog`;
    }

    async function loadData() {
      try {
        const list = await getBlogs();
        setAllBlogs(list);
        const found = list.find((b) => b.slug === slug);
        if (found) {
          setBlog(found);
          document.title = `${found.title} | DigitalAds Blog`;
        } else {
          setBlog(null);
        }
      } catch (err) {
        console.error("Failed to load blog post", err);
      } finally {
        setLoading(false);
      }
    }

    if (!blog) {
      loadData();
    } else {
      setLoading(false);
    }
  }, [slug, blog]);

  // Reading progress bar
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setReadProgress(docHeight > 0 ? (scrollTop / docHeight) * 100 : 0);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (loading) {
    return (
      <main className="blog-detail-wrapper">
        <div className="container" style={{ textAlign: "center", padding: "120px 0" }}>
          <div className="blog-loading-spinner"></div>
          <p style={{ color: "rgba(255,255,255,0.4)" }}>Loading article...</p>
        </div>
      </main>
    );
  }

  if (!blog) {
    return (
      <main className="blog-detail-wrapper">
        <div className="container" style={{ textAlign: "center", padding: "120px 0" }}>
          <h2 style={{ fontSize: "28px", fontWeight: "800", marginBottom: "16px", color: "#fff" }}>Article Not Found</h2>
          <p style={{ color: "rgba(255,255,255,0.4)", marginBottom: "24px" }}>
            The blog post you are looking for might have been moved or deleted.
          </p>
          <Link href="/blog" className="btn btn-primary">Back to Blog</Link>
        </div>
      </main>
    );
  }

  const headings = extractHeadings(blog.content);
  const relatedPosts = allBlogs.filter(p => p.id !== blog.id).slice(0, 3);

  return (
    <>
      {/* Reading Progress Bar */}
      <div className="reading-progress" style={{ width: `${readProgress}%` }} />

      <main className="blog-detail-wrapper">
        {/* Hero Section with Featured Image */}
        <section className="blog-hero-section">
          <div className="blog-hero-image-wrap">
            {blog.image ? (
              <Image
                src={blog.image}
                alt={blog.imageAlt || blog.title}
                width={1200}
                height={630}
                className="blog-hero-img"
                priority
              />
            ) : (
              <div className="blog-hero-placeholder">
                <i className={blog.icon} aria-hidden="true"></i>
              </div>
            )}
            <div className="blog-hero-overlay" />
          </div>
          <div className="container">
            <div className="blog-hero-content">
              <nav aria-label="Breadcrumb" className="breadcrumb">
                <Link href="/">Home</Link>
                <span className="breadcrumb-sep">›</span>
                <Link href="/blog">Blog</Link>
                <span className="breadcrumb-sep">›</span>
                <span className="breadcrumb-current">{blog.category}</span>
              </nav>
              <span className="blog-hero-cat">
                <i className="fa-solid fa-folder-open"></i> {blog.category}
              </span>
              <h1>{blog.title}</h1>
              <p className="blog-hero-excerpt">{blog.excerpt}</p>
              <div className="blog-hero-meta">
                <div className="blog-meta-item">
                  <i className="fa-solid fa-user-pen" aria-hidden="true"></i>
                  <span>Ankit Bairagi</span>
                </div>
                <div className="blog-meta-item">
                  <i className="fa-solid fa-book-open" aria-hidden="true"></i>
                  <span>Insightful Read</span>
                </div>
              </div>
              <div className="blog-hero-tags">
                {blog.tags.map(tag => (
                  <span key={tag} className="blog-hero-tag">#{tag}</span>
                ))}
              </div>
            </div>
          </div>
        </section>

        <div className="container">
          <div className="blog-detail-layout">

            {/* Main Content */}
            <div>
              <article className="blog-rich-content" dangerouslySetInnerHTML={renderMarkdownContent(blog.content)} />
              <div style={{ marginTop: '40px', padding: '20px', backgroundColor: 'rgba(255,255,255,0.05)', borderRadius: '12px' }}>
                <h3 style={{ marginBottom: '10px', fontSize: '20px' }}>Enjoyed this article? Share it with your network.</h3>
                <SocialShare title={blog.title} />
              </div>
            </div>

            {/* Sidebar */}
            <aside className="blog-detail-sidebar">
              
              {/* Table of Contents */}
              {headings.length > 0 && (
                <div className="toc-card">
                  <h3 className="toc-title"><i className="fa-solid fa-list" aria-hidden="true"></i> Table of Contents</h3>
                  <ul className="toc-list">
                    {headings.map((h, i) => (
                      <li key={i}><a href={`#${h.id}`}>{h.text}</a></li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Author Card */}
              <div className="author-card">
                <div className="author-img">
                  <img
                    src="https://github.com/ankitbairagi800-jpg.png"
                    alt="Ankit Bairagi — Founder, Digitalads"
                    width="80"
                    height="80"
                    loading="lazy"
                  />
                </div>
                <h3>Ankit Bairagi</h3>
                <span className="author-title">Founder, Digitalads</span>
                <p>Performance marketer specializing in GMB optimization, Meta/Google Ads, and WhatsApp automation for local Indore businesses.</p>
                <div className="author-socials">
                  <a href="https://www.linkedin.com/in/ankitbairagi" target="_blank" rel="noopener noreferrer" className="author-social-link" aria-label="LinkedIn">
                    <i className="fa-brands fa-linkedin-in"></i>
                  </a>
                  <a href="https://wa.me/918103202086" target="_blank" rel="noopener noreferrer" className="author-social-link" aria-label="WhatsApp">
                    <i className="fa-brands fa-whatsapp"></i>
                  </a>
                </div>
              </div>

              {/* Service CTA */}
              <div className="sidebar-cta">
                <h3>🚀 Grow Your Business</h3>
                <p>Get a free digital marketing audit for your clinic or coaching center in Indore.</p>
                <Link href="/contact" className="btn btn-primary" style={{ width: "100%", padding: "12px 0", textAlign: "center" }}>
                  Get Free Audit
                </Link>
              </div>

              {/* Quick Links */}
              <div className="sidebar-widget">
                <h3 className="sidebar-widget-title">Explore Services</h3>
                <ul className="sidebar-services-list">
                  <li><Link href="/services#meta-ads"><i className="fa-brands fa-meta"></i> Meta Ads</Link></li>
                  <li><Link href="/services#google-ads"><i className="fa-brands fa-google"></i> Google Ads</Link></li>
                  <li><Link href="/services#gmb-seo"><i className="fas fa-map-marked-alt"></i> Local SEO</Link></li>
                  <li><Link href="/services#automation"><i className="fa-brands fa-whatsapp"></i> WhatsApp Automation</Link></li>
                  <li><Link href="/services#landing-pages"><i className="fas fa-laptop-code"></i> Landing Pages</Link></li>
                </ul>
              </div>
            </aside>
          </div>

          {/* Related Posts */}
          {relatedPosts.length > 0 && (
            <section className="related-posts-section" aria-label="Related articles">
              <h2 className="related-posts-title">
                <i className="fa-solid fa-newspaper" aria-hidden="true"></i> More Articles You'll Love
              </h2>
              <div className="related-posts-grid">
                {relatedPosts.map(post => (
                  <Link href={`/blog/${post.slug}`} key={post.id} className="related-post-card">
                    <div className="related-post-img">
                      {post.image ? (
                        <Image src={post.image} alt={post.imageAlt || post.title} width={400} height={220} className="related-post-image" loading="lazy" />
                      ) : (
                        <div className="related-post-placeholder">
                          <i className={post.icon}></i>
                        </div>
                      )}
                    </div>
                    <div className="related-post-body">
                      <span className="related-post-cat">{post.category}</span>
                      <h3>{post.title}</h3>
                      <div className="related-post-meta">
                        <span>Strategic Guide</span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          )}

          {/* Bottom CTA */}
          <section className="blog-bottom-cta">
            <h2>Ready to Grow Your Business in Indore?</h2>
            <p>Join 500+ clinics and coaching centers getting predictable leads every month.</p>
            <div className="blog-cta-buttons">
              <Link href="/contact" className="btn btn-primary btn-large">
                <i className="fas fa-calendar-check" aria-hidden="true"></i> Book Free Consultation
              </Link>
              <a href="https://wa.me/918103202086?text=Hi%20Digitalads,%20I%20read%20your%20blog%20and%20want%20to%20know%20more" target="_blank" rel="noopener noreferrer" className="btn btn-outline btn-large">
                <i className="fa-brands fa-whatsapp" aria-hidden="true"></i> WhatsApp Us
              </a>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
