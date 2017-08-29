import Vue from 'vue'
import address from '~/config/address'

Vue.filter('imgCdn', (val) => {
  if (val) {
    return address.IMG_ADDRESS + val
  } else {
    return val
  }
})

Vue.filter('cutStr', (val, nums) => {
	if (val && val.substr) {
		return val.substr(0, nums || 130) + (val.length > 130 ? '...' : '')
	}
})