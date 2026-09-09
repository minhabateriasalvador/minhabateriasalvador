'use client';

import { useEffect } from 'react';

export function ScrollReveal() {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const targets = document.querySelectorAll<HTMLElement>(
      '.catalog-card, .benefit, .step, .product-card, .article-card, .visual-card, .urgent-banner, .table-wrapper, .neighborhood-section, .local-photo, .local-copy, .faq-list details'
    );

    if (!targets.length) return;

    targets.forEach((el) => {
      el.classList.add('reveal-init');

      const parentGrid = el.parentElement;
      if (parentGrid && (
        parentGrid.classList.contains('catalog-grid') || 
        parentGrid.classList.contains('benefits-grid') || 
        parentGrid.classList.contains('product-grid') || 
        parentGrid.classList.contains('steps') || 
        parentGrid.classList.contains('articles-grid') || 
        parentGrid.classList.contains('visual-showcase')
      )) {
        const indexInParent = Array.from(parentGrid.children).indexOf(el);
        const staggerClass = `stagger-${(indexInParent % 4) + 1}`;
        el.classList.add(staggerClass);
      }
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-revealed');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.08,
        rootMargin: '0px 0px -25px 0px',
      }
    );

    targets.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return null;
}
