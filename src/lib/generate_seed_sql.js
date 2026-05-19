const fs = require('fs');

const defaultBlogs = [
  {
    id: "ai-future-marketing",
    title: "The Future of Marketing: How AI is Changing the Game in 2025",
    excerpt: "Artificial intelligence isn't just a buzzword—it's actively reshaping how businesses acquire and retain customers. In this deep dive, we explore practical AI applications you can implement today.",
    content: `# The Future of Marketing: How AI is Changing the Game in 2025\n\nArtificial intelligence is no longer a distant technology or a novelty. In 2025, AI has become the foundational engine for modern performance marketing, customer acquisition, and CRM automation.\n\nFor local clinics, coaching centers, and service-based businesses in Indore, AI provides a unique opportunity to compete with national brands on a fraction of their budget. Let’s break down exactly how AI is changing the marketing landscape and how you can implement these technologies.\n\n---\n\n## 1. Hyper-Personalized Ad Creatives\nWith AI-powered design tools, we are moving away from generic static banner ads. Modern AI can generate scroll-stopping video hooks, high-quality voiceovers, and customized visual copy tailored specifically for different segments of your target audience.\n- **Tools to watch:** Midjourney for image generation, ElevenLabs for studio-quality voiceovers, and CapCut AI for automated video editing.\n- **Why it matters:** Higher click-through rates (CTR) and up to 40% lower cost-per-lead (CPL) on Meta Ads.\n\n---\n\n## 2. Conversational Lead Nurturing\nMost ad spend is wasted not because the ads are bad, but because the business fails to follow up in time. AI-driven WhatsApp chatbots can instantly engage a lead the second they submit a form, answer common questions, qualify their intent, and book them directly into your calendar.\n- **Implementation:** Integrating custom LLMs with WhatsApp APIs using platforms like n8n or Make.com.\n- **Why it matters:** Responding within 5 minutes increases conversion rates by over 300%.\n\n---\n\n## 3. Predictable Local SEO\nAI algorithms now help analyze hundreds of localized search queries across Indore. Instead of guessing what patients or students are looking for, businesses can optimize their Google My Business (GMB) listings and local service pages using exact search intent maps.\n\n---\n\n## Conclusion: Get Started Today\nIf you aren't integrating AI into your marketing pipeline, your competitors in Indore soon will. The best part? You don't need a massive tech budget to start. Begin with n8n WhatsApp automations and AI-assisted GMB posting, and watch your customer acquisition cost fall.`,
    category: "Automation",
    readTime: "8 min read",
    date: "Sep 01, 2024",
    tags: "AI,Marketing,Future",
    slug: "ai-future-marketing",
    icon: "fa-solid fa-chart-line",
    isFeatured: 1
  },
  {
    id: "ai-local-seo",
    title: "How AI is Revolutionizing Local SEO for Clinics",
    excerpt: "Discover how artificial intelligence tools can automate your GMB optimization and bring consistent local leads.",
    content: `# How AI is Revolutionizing Local SEO for Clinics\n\nFor medical clinics, dental centers, and specialized healthcare practices in Indore, local visibility is everything. When someone searches \"dermatologist near me\" or \"best pediatric clinic in Vijay Nagar,\" the top 3 spots in Google Maps (the Local 3-Pack) receive over 60% of all clicks.\n\nToday, smart clinics are leveraging Artificial Intelligence (AI) to dominate local search results and secure those top spots automatically. Here is how you can do the same.\n\n---\n\n## 1. Automated Review Management & Sentiment Analysis\nReviews are the single biggest ranking factor for local SEO. However, replying to every review professionally and incorporating keyword-rich phrases is time-consuming.\n- **The AI Solution:** AI assistants can instantly draft custom, HIPAA-compliant review responses that thank the patient and organically include relevant service keywords.\n- **SEO Impact:** Google rewards profiles with high response rates and frequent keyword mentions.\n\n---\n\n## 2. Schema Markup & Local Structured Data\nGoogle needs to understand precisely what services your clinic offers, your working hours, and doctor availability.\n- **The AI Solution:** AI can write complex JSON-LD local schema codes for your website, ensuring Google’s crawlers index your business accurately.\n\n---\n\n## 3. Hyper-Local Content Creation\nTo rank for local queries, your website needs content mentioning Indore neighborhoods, health trends, and community interests. AI tools can help optimize blog topics and GMB updates tailored specifically to your Indore demographic.`,
    category: "SEO",
    readTime: "5 min read",
    date: "Aug 15, 2024",
    tags: "AI,Local SEO,Clinics",
    slug: "ai-local-seo",
    icon: "fa-solid fa-robot",
    isFeatured: 0
  },
  {
    id: "meta-vs-google",
    title: "Meta Ads vs Google Ads: Which is Better for Coaching Centers?",
    excerpt: "A comprehensive breakdown of when to use Meta Ads for awareness and Google Ads student enrollments.",
    content: `# Meta Ads vs Google Ads: Which is Better for Coaching Centers?\n\nIn Indore's highly competitive education hub—from NEET/JEE prep in Geeta Bhawan to civil services coaching—acquiring student enrollments is a numbers game. \n\nShould you run ads on **Facebook & Instagram (Meta)** or **Google Search & YouTube**? Let's analyze the strengths of both channels and see how to budget them for maximum registrations.\n\n---\n\n## Google Ads: High-Intent Capture (Demand Fulfillment)\nGoogle Ads work on search queries. When a student or parent types *\"best NEET coaching in Indore\"* or *\"IIT JEE coaching near me\"*, they are already looking to enroll.\n\n### Google Ads Pros:\n- **Immediate Conversion:** High conversion rate because searchers have strong intent.\n- **Surgical Targets:** Bid strictly on highly relevant keywords.\n\n### Google Ads Cons:\n- **Higher Cost:** Highly competitive keywords in Indore can cost ₹80 - ₹150+ per click.\n- **No Audience Building:** You only reach people who are already actively searching.\n\n---\n\n## Meta Ads: Interruption Marketing (Demand Generation)\nMeta Ads are visual. They appear on Facebook feeds and Instagram Reels. Students don't search for coaching here; we interrupt their scrolling with highly engaging visual ads (student success records, campus tours, scholarship offers).\n\n### Meta Ads Pros:\n- **Very Low Lead Cost:** Generating a lead on Meta is often 4x-5x cheaper than Google Ads.\n- **Massive Reach:** Excellent for establishing your coaching brand across Central India.\n- **Retargeting Power:** Serve ads to students who visited your website but didn't enroll.\n\n---\n\n## The Winner & Recommendation\nFor optimal growth, use a **Hybrid Strategy**:\n1. **Google Search Ads (40% budget):** To capture direct, intent-driven conversions.\n2. **Meta Ads (60% budget):** To build massive local awareness with AI Video Ads and Retargeting.`,
    category: "Ads",
    readTime: "7 min read",
    date: "Aug 02, 2024",
    tags: "Meta Ads,Google Ads,Education",
    slug: "meta-vs-google",
    icon: "fa-solid fa-bullseye",
    isFeatured: 0
  },
  {
    id: "whatsapp-automation",
    title: "The Ultimate Guide to WhatsApp Marketing Automation",
    excerpt: "Learn how to set up an automated WhatsApp funnel that nurtures leads and schedules appointments 24/7.",
    content: `# The Ultimate Guide to WhatsApp Marketing Automation\n\nFor modern clinics and service businesses in India, email is practically dead. WhatsApp, however, boasts a **98% open rate** and a **45-60% click-through rate**.\n\nIf your team is still manually copy-pasting follow-ups or sending appointment reminders individually, you are losing valuable business. Here is how to automate your entire communication pipeline using WhatsApp Business API.\n\n---\n\n## Step 1: Instantly Capture and Acknowledge Leads\nThe second a lead submits an ad form on Meta or your landing page, an automated system should trigger.\n- **The Flow:** Trigger an instant, friendly welcome message on WhatsApp: *\"Hi [Name]! Thanks for reaching out to Digitalads. We've received your request...\"*\n- **The Value:** Cuts down lead response time to under 2 seconds, sealing their interest.\n\n---\n\n## Step 2: Interactive Appointment Scheduling\nInstead of back-and-forth calling, let customers book their slot inside WhatsApp.\n- **The Flow:** Send an interactive button message with options: *\"Book Slot\"* or *\"Speak to Executive\"*. Clicking *\"Book Slot\"* opens a Calendly link or n8n scheduler.\n\n---\n\n## Step 3: Automated Attendance Reminders\nMissed appointments cost money. Setting up reminders 24 hours and 2 hours before the appointment dramatically cuts down no-shows.\n- **The Result:** Reduce no-show rates by up to 80% for clinics and spas.`,
    category: "Automation",
    readTime: "6 min read",
    date: "Jul 28, 2024",
    tags: "WhatsApp,Chatbot,Lead Nurturing",
    slug: "whatsapp-automation",
    icon: "fa-brands fa-whatsapp",
    isFeatured: 0
  },
  {
    id: "clinic-landing-pages",
    title: "Why Your Clinic Needs a Dedicated Landing Page",
    excerpt: "Stop sending ad traffic to your homepage. Here is why dedicated landing pages convert 3x better for healthcare.",
    content: `# Why Your Clinic Needs a Dedicated Landing Page\n\nAre you running Google or Meta Ads for your Indore clinic and sending all that paid traffic to your website's homepage? If yes, you are likely wasting a massive chunk of your advertising budget.\n\nA homepage is designed to be an information hub. It has navigation menus, service lists, team bios, social links, and blog feeds. While great for exploration, it is **terrible for conversions**. Here is why your clinic needs dedicated, single-focused landing pages.\n\n---\n\n## 1. Eliminating Decision Paralysis\nWhen a user clicks an ad for *\"Laser Hair Removal in Indore\"*, they want to see one thing: details about Laser Hair Removal, pricing, results, and a booking form.\n- **Homepage:** They get lost in menus, about pages, and other service links. Most leave without booking.\n- **Landing Page:** 100% focused on Laser Hair Removal. No distraction links, only a single \"Book Appointment\" form.\n\n---\n\n## 2. Faster Load Speeds\nLanding pages are built lean and lightweight. \n- A 1-second delay in page load time can reduce conversions by 20%. Dedicated landing pages load in under 1.5 seconds, securing mobile users instantly.\n\n---\n\n## 3. Better Google Ads Quality Score\nGoogle rewards landing pages that match the ad's keyword exactly. A higher match rating improves your **Quality Score**, which directly lowers your cost-per-click (CPC) by up to 30%!`,
    category: "Design",
    readTime: "4 min read",
    date: "Jul 10, 2024",
    tags: "Web Design,CRO,Clinics",
    slug: "clinic-landing-pages",
    icon: "fa-solid fa-laptop-medical",
    isFeatured: 0
  }
];

