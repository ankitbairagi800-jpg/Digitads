import Link from "next/link";
import LazyIframe from "./LazyIframe";

export default function Footer() {
  return (
    <footer className="footer" aria-label="Site footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-column">
            <div className="footer-logo">
              <h2>
                Digital<span>ads</span>
              </h2>
            </div>
            <p className="footer-tagline">AI-First. Results-Focused. Indore's Best.</p>
            <p className="footer-text">
              Indore's trusted AI-first digital marketing agency specializing in
              data-driven campaigns for clinics and coaching centers across Madhya Pradesh.
            </p>
            <div
              className="social-links"
              style={{ marginTop: "20px" }}
              aria-label="Follow us"
            >
              <a
                href="https://www.instagram.com/thedigitalads.in?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                target="_blank"
                rel="noopener"
                className="social-link"
                aria-label="Instagram"
              >
                <i className="fa-brands fa-instagram" aria-hidden="true"></i>
              </a>
              <a
                href="https://www.linkedin.com/company/digitaladsailead/"
                target="_blank"
                rel="noopener"
                className="social-link"
                aria-label="LinkedIn"
              >
                <i className="fa-brands fa-linkedin-in" aria-hidden="true"></i>
              </a>
              <a
                href="https://youtube.com/@digitalads.marketing"
                target="_blank"
                rel="noopener"
                className="social-link"
                aria-label="YouTube"
              >
                <i className="fa-brands fa-youtube" aria-hidden="true"></i>
              </a>
              <a
                href="https://wa.me/918103202086?text=Hi%20Digitalads,%20I%20want%20to%20discuss%20marketing%20services%20for%20my%20business."
                target="_blank"
                rel="noopener"
                className="social-link"
                aria-label="WhatsApp"
              >
                <i className="fa-brands fa-whatsapp" aria-hidden="true"></i>
              </a>
            </div>
          </div>
          <div className="footer-column">
            <h3>Quick Links</h3>
            <ul className="footer-links">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/about">About Us</Link>
              </li>
              <li>
                <Link href="/services">Services</Link>
              </li>
              <li>
                <Link href="/case-studies">Case Studies</Link>
              </li>
              <li>
                <Link href="/blog">Blog</Link>
              </li>
              <li>
                <Link href="/faq">FAQ</Link>
              </li>
              <li>
                <Link href="/contact">Contact</Link>
              </li>
            </ul>
          </div>
          <div className="footer-column">
            <h3>Services</h3>
            <ul className="footer-links">
              <li>
                <Link href="/services#meta-ads">Meta Ads</Link>
              </li>
              <li>
                <Link href="/services#google-ads">Google Ads</Link>
              </li>
              <li>
                <Link href="/services#gmb-seo">GMB &amp; Local SEO</Link>
              </li>
              <li>
                <Link href="/services#ai-video">AI Video Ads</Link>
              </li>
              <li>
                <Link href="/services#automation">WhatsApp Automation</Link>
              </li>
              <li>
                <Link href="/services#landing-pages">Landing Pages</Link>
              </li>
              <li>
                <Link href="/services#branding">Logo &amp; Branding</Link>
              </li>
            </ul>
          </div>
          <div className="footer-column">
            <h3>Contact</h3>
            <ul className="footer-contact">
              <li>
                <i className="fas fa-phone" aria-hidden="true"></i>{" "}
                <a href="tel:+918103202086">+91 81032 02086</a>
              </li>
              <li>
                <i className="fa-brands fa-whatsapp" aria-hidden="true"></i>{" "}
                <a
                  href="https://wa.me/918103202086?text=Hi%20Digitalads,%20I%20want%20to%20discuss%20marketing%20services%20for%20my%20business."
                  target="_blank"
                  rel="noopener"
                >
                  WhatsApp Us
                </a>
              </li>
              <li>
                <i className="fas fa-envelope" aria-hidden="true"></i>{" "}
                <a href="mailto:digitalads959@gmail.com">
                  digitalads959@gmail.com
                </a>
              </li>
                            <li>
                <i className="fas fa-map-marker-alt" aria-hidden="true"></i>{" "}
                Indore, Madhya Pradesh, India
              </li>
              <li style={{ marginTop: '15px', marginBottom: '15px' }}>
                <LazyIframe
                  src="https://maps.google.com/maps?q=Digitalads+Digital+Marketing+Agency+Indore+Madhya+Pradesh&t=&z=14&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height={140}
                  style={{ border: "0", borderRadius: '8px' }}
                  title="Digitalads Location"
                />
              </li>
              <li>
                <i className="fa-brands fa-instagram" aria-hidden="true"></i>{" "}
                <a
                  href="https://www.instagram.com/thedigitalads.in?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                  target="_blank"
                  rel="noopener"
                >
                  @thedigitalads.in
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>
            &copy; 2026 <Link href="/">Digitalads</Link> — Best Digital
            Marketing Agency in Indore, MP. All rights reserved.
          </p>
          <p>
            <Link href="/about">About</Link> &nbsp;|&nbsp;{" "}
            <Link href="/services">Services</Link> &nbsp;|&nbsp;{" "}
            <Link href="/contact">Contact</Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
