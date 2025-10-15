"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

const BrandSectionFlag: React.FC = () => {
  // Brands belül definiálva
  const brands = [
    "/assets/imgs/gallery/germany.webp",
    "/assets/imgs/gallery/united.png",
    "/assets/imgs/gallery/spain.webp",
    "/assets/imgs/gallery/italy.png",
    "/assets/imgs/gallery/japan.png",
    "/assets/imgs/gallery/france.png",
    "/assets/imgs/gallery/romania.png",
    "/assets/imgs/gallery/hungary.webp",
  ];

  return (
    <div className="brand-area-3">
      <div className="brand-area-3-inner">
        <div className="container full-hd">
          <div className="brands-wrapper-box">
            <div className="brands-wrapper fade-anim">
              <Swiper
                className="brand-slider-active"
                loop={true}
                slidesPerView="auto"
                spaceBetween={0}
                speed={5000}
                autoplay={{
                  delay: 1,
                  disableOnInteraction: false,
                }}
                allowTouchMove={false}
                modules={[Autoplay]}
              >
                {brands.map((imgSrc, index) => (
                  <SwiperSlide key={index} style={{ width: "auto" }}>
                    <div className="brand-item-3">
                      <img src={imgSrc} alt={`Brand ${index + 1}`} height={100}/>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandSectionFlag;