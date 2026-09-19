import { colors, fonts } from '../theme.js';
import { useTranslation } from 'react-i18next';

const HERO_VIDEO_URL = 'https://69f702fe07a8ef6537054b52c95d3d89.r2.cloudflarestorage.com';

export default function Hero() {
  return (
    <>
      <section style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', padding: '64px 24px 0', background: colors.bg }}>
        <div style={{ maxWidth: 900, width: '100%' }}>
          <div style={{ fontFamily: fonts.logo, fontSize: 'clamp(48px,10vw,110px)', lineHeight: 0.85, textTransform: 'uppercase', WebkitTextStroke: `3px ${colors.ink}`, color: 'transparent', letterSpacing: 2 }}>ARREU</div>
          <div style={{ fontFamily: fonts.logo, fontSize: 'clamp(48px,10vw,110px)', lineHeight: 0.9, textTransform: 'uppercase', color: colors.ink, letterSpacing: 1 }}>CAMPERS</div>
          <div style={{ fontSize: 11, letterSpacing: 2, color: '#8a8a82', marginTop: 6, fontFamily: fonts.mono }}>// espai reservat per al logotip real</div>
        </div>
        <div style={{ marginTop: 28, fontSize: 'clamp(14px,2vw,20px)', lineHeight: 1.9, color: colors.accent, fontWeight: 600, fontFamily: fonts.mono }}>
          <span style={{ background: colors.ink, padding: '4px 10px', display: 'inline-block' }}>SUPER CUSTOM QUALITY</span><br />
          <span style={{ background: colors.ink, padding: '4px 10px', display: 'inline-block', marginTop: 6 }}>Mira els projectes a</span>{' '}
          <a href="https://instagram.com" target="_blank" rel="noreferrer" style={{ background: colors.ink, padding: '4px 10px', marginTop: 6, color: colors.accent, display: 'inline-flex', alignItems: 'center', gap: 8, textDecoration: 'none' }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="3" y="3" width="18" height="18" rx="5" />
              <circle cx="12" cy="12" r="3.5" />
              <circle cx="17.3" cy="6.7" r="1.2" fill="currentColor" stroke="none" />
            </svg>
            Instagram
          </a><br />
          <span style={{ background: colors.ink, padding: '4px 10px', display: 'inline-block', marginTop: 6 }}>Mira els van tours a</span>{' '}
          <a href="https://www.youtube.com/@ArreuCampers" target="_blank" rel="noreferrer" style={{ background: colors.ink, padding: '4px 10px', marginTop: 6, color: colors.accent, display: 'inline-flex', alignItems: 'center', gap: 8, textDecoration: 'none' }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M23 12s0-3.9-.5-5.8a3 3 0 0 0-2.1-2.1C18.5 3.6 12 3.6 12 3.6s-6.5 0-8.4.5a3 3 0 0 0-2.1 2.1C1 8.1 1 12 1 12s0 3.9.5 5.8a3 3 0 0 0 2.1 2.1c1.9.5 8.4.5 8.4.5s6.5 0 8.4-.5a3 3 0 0 0 2.1-2.1C23 15.9 23 12 23 12ZM9.9 15.4V8.6l5.8 3.4-5.8 3.4Z" />
            </svg>
            YouTube
          </a>
        </div>
      </section>
      <div style={{ width: '100%', aspectRatio: '16/6', maxHeight: 420 }}>
        <video
          src={HERO_VIDEO_URL}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
        />
      </div>
    </>
  );
}