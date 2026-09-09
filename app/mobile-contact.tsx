'use client';

import { useState, useEffect } from 'react';
import { Phone } from 'lucide-react';
import { ContactButton } from './components';
import { site } from './site';

export function MobileContact() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Se o usuário prefere movimento reduzido, exibe direto
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setIsVisible(true);
      return;
    }

    const handleFirstInteraction = () => {
      setIsVisible(true);
      events.forEach((evt) => {
        window.removeEventListener(evt, handleFirstInteraction);
      });
    };

    const events = ['scroll', 'click', 'touchstart', 'touchmove', 'keydown'];
    events.forEach((evt) => {
      window.addEventListener(evt, handleFirstInteraction, { passive: true, once: true });
    });

    return () => {
      events.forEach((evt) => {
        window.removeEventListener(evt, handleFirstInteraction);
      });
    };
  }, []);

  return (
    <div
      className={`mobile-contact ${isVisible ? 'mobile-contact-show' : 'mobile-contact-hidden'}`}
      aria-hidden={!isVisible}
    >
      <a
        href={`tel:+${site.phone}`}
        data-contact="phone"
        data-location="mobile-bar"
        className="mobile-call-btn"
        aria-label="Ligar para Minha Bateria Salvador"
      >
        <Phone size={18} aria-hidden="true" />
        <span>Ligar</span>
      </a>
      <ContactButton location="mobile-bar">Pedir bateria</ContactButton>
    </div>
  );
}
