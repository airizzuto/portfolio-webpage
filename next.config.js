const path = require('path')
const nextTranslate = require("next-translate");

module.exports = {
  sassOptions: {
    includePaths: [
      path.join(__dirname, 'styles'),
      path.join(__dirname, "./pages/components")
    ]
  },
  future: {
    webpack5: true,
  }
}

// ref: https://mariestarck.com/how-to-localize-your-next-js-application-with-next-translate/
module.exports = nextTranslate({});
