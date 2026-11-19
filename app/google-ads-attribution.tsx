'use client';

import { useEffect } from 'react';

const API_ENDPOINT = 'https://teste-conversao-offline.vercel.app/api/captura';
const STORAGE_KEY = 'mb_gads_attr';
const TTL_MS = 90 * 24 * 60 * 60 * 1000; // 90 dias (janela máxima de conversão do Google Ads)

const BASE32_ALPHABET = '23456789ABCDEFGHJKLMNPQRSTUVWXYZ';
const ZW_CHARS = ['\u200B', '\u200C', '\u200D', '\u2060'];
const ZW_DELIM = '\u2063';

interface AtribuicaoSalva {
  ref: string;
  invisivel: string;
  gclid: string | null;
  gbraid: string | null;
  wbraid: string | null;
  ts: number;
}

function gerarRefCurta(): string {
  let ref = '';
  const bytes = new Uint8Array(6);
  if (typeof window !== 'undefined' && window.crypto && window.crypto.getRandomValues) {
    window.crypto.getRandomValues(bytes);
  } else {
    for (let i = 0; i < 6; i++) {
      bytes[i] = Math.floor(Math.random() * 256);
    }
  }
  for (let i = 0; i < 6; i++) {
    ref += BASE32_ALPHABET[bytes[i] % BASE32_ALPHABET.length];
  }
  return ref;
}

function calcularChecksum(str: string): number {
  let sum = 0;
  for (let i = 0; i < str.length; i++) {
    sum = (sum * 31 + str.charCodeAt(i)) & 0x0f;
  }
  return sum;
}

function codificarParaInvisivel(ref: string): string {
  let bits = '';
  for (const char of ref) {
    let val = BASE32_ALPHABET.indexOf(char);
    if (val === -1) val = 0;
    bits += val.toString(2).padStart(5, '0');
  }
  const chk = calcularChecksum(ref);
  bits += chk.toString(2).padStart(4, '0');
  if (bits.length % 2 !== 0) bits += '0';

  let invisivel = ZW_DELIM;
  for (let i = 0; i < bits.length; i += 2) {
    const par = parseInt(bits.slice(i, i + 2), 2);
    invisivel += ZW_CHARS[par];
  }
  return invisivel + ZW_DELIM;
}

function lerStorage(storage: Storage): AtribuicaoSalva | null {
  try {
    const raw = storage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as Partial<AtribuicaoSalva> | null;
    if (!parsed || typeof parsed.invisivel !== 'string' || !parsed.invisivel.includes(ZW_DELIM)) {
      return null;
    }
    if (typeof parsed.ts === 'number' && Date.now() - parsed.ts > TTL_MS) {
      return null;
    }
    return {
      ref: typeof parsed.ref === 'string' ? parsed.ref : '',
      invisivel: parsed.invisivel,
      gclid: parsed.gclid ?? null,
      gbraid: parsed.gbraid ?? null,
      wbraid: parsed.wbraid ?? null,
      ts: typeof parsed.ts === 'number' ? parsed.ts : Date.now(),
    };
  } catch {
    return null;
  }
}

function lerSalvo(): AtribuicaoSalva | null {
  if (typeof window === 'undefined') return null;
  return lerStorage(window.localStorage) || lerStorage(window.sessionStorage);
}

function gravarSalvo(dados: AtribuicaoSalva): void {
  const serialized = JSON.stringify(dados);
  try {
    window.localStorage.setItem(STORAGE_KEY, serialized);
  } catch {}
  try {
    window.sessionStorage.setItem(STORAGE_KEY, serialized);
  } catch {}
}

