import Head from 'next/head';
import localFont from 'next/font/local';
import { useCallback, useRef, useState } from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { GiHamburgerMenu } from 'react-icons/gi';
import { MdMailOutline } from 'react-icons/md';
import { FaPhone } from 'react-icons/fa';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import nextI18NextConfig from '../../next-i18next.config.js';
import { GetStaticProps } from 'next/types';

/* --------------------- ICON IMPORTS --------------------- */
import { PolozeniDlazby } from '../../public/icon/polozeni-dlazby';
import { Obklady } from '../../public/icon/obklady';
import { VchodDvere } from '../../public/icon/vchoddvere';
import { NewSvgComponent } from '../../public/icon/indvere';
import { Serdvere } from '../../public/icon/serdvere';
import { Police } from '../../public/icon/police';
import { Zrcadlo } from '../../public/icon/zrcadlo';
import { Obraz } from '../../public/icon/obraz';
import { Zaclony } from '../../public/icon/zaclony';
import { SerizeniDvere } from '../../public/icon/serizeniDvere';
import { OpravaPolice } from '../../public/icon/opravaPolic';
import { DvirkaSkrin } from '../../public/icon/dvirkaSkrin';
import { PracDeska } from '../../public/icon/pracDeska';
import { Rimsa } from '../../public/icon/rimsa';
import { Stena } from '../../public/icon/stena';

import { Hadice2 } from '../../public/icon/hadice2';
import { Pisoar } from '../../public/icon/pisoar';
import { Toaleta } from '../../public/icon/toaleta';
import { Umyvadlo } from '../../public/icon/umyvadlo';
import { Bidet } from '../../public/icon/bidet';
import { Syfon } from '../../public/icon/syfon';
import { KoupelSkrin } from '../../public/icon/koupelskrin';
import { SprchKout } from '../../public/icon/sprchkout';
import { ElZebrik } from '../../public/icon/elzebrik';
import { Boiler } from '../../public/icon/boiler';
import { Kohout } from '../../public/icon/kohout';
import { OpravaBoiler } from '../../public/icon/opravaBoiler';
import { Odtok } from '../../public/icon/odtok';
import { OpravaZachod } from '../../public/icon/opravaZachod';
import { Splchovadlo } from '../../public/icon/splachovadlo';
import { Prkynko } from '../../public/icon/prkynko';
import { Tlacitko } from '../../public/icon/tlacitko';
import { Hlavice } from '../../public/icon/hlavice';
import { SprchHadice } from '../../public/icon/sprchHadice';
import { Drez } from '../../public/icon/drez';
import { Pracka } from '../../public/icon/pracka';
import { Susicka } from '../../public/icon/susicka';
import { Mycka } from '../../public/icon/mycka';

import { Ventilator } from '../../public/icon/ventilator';
import { Lustr2 } from '../../public/icon/lustr2';
import { TV } from '../../public/icon/tv';
import { Router } from '../../public/icon/router';
import { Zasuvka } from '../../public/icon/zasuvka';
import { Vypinac } from '../../public/icon/vypinac';

import { BilaTechnika } from '../../public/icon/bilatechnika';
import { Deska } from '../../public/icon/deska';
import { Trouba } from '../../public/icon/trouba';

import { Zamek2 } from '../../public/icon/zamek2';
import { Klic } from '../../public/icon/klic';
import { Schranka } from '../../public/icon/schranka';

import { Tapetovani } from '../../public/icon/tapetovani';

import { Vinyl } from '../../public/icon/vinyl';
import { Koberec } from '../../public/icon/koberec';
import { LepenyKoberec } from '../../public/icon/lepenyKoberec';
import { OdstVinyl } from '../../public/icon/odstVinyl';
import { Montaz } from '../../public/icon/montaz';
import { NakejKoberec } from '../../public/icon/nakejKoberec';

import { DveMista } from '../../public/icon/2mista';
import { TriMista2 } from '../../public/icon/3mista2';
import { Lmista } from '../../public/icon/Lmista';
import { Umista } from '../../public/icon/Umista';
import { JednaMatrace } from '../../public/icon/matrace1';
import { DveMatrace } from '../../public/icon/matrace2';
import { Zidle } from '../../public/icon/zidle';
import { Sedacka } from '../../public/icon/sedacka';
import { TepKob } from '../../public/icon/tepkob';
import { DlouhyChlup } from '../../public/icon/tepdlouhy';

