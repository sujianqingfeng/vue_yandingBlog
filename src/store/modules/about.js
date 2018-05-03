import {apiConst, http} from '../../api'

const state = {
  about: ''
}

const getters = {
  about: state => state.about
}

const actions = {
  getAbout: ({commit}, id) => {
    http.get(apiConst.getAbout(id)).then(res => {
      commit('setAbout', res.data)
    })
  }
}

const mutations = {
  setAbout: (state, about) => {
    state.about = about
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
