"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { getNews, NewsPost } from "@/lib/newsDb";
import SocialShare from "@/components/SocialShare";
import "./news-detail.css";

// Enhanced Markdown to HTML renderer with custom Table, Lists and Link parsing
const renderMarkdownContent = (markdownText: string) => {
  if (!markdownText) return { __html: "" };
  
  let html = markdownText;

  // 1. Process Bold text (**text**)
  html = html.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');

  // 2. Links: [text](url)
  html = html.replace(/\[([^\]]+)\]\(([^)]+)\)/g, (_, text, url) => {
    const isInternal = url.startsWith("/");
    if (isInternal) {
      return `<a href="${url}" class="internal-link">${text}</a>`;
    }
    return `<a href="${url}" target="_blank" rel="noopener noreferrer">${text}</a>`;
  });

  // 3. Headers
  html = html.replace(/^### (.*$)/gim, '<h3>$1</h3>');
  html = html.replace(/^## (.*$)/gim, '<h2>$1</h2>');
  html = html.replace(/^# (.*$)/gim, '<h2 class="news-main-heading">$1</h2>');

  // 4. Blockquotes
  html = html.replace(/^&gt; (.*$)/gim, '<blockquote><p>$1</p></blockquote>');

  // 5. Horizontal rules
  html = html.replace(/^\-\-\-$/gim, '<hr />');

  // 6. Lists
  html = html.replace(/^\- (.*$)/gim, '<li>$1</li>');

  // 7. Markdown Tables Parsing
  const linesArray = html.split("\n");
  let insideTable = false;
  let tableRows: string[] = [];
  const processedLines: string[] = [];

  for (let i = 0; i < linesArray.length; i++) {
    const line = linesArray[i].trim();
    if (line.startsWith("|") && line.endsWith("|")) {
      if (!insideTable) {
        insideTable = true;
        tableRows = [];
      }
      
      // Skip separator rows e.g. | :--- | :--- |
      if (line.includes("---") || line.includes(":-")) {
        continue;
      }
      
      const cells = line
        .split("|")
        .slice(1, -1)
        .map((cell) => cell.trim());
      
      const isHeader = tableRows.length === 0;
      const cellTag = isHeader ? "th" : "td";
      const rowContent = cells
        .map((cell) => `<${cellTag}>${cell}</${cellTag}>`)
        .join("");
      
      tableRows.push(`<tr>${rowContent}</tr>`);
    } else {
      if (insideTable) {
        insideTable = false;
        processedLines.push(`<div class="table-responsive"><table class="news-table">${tableRows.join("")}</table></div>`);
      }
      processedLines.push(linesArray[i]);
    }
  }
  
  if (insideTable) {
    processedLines.push(`<div class="table-responsive"><table class="news-table">${tableRows.join("")}</table></div>`);
  }
  
  html = processedLines.join("\n");

  // 8. Paragraph Wrapper
  const paragraphs = html.split(/\n\n+/);
  html = paragraphs.map(p => {
    const trimmed = p.trim();
    if (!trimmed) return '';
    if (
      trimmed.startsWith('<h') || 
      trimmed.startsWith('<blockquote') || 
      trimmed.startsWith('<hr') || 
      trimmed.startsWith('<li>') || 
      trimmed.startsWith('<div') ||
      trimmed.startsWith('<table') ||
      trimmed.startsWith('<tr') ||
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
    const id = text.toLowerCase().replace(/[^a-z0-9\u0900-\u097F]+/g, '-').replace(/(^-|-$)/g, '');
    headings.push({ text, id });
  }
  return headings;
};

interface NewsDetailClientProps {
  slug: string;
  initialPost: NewsPost | null;
  initialAllNews: NewsPost[];
}

export default function NewsDetailClient({ slug, initialPost, initialAllNews }: NewsDetailClientProps) {
  const [post, setPost] = useState<NewsPost | null>(initialPost);
  const [allNews, setAllNews] = useState<NewsPost[]>(initialAllNews);
  const [loading, setLoading] = useState(!initialPost);
  const [lang, setLang] = useState<"en" | "hi">("en");
  const [readProgress, setReadProgress] = useState(0);

  // Initialize lang on mount & load data if not pre-provided
  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedLang = localStorage.getItem("news-lang") as "en" | "hi";
      if (savedLang) {
        setLang(savedLang);
      } else {
        const browserLang = navigator.language || "";
        if (browserLang.toLowerCase().startsWith("hi")) {
          setLang("hi");
        }
      }
    }

    async function loadData() {
      try {
        const list = await getNews();
        setAllNews(list);
        const found = list.find((n) => n.slug === slug);
        setPost(found || null);
      } catch (err) {
        console.error("Failed to load news details", err);
      } finally {
        setLoading(false);
      }
    }

    if (!post) {
      loadData();
    } else {
      setLoading(false);
    }
  }, [slug, post]);

  // Sync document title with language toggle
  useEffect(() => {
    if (post) {
      document.title = lang === "en" 
        ? `${post.titleEn} | Digitalads AI News` 
        : `${post.titleHi} | Digitalads AI न्यूज़`;
    }
  }, [lang, post]);

  // Scroll reader progress bar indicator
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
      <main className="news-detail-wrapper">
        <div className="container" style={{ textAlign: "center", padding: "120px 0" }}>
          <div className="news-loading-spinner"></div>
          <p style={{ color: "rgba(255,255,255,0.4)" }}>Loading news article...</p>
        </div>
      </main>
    );
  }

  if (!post) {
    return (
      <main className="news-detail-wrapper">
        <div className="container" style={{ textAlign: "center", padding: "120px 0" }}>
          <h2 style={{ fontSize: "28px", fontWeight: "800", marginBottom: "16px", color: "#fff" }}>Article Not Found</h2>
          <p style={{ color: "rgba(255,255,255,0.4)", marginBottom: "24px" }}>
            The news roundup you are looking for might have been moved or deleted.
          </p>
          <Link href="/news" className="btn btn-primary">Back to News Portal</Link>
        </div>
      </main>
    );
  }

  const activeTitle = lang === "en" ? post.titleEn : post.titleHi;
  const activeExcerpt = lang === "en" ? post.excerptEn : post.excerptHi;
  const activeContent = lang === "en" ? post.contentEn : post.contentHi;
  const activeTags = lang === "en" ? post.tagsEn : post.tagsHi;

  const headings = extractHeadings(activeContent);
  const relatedNews = allNews.filter((n) => n.id !== post.id).slice(0, 3);

  const handleLangChange = (selectedLang: "en" | "hi") => {
    setLang(selectedLang);
    if (typeof window !== "undefined") {
      localStorage.setItem("news-lang", selectedLang);
    }
  };

  return (
    <>
      {/* Scroll indicator progress bar */}
      <div className="news-reading-progress" style={{ width: `${readProgress}%` }} />

      <main className="news-detail-wrapper">
        {/* News Hero Banner section */}
        <section className="news-detail-hero">
          <div className="news-detail-hero-bg">
            {post.image ? (
              <img
                src={post.image}
                alt={lang === "en" ? post.imageAlt : post.titleHi}
                className="news-detail-banner-img"
              />
            ) : (
              <div className="news-detail-placeholder-banner">
                <i className={post.icon}></i>
              </div>
            )}
            <div className="news-detail-banner-overlay" />
          </div>
          <div className="container">
            <div className="news-detail-hero-body">
              <nav aria-label="Breadcrumb" className="breadcrumb">
                <Link href="/">Home</Link>
                <span className="breadcrumb-sep">›</span>
                <Link href="/news">News</Link>
                <span className="breadcrumb-sep">›</span>
                <span className="breadcrumb-current">{post.category}</span>
              </nav>

              <div className="news-detail-hero-top-row">
                <span className="news-detail-category-badge">
                  <i className="fa-solid fa-calendar-week"></i> {post.category}
                </span>

                {/* Inline Language Selector */}
                <div className="lang-switcher-wrap" style={{ background: "rgba(0,0,0,0.4)" }}>
                  <button
                    className={`lang-btn ${lang === "en" ? "active" : ""}`}
                    onClick={() => handleLangChange("en")}
                    style={{ fontSize: "11px", padding: "4px 12px" }}
                  >
                    English
                  </button>
                  <button
                    className={`lang-btn ${lang === "hi" ? "active" : ""}`}
                    onClick={() => handleLangChange("hi")}
                    style={{ fontSize: "11px", padding: "4px 12px" }}
                  >
                    हिंदी
                  </button>
                </div>
              </div>

              <h1>{activeTitle}</h1>
              <p className="news-detail-excerpt">{activeExcerpt}</p>
              
              <div className="news-detail-meta-row">
                <div className="news-detail-meta-item">
                  <i className="fa-solid fa-clock"></i>
                  <span>Published: {post.date}</span>
                </div>
                <div className="news-detail-meta-item">
                  <i className="fa-solid fa-circle-check"></i>
                  <span>Verified News Roundup</span>
                </div>
              </div>

              <div className="news-detail-tags">
                {activeTags.map((tag) => (
                  <span key={tag} className="news-detail-tag">#{tag}</span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Content Layout */}
        <div className="container">
          <div className="news-detail-grid">
            {/* Rich Text content */}
            <div className="news-content-area">
              <article 
                className="news-rich-article" 
                dangerouslySetInnerHTML={renderMarkdownContent(activeContent)} 
              />
              
              {/* Share links */}
              <div className="news-share-block">
                <h3>
                  {lang === "en" 
                    ? "Share this weekly news update with your network:" 
                    : "इस साप्ताहिक समाचार अपडेट को अपने नेटवर्क पर साझा करें:"}
                </h3>
                <SocialShare title={activeTitle} />
              </div>
            </div>

            {/* Side column */}
            <aside className="news-detail-sidebar-col">
              {/* Outline / ToC */}
              {headings.length > 0 && (
                <div className="news-toc-widget">
                  <h3>
                    <i className="fa-solid fa-list-ul"></i>{" "}
                    {lang === "en" ? "On This Page" : "इस पृष्ठ पर"}
                  </h3>
                  <ul>
                    {headings.map((h, i) => (
                      <li key={i}>
                        <a href={`#${h.id}`}>{h.text}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Author widget */}
              <div className="news-author-widget">
                <div className="news-author-avatar">
                  <img
                    src="https://github.com/ankitbairagi800-jpg.png"
                    alt="Ankit Bairagi"
                    width="70"
                    height="70"
                  />
                </div>
                <h4>Ankit Bairagi</h4>
                <span className="news-author-desc">Founder, Digitalads</span>
                <p>
                  {lang === "en"
                    ? "Evaluating search algorithms, performance marketing channels, and generative AI setups for local businesses."
                    : "स्थानीय व्यवसायों के लिए सर्च एल्गोरिदम, परफॉर्मेंस मार्केटिंग और जनरेटिव AI सेटअप का विश्लेषण करते हैं।"}
                </p>
                <div className="news-author-social">
                  <a href="https://www.linkedin.com/in/ankitbairagi" target="_blank" rel="noopener noreferrer">
                    <i className="fa-brands fa-linkedin"></i>
                  </a>
                  <a href="https://wa.me/918103202086" target="_blank" rel="noopener noreferrer">
                    <i className="fa-brands fa-whatsapp"></i>
                  </a>
                </div>
              </div>

              {/* Booking CTA */}
              <div className="news-cta-widget">
                <h4>
                  {lang === "en" ? "Dominate Local Search pack" : "लोकल सर्च पैक पर राज करें"}
                </h4>
                <p>
                  {lang === "en"
                    ? "We audit websites to rank organically in ChatGPT Search, Perplexity, and Google AI Overviews."
                    : "हम वेबसाइटों का ऑडिट करते हैं ताकि वे ChatGPT सर्च, पर्प्लेक्सिटी और गूगल AI ओवरव्यू में ऑर्गेनिक रूप से रैंक कर सकें।"}
                </p>
                <Link href="/contact" className="btn btn-primary" style={{ display: "block", textAlign: "center" }}>
                  {lang === "en" ? "Schedule Free Consultation" : "मुफ्त परामर्श निर्धारित करें"}
                </Link>
              </div>
            </aside>
          </div>

          {/* Related News Carousel */}
          {relatedNews.length > 0 && (
            <section className="related-news-section">
              <h2>
                <i className="fa-solid fa-rectangle-list"></i>{" "}
                {lang === "en" ? "More Industry Updates" : "अन्य महत्वपूर्ण समाचार"}
              </h2>
              <div className="related-news-grid">
                {relatedNews.map((p) => (
                  <Link href={`/news/${p.slug}`} key={p.id} className="related-news-item">
                    <div className="related-news-img-box">
                      {p.image ? (
                        <img src={p.image} alt={lang === "en" ? p.imageAlt : p.titleHi} />
                      ) : (
                        <div className="related-news-placeholder-icon">
                          <i className={p.icon}></i>
                        </div>
                      )}
                    </div>
                    <div className="related-news-body-box">
                      <span className="related-news-badge">{p.category}</span>
                      <h3>{lang === "en" ? p.titleEn : p.titleHi}</h3>
                      <span className="related-news-date-span">{p.date}</span>
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          )}
        </div>
      </main>
    </>
  );
}
