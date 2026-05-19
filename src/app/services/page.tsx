import type { Metadata } from "next";
import Link from "next/link";
import "./services.css";

export const metadata: Metadata = {
  title: "Digital Marketing Services in Indore | Meta Ads, Google Ads, SEO, GMB | Digitalads",
  description: "Explore Digitalads complete digital marketing services in Indore — Meta Ads, Google Ads, Local SEO, GMB Optimization, AI Video Ads, WhatsApp Automation, Landing Pages and Branding.",
  alternates: {
    canonical: "https://thedigitalads.in/services",
  }
};

export default function ServicesPage() {
  return (
    <main style={{ background: "#ffffff", color: "#1e293b", paddingTop: "80px" }}>
      
      {/* Hero section */}
      <section className="page-hero" aria-label="Services page hero">
        <div className="container">
          <div className="page-hero-inner">
            <nav aria-label="Breadcrumb" className="breadcrumb">
              <Link href="/">Home</Link>
              <span className="breadcrumb-sep">›</span>
              <span className="breadcrumb-current">Services</span>
            </nav>
            <h1 style={{ color: "#0f172a" }}>Digital Marketing Services<br /><span className="gradient-text">Built for Real Results</span></h1>
            <p style={{ color: "#475569" }}>Every service we offer is designed with one goal — generating qualified leads and measurable ROI for your business in Indore and across Madhya Pradesh.</p>
          </div>
        </div>
      </section>

      {/* META ADS */}
      <section className="service-detail" id="meta-ads" aria-label="Meta Ads service">
        <div className="container">
          <div className="service-detail-inner">
            <div className="service-detail-content">
              <div className="pricing-tag">
                <i className="fas fa-tag" aria-hidden="true"></i> Starting from ₹12,000/month
              </div>
              <span className="pricing-note">* Final price depends on your goals, ad budget &amp; scope of work. Discuss with us.</span>
              <h2>Meta Ads — Facebook &amp; Instagram Advertising</h2>
              <p>We design and manage high-converting Meta Ad campaigns that target your ideal patients or students with surgical precision — not just broad demographics. From creative to conversion, we handle everything.</p>
              
              <ul className="service-detail-list">
                <li><i className="fas fa-check" aria-hidden="true"></i> Campaign strategy and audience research</li>
                <li><i className="fas fa-check" aria-hidden="true"></i> Professional ad creative design (static + video)</li>
                <li><i className="fas fa-check" aria-hidden="true"></i> Facebook &amp; Instagram campaign setup</li>
                <li><i className="fas fa-check" aria-hidden="true"></i> Lookalike &amp; retargeting audiences</li>
                <li><i className="fas fa-check" aria-hidden="true"></i> Lead form and landing page integration</li>
                <li><i className="fas fa-check" aria-hidden="true"></i> Daily monitoring &amp; weekly optimization</li>
                <li><i className="fas fa-check" aria-hidden="true"></i> Monthly performance reports with insights</li>
              </ul>
              
              <Link href="/contact" className="btn btn-primary">
                <i className="fas fa-calendar-check" aria-hidden="true"></i> Get Meta Ads Consultation
              </Link>
            </div>
            
            <div className="service-img-wrap" aria-hidden="true">
              <img src="/images/services/services-meta-ads.png" alt="Meta Ads Performance Dashboard" className="service-real-img" loading="lazy" />
            </div>
          </div>
        </div>
      </section>

      {/* GOOGLE ADS */}
      <section className="service-detail" id="google-ads" aria-label="Google Ads service">
        <div className="container">
          <div className="service-detail-inner reverse">
            <div className="service-detail-content">
              <div className="pricing-tag">
                <i className="fas fa-tag" aria-hidden="true"></i> Starting from ₹12,000/month
              </div>
              <span className="pricing-note">* Final price depends on keywords, competition &amp; ad budget. Let's discuss.</span>
              <h2>Google Ads — Search &amp; YouTube Campaigns</h2>
              <p>When someone in Indore searches "best skin clinic near me" — your ad appears first. We capture high-intent traffic that converts into appointments faster than any other channel.</p>
              
              <ul className="service-detail-list">
                <li><i className="fas fa-check" aria-hidden="true"></i> Keyword research and competitor analysis</li>
                <li><i className="fas fa-check" aria-hidden="true"></i> Google Search campaign setup and optimization</li>
                <li><i className="fas fa-check" aria-hidden="true"></i> YouTube ad campaigns (in-stream &amp; shorts)</li>
                <li><i className="fas fa-check" aria-hidden="true"></i> Display and remarketing campaigns</li>
                <li><i className="fas fa-check" aria-hidden="true"></i> Conversion tracking with Google Analytics 4</li>
                <li><i className="fas fa-check" aria-hidden="true"></i> Smart bidding and Quality Score optimization</li>
                <li><i className="fas fa-check" aria-hidden="true"></i> Monthly detailed performance dashboard</li>
              </ul>
              
              <Link href="/contact" className="btn btn-primary">
                <i className="fas fa-calendar-check" aria-hidden="true"></i> Get Google Ads Consultation
              </Link>
            </div>
            
            <div className="service-img-wrap" aria-hidden="true">
              <img src="/images/services/services-google-ads.png" alt="Google Search Ads Dashboard" className="service-real-img" loading="lazy" />
            </div>
          </div>
        </div>
      </section>

      {/* GMB + LOCAL SEO */}
      <section className="service-detail" id="gmb-seo" aria-label="GMB and Local SEO service">
        <div className="container">
          <div className="service-detail-inner">
            <div className="service-detail-content">
              <div className="pricing-tag">
                <i className="fas fa-tag" aria-hidden="true"></i> Starting from ₹8,000/month
              </div>
              <span className="pricing-note">* Depends on business type, competition &amp; number of locations.</span>
              <h2>GMB Optimization &amp; Local SEO Indore</h2>
              <p>When locals search for services in Indore, they see the Google Maps "Local Pack" first. We get your business into that coveted top 3 — more walk-ins, more calls, more business from people already searching for what you offer.</p>
              
              <ul className="service-detail-list">
                <li><i className="fas fa-check" aria-hidden="true"></i> Complete GMB profile audit and optimization</li>
                <li><i className="fas fa-check" aria-hidden="true"></i> Google Maps ranking strategy</li>
                <li><i className="fas fa-check" aria-hidden="true"></i> Review generation and reputation management</li>
                <li><i className="fas fa-check" aria-hidden="true"></i> Local keyword optimization (Indore + MP)</li>
                <li><i className="fas fa-check" aria-hidden="true"></i> Citation building and directory listings</li>
                <li><i className="fas fa-check" aria-hidden="true"></i> On-page local SEO for your website</li>
                <li><i className="fas fa-check" aria-hidden="true"></i> Monthly ranking progress reports</li>
              </ul>
              
              <Link href="/contact" className="btn btn-primary">
                <i className="fas fa-calendar-check" aria-hidden="true"></i> Get Local SEO Consultation
              </Link>
            </div>
            
            <div className="service-img-wrap" aria-hidden="true">
              <img src="/images/services/services-local-seo.png" alt="Google Maps and Local SEO for Indore businesses" className="service-real-img" loading="lazy" />
            </div>
          </div>
        </div>
      </section>

      {/* AI VIDEO ADS */}
      <section className="service-detail" id="ai-video" aria-label="AI Video Ads service">
        <div className="container">
          <div className="service-detail-inner reverse">
            <div className="service-detail-content">
              <div className="pricing-tag">
                <i className="fas fa-tag" aria-hidden="true"></i> Starting from ₹10,000/month (4 videos)
              </div>
              <span className="pricing-note">* Price varies based on number of videos, complexity &amp; AI tools used.</span>
              <h2>AI Video Ads — Reels &amp; YouTube Shorts</h2>
              <p>We use AI tools like CapCut AI and ElevenLabs to create professional, scroll-stopping video ads at a fraction of traditional production costs.</p>
              
              <ul className="service-detail-list">
                <li><i className="fas fa-check" aria-hidden="true"></i> AI-generated scripts and voiceovers (ElevenLabs)</li>
                <li><i className="fas fa-check" aria-hidden="true"></i> Professional Reel editing with CapCut AI</li>
                <li><i className="fas fa-check" aria-hidden="true"></i> Auto-subtitles, transitions and motion graphics</li>
                <li><i className="fas fa-check" aria-hidden="true"></i> Brand-consistent styling and colors</li>
                <li><i className="fas fa-check" aria-hidden="true"></i> Optimized for Instagram Reels and YouTube Shorts</li>
                <li><i className="fas fa-check" aria-hidden="true"></i> 4 to 8 videos per month depending on plan</li>
                <li><i className="fas fa-check" aria-hidden="true"></i> Ready-to-publish with posting schedule</li>
              </ul>
              
              <Link href="/contact" className="btn btn-primary">
                <i className="fas fa-calendar-check" aria-hidden="true"></i> Get AI Video Consultation
              </Link>
            </div>
            
            <div className="service-img-wrap" aria-hidden="true">
              <img src="/images/services/services-ai-video.png" alt="AI Video Editing Setup" className="service-real-img" loading="lazy" />
            </div>
          </div>
        </div>
      </section>

      {/* WHATSAPP AUTOMATION */}
      <section className="service-detail" id="automation" aria-label="WhatsApp Automation service">
        <div className="container">
          <div className="service-detail-inner">
            <div className="service-detail-content">
              <div className="pricing-tag">
                <i className="fas fa-tag" aria-hidden="true"></i> One-time setup ₹15,000 – ₹40,000
              </div>
              <span className="pricing-note">* Depends on number of workflows, integrations &amp; automation complexity.</span>
              <h2>WhatsApp &amp; CRM Automation</h2>
              <p>Most businesses lose 60–70% of leads because they follow up too late. We build automated workflows using n8n and Make.com that respond instantly — 24/7 — turning inquiries into booked appointments.</p>
              
              <ul className="service-detail-list">
                <li><i className="fas fa-check" aria-hidden="true"></i> Instant WhatsApp auto-reply to new leads</li>
                <li><i className="fas fa-check" aria-hidden="true"></i> Appointment booking reminder flows</li>
                <li><i className="fas fa-check" aria-hidden="true"></i> Email and SMS drip sequences</li>
                <li><i className="fas fa-check" aria-hidden="true"></i> CRM lead tracking and pipeline setup</li>
                <li><i className="fas fa-check" aria-hidden="true"></i> n8n / Make.com workflow automation</li>
                <li><i className="fas fa-check" aria-hidden="true"></i> Integration with Facebook Lead Ads &amp; Google Forms</li>
                <li><i className="fas fa-check" aria-hidden="true"></i> No lead left behind — Consistent follow-up setup</li>
              </ul>
              
              <Link href="/contact" className="btn btn-primary">
                <i className="fas fa-calendar-check" aria-hidden="true"></i> Get Automation Consultation
              </Link>
            </div>
            
            <div className="service-img-wrap" aria-hidden="true">
              <img src="/images/services/services-whatsapp-auto.png" alt="WhatsApp CRM Automation Dashboard" className="service-real-img" loading="lazy" />
            </div>
          </div>
        </div>
      </section>

      {/* LANDING PAGES */}
      <section className="service-detail" id="landing-pages" aria-label="Landing Pages service">
        <div className="container">
          <div className="service-detail-inner reverse">
            <div className="service-detail-content">
              <div className="pricing-tag">
                <i className="fas fa-tag" aria-hidden="true"></i> Starting from ₹8,000 (one-time)
              </div>
              <span className="pricing-note">* Final price depends on pages, design complexity &amp; features needed.</span>
              <h2>High-Converting Landing Pages &amp; Websites</h2>
              <p>Your ad campaign is only as good as the page people land on. We build fast, mobile-optimized, conversion-focused landing pages that turn ad clicks into real inquiries.</p>
              
              <ul className="service-detail-list">
                <li><i className="fas fa-check" aria-hidden="true"></i> Mobile-first, fully responsive design</li>
                <li><i className="fas fa-check" aria-hidden="true"></i> Conversion-optimized layout and copywriting</li>
                <li><i className="fas fa-check" aria-hidden="true"></i> Fast Core Web Vitals and page speed</li>
                <li><i className="fas fa-check" aria-hidden="true"></i> WhatsApp click-to-chat integration</li>
                <li><i className="fas fa-check" aria-hidden="true"></i> Lead form with CRM/WhatsApp automation</li>
                <li><i className="fas fa-check" aria-hidden="true"></i> SEO-ready structure and meta tags</li>
                <li><i className="fas fa-check" aria-hidden="true"></i> A/B testing support</li>
              </ul>
              
              <Link href="/contact" className="btn btn-primary">
                <i className="fas fa-calendar-check" aria-hidden="true"></i> Get Landing Page Quote
              </Link>
            </div>
            
            <div className="service-img-wrap" aria-hidden="true">
              <img src="/images/services/services-landing-pages.png" alt="High Converting Landing Page Design" className="service-real-img" loading="lazy" />
            </div>
          </div>
        </div>
      </section>

      {/* BRANDING */}
      <section className="service-detail" id="branding" aria-label="Branding service">
        <div className="container">
          <div className="service-detail-inner">
            <div className="service-detail-content">
              <div className="pricing-tag">
                <i className="fas fa-tag" aria-hidden="true"></i> Logo from ₹5,000 | Full Branding from ₹15,000
              </div>
              <span className="pricing-note">* Depends on brand complexity, deliverables &amp; revision rounds.</span>
              <h2>Logo Design &amp; Brand Identity</h2>
              <p>Your brand is the first impression. We create professional logo designs and complete brand identity systems that build instant trust and make you look like the premium choice in Indore.</p>
              
              <ul className="service-detail-list">
                <li><i className="fas fa-check" aria-hidden="true"></i> Custom logo design (3 concepts)</li>
                <li><i className="fas fa-check" aria-hidden="true"></i> Brand color palette and typography</li>
                <li><i className="fas fa-check" aria-hidden="true"></i> Social media profile branding</li>
                <li><i className="fas fa-check" aria-hidden="true"></i> Business card and letterhead design</li>
                <li><i className="fas fa-check" aria-hidden="true"></i> Brand style guide document</li>
                <li><i className="fas fa-check" aria-hidden="true"></i> All files in editable formats (AI, PNG, SVG)</li>
              </ul>
              
              <Link href="/contact" className="btn btn-primary">
                <i className="fas fa-calendar-check" aria-hidden="true"></i> Get Branding Quote
              </Link>
            </div>
            
            <div className="service-img-wrap" aria-hidden="true">
              <img src="/images/services/services-branding.png" alt="Logo Design and Brand Identity" className="service-real-img" loading="lazy" />
            </div>
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section className="pricing-section" aria-label="Pricing plans">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Transparent Pricing</span>
            <h2 className="section-title" style={{ color: "#0f172a" }}>No Hidden Fees. No Surprises.</h2>
            <p className="section-subtitle" style={{ color: "#475569" }}>Flexible monthly plans designed for Indore businesses — from starter to full-growth mode</p>
          </div>
          
          <div className="pricing-grid">
            <div className="pricing-card">
              <h3>Starter</h3>
              <div className="pricing-price">₹8,000</div>
              <div className="pricing-sub">/month + 50% advance</div>
              <div className="pricing-depend">💬 Price may vary based on your requirements</div>
              
              <ul className="pricing-features">
                <li><i className="fas fa-check" aria-hidden="true"></i> 1 Ad Channel (Meta OR Google)</li>
                <li><i className="fas fa-check" aria-hidden="true"></i> GMB Optimization Basics</li>
                <li><i className="fas fa-check" aria-hidden="true"></i> 2 Ad Creatives / month</li>
                <li><i className="fas fa-check" aria-hidden="true"></i> Monthly Performance Report</li>
                <li><i className="fas fa-check" aria-hidden="true"></i> WhatsApp Support</li>
              </ul>
              
              <Link href="/contact" className="btn btn-outline-orange btn-block">
                Get Started
              </Link>
            </div>
            
            <div className="pricing-card popular">
              <div className="pricing-badge">Most Popular</div>
              <h3>Growth</h3>
              <div className="pricing-price">₹20,000</div>
              <div className="pricing-sub">/month + 50% advance</div>
              <div className="pricing-depend">💬 Depends on your goals &amp; work scope</div>
              
              <ul className="pricing-features">
                <li><i className="fas fa-check" aria-hidden="true"></i> Meta Ads + Google Ads</li>
                <li><i className="fas fa-check" aria-hidden="true"></i> GMB Optimization + Local SEO</li>
                <li><i className="fas fa-check" aria-hidden="true"></i> 2 AI Video Ads / month</li>
                <li><i className="fas fa-check" aria-hidden="true"></i> WhatsApp Automation Setup</li>
                <li><i className="fas fa-check" aria-hidden="true"></i> Weekly Strategy Calls</li>
                <li><i className="fas fa-check" aria-hidden="true"></i> Landing Page Design</li>
                <li><i className="fas fa-check" aria-hidden="true"></i> Bi-weekly Optimization Reports</li>
              </ul>
              
              <Link href="/contact" className="btn btn-primary btn-block">
                Get Started
              </Link>
            </div>
            
            <div className="pricing-card">
              <h3>Full Scale</h3>
              <div className="pricing-price">₹50,000+</div>
              <div className="pricing-sub">/month + 50% advance</div>
              <div className="pricing-depend">💬 Custom quote after discussion</div>
              
              <ul className="pricing-features">
                <li><i className="fas fa-check" aria-hidden="true"></i> All Growth Plan Features</li>
                <li><i className="fas fa-check" aria-hidden="true"></i> Social Media Management</li>
                <li><i className="fas fa-check" aria-hidden="true"></i> 4 to 8 AI Video Ads / month</li>
                <li><i className="fas fa-check" aria-hidden="true"></i> Full CRM Automation Pipeline</li>
                <li><i className="fas fa-check" aria-hidden="true"></i> Logo + Brand Identity</li>
                <li><i className="fas fa-check" aria-hidden="true"></i> Weekly 1-on-1 Strategy Sessions</li>
                <li><i className="fas fa-check" aria-hidden="true"></i> Priority Support (24-hour turnaround)</li>
                <li><i className="fas fa-check" aria-hidden="true"></i> Dedicated Account Management</li>
              </ul>
              
              <Link href="/contact" className="btn btn-outline-orange btn-block">
                Let's Talk
              </Link>
            </div>
          </div>
          
          <p style={{ textAlign: "center", color: "#64748b", fontSize: "12px", marginTop: "32px", lineHeight: "1.7" }}>
            All plans require 50% advance payment. Ad spend budget is separate and billed directly to your account.<br />
            Prices are starting points — final pricing is discussed and agreed after understanding your specific requirements.
          </p>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="cta-banner" aria-label="Call to action">
        <div className="container">
          <div className="cta-content">
            <h2>Not Sure Which Service You Need?</h2>
            <p>Book a free 30-minute strategy call and we'll tell you exactly what will work best for your business and budget.</p>
            <div className="cta-buttons">
              <Link href="/contact" className="btn btn-white btn-large">
                <i className="fas fa-calendar-check" aria-hidden="true"></i> Book Free Strategy Call
              </Link>
              <a href="https://wa.me/918103202086?text=Hi%20Digitalads,%20I%20want%20to%20know%20which%20service%20is%20right%20for%20me" target="_blank" rel="noopener noreferrer" className="btn btn-outline-white btn-large">
                <i className="fab fa-whatsapp" aria-hidden="true"></i> Ask on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
