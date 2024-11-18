import Image from 'next/image';
import localFont from 'next/font/local';
import { PragueIcon } from '../../public/icon/prague';
import { PlumberIcon } from '../../public/icon/plumber';
import { RationgIcon } from '../../public/icon/rating';

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
      className={`${geistSans.variable} ${geistMono.variable} grid container mx-auto items-center pb-20 sm:p-20 font-[family-name:var(--font-geist-sans)]`}
    >
      <header className="flex justify-between bg-white py-4 px-4 items-center text-black font-bold text-3xl">
        <div>PLUMBER</div>
        <div>PRAGUE</div>
      </header>
      <main className="grid gap-8 items-left lg:items-center">
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
            <div className="text-xl grid gap-8">
              <div className="flex gap-8 items-center">
                <Image
                  aria-hidden
                  src="/globe.svg"
                  alt="Globe icon"
                  width={32}
                  height={32}
                />
                <div>Kvalifikování instalatéři</div>
              </div>
              <div className="flex gap-8 items-center">
                <Image
                  aria-hidden
                  src="/globe.svg"
                  alt="Globe icon"
                  width={32}
                  height={32}
                />
                <div>Dostupnost do 1 hodiny od objednání</div>
              </div>
              <div className="flex gap-8 items-center">
                <Image
                  aria-hidden
                  src="/globe.svg"
                  alt="Globe icon"
                  width={32}
                  height={32}
                />
                <div>Cenová kalkulace zdarma</div>
              </div>
            </div>
            <div className="flex items-center justify-center py-24">
              <button className="backdrop-blur-sm text-white font-bold text-2xl py-4 px-16 rounded-xl ring-2 ring-orange-300 hover:ring-4 hover:ring-lime-400 hover:uppercase">
                Zjistit cenu
              </button>
            </div>
          </div>
          <div className="px-4 py-8 grid gap-4">
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
          </div>
        </div>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center px-4">
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
          Learn
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
          Examples
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer>
    </div>
  );
}
