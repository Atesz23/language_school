"use client";
import React from "react";
import Link from "next/link";

// Interfaces
export interface ILocation {
  id: number;
  city: string;
  emails: string[];
  phones: string[];
  address: string;
  image: string;
  link: string;
}

export interface LocationData {
  sectionSubtitle: string;
  sectionTitle: string;
  locations: ILocation[];
}

// Default data - 2 locations
const locationData: LocationData = {
  sectionSubtitle: "Locațiile Noastre",
  sectionTitle: "Unde Ne Găsești",
  locations: [
    {
      id: 1,
      city: "Language Center Târgu Mureș",
      emails: ["office@languagecenter.ro"],
      phones: ["0769 049 473", "0365 886 320"],
      address:
        "Târgu Mureș, Str. Dr. Knöpfler Vilmos nr. 2-4, Județul Mureș, România",
      image: "/assets/imgs/gallery/4.png",
      link: "#",
    },
    {
      id: 2,
      city: "Language Center Cluj-Napoca",
      emails: ["officecluj@languagecenter.ro", "office@languagecenter.ro"],
      phones: ["0775 249 850", "0365 886 320"],
      address: "Cluj-Napoca, Str. Carmen Silva 1-3, Județul Cluj, România",
      image: "/assets/imgs/gallery/6.png",
      link: "#",
    },
  ],
};

interface LocationProps {
  data?: LocationData;
}

const LocationSection: React.FC<LocationProps> = ({ data }) => {
  const currentLocationData = data || locationData;

  return (
    <section className="work-area-6">
      <div className="container">
        <div className="about-area-2-inner section-spacing-top">
          <div className="section-header">
            <div
              className="section-title-wrapper fade-anim"
              suppressHydrationWarning={true}
            >
              <div className="subtitle-wrapper" suppressHydrationWarning={true}>
                <span className="section-subtitle">Locațiile Noastre</span>
              </div>
            </div>
          </div>
        </div>

        <div
          className="works-wrapper-box fade-anim"
          suppressHydrationWarning={true}
        >
          <div className="container">
            <div className="works-wrapper">
              {currentLocationData?.locations?.map(
                (location: ILocation, index: number) => (
                  <div
                    className="work-box-6 location-box fade-anim"
                    key={location?.id}
                    suppressHydrationWarning={true}
                  >
                    <div className="thumb">
                      <div
                        className="img_anim_reveal"
                        suppressHydrationWarning={true}
                      >
                        <img
                          src={location?.image}
                          alt={location?.city || "Location image"}
                        />
                      </div>
                    </div>
                    <div className="content location-content">
                      <span className="number">
                        {String(index + 1).padStart(2, "0")}
                        <span className="shape">/</span>
                      </span>
                      <h3 className="title location-city-title">
                        {location?.city}
                      </h3>

                      {/* <div className="location-details">
                     
                      <div className="location-info-group">
                        <h4 className="info-label">
                          <i className="fa-solid fa-envelope"></i>
                          Email
                        </h4>
                        <div className="info-list">
                          {location?.emails?.map((email: string, idx: number) => (
                            <a 
                              key={idx} 
                              href={`mailto:${email}`} 
                              className="info-item"
                            >
                              {email}
                            </a>
                          ))}
                        </div>
                      </div>

     
                      <div className="location-info-group">
                        <h4 className="info-label">
                          <i className="fa-solid fa-phone"></i>
                          Telefon
                        </h4>
                        <div className="info-list">
                          {location?.phones?.map((phone: string, idx: number) => (
                            <a 
                              key={idx} 
                              href={`tel:${phone.replace(/\s/g, '')}`} 
                              className="info-item"
                            >
                              {phone}
                            </a>
                          ))}
                        </div>
                      </div>

                     
                      <div className="location-info-group">
                        <h4 className="info-label">
                          <i className="fa-solid fa-location-dot"></i>
                          Adresă
                        </h4>
                        <div className="info-list">
                          <p className="info-item address-text">
                            {location?.address}
                          </p>
                        </div>
                      </div>
                    </div> */}
                      <div className={`t-btn-group `}>
                        <Link className="t-btn t-btn-circle" href="/contact">
                          <i className="fa-solid fa-arrow-right"></i>
                        </Link>
                        <Link className="t-btn t-btn-primary" href="/contact">
                          Contactează-ne
                        </Link>
                        <Link className="t-btn t-btn-circle" href="/contact">
                          <i className="fa-solid fa-arrow-right"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                )
              )}

              {!currentLocationData?.locations?.length && (
                <p>No locations available at this time.</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { locationData };
export default LocationSection;
