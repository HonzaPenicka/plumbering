// next.config.js

const isDev = process.env.NODE_ENV !== 'production';

const nextConfig = {
  reactStrictMode: true,
  // 1) i18n
  i18n: {
    locales: ['en','cs'],
    defaultLocale: 'en',
    localeDetection: false,
  },

  async redirects() {
    return [
      /* /  → /en  – POZOR: locale: false, aby se nekonečně nevracelo! */
      { source: '/', destination: '/en', locale: false, permanent: false },

      /* aliasy pro EN */
      { source: '/about',      destination: '/en/about',      permanent: true, locale: false },
      { source: '/price-list', destination: '/en/price-list', permanent: true, locale: false },

      /* aliasy pro CS */
      { source: '/o-nas', destination: '/cs/o-nas', permanent: true, locale: false },
      { source: '/cenik', destination: '/cs/cenik', permanent: true, locale: false },
    ];
  },

  async rewrites() {
    return [
      /* český o‑nás → pages/about.tsx */
      { source: '/cs/o-nas', destination: '/about', locale: false },

      /* český ceník  → pages/price-list.tsx */
      { source: '/cs/cenik', destination: '/price-list', locale: false },
    ];
  },

  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: isDev
              ? `
                default-src 'self';
                script-src 'self' 'unsafe-inline' 'unsafe-eval';
                style-src 'self' 'unsafe-inline' fonts.googleapis.com;
                font-src 'self' data: fonts.gstatic.com;
                img-src 'self' data: https:;
                connect-src 'self' ws://localhost:3000;
                frame-src 'self' https://maps.google.com https://www.google.com https://www.youtube.com https://player.vimeo.com;
              `
                  .replace(/\s{2,}/g, ' ')
                  .trim()
              : `
                default-src 'self';
                script-src 'self';
                style-src 'self' 'unsafe-inline' fonts.googleapis.com;
                font-src 'self' data: fonts.gstatic.com;
                img-src 'self' data: https:;
                connect-src 'self';
                frame-src 'self' https://maps.google.com https://www.google.com https://www.youtube.com https://player.vimeo.com;
              `
                  .replace(/\s{2,}/g, ' ')
                  .trim(),
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
          {
            key: 'Referrer-Policy',
            value: 'no-referrer-when-downgrade',
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload',
          },
          {
            key: 'Permissions-Policy',
            value: 'geolocation=(self), microphone=()',
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
