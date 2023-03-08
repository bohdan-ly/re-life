const path = require('path');

const locales = {
  en: 'en',
  ua: 'ua',
};

module.exports = {
  debug: process.env.NODE_ENV === 'development',
  i18n: {
    defaultLocale: locales.en,
    locales: [locales.en, locales.ua],
    fallbackLng: locales.en,
  },
  react: { useSuspense: false },
  localePath: typeof window === 'undefined' ? path.resolve('./public/locales') : '/locales',
};
