import {apiConst, http} from '../../api'
import {getCookie, setCookie} from '../../utils/cookie'

const state = {
  info: {},
  user: {}
}

const getters = {
  info: state => state.info,
  user: state => {
    let user = getCookie('user')
    return JSON.parse(user)
  },
  githubLoginUrl: state => apiConst.githubLogin

}

const actions = {
  getUser: ({commit}, id) => {
    http.get(apiConst.getUserInfo(id))
       .then(info => commit('setInfo', info.data))
  },

  login: ({commit}, params) => http.post(apiConst.login, params)
       .then(res => commit('setUser', res.data)),

  githubCheck: ({commit}, params) => http.get(apiConst.githubCheck, params),

  getMyInfo: ({commit}) => http.get(apiConst.myInfo),

  editUser: ({commit}, {id, params}) => {
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
    info.user && setCookie('user', JSON.stringify(info.user))

    info.token && setCookie('token', info.token)
  },
  updateUser (state, info) {
    info && setCookie('user', JSON.stringify(info))
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
