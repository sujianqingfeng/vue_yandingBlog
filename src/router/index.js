import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: '/yanding/',
  routes: [
    {
      path: '/',
      component: resolve => require(['components/index/indexWarpper'], resolve),
      children: [
        {
          path: '/',
          name: 'index',
          component: resolve => require(['components/index/index'], resolve)
        },
        {
          path: '/detail/:id',
          name: 'blogdetail',
          component: resolve => require(['components/blog-detail/BlogDetail'], resolve)
        }
      ]
    }
  ]
})
