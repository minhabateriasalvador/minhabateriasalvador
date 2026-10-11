import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  poweredByHeader: false,
  trailingSlash: true,
  images: { formats: ['image/avif', 'image/webp'] },
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
        ],
      },
      {
        source: '/images/:path*',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
        ],
      },
    ];
  },
  async rewrites() {
    return [
      {
        source: '/',
        has: [
          {
            type: 'host',
            value: 'lp.minhabateria.com.br',
          },
        ],
        destination: '/lp/',
      },
      {
        source: '/',
        has: [
          {
            type: 'host',
            value: 'lp.minhabateriasalvador.com.br',
          },
        ],
        destination: '/lp/',
      },
    ];
  },
};

export default nextConfig;
