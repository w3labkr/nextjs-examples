// 'use client';

import i18next from 'i18next';
import HttpApi from 'i18next-http-backend';
import { initReactI18next } from 'react-i18next';
import { fallbackLng } from '@/i18next.config';

import enTranslation from '@/public/locales/en/translations.json';
import koTranslation from '@/public/locales/ko/translations.json';

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
  en: {
    translation: enTranslation,
  },
  ko: {
    translation: koTranslation,
  },
};

i18next
  // load translation using http -> see /public/locales (i.e. https://github.com/i18next/react-i18next/tree/master/example/react/public/locales)
  // learn more: https://github.com/i18next/i18next-http-backend
  // want your translations to be loaded from a professional CDN? => https://github.com/locize/react-tutorial#step-2---use-the-locize-cdn
  .use(HttpApi)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    // the translations
    // (tip move them in a JSON file and import them,
    // or even better, manage them via a UI: https://react.i18next.com/guides/multiple-translation-files#manage-your-translations-with-a-management-gui)
    resources,

    // if you're using a language detector, do not define the lng option
    lng: 'en',

    // It is recommended to read up on IETF Language Codes.
    // If you're using a language detector, do not define the lng option
    // https://en.wikipedia.org/wiki/IETF_language_tag
    fallbackLng,

    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },

    // react: {
    //   useSuspense: false, // The useTranslation hook will trigger a Suspense if not ready.
    // },
  });

export default i18next;
