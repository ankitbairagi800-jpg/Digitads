import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bot Information | Digitalads",
  description: "Information about Digitalads AI crawler and chatbot systems.",
};

export default function OurBot() {
  return (
    <main>
      <section className="page-hero" aria-label="Bot Information Hero">
        <div className="container">
          <div className="page-hero-inner">
            <nav aria-label="Breadcrumb" className="breadcrumb">
              <Link href="/">Home</Link>
              <span className="breadcrumb-sep" aria-hidden="true">›</span>
              <Link href="/about">About Us</Link>
              <span className="breadcrumb-sep" aria-hidden="true">›</span>
              <span className="breadcrumb-current">Our Bot</span>
            </nav>
            <h1>
              Digitalads<br />
              <span className="gradient-text">Bot Information</span>
            </h1>
            <p>
              Details about our AI-powered web crawlers and chat agents.
            </p>
          </div>
        </div>
      </section>

      <section className="about-overview">
        <div className="container">
          <div className="overview-intro" style={{ textAlign: "left", maxWidth: "800px", margin: "0 auto" }}>
            <h2 style={{ fontSize: "2rem", marginBottom: "1rem", color: "var(--text-primary, #fff)" }}>What is the Digitalads Bot?</h2>
            <p style={{ marginBottom: "1rem", lineHeight: "1.6", color: "var(--text-secondary, #ccc)" }}>
              At Digitalads, we utilize artificial intelligence and web automation to provide better marketing insights, analyze public data, and power our interactive AI agents.
            </p>
            <p style={{ marginBottom: "1rem", lineHeight: "1.6", color: "var(--text-secondary, #ccc)" }}>
              Our bot (commonly operating under user-agents related to our AI systems or Cloudflare integrations) visits websites to understand content context, which helps us deliver cutting-edge SEO and marketing strategies for our clients in Indore and across Madhya Pradesh.
            </p>

            <h3 style={{ fontSize: "1.5rem", marginTop: "2rem", marginBottom: "1rem", color: "var(--text-primary, #fff)" }}>How to identify our bot</h3>
            <p style={{ marginBottom: "1rem", lineHeight: "1.6", color: "var(--text-secondary, #ccc)" }}>
              Our automated systems might appear in your server logs. We ensure our bots respect standard web protocols and rate limits to avoid impacting your server performance.
            </p>

            <h3 style={{ fontSize: "1.5rem", marginTop: "2rem", marginBottom: "1rem", color: "var(--text-primary, #fff)" }}>Opting Out</h3>
            <p style={{ marginBottom: "1rem", lineHeight: "1.6", color: "var(--text-secondary, #ccc)" }}>
              We fully respect the <code>robots.txt</code> protocol. If you wish to prevent our bot from crawling your site, you can simply block standard AI crawlers or contact us directly.
            </p>
            <p style={{ marginBottom: "1rem", lineHeight: "1.6", color: "var(--text-secondary, #ccc)" }}>
              If you have any questions or notice any issues, please <Link href="/contact" style={{ color: "var(--primary-orange, #ff6600)", textDecoration: "underline" }}>contact us</Link>.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
