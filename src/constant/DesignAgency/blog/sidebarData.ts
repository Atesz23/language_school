export interface ISocialLink {
  icon: string;
  url: string;
}

export interface IAuthorInfo {
  name: string;
  designation: string;
  image: string;
  text: string;
  socialLinks: ISocialLink[];
}

export interface IRecentBlog {
  title: string;
  date: string;
  image: string;
  url: string;
}

export const authorInfo: IAuthorInfo = {
  name: "Sarah Thompson",
  designation: "Artist/blogger",
  image: "/assets/imgs/gallery/image-23.webp",
  text: "Sarah Thomson is a passionate artist and blogger, blending creativity with storytelling.",
  socialLinks: [
    { icon: "fa-facebook-f", url: "#" },
    { icon: "fa-twitter", url: "#" },
    { icon: "fa-linkedin-in", url: "#" },
    { icon: "fa-instagram", url: "#" },
  ],
};

export const recentBlogs: IRecentBlog[] = [
  {
   title: "5 sfaturi pentru a învăța engleza mai rapid și eficient",
    date: "February 12, 2025",
   image: "/assets/imgs/blog/1.png",
    url:"/blog",
  },
  {
   title: "De ce germana deschide uși în cariera ta profesională",
    date: "February 12, 2025",
   image: "/assets/imgs/blog/2.png",
    url: "/blog",
  },
  {
     title: "Span iola - a treia limbă cea mai vorbită din lume",
    date: "February 12, 2025",
    image: "/assets/imgs/blog/3.png",
    url: "/blog",
  },
];

export const popularTags: string[] = [
  "Corporate",
  "Design Care",
  "Studio",
  "Industry",
  "UI/UX",
  "Graphics",
];
