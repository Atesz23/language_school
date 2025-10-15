import type { Metadata } from "next";
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

import ScrollTopWrapper from "@/components/ScrollTopWrapper";
import AnimationProvider from "@/providers/AnimationProvider";
import { Toaster } from "react-hot-toast";
import SmoothScroll from "@/components/DesignAgency/Animation/SmoothScroll";
import FooterSection from "@/components/DesignAgency/FooterSection";
import HeaderSection from "@/components/DesignAgency/HeaderSection";
import headerData from "@/constant/DesignAgency/header";
import footerData from "@/constant/DesignAgency/footer";
import EnrollmentModal from "@/components/DesignAgency/Modal/EnrollmentModal";

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
      <body 
        suppressHydrationWarning={true}
        className={instrumentSans.className}
      >
        <AnimationProvider>
          <div className="body-wrapper body-design-agency">
            <HeaderSection data={headerData} />
            <SmoothScroll>
              <main>{children}</main>
              <FooterSection data={footerData} />
             
            </SmoothScroll>
             <EnrollmentModal />
          </div>
        </AnimationProvider>
        <ScrollTopWrapper width={20} height={20} className="progress-wrap" />
        <Toaster position="top-center" />
      </body>
    </html>
  );
}