import type { MetadataRoute } from 'next';
import { indexable, site } from './site';

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    { path: '/', priority: 1.0, changeFrequency: 'weekly' as const },
    { path: '/bateria-moura-salvador/', priority: 0.9, changeFrequency: 'weekly' as const },
    { path: '/bateria-heliar-salvador/', priority: 0.9, changeFrequency: 'weekly' as const },
    { path: '/bateria-zetta-salvador/', priority: 0.9, changeFrequency: 'weekly' as const },
    { path: '/bateria-start-stop-salvador/', priority: 0.9, changeFrequency: 'weekly' as const },
    { path: '/servicos/', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/duvidas/', priority: 0.8, changeFrequency: 'weekly' as const },
    { path: '/duvidas/carro-nao-pega-estalos-bateria-ou-arranque/', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/duvidas/bateria-moura-ou-heliar-qual-a-melhor/', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/duvidas/bateria-comum-em-carro-start-stop/', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/sobre-nos/', priority: 0.7, changeFrequency: 'monthly' as const },
    { path: '/contato/', priority: 0.7, changeFrequency: 'monthly' as const },
  ];

  return indexable
    ? routes.map((r) => ({
        url: `${site.url}${r.path}`,
        lastModified: new Date(),
        changeFrequency: r.changeFrequency,
        priority: r.priority,
      }))
    : [];
}

