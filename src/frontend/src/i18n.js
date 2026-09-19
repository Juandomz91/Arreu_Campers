import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  ca: { translation: {
    quiTitle: 'QUI',
    quiText: "Un petit taller independent de Girona, creat i portat per una sola persona.",
    // ...resto de claves
  }},
  es: { translation: {
    quiTitle: 'QUIÉN',
    quiText: 'Un pequeño taller independiente de Girona, creado y gestionado por una sola persona.',
  }},
  en: { translation: {
    quiTitle: 'WHO',
    quiText: 'A small independent workshop in Girona, created and run by one person.',
  }},
  fr: { translation: {
    quiTitle: 'QUI',
    quiText: 'Un petit atelier indépendant à Gérone, créé et dirigé par une seule personne.',
  }},
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'ca',
  fallbackLng: 'ca',
  interpolation: { escapeValue: false },
});

export default i18n;