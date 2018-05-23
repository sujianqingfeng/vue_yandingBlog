import {apiConst, http} from '../../api'

const state = {
  about: ''
}

const getters = {
  about: state => state.about
}

const actions = {
  getAbout: ({commit}, id) => http.get(apiConst.aboutId(id)).then(res => res.data),
  createAbout: ({commit}, params) => http.post(apiConst.about, params),
  updateAbout: ({commit}, {id, params}) => http.patch(apiConst.aboutId(id), params)
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
