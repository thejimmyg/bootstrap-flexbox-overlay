const express = require('express')
const { optionsFromEnv, installSignalHandlers, setupErrorHandlers } = require('express-render-error')
const debug = require('debug')('express-render-error:server')
const path = require('path')
const { prepareMustache, setupMustache } = require('express-mustache-overlays')
const { preparePublicFiles, setupPublicFiles, publicFilesFromEnv } = require('express-public-files-overlays')

installSignalHandlers()
const app = express()
app.locals.debug = debug
app.locals = Object.assign({}, app.locals, optionsFromEnv())
preparePublicFiles(app)
app.locals.publicFiles.overlay('/public', [path.join(__dirname, '..', 'public')])
prepareMustache(app)
app.locals.mustache.overlay([path.join(__dirname, '..', 'views')])
// Add any routes here:
app.get('/throw', (req, res) => {
  throw new Error('Test Error')
})
setupPublicFiles(app)
setupErrorHandlers(app, { debug })
// Set up the engine
const mustacheEngine = setupMustache(app)
app.engine('mustache', mustacheEngine)
app.set('views', app.locals.mustache.dirs)
app.set('view engine', 'mustache')
app.listen(8000, () => console.log(`Example app listening on port 8000`))
