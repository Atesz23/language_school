import Breadcrumb from "@/components/DesignAgency/common/Breadcrumb";
import { Metadata } from "next";
import { ReactElement } from "react";
import ServiceSection from "@/components/DesignAgency/ServiceSection";
import ExamData from "@/constant/DesignAgency/service";
export const metadata: Metadata = {
  title: "Examene Internaționale || Language Center Cluj & Mureș - Cambridge, IELTS, ÖSD, ECL",
  description:
    "Centru autorizat pentru examene internaționale: Cambridge (Starters, Movers, Flyers, KET, PET, FCE, CAE, CPE), IELTS, ÖSD (A1-C2) și ECL în limbile engleză, germană, maghiară, română și spaniolă. Certificate recunoscute în 130+ țări.",
  keywords: [
    "examene Cambridge România",
    "certificat Cambridge Cluj",
    "IELTS Târgu Mureș",
    "ÖSD germană Cluj-Napoca",
    "ECL română Mureș",
    "examene internaționale Cluj",
    "examene internaționale Târgu Mureș",
    "certificare lingvistică internațională",
    "Cambridge Young Learners",
    "Cambridge Starters Movers Flyers",
    "Cambridge KET PET FCE",
    "Cambridge CAE CPE",
    "examen IELTS Academic",
    "examen IELTS General Training",
    "certificat ÖSD Austria",
    "ECL limbi străine",
    "pregătire Cambridge Cluj",
    "pregătire IELTS Mureș",
    "echivalare Bacalaureat limbi străine",
    "certificate recunoscute internațional",
  ],
  creator: "Language Center Cluj & Mureș",
};

const ExameneInternationale = (): ReactElement => {
  return (
    <>
      <Breadcrumb
        title="EXAMENE"
        subTitle="Certificate"
        pageName="EXAMENE INTERNAȚIONALE"
      />
      <ServiceSection data={ExamData} />
    </>
  );
};

export default ExameneInternationale;
