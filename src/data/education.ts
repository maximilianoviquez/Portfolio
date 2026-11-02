import type { Bilingual } from '../context/LanguageContext';

export const educationItems: { title: Bilingual<string>; sub: Bilingual<string> }[] = [
  {
    title: { es: 'Universidad ORT Uruguay', en: 'Universidad ORT Uruguay' },
    sub: { es: 'Analista en Tecnologías de la Información · 2026', en: 'Analyst in Information Technology · 2026' },
  },
];

export const languages: { title: Bilingual<string>; sub: Bilingual<string> }[] = [
  { title: { es: 'Español', en: 'Spanish' }, sub: { es: 'Nativo', en: 'Native' } },
  {
    title: { es: 'Inglés', en: 'English' },
    sub: {
      es: 'Intermedio alto (B2), curso ESL en Camden County College, EE.UU.',
      en: 'Upper intermediate (B2), ESL course at Camden County College, USA',
    },
  },
];
