import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Digital Marketing Blog | SEO, Ads, AI & Automation Tips | Digitalads Indore",
  description: "Read expert digital marketing insights from Digitalads — Indore's leading agency. Tips on Meta Ads, Google Ads, Local SEO, GMB Optimization, WhatsApp Automation & AI Marketing for clinics and coaching centers.",
  keywords: "digital marketing blog, SEO tips Indore, Google Ads guide, Meta Ads tips, WhatsApp automation, marketing blog India",
  alternates: {
    canonical: "https://thedigitalads.in/blog",
  },
  openGraph: {
    title: "Digital Marketing Blog | Digitalads — Indore",
    description: "Expert insights on Meta Ads, Google Ads, Local SEO, AI Marketing & WhatsApp Automation for businesses in Indore.",
    url: "https://thedigitalads.in/blog",
    siteName: "Digitalads",
    images: [{ url: "/logo.jpg", width: 1200, height: 630, alt: "Digitalads Blog" }],
    locale: "en_IN",
    type: "website",
  },
};

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
