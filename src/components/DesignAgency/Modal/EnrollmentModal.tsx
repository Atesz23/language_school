"use client";

import { gsap } from "gsap";
import { useEffect, useRef, useState } from "react";

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

  const modalRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const hasTriggeredRef = useRef(false);

useEffect(() => {
  const modalClosed = localStorage.getItem("enrollmentModalClosed");
  if (modalClosed === "true") return;

  if (hasTriggeredRef.current) return;

  let scrollTimeout: NodeJS.Timeout;

  const handleScroll = () => {
    if (hasTriggeredRef.current) return;

    clearTimeout(scrollTimeout);
    scrollTimeout = setTimeout(() => {
      const scrollPercentage =
        (window.scrollY /
          (document.documentElement.scrollHeight - window.innerHeight)) *
        100;

      if (scrollPercentage > 30 && !isVisible) {
        showModal();
      }
    }, 150);
  };

  // Declare as const here
  const timeTimeout = setTimeout(() => {
    if (!hasTriggeredRef.current) {
      showModal();
    }
  }, 15000);

  window.addEventListener("scroll", handleScroll);

  return () => {
    window.removeEventListener("scroll", handleScroll);
    clearTimeout(scrollTimeout);
    clearTimeout(timeTimeout);
  };
}, [isVisible]);

  const showModal = () => {
    hasTriggeredRef.current = true;
    setIsVisible(true);
    
    // Scroll letiltása
    document.body.style.overflow = "hidden";
    document.body.style.paddingRight = `${window.innerWidth - document.documentElement.clientWidth}px`;

    // GSAP animáció
    gsap.fromTo(
      overlayRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 0.3, ease: "power2.out" }
    );

    gsap.fromTo(
      contentRef.current,
      {
        opacity: 0,
        scale: 0.8,
        y: 50,
      },
      {
        opacity: 1,
        scale: 1,
        y: 0,
        duration: 0.5,
        ease: "back.out(1.4)",
        delay: 0.1,
      }
    );
  };

  const hideModal = () => {
    gsap.to(contentRef.current, {
      opacity: 0,
      scale: 0.8,
      y: 30,
      duration: 0.3,
      ease: "power2.in",
    });

    gsap.to(overlayRef.current, {
      opacity: 0,
      duration: 0.3,
      ease: "power2.in",
      onComplete: () => {
        setIsVisible(false);
        document.body.style.overflow = "";
        document.body.style.paddingRight = "";
        
        // Mentjük el, hogy bezárta a modalt
        localStorage.setItem("enrollmentModalClosed", "true");
        
        // Cookie beállítása (30 napos lejárattal)
        const expiryDate = new Date();
        expiryDate.setDate(expiryDate.getDate() + 3);
        document.cookie = `enrollmentModalClosed=true; expires=${expiryDate.toUTCString()}; path=/`;
      },
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Validáció
    if (!formData.name || !formData.email || !formData.phone) {
      alert("Te rugăm completează toate câmpurile");
      setIsSubmitting(false);
      return;
    }

    // Email validáció
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      alert("Te rugăm introdu o adresă de email validă");
      setIsSubmitting(false);
      return;
    }

    try {
      // Itt küldheted el az adatokat a backend-nek
      // const response = await fetch('/api/enrollment', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(formData)
      // });

      await new Promise((resolve) => setTimeout(resolve, 1000));

      alert("Mulțumim! Îți vom trimite informațiile în curând!");
      
      // Sikeres küldés után is zárjuk be és mentsük el
      hideModal();
    } catch (error) {
      alert("A apărut o eroare. Te rugăm încearcă din nou.");
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
    <div ref={modalRef} className="enrollment-modal">
      <div
        ref={overlayRef}
        className="enrollment-modal__overlay"
        // NEM lehet rákattintva bezárni
      />

      <div ref={contentRef} className="enrollment-modal__content">
        <button
          className="enrollment-modal__close"
          onClick={hideModal}
          aria-label="Închide"
        >
          <svg
            width="24"
            height="24"
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

        <div className="enrollment-modal__header">
          <div className="enrollment-modal__icon">
            <svg
              width="48"
              height="48"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
              <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
            </svg>
          </div>
          <h2 className="enrollment-modal__title">
            Înscrierile de toamnă sunt deschise!
          </h2>
          <p className="enrollment-modal__subtitle">
            Începe călătoria ta în lumea limbilor străine. Lasă-ne datele tale
            și primești imediat informații complete despre cursuri, niveluri,
            prețuri și oferte speciale de toamnă!
          </p>
        </div>

        <div className="enrollment-modal__form">
          <div className="enrollment-modal__field">
            <label htmlFor="name">Numele tău *</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Ion Popescu"
              required
            />
          </div>

          <div className="enrollment-modal__field">
            <label htmlFor="email">Email *</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="ion.popescu@email.ro"
              required
            />
          </div>

          <div className="enrollment-modal__field">
            <label htmlFor="phone">Telefon *</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="0740 123 456"
              required
            />
          </div>

          <button
            type="button"
            className="enrollment-modal__submit"
            disabled={isSubmitting}
            onClick={handleSubmit}
          >
            {isSubmitting ? (
              <>
                <span className="enrollment-modal__spinner" />
                Se trimite...
              </>
            ) : (
              <>
                Trimite cererea
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
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </>
            )}
          </button>

          <p className="enrollment-modal__privacy">
            Datele tale sunt în siguranță. Nu le vom partaja cu terți.
          </p>
        </div>
      </div>

      <style jsx>{`
        
      `}</style>
    </div>
  );
};

export default EnrollmentModal;