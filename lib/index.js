// const debug = require('debug')('bootstrap-flexbox-overlay')

const bootstrapOptionsFromEnv = () => {
  let icon192Url = process.env.ICON_192_URL
  const themeColor = process.env.THEME_COLOR
  return { icon192Url, themeColor }
}

module.exports = { bootstrapOptionsFromEnv }
