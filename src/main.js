// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'

import 'assets/css/index.css'
import 'static/reset.css'

import store from 'store/index.js'

Vue.config.productionTip = false
Vue.use(VueMaterial)

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
