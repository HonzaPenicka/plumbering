// next-i18next.config.js
const path = require('path');

/** @type {import('next-i18next').UserConfig} */
module.exports = {
  // ---------- základní nastavení ----------------
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'cs'],
    localeDetection: false,   // MUSÍ zůstat literál false
  },
  debug: process.env.NODE_ENV === 'development',

  // ---------- kde leží JSON překlady ------------
  localePath: path.resolve('./public/locales'),

  // ---------- dev helper ------------------------
  reloadOnPrerender: process.env.NODE_ENV === 'development',
};
