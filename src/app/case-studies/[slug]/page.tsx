import { caseStudiesData } from "@/data/case-studies";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Script from "next/script";
import { notFound } from "next/navigation";
import SocialShare from "@/components/SocialShare";

export async function generateStaticParams() {
  return caseStudiesData.map((study) => ({
    slug: study.id
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const resolvedParams = await params;
  const study = caseStudiesData.find((s) => s.id === resolvedParams.slug);

  if (!study) {
    return {
      title: 'Case Study Not Found | DigitalAds',
    };
  }

  const description = study.problem.substring(0, 150) + "...";

  return {
    title: `${study.title} Case Study | DigitalAds Indore`,
    description: description,
    keywords: study.tags.join(", ") + ", case study, digital marketing Indore, Digitalads",
    alternates: {
      canonical: `https://thedigitalads.in/case-studies/${study.id}`
    },
    openGraph: {
      title: `${study.title} Case Study`,
      description: description,
      url: `https://thedigitalads.in/case-studies/${study.id}`,
      siteName: "Digitalads",
      images: study.image ? [{
        url: study.image,
        width: 1200,
        height: 630,
        alt: study.title,
      }] : [{ url: "/logo.jpg", width: 1200, height: 630, alt: "Digitalads Case Study" }],
      locale: "en_IN",
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: `${study.title} Case Study`,
      description: description,
      images: study.image ? [study.image] : ["/logo.jpg"],
    },
  };
}

export default async function CaseStudyDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const study = caseStudiesData.find((s) => s.id === resolvedParams.slug);

  if (!study) {
    notFound();
  }

  // JSON-LD Structured Data for Article / Case Study
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": `${study.title} - Digital Marketing Case Study`,
      "description": study.problem,
      "image": study.image ? `https://thedigitalads.in${study.image}` : "https://thedigitalads.in/logo.jpg",
      "author": {
        "@type": "Organization",
        "name": "Digitalads",
        "url": "https://thedigitalads.in"
      },
      "publisher": {
        "@type": "Organization",
        "name": "Digitalads",
        "logo": {
          "@type": "ImageObject",
          "url": "https://thedigitalads.in/logo.jpg"
        }
      },
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": `https://thedigitalads.in/case-studies/${study.id}`
      },
      "keywords": study.tags.join(", ")
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
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": study.title,
          "item": `https://thedigitalads.in/case-studies/${study.id}`
        }
      ]
    }
  ];

  return (
    <main style={{ background: '#f8fafc' }}>
      <Script
        id="casestudy-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      {/* Hero Section */}
      <section className="page-hero" aria-label="Case study hero" style={{ paddingBottom: '60px' }}>
        <div className="container">
          <div className="page-hero-inner" style={{ textAlign: 'center', maxWidth: '900px', margin: '0 auto' }}>
            <nav aria-label="Breadcrumb" className="breadcrumb" style={{ justifyContent: 'center' }}>
              <Link href="/">Home</Link>
              <span className="breadcrumb-sep">›</span>
              <Link href="/case-studies">Case Studies</Link>
              <span className="breadcrumb-sep">›</span>
              <span className="breadcrumb-current">{study.title}</span>
            </nav>
            <div className="section-tag" style={{ margin: '20px auto' }}>{study.subtitle}</div>
            <h1>{study.title}</h1>
            <div className="case-tags" style={{ justifyContent: 'center', margin: '20px 0 40px 0' }}>
              {study.tags.map(tag => (
                <span key={tag} className="case-tag">#{tag}</span>
              ))}
            </div>
            {study.image && (
              <div style={{ width: '100%', position: 'relative', borderRadius: '16px', overflow: 'hidden', boxShadow: '0 20px 40px rgba(0,0,0,0.4)', marginTop: '20px' }}>
                <Image 
                  src={study.image} 
                  // @ts-ignore
                  alt={study.imageAlt || `${study.title} Case Study`}
                  width={1200}
                  height={630}
                  style={{ width: '100%', height: 'auto', display: 'block' }}
                  priority
                />
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Case Study Content */}
      <section style={{ padding: '60px 0', background: '#fff' }}>
        <div className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>
          
          <div style={{ marginBottom: '50px' }}>
            <h2 style={{ fontSize: '32px', color: '#0f172a', marginBottom: '20px', borderBottom: '2px solid var(--primary-color)', paddingBottom: '10px', display: 'inline-block' }}>
              <i className="fas fa-exclamation-triangle" style={{ color: 'var(--primary-color)', marginRight: '10px' }}></i>
              The Problem
            </h2>
            <p style={{ fontSize: '18px', lineHeight: '1.8', color: '#475569' }}>
              {study.problem}
            </p>
          </div>

          <div style={{ marginBottom: '50px' }}>
            <h2 style={{ fontSize: '32px', color: '#0f172a', marginBottom: '20px', borderBottom: '2px solid #22c55e', paddingBottom: '10px', display: 'inline-block' }}>
              <i className="fas fa-check-circle" style={{ color: '#22c55e', marginRight: '10px' }}></i>
              The Solution & Execution
            </h2>
            <p style={{ fontSize: '18px', lineHeight: '1.8', color: '#475569' }}>
              {study.solution}
            </p>
          </div>

          <div style={{ marginTop: '20px', padding: '20px', backgroundColor: '#f8fafc', borderRadius: '12px', border: '1px solid #e2e8f0', '--text-color': '#0f172a' } as React.CSSProperties}>
            <h3 style={{ marginBottom: '10px', fontSize: '20px', color: '#0f172a' }}>Share this case study</h3>
            <SocialShare title={`${study.title} Case Study`} />
          </div>

          <div style={{ padding: '40px', background: 'linear-gradient(135deg, #f0fdf4 0%, #dcfce7 100%)', borderRadius: '16px', textAlign: 'center', marginTop: '60px' }}>
            <h3 style={{ fontSize: '24px', color: '#166534', marginBottom: '16px' }}>Ready to get similar results?</h3>
            <p style={{ color: '#15803d', marginBottom: '24px', fontSize: '18px' }}>Stop wasting ad spend. Let us build a predictable growth funnel for your business.</p>
            <Link href="/contact" className="btn btn-primary btn-large">
              Book Your Free Strategy Call
            </Link>
          </div>

        </div>
      </section>
    </main>
  );
}
