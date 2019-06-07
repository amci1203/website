const sass = require('gulp-sass')

const __require   = require('re-require-module').reRequire
const { resolve } = require('path')
const moment      = require('moment')

const SRC  = './src'
const DEST = './docs'
const PUG_LOCALS = resolve(SRC, 'data.js')

const path = (...p) => resolve(__dirname, ...p)
const glob = (str = '') => str.charAt(0) == '!'
  ? `!${SRC}/${str.substr(1)}`
  : `${SRC}/${str}`

let globs = {
  assets: 'assets/**',
  pug   : ['views/**/*.pug', '!views/_*/**/*'],
}
globs = Object.keys(globs).reduce(globify, globs)

let watchers = {
  pug  : '**/*.pug',
  data : ['data.js', 'data/**/*.js'],
  sass : 'sass/**/*.scss',
  js   : 'js/**/*.js',
}
watchers = Object.keys(watchers).reduce(globify, watchers)

let paths = {
  sass : [SRC, 'sass', 'styles.scss'],
  js   : [SRC, 'js', 'app.js'],
  css  : [DEST, 'assets', 'css', 'styles.css']
}
paths = Object.keys(paths).reduce(pathify, paths)

module.exports = {
  SRC,
  DEST,

  globs,
  watchers,
  paths,

  loaders: {
    pug () {
      return require('gulp-pug')({
        data: {
          ...__require(PUG_LOCALS),
          formatDate: (d, f = 'MMM DD, YYYY') => moment(d).format(f)
        }
      })
    },

    sass (prod = false) {
      return sass({
        outputStyle: prod ? 'compressed' : 'expanded'
      })
    },

    webpack (prod = false) {
      return {
        mode: !!prod ? 'production' : 'development',
        devtool: !!prod && 'inline-source-map',
        
        entry: paths.js,
        output: {
          path: path(DEST, 'assets', 'js'),
          filename: 'app.js'
        },
        module: {
          rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            use: { loader: "babel-loader" }
          }]
        }
      }
    }
  }
}

function globify (o, k) {
  return {
    ...o,
    [k]: typeof o[k] == 'string' ? glob(o[k]) : o[k].map(glob)
  }
}

function pathify (o, k) {
  return {
    ...o,
    [k]: path(...o[k])
  }
}