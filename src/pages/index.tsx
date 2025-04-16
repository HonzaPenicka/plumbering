import localFont from 'next/font/local';
import { PragueIcon } from '../../public/icon/prague';
import { PlumberIcon } from '../../public/icon/plumber';
import { RationgIcon } from '../../public/icon/rating';
import { WorkerIcon } from '../../public/icon/worker';
import { PipeIcon } from '../../public/icon/pipe';
import { KeyIcon } from '../../public/icon/key';
import { FurnitureIcon } from '../../public/icon/furniture';
import { LampIcon } from '../../public/icon/lamp';
import { NumberOneIcon } from '../../public/icon/number-one';
import { NumberTwoIcon } from '../../public/icon/number-two';
import { NumberThreeIcon } from '../../public/icon/number-three';
import { ShakingHandsIcon } from '../../public/icon/shaking-hands';
import { TimeIcon } from '../../public/icon/time';
import { SupportIcon } from '../../public/icon/support';
import 'swiper/css';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { useCallback, useRef, useState } from 'react';
import Head from 'next/head';
import { FaPhone } from 'react-icons/fa';
import { MdMailOutline } from 'react-icons/md';
import { GiHamburgerMenu } from 'react-icons/gi';
import { Lustr } from '../../public/icon/lustr';
import { TriMista } from '../../public/icon/3mista';
import { Zamek } from '../../public/icon/zamek';
import { Hadice } from '../../public/icon/hadice';

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

