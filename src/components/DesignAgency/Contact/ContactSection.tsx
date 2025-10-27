"use client";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { IContact } from "@/constant/DesignAgency/Contact/contact";
import Link from "next/link";

interface FormData {
  Nume: string;
  Telefon: string;
  Email: string;
  Limba: string;
  Metoda: string;
  Nivel: string;
  Data: string;
  Ora: string;
  Mesaj: string;
}

interface ContactProps {
  data: IContact;
}

const ContactSection: React.FC<ContactProps> = ({ data: contactData }) => {
  const {
    subtitle,
    title,
    description,
    contactInfo,
    socialLinks,
    buttonText,
  } = contactData;

  const [formData, setFormData] = useState<FormData>({
    Nume: "",
    Telefon: "",
    Email: "",
    Limba: "",
    Metoda: "",
    Nivel: "",
    Data: "",
    Ora: "",
    Mesaj: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { Nume, Telefon, Email, Limba, Metoda, Nivel, Data, Ora, Mesaj } = formData;
    
    if (!Nume.trim() || !Telefon.trim() || !Email.trim() || !Limba || !Metoda || !Nivel || !Data || !Ora || !Mesaj.trim()) {
      toast.error("Vă rugăm să completați toate câmpurile înainte de a trimite.");
      return;
    }

    console.log(formData);
    const toastId = toast.loading("Se trimite mesajul dvs...");
    try {
      await new Promise((r) => setTimeout(r, 900));
      toast.success("Mesajul dvs. a fost trimis cu succes!", {
        id: toastId,
      });
      setFormData({
        Nume: "",
        Telefon: "",
        Email: "",
        Limba: "",
        Metoda: "",
        Nivel: "",
        Data: "",
        Ora: "",
        Mesaj: "",
      });
    } catch {
      toast.error("Ceva nu a mers bine. Vă rugăm să încercați din nou.", { id: toastId });
    }
  };

  return (
    <>
      <section className="contact-area">
        <div className="container">
          <div className="contact-area-inner section-spacing">
            <div className="section-content-wrapper">
              <div className="section-content fade-anim" data-direction="right" suppressHydrationWarning={true}>
                <div className="section-title-wrapper">
                  <div className="subtitle-wrapper">
                    <span className="section-subtitle">{subtitle}</span>
                  </div>
                  <div className="title-wrapper">
                    <h2 className="section-title">{title}</h2>
                  </div>
                </div>
                <div className="text-wrapper">
                  <p className="text">{description}</p>
                </div>
                <div className="contact-list">
                  <ul>
                    {contactInfo.map((item, index) => (
                      <li key={index}>
                        <img src={item?.icon} alt="icon image" />
                        <Link href={item?.link}>{item?.label}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="social-links-wrapper">
                  <p className="title">Urmărește-ne:</p>
                  <div className="social-links">
                    {socialLinks.map((social, index) => (
                      <Link key={index} href={social?.link}>
                        <i className={`fa-brands ${social?.icon}`}></i>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
              <div className="contact-wrap fade-anim" data-direction="left" suppressHydrationWarning={true}>
                <div className="modern-contact-wrapper">
                  <form onSubmit={handleSubmit}>
                    {/* 2 oszlopos layout */}
                    <div className="form-grid-2">
                      {/* Nume */}
                      <div className="modern-form-field">
                        <label htmlFor="Nume">Nume</label>
                        <input
                          type="text"
                          name="Nume"
                          id="Nume"
                          placeholder="Introduceți numele"
                          value={formData.Nume}
                          onChange={handleChange}
                        />
                      </div>

                      {/* Telefon */}
                      <div className="modern-form-field">
                        <label htmlFor="Telefon">Număr de telefon</label>
                        <input
                          type="tel"
                          name="Telefon"
                          id="Telefon"
                          placeholder="+40 700 000 000"
                          value={formData.Telefon}
                          onChange={handleChange}
                        />
                      </div>

                      {/* Email */}
                      <div className="modern-form-field">
                        <label htmlFor="Email">Email</label>
                        <input
                          type="email"
                          name="Email"
                          id="Email"
                          placeholder="exemplu@email.com"
                          value={formData.Email}
                          onChange={handleChange}
                        />
                      </div>

                      {/* Limba */}
                      <div className="modern-form-field">
                        <label htmlFor="Limba">Selectează limba</label>
                        <select
                          name="Limba"
                          id="Limba"
                          value={formData.Limba}
                          onChange={handleChange}
                        >
                          <option value="">Alege limba</option>
                          <option value="Engleză">Engleză</option>
                          <option value="Franceză">Franceză</option>
                          <option value="Germană">Germană</option>
                          <option value="Maghiară">Maghiară</option>
                          <option value="Română">Română</option>
                          <option value="Spaniolă">Spaniolă</option>
                        </select>
                      </div>

                      {/* Metoda */}
                      <div className="modern-form-field">
                        <label htmlFor="Metoda">Metodă</label>
                        <select
                          name="Metoda"
                          id="Metoda"
                          value={formData.Metoda}
                          onChange={handleChange}
                        >
                          <option value="">Alege metoda</option>
                          <option value="Online">Online</option>
                          <option value="Prezențial">Prezențial</option>
                        </select>
                      </div>

                      {/* Nivel */}
                      <div className="modern-form-field">
                        <label htmlFor="Nivel">Nivel actual</label>
                        <select
                          name="Nivel"
                          id="Nivel"
                          value={formData.Nivel}
                          onChange={handleChange}
                        >
                          <option value="">Alege nivelul</option>
                          <option value="A1">A1 - Începător</option>
                          <option value="A2">A2 - Elementar</option>
                          <option value="B1">B1 - Intermediar</option>
                          <option value="B2">B2 - Intermediar superior</option>
                          <option value="C1">C1 - Avansat</option>
                        </select>
                      </div>

                      {/* Data */}
                      <div className="modern-form-field">
                        <label htmlFor="Data">Selectează Data</label>
                        <input
                          type="date"
                          name="Data"
                          id="Data"
                          value={formData.Data}
                          onChange={handleChange}
                        />
                      </div>

                      {/* Ora */}
                      <div className="modern-form-field">
                        <label htmlFor="Ora">Selectează Ora</label>
                        <input
                          type="time"
                          name="Ora"
                          id="Ora"
                          value={formData.Ora}
                          onChange={handleChange}
                        />
                      </div>
                    </div>

                    {/* Mesaj - teljes szélességben */}
                    <div className="modern-form-field">
                      <label htmlFor="Mesaj">Mesaj</label>
                      <textarea
                        name="Mesaj"
                        id="Mesaj"
                        placeholder="Scrie-ne mesajul tău aici..."
                        value={formData.Mesaj}
                        onChange={handleChange}
                        rows={5}
                      />
                    </div>

                    <div className="btn-wrapper w-100 d-flex align-items-center">
                      <div className="t-btn-group mt-4">
                        <button type="submit" className="t-btn t-btn-circle">
                          <i className="fa-solid fa-arrow-right"></i>
                        </button>
                        <button type="submit" className="t-btn t-btn-primary">
                          {buttonText}
                        </button>
                        <button type="submit" className="t-btn t-btn-circle">
                          <i className="fa-solid fa-arrow-right"></i>
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactSection;