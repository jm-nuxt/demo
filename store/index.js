import Vuex  from 'vuex'

import footer from './footer';


const createStroe = () => {
  return new Vuex.Store({
    modules: {
      footer
    }
  })
}

export default createStroe
