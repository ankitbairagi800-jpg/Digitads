"use client";

import Link from "next/link";
import "./case-studies.css";
import { caseStudiesData } from "@/data/case-studies";

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
                    <h3><Link href={`/case-studies/${study.id}`} style={{ color: 'inherit', textDecoration: 'none' }}>{study.title}</Link></h3>
                    <p>{study.subtitle}</p>
                  </div>
                </div>
                <div className="case-card-body">
                  <div className="case-tags">
                    {study.tags.map((tag) => (
                      <span key={tag} className="case-tag">{tag}</span>
                    ))}
                  </div>
                  <div className="case-section" style={{ marginBottom: '16px' }}>
                    <p style={{ display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                      {study.problem}
                    </p>
                  </div>
                  <Link href={`/case-studies/${study.id}`} className="btn btn-outline" style={{ width: '100%', textAlign: 'center', display: 'block', marginTop: 'auto' }}>
                    Read Full Case Study <i className="fas fa-arrow-right" style={{ marginLeft: "6px" }}></i>
                  </Link>
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
