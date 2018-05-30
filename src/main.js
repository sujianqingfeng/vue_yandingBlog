// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import Vuetify from 'vuetify'
import VueClipboard from 'vue-clipboard2'
import VueAnalytics from 'vue-analytics'

import 'vuetify/dist/vuetify.min.css'
import 'assets/css/index.css'
import 'static/reset.css'

import store from 'store/index.js'

Vue.config.productionTip = false

Vue.use(VueClipboard)
Vue.use(Vuetify)

Vue.use(VueAnalytics, {
  id: 'UA-116815221-1',
  checkDuplicatedScript: true,
  router
})

Vue.prototype.$log = function (msg) {
  console.log(msg)
}

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: {
    App
  }
})
