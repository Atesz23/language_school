import Breadcrumb from "@/components/DesignAgency/common/Breadcrumb";
import ChooseUsSection from "@/components/DesignAgency/common/ChooseUsSection";
import ContactMetaSection from "@/components/DesignAgency/Contact/ContactMetaSection";
import ContactSection from "@/components/DesignAgency/Contact/ContactSection";
import { Metadata } from "next";
import { ReactElement } from "react";

// all data
import chooseUsData from "@/constant/DesignAgency/common/choose-us";
import contactData from "@/constant/DesignAgency/Contact/contact";

export const metadata: Metadata = {
  title: "Contact || Școala de Limbi - Învață limbi străine cu noi",
  description:
    "Contactează-ne! Te așteptăm în două locații din București. Scrie-ne, sună-ne sau vizitează-ne personal la oricare dintre școlile noastre.",
  keywords: [
    "școală de limbi contact",
    "învățare limbi străine București",
    "școală de limbi contact",
    "curs de limbi străine",
    "școală de engleză",
    "școală de germană",
    "învățare limbi străine",
    "pregătire examen de limbă",
    "limbă pentru afaceri",
    "școală de limbi București centru",
    "cursuri de limbi",
    "profesor nativ",
  ],
  creator: "Școala de Limbi",
};

const Home = (): ReactElement => {
  return (
    <>
      <div className="body-design-agency">
        <Breadcrumb
          title="Contact"
          subTitle="Language school"
          pageName="CONTACTEAZĂ-NE"
        />
        <ContactMetaSection />
      </div>
      <ContactSection data={contactData} />
      <div className="body-design-agency">
        <ChooseUsSection chooseUSTwo={true} data={chooseUsData} />
      </div>
    </>
  );
};

export default Home;