const debug = require('debug')('bootstrap-flexbox-overlay')

const optionsFromEnv = () => {
  const publicUrlPath = process.env.PUBLIC_URL_PATH
  const startUrl = process.env.START_URL
  const withPjaxPwa = (process.env.WITH_PJAX_PWA || 'false').toLowerCase() === 'true'
  const networkErrorUrl = process.env.NETWORK_ERROR_URL
  const manifestUrl = process.env.MANIFEST_URL
  const serviceWorkerUrl = process.env.SERVICE_WORKER_URL
  let icon192Url = process.env.ICON_192_URL
  const themeColor = process.env.THEME_COLOR
  return Object.assign({}, result, { startUrl, withPjaxPwa, networkErrorUrl, manifestUrl, serviceWorkerUrl, icon192Url, themeColor })
}

module.exports = { optionsFromEnv }
