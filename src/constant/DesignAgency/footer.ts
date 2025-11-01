export interface IFooterCTA {
  subtitle: string;
  title: string;
  btnText: string;
  href: string;
  icon: string;
}

export interface IFooterSocial {
  icon: string;
  link: string;
}

export interface IFooterLink {
  label: string;
  href: string;
}

export interface IFooterWidget {
  title: string;
  links?: IFooterLink[];
  contacts?: {
    phone?: {
      label: string;
      text: string;
      href: string;
    };
    address?: {
      label: string;
      lines: string[];
    };
  };
}

export interface IFooterCopyright {
  year: string;
  company: string;
  link: string;
  terms: IFooterLink;
}

export interface FooterData {
  cta: IFooterCTA;
  logo: string;
  description: string;
  social: IFooterSocial[];
  widgets: IFooterWidget[];
  copyright: IFooterCopyright;
}
const footerData: FooterData = {
  cta: {
    subtitle: "ÎNCEPE ASTĂZI",
    title: "Gata să vorbești fluent?",
    btnText: "Contactează-ne",
    href: "/contact",
    icon: "fa-solid fa-arrow-right",
  },
  logo: "/assets/imgs/logo/language_logo.png",
  description: "De 17 ani transformăm vise lingvistice în realitate. 8 limbi străine, profesori nativi, certificate internaționale - totul pentru succesul tău.",
   social: [
    { icon: "fa-facebook-f", link: "https://www.facebook.com/profile.php?id=100063656467576" },
    { icon: "fa-instagram", link: "https://www.instagram.com/languageschool_08/" },
    { icon: "fa-youtube", link: "https://www.youtube.com/@Languageschool_08" },
    { icon: "fa-tiktok", link: "https://www.tiktok.com/@languageschool08" },
  ],
  widgets: [
    {
      title: "Cursuri",
      links: [
        { label: "Germană", href: "/courses" },
        { label: "Engleză", href: "/courses" },
        { label: "Spaniolă", href: "/courses" },
        { label: "Toate limbile", href: "/courses" },
      ],
    },
    {
      title: "Informații",
      links: [
        { label: "Despre noi", href: "/avout" },
        { label: "Examene ", href: "/exam" },
        { label: "Blog", href: "/blog" },
        
          { label: "Întrebări frecvente", href: "/faq" },
        { label: "Contact", href: "/contact" },
      
      ],
    },
    {
      title: "Contactează-ne",
      contacts: {
        phone: {
          label: "Sună-ne acum",
          text: "+40 769 049 473",
          href: "tel:+40769049473",
        },
        address: {
          label: "Locații",
          lines: ["Târgu Mureș, str. Dr. Knöpfler Vilmos nr. 2-4,", "Cluj-Napoca, str. Carmen Silva 1-3,"],
        },
      },
    },
  ],
  copyright: {
    year: "2025",
    company: "Language Center",
    link: "#",
    terms: { label: "Termeni și Condiții", href: "/" },
  },
};

export default footerData;
