'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

const ChristmasModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Check if modal was already shown in this session
    const hasSeenModal = sessionStorage.getItem('christmasModalSeen');

    if (!hasSeenModal) {
      // Small delay before showing modal for better UX
      const timer = setTimeout(() => {
        setIsOpen(true);
        sessionStorage.setItem('christmasModalSeen', 'true');
      }, 500);

      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    setIsOpen(false);
  };

  if (!isOpen) return null;

  return (
    <>
      <div className="christmas-modal-overlay" onClick={handleClose} />
      <div className="christmas-modal">
        <button
          className="christmas-modal__close"
          onClick={handleClose}
          aria-label="Close"
        >
          <i className="fa-solid fa-xmark"></i>
        </button>
        <div className="christmas-modal__content">
          <Image
            src="/assets/imgs/christmas/banner.jpeg"
            alt="Crăciun Fericit - Language Center Cluj & Mureș"
            width={800}
            height={600}
            priority
            className="christmas-modal__image"
          />
        </div>
      </div>
    </>
  );
};

export default ChristmasModal;
