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

Vue.config.productionTip = false
Vue.use(VueMaterial)

// Vue.material.registerTheme('app', {
//   primary: 'cyan',
//   accent: 'pink',
//   warn: 'red'
// })

// Vue.material.setCurrentTheme('app')

Vue.prototype.$log = function (msg) {
  console.log(msg)
}

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: {
    App
  }
})
