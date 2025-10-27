export interface IFeatures {
  icon: string;
  text: string;
}

export interface AboutData {
  subtitle: string;
  title: string;
  description: string;
  image: string;
  link: string;
  buttonText: string;
  features: IFeatures[];
}

const aboutData: AboutData = {
  subtitle: "DESPRE NOI",
  title: "Centru Autorizat de Pregătire pentru Certificate Internaționale",
  description:
    "Fondată în 2008 din pasiune pentru limbile străine, Language Center este acum o școală dedicată exclusiv educației lingvistice. Prin parteneriatul cu European Examinations Centre București, suntem centru autorizat pentru pregătirea candidaților în vederea obținerii certificatelor internaționale CAMBRIDGE, IELTS, ÖSD și ECL - recunoscute de peste 10.000 de universități și angajatori din întreaga lume.",
  image: "/assets/imgs/gallery/about2.png",
  link: "/about",
  buttonText: "Află Mai Multe",
  features: [
    {
      icon: "/assets/imgs/icon/certificate-icon.webp",
      text: "Certificate recunoscute în 130+ țări și de universități internaționale",
    },
    {
      icon: "/assets/imgs/icon/professional-icon.webp",
      text: "Echivalare automată cu proba de competență lingvistică la Bacalaureat",
    }
  ],
};

export default aboutData;