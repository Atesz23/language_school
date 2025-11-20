"use client";

import React from "react";
import Link from "next/link";
import { Globe2, Award } from "lucide-react";

const AboutSection: React.FC = () => {
  return (
    <section className="about-area-2">
      <div className="container">
        <div className="about-area-2-inner section-spacing-top">
          <div className="section-header">
            <div className="section-title-wrapper fade-anim" suppressHydrationWarning={true}>
              <div className="subtitle-wrapper" suppressHydrationWarning={true}>
                <span className="section-subtitle">DESPRE NOI</span>
              </div>
            </div>
          </div>

          <div className="section-content-wrapper fade-anim" suppressHydrationWarning={true}>
            <div className="thumb">
              <img src="/assets/imgs/gallery/about2.png" alt="Language Center" />
            </div>

            <div className="section-content fade-anim" suppressHydrationWarning={true}>
              <div className="section-title-wrapper" suppressHydrationWarning={true}>
                <div className="title-wrapper" suppressHydrationWarning={true}>
                  <h1 className="section-title" suppressHydrationWarning={true}>
                    Cursuri de Limbi Străine Cluj & Mureș - Centru Autorizat pentru Examene Internaționale
                  </h1>
                </div>
              </div>

              <div className="text-wrapper" suppressHydrationWarning={true}>
                <p className="text" suppressHydrationWarning={true}>
                  Fondată în 2008, <strong>Language Center</strong> este o școală de limbi străine dedicată
                  exclusiv educației lingvistice în <strong>Cluj-Napoca</strong> și <strong>Târgu Mureș</strong>.
                  Oferim cursuri de <strong>limba germană</strong>, <strong>limba engleză</strong>, spaniolă,
                  franceză, italiană, japoneză și maghiară pentru toate nivelurile. Suntem centru autorizat
                  pentru examene internaționale <strong>Cambridge</strong>, <strong>IELTS</strong>,
                  <strong>ÖSD</strong> și <strong>ECL</strong> - certificate recunoscute de peste 10.000
                  de universități și angajatori din întreaga lume.
                </p>
              </div>

              <div className="feature-list" suppressHydrationWarning={true}>
                <div className="feature-list-item" suppressHydrationWarning={true}>
                  <span className="icon" suppressHydrationWarning={true}>
                    <Globe2 size={40} strokeWidth={1.5} />
                  </span>
                  <div className="wrapper" suppressHydrationWarning={true}>
                    <p className="text" suppressHydrationWarning={true}>
                      Certificate recunoscute în 130+ țări și de universități internaționale
                    </p>
                  </div>
                </div>

                <div className="feature-list-item" suppressHydrationWarning={true}>
                  <span className="icon" suppressHydrationWarning={true}>
                    <Award size={40} strokeWidth={1.5} />
                  </span>
                  <div className="wrapper" suppressHydrationWarning={true}>
                    <p className="text" suppressHydrationWarning={true}>
                      Echivalare automată cu proba de competență lingvistică la Bacalaureat
                    </p>
                  </div>
                </div>
              </div>

              <div className="btn-wrapper" suppressHydrationWarning={true}>
                <div className="t-btn-group" suppressHydrationWarning={true}>
                  <Link
                    className="t-btn t-btn-circle"
                    href="/about"
                    suppressHydrationWarning={true}
                  >
                    <i className="fa-solid fa-arrow-right"></i>
                  </Link>
                  <Link
                    className="t-btn t-btn-primary"
                    href="/about"
                    suppressHydrationWarning={true}
                  >
                    Află Mai Multe
                  </Link>
                  <Link
                    className="t-btn t-btn-circle"
                    href="/about"
                    suppressHydrationWarning={true}
                  >
                    <i className="fa-solid fa-arrow-right"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;