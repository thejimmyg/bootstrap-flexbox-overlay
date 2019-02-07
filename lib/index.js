const debug = require('debug')('bootstrap-flexbox-overlay')
const path = require('path')

const bootstrapOptionsFromEnv = (app) => {
  let icon192Url = process.env.THEME_ICON_192_URL
  let publicFilesUrl = process.env.THEME_PUBLIC_FILES_URL || app.locals.option.scriptName + '/public'
  const color = process.env.THEME_COLOR
  debug(`Setting icon192Url=${icon192Url} and color=${color}.`)
  return { icon192Url, color, publicFilesUrl }
}

const prepareTheme = (app, bootstrapOptions) => {
  if (!app.locals.theme) {
    app.locals.theme = {}
  }
  Object.assign(app.locals.theme, bootstrapOptions)
  app.locals.mustache.overlay([path.join(__dirname, '..', 'views')])
  app.locals.publicFiles.overlay(app.locals.theme.publicFilesUrl, [path.join(__dirname, '..', 'public')])
}

module.exports = { bootstrapOptionsFromEnv, prepareTheme }
