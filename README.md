# Bootstrap Flexbox Overlay

A set of mustache templates to be used with express-mustache-overlays that provides a Bootstrap and Flexbox theme.


## Example

```
DEBUG="express-render-error:server" npm start
```

If you visit http://localhost:8000/ you'll see a page rendered from the `content.mustache` template in `views`. If you visit http://localhost:8000/not-found, no route is set up so you'll see a 404 page rendered from `view/404.mustache`. If you visit http://localhost:8000/throw you'll see a 500 page rendered from `views/500.mustache` and you should also see the debug output of a stack trace (if you set the `DEBUG` environment variable correctly as above).

If you want to set up additional overlays you can use the `PUBLIC_FILES` and `MUSTACHE_DIRS` environment variables (documented in express-public-files-overlays and express-mustache-overlays respectively.

For example, here is how you can overlay the `views-overlay` directory, and obtain a nice navigation area rendered because the partial in `views-overlay/partials/nav.mustache` is now used instead of the empty `views/partial/nav.mustache`:

```
MUSTACHE_DIRS="views-overlay" DEBUG="express-mustache-overlays,express-render-error:server" npm start
```

Note: We've added the `express-mustache-overlays` setting to the `DEBUG` variable so you can see what's happening with the mustache overlays.

You can also specify overlays directly in code as documented in express-public-files-overlays and express-mustache-overlays.

## Environment Variables

All the environment variables from express-render-error are available in the example, but the following are also available from `bootstrapOptionsFromEnv()`:

* `ICON_192_URL` - the URL to a 192x192 PNG file to use as the icon, available in templates as `icon192Url`
* `THEME_COLOR` - the color the browser should use for its theme, available in templates as `themeColor`

Here's an example:

```
MUSTACHE_DIRS="views-overlay" DEBUG="express-mustache-overlays,express-render-error:server" DEFAULT_TITLE=Hello npm start
```

Notice how the title of the page has changed.


## Response Variables

You can set `metaDescription` in the data of each call to `res.render()` to set the description meta tag.


## Dev

```
npm run fix
```


## Changelog

### 0.1.0 2019-02-06

* First version
