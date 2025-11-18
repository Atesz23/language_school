"use client";

import React from "react";
import Link from "next/link";

interface IFeature {
  id: number;
  title: string;
  description: string;
  image: string;
  icon: string;
}

const features: IFeature[] = [
  {
    id: 1,
    title: "Interacțiune reală, fără întreruperi",
    description: "Cu sistemul Silent System, fiecare participant comunică direct cu profesorul prin căști speciale, eliminând zgomotele de fundal și distracțiile.",
    image: "/assets/imgs/about/10_1.png",
    icon: "fa-solid fa-comments"
  },
  {
    id: 2,
    title: "Sunet clar, doar pentru tine",
    description: "Tehnologia avansată asigură o calitate audio perfectă, astfel încât fiecare cuvânt și pronunție să fie clar percepută.",
    image: "/assets/imgs/about/4.jpeg",
    icon: "fa-solid fa-headphones"
  },
  {
    id: 3,
    title: "Învățare rapidă prin focus constant",
    description: "Concentrarea totală și exercițiile interactive conduc la rezultate vizibile încă din primele săptămâni de curs.",
    image: "/assets/imgs/about/6_1.png",
    icon: "fa-solid fa-bolt"
  }
];

const FeaturesSection: React.FC = () => {
  return (
    <section className="blog-area-2 features-section">
      <div className="container">
        <div className="blog-area-2-inner section-spacing">
          {/* Header */}
          <div className="section-header">
            <div className="section-title-wrapper fade-anim" suppressHydrationWarning={true}>
              <div className="subtitle-wrapper">
                <span className="section-subtitle">🎧 TEHNOLOGIE MODERNĂ</span>
              </div>
              <div className="title-wrapper">
                <h2 className="section-title">Învață o limbă străină… în liniște, dar cu maximum de eficiență!</h2>
              </div>
              <div className="description-wrapper" style={{ marginTop: '20px' }}>
                <p style={{ fontSize: '18px', lineHeight: '1.7', color: '#666', maxWidth: '800px' }}>
                  La noi, cursurile și examenele nu sunt doar moderne — sunt revoluționare!
                  Datorită sistemului <strong>Silent System</strong>, folosind căști speciale, fiecare participant este 100% concentrat, fără zgomote, fără distrageri.
                </p>
              </div>
            </div>
          </div>

          {/* Features Grid */}
          <div className="blog-wrapper-box fade-anim" suppressHydrationWarning={true}>
            <div className="container">
              <div className="blog-wrapper features-grid">
                {features.map((feature, index) => (
                  <article
                    className="blog-2 feature-card fade-anim"
                    suppressHydrationWarning={true}
                    key={feature.id}
                    data-delay={`${0.3 + index * 0.15}`}
                    data-direction="right"
                  >
                    <div className="thumb">
                      <img src={feature.image} alt={feature.title} />
                      <div className="feature-icon">
                        <i className={feature.icon}></i>
                      </div>
                    </div>
                    <div className="content-wrapper">
                      <div className="content">
                        <h3 className="title">
                          {feature.title}
                        </h3>
                        <p className="description">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom CTA Section */}
          <div className="features-cta fade-anim" suppressHydrationWarning={true}>
            <div className="cta-content">
              <h3>🏅 Rezultate vizibile, încă din primele săptămâni</h3>
              <p>
                Transformăm sala de curs într-o experiență modernă și distractivă — exact cum merită să fie învățarea unei limbi străine!
              </p>
              <div className="btn-wrapper">
                <div className="t-btn-group">
                  <Link className="t-btn t-btn-circle" href="/contact">
                    <i className="fa-solid fa-arrow-right"></i>
                  </Link>
                  <Link className="t-btn t-btn-primary" href="/contact">
                    Înscrie-te la un curs
                  </Link>
                  <Link className="t-btn t-btn-circle" href="/contact">
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

export default FeaturesSection;
