const fs = require('fs');
const file = 'C:/Users/ankit/Documents/Digitads/src/components/home/BelowTheFold.tsx';
let content = fs.readFileSync(file, 'utf8');

// Replace mojibake
content = content.replace(/â€”/g, '—');
content = content.replace(/â€“/g, '–');
content = content.replace(/â€™/g, "'");
content = content.replace(/â‚¹/g, "₹");
content = content.replace(/â­ /g, "⭐");

// Replace Service Icons
content = content.replace(
  /<div className="service-icon">\s*<i className="fab fa-meta" aria-hidden="true"><\/i>\s*<\/div>/g,
  '<img src="https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=600&auto=format&fit=crop" alt="Meta Ads" className="service-img" />'
);
content = content.replace(
  /<div className="service-icon">\s*<i className="fab fa-google" aria-hidden="true"><\/i>\s*<\/div>/g,
  '<img src="https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?q=80&w=600&auto=format&fit=crop" alt="Google Ads" className="service-img" />'
);
content = content.replace(
  /<div className="service-icon">\s*<i className="fas fa-map-marked-alt" aria-hidden="true"><\/i>\s*<\/div>/g,
  '<img src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=600&auto=format&fit=crop" alt="Local SEO & GMB" className="service-img" />'
);
content = content.replace(
  /<div className="service-icon">\s*<i className="fas fa-film" aria-hidden="true"><\/i>\s*<\/div>/g,
  '<img src="https://images.unsplash.com/photo-1536240478700-b869070f9279?q=80&w=600&auto=format&fit=crop" alt="AI Video Ads" className="service-img" />'
);
content = content.replace(
  /<div className="service-icon">\s*<i className="fab fa-whatsapp" aria-hidden="true"><\/i>\s*<\/div>/g,
  '<img src="https://images.unsplash.com/photo-1614680376593-902f74cf0d41?q=80&w=600&auto=format&fit=crop" alt="WhatsApp Automation" className="service-img" />'
);
content = content.replace(
  /<div className="service-icon">\s*<i className="fas fa-laptop-code" aria-hidden="true"><\/i>\s*<\/div>/g,
  '<img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=600&auto=format&fit=crop" alt="Landing Pages" className="service-img" />'
);

// Replace Why Icons
content = content.replace(
  /<div className="why-icon">\s*<i className="fas fa-robot" aria-hidden="true"><\/i>\s*<\/div>/g,
  '<img src="https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=600&auto=format&fit=crop" alt="AI First" className="why-img" />'
);
content = content.replace(
  /<div className="why-icon">\s*<i className="fas fa-map-marker-alt" aria-hidden="true"><\/i>\s*<\/div>/g,
  '<img src="https://images.unsplash.com/photo-1519999482648-25049ddd37b1?q=80&w=600&auto=format&fit=crop" alt="Local Knowledge" className="why-img" />'
);
content = content.replace(
  /<div className="why-icon">\s*<i className="fas fa-chart-line" aria-hidden="true"><\/i>\s*<\/div>/g,
  '<img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=600&auto=format&fit=crop" alt="Results Focus" className="why-img" />'
);
content = content.replace(
  /<div className="why-icon">\s*<i className="fas fa-stethoscope" aria-hidden="true"><\/i>\s*<\/div>/g,
  '<img src="https://images.unsplash.com/photo-1576091160550-2173ff9e9e9c?q=80&w=600&auto=format&fit=crop" alt="Clinic Specialists" className="why-img" />'
);
content = content.replace(
  /<div className="why-icon">\s*<i className="fas fa-bolt" aria-hidden="true"><\/i>\s*<\/div>/g,
  '<img src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=600&auto=format&fit=crop" alt="Fast Execution" className="why-img" />'
);
content = content.replace(
  /<div className="why-icon">\s*<i className="fas fa-file-alt" aria-hidden="true"><\/i>\s*<\/div>/g,
  '<img src="https://images.unsplash.com/photo-1543286386-713bdd548da4?q=80&w=600&auto=format&fit=crop" alt="Transparent Reporting" className="why-img" />'
);

// Remove Fitness & Wellness
const fitnessRegex = /<div className="industry-card">\s*<div className="industry-icon">\s*<i className="fas fa-dumbbell" aria-hidden="true"><\/i>\s*<\/div>\s*<h3>Fitness &amp; Wellness<\/h3>\s*<p>[\s\S]*?<\/p>\s*<\/div>/;
content = content.replace(fitnessRegex, '');

// Remove Political & PR Campaigns
const politicalRegex = /<div className="industry-card">\s*<div className="industry-icon">\s*<i className="fas fa-landmark" aria-hidden="true"><\/i>\s*<\/div>\s*<h3>Political &amp; PR Campaigns<\/h3>\s*<p>[\s\S]*?<\/p>\s*<\/div>/;
content = content.replace(politicalRegex, '');

fs.writeFileSync(file, content);
console.log("Done");
