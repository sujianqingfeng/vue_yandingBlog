import {apiConst, http} from '../../api'

const state = {
  categorys: []
}

const getters = {
  categorys: state => state.categorys
}

const actions = {
  getCategory: ({commit}, id) => http.get(apiConst.getCategorys(id)).then(res => commit('setCategory', res.data))
}

const mutations = {
  setCategory: (state, categorys) => { state.categorys = categorys }
}

export default {
  state,
  getters,
  actions,
  mutations
}
