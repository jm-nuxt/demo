import Vue from 'vue'
import address from '~/config/address'

Vue.filter('imgCdn', (val) => {
  if (val) {
    return address.IMG_ADDRESS + val
  } else {
    return val
  }
})
