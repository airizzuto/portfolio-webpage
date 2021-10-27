const path = require('path')
const nextTranslate = require("next-translate")

module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles'), path.join(__dirname, "./pages/components")]
  },
  future: {
    webpack5: true,
  },
  i18n: {
    locales: ['en', 'es'],
    defaultLocale: 'en',
    pages: {
      "*": ["common"]
    }
  },
  nextTranslate
}
