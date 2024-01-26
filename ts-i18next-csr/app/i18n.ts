import i18next from 'i18next'
import { initReactI18next } from 'react-i18next'
import { lng, fallbackLng } from '@/i18next.config'
import HttpBackend, { HttpBackendOptions } from 'i18next-http-backend'

i18next
  // load translation using http -> see /public/locales (i.e. https://github.com/i18next/react-i18next/tree/master/example/react/public/locales)
  // learn more: https://github.com/i18next/i18next-http-backend
  // want your translations to be loaded from a professional CDN? => https://github.com/locize/react-tutorial#step-2---use-the-locize-cdn
  .use(HttpBackend)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init<HttpBackendOptions>({
    // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
    // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
    // if you're using a language detector, do not define the lng option
    lng,

    // It is recommended to read up on IETF Language Codes.
    // If you're using a language detector, do not define the lng option
    // https://en.wikipedia.org/wiki/IETF_language_tag
    fallbackLng,

    interpolation: {
      escapeValue: false, // react already safes from xss
    },

    // react: {
    //   useSuspense: false, // The useTranslation hook will trigger a Suspense if not ready.
    // },

    backend: {
      loadPath:
        process.env.NEXT_PUBLIC_APP_URL + '/locales/{{lng}}/{{ns}}.json',
    },
  })

export default i18next
