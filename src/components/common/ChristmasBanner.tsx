"use client";

import React from "react";
import Image from "next/image";

const ChristmasBanner: React.FC = () => {
  return (
    <section className="christmas-banner">
      <div className="container">
        <div className="christmas-banner-wrapper">
          <Image
            src="/assets/imgs/christmas/banner.jpeg"
            alt="Sărbători Fericite - Language Center închis între 22 decembrie și 7 ianuarie"
            width={1200}
            height={400}
            className="christmas-banner-image"
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default ChristmasBanner;
