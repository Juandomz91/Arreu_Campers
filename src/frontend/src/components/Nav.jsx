import { colors, fonts } from '../theme.js';
import { useTranslation } from 'react-i18next';
import { LANGUAGES } from '../i18n.js';

export default function Nav() {
  const { t, i18n } = useTranslation();

  return (
    <nav style={{
      position: 'sticky', top: 0, zIndex: 50, display: 'flex',
      alignItems: 'center', justifyContent: 'space-between',
      padding: '16px 28px', background: colors.bg, borderBottom: `2px solid ${colors.ink}`
    }}>
      <div style={{ display: 'flex', gap: 10 }}>
        <a href="https://wa.me/34623944937" target="_blank" rel="noreferrer" aria-label="WhatsApp"
          style={{ width: 38, height: 38, borderRadius: '50%', background: colors.ink, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill={colors.bg}>
            <path d="M17.6 6.3A8.9 8.9 0 0 0 12 4a9 9 0 0 0-7.7 13.6L3 21l3.5-1.2A9 9 0 1 0 17.6 6.3ZM12 19.5a7.4 7.4 0 0 1-3.8-1l-.3-.2-2 .7.7-2-.2-.3A7.5 7.5 0 1 1 19.5 12 7.5 7.5 0 0 1 12 19.5Z" />
          </svg>
        </a>
        <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram"
          style={{ width: 38, height: 38, borderRadius: '50%', background: colors.ink, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={colors.bg} strokeWidth="2">
            <rect x="3" y="3" width="18" height="18" rx="5" />
            <circle cx="12" cy="12" r="3.5" />
            <circle cx="17.3" cy="6.7" r="1.2" fill={colors.bg} stroke="none" />
          </svg>
        </a>
      </div>
      <select
        aria-label={t('nav.language')}
        value={i18n.resolvedLanguage}
        onChange={(e) => i18n.changeLanguage(e.target.value)}
        style={{ fontFamily: fonts.body, fontSize: 14, fontWeight: 600, background: '#fff', border: `1px solid ${colors.ink}`, padding: '8px 12px', borderRadius: 2 }}
      >
        {LANGUAGES.map((lng) => (
          <option key={lng} value={lng}>{lng.toUpperCase()}</option>
        ))}
      </select>
    </nav>
  );
}
