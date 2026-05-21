import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ClientLayout from "@/components/ClientLayout";
import Script from "next/script";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Best Digital Marketing Agency in Indore | Meta Ads, Google Ads, Local SEO | Digitalads",
  description: "Digitalads — Indore's leading AI-first digital marketing agency. Meta Ads, Google Ads, Local SEO, GMB Optimization & AI Automation for clinics & coaching centers in Madhya Pradesh.",
  keywords: "digital marketing agency Indore, digital marketing company Indore, best digital marketing Indore",
  metadataBase: new URL("https://thedigitalads.in/"),
  alternates: {
    canonical: "/",
  },
  authors: [{ name: "Digitalads — Ankit Bairagi" }],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  manifest: "/site.webmanifest",
  openGraph: {
    title: "Digitalads – Best Digital Marketing Agency in Indore | We Deliver Results",
    description: "Meta Ads, Google Ads, Local SEO, GMB Optimization & AI Automation for clinics & coaching centers in Indore, MP. 500+ clients. 350% avg ROI. Get free audit today.",
    url: "https://thedigitalads.in/",
    siteName: "Digitalads",
    images: [
      {
        url: "/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Digitalads — #1 AI-First Digital Marketing Agency in Indore, MP",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Digitalads – Best Digital Marketing Agency in Indore",
    description: "Meta Ads, Google Ads, Local SEO, GMB Optimization for clinics & coaching centers in Indore. 500+ clients. 350% avg ROI.",
    site: "@thedigitalads_marketing",
    creator: "@thedigitalads_marketing",
    images: ["/logo.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-IN">
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.0/css/all.min.css"
          media="print"
          // @ts-ignore
          onLoad="this.media='all'"
        />
        <noscript>
          <link
            rel="stylesheet"
            href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.0/css/all.min.css"
          />
        </noscript>
      </head>
      <body className={inter.className}>
        <Script
          id="schema-org"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              {
                "@context": "https://schema.org",
                "@type": "Organization",
                "name": "Digitalads",
                "url": "https://thedigitalads.in/",
                "logo": "https://thedigitalads.in/logo.jpg",
                "contactPoint": {
                  "@type": "ContactPoint",
                  "telephone": "+918103202086",
                  "contactType": "customer service"
                }
              },
              {
                "@context": "https://schema.org",
                "@type": "WebSite",
                "name": "Digitalads",
                "url": "https://thedigitalads.in/",
                "potentialAction": {
                  "@type": "SearchAction",
                  "target": "https://thedigitalads.in/blog?q={search_term_string}",
                  "query-input": "required name=search_term_string"
                }
              }
            ])
          }}
        />
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
