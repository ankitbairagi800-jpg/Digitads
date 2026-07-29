import { MetadataRoute } from 'next';

export const dynamic = 'force-static';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: '/admin/',
      },
      {
        userAgent: [
          'GPTBot',
          'ChatGPT-User',
          'OAI-SearchBot',
          'ClaudeBot',
          'Claude-Web',
          'anthropic-ai',
          'Google-Extended',
          'Google-CloudVertexBot',
          'PerplexityBot',
          'Perplexity-User',
          'DeepSeek',
          'DeepSeekBot',
          'Grok',
          'xAI',
          'meta-externalagent',
          'Applebot',
          'Applebot-Extended'
        ],
        allow: '/',
      }
    ],
    sitemap: 'https://thedigitalads.in/sitemap.xml',
  };
}

