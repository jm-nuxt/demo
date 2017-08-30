const address = require('./config/address')

module.exports = {
  // 设置缓存
  // 默认
  // cache: {
  //   max: 1000,       // 组件缓存数
  //   maxAge: 900000   // 15分钟
  // }
  cache: true,
  transition: 'page',
  /*
   ** Headers of the page
   */
  head: {
    title: 'starter',
    meta: [{
      charset: 'utf-8'
    }, {
      name: 'viewport',
      content: 'width=device-width, initial-scale=1'
    }, {
      hid: 'description',
      name: 'description',
      content: 'Nuxt.js project'
    }],
    link: [{
      rel: 'icon',
      type: 'image/x-icon',
      href: '/favicon.ico'
    }]
  },
  
  router: {
    middleware: 'check-login'
  },

  modules: [
    ['@nuxtjs/proxy']
  ],
  proxy: {
    '/webapi/v2': {
      target: address.SERVER_ADDRESS,
      ws: false
    },
    '/sso': {
      target: address.SERVER_ADDRESS,
      ws: false
    }
  },

  /*
   ** Global CSS
   */
  css: ['~/assets/css/main.css', '~/node_modules/element-ui/lib/theme-default/index.css'],
  /*
   ** Add axios globally
   */
  plugins: ['~plugins/element-ui', '~plugins/filter', '~plugins/directive', '~plugins/checkLogin'],

  build: {
    vendor: ['axios', 'element-ui'],

    babel: {
      plugins: [
        ['component', [{
          libraryName: 'element-ui',
          styleLibraryName: 'theme-default'
        }]]
      ]
    },
  },

  publicPath: address.CDN_ADDRESS,

  /*
   ** Run ESLINT on save
   */
  extend (config, ctx) {
    if (ctx.isClient) {
      // config.module.rules.push({
      //   enforce: 'pre',
      //   test: /\.(js|vue)$/,
      //   loader: 'eslint-loader',
      //   exclude: /(node_modules)/
      // })
    }
  }
}
