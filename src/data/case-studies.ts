export interface CaseStudy {
  id: string; // Used for the slug
  title: string;
  subtitle: string;
  icon: string;
  tags: string[];
  problem: string; // The Challenge
  solution: string; // Strategy & Execution
  image?: string; // Optional image for SEO/OpenGraph
}

export const caseStudiesData: CaseStudy[] = [
  {
    id: "skin-hair-clinic-meta-whatsapp",
    title: "Skin & Hair Clinic — Indore",
    subtitle: "Meta Ads + WhatsApp Automation",
    icon: "fas fa-stethoscope",
    tags: ["Meta Ads", "WhatsApp Automation", "Healthcare"],
    problem: "A prominent skin and hair clinic in Vijay Nagar, Indore was spending ₹15,000/month on Facebook Ads but acquiring only 8–10 leads with exceptionally poor follow-up. Most inquiries went cold because the front desk couldn't respond fast enough during busy hours.",
    solution: "We rebuilt the Meta Ads campaign from scratch, deploying new localized audiences, video testimonial creatives, and clear offer-based hooks. Simultaneously, we implemented a custom WhatsApp automation flow using n8n. The system responded to every lead within 60 seconds, answering basic queries and automatically booking consultation slots into the doctor's calendar. This resulted in a massive surge in show-up rates and drastically reduced the Cost Per Lead (CPL)."
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
    problem: "A prominent 100-bed hospital in Ujjain had an ancient, non-responsive website that took 8 seconds to load. Patients could not easily find doctor schedules or book appointments online, resulting in an overloaded phone reception and lost digital visibility.",
    solution: "We engineered a completely new, HIPAA-compliant website optimized for Core Web Vitals (loading in under 1.5 seconds). We structured the site architecture around Medical SEO, creating dedicated silo pages for each department (Cardiology, Orthopedics, etc.). We integrated a seamless online appointment booking system and WhatsApp chat widget, which drastically reduced reception call volume while increasing outstation patient bookings via organic search."
  }
];
