import Head from 'next/head';
import localFont from 'next/font/local';
import { useCallback, useRef, useState } from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { GiHamburgerMenu } from 'react-icons/gi';
import { MdMailOutline } from 'react-icons/md';
import { FaPhone } from 'react-icons/fa';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import Link from 'next/link';

import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import nextI18NextConfig from '../../next-i18next.config.js';
import { GetStaticProps } from 'next/types/index.js';

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900'
});
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900'
});

export default function About() {
  const { locale } = useRouter();
  const { t } = useTranslation('about');          // ⬅️  používáme namespace "about"

  const formRef = useRef<HTMLDivElement>(null);
  const [isClicked, setIsClicked] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = useCallback(() => setIsMenuOpen(prev => !prev), []);
  const scrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: 'smooth' });
    setIsClicked(true);
  };

  return (
    <>
      {/* ---------- HEAD ---------- */}
      <Head>
        <title>{t('meta.title')}</title>
        <meta name="description" content={t('meta.description')} />
        {/* Social tags */}
        <meta property="og:title"       content={t('meta.title')} />
        <meta property="og:description" content={t('meta.description')} />
        <meta property="og:image"       content="/img/hero/yourbob.jpeg" />
        <meta property="og:url"         content="https://www.yourbob.cz/about" />
        <meta property="og:type"        content="website" />
        <meta name="twitter:card"        content="summary_large_image" />
        <meta name="twitter:title"       content={t('meta.title')} />
        <meta name="twitter:description" content={t('meta.description')} />
        <meta name="twitter:image"       content="/img/hero/yourbob.jpeg" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* ---------- PAGE ---------- */}
      <div
        className={`${geistSans.variable} ${geistMono.variable} grid container mx-auto font-[var(--font-geist-sans)]`}
      >
        {/* HEADER */}
        <header className="flex justify-between items-center py-4 px-4 text-3xl font-bold border-b-2 border-blue-500 bg-white">
          <Link href="/" locale={locale} className="hover:text-red-300">
            YOUR&nbsp;BOB
          </Link>
          <button onClick={toggleMenu} aria-label="Toggle menu">
            <GiHamburgerMenu className="hover:fill-red-300" />
          </button>
        </header>

        {isMenuOpen && (
          <nav className="absolute top-14 z-10 bg-white container border-2 border-blue-500 p-4 font-semibold text-xl w-full">
          <ul className="flex flex-col gap-4 text-right uppercase">
            <li><NavItem href="/"          labelKey="menu.home"  /></li>
            <li><NavItem href="/price-list" labelKey="menu.priceList" /></li>
            <li><NavItem href="/about" labelKey="menu.about" /></li>
            <li className="flex justify-end gap-4 pt-2">
              <LocaleSwitcher />
            </li>
          </ul>
        </nav>
        )}

        {/* MAIN */}
        <main className="grid gap-4 lg:gap-8 items-left lg:items-center">
          <section className="px-4 grid gap-4 md:gap-8">
            <h2 className="text-2xl md:text-4xl text-center font-bold pt-4 md:pt-8 uppercase">
              {t('headline')}
            </h2>

            <div className="grid gap-4 lg:gap-16 p-4 md:mx-8 bg-blue-100 md:bg-white md:border-2 md:border-blue-500 rounded-lg">
              <p className="pt-4 md:pt-0 text-lg lg:text-xl">{t('content.p1')}</p>
              <p className="pt-4 md:pt-0 text-lg lg:text-xl">{t('content.p2')}</p>
              <p className="pt-4 md:pt-0 text-lg lg:text-xl">{t('content.p3')}</p>
            </div>
          </section>

          {/* CTA */}
          <section className="px-4 grid gap-4">
            <div ref={formRef} className="grid justify-center pb-8 gap-4">
              <h2 className="flex justify-center text-2xl font-bold pb-4 text-center uppercase text-pretty">
                {t('cta.headline')}
              </h2>
              <a
                href="https://wa.me/message/O2XFDY6ZCZHYD1"
                className="flex flex-col items-center gap-8"
              >
                <button className="uppercase text-2xl font-bold border-2 border-blue-500 rounded-lg p-4 text-blue-500 hover:text-red-300 hover:border-red-300">
                  {t('cta.button')}
                </button>
                <img src="/qr/qr.png" loading="lazy" width="25%" alt="WhatsApp QR" />
              </a>
            </div>
          </section>
        </main>

        {/* FOOTER */}
        <footer className="px-4 grid gap-2 border-t-2 border-blue-500">
          <div className="py-4 text-3xl font-bold text-center lg:text-left">YOUR BOB</div>
          <div className="grid gap-4">
            <div className="flex flex-col md:flex-row gap-2 md:justify-between">
              <FooterLink href="mailto:info@yourbob.cz" icon={<MdMailOutline />} text="Info@yourbob.cz" />
              <FooterLink href="tel:+420704901902" icon={<FaPhone />} text="+420 704 901 902" />
            </div>
            <div className="flex flex-col md:flex-row gap-2 md:justify-between">
              <p className="hover:underline"><b>sídlo</b>: Ječná 548/7, 120 00 Praha</p>
              <p className="hover:underline"><b>IČ</b>: 04383257</p>
            </div>
            <div className="text-xs text-center py-4">{t('footer.rights')}</div>
          </div>
        </footer>
      </div>
    </>
  );
}

function NavItem({ href, labelKey }: { href: string; labelKey: string }) {
  const { t } = useTranslation('about');
  const { locale } = useRouter();
  return (
    <Link href={href} locale={locale}>
      {t(labelKey)}
    </Link>
  );
}


function LocaleSwitcher() {
  return (
    <>
      <Link href="/" locale="en" aria-label="English" className="hover:shadow-xl hover:shadow-red-300"><span className="fi fi-us" /></Link>
      <Link href="/" locale="cs" aria-label="Čeština" className="hover:shadow-xl hover:shadow-red-300"><span className="fi fi-cz" /></Link>
    </>
  );
}

function FooterLink({ href, icon, text }: { href: string; icon: JSX.Element; text: string }) {
  return (
    <a href={href} className="flex items-center gap-2 hover:underline hover:underline-offset-4" target="_blank" rel="noopener noreferrer">
      {icon}
      {text}
    </a>
  );
}

/* ---------- getStaticProps ---------- */
export const getStaticProps: GetStaticProps = async ({ locale = 'en' }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['about'], nextI18NextConfig))
  }
});

