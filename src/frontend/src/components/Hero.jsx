import { useEffect, useRef } from 'react';
import { colors, fonts } from '../theme.js';
import { useTranslation } from 'react-i18next';
import logo from '../recursos/logo.svg';

// Vídeo del Hero. Posa el fitxer a  src/frontend/public/video/hero.mp4
// (tot el que hi ha a /public es serveix tal qual des de l'arrel del web).
// Si més endavant el puges a Cloudflare R2, canvia això per la URL pública
// COMPLETA del fitxer, p. ex. 'https://pub-xxxxxxxx.r2.dev/hero.mp4'.
const HERO_VIDEO_URL = '/video/hero.mp4';
const HERO_POSTER_URL = '/video/hero-poster.jpg'; // primer fotograma, es veu mentre carrega

const linkStyle = { background: colors.ink, padding: '4px 10px', marginTop: 6, color: colors.accent, display: 'inline-flex', alignItems: 'center', gap: 8, textDecoration: 'none' };
const labelStyle = { background: colors.ink, padding: '4px 10px', display: 'inline-block', marginTop: 6 };

export default function Hero() {
  const { t } = useTranslation();
  const videoRef = useRef(null);

  // React no sempre escriu l'atribut `muted` al DOM, i sense ell alguns
  // navegadors (sobretot Safari a iOS) bloquegen l'autoplay. Ho forcem aquí.
  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    v.muted = true;
    v.play().catch(() => { /* autoplay bloquejat: es queda el poster */ });
  }, []);

  return (
    <>
      <section style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', padding: '64px 24px 0', background: colors.bg }}>
        <div style={{ maxWidth: 900, width: '100%' }}>
          <h1 style={{ margin: 0 }}>
            <img
              src={logo}
              alt="Arreu Campers"
              style={{ width: 'clamp(240px, 60vw, 560px)', height: 'auto', display: 'block', margin: '0 auto' }}
            />
          </h1>
        </div>
        <div style={{ marginTop: 28, fontSize: 'clamp(14px,2vw,20px)', lineHeight: 1.9, color: colors.accent, fontWeight: 600, fontFamily: fonts.mono }}>
          <span style={{ background: colors.ink, padding: '4px 10px', display: 'inline-block' }}>{t('hero.tagline')}</span><br />
          <span style={labelStyle}>{t('hero.projects')}</span>{' '}
          <a href="https://instagram.com" target="_blank" rel="noreferrer" style={linkStyle}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="3" y="3" width="18" height="18" rx="5" />
              <circle cx="12" cy="12" r="3.5" />
              <circle cx="17.3" cy="6.7" r="1.2" fill="currentColor" stroke="none" />
            </svg>
            Instagram
          </a><br />
          <span style={labelStyle}>{t('hero.vanTours')}</span>{' '}
          <a href="https://www.youtube.com/@ArreuCampers" target="_blank" rel="noreferrer" style={linkStyle}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M23 12s0-3.9-.5-5.8a3 3 0 0 0-2.1-2.1C18.5 3.6 12 3.6 12 3.6s-6.5 0-8.4.5a3 3 0 0 0-2.1 2.1C1 8.1 1 12 1 12s0 3.9.5 5.8a3 3 0 0 0 2.1 2.1c1.9.5 8.4.5 8.4.5s6.5 0 8.4-.5a3 3 0 0 0 2.1-2.1C23 15.9 23 12 23 12ZM9.9 15.4V8.6l5.8 3.4-5.8 3.4Z" />
            </svg>
            YouTube
          </a>
        </div>
      </section>
      <div style={{ width: '100%', aspectRatio: '16/6', maxHeight: 420, background: colors.ink }}>
        <video
          ref={videoRef}
          src={HERO_VIDEO_URL}
          poster={HERO_POSTER_URL}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          aria-hidden="true"
          style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
        />
      </div>
    </>
  );
}
