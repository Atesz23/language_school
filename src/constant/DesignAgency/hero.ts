export interface SocialLink {
  icon: string;
  link: string;
  
}

export interface HeroData {
  titleChange: string[];
  marqueeText: string;
  description: string;
  socials: SocialLink[];
  circleTextImg: string;
  circleIconImg: string;
  mainImage: string;
  buttonLink: string;
}

 
const heroData: HeroData = {
  titleChange: ["VORBEȘTE", "LIBER"],
  marqueeText: "Language Center ",
  description:
    "Comunicare fluentă și sigură pentru a-ți atinge scopurile. Studiază cu noi la Cluj și Târgu Mureș!",
     socials: [
    { icon: "fa-facebook-f", link: "https://www.facebook.com/profile.php?id=100063656467576" },
    { icon: "fa-instagram", link: "https://www.instagram.com/languageschool_08/" },
    { icon: "fa-youtube", link: "https://www.youtube.com/@Languageschool_08" },
    { icon: "fa-tiktok", link: "https://www.tiktok.com/@languageschool08" },
  ],
  circleTextImg: "/assets/imgs/shape/shape-12.webp",
  circleIconImg: "/assets/imgs/shape/shape-13.webp",
  mainImage: "/assets/imgs/gallery/about1.png",
  buttonLink: "/courses",
};


export default heroData;
