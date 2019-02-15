const debug = require('debug')('bootstrap-flexbox-overlay')
const path = require('path')

const bootstrapOptionsFromEnv = (app) => {
  const options  = {}
  if (typeof process.env.THEME_ICON_192_URL !== 'undefined') {
    options.icon192Url = process.env.THEME_ICON_192_URL
  }
  if (typeof process.env.THEME_PUBLIC_FILES_URL !== 'undefined') {
    options.publicFilesUrl = process.env.THEME_PUBLIC_FILES_URL
  }
  if (typeof process.env.THEME_COLOR !== 'undefined') {
    // TODO: Rename themeColor?
    options.color = process.env.THEME_COLOR
  }
  debug(`Setting`, options)
  return options
}

const prepareTheme = (app, bootstrapOptions) => {
  if (!app.locals.option) {
    throw new Error('app.locals.option not set up. Did you forget to call prepareOption()?')
  }
  if (!app.locals.theme) {
    app.locals.theme = {}
  }
  Object.assign(app.locals.theme, {publicFilesUrl: app.locals.option.scriptName + '/public', icon192Url:'/public/icon192.png'}, bootstrapOptions)
  app.locals.mustache.overlay([path.join(__dirname, '..', 'views')])
  app.locals.publicFiles.overlay(app.locals.theme.publicFilesUrl, [path.join(__dirname, '..', 'public')])
}

module.exports = { bootstrapOptionsFromEnv, prepareTheme }
