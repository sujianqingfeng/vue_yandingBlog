import {apiConst, http} from '../../api'

const state = {
  list: []
}

const getters = {
  list: state => state.list
}

const actions = {
  getBlogList: ({commit}) => {
    http.get(apiConst.gethome)
       .then(res => commit('setList', res))
  }
}

const mutations = {
  setList: (state, res) => {
    state.list = res
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
