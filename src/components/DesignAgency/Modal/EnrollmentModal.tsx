"use client";

import { useEffect, useState, useRef } from "react";
import { gsap } from "gsap";
import Image from "next/image";

interface FormData {
  name: string;
  email: string;
  phone: string;
}

const EnrollmentModal = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const overlayRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const hasTriggeredRef = useRef(false);

  useEffect(() => {
    const hasSeenModal = checkIfModalWasSeen();
    if (hasSeenModal) {
      console.log("📌 Modal már meg lett jelenítve ebben a sessionben");
      return;
    }

    let scrollTimeout: NodeJS.Timeout;
    const handleScroll = () => {
      if (hasTriggeredRef.current) return;

      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        const scrollPercentage =
          (window.scrollY /
            (document.documentElement.scrollHeight - window.innerHeight)) *
          100;

        if (scrollPercentage >= 50 && !isVisible) {
          console.log("📜 50% görgetés elérve - Modal megjelenítése");
          showModal();
        }
      }, 200);
    };

    const timeTimeout = setTimeout(() => {
      if (!hasTriggeredRef.current && !isVisible) {
        console.log("⏰ 20 másodperc eltelt - Modal megjelenítése");
        showModal();
      }
    }, 20000);

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(scrollTimeout);
      clearTimeout(timeTimeout);
    };
  }, [isVisible]);

  const checkIfModalWasSeen = (): boolean => {
    const sessionSeen = sessionStorage.getItem("enrollmentModalSeen");
    const localSeen = localStorage.getItem("enrollmentModalClosed");
    const closedDate = localStorage.getItem("enrollmentModalClosedDate");

    if (localSeen === "true" && closedDate) {
      const daysSinceClosed = Math.floor(
        (Date.now() - parseInt(closedDate)) / (1000 * 60 * 60 * 24)
      );

      if (daysSinceClosed < 7) {
        console.log(
          `📅 Modal bezárva ${daysSinceClosed} napja - nem jelenik meg`
        );
        return true;
      } else {
        console.log("🔄 7 nap eltelt - modal újra megjeleníthető");
        localStorage.removeItem("enrollmentModalClosed");
        localStorage.removeItem("enrollmentModalClosedDate");
      }
    }

    return sessionSeen === "true";
  };

  const showModal = () => {
    if (hasTriggeredRef.current) return;

    hasTriggeredRef.current = true;
    setIsVisible(true);
    sessionStorage.setItem("enrollmentModalSeen", "true");
    document.body.style.overflow = "hidden";

    // GSAP animáció
    if (overlayRef.current && contentRef.current) {
      const tl = gsap.timeline();

      tl.fromTo(
        overlayRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.4, ease: "power2.out" }
      ).fromTo(
        contentRef.current,
        {
          opacity: 0,
          scale: 0.9,
          y: 30,
        },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 0.5,
          ease: "power2.out",
        },
        "-=0.2"
      );
    }
  };

  const hideModal = () => {
    if (contentRef.current && overlayRef.current) {
      const tl = gsap.timeline();

      tl.to(contentRef.current, {
        opacity: 0,
        scale: 0.95,
        y: 20,
        duration: 0.3,
        ease: "power2.in",
      }).to(
        overlayRef.current,
        {
          opacity: 0,
          duration: 0.3,
          ease: "power2.in",
          onComplete: () => {
            setIsVisible(false);
            document.body.style.overflow = "";
            localStorage.setItem("enrollmentModalClosed", "true");
            localStorage.setItem(
              "enrollmentModalClosedDate",
              Date.now().toString()
            );
            console.log("✅ Modal bezárva - 7 napig nem jelenik meg újra");
          },
        },
        "-=0.1"
      );
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (
      !formData.name.trim() ||
      !formData.email.trim() ||
      !formData.phone.trim()
    ) {
      alert("Te rugăm completează toate câmpurile!");
      setIsSubmitting(false);
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      alert("Te rugăm introdu o adresă de email validă!");
      setIsSubmitting(false);
      return;
    }

    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      alert("✅ Mulțumim! Îți vom trimite informațiile în curând!");
      hideModal();
    } catch {
      alert("❌ A apărut o eroare. Te rugăm încearcă din nou.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  if (!isVisible) return null;

  return (
    <>
      <div className="enrollment-modal">
        <div
          ref={overlayRef}
          className="enrollment-modal__overlay"
          onClick={hideModal}
        />

        <div ref={contentRef} className="enrollment-modal__content">
          {/* Close Button */}
          <button
            onClick={hideModal}
            className="enrollment-modal__close"
            aria-label="Închide"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>

          <div className="enrollment-modal__layout">
            {/* Image Section - csak desktopon */}
            <div
              className="enrollment-modal__image-section"
              style={{
                backgroundImage: 'url("/assets/imgs/modal/modal2.png")',
                backgroundPosition: "ceter",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }}
            >
              <div className="enrollment-modal__image-container"></div>
            </div>

            {/* Form Section */}
            <div className="enrollment-modal__form-section">
              <div className="enrollment-modal__header">
                <div className="enrollment-modal__logo">
                  <Image
                    src="/assets/imgs/logo/language_logo_dark.png"
                    alt="Language School"
                    width={140}
                    height={55}
                    priority
                  />
                </div>

                <h2 className="enrollment-modal__title">Înscrieri Deschise!</h2>
                <p className="enrollment-modal__description">
                  Completează formularul și primește toate informațiile despre
                  cursurile noastre de limbi străine!
                </p>
              </div>

              <form onSubmit={handleSubmit} className="enrollment-modal__form">
                <div className="form-group">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Nume complet"
                    required
                    disabled={isSubmitting}
                  />
                </div>

                <div className="form-group">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Adresa de email"
                    required
                    disabled={isSubmitting}
                  />
                </div>

                <div className="form-group">
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Număr de telefon"
                    required
                    disabled={isSubmitting}
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`enrollment-modal__submit ${
                    isSubmitting ? "loading" : ""
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <div className="spinner"></div>
                      Se trimite...
                    </>
                  ) : (
                    <>
                      Trimite cererea
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <line x1="5" y1="12" x2="19" y2="12" />
                        <polyline points="12 5 19 12 12 19" />
                      </svg>
                    </>
                  )}
                </button>
              </form>

              <div className="enrollment-modal__footer">
                <p>🔒 Datele tale sunt în siguranță cu noi</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EnrollmentModal;

export const ModalDebugButton = () => {
  const resetAndShow = () => {
    sessionStorage.removeItem("enrollmentModalSeen");
    localStorage.removeItem("enrollmentModalClosed");
    localStorage.removeItem("enrollmentModalClosedDate");
    console.log("🔄 Modal state resetelve!");
    window.location.reload();
  };

  return (
    <>
      <button
        onClick={resetAndShow}
        className="modal-debug-btn"
        title="Reset Modal & Show"
      >
        🔄 Reset Modal
      </button>

      <style jsx>{`
        .modal-debug-btn {
          position: fixed;
          bottom: 20px;
          right: 20px;
          z-index: 10000;
          background: #e08a1d;
          color: white;
          padding: 10px 16px;
          border-radius: 8px;
          border: 2px solid #000;
          font-size: 14px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .modal-debug-btn:hover {
          background: #d17a0d;
          transform: translateY(-2px);
        }

        @media (max-width: 640px) {
          .modal-debug-btn {
            bottom: 16px;
            right: 16px;
            padding: 8px 12px;
            font-size: 12px;
          }
        }
      `}</style>
    </>
  );
};
