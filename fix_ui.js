const fs = require('fs');
const path = require('path');

function replaceInFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  
  // FontAwesome Fixes: Replace fab with fa-brands for version 6 compatibility
  content = content.replace(/fab fa-/g, 'fa-brands fa-');
  
  // Specific image fixes for BelowTheFold.tsx
  if (filePath.includes('BelowTheFold.tsx')) {
    // Meta Ads -> Instagram icon focus (instead of apps with Netflix)
    content = content.replace(/photo-1611162617474-5b21e879e113/g, 'photo-1611262588024-d12430b98920'); // Using a specific Instagram marketing image
    
    // AI Video Ads -> Video editing / Camera
    content = content.replace(/photo-1536240478700-b869070f9279/g, 'photo-1574717024653-61fd2cf4d44d');
    
    // WhatsApp Automation -> WhatsApp logo specifically
    content = content.replace(/photo-1614680376593-902f74cf0d41/g, 'photo-1614680376573-3e4e1ef4142a');
  }
  
  fs.writeFileSync(filePath, content);
}

function processDirectory(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      processDirectory(fullPath);
    } else if (fullPath.endsWith('.tsx') || fullPath.endsWith('.ts')) {
      replaceInFile(fullPath);
    }
  }
}

processDirectory('C:/Users/ankit/Documents/Digitads/src');
console.log("Done fixing logos and images.");
