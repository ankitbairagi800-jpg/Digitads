import { initializeApp, getApps, getApp } from "firebase/app";
import { 
  getFirestore, 
  collection, 
  getDocs, 
  doc, 
  setDoc, 
  deleteDoc,
  query,
  orderBy
} from "firebase/firestore";

// Interfaces
export interface BlogPost {
  id: string; // string ID
  title: string;
  excerpt: string;
  content: string; // Markdown content for article reading
  category: string;
  readTime: string;
  date: string;
  tags: string[];
  slug: string;
  icon: string;
  image?: string;
  imageAlt?: string;
  isFeatured?: boolean;
}

export interface ServiceItem {
  id: string; // ID matches slug, e.g. "meta-ads"
  title: string;
  price: string;
  description: string;
  features: string[];
  icon: string;
  visualTitle: string;
  visualDescription: string;
  reverseLayout?: boolean;
  order: number;
}

// Pre-seeded Blogs
const defaultBlogs: BlogPost[] = [
  {
    id: "ai-future-marketing",
    title: "The Future of Marketing: How AI is Changing the Game in 2025",
    excerpt: "Artificial intelligence isn't just a buzzword—it's actively reshaping how businesses acquire and retain customers. In this deep dive, we explore practical AI applications you can implement today.",
    content: `# The Future of Marketing: How AI is Changing the Game in 2025

Artificial intelligence is no longer a distant technology or a novelty. In 2025, AI has become the foundational engine for modern performance marketing, customer acquisition, and CRM automation.

For local clinics, coaching centers, and service-based businesses in Indore, AI provides a unique opportunity to compete with national brands on a fraction of their budget. Let’s break down exactly how AI is changing the marketing landscape and how you can implement these technologies.

---

## 1. Hyper-Personalized Ad Creatives
With AI-powered design tools, we are moving away from generic static banner ads. Modern AI can generate scroll-stopping video hooks, high-quality voiceovers, and customized visual copy tailored specifically for different segments of your target audience.
- **Tools to watch:** Midjourney for image generation, ElevenLabs for studio-quality voiceovers, and CapCut AI for automated video editing.
- **Why it matters:** Higher click-through rates (CTR) and up to 40% lower cost-per-lead (CPL) on Meta Ads.

---

## 2. Conversational Lead Nurturing
Most ad spend is wasted not because the ads are bad, but because the business fails to follow up in time. AI-driven WhatsApp chatbots can instantly engage a lead the second they submit a form, answer common questions, qualify their intent, and book them directly into your calendar.
- **Implementation:** Integrating custom LLMs with WhatsApp APIs using platforms like n8n or Make.com.
- **Why it matters:** Responding within 5 minutes increases conversion rates by over 300%.

---

## 3. Predictable Local SEO
AI algorithms now help analyze hundreds of localized search queries across Indore. Instead of guessing what patients or students are looking for, businesses can optimize their Google My Business (GMB) listings and local service pages using exact search intent maps.

---

## Conclusion: Get Started Today
If you aren't integrating AI into your marketing pipeline, your competitors in Indore soon will. The best part? You don't need a massive tech budget to start. Begin with n8n WhatsApp automations and AI-assisted GMB posting, and watch your customer acquisition cost fall.`,
    category: "Automation",
    readTime: "8 min read",
    date: "Nov 15, 2025",
    tags: ["AI", "Marketing", "Future"],
    slug: "ai-future-marketing",
    icon: "fa-solid fa-chart-line",
    image: "/blog-ai-marketing.png",
    imageAlt: "AI-powered digital marketing automation concept showing artificial intelligence brain connected to social media and analytics — Digitalads Indore",
    isFeatured: true
  },
  {
    id: "ai-local-seo",
    title: "How AI is Revolutionizing Local SEO for Clinics",
    excerpt: "Discover how artificial intelligence tools can automate your GMB optimization and bring consistent local leads.",
    content: `# How AI is Revolutionizing Local SEO for Clinics

For medical clinics, dental centers, and specialized healthcare practices in Indore, local visibility is everything. When someone searches "dermatologist near me" or "best pediatric clinic in Vijay Nagar," the top 3 spots in Google Maps (the Local 3-Pack) receive over 60% of all clicks.

Today, smart clinics are leveraging Artificial Intelligence (AI) to dominate local search results and secure those top spots automatically. Here is how you can do the same.

---

## 1. Automated Review Management & Sentiment Analysis
Reviews are the single biggest ranking factor for local SEO. However, replying to every review professionally and incorporating keyword-rich phrases is time-consuming.
- **The AI Solution:** AI assistants can instantly draft custom, HIPAA-compliant review responses that thank the patient and organically include relevant service keywords.
- **SEO Impact:** Google rewards profiles with high response rates and frequent keyword mentions.

---

## 2. Schema Markup & Local Structured Data
Google needs to understand precisely what services your clinic offers, your working hours, and doctor availability.
- **The AI Solution:** AI can write complex JSON-LD local schema codes for your website, ensuring Google’s crawlers index your business accurately.

---

## 3. Hyper-Local Content Creation
To rank for local queries, your website needs content mentioning Indore neighborhoods, health trends, and community interests. AI tools can help optimize blog topics and GMB updates tailored specifically to your Indore demographic.`,
    category: "SEO",
    readTime: "5 min read",
    date: "Oct 28, 2025",
    tags: ["AI", "Local SEO", "Clinics"],
    slug: "ai-local-seo",
    icon: "fa-solid fa-robot",
    image: "/blog-local-seo.png",
    imageAlt: "Local SEO and Google Maps optimization for clinics in Indore — GMB ranking strategy by Digitalads"
  },
  {
    id: "meta-vs-google",
    title: "Meta Ads vs Google Ads: Which is Better for Coaching Centers?",
    excerpt: "A comprehensive breakdown of when to use Meta Ads for awareness and Google Ads for intent-driven student enrollments.",
    content: `# Meta Ads vs Google Ads: Which is Better for Coaching Centers?

In Indore's highly competitive education hub—from NEET/JEE prep in Geeta Bhawan to civil services coaching—acquiring student enrollments is a numbers game. 

Should you run ads on **Facebook & Instagram (Meta)** or **Google Search & YouTube**? Let's analyze the strengths of both channels and see how to budget them for maximum registrations.

---

## Google Ads: High-Intent Capture (Demand Fulfillment)
Google Ads work on search queries. When a student or parent types *"best NEET coaching in Indore"* or *"IIT JEE coaching near me"*, they are already looking to enroll.

### Google Ads Pros:
- **Immediate Conversion:** High conversion rate because searchers have strong intent.
- **Surgical Targets:** Bid strictly on highly relevant keywords.

### Google Ads Cons:
- **Higher Cost:** Highly competitive keywords in Indore can cost ₹80 - ₹150+ per click.
- **No Audience Building:** You only reach people who are already actively searching.

---

## Meta Ads: Interruption Marketing (Demand Generation)
Meta Ads are visual. They appear on Facebook feeds and Instagram Reels. Students don't search for coaching here; we interrupt their scrolling with highly engaging visual ads (student success records, campus tours, scholarship offers).

### Meta Ads Pros:
- **Very Low Lead Cost:** Generating a lead on Meta is often 4x-5x cheaper than Google Ads.
- **Massive Reach:** Excellent for establishing your coaching brand across Central India.
- **Retargeting Power:** Serve ads to students who visited your website but didn't enroll.

---

## The Winner & Recommendation
For optimal growth, use a **Hybrid Strategy**:
1. **Google Search Ads (40% budget):** To capture direct, intent-driven conversions.
2. **Meta Ads (60% budget):** To build massive local awareness with AI Video Ads and Retargeting.`,
    category: "Ads",
    readTime: "7 min read",
    date: "Oct 12, 2025",
    tags: ["Meta Ads", "Google Ads", "Education"],
    slug: "meta-vs-google",
    icon: "fa-solid fa-bullseye",
    image: "/blog-meta-vs-google.png",
    imageAlt: "Meta Ads vs Google Ads comparison for coaching centers in Indore — which platform delivers more student enrollments"
  },
  {
    id: "whatsapp-automation",
    title: "The Ultimate Guide to WhatsApp Marketing Automation",
    excerpt: "Learn how to set up an automated WhatsApp funnel that nurtures leads and schedules appointments 24/7.",
    content: `# The Ultimate Guide to WhatsApp Marketing Automation

For modern clinics and service businesses in India, email is practically dead. WhatsApp, however, boasts a **98% open rate** and a **45-60% click-through rate**.

If your team is still manually copy-pasting follow-ups or sending appointment reminders individually, you are losing valuable business. Here is how to automate your entire communication pipeline using WhatsApp Business API.

---

## Step 1: Instantly Capture and Acknowledge Leads
The second a lead submits an ad form on Meta or your landing page, an automated system should trigger.
- **The Flow:** Trigger an instant, friendly welcome message on WhatsApp: *"Hi [Name]! Thanks for reaching out to Digitalads. We've received your request..."*
- **The Value:** Cuts down lead response time to under 2 seconds, sealing their interest.

---

## Step 2: Interactive Appointment Scheduling
Instead of back-and-forth calling, let customers book their slot inside WhatsApp.
- **The Flow:** Send an interactive button message with options: *"Book Slot"* or *"Speak to Executive"*. Clicking *"Book Slot"* opens a Calendly link or n8n scheduler.

---

## Step 3: Automated Attendance Reminders
Missed appointments cost money. Setting up reminders 24 hours and 2 hours before the appointment dramatically cuts down no-shows.
- **The Result:** Reduce no-show rates by up to 80% for clinics and spas.`,
    category: "Automation",
    readTime: "6 min read",
    date: "Nov 05, 2025",
    tags: ["WhatsApp", "Chatbot", "Lead Nurturing"],
    slug: "whatsapp-automation",
    icon: "fa-brands fa-whatsapp",
    image: "/blog-whatsapp-automation.png",
    imageAlt: "WhatsApp Business API automation for lead nurturing and appointment booking — Digitalads Indore"
  },
  {
    id: "clinic-landing-pages",
    title: "Why Your Clinic Needs a Dedicated Landing Page",
    excerpt: "Stop sending ad traffic to your homepage. Here is why dedicated landing pages convert 3x better for healthcare.",
    content: `# Why Your Clinic Needs a Dedicated Landing Page

Are you running Google or Meta Ads for your Indore clinic and sending all that paid traffic to your website's homepage? If yes, you are likely wasting a massive chunk of your advertising budget.

A homepage is designed to be an information hub. It has navigation menus, service lists, team bios, social links, and blog feeds. While great for exploration, it is **terrible for conversions**. Here is why your clinic needs dedicated, single-focused landing pages.

---

## 1. Eliminating Decision Paralysis
When a user clicks an ad for *"Laser Hair Removal in Indore"*, they want to see one thing: details about Laser Hair Removal, pricing, results, and a booking form.
- **Homepage:** They get lost in menus, about pages, and other service links. Most leave without booking.
- **Landing Page:** 100% focused on Laser Hair Removal. No distraction links, only a single "Book Appointment" form.

---

## 2. Faster Load Speeds
Landing pages are built lean and lightweight. 
- A 1-second delay in page load time can reduce conversions by 20%. Dedicated landing pages load in under 1.5 seconds, securing mobile users instantly.

---

## 3. Better Google Ads Quality Score
Google rewards landing pages that match the ad's keyword exactly. A higher match rating improves your **Quality Score**, which directly lowers your cost-per-click (CPC) by up to 30%!`,
    category: "Design",
    readTime: "4 min read",
    date: "Oct 20, 2025",
    tags: ["Web Design", "CRO", "Clinics"],
    slug: "clinic-landing-pages",
    icon: "fa-solid fa-laptop-medical",
    image: "/blog-landing-pages.png",
    imageAlt: "High-converting landing page design for medical clinics in Indore — mobile responsive with booking form"
  }
];

