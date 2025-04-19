/** @type {import('next').NextConfig} */

const isDev = process.env.NODE_ENV !== 'production';

export default {
  // ­————————————————————————————————— 1) základní nastavení
  reactStrictMode: true,

  // ­————————————————————————————————— 2) i18n
  i18n: {
    locales: ['en', 'cs'],
    defaultLocale: 'en',
    localeDetection: false,
  },

  // ­————————————————————————————————— 3) redirecty
  async redirects() {
    return [
      /* /  → /en  – POZOR: locale: false, aby se to nesmyčkovalo */
      { source: '/',           destination: '/en',            locale: false, permanent: false },

      /* aliasy pro EN */
      { source: '/about',      destination: '/en/about',      locale: false, permanent: true  },
      { source: '/price-list', destination: '/en/price-list', locale: false, permanent: true  },

      /* aliasy pro CS */
      { source: '/o-nas',      destination: '/cs/o-nas',      locale: false, permanent: true  },
      { source: '/cenik',      destination: '/cs/cenik',      locale: false, permanent: true  },
    ];
  },

  // ­————————————————————————————————— 4) rewrites (interní přesuny)
  async rewrites() {
    return [
      { source: '/cs/o-nas', destination: '/about',      locale: false },
      { source: '/cs/cenik', destination: '/price-list', locale: false },
    ];
  },

  // ­————————————————————————————————— 5) HTTP hlavičky
  async headers() {
    return [
      {
        /** platí na **každou** cestu */
        source: '/(.*)',
        headers: [
          {
            key: 'Content-Security-Policy',
            /** Vývoj ↔️ produkce – liší se jen skripty & WS */
            value: isDev
              ? [
                  "default-src 'self'",
                  "script-src 'self' 'unsafe-inline' 'unsafe-eval'",
                  "style-src  'self' 'unsafe-inline' fonts.googleapis.com",
                  "font-src   'self' data: fonts.gstatic.com",
                  "img-src    'self' data: https:",
                  "connect-src 'self' ws://localhost:3000",
                  "frame-src  'self' https://maps.google.com https://www.google.com https://www.youtube.com https://player.vimeo.com",
                ].join('; ')
              : [
                  "default-src 'self'",
                  "script-src 'self'",
                  "style-src  'self' 'unsafe-inline' fonts.googleapis.com",
                  "font-src   'self' data: fonts.gstatic.com",
                  "img-src    'self' data: https:",
                  "connect-src 'self'",
                  "frame-src  'self' https://maps.google.com https://www.google.com https://www.youtube.com https://player.vimeo.com",
                ].join('; '),
          },
          { key: 'X-Content-Type-Options',  value: 'nosniff' },
          { key: 'X-Frame-Options',         value: 'SAMEORIGIN' },
          { key: 'X-XSS-Protection',        value: '1; mode=block' },
          { key: 'Referrer-Policy',         value: 'no-referrer-when-downgrade' },
          { key: 'Strict-Transport-Security', value: 'max-age=63072000; includeSubDomains; preload' },
          { key: 'Permissions-Policy',      value: 'geolocation=(self), microphone=()' },
        ],
      },
    ];
  },
};
