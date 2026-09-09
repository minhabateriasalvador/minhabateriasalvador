import type { MetadataRoute } from 'next';
import { indexable, site } from './site';
export default function robots(): MetadataRoute.Robots {
  return { rules: { userAgent: '*', allow: '/' }, ...(indexable ? { sitemap: `${site.url}/sitemap.xml` } : {}) };
}
