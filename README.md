# Bootstrap Flexbox Overlay

A set of mustache templates to be used with express-mustache-overlays that provides a Bootstrap and Flexbox theme.

## Configuration

The components in this package make use of the `app.locals.theme` namespace.

## Example

See `./example` for a full example and tutorial.

## Environment Variables

All the environment variables from express-render-error, express-mustache-overlays and express-public-files-overlays are available in the example, but the following are also available from `bootstrapOptionsFromEnv()`:

* `THEME_ICON_192_URL` - the URL to a 192x192 PNG file to use as the icon, available in templates as `theme.icon192Url`
* `THEME_COLOR` - the color the browser should use for its theme, available in templates as `theme.color`
* `THEME_PUBLIC_FILES_URL` - Defaults to `app.locals.option.scriptName + '/public'`. Used to specify where the public files used by the overlay should be mounted.

Here's an example of a custom `THEME_PUBLIC_FILES_URL`:

```
MUSTACHE_DIRS="views-overlay" THEME_PUBLIC_FILES_URL=/theme DEBUG="bootstrap-flexbox-overlay,express-publicfiles-overlays,express-render-error,express-mustache-overlays,bootstrap-flexbox-overlay:server" npm start
```

Notice how the URL in the templates and the location the public files are served from has changed.

To serve an icon, specify `THEME_ICON_192_URL` and add a new public files overlay at that URL using `PUBLIC_FILES` option from express-public-files-overlays, then put the icon in the directory you have configured in the `PUBLIC_FILES` option.


## Response Variables

You can set `metaDescription` in the data of each call to `res.render()` to set the description meta tag.


## Dev

```
npm run fix
```


## Changelog

### 0.1.3 2019-02-08

* Simplified `bodyTop.mustache`

### 0.1.2 2019-02-08

* Improved the Docker example

### 0.1.1 2019-02-07

* Changed `top.mustache` to take the title from `title` first and `options.title` otherwise.

### 0.1.0 2019-02-06

* First version
