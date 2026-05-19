import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Digitalads | Digital Marketing Agency in Indore",
  description: "Get a free digital marketing audit and strategy consultation. Contact Digitalads in Indore for Meta Ads, Google Ads, SEO, and AI Automation.",
  alternates: {
    canonical: "https://thedigitalads.in/contact",
  }
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
