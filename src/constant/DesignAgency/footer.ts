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
  description: "De 15 ani transformăm vise lingvistice în realitate. 8 limbi străine, profesori nativi, certificate internaționale - totul pentru succesul tău.",
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
        { label: "Germană", href: "/cursuri/germana" },
        { label: "Engleză", href: "/cursuri/engleza" },
        { label: "Spaniolă", href: "/cursuri/spaniola" },
        { label: "Toate limbile", href: "/cursuri" },
      ],
    },
    {
      title: "Informații",
      links: [
        { label: "Despre noi", href: "/despre" },
        { label: "Examene & Certificate", href: "/examene" },
        { label: "Prețuri", href: "/preturi" },
        { label: "Întrebări frecvente", href: "/faq" },
      ],
    },
    {
      title: "Contactează-ne",
      contacts: {
        phone: {
          label: "Sună-ne acum",
          text: "+40 XXX XXX XXX",
          href: "tel:+40XXXXXXXXX",
        },
        address: {
          label: "Locații",
          lines: ["Cluj-Napoca, str. Exemple 15", "Târgu Mureș, str. Exemplu 20"],
        },
      },
    },
  ],
  copyright: {
    year: "2025",
    company: "Language Center",
    link: "#",
    terms: { label: "Termeni și Condiții", href: "/termeni" },
  },
};

export default footerData;
