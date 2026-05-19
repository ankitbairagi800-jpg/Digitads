"use client";

import Link from "next/link";
import "./case-studies.css";

// Case Study Data Interface
interface CaseStudy {
  id: number;
  title: string;
  subtitle: string;
  icon: string;
  tags: string[];
  challenge: string;
  strategy: string;
  execution: string;
  results: { value: string; label: string }[];
}

// Dummy Case Studies Data extracted from legacy HTML
const caseStudiesData: CaseStudy[] = [
  {
    id: 1,
    title: "Skin & Hair Clinic — Indore",
    subtitle: "Meta Ads + WhatsApp Automation",
    icon: "fas fa-stethoscope",
    tags: ["Meta Ads", "WhatsApp Automation", "Healthcare"],
    challenge: "A skin and hair clinic in Vijay Nagar, Indore was spending ₹15,000/month on Facebook Ads but getting only 8–10 leads with poor follow-up. Most inquiries went cold because the front desk couldn't respond fast enough.",
    strategy: "We rebuilt the Meta Ads campaign from scratch — new audiences, new creatives, and video testimonial ads. We simultaneously implemented WhatsApp automation using n8n that responded to every lead within 60 seconds, automatically booking consultation slots.",
    execution: "Launched 3 campaigns: awareness (video), consideration (offers), and conversion (booking). Retargeting for warm audiences. WhatsApp bot sent appointment reminders 24 hours and 2 hours before each consultation.",
    results: [
      { value: "Potential", label: "Lead Growth" },
      { value: "Optimized", label: "Cost Per Lead" },
      { value: "Improved", label: "Show-up Rate" }
    ]
  },
  {
    id: 2,
    title: "IIT-JEE Coaching Center — Indore",
    subtitle: "Google Ads + Local SEO",
    icon: "fas fa-graduation-cap",
    tags: ["Google Ads", "Local SEO", "Education"],
    challenge: "An IIT-JEE coaching center in Indore had zero Google presence. Despite 8 years in business, they were invisible on Google Maps and had no digital lead generation. Admissions were purely word-of-mouth.",
    strategy: "Two-track approach: immediate results via Google Search Ads targeting \"IIT coaching Indore\" keywords, and long-term through GMB optimization and local SEO to build organic visibility in the Indore map pack.",
    execution: "Built a high-converting landing page, launched 4 keyword groups in Google Ads, optimized GMB with 50+ photos, 20+ reviews, and regular posts. Local SEO citations across 40+ directories.",
    results: [
      { value: "Growth", label: "New Admissions" },
      { value: "Better", label: "Google Maps Rank" },
      { value: "Strong", label: "ROI Potential" }
    ]
  },
  {
    id: 3,
    title: "Fitness Center — Vijay Nagar, Indore",
    subtitle: "GMB Optimization + AI Video Ads",
    icon: "fas fa-dumbbell",
    tags: ["GMB Optimization", "AI Video Ads", "Fitness"],
    challenge: "A gym in Vijay Nagar had 47 Google reviews and ranked on page 2 of Maps. Walk-ins were declining. No social media presence. Competitors with fewer members were outranking them on Google.",
    strategy: "GMB deep optimization combined with a consistent AI video content strategy for Instagram Reels — member transformation stories, facility tours, trainer expertise videos — to build trust and social proof at scale.",
    execution: "Revamped GMB with 80+ professional photos, keyword-rich description, weekly posts, and a review generation system that aimed for new reviews. Produced AI-assisted Reels.",
    results: [
      { value: "Increased", label: "Walk-ins Expected" },
      { value: "Higher", label: "Google Maps Rank" },
      { value: "More", label: "Consistent Reviews" }
    ]
  },
  {
    id: 4,
    title: "Multi-Specialty Dental Clinic — Indore",
    subtitle: "Full-Funnel Digital Marketing",
    icon: "fas fa-tooth",
    tags: ["Meta Ads", "Google Ads", "GMB SEO", "Automation"],
    challenge: "A dental clinic with 3 doctors had tried 3 agencies in 18 months with no consistent results. Inconsistent lead flow, no follow-up system, and an outdated website that wasn't converting mobile visitors.",
    strategy: "Full-funnel rebuild: new landing page → Meta Ads for awareness and lead gen → Google Ads for high-intent searches → GMB optimization for organic local discovery → WhatsApp automation for instant follow-up.",
    execution: "Built a mobile-first landing page, launched campaigns across Meta and Google simultaneously, optimized GMB profile, and deployed an n8n workflow for faster follow-up via WhatsApp.",
    results: [
      { value: "Consistent", label: "Lead Flow Expected" },
      { value: "Optimized", label: "Cost Per Lead" },
      { value: "High", label: "ROI Potential" }
    ]
  }
];