import { ShoppingCart } from '../../public/icon/nakup';
import path from 'path';

/* --------------------- LOCAL FONTS --------------------- */
const geistSans = localFont({ src: './fonts/GeistVF.woff', variable: '--font-geist-sans', weight: '100 900' });
const geistMono = localFont({ src: './fonts/GeistMonoVF.woff', variable: '--font-geist-mono', weight: '100 900' });

/* --------------------- TYPES --------------------- */
interface Task { task: string; price: string; }

/* --------------------- SECTION ORDER --------------------- */
const sectionOrder = ['construction','plumbing','electro','appliances','locksmith','painting','flooring','upholstery','transport'] as const;
type SectionKey = typeof sectionOrder[number];

/* --------------------- ICON MAP --------------------- */
const iconMap: Record<SectionKey, JSX.Element[]> = {
  construction: [
    <PolozeniDlazby key={0}/>, <Obklady key={1}/>, <VchodDvere key={2}/>, <NewSvgComponent key={3}/>, <Serdvere key={4}/>, <Police key={5}/>, <Zrcadlo key={6}/>, <Obraz key={7}/>, <Zaclony key={8}/>, <SerizeniDvere key={9}/>, <OpravaPolice key={10}/>, <DvirkaSkrin key={11}/>, <PracDeska key={12}/>, <Rimsa key={13}/>, <Stena key={14}/>
  ],
  plumbing: [
    <Hadice2 key={0}/>, <Pisoar key={1}/>, <Toaleta key={2}/>, <Umyvadlo key={3}/>, <Bidet key={4}/>, <Syfon key={5}/>, <KoupelSkrin key={6}/>, <SprchKout key={7}/>, <ElZebrik key={8}/>, <Boiler key={9}/>, <Kohout key={10}/>, <OpravaBoiler key={11}/>, <Stena key={12}/>, <Odtok key={13}/>, <OpravaZachod key={14}/>, <Splchovadlo key={15}/>, <Prkynko key={16}/>, <Tlacitko key={17}/>, <Hlavice key={18}/>, <SprchHadice key={19}/>, <Drez key={20}/>
  ],
  electro: [
    <Ventilator key={0}/>, <Lustr2 key={1}/>, <TV key={2}/>, <Router key={3}/>, <Zasuvka key={4}/>, <Vypinac key={5}/>
  ],
  appliances: [
    <Susicka key={0}/>, <Mycka key={1}/>, <BilaTechnika key={2}/>, <Deska key={3}/>, <Trouba key={4}/>
  ],
  locksmith: [
    <Zamek2 key={0}/>, <Klic key={1}/>, <Schranka key={2}/>
  ],
  painting: [
    <Rimsa key={0}/>, <Tapetovani key={1}/>
  ],
  flooring: [
    <Vinyl key={0}/>, <Koberec key={1}/>, <LepenyKoberec key={2}/>, <Vinyl key={3}/>, <OdstVinyl key={4}/>, <OdstVinyl key={5}/>, <Montaz key={6}/>, <NakejKoberec key={7}/>
  ],
  upholstery: [
    <DveMista key={0}/>, <TriMista2 key={1}/>, <Lmista key={2}/>, <Umista key={3}/>, <JednaMatrace key={4}/>, <Zidle key={5}/>, <Sedacka key={6}/>, <JednaMatrace key={7}/>, <DveMatrace key={8}/>, <TepKob key={9}/>, <DlouhyChlup key={10}/>
  ],
  transport: [
    <ShoppingCart key={0}/>
  ]
};

