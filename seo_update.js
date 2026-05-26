const fs = require('fs');

const btfPath = 'C:/Users/ankit/Documents/Digitads/src/components/home/BelowTheFold.tsx';
let btf = fs.readFileSync(btfPath, 'utf8');
btf = btf.replace(/alt="Meta Ads"/g, 'alt="Best Meta Ads Services for Clinics in Indore by Digitalads"');
btf = btf.replace(/alt="Google Ads"/g, 'alt="Top Google Ads Agency for Coaching Centers in Indore - Digitalads"');
btf = btf.replace(/alt="Local SEO & GMB"/g, 'alt="GMB Optimization & Local SEO Services Indore"');
btf = btf.replace(/alt="AI Video Ads"/g, 'alt="AI Video Ads Creation for Instagram Reels & YouTube Shorts Indore"');
btf = btf.replace(/alt="WhatsApp Automation"/g, 'alt="WhatsApp CRM Automation for Lead Generation Indore"');
btf = btf.replace(/alt="Landing Pages"/g, 'alt="High Converting Landing Page Design Services Indore"');

btf = btf.replace(/alt="AI First"/g, 'alt="AI-First Digital Marketing Strategies in Indore"');
btf = btf.replace(/alt="Local Knowledge"/g, 'alt="Deep Local Market Knowledge of Indore Businesses"');
btf = btf.replace(/alt="Results Focus"/g, 'alt="Results-Only Digital Marketing Agency in Madhya Pradesh"');
btf = btf.replace(/alt="Clinic Specialists"/g, 'alt="Specialist Digital Marketing for Healthcare & Clinics Indore"');
btf = btf.replace(/alt="Fast Execution"/g, 'alt="Fast Onboarding & Execution Digital Ads Services"');
btf = btf.replace(/alt="Transparent Reporting"/g, 'alt="Transparent Monthly Reporting Digital Marketing"');
fs.writeFileSync(btfPath, btf);

const servicesPath = 'C:/Users/ankit/Documents/Digitads/src/app/services/page.tsx';
let serv = fs.readFileSync(servicesPath, 'utf8');
serv = serv.replace(/alt="Meta Ads Performance Dashboard"/g, 'alt="Meta Ads Performance Dashboard - Digitalads Indore"');
serv = serv.replace(/alt="Google Search Ads Dashboard"/g, 'alt="Google Search Ads Dashboard - Digital Marketing Indore"');
serv = serv.replace(/alt="Google Maps and Local SEO for Indore businesses"/g, 'alt="Google Maps and Local SEO for Indore businesses - Digitalads"');
serv = serv.replace(/alt="AI Video Editing Setup"/g, 'alt="AI Video Editing Setup for Reels & Shorts Indore"');
serv = serv.replace(/alt="WhatsApp CRM Automation Dashboard"/g, 'alt="WhatsApp CRM Automation Dashboard for Clinics Indore"');
serv = serv.replace(/alt="High Converting Landing Page Design"/g, 'alt="High Converting Landing Page Design - Digitalads"');
serv = serv.replace(/alt="Logo Design and Brand Identity"/g, 'alt="Logo Design and Brand Identity Agency Indore"');
fs.writeFileSync(servicesPath, serv);

const footerPath = 'C:/Users/ankit/Documents/Digitads/src/components/Footer.tsx';
let foot = fs.readFileSync(footerPath, 'utf8');
const mapIframe = `              <li>
                <i className="fas fa-map-marker-alt" aria-hidden="true"></i>{" "}
                Indore, Madhya Pradesh, India
              </li>
              <li style={{ marginTop: '15px', marginBottom: '15px' }}>
                <iframe
                  src="https://maps.google.com/maps?q=Digitalads+Digital+Marketing+Agency+Indore+Madhya+Pradesh&t=&z=14&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="140"
                  style={{ border: 0, borderRadius: '8px' }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Digitalads Location"
                ></iframe>
              </li>`;
foot = foot.replace(/<li>\s*<i className="fas fa-map-marker-alt" aria-hidden="true"><\/i>\{" "\}\s*Indore, Madhya Pradesh, India\s*<\/li>/, mapIframe);
fs.writeFileSync(footerPath, foot);

console.log("Images SEO and Footer Map updated.");
