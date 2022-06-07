import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import XHR from 'i18next-xhr-backend';
import { initReactI18next } from 'react-i18next';

import en from './locales/en.json';

i18n
  .use(XHR)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
    },
    detection: {
      order: ['querystring', 'navigator'],
      lookupQuerystring: 'lng',
    },
    supportedLngs: ['en'],
    fallbackLng: 'en',
    lng: 'en',
    debug: false,
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
