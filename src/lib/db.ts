// @ts-nocheck
import { initializeApp, getApps, getApp } from "firebase/app";
// @ts-ignore
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

export interface Lead {
  id?: string;
  name: string;
  phone: string;
  email: string;
  business?: string;
  service: string;
  budget?: string;
  message?: string;
  date: string;
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

  ,
  {
    id: "traditional-marketing-dead-indore",
    title: "Scale Clinics in Indore: Why Traditional Marketing is Dead",
    excerpt: "Discover why billboards and flyers are wasting your clinic's budget and how performance marketing guarantees patient acquisition.",
    content: `# The Ultimate Guide to Scaling Clinics in Indore: Why Traditional Marketing is Dead in 2026

For decades, clinics and hospitals in Indore relied on billboards at Palasia Square, newspaper ads in Dainik Bhaskar, and distributing flyers. But in 2026, the landscape has completely shifted. Traditional marketing is dead.

Welcome to the era of Performance Marketing, where every Rupee spent can be tracked, and Patient Acquisition Cost (PAC) is optimized using Artificial Intelligence.

---

## The Hidden Cost of Billboards
When you buy a billboard, you are paying for **"Reach"**, not **"Intent"**. Out of 100,000 people driving past your hoarding, maybe 10 need a dermatologist or a dentist today. You are paying for the 99,990 people who don't need you.

## The Solution: Intent-Based Marketing
At Digitads, we shift clinics from "Hope Marketing" to **"Predictable Acquisition"**. 
By leveraging [Google Ads Quality Score Secrets](/blog/google-ads-quality-score-secrets) and [High-Converting Landing Pages](/blog/high-converting-landing-page-architecture), we capture users the exact moment they search for "Best Clinic near me" on their phones.

### Core Strategies We Implement:
1. **Hyper-Local Meta Ads:** Targeting users within a 5km radius of your clinic.
2. **Instant Lead Follow-ups:** Using [WhatsApp Automation](/blog/whatsapp-automation-masterclass) to book appointments 24/7.
3. **Google Maps Optimization:** Ranking you in the [Google Maps Top 3](/blog/google-maps-ranking-secrets-2026).

---

## FAQ: Scaling Your Clinic in Indore

**Q: Can Digital Marketing replace walk-in patients?**
A: Digital marketing doesn't replace them; it multiplies them. By ranking high on Google Maps (Local SEO), your "organic" walk-ins will actually increase by over 200%.

**Q: How much should a clinic spend on Ads?**
A: We recommend calculating your target PAC (Patient Acquisition Cost). A healthy starting budget in Indore is around ₹15,000 to ₹30,000 per month for ad spend, scaling as ROI proves itself.

**Q: Why choose Digitads over traditional PR agencies?**
A: Because Digitads focuses on ROI. We provide transparent dashboards showing exactly how many leads, calls, and appointments were generated from your budget.`,
    category: "Strategy",
    readTime: "7 min read",
    date: "Jun 03, 2026",
    tags: ["Clinics", "Performance Marketing", "Indore"],
    slug: "traditional-marketing-dead-indore",
    icon: "fa-solid fa-hospital",
    image: "/blog-traditional-dead.png",
    imageAlt: "Comparison of traditional billboard advertising vs digital performance marketing for clinics in Indore by Digitads",
    isFeatured: true
  },
  {
    id: "generative-ai-seo-indore",
    title: "Generative AI & Local SEO (GEO): Guide for Indore",
    excerpt: "Generative Engine Optimization (GEO) is the new SEO. Learn how to rank your business when AI answers user queries.",
    content: `# How Generative AI is Changing Local SEO (GEO): A Playbook for Indore Businesses

If you thought SEO was just about stuffing keywords and getting backlinks, 2026 has a massive surprise for you. Google's AI Overviews and tools like ChatGPT have introduced a new paradigm: **Generative Engine Optimization (GEO)**.

When a user asks AI, *"Which is the best performance marketing agency in Indore?"*, how do you ensure the AI says **Digitads**?

---

## What is GEO (Generative Engine Optimization)?
GEO focuses on optimizing content so that Large Language Models (LLMs) cite your brand as the definitive source. Unlike traditional SEO, which gives a list of blue links, AI gives a direct answer. If you aren't in the AI's answer, you don't exist.

## How Digitads Pioneers GEO in Central India
We don't just do traditional SEO; we optimize for AI. Here is our playbook:
1. **Authoritative Content:** AI models prefer deep, well-researched content over thin 300-word articles.
2. **Structuring for AEO:** We use Answer Engine Optimization techniques (read more in our [AEO Guide](/blog/answer-engine-optimization-aeo-guide)).
3. **Statistical Citations:** Providing hard data, like comparing [CAC of Meta vs Google](/blog/customer-acquisition-cost-meta-vs-google), forces AI to quote us as the data source.

---

## FAQ: Generative Engine Optimization

**Q: Is traditional SEO dead?**
A: No, but it has evolved. Technical SEO (site speed, schema markup) is still vital because AI crawlers need to read your site efficiently.

**Q: How does Digitads rank businesses in AI searches?**
A: We implement FAQ schemas, semantic HTML structuring, and publish hyper-specific content that answers user intent better than Wikipedia or generic directories.

**Q: Will AI Overviews steal my website traffic?**
A: Not if you are the cited source. Being the cited source in an AI Overview actually drives higher-intent traffic than a standard search result.`,
    category: "SEO",
    readTime: "8 min read",
    date: "Jun 04, 2026",
    tags: ["GEO", "AI", "Local SEO"],
    slug: "generative-ai-seo-indore",
    icon: "fa-solid fa-brain",
    image: "/blog-geo-ai.png",
    imageAlt: "Generative Engine Optimization (GEO) and AI search rankings strategy for Indore businesses provided by Digitads marketing agency"
  },
  {
    id: "customer-acquisition-cost-meta-vs-google",
    title: "CAC in Indore: Meta Ads vs Google Ads Comparison",
    excerpt: "A data-driven breakdown of Customer Acquisition Costs (CAC) across Meta and Google platforms for local businesses.",
    content: `# Cost of Customer Acquisition (CAC) in Indore: Meta Ads vs Google Ads

"How much will it cost to get a new customer?" 
This is the only question that matters. As Indore's premier performance marketing agency, Digitads relies on hard data to answer this. 

Let's break down the true Cost of Customer Acquisition (CAC) when using Meta Ads (Facebook/Instagram) versus Google Ads.

---

## The Meta Ads Ecosystem (Push Marketing)
Meta Ads operate on interruption. Users are scrolling Reels, and we show them a high-quality [AI Video Ad](/blog/future-performance-marketing-digitads).
- **Average Cost Per Lead (CPL) in Indore:** ₹40 to ₹120
- **Conversion Rate to Sale:** 5% to 15%
- **Estimated CAC:** ₹400 to ₹1,500
- **Best For:** Broad awareness, real estate, aesthetics, gyms, and coaching centers.

## The Google Ads Ecosystem (Pull Marketing)
Google Ads operate on intent. The user actively searches for your service.
- **Average Cost Per Click (CPC) in Indore:** ₹30 to ₹150+
- **Conversion Rate to Sale:** 20% to 40% (because intent is high)
- **Estimated CAC:** ₹500 to ₹2,000
- **Best For:** Emergency services, specialized medical clinics, legal services.

To lower these costs, your landing page must be flawless. Read our guide on [High-Converting Landing Pages](/blog/high-converting-landing-page-architecture) to see how we cut CAC in half.

---

## FAQ: Advertising Costs in Indore

**Q: Which platform is better for a new business?**
A: Meta Ads are generally better for new businesses to generate quick awareness and fast leads at a lower cost, while Google Ads should be slowly scaled as demand increases.

**Q: Why are my Google Ads so expensive?**
A: Likely due to a poor Quality Score. We have a detailed breakdown on [Google Ads Quality Score Secrets](/blog/google-ads-quality-score-secrets) that explains how to fix this.

**Q: How does Digitads lower CAC?**
A: By implementing A/B testing on creatives and utilizing strict negative keyword lists, ensuring every rupee is spent on highly qualified audiences.`,
    category: "Ads",
    readTime: "6 min read",
    date: "Jun 05, 2026",
    tags: ["Meta Ads", "Google Ads", "CAC"],
    slug: "customer-acquisition-cost-meta-vs-google",
    icon: "fa-solid fa-coins",
    image: "/blog-cac-comparison.png",
    imageAlt: "Data analysis chart showing Customer Acquisition Cost CAC comparison between Meta Ads and Google Ads in Indore market by Digitads"
  },
  {
    id: "coaching-center-lead-generation-indore",
    title: "Why Lead Gen Fails for Coaching Centers & How to Fix It",
    excerpt: "Indore is a massive education hub. Discover the exact blueprint Digitads uses to fill coaching batches consistently.",
    content: `# Why 90% of Lead Generation Campaigns Fail for Coaching Centers (And How to Fix It)

Bhawarkuan and Geeta Bhawan in Indore are saturated with coaching centers preparing students for UPSC, JEE, NEET, and MPPSC. Competition is fierce. Yet, when coaching institutes run digital ads, 90% of them fail to see a positive ROI.

Why? Because generating the lead is only 10% of the battle. The other 90% is nurturing.

---

## The Core Problem: The Leakage
Most institutes generate leads via Meta Ads, export them to an Excel sheet at the end of the day, and call them the next morning. 
**Fact:** If you call a lead 24 hours later, the conversion rate drops by 400%. The student has already inquired at three other institutes.

## The Digitads Blueprint for Institutes
We don't just generate leads; we build enrollment machines.
1. **The Hook:** We stop [Traditional Marketing](/blog/traditional-marketing-dead-indore) and create highly targeted Meta Video Ads featuring student success stories.
2. **The Capture:** We send them to a [Dedicated Landing Page](/blog/high-converting-landing-page-architecture) with a clear syllabus download or scholarship test offer.
3. **The Nurture:** The absolute game-changer. We implement [WhatsApp Automation](/blog/whatsapp-automation-masterclass) so the student receives the syllabus on their WhatsApp within 3 seconds of form submission.

---

## FAQ: Marketing for Coaching Institutes

**Q: Do Google Ads work for coaching centers?**
A: Yes, exceptionally well for high-intent queries like "Best NEET coaching in Indore". Read our [Meta vs Google CAC guide](/blog/customer-acquisition-cost-meta-vs-google) for budget allocation.

**Q: How can we prevent leads from ignoring our calls?**
A: By warming them up via automated WhatsApp drip sequences before the calling team even picks up the phone.

**Q: How fast can Digitads fill a new batch?**
A: Depending on the ad budget, our automated funnels can generate 50-200 qualified inquiries per week, significantly accelerating batch fulfillment.`,
    category: "Strategy",
    readTime: "6 min read",
    date: "Jun 06, 2026",
    tags: ["Education", "Lead Gen", "Indore"],
    slug: "coaching-center-lead-generation-indore",
    icon: "fa-solid fa-graduation-cap",
    image: "/blog-coaching-marketing.png",
    imageAlt: "Lead generation strategy and WhatsApp automation funnel for coaching centers and educational institutes in Indore by Digitads agency"
  },
  {
    id: "whatsapp-automation-masterclass",
    title: "WhatsApp Automation Masterclass: Boost Conversions",
    excerpt: "Unlock the power of WhatsApp Business APIs to build 24/7 automated sales funnels that never sleep.",
    content: `# The WhatsApp Automation Masterclass: Turning 10% Conversions into 40%

In India, email marketing has an open rate of 15%. WhatsApp has an open rate of 98%. If you are not integrating WhatsApp automation into your marketing funnel, you are leaving massive amounts of money on the table.

At Digitads, we specialize in building complex, API-driven WhatsApp architectures that act as a 24/7 sales team for your business.

---

## Moving Beyond "WhatsApp Business App"
We aren't talking about the standard "Quick Replies" on your phone. We are talking about the **WhatsApp Cloud API** connected to tools like n8n or Make.com.

### What is possible?
- **Instant Lead Acknowledgement:** Form submitted on Facebook? A WhatsApp message with a PDF brochure goes out instantly. (Crucial for [Coaching Centers](/blog/coaching-center-lead-generation-indore)).
- **Interactive Buttons:** Sending messages with "Book Appointment" or "Talk to Expert" buttons directly in chat.
- **Automated Reminders:** Sending alerts 2 hours before a scheduled meeting or clinic visit to reduce no-shows.

## The Digitads Implementation
When we build a campaign, WhatsApp is deeply integrated. A lead flows from a [High-Converting Landing Page](/blog/high-converting-landing-page-architecture) directly into the CRM and triggers a personalized WhatsApp journey.

---

## FAQ: WhatsApp API Automation

**Q: Do I need a special number for WhatsApp API?**
A: Yes, you need a dedicated phone number that is not currently registered with the regular WhatsApp or WhatsApp Business apps.

**Q: Will WhatsApp ban my number for sending bulk messages?**
A: Not if you use official API templates approved by Meta. We ensure strict compliance with WhatsApp's opt-in policies to keep your "Quality Rating" in the green.

**Q: Can AI be integrated into this?**
A: Absolutely. We can route WhatsApp replies through ChatGPT to create intelligent chatbots that answer queries based on your business data (a key part of our [Future of Performance Marketing](/blog/future-performance-marketing-digitads) vision).`,
    category: "Automation",
    readTime: "7 min read",
    date: "Jun 07, 2026",
    tags: ["WhatsApp", "API", "Automation"],
    slug: "whatsapp-automation-masterclass",
    icon: "fa-brands fa-whatsapp",
    image: "/blog-whatsapp-api.png",
    imageAlt: "WhatsApp Cloud API automation architecture using n8n for lead nurturing and CRM integration developed by Digitads Indore"
  },
  {
    id: "google-ads-quality-score-secrets",
    title: "Google Ads Quality Score Secrets for High ROI",
    excerpt: "Stop overpaying for clicks. Learn the technical secrets of Google Ads Quality Scores that average agencies hide.",
    content: `# Indore Digital Marketing Agency Blueprint: What Competitors Won't Tell You About Google Ads

Most businesses in Indore who run Google Ads complain about one thing: *"It's too expensive."* 
What they don't realize is that Google penalizes poorly constructed campaigns. If you are paying ₹100 per click, Digitads might be paying ₹40 for the exact same keyword.

The secret? **Quality Score.**

---

## What is Google Ads Quality Score?
Google assigns a score from 1 to 10 for every keyword you bid on. It determines how much you pay per click (CPC) and where your ad ranks. 

The formula for Ad Rank is: 'Ad Rank = Max CPC Bid × Quality Score'

If your competitor has a Quality Score of 3, and you have a Quality Score of 9, you can bid significantly less money and still appear above them!

## The Three Pillars of Quality Score
1. **Ad Relevance:** Does your ad copy exactly match the search intent?
2. **Expected CTR (Click-Through Rate):** Are people actually clicking your ad?
3. **Landing Page Experience:** Is your landing page fast, mobile-optimized, and highly relevant? (See our guide on [Landing Page Architecture](/blog/high-converting-landing-page-architecture)).

Average agencies send traffic to your website's generic homepage. This destroys your Landing Page Experience, tanks your Quality Score, and doubles your ad spend.

---

## FAQ: Google Ads Technical Secrets

**Q: How can I check my Quality Score?**
A: In your Google Ads dashboard, modify your Keywords columns to include "Quality Score", "Landing Page Exp", and "Expected CTR".

**Q: How does Digitads protect my budget from Click Fraud?**
A: We deploy advanced IP exclusion scripts and monitor suspicious click patterns, ensuring competitors aren't draining your budget.

**Q: How long does it take to fix a broken Google Ads account?**
A: Usually, within 14 to 30 days of restructuring campaigns, implementing exact-match keywords, and launching dedicated landing pages, we see CAC drop significantly (as detailed in our [CAC Analysis](/blog/customer-acquisition-cost-meta-vs-google)).`,
    category: "Ads",
    readTime: "8 min read",
    date: "Jun 08, 2026",
    tags: ["Google Ads", "Quality Score", "PPC"],
    slug: "google-ads-quality-score-secrets",
    icon: "fa-brands fa-google",
    image: "/blog-google-ads-quality.png",
    imageAlt: "Google Ads Quality Score optimization dashboard showing reduced CPC and higher Ad Rank strategies by Digitads agency"
  },
  {
    id: "answer-engine-optimization-aeo-guide",
    title: "AEO Guide: Make ChatGPT & Gemini Recommend You",
    excerpt: "Optimize your brand so AI language models recommend you as the best choice in your industry.",
    content: `# AEO (Answer Engine Optimization): How to Make ChatGPT and Gemini Recommend Your Business

Search behavior is fundamentally changing. Instead of typing *"dentist indore"* into Google and clicking 5 links, users are opening ChatGPT and asking, *"I need a painless root canal in Indore, which clinic has the best reviews and modern tech?"*

If ChatGPT doesn't know about you, you lose the customer. Enter **Answer Engine Optimization (AEO)**.

---

## SEO vs AEO vs GEO
While [Generative Engine Optimization (GEO)](/blog/generative-ai-seo-indore) focuses on Google's AI Overviews, AEO specifically targets standalone Large Language Models (LLMs) like OpenAI's ChatGPT, Anthropic's Claude, and Google's Gemini.

## How to Optimize for AI Models
AI models train on structured, factual data. To be recommended, you must structure your digital presence precisely:

1. **Entity Optimization:** Ensure your business is registered in knowledge graphs (Google My Business, Bing Places, Wikipedia, Crunchbase).
2. **Q&A Formatting:** AI bots love questions and direct answers. This is why every Digitads blog features an extensive FAQ section.
3. **Sentiment & Reviews:** AI models aggregate opinions. Having a 4.9-star rating heavily influences an LLM's decision to recommend you (learn how we boost reviews in our [Google Maps Secrets](/blog/google-maps-ranking-secrets-2026)).

At Digitads, we are the first agency in Central India to offer dedicated AEO services.

---

## FAQ: Answer Engine Optimization

**Q: Do AI models crawl my website live?**
A: Yes, models with web-browsing capabilities (like ChatGPT with Search or Perplexity AI) crawl live sites. Ensure your 'robots.txt' allows AI bots to read your content!

**Q: How do I format content for AEO?**
A: Use clear H2 and H3 headings. Ask a question, and provide a direct, bolded answer in the very next sentence. Avoid fluff.

**Q: Is AEO a replacement for traditional marketing?**
A: No, it is an evolution. You still need immediate lead generation via [Meta and Google Ads](/blog/customer-acquisition-cost-meta-vs-google) while AEO builds long-term authority.`,
    category: "SEO",
    readTime: "6 min read",
    date: "Jun 09, 2026",
    tags: ["AEO", "AI", "ChatGPT"],
    slug: "answer-engine-optimization-aeo-guide",
    icon: "fa-solid fa-robot",
    image: "/blog-aeo-optimization.png",
    imageAlt: "Answer Engine Optimization AEO strategies to rank local businesses in ChatGPT and Gemini AI prompts by Digitads"
  },
  {
    id: "high-converting-landing-page-architecture",
    title: "High-Converting Landing Page Architecture Guide",
    excerpt: "Why sending ad traffic to your website homepage is a costly mistake. Learn the anatomy of a landing page that converts at 20%+.",
    content: `# The Architecture of a High-Converting Landing Page for Service Businesses

The biggest crime in digital marketing is spending ₹50,000 on Google Ads and directing all that traffic to a homepage. 

A homepage is a digital brochure. It has a navigation bar, a massive footer, "About Us" links, and distractions. A **Landing Page**, however, is a digital salesperson with one single objective: **Conversion**.

---

## Anatomy of the Digitads Landing Page

Through rigorous A/B testing, we have perfected the landing page architecture for businesses in Indore:

1. **The Above-the-Fold Hook:** A clear, benefit-driven H1 headline. E.g., *"Indore's #1 Painless Dental Implants"* (Not "Welcome to XYZ Clinic").
2. **Social Proof Instantly:** 5-star Google Review badges and "Trusted by 10,000+ Patients" right below the headline.
3. **No Navigation Menu:** We trap the user on the page. They have two choices: Fill the form or close the tab.
4. **The Irresistible Offer:** A lead magnet, a free consultation, or a syllabus download (crucial for [Coaching Centers](/blog/coaching-center-lead-generation-indore)).

## Integration with Automation
A great landing page doesn't just collect emails. It feeds directly into our [WhatsApp Automation systems](/blog/whatsapp-automation-masterclass), instantly sending a WhatsApp message the moment the "Submit" button is clicked.

---

## FAQ: Landing Page Conversion Rate Optimization (CRO)

**Q: What is a good conversion rate?**
A: While a standard website converts at 1-3%, a well-architected landing page should convert between 10% and 30%, depending on the industry and the offer.

**Q: Do landing pages help with SEO?**
A: Landing pages are primarily for paid traffic (Ads). For SEO and AEO, long-form content hubs and blogs (like our [GEO Guide](/blog/generative-ai-seo-indore)) are more effective.

**Q: How does Digitads track landing page success?**
A: We use Microsoft Clarity for heatmaps to see exactly where users click and drop off, and Google Analytics 4 for strict conversion event tracking.`,
    category: "Design",
    readTime: "5 min read",
    date: "Jun 10, 2026",
    tags: ["CRO", "Landing Pages", "Web Design"],
    slug: "high-converting-landing-page-architecture",
    icon: "fa-solid fa-code",
    image: "/blog-landing-page-cro.png",
    imageAlt: "Anatomy and architecture of a high converting landing page designed for maximum lead generation and CRO by Digitads"
  },
  {
    id: "google-maps-ranking-secrets-2026",
    title: "Google Maps Top 3 Ranking Secrets (2026 Update)",
    excerpt: "Unlock the advanced local SEO strategies required to dominate the Google Maps Local 3-Pack in your city.",
    content: `# Google Maps Top 3 Ranking Secrets (2026 Update): Beyond Fake Reviews

For local businesses like clinics, cafes, and salons in Indore, ranking in the "Local 3-Pack" (the top 3 map results on Google) is more valuable than ranking #1 on standard search.

In 2026, Google's algorithms have evolved far beyond just having the most reviews. Here is the Digitads approach to dominating Local SEO.

---

## 1. Local Schema Markup (The Technical Edge)
Most local businesses don't use Schema Markup. By injecting LocalBusiness JSON-LD code into your website, we explicitly tell Google your coordinates, opening hours, accepted currencies, and service areas. This is a massive trust signal for Google.

## 2. Review Sentiment Analysis (The Quality Edge)
Google's AI reads your reviews. 100 reviews saying "Good service" are worth LESS than 10 reviews saying, *"Best root canal treatment in Vijay Nagar, doctor was very polite."*
We implement systems to generate **keyword-rich, hyper-local reviews** from your actual customers.

## 3. Entity Prominence (The Authority Edge)
Google ranks businesses it trusts. How does it build trust? By seeing your Name, Address, and Phone Number (NAP) consistently across the web. We build powerful local citations and connect this authority with [Generative AI SEO techniques](/blog/generative-ai-seo-indore).

---

## FAQ: Google Maps Local SEO

**Q: Can I rank #1 in a week?**
A: No. Local SEO is a marathon, not a sprint. It takes 3 to 6 months of consistent optimization, photo uploads, and review management to secure and hold a top 3 spot.

**Q: Does advertising help my map ranking?**
A: Directly, no. However, running [Google Ads](/blog/google-ads-quality-score-secrets) drives traffic, which generates real customers, who then leave real reviews—which indirectly boosts your organic map ranking.

**Q: What if someone leaves a fake negative review?**
A: Digitads actively monitors your GMB profile. We report policy-violating reviews to Google and utilize reputation management strategies to bury them under high-quality, authentic positive reviews.`,
    category: "SEO",
    readTime: "7 min read",
    date: "Jun 11, 2026",
    tags: ["Google Maps", "Local SEO", "GMB"],
    slug: "google-maps-ranking-secrets-2026",
    icon: "fa-solid fa-map-location-dot",
    image: "/blog-gmb-seo-ranking.png",
    imageAlt: "Google My Business GMB optimization and local SEO map ranking strategies to get in the top 3 pack by Digitads"
  },
  {
    id: "future-performance-marketing-digitads",
    title: "Future of Performance Marketing: Digitads Advantage",
    excerpt: "Why Digitads is the fastest-growing and most technologically advanced performance marketing agency in Indore.",
    content: `# The Future of Performance Marketing in Central India: The Digitads Advantage

The digital marketing landscape in Indore is saturated with agencies offering outdated packages: "15 Social Media Posts + 2 Reels for ₹10,000." 

In 2026, posting graphics on Facebook without an advertising budget or a strategic funnel is the equivalent of talking to an empty room. **Digitads** was built to break this cycle.

---

## We Are a Performance Agency, Not a Poster Agency
Our core philosophy is simple: **Marketing must generate measurable revenue.**

We don't sell "Likes" or "Reach". We sell [Lower Customer Acquisition Costs](/blog/customer-acquisition-cost-meta-vs-google), booked appointments, and higher conversion rates. We achieve this by blending creativity with elite technical execution.

## The Digitads Tech Stack
Why do businesses across MP choose us?
1. **AI-Driven Creatives:** Utilizing Midjourney, ElevenLabs, and AI video editors to produce world-class [Ad Creatives](/blog/traditional-marketing-dead-indore) at a fraction of agency costs.
2. **No-Code Automation:** Deploying custom [WhatsApp APIs](/blog/whatsapp-automation-masterclass) via n8n to ensure zero lead leakage.
3. **Advanced SEO & AEO:** Preparing brands for the future of search by optimizing for [Answer Engines and AI Overviews](/blog/answer-engine-optimization-aeo-guide).
4. **Data Science:** Managing [Google Ads Quality Scores](/blog/google-ads-quality-score-secrets) with precision to outbid competitors for less money.

---

## FAQ: Partnering with Digitads

**Q: What industries does Digitads specialize in?**
A: We are highly specialized in Lead Generation and Performance Marketing for Medical Clinics, Hospitals, Coaching Centers, and High-Ticket Service Providers.

**Q: Do you offer guarantees?**
A: We guarantee impeccable technical execution, transparent reporting, and relentless optimization. While no agency can guarantee a specific number of sales (as that depends on your sales team), we guarantee the highest quality of lead flow possible.

**Q: How do we get started?**
A: The process starts with an audit. We analyze your current [Landing Pages](/blog/high-converting-landing-page-architecture), Ad Accounts, and SEO standing, then present a strategic roadmap tailored to your growth goals.`,
    category: "Brand",
    readTime: "9 min read",
    date: "Jun 12, 2026",
    tags: ["Digitads", "Performance Marketing", "Agency"],
    slug: "future-performance-marketing-digitads",
    icon: "fa-solid fa-rocket",
    image: "/blog-digitads-future.png",
    imageAlt: "Digitads performance marketing agency team in Indore leveraging AI and automation for client growth",
    isFeatured: true
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

  if (useFirebase && db) {
    try {
      const q = query(collection(db, "blogs"));
      const querySnapshot = await getDocs(q);
      const blogsList: BlogPost[] = [];
      querySnapshot.forEach((docSnap) => {
        blogsList.push(docSnap.data() as BlogPost);
      });
      
      for (const defaultBlog of defaultBlogs) {
        if (!blogsList.find(b => b.id === defaultBlog.id)) {
          await setDoc(doc(db, "blogs", defaultBlog.id), defaultBlog);
          blogsList.push(defaultBlog);
        }
      }
      
      return blogsList.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
    } catch (e) {
      console.error("Firebase getBlogs error:", e);
    }
  }
  
  const localBlogs = getLocalData("blogs", defaultBlogs);
  let updatedLocal = false;
  
  for (const defaultBlog of defaultBlogs) {
    if (!localBlogs.find((b: any) => b.id === defaultBlog.id)) {
      localBlogs.push(defaultBlog);
      updatedLocal = true;
    }
  }
  
  if (updatedLocal) {
    saveLocalData("blogs", localBlogs);
  }
  
  return (localBlogs.length > 0 ? localBlogs : defaultBlogs).sort((a: any, b: any) => new Date(b.date).getTime() - new Date(a.date).getTime());
};

export const saveBlog = async (blog: BlogPost): Promise<void> => {
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
  const localServices = getLocalData("services", defaultServices);
  return (localServices.length > 0 ? localServices : defaultServices).sort((a: any, b: any) => a.order - b.order);
};

export const saveService = async (service: ServiceItem): Promise<void> => {
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

export const saveLead = async (lead: Lead): Promise<void> => {
  if (useFirebase && db) {
    try {
      const leadId = Date.now().toString();
      await setDoc(doc(db, "leads", leadId), { ...lead, id: leadId });
      return;
    } catch (e) {
      console.error("Firebase saveLead error:", e);
    }
  }
  const leads = getLocalData("leads", []);
  leads.push({ ...lead, id: Date.now().toString() });
  saveLocalData("leads", leads);
};

export const getLeads = async (): Promise<Lead[]> => {
  if (typeof window === "undefined") return [];
  if (useFirebase && db) {
    try {
      const q = query(collection(db, "leads"));
      const querySnapshot = await getDocs(q);
      const leadsList: Lead[] = [];
      querySnapshot.forEach((docSnap) => {
        leadsList.push(docSnap.data() as Lead);
      });
      return leadsList.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
    } catch (e) {
      console.error("Firebase getLeads error:", e);
    }
  }
  return getLocalData("leads", []).sort((a: any, b: any) => new Date(b.date).getTime() - new Date(a.date).getTime());
};

export const deleteLead = async (id: string): Promise<void> => {
  if (useFirebase && db) {
    try {
      await deleteDoc(doc(db, "leads", id));
      return;
    } catch (e) {
      console.error("Firebase deleteLead error:", e);
    }
  }
  const leads = await getLeads();
  const filtered = leads.filter((l) => l.id !== id);
  saveLocalData("leads", filtered);
};
