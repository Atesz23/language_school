"use client";

import { useEffect } from "react";

const useStickyHeader = (): void => {
  useEffect(() => {
    if (typeof window === "undefined") return;

    let lastScrollTop = 0;
    let ticking = false;
    const header = document.querySelector<HTMLElement>(".header-sticky");

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (!header) {
            ticking = false;
            return;
          }

          const currentScrollTop = Math.max(0, window.pageYOffset || document.documentElement.scrollTop);

          if (currentScrollTop <= 100) {
            // Tetején vagyunk - normál header
            header.classList.remove("header-fixed", "header-hidden");
          } else if (currentScrollTop > lastScrollTop) {
            // Lefelé görgetünk - header elrejtése
            header.classList.add("header-fixed", "header-hidden");
          } else {
            // Felfelé görgetünk - header megjelenítése
            header.classList.add("header-fixed");
            header.classList.remove("header-hidden");
          }

          lastScrollTop = currentScrollTop;
          ticking = false;
        });

        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);
};

export default useStickyHeader;