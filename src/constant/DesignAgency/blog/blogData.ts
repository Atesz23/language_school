export interface IBlog {
  id: number;
  tag: string;
  title: string;
  date: string;
  comments: number;
  image: string;
  text: string;
  url: string;
}

const blogData: IBlog[] = [
  {
    id: 1,
    tag: "LIMBA ENGLEZĂ",
    title: "5 sfaturi pentru a învăța engleza mai rapid și eficient",
    date: "15 Octombrie, 2025",
    comments: 12,
    image: "/assets/imgs/blog/1.png",
    text: `Învățarea limbii engleze poate fi o provocare, dar cu metodele potrivite devine mult mai ușoară. Descoperă cele mai eficiente tehnici pentru a-ți îmbunătăți abilitățile de comunicare în engleză, de la ascultarea activă până la conversații practice zilnice.`,
    url: "/blog",
  },
  {
    id: 2,
    tag: "LIMBA GERMANĂ",
    title: "De ce germana deschide uși în cariera ta profesională",
    date: "10 Octombrie, 2025",
    comments: 8,
    image: "/assets/imgs/blog/2.png",
    text: `Germania este una dintre cele mai puternice economii din Europa, iar cunoașterea limbii germane poate fi un avantaj major în cariera ta. Explorează oportunitățile profesionale pe care le oferă limba germană și cum te poate ajuta să avansezi în domeniul tău.`,
    url: "/blog",
  },
  {
    id: 3,
    tag: "LIMBA SPANIOLĂ",
    title: "Spaniola - a treia limbă cea mai vorbită din lume",
    date: "5 Octombrie, 2025",
    comments: 15,
    image: "/assets/imgs/blog/3.png",
    text: `Cu peste 500 de milioane de vorbitori nativi, spaniola este o limbă globală esențială. Descoperă de ce spaniola este atât de populară, unde este vorbită și cum te poate ajuta în călătorii, afaceri și în viața personală.`,
    url: "/blog",
  },
  {
    id: 4,
    tag: "LIMBA ITALIANĂ",
    title: "Italienește pentru călătorii: fraze esențiale pentru vacanța ta",
    date: "1 Octombrie, 2025",
    comments: 6,
   image: "/assets/imgs/blog/4.png",
    text: `Italia este una dintre cele mai populare destinații turistice din lume. Învață frazele esențiale în italiană care îți vor face călătoria mai plăcută și îți vor permite să te conectezi mai bine cu localnicii și cultura italiană.`,
    url: "/blog",
  },
  {
    id: 5,
    tag: "LIMBA FRANCEZĂ",
    title: "Franceza în România: oportunități și avantaje",
    date: "25 Septembrie, 2025",
    comments: 10,
    image: "/assets/imgs/blog/5.png",
    text: `Limba franceză are o importanță deosebită în România, fie că este vorba de educație, carieră sau relații culturale. Descoperă cum cunoașterea limbii franceze îți poate deschide noi oportunități în Cluj și Târgu Mureș.`,
    url: "/blog",
  },
  {
    id: 6,
    tag: "LIMBA JAPONEZĂ",
    title: "Introducere în limba japoneză: de unde să începi",
    date: "20 Septembrie, 2025",
    comments: 18,
    image: "/assets/imgs/blog/6.png",
    text: `Limba japoneză poate părea intimidantă la început, dar cu ghidul nostru vei descoperi că învățarea poate fi o experiență fascinantă. Explorează bazele alfabetului japonez, structura gramaticală și cultura care stă în spatele limbii.`,
    url: "/blog",
  },
  {
    id: 7,
    tag: "LIMBA ROMÂNĂ",
    title: "Cursuri de română pentru străini în Cluj și Târgu Mureș",
    date: "15 Septembrie, 2025",
    comments: 5,
    image: "/assets/imgs/blog/7.png",
    text: `Dorești să înveți limba română? Language Center oferă cursuri specializate pentru străini în Cluj-Napoca și Târgu Mureș. Descoperă programele noastre adaptate nevoilor tale, de la nivel începător până la avansat.`,
    url: "/blog",
  },
  {
    id: 8,
    tag: "LIMBA MAGHIARĂ",
    title: "Maghiara în viața de zi cu zi: ghid practic pentru începători",
    date: "10 Septembrie, 2025",
    comments: 9,
   image: "/assets/imgs/blog/8.png",
    text: `În Târgu Mureș și multe alte zone din România, maghiara este o limbă importantă în viața de zi cu zi. Învață expresiile și frazele de bază care îți vor facilita comunicarea și integrarea în comunitatea locală.`,
    url: "/blog",
  },
  {
    id: 9,
    tag: "ȘCOALA NOASTRĂ",
    title: "Noutăți de la Language Center Cluj și Târgu Mureș",
    date: "5 Septembrie, 2025",
    comments: 20,
    image: "/assets/imgs/blog/blog-22.webp",
    text: `Rămâi la curent cu ultimele noutăți de la Language Center! Află despre cursurile noi, evenimentele speciale, profesorii noștri și succesele elevilor noștri din Cluj-Napoca și Târgu Mureș.`,
    url: "/blog",
  },
  {
    id: 10,
    tag: "METODE DE ÎNVĂȚARE",
    title: "Platformele online în învățarea limbilor străine",
    date: "1 Septembrie, 2025",
    comments: 14,
    image: "/assets/imgs/blog/blog-23.webp",
    text: `Tehnologia modernă a revoluționat modul în care învățăm limbi străine. Descoperă cele mai eficiente platforme și aplicații online care completează cursurile tradiționale și te ajută să progresezi mai rapid.`,
    url: "/blog",
  },
  {
    id: 11,
    tag: "CERTIFICĂRI",
    title: "Certificările internaționale: care sunt cele mai importante",
    date: "25 August, 2025",
    comments: 11,
    image: "/assets/imgs/blog/blog-24.webp",
    text: `De la Cambridge și TOEFL pentru engleză, până la DELF pentru franceză și Goethe-Zertifikat pentru germană - află care sunt certificările recunoscute internațional și cum te pot ajuta în carieră și educație.`,
    url: "/blog",
  },
  {
    id: 12,
    tag: "COPII ȘI TINERI",
    title: "Cum să-ți motivezi copilul să învețe o limbă străină",
    date: "20 August, 2025",
    comments: 7,
    image: "/assets/imgs/blog/blog-25.webp",
    text: `Învățarea unei limbi străine de la o vârstă fragedă aduce beneficii pe termen lung. Descoperă strategiile și metodele prin care poți face procesul de învățare plăcut și motivant pentru copilul tău.`,
    url: "/blog",
  },
];

export default blogData;