export default function Home() {
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
        <title>YOUR BOB - Profesionální instalatéři v Praze</title>
        <meta
          name="description"
          content="Your Bob nabízí ověřené instalatéry v Praze. Kvalitní služby, dostupnost během hodiny, bezplatný odhad ceny."
        />
        <meta
          name="keywords"
          content="instalatéři Praha, Your Bob, vodoinstalace, oprava potrubí, montáž bezpečnostních zámků, výměna žárovek"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* Open Graph Meta Tags */}
        <meta
          property="og:title"
          content="Your Bob - Profesionální instalatéři v Praze"
        />
        <meta
          property="og:description"
          content="Your Bob nabízí ověřené instalatéry v Praze. Kvalitní služby, dostupnost během hodiny, bezplatný odhad ceny."
        />
        <meta property="og:image" content="/img/hero/yourbob.jpeg" />
        <meta property="og:url" content="https://www.yourbob.cz" />
        <meta property="og:type" content="website" />
        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Your Bob - Profesionální instalatéři v Praze"
        />
        <meta
          name="twitter:description"
          content="Your Bob nabízí ověřené instalatéry v Praze. Kvalitní služby, dostupnost během hodiny, bezplatný odhad ceny."
        />
        <meta name="twitter:image" content="/img/hero/yourbob.jpeg" />
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
        {/* Security */}
        <meta name="referrer" content="no-referrer-when-downgrade" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://www.yourbob.cz" />
      </Head>
      <div
        className={`${geistSans.variable} ${geistMono.variable} grid container mx-auto items-center pb-4 font-[family-name:var(--font-geist-sans)]`}
      >
        <header className="flex justify-between bg-white py-4 px-4 items-center text-black font-bold text-3xl border-b-2 border-b-blue-500">
          <a href="/">
            <h1 className='hover:text-red-300'>YOUR BOB</h1>
          </a>
          <button onClick={handleIsMenuOpen}>
            <GiHamburgerMenu className="flex justify-start items-start hover:fill-red-300" />
          </button>
        </header>
        {isMenuOpen && (
          <nav className="p-4 absolute bg-white top-14 z-10 font-semibold text-xl container border-2 border-blue-500 uppercase mx-auto">
            <ul className="flex flex-col gap-4 text-right">
              <li>
                <a
                  href="/"
                  className="hover:underline-offset-2 hover:underline hover:decoration-red-300"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/price-list"
                  className="hover:underline-offset-2 hover:underline hover:decoration-red-300"
                >
                  Price List
                </a>
              </li>
              <li>
                <a
                  href="/about"
                  className="hover:underline-offset-2 hover:underline hover:decoration-red-300"
                >
                  About
                </a>
              </li>
            </ul>
          </nav>
        )}
        <main className="grid gap-4 lg:gap-8 items-left lg:items-center">
          <div>
            <section
              className="px-4 py-4 lg:py-24 bg-[url('/img/hero/yourbob.jpeg')] md:bg-[url('/img/hero/yourbob.jpeg')] bg-cover bg-bottom md:bg-top"
              style={{
                backgroundRepeat: 'no-repeat',
              }}
              aria-label="Hero Section"
            >
              <h1 className="justify-center flex text-3xl md:text-4xl lg:text-6xl font-bold pt-4 pb-8 lg:pt-0 lg:pb-16 uppercase text-white">
                Verified Your Bob
              </h1>
              <div className="flex items-center justify-center py-24">
                <button
                  onClick={scrollToForm}
                  className={`backdrop-blur-sm text-white uppercase font-bold text-2xl lg:text-4xl py-4 px-8 lg:py-8 lg:px-32 rounded-xl ring-2 ring-white hover:ring-red-300 hover:text-red-300 ${
                    isClicked ? 'ring-blue-500' : ''
                  } transition duration-300`}
                  aria-label="Contact us"
                >
                  Contact us
                </button>
              </div>
            </section>
            <section className="px-8 py-8 grid md:grid-cols-3 gap-8 items-start text-pretty">
              <div className="flex gap-8 md:gap-4 lg:gap-12 items-center">
                <PragueIcon />
                <div className="flex flex-col gap-2">
                  <h2 className="text-lg font-medium">
                    Successful local service
                  </h2>
                  <div className="text-sm font-extralight">
                    We operate throughout Prague.
                  </div>
                </div>
              </div>
              <div className="flex gap-8 md:gap-4 lg:gap-12 items-center">
                <PlumberIcon />
                <div className="flex flex-col gap-2">
                  <h2 className="text-lg font-medium">
                    Thousands of hours of professional work
                  </h2>
                  <div className="text-sm font-extralight">
                    We continuously raise quality standards.
                  </div>
                </div>
              </div>
              <div className="flex gap-8 md:gap-4 lg:gap-12 items-center">
                <RationgIcon />
                <div className="flex flex-col gap-2">
                  <h2 className="text-lg font-medium">
                    Hundreds of satisfied customers
                  </h2>
                  <div className="text-sm font-extralight">
                    We solve your needs precisely to measure.
                  </div>
                </div>
              </div>
              <div className="flex gap-8 md:gap-4 lg:gap-12 items-center">
                <WorkerIcon />
                <div className="flex flex-col gap-2">
                  <h2 className="text-lg font-medium">
                    Plumbers verified by you
                  </h2>
                  <div className="text-sm font-extralight">
                    Recommended by satisfied customers.
                  </div>
                </div>
              </div>
            </section>
            <section className="bg-blue-100 md:bg-white md:border-blue-500 md:border-2">
              <h2 className="justify-center flex text-2xl font-bold pb-4 pt-8 uppercase">
                Verified Prague plumber
              </h2>
              <div className="px-8 pb-8 grid md:grid-cols-3 gap-4">
                <div className="flex gap-4 items-center">
                  <Hadice />
                  <div className="flex flex-col gap-2">
                    <h3 className="text-lg text-pretty">
                      Repair and maintenance of water pipes, drain cleaning
                    </h3>
                  </div>
                </div>
                <div className="flex gap-4 items-center">
                  <Zamek />
                  <div className="flex flex-col gap-2">
                    <h3 className="text-lg text-ellipsis">
                      Replacement and installation of security locks and inserts
                    </h3>
                  </div>
                </div>
                <div className="flex gap-4 items-center">
                  <TriMista />
                  <div className="flex flex-col gap-2">
                    <h3 className="text-lg font-medium">
                      Installation of home accessories (shelves, holders,
                      hangers, ...)
                    </h3>
                  </div>
                </div>
                <div className="flex gap-4 items-center">
                  <Lustr />
                  <div className="flex flex-col gap-2">
                    <h3 className="text-lg font-medium">
                      Bulb replacement and minor electrical installation
                      assistance
                    </h3>
                  </div>
                </div>
              </div>
            </section>
          </div>
          <section>
            <h2 className="justify-center flex text-2xl font-bold pb-8 pt-4 uppercase">
              How it works
            </h2>
            <>
              <div className="px-8 pb-4 gap-4 hidden md:grid md:grid-cols-3 text-pretty">
                <div className="flex flex-col gap-4 items-center">
                  <NumberOneIcon />
                  <div className="flex flex-col gap-2">
                    <div className="text-lg text-ellipsis">
                      <h3 className="text-lg text-center font-semibold">
                        Place an order
                      </h3>
                    </div>
                    <p className="text-lg text-center font-extralight">
                      Fill out our simple online form. We will contact you to
                      confirm the order.
                    </p>
                  </div>
                </div>
                <div className="flex flex-col gap-4 items-center">
                  <NumberTwoIcon />
                  <div className="flex flex-col gap-2">
                    <div className="text-lg text-ellipsis">
                      <h3 className="text-lg text-center font-semibold">
                        Place an order
                      </h3>
                    </div>
                    <p className="text-lg text-center font-extralight">
                      A verified plumber will arrive at your chosen time and
                      professionally perform the requested work.
                    </p>
                  </div>
                </div>
                <div className="flex flex-col gap-4 items-center">
                  <NumberThreeIcon />
                  <div className="flex flex-col gap-2">
                    <div className="text-lg text-ellipsis">
                      <h3 className="text-lg text-center font-semibold">
                        Rate and enjoy
                      </h3>
                    </div>
                    <p className="text-lg text-center font-extralight">
                      After the work is completed, simply accept and rate our
                      expert. You pay only after the successful completion of
                      the job.
                    </p>
                  </div>
                </div>
              </div>
              <div className="md:hidden">
                <Swiper
                  className="max-w-[360px]"
                  spaceBetween={0}
                  slidesPerView={1}
                  modules={[Navigation]}
                  navigation
                >
                  <SwiperSlide>
                    <div className="flex flex-col gap-4 items-center">
                      <NumberOneIcon />
                      <div className="flex flex-col gap-2">
                        <div className="text-lg text-ellipsis">
                          <h3 className="text-lg text-center font-semibold text-ellipsis">
                            Place an order
                          </h3>
                        </div>
                        <p className="text-lg text-center font-extralight text-ellipsis">
                          Fill out our simple online form. We will contact you
                          to confirm the order.
                        </p>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="flex flex-col gap-4 items-center">
                      <NumberTwoIcon />
                      <div className="flex flex-col gap-2">
                        <div className="text-lg text-ellipsis">
                          <h3 className="text-lg text-center font-semibold text-ellipsis">
                            Place an order
                          </h3>
                        </div>
                        <p className="text-lg text-center font-extralight text-ellipsis">
                          A verified plumber will arrive at your chosen time and
                          professionally perform the requested work.
                        </p>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="flex flex-col gap-4 items-center">
                      <NumberThreeIcon />
                      <div className="flex flex-col gap-2">
                        <div className="text-lg text-ellipsis">
                          <h3 className="text-lg text-center font-semibold text-ellipsis">
                            Rate and enjoy
                          </h3>
                        </div>
                        <p className="text-lg text-center font-extralight text-ellipsis">
                          After the work is completed, simply accept and rate
                          our expert. You pay only after the successful
                          completion of the job.
                        </p>
                      </div>
                    </div>
                  </SwiperSlide>
                </Swiper>
              </div>
            </>
          </section>
          <section className="bg-blue-100 md:bg-white md:border-blue-500 md:border-2 text-pretty">
            <h2 className="justify-center flex text-2xl font-bold py-8 uppercase">
              Why choose YOUR BOB
            </h2>
            <div className="px-8 pb-8 grid gap-4">
              <div className="flex flex-col gap-4 items-center">
                <ShakingHandsIcon />
                <div className="flex flex-col gap-2">
                  <div className="text-lg text-ellipsis">
                    <h3 className="text-lg text-center font-semibold text-ellipsis">
                      Security
                    </h3>
                  </div>
                  <p className="text-lg text-center font-extralight text-ellipsis">
                    All plumbers are verified and rated by customers. We
                    guarantee that you only pay for quality work done.
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-4 items-center">
                <TimeIcon />
                <div className="flex flex-col gap-2">
                  <div className="text-lg text-ellipsis">
                    <h3 className="text-lg text-center font-semibold text-ellipsis">
                      Speed
                    </h3>
                  </div>
                  <p className="text-lg text-center font-extralight text-ellipsis">
                    We save your time. Order today, work can start as early as
                    tomorrow.
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-4 items-center">
                <SupportIcon />
                <div className="flex flex-col gap-2">
                  <div className="text-lg text-ellipsis">
                    <h3 className="text-lg text-center font-semibold text-ellipsis">
                      Support
                    </h3>
                  </div>
                  <p className="text-lg text-center font-extralight text-ellipsis">
                    Our manager will guide you through the entire process and is
                    available from placing the order to completing the work.
                  </p>
                </div>
              </div>
            </div>
          </section>
          <section className="px-4 grid gap-4">
            <h2 className="justify-center flex text-2xl font-bold pb-4 pt-4 uppercase">
              Where we operate
            </h2>
            <p className="justify-center flex text-lg font-extralight pb-4 text-pretty">
              Prague 1 | Prague 2 | Prague 3 | Prague 4 | Prague 5 | Prague 6 |
              Prague 7 | Prague 8 | Prague 9 | Prague 10
            </p>
            <div className="grid justify-center pb-8 gap-4" ref={formRef}>
              <h2 className="justify-center flex text-2xl font-bold pb-4 text-center text-pretty uppercase">
                Click to text your problem on WhatsApp!
              </h2>
              <a
                href="https://wa.me/message/O2XFDY6ZCZHYD1"
                className="flex flex-col items-center justify-center gap-8"
              >
                <button className="uppercase text-2xl font-bold border-2 border-blue-500 rounded-lg p-4 text-blue-500 hover:text-red-300 hover:border-red-300">
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
