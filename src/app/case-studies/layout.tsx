import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Client Case Studies & Results | Digitalads Indore",
  description: "Read real case studies of businesses we've grown in Indore. See exact strategies for Meta Ads, Google Ads, and Local SEO for clinics and coaching centers.",
  alternates: {
    canonical: "https://thedigitalads.in/case-studies",
  }
};

export default function CaseStudiesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
