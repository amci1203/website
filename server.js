const { join } = require('path')
const express  = require('express')
const morgan   = require('morgan')

const app = express()
const PORT = process.env.PORT || 3000
const PUBLIC_PATH = join(__dirname, 'docs')

app
  .use(morgan('tiny'))
  .use(express.static(PUBLIC_PATH))
  .listen(PORT, err => {
    if (err) console.error(err)
    console.log('Listeneing on port %s...' PORT)
  })