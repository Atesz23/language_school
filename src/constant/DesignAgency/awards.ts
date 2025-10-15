export interface IAward {
  image: string;
  title: string;
  category: string;
  year: string;
}

export interface IGroup {
  title: string;
  awards: IAward[];
}

export interface AwardData {
  subtitle: string;
  title: string;
  groups: IGroup[];
}

const awardData: AwardData = {
  subtitle: "LIMBILE NOASTRE",
  title: "Cursuri Disponibile",
  groups: [
    {
      title: "Limbi Europene Occidentale",
      awards: [
        {
          image: "/assets/imgs/languages/de.png",
          title: "Limba Germană",
          category: "Deutsch lernen",
          year: "A1 - C2 • TestDaF • Goethe",
        },
        {
          image: "/assets/imgs/languages/en.png",
          title: "Limba Engleză",
          category: "Let's speak English",
          year: "A1 - C2 • IELTS • TOEFL • Cambridge",
        },
        {
          image: "/assets/imgs/languages/fr.png",
          title: "Limba Franceză",
          category: "Parlons français",
          year: "A1 - C2 • DELF • DALF",
        },
      ],
    },
    {
      title: "Limbi Europene Sudice",
      awards: [
        {
          image: "/assets/imgs/languages/sp.png",
          title: "Limba Spaniolă",
          category: "¡Vamos a hablar!",
          year: "A1 - C2 • DELE • Conversație",
        },
        {
          image: "/assets/imgs/languages/it.png",
          title: "Limba Italiană",
          category: "Ciao bello!",
          year: "A1 - C2 • CILS • CELI",
        },
      ],
    },
    {
      title: "Limbi Asiatice",
      awards: [
        {
          image: "/assets/imgs/languages/jp.png",
          title: "Limba Japoneză",
          category: "日本語を話そう",
          year: "N5 - N1 • JLPT • Hiragana • Katakana",
        },
      ],
    },
    {
      title: "Limbi Regionale",
      awards: [
        {
          image: "/assets/imgs/languages/ro.png",
          title: "Limba Română",
          category: "Bine ai venit!",
          year: "Pentru Străini • Integrare • Conversație",
        },
        {
          image: "/assets/imgs/languages/hu.png",
          title: "Limba Maghiară",
          category: "Szia! Tanulj magyarul",
          year: "Începători • Avansat • Business",
        },
      ],
    },
  ],
};

export default awardData;