// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import $ from 'jquery'
import Vuetify from 'vuetify'
import VueClipboard from 'vue-clipboard2'
import VueAnalytics from 'vue-analytics'
import moment from 'moment'
import mavonEditor from 'mavon-editor'
import VueLazyload from 'vue-lazyload'

import 'vuetify/dist/vuetify.min.css'
import 'assets/css/index.css'
import 'assets/css/markdown.css'
import 'static/css/reset.css'
import 'static/css/personage.css'
import 'aplayer/dist/APlayer.min.css'
import 'nprogress/nprogress.css'

import store from 'store/index.js'

Vue.config.productionTip = false

Vue.use(VueClipboard)
Vue.use(Vuetify)
Vue.use(mavonEditor)
Vue.use(VueLazyload)

Vue.use(VueAnalytics, {
  id: 'UA-116815221-1',
  checkDuplicatedScript: true,
  router
})

Vue.prototype.jQuery = $

Vue.prototype.$log = function (msg) {
  console.log(msg)
}

Vue.prototype.$md2html = function (md) {
  return mavonEditor.markdownIt.render(md)
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
