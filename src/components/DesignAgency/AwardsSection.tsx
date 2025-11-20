"use client";

import React, { useState } from "react";
import {AwardData, IAward, IGroup} from "@/constant/DesignAgency/awards";
import Link from "next/link";
import toast from "react-hot-toast";

interface AwardProps {
  data: AwardData;
}

const AwardsSection:React.FC<AwardProps> = ({data:awardData}) => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const handleAwardClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const handleModalSuccess = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <section className="awards-area-2">
        <div className="container">
          <div className="awards-area-2-inner section-spacing">
            <div className="section-header">
              <div className="section-title-wrapper fade-anim" suppressHydrationWarning={true}>
                <div className="subtitle-wrapper">
                  <span className="section-subtitle">{awardData?.subtitle}</span>
                </div>
                <div className="title-wrapper">
                  <h2 className="section-title">{awardData?.title}</h2>
                </div>
              </div>
            </div>

            <div className="awards-wrapper-box fade-anim" suppressHydrationWarning={true}>
              <div className="container">
                <div className="awards-wrapper">
                  {awardData?.groups?.map((group:IGroup, idx:number) => (
                    <div className="site-group fade-anim" key={idx} suppressHydrationWarning={true}>
                      <h2 className="group-title">{group?.title}</h2>
                      <div className="group-wrapper">
                        {group?.awards?.map((award:IAward, i:number) => (
                          <a
                            href="#"
                            onClick={handleAwardClick}
                            className="award-box-2"
                            key={i}
                            style={{ cursor: "pointer", textDecoration: "none", color: "inherit" }}
                          >
                            <div className="thumb">
                              <img
                                src={award?.image || "/fallback.jpg"}
                                alt={award?.title || "award image"}
                              />
                            </div>
                            <div className="award-title-wrapper">
                              <h3 className="title">{award?.title}</h3>
                              <span className="category">{award?.category}</span>
                            </div>
                            <span className="year">{award?.year}</span>
                          </a>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {isModalOpen && (
        <AwardEnrollmentModal
          onClose={handleModalClose}
          onSuccess={handleModalSuccess}
        />
      )}
    </>
  );
};

// Enrollment Modal Component for Award clicks
interface AwardEnrollmentModalProps {
  onClose: () => void;
  onSuccess: () => void;
}

const AwardEnrollmentModal: React.FC<AwardEnrollmentModalProps> = ({
  onClose,
  onSuccess
}) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    location: "",
    acceptTerms: false,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (!formData.name.trim() || !formData.email.trim() || !formData.phone.trim() || !formData.location) {
      toast.error("Te rugăm completează toate câmpurile!");
      setIsSubmitting(false);
      return;
    }

    if (!formData.acceptTerms) {
      toast.error("Trebuie să accepți termenii și condițiile pentru a continua!");
      setIsSubmitting(false);
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast.error("Te rugăm introdu o adresă de email validă!");
      setIsSubmitting(false);
      return;
    }

    const toastId = toast.loading("Se trimite...");

    try {
      const response = await fetch('/api/popup-form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          location: formData.location,
        }),
      });

      const result = await response.json();

      if (result.success) {
        toast.success("Mulțumim! Formularul a fost trimis cu succes!", {
          id: toastId,
        });
        setTimeout(() => {
          onSuccess();
        }, 1000);
      } else {
        toast.error(result.message || "A apărut o eroare. Te rugăm încearcă din nou.", {
          id: toastId,
        });
        setIsSubmitting(false);
      }
    } catch (error) {
      console.error('Popup form error:', error);
      toast.error("A apărut o eroare. Te rugăm încearcă din nou.", {
        id: toastId,
      });
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    const checked = type === 'checkbox' ? (e.target as HTMLInputElement).checked : undefined;

    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  return (
    <div className="enrollment-modal">
      <div className="enrollment-modal__overlay" onClick={onClose} />

      <div className="enrollment-modal__content">
        <button onClick={onClose} className="enrollment-modal__close" aria-label="Închide">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>

        <div className="enrollment-modal__layout">
          <div
            className="enrollment-modal__image-section"
            style={{
              backgroundImage: 'url("/assets/imgs/modal/modal2.png")',
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          />

          <div className="enrollment-modal__form-section">
            <div className="enrollment-modal__header">
              <h2 className="enrollment-modal__title">Înscrie-te acum!</h2>
              <p className="enrollment-modal__description">
                Completează formularul pentru a primi mai multe informații!
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

              <div className="form-group">
                <select
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting}
                  style={{
                    width: '100%',
                    padding: '12px 15px',
                    border: '1px solid #e0e0e0',
                    borderRadius: '8px',
                    fontSize: '14px',
                    backgroundColor: '#fff',
                    cursor: 'pointer',
                    transition: 'border-color 0.3s ease'
                  }}
                >
                  <option value="">Ce școală de limbi te interesează?</option>
                  <option value="Târgu Mureș">Târgu Mureș</option>
                  <option value="Cluj-Napoca">Cluj-Napoca</option>
                </select>
              </div>

              <div className="form-group gdpr-checkbox">
                <label style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', cursor: 'pointer', fontSize: '13px', lineHeight: '1.5' }}>
                  <input
                    type="checkbox"
                    name="acceptTerms"
                    id="acceptTerms"
                    checked={formData.acceptTerms}
                    onChange={handleChange}
                    required
                    disabled={isSubmitting}
                    style={{ marginTop: '4px', maxWidth: '16px', cursor: 'pointer' }}
                  />
                  <label htmlFor="acceptTerms" style={{ cursor: 'pointer', fontSize: '14px', lineHeight: '1.5' }}>
                    Sunt de acord cu <Link href="/terms" target="_blank" style={{ textDecoration: 'underline' }}>termenii și condițiile</Link>.
                  </label>
                </label>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`enrollment-modal__submit ${isSubmitting ? "loading" : ""}`}
              >
                {isSubmitting ? (
                  <>
                    <div className="spinner"></div>
                    Se trimite...
                  </>
                ) : (
                  <>
                    Trimite și continuă
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
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
  );
};

export default AwardsSection;
