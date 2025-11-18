import Breadcrumb from "@/components/DesignAgency/common/Breadcrumb";

import { Metadata } from "next";
import { ReactElement } from "react";

// all data
import coursesData from "@/constant/DesignAgency/courses";
import CoursesSection from "@/components/DesignAgency/CoursesSection";
import BrandSectionFlag from "@/components/CreativeAgency/BrandSection";

export const metadata: Metadata = {
  title: "Cursuri Limbi Străine || Language Center Cluj & Mureș - Online și Prezențial",
  description:
    "Descoperă cursurile noastre de limbi străine: Engleză, Germană, Spaniolă, Italiană, Franceză, Japoneză, Română pentru străini, Maghiară. Cursuri online sau prezențiale, individuale sau în grup pentru toate nivelurile.",
  keywords: [
    "cursuri limbi străine",
    "cursuri engleză Cluj",
    "cursuri germană Mureș",
    "cursuri spaniolă Cluj-Napoca",
    "cursuri italiană Târgu Mureș",
    "cursuri franceză Cluj",
    "cursuri japoneză România",
    "cursuri română pentru străini",
    "cursuri maghiară Cluj",
    "cursuri online limbi străine",
    "cursuri prezențiale limbi",
    "cursuri individuale limbă",
    "cursuri grup limbă străină",
    "Language Center cursuri",
    "A1 A2 B1 B2 C1 C2",
    "CEFR nivele limbă",
    "cursuri business English",
    "cursuri conversație engleză",
    "pregătire examene limbi străine",
    "școală de limbi Cluj-Napoca",
  ],
  creator: "Language Center Cluj & Mureș",
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
      {/* <ProcessSection type="v2" data={processData} /> */}
      <BrandSectionFlag />
    </>
  );
};

export default CoursesPage;