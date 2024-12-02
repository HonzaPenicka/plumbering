// next.config.js

const isDev = process.env.NODE_ENV !== 'production';

const nextConfig = {
  reactStrictMode: true,
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
