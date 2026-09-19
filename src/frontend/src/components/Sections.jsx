import { colors, fonts } from '../theme.js';
import ImagePlaceholder from './ImagePlaceholder.jsx';
import nurbi from 'src/frontend/recursos/nurbi.jpg';
import duo from 'src/frontend/recursos/duo.jpeg';
import blues from 'src/frontend/recursos/blues.jpg';

export function QueFem() {
  const items = [
    { n: '01', title: 'Disseny a mida', body: "Cada furgoneta i cada forma de viatjar és diferent. Partim d'un pla fet a mida per a tu." },
    { n: '02', title: 'Instal·lació completa', body: 'Aïllament, electricitat, aigua, gas i fusteria: tot fet al taller, d\'una sola vegada.' },
    { n: '03', title: 'Homologació i papers', body: 'T\'acompanyem amb la documentació perquè el vehicle surti legal a carretera.' },
  ];
  return (
    <section style={{ padding: '100px 24px', background: colors.bg }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        
        <h2 style={{ fontFamily: fonts.logo, fontSize: 'clamp(32px,5vw,56px)', margin: '10px 0 24px', textTransform: 'uppercase', lineHeight: 1 }}>Què fem</h2>
        <p style={{fontFamily: fonts.logo, maxWidth: 640, fontSize: 18, lineHeight: 1.6, color: colors.bodyText, marginBottom: 56 }}>
          Arreu Campers és una empresa dedicada a assessorar, dissenyar, construir i homologar camperitzacions a mida, de qualitat i amb un enfocament curiós.<br/><br/>
          Cada vehicle és una creació única, amb adaptacions enginyoses per solucionar les necessitats específiques de cada client.
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
  return (
    <section style={{ padding: '100px 24px', background: colors.ink, color: colors.bg }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <h2 style={{ fontFamily: fonts.logo, fontSize: 'clamp(32px,5vw,52px)', margin: '10px 0 24px', textTransform: 'uppercase', lineHeight: 1, color: colors.accent }}>QUI</h2>
          <p style={{fontFamily: fonts.logo, maxWidth: 640, fontSize: 18, lineHeight: 1.6, color: colors.bodyTextLight, marginBottom: 56 }}>
           Un petit taller independent de Girona, creat i portat per una sola persona. <br/> Una manera propera d'entendre les camperitzacions: pocs projectes anuals, artesania i atenció al detall.
          </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,minmax(0,1fr))', gap: 24 }}>
          <div>
            <div style={{ aspectRatio: '4/3', width: '100%' }}>
              <img src="src/frontend/recursos/nurbi.jpg" alt="Foto de l'equip al taller" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
            </div>
            <div style={{ background: '#1c1b17', padding: '14px 16px', marginTop: 10 }}>
              <div style={{ fontFamily: fonts.mono, fontStyle: 'italic', fontSize: 15, fontWeight: 600, color: colors.bg }}>Norbert</div>
              <div style={{ fontFamily: fonts.mono, fontStyle: 'italic', fontSize: 13, color: colors.bodyTextLight, marginTop: 4 }}>Esquiador i amant dels racons remots. El més feliç en dies de forta tramuntana.<br/> Cul inquiet, sempre en porta alguna de cap. Amant dels gadgets de tota mena.</div>
            </div>
          </div>
          <div style={{ aspectRatio: '4/3', width: '100%' }}>
            <img src="src/frontend/recursos/duo.jpeg" alt="Foto del taller" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
          </div>
          <div>
            <div style={{ aspectRatio: '4/3', width: '100%' }}>
              <img src="src/frontend/recursos/blues.jpg" alt="Foto del vehicle" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
            </div>
            <div style={{ background: '#1c1b17', padding: '14px 16px', marginTop: 10 }}>
              <div style={{ fontFamily: fonts.mono, fontStyle: 'italic', fontSize: 15, fontWeight: 600, color: colors.bg }}>Blues</div>
              <div style={{ fontFamily: fonts.mono, fontStyle: 'italic', fontSize: 13, color: colors.bodyTextLight, marginTop: 4 }}>Ajudant i cap de taller. Li agraden tots els pals.</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function ComTreballem() {
  const steps = [
    { n: '01', title: 'PARLEM', body: ["Explica'm com vols utilitzar el teu vehicle. Ofereixo assessorament si encara no en disposes. Després de la primera trucada podràs tenir una orientació temporal i econòmica del projecte."] },
    { n: '02', title: 'DISSENYEM', body: [
      "Si decideixes que soc la persona ideal per crear la teva casa sobre rodes, s'acorda una petita paga i senyal que confirma l'inici del projecte i l'entrada a l'agenda del taller.",
      "Plegats dissenyarem la distribució perfecta, es dimensionaran les instal·lacions d'accessoris, el sistema elèctric i el d'aigua, i es triaran els materials de construcció i acabats disponibles.",
    ] },
    { n: '03', title: 'CONSTRUÏM', body: [
      'Segons el vehicle i la complexitat del projecte, es necessitaran més o menys hores. Aproximadament, cada camperització implica d\'un a tres mesos de feina.',
      'Amb molt de gust s\'accepten visites al taller sota demanda, en moments interessants durant el procés de construcció.',
    ] },
    { n: '04', title: 'HOMOLOGUEM', body: [
      "Cada projecte es realitza tenint en compte la normativa vigent per fer que el procés d'homologació sigui el més fluid possible.",
      "Acompanyo el client a passar la revisió de la ITV si ha volgut rebre el vehicle abans. També s'ofereix l'opció d'entregar el vehicle amb la ITV passada.",
    ] },
    { n: '05', title: 'GAUDIM', body: [
      "Cada camperització fa créixer la petita gran família d'Arreu Campers.",
      'Cada feina que entrego em fa estar orgullós i feliç, sabent que us ajudo a viure noves experiències en aquesta forma tan curiosa i bonica de viatjar: de manera autosuficient amb el vostre vehicle.',
    ] },
  ];
  return (
    <section style={{ padding: '100px 24px', background: colors.bg }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <h2 style={{ fontFamily: fonts.logo, fontSize: 'clamp(32px,5vw,56px)', margin: '10px 0 48px', textTransform: 'uppercase', lineHeight: 1 }}>COM</h2>
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
  const reasons = [
    { n: '01', title: 'Tot neix de viure-ho', body: ['Soc viatger i fa anys que visc i em moc amb diferents vehicles lluny de casa per períodes extensos. Aquesta experiència és la base de cada projecte que construeixo.'] },
    { n: '02', title: "Treball d'artesà", body: ["Cada projecte es construeix amb temps, atenció al detall i mirada global. Busco l'equilibri entre disseny, funcionalitat i tècnica."] },
    { n: '03', title: 'Responsabilitat ecològica', body: ['El 100% de la fusta que utilitzo compta amb certificacions europees de sostenibilitat. Materials escollits amb criteri i coherents amb la meva filosofia de vida.'] },
    { n: '04', title: 'Economia en xarxa', body: ['Treballo amb proveïdors locals, marques del país i professionals que comparteixen la mateixa manera de fer, apostant pel teixit econòmic del territori.'] },
    { n: '05', title: 'Projectes amb ànima', body: ['Arreu Campers no neix només per construir furgonetes. Neix d\'una manera concreta d\'entendre com s\'han de viure i de la motivació de crear projectes totalment personalitzats, no en sèrie.'] },
  ];
  return (
    <section style={{ padding: '100px 24px', background: colors.ink, color: colors.bg }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>

        <h2 style={{ fontFamily: fonts.logo, fontSize: 'clamp(32px,5vw,56px)', margin: '10px 0 48px', textTransform: 'uppercase', lineHeight: 1, color: colors.bg }}>PER QUÈ</h2>
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
