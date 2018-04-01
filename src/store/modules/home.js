import {apiConst, http} from '../../api'

const state = {
  list: []
}

const getters = {
  list: state => state.list
}

const actions = {
  getBlogList: ({commit}, id) => {
    http.get(apiConst.getBlogList(id))
       .then(res => commit('setList', res.data.results))
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
