'use client';

import React, { useState, useRef, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { Star, ChevronLeft, ChevronRight, ArrowUpRight } from 'lucide-react';
import { site, testimonials } from './site';

export function VerifiedBadgeIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M10.5858 2.58579C11.3668 1.80474 12.6332 1.80474 13.4142 2.58579L14.8284 4C15.2034 4.375 15.7076 4.58579 16.2374 4.58579H18.2374C19.342 4.58579 20.2374 5.48122 20.2374 6.58579V8.58579C20.2374 9.11562 20.4482 9.6198 20.8232 9.9948L22.2374 11.409C23.0185 12.1901 23.0185 13.4564 22.2374 14.2374L20.8232 15.6516C20.4482 16.0266 20.2374 16.5308 20.2374 17.0606V19.0606C20.2374 20.1652 19.342 21.0606 18.2374 21.0606H16.2374C15.7076 21.0606 15.2034 21.2714 14.8284 21.6464L13.4142 23.0606C12.6332 23.8416 11.3668 23.8416 10.5858 23.0606L9.17157 21.6464C8.79657 21.2714 8.29239 21.0606 7.76256 21.0606H5.76256C4.65799 21.0606 3.76256 20.1652 3.76256 19.0606V17.0606C3.76256 16.5308 3.55177 16.0266 3.17678 15.6516L1.76256 14.2374C0.981514 13.4564 0.981514 12.1901 1.76256 11.409L3.17678 9.9948C3.55177 9.6198 3.76256 9.11562 3.76256 8.58579V6.58579C3.76256 5.48122 4.65799 4.58579 5.76256 4.58579H7.76256C8.29239 4.58579 8.79657 4.375 9.17157 4L10.5858 2.58579Z"
        fill="#1d9bf0"
      />
      <path
        d="M9 12.3L11.2 14.5L15.5 10"
        stroke="white"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function ReviewsSection() {
  const count = testimonials.length; // 6
  // 4 conjuntos para looping contínuo infinito sem nunca voltar para trás
  const repeatedList = [...testimonials, ...testimonials, ...testimonials, ...testimonials];

  const [currentIndex, setCurrentIndex] = useState(count); // começa no bloco 2
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [step, setStep] = useState(372); // largura do card + gap
  const trackRef = useRef<HTMLDivElement>(null);
  const touchStartX = useRef<number | null>(null);

  // Calcula a largura exata de cada card + gap
  const updateStep = useCallback(() => {
    if (trackRef.current) {
      const card = trackRef.current.querySelector<HTMLElement>('.review-carousel-card');
      if (card) {
        const style = window.getComputedStyle(trackRef.current);
        const gap = parseFloat(style.columnGap || style.gap) || 22;
        setStep(card.offsetWidth + gap);
      }
    }
  }, []);

  useEffect(() => {
    updateStep();
    window.addEventListener('resize', updateStep);
    return () => window.removeEventListener('resize', updateStep);
  }, [updateStep]);

  // Avançar (sempre contínuo no mesmo sentido)
  const handleNext = () => {
    setIsTransitioning(true);
    setCurrentIndex((prev) => prev + 1);
  };

  // Voltar
  const handlePrev = () => {
    setIsTransitioning(true);
    setCurrentIndex((prev) => prev - 1);
  };

  // Quando a animação de deslize termina, reposiciona silenciosamente sem transição
  const handleTransitionEnd = () => {
    // Se avançou além do segundo conjunto completo, recua 1 bloco de forma invisível
    if (currentIndex >= count * 2) {
      setIsTransitioning(false);
      setCurrentIndex((prev) => prev - count);
    } else if (currentIndex < count) {
      setIsTransitioning(false);
      setCurrentIndex((prev) => prev + count);
    }
  };

  // Suporte a gestos touch em mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchEndX - touchStartX.current;
    if (diff < -40) {
      handleNext();
    } else if (diff > 40) {
      handlePrev();
    }
    touchStartX.current = null;
  };

  const offset = currentIndex * step;

  return (
    <section className="reviews-section" id="avaliacoes">
      <div className="container">
        <div className="section-heading split-heading">
          <div>
            <p className="eyebrow blue">REPUTAÇÃO COMPROVADA</p>
            <h2>Quem precisou de bateria em Salvador, recomenda.</h2>
          </div>
          <p>
            Desde 2009 com atendimento transparente em Salvador, teste elétrico com equipamento de precisão antes de trocar e garantia oficial de fábrica.
          </p>
        </div>

        <div className="reviews-summary-bar">
          <div className="reviews-score-box">
            <span className="reviews-big-number">{site.ratingValue}</span>
            <div className="reviews-score-info">
              <div className="stars-row">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={18} fill="#f59e0b" color="#f59e0b" />
                ))}
              </div>
              <strong>Classificação Excelente</strong>
              <span>Com base em {site.reviewsCount} avaliações reais no Google Maps</span>
            </div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px', flexWrap: 'wrap' }}>
            <a
              href={site.googleReviewsPopup}
              target="_blank"
              rel="noopener noreferrer"
              className="reviews-google-badge"
              title="Abrir as avaliações reais da Minha Bateria no Google"
            >
              <span>Visualizar avaliações no Google</span>
              <ArrowUpRight size={18} />
            </a>
            <a
              href={site.reviews}
              target="_blank"
              rel="noopener noreferrer"
              style={{ fontSize: '0.85rem', color: 'var(--blue)', fontWeight: 700, textDecoration: 'underline' }}
              title="Deixar sua avaliação no Google"
            >
              Avaliar no Google
            </a>
          </div>
        </div>

        {/* Carrossel de Fluxo Contínuo Infinito */}
        <div
          className="reviews-carousel-wrapper"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <div
            className="reviews-carousel-track"
            ref={trackRef}
            onTransitionEnd={handleTransitionEnd}
            style={{
              transform: `translate3d(-${offset}px, 0, 0)`,
              transition: isTransitioning
                ? 'transform 0.45s cubic-bezier(0.2, 0.8, 0.2, 1)'
                : 'none',
            }}
          >
            {repeatedList.map((t, idx) => (
              <article className="review-carousel-card" key={idx}>
                <div>
                  <div className="review-card-top">
                    <div className="stars-row">
                      {[...Array(t.rating)].map((_, i) => (
                        <Star key={i} size={15} fill="#f59e0b" color="#f59e0b" />
                      ))}
                    </div>
                    <span className="review-badge-verified-blue">
                      <VerifiedBadgeIcon size={16} />
                      <span>Avaliação Verificada</span>
                    </span>
                  </div>
                  <p className="review-card-text">"{t.text}"</p>
                </div>
                <div className="review-card-user">
                  <Image
                    src={t.avatar}
                    alt={`Foto de ${t.name}`}
                    width={46}
                    height={46}
                    className="review-avatar-img"
                  />
                  <div className="review-card-author">
                    <strong>{t.name}</strong>
                    <span>{t.badge} • <small>{t.time}</small></span>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Setas Centralizadas Abaixo */}
          <div className="carousel-nav-bottom">
            <button
              type="button"
              className="carousel-btn"
              onClick={handlePrev}
              aria-label="Ver avaliação anterior"
              title="Avaliação anterior"
            >
              <ChevronLeft size={22} />
            </button>
            <span className="carousel-dots-indicator">Deslize para ver mais avaliações</span>
            <button
              type="button"
              className="carousel-btn"
              onClick={handleNext}
              aria-label="Ver próxima avaliação"
              title="Próxima avaliação"
            >
              <ChevronRight size={22} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
