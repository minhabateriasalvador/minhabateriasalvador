'use client';
import { useEffect } from 'react';

declare global { interface Window { dataLayer?: Record<string, unknown>[]; } }

export function ContactEvents() {
  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      const target = event.target instanceof Element ? event.target.closest<HTMLAnchorElement>('a[data-contact]') : null;
      if (!target) return;
      const detail = { event: 'contact_click', contact_method: target.dataset.contact, contact_location: target.dataset.location, page_path: window.location.pathname };
      // A click expresses intent; it is not a confirmed lead or sale. No personal data is collected here.
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push(detail);
      window.dispatchEvent(new CustomEvent('contact_click', { detail }));
    };
    document.addEventListener('click', onClick);
    return () => document.removeEventListener('click', onClick);
  }, []);
  return null;
}
