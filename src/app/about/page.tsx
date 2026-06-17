import Link from "next/link";
import Image from "next/image";
import Script from "next/script";

export const metadata = {
  title: "About Digitalads: AI Marketing Agency Indore",
  description: "Learn about Digitalads — Indore's AI-first digital marketing agency. Meet Growth Partner Ankit Bairagi and discover our mission for Madhya Pradesh businesses.",
  alternates: {
    canonical: "https://thedigitalads.in/about",
  }
};

export default function About() {
  return (
    <main>
      <Script
        id="about-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "AboutPage",
              "name": "About Digitalads",
              "description": "Learn about Digitalads — Indore's AI-first digital marketing agency. Meet Growth Partner Ankit Bairagi.",
              "url": "https://thedigitalads.in/about",
              "mainEntity": {
                "@type": "Organization",
                "name": "Digitalads",
                "founder": {
                  "@type": "Person",
                  "name": "Ankit Bairagi",
                  "jobTitle": "Growth Partner",
                  "url": "https://www.linkedin.com/in/ankitbairagi"
                }
              }
            },
            {
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "name": "Home",
                  "item": "https://thedigitalads.in/"
                },
                {
                  "@type": "ListItem",
                  "position": 2,
                  "name": "About Us",
                  "item": "https://thedigitalads.in/about"
                }
              ]
            }
          ])
        }}
      />
      <section className="page-hero" aria-label="About page hero">
        <div className="container">
          <div className="page-hero-inner">
            <nav aria-label="Breadcrumb" className="breadcrumb">
              <Link href="/">Home</Link>
              <span className="breadcrumb-sep" aria-hidden="true">
                ›
              </span>
              <span className="breadcrumb-current">About Us</span>
            </nav>
            <h1>
              About<br />
              <span className="gradient-text">Digitalads</span>
            </h1>
            <p>
              AI-first digital marketing agency in Indore — built for clinics,
              coaching centers &amp; local businesses that want real results.
            </p>
          </div>
        </div>
      </section>

      <section className="about-overview" aria-label="Company overview">
        <div className="container">
          <div className="overview-intro">
            <span className="section-tag">Who We Are</span>
            <h2>
              Indore's AI-First<br />
              Digital Marketing Agency
            </h2>
            <p>
              Digitalads was built on one simple belief — small businesses in
              Indore deserve expert digital marketing without big agency price
              tags. We combine AI tools with deep local knowledge to run
              campaigns that genuinely grow businesses across Madhya Pradesh.
            </p>
            <p style={{ marginTop: "1rem" }}>
              Traditional marketing in Indore relied heavily on billboards and newspaper ads. We realized this was inefficient for clinics, coaching centers, and service-based businesses. Our mission is to introduce performance-driven marketing, where every rupee spent can be tracked back to a lead or a sale.
            </p>
            <p style={{ marginTop: "1rem" }}>
              By utilizing the latest in Artificial Intelligence, including predictive analytics, Generative AI for content, and automated WhatsApp nurturing sequences, we empower local businesses to compete with national brands. We are not just an agency; we are your dedicated growth partners committed to scaling your revenue predictably and consistently.
            </p>
          </div>
        </div>
      </section>

      <section className="founder-section" aria-label="Meet the founder">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">The Person Behind It</span>
            <h2 className="section-title">Meet Ankit Bairagi</h2>
          </div>
          <div className="founder-card">
            <img
              className="founder-photo"
              src="https://github.com/ankitbairagi800-jpg.png"
              alt="Ankit Bairagi — Growth Partner at Digitalads"
              loading="lazy"
            />
            <div className="founder-body">
              <h3 className="founder-name">Ankit Bairagi</h3>
              <p className="founder-role">Growth Partner — Digitalads</p>
              <p className="founder-location">
                <i
                  className="fas fa-map-marker-alt"
                  style={{ color: "var(--primary-orange,#f60)" }}
                  aria-hidden="true"
                ></i>{" "}
                Indore, Madhya Pradesh
              </p>

              <a
                href="https://www.linkedin.com/in/ankitbairagi"
                target="_blank"
                rel="noopener noreferrer"
                className="linkedin-btn"
                aria-label="View Ankit Bairagi on LinkedIn"
              >
                <i className="fa-brands fa-linkedin-in" aria-hidden="true"></i>
                View LinkedIn Profile
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
