import { getBlogs } from "@/lib/db";
import { caseStudiesData } from "@/data/case-studies";

export async function GET() {
  const blogs = await getBlogs();
  const siteUrl = "https://thedigitalads.in";
  
  const rssItems = blogs.map((blog) => {
    return `
      <item>
        <title><![CDATA[${blog.title}]]></title>
        <link>${siteUrl}/blog/${blog.slug}</link>
        <guid isPermaLink="true">${siteUrl}/blog/${blog.slug}</guid>
        <description><![CDATA[${blog.excerpt}]]></description>
        <pubDate>${new Date(blog.date).toUTCString()}</pubDate>
        <author>digitalads959@gmail.com (Ankit Bairagi)</author>
        ${blog.tags.map((tag) => `<category><![CDATA[${tag}]]></category>`).join('')}
      </item>
    `;
  }).join("");

  const rss = `<?xml version="1.0" encoding="UTF-8"?>
  <rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
    <channel>
      <title>Digitalads Blog - Digital Marketing Insights</title>
      <link>${siteUrl}</link>
      <description>Expert digital marketing insights, strategies, and case studies for clinics and coaching centers in Indore.</description>
      <language>en-IN</language>
      <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
      <atom:link href="${siteUrl}/feed.xml" rel="self" type="application/rss+xml" />
      ${rssItems}
    </channel>
  </rss>`;

  return new Response(rss, {
    headers: {
      "Content-Type": "application/rss+xml",
      "Cache-Control": "public, s-maxage=1200, stale-while-revalidate=600",
    },
  });
}
