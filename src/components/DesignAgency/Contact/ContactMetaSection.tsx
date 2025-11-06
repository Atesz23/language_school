import Link from "next/link";
import React from "react";

const ContactMetaSection: React.FC = () => {
  return (
    <div className="contact-meta-area">
      <div className="container">
        <div className="section-spacing">
          {/* Első helyszín - Language Center Târgu Mureș */}
          <div className="mb-5">
            <h2 className="text-3xl font-bold mb-4 text-center">Language Center Târgu Mureș</h2>
            <div className="meta-wrapper-box move-anim mb-4" suppressHydrationWarning={true}>
              <div className="meta-wrapper">
                <div className="contact-meta-box">
                  <div className="thumb">
                    <img src="/assets/imgs/icon/icon-22.webp" alt="email icon" />
                  </div>
                  <div className="content">
                    <h3 className="title">Email</h3>
                    <div className="meta-list">
                      <ul>
                        <li>
                          <Link href="mailto:office@languagecenter.ro">office@languagecenter.ro</Link>
                        </li>
                       
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="contact-meta-box active">
                  <div className="thumb">
                    <img src="/assets/imgs/icon/icon-23.webp" alt="phone icon" />
                  </div>
                  <div className="content">
                    <h3 className="title">Telefon</h3>
                    <div className="meta-list">
                      <ul>
                        <li>
                          <Link href="tel:+40769049473">0769 049 473</Link>
                        </li>
                         <li>
                          <Link href="tel:+40365886320">0365 886 320</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="contact-meta-box">
                  <div className="thumb">
                    <img src="/assets/imgs/icon/icon-24.webp" alt="location icon" />
                  </div>
                  <div className="content">
                    <h3 className="title">Adresă</h3>
                    <div className="meta-list">
                      <ul>
                        <li>
                          Târgu Mureș,<br />
                          Str. Dr. Knöpfler Vilmos nr. 2-4,<br />
                          Județul Mureș, România
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Google Maps - Târgu Mureș */}
            <div className="map-container mb-5">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d775.3748404173743!2d24.56098556471395!3d46.547947688597574!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x474bb7ca1b18634f%3A0xf6763eb83711cb71!2sLanguage%20Center%20Mures!5e0!3m2!1shu!2sro!4v1762009686243!5m2!1shu!2sro"
                width="100%"
                height="400"
                style={{ border: 0, borderRadius: "10px" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

          {/* Második helyszín - Language Center Cluj-Napoca */}
          <div>
            <h2 className="text-3xl font-bold mb-4 text-center">Language Center Cluj-Napoca</h2>
            <div className="meta-wrapper-box move-anim mb-4" suppressHydrationWarning={true}>
              <div className="meta-wrapper">
                <div className="contact-meta-box">
                  <div className="thumb">
                    <img src="/assets/imgs/icon/icon-22.webp" alt="email icon" />
                  </div>
                  <div className="content">
                    <h3 className="title">Email</h3>
                    <div className="meta-list">
                      <ul>
                        <li>
                          <Link href="mailto:officecluj@languagecenter.ro">officecluj@languagecenter.ro</Link>
                        </li>
                        
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="contact-meta-box active">
                  <div className="thumb">
                    <img src="/assets/imgs/icon/icon-23.webp" alt="phone icon" />
                  </div>
                  <div className="content">
                    <h3 className="title">Telefon</h3>
                    <div className="meta-list">
                      <ul>
                        <li>
                          <Link href="tel:+40775249850">0775 249 850</Link>
                        </li>
                        <li>
                          <Link href="tel:+40365886320">0365 886 320</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="contact-meta-box">
                  <div className="thumb">
                    <img src="/assets/imgs/icon/icon-24.webp" alt="location icon" />
                  </div>
                  <div className="content">
                    <h3 className="title">Adresă</h3>
                    <div className="meta-list">
                      <ul>
                        <li>
                          Cluj-Napoca,<br />
                          Str. Carmen Silva 1-3,<br />
                          Județul Cluj, România
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Google Maps - Cluj-Napoca */}
            <div className="map-container">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1838.7069912151296!2d23.5976033738801!3d46.75216702736448!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47490d720a4da269%3A0x7ab360fd2c52f80!2sLanguage%20Center%20Cluj!5e0!3m2!1shu!2sro!4v1762009948075!5m2!1shu!2sro"
                width="100%"
                height="400"
                style={{ border: 0, borderRadius: "10px" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactMetaSection;