import {apiConst, http} from '../../api'

const state = {
  detail: {
    user: {
      icon: ''
    },
    content: ''
  }
}

const getters = {
  blogDetail: state => state.detail
}

const actions = {
  getBlogsByAdmin: ({commit}, params) => http.get(apiConst.blogs, params).then(res => res.data),
  deleteBlog: ({commit}, id) => http.delete(apiConst.blogsId(id)),
  uploadImg: ({commit}, params) => http.post(apiConst.uploadImg(), params).then(res => Promise.resolve(res.data)),
  save: ({commit}, params) => http.post(apiConst.blogs, params),
  update: ({commit}, {id, params}) => http.patch(apiConst.blogsId(id), params),
  getBlogDetail: ({commit}, id) => http.get(apiConst.blogsId(id)).then(res => commit('setDetail', res.data))
}

const mutations = {
  setDetail: (state, detail) => {
    state.detail = detail
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
