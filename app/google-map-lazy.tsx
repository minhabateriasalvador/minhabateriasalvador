'use client';

import { useState, useEffect, useRef } from 'react';
import { MapPin, ArrowUpRight, Navigation } from 'lucide-react';
import { site } from './site';

interface GoogleMapLazyProps {
  title?: string;
  height?: number | string;
  theme?: 'dark' | 'light';
  className?: string;
}

export function GoogleMapLazy({
  title = 'Localização da Minha Bateria Salvador no STIEP',
  height = 380,
  theme = 'light',
  className = '',
}: GoogleMapLazyProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === 'undefined' || !('IntersectionObserver' in window)) {
      setIsLoaded(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsLoaded(true);
            observer.disconnect();
          }
        });
      },
      {
        rootMargin: '250px 0px',
        threshold: 0.01,
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  const embedUrl =
    'https://maps.google.com/maps?q=Minha%20Bateria%20Salvador%2C%20Rua%20Arthur%20Fraga%2C%20218%20-%20STIEP%2C%20Salvador%20-%20BA&t=&z=16&ie=UTF8&iwloc=&output=embed';

  return (
    <div
      ref={containerRef}
      className={`map-lazy-card ${theme === 'dark' ? 'map-dark' : 'map-light'} ${className}`}
      style={{ minHeight: typeof height === 'number' ? `${height}px` : height }}
    >
      <div className="map-frame-wrapper" style={{ height: typeof height === 'number' ? `${height}px` : height }}>
        {isLoaded ? (
          <iframe
            src={embedUrl}
            title={title}
            width="100%"
            height="100%"
            style={{ border: 0, width: '100%', height: '100%', display: 'block' }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        ) : (
          <div className="map-placeholder">
            <div className="map-placeholder-content">
              <div className="map-icon-pulse">
                <MapPin size={34} aria-hidden="true" />
              </div>
              <p className="map-placeholder-title">Minha Bateria Salvador</p>
              <p className="map-placeholder-addr">{site.address}</p>
              <button
                type="button"
                className="map-load-btn"
                onClick={() => setIsLoaded(true)}
                aria-label="Carregar mapa interativo do Google Maps"
              >
                <Navigation size={14} aria-hidden="true" /> Ver mapa interativo
              </button>
            </div>
          </div>
        )}
      </div>
      <div className="map-card-footer">
        <div className="map-card-info">
          <MapPin size={16} aria-hidden="true" />
          <span>{site.address}</span>
        </div>
        <a
          href={site.maps}
          target="_blank"
          rel="noopener noreferrer"
          className="map-card-action"
          aria-label="Traçar rota no Google Maps até a Minha Bateria Salvador"
        >
          Traçar rota no Google Maps <ArrowUpRight size={15} aria-hidden="true" />
        </a>
      </div>
    </div>
  );
}
