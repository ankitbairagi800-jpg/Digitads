"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { getBlogs, BlogPost } from "@/lib/db";
import "./blog.css";

const categories = ["All", "SEO", "Ads", "Automation", "Design"];

export default function BlogPage() {
  const [blogs, setBlogs] = useState<BlogPost[]>([]);
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    async function loadBlogs() {
      try {
        const list = await getBlogs();
        setBlogs(list);
      } catch (err) {
        console.error("Failed to load blog posts", err);
      }
    }
    loadBlogs();
  }, []);

  // Filter posts based on both category and search queries
  const filteredPosts = blogs.filter(post => {
    const matchesCategory = activeCategory === "All" || post.category === activeCategory;
    const matchesSearch = searchQuery === "" || 
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.tags.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));
    
    return matchesCategory && matchesSearch;
  });

  // Let the first blog in our database be the "Featured" trending post
  const featuredPost = blogs.length > 0 ? blogs[0] : null;
  // Other blog posts for the grid (exclude the featured post so it's not repeated)
  const gridPosts = blogs.length > 1 ? filteredPosts.filter(p => p.id !== featuredPost?.id) : filteredPosts;

  return (
    <main>
      {/* Blog Hero */}
      <section className="blog-hero">
        <div className="container blog-hero-inner">
          <div className="breadcrumb">
            <Link href="/">Home</Link>
            <span className="breadcrumb-sep">/</span>
            <span className="breadcrumb-current">Blog</span>
          </div>
          <h1>Insights &amp; <span className="highlight">Strategies</span></h1>
          <p>Expert tips, case studies, and actionable marketing strategies to help clinics and coaching centers dominate their local market.</p>
          
          <div className="blog-search-bar">
            <input 
              type="text" 
              placeholder="Search articles..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button type="button" aria-label="Search"><i className="fas fa-search"></i></button>
          </div>
        </div>
      </section>

      {/* Dynamic Featured Article */}
      {featuredPost && (
        <section className="blog-featured">
          <div className="container">
            <div className="featured-article">
              <div className="featured-img">
                <div className="featured-label">Featured</div>
                {featuredPost.image ? (
                  <img src={featuredPost.image} alt={featuredPost.imageAlt || featuredPost.title} className="featured-real-img" loading="eager" />
                ) : (
                  <i className={`${featuredPost.icon || "fa-solid fa-chart-line"} featured-img-icon`}></i>
                )}
                <div className="featured-img-overlay"></div>
              </div>
              <div className="featured-body">
                <span className="featured-cat">
                  <i className="fa-solid fa-fire"></i> Trending — {featuredPost.category}
                </span>
                <h2 className="featured-title">
                  <Link href={`/blog/${featuredPost.slug}`}>{featuredPost.title}</Link>
                </h2>
                <p className="featured-excerpt">{featuredPost.excerpt}</p>
                
                <div className="featured-meta">
                  <span>Insightful Read</span>
                </div>
                
                <Link href={`/blog/${featuredPost.slug}`} className="btn btn-primary" style={{ width: "fit-content" }}>
                  Read Full Article <i className="fas fa-arrow-right" style={{ marginLeft: "6px" }}></i>
                </Link>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Main Blog Section */}
      <section className="blog-section">
        <div className="container blog-layout">
          {/* Main Content Area */}
          <div className="blog-main">
            {/* Filters */}
            <div className="blog-filter">
              {categories.map(cat => (
                <button 
                  key={cat}
                  className={`filter-btn ${activeCategory === cat ? "active" : ""}`}
                  onClick={() => setActiveCategory(cat)}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Post Grid */}
            {gridPosts.length === 0 ? (
              <p style={{ color: "rgba(255,255,255,0.45)", textAlign: "center", padding: "40px 0" }}>
                No articles match your filters or search keywords.
              </p>
            ) : (
              <div className="blog-grid">
                {gridPosts.map(post => (
                  <article key={post.id} className="blog-card">
                    <div className="blog-card-img">
                      <span className="blog-cat-tag">{post.category}</span>
                      {post.image ? (
                        <img src={post.image} alt={post.imageAlt || post.title} className="blog-card-real-img" loading="lazy" />
                      ) : (
                        <i className={`${post.icon || "fa-solid fa-newspaper"} blog-card-img-icon`}></i>
                      )}
                    </div>
                    <div className="blog-card-body">
                      <div className="blog-card-meta">
                        <span className="blog-card-read">Strategic Guide</span>
                      </div>
                      <Link href={`/blog/${post.slug}`} className="blog-card-title">
                        {post.title}
                      </Link>
                      <p className="blog-card-excerpt">{post.excerpt}</p>
                      <Link href={`/blog/${post.slug}`} className="blog-card-link">
                        Read More <i className="fas fa-arrow-right" style={{ marginLeft: "4px" }}></i>
                      </Link>
                      <div className="blog-card-tags">
                        {post.tags.map(tag => (
                          <span key={tag} className="blog-tag">#{tag}</span>
                        ))}
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            )}
          </div>

          {/* Sidebar */}
          <aside className="blog-sidebar">
            <div className="sidebar-widget">
              <h3 className="sidebar-widget-title">Categories</h3>
              <ul className="sidebar-cats">
                {categories.filter(c => c !== "All").map(cat => (
                  <li key={cat}>
                    <a href="#" onClick={(e) => { e.preventDefault(); setActiveCategory(cat); }}>
                      {cat} <span className="cat-count">{blogs.filter(p => p.category === cat).length}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="sidebar-widget">
              <h3 className="sidebar-widget-title">Recent Posts</h3>
              <ul className="sidebar-recent">
                {blogs.slice(0, 4).map(post => (
                  <li key={`recent-${post.id}`}>
                    <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="sidebar-widget">
              <h3 className="sidebar-widget-title">Popular Tags</h3>
              <div className="sidebar-tags">
                <span className="sidebar-tag-item" onClick={() => setSearchQuery("AI")} style={{ cursor: "pointer" }}>#AI</span>
                <span className="sidebar-tag-item" onClick={() => setSearchQuery("SEO")} style={{ cursor: "pointer" }}>#SEO</span>
                <span className="sidebar-tag-item" onClick={() => setSearchQuery("GoogleAds")} style={{ cursor: "pointer" }}>#GoogleAds</span>
                <span className="sidebar-tag-item" onClick={() => setSearchQuery("MetaAds")} style={{ cursor: "pointer" }}>#MetaAds</span>
                <span className="sidebar-tag-item" onClick={() => setSearchQuery("Automation")} style={{ cursor: "pointer" }}>#Automation</span>
              </div>
            </div>

            <div className="sidebar-cta">
              <h3>Need Marketing Help?</h3>
              <p>Get a free audit of your current digital marketing strategy.</p>
              <Link href="/contact" className="btn btn-primary" style={{ width: "100%", padding: "12px 0", textAlign: "center" }}>
                Book Free Audit
              </Link>
            </div>
          </aside>
        </div>
      </section>

      {/* CTA Section */}
      <section className="blog-cta">
        <div className="container">
          <h2>Ready to Grow Your Business?</h2>
          <p>Join 500+ clinics and coaching centers getting predictable leads.</p>
          <Link href="/contact" className="btn btn-primary">
            Start Your Journey <i className="fas fa-arrow-right" style={{ marginLeft: "6px" }}></i>
          </Link>
        </div>
      </section>
    </main>
  );
}
