const fs = require('fs');
const path = require('path');

const srcDir = 'C:\\Users\\Ankit Bairagi\\.gemini\\antigravity\\brain\\6e6941ca-1174-4fe4-a2df-874dbeaf641d';
const destDir = path.join(__dirname, 'public', 'images', 'services');

if (!fs.existsSync(destDir)) {
    fs.mkdirSync(destDir, { recursive: true });
}

const images = [
    { src: 'services_meta_ads_1779184136885.png', dest: 'services-meta-ads.png' },
    { src: 'services_google_ads_1779184157299.png', dest: 'services-google-ads.png' },
    { src: 'services_local_seo_1779184173819.png', dest: 'services-local-seo.png' },
    { src: 'services_ai_video_1779184193566.png', dest: 'services-ai-video.png' },
    { src: 'services_whatsapp_auto_1779184216787.png', dest: 'services-whatsapp-auto.png' },
    { src: 'services_landing_pages_1779184233876.png', dest: 'services-landing-pages.png' },
    { src: 'services_branding_1779184253347.png', dest: 'services-branding.png' }
];

images.forEach(img => {
    const srcPath = path.join(srcDir, img.src);
    const destPath = path.join(destDir, img.dest);
    
    if (fs.existsSync(srcPath)) {
        fs.copyFileSync(srcPath, destPath);
        console.log(`Copied ${img.dest}`);
    } else {
        console.error(`File not found: ${srcPath}`);
    }
});

console.log('Done!');
