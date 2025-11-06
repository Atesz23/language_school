"use client";

import { BrandData } from "@/constant/DesignAgency/brand";
import React from "react";
import BrandSectionFlag from "../CreativeAgency/BrandSection";
import Link from "next/link";

interface BrandSectionProps {
  type?: string;
  brandSix?: boolean;
  data: BrandData;
}

const BrandSection: React.FC<BrandSectionProps> = ({
  type,
  brandSix,
  data: brandData,
}) => {
  // Csak az első 4 képet vesszük
  const displayBrands = brandData?.brands?.slice(0, 4) || [];

  return (
    <>
      <section className={`${brandSix ? 'brand-area-6' : 'brand-area-2'}`}>
      <div className="container">
        <div className={`${type === "v2" ? "section-spacing" : "section-spacing-top"} ${brandSix ? 'brand-area-6-inner' : 'brand-area-2-inner'}`}>
          <div className="section-header">
            <div className="section-title-wrapper">
              <div className="title-wrapper fade-anim" suppressHydrationWarning={true}>
                <h2 className="section-title">{brandData?.title}</h2>
              </div>
            </div>
          </div>

          <div className="brands-grid-wrapper fade-anim" suppressHydrationWarning={true}>
            <div className="brands-grid">
              {displayBrands.map((brand, index) => (
                <Link key={index}  href="/exam">
                <div 
                  
                  className="brand-grid-item"
                  data-delay={`0.${(index + 1) * 15}`}
                >
                  <div className="brand-image-wrapper">
                    <img src={brand?.image} alt={`brand-${index}`} />
                  </div>
                </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
      <div className="brands-grid-wrapper">
        <BrandSectionFlag />
      </div>
    </>
  );
};

export default BrandSection;
