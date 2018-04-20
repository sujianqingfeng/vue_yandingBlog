import Vue from 'vue'
import Vuex from 'vuex'

import home from './modules/home'
import user from './modules/user'
import editblog from './modules/editblog'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    home,
    user,
    editblog
  }
})
