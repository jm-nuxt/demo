import * as axios from 'axios'
import address from '~/config/address'

let options = {
  params: +new Date()
}
// The server-side needs a full url to works
if (process.server) {
  // options.baseURL = `http://${process.env.HOST || 'localhost'}:${process.env.PORT || 3000}`
  options.baseURL = address.SERVER_ADDRESS
}

// axios.interceptors.response.use(response => {
//
// });

export default axios.create(options)
