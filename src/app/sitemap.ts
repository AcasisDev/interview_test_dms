import { MetadataRoute } from 'next';
import { siteContent } from '@/lib/content';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteContent.site.baseUrl,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    },
  ];
}