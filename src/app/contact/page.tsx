"use client";

import Link from "next/link";
import { useState } from "react";
import { saveLead } from "@/lib/db";
import LazyIframe from "@/components/LazyIframe";
import "./contact.css";

export default function Contact() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<{ [key: string]: boolean }>({});

  const validateField = (name: string, value: string) => {
    let isValid = value.trim() !== "";
    if (name === "phone") {
      isValid = /^[0-9+\s\-]{8,15}$/.test(value);
    }
    return isValid;
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    if (e.target.required) {
      setErrors((prev) => ({ ...prev, [name]: !validateField(name, value) }));
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: !validateField(name, value) }));
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isSubmitting) return;

    const formData = new FormData(e.currentTarget);
    const newErrors: { [key: string]: boolean } = {};
    let allValid = true;

    ["name", "phone", "service"].forEach((field) => {
      const value = formData.get(field) as string;
      const isValid = validateField(field, value);
      if (!isValid) {
        allValid = false;
        newErrors[field] = true;
      }
    });

    setErrors(newErrors);

    if (allValid) {
      setIsSubmitting(true);
      try {
        const options: Intl.DateTimeFormatOptions = { 
          month: 'short', day: '2-digit', year: 'numeric', 
          hour: 'numeric', minute: '2-digit', hour12: true 
        };
        
        await saveLead({
          name: formData.get("name") as string,
          phone: formData.get("phone") as string,
          email: (formData.get("email") as string) || "Not provided",
          business: (formData.get("business") as string) || "Not provided",
          service: formData.get("service") as string,
          budget: (formData.get("budget") as string) || "Not specified",
          message: (formData.get("message") as string) || "No message",
          date: new Date().toLocaleString('en-US', options)
        });
        setFormSubmitted(true);
      } catch (err) {
        console.error("Failed to submit form", err);
        alert("Something went wrong. Please try again or reach us on WhatsApp.");
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  return (
    <main>
      <section className="contact-hero" aria-label="Contact hero section">
        <div className="container">
          <div className="contact-hero-inner">
            <nav aria-label="Breadcrumb" className="breadcrumb">
              <Link href="/">Home</Link>
              <span className="breadcrumb-sep" aria-hidden="true">
                <i className="fas fa-chevron-right"></i>
              </span>
              <span className="breadcrumb-current" aria-current="page">
                Contact
              </span>
            </nav>
            <div className="section-tag">Free Consultation & Audit</div>
            <h1>
              Let's Grow Your<br />
              <span className="gradient-text">Business Together</span>
            </h1>
            <p>
              Ready to get more leads, rank higher on Google, and scale your
              revenue? Our team of digital marketing experts in Indore is ready
              to build your custom strategy — completely free.
            </p>
            <div className="contact-trust" aria-label="Trust signals">
              <div className="contact-trust-item">
                <i className="fas fa-check-circle" aria-hidden="true"></i> Free
                Audit Included
              </div>
              <div className="contact-trust-item">
                <i className="fas fa-clock" aria-hidden="true"></i> Reply within
                24 hours
              </div>
              <div className="contact-trust-item">
                <i className="fas fa-shield-alt" aria-hidden="true"></i> No
                Commitment
              </div>
              <div className="contact-trust-item">
                <i className="fas fa-star" aria-hidden="true"></i> 5-Star Rated
                Agency
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="contact-quick" aria-label="Quick contact options">
        <div className="container">
          <div className="contact-quick-inner">
            <div className="contact-quick-item">
              <div className="contact-quick-icon" aria-hidden="true">
                <i className="fas fa-phone"></i>
              </div>
              <div>
                <div className="contact-quick-text">Call Us Now</div>
                <div className="contact-quick-value">
                  <a href="tel:+918103202086">+91 81032 02086</a>
                </div>
              </div>
            </div>
            <div className="contact-quick-item">
              <div className="contact-quick-icon" aria-hidden="true">
                <i className="fa-brands fa-whatsapp"></i>
              </div>
              <div>
                <div className="contact-quick-text">WhatsApp (Instant)</div>
                <div className="contact-quick-value">
                  <a
                    href="https://wa.me/918103202086"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    +91 81032 02086
                  </a>
                </div>
              </div>
            </div>
            <div className="contact-quick-item">
              <div className="contact-quick-icon" aria-hidden="true">
                <i className="fas fa-envelope"></i>
              </div>
              <div>
                <div className="contact-quick-text">Email Us</div>
                <div className="contact-quick-value">
                  <a href="mailto:digitalads959@gmail.com">
                    digitalads959@gmail.com
                  </a>
                </div>
              </div>
            </div>
            <div className="contact-quick-item">
              <div className="contact-quick-icon" aria-hidden="true">
                <i className="fas fa-map-marker-alt"></i>
              </div>
              <div>
                <div className="contact-quick-text">Our Location</div>
                <div className="contact-quick-value">Indore, Madhya Pradesh</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="gmb-hours-bar" aria-label="Business hours" itemScope itemType="https://schema.org/LocalBusiness">
        <div className="container">
          <div className="gmb-hours-inner">
            <div className="gmb-hours-status" id="gmbStatus">
              <span className={`status-dot ${new Date().getDay() !== 0 && new Date().getHours() * 60 + new Date().getMinutes() >= 10 * 60 + 30 && new Date().getHours() * 60 + new Date().getMinutes() < 19 * 60 ? 'open' : 'closed'}`} id="statusDot"></span>
              <span className="status-text" id="statusText" style={{ color: new Date().getDay() !== 0 && new Date().getHours() * 60 + new Date().getMinutes() >= 10 * 60 + 30 && new Date().getHours() * 60 + new Date().getMinutes() < 19 * 60 ? '#22c55e' : (new Date().getDay() === 0 ? '#ef4444' : '#f59e0b') }}>
                {new Date().getDay() === 0 ? 'Closed Today — Sunday Off' : (new Date().getHours() * 60 + new Date().getMinutes() >= 10 * 60 + 30 && new Date().getHours() * 60 + new Date().getMinutes() < 19 * 60 ? 'Open Now · Closes at 7:00 PM' : (new Date().getHours() * 60 + new Date().getMinutes() < 10 * 60 + 30 ? 'Opens Today at 10:30 AM' : `Closed · Opens ${new Date().getDay() === 6 ? 'Monday' : 'Tomorrow'} at 10:30 AM`))}
              </span>
            </div>
            <div className="gmb-hours-days">
              <div className="hours-day">
                <span className="day-name">Mon – Sat</span>
                <span className="day-time">10:30 AM – 7:00 PM</span>
              </div>
              <div className="hours-divider" aria-hidden="true"></div>
              <div className="hours-day closed-day">
                <span className="day-name">Sunday</span>
                <span className="day-time closed">Closed</span>
              </div>
            </div>
            <a href="https://share.google/4mgJdYDzlAdOkyjuS" target="_blank" rel="noopener noreferrer" className="gmb-verify-link" aria-label="Verify on Google My Business">
              <i className="fa-brands fa-google" aria-hidden="true"></i> Verify on GMB
            </a>
          </div>
        </div>
      </div>

      <section className="contact-page" aria-label="Contact form and information">
        <div className="container">
          <div className="contact-page-grid">
            <aside aria-label="Contact information">
              <h2>Get in Touch</h2>
              <p>
                Whether you have a quick question or want a detailed strategy
                session, we're here to help. Fill the form or reach us directly —
                we respond within 24 hours on all channels.
              </p>
              <div className="contact-info-cards" role="list">
                <div className="contact-info-card" role="listitem">
                  <i className="fas fa-phone" aria-hidden="true"></i>
                  <h4>Phone</h4>
                  <a href="tel:+918103202086">+91 81032 02086</a>
                  <p>Mon–Sat, 10:30 AM–7 PM IST</p>
                </div>
                <div className="contact-info-card" role="listitem">
                  <i className="fa-brands fa-whatsapp" aria-hidden="true"></i>
                  <h4>WhatsApp</h4>
                  <a href="https://wa.me/918103202086" target="_blank" rel="noopener noreferrer">+91 81032 02086</a>
                  <p>Fastest response channel</p>
                </div>
                <div className="contact-info-card" role="listitem">
                  <i className="fas fa-envelope" aria-hidden="true"></i>
                  <h4>Email</h4>
                  <a href="mailto:digitalads959@gmail.com">digitalads959@gmail.com</a>
                  <p>We reply within 24 hours</p>
                </div>
                <div className="contact-info-card" role="listitem">
                  <i className="fas fa-map-marker-alt" aria-hidden="true"></i>
                  <h4>Office Address</h4>
                  <p>Indore, Madhya Pradesh</p>
                  <p>India — 452001</p>
                </div>
                <div className="contact-info-card" role="listitem">
                  <i className="fas fa-clock" aria-hidden="true"></i>
                  <h4>Working Hours</h4>
                  <p>Mon–Sat: 10:30 AM – 7:00 PM</p>
                  <p style={{ color: "#dc2626", fontWeight: 600 }}>Sunday: Closed</p>
                </div>
                <div className="contact-info-card" role="listitem">
                  <i className="fas fa-bolt" aria-hidden="true"></i>
                  <h4>Response Time</h4>
                  <p>WhatsApp: &lt; 30 mins</p>
                  <p>Email: &lt; 24 hours</p>
                </div>
              </div>

              <div className="contact-social">
                <h4>Connect on Social Media</h4>
                <div className="contact-social-links">
                  <a href="https://wa.me/918103202086" target="_blank" rel="noopener noreferrer" className="contact-social-link wa" aria-label="WhatsApp Digitalads">
                    <i className="fa-brands fa-whatsapp" aria-hidden="true"></i> WhatsApp
                  </a>
                  <a href="https://www.instagram.com/thedigitalads_marketing/" target="_blank" rel="noopener noreferrer" className="contact-social-link ig" aria-label="Instagram Digitalads">
                    <i className="fa-brands fa-instagram" aria-hidden="true"></i> Instagram
                  </a>
                  <a href="https://youtube.com/@digitalads.marketing" target="_blank" rel="noopener noreferrer" className="contact-social-link yt" aria-label="YouTube Digitalads">
                    <i className="fa-brands fa-youtube" aria-hidden="true"></i> YouTube
                  </a>
                  <a href="https://www.linkedin.com/company/digitaladsailead/" target="_blank" rel="noopener noreferrer" className="contact-social-link li" aria-label="LinkedIn Digitalads">
                    <i className="fa-brands fa-linkedin-in" aria-hidden="true"></i> LinkedIn
                  </a>
                </div>
              </div>

              <div className="map-embed" aria-label="Office location on Google Maps">
                <LazyIframe
                  src="https://maps.google.com/maps?q=Digitalads+Digital+Marketing+Agency+Indore+Madhya+Pradesh&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height={260}
                  style={{ border: 0, display: "block" }}
                  title="Digitalads — Digital Marketing Agency Indore Location on Google Maps"
                  ariaLabel="Google Maps showing Digitalads office location in Indore, Madhya Pradesh"
                />
                <a
                  href="https://share.google/4mgJdYDzlAdOkyjuS"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="gmb-link"
                  aria-label="View Digitalads on Google My Business"
                >
                  <i className="fa-brands fa-google" aria-hidden="true"></i>
                  <span>
                    <strong>Digitalads — Google My Business</strong>
                    <small>View verified profile · Indore, MP · ⭐ 5.0 (47 reviews)</small>
                  </span>
                  <i className="fas fa-external-link-alt" aria-hidden="true" style={{ marginLeft: "auto", fontSize: "13px", color: "var(--primary-color)" }}></i>
                </a>
              </div>
            </aside>

            <div className="contact-page-form" role="complementary" aria-label="Contact form">
              <h3>Send Us a Message</h3>
              <p>
                Fill this form and our team will reach out with a free digital
                audit and strategy proposal within 24 hours.
              </p>

              {!formSubmitted ? (
                <form id="contactPageForm" noValidate aria-label="Contact form" autoComplete="on" onSubmit={handleSubmit}>
                  <div className="form-row-2">
                    <div className={`form-group ${errors.name ? 'has-error' : ''}`}>
                      <label htmlFor="cp-name">Full Name <span aria-hidden="true">*</span></label>
                      <input type="text" id="cp-name" name="name" required placeholder="Your full name" autoComplete="name" aria-required="true" onBlur={handleBlur} onChange={handleChange} className={errors.name ? 'error' : ''} />
                      <span className="error-msg" role="alert">Please enter your full name</span>
                    </div>
                    <div className={`form-group ${errors.phone ? 'has-error' : ''}`}>
                      <label htmlFor="cp-phone">Phone Number <span aria-hidden="true">*</span></label>
                      <input type="tel" id="cp-phone" name="phone" required placeholder="+91 XXXXX XXXXX" autoComplete="tel" aria-required="true" pattern="[0-9+\s\-]{8,15}" onBlur={handleBlur} onChange={handleChange} className={errors.phone ? 'error' : ''} />
                      <span className="error-msg" role="alert">Please enter a valid phone number</span>
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="cp-email">Email Address</label>
                    <input type="email" id="cp-email" name="email" placeholder="your@email.com" autoComplete="email" />
                    <span className="error-msg" role="alert">Please enter a valid email address</span>
                  </div>

                  <div className="form-group">
                    <label htmlFor="cp-business">Business Name &amp; City</label>
                    <input type="text" id="cp-business" name="business" placeholder="E.g. Dr. Sharma's Clinic, Indore" autoComplete="organization" />
                  </div>

                  <div className={`form-group ${errors.service ? 'has-error' : ''}`}>
                    <label htmlFor="cp-service">Service You're Interested In <span aria-hidden="true">*</span></label>
                    <select id="cp-service" name="service" required aria-required="true" onBlur={handleBlur} onChange={handleChange} className={errors.service ? 'error' : ''}>
                      <option value="">— Select a service —</option>
                      <optgroup label="Paid Advertising">
                        <option value="meta-ads">Meta Ads (Facebook &amp; Instagram)</option>
                        <option value="google-ads">Google Ads (Search &amp; YouTube)</option>
                      </optgroup>
                      <optgroup label="SEO & Local">
                        <option value="gmb-seo">GMB Optimization &amp; Local SEO</option>
                        <option value="website-seo">Website SEO</option>
                      </optgroup>
                      <optgroup label="AI & Automation">
                        <option value="ai-video">AI Video Ads (Reels &amp; Shorts)</option>
                        <option value="whatsapp">WhatsApp &amp; CRM Automation</option>
                      </optgroup>
                      <optgroup label="Design & Branding">
                        <option value="landing-page">Landing Page Design</option>
                        <option value="branding">Logo Design &amp; Branding</option>
                      </optgroup>
                      <optgroup label="Other">
                        <option value="social-media">Social Media Management</option>
                        <option value="full-service">Full Digital Marketing Package</option>
                        <option value="consultation">Free Consultation / Audit</option>
                      </optgroup>
                    </select>
                    <span className="error-msg" role="alert">Please select a service</span>
                  </div>

                  <div className="form-group">
                    <label htmlFor="cp-budget">Monthly Budget Range</label>
                    <select id="cp-budget" name="budget">
                      <option value="">— Select your budget (optional) —</option>
                      <option value="under-10k">Under ₹10,000/month</option>
                      <option value="10k-25k">₹10,000 – ₹25,000/month</option>
                      <option value="25k-50k">₹25,000 – ₹50,000/month</option>
                      <option value="50k-1l">₹50,000 – ₹1,00,000/month</option>
                      <option value="above-1l">Above ₹1,00,000/month</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="cp-message">Tell Us About Your Goals</label>
                    <textarea id="cp-message" name="message" rows={4} placeholder="Describe your business, current marketing challenges, and what results you'd like to achieve..."></textarea>
                  </div>

                  <button type="submit" className="btn btn-primary btn-large btn-block">
                    <i className="fas fa-paper-plane" aria-hidden="true"></i> Send Message &amp; Get Free Audit
                  </button>

                  <p className="form-note">
                    <i className="fas fa-lock" aria-hidden="true"></i> Your information
                    is 100% confidential. We reply within 24 hours — guaranteed.
                  </p>
                </form>
              ) : (
                <div className="form-success" id="cpFormSuccess" role="alert" aria-live="polite" style={{ display: "block" }}>
                  <i className="fas fa-check-circle" aria-hidden="true"></i>
                  <h3>Message Received!</h3>
                  <p>
                    Thank you! Our team will review your details and reach out
                    within 24 hours with a free digital audit.<br /><br />
                    For an instant response,{" "}
                    <a
                      href="https://wa.me/918103202086?text=Hi%20Digitalads,%20I%20just%20filled%20your%20contact%20form"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: "var(--primary-color)", fontWeight: 600 }}
                    >
                      WhatsApp us now →
                    </a>
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="why-contact" aria-label="Why choose Digitalads">
        <div className="container">
          <div className="section-header" style={{ marginBottom: "48px" }}>
            <div className="section-tag">Why Choose Us</div>
            <h2 className="section-title">What You Get When You Contact Us</h2>
          </div>
          <div className="why-contact-grid">
            <div className="why-contact-item">
              <div className="why-contact-icon" aria-hidden="true">
                <i className="fas fa-search-dollar"></i>
              </div>
              <h4>Free Digital Audit</h4>
              <p>
                We analyse your current SEO, ads, GMB profile, and website —
                completely free, with a written report.
              </p>
            </div>
            <div className="why-contact-item">
              <div className="why-contact-icon" aria-hidden="true">
                <i className="fas fa-map"></i>
              </div>
              <h4>Custom Growth Strategy</h4>
              <p>
                No templates. A personalised digital marketing plan tailored to
                your business, industry, and goals.
              </p>
            </div>
            <div className="why-contact-item">
              <div className="why-contact-icon" aria-hidden="true">
                <i className="fas fa-rupee-sign"></i>
              </div>
              <h4>Transparent Pricing</h4>
              <p>
                Clear, upfront pricing with no hidden fees. You know exactly what
                you're investing and what you'll get back.
              </p>
            </div>
            <div className="why-contact-item">
              <div className="why-contact-icon" aria-hidden="true">
                <i className="fas fa-handshake"></i>
              </div>
              <h4>No-Pressure Consultation</h4>
              <p>
                Zero obligation. Talk to our experts, understand the strategy, and
                decide if we're the right fit for you.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="contact-bottom-cta" aria-label="Final call to action">
        <div className="container">
          <div
            className="section-tag"
            style={{
              background: "rgba(255,255,255,0.2)",
              color: "#fff",
              borderColor: "rgba(255,255,255,0.3)",
            }}
          >
            Let's Talk — It's Free
          </div>
          <h2>Still Thinking? Let's Chat on WhatsApp</h2>
          <p>Get instant answers to all your questions — no forms, no wait time.</p>
          <div className="cta-buttons">
            <a
              href="https://wa.me/918103202086?text=Hi%20Digitalads,%20I%20want%20a%20free%20consultation"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-white btn-large"
            >
              <i className="fa-brands fa-whatsapp" aria-hidden="true"></i> Chat on
              WhatsApp
            </a>
            <a href="tel:+918103202086" className="btn btn-outline-white btn-large">
              <i className="fas fa-phone" aria-hidden="true"></i> Call +91 81032
              02086
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
