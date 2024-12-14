import Image from 'next/image';
import localFont from 'next/font/local';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
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

export default function PriceList() {
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
        <header className="flex justify-between bg-white py-4 px-4 items-center text-black font-bold text-3xl border-b-2 border-b-[#FFCC33]">
          <div>PLUMBER</div>
          <div>PRAGUE</div>
        </header>
        <main className="grid gap-4 lg:gap-8 items-left lg:items-center">
          <section className="px-4 grid gap-4 md:gap-8">
            <h2 className="text-2xl md:text-4xl md:justify-center md:flex font-bold pt-4 md:pt-8">
              Price List
            </h2>
            <div className="overflow-x-auto ">
              <table className="min-w-full border-collapse border border-[#FFCC33]  text-sm text-black md:border-4 text-pretty">
                <thead>
                  <tr className="bg-[#33CC99] text-black">
                    <th className="border border-[#FFCC33] px-2 py-2 md:px-4 md:py-4 text-left font-semibold rounded-tl-lg">
                      Type of Work
                    </th>
                    <th className="border border-[#FFCC33] px-2 py-2 md:px-4 md:py-4 text-left font-semibold">
                      Task
                    </th>
                    <th className="border border-[#FFCC33] px-2 py-2 md:px-4 md:py-4 text-left font-semibold rounded-tr-lg">
                      Price without VAT
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {/* Installation work */}
                  <tr>
                    <td className="border border-[#FFCC33] px-2 py-2 md:px-4 md:py-4">
                      Installation work
                    </td>
                    <td className="border border-[#FFCC33] px-2 py-2 md:px-4 md:py-4">
                      Furniture assembly
                    </td>
                    <td className="border border-[#FFCC33] px-2 py-2 md:px-4 md:py-4">
                      1300 CZK/item
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-[#FFCC33] px-2 py-2 md:px-4 md:py-4">
                      Installation work
                    </td>
                    <td className="border border-[#FFCC33] px-2 py-2 md:px-4 md:py-4">
                      Mounting shelves, mirrors, paintings
                    </td>
                    <td className="border border-[#FFCC33] px-2 py-2 md:px-4 md:py-4">
                      600 CZK/item
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-[#FFCC33] px-2 py-2 md:px-4 md:py-4">
                      Installation work
                    </td>
                    <td className="border border-[#FFCC33] px-2 py-2 md:px-4 md:py-4">
                      Hanging a TV on the wall
                    </td>
                    <td className="border border-[#FFCC33] px-2 py-2 md:px-4 md:py-4">
                      1500 CZK
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-[#FFCC33] px-2 py-2 md:px-4 md:py-4">
                      Installation work
                    </td>
                    <td className="border border-[#FFCC33] px-2 py-2 md:px-4 md:py-4">
                      Hanging curtain rods and curtains
                    </td>
                    <td className="border border-[#FFCC33] px-2 py-2 md:px-4 md:py-4">
                      700 CZK/rod
                    </td>
                  </tr>

                  {/* Plumbing work */}
                  <tr>
                    <td className="border border-[#FFCC33] px-2 py-2 md:px-4 md:py-4">
                      Plumbing work
                    </td>
                    <td className="border border-[#FFCC33] px-2 py-2 md:px-4 md:py-4">
                      Repairing a leaking toilet
                    </td>
                    <td className="border border-[#FFCC33] px-2 py-2 md:px-4 md:py-4">
                      1200 CZK
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-[#FFCC33] px-2 py-2 md:px-4 md:py-4">
                      Plumbing work
                    </td>
                    <td className="border border-[#FFCC33] px-2 py-2 md:px-4 md:py-4">
                      Fixing a dripping faucet
                    </td>
                    <td className="border border-[#FFCC33] px-2 py-2 md:px-4 md:py-4">
                      800 CZK
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-[#FFCC33] px-2 py-2 md:px-4 md:py-4">
                      Plumbing work
                    </td>
                    <td className="border border-[#FFCC33] px-2 py-2 md:px-4 md:py-4">
                      Installing a washing machine or dishwasher
                    </td>
                    <td className="border border-[#FFCC33] px-2 py-2 md:px-4 md:py-4">
                      1500 CZK/item
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-[#FFCC33] px-2 py-2 md:px-4 md:py-4">
                      Plumbing work
                    </td>
                    <td className="border border-[#FFCC33] px-2 py-2 md:px-4 md:py-4">
                      Cleaning traps (siphons)
                    </td>
                    <td className="border border-[#FFCC33] px-2 py-2 md:px-4 md:py-4">
                      600 CZK/item
                    </td>
                  </tr>

                  {/* Electrical work */}
                  <tr>
                    <td className="border border-[#FFCC33] px-2 py-2 md:px-4 md:py-4">
                      Electrical work
                    </td>
                    <td className="border border-[#FFCC33] px-2 py-2 md:px-4 md:py-4">
                      Replacing a bulb, outlet, switch
                    </td>
                    <td className="border border-[#FFCC33] px-2 py-2 md:px-4 md:py-4">
                      400 CZK/item
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-[#FFCC33] px-2 py-2 md:px-4 md:py-4">
                      Electrical work
                    </td>
                    <td className="border border-[#FFCC33] px-2 py-2 md:px-4 md:py-4">
                      Installing light fixtures
                    </td>
                    <td className="border border-[#FFCC33] px-2 py-2 md:px-4 md:py-4">
                      1300 CZK/item
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-[#FFCC33] px-2 py-2 md:px-4 md:py-4">
                      Electrical work
                    </td>
                    <td className="border border-[#FFCC33] px-2 py-2 md:px-4 md:py-4">
                      Connecting appliances
                    </td>
                    <td className="border border-[#FFCC33] px-2 py-2 md:px-4 md:py-4">
                      1000 CZK/appliance
                    </td>
                  </tr>

                  {/* Painting and decorating work */}
                  <tr>
                    <td className="border border-[#FFCC33] px-2 py-2 md:px-4 md:py-4">
                      Painting and decorating work
                    </td>
                    <td className="border border-[#FFCC33] px-2 py-2 md:px-4 md:py-4">
                      Wall repair and painting
                    </td>
                    <td className="border border-[#FFCC33] px-2 py-2 md:px-4 md:py-4">
                      500 CZK/repair
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-[#FFCC33] px-2 py-2 md:px-4 md:py-4">
                      Painting and decorating work
                    </td>
                    <td className="border border-[#FFCC33] px-2 py-2 md:px-4 md:py-4">
                      Local painting
                    </td>
                    <td className="border border-[#FFCC33] px-2 py-2 md:px-4 md:py-4">
                      200 CZK/m²
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-[#FFCC33] px-2 py-2 md:px-4 md:py-4">
                      Painting and decorating work
                    </td>
                    <td className="border border-[#FFCC33] px-2 py-2 md:px-4 md:py-4">
                      Painting doors and window frames
                    </td>
                    <td className="border border-[#FFCC33] px-2 py-2 md:px-4 md:py-4">
                      1000 CZK/item
                    </td>
                  </tr>

                  {/* Locksmith work */}
                  <tr>
                    <td className="border border-[#FFCC33] px-2 py-2 md:px-4 md:py-4">
                      Locksmith work
                    </td>
                    <td className="border border-[#FFCC33] px-2 py-2 md:px-4 md:py-4">
                      Lock replacement
                    </td>
                    <td className="border border-[#FFCC33] px-2 py-2 md:px-4 md:py-4">
                      1000 CZK
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-[#FFCC33] px-2 py-2 md:px-4 md:py-4">
                      Locksmith work
                    </td>
                    <td className="border border-[#FFCC33] px-2 py-2 md:px-4 md:py-4">
                      Installing a security chain
                    </td>
                    <td className="border border-[#FFCC33] px-2 py-2 md:px-4 md:py-4">
                      600 CZK
                    </td>
                  </tr>

                  {/* Garden and outdoor maintenance */}
                  <tr>
                    <td className="border border-[#FFCC33] px-2 py-2 md:px-4 md:py-4">
                      Garden and outdoor maintenance
                    </td>
                    <td className="border border-[#FFCC33] px-2 py-2 md:px-4 md:py-4">
                      Mowing lawns, trimming bushes
                    </td>
                    <td className="border border-[#FFCC33] px-2 py-2 md:px-4 md:py-4">
                      600 CZK/hour
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-[#FFCC33] px-2 py-2 md:px-4 md:py-4">
                      Garden and outdoor maintenance
                    </td>
                    <td className="border border-[#FFCC33] px-2 py-2 md:px-4 md:py-4">
                      Minor flowerbed maintenance
                    </td>
                    <td className="border border-[#FFCC33] px-2 py-2 md:px-4 md:py-4">
                      600 CZK/hour
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-[#FFCC33] px-2 py-2 md:px-4 md:py-4">
                      Garden and outdoor maintenance
                    </td>
                    <td className="border border-[#FFCC33] px-2 py-2 md:px-4 md:py-4">
                      Fence and gate repairs
                    </td>
                    <td className="border border-[#FFCC33] px-2 py-2 md:px-4 md:py-4">
                      1000 CZK/task
                    </td>
                  </tr>

                  {/* Minor indoor repairs */}
                  <tr>
                    <td className="border border-[#FFCC33] px-2 py-2 md:px-4 md:py-4">
                      Minor indoor repairs
                    </td>
                    <td className="border border-[#FFCC33] px-2 py-2 md:px-4 md:py-4">
                      Repairing doors and hinges
                    </td>
                    <td className="border border-[#FFCC33] px-2 py-2 md:px-4 md:py-4">
                      600 CZK/item
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-[#FFCC33] px-2 py-2 md:px-4 md:py-4">
                      Minor indoor repairs
                    </td>
                    <td className="border border-[#FFCC33] px-2 py-2 md:px-4 md:py-4">
                      Replacing seals
                    </td>
                    <td className="border border-[#FFCC33] px-2 py-2 md:px-4 md:py-4">
                      400 CZK/window/door
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-[#FFCC33] px-2 py-2 md:px-4 md:py-4">
                      Minor indoor repairs
                    </td>
                    <td className="border border-[#FFCC33] px-2 py-2 md:px-4 md:py-4">
                      Kitchen cabinet door maintenance
                    </td>
                    <td className="border border-[#FFCC33] px-2 py-2 md:px-4 md:py-4">
                      600 CZK/door
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-[#FFCC33] px-2 py-2 md:px-4 md:py-4">
                      Minor indoor repairs
                    </td>
                    <td className="border border-[#FFCC33] px-2 py-2 md:px-4 md:py-4">
                      Floor repairs
                    </td>
                    <td className="border border-[#FFCC33] px-2 py-2 md:px-4 md:py-4">
                      700 CZK/m²
                    </td>
                  </tr>

                  {/* Seasonal maintenance */}
                  <tr>
                    <td className="border border-[#FFCC33] px-2 py-2 md:px-4 md:py-4">
                      Seasonal maintenance
                    </td>
                    <td className="border border-[#FFCC33] px-2 py-2 md:px-4 md:py-4">
                      Gutter cleaning and maintenance
                    </td>
                    <td className="border border-[#FFCC33] px-2 py-2 md:px-4 md:py-4">
                      1000 CZK
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-[#FFCC33] px-2 py-2 md:px-4 md:py-4">
                      Seasonal maintenance
                    </td>
                    <td className="border border-[#FFCC33] px-2 py-2 md:px-4 md:py-4">
                      Christmas decoration installation
                    </td>
                    <td className="border border-[#FFCC33] px-2 py-2 md:px-4 md:py-4">
                      1000 CZK/hour
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-[#FFCC33] px-2 py-2 md:px-4 md:py-4 rounded-bl-lg">
                      Seasonal maintenance
                    </td>
                    <td className="border border-[#FFCC33] px-2 py-2 md:px-4 md:py-4">
                      Moving heavy objects
                    </td>
                    <td className="border border-[#FFCC33] px-2 py-2 md:px-4 md:py-4 rounded-br-lg">
                      600 CZK/hour
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
              <h2 className="text-2xl font-bold text-center mb-8">
                Payment Methods
              </h2>
              <div className="grid md:grid-cols-3 gap-4 md:gap-8">
                {/* Cash in CZK and EUR */}
                <div className="p-4 flex flex-col border-[#FFCC33] border-4">
                  <h3 className="text-xl font-semibold mb-2 md:text-center">
                    Cash (CZK & EUR)
                  </h3>
                  <p>
                    Pay with cash in Czech Koruna (CZK) or Euro (EUR). The
                    exchange rate is 1 EUR = 25.5 CZK.
                  </p>
                </div>

                {/* Bank Transfer */}
                <div className="p-4  flex flex-col border-[#FFCC33] border-4">
                  <h3 className="text-xl font-semibold mb-2 md:text-center">
                    Bank Transfer
                  </h3>
                  <p>
                    Make a payment directly to our bank account. We will provide
                    you with the necessary bank details upon request.
                  </p>
                </div>

                {/* Payment on Invoice */}
                <div className="p-4  flex flex-col border-[#FFCC33] border-4">
                  <h3 className="text-xl font-semibold mb-2 md:text-center">
                    Payment on Invoice
                  </h3>
                  <p>
                    Receive an invoice and pay at your convenience. Suitable for
                    businesses and long-term projects.
                  </p>
                </div>

                {/* Credit/Debit Card */}
                <div className="p-4  flex flex-col border-[#FFCC33] border-4">
                  <h3 className="text-xl font-semibold mb-2 md:text-center">
                    Credit/Debit Card
                  </h3>
                  <p>
                    Securely pay using your credit or debit card through our
                    online payment gateway.
                  </p>
                </div>

                {/* QR Payment */}
                <div className="p-4  flex flex-col border-[#FFCC33] border-4">
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

          <section className="px-4 grid gap-4 pt-4">
            <div className="grid justify-center pb-8 gap-4" ref={formRef}>
              <h2 className="justify-center flex text-2xl font-bold pb-4 text-center">
                Click to text your problem on WhatsApp!
              </h2>
              <a
                href="https://chat.whatsapp.com/CjPS5uDuFGp5IeX4gHhKZK"
                className="flex flex-col items-center justify-center gap-8"
              >
                <button className="uppercase text-2xl font-bold border-2 border-[#33CC99] rounded-lg p-4 text-[#33CC99] hover:text-[#FFCC33]">
                  Contact us!
                </button>

                <img src="/qr/whatsapp.png" loading="lazy" width="25%" />
              </a>
            </div>
          </section>
        </main>
        <footer className="px-4 grid md:block gap-2 border-t-2 border-t-[#FFCC33]">
          <div className="flex justify-between bg-white py-4 items-center text-black font-bold text-3xl">
            <div>PLUMBER</div>
            <div>PRAGUE</div>
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
