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
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { BulpIcon } from '../../public/icon/bulp';

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
  return (
    <div
      className={`${geistSans.variable} ${geistMono.variable} grid container mx-auto items-center pb-4 font-[family-name:var(--font-geist-sans)]`}
    >
      <header className="flex justify-between bg-white py-4 px-4 items-center text-black font-bold text-3xl">
        <div>PLUMBER</div>
        <div>PRAGUE</div>
      </header>
      <main className="grid gap-4 items-left lg:items-center">
        <div>
          <div
            className="px-4 py-4"
            style={{
              backgroundImage: `url("img/hero/mobile.webp")`,
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
            }}
          >
            <div className="justify-center flex text-2xl font-bold text-white py-4">
              Ověřený pražský instalatér
            </div>
            `
            <div className="text-xl grid gap-8 px-4">
              <div className="flex gap-4 items-center">
                <BulpIcon />

                <div className="text-black">Kvalifikování instalatéři</div>
              </div>

              <div className="flex gap-4 items-center">
                <BulpIcon />

                <div className="text-black text-wrap">
                  Dostupnost do 1 hodiny <br />
                  od objednání
                </div>
              </div>

              <div className="flex gap-4 items-center">
                <BulpIcon />

                <div className="text-black">Cenová kalkulace zdarma</div>
              </div>
            </div>
            <div className="flex items-center justify-center py-24">
              <button className="backdrop-blur-sm text-white font-bold text-2xl py-4 px-16 rounded-xl ring-2 ring-[#FFE31A] hover:scale-125">
                Zjistit cenu
              </button>
            </div>
          </div>
          <div className="px-8 py-8 grid gap-4">
            <div className="flex gap-8 items-center">
              <PragueIcon />
              <div className="flex flex-col gap-2">
                <div className="text-lg font-medium">Úspěšná místní služba</div>
                <div className="text-sm font-extralight">
                  Působíme v celé Praze.
                </div>
              </div>
            </div>
            <div className="flex gap-8 items-center">
              <PlumberIcon />
              <div className="flex flex-col gap-2">
                <div className="text-lg font-medium">
                  Tisíce hodin odborné práce
                </div>
                <div className="text-sm font-extralight">
                  Neustále posouváme standardy kvality výš.
                </div>
              </div>
            </div>
            <div className="flex gap-8 items-center">
              <RationgIcon />
              <div className="flex flex-col gap-2">
                <div className="text-lg font-medium">
                  Stovky spokojených zákazníků
                </div>
                <div className="text-sm font-extralight">
                  Řešíme vaše potřeby přesně na míru.
                </div>
              </div>
            </div>
            <div className="flex gap-8 items-center">
              <WorkerIcon />
              <div className="flex flex-col gap-2">
                <div className="text-lg font-medium">
                  Vámi ověření instalatéři
                </div>
                <div className="text-sm font-extralight">
                  Doporučují spokojení zákazníci.
                </div>
              </div>
            </div>
          </div>
          <div className="bg-[#D1CFC5]">
            <div className="justify-center flex text-2xl font-bold py-4">
              Ověřený pražský instalatér
            </div>
            <div className="px-8 pb-4 grid gap-4">
              <div className="flex gap-4 items-center">
                <PipeIcon />
                <div className="flex flex-col gap-2">
                  <div className="text-lg text-ellipsis">
                    Oprava a údržba vodovodního potrubí, čištění odpadu
                  </div>
                </div>
              </div>
              <div className="flex gap-4 items-center">
                <KeyIcon />
                <div className="flex flex-col gap-2">
                  <div className="text-lg text-ellipsis">
                    Výměna a instalace bezpečnostních zámků a vložek
                  </div>
                </div>
              </div>
              <div className="flex gap-4 items-center">
                <FurnitureIcon />
                <div className="flex flex-col gap-2">
                  <div className="text-lg font-medium">
                    Instalace domácích doplňků (police, držáky, věšáky, ...)
                  </div>
                </div>
              </div>
              <div className="flex gap-4 items-center">
                <LampIcon />
                <div className="flex flex-col gap-2">
                  <div className="text-lg font-medium">
                    Výměna žárovek a drobná elektroinstalační pomoc
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="justify-center flex text-2xl font-bold pb-4">
            Jak to funguje
          </div>
          <>
            <div className="px-8 pb-4 gap-4 hidden lg:grid">
              <div className="flex flex-col gap-4 items-center">
                <NumberOneIcon />
                <div className="flex flex-col gap-2">
                  <div className="text-lg text-ellipsis">
                    <div className="text-lg text-center font-semibold text-ellipsis">
                      Zadejte objednávku
                    </div>
                  </div>
                  <div className="text-lg text-center font-extralight text-ellipsis">
                    Vyplňte náš jednoduchý online formulář. Následně vás
                    kontaktujeme pro potvrzení objednávky.
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-4 items-center">
                <NumberTwoIcon />
                <div className="flex flex-col gap-2">
                  <div className="text-lg text-ellipsis">
                    <div className="text-lg text-center font-semibold text-ellipsis">
                      Zadejte objednávku
                    </div>
                  </div>
                  <div className="text-lg text-center font-extralight text-ellipsis">
                    Ověřený instalatér dorazí ve vámi zvolený termín a
                    profesionálně provede požadovanou práci.
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-4 items-center">
                <NumberThreeIcon />
                <div className="flex flex-col gap-2">
                  <div className="text-lg text-ellipsis">
                    <div className="text-lg text-center font-semibold text-ellipsis">
                      Hodnodnoťte a užívejte si
                    </div>
                  </div>
                  <div className="text-lg text-center font-extralight text-ellipsis">
                    Po dokončení práce jen převezmete a ohodnotíte našeho
                    odborníka. Platíte až po úspěšném dokončení zakázky.
                  </div>
                </div>
              </div>
            </div>
            <Swiper
              className="lg:hidden max-w-[360px]"
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
                      <div className="text-lg text-center font-semibold text-ellipsis">
                        Zadejte objednávku
                      </div>
                    </div>
                    <div className="text-lg text-center font-extralight text-ellipsis">
                      Vyplňte náš jednoduchý online formulář. Následně vás
                      kontaktujeme pro potvrzení objednávky.
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="flex flex-col gap-4 items-center">
                  <NumberTwoIcon />
                  <div className="flex flex-col gap-2">
                    <div className="text-lg text-ellipsis">
                      <div className="text-lg text-center font-semibold text-ellipsis">
                        Zadejte objednávku
                      </div>
                    </div>
                    <div className="text-lg text-center font-extralight text-ellipsis">
                      Ověřený instalatér dorazí ve vámi zvolený termín a
                      profesionálně provede požadovanou práci.
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="flex flex-col gap-4 items-center">
                  <NumberThreeIcon />
                  <div className="flex flex-col gap-2">
                    <div className="text-lg text-ellipsis">
                      <div className="text-lg text-center font-semibold text-ellipsis">
                        Hodnodnoťte a užívejte si
                      </div>
                    </div>
                    <div className="text-lg text-center font-extralight text-ellipsis">
                      Po dokončení práce jen převezmete a ohodnotíte našeho
                      odborníka. Platíte až po úspěšném dokončení zakázky.
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </>
        </div>
        <div className="bg-[#D1CFC5]">
          <div className="justify-center flex text-2xl font-bold py-4">
            Proč s Plumber Prague
          </div>
          <div className="px-8 pb-4 grid gap-4">
            <div className="flex flex-col gap-4 items-center">
              <ShakingHandsIcon />
              <div className="flex flex-col gap-2">
                <div className="text-lg text-ellipsis">
                  <div className="text-lg text-center font-semibold text-ellipsis">
                    Bezpečnost
                  </div>
                </div>
                <div className="text-lg text-center font-extralight text-ellipsis">
                  Všichni instalatéři jsou ověřeni a hodnoceni zákazníky.
                  Garantujeme, že platíte jen za kvalitně odvedenou práci.
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-4 items-center">
              <TimeIcon />
              <div className="flex flex-col gap-2">
                <div className="text-lg text-ellipsis">
                  <div className="text-lg text-center font-semibold text-ellipsis">
                    Rychlost
                  </div>
                </div>
                <div className="text-lg text-center font-extralight text-ellipsis">
                  Šetříme váš čas. Objednejte dnes, práce může začít už zítra.
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-4 items-center">
              <SupportIcon />
              <div className="flex flex-col gap-2">
                <div className="text-lg text-ellipsis">
                  <div className="text-lg text-center font-semibold text-ellipsis">
                    Podpora
                  </div>
                </div>
                <div className="text-lg text-center font-extralight text-ellipsis">
                  Náš manažer vás provede celým procesem a je vám k dispozici od
                  zadání objednávky až po dokončení práce.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="px-8 grid gap-4">
          <div className="justify-center flex text-2xl font-bold pb-4">
            Kde působíme
          </div>
          <div className="justify-center flex text-lg font-extralight pb-4">
            Praha 1 | Praha 2 | Praha 3 | Praha 4 | Praha 5 | Praha 6 | Praha 7
            | Praha 8 | Praha 9 | Praha 10
          </div>
        </div>
      </main>
      <footer className="px-8 grid gap-2 items-center justify-center border-t border-t-[#D1CFC5]">
        <div className="flex justify-between bg-white py-4 items-center text-black font-bold text-3xl">
          <div>PLUMBER</div>
          <div>PRAGUE</div>
        </div>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          plumberprague@gmail.com
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          + 420 123 456 789
        </a>
        <div className="text-xs">
          Copyright © 2024 Plumber Prague s.r.o. — všechna práva vyhrazena.
        </div>
      </footer>
    </div>
  );
}
