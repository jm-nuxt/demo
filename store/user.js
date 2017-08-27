import axios from '~/plugins/axios'

const user = {
  state: {
    user: {}
  },

  mutations: {
    SET_USER (state, payload) {
      state.user = payload
    }
  }
}

export default user