/* --------------------- COMPONENT --------------------- */
export default function PriceList() {
  const { t } = useTranslation('price-list');
  const { locale } = useRouter();

  const formRef = useRef<HTMLDivElement>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openSection, setOpenSection] = useState<Record<SectionKey, boolean>>(
    sectionOrder.reduce((acc, k) => ({ ...acc, [k]: false }), {} as Record<SectionKey, boolean>)
  );

  const toggleMenu = useCallback(() => setIsMenuOpen(prev => !prev), []);
  const toggleSection = (key: SectionKey) => setOpenSection(prev => ({ ...prev, [key]: !prev[key] }));

  /* ---------- TRANSLATED DATA ---------- */
  const sectionsData: Record<SectionKey, { title: string; tasks: Task[] }> = sectionOrder.reduce((acc, key) => {
    const raw = t(`sections.${key}.tasks`, { returnObjects: true });
    acc[key] = {
      title: t(`sections.${key}.title`),
      tasks: Array.isArray(raw) ? (raw as Task[]) : []
    };
    return acc;
  }, {} as any);

  const paymentOrder = ['cash','transfer','invoice','card','qr'] as const;
  type PaymentKey = typeof paymentOrder[number];
  const paymentData: Record<PaymentKey, { title: string; description: string }> = paymentOrder.reduce((acc, key) => {
    acc[key] = {
      title: t(`paymentMethods.${key}.title`),
      description: t(`paymentMethods.${key}.description`)
    };
    return acc;
  }, {} as any);

  /* ---------- RENDER ---------- */
  return (
    <>
      <Head>
        <title>{t('meta.title')}</title>
        <meta name="description" content={t('meta.description')} />
        <meta name="keywords" content={t('meta.keywords')} />
        <meta property="og:title" content={t('meta.ogTitle')} />
        <meta property="og:description" content={t('meta.ogDescription')} />
      </Head>

      <div className={`${geistSans.variable} ${geistMono.variable} grid container mx-auto pb-4 font-[var(--font-geist-sans)]`}>
        {/* ---------------- HEADER ---------------- */}
        <header className="flex justify-between items-center py-4 px-4 text-3xl font-bold border-b-2 border-blue-500 bg-white">
          <Link href="/" locale={locale} className="hover:text-red-300">YOUR&nbsp;BOB</Link>
          <button onClick={toggleMenu} aria-label="Toggle menu"><GiHamburgerMenu className="hover:fill-red-300" /></button>
        </header>
        {isMenuOpen && (
          <nav className="absolute top-14 z-10 bg-white w-full border-2 border-blue-500 p-4 font-semibold text-xl mx-auto container">
            <ul className="flex flex-col gap-4 text-right uppercase">
              <li><NavItem href="/" labelKey="menu.home" /></li>
              <li><NavItem href="/price-list" labelKey="menu.priceList" /></li>
              <li><NavItem href="/about" labelKey="menu.about" /></li>
              <li className="flex justify-end gap-4 pt-2"><LocaleSwitcher /></li>
            </ul>
          </nav>
        )}

        {/* ---------------- MAIN ---------------- */}
        <main className="grid gap-4 lg:gap-8">
          <section className="px-4 grid gap-4 md:gap-8">
            <h2 className="text-2xl md:text-4xl text-center font-bold pt-4 md:pt-8 uppercase">{t('menu.priceList')}</h2>

            {sectionOrder.map(sectionKey => {
              const { title, tasks } = sectionsData[sectionKey];
              const icons = iconMap[sectionKey];
              return (
                <div key={sectionKey}>
                  <button onClick={() => toggleSection(sectionKey)} className="border-2 border-blue-500 w-full text-left p-4 lg:p-8 font-bold hover:bg-blue-100 focus:bg-blue-100">
                    <div className="flex justify-between items-center text-xl lg:text-2xl"><p>{title}</p><p className="font-bold">&rarr;</p></div>
                  </button>
                  {openSection[sectionKey] && tasks.length > 0 && (
                    <div className="overflow-x-auto">
                      <table className="min-w-full border-collapse border-2 border-blue-500 text-sm md:text-base text-black">
                        <thead>
                          <tr className="bg-blue-100 md:text-lg lg:text-xl">
                            <th className="border border-blue-500 px-2 md:px-4" />
                            <th className="border border-blue-500 px-2 md:px-4 text-left font-semibold">{t('table.task','Task')}</th>
                            <th className="border border-blue-500 px-2 md:px-4 text-left font-semibold">{t('table.price','Price')}</th>
                          </tr>
                        </thead>
                        <tbody>
                          {tasks.map((row, i) => (
                            <tr key={i}>
                              <td className="border-t border-blue-500 px-2 md:px-4">{icons[i] ?? null}</td>
                              <td className="border border-blue-500 px-2 md:px-4">{row.task}</td>
                              <td className="border border-blue-500 px-2 md:px-4">{row.price}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  )}
                </div>
              );
            })}

            <p className="pt-4 text-sm whitespace-pre-line">{`${t('notes.general')}\n${t('notes.night')}\n${t('notes.weekend')}`}</p>
          </section>

          {/* ---------------- PAYMENT METHODS ---------------- */}
          <section className="pt-4">
            <div className="px-4">
              <h2 className="text-2xl font-bold text-center mb-8 uppercase">{t('paymentTitle','Payment Methods')}</h2>
              <div className="grid md:grid-cols-3 gap-4 md:gap-8">
                {paymentOrder.map(key => (
                  <div key={key} className="p-4 flex flex-col bg-blue-100 md:bg-white md:border-blue-500 md:border-2">
                    <h3 className="text-xl font-semibold mb-2 md:text-center">{paymentData[key].title}</h3>
                    <p>{paymentData[key].description}</p>
                  </div>
                ))}
              </div>
            </div>
            <p className="pt-8 text-left px-4">{t('paymentHelp','If you have any questions regarding payment methods or need assistance, feel free to contact us.')}</p>
          </section>

          {/* ---------------- CONTACT CTA ---------------- */}
          <section className="px-4 grid gap-4">
            <div className="grid justify-center pb-8 gap-4" ref={formRef}>
              <h2 className="text-2xl font-bold pb-4 text-center uppercase text-pretty">{t('contact.title')}</h2>
              <Link href="https://wa.me/message/O2XFDY6ZCZHYD1" className="flex flex-col items-center justify-center gap-8" target="_blank">
                <button className="uppercase text-2xl font-bold border-2 border-blue-500 rounded-lg p-4 text-blue-500 hover:text-red-300 hover:border-red-300">
                  {t('contact.button')}
                </button>
                <img src="/qr/qr.png" loading="lazy" width="25%" alt="WhatsApp QR" />
              </Link>
            </div>
          </section>

          {/* ---------------- FOOTER ---------------- */}
          <footer className="px-4 grid gap-2 border-t-2 border-blue-500">
            <div className="bg-white py-4 text-3xl font-bold text-center lg:text-left">YOUR BOB</div>
            <div className="grid gap-4">
              <div className="flex flex-col md:flex-row gap-2 md:justify-between">
                <FooterLink href="mailto:info@yourbob.cz" icon={<MdMailOutline />} text="Info@yourbob.cz" />
                <FooterLink href="tel:+420704901902" icon={<FaPhone />} text="+420 704 901 902" />
              </div>
              <div className="flex flex-col md:flex-row gap-2 md:justify-between">
                <p className="hover:underline hover:underline-offset-4 md:text-xl lg:text-2xl">{t('footer.address')}</p>
                <p className="hover:underline hover:underline-offset-4 md:text-xl lg:text-2xl">{t('footer.ic')}</p>
              </div>
              <div className="text-xs text-center py-4">{t('footer.rights')}</div>
            </div>
          </footer>
        </main>
      </div>
    </>
  );
}

/* --------------------- HELPERS --------------------- */
function NavItem({ href, labelKey }: { href: string; labelKey: string }) {
  const { t } = useTranslation('price-list');
  const { locale } = useRouter();
  return <Link href={href} locale={locale} className="hover:underline-offset-2 hover:underline hover:decoration-red-300">{t(labelKey)}</Link>;
}

function LocaleSwitcher() {
  const { asPath } = useRouter();
  return (
    <>
      <Link href={asPath} locale="en" aria-label="English" className="hover:shadow-xl hover:shadow-red-300"><span className="fi fi-us" /></Link>
      <Link href={asPath} locale="cs" aria-label="Čeština" className="hover:shadow-xl hover:shadow-red-300"><span className="fi fi-cz" /></Link>
    </>
  );
}

function FooterLink({ href, icon, text }: { href: string; icon: JSX.Element; text: string }) {
  return <a href={href} className="flex items-center gap-2 hover:underline hover:underline-offset-4 md:text-xl lg:text-2xl" target="_blank" rel="noopener noreferrer">{icon}{text}</a>;
}

export const getStaticProps: GetStaticProps = async ({ locale = 'en' }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['price-list'], nextI18NextConfig))
  }
});