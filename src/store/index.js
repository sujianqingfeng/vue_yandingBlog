import Vue from 'vue'
import Vuex from 'vuex'

import home from './modules/home'
import user from './modules/user'
import category from './modules/category'
import about from './modules/about'
import friend from './modules/friend'
import blog from './modules/blog'
import link from './modules/link'
import summary from './modules/summary'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    home,
    user,
    link,
    category,
    about,
    friend,
    blog,
    summary
  }
})
