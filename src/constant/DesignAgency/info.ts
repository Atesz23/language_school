export interface IStatItem {
  number: number;
  suffix?: string;
  label: string;
}

export interface InfoData {
  shapeImage1: string;
  shapeImage2: string;
  subtitle: string;
  title: string;
  description: string;
  contactLink: string;
  stats: IStatItem[];
}

const infoData: InfoData = {
  shapeImage1: "/assets/imgs/shape/shape-15.webp",
  shapeImage2: "/assets/imgs/shape/shape-53.webp",
  subtitle: "LIMBA GERMANĂ",
  title: "Centru Autorizat ÖSD pentru Limba Germană",
  description:
    "Centru autorizat pentru pregătirea examenelor ÖSD și TestDaF. Oferim cursuri de limba germană de la nivel A1 până la C2, cu profesori nativi și materiale didactice exclusive create de echipa noastră.",
  contactLink: "/courses",
  stats: [
    { number: 1000, suffix: "+", label: "Persoane formate la cursurile de germană" },
    { number: 50, suffix: "+", label: "Companii cărora le-am livrat cursuri" },
    { number: 10, suffix: "+", label: "Formatori certificați pentru limba germană" },
    { number: 170, suffix: "+", label: "Materiale didactice proprii (scrise și video)" },
  ],
};

export default infoData;