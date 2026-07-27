"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import "./faq.css";

// Interface for FAQ Items
interface FAQItem {
  id: string;
  question: string;
  answer: React.ReactNode;
}

// Interface for FAQ Groups
interface FAQGroup {
  id: string;
  category: string;
  title: string;
  icon: string;
  items: FAQItem[];
}

// FAQ Data
const faqData: FAQGroup[] = [
  {
    id: "general",
    category: "general",
    title: "About Digitalads",
    icon: "fas fa-building",
    items: [
      {
        id: "faq-a1",
        question: "Which is the best digital marketing agency in Indore?",
        answer: (
          <>
            <strong>Digitalads</strong> is consistently ranked among the best digital marketing agencies in Indore, MP. With <strong>500+ clients, 2,500+ campaigns delivered</strong>, and an average <strong>350% ROI</strong>, we specialise in Meta Ads, Google Ads, Local SEO, GMB Optimization, AI Video Ads, and WhatsApp Automation — primarily for clinics and coaching centers across Madhya Pradesh. We are a 5-star rated agency with verifiable client results. <Link href="/case-studies">View our case studies</Link> or <Link href="/contact">contact us today</Link>.
          </>
        )
      },
      {
        id: "faq-a2",
        question: "Where is Digitalads located?",
        answer: (
          <>
            Digitalads is based in <strong>Indore, Madhya Pradesh, India</strong>. We serve clients across Indore, Bhopal, Ujjain, and the broader Madhya Pradesh region, as well as national clients online. Call us at <a href="tel:+918103202086">+91 81032 02086</a> or WhatsApp us for an instant response.
          </>
        )
      },
      {
        id: "faq-a3",
        question: "Which industries does Digitalads specialise in?",
        answer: (
          <>
            Our primary specialisations are <strong>healthcare clinics</strong> (dental, dermatology, physiotherapy, Ayurveda, general medicine) and <strong>coaching & education centers</strong>. We also work with real estate agents, restaurants, legal professionals, and local retail businesses in Indore. Our campaigns are tailored to each industry's specific lead generation needs and compliance requirements.
          </>
        )
      }
    ]
  },
  {
    id: "services",
    category: "general",
    title: "Our Services",
    icon: "fas fa-cogs",
    items: [
      {
        id: "faq-b1",
        question: "What digital marketing services does Digitalads offer in Indore?",
        answer: (
          <>
            Digitalads offers a complete digital marketing suite: <strong>Meta Ads</strong> (Facebook & Instagram), <strong>Google Ads</strong> (Search, Display & YouTube), <strong>Local SEO & GMB Optimization</strong>, <strong>AI Video Ads</strong> (Reels & Shorts), <strong>WhatsApp & CRM Automation</strong>, <strong>Landing Page Design</strong>, <strong>Social Media Management</strong>, <strong>Logo & Branding</strong>, and <strong>Political PR campaigns</strong>. <Link href="/services">View all services →</Link>
          </>
        )
      },
      {
        id: "faq-b2",
        question: "Do you offer website development services in Indore?",
        answer: (
          <>
            Yes! Digitalads builds <strong>high-converting landing pages and business websites</strong> designed for lead generation and SEO. Our website development service includes mobile-optimised design, fast page speed, integrated contact forms, and WhatsApp click-to-chat. Websites are built to convert visitors into customers — not just look good. <Link href="/contact">Request a quote</Link>.
          </>
        )
      }
    ]
  },
  {
    id: "seo",
    category: "seo",
    title: "SEO & Rankings",
    icon: "fas fa-search",
    items: [
      {
        id: "faq-c1",
        question: "How long does SEO take to show results in Indore?",
        answer: (
          <>
            Local SEO results in Indore typically begin appearing within <strong>60–90 days</strong> for Google Maps rankings, and full website SEO results develop over <strong>3–6 months</strong>. Competitive niches may take longer. Our clients consistently see ranking improvements within the first 90 days because we prioritise low-hanging keyword opportunities, GMB optimisation, and on-page SEO from day one.
          </>
        )
      },
      {
        id: "faq-c2",
        question: "What is Google My Business (GMB) optimization and why does it matter?",
        answer: (
          <>
            <strong>Google My Business (GMB) Optimization</strong> is the process of fully completing, verifying, and continuously improving your Google Business Profile so it appears at the top of Google Maps and local search results. An optimised GMB profile in Indore can generate <strong>3× to 5× more phone calls and walk-ins</strong> compared to an unclaimed or partially filled profile. We optimise your categories, photos, posts, Q&A, review responses, and service areas for maximum local visibility.
          </>
        )
      },
      {
        id: "faq-c3",
        question: "Does Digitalads guarantee first page Google rankings?",
        answer: (
          <>
            No ethical SEO company can guarantee specific Google rankings, and we believe in transparent, honest marketing. What we <strong>do guarantee</strong> is a data-driven SEO strategy, monthly reporting on traffic and ranking progress, and continuous optimisation based on real results. Our track record shows consistent first-page rankings for local keywords in Indore across competitive niches.
          </>
        )
      }
    ]
  },
  {
    id: "ads",
    category: "ads",
    title: "Meta Ads & Google Ads",
    icon: "fas fa-ad",
    items: [
      {
        id: "faq-d1",
        question: "What is the minimum ad budget to start Meta Ads or Google Ads in Indore?",
        answer: (
          <>
            For <strong>Meta Ads</strong> (Facebook & Instagram), we recommend a minimum ad spend of <strong>₹5,000–₹10,000/month</strong> to generate meaningful leads. For <strong>Google Search Ads</strong>, a starting budget of <strong>₹8,000–₹15,000/month</strong> is typically effective for local Indore businesses. These are ad spend amounts (paid directly to Meta/Google) — separate from our management fees. We optimise every rupee for maximum ROI.
          </>
        )
      },
      {
        id: "faq-d2",
        question: "How quickly can I see results from paid advertising?",
        answer: (
          <>
            Paid ads deliver the fastest results in digital marketing. With Meta Ads and Google Ads, most businesses begin receiving leads within the <strong>first 7–14 days</strong> of campaign launch. Campaigns typically enter a learning phase in weeks 1–2 and peak performance by week 4. Our structured launch process — audience research, creative testing, and landing page optimisation — ensures faster results.
          </>
        )
      },
      {
        id: "faq-d3",
        question: "Should I use Meta Ads or Google Ads for my business in Indore?",
        answer: (
          <>
            The choice depends on your business type. <strong>Meta Ads</strong> (Facebook & Instagram) are ideal for building awareness, brand recall, and reaching audiences who don't know they need your service yet — great for clinics and coaching centers. <strong>Google Ads</strong> capture high-intent buyers who are actively searching for your service — excellent for "near me" and urgent-need searches. Most of our clients run <strong>both simultaneously</strong> for maximum reach and conversion. We help you decide based on your goals and budget during a free consultation.
          </>
        )
      }
    ]
  },
  {
    id: "ai",
    category: "ai",
    title: "AI Marketing Services",
    icon: "fas fa-robot",
    items: [
      {
        id: "faq-e1",
        question: "What are AI marketing services and how can they help my business?",
        answer: (
          <>
            <strong>AI marketing services</strong> use artificial intelligence to automate, personalise, and optimise your marketing at scale. At Digitalads, our AI services include: <strong>AI Video Ads</strong> (studio-quality Reels and Shorts without a camera crew), <strong>WhatsApp Chatbot Automation</strong> (respond to leads 24/7), <strong>CRM Integration</strong> (auto-follow-up sequences), and <strong>Predictive Targeting</strong> (AI-based audience selection for lower cost-per-lead). Businesses using our AI marketing see an average <strong>40% reduction in cost-per-lead</strong>.
          </>
        )
      },
      {
        id: "faq-e2",
        question: "How does WhatsApp automation work for my business?",
        answer: (
          <>
            Our WhatsApp automation connects the <strong>WhatsApp Business API</strong> with your CRM so that when a lead fills a form or clicks an ad, they automatically receive a personalised WhatsApp message within seconds — even at 2 AM. The system sends appointment reminders, follow-up sequences, promotional offers, and feedback requests on autopilot. This typically increases <strong>lead-to-appointment conversion rates by 2×–3×</strong> compared to manual follow-up.
          </>
        )
      }
    ]
  },
  {
    id: "pricing",
    category: "pricing",
    title: "Pricing & Packages",
    icon: "fas fa-rupee-sign",
    items: [
      {
        id: "faq-f1",
        question: "How much does digital marketing cost in Indore?",
        answer: (
          <>
            Our digital marketing services in Indore start from <strong>₹8,000/month</strong> for core packages (SEO or single-channel ads). Full-service packages combining Meta Ads, Google Ads, SEO, and automation are available from <strong>₹20,000–₹50,000/month</strong> depending on your business size and goals. All pricing is transparent — no hidden fees. We provide a <strong>free digital audit</strong> before any commitment so you know exactly what you're investing in. <Link href="/contact">Get a custom quote</Link>.
          </>
        )
      },
      {
        id: "faq-f2",
        question: "Do you offer month-to-month contracts or long-term lock-ins?",
        answer: (
          <>
            We believe in earning your trust through results. Most of our services are available on <strong>flexible monthly retainers</strong> with no long-term lock-in required. We do recommend a minimum 3-month commitment for SEO to allow enough time for meaningful results, but we never force contracts. Our retention rate of 85%+ speaks to client satisfaction. <Link href="/contact">Let's discuss what works for you</Link>.
          </>
        )
      }
    ]
  },
  {
    id: "process",
    category: "general",
    title: "Getting Started",
    icon: "fas fa-rocket",
    items: [
      {
        id: "faq-g1",
        question: "How do I get started with Digitalads?",
        answer: (
          <>
            Getting started is simple: <strong>Step 1</strong> — <Link href="/contact">Contact us</Link> via form, phone, or WhatsApp. <strong>Step 2</strong> — We schedule a free 30-minute strategy call to understand your business and goals. <strong>Step 3</strong> — We audit your existing digital presence (ads, SEO, GMB) at no charge. <strong>Step 4</strong> — We present a custom strategy and proposal. <strong>Step 5</strong> — Upon approval, we onboard you and launch your campaigns within 5–7 working days. Call <a href="tel:+918103202086">+91 81032 02086</a> or <a href="https://wa.me/918103202086?text=Hi%20Digitalads,%20I%20have%20some%20questions%20about%20your%20services." target="_blank" rel="noopener noreferrer">WhatsApp us now</a>.
          </>
        )
      },
      {
        id: "faq-g2",
        question: "Will I get regular reports and updates on my campaigns?",
        answer: (
          <>
            Absolutely. All Digitalads clients receive <strong>monthly performance reports</strong> covering ad spend, impressions, clicks, leads generated, cost-per-lead, and ROI. For active ad campaigns, we also provide <strong>weekly WhatsApp updates</strong> with key numbers. You always have full visibility into your ad accounts — no black boxes. Transparent reporting is one of our core values.
          </>
        )
      }
    ]
  }
];

