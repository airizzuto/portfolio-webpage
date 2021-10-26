const path = require('path')

module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles'), path.join(__dirname, "./pages/components")]
  },
  future: {
    webpack5: true,
  },
  i18n: {
    locales: ['en-US', 'es'],
    defaultLocale: 'en-US',
  },
}
