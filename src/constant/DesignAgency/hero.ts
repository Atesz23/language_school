export interface SocialLink {
  icon: string;
  link: string;
  
}

export interface LocationInfo {
  city: string;
  phone: string;
  email: string;
}

export interface HeroData {
  titleChange: string[];
  marqueeText: string;
  description: string;
  locations: LocationInfo[];
  socials: SocialLink[];
  circleTextImg: string;
  circleIconImg: string;
  mainImage: string;
  buttonLink: string;
}

const heroData: HeroData = {
  titleChange: ["VORBEȘTE", "LIBER"],
  marqueeText: "Language Center ",
  description: "Comunicare fluentă și sigură pentru a-ți atinge scopurile.",
  locations: [
    {
      city: "Cluj-Napoca",
      phone: "+40 775 249 850",
      email: "officecluj@languagecenter.ro"
    },
    {
      city: "Târgu Mureș",
      phone: "+40 769 049 473",
      email: "office@languagecenter.ro"
    }
  ],
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