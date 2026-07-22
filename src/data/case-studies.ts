export interface CaseStudy {
  id: string; // Used for the slug
  title: string;
  subtitle: string;
  icon: string;
  tags: string[];
  problem: string; // The Challenge
  solution: string; // Strategy & Execution
  image?: string; // Optional image for SEO/OpenGraph
  imageAlt?: string; // Alt text for the image
}

export const caseStudiesData: CaseStudy[] = [
  {
    id: "whatsapp-automation-lead-follow-up-indore",
    title: "WhatsApp & CRM Automation Case Study",
    subtitle: "How WhatsApp CRM Automation Reduced Lead Drop-off by 60%",
    icon: "fab fa-whatsapp",
    tags: ["WhatsApp Automation", "n8n", "Lead Follow-up", "Indore"],
    problem: "A leading pediatric clinic in Vijay Nagar, Indore was receiving over 30 online inquiries daily through Facebook ads but suffered from a 70% lead drop-off rate because staff took up to 4 hours to follow up. By the time they called, parents had already contacted or booked another pediatrician.",
    solution: "We integrated n8n automation to connect Meta Lead Ads directly to a WhatsApp Business API and Google Sheets CRM. The second a lead was submitted, an automated, conversational WhatsApp message was triggered within 45 seconds, providing clinic timings, services, and a calendar scheduler link. If the parent didn't book, the system followed up automatically at 24 and 48 hours. This reduced response time to under 1 minute and slashed lead drop-off by 60%, generating 180+ bookings in the first month.",
    image: "/blog-whatsapp-automation.jpg",
    imageAlt: "WhatsApp CRM Automation lead generation follow-up case study by Digitalads Indore"
  },
  {
    id: "facebook-ads-case-study-dental-clinic-indore",
    title: "Multi-Specialty Dental Clinic Meta Ads",
    subtitle: "350% ROI on Meta Ads for Dental Implants in Indore",
    icon: "fas fa-tooth",
    tags: ["Meta Ads", "Dental Clinic", "Lead Gen", "Indore"],
    problem: "A high-end dental clinic in Palasia, Indore wanted to promote premium dental implant services. Their general Facebook ad campaigns yielded high cost-per-lead (₹400+) and poor quality calls, as most leads asked about basic cleanings rather than high-value implant treatments.",
    solution: "We deployed a highly-targeted Meta Ads campaign built around patient trust and video testimonials. Instead of standard lead forms, we created a dedicated pre-qualification landing page that filtered users by dental issue, treatment timeline, and budget. Leads were instantly synced to an automated WhatsApp drip that sent patient success videos. This funnel generated 62 pre-qualified dental implant inquiries in 45 days at an average lead cost of ₹180, leading to 14 high-ticket implant placements and a verified 350% ROI.",
    image: "/case-study-dental-clinic.jpg",
    imageAlt: "Dental clinic Meta Ads performance marketing case study by Digitalads Indore"
  },
  {
    id: "skin-hair-clinic-meta-whatsapp",
    title: "Skin & Hair Clinic — Indore",
    subtitle: "Meta Ads + WhatsApp Automation",
    icon: "fas fa-stethoscope",
    tags: ["Meta Ads", "WhatsApp Automation", "Healthcare"],
    problem: "A prominent skin and hair clinic in Vijay Nagar, Indore was spending ₹15,000/month on Facebook Ads but acquiring only 8–10 leads with exceptionally poor follow-up. Most inquiries went cold because the front desk couldn't respond fast enough during busy hours.",
    solution: "We rebuilt the Meta Ads campaign from scratch, deploying new localized audiences, video testimonial creatives, and clear offer-based hooks. Simultaneously, we implemented a custom WhatsApp automation flow using n8n. The system responded to every lead within 60 seconds, answering basic queries and automatically booking consultation slots into the doctor's calendar. This resulted in a massive surge in show-up rates and drastically reduced the Cost Per Lead (CPL).",
    image: "/case-study-skin-clinic.jpg",
    imageAlt: "Digitalads Indore Meta Ads and WhatsApp Automation Case Study for Skin and Hair Clinic"
  },
  {
    id: "iit-jee-coaching-google-seo",
    title: "IIT-JEE Coaching Center — Indore",
    subtitle: "Google Ads + Local SEO",
    icon: "fas fa-graduation-cap",
    tags: ["Google Ads", "Local SEO", "Education"],
    problem: "Despite being in business for 8 years, an IIT-JEE coaching center in Bhawarkuan had zero Google presence. They were invisible on Google Maps and had no digital lead generation funnel. Admissions were purely reliant on traditional word-of-mouth and expensive billboard advertising.",
    solution: "We deployed a two-track performance approach: immediate student acquisition via Google Search Ads targeting high-intent 'IIT coaching Indore' keywords, and a long-term organic strategy through GMB optimization. We built a high-converting landing page specifically for the incoming batch. By optimizing their GMB with 50+ photos, 20+ reviews, and local directory citations, we ranked them in the Local 3-Pack, driving consistent organic walk-ins alongside paid enrollments."
  },
  {
    id: "fitness-center-ai-video-gmb",
    title: "Premium Fitness Center — Vijay Nagar",
    subtitle: "GMB Optimization + AI Video Ads",
    icon: "fas fa-dumbbell",
    tags: ["GMB Optimization", "AI Video Ads", "Fitness"],
    problem: "A high-end gym was struggling with declining walk-ins and a lack of social media presence. They had a modest 47 Google reviews and ranked on page 2 of Maps, losing local searches to competitors with fewer facilities but better digital optimization.",
    solution: "We initiated a deep GMB optimization sprint, revamping their profile with 80+ professional photos, keyword-rich descriptions, and a robust review generation system. To solve their social media gap without expensive video crews, we produced AI-assisted Reels—featuring member transformations and facility tours generated via CapCut AI and ElevenLabs. This combined strategy built immense trust at scale and pushed the gym into the top 3 ranking on Google Maps."
  },
  {
    id: "dental-clinic-full-funnel",
    title: "Multi-Specialty Dental Clinic — Indore",
    subtitle: "Full-Funnel Digital Marketing",
    icon: "fas fa-tooth",
    tags: ["Meta Ads", "Google Ads", "Automation", "CRO"],
    problem: "A dental clinic housing 3 specialized doctors had cycled through 3 different agencies in 18 months with no consistent ROI. They suffered from an erratic lead flow, no dedicated follow-up system, and an outdated website that failed to convert mobile visitors.",
    solution: "We architected a full-funnel marketing rebuild. We launched a mobile-first, high-converting landing page optimized for speed and trust. We ran Meta Ads for local awareness and lead generation, paired with Google Ads for high-intent 'near me' searches. To fix the follow-up leakage, we deployed an n8n WhatsApp automation workflow that provided instant responses and booking options, yielding a consistent and predictable patient flow."
  },
  {
    id: "real-estate-ai-lead-nurture",
    title: "Luxury Real Estate Developer — Bypass Road",
    subtitle: "Lead Generation + CRM Automation",
    icon: "fas fa-building",
    tags: ["Lead Generation", "CRM Automation", "Real Estate"],
    problem: "A real estate developer in Indore was generating hundreds of leads for a new luxury project via standard Facebook lead forms, but the conversion rate to site visits was abysmal (under 2%). The sales team was overwhelmed with 'junk leads' and slow response times.",
    solution: "We upgraded their generic lead forms to a custom interactive landing page to pre-qualify buyers based on budget and intent. We integrated this directly into a Smart CRM using Make.com, instantly triggering an AI-driven WhatsApp sequence that sent project brochures, floor plans, and a calendar invite for site visits. This automated nurturing filtered out non-serious buyers and increased the site-visit conversion rate exponentially."
  },
  {
    id: "hospital-website-redesign-seo",
    title: "Multi-Specialty Hospital — Ujjain",
    subtitle: "Website Redesign + Medical SEO",
    icon: "fas fa-hospital",
    tags: ["Web Design", "Medical SEO", "Healthcare"],
    problem: "A prominent 100-bed hospital in Ujjain had an ancient, non-responsive website that took over 8 seconds to load. Patients could not easily find doctor schedules or book appointments online, resulting in an overloaded phone reception and lost digital visibility. The hospital was losing organic traffic to newer clinics with better online presence, and their lack of a modern digital infrastructure made it difficult to attract outstation patients who rely heavily on online research before traveling for medical care.",
    solution: "We engineered a completely new, HIPAA-compliant website optimized for Core Web Vitals (loading in under 1.5 seconds). We structured the site architecture around Medical SEO, creating dedicated silo pages for each department (Cardiology, Orthopedics, etc.) with rich, informative content answering common patient queries. We integrated a seamless online appointment booking system and an automated WhatsApp chat widget, which drastically reduced reception call volume. Furthermore, our targeted local SEO efforts helped rank their specific departmental pages for high-intent keywords across Madhya Pradesh, significantly increasing outstation patient bookings and overall organic search visibility."
  },
  {
    id: "national-coaching-expansion-performance-marketing",
    title: "Performance Marketing Agencies in India: Scaling an Indore Brand Nationally",
    subtitle: "Advanced Google Ads + Pan-India Expansion",
    icon: "fas fa-globe-asia",
    tags: ["Performance Marketing", "Pan-India Ads", "Lead Gen"],
    problem: "A well-established coaching institute in Indore wanted to expand its student base nationally by offering online courses. The core problem was that they were competing against heavily funded ed-tech giants. They tried working with generic performance marketing agencies in India, but their campaigns yielded high Cost Per Click (CPC) and junk leads from irrelevant regions, quickly draining their ad budget with zero ROI.",
    solution: "Digitalads deployed a highly specific, intent-based Google Search Ads strategy. Instead of targeting broad keywords like 'online coaching', we targeted long-tail problem-specific queries that students in Tier-2 and Tier-3 cities were actively searching for. We implemented strict geo-fencing to exclude low-converting zones and paired the ads with highly localized landing pages. Additionally, we set up an automated WhatsApp nurturing sequence to engage leads instantly. The result was a 400% increase in pan-India admissions at a 50% lower Customer Acquisition Cost (CAC) compared to their previous agency efforts."
  },
  {
    id: "mppsc-coaching-lead-generation-indore",
    title: "MPPSC & Civil Services Coaching — Indore",
    subtitle: "Google Search Ads + Meta Leads + WhatsApp Funnel",
    icon: "fas fa-graduation-cap",
    tags: ["Google Ads", "Meta Ads", "Coaching Marketing", "Lead Gen"],
    problem: "An established MPPSC coaching institute in Bhawarkuan, Indore was experiencing a steady decline in student walk-ins as newer, digitally-savvy institutes dominated local search and social media. Their reliance on traditional banners and printed pamphlets was no longer yielding results, and their sales team lacked a system to capture, track, and follow up with online inquiries.",
    solution: "We built a conversion-focused landing page offering a high-value 'Free MPPSC Syllabus & Prep Guide PDF' download to capture student intent. We launched targeted Meta Ads and Google Search Ads targeting civil services aspirants in Indore and nearby towns. Using n8n, we automated the delivery of the study material via WhatsApp within seconds of form submission. The WhatsApp bot then engaged the students and offered them a seat in a free live demo class. This automated pipeline filled their new batch in 45 days, increasing demo-to-admission conversion by 65%."
  },
  {
    id: "ivf-fertility-clinic-marketing-indore",
    title: "IVF & Fertility Clinic — Indore",
    subtitle: "Trust-First Meta Ads + Private WhatsApp Consultation",
    icon: "fas fa-baby",
    tags: ["Meta Ads", "Healthcare Marketing", "Clinic Lead Gen", "Trust Building"],
    problem: "A premium IVF and fertility clinic in Indore struggled to acquire patients online. IVF is a high-ticket, highly personal healthcare service, and traditional direct-response lead generation ads failed because they did not establish trust. Their previous agency generated low-quality leads from people inquiring about general gynecological costs, leading to high CPL and zero successful clinical treatments.",
    solution: "We shifted the focus to 'Trust-First Educational Marketing.' We produced a series of high-quality video ads featuring the clinic's lead IVF specialist explaining fertility myths and treatment procedures. We set up campaigns on Meta Ads that prompted users to initiate a private WhatsApp chat instead of filling out a form. Using n8n automation, the chat immediately provided helpful information and option to request a free confidential call. This lowered the barrier to entry, resulting in a 3.5x ROI on treatments and a consistent flow of high-intent couple walk-ins."
  },
  {
    id: "real-estate-property-brokerage-leads-indore",
    title: "Premium Property Brokerage — Super Corridor",
    subtitle: "HNW Targeting + Video Walkthroughs + Lead Pre-Qualification",
    icon: "fas fa-key",
    tags: ["Real Estate", "Meta Ads", "Lead Qualification", "CRM Automation"],
    problem: "A premier property consulting firm in Indore wanted to sell premium residential plots and commercial spaces near Super Corridor. Their generic Facebook lead form campaigns were flooded with low-budget inquiries, irrelevant contacts, and people looking for rental properties, leaving their sales team overwhelmed with unqualified leads and zero bookings.",
    solution: "We deployed a lead pre-qualification system. First, we ran Meta Ads featuring high-quality video walkthroughs of the plots and commercial spaces, specifically targeting high-income brackets, business owners, and corporate professionals. Second, we directed traffic to a multi-step qualification landing page where users had to specify their budget, investment timeline, and phone number before receiving the brochures. Integrated via Make.com with HubSpot and WhatsApp, this flow filtered out unqualified users and sent verified leads to the sales team, driving 24 high-value site visits and 4 property bookings in 60 days."
  }
];

