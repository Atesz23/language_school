import VideoSection from "@/components/DesignAgency/About/VideoSection";
import AboutSection from "@/components/DesignAgency/AboutSection";
import BlogSection from "@/components/DesignAgency/BlogSection";
import Breadcrumb from "@/components/DesignAgency/common/Breadcrumb";
import TextSliderSection from "@/components/DesignAgency/TextSliderSection";
import type { Metadata } from "next";
import { ReactElement } from "react";

// component data
import videoData from "@/constant/DesignAgency/About/video";
import blogData from "@/constant/DesignAgency/blog";
import textSliderData from "@/constant/DesignAgency/text-slider";
import WorkSection from "@/components/DesignAgency/About/WorkTwoSection";

export const metadata: Metadata = {
  title: "Despre Noi || Language Center Cluj & Mureș - Centru Autorizat de Examene",
  description:
    "Fondată în 2008, Language Center este școală dedicată exclusiv educației lingvistice. Centru autorizat pentru Cambridge, IELTS, ÖSD și ECL. Parteneri cu European Examinations Centre București.",
  keywords: [
    "Language Center despre noi",
    "școală limbi străine Cluj",
    "școală limbi străine Mureș",
    "centru autorizat Cambridge",
    "centru autorizat IELTS",
    "centru examinare ÖSD",
    "centru examinare ECL",
    "European Examinations Centre",
    "istorie Language Center",
    "echipa Language Center",
    "profesori nativi",
    "școală de limbi autorizată",
    "educație lingvistică România",
    "cursuri limbi străine Cluj-Napoca",
    "cursuri limbi străine Târgu Mureș",
    "certificare internațională limbi",
    "școală de engleză autorizată",
    "școală de germană autorizată",
    "misiune Language Center",
    "valori Language Center",
  ],
  creator: "Language Center Cluj & Mureș",
};

const AboutPage = (): ReactElement => {
  return (
    <>
      <div className="body-design-agency">
        <Breadcrumb title="DESPRE NOI" subTitle="Language Center" pageName="DESPRE LANGUAGE CENTER" />
         <WorkSection  />
        <AboutSection />
      </div>
      
      <VideoSection data={videoData} />
      <div className="body-design-agency">
        {/* <BrandSection data={brandData} brandSix={true} /> */}
        {/* <TeamsSection data={teamData} /> */}
        <TextSliderSection data={textSliderData} />
        <BlogSection data={blogData} />
      </div>
    </>
  );
};
export default AboutPage;
