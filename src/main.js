// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import Vuetify from 'vuetify'
import VueClipboard from 'vue-clipboard2'
import VueAnalytics from 'vue-analytics'
import moment from 'moment'

import 'vuetify/dist/vuetify.min.css'
import 'assets/css/index.css'
import 'assets/css/markdown.css'
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

Vue.filter('timeformat', function (value) {
  if (!value) return ''
  return moment(value).format('YYYY-MM-DD')
})

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
