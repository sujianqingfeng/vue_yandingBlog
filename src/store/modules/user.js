import {apiConst, http} from '../../api'

const state = {
  info: {}
}

const getters = {
  info: state => state.info
}

const actions = {
  getUser: ({commit}) => {
    http.get(apiConst.gethome)
       .then(info => commit('setUser', info))
  }
}

const mutations = {
  setUser: (state, info) => {
    state.info = info
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
