export interface IExam {
  id: number;
  title: string;
  number: string;
  link: string;
  shapeImage: string;
  thumb: string;
  thumb2: string;
  description: string;
  languages?: string;
  levels?: string;
}

export interface ExamData {
  subtitle: string;
  title: string;
  exams: IExam[];
}

const examData: ExamData = {
  subtitle: "CERTIFICĂRI INTERNAȚIONALE",
  title: "Examene pe care le poți susține la noi",
  exams: [
    {
      id: 1,
      title: "Cambridge",
      number: "//001",
      link: "/examene/cambridge",
      shapeImage: "/assets/imgs/shape/shape-40.webp",
      thumb: "/assets/imgs/exam/1.png",
      thumb2: "/assets/imgs/exam/1.png",
      description:
        "Certificate recunoscute internațional pentru limba engleză, de la nivel de începător până la avansat.",
      levels: "Starters, Movers, Flyers, KET, PET, FCE, CAE, CPE",
      languages: "Engleză",
    },
    {
      id: 2,
      title: "IELTS",
      number: "//002",
      link: "/examene/ielts",
      shapeImage: "/assets/imgs/shape/shape-40.webp",
      thumb: "/assets/imgs/exam/2.png",
      thumb2: "/assets/imgs/exam/2.png",
      description:
        "Examenul internațional de limba engleză acceptat de peste 11.000 de organizații din întreaga lume pentru studii, muncă și imigrare.",
      levels: "Academic & General Training",
      languages: "Engleză",
    },
    {
      id: 3,
      title: "ÖSD",
      number: "//003",
      link: "/examene/osd",
      shapeImage: "/assets/imgs/shape/shape-40.webp",
      thumb: "/assets/imgs/exam/3.png",
      thumb2: "/assets/imgs/exam/3.png",
      description:
        "Certificat austriac de limba germană recunoscut internațional, valabil pentru studii și muncă în țările germanofone.",
      levels: "A1 - C2",
      languages: "Germană",
    },
    {
      id: 4,
      title: "ECL",
      number: "//004",
      link: "/examene/ecl",
      shapeImage: "/assets/imgs/shape/shape-40.webp",
      thumb: "/assets/imgs/exam/4.png",
      thumb2: "/assets/imgs/exam/4.png",
      description:
        "Certificat european de competență lingvistică disponibil în mai multe limbi, recunoscut de universități și angajatori.",
      levels: "A2 - C1",
      languages: "Engleză, Germană, Maghiară, Română, Spaniolă",
    },
  ],
};

export default examData;