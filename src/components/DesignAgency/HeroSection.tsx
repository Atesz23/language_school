"use client";

import React from "react";
import Link from "next/link";
import Typewriter from "typewriter-effect";
import { HeroData, SocialLink, LocationInfo } from "@/constant/DesignAgency/hero";
import ProtectedEmail from "@/components/common/ProtectedEmail";

interface HeroProps {
  data: HeroData;
}

const HeroSection: React.FC<HeroProps> = ({ data: heroData }) => {

  return (
    <section className="hero-area-2">
      <div className="hero-area-2-inner section-spacing-top">
        <div className="container large">
          <div className="section-header">
            <div
              className="social-links fade-anim"
              data-delay="0.75"
              data-direction="bottom"
              suppressHydrationWarning={true}
            >
              {heroData?.socials?.map((item: SocialLink, i: number) => {
                const socialNames: Record<string, string> = {
                  'fa-facebook-f': 'Facebook',
                  'fa-instagram': 'Instagram',
                  'fa-youtube': 'YouTube',
                  'fa-tiktok': 'TikTok'
                };
                const socialName = socialNames[item?.icon] || 'Social Media';
                return (
                  <Link key={i} href={item?.link} aria-label={socialName}>
                    <i className={`fa-brands ${item?.icon}`}></i>
                  </Link>
                );
              })}
            </div>

            <div className="section-title-wrapper">
              <div className="title-wrapper">
                <h1 className="section-title fade-anim" suppressHydrationWarning={true}>
                  Cursuri de Limbi Străine Cluj & Mureș - Centru Autorizat pentru Examene Internaționale
                </h1>
                <div className="typewriter-text fade-anim" suppressHydrationWarning={true}>
                  <Typewriter
                    options={{
                      strings: heroData?.titleChange ?? [],
                      autoStart: true,
                      loop: true,
                      delay: 100,
                      deleteSpeed: 50,
                      cursorClassName: "d-none",
                    }}
                  />
                </div>
              </div>

              <div className="subtitle-wrapper subtitle-wrapper--slow">
                <span
                  className="section-subtitle fade-anim"
                  data-direction="bottom"
                  data-delay="0.75"
                  suppressHydrationWarning={true}
                >
                  <span className="marquee">
                    <span className="marquee-content">
                      {heroData?.marqueeText}
                    </span>
                    <span className="marquee-content">
                      {heroData?.marqueeText}
                    </span>
                  </span>
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="section-content-wrapper">
          <div className="container large">
            <div className="section-content section-spacing-bottom">
              <div
                className="hero-shape fade-anim"
                data-delay="0.75"
                data-direction="top"
                suppressHydrationWarning={true}
              >
                <svg
                  width="68"
                  height="95"
                  viewBox="0 0 68 95"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    opacity="0.08"
                    cx="34"
                    cy="61"
                    r="33"
                    stroke="#0E0F11"
                    strokeWidth="2"
                  />
                  <path d="M34 0L34 60" stroke="#E08A1D" strokeWidth="2" />
                </svg>
              </div>

              <div className="hero-content">
                <div className="text-wrapper">
                  <p className="text fade-anim mt-4" data-delay="0.90" suppressHydrationWarning={true}>
                    {heroData?.description}
                  </p>
                  
                  <div className="locations-section fade-anim" data-delay="1.0" suppressHydrationWarning={true}>
                    <div className="locations-grid">
                      {heroData?.locations?.map((location: LocationInfo, i: number) => (
                        <div key={i} className="location-box">
                          <h2 className="location-title">{location.city}</h2>
                          <div className="location-info">
                            <a href={`tel:${location.phone}`} className="location-link">
                              <i className="fa-solid fa-phone"></i>
                              <span>{location.phone}</span>
                            </a>
                            <div className="location-link">
                              <i className="fa-solid fa-envelope"></i>
                              <ProtectedEmail
                                user={location.emailUser}
                                domain={location.emailDomain}
                              />
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="hero-thumb fade-anim"
                data-delay="1.05"
                data-direction="right"
                suppressHydrationWarning={true}
              >
                <Link href={heroData?.buttonLink ?? "#"} className="circle-text">
                  <img
                    src={heroData?.circleTextImg}
                    alt="circle text"
                    className="text"
                  />
                  <img
                    src={heroData?.circleIconImg}
                    alt="circle icon"
                    className="icon"
                  />
                </Link>
                <img src={heroData?.mainImage} alt="hero" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;