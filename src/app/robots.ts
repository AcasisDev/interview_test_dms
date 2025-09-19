// src/app/robots.ts
import { MetadataRoute } from 'next';
import { siteContent } from '@/lib/content';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/amp', 
    },
    sitemap: `${siteContent.site.baseUrl}/sitemap.xml`,
  };
}