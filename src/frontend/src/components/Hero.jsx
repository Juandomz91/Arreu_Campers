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
          <span style={{ background: colors.ink, padding: '4px 10px', display: 'inline-block' }}>Camperitzem furgonetes a mida, sense pressa.</span><br />
          <span style={{ background: colors.ink, padding: '4px 10px', display: 'inline-block', marginTop: 6 }}>Taller a Girona. Segueix-nos a</span>{' '}
          <a href="https://instagram.com" style={{ background: colors.ink, padding: '4px 10px', display: 'inline-block', marginTop: 6, color: colors.accent }}>Instagram</a>
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