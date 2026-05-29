const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src/components/home/BelowTheFold.tsx');
let content = fs.readFileSync(filePath, 'utf8');

// Replace all <img src="https://images.unsplash.com/... /> with added attributes
content = content.replace(/<img src="(https:\/\/images\.unsplash\.com\/[^"]+)" alt="([^"]+)" className="([^"]+)" \/>/g, 
  '<img src="$1" alt="$2" className="$3" loading="lazy" width="600" height="400" decoding="async" />');

fs.writeFileSync(filePath, content, 'utf8');
console.log('Images optimized in BelowTheFold.tsx');
