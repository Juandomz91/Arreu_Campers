import { useState } from 'react';
import { colors, fonts } from '../theme.js';
import ImagePlaceholder from './ImagePlaceholder.jsx';

const API_URL = import.meta.env.VITE_API_URL || '/api';

export default function ContactForm() {
  const [form, setForm] = useState({ nom: '', cognom: '', email: '', missatge: '' });
  const [status, setStatus] = useState('idle'); // idle | sending | ok | error
  const [errorMsg, setErrorMsg] = useState('');

  function update(field) {
    return (e) => setForm((f) => ({ ...f, [field]: e.target.value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus('sending');
    setErrorMsg('');
    try {
      const res = await fetch(`${API_URL}/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.detail || 'Error enviant el formulari');
      }
      setStatus('ok');
      setForm({ nom: '', cognom: '', email: '', missatge: '' });
    } catch (err) {
      setStatus('error');
      setErrorMsg(err.message);
    }
  }

  const inputStyle = { padding: 14, border: `1px solid ${colors.ink}`, background: '#fff', borderRadius: 2, fontSize: 15, fontFamily: fonts.body };
  const labelStyle = { display: 'flex', flexDirection: 'column', gap: 8, fontSize: 14, fontWeight: 600, fontFamily: fonts.body };

  return (
    <section>
      <div style={{ width: '100%', aspectRatio: '16/3', maxHeight: 200 }}>
        <ImagePlaceholder label="Foto de paisatge" />
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'minmax(280px,1fr) minmax(0,2fr)' }}>
        <div style={{ background: colors.ink, color: colors.bg, padding: '56px 40px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', minHeight: 520 }}>
          <div>
            <h2 style={{ fontFamily: fonts.logo, fontSize: 38, margin: '0 0 20px', textTransform: 'uppercase' }}>Contacta</h2>
            <p style={{ fontSize: 16, lineHeight: 1.6, color: colors.bodyTextLight, maxWidth: 280, fontFamily: fonts.body }}>Parlem català, castellà, italià, francès i anglès.</p>
          </div>
          <div>
            <div style={{ fontFamily: fonts.logo, fontSize: 36, color: colors.accent, lineHeight: 1, textTransform: 'uppercase' }}>ARREU<br />CAMPERS</div>
            <div style={{ marginTop: 20, fontSize: 15, fontFamily: fonts.body }}>hola@arreucampers.com</div>
            <div style={{ fontSize: 15, fontFamily: fonts.body }}>+34 623 944 937</div>
            <div style={{ marginTop: 16, fontSize: 13, color: colors.accent, fontFamily: fonts.mono }}>Tots els drets reservats.<br />2026</div>
          </div>
        </div>
        <div style={{ background: colors.bg, padding: '56px 40px' }}>
          <form onSubmit={handleSubmit}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20, maxWidth: 760 }}>
              <label style={labelStyle}>Nom
                <input required value={form.nom} onChange={update('nom')} type="text" style={inputStyle} />
              </label>
              <label style={labelStyle}>Cognom
                <input value={form.cognom} onChange={update('cognom')} type="text" style={inputStyle} />
              </label>
            </div>
            <label style={{ ...labelStyle, maxWidth: 760, marginTop: 20 }}>Email *
              <input required value={form.email} onChange={update('email')} type="email" style={inputStyle} />
            </label>
            <label style={{ ...labelStyle, maxWidth: 760, marginTop: 20 }}>Explica la teva idea aquí
              <textarea rows={5} value={form.missatge} onChange={update('missatge')} style={{ ...inputStyle, resize: 'vertical' }} />
            </label>
            <button type="submit" disabled={status === 'sending'} style={{
              marginTop: 24, maxWidth: 760, width: '100%', padding: 16, background: colors.ink, color: colors.bg,
              border: 'none', fontSize: 16, fontWeight: 600, cursor: 'pointer', borderRadius: 2, fontFamily: fonts.body
            }}>
              {status === 'sending' ? 'Enviant…' : 'Enviar'}
            </button>
            {status === 'ok' && <p style={{ color: '#2f7a3d', marginTop: 12, fontFamily: fonts.body }}>Missatge enviat correctament. Gràcies!</p>}
            {status === 'error' && <p style={{ color: colors.accent, marginTop: 12, fontFamily: fonts.body }}>{errorMsg}</p>}
          </form>
        </div>
      </div>
    </section>
  );
}