import {apiConst, http} from '../../api'

const state = {

}

const getters = {

}

const actions = {
  getSummarys: ({commit}) => http.get(apiConst.summary),
  createSummary: ({commit}, params) => http.post(apiConst.summary, params)
}

const mutations = {

}

export default {
  state,
  getters,
  actions,
  mutations
}
