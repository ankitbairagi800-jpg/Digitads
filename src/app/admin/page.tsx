"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { 
  getBlogs, 
  saveBlog, 
  deleteBlog, 
  getServices, 
  saveService, 
  deleteService, 
  BlogPost, 
  ServiceItem 
} from "@/lib/db";
import "./admin.css";

export default function AdminDashboard() {
  // Auth State
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [authError, setAuthError] = useState(false);

  // Tab State
  const [activeTab, setActiveTab] = useState<"overview" | "blogs" | "services">("overview");

  // Data Lists
  const [blogsList, setBlogsList] = useState<BlogPost[]>([]);
  const [servicesList, setServicesList] = useState<ServiceItem[]>([]);

  // Modals & Editors
  const [isBlogModalOpen, setIsBlogModalOpen] = useState(false);
  const [isServiceModalOpen, setIsServiceModalOpen] = useState(false);
  
  const [editingBlog, setEditingBlog] = useState<BlogPost | null>(null);
  const [editingService, setEditingService] = useState<ServiceItem | null>(null);

  // Form States (Blog)
  const [blogTitle, setBlogTitle] = useState("");
  const [blogSlug, setBlogSlug] = useState("");
  const [blogCategory, setBlogCategory] = useState("Automation");
  const [blogExcerpt, setBlogExcerpt] = useState("");
  const [blogContent, setBlogContent] = useState("");
  const [blogReadTime, setBlogReadTime] = useState("5 min read");
  const [blogIcon, setBlogIcon] = useState("fa-solid fa-chart-line");
  const [blogTags, setBlogTags] = useState("");
  const [blogDate, setBlogDate] = useState("");

  // Form States (Service)
  const [serviceId, setServiceId] = useState("");
  const [serviceTitle, setServiceTitle] = useState("");
  const [servicePrice, setServicePrice] = useState("");
  const [serviceDescription, setServiceDescription] = useState("");
  const [serviceFeatures, setServiceFeatures] = useState<string[]>([""]);
  const [serviceIcon, setServiceIcon] = useState("fas fa-tag");
  const [serviceVisualTitle, setServiceVisualTitle] = useState("");
  const [serviceVisualDescription, setServiceVisualDescription] = useState("");

  // Alert/Notification State
  const [notification, setNotification] = useState<string | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Load auth session state
  useEffect(() => {
    const savedAuth = sessionStorage.getItem("admin_authenticated");
    if (savedAuth === "true") {
      setIsAuthenticated(true);
    }
  }, []);

  // Fetch data on authentication
  useEffect(() => {
    if (isAuthenticated) {
      loadAllData();
    }
  }, [isAuthenticated]);

  const loadAllData = async () => {
    try {
      const blogs = await getBlogs();
      const svcs = await getServices();
      setBlogsList(blogs);
      setServicesList(svcs);
    } catch (err) {
      console.error("Failed to load dashboard data", err);
    }
  };

  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Custom Admin Credentials: Username: Digitalads, Password: Ankit@2002
    if (username === "Digitalads" && password === "Ankit@2002") {
      setIsAuthenticated(true);
      setAuthError(false);
      sessionStorage.setItem("admin_authenticated", "true");
    } else {
      setAuthError(true);
    }
  };

  const handleSignOut = () => {
    setIsAuthenticated(false);
    sessionStorage.removeItem("admin_authenticated");
    setUsername("");
    setPassword("");
  };

  // Blog modal helpers
  const openNewBlogModal = () => {
    setEditingBlog(null);
    setBlogTitle("");
    setBlogSlug("");
    setBlogCategory("Automation");
    setBlogExcerpt("");
    setBlogContent("");
    setBlogReadTime("5 min read");
    setBlogIcon("fa-solid fa-chart-line");
    setBlogTags("AI, Automation");
    
    // Set current date in simple format: e.g. "May 18, 2026"
    const options: Intl.DateTimeFormatOptions = { month: 'short', day: '2-digit', year: 'numeric' };
    setBlogDate(new Date().toLocaleDateString('en-US', options));
    
    setIsBlogModalOpen(true);
  };

  const openEditBlogModal = (blog: BlogPost) => {
    setEditingBlog(blog);
    setBlogTitle(blog.title);
    setBlogSlug(blog.slug);
    setBlogCategory(blog.category);
    setBlogExcerpt(blog.excerpt);
    setBlogContent(blog.content);
    setBlogReadTime(blog.readTime);
    setBlogIcon(blog.icon);
    setBlogTags(blog.tags.join(", "));
    setBlogDate(blog.date);
    setIsBlogModalOpen(true);
  };

  const handleBlogTitleChange = (val: string) => {
    setBlogTitle(val);
    // Auto generate slug
    if (!editingBlog) {
      setBlogSlug(val.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, ""));
    }
  };

  const handleBlogSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!blogTitle || !blogSlug) return;

    const tagsArr = blogTags.split(",").map(t => t.trim()).filter(Boolean);
    const id = editingBlog ? editingBlog.id : blogSlug;

    const payload: BlogPost = {
      id,
      title: blogTitle,
      slug: blogSlug,
      category: blogCategory,
      excerpt: blogExcerpt,
      content: blogContent,
      readTime: blogReadTime,
      icon: blogIcon,
      tags: tagsArr,
      date: blogDate || "May 18, 2026"
    };

    await saveBlog(payload);
    setIsBlogModalOpen(false);
    showNotification(editingBlog ? "Blog updated successfully!" : "New blog posted successfully!");
    loadAllData();
  };

  const handleBlogDelete = async (id: string) => {
    if (confirm("Are you sure you want to delete this blog post?")) {
      await deleteBlog(id);
      showNotification("Blog post deleted.");
      loadAllData();
    }
  };

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setIsUploading(true);
    const formData = new FormData();
    formData.append("file", file);

    try {
      const res = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });

      if (res.ok) {
        const data = await res.json();
        const imageUrl = data.url;
        
        // Inject image HTML tag into the blog content
        const imageTag = `\n<img src="${imageUrl}" alt="Uploaded image" className="blog-custom-image" />\n`;
        setBlogContent((prev) => prev + imageTag);
        showNotification("Image uploaded and inserted successfully!");
      } else {
        const err = await res.json();
        alert("Upload failed: " + err.error);
      }
    } catch (error) {
      console.error(error);
      alert("An error occurred during upload.");
    } finally {
      setIsUploading(false);
      // Reset input
      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }
    }
  };

  // Service modal helpers
  const openNewServiceModal = () => {
    setEditingService(null);
    setServiceId("");
    setServiceTitle("");
    setServicePrice("₹10,000/month");
    setServiceDescription("");
    setServiceFeatures([""]);
    setServiceIcon("fas fa-tag");
    setServiceVisualTitle("");
    setServiceVisualDescription("");
    setIsServiceModalOpen(true);
  };

  const openEditServiceModal = (service: ServiceItem) => {
    setEditingService(service);
    setServiceId(service.id);
    setServiceTitle(service.title);
    setServicePrice(service.price);
    setServiceDescription(service.description);
    setServiceFeatures(service.features.length > 0 ? service.features : [""]);
    setServiceIcon(service.icon);
    setServiceVisualTitle(service.visualTitle);
    setServiceVisualDescription(service.visualDescription);
    setIsServiceModalOpen(true);
  };

  const handleServiceTitleChange = (val: string) => {
    setServiceTitle(val);
    if (!editingService) {
      setServiceId(val.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, ""));
    }
  };

  // Features List inputs
  const handleFeatureChange = (index: number, value: string) => {
    const updated = [...serviceFeatures];
    updated[index] = value;
    setServiceFeatures(updated);
  };

  const addFeatureInput = () => {
    setServiceFeatures([...serviceFeatures, ""]);
  };

  const removeFeatureInput = (index: number) => {
    const updated = serviceFeatures.filter((_, i) => i !== index);
    setServiceFeatures(updated.length > 0 ? updated : [""]);
  };

  const handleServiceSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!serviceTitle || !serviceId) return;

    const filteredFeatures = serviceFeatures.map(f => f.trim()).filter(Boolean);
    const order = editingService ? editingService.order : servicesList.length + 1;

    const payload: ServiceItem = {
      id: serviceId,
      title: serviceTitle,
      price: servicePrice,
      description: serviceDescription,
      features: filteredFeatures,
      icon: serviceIcon,
      visualTitle: serviceVisualTitle || serviceTitle + " Indore",
      visualDescription: serviceVisualDescription || serviceDescription.substring(0, 100),
      order
    };

    await saveService(payload);
    setIsServiceModalOpen(false);
    showNotification(editingService ? "Service updated successfully!" : "New service created successfully!");
    loadAllData();
  };

  const handleServiceDelete = async (id: string) => {
    if (confirm("Are you sure you want to delete this service?")) {
      await deleteService(id);
      showNotification("Service deleted successfully.");
      loadAllData();
    }
  };

  const showNotification = (msg: string) => {
    setNotification(msg);
    setTimeout(() => {
      setNotification(null);
    }, 4000);
  };

  // Determine database indicator
  const isCloudDB = process.env.NEXT_PUBLIC_USE_FIREBASE === "true";

  // Auth Guard Screen
  if (!isAuthenticated) {
    return (
      <main className="admin-wrapper">
        <div className="container">
          <div className="admin-auth-container">
            <div className="admin-auth-icon">
              <i className="fa-solid fa-lock"></i>
            </div>
            <h2>Admin Control Panel</h2>
            <p>Enter administrative credentials to manage Digitalads blogs and services.</p>
            <form onSubmit={handleLoginSubmit}>
              <div className="auth-form-group">
                <label htmlFor="adminUsername">Username</label>
                <div className="auth-input-wrapper">
                  <i className="fa-solid fa-user"></i>
                  <input 
                    type="text" 
                    id="adminUsername" 
                    value={username} 
                    onChange={(e) => setUsername(e.target.value)} 
                    placeholder="Enter username" 
                    required 
                    autoFocus
                  />
                </div>
              </div>
              
              <div className="auth-form-group">
                <label htmlFor="adminPassword">Password</label>
                <div className="auth-input-wrapper">
                  <i className="fa-solid fa-key"></i>
                  <input 
                    type="password" 
                    id="adminPassword" 
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)} 
                    placeholder="Enter password" 
                    required 
                  />
                </div>
              </div>
              
              <button type="submit" className="btn btn-primary btn-block">
                Authorize Access <i className="fa-solid fa-arrow-right-to-bracket" style={{ marginLeft: "6px" }}></i>
              </button>

              {authError && (
                <div className="admin-auth-error" role="alert">
                  <i className="fa-solid fa-triangle-exclamation"></i> Invalid username or password. Please try again.
                </div>
              )}
            </form>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="admin-wrapper">
      <div className="container">
        
        {notification && (
          <div className="notification-banner" role="alert">
            <i className="fa-solid fa-circle-check"></i> {notification}
          </div>
        )}

        <div className="dashboard-container">
          
          {/* Dashboard Header Area */}
          <div className="dashboard-header">
            <div className="dashboard-title-area">
              <h2>Digitalads Portal <span>Active</span></h2>
              <p>Manage and customize your front-facing service items and post new blogs instantly.</p>
            </div>
            
            <div className="dashboard-tabs">
              <button 
                className={`tab-btn ${activeTab === "overview" ? "active" : ""}`}
                onClick={() => setActiveTab("overview")}
              >
                <i className="fa-solid fa-gauge"></i> Overview
              </button>
              <button 
                className={`tab-btn ${activeTab === "blogs" ? "active" : ""}`}
                onClick={() => setActiveTab("blogs")}
              >
                <i className="fa-solid fa-blog"></i> Blogs ({blogsList.length})
              </button>
              <button 
                className={`tab-btn ${activeTab === "services" ? "active" : ""}`}
                onClick={() => setActiveTab("services")}
              >
                <i className="fa-solid fa-screwdriver-wrench"></i> Services ({servicesList.length})
              </button>
            </div>
          </div>

          {/* Tab 1: Overview Dashboard */}
          {activeTab === "overview" && (
            <div className="tab-content" id="tab-overview">
              <div className="stats-grid">
                <div className="stat-card">
                  <div className="stat-icon"><i className="fa-solid fa-file-invoice"></i></div>
                  <div className="stat-info">
                    <h3>Active Services</h3>
                    <div className="stat-num">{servicesList.length}</div>
                  </div>
                </div>
                <div className="stat-card">
                  <div className="stat-icon"><i className="fa-solid fa-rss"></i></div>
                  <div className="stat-info">
                    <h3>Published Blogs</h3>
                    <div className="stat-num">{blogsList.length}</div>
                  </div>
                </div>
                <div className="stat-card">
                  <div className="stat-icon">
                    <i className={isCloudDB ? "fa-solid fa-cloud" : "fa-solid fa-hdd"}></i>
                  </div>
                  <div className="stat-info">
                    <h3>Storage Sync</h3>
                    <div className="stat-num" style={{ fontSize: "14px", marginTop: "4px", color: isCloudDB ? "#22c55e" : "#f59e0b" }}>
                      {isCloudDB ? "Firebase Firestore" : "LocalStorage Mode"}
                    </div>
                  </div>
                </div>
              </div>

              <div className="quick-actions-widget">
                <h3>Quick Management Links</h3>
                <div className="action-buttons-group">
                  <button onClick={openNewBlogModal} className="btn btn-primary">
                    <i className="fa-solid fa-plus-circle" style={{ marginRight: "6px" }}></i> Add New Blog Post
                  </button>
                  <button onClick={openNewServiceModal} className="btn btn-outline-orange">
                    <i className="fa-solid fa-folder-plus" style={{ marginRight: "6px" }}></i> Create Custom Service
                  </button>
                  <button onClick={handleSignOut} className="btn btn-outline-white" style={{ borderColor: "rgba(255,255,255,0.1)", background: "transparent" }}>
                    <i className="fa-solid fa-arrow-right-from-bracket" style={{ marginRight: "6px" }}></i> Logout Session
                  </button>
                </div>
              </div>

              <div className="why-contact-grid" style={{ marginTop: "40px" }}>
                <div className="why-contact-item">
                  <div className="why-contact-icon"><i className="fa-solid fa-shield-halved"></i></div>
                  <h4>Cloud Synchronization</h4>
                  <p>To persist data safely to Cloud Database, simply configure Firebase environment variables in your server dash.</p>
                </div>
                <div className="why-contact-item">
                  <div className="why-contact-icon"><i className="fa-solid fa-bolt"></i></div>
                  <h4>Instant Refreshes</h4>
                  <p>Changes you save in this admin dashboard are immediately updated and rendered on the client site live.</p>
                </div>
              </div>
            </div>
          )}

          {/* Tab 2: Blogs Management */}
          {activeTab === "blogs" && (
            <div className="tab-content" id="tab-blogs">
              <div className="section-title-bar">
                <h3><i className="fa-solid fa-blog"></i> Manage Articles</h3>
                <button onClick={openNewBlogModal} className="btn btn-primary">
                  <i className="fa-solid fa-plus-circle" style={{ marginRight: "6px" }}></i> Add Blog Post
                </button>
              </div>

              {blogsList.length === 0 ? (
                <p style={{ color: "rgba(255,255,255,0.4)", textAlign: "center", padding: "40px 0" }}>
                  No blogs found. Let's create one above!
                </p>
              ) : (
                <div className="admin-data-list">
                  {blogsList.map((blog) => (
                    <div key={blog.id} className="admin-data-card">
                      <div className="card-left">
                        <div className="card-ico"><i className={blog.icon || "fa-solid fa-newspaper"}></i></div>
                        <div className="card-details">
                          <h4>{blog.title}</h4>
                          <div className="card-meta">
                            <span className="cat-badge">{blog.category}</span>
                            <span><i className="fa-regular fa-calendar"></i> {blog.date}</span>
                            <span><i className="fa-regular fa-clock"></i> {blog.readTime}</span>
                          </div>
                        </div>
                      </div>
                      <div className="card-actions">
                        <button 
                          onClick={() => openEditBlogModal(blog)} 
                          className="btn-icon btn-edit" 
                          title="Edit Blog"
                        >
                          <i className="fa-solid fa-pen"></i>
                        </button>
                        <button 
                          onClick={() => handleBlogDelete(blog.id)} 
                          className="btn-icon btn-delete" 
                          title="Delete Blog"
                        >
                          <i className="fa-solid fa-trash"></i>
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* Tab 3: Services Management */}
          {activeTab === "services" && (
            <div className="tab-content" id="tab-services">
              <div className="section-title-bar">
                <h3><i className="fa-solid fa-screwdriver-wrench"></i> Manage Services</h3>
                <button onClick={openNewServiceModal} className="btn btn-primary">
                  <i className="fa-solid fa-plus-circle" style={{ marginRight: "6px" }}></i> Add Custom Service
                </button>
              </div>

              {servicesList.length === 0 ? (
                <p style={{ color: "rgba(255,255,255,0.4)", textAlign: "center", padding: "40px 0" }}>
                  No services found. Let's add one to start!
                </p>
              ) : (
                <div className="admin-data-list">
                  {servicesList.map((svc) => (
                    <div key={svc.id} className="admin-data-card">
                      <div className="card-left">
                        <div className="card-ico"><i className={svc.icon || "fa-solid fa-cogs"}></i></div>
                        <div className="card-details">
                          <h4>{svc.title}</h4>
                          <div className="card-meta">
                            <span className="cat-badge" style={{ background: "rgba(255,107,53,0.15)", color: "var(--primary-color)" }}>
                              {svc.price}
                            </span>
                            <span><i className="fa-solid fa-list-check"></i> {svc.features.length} features</span>
                          </div>
                        </div>
                      </div>
                      <div className="card-actions">
                        <button 
                          onClick={() => openEditServiceModal(svc)} 
                          className="btn-icon btn-edit" 
                          title="Edit Service"
                        >
                          <i className="fa-solid fa-pen"></i>
                        </button>
                        <button 
                          onClick={() => handleServiceDelete(svc.id)} 
                          className="btn-icon btn-delete" 
                          title="Delete Service"
                        >
                          <i className="fa-solid fa-trash"></i>
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

        </div>
      </div>

      {/* Blog Editor Modal */}
      {isBlogModalOpen && (
        <div className="admin-modal-overlay">
          <div className="admin-modal-card">
            <div className="modal-header">
              <h3>{editingBlog ? "Edit Blog Article" : "Write New Blog"}</h3>
              <button onClick={() => setIsBlogModalOpen(false)} className="btn-close">
                <i className="fa-solid fa-xmark"></i>
              </button>
            </div>
            <div className="modal-body">
              <form onSubmit={handleBlogSubmit} className="admin-form">
                
                <div className="form-grid-2">
                  <div className="admin-form-group">
                    <label htmlFor="blogTitle">Blog Title *</label>
                    <input 
                      type="text" 
                      id="blogTitle" 
                      value={blogTitle} 
                      onChange={(e) => handleBlogTitleChange(e.target.value)} 
                      placeholder="e.g. How to get leads in Indore" 
                      required
                    />
                  </div>
                  <div className="admin-form-group">
                    <label htmlFor="blogSlug">Slug Route *</label>
                    <input 
                      type="text" 
                      id="blogSlug" 
                      value={blogSlug} 
                      onChange={(e) => setBlogSlug(e.target.value)} 
                      placeholder="e.g. how-to-get-leads-indore" 
                      required
                      disabled={!!editingBlog}
                    />
                    <span className="form-helper">This forms the URL: /blog/{"{slug}"}</span>
                  </div>
                </div>

                <div className="form-grid-2">
                  <div className="admin-form-group">
                    <label htmlFor="blogCategory">Category Group</label>
                    <select 
                      id="blogCategory" 
                      value={blogCategory} 
                      onChange={(e) => setBlogCategory(e.target.value)}
                    >
                      <option value="SEO">SEO</option>
                      <option value="Ads">Ads</option>
                      <option value="Automation">Automation</option>
                      <option value="Design">Design</option>
                    </select>
                  </div>
                  <div className="admin-form-group">
                    <label htmlFor="blogReadTime">Reading Time Indicator</label>
                    <input 
                      type="text" 
                      id="blogReadTime" 
                      value={blogReadTime} 
                      onChange={(e) => setBlogReadTime(e.target.value)} 
                      placeholder="e.g. 5 min read"
                    />
                  </div>
                </div>

                <div className="form-grid-2">
                  <div className="admin-form-group">
                    <label htmlFor="blogIcon">FontAwesome Icon Class Name</label>
                    <input 
                      type="text" 
                      id="blogIcon" 
                      value={blogIcon} 
                      onChange={(e) => setBlogIcon(e.target.value)} 
                      placeholder="e.g. fa-solid fa-robot"
                    />
                  </div>
                  <div className="admin-form-group">
                    <label htmlFor="blogTags">Keywords / Tags (Comma separated)</label>
                    <input 
                      type="text" 
                      id="blogTags" 
                      value={blogTags} 
                      onChange={(e) => setBlogTags(e.target.value)} 
                      placeholder="e.g. AI, SEO, Leads"
                    />
                  </div>
                </div>

                <div className="admin-form-group">
                  <label htmlFor="blogExcerpt">Short Summary Excerpt (Shows in Grid List) *</label>
                  <textarea 
                    id="blogExcerpt" 
                    value={blogExcerpt} 
                    onChange={(e) => setBlogExcerpt(e.target.value)} 
                    placeholder="Short 2-sentence description of the blog..."
                    rows={2}
                    required
                  />
                </div>

                <div className="admin-form-group">
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "8px" }}>
                    <label htmlFor="blogContent" style={{ margin: 0 }}>Full Article Body Content (HTML & Custom CSS Supported) *</label>
                    
                    <button 
                      type="button" 
                      onClick={() => fileInputRef.current?.click()}
                      className="btn btn-outline-orange"
                      style={{ padding: "6px 12px", fontSize: "12px" }}
                      disabled={isUploading}
                    >
                      <i className={`fa-solid ${isUploading ? "fa-spinner fa-spin" : "fa-image"}`} style={{ marginRight: "6px" }}></i> 
                      {isUploading ? "Uploading..." : "Insert Image"}
                    </button>
                    <input 
                      type="file" 
                      ref={fileInputRef} 
                      onChange={handleImageUpload} 
                      accept="image/*" 
                      style={{ display: "none" }} 
                    />
                  </div>
                  <textarea 
                    id="blogContent" 
                    value={blogContent} 
                    onChange={(e) => setBlogContent(e.target.value)} 
                    placeholder="Write your beautiful full article text here using HTML tags like <h2>, <p>, <strong>, and custom classes..."
                    rows={16}
                    required
                    style={{ fontFamily: "monospace" }}
                  />
                  <span className="form-helper">Images are uploaded directly to R2 and injected as &lt;img&gt; tags automatically.</span>
                </div>

                <div className="form-actions">
                  <button type="button" onClick={() => setIsBlogModalOpen(false)} className="btn btn-outline-white" style={{ background: "transparent" }}>
                    Discard
                  </button>
                  <button type="submit" className="btn btn-primary">
                    <i className="fa-solid fa-paper-plane" style={{ marginRight: "6px" }}></i> {editingBlog ? "Save Updates" : "Publish Article"}
                  </button>
                </div>

              </form>
            </div>
          </div>
        </div>
      )}

      {/* Service Editor Modal */}
      {isServiceModalOpen && (
        <div className="admin-modal-overlay">
          <div className="admin-modal-card">
            <div className="modal-header">
              <h3>{editingService ? "Modify Service Item" : "Create Custom Service"}</h3>
              <button onClick={() => setIsServiceModalOpen(false)} className="btn-close">
                <i className="fa-solid fa-xmark"></i>
              </button>
            </div>
            <div className="modal-body">
              <form onSubmit={handleServiceSubmit} className="admin-form">
                
                <div className="form-grid-2">
                  <div className="admin-form-group">
                    <label htmlFor="serviceTitle">Service Title *</label>
                    <input 
                      type="text" 
                      id="serviceTitle" 
                      value={serviceTitle} 
                      onChange={(e) => handleServiceTitleChange(e.target.value)} 
                      placeholder="e.g. Meta Ads (Facebook & Instagram)" 
                      required
                    />
                  </div>
                  <div className="admin-form-group">
                    <label htmlFor="serviceId">Unique Slug/ID *</label>
                    <input 
                      type="text" 
                      id="serviceId" 
                      value={serviceId} 
                      onChange={(e) => setServiceId(e.target.value)} 
                      placeholder="e.g. meta-ads" 
                      required
                      disabled={!!editingService}
                    />
                  </div>
                </div>

                <div className="form-grid-2">
                  <div className="admin-form-group">
                    <label htmlFor="servicePrice">Price Tag Range *</label>
                    <input 
                      type="text" 
                      id="servicePrice" 
                      value={servicePrice} 
                      onChange={(e) => setServicePrice(e.target.value)} 
                      placeholder="e.g. Starting from ₹12,000/month" 
                      required
                    />
                  </div>
                  <div className="admin-form-group">
                    <label htmlFor="serviceIcon">Icon (FontAwesome Class) *</label>
                    <input 
                      type="text" 
                      id="serviceIcon" 
                      value={serviceIcon} 
                      onChange={(e) => setServiceIcon(e.target.value)} 
                      placeholder="e.g. fab fa-meta" 
                      required
                    />
                  </div>
                </div>

                <div className="admin-form-group">
                  <label htmlFor="serviceDescription">Service Description *</label>
                  <textarea 
                    id="serviceDescription" 
                    value={serviceDescription} 
                    onChange={(e) => setServiceDescription(e.target.value)} 
                    placeholder="Describe what value this service brings to Indore businesses..."
                    rows={3}
                    required
                  />
                </div>

                <div className="admin-form-group">
                  <label>Service Features / Deliverables *</label>
                  <div className="features-input-area">
                    {serviceFeatures.map((feat, idx) => (
                      <div key={idx} className="feature-input-row">
                        <input 
                          type="text" 
                          value={feat} 
                          onChange={(e) => handleFeatureChange(idx, e.target.value)}
                          placeholder={`Feature ${idx + 1}`}
                          required
                        />
                        {serviceFeatures.length > 1 && (
                          <button 
                            type="button" 
                            onClick={() => removeFeatureInput(idx)} 
                            className="btn-remove-feature"
                            title="Remove feature line"
                          >
                            <i className="fa-solid fa-minus"></i>
                          </button>
                        )}
                      </div>
                    ))}
                    <button 
                      type="button" 
                      onClick={addFeatureInput} 
                      className="btn-add-feature"
                    >
                      <i className="fa-solid fa-plus" style={{ marginRight: "4px" }}></i> Add Another Deliverable
                    </button>
                  </div>
                </div>

                <div className="form-grid-2">
                  <div className="admin-form-group">
                    <label htmlFor="serviceVisualTitle">Visual Box Title</label>
                    <input 
                      type="text" 
                      id="serviceVisualTitle" 
                      value={serviceVisualTitle} 
                      onChange={(e) => setServiceVisualTitle(e.target.value)} 
                      placeholder="e.g. Meta Ads Indore" 
                    />
                  </div>
                  <div className="admin-form-group">
                    <label htmlFor="serviceVisualDescription">Visual Box Brief Description</label>
                    <input 
                      type="text" 
                      id="serviceVisualDescription" 
                      value={serviceVisualDescription} 
                      onChange={(e) => setServiceVisualDescription(e.target.value)} 
                      placeholder="Scroll-stopping summary text..." 
                    />
                  </div>
                </div>

                <div className="form-actions">
                  <button type="button" onClick={() => setIsServiceModalOpen(false)} className="btn btn-outline-white" style={{ background: "transparent" }}>
                    Discard
                  </button>
                  <button type="submit" className="btn btn-primary">
                    <i className="fa-solid fa-floppy-disk" style={{ marginRight: "6px" }}></i> {editingService ? "Save Service Changes" : "Create Service"}
                  </button>
                </div>

              </form>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
