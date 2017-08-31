const envs = {
  dev: {
    IMG_ADDRESS: 'http://image.jm.com',
    SERVER_ADDRESS: 'http://webapi.jtt.com',
    USERCENTER_ADDRESS: 'http://test-uc3.dev.com',
    CENTER_ADDRESS: 'http://center.jtt.com',
    CDN_ADDRESS: 'http://127.0.0.1:3000/_nuxt/'
  },

  production: {
    // 图片服务器
    IMG_ADDRESS: 'http://img.jumore.com',
    // API 服务器
    SERVER_ADDRESS: 'http://www.jmexpert.com',
    // 认证中心
    USERCENTER_ADDRESS: 'http://passport.jumore.com/cas/',
    // 中台地址
    CENTER_ADDRESS: 'http://center.jmexpert.com',
    // CDN 服务器
    // CDN_ADDRESS: 'http://static.jmexpert.com/static/',
    CDN_ADDRESS: 'http://127.0.0.1:3000/_nuxt/',
    // 图片上传服务器
    UPLOAD_ADDRESS: 'http://image5.jm.com'
  }
}

let env = process.env.NODE_ENV !== 'production'
  ? 'dev' : 'production'

module.exports = envs[env]
