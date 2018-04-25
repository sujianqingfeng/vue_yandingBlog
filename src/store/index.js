import Vue from 'vue'
import Vuex from 'vuex'

import home from './modules/home'
import user from './modules/user'
import editblog from './modules/editblog'
import category from './modules/category'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    home,
    user,
    editblog,
    category
  }
})
