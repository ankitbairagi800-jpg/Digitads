import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Contact Digitalads | Digital Marketing Agency in Indore",
  description: "Get a free digital marketing audit and strategy consultation. Contact Digitalads in Indore for Meta Ads, Google Ads, SEO, and AI Automation.",
  alternates: {
    canonical: "https://thedigitalads.in/contact",
  }
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Script
        id="contact-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ContactPage",
            "name": "Contact Digitalads",
            "description": "Contact Digitalads for a free digital marketing audit and strategy consultation.",
            "url": "https://thedigitalads.in/contact",
            "mainEntity": {
              "@type": "LocalBusiness",
              "name": "Digitalads",
              "telephone": "+91-81032-02086",
              "email": "digitalads959@gmail.com",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Indore",
                "addressRegion": "Madhya Pradesh",
                "addressCountry": "IN"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+91-81032-02086",
                "contactType": "customer service",
                "areaServed": "IN",
                "availableLanguage": ["English", "Hindi"]
              }
            }
          })
        }}
      />
      {children}
    </>
  );
}
