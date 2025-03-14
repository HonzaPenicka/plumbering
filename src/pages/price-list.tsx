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
import { PolozeniDlazby } from '../../public/icon/polozeni-dlazby';

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
          href="https://www.yourbob.cz/price-list"
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
            <h2 className="text-2xl md:text-4xl md:justify-center md:flex font-bold pt-4 md:pt-8 uppercase">
              Price List
            </h2>
            <div className="overflow-x-auto ">
              <table className="min-w-full border-collapse border-2 border-blue-500 text-sm md:text-base text-black md:border-2 text-pretty">
                <thead>
                  <tr className="bg-blue-100 md:text-lg lg:text-xl">
                    <th className="border border-blue-500 px-2 py-2 md:px-4 md:py-4 text-left font-semibold">
                    </th>
                    <th className="border border-blue-500 px-2 py-2 md:px-4 md:py-4 text-left font-semibold">
                      Task
                    </th>
                    <th className="border border-blue-500 px-2 py-2 md:px-4 md:py-4 text-left font-semibold">
                      Price without VAT
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {/* Installation work */}
                  <tr>
                    <td className="border-b border-blue-500 px-2 py-2 md:px-4 md:py-4">
                      <img className='w-12 justify-center' src="/img/hero/Instalace - výměna hadic pro vanové baterie - umyvadla - dřezu.svg" alt="" />
                    </td>
                    <td className="border border-blue-500 px-2 py-2 md:px-4 md:py-4">
                      Replacement / instalation of hoses for tub faucets, sinks and basins
                    </td>
                    <td className="border border-blue-500 px-2 py-2 md:px-4 md:py-4">
                      790 CZK
                    </td>
                  </tr>
                  <tr>
                    <td className="border-0 border-blue-500 px-2 py-2 md:px-4 md:py-4">
                      <img className='w-12 justify-center' src="/img/hero/Instalace bidetu.svg" alt="" />
                    </td>
                    <td className="border border-blue-500 px-2 py-2 md:px-4 md:py-4">
                      Installation of urinals
                    </td>
                    <td className="border border-blue-500 px-2 py-2 md:px-4 md:py-4">
                      1890 CZK
                    </td>
                  </tr>
                  <tr>
                    <td className="border-t border-blue-500 px-2 py-2 md:px-4 md:py-4">
                      <img className='w-12 justify-center' src="/img/hero/Instalace toalety.svg" alt="" />
                    </td>
                    <td className="border border-blue-500 px-2 py-2 md:px-4 md:py-4">
                      Toilet installation
                    </td>
                    <td className="border border-blue-500 px-2 py-2 md:px-4 md:py-4">
                      1890 CZK
                    </td>
                  </tr>
                  <tr>
                    <td className="border-t border-blue-500 px-2 py-2 md:px-4 md:py-4">
                      <PolozeniDlazby />
                    </td>
                    <td className="border border-blue-500 px-2 py-2 md:px-4 md:py-4">
                      Laying tiles / m2
                    </td>
                    <td className="border border-blue-500 px-2 py-2 md:px-4 md:py-4">
                      1580 CZK
                    </td>
                  </tr>

                  {/* Plumbing work */}
                  <tr>
                    <td className="border-t border-blue-500 px-2 py-2 md:px-4 md:py-4">
                      <img className='w-12 justify-center' src="/img/hero/Montáž  obkladů m2.svg" alt="" />
                    </td>
                    <td className="border border-blue-500 px-2 py-2 md:px-4 md:py-4">
                      Installation of cladding / m2
                    </td>
                    <td className="border border-blue-500 px-2 py-2 md:px-4 md:py-4">
                      1580 CZK
                    </td>
                  </tr>
                  <tr>
                    <td className="border-t border-blue-500 px-2 py-2 md:px-4 md:py-4">
                      <img className='w-12 justify-center' src="/img/hero/Instalace - výměna syfonu u umyvadla.svg" alt="" />
                    </td>
                    <td className="border border-blue-500 px-2 py-2 md:px-4 md:py-4">
                      Installing / replacing the siphon at the sink
                    </td>
                    <td className="border border-blue-500 px-2 py-2 md:px-4 md:py-4">
                      550 CZK
                    </td>
                  </tr>
                  <tr>
                    <td className="border-t border-blue-500 px-2 py-2 md:px-4 md:py-4">
                      <img className='w-12 justify-center' src="/img/hero/Instalace závěsných obrazů - tabulí.svg" alt="" />
                    </td>
                    <td className="border border-blue-500 px-2 py-2 md:px-4 md:py-4">
                      Installing of hanging pictures, boards, etc.
                    </td>
                    <td className="border border-blue-500 px-2 py-2 md:px-4 md:py-4">
                    </td>
                  </tr>
                  <tr>
                    <td className="border-t border-blue-500 px-2 py-2 md:px-4 md:py-4">
                      <img className='w-12 justify-center' src="/img/hero/Oprava a seřízení dveří.svg" alt="" />
                    </td>
                    <td className="border border-blue-500 px-2 py-2 md:px-4 md:py-4">
                      Door reapir and adjustment
                    </td>
                    <td className="border border-blue-500 px-2 py-2 md:px-4 md:py-4">
                    </td>
                  </tr>

                  {/* Electrical work */}
                  <tr>
                    <td className="border-t border-blue-500 px-2 py-2 md:px-4 md:py-4">
                      <img className='w-12 justify-center' src="/img/hero/Výroba klíč.svg" alt="" />
                    </td>
                    <td className="border border-blue-500 px-2 py-2 md:px-4 md:py-4">
                      Production of the key to the door 1pc
                    </td>
                    <td className="border border-blue-500 px-2 py-2 md:px-4 md:py-4">
                      790 CZK
                    </td>
                  </tr>
                  <tr>
                    <td className="border-t border-blue-500 px-2 py-2 md:px-4 md:py-4">
                      <img className='w-12 justify-center' src="/img/hero/Montáž podlahy (pvc, lino, koberec).svg" alt="" />
                    </td>
                    <td className="border border-blue-500 px-2 py-2 md:px-4 md:py-4">
                      Floor dismantling (PVC, linoleum, carpet) / m2
                    </td>
                    <td className="border border-blue-500 px-2 py-2 md:px-4 md:py-4">
                      158 CZK
                    </td>
                  </tr>
                  <tr>
                    <td className="border-t border-blue-500 px-2 py-2 md:px-4 md:py-4">
                      <img className='w-12 justify-center' src="/img/hero/Demontáž podlady (pvc, lino, koberec).svg" alt="" />
                    </td>
                    <td className="border border-blue-500 px-2 py-2 md:px-4 md:py-4">
                      Floor installation (PVC, linoleum, carpet) / m2
                    </td>
                    <td className="border border-blue-500 px-2 py-2 md:px-4 md:py-4">
                      630 CZK
                    </td>
                  </tr>

                  {/* Painting and decorating work */}
                  <tr>
                    <td className="border-t border-blue-500 px-2 py-2 md:px-4 md:py-4">
                      <img className='w-12 justify-center' src="/img/hero/Instalace umyvadla.svg" alt="" />
                    </td>
                    <td className="border border-blue-500 px-2 py-2 md:px-4 md:py-4">
                      Sink installation
                    </td>
                    <td className="border border-blue-500 px-2 py-2 md:px-4 md:py-4">
                      1890 CZK
                    </td>
                  </tr>
                  <tr>
                    <td className="border-t border-blue-500 px-2 py-2 md:px-4 md:py-4">
                      <img className='w-12 justify-center' src="/img/hero/Instalace pračky - sušičky.svg" alt="" />
                    </td>
                    <td className="border border-blue-500 px-2 py-2 md:px-4 md:py-4">
                      Washer / dryer installation
                    </td>
                    <td className="border border-blue-500 px-2 py-2 md:px-4 md:py-4">
                      1580 CZK
                    </td>
                  </tr>
                  <tr>
                    <td className="border-t border-blue-500 px-2 py-2 md:px-4 md:py-4">
                      <img className='w-12 justify-center' src="/img/hero/Instalace myčky nádobí.svg" alt="" />
                    </td>
                    <td className="border border-blue-500 px-2 py-2 md:px-4 md:py-4">
                      Dishwasher installation
                    </td>
                    <td className="border border-blue-500 px-2 py-2 md:px-4 md:py-4">
                      1580 CZK
                    </td>
                  </tr>

                  {/* Locksmith work */}
                  <tr>
                    <td className="border-t border-blue-500 px-2 py-2 md:px-4 md:py-4">
                      <img className='w-12 justify-center' src="/img/hero/Instalace myčky nádobí.svg" alt="" />
                    </td>
                    <td className="border border-blue-500 px-2 py-2 md:px-4 md:py-4">
                      Installation a fan in the bathroom
                    </td>
                    <td className="border border-blue-500 px-2 py-2 md:px-4 md:py-4">
                      790 CZK
                    </td>
                  </tr>
                  <tr>
                    <td className="border-t border-blue-500 px-2 py-2 md:px-4 md:py-4">
                      <img className='w-12 justify-center' src="/img/hero/Instalace bidetu.svg" alt="" />
                    </td>
                    <td className="border border-blue-500 px-2 py-2 md:px-4 md:py-4">
                      Bidet installation
                    </td>
                    <td className="border border-blue-500 px-2 py-2 md:px-4 md:py-4">
                      1890 CZK
                    </td>
                  </tr>

                  {/* Garden and outdoor maintenance */}
                  <tr>
                    <td className="border-t border-blue-500 px-2 py-2 md:px-4 md:py-4">
                      <img className='w-12 justify-center' src="/img/hero/Instalace bidetu.svg" alt="" />
                    </td>
                    <td className="border border-blue-500 px-2 py-2 md:px-4 md:py-4">
                      Replacing the mailbox lock
                    </td>
                    <td className="border border-blue-500 px-2 py-2 md:px-4 md:py-4">
                    </td>
                  </tr>
                  <tr>
                    <td className="border-t border-blue-500 px-2 py-2 md:px-4 md:py-4">
                      <img className='w-12 justify-center' src="/img/hero/Instalace koupelnové skříňky.svg" alt="" />
                    </td>
                    <td className="border border-blue-500 px-2 py-2 md:px-4 md:py-4">
                      Bathroom cabinet installation
                    </td>
                    <td className="border border-blue-500 px-2 py-2 md:px-4 md:py-4">
                      630 CZK
                    </td>
                  </tr>
                  <tr>
                    <td className="border-t border-blue-500 px-2 py-2 md:px-4 md:py-4">
                      <img className='w-12 justify-center' src="/img/hero/Výnos bíle techniky 1ks.svg" alt="" />
                    </td>
                    <td className="border border-blue-500 px-2 py-2 md:px-4 md:py-4">
                      Yield of white technology 1pc
                    </td>
                    <td className="border border-blue-500 px-2 py-2 md:px-4 md:py-4">
                      950 CZK
                    </td>
                  </tr>

                  {/* Minor indoor repairs */}
                  <tr>
                    <td className="border-t border-blue-500 px-2 py-2 md:px-4 md:py-4">
                      <img className='w-12 justify-center' src="/img/hero/Instalace sprchového koutu.svg" alt="" />
                    </td>
                    <td className="border border-blue-500 px-2 py-2 md:px-4 md:py-4">
                      Shower enclosure installation
                    </td>
                    <td className="border border-blue-500 px-2 py-2 md:px-4 md:py-4">
                      1890 CZK
                    </td>
                  </tr>
                  <tr>
                    <td className="border-t border-blue-500 px-2 py-2 md:px-4 md:py-4">
                      <img className='w-12 justify-center' src="/img/hero/Instalace topného elektro žebříku.svg" alt="" />
                    </td>
                    <td className="border border-blue-500 px-2 py-2 md:px-4 md:py-4">
                      Installation of electric heating ladder
                    </td>
                    <td className="border border-blue-500 px-2 py-2 md:px-4 md:py-4">
                      950 CZK
                    </td>
                  </tr>
                  <tr>
                    <td className="border-t border-blue-500 px-2 py-2 md:px-4 md:py-4">
                      <img className='w-12 justify-center' src="/img/hero/Výměna boileru.svg" alt="" />
                    </td>
                    <td className="border border-blue-500 px-2 py-2 md:px-4 md:py-4">
                      Boiler replacement
                    </td>
                    <td className="border border-blue-500 px-2 py-2 md:px-4 md:py-4">
                      2360 CZK
                    </td>
                  </tr>
                  <tr>
                    <td className="border-t border-blue-500 px-2 py-2 md:px-4 md:py-4">
                      <img className='w-12 justify-center' src="/img/hero/Výměna lustru.svg" alt="" />
                    </td>
                    <td className="border border-blue-500 px-2 py-2 md:px-4 md:py-4">
                      Chandelier replacement
                    </td>
                    <td className="border border-blue-500 px-2 py-2 md:px-4 md:py-4">
                      790 CZK
                    </td>
                  </tr>

                  {/* Seasonal maintenance */}
                  <tr>
                    <td className="border-t border-blue-500 px-2 py-2 md:px-4 md:py-4">
                      <img className='w-12 justify-center' src="/img/hero/Instalace TV.svg" alt="" />
                    </td>
                    <td className="border border-blue-500 px-2 py-2 md:px-4 md:py-4">
                      TV installation
                    </td>
                    <td className="border border-blue-500 px-2 py-2 md:px-4 md:py-4">
                      950 CZK
                    </td>
                  </tr>
                  <tr>
                    <td className="border-t border-blue-500 px-2 py-2 md:px-4 md:py-4">
                      <img className='w-12 justify-center' src="/img/hero/Instalace varné eletrické desky .png" alt="" />
                    </td>
                    <td className="border border-blue-500 px-2 py-2 md:px-4 md:py-4">
                      Installation of kitchen electric hob
                    </td>
                    <td className="border border-blue-500 px-2 py-2 md:px-4 md:py-4">
                      950 CZK
                    </td>
                  </tr>
                  <tr>
                    <td className="border-t border-blue-500 px-2 py-2 md:px-4 md:py-4">
                      <img className='w-12 justify-center' src="/img/hero/Instalace eketricke - plynové trouby.svg" alt="" />
                    </td>
                    <td className="border border-blue-500 px-2 py-2 md:px-4 md:py-4">
                      Electric/gas oven installation
                    </td>
                    <td className="border border-blue-500 px-2 py-2 md:px-4 md:py-4">
                      950 CZK
                    </td>
                  </tr>
                  <tr>
                    <td className="border-t border-blue-500 px-2 py-2 md:px-4 md:py-4">
                      <img className='w-12 justify-center' src="/img/hero/Instalace a přenos routeru.svg" alt="" />
                    </td>
                    <td className="border border-blue-500 px-2 py-2 md:px-4 md:py-4">
                      Router installation and transfer
                    </td>
                    <td className="border border-blue-500 px-2 py-2 md:px-4 md:py-4">
                      950 CZK
                    </td>
                  </tr>
                  <tr>
                    <td className="border-t border-blue-500 px-2 py-2 md:px-4 md:py-4">
                      <img className='w-12 justify-center' src="/img/hero/Montáž police 1ks.svg" alt="" />
                    </td>
                    <td className="border border-blue-500 px-2 py-2 md:px-4 md:py-4">
                      Installation of shelves, mirrors 1pc
                    </td>
                    <td className="border border-blue-500 px-2 py-2 md:px-4 md:py-4">
                      630 CZK
                    </td>
                  </tr>
                  <tr>
                    <td className="border-t border-blue-500 px-2 py-2 md:px-4 md:py-4">
                      <img className='w-12 justify-center' src="/img/hero/Výměna vchodových dveří.svg" alt="" />
                    </td>
                    <td className="border border-blue-500 px-2 py-2 md:px-4 md:py-4">
                      Replacement of entrance doors
                    </td>
                    <td className="border border-blue-500 px-2 py-2 md:px-4 md:py-4">
                      3 950 CZK
                    </td>
                  </tr>
                  <tr>
                    <td className="border-t border-blue-500 px-2 py-2 md:px-4 md:py-4">
                      <img className='w-12 justify-center' src="/img/hero/Výměna vnitřních dveří do pokoje.svg" alt="" />
                    </td>
                    <td className="border border-blue-500 px-2 py-2 md:px-4 md:py-4">
                      Replacing interior doors to a room
                    </td>
                    <td className="border border-blue-500 px-2 py-2 md:px-4 md:py-4">
                      2360 CZK
                    </td>
                  </tr>
                  <tr>
                    <td className="border-t border-blue-500 px-2 py-2 md:px-4 md:py-4">
                      <img className='w-12 justify-center' src="/img/hero/Instalace - oprava - výměna dveřních klik.svg" alt="" />
                    </td>
                    <td className="border border-blue-500 px-2 py-2 md:px-4 md:py-4">
                      Installation / repair / replacement of door handles
                    </td>
                    <td className="border border-blue-500 px-2 py-2 md:px-4 md:py-4">
                    </td>
                  </tr>
                  <tr>
                    <td className="border-t border-blue-500 px-2 py-2 md:px-4 md:py-4">
                      <img className='w-12 justify-center' src="/img/hero/Instalace - výměna zámku od dveří.svg" alt="" />
                    </td>
                    <td className="border border-blue-500 px-2 py-2 md:px-4 md:py-4">
                      Installing / replacing the door lock insert
                    </td>
                    <td className="border border-blue-500 px-2 py-2 md:px-4 md:py-4">
                      480 CZK
                    </td>
                  </tr>
                  <tr>
                    <td className="border-t border-blue-500 px-2 py-2 md:px-4 md:py-4">
                      <img className='w-12 justify-center' src="/img/hero/Montáž police 1ks.svg" alt="" />
                    </td>
                    <td className="border border-blue-500 px-2 py-2 md:px-4 md:py-4">
                      Installation of curtains rails
                    </td>
                    <td className="border border-blue-500 px-2 py-2 md:px-4 md:py-4">
                    </td>
                  </tr>
                  <tr>
                    <td className="border-t border-blue-500 px-2 py-2 md:px-4 md:py-4">
                      <img className='w-12 justify-center' src="/img/hero/Výměna boileru.svg" alt="" />
                    </td>
                    <td className="border border-blue-500 px-2 py-2 md:px-4 md:py-4">
                      Kitchen / bathroom tap replacement
                    </td>
                    <td className="border border-blue-500 px-2 py-2 md:px-4 md:py-4">
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="pt-4 md:pt-0 text-sm">
              * The listed prices are indicative and may vary depending on
              specific conditions and scope of work. Shipping and VAT will be
              added to the final amount. If the repair time is between 10 PM and
              6 AM, the total cost will increase by 50%. For weekend repairs, an
              additional 20% will be added to the final amount.
            </p>
          </section>

          <section className="pt-4">
            <div className="px-4">
              <h2 className="text-2xl font-bold text-center mb-8 uppercase">
                Payment Methods
              </h2>
              <div className="grid md:grid-cols-3 gap-4 md:gap-8">
                {/* Cash in CZK and EUR */}
                <div className="p-4 flex flex-col bg-blue-100 md:bg-white md:border-blue-500 md:border-2">
                  <h3 className="text-xl font-semibold mb-2 md:text-center">
                    Cash (CZK & EUR)
                  </h3>
                  <p>
                    Pay with cash in Czech Koruna (CZK) or Euro (EUR). The
                    exchange rate is 1 EUR = 25.5 CZK.
                  </p>
                </div>

                {/* Bank Transfer */}
                <div className="p-4 flex flex-col bg-blue-100 md:bg-white md:border-blue-500 md:border-2">
                  <h3 className="text-xl font-semibold mb-2 md:text-center">
                    Bank Transfer
                  </h3>
                  <p>
                    Make a payment directly to our bank account. We will provide
                    you with the necessary bank details upon request.
                  </p>
                </div>

                {/* Payment on Invoice */}
                <div className="p-4 flex flex-col bg-blue-100 md:bg-white md:border-blue-500 md:border-2">
                  <h3 className="text-xl font-semibold mb-2 md:text-center">
                    Payment on Invoice
                  </h3>
                  <p>
                    Receive an invoice and pay at your convenience. Suitable for
                    businesses and long-term projects.
                  </p>
                </div>

                {/* Credit/Debit Card */}
                <div className="p-4 flex flex-col bg-blue-100 md:bg-white md:border-blue-500 md:border-2">
                  <h3 className="text-xl font-semibold mb-2 md:text-center">
                    Credit/Debit Card
                  </h3>
                  <p>
                    Securely pay using your credit or debit card through our
                    online payment gateway.
                  </p>
                </div>

                {/* QR Payment */}
                <div className="p-4 flex flex-col bg-blue-100 md:bg-white md:border-blue-500 md:border-2">
                  <h3 className="text-xl font-semibold mb-2 md:text-center">
                    QR Payment
                  </h3>
                  <p>
                    Scan our QR code to make a quick and easy payment via
                    WhatsApp or other QR-enabled apps.
                  </p>
                </div>
              </div>
            </div>
            <p className="pt-8 text-left px-4">
              * If you have any questions regarding payment methods or need
              assistance with your payment, feel free to contact us. We are here
              to ensure a smooth and secure transaction.
            </p>
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

                <img src="/qr/whatsapp.svg" loading="lazy" width="25%" />
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
