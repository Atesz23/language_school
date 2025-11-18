import type { Metadata } from "next";
import Script from "next/script";
// Font import hozzáadása
import { Instrument_Sans, Poppins, DM_Sans } from "next/font/google";

// Bootstrap css
import "bootstrap/dist/css/bootstrap.min.css";

// FontAwesome Icons css
import "@fortawesome/fontawesome-free/css/all.min.css";

// yet-another-react-lightbox css
import "yet-another-react-lightbox/styles.css";

// swiper slider css
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/effect-cards";
import "swiper/css/thumbs";
import "swiper/css/free-mode";

// Nice-select2 css
import "nice-select2/dist/css/nice-select2.css";

// Template SCSS
import "@/scss/style.scss";

// Globals css - UTOLJÁRA importáljuk hogy felülírja a többit
import "./globals.css";
import "./accessibility.css";
import AnimationProvider from "@/providers/AnimationProvider";
import { Toaster } from "react-hot-toast";
import FooterSection from "@/components/DesignAgency/FooterSection";
import HeaderSection from "@/components/DesignAgency/HeaderSection";
import headerData from "@/constant/DesignAgency/header";
import footerData from "@/constant/DesignAgency/footer";
import AccessibilityWidget from "@/components/AccessibilityWidget";

// Font konfigurálása
const instrumentSans = Instrument_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font_instrumentsans",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font_poppins",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font_dmsans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Language Center Cluj & Mures - Cursuri de Limbi Străine",
  description:
    "Învață Engleză, Germană, Spaniolă, Italiană, Franceză, Japoneză, Română și Maghiară. Cursuri pentru toate nivelurile în Cluj-Napoca și Târgu Mureș.",
  keywords: [
    "cursuri limbi străine Cluj",
    "cursuri engleză Cluj-Napoca",
    "cursuri germană Târgu Mureș",
    "școală limbi străine",
    "Language Center Cluj",
    "Language Center Mures",
    "cursuri spaniolă",
    "cursuri italiană",
    "cursuri franceză",
    "cursuri japoneză",
    "cursuri română străini",
    "cursuri maghiară",
  ],
  creator: "Language Center",
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html
      lang="ro"
      suppressHydrationWarning={true}
      className={`${instrumentSans.variable} ${poppins.variable} ${dmSans.variable}`}
    >
      <head>
        {/* CookieScript - betöltés a head-ben */}
        <Script
          id="cookiescript"
          src="https://cdn.cookie-script.com/s/4ebdbf3de0fbb70979d1406c7480c1d4.js"
          strategy="beforeInteractive"
          charSet="UTF-8"
        />
        {/* Microsoft Clarity */}
        <Script
          id="clarity"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
              })(window, document, "clarity", "script", "u83qsqwjqb");
            `,
          }}
        />
      </head>
      <body
        suppressHydrationWarning={true}
        className={instrumentSans.className}
      >
        <AnimationProvider>
          <div className="body-wrapper body-design-agency">
            <HeaderSection data={headerData} />
            {/* <SmoothScroll>
             
            </SmoothScroll> */}
            <main>{children}</main>
            <FooterSection data={footerData} />
            {/* <EnrollmentModal /> */}
            {/* <ModalDebugButton /> */}
          </div>
        </AnimationProvider>
        {/* <ScrollTopWrapper width={20} height={20} className="progress-wrap" /> */}
        <AccessibilityWidget/>
        <Toaster position="top-center" />
      </body>
    </html>
  );
}