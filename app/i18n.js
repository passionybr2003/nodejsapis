import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import backend from 'i18next-xhr-backend';

const { getCookie } = require('../server/util/helper');

// let urlParams = getCookie('urlParams');
// urlParams = JSON.parse(decodeURIComponent(urlParams));
let language = getCookie("locale");
//language = language.slice(0, language.indexOf('_'));
// console.log('language to translate', language);

i18n

  // The default path is "../public/locales/en/translation.json"
  .use(backend)

  // passes i18n down to react-i18next
  .use(initReactI18next)

  .init({
    defaultNS: 'translation',
    lng: language,
    fallbackLng: 'en_US',
    react: {
      useSuspense: true,
    },
    // ... other configs
  });
