import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: '/yanding/',
  routes: [
    {
      path: '/',
      component: resolve => require(['components/index/IndexWarpper'], resolve),
      children: [
        {
          path: '/:id',
          name: 'index',
          component: resolve => require(['components/index/Index'], resolve)
        },
        {
          path: '/detail/:id',
          name: 'blogdetail',
          component: resolve => require(['components/blog-detail/BlogDetail'], resolve)
        },
        {
          path: '/about/:id',
          name: 'about',
          component: resolve => require(['components/about-me/AboutMe'], resolve)
        },
        {
          path: '/friend',
          name: 'friend',
          component: resolve => require(['components/friend/FriendLink'], resolve)
        },
        {
          path: '/edit',
          name: 'edit',
          component: resolve => require(['components/edit-blog/EditBlog'], resolve)
        },
        {
          path: '/editUser',
          name: 'editUser',
          component: resolve => require(['components/user/EditUser'], resolve)
        }
      ]
    }
  ]
})