export default function CaseStudiesPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="page-hero" aria-label="Case studies hero">
        <div className="container">
          <div className="page-hero-inner">
            <nav aria-label="Breadcrumb" className="breadcrumb">
              <Link href="/">Home</Link>
              <span className="breadcrumb-sep">›</span>
              <span className="breadcrumb-current">Case Studies</span>
            </nav>
            <h1>Real Potential.<br/><span className="gradient-text">Proven Strategies.</span></h1>
            <p>Our methodologies have helped various businesses in Indore optimize their digital presence. These case studies illustrate the strategies we deploy and the potential outcomes you can achieve — with no unrealistic guarantees, just data-driven approaches.</p>
          </div>
        </div>
      </section>

      {/* Stats Overview */}
      <section className="stats-bar" aria-label="Overall results">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-item"><div className="stat-number">Custom</div><div className="stat-label">Tailored Strategies</div></div>
            <div className="stat-item"><div className="stat-number">Data-Driven</div><div className="stat-label">Campaign Adjustments</div></div>
            <div className="stat-item"><div className="stat-number">High</div><div className="stat-label">ROI Potential Focus</div></div>
            <div className="stat-item"><div className="stat-number">Quality</div><div className="stat-label">Lead Generation Goals</div></div>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="case-studies-section" aria-label="Case studies">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Case Studies</span>
            <h2 className="section-title">How We Grow Businesses in Indore</h2>
            <p className="section-subtitle">Each campaign is unique. Each strategy is custom-built. Every result is measurable.</p>
          </div>
          
          <div className="case-grid">
            {caseStudiesData.map((study) => (
              <article key={study.id} className="case-card">
                <div className="case-card-header">
                  <i className={study.icon} aria-hidden="true"></i>
                  <div className="case-header-text">
                    <h3>{study.title}</h3>
                    <p>{study.subtitle}</p>
                  </div>
                </div>
                <div className="case-card-body">
                  <div className="case-tags">
                    {study.tags.map((tag) => (
                      <span key={tag} className="case-tag">{tag}</span>
                    ))}
                  </div>
                  <div className="case-section">
                    <h4>The Challenge</h4>
                    <p>{study.challenge}</p>
                  </div>
                  <div className="case-section">
                    <h4>Our Strategy</h4>
                    <p>{study.strategy}</p>
                  </div>
                  <div className="case-section">
                    <h4>Execution</h4>
                    <p>{study.execution}</p>
                  </div>
                  <div className="case-results">
                    {study.results.map((result, index) => (
                      <div key={index} className="case-result-item">
                        <div className="case-result-num">{result.value}</div>
                        <div className="case-result-label">{result.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials" aria-label="Client testimonials">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">What Clients Say</span>
            <h2 className="section-title">Straight from Our Clients</h2>
            <p className="section-subtitle">The best proof is what our clients say after working with us</p>
          </div>
          <div className="testimonials-grid">
            <article className="testimonial-card">
              <div className="testimonial-rating" aria-label="5 stars">
                <i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i>
              </div>
              <blockquote className="testimonial-text">"From 8 leads a week to 30+ appointments monthly. The WhatsApp automation was a game-changer — patients get a response before I can even pick up the phone."</blockquote>
              <div className="testimonial-author">
                <div className="author-avatar"><i className="fas fa-user-md" aria-hidden="true"></i></div>
                <div className="author-info"><h4>Dr. Rajesh Sharma</h4><p>Skin &amp; Hair Clinic, Indore</p></div>
              </div>
            </article>
            <article className="testimonial-card">
              <div className="testimonial-rating" aria-label="5 stars">
                <i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i>
              </div>
              <blockquote className="testimonial-text">"80 new students in the first month. We were skeptical about digital marketing — now it's our biggest admission channel. Ankit knows exactly what works for coaching centers."</blockquote>
              <div className="testimonial-author">
                <div className="author-avatar"><i className="fas fa-chalkboard-teacher" aria-hidden="true"></i></div>
                <div className="author-info"><h4>Priya Verma</h4><p>Director, Vision IIT Coaching, Indore</p></div>
              </div>
            </article>
            <article className="testimonial-card">
              <div className="testimonial-rating" aria-label="5 stars">
                <i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i>
              </div>
              <blockquote className="testimonial-text">"Our gym went from rank 11 to rank 1 on Google Maps in 60 days. Walk-ins doubled. The Reels they created got us 50,000 views and dozens of membership inquiries organically."</blockquote>
              <div className="testimonial-author">
                <div className="author-avatar"><i className="fas fa-dumbbell" aria-hidden="true"></i></div>
                <div className="author-info"><h4>Suresh Malhotra</h4><p>FitLife Gym, Vijay Nagar, Indore</p></div>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-banner" aria-label="Get your case study">
        <div className="container">
          <div className="cta-content">
            <h2>Want Results Like These for Your Business?</h2>
            <p>Every business on this page started with a free audit call. Book yours today — no obligation, no pressure.</p>
            <div className="cta-buttons">
              <Link href="/contact" className="btn btn-white btn-large"><i className="fas fa-calendar-check" aria-hidden="true"></i> Book Free Strategy Call</Link>
              <Link href="/services" className="btn btn-outline-white btn-large"><i className="fas fa-th" aria-hidden="true"></i> View All Services</Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