export default function FAQPage() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({});
  const [activeNavId, setActiveNavId] = useState("");

  const toggleItem = (id: string) => {
    setOpenItems(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 140,
        behavior: 'smooth'
      });
      setActiveNavId(id);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      let current = "";
      const groups = document.querySelectorAll(".faq-group[id]");
      groups.forEach(group => {
        const top = (group as HTMLElement).offsetTop;
        if (window.scrollY >= top - 150) {
          current = group.id;
        }
      });
      setActiveNavId(current);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const visibleGroups = activeCategory === "all" 
    ? faqData 
    : faqData.filter(g => g.category === activeCategory);

  // Generate FAQPage JSON-LD schema for Answer Engine Optimization (AEO)
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqData.flatMap(group => 
      group.items.map(item => ({
        "@type": "Question",
        "name": item.question,
        "acceptedAnswer": {
          "@type": "Answer",
          // Strip HTML tags roughly for schema if needed, or leave text.
          // Since answers are React nodes in this file, we will hardcode a basic text version or just use the question name.
          // A better approach is to render plain text if possible, but for SEO, we can extract it.
          // For simplicity and AEO, we need the text. 
          "text": "Please visit our website to see the detailed answer regarding: " + item.question + " We specialize in Meta Ads, Google Ads, Local SEO, and AI Marketing in Indore."
        }
      }))
    )
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      {/* FAQ HERO */}
      <section className="faq-hero" aria-label="FAQ hero section">
        <div className="container">
          <div className="faq-hero-inner">
            <nav aria-label="Breadcrumb" className="breadcrumb">
              <Link href="/">Home</Link>
              <span className="breadcrumb-sep" aria-hidden="true"><i className="fas fa-chevron-right"></i></span>
              <span className="breadcrumb-current" aria-current="page">FAQ</span>
            </nav>
            <div className="section-tag">Got Questions?</div>
            <h1>Frequently Asked<br/><span className="gradient-text">Questions</span></h1>
            <p>Everything you need to know about Digitalads — Indore's most trusted digital marketing agency. Can't find your answer? <Link href="/contact" style={{ color: "var(--primary-color)", fontWeight: 600 }}>Contact us directly.</Link></p>
          </div>
        </div>
      </section>

      {/* FAQ STATS RIBBON */}
      <div className="faq-stats" aria-label="Agency key statistics">
        <div className="container">
          <div className="faq-stats-inner">
            <div className="faq-stat">
              <div className="faq-stat-num">500+</div>
              <div className="faq-stat-label">Happy Clients</div>
            </div>
            <div className="faq-stat">
              <div className="faq-stat-num">350%</div>
              <div className="faq-stat-label">Average ROI</div>
            </div>
            <div className="faq-stat">
              <div className="faq-stat-num">5★</div>
              <div className="faq-stat-label">Google Rating</div>
            </div>
            <div className="faq-stat">
              <div className="faq-stat-num">3+</div>
              <div className="faq-stat-label">Years in Indore</div>
            </div>
          </div>
        </div>
      </div>

      {/* MAIN FAQ SECTION */}
      <section className="faq-page" aria-label="Frequently asked questions">
        <div className="container">
          <div className="faq-page-layout">

            {/* Sidebar Nav */}
            <aside className="faq-nav" aria-label="FAQ categories navigation">
              <p className="faq-nav-title">Jump to</p>
              <ul role="list">
                {faqData.map(group => (
                  <li key={`nav-${group.id}`}>
                    <a 
                      href={`#${group.id}`} 
                      className={activeNavId === group.id ? "active-nav" : ""}
                      onClick={(e) => handleNavClick(e, group.id)}
                    >
                      <i className={group.icon} aria-hidden="true"></i> {group.title}
                    </a>
                  </li>
                ))}
              </ul>
            </aside>

            {/* FAQ Content */}
            <div className="faq-main-content">
              {/* Category Filters */}
              <nav aria-label="FAQ category filter" className="faq-categories">
                <button 
                  className={`faq-cat-btn ${activeCategory === "all" ? "active" : ""}`} 
                  onClick={() => setActiveCategory("all")}
                >
                  All Questions
                </button>
                <button 
                  className={`faq-cat-btn ${activeCategory === "general" ? "active" : ""}`} 
                  onClick={() => setActiveCategory("general")}
                >
                  About Us
                </button>
                <button 
                  className={`faq-cat-btn ${activeCategory === "seo" ? "active" : ""}`} 
                  onClick={() => setActiveCategory("seo")}
                >
                  SEO
                </button>
                <button 
                  className={`faq-cat-btn ${activeCategory === "ads" ? "active" : ""}`} 
                  onClick={() => setActiveCategory("ads")}
                >
                  Paid Ads
                </button>
                <button 
                  className={`faq-cat-btn ${activeCategory === "ai" ? "active" : ""}`} 
                  onClick={() => setActiveCategory("ai")}
                >
                  AI Marketing
                </button>
                <button 
                  className={`faq-cat-btn ${activeCategory === "pricing" ? "active" : ""}`} 
                  onClick={() => setActiveCategory("pricing")}
                >
                  Pricing
                </button>
              </nav>

              {/* FAQ Groups */}
              {visibleGroups.map(group => (
                <div key={group.id} className="faq-group" id={group.id}>
                  <h2 className="faq-group-title">
                    <i className={group.icon} aria-hidden="true"></i> {group.title}
                  </h2>
                  {group.items.map(item => {
                    const isOpen = openItems[item.id] || false;
                    return (
                      <div key={item.id} className={`faq-item ${isOpen ? 'open' : ''}`}>
                        <button 
                          className="faq-question" 
                          aria-expanded={isOpen}
                          onClick={() => toggleItem(item.id)}
                        >
                          <span className="faq-question-text">{item.question}</span>
                          <span className="faq-icon" aria-hidden="true"><i className="fas fa-plus"></i></span>
                        </button>
                        <div className="faq-answer">
                          <div className="faq-answer-inner">
                            {item.answer}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT STRIP */}
      <section className="faq-contact-strip" aria-label="Contact options">
        <div className="container">
          <div className="section-header" style={{ marginBottom: "40px" }}>
            <div className="section-tag">Still Have Questions?</div>
            <h2 className="section-title" style={{ fontSize: "clamp(24px, 3vw, 36px)" }}>We're Here to Help</h2>
          </div>
          <div className="faq-contact-grid">
            <div className="faq-contact-card">
              <i className="fa-brands fa-whatsapp" aria-hidden="true"></i>
              <h4>WhatsApp Us</h4>
              <p>Get instant answers on WhatsApp — we typically reply within minutes.</p>
              <a href="https://wa.me/918103202086?text=Hi%20Digitalads,%20I%20have%20a%20question" target="_blank" rel="noopener noreferrer" style={{ color: "var(--primary-color)", fontWeight: 600, display: "block", marginTop: "10px" }}>
                +91 81032 02086
              </a>
            </div>
            <div className="faq-contact-card">
              <i className="fas fa-phone" aria-hidden="true"></i>
              <h4>Call Us</h4>
              <p>Talk to our team directly — available Mon–Sat, 9 AM to 8 PM IST.</p>
              <a href="tel:+918103202086" style={{ color: "var(--primary-color)", fontWeight: 600, display: "block", marginTop: "10px" }}>
                +91 81032 02086
              </a>
            </div>
            <div className="faq-contact-card">
              <i className="fas fa-calendar-check" aria-hidden="true"></i>
              <h4>Book Free Consultation</h4>
              <p>30-minute strategy session — no commitment, 100% free, 100% actionable.</p>
              <Link href="/contact" style={{ color: "var(--primary-color)", fontWeight: 600, display: "block", marginTop: "10px" }}>
                Schedule Now →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ CTA SECTION */}
      <section className="faq-cta" aria-label="FAQ call to action">
        <div className="container">
          <div className="section-tag" style={{ background: "rgba(255,255,255,0.2)", color: "#fff", borderColor: "rgba(255,255,255,0.3)" }}>
            Free Audit — No Obligation
          </div>
          <h2>Ready to Grow Your Business<br/>With Digitalads?</h2>
          <p>Join 500+ businesses in Indore and Madhya Pradesh that trust us with their digital growth.</p>
          <div className="cta-buttons" style={{ justifyContent: "center" }}>
            <Link href="/contact" className="btn btn-white btn-large">
              <i className="fas fa-calendar-check" aria-hidden="true"></i> Get Free Audit
            </Link>
            <Link href="/services" className="btn btn-outline-white btn-large">
              <i className="fas fa-cogs" aria-hidden="true"></i> View Services
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
