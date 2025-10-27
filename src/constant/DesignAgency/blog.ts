export interface IBlogPost {
  id: number;
  tags: string[];
  image: string;
  title: string;
  href: string;
}

export interface BlogData {
  subtitle: string;
  title: string;
  buttonText: string;
  buttonLink: string;
  posts: IBlogPost[];
}

const blog: BlogData = {
  subtitle: "ARTICOLE ȘI NOUTĂȚI",
  title: "Blog și Știri",
  buttonText: "Vezi Toate Articolele",
  buttonLink: "/blog",
  posts: [
    {
      id: 1,
      tags: ["LIMBA ENGLEZĂ", "CONSILIERE"],
      image: "/assets/imgs/blog/1.png",
      title: "5 sfaturi pentru a învăța engleza mai rapid și eficient",
      href: "/blog",
    },
    {
      id: 2,
      tags: ["LIMBA GERMANĂ", "CARIERĂ"],
      image: "/assets/imgs/blog/2.png",
      title: "De ce germana deschide uși în cariera ta profesională",
      href: "/blog",
    },
    {
      id: 3,
      tags: ["LIMBA SPANIOLĂ", "CULTURĂ"],
      image: "/assets/imgs/blog/3.png",
      title: "Span iola - a treia limbă cea mai vorbită din lume",
      href: "/blog",
    },
    {
      id: 4,
      tags: ["LIMBA ITALIANĂ", "CĂLĂTORII"],
      image: "/assets/imgs/blog/4.png",
      title: "Italienește pentru călătorii: fraze esențiale pentru vacanța ta",
      href: "/blog",
    },
    {
      id: 5,
      tags: ["LIMBA FRANCEZĂ", "EDUCAȚIE"],
      image: "/assets/imgs/blog/5.png",
      title: "Franceza în România: oportunități și avantaje",
      href: "/blog",
    },
    {
      id: 6,
      tags: ["LIMBA JAPONEZĂ", "CULTURĂ"],
      image: "/assets/imgs/blog/6.png",
      title: "Introducere în limba japoneză: de unde să începi",
      href: "/blog",
    },
    {
      id: 7,
      tags: ["LIMBA ROMÂNĂ", "INTEGRARE"],
      image: "/assets/imgs/blog/7.png",
      title: "Cursuri de română pentru străini în Cluj și Târgu Mureș",
      href: "/blog",
    },
    {
      id: 8,  
      tags: ["LIMBA MAGHIARĂ", "COMUNICARE"],
      image: "/assets/imgs/blog/8.png",
      title: "Maghiara în viața de zi cu zi: ghid practic pentru începători",
      href: "/blog",
    },
    {
      id: 9,
      tags: ["ȘCOALA NOASTRĂ", "EVENIMENTE"],
      image: "/assets/imgs/blog/blog-3.webp",
      title: "Noutăți de la Language Center Cluj și Târgu Mureș",
      href: "/blog",
    },
    {
      id: 10,
      tags: ["METODE DE ÎNVĂȚARE", "TEHNOLOGIE"],
      image: "/assets/imgs/blog/blog-4.webp",
      title: "Platformele online în învățarea limbilor străine",
      href: "/blog",
    },
    {
      id: 11,
      tags: ["CERTIFICĂRI", "EXAMENE"],
      image: "/assets/imgs/blog/blog-5.webp",
      title: "Certificările internaționale: care sunt cele mai importante",
      href: "/blog",
    },
    {
      id: 12,
      tags: ["COPII", "EDUCAȚIE"],
      image: "/assets/imgs/blog/blog-6.webp",
      title: "Cum să-ți motivezi copilul să învețe o limbă străină",
      href: "/blog",
    },
  ],
};

export default blog;