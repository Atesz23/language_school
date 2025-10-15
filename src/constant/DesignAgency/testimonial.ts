
export interface ITestimonial {
  text: string;
  image: string;
  name: string;
  designation: string;
}

export interface TestimonialData {
  subtitle: string;
  title: string;
  description: string;
  items: ITestimonial[];
}

const testimonialData: TestimonialData = {
  subtitle: "PĂRERILE STUDENȚILOR NOȘTRI",
  title: "Ce spun absolvenții noștri",
  description:
    "Suntem mândri nu doar de rezultatele obținute, ci și de relațiile pe care le construim cu fiecare student",
  items: [
    {
      text: "Am început să învăț aici două limbi: germană și engleză. Acestea sunt cele mai bune cursuri. Andrea și Bea sunt cele mai bune profesoare. Cursurile organizate aici sunt foarte bune.",
      image: "/assets/imgs/client/student-7.webp",
      name: "Maria Ionuș",
      designation: "Student Germană & Engleză",
    },
    {
      text: "Merg la această școală de limbă de câteva luni și m-a ajutat enorm să-mi îmbunătățesc cunoștințele. Profesorii sunt foarte drăguți și serviabili, orele trec repede. Recomand din inimă acest loc!",
      image: "/assets/imgs/client/student-2.webp",
      name: "Ottilia Lengyel",
      designation: "Studentă Limba Germană",
    },
    {
      text: "Școală de limbi fantastică, structura este complet nouă și toți profesorii sunt foarte amabili și cooperanți. Sunt disponibili să ajute în orice situație. Studiez germana de un an și datorită profesorului meu am atins deja un nivel bun. Recomand foarte mult această școală!",
      image: "/assets/imgs/client/student-3.webp",
      name: "Alessandro Golia",
      designation: "Student Limba Germană",
    },
    {
      text: "Sunt foarte recunoscător acestei școli, am primit o pregătire foarte bună pentru examenele mele de limbă și au reușit! Toată lumea care lucrează aici este prietenoasă, serviabilă și se formează comunități bune în această școală. Recomand tuturor! 😊",
      image: "/assets/imgs/client/student-4.webp",
      name: "János Kis",
      designation: "Absolvent Certificate Internaționale",
    },
    {
      text: "Această școală reprezintă cu siguranță cuvintele profesionalism și seriozitate! Profesorii sunt plini de viață, prietenoși, amabili și motivați să te ajute să atingi cea mai înaltă performanță. Sălile de curs sunt echipate cu tot ce ai nevoie și au un aspect plăcut. Dacă ar trebui să recomand un centru de limbi străine, cu siguranță ar fi acesta!",
      image: "/assets/imgs/client/student-5.webp",
      name: "Ioana Grf",
      designation: "Studentă Multilingvă",
    },
    {
      text: "Profesori profesioniști! Comunitate plăcută, prietenoasă și serviabilă. Recomand cu încredere!",
      image: "/assets/imgs/client/student-6.webp",
      name: "Barnee",
      designation: "Student Language Center",
    },
  ],
};

export default testimonialData;