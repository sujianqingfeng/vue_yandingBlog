const state = {
  offsetTop: 0,
  drawer: false
}

const mutations = {
  SETSCROLL: (state, data) => {
    state.offsetTop = data
  },
  SETDRAWER: (state, data) => {
    state.drawer = data
  }
}

const actions = {
  setScroll: ({commit}, data) => {
    commit('SETSCROLL', data)
  },
  setDrawer: ({commit}, data) => {
    commit('SETDRAWER', data)
  }
}

export default {
  state,
  mutations,
  actions
}
