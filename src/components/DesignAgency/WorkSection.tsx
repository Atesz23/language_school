"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

// Lista de imagini pentru galerie
const galleryImages = [
  "/assets/imgs/gallery/1.png",
  "/assets/imgs/gallery/2.png",
  "/assets/imgs/gallery/3.png",
  "/assets/imgs/gallery/4.png",
  "/assets/imgs/gallery/5.png",
  "/assets/imgs/gallery/6.png",
  "/assets/imgs/gallery/7.png",
  "/assets/imgs/gallery/8.png",
  "/assets/imgs/gallery/9.png",
  "/assets/imgs/gallery/10.png",
  "/assets/imgs/gallery/11.png",
  "/assets/imgs/gallery/12.png",
  "/assets/imgs/gallery/13.png",
];

const GallerySection: React.FC = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  // Convertim imaginile în formatul pentru yet-another-react-lightbox
  const lightboxSlides = galleryImages.map((image) => ({
    src: image,
  }));

  return (
    <>
      <section className="work-area-2">
        <div className="container">
          <div className="work-area-2-inner section-spacing">
            <div className="section-header">
              <div className="subtitle-wrapper fade-anim" suppressHydrationWarning={true}>
                <span className="section-subtitle">Galerie Foto</span>
              </div>
              <div className="section-title-wrapper fade-anim" suppressHydrationWarning={true}>
                <div className="title-wrapper">
                  <h2 className="section-title">Galeria Noastră</h2>
                </div>
                <div className="text-wrapper">
                  <p className="text">
                    Descoperă prin imagini proiectele noastre realizate și momentele speciale
                    captate de-a lungul timpului. Fiecare fotografie spune o poveste despre
                    dedicarea și profesionalismul echipei noastre.
                  </p>
                </div>
              </div>
            </div>

            <div className="works-wrapper-box fade-anim" suppressHydrationWarning={true}>
              <div className="works-wrapper">
                <Swiper
                  modules={[Navigation, Pagination, Autoplay]}
                  loop={true}
                  autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true,
                  }}
                  slidesPerView={1}
                  spaceBetween={30}
                  speed={1800}
                  watchSlidesProgress={true}
                  navigation={{
                    prevEl: ".work-button-prev",
                    nextEl: ".work-button-next",
                  }}
                  pagination={{
                    el: ".work-pagination",
                    type: "progressbar",
                    clickable: true,
                  }}
                  breakpoints={{
                    576: { slidesPerView: 1 },
                    768: { slidesPerView: 2 },
                    992: { slidesPerView: 2 },
                    1201: { slidesPerView: 3 },
                    1367: { slidesPerView: 3 },
                  }}
                  className="work-slider"
                >
                  {galleryImages.map((image: string, idx: number) => (
                    <SwiperSlide key={idx}>
                      <div className="work-box-2">
                        <div 
                          className="thumb" 
                          onClick={() => openLightbox(idx)}
                          style={{ cursor: "pointer", position: "relative" }}
                        >
                          <img src={image} alt={`Galerie imagine ${idx + 1}`} />
                          <div
                            style={{
                              position: "absolute",
                              top: "50%",
                              left: "50%",
                              transform: "translate(-50%, -50%)",
                              opacity: 0,
                              transition: "opacity 0.3s ease",
                              pointerEvents: "none",
                            }}
                            className="gallery-hover-icon"
                          >
                            <i 
                              className="fa-solid fa-search-plus" 
                              style={{ 
                                fontSize: "40px", 
                                color: "white",
                                textShadow: "0 0 10px rgba(0,0,0,0.5)"
                              }}
                            ></i>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>

                <div className="work-pagination fade-anim" suppressHydrationWarning={true}></div>

                <div className="slide-nav-wrapper">
                  <div className="slide-nav fade-anim" suppressHydrationWarning={true}>
                    <div
                      className="work-button-prev slide-nav-button"
                      role="button"
                    >
                      <i className="fa-solid fa-arrow-left"></i>
                    </div>
                    <div
                      className="work-button-next slide-nav-button"
                      role="button"
                    >
                      <i className="fa-solid fa-arrow-right"></i>
                    </div>
                  </div>
                  <div className="btn-wrapper fade-anim" suppressHydrationWarning={true}>
                    <div className="t-btn-group">
                      <Link className="t-btn t-btn-circle" href="/galerie">
                        <i className="fa-solid fa-arrow-right"></i>
                      </Link>
                      <Link className="t-btn t-btn-primary" href="/galerie">
                        Vezi Toate Imaginile
                      </Link>
                      <Link className="t-btn t-btn-circle" href="/galerie">
                        <i className="fa-solid fa-arrow-right"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Yet Another React Lightbox */}
      <Lightbox
        open={lightboxOpen}
        close={() => setLightboxOpen(false)}
        slides={lightboxSlides}
        index={currentImageIndex}
        styles={{
          container: { backgroundColor: "rgba(0, 0, 0, 0.95)" },
        }}
      />

      <style jsx>{`
        .thumb:hover .gallery-hover-icon {
          opacity: 1 !important;
        }
        .thumb::after {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0);
          transition: background 0.3s ease;
          pointer-events: none;
        }
        .thumb:hover::after {
          background: rgba(0, 0, 0, 0.3);
        }
      `}</style>
    </>
  );
};

export default GallerySection;