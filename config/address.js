const envs = {
  dev:{
    IMG_ADDRESS: 'http://image.jm.com',
    SERVER_ADDRESS:'http://webapi.jtt.com'//'http://www.jmexpert.com'
  },

  production:{
    IMG_ADDRESS: 'http://img.jumore.com',
    SERVER_ADDRESS:'http://www.jmexpert.com'
  }
}
// let env = 'dev'
let env = 'production'
module.exports =  envs[env];
