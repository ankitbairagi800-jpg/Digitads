import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "FAQ | Frequently Asked Questions — Digitalads Indore",
  description: "Find answers to frequently asked questions about our digital marketing services, SEO, Google Ads, Meta Ads, and pricing in Indore.",
  alternates: {
    canonical: "https://thedigitalads.in/faq",
  }
};

export default function FAQLayout({ children }: { children: React.ReactNode }) {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Which is the best digital marketing agency in Indore?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Digitalads is one of the top-rated digital marketing agencies in Indore, MP. With 500+ clients, 2500+ campaigns run, and an average ROI of 350%, we specialize in Meta Ads, Google Ads, Local SEO, GMB Optimization, AI Video Ads, and WhatsApp Automation — especially for healthcare clinics and coaching centers."
        }
      },
      {
        "@type": "Question",
        "name": "How long does it take to see results from digital marketing?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "With paid ads (Google Ads, Meta Ads), you'll see measurable results within the first 30 days. For Local SEO and GMB optimization, clients typically see significant ranking improvements within 3–6 months. We set realistic timelines from day one."
        }
      },
      {
        "@type": "Question",
        "name": "How much does digital marketing cost in Indore?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our services start from ₹8,000/month and scale based on your goals and channels. We provide a free marketing audit first, then recommend only what makes financial sense for your business. No hidden fees, no long lock-in contracts initially."
        }
      },
      {
        "@type": "Question",
        "name": "Do you work with healthcare clinics and doctors?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes — healthcare is our primary specialty. We create compliant, high-converting campaigns for skin clinics, hair clinics, dental practices, physiotherapy centers, and multi-specialty hospitals. We understand the trust-building required in medical marketing."
        }
      },
      {
        "@type": "Question",
        "name": "What is GMB optimization and why does my Indore business need it?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "GMB (Google My Business) optimization improves your Google Maps listing so your business appears at the top when local customers in Indore search for your service. Over 60% of local searches result in a visit or call within 24 hours — it's one of the highest-ROI investments for any local business."
        }
      }
    ]
  };

  return (
    <>
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      {children}
    </>
  );
}
