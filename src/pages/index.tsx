import localFont from 'next/font/local';
import Head from 'next/head';
import Link from 'next/link';
import { useCallback, useRef, useState } from 'react';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import nextI18NextConfig from '../../next-i18next.config.js';
import 'leaflet/dist/leaflet.css';
import dynamic from 'next/dynamic';


// -----------------------------------------------------------------------------
//  Icons & assets – keep import paths short and tidy
// -----------------------------------------------------------------------------
import { PlumberIcon }     from 'public/icon/plumber';
import { RationgIcon }     from 'public/icon/rating';
import { WorkerIcon }      from 'public/icon/worker';
import { NumberOneIcon }   from 'public/icon/number-one';
import { NumberTwoIcon }   from 'public/icon/number-two';
import { NumberThreeIcon } from 'public/icon/number-three';
import { ShakingHandsIcon }from 'public/icon/shaking-hands';
import { TimeIcon }        from 'public/icon/time';
import { SupportIcon }     from 'public/icon/support';
import { Lustr }           from 'public/icon/lustr';
import { TriMista }        from 'public/icon/3mista';
import { Zamek }           from 'public/icon/zamek';
import { Hadice }          from 'public/icon/hadice';

import { GiHamburgerMenu } from 'react-icons/gi';
import { FaPhone }         from 'react-icons/fa';
import { MdMailOutline }   from 'react-icons/md';

// -----------------------------------------------------------------------------
//  Swiper – carousel for the “How it works” section (mobile)
// -----------------------------------------------------------------------------
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation }          from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

// flags css (pure‑css tiny dependency – ca 3 kB)
import 'flag-icons/css/flag-icons.min.css';
import { PragueIcon } from 'public/icon/prague';
import { useRouter } from 'next/router.js';
import { GetStaticProps } from 'next/types/index.js';

// -----------------------------------------------------------------------------
//  Local variable fonts (Geist) – one import, two variants
// -----------------------------------------------------------------------------
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

