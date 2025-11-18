export interface IContact {
  subtitle: string;
  title: string;
  description: string;
  contactInfo: {
    location: string;
    items: {
      icon: string;
      label: string;
      link: string;
    }[];
  }[];
  socialLinks: {
    icon: string;
    link: string;
  }[];
  formFields: {
    icon: string;
    label: string;
    name: string;
    placeholder: string;
    type: string;
  }[];
  buttonText: string;
}

const contactData: IContact = {
  subtitle: "Hai să discutăm",
  title: "Începe-ți călătoria în învățarea limbilor străine",
  description:
    "Suntem aici să te ajutăm să-ți atingi obiectivele lingvistice! Indiferent dacă vrei să înveți o limbă nouă pentru carieră, călătorii sau dezvoltare personală, echipa noastră de profesori experimentați te va ghida pas cu pas. Completează formularul de mai jos și te vom contacta în cel mai scurt timp pentru a discuta despre nevoile tale.",
  contactInfo: [
    {
      location: "Târgu Mureș",
      items: [
        {
          icon: "/assets/imgs/icon/icon-17.webp",
          label: "office@languagecenter.ro",
          link: "mailto:office@languagecenter.ro",
        },
        {
          icon: "/assets/imgs/icon/icon-18.webp",
          label: "+40 769 049 473",
          link: "tel:+40769049473",
        },
      ],
    },
    {
      location: "Cluj-Napoca",
      items: [
        {
          icon: "/assets/imgs/icon/icon-17.webp",
          label: "officecluj@languagecenter.ro",
          link: "mailto:officecluj@languagecenter.ro",
        },
        {
          icon: "/assets/imgs/icon/icon-18.webp",
          label: "+40 775 249 850",
          link: "tel:+40775249850",
        },
      ],
    },
  ],
  socialLinks: [
    { icon: "fa-facebook-f", link: "https://www.facebook.com/profile.php?id=100063656467576" },
    { icon: "fa-instagram", link: "https://www.instagram.com/languageschool_08/" },
    { icon: "fa-youtube", link: "https://www.youtube.com/@Languageschool_08" },
    { icon: "fa-tiktok", link: "https://www.tiktok.com/@languageschool08" },
  ],
  formFields: [
    {
      icon: "/assets/imgs/icon/icon-19.webp",
      label: "Care este numele tău?",
      name: "Name",
      placeholder: "Nume complet",
      type: "text",
    },
    {
      icon: "/assets/imgs/icon/icon-20.webp",
      label: "Care este adresa ta de email?",
      name: "Email",
      placeholder: "Introdu emailul aici",
      type: "email",
    },
    {
      icon: "/assets/imgs/icon/icon-21.webp",
      label: "Ai un mesaj pentru noi?",
      name: "Messages",
      placeholder: "Scrie-ne mesajul tău aici",
      type: "text",
    },
  ],
  buttonText: "Trimite mesajul",
};

export default contactData;
