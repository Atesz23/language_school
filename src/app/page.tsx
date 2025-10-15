import AboutSection from "@/components/DesignAgency/AboutSection";
import AwardsSection from "@/components/DesignAgency/AwardsSection";
import BlogSection from "@/components/DesignAgency/BlogSection";
import BrandSection from "@/components/DesignAgency/BrandSection";
import HeroSection from "@/components/DesignAgency/HeroSection";
import InfoSection from "@/components/DesignAgency/InfoSection";
import ProcessSection from "@/components/DesignAgency/ProcessSection";
import ServiceSection from "@/components/DesignAgency/ServiceSection";
import TeamSection from "@/components/DesignAgency/TeamSection";
import TestimonialSection from "@/components/DesignAgency/TestimonialSection";
import WorkSection from "@/components/DesignAgency/WorkSection";
import { Metadata } from "next";
import { ReactElement } from "react";

// all data
import VideoSection from "@/components/DesignAgency/About/VideoSection";
import aboutData from "@/constant/DesignAgency/about";
import videoData from "@/constant/DesignAgency/About/video";
import awardData from "@/constant/DesignAgency/awards";
import blogData from "@/constant/DesignAgency/blog";
import brandData from "@/constant/DesignAgency/brand";
import heroData from "@/constant/DesignAgency/hero";
import infoData from "@/constant/DesignAgency/info";
import processData from "@/constant/DesignAgency/process";
import serviceData from "@/constant/DesignAgency/service";
import teamData from "@/constant/DesignAgency/team";
import testimonialData from "@/constant/DesignAgency/testimonial";
import workData from "@/constant/DesignAgency/work";

export const metadata: Metadata = {
  title: "Design Agency || Averto - Creative Digital Agency NextJS Template",
  description:
    "Averto Design Agency template offers a sleek and modern homepage layout tailored for design agencies. Highlight your portfolio, services, and creative expertise with fast performance and SEO-friendly structure.",
  keywords: [
    "Averto design agency",
    "NextJS design agency template",
    "design agency homepage",
    "modern design website",
    "creative design portfolio",
    "digital design agency",
    "responsive design agency site",
    "SEO optimized design agency",
    "NextJS startup template",
    "professional design agency",
    "design services showcase",
    "agency landing page",
    "creative project showcase",
    "frontend development",
    "design firm website",
  ],
  creator: "PixaVation",
  other: {
    developer: "PixaVation",
    section: "Design Agency Page",
  },
};

const Home = (): ReactElement => {
  return (
    <>
      <HeroSection data={heroData} />

      <BrandSection data={brandData} />

      <AboutSection data={aboutData} />
      <VideoSection data={videoData} />
      <AwardsSection data={awardData} />
      <ProcessSection data={processData} />
      <ServiceSection data={serviceData} />

      <WorkSection data={workData} />
      <TestimonialSection data={testimonialData} />
      <TeamSection data={teamData} />
      <InfoSection data={infoData} />

      <BlogSection data={blogData} />
    </>
  );
};
export default Home;
