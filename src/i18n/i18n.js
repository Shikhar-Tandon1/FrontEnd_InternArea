import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from "i18next-browser-languagedetector";
import enTranslation from "../Translation/en.json";
import frTranslation from "../Translation/fr.json";
import esTranslation from "../Translation/es.json";
import hiTranslation from "../Translation/hi.json";
import ptTranslation from "../Translation/pt.json";
import zhTranslation from "../Translation/zh.json";

i18n
  .use(LanguageDetector) // detects browser's current language
  .use(initReactI18next) // initializes i18next with react-i18next
  .init({
    resources: {
       en: { translation: enTranslation },
       fr: { translation: frTranslation },
       es: { translation: esTranslation },
       hi: { translation: hiTranslation },
       pt: { translation: ptTranslation },
       zh: { translation: zhTranslation }
    }, 
    lng: 'en', 
    interpolation: {
      escapeValue: false, 
    },
    fallbackLng: "en", 
    detection: {
      order: ["localStorage", "navigator"],
      caches: ["localStorage"], 
    },
 });
export default i18n;