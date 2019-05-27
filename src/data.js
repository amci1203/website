const __require = require('re-require-module').reRequire
const date      = new Date()
const title     = 'Allen McIntosh II'

const data = m => __require('./data/' + m)

module.exports = {
  base: {
    title
  },

  info           : data('info'),
  work           : data('work-experience'),
  skills         : data('skills'),
  education      : data('education'),
  certifications : data('certifications'),
  wishlist       : data('wishlist'),
  portfolio      : data('portfolio'),

  current_year   : date.getFullYear(),
}