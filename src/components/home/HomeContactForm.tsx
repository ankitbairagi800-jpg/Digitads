"use client";

import { useState } from "react";
import { saveLead } from "@/lib/db";

export default function HomeContactForm() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isSubmitting) return;

    const formData = new FormData(e.currentTarget);
    const name = formData.get("name") as string;
    const phone = formData.get("phone") as string;
    const service = formData.get("service") as string;

    if (!name || !phone || !service) {
      alert("Please fill in all required fields (Name, Phone, Service).");
      return;
    }

    setIsSubmitting(true);
    try {
      const options: Intl.DateTimeFormatOptions = { 
        month: 'short', day: '2-digit', year: 'numeric', 
        hour: 'numeric', minute: '2-digit', hour12: true 
      };
      
      await saveLead({
        name,
        phone,
        email: (formData.get("email") as string) || "Not provided",
        business: "Not provided (Homepage Form)",
        service,
        budget: "Not specified",
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
  };

  if (formSubmitted) {
    return (
      <div className="form-success" id="formSuccess" role="alert" style={{ display: 'block' }}>
        <i className="fas fa-check-circle" aria-hidden="true"></i>
        <h3>Message Received!</h3>
        <p>
          We'll get back to you within 24 hours. Or WhatsApp us for an
          instant response.
        </p>
      </div>
    );
  }

  return (
    <form className="contact-form" id="contactForm" noValidate onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="name">Full Name *</label>
        <input
          type="text"
          id="name"
          name="name"
          required
          placeholder="Your full name"
          autoComplete="name"
        />
      </div>
      <div className="form-group">
        <label htmlFor="phone">Phone Number *</label>
        <input
          type="tel"
          id="phone"
          name="phone"
          required
          placeholder="+91 XXXXX XXXXX"
          autoComplete="tel"
        />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email Address</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="your@email.com"
          autoComplete="email"
        />
      </div>
      <div className="form-group">
        <label htmlFor="service">Service Interested In *</label>
        <select id="service" name="service" required>
          <option value="">Select a service</option>
          <option value="meta-ads">
            Meta Ads (Facebook &amp; Instagram)
          </option>
          <option value="google-ads">
            Google Ads (Search &amp; YouTube)
          </option>
          <option value="gmb-seo">
            GMB Optimization &amp; Local SEO
          </option>
          <option value="ai-video">
            AI Video Ads (Reels &amp; Shorts)
          </option>
          <option value="automation">
            WhatsApp &amp; CRM Automation
          </option>
          <option value="landing-page">Landing Page Design</option>
          <option value="social-media">
            Social Media Management
          </option>
          <option value="branding">Logo Design &amp; Branding</option>
          <option value="consultation">
            Free Consultation / Audit
          </option>
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="message">Tell Us About Your Goals</label>
        <textarea
          id="message"
          name="message"
          rows={4}
          placeholder="Describe your business, current challenges, and what you want to achieve..."
        ></textarea>
      </div>
      <button
        type="submit"
        className="btn btn-primary btn-large btn-block"
        disabled={isSubmitting}
      >
        <i className="fas fa-paper-plane" aria-hidden="true"></i>{" "}
        {isSubmitting ? "Sending..." : "Send Message"}
      </button>
      <p className="form-note">
        🔒 Your information is safe. We reply within 24 hours.
      </p>
    </form>
  );
}
