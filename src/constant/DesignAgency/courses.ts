export interface ICourse {
  name: string;
  nativeText: string; // Új mező
  description: string;
  image: string;
  link: string;
  levels: string[];
  features: string[];
}

export interface CoursesData {
  subtitle: string;
  title: string;
  description: string;
  coursesPageLink: string;
  coursesPageLinkTitle: string;
  courses: ICourse[];
}

const coursesData: CoursesData = {
  subtitle: "CURSURILE NOASTRE",
  title: "Predare online sau prezențială, adaptată tuturor vârstelor",
  description: "Individual sau în grup, personalizat după nevoile tale",
  coursesPageLink: "/cursuri",
  coursesPageLinkTitle: "Vezi toate cursurile",
  courses: [
    {
      name: "Cursuri Germană",
      nativeText: "Deutsch lernen macht Spaß!",
      description: "Învață limba germană cu profesori nativi certificați. De la nivel începător până la avansat.",
      image: "/assets/imgs/languages/de.png",
      link: "/cursuri/germana",
      levels: ["A1", "A2", "B1", "B2", "C1"],
      features: ["Online", "Prezențial", "Individual", "Grup"]
    },
    {
      name: "Cursuri Engleză",
      nativeText: "Let's speak English fluently!",
      description: "Cursuri de limba engleză pentru toate nivelurile. Business English și pregătire examene internaționale.",
      image: "/assets/imgs/languages/en.png",
      link: "/cursuri/engleza",
      levels: ["A1", "A2", "B1", "B2", "C1", "C2"],
      features: ["Online", "Prezențial", "Individual", "Grup"]
    },
    {
      name: "Cursuri Spaniolă",
      nativeText: "¡Habla español con pasión!",
      description: "Descoperă limba și cultura spaniolă cu metode moderne și interactive de predare.",
      image: "/assets/imgs/languages/sp.png",
      link: "/cursuri/spaniola",
      levels: ["A1", "A2", "B1", "B2", "C1"],
      features: ["Online", "Prezențial", "Individual", "Grup"]
    },
    {
      name: "Cursuri Italiană",
      nativeText: "Parliamo italiano insieme!",
      description: "Învață italiana cu pasiune! Cursuri interactive cu accent pe conversație și cultură.",
      image: "/assets/imgs/languages/it.png",
      link: "/cursuri/italiana",
      levels: ["A1", "A2", "B1", "B2", "C1"],
      features: ["Online", "Prezențial", "Individual", "Grup"]
    },
    {
      name: "Cursuri Franceză",
      nativeText: "Parlons français avec élégance!",
      description: "Limba franceză predată de profesori experimentați. Pregătire DELF și DALF.",
      image: "/assets/imgs/languages/fr.png",
      link: "/cursuri/franceza",
      levels: ["A1", "A2", "B1", "B2", "C1", "C2"],
      features: ["Online", "Prezențial", "Individual", "Grup"]
    },
    {
      name: "Cursuri Japoneză",
      nativeText: "日本語を一緒に勉強しましょう！",
      description: "Explorează limba și cultura japoneză. Învață hiragana, katakana și kanji pas cu pas.",
      image: "/assets/imgs/languages/jp.png",
      link: "/cursuri/japoneza",
      levels: ["A1", "A2", "B1", "B2"],
      features: ["Online", "Prezențial", "Individual", "Grup"]
    },
    {
      name: "Cursuri Română",
      nativeText: "Învățăm româna împreună!",
      description: "Cursuri de limba română pentru străini. Integrare rapidă și eficientă în societatea românească.",
      image: "/assets/imgs/languages/ro.png",
      link: "/cursuri/romana",
      levels: ["A1", "A2", "B1", "B2", "C1"],
      features: ["Online", "Prezențial", "Individual", "Grup"]
    },
    {
      name: "Cursuri Maghiară",
      nativeText: "Tanuljunk magyarul együtt!",
      description: "Învață limba maghiară cu profesori nativi. Metode moderne și materiale actualizate.",
      image: "/assets/imgs/languages/hu.png",
      link: "/cursuri/maghiara",
      levels: ["A1", "A2", "B1", "B2", "C1"],
      features: ["Online", "Prezențial", "Individual", "Grup"]
    },
  ],
};

export default coursesData;