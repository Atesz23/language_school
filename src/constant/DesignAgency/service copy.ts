export interface IService {
  id: number;
  title: string;
  titleNative: string; // Natív nyelven írt cím
  number: string;
  link: string;
  shapeImage: string;
  thumb: string;
  thumb2: string;
  description: string;
}

export interface ServiceData {
  subtitle: string;
  title: string;
  services: IService[];
}

const serviceData: ServiceData = {
  subtitle: "LIMBILE NOASTRE",
  title: "8 Limbi Străine la Alegere",
  services: [
    {
      id: 1,
      title: "Limba Germană",
      titleNative: "Deutsch lernen", // Învață germană
      number: "//001",
      link: "/courses",
      shapeImage: "/assets/imgs/shape/shape-40.webp",
      thumb: "/assets/imgs/languages/german-1.webp",
      thumb2: "/assets/imgs/languages/german-2.webp",
      description:
        "Precizie, logică și oportunități. Germana deschide uși în Europa Centrală și te conectează cu una dintre cele mai puternice economii mondiale. Cursuri A1-C2 cu profesori nativi.",
    },
    {
      id: 2,
      title: "Limba Engleză",
      titleNative: "Let's speak English", // Hai să vorbim engleză
      number: "//002",
      link: "/courses",
      shapeImage: "/assets/imgs/shape/shape-40.webp",
      thumb: "/assets/imgs/languages/english-1.webp",
      thumb2: "/assets/imgs/languages/english-2.webp",
      description:
        "Limba globală a business-ului și tehnologiei. De la conversații casual până la prezentări profesionale, pregătim studenți pentru IELTS, TOEFL și Cambridge. Vorbește limba lumii!",
    },
    {
      id: 3,
      title: "Limba Spaniolă",
      titleNative: "¡Vamos a hablar!", // Hai să vorbim!
      number: "//003",
      link: "/courses",
      shapeImage: "/assets/imgs/shape/shape-40.webp",
      thumb: "/assets/imgs/languages/spanish-1.webp",
      thumb2: "/assets/imgs/languages/spanish-2.webp",
      description:
        "Pasiune, ritm și 500 milioane de vorbitori nativi. Spaniola îți deschide porțile către două continente. Învață limba lui Cervantes cu metode interactive și muzică latino.",
    },
    {
      id: 4,
      title: "Limba Italiană",
      titleNative: "Ciao bello!", // Salut frumos!
      number: "//004",
      link: "/courses",
      shapeImage: "/assets/imgs/shape/shape-40.webp",
      thumb: "/assets/imgs/languages/italian-1.webp",
      thumb2: "/assets/imgs/languages/italian-2.webp",
      description:
        "Limba artei, modei și gastronomiei. Italiana e mai mult decât cuvinte - e un stil de viață. Cursuri de la A1 la C2, pregătire CILS și conversație cu profesori din Italia.",
    },
    {
      id: 5,
      title: "Limba Japoneză",
      titleNative: "日本語を話そう", // Nihongo wo hanasou - Vorbim japoneză
      number: "//005",
      link: "/courses",
      shapeImage: "/assets/imgs/shape/shape-40.webp",
      thumb: "/assets/imgs/languages/japanese-1.webp",
      thumb2: "/assets/imgs/languages/japanese-2.webp",
      description:
        "Tradiție și tehnologie într-o limbă fascinantă. Descoperă Hiragana, Katakana și Kanji pas cu pas. Pregătire JLPT cu instructori japonezi certificați. さあ、始めましょう！",
    },
    {
      id: 6,
      title: "Limba Franceză",
      titleNative: "Parlons français", // Vorbim franceză
      number: "//006",
      link: "/courses",
      shapeImage: "/assets/imgs/shape/shape-40.webp",
      thumb: "/assets/imgs/languages/french-1.webp",
      thumb2: "/assets/imgs/languages/french-2.webp",
      description:
        "Eleganță, rafinament și diplomație. Franceza rămâne limba iubirii și culturii înalte. Cursuri pentru toate nivelurile, pregătire DELF/DALF cu profesori din Franța și Belgia.",
    },
    {
      id: 7,
      title: "Limba Română",
      titleNative: "Bine ai venit!", // Bine ai venit!
      number: "//007",
      link: "/courses",
      shapeImage: "/assets/imgs/shape/shape-40.webp",
      thumb: "/assets/imgs/languages/romanian-1.webp",
      thumb2: "/assets/imgs/languages/romanian-2.webp",
      description:
        "Pentru cei care vor să se integreze în România. Limba română pentru străini cu metode moderne, focus pe conversație practică și cultură locală. De la zero la fluent!",
    },
    {
      id: 8,
      title: "Limba Maghiară",
      titleNative: "Szia! Tanulj magyarul", // Szia! Învață maghiară
      number: "//008",
      link: "/courses",
      shapeImage: "/assets/imgs/shape/shape-40.webp",
      thumb: "/assets/imgs/languages/hungarian-1.webp",
      thumb2: "/assets/imgs/languages/hungarian-2.webp",
      description:
        "Limba unică a Transilvaniei. Maghiara îți deschide comunități și oportunități locale. Cursuri practice pentru viața de zi cu zi, business și integrare culturală în regiunea noastră.",
    },
  ],
};

export default serviceData;