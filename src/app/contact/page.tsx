import Breadcrumb from "@/components/DesignAgency/common/Breadcrumb";
import ContactMetaSection from "@/components/DesignAgency/Contact/ContactMetaSection";
import ContactSection from "@/components/DesignAgency/Contact/ContactSection";
import { Metadata } from "next";
import { ReactElement } from "react";

// all data
import contactData from "@/constant/DesignAgency/Contact/contact";

export const metadata: Metadata = {
  title: "Contact || Language Center Cluj & Mureș - Contactează-ne pentru Cursuri de Limbi",
  description:
    "Contactează Language Center! Suntem disponibili în Cluj-Napoca (Strada Carmen Silva 1-3) și Târgu Mureș (Str. Dr. Knöpfler Vilmos 2-4). Sună-ne la 0775 249 850 (Cluj) sau 0769 049 473 (Mureș). Scrie-ne la info@languagecenter.ro.",
  keywords: [
    "contact Language Center",
    "Language Center Cluj contact",
    "Language Center Mureș contact",
    "telefon Language Center Cluj",
    "telefon Language Center Mureș",
    "adresă Language Center Cluj-Napoca",
    "adresă Language Center Târgu Mureș",
    "email Language Center",
    "programare curs limbi străine",
    "informații înscriere cursuri",
    "școală limbi străine Cluj contact",
    "școală limbi străine Mureș contact",
    "Strada Carmen Silva Cluj",
    "Dr. Knöpfler Vilmos Mureș",
    "0775 249 850",
    "0769 049 473",
    "officecluj@languagecenter.ro",
    "officemures@languagecenter.ro",
    "harta Language Center",
    "locație școală de limbi",
  ],
  creator: "Language Center Cluj & Mureș",
};

const Home = (): ReactElement => {
  return (
    <>
      <Breadcrumb
          title="Contact"
          subTitle="Language school"
          pageName="CONTACTEAZĂ-NE"
        />
        <ContactSection data={contactData} />
        <ContactMetaSection />
      
      {/* <div className="body-design-agency">
        <ChooseUsSection chooseUSTwo={true} data={chooseUsData} />
      </div> */}
    </>
  );
};

export default Home;
