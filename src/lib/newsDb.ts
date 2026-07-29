// @ts-nocheck
import { initializeApp, getApps, getApp } from "firebase/app";
import { 
  getFirestore, 
  collection, 
  getDocs, 
  doc, 
  setDoc, 
  deleteDoc,
  query
} from "firebase/firestore";

export interface NewsPost {
  id: string;
  slug: string;
  category: string;
  date: string;
  readTime: string;
  icon: string;
  image: string;
  imageAlt: string;
  
  // English version
  titleEn: string;
  excerptEn: string;
  contentEn: string;
  tagsEn: string[];
  
  // Hindi version
  titleHi: string;
  excerptHi: string;
  contentHi: string;
  tagsHi: string[];
}

export const defaultNews: NewsPost[] = [
  {
    id: "chatgpt-searchgpt-rollout-marketing-impact",
    slug: "chatgpt-searchgpt-rollout-marketing-impact",
    category: "AI in Search",
    date: "Jul 28, 2026",
    readTime: "5 min read",
    icon: "fa-solid fa-magnifying-glass-chart",
    image: "/news-searchgpt.jpg",
    imageAlt: "ChatGPT search features showing conversational web search and source citations",
    
    // English Version
    titleEn: "ChatGPT Rolls Out SearchGPT Features Globally: The SEO Impact",
    excerptEn: "OpenAI has officially integrated SearchGPT capabilities directly into ChatGPT, transitioning from a prototype to a mainstream search tool. Learn how conversational search and direct citations affect digital marketing and website ranking.",
    contentEn: `# ChatGPT Rolls Out SearchGPT Features Globally: The SEO Impact

OpenAI has completed the global integration of **SearchGPT** capabilities directly into the core **ChatGPT** interface. Moving away from the classic "list of links" model, this update provides a conversational search experience with real-time web citations.

For digital marketers and businesses in Indore, this shift means optimizing for conversational intent and topical authority is now critical for visibility.

---

## Key Features of ChatGPT Search

* **Conversational Context:** Users can ask questions in natural language and follow up without losing context.
* **Direct Citations & Attribution:** ChatGPT displays clear, prominent links to source websites alongside the text summaries, driving traffic directly to authoritative publishers.
* **Real-Time Integration:** By partnering with Bing and utilizing custom web crawlers, OpenAI ensures that current data, financial reports, maps, and weather are immediately searchable.

---

## Comparison: Traditional Search vs. AI Search

| Feature | Google Traditional Search | ChatGPT Search (SearchGPT) |
| :--- | :--- | :--- |
| **Output Format** | Page of blue links and rich snippets | Synthesized conversational text |
| **Context Retention**| Low (each query is independent) | High (remembers conversation history) |
| **Ad Placements** | High visibility (top of page Ads) | Contextual sponsored links |
| **Key Ranking Factor**| Backlinks, Domain Authority, UX | Direct answers, structural schema, data citations |

---

## Generative Engine Optimization (GEO) Playbook

To ensure your local business or agency ranks in ChatGPT Search summaries:
1. **Provide Clear, Direct Answers:** Structure your content to answer specific questions directly (e.g. *"What is the best digital marketing strategy for coaching centers in Indore?"*).
2. **Optimize Schema Markup:** Use clean JSON-LD structured schemas to help AI bots parse your entity information.
3. **Include Rich Statistics and Data:** AI search engines prioritize citing hard facts, tables, and verifiable numbers over marketing filler.

---

## FAQ: What Marketers Need to Know

**Q: Will ChatGPT Search steal website traffic?**
A: Not necessarily. While it reduces "zero-intent" click traffic, users seeking detailed guides and conversions will click the prominent citations. Authoritative sources will receive higher-quality, intent-driven traffic.

**Q: How do I track ChatGPT Search traffic in analytics?**
A: Traffic coming from OpenAI search citations appears under the referrer domain \`chatgpt.com\` or \`openai.com\` in Google Analytics.`,
    tagsEn: ["SearchGPT", "OpenAI", "ChatGPT Search", "SEO", "GEO"],
    
    // Hindi Version
    titleHi: "ChatGPT ने वैश्विक स्तर पर रोल आउट किया SearchGPT फीचर्स: जानें SEO पर असर",
    excerptHi: "OpenAI ने आधिकारिक तौर पर ChatGPT में SearchGPT क्षमताओं को जोड़ दिया है। बातचीत वाले सर्च (conversational search) और सीधे स्रोतों (citations) के आने से डिजिटल मार्केटिंग पर क्या असर होगा, यहाँ जानें।",
    contentHi: `# ChatGPT ने वैश्विक स्तर पर रोल आउट किया SearchGPT फीचर्स: जानें SEO पर असर

OpenAI ने मुख्य **ChatGPT** इंटरफ़ेस में **SearchGPT** की क्षमताओं का वैश्विक एकीकरण (integration) पूरा कर लिया है। पारंपरिक "नीले लिंक्स की सूची" से हटकर, यह नया अपडेट पाठकों को सीधे बातचीत के साथ लाइव वेब साइटेशन (स्रोत लिंक) प्रदान करता है।

इन्दौर और देश के डिजिटल मार्केटर्स के लिए इसका मतलब है कि अब केवल कीवर्ड डालना काफी नहीं है। अब बातचीत वाले सर्च और तथ्यात्मक जानकारी (topical authority) पर ध्यान देना ही रैंकिंग का एकमात्र रास्ता है।

---

## ChatGPT सर्च की मुख्य विशेषताएं

* **बातचीत का संदर्भ (Context):** यूजर्स सामान्य भाषा में सवाल पूछ सकते हैं और बिना पुराना संदर्भ खोए फॉलो-अप प्रश्न कर सकते हैं।
* **सीधे स्रोत और लिंक्स (Direct Citations):** ChatGPT उत्तरों के साथ स्रोत वेबसाइट के सीधे लिंक्स दिखाता है, जिससे पाठकों को मूल प्रकाशक पर भेजने में मदद मिलती है।
* **रियल-टाइम जानकारी:** माइक्रोसॉफ्ट बिंग (Bing) के साथ साझेदारी और उन्नत क्रॉलर्स की मदद से यह ताज़ा खबरें, मैप्स और मौसम की जानकारी तुरंत खोज लेता है।

---

## तुलना: पारंपरिक सर्च बनाम AI सर्च

| विशेषता | गूगल पारंपरिक सर्च | ChatGPT सर्च (SearchGPT) |
| :--- | :--- | :--- |
| **परिणाम का प्रारूप** | नीले लिंक्स और रिच स्निपेट्स का पेज | संक्षिप्त रूप से लिखी हुई जानकारी |
| **संदर्भ याद रखना** | कम (हर सर्च स्वतंत्र होता है) | बहुत अधिक (बातचीत का इतिहास याद रखता है) |
| **विज्ञापन (Ads)** | पेज के सबसे ऊपर (स्पॉन्सर्ड) | प्रासंगिक और चुनिंदा स्पॉन्सर्ड लिंक्स |
| **मुख्य रैंकिंग फैक्टर** | बैकलिंक्स, डोमेन अथॉरिटी, UX | सीधे जवाब, स्कीमा मार्कअप, डाटा साइटेशन |

---

## GEO (जेनरेटिव इंजन ऑप्टिमाइज़ेशन) कैसे करें?

ChatGPT सर्च में अपनी वेबसाइट को लाने के लिए इन 3 नियमों का पालन करें:
1. **सीधे और सटीक उत्तर लिखें:** अपनी वेबसाइट पर सवालों के सीधे जवाब दें (जैसे - *"इन्दौर में कोचिंग सेंटर के लिए बेस्ट डिजिटल मार्केटिंग कैसे करें?"*)।
2. **स्कीमा मार्कअप का प्रयोग करें:** साफ-सुथरे JSON-LD स्कीमा का उपयोग करें ताकि AI बॉट्स आपकी जानकारी आसानी से पढ़ सकें।
3. **विश्वसनीय आंकड़े और टेबल जोड़ें:** AI सर्च इंजन विज्ञापन वाले वाक्यों की जगह सीधे आंकड़ों, तालिकाओं (tables) और प्रमाणित फैक्ट्स को उद्धृत (cite) करना पसंद करते हैं।

---

## FAQ: अक्सर पूछे जाने वाले सवाल

**Q: क्या ChatGPT सर्च से वेबसाइट का ट्रैफ़िक कम हो जाएगा?**
A: नहीं, वास्तव में यह केवल बिना मतलब के होने वाले क्लिक्स को कम करेगा। जो यूजर सच में कनवर्ट होना चाहते हैं या गहरी जानकारी चाहते हैं, वे साइटेशन लिंक पर क्लिक करके आपकी वेबसाइट पर आएंगे।

**Q: गूगल एनालिटिक्स में ChatGPT के ट्रैफ़िक को कैसे ट्रैक करें?**
A: ChatGPT से आने वाला ट्रैफ़िक आपके एनालिटिक्स में referrer के रूप में \`chatgpt.com\` या \`openai.com\` से दिखाई देगा।` ,
    tagsHi: ["सर्च-जीपीटी", "ओपन-एआई", "ChatGPT सर्च", "एसईओ", "जीईओ"]
  },
  {
    id: "google-ai-overviews-ads-integration",
    slug: "google-ai-overviews-ads-integration",
    category: "Google Updates",
    date: "Jul 21, 2026",
    readTime: "4 min read",
    icon: "fa-solid fa-rectangle-ad",
    image: "/news-google-ai.jpg",
    imageAlt: "Google AI Overviews interface displaying integrated search and shopping advertisements",
    
    // English Version
    titleEn: "Google Rolls Out Ads in AI Overviews: What it Means for Advertisers",
    excerptEn: "Google has officially integrated Search and Shopping advertisements directly inside AI Overviews globally. Discover how this zero-click ad placement affects CPC, conversion rates, and budget allocation.",
    contentEn: `# Google Rolls Out Ads in AI Overviews: What it Means for Advertisers

Google has announced the global rollout of **advertisements inside AI Overviews** (formerly known as Search Generative Experience). Ads from existing Search, Shopping, and Performance Max campaigns will now automatically appear within AI-generated summary blocks.

As AI search becomes the default way users consume information, this update is critical for maintaining ad visibility on the Google Search Results Page (SERP).

---

## How Ads in AI Overviews Work

Google’s ad delivery system uses contextual signals to decide when and where to place ads relative to the AI overview:
1. **Embedded Units:** Shopping and product units appear directly within the AI summary box when the query expresses commercial intent.
2. **Above and Below Summary:** Standard text search ads are positioned above or below the AI box based on search relevance and bids.
3. **No Special Setups Required:** Advertisers do not need to create unique campaigns. Existing search assets and feeds are dynamically selected by the Google Ads auction.

---

## The Impact on Search Engine Marketing (SEM)

* **CPC Optimization:** Early tests indicate that ads placed inside AI Overviews see a **15% to 20% higher click-through rate (CTR)** due to their highly contextual nature, though CPC bids may initially rise due to limited slots.
* **Asset Quality Matters:** High-quality product images, detailed merchant descriptions, and rich asset groups in Performance Max are heavily favored by the AI layout engine.

---

## Action Plan for Local Businesses

| Step | Action Item | Expected Result |
| :--- | :--- | :--- |
| **1** | Enable Broad Match keywords with smart bidding. | Capture dynamic queries summarized by AI. |
| **2** | Optimize Merchant Center product descriptions. | High chance of appearing as a product unit in commercial Overviews. |
| **3** | Focus on informational target keywords. | Drive traffic to blogs using helpful Content Assets to capture early-stage leads. |

---

## FAQ: Advertising in the AI Era

**Q: Do I need to pay extra to show ads in AI Overviews?**
A: No, standard billing models (Cost Per Click / CPC) apply. You only pay when a user clicks on the ad unit inside the AI Overview.

**Q: Can I opt-out of appearing in AI Overviews?**
A: Currently, there is no separate checkbox to disable ads in AI Overviews. If your Search or Shopping campaigns are active, they are automatically eligible to serve there.`,
    tagsEn: ["Google Ads", "AI Overviews", "PPC", "Performance Max", "SEM"],
    
    // Hindi Version
    titleHi: "गूगल ने AI Overviews में विज्ञापन शुरू किए: विज्ञापनदाताओं के लिए नई चुनौती",
    excerptHi: "गूगल ने आधिकारिक तौर पर वैश्विक स्तर पर AI Overviews (कृत्रिम बुद्धिमत्ता वाले उत्तर) के भीतर सर्च और शॉपिंग विज्ञापन दिखाना शुरू कर दिया है। जानें आपके बजट और क्लिक्स पर इसका क्या प्रभाव पड़ेगा।",
    contentHi: `# गूगल ने AI Overviews में विज्ञापन शुरू किए: विज्ञापनदाताओं के लिए नई चुनौती

गूगल ने आधिकारिक तौर पर अपने **AI Overviews** (जिसके पहले सर्च जेनरेटिव एक्सपीरियंस या SGE कहा जाता था) के भीतर **विज्ञापनों (Ads) के एकीकरण** की घोषणा की है। आपकी मौजूदा सर्च, शॉपिंग और परफॉरमेंस मैक्स (PMax) अभियानों के विज्ञापन अब अपने आप AI द्वारा जनरेटेड सारांश के बीच में दिखाई देंगे।

सर्च करने के इस आधुनिक तरीके में, गूगल विज्ञापन से मिलने वाले रेवेन्यू को बनाए रखने के लिए यह कदम उठा रहा है। हर मार्केटर को इस बदलाव के अनुसार अपनी रणनीतियाँ बदलनी होंगी।

---

## AI Overviews में विज्ञापन कैसे काम करते हैं?

गूगल का सिस्टम यूजर की खोज के उद्देश्य (user intent) को समझकर विज्ञापन की स्थिति तय करता है:
1. **बीच में जुड़े विज्ञापन (Embedded Ads):** जब कोई यूजर खरीदारी के उद्देश्य से सर्च करता है, तो AI सारांश के बिल्कुल बीच में शॉपिंग प्रोडक्ट्स कार्ड्स दिखाई देते हैं।
2. **AI बॉक्स के ऊपर या नीचे:** सामान्य टेक्स्ट विज्ञापन बोली (bidding) और प्रासंगिकता के आधार पर AI बॉक्स के ऊपर या नीचे दिखाए जाते हैं।
3. **किसी अलग सेटअप की आवश्यकता नहीं:** विज्ञापनदाताओं को कोई नया विज्ञापन कैंपेन बनाने की आवश्यकता नहीं है। गूगल एड्स नीलामी (auction) के ज़रिये अपने आप आपके विज्ञापन वहाँ दिखाएगा।

---

## विज्ञापन दाताओं (Advertisers) पर क्या प्रभाव पड़ेगा?

* **सटीक क्लिक-थ्रू रेट (CTR):** प्राथमिक रिपोर्ट्स के अनुसार, AI Overviews के अंदर दिखने वाले विज्ञापनों का CTR **15% से 20% अधिक** देखा गया है क्योंकि ये बिल्कुल यूजर के सवाल के जवाब के पास होते हैं।
* **इमेज और टेक्स्ट क्वालिटी का महत्व:** परफॉरमेंस मैक्स अभियानों में बेहतर क्वालिटी के फोटो, विस्तृत विवरण और प्रासंगिक कंटेंट का होना आवश्यक है, क्योंकि गूगल का AI उन्हें ही चुनता है।

---

## आपके लिए 3-चरणीय रणनीति (Action Plan)

| चरण | कार्य | संभावित परिणाम |
| :--- | :--- | :--- |
| **1** | स्मार्ट बिडिंग के साथ ब्रॉड मैच कीवर्ड्स का उपयोग करें। | AI द्वारा सारांशित किए जाने वाले नए प्रकार के सर्च क्वेरीज़ को कैप्चर करें। |
| **2** | मर्चेंट सेंटर (Merchant Center) में प्रोडक्ट की जानकारी दुरुस्त करें। | कमर्शियल AI खोजों में प्रोडक्ट दिखने की संभावना बढ़ेगी। |
| **3** | ज्ञानवर्धक कीवर्ड्स पर ब्लॉग्स बनाएं। | सीधे विज्ञापन न चलाने वाले ग्राहकों को शिक्षाप्रद ब्लॉग्स से वेबसाइट पर लाएं। |

---

## FAQ: अक्सर पूछे जाने वाले सवाल

**Q: क्या AI Overviews में विज्ञापन दिखाने के लिए अलग से शुल्क देना होगा?**
A: नहीं, मानक सीपीसी (CPC - कॉस्ट पर क्लिक) मॉडल ही लागू होता है। जब कोई यूजर AI ओवरव्यू के भीतर आपके विज्ञापन पर क्लिक करेगा, तभी पैसे कटेंगे।

**Q: क्या मैं AI Overviews में विज्ञापन दिखाना बंद कर सकता हूँ?**
A: फिलहाल गूगल एड्स में ऐसा कोई विकल्प नहीं है जिससे आप केवल AI ओवरव्यू वाले विज्ञापनों को बंद कर सकें। यदि आपकी सर्च या शॉपिंग विज्ञापन चालू हैं, तो वे यहाँ दिखने के योग्य रहेंगे।` ,
    tagsHi: ["गूगल विज्ञापन", "AI ओवरव्यू", "पीपीसी", "परफॉर्मेंस मैक्स", "मार्केटिंग"]
  },
  {
    id: "meta-adds-advantage-plus-ai-voice-clones",
    slug: "meta-adds-advantage-plus-ai-voice-clones",
    category: "Social Media Ads",
    date: "Jul 14, 2026",
    readTime: "4 min read",
    icon: "fa-brands fa-meta",
    image: "/news-meta-ai.jpg",
    imageAlt: "Meta Advantage+ ads platform showing custom AI voice generation and image tools",
    
    // English Version
    titleEn: "Meta Updates Advantage+ with Custom Brand Voice & AI Audio Assets",
    excerptEn: "Meta has introduced generative AI voice synthesis and custom tone personalization inside the Advantage+ creative suite. Local businesses can now generate multi-language voiceovers for Reels automatically.",
    contentEn: `# Meta Updates Advantage+ with Custom Brand Voice & AI Audio Assets

Meta has launched a major update to its **Advantage+ creative suite**, adding generative AI voice cloning and real-time audio personalization. Advertisers can now dynamically adapt their video ads to match local regional accents or convert script text to voice automatically inside the Meta Ads Manager.

For businesses targeting central India (like Madhya Pradesh and Indore), this tool allows for cost-effective localization.

---

## Key AI Updates in Meta Ads Manager

* **Custom Brand Voice Clones:** Brands can upload a 2-minute sample of an spokesperson's voice to generate custom voiceovers for all video variations.
* **Auto-Translation & Dubbing:** The system can automatically translate and dub English ad voiceovers into local languages (including Hindi) while keeping the original voice's tone and emotion.
* **Image Expansion with Fluid Backgrounds:** Meta's generative layout expands static creatives into vertical video formats suitable for Reels, filling backgrounds with context-aware AI visuals.

---

## Benefits of AI Personalization in Reels Ads

| Metric | Traditional Video Ads | Advantage+ AI Video Ads |
| :--- | :--- | :--- |
| **Creative Production Time** | 3 - 7 Days | Under 30 Minutes |
| **Average Cost per Lead (CPL)**| ₹180 - ₹250 | ₹100 - ₹140 (approx 40% reduction) |
| **Language Localization** | Requires dubbing artists | Instant automated AI audio dubbing |
| **Ad Fatigue Resistance** | Low (same video shown repeatedly) | High (system generates dynamic variations) |

---

## Quick Optimization Guide

1. **Upload Clean Voice Samples:** Ensure your spokesperson recording is in a quiet room so the voice clone is crystal clear.
2. **Let the Algorithm Test Adaptations:** Turn on Meta's *"Advantage+ Creative"* optimizations, allowing the ad engine to serve the best combination of visual and voice to different demographics.
3. **Verify Translations Manually:** Always preview translated Hindi audio scripts before launching to ensure local phrasing and terminology feel natural.

---

## FAQ: Meta's Generative AI Ads

**Q: Are cloned voices safe to use?**
A: Yes, Meta ensures that voice cloning is restricted to assets where you have explicit permission. All synthesized audio features a subtle watermark to identify it as AI-generated.

**Q: Can I use this for local targeting in Indore?**
A: Absolutely. You can combine localized voiceovers (Hinglish/Hindi) with precise geographical targeting (Vijay Nagar, Indore) to drive highly relevant local traffic.`,
    tagsEn: ["Meta Ads", "Advantage+", "AI Audio", "Instagram Reels", "SMM"],
    
    // Hindi Version
    titleHi: "Meta का Advantage+ अपडेट: विज्ञापनों के लिए आ गया कस्टम AI वॉयस क्लोनिंग",
    excerptHi: "Meta ने Advantage+ क्रिएटिव सूट में जनरेटिव AI वॉयस सिंथेसिस और ऑडियो पर्सनलाइजेशन टूल लॉन्च किया है। अब आप बिना डबिंग आर्टिस्ट के रील्स के लिए अलग-अलग भाषाओं में आवाजें बना सकते हैं।",
    contentHi: `# Meta का Advantage+ अपडेट: विज्ञापनों के लिए आ गया कस्टम AI वॉयस क्लोनिंग

मेटा (Meta) ने अपने **Advantage+ क्रिएटिव सूट** में एक बड़ा अपडेट जारी किया है, जिसमें जनरेटिव AI वॉयस क्लोनिंग और रियल-टाइम ऑडियो कस्टमाइज़ेशन जोड़ा गया है। अब विज्ञापनदाता विज्ञापन बनाते समय टेक्स्ट लिखकर उसे सीधे अपनी पसंद की AI आवाज़ में बदल सकते हैं, वह भी सीधे मेटा एड्स मैनेजर के अंदर।

मध्य प्रदेश और इन्दौर जैसे क्षेत्रों में चलने वाले विज्ञापनों के लिए यह बजट बचाने वाला और बहुत उपयोगी टूल साबित होने वाला है।

---

## मेटा एड्स मैनेजर में मुख्य AI बदलाव

* **कस्टम ब्रांड वॉयस क्लोन (Voice Clones):** ब्रांड्स अपने किसी वक्ता (spokesperson) की केवल 2 मिनट की आवाज़ अपलोड करके किसी भी नए स्क्रिप्ट के लिए उसी आवाज़ में ऑडियो फाइल बना सकते हैं।
* **ऑटो-ट्रांसलेशन और डबिंग:** यह टूल इंग्लिश के वीडियो विज्ञापनों को मूल वक्ता की आवाज़ के टोन को खोए बिना इन्दौर और अन्य स्थानीय इलाकों के लिए हिंदी या हिंग्लिश में बदल सकता है।
* **इमेज एक्सपेंशन (Image Expansion):** चौकोर (square) फोटो को रील्स में दिखाने के लिए AI स्वतः बैकग्राउंड बनाकर उसे 9:16 वर्टिकल साइज में बदल देता है।

---

## रील्स विज्ञापनों में AI का लाभ (तुलना)

| मीट्रिक (Metric) | पारंपरिक वीडियो विज्ञापन | Advantage+ AI विज्ञापन |
| :--- | :--- | :--- |
| **विज्ञापन बनाने का समय** | 3 - 7 दिन | 30 मिनट से कम |
| **औसत कॉस्ट-पर-लीड (CPL)** | ₹180 - ₹250 | ₹100 - ₹140 (लगभग 40% की बचत) |
| **स्थानीयकरण (Localization)** | डबिंग आर्टिस्ट की ज़रूरत | तुरंत AI द्वारा वॉयस ओवर तैयार |
| **विज्ञापन की थकावट (Fatigue)** | जल्दी (यूजर एक ही वीडियो देखकर बोर होते हैं) | कम (सिस्टम लगातार नई विविधताएँ बनाता है) |

---

## मार्केट्स के लिए क्विक गाइड

1. **साफ़ ऑडियो अपलोड करें:** वॉयस क्लोनिंग के लिए अपलोड की जाने वाली ऑडियो बिना शोर (background noise) वाली होनी चाहिए।
2. **एल्गोरिदम को टेस्ट करने दें:** मेटा के "Advantage+ Creative" विकल्प को चालू रखें, जिससे सिस्टम खुद तय करे कि किस यूजर को कौन सा वॉयस और विज़ुअल कॉम्बिनेशन दिखाना है।
3. **अनुवाद को खुद चेक करें:** विज्ञापन लाइव करने से पहले AI द्वारा अनुवादित हिंदी ऑडियो को एक बार सुन लें ताकि कोई व्याकरण संबंधी त्रुटि न हो।

---

## FAQ: अक्सर पूछे जाने वाले सवाल

**Q: क्या क्लोन की गई आवाजें कानूनी रूप से सुरक्षित हैं?**
A: हाँ, मेटा केवल उन आवाजों को क्लोन करने की अनुमति देता है जिनका आपके पास स्पष्ट अधिकार है। सभी AI वॉयस फाइलों में डिजिटल वॉटरमार्क होता है।

**Q: क्या मैं इसका उपयोग इंदौर में विज्ञापन चलाने के लिए कर सकता हूँ?**
A: बिल्कुल! इंदौर के विशिष्ट क्षेत्रों (जैसे विजय नगर, पलासिया) के लिए हिंग्लिश या शुद्ध हिंदी वॉयसओवर बनाकर विज्ञापन चला सकते हैं, जिससे बेहतर जुड़ाव मिलता है।` ,
    tagsHi: ["मेटा विज्ञापन", "Advantage+", "AI ऑडियो", "इंस्टाग्राम रील्स", "विज्ञापन"]
  }
];

// Database APIs
export const getNews = async (): Promise<NewsPost[]> => {
  if (typeof window === "undefined") {
    return defaultNews;
  }

  // Fallback to localStorage or use default
  try {
    const item = localStorage.getItem("news");
    if (!item) {
      localStorage.setItem("news", JSON.stringify(defaultNews));
      return defaultNews;
    }
    return JSON.parse(item);
  } catch (e) {
    return defaultNews;
  }
};

export const saveNews = async (post: NewsPost): Promise<void> => {
  const news = await getNews();
  const idx = news.findIndex((n) => n.id === post.id);
  if (idx !== -1) {
    news[idx] = post;
  } else {
    news.push(post);
  }
  if (typeof window !== "undefined") {
    localStorage.setItem("news", JSON.stringify(news));
  }
};
