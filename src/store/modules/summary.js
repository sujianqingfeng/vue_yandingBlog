import {apiConst, http} from '../../api'

const state = {
  list: []
}

const getters = {
  summaryList: state => state.list
}

const actions = {
  getSummarys: ({commit}) => http.get(apiConst.summary).then(res => commit('setList', res.data)),
  createSummary: ({commit}, params) => http.post(apiConst.summary, params),
  updateSummary: ({commit}, {id, params}) => http.patch(apiConst.summaryId(id), params),
  deleteSummary: ({commit}, id) => http.delete(apiConst.summaryId(id))
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
