# Bootstrap Flexbox Overlay Example

You can test the example as simply as:

```
cd ../
npm install
cd example
npm install
PORT=8000 npm start
```

If you get a warning about not being able to install a package, remove your `package-lock.json` file and try again.

To add logging too you can use:

```
DEBUG="*" PORT=8000 npm start
```

You can choose just a few selected loggers by comma-separating their names like this:

```
DEBUG="bootstrap-flexbox-overlay,bootstrap-flexbox-overlay:server" PORT=8000 npm start
```

For production use you'll want to change the settings in the code, or use environment variables.

If you visit http://localhost:8000/ you'll see a page rendered from the `content.mustache` template in `views`. If you visit http://localhost:8000/not-found, no route is set up so you'll see a 404 page rendered from `view/404.mustache`. If you visit http://localhost:8000/throw you'll see a 500 page rendered from `views/500.mustache` and you should also see the debug output of a stack trace (if you set the `DEBUG` environment variable correctly as above).

If you want to set up additional overlays you can use the `PUBLIC_FILES` and `MUSTACHE_DIRS` environment variables (documented in express-public-files-overlays and express-mustache-overlays respectively.

For example, here is how you can overlay the `views-overlay` directory, and obtain a nice navigation area rendered because the partial in `views-overlay/partials/nav.mustache` is now used instead of the empty `views/partial/nav.mustache`:

```
MUSTACHE_DIRS="views-overlay" DEBUG="bootstrap-flexbox-overlay,express-publicfiles-overlays,express-render-error,express-mustache-overlays,bootstrap-flexbox-overlay:server" PORT=8000 npm start
```

Note: We've added the `express-mustache-overlays` setting to the `DEBUG` variable so you can see what's happening with the mustache overlays.

You can also specify overlays directly in code as documented in express-public-files-overlays and express-mustache-overlays.


## Docker

Docker can't copy files from a parent directory so the `docker:build` command puts the current dev version of bootstrap-flexbox-overlay in this directory and created a modified `package.json.docker`:

```
npm run docker:build && npm run docker:run
```

## Dev

```
npm run fix
```
