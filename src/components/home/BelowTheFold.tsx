"use client";

import { useState } from "react";
import Link from "next/link";
import Script from "next/script";
import Image from "next/image";
import HomeContactForm from "./HomeContactForm";

export default function BelowTheFold() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };
  return (
    <>
      <section className="services" id="services" aria-label="Our services">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">What We Do</span>
            <h2 className="section-title">
              Complete Digital Marketing Services in Indore
            </h2>
            <p className="section-subtitle">
              Data-driven campaigns and AI-powered strategies for clinics,
              coaching centers &amp; local businesses across Madhya Pradesh
            </p>
          </div>
          <div className="services-grid">
            <article className="service-card">
              <img src="https://images.unsplash.com/photo-1611262588024-d12430b98920?q=70&w=500&auto=format&fit=crop&fm=webp" alt="Best Meta Ads Services for Clinics in Indore by Digitalads" className="service-img" loading="lazy" width="500" height="333" decoding="async" />
              <h3 className="service-title">Meta Ads (Facebook &amp; Instagram)</h3>
              <p className="service-description">
                Hyper-targeted ad campaigns on Facebook and Instagram designed to
                bring high-quality patients and students — not just clicks.
              </p>
              <ul className="service-features">
                <li>
                  <i className="fas fa-check" aria-hidden="true"></i> Facebook &amp;
                  Instagram Campaigns
                </li>
                <li>
                  <i className="fas fa-check" aria-hidden="true"></i> Precision
                  Audience Targeting
                </li>
                <li>
                  <i className="fas fa-check" aria-hidden="true"></i> Retargeting &amp;
                  Lookalike Audiences
                </li>
                <li>
                  <i className="fas fa-check" aria-hidden="true"></i> Monthly
                  Performance Reports
                </li>
              </ul>
              <Link href="/services#meta-ads" className="service-link" aria-label="Learn more about Meta Ads">
                Learn More <i className="fas fa-arrow-right" aria-hidden="true"></i>
              </Link>
            </article>
            <article className="service-card">
              <img src="https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?q=70&w=500&auto=format&fit=crop&fm=webp" alt="Top Google Ads Agency for Coaching Centers in Indore - Digitalads" className="service-img" loading="lazy" width="500" height="333" decoding="async" />
              <h3 className="service-title">Google Ads (Search &amp; YouTube)</h3>
              <p className="service-description">
                Capture people actively searching for your services with
                intent-driven ads that convert browsers into booked appointments.
              </p>
              <ul className="service-features">
                <li>
                  <i className="fas fa-check" aria-hidden="true"></i> Google Search &amp;
                  Display Ads
                </li>
                <li>
                  <i className="fas fa-check" aria-hidden="true"></i> YouTube Ad
                  Campaigns
                </li>
                <li>
                  <i className="fas fa-check" aria-hidden="true"></i> Smart PPC
                  Management
                </li>
                <li>
                  <i className="fas fa-check" aria-hidden="true"></i> Conversion
                  Tracking Setup
                </li>
              </ul>
              <Link href="/services#google-ads" className="service-link" aria-label="Learn more about Google Ads">
                Learn More <i className="fas fa-arrow-right" aria-hidden="true"></i>
              </Link>
            </article>
            <article className="service-card featured">
              <span className="featured-badge">Most Popular</span>
              <img src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=70&w=500&auto=format&fit=crop&fm=webp" alt="GMB Optimization & Local SEO Services Indore" className="service-img" loading="lazy" width="500" height="333" decoding="async" />
              <h3 className="service-title">GMB Optimization &amp; Local SEO</h3>
              <p className="service-description">
                Rank your clinic or coaching center at the top of Google Maps and
                local search — more walk-ins, more calls, more patients every
                single day.
              </p>
              <ul className="service-features">
                <li>
                  <i className="fas fa-check" aria-hidden="true"></i> GMB Profile
                  Optimization
                </li>
                <li>
                  <i className="fas fa-check" aria-hidden="true"></i> Google Maps Top
                  Ranking
                </li>
                <li>
                  <i className="fas fa-check" aria-hidden="true"></i> Review Management
                  Strategy
                </li>
                <li>
                  <i className="fas fa-check" aria-hidden="true"></i> Local Pack
                  Domination
                </li>
              </ul>
              <Link href="/services#gmb-seo" className="service-link" aria-label="Learn more about GMB and Local SEO">
                Learn More <i className="fas fa-arrow-right" aria-hidden="true"></i>
              </Link>
            </article>
            <article className="service-card">
              <img src="https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?q=70&w=500&auto=format&fit=crop&fm=webp" alt="AI Video Ads Creation for Instagram Reels & YouTube Shorts Indore" className="service-img" loading="lazy" width="500" height="333" decoding="async" />
              <h3 className="service-title">AI Video Ads (Reels &amp; Shorts)</h3>
              <p className="service-description">
                Scroll-stopping AI-generated video ads for Instagram Reels and
                YouTube Shorts that build brand trust and drive instant action.
              </p>
              <ul className="service-features">
                <li>
                  <i className="fas fa-check" aria-hidden="true"></i> AI Script &amp;
                  Voiceover Generation
                </li>
                <li>
                  <i className="fas fa-check" aria-hidden="true"></i> Professional Reel
                  Editing
                </li>
                <li>
                  <i className="fas fa-check" aria-hidden="true"></i> Subtitles &amp;
                  Motion Graphics
                </li>
                <li>
                  <i className="fas fa-check" aria-hidden="true"></i> Ready-to-Publish
                  Format
                </li>
              </ul>
              <Link href="/services#ai-video" className="service-link" aria-label="Learn more about AI Video Ads">
                Learn More <i className="fas fa-arrow-right" aria-hidden="true"></i>
              </Link>
            </article>
            <article className="service-card">
              <img src="https://images.unsplash.com/photo-1614680376593-902f74cf0d41?q=70&w=500&auto=format&fit=crop&fm=webp" alt="WhatsApp CRM Automation for Lead Generation Indore" className="service-img" loading="lazy" width="500" height="333" decoding="async" />
              <h3 className="service-title">WhatsApp &amp; CRM Automation</h3>
              <p className="service-description">
                Never lose a lead again. 24/7 automated follow-ups via WhatsApp,
                Email &amp; SMS so every inquiry converts into a booked appointment.
              </p>
              <ul className="service-features">
                <li>
                  <i className="fas fa-check" aria-hidden="true"></i> Instant WhatsApp
                  Auto-Reply
                </li>
                <li>
                  <i className="fas fa-check" aria-hidden="true"></i> Appointment
                  Reminder Flows
                </li>
                <li>
                  <i className="fas fa-check" aria-hidden="true"></i> n8n / Make.com
                  Integration
                </li>
                <li>
                  <i className="fas fa-check" aria-hidden="true"></i> CRM Lead Tracking
                </li>
              </ul>
              <Link href="/services#automation" className="service-link" aria-label="Learn more about WhatsApp and CRM Automation">
                Learn More <i className="fas fa-arrow-right" aria-hidden="true"></i>
              </Link>
            </article>
            <article className="service-card">
              <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=70&w=500&auto=format&fit=crop&fm=webp" alt="High Converting Landing Page Design Services Indore" className="service-img" loading="lazy" width="500" height="333" decoding="async" />
              <h3 className="service-title">Landing Pages &amp; Website Design</h3>
              <p className="service-description">
                High-converting, lightning-fast websites and landing pages that
                build credibility and turn every ad click into a real business
                inquiry.
              </p>
              <ul className="service-features">
                <li>
                  <i className="fas fa-check" aria-hidden="true"></i> Mobile-First
                  Responsive Design
                </li>
                <li>
                  <i className="fas fa-check" aria-hidden="true"></i>{" "}
                  Conversion-Optimized Layout
                </li>
                <li>
                  <i className="fas fa-check" aria-hidden="true"></i> SEO-Ready
                  Structure
                </li>
                <li>
                  <i className="fas fa-check" aria-hidden="true"></i> Fast Core Web
                  Vitals
                </li>
              </ul>
              <Link href="/services#landing-pages" className="service-link" aria-label="Learn more about Landing Pages and Website Design">
                Learn More <i className="fas fa-arrow-right" aria-hidden="true"></i>
              </Link>
            </article>
          </div>
          <div style={{ textAlign: "center", marginTop: "48px" }}>
            <Link href="/services" className="btn btn-outline-orange btn-large">
              <i className="fas fa-th" aria-hidden="true"></i> View All Services &amp;
              Pricing
            </Link>
          </div>
        </div>
      </section>

      <section className="why-us" id="why-us" aria-label="Why choose Digitalads">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Why Digitalads</span>
            <h2 className="section-title">
              Why 500+ Businesses in Indore Trust Us
            </h2>
            <p className="section-subtitle">
              We combine AI tools, deep local market knowledge and
              performance-first thinking to grow your business faster
            </p>
          </div>
          <div className="why-grid">
            <div className="why-card">
              <img src="https://images.unsplash.com/photo-1677442136019-21780ecad995?q=70&w=500&auto=format&fit=crop&fm=webp" alt="AI-First Digital Marketing Strategies in Indore" className="why-img" loading="lazy" width="500" height="333" decoding="async" />
              <h3>AI-First Approach</h3>
              <p>
                We leverage ChatGPT, ElevenLabs, CapCut AI, and n8n automations
                to deliver campaigns faster, smarter, and at lower cost than
                traditional agencies.
              </p>
            </div>
            <div className="why-card">
              <img src="https://images.unsplash.com/photo-1519999482648-25049ddd37b1?q=70&w=500&auto=format&fit=crop&fm=webp" alt="Deep Local Market Knowledge of Indore Businesses" className="why-img" loading="lazy" width="500" height="333" decoding="async" />
              <h3>Deep Local Market Knowledge</h3>
              <p>
                We understand Indore's neighborhoods, search behavior, and local
                competition. This hyper-local insight gives your campaigns a
                decisive edge.
              </p>
            </div>
            <div className="why-card">
              <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=70&w=500&auto=format&fit=crop&fm=webp" alt="Results-Only Digital Marketing Agency in Madhya Pradesh" className="why-img" loading="lazy" width="500" height="333" decoding="async" />
              <h3>Results-Only Focus</h3>
              <p>
                We track every rupee spent. No vanity metrics — only real leads,
                real appointments, and real revenue growth you can measure
                monthly.
              </p>
            </div>
            <div className="why-card">
              <img src="https://images.unsplash.com/photo-1516549655169-df83a0774514?q=70&w=500&auto=format&fit=crop&fm=webp" alt="Specialist Digital Marketing for Healthcare & Clinics Indore" className="why-img" loading="lazy" width="500" height="333" decoding="async" />
              <h3>Clinic &amp; Coaching Specialists</h3>
              <p>
                We don't serve everyone. Our deep specialization in healthcare
                and education means you get strategies built for your exact
                industry challenges.
              </p>
            </div>
            <div className="why-card">
              <img src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=70&w=500&auto=format&fit=crop&fm=webp" alt="Fast Onboarding & Execution Digital Ads Services" className="why-img" loading="lazy" width="500" height="333" decoding="async" />
              <h3>Fast Onboarding &amp; Execution</h3>
              <p>
                Campaigns go live within 48 hours of onboarding. No long waiting
                periods, no bureaucracy — just fast, decisive action from day
                one.
              </p>
            </div>
            <div className="why-card">
              <img src="https://images.unsplash.com/photo-1543286386-713bdd548da4?q=70&w=500&auto=format&fit=crop&fm=webp" alt="Transparent Monthly Reporting Digital Marketing" className="why-img" loading="lazy" width="500" height="333" decoding="async" />
              <h3>Transparent Monthly Reporting</h3>
              <p>
                Detailed reports every month. You always know exactly how your
                budget is performing, which campaigns are winning, and what's
                next.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="process" id="process" aria-label="Our process">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">How We Work</span>
            <h2 className="section-title">Our Proven 4-Step Growth Process</h2>
            <p className="section-subtitle">
              A systematic approach that transforms your digital presence into a
              consistent lead-generating machine
            </p>
          </div>
          <div className="process-timeline">
            <div className="process-step">
              <div className="step-number" aria-hidden="true">
                1
              </div>
              <div className="step-content">
                <h3>Free Audit &amp; Discovery</h3>
                <p>
                  We start with a comprehensive audit of your current digital
                  presence — website, GMB profile, ads history, and competitor
                  landscape. This reveals exactly where you're losing leads and
                  money.
                </p>
              </div>
            </div>
            <div className="process-step">
              <div className="step-number" aria-hidden="true">
                2
              </div>
              <div className="step-content">
                <h3>Custom Strategy &amp; Roadmap</h3>
                <p>
                  Based on your goals, budget, and industry, we build a 90-day
                  data-driven marketing roadmap. Every channel, every rupee,
                  every campaign is planned before we spend a single paisa.
                </p>
              </div>
            </div>
            <div className="process-step">
              <div className="step-number" aria-hidden="true">
                3
              </div>
              <div className="step-content">
                <h3>Launch &amp; AI-Powered Execution</h3>
                <p>
                  Campaigns go live within 48 hours. We use AI tools to create
                  content, automate follow-ups, and optimize ads in real-time —
                  giving you an unfair advantage over competitors.
                </p>
              </div>
            </div>
            <div className="process-step">
              <div className="step-number" aria-hidden="true">
                4
              </div>
              <div className="step-content">
                <h3>Optimize, Scale &amp; Report</h3>
                <p>
                  We monitor performance daily, optimize weekly, and scale what's
                  working. Monthly strategy calls and transparent reports keep
                  you fully informed and confident in your investment.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="industries" id="industries" aria-label="Industries we serve">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Industries We Serve</span>
            <h2 className="section-title">Specialists in High-Impact Industries</h2>
            <p className="section-subtitle">
              Deep domain expertise means strategies built for your industry —
              not generic templates
            </p>
          </div>
          <div className="industries-grid">
            <div className="industry-card">
              <div className="industry-icon">
                <i className="fas fa-stethoscope" aria-hidden="true"></i>
              </div>
              <h3>Healthcare &amp; Clinics</h3>
              <p>
                Doctors, dentists, skin clinics, hair clinics, physiotherapy
                centers — we help healthcare providers attract more patients
                digitally.
              </p>
            </div>
            <div className="industry-card">
              <div className="industry-icon">
                <i className="fas fa-graduation-cap" aria-hidden="true"></i>
              </div>
              <h3>Coaching &amp; Education</h3>
              <p>
                IIT/NEET coaching, skill development centers, spoken English,
                competitive exam institutes — we fill your batches with qualified
                students.
              </p>
            </div>
            
            <div className="industry-card">
              <div className="industry-icon">
                <i className="fas fa-home" aria-hidden="true"></i>
              </div>
              <h3>Real Estate</h3>
              <p>
                Builders, brokers, and property developers in Indore — targeted
                ads that generate serious buyer inquiries, not time-wasters.
              </p>
            </div>
            <div className="industry-card">
              <div className="industry-icon">
                <i className="fas fa-store" aria-hidden="true"></i>
              </div>
              <h3>Local Retail &amp; Services</h3>
              <p>
                Restaurants, salons, boutiques, and service businesses —
                hyper-local campaigns that drive foot traffic and walk-ins from
                your target area.
              </p>
            </div>
            
          </div>
        </div>
      </section>

      <section className="gmb-review-section" aria-label="Google Reviews" style={{ padding: '60px 0', textAlign: 'center', backgroundColor: '#f8fafc' }}>
        <div className="container">
          <div style={{ display: 'inline-block', background: '#fff', padding: '30px 40px', borderRadius: '16px', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)', border: '1px solid #e2e8f0', maxWidth: '600px', width: '100%' }}>
            <h3 style={{ fontSize: '24px', marginBottom: '8px', color: '#0f172a', fontWeight: '700' }}>Happy with our services?</h3>
            <p style={{ color: '#475569', marginBottom: '24px', fontSize: '16px' }}>Your feedback helps us grow and improve. Please take a moment to rate us on Google Maps.</p>
            <a
              href="https://share.google/rY09dbhtN9EBHpXgy"
              target="_blank"
              rel="noopener noreferrer"
              className="google-review-btn"
            >
              <img src="https://www.google.com/images/branding/googleg/1x/googleg_standard_color_128dp.png" alt="Google logo" style={{ width: '28px', height: '28px' }} />
              <div style={{ textAlign: 'left' }}>
                <div style={{ fontSize: '16px', fontWeight: '600', color: '#202124' }}>Rate Us on Google</div>
                <div style={{ fontSize: '13px', color: '#70757a' }}>It only takes 30 seconds!</div>
              </div>
              <div style={{ display: 'flex', color: '#fbbc04', fontSize: '16px', marginLeft: '8px', gap: '2px' }}>
                <i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i>
              </div>
            </a>
          </div>
        </div>
      </section>

      <section className="testimonials" aria-label="Client testimonials">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Client Results</span>
            <h2 className="section-title">What Our Clients Say About Us</h2>
            <p className="section-subtitle">
              Real results from real businesses in Indore — not made-up numbers
            </p>
          </div>
          <div className="testimonials-grid">
            <article className="testimonial-card">
              <div className="testimonial-rating" role="img" aria-label="5 stars">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
              </div>
              <blockquote className="testimonial-text">
                "Digitalads completely transformed our clinic's online presence.
                We went from 5-6 inquiries per week to 30+ appointments booked
                through WhatsApp. The ROI has been incredible."
              </blockquote>
              <div className="testimonial-author">
                <div className="author-avatar">
                  <i className="fas fa-user-md" aria-hidden="true"></i>
                </div>
                <div className="author-info">
                  <h3>Dr. Rajesh Sharma</h3>
                  <p>Skin &amp; Hair Clinic, Indore</p>
                </div>
              </div>
            </article>
            <article className="testimonial-card">
              <div className="testimonial-rating" role="img" aria-label="5 stars">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
              </div>
              <blockquote className="testimonial-text">
                "We were spending on ads but not getting results. Ankit
                completely restructured our Google Ads and within 45 days we had
                80 new student enrollments. Best investment we've made."
              </blockquote>
              <div className="testimonial-author">
                <div className="author-avatar">
                  <i className="fas fa-chalkboard-teacher" aria-hidden="true"></i>
                </div>
                <div className="author-info">
                  <h3>Priya Verma</h3>
                  <p>Director, Vision IIT Coaching, Indore</p>
                </div>
              </div>
            </article>
            <article className="testimonial-card">
              <div className="testimonial-rating" role="img" aria-label="5 stars">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
              </div>
              <blockquote className="testimonial-text">
                "Our GMB ranking went from page 3 to top 3 in Indore within 60
                days. Walk-ins increased by 200%. The WhatsApp automation alone
                saves us 3 hours every day."
              </blockquote>
              <div className="testimonial-author">
                <div className="author-avatar">
                  <i className="fas fa-user" aria-hidden="true"></i>
                </div>
                <div className="author-info">
                  <h3>Suresh Malhotra</h3>
                  <p>Owner, FitLife Gym, Vijay Nagar, Indore</p>
                </div>
              </div>
            </article>
          </div>
          <div style={{ textAlign: "center", marginTop: "48px" }}>
            <Link
              href="/case-studies"
              className="btn btn-outline-orange btn-large"
            >
              <i className="fas fa-chart-bar" aria-hidden="true"></i> View
              Detailed Case Studies
            </Link>
          </div>
        </div>
      </section>

      <section className="faq-section" id="faq" aria-label="Frequently asked questions">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">FAQ</span>
            <h2 className="section-title">Frequently Asked Questions</h2>
            <p className="section-subtitle">
              Quick answers to what most businesses in Indore ask us first
            </p>
          </div>
          <div className="faq-grid">
            <div className={`faq-item ${openFaq === 0 ? "open" : ""}`}>
              <div
                className="faq-question"
                role="button"
                tabIndex={0}
                aria-expanded={openFaq === 0}
                onClick={() => toggleFaq(0)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    toggleFaq(0);
                  }
                }}
              >
                Which is the best digital marketing agency in Indore?
                <i className="fas fa-chevron-down" aria-hidden="true"></i>
              </div>
              <div className="faq-answer">
                Digitalads is one of the top-rated digital marketing agencies in
                Indore, MP. With 500+ clients, 2500+ campaigns run, and an
                average ROI of 350%, we specialize in Meta Ads, Google Ads, Local
                SEO, GMB Optimization, AI Video Ads, and WhatsApp Automation —
                especially for healthcare clinics and coaching centers.
              </div>
            </div>
            <div className={`faq-item ${openFaq === 1 ? "open" : ""}`}>
              <div
                className="faq-question"
                role="button"
                tabIndex={0}
                aria-expanded={openFaq === 1}
                onClick={() => toggleFaq(1)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    toggleFaq(1);
                  }
                }}
              >
                How long does it take to see results from digital marketing?
                <i className="fas fa-chevron-down" aria-hidden="true"></i>
              </div>
              <div className="faq-answer">
                With paid ads (Google Ads, Meta Ads), you'll see measurable
                results within the first 30 days. For Local SEO and GMB
                optimization, clients typically see significant ranking
                improvements within 3–6 months. We set realistic timelines from
                day one.
              </div>
            </div>
            <div className={`faq-item ${openFaq === 2 ? "open" : ""}`}>
              <div
                className="faq-question"
                role="button"
                tabIndex={0}
                aria-expanded={openFaq === 2}
                onClick={() => toggleFaq(2)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    toggleFaq(2);
                  }
                }}
              >
                How much does digital marketing cost in Indore?
                <i className="fas fa-chevron-down" aria-hidden="true"></i>
              </div>
              <div className="faq-answer">
                Our services start from ₹8,000/month and scale based on your
                goals and channels. We provide a free marketing audit first, then
                recommend only what makes financial sense for your business. No
                hidden fees, no long lock-in contracts initially.
              </div>
            </div>
            <div className={`faq-item ${openFaq === 3 ? "open" : ""}`}>
              <div
                className="faq-question"
                role="button"
                tabIndex={0}
                aria-expanded={openFaq === 3}
                onClick={() => toggleFaq(3)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    toggleFaq(3);
                  }
                }}
              >
                Do you work with healthcare clinics and doctors?
                <i className="fas fa-chevron-down" aria-hidden="true"></i>
              </div>
              <div className="faq-answer">
                Yes — healthcare is our primary specialty. We create compliant,
                high-converting campaigns for skin clinics, hair clinics, dental
                practices, physiotherapy centers, and multi-specialty hospitals.
                We understand the trust-building required in medical marketing.
              </div>
            </div>
            <div className={`faq-item ${openFaq === 4 ? "open" : ""}`}>
              <div
                className="faq-question"
                role="button"
                tabIndex={0}
                aria-expanded={openFaq === 4}
                onClick={() => toggleFaq(4)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    toggleFaq(4);
                  }
                }}
              >
                What is GMB optimization and why does my Indore business need it?
                <i className="fas fa-chevron-down" aria-hidden="true"></i>
              </div>
              <div className="faq-answer">
                GMB (Google My Business) optimization improves your Google Maps
                listing so your business appears at the top when local customers
                in Indore search for your service. Over 60% of local searches
                result in a visit or call within 24 hours — it's one of the
                highest-ROI investments for any local business.
              </div>
            </div>
          </div>
          <div style={{ textAlign: "center", marginTop: "36px" }}>
            <Link href="/faq" className="btn btn-outline-orange">
              View All FAQs <i className="fas fa-arrow-right" aria-hidden="true"></i>
            </Link>
          </div>
        </div>
      </section>

      <section className="cta-banner" aria-label="Call to action">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Scale Your Business in Indore?</h2>
            <p>
              Get a free marketing audit and discover untapped growth
              opportunities for your clinic or coaching center today.
            </p>
            <div className="cta-buttons">
              <Link href="/contact" className="btn btn-white btn-large">
                <i className="fas fa-calendar-check" aria-hidden="true"></i> Book Free
                Consultation
              </Link>
              <a
                href="https://wa.me/918103202086?text=Hi%20Digitalads,%20I%20want%20a%20free%20marketing%20audit"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline-white btn-large"
              >
                <i className="fa-brands fa-whatsapp" aria-hidden="true"></i> WhatsApp Now
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="contact" id="contact" aria-label="Contact us">
        <div className="container">
          <div className="contact-wrapper">
            <div className="contact-info">
              <h2>Let's Grow Together</h2>
              <p>
                Tell us about your business and we'll get back to you within 24
                hours with a custom growth plan.
              </p>
              <div className="contact-details">
                <div className="contact-item">
                  <div className="contact-icon">
                    <i className="fas fa-phone" aria-hidden="true"></i>
                  </div>
                  <div className="contact-text">
                    <h3>Phone</h3>
                    <a href="tel:+918103202086">+91 81032 02086</a>
                  </div>
                </div>
                <div className="contact-item">
                  <div className="contact-icon">
                    <i className="fa-brands fa-whatsapp" aria-hidden="true"></i>
                  </div>
                  <div className="contact-text">
                    <h3>WhatsApp</h3>
                    <a
                      href="https://wa.me/918103202086?text=Hi%20Digitalads,%20I%20want%20a%20free%20marketing%20consultation."
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Chat with us instantly
                    </a>
                  </div>
                </div>
                <div className="contact-item">
                  <div className="contact-icon">
                    <i className="fas fa-envelope" aria-hidden="true"></i>
                  </div>
                  <div className="contact-text">
                    <h3>Email</h3>
                    <a href="mailto:digitalads959@gmail.com">
                      digitalads959@gmail.com
                    </a>
                  </div>
                </div>
                <div className="contact-item">
                  <div className="contact-icon">
                    <i className="fas fa-map-marker-alt" aria-hidden="true"></i>
                  </div>
                  <div className="contact-text">
                    <h3>Location</h3>
                    <p>Indore, Madhya Pradesh, India</p>
                  </div>
                </div>
              </div>
              <div className="social-links" aria-label="Social media links">
                <a
                  href="https://www.instagram.com/thedigitalads.in?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                  aria-label="Instagram"
                >
                  <i className="fa-brands fa-instagram" aria-hidden="true"></i>
                </a>
                <a
                  href="https://www.linkedin.com/company/digitaladsailead/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                  aria-label="LinkedIn"
                >
                  <i className="fa-brands fa-linkedin-in" aria-hidden="true"></i>
                </a>
                <a
                  href="https://youtube.com/@digitalads.marketing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                  aria-label="YouTube"
                >
                  <i className="fa-brands fa-youtube" aria-hidden="true"></i>
                </a>
                <a
                  href="https://wa.me/918103202086?text=Hi%20Digitalads,%20I%20want%20a%20free%20marketing%20consultation."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                  aria-label="WhatsApp"
                >
                  <i className="fa-brands fa-whatsapp" aria-hidden="true"></i>
                </a>
              </div>
            </div>
            <div className="contact-form-wrapper">
              <HomeContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