// Pre-seeded Services
const defaultServices: ServiceItem[] = [
  {
    id: "meta-ads",
    title: "Meta Ads — Facebook & Instagram Advertising",
    price: "₹12,000/month",
    description: "We design and manage high-converting Meta Ad campaigns that target your ideal patients or students with surgical precision — not just broad demographics. From creative to conversion, we handle everything.",
    features: [
      "Campaign strategy and audience research",
      "Professional ad creative design (static + video)",
      "Facebook & Instagram campaign setup",
      "Lookalike & retargeting audiences",
      "Lead form and landing page integration",
      "Daily monitoring & weekly optimization",
      "Monthly performance reports with insights"
    ],
    icon: "fa-brands fa-meta",
    visualTitle: "Meta Ads Indore",
    visualDescription: "Facebook & Instagram campaigns that generate 5–15 qualified leads daily for clinics and coaching centers",
    reverseLayout: false,
    order: 1
  },
  {
    id: "google-ads",
    title: "Google Ads — Search & YouTube Campaigns",
    price: "₹12,000/month",
    description: "When someone in Indore searches \"best skin clinic near me\" or \"NEET coaching in Indore\" — your ad appears first. We capture high-intent traffic that converts into appointments faster than any other channel.",
    features: [
      "Keyword research and competitor analysis",
      "Google Search campaign setup and optimization",
      "YouTube ad campaigns (in-stream & shorts)",
      "Display and remarketing campaigns",
      "Conversion tracking with Google Analytics 4",
      "Smart bidding and Quality Score optimization",
      "Monthly detailed performance dashboard"
    ],
    icon: "fa-brands fa-google",
    visualTitle: "Google Ads Indore",
    visualDescription: "Capture high-intent searches and turn them into booked appointments within 30 days",
    reverseLayout: true,
    order: 2
  },
  {
    id: "gmb-seo",
    title: "GMB Optimization & Local SEO Indore",
    price: "₹8,000/month",
    description: "When locals search for services in Indore, they see the Google Maps \"Local Pack\" first. We get your business into that coveted top 3 — more walk-ins, more calls, more business from people already searching for what you offer.",
    features: [
      "Complete GMB profile audit and optimization",
      "Google Maps ranking strategy",
      "Review generation and reputation management",
      "Local keyword optimization (Indore + MP)",
      "Citation building and directory listings",
      "On-page local SEO for your website",
      "Monthly ranking progress reports"
    ],
    icon: "fas fa-map-marked-alt",
    visualTitle: "GMB & Local SEO Indore",
    visualDescription: "Rank in Google Maps Top 3 and attract 50–200% more walk-ins from local searches",
    reverseLayout: false,
    order: 3
  },
  {
    id: "ai-video",
    title: "AI Video Ads — Reels & YouTube Shorts",
    price: "₹10,000/month (4 videos)",
    description: "Video content is king — but expensive to produce. We use AI tools like CapCut AI, ElevenLabs, and ChatGPT to create professional, scroll-stopping video ads at a fraction of traditional production costs.",
    features: [
      "AI-generated scripts and voiceovers (ElevenLabs)",
      "Professional Reel editing with CapCut AI",
      "Auto-subtitles, transitions and motion graphics",
      "Brand-consistent styling and colors",
      "Optimized for Instagram Reels and YouTube Shorts",
      "4–8 videos per month depending on plan",
      "Ready-to-publish with posting schedule"
    ],
    icon: "fas fa-film",
    visualTitle: "AI Video Ads Indore",
    visualDescription: "Professional Reels & Shorts that build trust and drive action — without expensive production crews",
    reverseLayout: true,
    order: 4
  },
  {
    id: "automation",
    title: "WhatsApp & CRM Automation",
    price: "One-time setup ₹15,000 – ₹40,000",
    description: "Most businesses lose 60–70% of leads because they follow up too late or not at all. We build automated workflows using n8n and Make.com that respond instantly — 24/7 — turning cold inquiries into booked appointments.",
    features: [
      "Instant WhatsApp auto-reply to new leads",
      "Appointment booking reminder flows",
      "Email and SMS drip sequences",
      "CRM lead tracking and pipeline setup",
      "n8n / Make.com workflow automation",
      "Integration with Facebook Lead Ads & Google Forms",
      "No lead left behind — 100% follow-up guarantee"
    ],
    icon: "fa-brands fa-whatsapp",
    visualTitle: "WhatsApp Automation Indore",
    visualDescription: "Never lose a lead again — 24/7 automated follow-up that converts inquiries to appointments",
    reverseLayout: false,
    order: 5
  },
  {
    id: "landing-pages",
    title: "High-Converting Landing Pages & Websites",
    price: "Starting from ₹8,000 (one-time)",
    description: "Your ad campaign is only as good as the page people land on. We build fast, mobile-optimized, conversion-focused landing pages that turn ad clicks into real inquiries — not bounces.",
    features: [
      "Mobile-first, fully responsive design",
      "Conversion-optimized layout and copywriting",
      "Fast Core Web Vitals and page speed",
      "WhatsApp click-to-chat integration",
      "Lead form with CRM/WhatsApp automation",
      "SEO-ready structure and meta tags",
      "A/B testing support"
    ],
    icon: "fas fa-laptop-code",
    visualTitle: "Landing Pages Indore",
    visualDescription: "Pages that load fast, look premium, and convert visitors into leads — not just pretty designs",
    reverseLayout: true,
    order: 6
  },
  {
    id: "branding",
    title: "Logo Design & Brand Identity",
    price: "Logo from ₹5,000 | Full Branding from ₹15,000",
    description: "Your brand is the first impression. We create professional logo designs and complete brand identity systems that build instant trust and make your clinic or coaching center look like the premium choice in Indore.",
    features: [
      "Custom logo design (3 concepts)",
      "Brand color palette and typography",
      "Social media profile branding",
      "Business card and letterhead design",
      "Brand style guide document",
      "All files in editable formats (AI, PNG, SVG)"
    ],
    icon: "fas fa-paint-brush",
    visualTitle: "Logo & Branding Indore",
    visualDescription: "Professional brand identity that builds trust and makes you the obvious choice in your market",
    reverseLayout: false,
    order: 7
  }
];

