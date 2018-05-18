import {apiConst, http} from '../../api'

const state = {

}

const getters = {

}

const actions = {
  getBlogsByAdmin: ({commit}, params) => http.get(apiConst.blogs, params).then(res => res.data),
  deleteBlog: ({commit}, id) => http.delete(apiConst.blogsId(id))
}

const mutations = {

}

export default {
  state,
  getters,
  actions,
  mutations
}
