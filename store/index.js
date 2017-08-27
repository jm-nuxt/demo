import Vuex from 'vuex'
import footer from './footer'
import experts from './experts'
import login from './login'
import user from './user'

const createStroe = () => {
  return new Vuex.Store({
    modules: {
      footer,
      experts,
      login,
      user
    }
  })
}

export default createStroe
