import i18n from 'i18next';
import { initReactI18next } from "react-i18next";

import enUS from './languages/en-US.json';
import zhTW from './languages/zh-TW.json';

// console.log('zhTW', zhTW);

i18n
.use(initReactI18next)
.init({
  // we init with resources
  resources: {
    'en-US': {
      translations: enUS,
    },
    'zh-TW': {
      translations: zhTW,
    },
  },
  lng: localStorage.getItem('language') || 'zh-TW',
  fallbackLng: 'zh-TW',
  debug: true,

  // have a common namespace used around the full app
  ns: ['translations'],
  defaultNS: 'translations',

  // keySeparator: false, // we use content as keys

  interpolation: {
    escapeValue: false, // not needed for react!!
    formatSeparator: ',',
  },

  react: {
    wait: true,
  },
});

export default i18n;
