import {apiConst, http} from '../../api'

const state = {

}

const getters = {

}

const actions = {
  getSummarys: ({commit}) => http.get(apiConst.summary),
  createSummary: ({commit}, params) => http.post(apiConst.summary, params),
  updateSummary: ({commit}, {id, params}) => http.patch(apiConst.summaryId(id), params),
  deleteSummary: ({commit}, id) => http.delete(apiConst.summaryId(id))
}

const mutations = {

}

export default {
  state,
  getters,
  actions,
  mutations
}
