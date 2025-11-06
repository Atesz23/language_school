"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import toast from "react-hot-toast";

// Exam interface
export interface IExam {
  id: number;
  title: string;
  number: string;
  link: string;
  shapeImage: string;
  thumb: string;
  description: string;
  languages?: string;
  levels?: string;
}

export interface ExamData {
  subtitle: string;
  title: string;
  exams: IExam[];
}

interface ServiceProps {
  data: ExamData;
}

const ServiceSection: React.FC<ServiceProps> = ({ data: examData }) => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [selectedExamLink, setSelectedExamLink] = useState<string>("");

  const handleExamClick = (e: React.MouseEvent, examLink: string) => {
    e.preventDefault();
    setSelectedExamLink(examLink);
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    setSelectedExamLink("");
  };

  const handleModalSuccess = () => {
    setIsModalOpen(false);
    // Redirect to the selected exam page after successful form submission
    if (selectedExamLink && selectedExamLink !== "#") {
      window.location.href = selectedExamLink;
    }
  };

  return (
    <>
      <section className="service-area-2" style={{backgroundColor:"transparent"}}>
        <div className="container">
          <div className="service-area-2-inner section-spacing">
            <div className="section-header">
              <div className="section-title-wrapper fade-anim" suppressHydrationWarning={true}>
                <div className="subtitle-wrapper">
                  <span className="section-subtitle" style={{color:"#000"}}>
                    {examData?.subtitle}
                  </span>
                </div>
                <div className="title-wrapper">
                  <h2 className="section-title" style={{color:"#000"}}>{examData?.title}</h2>
                </div>
              </div>
              <div className="btn-wrapper fade-anim" suppressHydrationWarning={true}>
                <div className="t-btn-group">
                  <Link className="t-btn t-btn-circle" href="/contact">
                    <i className="fa-solid fa-arrow-right"></i>
                  </Link>
                  <Link className="t-btn t-btn-primary" href="/contact">
                    Contactează-ne
                  </Link>
                  <Link className="t-btn t-btn-circle" href="/contact">
                    <i className="fa-solid fa-arrow-right"></i>
                  </Link>
                </div>
              </div>
            </div>

            <div className="services-wrapper-box fade-anim" suppressHydrationWarning={true}>
              <div className="services-wrapper service-hover-active">
                {examData?.exams?.map((exam: IExam, index: number) => (
                  <div
                    key={exam.id}
                    className={`service-box-2 ${
                      index === activeIndex ? "active" : ""
                    }`}
                    onMouseOver={() => setActiveIndex(index)}
                  >
                    <a 
                      href="#" 
                      onClick={(e) => handleExamClick(e, exam?.link || "#")}
                      style={{ cursor: "pointer" }}
                    >
                      <div className="header">
                        <h3 className="title">
                          {exam?.title}
                          <span className="number">{exam?.number}</span>
                        </h3>
                      </div>
                    </a>
                    <div className="service-box-2-inner">
                      <div className="shape-1">
                        <Image 
                          src={exam?.shapeImage} 
                          alt="shape" 
                          width={100}
                          height={100}
                          loading="lazy"
                        />
                      </div>
                      <div className="thumb h-auto">
                        <Image 
                          src={exam?.thumb} 
                          alt={exam?.title} 
                          width={300}
                          height={200}
                          style={{objectFit:"contain"}}
                          loading="lazy"
                        />
                      </div>
                      <div className="content">
                        {exam?.levels && (
                          <div className="exam-info-item">
                            <strong>Nivele:</strong> {exam.levels}
                          </div>
                        )}
                        
                        {exam?.languages && (
                          <div className="exam-info-item">
                            <strong>Limbi:</strong> {exam.languages}
                          </div>
                        )}
                      </div>
                      <p className="text pt-3" style={{color:"#000"}}>{exam?.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {isModalOpen && (
        <ExamEnrollmentModal 
          onClose={handleModalClose}
          onSuccess={handleModalSuccess}
          examLink={selectedExamLink}
        />
      )}
    </>
  );
};

// Enrollment Modal Component for Exam clicks
interface ExamEnrollmentModalProps {
  onClose: () => void;
  onSuccess: () => void;
  examLink: string;
}

const ExamEnrollmentModal: React.FC<ExamEnrollmentModalProps> = ({ 
  onClose, 
  onSuccess,
  examLink 
}) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    acceptTerms: false,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (!formData.name.trim() || !formData.email.trim() || !formData.phone.trim()) {
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
        }),
      });

      const result = await response.json();

      if (result.success) {
        toast.success("Mulțumim! Te redirecționăm către cursul selectat!", {
          id: toastId,
        });
        setTimeout(() => {
          onSuccess(); // This will redirect to the exam page
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
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
              <div className="enrollment-modal__logo">
                <Image
                  src="/assets/imgs/logo/language_logo_dark.png"
                  alt="Language School"
                  width={140}
                  height={55}
                  priority
                />
              </div>

              <h2 className="enrollment-modal__title">Înscrie-te acum!</h2>
              <p className="enrollment-modal__description">
                Completează formularul pentru a primi mai multe informații despre acest curs!
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
                          Sunt de acord cu <Link href="/termeni-si-conditii" target="_blank" style={{ textDecoration: 'underline' }}>termenii și condițiile</Link>.
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

export default ServiceSection;