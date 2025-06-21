// src/i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import translationUZ from './locales/uz.json';
import translationEN from './locales/en.json';

const resources = {
  uz: {
    translation: translationUZ,
  },
  en: {
    translation: translationEN,
  },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'uz', // default til
    fallbackLng: 'en', // agar tarjima topilmasa
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;

