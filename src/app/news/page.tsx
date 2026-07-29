"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { getNews, NewsPost } from "@/lib/newsDb";
import "./news.css";

export default function NewsPortalPage() {
  const [news, setNews] = useState<NewsPost[]>([]);
  const [lang, setLang] = useState<"en" | "hi">("en");
  const [searchQuery, setSearchQuery] = useState("");

  // Load news and auto-detect language preference on mount
  useEffect(() => {
    async function fetchNewsData() {
      try {
        const data = await getNews();
        // Sort by date descending
        const sorted = [...data].sort(
          (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
        );
        setNews(sorted);
      } catch (err) {
        console.error("Failed to load news posts", err);
      }
    }
    fetchNewsData();

    // Language preference logic
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
  }, []);

  const handleLangChange = (selectedLang: "en" | "hi") => {
    setLang(selectedLang);
    if (typeof window !== "undefined") {
      localStorage.setItem("news-lang", selectedLang);
    }
  };

  // Search logic (Searches through BOTH English and Hindi content for SEO/AEO search optimization)
  const filteredNews = news.filter((post) => {
    const query = searchQuery.trim().toLowerCase();
    if (!query) return true;

    const matchesEn =
      post.titleEn.toLowerCase().includes(query) ||
      post.excerptEn.toLowerCase().includes(query) ||
      post.tagsEn.some((t) => t.toLowerCase().includes(query));

    const matchesHi =
      post.titleHi.toLowerCase().includes(query) ||
      post.excerptHi.toLowerCase().includes(query) ||
      post.tagsHi.some((t) => t.toLowerCase().includes(query));

    return matchesEn || matchesHi;
  });

  return (
    <main>
      {/* News Portal Hero */}
      <section className="news-hero">
        <div className="container news-hero-inner">
          <div className="breadcrumb" style={{ marginBottom: "12px" }}>
            <Link href="/">Home</Link>
            <span className="breadcrumb-sep">/</span>
            <span className="breadcrumb-current">News</span>
          </div>
          
          <h1>
            {lang === "en" ? (
              <>Marketing &amp; AI <span className="highlight">News Hub</span></>
            ) : (
              <>मार्केटिंग और AI <span className="highlight">समाचार केंद्र</span></>
            )}
          </h1>
          <p>
            {lang === "en" 
              ? "Stay ahead of the curve with weekly roundups of real industry news, Google search core updates, and generative AI marketing trends."
              : "गूगल सर्च अपडेट्स, विज्ञापन तकनीक, और जेनरेटिव AI मार्केटिंग से जुड़े साप्ताहिक समाचार और सटीक विश्लेषण के साथ सबसे आगे रहें।"
            }
          </p>

          <div className="news-header-meta">
            {/* Bilingual Search Box */}
            <div className="blog-search-bar" style={{ margin: 0 }}>
              <input
                type="text"
                placeholder={lang === "en" ? "Search news (English / हिंदी)..." : "समाचार खोजें (English / हिंदी)..."}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button type="button" aria-label="Search">
                <i className="fas fa-search"></i>
              </button>
            </div>

            {/* Language Switcher Button */}
            <div className="lang-switcher-wrap">
              <span className="lang-switcher-label">Language:</span>
              <button
                className={`lang-btn ${lang === "en" ? "active" : ""}`}
                onClick={() => handleLangChange("en")}
              >
                <i className="fa-solid fa-earth-americas"></i> English
              </button>
              <button
                className={`lang-btn ${lang === "hi" ? "active" : ""}`}
                onClick={() => handleLangChange("hi")}
              >
                <i className="fa-solid fa-language"></i> हिंदी
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Main News Section */}
      <section className="news-section">
        <div className="container news-layout">
          {/* News Cards List */}
          <div className="news-main">
            {filteredNews.length === 0 ? (
              <div style={{ textAlign: "center", padding: "60px 0" }}>
                <p style={{ color: "#64748b", fontSize: "16px", fontWeight: "600" }}>
                  {lang === "en"
                    ? "No news articles match your search query."
                    : "आपके खोजे गए शब्द से कोई समाचार नहीं मिला।"}
                </p>
              </div>
            ) : (
              <div className="news-list">
                {filteredNews.map((post) => (
                  <article key={post.id} className="news-card">
                    <div className="news-card-img-wrap">
                      {post.image ? (
                        <img
                          src={post.image}
                          alt={lang === "en" ? post.imageAlt : post.titleHi}
                          className="news-card-real-img"
                          loading="lazy"
                        />
                      ) : (
                        <i className={`${post.icon || "fa-solid fa-bullhorn"} news-card-icon`}></i>
                      )}
                    </div>
                    <div className="news-card-body">
                      <div className="news-card-top">
                        <div className="news-meta-row">
                          <span className="news-date">{post.date}</span>
                          <span className="news-badge">{post.category}</span>
                        </div>
                        <h2 className="news-card-title">
                          <Link href={`/news/${post.slug}`}>
                            {lang === "en" ? post.titleEn : post.titleHi}
                          </Link>
                        </h2>
                        <p className="news-card-excerpt">
                          {lang === "en" ? post.excerptEn : post.excerptHi}
                        </p>
                      </div>
                      <div className="news-card-footer">
                        <Link href={`/news/${post.slug}`} className="news-read-more">
                          {lang === "en" ? (
                            <>Read Full Article <i className="fas fa-arrow-right"></i></>
                          ) : (
                            <>पूरा समाचार पढ़ें <i className="fas fa-arrow-right"></i></>
                          )}
                        </Link>
                        <div className="news-tags">
                          {(lang === "en" ? post.tagsEn : post.tagsHi).slice(0, 3).map((tag) => (
                            <span key={tag} className="news-tag">#{tag}</span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            )}
          </div>

          {/* Sidebar */}
          <aside className="news-sidebar">
            {/* Weekly News Roundup info */}
            <div className="news-widget">
              <h3 className="news-widget-title">
                {lang === "en" ? "Weekly Roundups" : "साप्ताहिक समीक्षा"}
              </h3>
              <p style={{ fontSize: "14px", color: "#475569", lineHeight: "1.6", marginBottom: "15px" }}>
                {lang === "en"
                  ? "Every week, we compile the most critical, verified updates from search algorithms, generative AI portals, and media networks."
                  : "हर सप्ताह, हम सर्च एल्गोरिदम, जेनेरेटिव एआई और सोशल मीडिया नेटवर्क्स की सबसे महत्वपूर्ण और जांची हुई खबरों को संकलित करते हैं।"}
              </p>
              <div style={{ padding: "12px", background: "#f8fafc", borderRadius: "8px", border: "1px dashed #cbd5e1" }}>
                <span style={{ fontSize: "11px", fontWeight: "800", color: "#2563eb", textTransform: "uppercase", display: "block", marginBottom: "4px" }}>
                  {lang === "en" ? "AI & Marketing Focus" : "AI और मार्केटिंग फोकस"}
                </span>
                <span style={{ fontSize: "13px", color: "#1e293b", fontWeight: "600" }}>
                  {lang === "en" ? "100% Real, Verified News" : "100% असली, जांची हुई खबरें"}
                </span>
              </div>
            </div>

            {/* Recent News Widget */}
            <div className="news-widget">
              <h3 className="news-widget-title">
                {lang === "en" ? "Recent News" : "ताज़ा समाचार"}
              </h3>
              <ul className="news-widget-list" style={{ listStyle: "none", padding: 0, margin: 0 }}>
                {news.slice(0, 4).map((post) => (
                  <li key={`sidebar-${post.id}`}>
                    <Link href={`/news/${post.slug}`} className="news-widget-link">
                      {lang === "en" ? post.titleEn : post.titleHi}
                    </Link>
                    <span className="news-widget-date">{post.date}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick Audit CTA */}
            <div className="sidebar-cta" style={{ background: "linear-gradient(135deg, #0f172a, #1e293b)", border: "1.5px solid #2563eb" }}>
              <h3 style={{ fontSize: "18px", fontWeight: "800" }}>
                {lang === "en" ? "SEO & GEO Audit" : "SEO और GEO ऑडिट"}
              </h3>
              <p style={{ fontSize: "13.5px", color: "rgba(255, 255, 255, 0.7)", marginBottom: "20px" }}>
                {lang === "en"
                  ? "Is your website ready to be cited by ChatGPT Search and Google AI Overviews? Get a free optimization check."
                  : "क्या आपकी वेबसाइट ChatGPT सर्च और गूगल AI ओवरव्यू द्वारा उद्धृत (cite) होने के लिए तैयार है? मुफ्त चेक करवाएं।"}
              </p>
              <Link href="/contact" className="btn btn-primary" style={{ width: "100%", textAlign: "center", background: "#2563eb", display: "block" }}>
                {lang === "en" ? "Book Free Audit" : "मुफ्त ऑडिट बुक करें"}
              </Link>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
