import AboutSection from "@/components/DesignAgency/AboutSection";
import AwardsSection from "@/components/DesignAgency/AwardsSection";
import BlogSection from "@/components/DesignAgency/BlogSection";
import BrandSection from "@/components/DesignAgency/BrandSection";
import HeroSection from "@/components/DesignAgency/HeroSection";
import InfoSection from "@/components/DesignAgency/InfoSection";
import ProcessSection from "@/components/DesignAgency/ProcessSection";

import TestimonialSection from "@/components/DesignAgency/TestimonialSection";
import WorkSection from "@/components/DesignAgency/WorkSection";
import { Metadata } from "next";
import { ReactElement } from "react";

// all data
import VideoSection from "@/components/DesignAgency/About/VideoSection";
import videoData from "@/constant/DesignAgency/About/video";
import awardData from "@/constant/DesignAgency/awards";
import brandData from "@/constant/DesignAgency/brand";
import heroData from "@/constant/DesignAgency/hero";
import infoData from "@/constant/DesignAgency/info";
import processData from "@/constant/DesignAgency/process";

import testimonialData from "@/constant/DesignAgency/testimonial";

export const metadata: Metadata = {
  title: "Language Center - Cursuri Limbi Străine Cluj & Mureș",
  description:
    "Cursuri de limbi străine în Cluj și Mureș. Centru autorizat Cambridge, IELTS, ÖSD, ECL. Pregătire examene internaționale cu profesori nativi.",
  keywords: [
    "cursuri limbi străine Cluj",
    "cursuri limbi străine Târgu Mureș",
    "Language Center Cluj",
    "Language Center Mureș",
    "cursuri engleză Cluj-Napoca",
    "cursuri germană Târgu Mureș",
    "școală de limbi Cluj",
    "școală de limbi Mureș",
    "examene Cambridge România",
    "examene IELTS Cluj",
    "examene ÖSD Mureș",
    "examene ECL România",
    "certificate internaționale limbi străine",
    "pregătire Bacalaureat limbi străine",
    "cursuri spaniolă Cluj",
    "cursuri franceză Mureș",
    "cursuri italiană Cluj-Napoca",
    "cursuri japoneză România",
    "cursuri română pentru străini",
    "cursuri maghiară Cluj",
    "centru examinare Cambridge",
    "certificare lingvistică internațională",
    "cursuri online limbi străine",
    "cursuri prezențial limbi străine",
    "profesori nativi limbi străine",
  ],
  creator: "Language Center Cluj & Mureș",
  authors: [{ name: "Language Center Cluj & Mureș" }],
  metadataBase: new URL("https://www.languagecenter.ro"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Language Center - Cursuri Limbi Străine Cluj & Mureș",
    description:
      "Cursuri de limbi străine cu profesori nativi. Centru autorizat Cambridge, IELTS, ÖSD, ECL. Pregătire examene pentru toate nivelurile.",
    url: "https://www.languagecenter.ro",
    siteName: "Language Center Cluj & Mureș",
    locale: "ro_RO",
    type: "website",
    images: [
      {
        url: "/assets/imgs/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Language Center Cluj & Mureș",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Language Center - Cursuri Limbi Străine Cluj & Mureș",
    description:
      "Cursuri de limbi străine cu profesori nativi. Centru autorizat Cambridge, IELTS, ÖSD, ECL. Toate nivelurile.",
    images: ["/assets/imgs/twitter-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  other: {
    "contact:phone_cluj": "0775 249 850",
    "contact:phone_mures": "0769 049 473",
    "contact:address_cluj": "str. Carmen Silva 1-3, Cluj-Napoca, România",
    "contact:address_mures": "str. Dr. Knöpfler Vilmos nr. 2-4, Târgu Mureș, România",
    section: "Language School Homepage",
  },
};

const Home = (): ReactElement => {
  return (
    <>
      <HeroSection data={heroData} />

      <BrandSection data={brandData} />

      <AboutSection />
      <InfoSection data={infoData} />

      <AwardsSection data={awardData} />
      
      {/* <ServiceSection data={serviceData} /> */}
      <VideoSection data={videoData} />
      <WorkSection  />
      <TestimonialSection data={testimonialData} />
      <ProcessSection data={processData} />


      <BlogSection />
    </>
  );
};
export default Home;
