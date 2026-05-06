import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { getLocalStorage } from "./services/localStorage";

import es from './locales/es/translation.json';
import en from './locales/en/translation.json';

const savedLanguage = getLocalStorage ('i18nextLng') || 'es';

i18n.use (initReactI18next).init ({
    resources: {
        es: {
            translation: es,
        },
        en: {
            translation: en,
        },
    },
    lng: savedLanguage,
    fallbackLng: 'es',
    interpolation: {
        escapeValue: false,
    },
});

export default i18n;