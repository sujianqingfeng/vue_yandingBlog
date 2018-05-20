import {apiConst, http} from '../../api'

const state = {

}

const getters = {

}

const actions = {
  createLink: ({commit}, params) => http.post(apiConst.link, params).then(res => res.data),
  linksAdmin: ({commit}) => http.get(apiConst.link).then(res => res.data),
  updateLink: ({commit}, {id, params}) => http.patch(apiConst.linkId(id), params),
  deleteLink: ({commit}, id) => http.delete(apiConst.linkId(id))
}

const mutations = {

}

export default {
  state,
  getters,
  actions,
  mutations
}
