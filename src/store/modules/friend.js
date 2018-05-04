import {apiConst, http} from '../../api'

const state = {
  friend: []
}

const getters = {
  friend: state => state.friend
}

const actions = {
  getFriend: ({commit}, id) => http.get(apiConst.getFriend(id)).then(res => commit('setFriend', res.data))
}

const mutations = {
  setFriend: (state, friend) => {
    state.friend = friend
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
