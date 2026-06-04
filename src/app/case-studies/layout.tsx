import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Client Case Studies & Results | Digitalads Indore",
  description: "Read real case studies of businesses we've grown in Indore. See exact strategies for Meta Ads, Google Ads, and Local SEO for clinics and coaching centers.",
  alternates: {
    canonical: "https://thedigitalads.in/case-studies",
  }
};

export default function CaseStudiesLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Script
        id="casestudies-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "CollectionPage",
              "name": "Client Case Studies & Results",
              "description": "Read real case studies of businesses we've grown in Indore.",
              "url": "https://thedigitalads.in/case-studies"
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
                  "name": "Case Studies",
                  "item": "https://thedigitalads.in/case-studies"
                }
              ]
            }
          ])
        }}
      />
      {children}
    </>
  );
}
