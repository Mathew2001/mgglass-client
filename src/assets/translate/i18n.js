// src/i18n.js
import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import heTranslation from './locales/he.json'
import enTranslation from './locales/en.json'



i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      he: { translation: heTranslation },
      en: { translation: enTranslation },
    },
    fallbackLng: 'he',
    supportedLngs: ['en', 'he'],
    ns: ['translation'],
    interpolation: { escapeValue: false },
  })

export default i18n
