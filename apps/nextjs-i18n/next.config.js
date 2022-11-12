const withTM = require('next-transpile-modules')(['@had/ui']);

module.exports = withTM({
  reactStrictMode: true,
  i18n: {
    locales: ['en', 'pl'],
    defaultLocale: 'pl',
  },
});
