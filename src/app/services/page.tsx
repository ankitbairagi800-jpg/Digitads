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
    <main style={{ background: "#0a0a0a", color: "#fff", paddingTop: "80px" }}>
      
      {/* Hero section */}
      <section className="page-hero" aria-label="Services page hero">
        <div className="container">
          <div className="page-hero-inner">
            <nav aria-label="Breadcrumb" className="breadcrumb">
              <Link href="/">Home</Link>
              <span className="breadcrumb-sep">›</span>
              <span className="breadcrumb-current">Services</span>
            </nav>
            <h1>Digital Marketing Services<br /><span className="gradient-text">Built for Real Results</span></h1>
            <p>Every service we offer is designed with one goal — generating qualified leads and measurable ROI for your business in Indore and across Madhya Pradesh.</p>
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
              <svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg" style={{ background: "linear-gradient(135deg,#1a0533 0%,#2d1060 100%)" }}>
                <defs>
                  <linearGradient id="mg1" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style={{ stopColor: "#ff6600" }} />
                    <stop offset="100%" style={{ stopColor: "#ff3399" }} />
                  </linearGradient>
                  <linearGradient id="mg2" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" style={{ stopColor: "#4267B2" }} />
                    <stop offset="100%" style={{ stopColor: "#E1306C" }} />
                  </linearGradient>
                </defs>
                <rect x="130" y="30" width="140" height="240" rx="18" fill="#fff" opacity="0.06" stroke="#ff6600" strokeWidth="1.5" />
                <rect x="138" y="52" width="124" height="200" rx="6" fill="#111" />
                <circle cx="200" cy="100" r="32" fill="url(#mg2)" opacity="0.9" />
                <text x="200" y="107" textAnchor="middle" fontSize="28" fontWeight="900" fill="#fff" fontFamily="Arial">f</text>
                <circle cx="200" cy="185" r="26" fill="none" stroke="url(#mg1)" strokeWidth="3" />
                <circle cx="200" cy="185" r="14" fill="none" stroke="url(#mg1)" strokeWidth="2" />
                <circle cx="212" cy="173" r="3" fill="#ff6600" />
                <rect x="30" y="80" width="70" height="8" rx="4" fill="url(#mg1)" opacity="0.8" />
                <rect x="30" y="96" width="50" height="6" rx="3" fill="#ff6600" opacity="0.4" />
                <rect x="30" y="110" width="60" height="6" rx="3" fill="#ff3399" opacity="0.4" />
                <rect x="18" y="150" width="88" height="44" rx="10" fill="#fff" opacity="0.08" stroke="#ff6600" strokeWidth="1" />
                <text x="62" y="168" textAnchor="middle" fontSize="14" fontWeight="800" fill="#ff6600" fontFamily="Arial">15+</text>
                <text x="62" y="184" textAnchor="middle" fontSize="9" fill="rgba(255,255,255,0.6)" fontFamily="Arial">Daily Leads</text>
                <rect x="292" y="70" width="90" height="36" rx="8" fill="#fff" opacity="0.07" stroke="#ff3399" strokeWidth="1" />
                <text x="337" y="84" textAnchor="middle" fontSize="10" fontWeight="700" fill="#ff3399" fontFamily="Arial">REACH</text>
                <text x="337" y="98" textAnchor="middle" fontSize="13" fontWeight="800" fill="#fff" fontFamily="Arial">50K+</text>
                <rect x="292" y="120" width="90" height="36" rx="8" fill="#fff" opacity="0.07" stroke="#ff6600" strokeWidth="1" />
                <text x="337" y="134" textAnchor="middle" fontSize="10" fontWeight="700" fill="#ff6600" fontFamily="Arial">ROI</text>
                <text x="337" y="148" textAnchor="middle" fontSize="13" fontWeight="800" fill="#fff" fontFamily="Arial">3-5x</text>
                <text x="200" y="278" textAnchor="middle" fontSize="12" fontWeight="600" fill="rgba(255,255,255,0.6)" fontFamily="Arial">Facebook &amp; Instagram Ads</text>
              </svg>
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
              <svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg" style={{ background: "linear-gradient(135deg,#001233 0%,#003380 100%)" }}>
                <rect x="40" y="40" width="320" height="44" rx="22" fill="#fff" opacity="0.1" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
                <circle cx="68" cy="62" r="10" fill="none" stroke="#4285F4" strokeWidth="2.5" />
                <line x1="75" y1="69" x2="82" y2="76" stroke="#4285F4" strokeWidth="2.5" strokeLinecap="round" />
                <text x="96" y="67" fontSize="11" fill="rgba(255,255,255,0.4)" fontFamily="Arial">best clinic in Indore...</text>
                <rect x="40" y="96" width="16" height="4" rx="2" fill="#4285F4" />
                <rect x="60" y="96" width="16" height="4" rx="2" fill="#EA4335" />
                <rect x="80" y="96" width="16" height="4" rx="2" fill="#FBBC05" />
                <rect x="100" y="96" width="16" height="4" rx="2" fill="#34A853" />
                <rect x="40" y="112" width="320" height="52" rx="10" fill="#ff6600" opacity="0.15" stroke="#ff6600" strokeWidth="1.5" />
                <rect x="52" y="120" width="22" height="10" rx="3" fill="#ff6600" />
                <text x="63" y="128" textAnchor="middle" fontSize="7" fontWeight="700" fill="#fff" fontFamily="Arial">AD</text>
                <text x="82" y="128" fontSize="10" fontWeight="700" fill="#4285F4" fontFamily="Arial">Your Clinic — Book Appointment</text>
                <text x="52" y="144" fontSize="9" fill="rgba(255,255,255,0.5)" fontFamily="Arial">thedigitalads.in · Indore · +91 81032 02086</text>
                <rect x="40" y="172" width="320" height="48" rx="10" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
                <text x="52" y="190" fontSize="10" fill="rgba(100,150,255,0.6)" fontFamily="Arial">Competitor Clinic — Book Online</text>
                <text x="52" y="206" fontSize="9" fill="rgba(255,255,255,0.3)" fontFamily="Arial">competitor.com · Indore</text>
                <rect x="40" y="232" width="86" height="36" rx="8" fill="rgba(255,255,255,0.07)" stroke="#4285F4" strokeWidth="1" />
                <text x="83" y="246" textAnchor="middle" fontSize="8" fill="#4285F4" fontFamily="Arial">POSITION</text>
                <text x="83" y="261" textAnchor="middle" fontSize="14" fontWeight="800" fill="#fff" fontFamily="Arial">#1</text>
                <rect x="157" y="232" width="86" height="36" rx="8" fill="rgba(255,255,255,0.07)" stroke="#34A853" strokeWidth="1" />
                <text x="200" y="246" textAnchor="middle" fontSize="8" fill="#34A853" fontFamily="Arial">CONV. RATE</text>
                <text x="200" y="261" textAnchor="middle" fontSize="14" fontWeight="800" fill="#fff" fontFamily="Arial">12%</text>
                <rect x="274" y="232" width="86" height="36" rx="8" fill="rgba(255,255,255,0.07)" stroke="#FBBC05" strokeWidth="1" />
                <text x="317" y="246" textAnchor="middle" fontSize="8" fill="#FBBC05" fontFamily="Arial">COST / LEAD</text>
                <text x="317" y="261" textAnchor="middle" fontSize="14" fontWeight="800" fill="#fff" fontFamily="Arial">Rs.80</text>
              </svg>
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
              <svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg" style={{ background: "linear-gradient(135deg,#001a00 0%,#003300 100%)" }}>
                <line x1="0" y1="75" x2="400" y2="75" stroke="rgba(255,255,255,0.04)" strokeWidth="1" />
                <line x1="0" y1="150" x2="400" y2="150" stroke="rgba(255,255,255,0.04)" strokeWidth="1" />
                <line x1="0" y1="225" x2="400" y2="225" stroke="rgba(255,255,255,0.04)" strokeWidth="1" />
                <line x1="100" y1="0" x2="100" y2="300" stroke="rgba(255,255,255,0.04)" strokeWidth="1" />
                <line x1="200" y1="0" x2="200" y2="300" stroke="rgba(255,255,255,0.04)" strokeWidth="1" />
                <line x1="300" y1="0" x2="300" y2="300" stroke="rgba(255,255,255,0.04)" strokeWidth="1" />
                <line x1="0" y1="150" x2="400" y2="150" stroke="rgba(255,255,255,0.07)" strokeWidth="6" />
                <line x1="200" y1="0" x2="200" y2="300" stroke="rgba(255,255,255,0.07)" strokeWidth="6" />
                <circle cx="200" cy="120" r="22" fill="#ff6600" opacity="0.2" />
                <circle cx="200" cy="120" r="13" fill="#ff6600" />
                <circle cx="200" cy="120" r="5" fill="#fff" />
                <ellipse cx="200" cy="134" rx="8" ry="3" fill="rgba(0,0,0,0.4)" />
                <rect x="217" y="100" width="58" height="24" rx="6" fill="#ff6600" />
                <text x="246" y="116" textAnchor="middle" fontSize="10" fontWeight="800" fill="#fff" fontFamily="Arial">Top #1</text>
                <circle cx="120" cy="175" r="8" fill="#34A853" opacity="0.7" />
                <circle cx="120" cy="175" r="3" fill="#fff" />
                <circle cx="290" cy="100" r="8" fill="#4285F4" opacity="0.7" />
                <circle cx="290" cy="100" r="3" fill="#fff" />
                <rect x="20" y="200" width="160" height="80" rx="10" fill="#fff" opacity="0.07" stroke="#34A853" strokeWidth="1.5" />
                <text x="35" y="220" fontSize="11" fontWeight="700" fill="#fff" fontFamily="Arial">Your Business</text>
                <text x="35" y="234" fontSize="9" fill="rgba(255,255,255,0.5)" fontFamily="Arial">Indore, MP</text>
                <text x="35" y="250" fontSize="12" fill="#FBBC05" fontFamily="Arial">★★★★★</text>
                <text x="109" y="250" fontSize="9" fill="rgba(255,255,255,0.5)" fontFamily="Arial">4.9 (200+)</text>
                <text x="35" y="268" fontSize="9" fill="#34A853" fontFamily="Arial">Google Verified</text>
                <rect x="220" y="210" width="74" height="34" rx="8" fill="rgba(255,255,255,0.06)" stroke="#ff6600" strokeWidth="1" />
                <text x="257" y="223" textAnchor="middle" fontSize="8" fill="#ff6600" fontFamily="Arial">MAP VIEWS</text>
                <text x="257" y="237" textAnchor="middle" fontSize="13" fontWeight="800" fill="#fff" fontFamily="Arial">+200%</text>
                <rect x="306" y="210" width="74" height="34" rx="8" fill="rgba(255,255,255,0.06)" stroke="#34A853" strokeWidth="1" />
                <text x="343" y="223" textAnchor="middle" fontSize="8" fill="#34A853" fontFamily="Arial">CALLS</text>
                <text x="343" y="237" textAnchor="middle" fontSize="13" fontWeight="800" fill="#fff" fontFamily="Arial">+80%</text>
              </svg>
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
              <svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg" style={{ background: "linear-gradient(135deg,#1a0000 0%,#330011 100%)" }}>
                <defs>
                  <linearGradient id="vg1" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style={{ stopColor: "#ff6600" }} />
                    <stop offset="100%" style={{ stopColor: "#cc0066" }} />
                  </linearGradient>
                </defs>
                <rect x="150" y="20" width="100" height="180" rx="14" fill="rgba(255,255,255,0.06)" stroke="#ff6600" strokeWidth="1.5" />
                <rect x="157" y="34" width="86" height="152" rx="6" fill="#1a0011" />
                <rect x="157" y="34" width="86" height="100" rx="0" fill="url(#vg1)" opacity="0.3" />
                <circle cx="200" cy="84" r="18" fill="rgba(255,255,255,0.15)" stroke="#fff" strokeWidth="1.5" />
                <polygon points="196,76 196,92 212,84" fill="#fff" />
                <rect x="162" y="138" width="76" height="3" rx="2" fill="rgba(255,255,255,0.15)" />
                <rect x="162" y="138" width="45" height="3" rx="2" fill="#ff6600" />
                <text x="248" y="70" fontSize="16" fill="rgba(255,255,255,0.6)" fontFamily="Arial">&#9829;</text>
                <text x="248" y="90" fontSize="10" fill="rgba(255,255,255,0.4)" fontFamily="Arial">2.4k</text>
                <rect x="30" y="50" width="86" height="28" rx="8" fill="rgba(255,255,255,0.07)" stroke="rgba(255,102,0,0.4)" strokeWidth="1" />
                <text x="73" y="68" textAnchor="middle" fontSize="10" fontWeight="700" fill="#ff6600" fontFamily="Arial">CapCut AI</text>
                <rect x="30" y="90" width="86" height="28" rx="8" fill="rgba(255,255,255,0.07)" stroke="rgba(255,0,102,0.4)" strokeWidth="1" />
                <text x="73" y="108" textAnchor="middle" fontSize="10" fontWeight="700" fill="#ff3399" fontFamily="Arial">ElevenLabs</text>
                <rect x="30" y="130" width="86" height="28" rx="8" fill="rgba(255,255,255,0.07)" stroke="rgba(100,100,255,0.4)" strokeWidth="1" />
                <text x="73" y="148" textAnchor="middle" fontSize="10" fontWeight="700" fill="#aaaaff" fontFamily="Arial">ChatGPT</text>
                <rect x="30" y="220" width="78" height="50" rx="10" fill="rgba(255,255,255,0.07)" stroke="#ff6600" strokeWidth="1" />
                <text x="69" y="238" textAnchor="middle" fontSize="8" fill="#ff6600" fontFamily="Arial">VIEWS</text>
                <text x="69" y="255" textAnchor="middle" fontSize="15" fontWeight="800" fill="#fff" fontFamily="Arial">50K</text>
                <text x="69" y="265" textAnchor="middle" fontSize="7" fill="rgba(255,255,255,0.4)" fontFamily="Arial">per Reel</text>
                <rect x="161" y="220" width="78" height="50" rx="10" fill="rgba(255,255,255,0.07)" stroke="#ff3399" strokeWidth="1" />
                <text x="200" y="238" textAnchor="middle" fontSize="8" fill="#ff3399" fontFamily="Arial">COST</text>
                <text x="200" y="255" textAnchor="middle" fontSize="13" fontWeight="800" fill="#fff" fontFamily="Arial">1/5th</text>
                <text x="200" y="265" textAnchor="middle" fontSize="7" fill="rgba(255,255,255,0.4)" fontFamily="Arial">of normal</text>
                <rect x="292" y="220" width="78" height="50" rx="10" fill="rgba(255,255,255,0.07)" stroke="#aaaaff" strokeWidth="1" />
                <text x="331" y="238" textAnchor="middle" fontSize="8" fill="#aaaaff" fontFamily="Arial">VIDEOS</text>
                <text x="331" y="255" textAnchor="middle" fontSize="15" fontWeight="800" fill="#fff" fontFamily="Arial">4-8</text>
                <text x="331" y="265" textAnchor="middle" fontSize="7" fill="rgba(255,255,255,0.4)" fontFamily="Arial">per month</text>
              </svg>
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
              <svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg" style={{ background: "linear-gradient(135deg,#001a0d 0%,#003320 100%)" }}>
                <defs>
                  <linearGradient id="wg1" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style={{ stopColor: "#25D366" }} />
                    <stop offset="100%" style={{ stopColor: "#128C7E" }} />
                  </linearGradient>
                </defs>
                <rect x="30" y="50" width="80" height="36" rx="8" fill="#ff6600" opacity="0.8" />
                <text x="70" y="64" textAnchor="middle" fontSize="9" fontWeight="700" fill="#fff" fontFamily="Arial">NEW LEAD</text>
                <text x="70" y="77" textAnchor="middle" fontSize="8" fill="rgba(255,255,255,0.8)" fontFamily="Arial">Facebook / Google</text>
                <line x1="110" y1="68" x2="148" y2="68" stroke="#25D366" strokeWidth="2" strokeDasharray="4,2" />
                <polygon points="148,63 158,68 148,73" fill="#25D366" />
                <rect x="158" y="50" width="80" height="36" rx="8" fill="rgba(255,102,0,0.15)" stroke="#ff6600" strokeWidth="1.5" />
                <text x="198" y="64" textAnchor="middle" fontSize="9" fontWeight="700" fill="#ff6600" fontFamily="Arial">n8n / Make</text>
                <text x="198" y="77" textAnchor="middle" fontSize="8" fill="rgba(255,255,255,0.6)" fontFamily="Arial">Automation</text>
                <line x1="198" y1="86" x2="198" y2="118" stroke="#25D366" strokeWidth="2" strokeDasharray="4,2" />
                <polygon points="193,118 198,128 203,118" fill="#25D366" />
                <rect x="118" y="128" width="160" height="56" rx="10" fill="url(#wg1)" opacity="0.15" stroke="#25D366" strokeWidth="1.5" />
                <circle cx="136" cy="150" r="10" fill="#25D366" />
                <text x="136" y="154" textAnchor="middle" fontSize="10" fill="#fff" fontFamily="Arial">&#10003;</text>
                <text x="155" y="144" fontSize="10" fontWeight="600" fill="#25D366" fontFamily="Arial">Auto Reply Sent!</text>
                <text x="155" y="158" fontSize="8" fill="rgba(255,255,255,0.5)" fontFamily="Arial">Hi! Book appt: bit.ly/book</text>
                <text x="155" y="170" fontSize="8" fill="rgba(255,255,255,0.4)" fontFamily="Arial">Replied in 5 seconds</text>
                <line x1="278" y1="156" x2="316" y2="156" stroke="#25D366" strokeWidth="2" strokeDasharray="4,2" />
                <polygon points="316,151 326,156 316,161" fill="#25D366" />
                <rect x="326" y="138" width="58" height="36" rx="8" fill="#25D366" opacity="0.8" />
                <text x="355" y="152" textAnchor="middle" fontSize="8" fontWeight="700" fill="#fff" fontFamily="Arial">BOOKED</text>
                <text x="355" y="165" textAnchor="middle" fontSize="9" fill="#fff" fontFamily="Arial">&#10003;</text>
                <rect x="30" y="205" width="88" height="52" rx="10" fill="rgba(255,255,255,0.06)" stroke="#25D366" strokeWidth="1" />
                <text x="74" y="222" textAnchor="middle" fontSize="8" fill="#25D366" fontFamily="Arial">RESPONSE</text>
                <text x="74" y="240" textAnchor="middle" fontSize="15" fontWeight="800" fill="#fff" fontFamily="Arial">&lt;5s</text>
                <text x="74" y="252" textAnchor="middle" fontSize="7" fill="rgba(255,255,255,0.4)" fontFamily="Arial">24/7 Auto</text>
                <rect x="156" y="205" width="88" height="52" rx="10" fill="rgba(255,255,255,0.06)" stroke="#ff6600" strokeWidth="1" />
                <text x="200" y="222" textAnchor="middle" fontSize="8" fill="#ff6600" fontFamily="Arial">LEADS SAVED</text>
                <text x="200" y="240" textAnchor="middle" fontSize="15" fontWeight="800" fill="#fff" fontFamily="Arial">70%</text>
                <text x="200" y="252" textAnchor="middle" fontSize="7" fill="rgba(255,255,255,0.4)" fontFamily="Arial">More Conversions</text>
                <rect x="282" y="205" width="88" height="52" rx="10" fill="rgba(255,255,255,0.06)" stroke="#25D366" strokeWidth="1" />
                <text x="326" y="222" textAnchor="middle" fontSize="8" fill="#25D366" fontFamily="Arial">FOLLOW-UP</text>
                <text x="326" y="240" textAnchor="middle" fontSize="15" fontWeight="800" fill="#fff" fontFamily="Arial">Automated</text>
                <text x="326" y="252" textAnchor="middle" fontSize="7" fill="rgba(255,255,255,0.4)" fontFamily="Arial">Process</text>
              </svg>
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
              <svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg" style={{ background: "linear-gradient(135deg,#0a001a 0%,#1a0033 100%)" }}>
                <defs>
                  <linearGradient id="lpg" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style={{ stopColor: "#ff6600" }} />
                    <stop offset="100%" style={{ stopColor: "#9900ff" }} />
                  </linearGradient>
                </defs>
                <rect x="30" y="30" width="260" height="200" rx="10" fill="rgba(255,255,255,0.06)" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" />
                <rect x="30" y="30" width="260" height="28" rx="10" fill="rgba(255,255,255,0.1)" />
                <circle cx="48" cy="44" r="5" fill="#ff5f57" />
                <circle cx="64" cy="44" r="5" fill="#febc2e" />
                <circle cx="80" cy="44" r="5" fill="#28c840" />
                <rect x="96" y="36" width="140" height="16" rx="8" fill="rgba(255,255,255,0.1)" />
                <text x="166" y="48" textAnchor="middle" fontSize="8" fill="rgba(255,255,255,0.5)" fontFamily="Arial">thedigitalads.in</text>
                <rect x="38" y="66" width="244" height="28" rx="4" fill="url(#lpg)" opacity="0.6" />
                <text x="160" y="84" textAnchor="middle" fontSize="10" fontWeight="700" fill="#fff" fontFamily="Arial">Book Your Free Consultation</text>
                <rect x="50" y="102" width="140" height="8" rx="4" fill="rgba(255,255,255,0.12)" />
                <rect x="50" y="116" width="100" height="8" rx="4" fill="rgba(255,255,255,0.08)" />
                <rect x="50" y="134" width="220" height="22" rx="5" fill="rgba(255,255,255,0.08)" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />
                <text x="62" y="149" fontSize="8" fill="rgba(255,255,255,0.3)" fontFamily="Arial">Your Name</text>
                <rect x="50" y="162" width="220" height="22" rx="5" fill="rgba(255,255,255,0.08)" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />
                <text x="62" y="177" fontSize="8" fill="rgba(255,255,255,0.3)" fontFamily="Arial">Phone Number</text>
                <rect x="80" y="192" width="160" height="26" rx="8" fill="#ff6600" />
                <text x="160" y="209" textAnchor="middle" fontSize="10" fontWeight="700" fill="#fff" fontFamily="Arial">Get Free Consultation</text>
                <rect x="310" y="48" width="72" height="54" rx="10" fill="rgba(255,255,255,0.07)" stroke="#ff6600" strokeWidth="1" />
                <text x="346" y="66" textAnchor="middle" fontSize="8" fill="#ff6600" fontFamily="Arial">SPEED</text>
                <text x="346" y="84" textAnchor="middle" fontSize="19" fontWeight="900" fill="#28c840" fontFamily="Arial">98</text>
                <text x="346" y="96" textAnchor="middle" fontSize="7" fill="rgba(255,255,255,0.4)" fontFamily="Arial">PageSpeed</text>
                <rect x="310" y="118" width="72" height="54" rx="10" fill="rgba(255,255,255,0.07)" stroke="#9900ff" strokeWidth="1" />
                <text x="346" y="136" textAnchor="middle" fontSize="8" fill="#cc66ff" fontFamily="Arial">MOBILE</text>
                <text x="346" y="154" textAnchor="middle" fontSize="14" fontWeight="800" fill="#fff" fontFamily="Arial">100%</text>
                <text x="346" y="166" textAnchor="middle" fontSize="7" fill="rgba(255,255,255,0.4)" fontFamily="Arial">Responsive</text>
                <rect x="310" y="188" width="72" height="36" rx="10" fill="rgba(255,255,255,0.07)" stroke="#28c840" strokeWidth="1" />
                <text x="346" y="202" textAnchor="middle" fontSize="7" fill="#28c840" fontFamily="Arial">CONV RATE</text>
                <text x="346" y="217" textAnchor="middle" fontSize="13" fontWeight="800" fill="#fff" fontFamily="Arial">18%</text>
              </svg>
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
              <svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg" style={{ background: "linear-gradient(135deg,#1a1000 0%,#332200 100%)" }}>
                <defs>
                  <linearGradient id="bgg" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style={{ stopColor: "#ff6600" }} />
                    <stop offset="100%" style={{ stopColor: "#ffcc00" }} />
                  </linearGradient>
                </defs>
                <polygon points="200,48 242,122 222,122 222,182 178,182 178,122 158,122" fill="url(#bgg)" opacity="0.9" />
                <circle cx="200" cy="200" r="18" fill="url(#bgg)" opacity="0.5" />
                <rect x="28" y="50" width="80" height="18" rx="4" fill="#ff6600" />
                <text x="68" y="63" textAnchor="middle" fontSize="8" fill="#fff" fontFamily="Arial">#FF6600</text>
                <rect x="28" y="74" width="80" height="18" rx="4" fill="#ffcc00" />
                <text x="68" y="87" textAnchor="middle" fontSize="8" fill="#333" fontFamily="Arial">#FFCC00</text>
                <rect x="28" y="98" width="80" height="18" rx="4" fill="#1a1a2e" />
                <text x="68" y="111" textAnchor="middle" fontSize="8" fill="#fff" fontFamily="Arial">#1A1A2E</text>
                <rect x="28" y="122" width="80" height="18" rx="4" fill="#f5f5f5" stroke="#ddd" strokeWidth="1" />
                <text x="68" y="135" textAnchor="middle" fontSize="8" fill="#333" fontFamily="Arial">#F5F5F5</text>
                <rect x="28" y="168" width="118" height="100" rx="8" fill="rgba(255,255,255,0.05)" stroke="rgba(255,102,0,0.3)" strokeWidth="1" />
                <text x="42" y="185" fontSize="8" fill="rgba(255,255,255,0.4)" fontFamily="Arial">Typography</text>
                <text x="42" y="205" fontSize="14" fontWeight="800" fill="#fff" fontFamily="Arial">Aa</text>
                <text x="42" y="222" fontSize="10" fill="rgba(255,255,255,0.6)" fontFamily="Arial">Inter Bold</text>
                <text x="42" y="238" fontSize="8" fill="rgba(255,255,255,0.3)" fontFamily="Arial">ABCDEFGHIJKLM</text>
                <text x="42" y="252" fontSize="8" fill="rgba(255,255,255,0.3)" fontFamily="Arial">abcdefghijklm</text>
                <rect x="292" y="50" width="86" height="52" rx="8" fill="rgba(255,255,255,0.07)" stroke="rgba(255,102,0,0.4)" strokeWidth="1" />
                <text x="335" y="68" textAnchor="middle" fontSize="8" fill="rgba(255,255,255,0.4)" fontFamily="Arial">Business Card</text>
                <rect x="300" y="74" width="70" height="18" rx="3" fill="url(#bgg)" opacity="0.6" />
                <text x="335" y="87" textAnchor="middle" fontSize="7" fill="#fff" fontFamily="Arial">Your Brand</text>
                <rect x="292" y="118" width="86" height="66" rx="8" fill="rgba(255,255,255,0.07)" stroke="rgba(255,204,0,0.4)" strokeWidth="1" />
                <text x="335" y="136" textAnchor="middle" fontSize="8" fill="rgba(255,204,0,0.8)" fontFamily="Arial">File Formats</text>
                <text x="335" y="154" textAnchor="middle" fontSize="10" fill="#fff" fontFamily="Arial">AI / SVG</text>
                <text x="335" y="170" textAnchor="middle" fontSize="10" fill="#fff" fontFamily="Arial">PNG / PDF</text>
                <text x="335" y="180" textAnchor="middle" fontSize="7" fill="rgba(255,255,255,0.4)" fontFamily="Arial">All included</text>
                <rect x="292" y="202" width="86" height="48" rx="8" fill="rgba(255,255,255,0.07)" stroke="#ff6600" strokeWidth="1" />
                <text x="335" y="218" textAnchor="middle" fontSize="8" fill="#ff6600" fontFamily="Arial">CONCEPTS</text>
                <text x="335" y="237" textAnchor="middle" fontSize="19" fontWeight="900" fill="#fff" fontFamily="Arial">3</text>
                <text x="335" y="246" textAnchor="middle" fontSize="7" fill="rgba(255,255,255,0.4)" fontFamily="Arial">Unique designs</text>
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section className="pricing-section" aria-label="Pricing plans">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Transparent Pricing</span>
            <h2 className="section-title" style={{ color: "#fff" }}>No Hidden Fees. No Surprises.</h2>
            <p className="section-subtitle" style={{ color: "rgba(255,255,255,0.5)" }}>Flexible monthly plans designed for Indore businesses — from starter to full-growth mode</p>
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
          
          <p style={{ textAlign: "center", color: "rgba(255,255,255,0.35)", fontSize: "12px", marginTop: "32px", lineHeight: "1.7" }}>
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
