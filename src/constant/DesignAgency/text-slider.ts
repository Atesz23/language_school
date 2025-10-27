export interface ITextSlide {
  id: number;
  text: string;
  suffix: string;
}

export interface TextSliderData {
  items: ITextSlide[];
}

const textSliderData: TextSliderData = {
  items: [
    {
      id: 1,
      text: `Învață limbi străine cu încredere și pasiune`,
      suffix: `Certificate internaționale recunoscute în 130+ țări`,
    },
    {
      id: 2,
      text: `Cambridge • IELTS • ÖSD • ECL`,
      suffix: `Centru autorizat de examene internaționale`,
    },
    {
      id: 3,
      text: `De la A1 la C2 - Cursuri pentru toate nivelurile`,
      suffix: `Profesori experimentați și metode moderne`,
    },
    {
      id: 4,
      text: `Engleză • Germană • Spaniolă • Italiană • Franceză`,
      suffix: `Online sau prezențial - Tu alegi cum înveți`,
    },
    {
      id: 5,
      text: `Echivalare automată cu Bacalaureatul`,
      suffix: `Certificate recunoscute de universități internaționale`,
    },
    {
      id: 6,
      text: `Cluj-Napoca & Târgu Mureș`,
      suffix: `Două locații pentru confortul tău`,
    },
    {
      id: 7,
      text: `Învață. Certifică-te. Reușește.`,
      suffix: `Parteneri cu European Examinations Centre`,
    },
    {
      id: 8,
      text: `Japoneză • Română • Maghiară`,
      suffix: `Descoperă lumea prin limbile străine`,
    },
  ],
};

export default textSliderData;