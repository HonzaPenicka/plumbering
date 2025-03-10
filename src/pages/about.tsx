import Image from 'next/image';
import Head from 'next/head';
import localFont from 'next/font/local';
import { useCallback, useRef, useState } from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { GiHamburgerMenu } from 'react-icons/gi';
import { MdMailOutline } from 'react-icons/md';
import { FaPhone } from 'react-icons/fa';

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
});

export default function PriceList() {
  const formRef = useRef<HTMLDivElement>(null);
  const [isClicked, setIsClicked] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleIsMenuOpen = useCallback(() => {
    setIsMenuOpen((state) => !state);
  }, []);

  const scrollToForm = () => {
    if (formRef.current) {
      formRef.current.scrollIntoView({ behavior: 'smooth' });
    }
    setIsClicked(true);
  };

  const handleFormSuccess = () => {
    setIsClicked(false);
  };

  return (
    <>
      <Head>
        <title>Plumber Prague - Profesionální instalatéři v Praze</title>
        <meta
          name="description"
          content="Plumber Prague nabízí ověřené instalatéry v Praze. Kvalitní služby, dostupnost během hodiny, bezplatný odhad ceny."
        />
        <meta
          name="keywords"
          content="instalatéři Praha, plumber Prague, vodoinstalace, oprava potrubí, montáž bezpečnostních zámků, výměna žárovek"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* Open Graph Meta Tags */}
        <meta
          property="og:title"
          content="Plumber Prague - Profesionální instalatéři v Praze"
        />
        <meta
          property="og:description"
          content="Plumber Prague nabízí ověřené instalatéry v Praze. Kvalitní služby, dostupnost během hodiny, bezplatný odhad ceny."
        />
        <meta property="og:image" content="/img/hero/desktop.webp" />
        <meta property="og:url" content="https://www.plumberprague.cz" />
        <meta property="og:type" content="website" />
        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Plumber Prague - Profesionální instalatéři v Praze"
        />
        <meta
          name="twitter:description"
          content="Plumber Prague nabízí ověřené instalatéry v Praze. Kvalitní služby, dostupnost během hodiny, bezplatný odhad ceny."
        />
        <meta name="twitter:image" content="/img/hero/desktop.webp" />
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
        {/* Security */}
        <meta name="referrer" content="no-referrer-when-downgrade" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="canonical"
          href="https://www.www.plumberprague.cz/price-list"
        />
      </Head>
      <div
        className={`${geistSans.variable} ${geistMono.variable} grid container mx-auto items-center pb-4 font-[family-name:var(--font-geist-sans)]`}
      >
        <header className="flex justify-between bg-white py-4 px-4 items-center text-black font-bold text-3xl border-b-2 border-b-blue-500">
          <a href="/">
            <h1>YOUR BOB</h1>
          </a>
          <button onClick={handleIsMenuOpen}>
            <GiHamburgerMenu className="flex justify-start items-start" />
          </button>
        </header>
        {isMenuOpen && (
          <nav className="p-4 absolute bg-white top-14 z-10 font-semibold text-xl container border-2 border-blue-500 uppercase mx-auto">
            <ul className="flex flex-col gap-4 text-right">
              <li>
                <a
                  href="/"
                  className="hover:underline-offset-2 hover:underline hover:decoration-red-500"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/price-list"
                  className="hover:underline-offset-2 hover:underline hover:decoration-red-500"
                >
                  Price List
                </a>
              </li>
              <li>
                <a
                  href="/about"
                  className="hover:underline-offset-2 hover:underline hover:decoration-red-500"
                >
                  About
                </a>
              </li>
            </ul>
          </nav>
        )}
        <main className="grid gap-4 lg:gap-8 items-left lg:items-center">
          <section className="px-4 grid gap-4 md:gap-8">
            <h2 className="text-2xl md:text-4xl text-center font-bold pt-4 md:pt-8 uppercase">
              About
            </h2>
            
            <div className='grid gap-4 lg:gap-16 p-4 md:px-8 lg:px-48 bg-blue-100 md:bg-white md:border-2 md:border-blue-500'>
                <p className="pt-4 md:pt-0 text-lg lg:text-xl">
                You Bob was created to make your life easier. No more wasting time searching for tradespeople, checking their availability, and figuring out prices.
                </p>

                <p className="pt-4 md:pt-0 text-lg lg:text-xl">
                Our plumbing service works simply – just send us a message on <b>WhatsApp</b>, and we’ll <b>respond immediately</b>. We focus on <b>fast communication</b> so you can be sure someone is taking care of your request and providing you with the necessary information as quickly as possible.
                </p>
                <p className="pt-4 md:pt-0 text-lg lg:text-xl">
                All our <b>prices are transparent</b> – you always know the cost in advance. In the future, we plan to expand our services to include <b>leaning, upholstery and mattress cleaning, painting</b>, and much more.
                </p>
            </div>
          </section>

          <section className="px-4 grid gap-4">
            <div className="grid justify-center pb-8 gap-4" ref={formRef}>
              <h2 className="justify-center flex text-2xl font-bold pb-4 text-center text-pretty uppercase">
                Click to text your problem on WhatsApp!
              </h2>
              <a
                href="https://wa.me/message/O2XFDY6ZCZHYD1"
                className="flex flex-col items-center justify-center gap-8"
              >
                <button className="uppercase text-2xl font-bold border-2 border-blue-500 rounded-lg p-4 text-blue-500 hover:text-red-500 hover:border-red-500">
                  Contact us!
                </button>

                <img src="/qr/whatsapp.png" loading="lazy" width="25%" />
              </a>
            </div>
          </section>
        </main>
        <footer className="px-4 grid md:block gap-2 border-t-2 border-blue-500">
          <div className="bg-white py-4 items-center text-black font-bold text-3xl">
            <div>YOUR BOB</div>
          </div>
          <div className="grid gap-4">
            <div className="flex flex-col md:flex-row gap-2 md:justify-between">
              <a
                className="flex items-center gap-2 hover:underline hover:underline-offset-4 md:text-xl lg:text-2xl"
                href=""
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Email us"
              >
                <MdMailOutline height={16} width={16} />
                Info@yourbob.cz
              </a>
              <p className=' hover:underline hover:underline-offset-4 md:text-xl lg:text-2xl'>IČ: 04383257</p>
              <a
                className="flex items-center gap-2 hover:underline hover:underline-offset-4 md:text-xl lg:text-2xl"
                href=""
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Call us"
              >
                <FaPhone height={16} width={16} />+420 704 901 902
              </a>
            </div>
            <div className="text-xs text-center py-4">
              &copy; 2024 Your Bob s.r.o. — All rights reserved.
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