/* =============================================================================
   Page component
=============================================================================*/
export default function Home() {
  const MapExample = dynamic(() => import('../components/mapa'), {
    ssr: false, // DŮLEŽITÉ – Leaflet funguje pouze na klientu
  });
  const { locale }  = useRouter();
  const { t }       = useTranslation('home');

  const formRef = useRef<HTMLDivElement>(null);
  const [isClicked , setIsClicked ] = useState<boolean>(false);
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const toggleMenu   = useCallback(() => setIsMenuOpen(prev => !prev), []);
  const scrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: 'smooth' });
    setIsClicked(true);
  };

  /* -------------------------------------------------------------------------
     JSX
  -------------------------------------------------------------------------*/
  return (
    <>
      {/* ------------------------------ HEAD ------------------------------ */}
      <Head>
        <title>{t('meta.title')}</title>
        <meta name="description" content={t('meta.description')} />
        {/* Open Graph / Twitter */}
        <meta property="og:title"       content={t('meta.title')} />
        <meta property="og:description" content={t('meta.description')} />
        <meta property="og:image"       content="/img/hero/yourbob.jpeg" />
        <meta property="og:url"         content="https://www.yourbob.cz" />
        <meta property="og:type"        content="website" />
        <meta name="twitter:card"        content="summary_large_image" />
        <meta name="twitter:title"       content={t('meta.title')} />
        <meta name="twitter:description" content={t('meta.description')} />
        <meta name="twitter:image"       content="/img/hero/yourbob.jpeg" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* ------------------------------ PAGE WRAPPER ------------------------------ */}
      <div className={`${geistSans.variable} ${geistMono.variable} grid container mx-auto font-[var(--font-geist-sans)]`}>
        {/* --------------------------------------------------------------------- */}
        {/*  HEADER                                                              */}
        {/* --------------------------------------------------------------------- */}
        <header className="flex justify-between items-center py-4 px-4 text-3xl font-bold border-b-2 border-blue-500 bg-white">
          <Link href="/" locale={locale} className="hover:text-red-300">YOUR&nbsp;BOB</Link>
          <button onClick={toggleMenu} aria-label="Toggle menu"><GiHamburgerMenu className="hover:fill-red-300" /></button>
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

        {/* --------------------------------------------------------------------- */}
        {/*  MAIN                                                                */}
        {/* --------------------------------------------------------------------- */}
        <main className="grid gap-8">
          {/* ------------------ HERO ------------------ */}
          <section className="px-4 py-4 lg:py-24 bg-[url('/img/hero/yourbob.jpeg')] bg-cover bg-bottom md:bg-top">
            <h1 className="flex justify-center text-white text-3xl md:text-4xl lg:text-6xl font-bold uppercase pt-4 pb-8 lg:pt-0 lg:pb-16">
              {t('hero.headline')}
            </h1>
            <div className="flex justify-center py-24">
              <button
                onClick={scrollToForm}
                className={`backdrop-blur-sm text-white font-bold uppercase text-2xl lg:text-4xl py-4 px-8 lg:py-8 lg:px-32 rounded-xl ring-2 ring-white transition duration-300 hover:ring-red-300 hover:text-red-300 ${isClicked ? 'ring-blue-500' : ''}`}
              >
                {t('hero.cta')}
              </button>
            </div>
          </section>

          {/* ------------- HIGHLIGHTS ------------- */}
          <section className="px-8 py-8 grid md:grid-cols-3 gap-8 text-pretty lg:border-b-2">
            <Highlight icon={<PragueIcon />}   title="highlights.localService.title"  text="highlights.localService.text"   />
            <Highlight icon={<PlumberIcon />}  title="highlights.hoursWorked.title"   text="highlights.hoursWorked.text"   />
            <Highlight icon={<RationgIcon />}  title="highlights.happyClients.title"  text="highlights.happyClients.text"  />
            <Highlight icon={<WorkerIcon />}   title="highlights.verifiedPros.title"  text="highlights.verifiedPros.text"  />
          </section>

          {/* -------- PLUMBER SECTION -------- */}
          <SectionBox bg>
            <SectionTitle textKey="plumberSection.title" />
            <div className="px-8 pb-8 grid md:grid-cols-3 gap-8 text-pretty">
              <PlumberJob icon={<Hadice />} textKey="plumberSection.jobs.pipes"       />
              <PlumberJob icon={<Zamek />}  textKey="plumberSection.jobs.locks"       />
              <PlumberJob icon={<TriMista />} textKey="plumberSection.jobs.accessories" />
              <PlumberJob icon={<Lustr />}   textKey="plumberSection.jobs.bulb"        />
            </div>
          </SectionBox>

          {/* -------- HOW IT WORKS -------- */}
          <section>
            <SectionTitle textKey="howItWorks.title" />

            {/* desktop grid */}
            <div className="hidden md:grid md:grid-cols-3 gap-4 px-8 pb-4 text-pretty">
              <HowStep icon={<NumberOneIcon />}   idx={1} />
              <HowStep icon={<NumberTwoIcon />}   idx={2} />
              <HowStep icon={<NumberThreeIcon />} idx={3} />
            </div>

            {/* mobile swiper */}
            <div className="md:hidden">
              <Swiper className="max-w-[360px]" modules={[Navigation]} navigation>
                <SwiperSlide><HowStep icon={<NumberOneIcon />}   idx={1} /></SwiperSlide>
                <SwiperSlide><HowStep icon={<NumberTwoIcon />}   idx={2} /></SwiperSlide>
                <SwiperSlide><HowStep icon={<NumberThreeIcon />} idx={3} /></SwiperSlide>
              </Swiper>
            </div>
          </section>

          {/* -------- WHY CHOOSE -------- */}
          <SectionBox bg>
            <SectionTitle textKey="whyChoose.title" />
            <div className="px-8 pb-8 grid gap-4">
              <ChooseUs icon={<ShakingHandsIcon />} titleKey="whyChoose.security.title" textKey="whyChoose.security.text" />
              <ChooseUs icon={<TimeIcon />}        titleKey="whyChoose.speed.title"    textKey="whyChoose.speed.text"    />
              <ChooseUs icon={<SupportIcon />}     titleKey="whyChoose.support.title"  textKey="whyChoose.support.text"  />
            </div>
          </SectionBox>

          <div className='mx-4 lg:mx-0 border-2 rounded-lg '>
            <MapExample />
          </div>

          {/* -------- COVERAGE & WHATSAPP -------- */}
          <section className="px-4 grid gap-4">
            <SectionTitle textKey="coverage.title" />
            <p className="flex justify-center text-lg font-extralight pb-4 text-pretty">{t('coverage.districts')}</p>

            <div className="grid justify-center pb-8 gap-4" ref={formRef}>
              <h2 className="flex justify-center text-2xl font-bold pb-4 text-center uppercase text-pretty">{t('whatsapp.headline')}</h2>
              <a href="https://wa.me/message/O2XFDY6ZCZHYD1" className="flex flex-col items-center gap-8">
                <button className="uppercase text-2xl font-bold border-2 border-blue-500 rounded-lg p-4 text-blue-500 hover:text-red-300 hover:border-red-300">
                  {t('whatsapp.button')}
                </button>
                <img src="/qr/qr.png" loading="lazy" width="25%" alt="WhatsApp QR" />
              </a>
            </div>
          </section>
        </main>

        {/* --------------------------------------------------------------------- */}
        {/*  FOOTER                                                              */}
        {/* --------------------------------------------------------------------- */}
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

