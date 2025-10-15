import Breadcrumb from "@/components/DesignAgency/common/Breadcrumb";

import ProcessSection from "@/components/DesignAgency/ProcessSection";

import { Metadata } from "next";
import { ReactElement } from "react";

// all data
import coursesData from "@/constant/DesignAgency/courses";
import processData from "@/constant/DesignAgency/process";
import CoursesSection from "@/components/DesignAgency/CoursesSection";
import BrandSectionFlag from "@/components/CreativeAgency/BrandSection";

export const metadata: Metadata = {
  title: "Cursuri Limbi Străine || Language Center Cluj & Mureș",
  description:
    "Descoperă cursurile noastre de limbi străine: Germană, Engleză, Spaniolă, Italiană, Franceză, Japoneză, Română, Maghiară. Online sau prezențial, individual sau în grup.",
  keywords: [
    "cursuri limbi străine",
    "cursuri germană Cluj",
    "cursuri engleză Târgu Mureș",
    "școală limbi străine",
    "cursuri online",
    "cursuri prezențiale",
    "Language Center",
  ],
  creator: "Language Center",
};

const CoursesPage = (): ReactElement => {
  return (
    <>
      <Breadcrumb
        title="CURSURILE NOASTRE"
        subTitle="Limbi Străine"
        pageName="TOATE CURSURILE"
      />
      <CoursesSection all={true} data={coursesData} />
      <ProcessSection type="v2" data={processData} />
      <BrandSectionFlag />
    </>
  );
};

export default CoursesPage;