// Initialize Firebase only if the user explicitly wants to use it via env
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID
};

const useFirebase = 
  process.env.NEXT_PUBLIC_USE_FIREBASE === "true" && 
  process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID;

let db: any = null;

if (typeof window !== "undefined" && useFirebase) {
  try {
    const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();
    db = getFirestore(app);
  } catch (error) {
    console.error("Firebase initialization failed:", error);
  }
}

// Helpers for localStorage (Safe for Server-Side Rendering fallback)
const getLocalData = (key: string, defaultVal: any) => {
  if (typeof window === "undefined") return defaultVal;
  try {
    const item = localStorage.getItem(key);
    if (!item) {
      localStorage.setItem(key, JSON.stringify(defaultVal));
      return defaultVal;
    }
    return JSON.parse(item);
  } catch (e) {
    return defaultVal;
  }
};

const saveLocalData = (key: string, data: any) => {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem(key, JSON.stringify(data));
  } catch (e) {
    console.error("Error saving local storage", e);
  }
};

// Database APIs
export const getBlogs = async (): Promise<BlogPost[]> => {
  if (typeof window === "undefined") {
    return defaultBlogs;
  }

  try {
    const res = await fetch("/api/blogs");
    if (res.ok) {
      const data = await res.json();
      return data;
    }
  } catch (e) {
    console.warn("Cloudflare API unavailable, falling back to local storage.", e);
  }

  if (useFirebase && db) {
    try {
      const q = query(collection(db, "blogs"));
      const querySnapshot = await getDocs(q);
      const blogsList: BlogPost[] = [];
      querySnapshot.forEach((docSnap) => {
        blogsList.push(docSnap.data() as BlogPost);
      });
      if (blogsList.length === 0) {
        for (const blog of defaultBlogs) {
          await setDoc(doc(db, "blogs", blog.id), blog);
          blogsList.push(blog);
        }
      }
      return blogsList.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
    } catch (e) {
      console.error("Firebase getBlogs error:", e);
    }
  }
  return getLocalData("blogs", defaultBlogs);
};