/* =============================================================================
   Small presentational helpers – pure functions, typed
=============================================================================*/
function NavItem({ href, labelKey }: { href: string; labelKey: string }) {
  const { t } = useTranslation('home');
  return (
    <Link href={href} className="hover:underline hover:decoration-red-300">
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

function SectionBox({ children, bg }: { children: React.ReactNode; bg?: boolean }) {
  return (
    <section className={bg ? 'bg-blue-100 md:bg-white rounded-lg lg:border-b-2 px-4 text-center' : ''}>{children}</section>
  );
}

function SectionTitle({ textKey }: { textKey: string }) {
  const { t } = useTranslation('home');
  return <h2 className="flex justify-center text-2xl font-bold py-8 uppercase">{t(textKey)}</h2>;
}

function Highlight({ icon, title, text }: { icon: JSX.Element; title: string; text: string }) {
  const { t } = useTranslation('home');
  return (
    <div className="flex items-center gap-8 md:gap-4 lg:gap-12">
      {icon}
      <div className="flex flex-col gap-2">
        <h3 className="text-lg font-medium">{t(title)}</h3>
        <p className="text-sm font-extralight">{t(text)}</p>
      </div>
    </div>
  );
}

function PlumberJob({ icon, textKey }: { icon: JSX.Element; textKey: string }) {
  const { t } = useTranslation('home');
  return (
    <div className="flex items-center gap-4">{icon}<p className="text-lg">{t(textKey)}</p></div>
  );
}

function HowStep({ icon, idx }: { icon: JSX.Element; idx: 1 | 2 | 3 }) {
  const { t } = useTranslation('home');
  return (
    <div className="flex flex-col items-center gap-4">
      {icon}
      <h3 className="text-lg font-semibold text-center">{t(`howItWorks.step${idx}.title`)}</h3>
      <p className="text-lg font-extralight text-center text-pretty">{t(`howItWorks.step${idx}.text`)}</p>
    </div>
  );
}

function ChooseUs({ icon, titleKey, textKey }: { icon: JSX.Element; titleKey: string; textKey: string }) {
  const { t } = useTranslation('home');
  return (
    <div className="flex flex-col items-center gap-4">
      {icon}
      <h3 className="text-lg font-semibold text-center">{t(titleKey)}</h3>
      <p className="text-lg font-extralight text-center text-pretty">{t(textKey)}</p>
    </div>
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

/* =============================================================================
   getStaticProps – loads translation JSON at build‑time
=============================================================================*/
export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale ?? 'en', ['home'], nextI18NextConfig)),
  },
});
