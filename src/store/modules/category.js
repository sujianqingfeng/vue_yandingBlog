import {apiConst, http} from '../../api'

const state = {
  categorys: []
}

const getters = {
  categorys: state => state.categorys
}

const actions = {
  getCategory: ({commit}, id) => http.get(apiConst.getCategorys(id)).then(res => commit('setCategory', res.data)),
  deleteCategoryF: ({commit}, id) => http.delete(apiConst.updateCategory(id)),
  updateCategoryF: ({commit}, {id, params}) => http.patch(apiConst.updateCategory(id), params),
  getCategoryByAdmin: ({commit}) => http.get(apiConst.category()).then(res => res.data),
  createCategory: ({commit}, name) => http.post(apiConst.category(), {name})
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