export const saveBlog = async (blog: BlogPost): Promise<void> => {
  try {
    const res = await fetch("/api/blogs", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(blog)
    });
    if (res.ok) return;
  } catch (e) {
    console.warn("Cloudflare API save failed, saving locally:", e);
  }

  if (useFirebase && db) {
    try {
      await setDoc(doc(db, "blogs", blog.id), blog);
      return;
    } catch (e) {
      console.error("Firebase saveBlog error:", e);
    }
  }
  const blogs = await getBlogs();
  const idx = blogs.findIndex((b) => b.id === blog.id);
  if (idx !== -1) {
    blogs[idx] = blog;
  } else {
    blogs.push(blog);
  }
  saveLocalData("blogs", blogs);
};

export const deleteBlog = async (id: string): Promise<void> => {
  try {
    const res = await fetch(`/api/blogs?id=${id}`, { method: "DELETE" });
    if (res.ok) return;
  } catch (e) {
    console.warn("Cloudflare API delete failed, deleting locally:", e);
  }

  if (useFirebase && db) {
    try {
      await deleteDoc(doc(db, "blogs", id));
      return;
    } catch (e) {
      console.error("Firebase deleteBlog error:", e);
    }
  }
  const blogs = await getBlogs();
  const filtered = blogs.filter((b) => b.id !== id);
  saveLocalData("blogs", filtered);
};

