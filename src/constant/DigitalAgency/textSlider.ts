export interface ITextSlide {
  id: number;
  text: string;
  href: string;
  img: string;
}

export interface TextSliderData {
  slides: ITextSlide[];
}


const textSliderData:TextSliderData = {
  slides: [
    {
      id: 1,
      text: "CONTACTEAZĂ-NE",
      href: "/digital-agency/contact",
      img: "/assets/imgs/shape/shape-10.webp",
    },
    {
      id: 2,
      text: "CONTACTEAZĂ-NE",
      href: "/digital-agency/contact",
      img: "/assets/imgs/shape/shape-10.webp",
    },
    {
      id: 3,
      text: "CONTACTEAZĂ-NE",
      href: "/digital-agency/contact",
      img: "/assets/imgs/shape/shape-10.webp",
    },
    {
      id: 4,
      text: "CONTACTEAZĂ-NE",
      href: "/digital-agency/contact",
      img: "/assets/imgs/shape/shape-10.webp",
    },
    {
      id: 5,
      text: "CONTACTEAZĂ-NE",
      href: "/digital-agency/contact",
      img: "/assets/imgs/shape/shape-10.webp",
    },
  ],
};

export default textSliderData;
