import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQ | Frequently Asked Questions — Digitalads Indore",
  description: "Find answers to frequently asked questions about our digital marketing services, SEO, Google Ads, Meta Ads, and pricing in Indore.",
  alternates: {
    canonical: "https://thedigitalads.in/faq",
  }
};

export default function FAQLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
