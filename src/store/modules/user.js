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
  }

}

const actions = {
  getUser: ({commit}, id) => {
    http.get(apiConst.getUserInfo(id))
       .then(info => commit('setInfo', info.data))
  },
  login: ({commit}, params) => {
    http.post(apiConst.login(), params)
       .then(res => commit('setUser', res.data))
  }
}

const mutations = {
  setInfo: (state, info) => {
    state.info = info
  },
  setUser: (state, info) => {
    setCookie('user', JSON.stringify(info.user))
    setCookie('token', info.token)
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
