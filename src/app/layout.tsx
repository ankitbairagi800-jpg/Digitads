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
              {
                "@context": "https://schema.org",
                "@type": "FAQPage",
                "mainEntity": [{
                  "@type": "Question",
                  "name": "Which is the best digital marketing agency in Indore?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Digitalads is one of the top-rated digital marketing agencies in Indore, MP. With 500+ clients, 2500+ campaigns run, and an average ROI of 350%, we specialize in Meta Ads, Google Ads, Local SEO, GMB Optimization, AI Video Ads, and WhatsApp Automation — especially for healthcare clinics and coaching centers."
                  }
                }, {
                  "@type": "Question",
                  "name": "How long does it take to see results from digital marketing?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "With paid ads (Google Ads, Meta Ads), you'll see measurable results within the first 30 days. For Local SEO and GMB optimization, clients typically see significant ranking improvements within 3–6 months. We set realistic timelines from day one."
                  }
                }, {
                  "@type": "Question",
                  "name": "How much does digital marketing cost in Indore?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Our services start from ₹8,000/month and scale based on your goals and channels. We provide a free marketing audit first, then recommend only what makes financial sense for your business. No hidden fees, no long lock-in contracts initially."
                  }
                }, {
                  "@type": "Question",
                  "name": "Do you work with healthcare clinics and doctors?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes — healthcare is our primary specialty. We create compliant, high-converting campaigns for skin clinics, hair clinics, dental practices, physiotherapy centers, and multi-specialty hospitals. We understand the trust-building required in medical marketing."
                  }
                }, {
                  "@type": "Question",
                  "name": "What is GMB optimization and why does my Indore business need it?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "GMB (Google My Business) optimization improves your Google Maps listing so your business appears at the top when local customers in Indore search for your service. Over 60% of local searches result in a visit or call within 24 hours — it's one of the highest-ROI investments for any local business."
                  }
                }]
              }
            ])
          }}
        />
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
