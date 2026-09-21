import { colors, fonts } from '../theme.js';
import { useTranslation } from 'react-i18next';
import nurbi from '../recursos/nurbi.jpg';
import duo from '../recursos/duo.jpeg';
import blues from '../recursos/blues.jpg';

export function QueFem() {
  const { t } = useTranslation();
  const items = t('queFem.items', { returnObjects: true });

  return (
    <section style={{ padding: '100px 24px', background: colors.bg }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <h2 style={{ fontFamily: fonts.logo, fontSize: 'clamp(32px,5vw,56px)', margin: '10px 0 24px', textTransform: 'uppercase', lineHeight: 1 }}>{t('queFem.title')}</h2>
        <p style={{fontFamily: fonts.logo, maxWidth: 640, fontSize: 18, lineHeight: 1.6, color: colors.bodyText, marginBottom: 56 }}>
          {t('queFem.intro1')}<br/><br/>
          {t('queFem.intro2')}
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(240px,1fr))', gap: 2, background: colors.ink, border: `2px solid ${colors.ink}` }}>
          {items.map((it) => (
            <div key={it.n} style={{ background: colors.bg, padding: '32px 24px' }}>
              <div style={{ fontFamily: fonts.logo, fontSize: 15, color: colors.accent, marginBottom: 10 }}>{it.n}</div>
              <h3 style={{ fontSize: 19, margin: '0 0 8px', fontWeight: 700 }}>{it.title}</h3>
              <p style={{ fontSize: 15, lineHeight: 1.55, color: colors.muted, margin: 0 }}>{it.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function QuiSom() {
  const { t } = useTranslation();

  return (
    <section style={{ padding: '100px 24px', background: colors.ink, color: colors.bg }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <h2 style={{ fontFamily: fonts.logo, fontSize: 'clamp(32px,5vw,52px)', margin: '10px 0 24px', textTransform: 'uppercase', lineHeight: 1, color: colors.accent }}>{t('quiSom.title')}</h2>
          <p style={{fontFamily: fonts.logo, maxWidth: 900, fontSize: 18, lineHeight: 1.6, color: colors.bodyTextLight, marginBottom: 56 }}>
           {t('quiSom.text1')} <br/> {t('quiSom.text2')}
          </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,minmax(0,1fr))', gap: 24 }}>
          <div>
            <div style={{ aspectRatio: '4/3', width: '100%' }}>
              <img src={nurbi} alt={t('quiSom.altTeam')} style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 30%', display: 'block' }} />
            </div>
            <div style={{ background: '#1c1b17', padding: '14px 16px', marginTop: 10 }}>
              <div style={{ fontFamily: fonts.mono, fontStyle: 'italic', fontSize: 15, fontWeight: 600, color: colors.bg, }}>Norbert</div>
              <div style={{ fontFamily: fonts.mono, fontStyle: 'italic', fontSize: 13, color: colors.bodyTextLight, marginTop: 4 }}>{t('quiSom.norbertBio1')}<br/> {t('quiSom.norbertBio2')}</div>
            </div>
          </div>
          <div style={{ aspectRatio: '4/3', width: '100%' }}>
            <img src={duo} alt={t('quiSom.altWorkshop')} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
          </div>
          <div>
            <div style={{ aspectRatio: '4/3', width: '100%' }}>
             <img src={blues} alt={t('quiSom.altVehicle')} style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 70%', display: 'block' }} />
            </div>
            <div style={{ background: '#1c1b17', padding: '14px 16px', marginTop: 10 }}>
              <div style={{ fontFamily: fonts.mono, fontStyle: 'italic', fontSize: 15, fontWeight: 600, color: colors.bg }}>Blues</div>
              <div style={{ fontFamily: fonts.mono, fontStyle: 'italic', fontSize: 13, color: colors.bodyTextLight, marginTop: 4 }}>{t('quiSom.bluesBio')}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function ComTreballem() {
  const { t } = useTranslation();
  const steps = t('com.steps', { returnObjects: true });

  return (
    <section style={{ padding: '100px 24px', background: colors.bg }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <h2 style={{ fontFamily: fonts.logo, fontSize: 'clamp(32px,5vw,56px)', margin: '10px 0 48px', textTransform: 'uppercase', lineHeight: 1 }}>{t('com.title')}</h2>
        <div style={{ display: 'flex', flexDirection: 'column', borderTop: `2px solid ${colors.ink}` }}>
          {steps.map((s) => (
            <div key={s.n} style={{ display: 'grid', gridTemplateColumns: '80px minmax(0,1fr)', gap: 24, padding: '28px 0', borderBottom: `2px solid ${colors.ink}`, alignItems: 'baseline' }}>
              <div style={{ fontFamily: fonts.logo, fontSize: 32, color: colors.accent }}>{s.n}</div>
              <div>
                <h3 style={{ margin: '0 0 6px', fontSize: 20, fontWeight: 700, fontFamily: fonts.mono }}>{s.title}</h3>
                {s.body.map((paragraph, i) => (
                  <p key={i} style={{ margin: '0 0 10px', fontSize: 16, lineHeight: 1.55, color: colors.muted, maxWidth: 640, fontFamily: fonts.mono }}>{paragraph}</p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function PerQue() {
  const { t } = useTranslation();
  const reasons = t('perQue.reasons', { returnObjects: true });

  return (
    <section style={{ padding: '100px 24px', background: colors.ink, color: colors.bg }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>

        <h2 style={{ fontFamily: fonts.logo, fontSize: 'clamp(32px,5vw,56px)', margin: '10px 0 48px', textTransform: 'uppercase', lineHeight: 1, color: colors.bg }}>{t('perQue.title')}</h2>
        <div style={{ display: 'flex', flexDirection: 'column', borderTop: `2px solid ${colors.bg}` }}>
          {reasons.map((r) => (
            <div key={r.n} style={{ display: 'grid', gridTemplateColumns: '80px minmax(0,1fr)', gap: 24, padding: '28px 0', borderBottom: `2px solid ${colors.bg}`, alignItems: 'baseline' }}>
              <div style={{ fontFamily: fonts.logo, fontSize: 32, color: colors.accent }}>{r.n}</div>
              <div>
                <h3 style={{ margin: '0 0 6px', fontSize: 20, fontWeight: 700, color: colors.bg, fontFamily: fonts.mono }}>{r.title}</h3>
                {r.body.map((paragraph, i) => (
                  <p key={i} style={{ margin: '0 0 10px', fontSize: 16, lineHeight: 1.55, color: colors.bodyTextLight, maxWidth: 640, fontFamily: fonts.mono }}>{paragraph}</p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
