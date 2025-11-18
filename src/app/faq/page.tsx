import Breadcrumb from "@/components/DesignAgency/common/Breadcrumb";
import FaqSection from "@/components/DesignAgency/Faq/FaqSection";
import { Metadata } from "next";
import { ReactElement } from "react";

// all data
import faqData from "@/constant/DesignAgency/faq/faq-data";

export const metadata: Metadata = {
  title: "Întrebări Frecvente || Language Center Cluj & Mureș - FAQ Cursuri și Examene",
  description:
    "Găsește răspunsuri la cele mai frecvente întrebări despre cursurile Language Center. Informații despre niveluri, taxe, examene Cambridge, IELTS, ÖSD, ECL, modalități de înscriere și program de cursuri în Cluj-Napoca și Târgu Mureș.",
  keywords: [
    "FAQ Language Center",
    "întrebări frecvente cursuri limbi",
    "întrebări cursuri engleză",
    "întrebări examene Cambridge",
    "cât costă cursurile de limbi",
    "cum mă înscriu la curs",
    "niveluri limbi străine",
    "durată cursuri limbi",
    "taxe cursuri Language Center",
    "program cursuri Cluj",
    "program cursuri Mureș",
    "examene internaționale FAQ",
    "echivalare Bacalaureat întrebări",
    "profesori nativi întrebări",
    "cursuri online vs prezențial",
    "materiale didactice incluse",
    "certificat absolvire curs",
    "grupuri cursuri limbi",
    "cursuri individuale vs grup",
    "politică anulare cursuri",
  ],
  creator: "Language Center Cluj & Mureș",
};
const Home = (): ReactElement => {
  return (
    <>
      <Breadcrumb
        title="FAQ"
        subTitle="Întrebări frecvente"
        pageName="Întrebări frecvente"
      />
      <FaqSection data={faqData} />
      {/* <ContactSection data={contactData} />
      <FaqSection type={2} imageSrc={2} data={faqData} /> */}
    </>
  );
};
export default Home;
