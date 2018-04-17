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
  },
  editUser: ({commit}, {id, params}) => {
    http.patch(apiConst.editUser(id), params)
    .then(res => {
      console.log('修改成功')
      commit('setUser', res.data)
    })
    .catch(error => console.log(error.data))
  }
}

const mutations = {
  setInfo: (state, info) => {
    state.info = info
  },
  setUser: (state, info) => {
    info.user && setCookie('user', JSON.stringify(info.user))

    info.token && setCookie('token', info.token)
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
