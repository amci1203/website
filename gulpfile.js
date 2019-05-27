const {
  src,
  dest,
  watch,
  series,
  parallel
} = require('gulp')

const del     = require('del')
const browser = require('browser-sync')
const webpack = require('webpack')

const { DEST, paths, globs, watchers, loaders } = require('./config')

const build = parallel(
  pug,
  sass(),
  transpile(),
  copyAssets
)

const prod = parallel(
  pug,
  sass(1),
  transpile(1),
  copyAssets
)

const reloadAfter = fn => series(fn, reloadBrowser)

exports.default = series(build, startWatchers, startBrowser)
Object.assign(exports, {
  build,
  prod,
  pug,
  sass,
  transpile
})

function startBrowser (done) {
  browser.init({
    ui: false,
    notify: false,
    // open: false,
    server: DEST
  })
}

function startWatchers (done) {
  watch(watchers.sass, series(sass(), streamCSS))
  watch(watchers.js, reloadAfter(transpile()))
  watch(watchers.pug, reloadAfter(pug))
  watch(watchers.data, reloadAfter(pug))

  done()
}

function reloadBrowser (done) {
  browser.reload()
  done()
}

function streamCSS (done) {
  return src(paths.css).pipe(browser.stream())
}

function pug (done) {
  try {
    return src(globs.pug)
      .pipe(loaders.pug())
      .pipe(dest(DEST))
  } catch (err) {
    console.error(err)
    done()
  }
}

function sass (prod = false) {
  return function _sass (done) {
    return src(paths.sass)
      .pipe(loaders.sass(prod)
        .on('error', require('gulp-sass').logError)
      )
      .pipe(dest(`${DEST}/assets/css`))
  }
}

function transpile (prod = false) {
  return function javascript (done) {
    webpack(loaders.webpack(prod), (err, stats) => {
      if (err) console.error(err.toString())
      console.log(stats)
      done()
    })
  }
}

async function cleanDist (done) {
  await del([ DEST + '/**' ])
  setTimeout(done, 500)
}

function copyAssets (done) {
  return src(globs.assets).pipe(dest(DEST + '/assets'))
}