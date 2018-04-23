import {apiConst, http} from '../../api'

const state = {

}

const getters = {

}

const actions = {
  uploadImg ({commit}, params) {
    return http.post(apiConst.uploadImg(), params)
        .then(res => Promise.resolve(res.data))
  },
  save ({commit}, params) {
    return http.post(apiConst.saveBlog(), params)
  }
}

const mutations = {

}

export default {
  state,
  getters,
  actions,
  mutations
}
