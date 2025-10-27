export interface SidebarMenu {
  label: string;
  href?: string;
  children?: SidebarMenu[];
}

export interface SidebarCTA {
  text: string;
  href: string;
}

export interface SidebarContactItem {
  text: string;
  href: string;
}

export interface SidebarContact {
  phone: SidebarContactItem;
  email: SidebarContactItem;
  address: string;
}

export interface SidebarSocial {
  label: string;
  href: string;
}

export interface SidebarData {
  logo: string;
  menus: SidebarMenu[];
  closeIcon: string;
  title: string;
  description: string;
  cta: SidebarCTA;
  ctaIcon: string;
  gallery: string[];
  contact: SidebarContact;
  social: SidebarSocial[];
  footerLogo: string;
}

const sidebar: SidebarData = {

  logo: "/assets/imgs/logo/language_logo_Dark.png",
  menus: [

 { label: "Despre noi", href: "/about" },
   { label: "Cursuri", href: "/courses" },
   { label: "Examene", href: "/exam" },

   { label: "Blog", href: "/blog" },
   { label: "Faq", href: "/faq" },
   { label: "Contact", href: "/contact" },
  ],
  closeIcon: "fas fa-times",
  title: "Hello There!",
  description:
    "We offer comprehensive range of services to help your business thrive.",
  cta: {
    text: "Let’s Connect",
    href: "/design-agency/contact",
  },
  ctaIcon: "fa-solid fa-arrow-right",
  gallery: [
    "/assets/imgs/gallery/image-48.webp",
    "/assets/imgs/gallery/image-49.webp",
    "/assets/imgs/gallery/image-50.webp",
    "/assets/imgs/gallery/image-51.webp",
  ],
  contact: {
    phone: { text: "+40 769 049 473", href: "tel:+40769049473" },
    email: { text: "info@languagecenter.ro", href: "info@languagecenter.ro" },
    address: "Târgu Mureș,str. Dr. Knöpfler Vilmos nr. 2-4,",
  },
  social: [
    { label: "FB", href: "https://www.facebook.com/profile.php?id=100063656467576" },
    { label: "IN", href: "https://www.instagram.com/languageschool_08/" },
    { label: "YT", href: "https://www.youtube.com/@Languageschool_08" },
    { label: "TT", href: "https://www.tiktok.com/@languageschool08" },
  ],
  footerLogo: "/assets/imgs/logo/logo-6.png",
};

export default sidebar;
