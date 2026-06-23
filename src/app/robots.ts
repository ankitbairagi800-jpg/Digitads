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
      // Explicitly allow Anthropic Claude Bot
      {
        userAgent: ['ClaudeBot', 'Claude-Web', 'anthropic-ai'],
        allow: '/',
      },
      // Explicitly allow OpenAI ChatGPT Bot
      {
        userAgent: ['GPTBot', 'ChatGPT-User', 'OAI-SearchBot'],
        allow: '/',
      },
      // Explicitly allow Google Gemini / Vertex
      {
        userAgent: ['Google-Extended', 'Google-CloudVertexBot'],
        allow: '/',
      },
      // Explicitly allow Perplexity AI
      {
        userAgent: ['PerplexityBot', 'Perplexity-User'],
        allow: '/',
      },
      // Explicitly allow DeepSeek AI
      {
        userAgent: ['DeepSeekBot', 'DeepSeek'],
        allow: '/',
      },
      // Explicitly allow xAI Grok
      {
        userAgent: ['Grok', 'xAI'],
        allow: '/',
      },
      // Explicitly allow Meta AI
      {
        userAgent: ['meta-externalagent', 'FacebookBot', 'Meta-ExternalFetcher'],
        allow: '/',
      },
      // Explicitly allow Applebot / Apple Intelligence
      {
        userAgent: ['Applebot', 'Applebot-Extended'],
        allow: '/',
      },
      // Explicitly allow Cohere AI
      {
        userAgent: ['cohere-ai', 'CohereBot'],
        allow: '/',
      },
      // Explicitly allow Common Crawl (AI Training datasets)
      {
        userAgent: 'CCBot',
        allow: '/',
      }
    ],
    sitemap: 'https://thedigitalads.in/sitemap.xml',
  };
}