export const getServices = async (): Promise<ServiceItem[]> => {
  if (typeof window === "undefined") {
    return defaultServices;
  }

  try {
    const res = await fetch("/api/services");
    if (res.ok) {
      const data = await res.json();
      return data;
    }
  } catch (e) {
    console.warn("Cloudflare API unavailable, falling back to local storage.", e);
  }

  if (useFirebase && db) {
    try {
      const q = query(collection(db, "services"));
      const querySnapshot = await getDocs(q);
      const servicesList: ServiceItem[] = [];
      querySnapshot.forEach((docSnap) => {
        servicesList.push(docSnap.data() as ServiceItem);
      });
      if (servicesList.length === 0) {
        for (const svc of defaultServices) {
          await setDoc(doc(db, "services", svc.id), svc);
          servicesList.push(svc);
        }
      }
      return servicesList.sort((a, b) => a.order - b.order);
    } catch (e) {
      console.error("Firebase getServices error:", e);
    }
  }
  return getLocalData("services", defaultServices).sort((a: any, b: any) => a.order - b.order);
};

export const saveService = async (service: ServiceItem): Promise<void> => {
  try {
    const res = await fetch("/api/services", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(service)
    });
    if (res.ok) return;
  } catch (e) {
    console.warn("Cloudflare API save failed, saving locally:", e);
  }

  if (useFirebase && db) {
    try {
      await setDoc(doc(db, "services", service.id), service);
      return;
    } catch (e) {
      console.error("Firebase saveService error:", e);
    }
  }
  const services = await getServices();
  const idx = services.findIndex((s) => s.id === service.id);
  if (idx !== -1) {
    services[idx] = service;
  } else {
    services.push(service);
  }
  saveLocalData("services", services);
};

export const deleteService = async (id: string): Promise<void> => {
  try {
    const res = await fetch(`/api/services?id=${id}`, { method: "DELETE" });
    if (res.ok) return;
  } catch (e) {
    console.warn("Cloudflare API delete failed, deleting locally:", e);
  }

  if (useFirebase && db) {
    try {
      await deleteDoc(doc(db, "services", id));
      return;
    } catch (e) {
      console.error("Firebase deleteService error:", e);
    }
  }
  const services = await getServices();
  const filtered = services.filter((s) => s.id !== id);
  saveLocalData("services", filtered);
};
