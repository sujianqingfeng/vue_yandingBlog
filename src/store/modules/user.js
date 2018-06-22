import { apiConst, http } from '../../api'
// import { getCookie, setCookie } from '../../utils/cookie'

const state = {
  info: {},
  user: {}
}

const getters = {
  info: state => state.info,
  user: state => state.user,
  githubLoginUrl: state => apiConst.githubLogin

}

const actions = {
  getUserInfoById: ({ commit }, id) => {
    http.get(apiConst.userInfoId(id))
      .then(info => commit('setInfo', info.data))
  },

  getMyInfo: ({ commit }) => http.get(apiConst.myInfo),

  getUserInfoByName: ({ commit }, name) => {
    http.get(apiConst.userInfoName, {username: name}).then(info => commit('setUser', info.data))
  },

  login: ({ commit }, params) => http.post(apiConst.login, params)
  .then(res => commit('setUser', res.data)),

  githubCheck: ({ commit }, params) => http.get(apiConst.githubCheck, params),

  editUser: ({ commit }, { id, params }) => {
    return http.patch(apiConst.editUser(id), params)
      .then(res => {
        commit('updateUser', res.data)
      })
      .catch(error => Promise.reject(error.data))
  }
}

const mutations = {
  setInfo: (state, info) => {
    state.info = info
  },
  setUser: (state, info) => {
    state.user = info
  },
  updateUser (state, info) {
    state.user = info
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
