import { MetadataRoute } from 'next';
import { getBlogs } from '@/lib/db';

export const dynamic = 'force-static';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://thedigitalads.in';

  // Static routes
  const staticRoutes = [
    '',
    '/about',
    '/services',
    '/case-studies',
    '/blog',
    '/faq',
    '/contact'
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as any,
    priority: route === '' ? 1.0 : 0.8,
  }));

  // Dynamic Blog Routes
  let dynamicBlogRoutes: any[] = [];
  try {
    const blogs = await getBlogs();
    dynamicBlogRoutes = blogs.map((blog) => ({
      url: `${baseUrl}/blog/${blog.slug}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as any,
      priority: 0.7,
    }));
  } catch (err) {
    console.error("Failed to fetch blogs for sitemap:", err);
  }

  return [...staticRoutes, ...dynamicBlogRoutes];
}
