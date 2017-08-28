import express from 'express'
import { Nuxt, Builder } from 'nuxt'
import api from './api'

console.log(0)

const app = express()
const host = process.env.HOST || '192.168.102.114'
const port = process.env.PORT || 3000

app.set('port', port)

// Import API Routes
app.use('/api', api)

// Import and Set Nuxt.js options
console.log(1)
let config = require('../nuxt.config.js')
console.log(2)
config.dev = !(process.env.NODE_ENV === 'production')


// TODO remove
process.on('unhandledRejection', function(reason, p) {
  console.log(p)
  console.log("Unhandled Rejection:", reason.stack);
  process.exit(1);
});

// Init Nuxt.js
const nuxt = new Nuxt(config)

// Build only in dev mode
if (config.dev) {
  const builder = new Builder(nuxt)
  builder.build()
}

// Give nuxt middleware to express
app.use(nuxt.render)

// Listen the server
app.listen(port, host)
console.log('Server listening on ' + host + ':' + port) // eslint-disable-line no-console
