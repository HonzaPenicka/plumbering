import Image from 'next/image';
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
import { BulpIcon } from '../../public/icon/bulp';
import { ContactForm } from '@/components/form';
import { useRef, useState } from 'react';
import Head from 'next/head';

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
        <meta property="og:url" content="https://www.plumberprague.com" />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://www.plumberprague.cz" />
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
      </Head>
      <div
        className={`${geistSans.variable} ${geistMono.variable} grid container mx-auto items-center pb-4 font-[family-name:var(--font-geist-sans)]`}
      >
        <header className="flex justify-between bg-white py-4 px-4 items-center text-black font-bold text-3xl">
          <div>PLUMBER</div>
          <div>PRAGUE</div>
        </header>
        <main className="grid gap-4 lg:gap-8 items-left lg:items-center">
          <div>
            <section
              className="px-4 py-4 lg:py-8 bg-[url('/img/hero/mobile.webp')] md:bg-[url('/img/hero/desktop.webp')] lg:bg-bottom"
              style={{
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
              }}
              aria-label="Hero Section"
            >
              <h1 className="justify-center flex text-2xl md:text-4xl lg:text-6xl font-bold text-white pt-4 pb-8 lg:pt-8 lg:pb-16">
                Verified Prague plumber
              </h1>

              <div className="text-xl grid gap-8 lg:gap-12 px-4 md:px-8">
                <div className="flex gap-4 items-center">
                  <BulpIcon />

                  <div className="text-black font-semibold lg:text-2xl">
                    Qualified plumbers
                  </div>
                </div>

                <div className="flex gap-4 items-center">
                  <BulpIcon />

                  <div className="text-black font-semibold lg:text-2xl">
                    Availability within 1 hour <br />
                    from booking
                  </div>
                </div>

                <div className="flex gap-4 items-center">
                  <BulpIcon />

                  <div className="text-black font-semibold lg:text-2xl">
                    Free price estimate
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center py-24">
                <button
                  onClick={scrollToForm}
                  className={`backdrop-blur-sm text-white font-bold text-2xl lg:text-4xl py-4 px-8 lg:py-8 lg:px-32 rounded-xl ring-2 ring-white hover:ring-[#3B82F6] ${
                    isClicked ? 'ring-[#3B82F6]' : ''
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
            <section className="bg-[#D1CFC5] md:bg-white md:border-[#D1CFC5] md:border-4">
              <h2 className="justify-center flex text-2xl font-bold pb-4 pt-8">
                Verified Prague plumber
              </h2>
              <div className="px-8 pb-8 grid md:grid-cols-3 gap-4">
                <div className="flex gap-4 items-center">
                  <PipeIcon />
                  <div className="flex flex-col gap-2">
                    <h3 className="text-lg text-pretty">
                      Repair and maintenance of water pipes, drain cleaning
                    </h3>
                  </div>
                </div>
                <div className="flex gap-4 items-center">
                  <KeyIcon />
                  <div className="flex flex-col gap-2">
                    <h3 className="text-lg text-ellipsis">
                      Replacement and installation of security locks and inserts
                    </h3>
                  </div>
                </div>
                <div className="flex gap-4 items-center">
                  <FurnitureIcon />
                  <div className="flex flex-col gap-2">
                    <h3 className="text-lg font-medium">
                      Installation of home accessories (shelves, holders,
                      hangers, ...)
                    </h3>
                  </div>
                </div>
                <div className="flex gap-4 items-center">
                  <LampIcon />
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
            <h2 className="justify-center flex text-2xl font-bold pb-8 pt-4">
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
          <section className="bg-[#D1CFC5] md:bg-white md:border-[#D1CFC5] md:border-4 text-pretty">
            <h2 className="justify-center flex text-2xl font-bold py-8">
              Why choose Plumber Prague
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
          <section className="px-8 grid gap-4">
            <h2 className="justify-center flex text-2xl font-bold pb-4 pt-4">
              Where we operate
            </h2>
            <p className="justify-center flex text-lg font-extralight pb-4 text-pretty">
              Prague 1 | Prague 2 | Prague 3 | Prague 4 | Prague 5 | Prague 6 |
              Prague 7 | Prague 8 | Prague 9 | Prague 10
            </p>
            <div className="grid justify-center" ref={formRef}>
              <h2 className="justify-center flex text-2xl font-bold pb-4">
                Fill out the form
              </h2>
              <ContactForm onSuccess={handleFormSuccess} />
            </div>
          </section>
        </main>
        <footer className="px-8 grid md:block gap-2 items-center justify-center border-t border-t-[#D1CFC5]">
          <div className="flex justify-between bg-white pt-8 pb-4 items-center text-black font-bold text-3xl">
            <div>PLUMBER</div>
            <div>PRAGUE</div>
          </div>
          <div className="grid gap-4">
            <div className="flex flex-col gap-2 md:justify-between">
              <a
                className="flex items-center gap-2 hover:underline hover:underline-offset-4 md:text-xl lg:text-2xl"
                href=""
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Email us"
              >
                <Image
                  aria-hidden
                  src="/file.svg"
                  alt="File icon"
                  width={16}
                  height={16}
                  loading="lazy"
                />
                plumberprague@gmail.com
              </a>
              <a
                className="flex items-center gap-2 hover:underline hover:underline-offset-4 md:text-xl lg:text-2xl"
                href=""
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Call us"
              >
                <Image
                  aria-hidden
                  src="/window.svg"
                  alt="Window icon"
                  width={16}
                  height={16}
                  loading="lazy"
                />
                + 420 123 456 789
              </a>
            </div>
            <div className="text-xs text-center py-4">
              &copy; 2024 Plumber Prague s.r.o. — All rights reserved.
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
