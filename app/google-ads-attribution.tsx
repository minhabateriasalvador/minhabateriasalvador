'use client';

import { useEffect } from 'react';

const API_ENDPOINT = 'https://teste-conversao-offline.vercel.app/api/captura';
const ZW_DELIM = '\u2063';

export function GoogleAdsAttribution() {
  useEffect(() => {
    // 1. Captura de identificadores de clique da URL
    try {
      const p = new URLSearchParams(window.location.search);
      const ids = {
        gclid: p.get('gclid'),
        gbraid: p.get('gbraid'),
        wbraid: p.get('wbraid')
      };

      if (ids.gclid || ids.gbraid || ids.wbraid) {
        let salvo: { gclid?: string | null; gbraid?: string | null; invisivel?: string } | null = null;
        try {
          salvo = JSON.parse(sessionStorage.getItem('mb_gads_attr') || 'null');
        } catch {}

        if (!salvo || salvo.gclid !== ids.gclid || salvo.gbraid !== ids.gbraid) {
          fetch(API_ENDPOINT, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              gclid: ids.gclid,
              gbraid: ids.gbraid,
              wbraid: ids.wbraid,
              landing_url: window.location.href,
              ads_account: p.get('ads_account') || 'principal',
              utm_source: p.get('utm_source'),
              utm_campaign: p.get('utm_campaign'),
              utm_term: p.get('utm_term')
            })
          })
            .then((r) => r.json())
            .then((dados) => {
              if (dados && dados.success && dados.invisivel) {
                sessionStorage.setItem('mb_gads_attr', JSON.stringify(dados));
              }
            })
            .catch(() => {
              // Resiliente: se a API falhar, não interfere na navegação
            });
        }
      }
    } catch {}

    // 2. Delegação de cliques em links de WhatsApp
    const onClick = (e: MouseEvent) => {
      const link = e.target instanceof Element ? e.target.closest<HTMLAnchorElement>('a[href*="wa.me"], a[href*="api.whatsapp.com"]') : null;
      if (!link) return;

      let salvo: { invisivel?: string } | null = null;
      try {
        salvo = JSON.parse(sessionStorage.getItem('mb_gads_attr') || 'null');
      } catch {}

      if (!salvo || !salvo.invisivel) return;

      try {
        const u = new URL(link.href);
        const txt = u.searchParams.get('text') || '';

        // Anexa os caracteres invisíveis apenas se ainda não estiverem presentes
        if (!txt.includes(ZW_DELIM)) {
          u.searchParams.set('text', txt + salvo.invisivel);
          link.href = u.toString();
        }
      } catch {}
    };

    document.addEventListener('click', onClick, true);
    return () => document.removeEventListener('click', onClick, true);
  }, []);

  return null;
}
