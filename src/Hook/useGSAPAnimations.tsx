/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

interface MousePosition {
  x: number;
  y: number;
}

interface AnimationSettings {
  opacity?: number;
  ease?: string;
  duration?: number;
  delay?: number;
  x?: number;
  y?: number;
  scrollTrigger?: ScrollTrigger.Vars;
}

const useGSAPAnimations = (): void => {
  const pathname = usePathname();
  const [isClient, setIsClient] = useState(false);

  // Only run on client side after hydration is complete
  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isClient) return;

    let smoother: ScrollSmoother | null = null;

    const initializeGSAP = async () => {
      try {
        const { default: gsap } = await import("gsap");
        const { default: ScrollTrigger } = await import("gsap/ScrollTrigger");
        const { default: ScrollToPlugin } = await import("gsap/ScrollToPlugin");
        const { default: ScrollSmoother } = await import("gsap/ScrollSmoother");
        const { default: SplitText } = await import("gsap/SplitText");

        await new Promise((resolve) => {
          if (document.readyState === "complete") {
            resolve(true);
          } else {
            window.addEventListener("load", () => resolve(true), {
              once: true,
            });
          }
        });

        gsap.registerPlugin(
          ScrollTrigger,
          ScrollToPlugin,
          ScrollSmoother,
          SplitText
        );
        gsap.config({ nullTargetWarn: false });

        const deviceWidth: number = window.innerWidth;

        const initGSAP = (): void => {
          const wrapper: HTMLElement | null =
            document.querySelector("#smooth-wrapper");
          const content: HTMLElement | null =
            document.querySelector("#smooth-content");

          if (!wrapper || !content) {
            return;
          }

          ScrollTrigger.getAll().forEach((t: ScrollTrigger) => t.kill());
          gsap.killTweensOf("*");

          if (deviceWidth > 767 && wrapper && content) {
            smoother = ScrollSmoother.create({
              wrapper: "#smooth-wrapper",
              content: "#smooth-content",
              smooth: 0.9,
              effects: deviceWidth < 1025 ? false : true,
              smoothTouch: 0.1,
              normalizeScroll: {
                allowNestedScroll: true,
              },
              ignoreMobileResize: true,
            });
          }

          const gsapFadeAnimations = (): void => {
            const fadeArrayItems: NodeListOf<Element> =
              document.querySelectorAll(".fade-anim");

            if (fadeArrayItems.length > 0) {
              const fadeArray: Element[] = gsap.utils.toArray(".fade-anim");

              fadeArray.forEach((item: Element) => {
                const fadeDirection: string =
                  item.getAttribute("data-direction") || "bottom";
                const onScrollValue: string =
                  item.getAttribute("data-on-scroll") || "1";
                const durationValue: string =
                  item.getAttribute("data-duration") || "1.15";
                const fadeOffset: number =
                  Number(item.getAttribute("data-offset")) || 50;
                const delayValue: string =
                  item.getAttribute("data-delay") || "0.15";
                const easeValue: string =
                  item.getAttribute("data-ease") || "power2.out";

                const animationSettings: AnimationSettings = {
                  opacity: 0,
                  ease: easeValue,
                  duration: Number(durationValue),
                  delay: Number(delayValue),
                };

                switch (fadeDirection) {
                  case "top":
                    animationSettings.y = -fadeOffset;
                    break;
                  case "bottom":
                    animationSettings.y = fadeOffset;
                    break;
                  case "left":
                    animationSettings.x = -fadeOffset;
                    break;
                  case "right":
                    animationSettings.x = fadeOffset;
                    break;
                  default:
                    break;
                }

                if (Number(onScrollValue) === 1) {
                  animationSettings.scrollTrigger = {
                    trigger: item as Element,
                    start: "top 85%",
                  };
                }

                gsap.from(item, animationSettings);
              });
            }
          };

          const gsapImageRevealAnimations = (): void => {
            const revealItems: NodeListOf<Element> =
              document.querySelectorAll(".img_anim_reveal");

            revealItems.forEach((reveal: Element) => {
              const image: HTMLImageElement | null =
                reveal.querySelector("img");
              if (!image) return;

              const tl: gsap.core.Timeline = gsap.timeline({
                scrollTrigger: {
                  trigger: reveal,
                  start: "top 50%",
                  toggleActions: "play none none none",
                },
              });

              tl.set(reveal, { autoAlpha: 1 });
              tl.from(reveal, {
                yPercent: -100,
                duration: 1.5,
                ease: "power2.out",
              });
              tl.from(image, {
                yPercent: 100,
                scale: 1.3,
                duration: 1.5,
                delay: -1.5,
                ease: "power2.out",
              });
            });
          };

          const gsapHeaderStackingAnimation = (): void => {
            const mm = gsap.matchMedia();

            if (
              document.querySelectorAll(".header-stacking-items").length > 0
            ) {
              mm.add("(min-width: 991px)", () => {
                const items: Element[] = gsap.utils.toArray(".item");

                items.forEach((item: Element, i: number) => {
                  const content: HTMLElement | null =
                    item.querySelector(".body");
                  const header: HTMLElement | null =
                    item.querySelector(".header");
                  if (!content || !header) return;

                  gsap.to(content, {
                    height: 0,
                    ease: "none",
                    scrollTrigger: {
                      trigger: item,
                      start: "top " + header.clientHeight * i,
                      endTrigger: ".final",
                      end: "top " + header.clientHeight * items.length,
                      pin: true,
                      pinSpacing: false,
                      scrub: true,
                    },
                  });
                });
              });
            }
          };

          const gsapWorkPanelAnimation = (): void => {
            if (document.querySelectorAll(".work-panel").length > 0) {
              const mm = gsap.matchMedia();

              mm.add("(min-width: 991px)", () => {
                const tl: gsap.core.Timeline = gsap.timeline();
                const scaleItems: NodeListOf<Element> =
                  document.querySelectorAll(".work-panel");

                scaleItems.forEach((item: Element) => {
                  tl.to(item, {
                    scrollTrigger: {
                      trigger: item,
                      pin: item,
                      scrub: 1,
                      start: "top 10%",
                      end: "bottom 90%",
                      endTrigger: ".work-area-4",
                      pinSpacing: false,
                      markers: false,
                    },
                  });
                });
              });
            }
          };

          const gsapPortfolioPanelAnimation = (): void => {
            if (document.querySelectorAll(".portfolio-panel").length > 0) {
              const mm = gsap.matchMedia();

              mm.add("(min-width: 991px)", () => {
                const tl: gsap.core.Timeline = gsap.timeline();
                const scaleItems: NodeListOf<Element> =
                  document.querySelectorAll(".portfolio-panel");

                gsap.set(scaleItems, {
                  scale: 1,
                });

                scaleItems.forEach((item: Element) => {
                  tl.to(item, {
                    scale: 0.8,
                    scrollTrigger: {
                      trigger: item,
                      pin: item,
                      scrub: 1,
                      start: "top 10%",
                      end: "bottom 90%",
                      endTrigger: ".work-area-3",
                      pinSpacing: false,
                      markers: false,
                    },
                  });
                });
              });
            }
          };

          const gsapButtonParallaxAnimation = (): void => {
            const allBtn: HTMLElement[] =
              gsap.utils.toArray<HTMLElement>(".btn-move");
            const allBtnCircle: HTMLElement[] =
              gsap.utils.toArray<HTMLElement>(".btn-item");

            allBtn.forEach((btn: HTMLElement, i: number) => {
              const circle: HTMLElement = allBtnCircle[i];

              const parallaxIt = (
                e: MouseEvent,
                target: HTMLElement,
                movement: number = 80
              ): void => {
                const bounds: DOMRect = btn.getBoundingClientRect();
                const relX: number = e.clientX - bounds.left;
                const relY: number = e.clientY - bounds.top;

                gsap.to(target, {
                  x: ((relX - bounds.width / 2) / bounds.width) * movement,
                  y: ((relY - bounds.height / 2) / bounds.height) * movement,
                  scale: 1.1,
                  ease: "power2.out",
                  duration: 0.3,
                });
              };

              const resetParallax = (): void => {
                gsap.to(circle, {
                  x: 0,
                  y: 0,
                  scale: 1,
                  ease: "power2.out",
                  duration: 0.3,
                });
              };

              btn.addEventListener("mousemove", (e: MouseEvent) =>
                parallaxIt(e, circle)
              );
              btn.addEventListener("mouseleave", resetParallax);
            });
          };

          const gsapTextRevealAnimation = (): void => {
            const textAnimationElements: Element[] =
              gsap.utils.toArray(".move-anim");

            if (!textAnimationElements.length) return;

            textAnimationElements.forEach((splitTextLine: Element) => {
              const delayValue: number = parseFloat(
                splitTextLine.getAttribute("data-delay") || "0.1"
              );

              const tl: gsap.core.Timeline = gsap.timeline({
                scrollTrigger: {
                  trigger: splitTextLine,
                  start: "top 85%",
                  toggleActions: "play none none none",
                },
              });

              const itemSplitted = new SplitText(splitTextLine as Element, {
                type: "lines",
              });

              gsap.set(splitTextLine, {
                perspective: 400,
              });

              itemSplitted.split({ type: "lines" });

              tl.from(itemSplitted.lines, {
                duration: 1,
                delay: delayValue,
                opacity: 0,
                rotationX: -80,
                force3D: true,
                transformOrigin: "top center -50",
                stagger: 0.1,
              });
            });
          };

          const gsapWordAnimation = (): void => {
            const wordItems: NodeListOf<Element> =
              document.querySelectorAll(".word-anim");
            if (!wordItems.length) return;

            wordItems.forEach((wordItem: Element) => {
              const stagger: number = parseFloat(
                wordItem.getAttribute("data-stagger") || "0.04"
              );
              const translateX: number = parseFloat(
                wordItem.getAttribute("data-translateX") || "0"
              );
              const translateY: number = parseFloat(
                wordItem.getAttribute("data-translateY") || "0"
              );
              const onScroll: number = parseInt(
                wordItem.getAttribute("data-on-scroll") || "1"
              );
              const delay: number = parseFloat(
                wordItem.getAttribute("data-delay") || "0.1"
              );
              const duration: number = parseFloat(
                wordItem.getAttribute("data-duration") || "0.75"
              );

              const splitWord = new SplitText(wordItem as Element, {
                type: "chars, words",
              });

              const animationProps: gsap.TweenVars & {
                scrollTrigger?: ScrollTrigger.Vars;
              } = {
                duration,
                delay,
                autoAlpha: 0,
                stagger,
              };

              if (translateX) animationProps.x = translateX;
              if (translateY) animationProps.y = translateY;
              if (!translateX && !translateY) animationProps.x = 20;

              if (onScroll === 1) {
                animationProps.scrollTrigger = {
                  trigger: wordItem,
                  start: "top 90%",
                };
              }

              gsap.from(splitWord.words, animationProps);
            });
          };

          const gsapCharAnimation = (): void => {
            const charItems: NodeListOf<Element> =
              document.querySelectorAll(".char-anim");
            if (!charItems.length) return;

            charItems.forEach((item: Element) => {
              const stagger: number = parseFloat(
                item.getAttribute("data-stagger") || "0.05"
              );
              const xVal: number = parseFloat(
                item.getAttribute("data-translateX") || "0"
              );
              const yVal: number = parseFloat(
                item.getAttribute("data-translateY") || "0"
              );
              const onScroll: number = parseInt(
                item.getAttribute("data-on-scroll") || "1"
              );
              const delay: number = parseFloat(
                item.getAttribute("data-delay") || "0.1"
              );
              const duration: number = parseFloat(
                item.getAttribute("data-duration") || "1"
              );
              const ease: string =
                item.getAttribute("data-ease") || "power2.out";

              const split = new SplitText(item as Element, {
                type: "chars, words",
              });

              const animProps: gsap.TweenVars & {
                scrollTrigger?: ScrollTrigger.Vars;
              } = {
                duration,
                delay,
                autoAlpha: 0,
                stagger,
                ease,
              };

              if (xVal) animProps.x = xVal;
              if (yVal) animProps.y = yVal;
              if (!xVal && !yVal) animProps.x = 50;

              if (onScroll === 1) {
                animProps.scrollTrigger = {
                  trigger: item,
                  start: "top 85%",
                };
              }

              gsap.from(split.chars, animProps);
            });
          };

          const initButtonParallaxEffect = (): void => {
            const mouse: MousePosition = { x: 0, y: 0 };
            const pos: MousePosition = { x: 0, y: 0 };
            const ratio: number = 0.65;
            let active: boolean = false;

            const allParallax: NodeListOf<HTMLElement> =
              document.querySelectorAll(".parallax-wrap");

            allParallax.forEach((el: HTMLElement) => {
              el.addEventListener("mousemove", mouseMoveBtn);

              el.addEventListener("mouseenter", function (this: HTMLElement) {
                gsap.to(this, { duration: 0.3, scale: 2 });
                gsap.to(this.children, { duration: 0.3, scale: 0.5 });
                active = true;
              });

              el.addEventListener("mouseleave", function (this: HTMLElement) {
                gsap.to(this, { duration: 0.3, scale: 1 });
                gsap.to(this.children, { duration: 0.3, scale: 1, x: 0, y: 0 });
                active = false;
              });

              el.addEventListener(
                "mousemove",
                function (this: HTMLElement, e: MouseEvent) {
                  parallaxCursorBtn(e, this, 2);
                  callParallaxBtn(e, this);
                }
              );
            });

            function mouseMoveBtn(e: MouseEvent): void {
              const scrollTop: number =
                window.pageYOffset || document.documentElement.scrollTop;
              mouse.x = e.pageX;
              mouse.y = e.pageY - scrollTop;
            }

            gsap.ticker.add(updatePosition);

            function updatePosition(): void {
              pos.x += (mouse.x - pos.x) * ratio;
              pos.y += (mouse.y - pos.y) * ratio;
            }

            function callParallaxBtn(e: MouseEvent, parent: HTMLElement): void {
              const target: HTMLElement | null =
                parent.querySelector(".parallax-element");
              if (!target) return;
              parallaxItBtn(e, parent, target, 20);
            }

            function parallaxItBtn(
              e: MouseEvent,
              parent: HTMLElement,
              target: HTMLElement,
              movement: number
            ): void {
              const boundingRect: DOMRect = parent.getBoundingClientRect();
              const scrollTop: number =
                window.pageYOffset || document.documentElement.scrollTop;
              const relX: number = e.pageX - boundingRect.left;
              const relY: number = e.pageY - boundingRect.top;

              gsap.to(target, {
                duration: 0.3,
                x:
                  ((relX - boundingRect.width / 2) / boundingRect.width) *
                  movement,
                y:
                  ((relY - boundingRect.height / 2 - scrollTop) /
                    boundingRect.height) *
                  movement,
                ease: "power2.out",
              });
            }

            function parallaxCursorBtn(
              e: MouseEvent,
              parent: HTMLElement,
              movement: number
            ): void {
              const rect: DOMRect = parent.getBoundingClientRect();
              const scrollTop: number =
                window.pageYOffset || document.documentElement.scrollTop;
              const relX: number = e.pageX - rect.left;
              const relY: number = e.pageY - rect.top;

              pos.x =
                rect.left + rect.width / 2 + (relX - rect.width / 2) / movement;
              pos.y =
                rect.top +
                rect.height / 2 +
                (relY - rect.height / 2 - scrollTop) / movement;
            }
          };

          const initPinAnimation = (): void => {
            const pinFixed: HTMLElement | null =
              document.querySelector(".pin-element");
            const deviceWidth: number = window.innerWidth;

            ScrollTrigger.getAll().forEach((st: ScrollTrigger) => {
              if (st.trigger === pinFixed) {
                st.kill();
              }
            });

            if (pinFixed && deviceWidth > 991) {
              gsap.to(pinFixed, {
                scrollTrigger: {
                  trigger: ".pin-area",
                  pin: pinFixed,
                  start: "top top",
                  end: "bottom bottom",
                  pinSpacing: false,
                },
              });
            }
          };

          const initPinOnBottom = (): void => {
            const pinOnBottomElements: NodeListOf<Element> =
              document.querySelectorAll(".pin-on-bottom");

            pinOnBottomElements.forEach((el: Element) => {
              gsap.to(el, {
                paddingBottom: "500px",
                ease: "none",
                scrollTrigger: {
                  trigger: el,
                  pin: true,
                  start: "bottom 90%",
                  end: "bottom top",
                  pinSpacing: false,
                  scrub: 3,
                },
              });
            });
          };

          const smoothScrollToAnchors = (): void => {
            document
              .querySelectorAll('a[href^="#"]')
              .forEach((anchor: Element) => {
                anchor.addEventListener(
                  "click",
                  function (this: HTMLAnchorElement, e: Event) {
                    e.preventDefault();
                    const targetId: string =
                      this.getAttribute("href")!.substring(1);
                    const targetElement: HTMLElement | null =
                      document.getElementById(targetId);

                    if (targetElement) {
                      window.scrollTo({
                        top: targetElement.offsetTop,
                        behavior: "smooth",
                      });
                    }
                  }
                );
              });
          };

          ScrollTrigger.refresh();
          gsapFadeAnimations();
          gsapImageRevealAnimations();
          gsapHeaderStackingAnimation();
          gsapWorkPanelAnimation();
          gsapPortfolioPanelAnimation();
          gsapButtonParallaxAnimation();
          gsapTextRevealAnimation();
          gsapWordAnimation();
          gsapCharAnimation();
          initButtonParallaxEffect();
          initPinAnimation();
          initPinOnBottom();
          smoothScrollToAnchors();
        };

        initGSAP();
      } catch (error) {
        console.warn("GSAP initialization failed:", error);
      }
    };

    const timeoutId = setTimeout(() => {
      initializeGSAP();
    }, 100);

    return () => {
      clearTimeout(timeoutId);
      if (typeof window !== "undefined") {
        try {
          import("gsap/ScrollTrigger")
            .then(({ default: ScrollTrigger }) => {
              ScrollTrigger?.getAll()?.forEach((t: ScrollTrigger) => t.kill());
            })
            .catch(() => {});
        } catch (e) {}
        if (smoother) {
          smoother.kill();
          smoother = null;
        }
      }
    };
  }, [pathname, isClient]);
};

export default useGSAPAnimations;