function anexarNoLink(link: HTMLAnchorElement, invisivel: string): void {
  try {
    const u = new URL(link.href);
    const txt = u.searchParams.get('text') || '';
    if (!txt.includes(ZW_DELIM)) {
      // Insere antes da última palavra para evitar .trim() do WhatsApp/iOS
      // preservando integralmente o início da frase ("Encontrei vocês no *Google*")
      const ultimoEspaco = txt.trimEnd().lastIndexOf(' ');
      const novoTexto =
        ultimoEspaco > 0
          ? txt.slice(0, ultimoEspaco + 1) + invisivel + txt.slice(ultimoEspaco + 1)
          : txt + invisivel;
      u.searchParams.set('text', novoTexto);
      link.href = u.toString();
    }
  } catch {}
}

function anexarEmTodosOsLinks(invisivel: string): void {
  try {
    const links = document.querySelectorAll<HTMLAnchorElement>(
      'a[href*="wa.me"], a[href*="api.whatsapp.com"]'
    );
    links.forEach((link) => anexarNoLink(link, invisivel));
  } catch {}
}

export function GoogleAdsAttribution() {
  useEffect(() => {
    let registroAtivo: AtribuicaoSalva | null = lerSalvo();
    let payloadPendente: string | null = null;
    let envioConfirmado = true;

    // 1. Captura síncrona de identificadores de clique (0ms de atraso)
    try {
      const p = new URLSearchParams(window.location.search);
      const ids = {
        gclid: p.get('gclid'),
        gbraid: p.get('gbraid'),
        wbraid: p.get('wbraid'),
      };

      if (ids.gclid || ids.gbraid || ids.wbraid) {
        const mesmoClique =
          registroAtivo &&
          registroAtivo.gclid === ids.gclid &&
          registroAtivo.gbraid === ids.gbraid &&
          registroAtivo.wbraid === ids.wbraid &&
          Boolean(registroAtivo.ref);

        if (!mesmoClique) {
          const ref = gerarRefCurta();
          const invisivel = codificarParaInvisivel(ref);
          registroAtivo = {
            ref,
            invisivel,
            gclid: ids.gclid,
            gbraid: ids.gbraid,
            wbraid: ids.wbraid,
            ts: Date.now(),
          };
          gravarSalvo(registroAtivo);

          payloadPendente = JSON.stringify({
            ref,
            gclid: ids.gclid,
            gbraid: ids.gbraid,
            wbraid: ids.wbraid,
            landing_url: window.location.href,
            ads_account: p.get('ads_account') || 'principal',
            utm_source: p.get('utm_source'),
            utm_campaign: p.get('utm_campaign'),
            utm_term: p.get('utm_term'),
          });
          envioConfirmado = false;

          // Envio assíncrono com keepalive (não bloqueia a página nem o clique)
          fetch(API_ENDPOINT, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: payloadPendente,
            keepalive: true,
          })
            .then((r) => {
              if (r.ok) envioConfirmado = true;
            })
            .catch(() => {
              // Resiliente: nunca interfere na navegação
            });
        }
      }
    } catch {}

    // 2. Atualiza proativamente todos os links de WhatsApp já presentes na página
    if (registroAtivo?.invisivel) {
      anexarEmTodosOsLinks(registroAtivo.invisivel);
    }

    // 3. Delegação de cliques (cobre botões dinâmicos como a barra mobile) sem bloquear GTM/ContactEvents
    const onClick = (e: MouseEvent) => {
      const link =
        e.target instanceof Element
          ? e.target.closest<HTMLAnchorElement>('a[href*="wa.me"], a[href*="api.whatsapp.com"]')
          : null;
      if (!link) return;

      const atual = registroAtivo || lerSalvo();
      if (!atual?.invisivel) return;

      anexarNoLink(link, atual.invisivel);

      // Se o visitante clicou antes do fetch responder, reforça com sendBeacon (idempotente no Neon)
      if (!envioConfirmado && payloadPendente && typeof navigator !== 'undefined' && navigator.sendBeacon) {
        try {
          navigator.sendBeacon(API_ENDPOINT, payloadPendente);
        } catch {}
      }
    };

    document.addEventListener('click', onClick, true);
    return () => document.removeEventListener('click', onClick, true);
  }, []);

  return null;
}
