import {apiConst, http} from '../../api'

const state = {

}

const getters = {

}

const actions = {
  uploadImg: ({commit}, params) => http.post(apiConst.uploadImg(), params).then(res => Promise.resolve(res.data)),
  save: ({commit}, params) => http.post(apiConst.blogs, params),
  update: ({commit}, {id, params}) => http.patch(apiConst.blogsId(id), params),
  getBlog: ({commit}, id) => http.get(apiConst.blogsId(id))
}

const mutations = {

}

export default {
  state,
  getters,
  actions,
  mutations
}
