import Link from "next/link";
import { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  alternates: {
    canonical: '/',
  },
};
import BelowTheFold from "@/components/home/BelowTheFold";

export default function Home() {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Digitalads",
    "image": "https://thedigitalads.in/logo.jpg",
    "description": "Digitalads is an AI-first digital marketing agency in Indore. We specialize in Meta Ads, Google Ads, Local SEO, and AI automation for clinics and coaching centers.",
    "@id": "https://thedigitalads.in",
    "url": "https://thedigitalads.in",
    "telephone": "+91-81032-02086",
    "email": "digitalads959@gmail.com",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Indore",
      "addressRegion": "Madhya Pradesh",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 22.7196,
      "longitude": 75.8577
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
      ],
      "opens": "09:00",
      "closes": "19:00"
    },
    "sameAs": [
      "https://www.linkedin.com/in/ankitbairagi"
    ]
  };

  return (
    <main>
      <Script
        id="home-local-business-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
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
              Indore's trusted digital marketing company — Meta Ads, Google
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


      <BelowTheFold />
    </main>
  );
}
