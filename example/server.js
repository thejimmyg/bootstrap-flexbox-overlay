const express = require('express')
const { prepareOption, prepareDebug, optionFromEnv, installSignalHandlers, setupErrorHandlers } = require('express-render-error')
const debug = require('debug')('bootstrap-flexbox-overlay:server')
const path = require('path')
const { prepareMustache, setupMustache, mustacheFromEnv } = require('express-mustache-overlays')
const { preparePublicFiles, setupPublicFiles, publicFilesFromEnv } = require('express-public-files-overlays')
const { prepareTheme, bootstrapOptionsFromEnv } = require('bootstrap-flexbox-overlay')

installSignalHandlers()

const app = express()
prepareDebug(app, debug)
prepareOption(app, optionFromEnv(app))
preparePublicFiles(app, publicFilesFromEnv(app))
prepareMustache(app, mustacheFromEnv(app))
prepareTheme(app, bootstrapOptionsFromEnv(app))

// The main views and public directories are set up by prepareTheme() but we can put any overlays here:
app.locals.mustache.overlay([path.join(__dirname, '..', 'views-overlay')])

// Add any routes here:
app.get('/', (req, res) => {
  res.render('content', { content: 'Hello' })
})
app.get('/throw', (req, res) => {
  throw new Error('Test Error')
})

// Before error handlers
setupPublicFiles(app)
// Right at the end before view installation
setupErrorHandlers(app)

// Set up the view
const mustacheEngine = setupMustache(app)
app.engine('mustache', mustacheEngine)
app.set('views', app.locals.mustache.dirs)
app.set('view engine', 'mustache')
app.listen(app.locals.option.port, () => console.log(`Example app listening on port ${app.locals.option.port}`))
