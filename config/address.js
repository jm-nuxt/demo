const envs = {
	dev: {
		IMG_ADDRESS: 'http://image.jm.com',
    SERVER_ADDRESS: 'http://192.168.102.191:8099'
	},

  test: {
    IMG_ADDRESS: 'http://image.jm.com',
    SERVER_ADDRESS: 'http://webapi.jtt.com'
  },

  production: {
    IMG_ADDRESS: 'http://img.jumore.com',
    SERVER_ADDRESS: 'http://www.jmexpert.com'
  }
}

let env = 'test'
module.exports = envs[env]
