const fs = require('fs');
const path = require('path');

function processFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let changed = false;

  // Replace FontAwesome CDN
  if (filePath.endsWith('layout.tsx')) {
    const oldCdn = 'https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.0/css/all.min.css';
    const newCdn = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css';
    if (content.includes(oldCdn)) {
      content = content.split(oldCdn).join(newCdn);
      changed = true;
    }
  }

  // Replace GMB links
  const gmbRegex = /https:\/\/share\.google\/[A-Za-z0-9_]+/g;
  if (gmbRegex.test(content)) {
    content = content.replace(gmbRegex, 'https://share.google/4mgJdYDzlAdOkyjuS');
    changed = true;
  }

  // Fix fa-brands in case they were missed
  if (content.includes('fab fa-')) {
    content = content.replace(/fab fa-/g, 'fa-brands fa-');
    changed = true;
  }

  if (changed) {
    fs.writeFileSync(filePath, content);
  }
}

function processDirectory(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      processDirectory(fullPath);
    } else if (fullPath.endsWith('.tsx') || fullPath.endsWith('.ts') || fullPath.endsWith('.css')) {
      processFile(fullPath);
    }
  }
}

processDirectory('C:/Users/ankit/Documents/Digitads/src');
console.log("Done fixing CDN and GMB links.");
