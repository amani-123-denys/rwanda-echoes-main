import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { rw } from "./locales/rw";
import { en } from "./locales/en";
import { fr } from "./locales/fr";
import { sw } from "./locales/sw";

if (!i18n.isInitialized) {
  i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
      resources: {
        rw: { translation: rw },
        en: { translation: en },
        fr: { translation: fr },
        sw: { translation: sw },
      },
      fallbackLng: "rw",
      supportedLngs: ["rw", "en", "fr", "sw"],
      interpolation: { escapeValue: false },
      detection: {
        order: ["localStorage", "navigator"],
        caches: ["localStorage"],
        lookupLocalStorage: "hor-lang",
      },
    });
}

export default i18n;

export const LANGUAGES = [
  { code: "rw", label: "Kinyarwanda", short: "RW" },
  { code: "en", label: "English", short: "EN" },
  { code: "fr", label: "Français", short: "FR" },
  { code: "sw", label: "Kiswahili", short: "SW" },
] as const;
