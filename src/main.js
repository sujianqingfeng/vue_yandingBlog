// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'

import VueClipboard from 'vue-clipboard2'

import VueAnalytics from 'vue-analytics'

import 'assets/css/index.css'
import 'static/reset.css'

import store from 'store/index.js'

Vue.config.productionTip = false
Vue.use(VueMaterial)

Vue.use(VueClipboard)

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
