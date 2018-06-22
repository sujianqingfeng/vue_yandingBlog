import {apiConst, http} from '../../api'
import TextUtils from '../../utils/TextUtils'

const state = {
  list: [],
  showHeader: false,
  hasNext: false,
  hasPre: false
}

const getters = {
  list: state => state.list,
  hasNext: state => state.hasNext,
  hasPre: state => state.hasPre,
  showHeader: state => state.showHeader
}

const actions = {
  getBlogsByName: ({commit}, {name, page}) => {
    http.get(apiConst.blogsName, {name: name}, {page: page})
       .then(res => {
         commit('setList', res.data.results)
         commit('setNext', !TextUtils.isEmpty(res.data.next))
         commit('setPre', !TextUtils.isEmpty(res.data.previous))
         commit('setShowHeader', page === 1)
       })
  }
}

const mutations = {
  setList: (state, res) => {
    state.list = res
  },
  setPre: (state, bool) => { state.hasPre = bool },
  setNext: (state, bool) => { state.hasNext = bool },
  setShowHeader: (state, bool) => { state.showHeader = bool }
}

export default {
  state,
  getters,
  actions,
  mutations
}
