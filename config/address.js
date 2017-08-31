const envs = {
  dev: {
    IMG_ADDRESS: 'http://image.jm.com',
    SERVER_ADDRESS: 'http://192.168.102.191:8099'
  },

  test: {
    IMG_ADDRESS: 'http://image.jm.com',
    SERVER_ADDRESS: 'http://webapi.jtt.com',
    USERCENTER_ADDRESS: 'http://test-uc3.dev.com',
    CENTER_ADDRESS: 'http://center.jtt.com',
    CDN_ADDRESS: 'http://127.0.0.1:3000/_nuxt/',
    NODE_SERVER: 'http://127.0.0.1',
    NODE_PORT: 3000
  },

  production: {
    IMG_ADDRESS: 'http://img.jumore.com',
    SERVER_ADDRESS: 'http://www.jmexpert.com',
    USERCENTER_ADDRESS: 'http://passport.jumore.com/cas/',
    CENTER_ADDRESS: 'http://center.jmexpert.com',
    // CDN_ADDRESS: 'http://192.168.102.114:3000/_nuxt/'
    CDN_ADDRESS: 'http://static.jmexpert.com/static/'
  }
}

let env = 'production'
module.exports = envs[env]
