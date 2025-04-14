import { Analytics } from '@vercel/analytics/next';
import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Google tag (gtag.js) */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-H7CEBRYDK6"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-H7CEBRYDK6');
            `,
          }}
        />
      </Head>
      <body className="antialiased">
        <Analytics />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
