export interface MenuData {
  label: string;
  href?: string;
  children?: MenuData[];
}

export interface HeaderData{
  logo:string;
  offcanvasIcon:string;
  menu:MenuData[];
}

const headerData = {
  logo: "/assets/imgs/logo/language_logo_Dark.png",
  offcanvasIcon: "/assets/imgs/icon/bar.svg",
  menu: [
   
    { label: "Despre noi", href: "/about" },
   { label: "Cursuri", href: "/courses" },
   { label: "Examene", href: "/exam" },

   { label: "Blog", href: "/blog" },
   { label: "Faq", href: "/faq" },
   { label: "Contact", href: "/contact" },
  ],
};

export default headerData;
