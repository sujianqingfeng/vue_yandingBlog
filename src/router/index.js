import Vue from 'vue'
import Router from 'vue-router'
import Index from 'components/index/index'
import BlogDetail from 'components/blog-detail/BlogDetail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index,
      children: [{
        path: '/detail/:Id',
        name: 'blogdetail',
        component: BlogDetail
      }
      ]
    }
  ]
})
