import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ClientLayout from "@/components/ClientLayout";
import Script from "next/script";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#0d0e12",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export const metadata: Metadata = {
  title: "Best Digital Marketing Agency in Indore | Meta Ads, Google Ads, Local SEO | Digitalads",
  description: "Digitalads — Indore's leading AI-first digital marketing agency. Meta Ads, Google Ads, Local SEO, GMB Optimization & AI Automation for clinics & coaching centers in Madhya Pradesh.",
  keywords: "digital marketing agency Indore, digital marketing company Indore, best digital marketing Indore",
  metadataBase: new URL("https://thedigitalads.in/"),
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
        {/* Google tag (gtag.js) */}
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-2Y705WQRVQ"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
          
            gtag('config', 'G-2Y705WQRVQ');
          `}
        </Script>
        {/* Ahrefs Analytics */}
        <Script 
          strategy="lazyOnload" 
          src="https://analytics.ahrefs.com/analytics.js" 
          data-key="cxtMpm0j1w+fSQOBMfMnaQ" 
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
        />
        <link rel="alternate" type="text/plain" title="LLMs Text Version" href="/llms.txt" />
        <link rel="alternate" type="application/rss+xml" title="Digitalads Blog RSS Feed" href="/feed.xml" />
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
              },
            ])
          }}
        />
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
