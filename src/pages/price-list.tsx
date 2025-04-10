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
import { Hadice } from '../../public/icon/hadice';
import { Pisoar } from '../../public/icon/pisoar';
import { Trouba } from '../../public/icon/trouba';
import { NewSvgComponent } from '../../public/icon/indvere';
import { Toaleta } from '../../public/icon/toaleta';
import { Obklady } from '../../public/icon/obklady';
import { Syfon } from '../../public/icon/syfon';
import { Obraz } from '../../public/icon/obraz';
import { Serdvere } from '../../public/icon/serdvere';
import { Klic } from '../../public/icon/klic';
import { Demontaz } from '../../public/icon/demontaz';
import { Montaz } from '../../public/icon/montaz';
import { Umyvadlo } from '../../public/icon/umyvadlo';
import { Susicka } from '../../public/icon/susicka';
import { Mycka } from '../../public/icon/mycka';
import { Ventilator } from '../../public/icon/ventilator';
import { Bidet } from '../../public/icon/bidet';
import { Schranka } from '../../public/icon/schranka';
import { KoupelSkrin } from '../../public/icon/koupelskrin';
import { BilaTechnika } from '../../public/icon/bilatechnika';
import { SprchKout } from '../../public/icon/sprchkout';
import { ElZebrik } from '../../public/icon/elzebrik';
import { Boiler } from '../../public/icon/boiler';
import { Lustr } from '../../public/icon/lustr';
import { TV } from '../../public/icon/tv';
import { Deska } from '../../public/icon/deska';
import { Router } from '../../public/icon/router';
import { Police } from '../../public/icon/police';
import { VchodDvere } from '../../public/icon/vchoddvere';
import { Klika } from '../../public/icon/klika';
import { Zamek } from '../../public/icon/zamek';

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

  const [isConstructionOpen, setIsConstructionOpen] = useState(false);
  const handleIsConstructionOpen = useCallback(() => {
    setIsConstructionOpen((state) => !state);
  }, []);

  const [isPlumberingServicesOpen, setIsPlumberingServicesOpen] =
    useState(false);
  const handleIsPlumberingServicesOpen = useCallback(() => {
    setIsPlumberingServicesOpen((state) => !state);
  }, []);

  const [isElectroOpen, setIsElectroOpen] = useState(false);
  const handleIsElectroOpen = useCallback(() => {
    setIsElectroOpen((state) => !state);
  }, []);

  const [isAppliancesOpen, setIsAppliancesOpen] = useState(false);
  const handleIsAppliancesOpen = useCallback(() => {
    setIsAppliancesOpen((state) => !state);
  }, []);

  const [isLocksmithOpen, setIsLocksmithOpen] = useState(false);
  const handleIsLocksmithOpen = useCallback(() => {
    setIsLocksmithOpen((state) => !state);
  }, []);

  const [isPaintingOpen, setIsPaintingOpen] = useState(false);
  const handleIsPaintingOpen = useCallback(() => {
    setIsPaintingOpen((state) => !state);
  }, []);

  const [isFlooringOpen, setIsFlooringOpen] = useState(false);
  const handleIsFlooringOpen = useCallback(() => {
    setIsFlooringOpen((state) => !state);
  }, []);

  const [isThrobbingOpen, setIsThrobbingOpen] = useState(false);
  const handleIsThrobbingOpen = useCallback(() => {
    setIsThrobbingOpen((state) => !state);
  }, []);

  const [isTransportOpen, setIsTransportOpen] = useState(false);
  const handleIsTransportOpen = useCallback(() => {
    setIsTransportOpen((state) => !state);
  }, []);

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
        <link rel="canonical" href="https://www.yourbob.cz/price-list" />
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
            <h2 className="text-2xl md:text-4xl text-center md:justify-center md:flex font-bold pt-4 md:pt-8 uppercase">
              Price List
            </h2>

            <button
              onClick={handleIsConstructionOpen}
              className="border-2 border-blue-500 text-left p-4 lg:p-8 font-bold hover:bg-blue-100 focus:bg-blue-100"
            >
              <div className='flex justify-between items-center text-xl lg:text-2xl'>
                <p>Construction work</p>
                <p className='font-bold'>&rarr;</p>
              </div>
            </button>

            {isConstructionOpen && (
              <div className="overflow-x-auto ">
                <table className="min-w-full border-collapse border-2 border-blue-500 text-sm md:text-base text-black md:border-2 text-pretty">
                  <thead>
                    <tr className="bg-blue-100 md:text-lg lg:text-xl">
                      <th className="border border-blue-500 px-2 py-2 md:px-4 md:py-4 text-left font-semibold"></th>
                      <th className="border border-blue-500 px-2 py-2 md:px-4 md:py-4 text-left font-semibold">
                        Task
                      </th>
                      <th className="border border-blue-500 px-2 py-2 md:px-4 md:py-4 text-left font-semibold">
                        Price without VAT
                      </th>
                    </tr>
                  </thead>

                  <tbody>
                    <tr>
                      <td className="border-t border-blue-500 px-2 py-2 md:px-4 md:py-4">
                        <PolozeniDlazby />
                      </td>
                      <td className="border border-blue-500 px-2 py-2 md:px-4 md:py-4">
                        Laying paving tiles (per m²)
                      </td>
                      <td className="border border-blue-500 px-2 py-2 md:px-4 md:py-4">
                        1349 CZK
                      </td>
                    </tr>

                    <tr>
                      <td className="border-t border-blue-500 px-2 py-2 md:px-4 md:py-4"></td>
                      <td className="border border-blue-500 px-2 py-2 md:px-4 md:py-4">
                        Tiling installation (per m²)
                      </td>
                      <td className="border border-blue-500 px-2 py-2 md:px-4 md:py-4">
                        1349 CZK
                      </td>
                    </tr>

                    <tr>
                      <td className="border-t border-blue-500 px-2 py-2 md:px-4 md:py-4">
                        <VchodDvere />
                      </td>
                      <td className="border border-blue-500 px-2 py-2 md:px-4 md:py-4">
                        Replacement of entrance doors
                      </td>
                      <td className="border border-blue-500 px-2 py-2 md:px-4 md:py-4">
                        3369 CZK
                      </td>
                    </tr>

                    <tr>
                      <td className="border-t border-blue-500 px-2 py-2 md:px-4 md:py-4">
                        <NewSvgComponent />
                      </td>
                      <td className="border border-blue-500 px-2 py-2 md:px-4 md:py-4">
                        Replacement of interior room door
                      </td>
                      <td className="border border-blue-500 px-2 py-2 md:px-4 md:py-4">
                        2099 CZK
                      </td>
                    </tr>

                    <tr>
                      <td className="border-t border-blue-500 px-2 py-2 md:px-4 md:py-4">
                        <Serdvere />
                      </td>
                      <td className="border border-blue-500 px-2 py-2 md:px-4 md:py-4">
                        Door repair and adjustment, handle replacement
                      </td>
                      <td className="border border-blue-500 px-2 py-2 md:px-4 md:py-4">
                        1349 CZK
                      </td>
                    </tr>

                    <tr>
                      <td className="border-t border-blue-500 px-2 py-2 md:px-4 md:py-4"></td>
                      <td className="border border-blue-500 px-2 py-2 md:px-4 md:py-4">
                        Shelf installation (per piece)
                      </td>
                      <td className="border border-blue-500 px-2 py-2 md:px-4 md:py-4">
                        539 CZK
                      </td>
                    </tr>

                    <tr>
                      <td className="border-t border-blue-500 px-2 py-2 md:px-4 md:py-4">
                        <Police />
                      </td>
                      <td className="border border-blue-500 px-2 py-2 md:px-4 md:py-4">
                        Mirror installation (per piece)
                      </td>
                      <td className="border border-blue-500 px-2 py-2 md:px-4 md:py-4">
                        539 CZK
                      </td>
                    </tr>

                    <tr>
                      <td className="border-t border-blue-500 px-2 py-2 md:px-4 md:py-4">
                        <Obraz />
                      </td>
                      <td className="border border-blue-500 px-2 py-2 md:px-4 md:py-4">
                        Installing of hanging pictures, boards, etc.
                      </td>
                      <td className="border border-blue-500 px-2 py-2 md:px-4 md:py-4">
                        539 CZK
                      </td>
                    </tr>

                    <tr>
                      <td className="border-t border-blue-500 px-2 py-2 md:px-4 md:py-4">
                        <Police />
                      </td>
                      <td className="border border-blue-500 px-2 py-2 md:px-4 md:py-4">
                        Installation of curtain rails (per meter)
                      </td>
                      <td className="border border-blue-500 px-2 py-2 md:px-4 md:py-4">
                        269 CZK
                      </td>
                    </tr>

                    <tr>
                      <td className="border-t border-blue-500 px-2 py-2 md:px-4 md:py-4"></td>
                      <td className="border border-blue-500 px-2 py-2 md:px-4 md:py-4">
                        Door adjustment - trimming
                      </td>
                      <td className="border border-blue-500 px-2 py-2 md:px-4 md:py-4">
                        679 CZK
                      </td>
                    </tr>

                    <tr>
                      <td className="border-t border-blue-500 px-2 py-2 md:px-4 md:py-4"></td>
                      <td className="border border-blue-500 px-2 py-2 md:px-4 md:py-4">
                        Repair of shelves (per piece)
                      </td>
                      <td className="border border-blue-500 px-2 py-2 md:px-4 md:py-4">
                        139 CZK
                      </td>
                    </tr>

                    <tr>
                      <td className="border-t border-blue-500 px-2 py-2 md:px-4 md:py-4"></td>
                      <td className="border border-blue-500 px-2 py-2 md:px-4 md:py-4">
                        Adjustment of cabinet doors
                      </td>
                      <td className="border border-blue-500 px-2 py-2 md:px-4 md:py-4">
                        209 CZK
                      </td>
                    </tr>

                    <tr>
                      <td className="border-t border-blue-500 px-2 py-2 md:px-4 md:py-4"></td>
                      <td className="border border-blue-500 px-2 py-2 md:px-4 md:py-4">
                        Replacement of worktop
                      </td>
                      <td className="border border-blue-500 px-2 py-2 md:px-4 md:py-4">
                        2699 CZK
                      </td>
                    </tr>

                    <tr>
                      <td className="border-t border-blue-500 px-2 py-2 md:px-4 md:py-4"></td>
                      <td className="border border-blue-500 px-2 py-2 md:px-4 md:py-4">
                        Cornice repair
                      </td>
                      <td className="border border-blue-500 px-2 py-2 md:px-4 md:py-4">
                        609 CZK
                      </td>
                    </tr>

                    <tr>
                      <td className="border-t border-blue-500 px-2 py-2 md:px-4 md:py-4"></td>
                      <td className="border border-blue-500 px-2 py-2 md:px-4 md:py-4">
                        Wall sealing / levelling (per m²) incl. primer
                      </td>
                      <td className="border border-blue-500 px-2 py-2 md:px-4 md:py-4">
                        339 CZK
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            )}

            <button
              onClick={handleIsPlumberingServicesOpen}
              className="border-2 border-blue-500 text-left p-4 lg:p-8 font-bold hover:bg-blue-100 focus:bg-blue-100"
            >

              <div className='flex justify-between items-center text-xl lg:text-2xl'>
                <p>Plumbing services</p>
                <p className='font-bold'>&rarr;</p>
              </div>
            </button>

            {isPlumberingServicesOpen && (
              <div className="overflow-x-auto ">
                <table className="min-w-full border-collapse border-2 border-blue-500 text-sm md:text-base text-black md:border-2 text-pretty">
                  <thead>
                    <tr className="bg-blue-100 md:text-lg lg:text-xl">
                      <th className="border border-blue-500 px-2 py-2 md:px-4 md:py-4 text-left font-semibold"></th>
                      <th className="border border-blue-500 px-2 py-2 md:px-4 md:py-4 text-left font-semibold">
                        Task
                      </th>
                      <th className="border border-blue-500 px-2 py-2 md:px-4 md:py-4 text-left font-semibold">
                        Price without VAT
                      </th>
                    </tr>
                  </thead>

                  <tbody>
                    <tr>
                      <td className="border-b border-blue-500 px-2 py-2 md:px-4 md:py-4">
                        <Hadice />
                      </td>
                      <td className="border border-blue-500 px-2 py-2 md:px-4 md:py-4">
                        Installation / replacement of hoses for bathtub faucets
                        / sinks / kitchen sinks
                      </td>
                      <td className="border border-blue-500 px-2 py-2 md:px-4 md:py-4">
                        539 CZK
                      </td>
                    </tr>

                    <tr>
                      <td className="border-0 border-blue-500 px-2 py-2 md:px-4 md:py-4">
                        <Pisoar />
                      </td>
                      <td className="border border-blue-500 px-2 py-2 md:px-4 md:py-4">
                        Installation of urinals
                      </td>
                      <td className="border border-blue-500 px-2 py-2 md:px-4 md:py-4">
                        1349 CZK
                      </td>
                    </tr>
                    <tr>
                      <td className="border-t border-blue-500 px-2 py-2 md:px-4 md:py-4">
                        <Toaleta />
                      </td>
                      <td className="border border-blue-500 px-2 py-2 md:px-4 md:py-4">
                        Toilet installation
                      </td>
                      <td className="border border-blue-500 px-2 py-2 md:px-4 md:py-4">
                        1349 CZK
                      </td>
                    </tr>

                    <tr>
                      <td className="border-t border-blue-500 px-2 py-2 md:px-4 md:py-4">
                        <Umyvadlo />
                      </td>
                      <td className="border border-blue-500 px-2 py-2 md:px-4 md:py-4">
                        Installation of sink
                      </td>
                      <td className="border border-blue-500 px-2 py-2 md:px-4 md:py-4">
                        1349 CZK
                      </td>
                    </tr>

                    <tr>
                      <td className="border-t border-blue-500 px-2 py-2 md:px-4 md:py-4">
                        <Bidet />
                      </td>
                      <td className="border border-blue-500 px-2 py-2 md:px-4 md:py-4">
                        Installation of bidet
                      </td>
                      <td className="border border-blue-500 px-2 py-2 md:px-4 md:py-4">
                        1349 CZK
                      </td>
                    </tr>

                    <tr>
                      <td className="border-t border-blue-500 px-2 py-2 md:px-4 md:py-4">
                        <Syfon />
                      </td>
                      <td className="border border-blue-500 px-2 py-2 md:px-4 md:py-4">
                        Installing / replacing the siphon at the sink
                      </td>
                      <td className="border border-blue-500 px-2 py-2 md:px-4 md:py-4">
                        479 CZK
                      </td>
                    </tr>

                    <tr>
                      <td className="border-t border-blue-500 px-2 py-2 md:px-4 md:py-4">
                        <KoupelSkrin />
                      </td>
                      <td className="border border-blue-500 px-2 py-2 md:px-4 md:py-4">
                        Installation of bathroom cabinet - disposal of the old
                        one
                      </td>
                      <td className="border border-blue-500 px-2 py-2 md:px-4 md:py-4">
                        1099 CZK
                      </td>
                    </tr>

                    <tr>
                      <td className="border-t border-blue-500 px-2 py-2 md:px-4 md:py-4">
                        <SprchKout />
                      </td>
                      <td className="border border-blue-500 px-2 py-2 md:px-4 md:py-4">
                        Installation of shower corner
                      </td>
                      <td className="border border-blue-500 px-2 py-2 md:px-4 md:py-4">
                        2699 CZK
                      </td>
                    </tr>

                    <tr>
                      <td className="border-t border-blue-500 px-2 py-2 md:px-4 md:py-4">
                        <ElZebrik />
                      </td>
                      <td className="border border-blue-500 px-2 py-2 md:px-4 md:py-4">
                        Installation of electric towel radiator
                      </td>
                      <td className="border border-blue-500 px-2 py-2 md:px-4 md:py-4">
                        1099 CZK
                      </td>
                    </tr>

                    <tr>
                      <td className="border-t border-blue-500 px-2 py-2 md:px-4 md:py-4">
                        <Boiler />
                      </td>
                      <td className="border border-blue-500 px-2 py-2 md:px-4 md:py-4">
                        Water heater replacement + removal of old one
                      </td>
                      <td className="border border-blue-500 px-2 py-2 md:px-4 md:py-4">
                        2699 CZK
                      </td>
                    </tr>

                    <tr>
                      <td className="border-t border-blue-500 px-2 py-2 md:px-4 md:py-4"></td>
                      <td className="border border-blue-500 px-2 py-2 md:px-4 md:py-4">
                        Faucet replacement
                      </td>
                      <td className="border border-blue-500 px-2 py-2 md:px-4 md:py-4">
                        679 CZK
                      </td>
                    </tr>

                    <tr>
                      <td className="border-t border-blue-500 px-2 py-2 md:px-4 md:py-4"></td>
                      <td className="border border-blue-500 px-2 py-2 md:px-4 md:py-4">
                        Boiler repair
                      </td>
                      <td className="border border-blue-500 px-2 py-2 md:px-4 md:py-4">
                        2699 CZK
                      </td>
                    </tr>

                    <tr>
                      <td className="border-t border-blue-500 px-2 py-2 md:px-4 md:py-4"></td>
                      <td className="border border-blue-500 px-2 py-2 md:px-4 md:py-4">
                        Silicone replacement (per meter)
                      </td>
                      <td className="border border-blue-500 px-2 py-2 md:px-4 md:py-4">
                        109 CZK
                      </td>
                    </tr>

                    <tr>
                      <td className="border-t border-blue-500 px-2 py-2 md:px-4 md:py-4"></td>
                      <td className="border border-blue-500 px-2 py-2 md:px-4 md:py-4">
                        Drain cleaning
                      </td>
                      <td className="border border-blue-500 px-2 py-2 md:px-4 md:py-4">
                        409 CZK
                      </td>
                    </tr>

                    <tr>
                      <td className="border-t border-blue-500 px-2 py-2 md:px-4 md:py-4"></td>
                      <td className="border border-blue-500 px-2 py-2 md:px-4 md:py-4">
                        Toilet repair
                      </td>
                      <td className="border border-blue-500 px-2 py-2 md:px-4 md:py-4">
                        809 CZK
                      </td>
                    </tr>

                    <tr>
                      <td className="border-t border-blue-500 px-2 py-2 md:px-4 md:py-4"></td>
                      <td className="border border-blue-500 px-2 py-2 md:px-4 md:py-4">
                        WC flush button replacement
                      </td>
                      <td className="border border-blue-500 px-2 py-2 md:px-4 md:py-4">
                        479 CZK
                      </td>
                    </tr>

                    <tr>
                      <td className="border-t border-blue-500 px-2 py-2 md:px-4 md:py-4"></td>
                      <td className="border border-blue-500 px-2 py-2 md:px-4 md:py-4">
                        Toilet seat replacement
                      </td>
                      <td className="border border-blue-500 px-2 py-2 md:px-4 md:py-4">
                        479 CZK
                      </td>
                    </tr>

                    <tr>
                      <td className="border-t border-blue-500 px-2 py-2 md:px-4 md:py-4"></td>
                      <td className="border border-blue-500 px-2 py-2 md:px-4 md:py-4">
                        Toilet flushing system repair
                      </td>
                      <td className="border border-blue-500 px-2 py-2 md:px-4 md:py-4">
                        679 CZK
                      </td>
                    </tr>

                    <tr>
                      <td className="border-t border-blue-500 px-2 py-2 md:px-4 md:py-4"></td>
                      <td className="border border-blue-500 px-2 py-2 md:px-4 md:py-4">
                        Showerhead replacement
                      </td>
                      <td className="border border-blue-500 px-2 py-2 md:px-4 md:py-4">
                        209 CZK
                      </td>
                    </tr>

                    <tr>
                      <td className="border-t border-blue-500 px-2 py-2 md:px-4 md:py-4"></td>
                      <td className="border border-blue-500 px-2 py-2 md:px-4 md:py-4">
                        Shower hose replacement
                      </td>
                      <td className="border border-blue-500 px-2 py-2 md:px-4 md:py-4">
                        209 CZK
                      </td>
                    </tr>

                    <tr>
                      <td className="border-t border-blue-500 px-2 py-2 md:px-4 md:py-4"></td>
                      <td className="border border-blue-500 px-2 py-2 md:px-4 md:py-4">
                        Washing machine repair - call-out and diagnostics
                      </td>
                      <td className="border border-blue-500 px-2 py-2 md:px-4 md:py-4">
                        1619 CZK
                      </td>
                    </tr>

                    <tr>
                      <td className="border-t border-blue-500 px-2 py-2 md:px-4 md:py-4"></td>
                      <td className="border border-blue-500 px-2 py-2 md:px-4 md:py-4">
                        Dryer repair - call-out and diagnostics
                      </td>
                      <td className="border border-blue-500 px-2 py-2 md:px-4 md:py-4">
                        1619 CZK
                      </td>
                    </tr>

                    <tr>
                      <td className="border-t border-blue-500 px-2 py-2 md:px-4 md:py-4"></td>
                      <td className="border border-blue-500 px-2 py-2 md:px-4 md:py-4">
                        Dishwasher repair - call-out and diagnostics
                      </td>
                      <td className="border border-blue-500 px-2 py-2 md:px-4 md:py-4">
                        1619 CZK
                      </td>
                    </tr>

                    <tr>
                      <td className="border-t border-blue-500 px-2 py-2 md:px-4 md:py-4"></td>
                      <td className="border border-blue-500 px-2 py-2 md:px-4 md:py-4">
                        Dismantling of existing sink
                      </td>
                      <td className="border border-blue-500 px-2 py-2 md:px-4 md:py-4">
                        539 CZK
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            )}

            <button
              onClick={handleIsElectroOpen}
              className="border-2 border-blue-500 text-left p-4 lg:p-8 font-bold hover:bg-blue-100 focus:bg-blue-100"
            >

              <div className='flex justify-between items-center text-xl lg:text-2xl'>
                <p>Electro</p>
                <p className='font-bold'>&rarr;</p>
              </div>
            </button>

            {isElectroOpen && (
              <div className="overflow-x-auto ">
                <table className="min-w-full border-collapse border-2 border-blue-500 text-sm md:text-base text-black md:border-2 text-pretty">
                  <thead>
                    <tr className="bg-blue-100 md:text-lg lg:text-xl">
                      <th className="border border-blue-500 px-2 py-2 md:px-4 md:py-4 text-left font-semibold"></th>
                      <th className="border border-blue-500 px-2 py-2 md:px-4 md:py-4 text-left font-semibold">
                        Task
                      </th>
                      <th className="border border-blue-500 px-2 py-2 md:px-4 md:py-4 text-left font-semibold">
                        Price without VAT
                      </th>
                    </tr>
                  </thead>

                  <tbody>
                    <tr>
                      <td className="border-t border-blue-500 px-2 py-2 md:px-4 md:py-4">
                        <Ventilator />
                      </td>
                      <td className="border border-blue-500 px-2 py-2 md:px-4 md:py-4">
                        Bathroom fan installation
                      </td>
                      <td className="border border-blue-500 px-2 py-2 md:px-4 md:py-4">
                        949 CZK
                      </td>
                    </tr>

                    <tr>
                      <td className="border-t border-blue-500 px-2 py-2 md:px-4 md:py-4">
                        <Lustr />
                      </td>
                      <td className="border border-blue-500 px-2 py-2 md:px-4 md:py-4">
                        Chandelier replacement
                      </td>
                      <td className="border border-blue-500 px-2 py-2 md:px-4 md:py-4">
                        679 CZK
                      </td>
                    </tr>

                    <tr>
                    <td className="border-t border-blue-500 px-2 py-2 md:px-4 md:py-4">
                      <TV />
                    </td>
                    <td className="border border-blue-500 px-2 py-2 md:px-4 md:py-4">
                      TV installation
                    </td>
                    <td className="border border-blue-500 px-2 py-2 md:px-4 md:py-4">
                      809 CZK
                    </td>
                  </tr>

                  <tr>
                    <td className="border-t border-blue-500 px-2 py-2 md:px-4 md:py-4">
                      <Router />
                    </td>
                    <td className="border border-blue-500 px-2 py-2 md:px-4 md:py-4">
                      Router installation and relocation
                    </td>
                    <td className="border border-blue-500 px-2 py-2 md:px-4 md:py-4">
                      809 CZK
                    </td>
                  </tr>

                  <tr>
                    <td className="border-t border-blue-500 px-2 py-2 md:px-4 md:py-4"></td>
                    <td className="border border-blue-500 px-2 py-2 md:px-4 md:py-4">
                      Socket replacement
                    </td>
                    <td className="border border-blue-500 px-2 py-2 md:px-4 md:py-4">
                      339 CZK
                    </td>
                  </tr>

                  <tr>
                    <td className="border-t border-blue-500 px-2 py-2 md:px-4 md:py-4"></td>
                    <td className="border border-blue-500 px-2 py-2 md:px-4 md:py-4">
                      Switch replacement
                    </td>
                    <td className="border border-blue-500 px-2 py-2 md:px-4 md:py-4">
                      339 CZK
                    </td>
                  </tr>
                  </tbody>
                </table>
              </div>
            )}

            <button
              onClick={handleIsAppliancesOpen}
              className="border-2 border-blue-500 text-left p-4 lg:p-8 font-bold hover:bg-blue-100 focus:bg-blue-100"
            >

              <div className='flex justify-between items-center text-xl lg:text-2xl'>
                <p>Installation of appliances</p>
                <p className='font-bold'>&rarr;</p>
              </div>
            </button>

            {isAppliancesOpen && (
              <div className="overflow-x-auto ">
                <table className="min-w-full border-collapse border-2 border-blue-500 text-sm md:text-base text-black md:border-2 text-pretty">
                  <thead>
                    <tr className="bg-blue-100 md:text-lg lg:text-xl">
                      <th className="border border-blue-500 px-2 py-2 md:px-4 md:py-4 text-left font-semibold"></th>
                      <th className="border border-blue-500 px-2 py-2 md:px-4 md:py-4 text-left font-semibold">
                        Task
                      </th>
                      <th className="border border-blue-500 px-2 py-2 md:px-4 md:py-4 text-left font-semibold">
                        Price without VAT
                      </th>
                    </tr>
                  </thead>

                  <tbody>
                  <tr>
                    <td className="border-t border-blue-500 px-2 py-2 md:px-4 md:py-4">
                      <Susicka />
                    </td>
                    <td className="border border-blue-500 px-2 py-2 md:px-4 md:py-4">
                      Washing machine / dryer installation
                    </td>
                    <td className="border border-blue-500 px-2 py-2 md:px-4 md:py-4">
                      1349 CZK
                    </td>
                  </tr>
                  <tr>
                    <td className="border-t border-blue-500 px-2 py-2 md:px-4 md:py-4">
                      <Mycka />
                    </td>
                    <td className="border border-blue-500 px-2 py-2 md:px-4 md:py-4">
                      Dishwasher installation
                    </td>
                    <td className="border border-blue-500 px-2 py-2 md:px-4 md:py-4">
                      1349 CZK
                    </td>
                  </tr>

                  <tr>
                    <td className="border-t border-blue-500 px-2 py-2 md:px-4 md:py-4"></td>
                    <td className="border border-blue-500 px-2 py-2 md:px-4 md:py-4">
                      Delivery of large appliances (per item)
                    </td>
                    <td className="border border-blue-500 px-2 py-2 md:px-4 md:py-4">
                      809 CZK
                    </td>
                  </tr>

                  <tr>
                    <td className="border-t border-blue-500 px-2 py-2 md:px-4 md:py-4">
                      <Deska />
                    </td>
                    <td className="border border-blue-500 px-2 py-2 md:px-4 md:py-4">
                      Installation of electric hob
                    </td>
                    <td className="border border-blue-500 px-2 py-2 md:px-4 md:py-4">
                      809 CZK
                    </td>
                  </tr>
                  <tr>
                    <td className="border-t border-blue-500 px-2 py-2 md:px-4 md:py-4">
                      <Trouba />
                    </td>
                    <td className="border border-blue-500 px-2 py-2 md:px-4 md:py-4">
                      Installation of electric / gas oven
                    </td>
                    <td className="border border-blue-500 px-2 py-2 md:px-4 md:py-4">
                      809 CZK
                    </td>
                  </tr>
                  </tbody>
                </table>
              </div>
            )}

            <button
              onClick={handleIsLocksmithOpen}
              className="border-2 border-blue-500 text-left p-4 lg:p-8 font-bold hover:bg-blue-100 focus:bg-blue-100"
            >
              <div className='flex justify-between items-center text-xl lg:text-2xl'>
                <p>Locksmith work</p>
                <p className='font-bold'>&rarr;</p>
              </div>
            </button>

            {isLocksmithOpen && (
              <div className="overflow-x-auto ">
                <table className="min-w-full border-collapse border-2 border-blue-500 text-sm md:text-base text-black md:border-2 text-pretty">
                  <thead>
                    <tr className="bg-blue-100 md:text-lg lg:text-xl">
                      <th className="border border-blue-500 px-2 py-2 md:px-4 md:py-4 text-left font-semibold"></th>
                      <th className="border border-blue-500 px-2 py-2 md:px-4 md:py-4 text-left font-semibold">
                        Task
                      </th>
                      <th className="border border-blue-500 px-2 py-2 md:px-4 md:py-4 text-left font-semibold">
                        Price without VAT
                      </th>
                    </tr>
                  </thead>

                  <tbody>
                  <tr>
                    <td className="border-t border-blue-500 px-2 py-2 md:px-4 md:py-4">
                      <Zamek />
                    </td>
                    <td className="border border-blue-500 px-2 py-2 md:px-4 md:py-4">
                      Installation / replacement of door lock
                    </td>
                    <td className="border border-blue-500 px-2 py-2 md:px-4 md:py-4">
                      409 CZK
                    </td>
                  </tr>

                  <tr>
                    <td className="border-t border-blue-500 px-2 py-2 md:px-4 md:py-4">
                      <Klic />
                    </td>
                    <td className="border border-blue-500 px-2 py-2 md:px-4 md:py-4">
                      Key production - pickup - production - handover
                    </td>
                    <td className="border border-blue-500 px-2 py-2 md:px-4 md:py-4">
                      339 CZK
                    </td>
                  </tr>

                  <tr>
                    <td className="border-t border-blue-500 px-2 py-2 md:px-4 md:py-4">
                      <Schranka />
                    </td>
                    <td className="border border-blue-500 px-2 py-2 md:px-4 md:py-4">
                      Mailbox lock replacement
                    </td>
                    <td className="border border-blue-500 px-2 py-2 md:px-4 md:py-4">
                      339 CZK
                    </td>
                  </tr>
                  </tbody>
                </table>
              </div>
            )}

            <button
              onClick={handleIsPaintingOpen}
              className="border-2 border-blue-500 text-left p-4 lg:p-8 font-bold hover:bg-blue-100 focus:bg-blue-100"
            >
              <div className='flex justify-between items-center text-xl lg:text-2xl'>
                <p>Painting work</p>
                <p className='font-bold'>&rarr;</p>
              </div>
            </button>

            {isPaintingOpen && (
              <div className="overflow-x-auto ">
                <table className="min-w-full border-collapse border-2 border-blue-500 text-sm md:text-base text-black md:border-2 text-pretty">
                  <thead>
                    <tr className="bg-blue-100 md:text-lg lg:text-xl">
                      <th className="border border-blue-500 px-2 py-2 md:px-4 md:py-4 text-left font-semibold"></th>
                      <th className="border border-blue-500 px-2 py-2 md:px-4 md:py-4 text-left font-semibold">
                        Task
                      </th>
                      <th className="border border-blue-500 px-2 py-2 md:px-4 md:py-4 text-left font-semibold">
                        Price without VAT
                      </th>
                    </tr>
                  </thead>

                  <tbody>

                  <tr>
                    <td className="border-t border-blue-500 px-2 py-2 md:px-4 md:py-4"></td>
                    <td className="border border-blue-500 px-2 py-2 md:px-4 md:py-4">
                      Painting (per m²) incl. covering
                    </td>
                    <td className="border border-blue-500 px-2 py-2 md:px-4 md:py-4">
                      119 CZK
                    </td>
                  </tr>

                  <tr>
                    <td className="border-t border-blue-500 px-2 py-2 md:px-4 md:py-4"></td>
                    <td className="border border-blue-500 px-2 py-2 md:px-4 md:py-4">
                      Wallpapering (per m²)
                    </td>
                    <td className="border border-blue-500 px-2 py-2 md:px-4 md:py-4">
                      119 CZK
                    </td>
                  </tr>

                  </tbody>
                </table>
              </div>
            )}

            <button
              onClick={handleIsFlooringOpen}
              className="border-2 border-blue-500 text-left p-4 lg:p-8 font-bold hover:bg-blue-100 focus:bg-blue-100"
            >
              <div className='flex justify-between items-center text-xl lg:text-2xl'>
                <p>Flooring work</p>
                <p className='font-bold'>&rarr;</p>
              </div>
            </button>

            {isFlooringOpen && (
              <div className="overflow-x-auto ">
                <table className="min-w-full border-collapse border-2 border-blue-500 text-sm md:text-base text-black md:border-2 text-pretty">
                  <thead>
                    <tr className="bg-blue-100 md:text-lg lg:text-xl">
                      <th className="border border-blue-500 px-2 py-2 md:px-4 md:py-4 text-left font-semibold"></th>
                      <th className="border border-blue-500 px-2 py-2 md:px-4 md:py-4 text-left font-semibold">
                        Task
                      </th>
                      <th className="border border-blue-500 px-2 py-2 md:px-4 md:py-4 text-left font-semibold">
                        Price without VAT
                      </th>
                    </tr>
                  </thead>

                  <tbody>
                  <tr>
                    <td className="border-t border-blue-500 px-2 py-2 md:px-4 md:py-4"></td>
                    <td className="border border-blue-500 px-2 py-2 md:px-4 md:py-4">
                      Removal of laminate / vinyl flooring / per m²
                    </td>
                    <td className="border border-blue-500 px-2 py-2 md:px-4 md:py-4">
                      59 CZK
                    </td>
                  </tr>

                  <tr>
                    <td className="border-t border-blue-500 px-2 py-2 md:px-4 md:py-4"></td>
                    <td className="border border-blue-500 px-2 py-2 md:px-4 md:py-4">
                      Removal of carpet / linoleum / per m²
                    </td>
                    <td className="border border-blue-500 px-2 py-2 md:px-4 md:py-4">
                      49 CZK
                    </td>
                  </tr>

                  <tr>
                    <td className="border-t border-blue-500 px-2 py-2 md:px-4 md:py-4"></td>
                    <td className="border border-blue-500 px-2 py-2 md:px-4 md:py-4">
                      Removal of glued carpet / glued linoleum / per m²
                    </td>
                    <td className="border border-blue-500 px-2 py-2 md:px-4 md:py-4">
                      89 CZK
                    </td>
                  </tr>
                  
                  <tr>
                    <td className="border-t border-blue-500 px-2 py-2 md:px-4 md:py-4"></td>
                    <td className="border border-blue-500 px-2 py-2 md:px-4 md:py-4">
                      Removal of glued vinyl flooring / per m²
                    </td>
                    <td className="border border-blue-500 px-2 py-2 md:px-4 md:py-4">
                      69 CZK
                    </td>
                  </tr>

                  <tr>
                    <td className="border-t border-blue-500 px-2 py-2 md:px-4 md:py-4"></td>
                    <td className="border border-blue-500 px-2 py-2 md:px-4 md:py-4">
                      Installation of glued flooring / per m²
                    </td>
                    <td className="border border-blue-500 px-2 py-2 md:px-4 md:py-4">
                      299 CZK
                    </td>
                  </tr>

                  <tr>
                    <td className="border-t border-blue-500 px-2 py-2 md:px-4 md:py-4"></td>
                    <td className="border border-blue-500 px-2 py-2 md:px-4 md:py-4">
                      Installation of floating floor / per m²
                    </td>
                    <td className="border border-blue-500 px-2 py-2 md:px-4 md:py-4">
                      259 CZK
                    </td>
                  </tr>

                  <tr>
                    <td className="border-t border-blue-500 px-2 py-2 md:px-4 md:py-4">
                      <Montaz />
                    </td>
                    <td className="border border-blue-500 px-2 py-2 md:px-4 md:py-4">
                      Installation of loose-laid PVC flooring / per m²
                    </td>
                    <td className="border border-blue-500 px-2 py-2 md:px-4 md:py-4">
                      219 CZK
                    </td>
                  </tr>

                  <tr>
                    <td className="border-t border-blue-500 px-2 py-2 md:px-4 md:py-4"></td>
                    <td className="border border-blue-500 px-2 py-2 md:px-4 md:py-4">
                      Installation of loose-laid carpet / per m²
                    </td>
                    <td className="border border-blue-500 px-2 py-2 md:px-4 md:py-4">
                      129 CZK
                    </td>
                  </tr>
                  </tbody>
                </table>
              </div>
            )}

            <button
              onClick={handleIsThrobbingOpen}
              className="border-2 border-blue-500 text-left p-4 lg:p-8 font-bold hover:bg-blue-100 focus:bg-blue-100"
            >
              <div className='flex justify-between items-center text-xl lg:text-2xl'>
                <p>Throbbing</p>
                <p className='font-bold'>&rarr;</p>
              </div>
            </button>

            {isThrobbingOpen && (
              <div className="overflow-x-auto ">
                <table className="min-w-full border-collapse border-2 border-blue-500 text-sm md:text-base text-black md:border-2 text-pretty">
                  <thead>
                    <tr className="bg-blue-100 md:text-lg lg:text-xl">
                      <th className="border border-blue-500 px-2 py-2 md:px-4 md:py-4 text-left font-semibold"></th>
                      <th className="border border-blue-500 px-2 py-2 md:px-4 md:py-4 text-left font-semibold">
                        Task
                      </th>
                      <th className="border border-blue-500 px-2 py-2 md:px-4 md:py-4 text-left font-semibold">
                        Price without VAT
                      </th>
                    </tr>
                  </thead>

                  <tbody>

                  <tr>
                    <td className="border-t border-blue-500 px-2 py-2 md:px-4 md:py-4"></td>
                    <td className="border border-blue-500 px-2 py-2 md:px-4 md:py-4">
                      Upholstery cleaning - 2-seater sofa
                    </td>
                    <td className="border border-blue-500 px-2 py-2 md:px-4 md:py-4">
                      809 CZK
                    </td>
                  </tr>

                  <tr>
                    <td className="border-t border-blue-500 px-2 py-2 md:px-4 md:py-4"></td>
                    <td className="border border-blue-500 px-2 py-2 md:px-4 md:py-4">
                      Upholstery cleaning - 3-seater sofa
                    </td>
                    <td className="border border-blue-500 px-2 py-2 md:px-4 md:py-4">
                      1009 CZK
                    </td>
                  </tr>

                  <tr>
                    <td className="border-t border-blue-500 px-2 py-2 md:px-4 md:py-4"></td>
                    <td className="border border-blue-500 px-2 py-2 md:px-4 md:py-4">
                      Upholstery cleaning - L-shaped sofa
                    </td>
                    <td className="border border-blue-500 px-2 py-2 md:px-4 md:py-4">
                      1219 CZK
                    </td>
                  </tr>

                  <tr>
                    <td className="border-t border-blue-500 px-2 py-2 md:px-4 md:py-4"></td>
                    <td className="border border-blue-500 px-2 py-2 md:px-4 md:py-4">
                      Upholstery cleaning - U-shaped sofa
                    </td>
                    <td className="border border-blue-500 px-2 py-2 md:px-4 md:py-4">
                      1619 CZK
                    </td>
                  </tr>

                  <tr>
                    <td className="border-t border-blue-500 px-2 py-2 md:px-4 md:py-4"></td>
                    <td className="border border-blue-500 px-2 py-2 md:px-4 md:py-4">
                      Pillow cleaning
                    </td>
                    <td className="border border-blue-500 px-2 py-2 md:px-4 md:py-4">
                      49 CZK
                    </td>
                  </tr>

                  <tr>
                    <td className="border-t border-blue-500 px-2 py-2 md:px-4 md:py-4"></td>
                    <td className="border border-blue-500 px-2 py-2 md:px-4 md:py-4">
                      Chair cleaning
                    </td>
                    <td className="border border-blue-500 px-2 py-2 md:px-4 md:py-4">
                      139 CZK
                    </td>
                  </tr>

                  <tr>
                    <td className="border-t border-blue-500 px-2 py-2 md:px-4 md:py-4"></td>
                    <td className="border border-blue-500 px-2 py-2 md:px-4 md:py-4">
                      Armchair cleaning
                    </td>
                    <td className="border border-blue-500 px-2 py-2 md:px-4 md:py-4">
                      479 CZK
                    </td>
                  </tr>

                  <tr>
                    <td className="border-t border-blue-500 px-2 py-2 md:px-4 md:py-4"></td>
                    <td className="border border-blue-500 px-2 py-2 md:px-4 md:py-4">
                      Mattress cleaning 90x200
                    </td>
                    <td className="border border-blue-500 px-2 py-2 md:px-4 md:py-4">
                      609 CZK
                    </td>
                  </tr>

                  <tr>
                    <td className="border-t border-blue-500 px-2 py-2 md:px-4 md:py-4"></td>
                    <td className="border border-blue-500 px-2 py-2 md:px-4 md:py-4">
                      Mattress cleaning 180x200
                    </td>
                    <td className="border border-blue-500 px-2 py-2 md:px-4 md:py-4">
                      949 CZK
                    </td>
                  </tr>

                  <tr>
                    <td className="border-t border-blue-500 px-2 py-2 md:px-4 md:py-4"></td>
                    <td className="border border-blue-500 px-2 py-2 md:px-4 md:py-4">
                      Carpet cleaning (per m²)
                    </td>
                    <td className="border border-blue-500 px-2 py-2 md:px-4 md:py-4">
                      139 CZK
                    </td>
                  </tr>

                  <tr>
                    <td className="border-t border-blue-500 px-2 py-2 md:px-4 md:py-4"></td>
                    <td className="border border-blue-500 px-2 py-2 md:px-4 md:py-4">
                      Long-pile carpet cleaning (per m²)
                    </td>
                    <td className="border border-blue-500 px-2 py-2 md:px-4 md:py-4">
                      209 CZK
                    </td>
                  </tr>

                  </tbody>
                </table>
              </div>
            )}

            <button
              onClick={handleIsTransportOpen}
              className="border-2 border-blue-500 text-left p-4 lg:p-8 font-bold hover:bg-blue-100 focus:bg-blue-100"
            >
              <div className='flex justify-between items-center text-xl lg:text-2xl'>
                <p>Transport</p>
                <p className='font-bold'>&rarr;</p>
              </div>
            </button>

            {isTransportOpen && (
              <div className="overflow-x-auto ">
                <table className="min-w-full border-collapse border-2 border-blue-500 text-sm md:text-base text-black md:border-2 text-pretty">
                  <thead>
                    <tr className="bg-blue-100 md:text-lg lg:text-xl">
                      <th className="border border-blue-500 px-2 py-2 md:px-4 md:py-4 text-left font-semibold"></th>
                      <th className="border border-blue-500 px-2 py-2 md:px-4 md:py-4 text-left font-semibold">
                        Task
                      </th>
                      <th className="border border-blue-500 px-2 py-2 md:px-4 md:py-4 text-left font-semibold">
                        Price without VAT
                      </th>
                    </tr>
                  </thead>

                  <tbody>

                  <tr>
                    <td className="border-t border-blue-500 px-2 py-2 md:px-4 md:py-4"></td>
                    <td className="border border-blue-500 px-2 py-2 md:px-4 md:py-4">
                      Purchase of various appliances + delivery = 6% + delivery
                    </td>
                    <td className="border border-blue-500 px-2 py-2 md:px-4 md:py-4"></td>
                  </tr>

                  </tbody>
                </table>
              </div>
            )}

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

                <img src="/qr/qr.png" loading="lazy" width="25%" />
              </a>
            </div>
          </section>
        </main>
        <footer className="px-4 grid md:block gap-2 border-t-2 border-blue-500">
          <div className="bg-white py-4 items-center text-black font-bold text-3xl text-center lg:text-left">
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
              <a
                className="flex items-center gap-2 hover:underline hover:underline-offset-4 md:text-xl lg:text-2xl"
                href=""
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Call us"
              >
                <FaPhone height={16} width={16} />
                +420 704 901 902
              </a>
            </div>

            <div className="flex flex-col md:flex-row gap-2 md:justify-between">
              <p className="hover:underline hover:underline-offset-4 md:text-xl lg:text-2xl">
                sídlo: Ječná 548/7, 120 00 Praha
              </p>
              <p className="hover:underline hover:underline-offset-4 md:text-xl lg:text-2xl">
                IČ: 04383257
              </p>
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
