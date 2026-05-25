import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  alternates: {
    canonical: '/',
  },
};
import BelowTheFold from "@/components/home/BelowTheFold";

export default function Home() {
  return (
    <main>
      <div className="sr-only">
        Digitalads is a leading digital marketing company in Indore, Madhya
        Pradesh offering Meta Ads, Google Ads, Local SEO, GMB Optimization, AI
        Video Ads, WhatsApp Automation, Landing Pages and complete digital
        marketing services for clinics and coaching centers. Phone: +91 81032
        02086. Email: digitalads959@gmail.com. 5-star rated. 500+ clients. 350%
        avg ROI.
      </div>

      <section className="hero" id="home" aria-label="Hero section">
        <div className="hero-bg-animation" aria-hidden="true"></div>
        <div className="container">
          <div className="hero-content">
            <div className="hero-eyebrow animate-fade-up">
              <span className="dot" aria-hidden="true"></span>
              AI-First Digital Marketing Agency in Indore
            </div>
            <h1 className="hero-title animate-fade-up delay-1">
              Digital Marketing Agency in Indore<br />
              <span className="gradient-text">For Clinics &amp; Coaching.</span>
            </h1>
            <h2 className="hero-subtitle animate-fade-up delay-2" style={{ fontWeight: 600, color: '#fff', marginBottom: '12px' }}>
              We Don't Just Market. We Deliver Results.
            </h2>
            <p className="hero-subtitle animate-fade-up delay-2">
              Indore's trusted digital marketing company â€” Meta Ads, Google
              Ads, Local SEO, GMB Optimization &amp; AI Automation that generates
              real leads and maximizes ROI for clinics and coaching centers
              across Madhya Pradesh.
            </p>
            <div className="hero-cta animate-fade-up delay-3">
              <Link href="/contact" className="btn btn-primary btn-large">
                <i className="fas fa-calendar-check" aria-hidden="true"></i> Get
                Free Consultation
              </Link>
              <Link href="/services" className="btn btn-outline btn-large">
                <i className="fas fa-rocket" aria-hidden="true"></i> Explore
                Services
              </Link>
            </div>
            <div className="hero-trust animate-fade-up delay-3">
              <div className="trust-badges">
                <div className="badge">
                  <i className="fas fa-award" aria-hidden="true"></i>
                  <span>Google Partner Agency</span>
                </div>
                <div className="badge">
                  <i className="fas fa-star" aria-hidden="true"></i>
                  <span>5-Star Rated (47 Reviews)</span>
                </div>
                <div className="badge">
                  <i className="fas fa-robot" aria-hidden="true"></i>
                  <span>AI-Powered Campaigns</span>
                </div>
                <div className="badge">
                  <i className="fas fa-map-marker-alt" aria-hidden="true"></i>
                  <span>Based in Indore, MP</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="stats-bar" aria-label="Key statistics">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-item">
              <div className="stat-number">500+</div>
              <div className="stat-label">Clients Served</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">2500+</div>
              <div className="stat-label">Campaigns Executed</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">350%</div>
              <div className="stat-label">Average ROI Delivered</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">10M+</div>
              <div className="stat-label">Leads Generated</div>
            </div>
          </div>
        </div>
      </section>

      <BelowTheFold />
    </main>
  );
}
