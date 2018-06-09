import {apiConst, http} from '../../api'

const state = {
  list: []
}

const getters = {
  linkList: state => state.list
}

const actions = {
  createLink: ({commit}, params) => http.post(apiConst.link, params).then(res => res.data),
  linksAdmin: ({commit}) => http.get(apiConst.link).then(res => commit('setList', res.data)),
  updateLink: ({commit}, {id, params}) => http.patch(apiConst.linkId(id), params),
  deleteLink: ({commit}, id) => http.delete(apiConst.linkId(id))
}

const mutations = {
  setList: (state, list) => {
    state.list = list
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
