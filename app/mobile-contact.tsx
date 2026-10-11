'use client';

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { Phone, ArrowUpRight } from 'lucide-react';
import { ContactButton, WhatsAppIcon } from './components';
import { site } from './site';

export function MobilePhoneIcon({ size = 20 }: { size?: number }) {
  const width = Math.round(size * (320 / 512));
  return (
    <svg
      width={width}
      height={size}
      viewBox="0 0 320 512"
      fill="currentColor"
      aria-hidden="true"
      focusable="false"
      style={{ flexShrink: 0 }}
    >
      <path d="M272 0H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h224c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48zM160 480c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm112-108c0 6.6-5.4 12-12 12H60c-6.6 0-12-5.4-12-12V60c0-6.6 5.4-12 12-12h200c6.6 0 12 5.4 12 12v312z" />
    </svg>
  );
}

export function MobileContact() {
  const [isVisible, setIsVisible] = useState(false);
  const pathname = usePathname();
  const isLp = pathname === '/lp' || pathname?.startsWith('/lp');

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

  const lpWhatsAppUrl = `https://api.whatsapp.com/send?phone=${site.phone}&text=${encodeURIComponent('Encontrei vocês no *Google*, gostaria de um orçamento de bateria')}`;

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
        aria-label={`Ligar para ${site.phoneDisplay}`}
      >
        <MobilePhoneIcon size={20} />
        <span>{site.phoneDisplay}</span>
      </a>
      {isLp ? (
        <a
          className="button"
          href={lpWhatsAppUrl}
          target="_blank"
          rel="noopener noreferrer"
          data-contact="whatsapp"
          data-location="mobile-bar"
        >
          <WhatsAppIcon size={22} />
          Pedir bateria
          <ArrowUpRight size={19} aria-hidden="true" />
        </a>
      ) : (
        <ContactButton location="mobile-bar">Pedir bateria</ContactButton>
      )}
    </div>
  );
}
