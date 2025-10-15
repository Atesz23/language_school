import Link from "next/link";
import React from "react";

const ContactMetaSection: React.FC = () => {
  return (
    <div className="contact-meta-area">
      <div className="container">
        <div className="section-spacing">
          {/* Első helyszín - Nyelviskola Belváros */}
          <div className="mb-5">
            <h2 className="text-3xl font-bold mb-4 text-center">Belvárosi Nyelviskola</h2>
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
                          <Link href="mailto:belvaros@nyelviskola.hu">belvaros@nyelviskola.hu</Link>
                        </li>
                        <li>
                          <Link href="mailto:info@nyelviskola.hu">info@nyelviskola.hu</Link>
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
                          <Link href="tel:+36301234567">+36 30 123 4567</Link>
                        </li>
                        <li>
                          <Link href="tel:+3612345678">+36 1 234 5678</Link>
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
                    <h3 className="title">Cím</h3>
                    <div className="meta-list">
                      <ul>
                        <li>
                          1052 Budapest,<br />
                          Petőfi Sándor utca 12.<br />
                          I. emelet
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Google Maps - Belváros */}
            <div className="map-container mb-5">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2695.5447377374844!2d19.05844931573454!3d47.49315997917799!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4741dc5f8b5f3b5d%3A0x3c4a52c96f8e7e9e!2sBudapest%2C%20Pet%C5%91fi%20S%C3%A1ndor%20u.%2C%201052!5e0!3m2!1sen!2shu!4v1234567890123!5m2!1sen!2shu"
                width="100%"
                height="400"
                style={{ border: 0, borderRadius: "10px" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

          {/* Második helyszín - Nyelviskola Külváros */}
          <div>
            <h2 className="text-3xl font-bold mb-4 text-center">Külvárosi Nyelviskola</h2>
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
                          <Link href="mailto:kulvaros@nyelviskola.hu">kulvaros@nyelviskola.hu</Link>
                        </li>
                        <li>
                          <Link href="mailto:info@nyelviskola.hu">info@nyelviskola.hu</Link>
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
                          <Link href="tel:+36307654321">+36 30 765 4321</Link>
                        </li>
                        <li>
                          <Link href="tel:+3618765432">+36 1 876 5432</Link>
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
                    <h3 className="title">Cím</h3>
                    <div className="meta-list">
                      <ul>
                        <li>
                          1117 Budapest,<br />
                          Bartók Béla út 45.<br />
                          II. emelet
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Google Maps - Külváros */}
            <div className="map-container">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2697.234567890123!2d19.05123456789012!3d47.47654321098765!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4741dc123456789a%3A0x1234567890abcdef!2sBudapest%2C%20Bart%C3%B3k%20B%C3%A9la%20%C3%BAt%2C%201117!5e0!3m2!1sen!2shu!4v1234567890123!5m2!1sen!2shu"
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