const defaultServices = [
  {
    id: "meta-ads",
    title: "Meta Ads — Facebook & Instagram Advertising",
    price: "₹12,000/month",
    description: "We design and manage high-converting Meta Ad campaigns that target your ideal patients or students with surgical precision — not just broad demographics. From creative to conversion, we handle everything.",
    features: "Campaign strategy and audience research,Professional ad creative design (static + video),Facebook & Instagram campaign setup,Lookalike & retargeting audiences,Lead form and landing page integration,Daily monitoring & weekly optimization,Monthly performance reports with insights",
    icon: "fab fa-meta",
    visualTitle: "Meta Ads Indore",
    visualDescription: "Facebook & Instagram campaigns that generate 5–15 qualified leads daily for clinics and coaching centers",
    reverseLayout: 0,
    order: 1
  },
  {
    id: "google-ads",
    title: "Google Ads — Search & YouTube Campaigns",
    price: "₹12,000/month",
    description: "When someone in Indore searches \"best skin clinic near me\" or \"NEET coaching in Indore\" — your ad appears first. We capture high-intent traffic that converts into appointments faster than any other channel.",
    features: "Keyword research and competitor analysis,Google Search campaign setup and optimization,YouTube ad campaigns (in-stream & shorts),Display and remarketing campaigns,Conversion tracking with Google Analytics 4,Smart bidding and Quality Score optimization,Monthly detailed performance dashboard",
    icon: "fab fa-google",
    visualTitle: "Google Ads Indore",
    visualDescription: "Capture high-intent searches and turn them into booked appointments within 30 days",
    reverseLayout: 1,
    order: 2
  },
  {
    id: "gmb-seo",
    title: "GMB Optimization & Local SEO Indore",
    price: "₹8,000/month",
    description: "When locals search for services in Indore, they see the Google Maps \"Local Pack\" first. We get your business into that coveted top 3 — more walk-ins, more calls, more business from people already searching for what you offer.",
    features: "Complete GMB profile audit and optimization,Google Maps ranking strategy,Review generation and reputation management,Local keyword optimization (Indore + MP),Citation building and directory listings,On-page local SEO for your website,Monthly ranking progress reports",
    icon: "fas fa-map-marked-alt",
    visualTitle: "GMB & Local SEO Indore",
    visualDescription: "Rank in Google Maps Top 3 and attract 50–200% more walk-ins from local searches",
    reverseLayout: 0,
    order: 3
  },
  {
    id: "ai-video",
    title: "AI Video Ads — Reels & YouTube Shorts",
    price: "₹10,000/month (4 videos)",
    description: "Video content is king — but expensive to produce. We use AI tools like CapCut AI, ElevenLabs, and ChatGPT to create professional, scroll-stopping video ads at a fraction of traditional production costs.",
    features: "AI-generated scripts and voiceovers (ElevenLabs),Professional Reel editing with CapCut AI,Auto-subtitles transitions and motion graphics,Brand-consistent styling and colors,Optimized for Instagram Reels and YouTube Shorts,4–8 videos per month depending on plan,Ready-to-publish with posting schedule",
    icon: "fas fa-film",
    visualTitle: "AI Video Ads Indore",
    visualDescription: "Professional Reels & Shorts that build trust and drive action — without expensive production crews",
    reverseLayout: 1,
    order: 4
  },
  {
    id: "automation",
    title: "WhatsApp & CRM Automation",
    price: "One-time setup ₹15,000 – ₹40,000",
    description: "Most businesses lose 60–70% of leads because they follow up too late or not at all. We build automated workflows using n8n and Make.com that respond instantly — 24/7 — turning cold inquiries into booked appointments.",
    features: "Instant WhatsApp auto-reply to new leads,Appointment booking reminder flows,Email and SMS drip sequences,CRM lead tracking and pipeline setup,n8n / Make.com workflow automation,Integration with Facebook Lead Ads & Google Forms,No lead left behind — 100% follow-up guarantee",
    icon: "fab fa-whatsapp",
    visualTitle: "WhatsApp Automation Indore",
    visualDescription: "Never lose a lead again — 24/7 automated follow-up that converts inquiries to appointments",
    reverseLayout: 0,
    order: 5
  },
  {
    id: "landing-pages",
    title: "High-Converting Landing Pages & Websites",
    price: "Starting from ₹8,000 (one-time)",
    description: "Your ad campaign is only as good as the page people land on. We build fast, mobile-optimized, conversion-focused landing pages that turn ad clicks into real inquiries — not bounces.",
    features: "Mobile-first fully responsive design,Conversion-optimized layout and copywriting,Fast Core Web Vitals and page speed,WhatsApp click-to-chat integration,Lead form with CRM/WhatsApp automation,SEO-ready structure and meta tags,A/B testing support",
    icon: "fas fa-laptop-code",
    visualTitle: "Landing Pages Indore",
    visualDescription: "Pages that load fast, look premium, and convert visitors into leads — not just pretty designs",
    reverseLayout: 1,
    order: 6
  },
  {
    id: "branding",
    title: "Logo Design & Brand Identity",
    price: "Logo from ₹5,000 | Full Branding from ₹15,000",
    description: "Your brand is the first impression. We create professional logo designs and complete brand identity systems that build instant trust and make your clinic or coaching center look like the premium choice in Indore.",
    features: "Custom logo design (3 concepts),Brand color palette and typography,Social media profile branding,Business card and letterhead design,Brand style guide document,All files in editable formats (AI PNG SVG)",
    icon: "fas fa-paint-brush",
    visualTitle: "Logo & Branding Indore",
    visualDescription: "Professional brand identity that builds trust and makes you the obvious choice in your market",
    reverseLayout: 0,
    order: 7
  }
];

let sql = `-- Seeding Script\n`;

defaultBlogs.forEach(b => {
  sql += `INSERT INTO blogs (id, title, excerpt, content, category, readTime, date, tags, slug, icon, isFeatured) VALUES (\n  '${b.id}',\n  '${b.title.replace(/'/g, "''")}',\n  '${b.excerpt.replace(/'/g, "''")}',\n  '${b.content.replace(/'/g, "''")}',\n  '${b.category}',\n  '${b.readTime}',\n  '${b.date}',\n  '${b.tags}',\n  '${b.slug}',\n  '${b.icon}',\n  ${b.isFeatured}\n) ON CONFLICT(id) DO UPDATE SET title=excluded.title, excerpt=excluded.excerpt, content=excluded.content, category=excluded.category, readTime=excluded.readTime, date=excluded.date, tags=excluded.tags, slug=excluded.slug, icon=excluded.icon, isFeatured=excluded.isFeatured;\n\n`;
});

defaultServices.forEach(s => {
  sql += `INSERT INTO services (id, title, price, description, features, icon, visualTitle, visualDescription, reverseLayout, "order") VALUES (\n  '${s.id}',\n  '${s.title.replace(/'/g, "''")}',\n  '${s.price.replace(/'/g, "''")}',\n  '${s.description.replace(/'/g, "''")}',\n  '${s.features.replace(/'/g, "''")}',\n  '${s.icon}',\n  '${s.visualTitle.replace(/'/g, "''")}',\n  '${s.visualDescription.replace(/'/g, "''")}',\n  ${s.reverseLayout},\n  ${s.order}\n) ON CONFLICT(id) DO UPDATE SET title=excluded.title, price=excluded.price, description=excluded.description, features=excluded.features, icon=excluded.icon, visualTitle=excluded.visualTitle, visualDescription=excluded.visualDescription, reverseLayout=excluded.reverseLayout, "order"=excluded."order";\n\n`;
});

fs.writeFileSync('migrations/0002_seed.sql', sql);
console.log('Seed SQL file successfully generated!');
