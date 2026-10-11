'use client';

import React, { useState, useRef, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { site, testimonials } from '../site';
import { VerifiedBadgeIcon } from '../reviews-carousel';

export function LpReviewsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(3);
  const containerRef = useRef<HTMLDivElement>(null);
  const touchStartX = useRef<number | null>(null);
  const touchDeltaX = useRef<number>(0);

  // Determina quantos cards são visíveis por vez com base na largura real do container
  const updateCardsPerView = useCallback(() => {
    if (!containerRef.current) return;
    const width = containerRef.current.offsetWidth;
    if (width < 700) {
      setCardsPerView(1); // Exatamente 1 por vez no mobile
    } else if (width < 1050) {
      setCardsPerView(2); // 2 em telas médias / laptops pequenos
    } else {
      setCardsPerView(3); // 3 em telas desktop amplas
    }
  }, []);

  useEffect(() => {
    updateCardsPerView();
    window.addEventListener('resize', updateCardsPerView);
    return () => window.removeEventListener('resize', updateCardsPerView);
  }, [updateCardsPerView]);

  const maxIndex = Math.max(0, testimonials.length - cardsPerView);

  // Garante que o currentIndex nunca ultrapasse o limite caso redimensione a janela
  useEffect(() => {
    if (currentIndex > maxIndex) {
      setCurrentIndex(maxIndex);
    }
  }, [cardsPerView, currentIndex, maxIndex]);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    touchDeltaX.current = 0;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    touchDeltaX.current = e.touches[0].clientX - touchStartX.current;
  };

  const handleTouchEnd = () => {
    if (touchStartX.current === null) return;
    if (touchDeltaX.current < -40) {
      handleNext();
    } else if (touchDeltaX.current > 40) {
      handlePrev();
    }
    touchStartX.current = null;
    touchDeltaX.current = 0;
  };

  // Cálculo da porcentagem de deslocamento por card:
  // Se cardsPerView === 1: cada card é 100%, deslocamento = currentIndex * 100%
  // Se cardsPerView === 2: cada card é ~50%
  // Se cardsPerView === 3: cada card é ~33.333%
  const gapPx = cardsPerView === 1 ? 0 : 20;

  return (
    <div className="lp-carousel-root" ref={containerRef}>
      {/* Resumo da reputação (sem links de fuga externos) */}
      <div className="lp-reviews-header">
        <div className="section-heading split-heading" style={{ marginBottom: '24px' }}>
          <div>
            <p className="eyebrow blue">AVALIAÇÕES REAIS DE CLIENTES</p>
            <h2>Quem precisou de socorro em Salvador recomenda.</h2>
          </div>
          <div className="lp-reviews-rating-tag">
            <div className="stars-row" style={{ display: 'inline-flex', gap: '4px' }}>
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={18} fill="#f59e0b" color="#f59e0b" />
              ))}
            </div>
            <strong>Nota {site.ratingValue} de 5 estrelas</strong>
            <span>Mais de {site.reviewsCount} avaliações reais de clientes</span>
          </div>
        </div>
      </div>

      {/* Wrapper com overflow oculto para nunca vazar a largura da tela */}
      <div
        className="lp-carousel-viewport"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div
          className="lp-carousel-track"
          style={{
            transform: `translateX(calc(-${currentIndex} * (${100 / cardsPerView}% + ${gapPx / cardsPerView}px)))`,
            gap: `${gapPx}px`,
          }}
        >
          {testimonials.map((t, idx) => (
            <article
              key={idx}
              className="lp-review-card"
              style={{
                flex: `0 0 calc(${100 / cardsPerView}% - ${(gapPx * (cardsPerView - 1)) / cardsPerView}px)`,
                maxWidth: `calc(${100 / cardsPerView}% - ${(gapPx * (cardsPerView - 1)) / cardsPerView}px)`,
              }}
            >
              <div className="lp-review-card-inner">
                <div>
                  <div className="review-card-top">
                    <div className="stars-row">
                      {[...Array(t.rating)].map((_, i) => (
                        <Star key={i} size={16} fill="#f59e0b" color="#f59e0b" />
                      ))}
                    </div>
                    <span className="review-badge-verified-blue">
                      <VerifiedBadgeIcon size={16} />
                      <span>Cliente Verificado</span>
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
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Controles de Navegação: Setas e Dots */}
      <div className="lp-carousel-controls">
        <button
          type="button"
          className="lp-carousel-btn"
          onClick={handlePrev}
          aria-label="Avaliação anterior"
        >
          <ChevronLeft size={22} />
        </button>

        <div className="lp-carousel-dots" aria-hidden="true">
          {Array.from({ length: maxIndex + 1 }).map((_, dotIdx) => (
            <button
              key={dotIdx}
              type="button"
              className={`lp-carousel-dot ${dotIdx === currentIndex ? 'active' : ''}`}
              onClick={() => setCurrentIndex(dotIdx)}
              aria-label={`Ir para avaliação ${dotIdx + 1}`}
            />
          ))}
        </div>

        <button
          type="button"
          className="lp-carousel-btn"
          onClick={handleNext}
          aria-label="Próxima avaliação"
        >
          <ChevronRight size={22} />
        </button>
      </div>
    </div>
  );
}
