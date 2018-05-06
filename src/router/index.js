import Vue from 'vue'
import Router from 'vue-router'

import store from 'store/index.js'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: '/',
  routes: [
    {
      path: '/',
      component: resolve => require(['components/index/Index'], resolve),
      children: [
        {
          path: '/',
          name: 'introduce',
          component: resolve => require(['components/index/Introduce'], resolve)
        },
        {
          path: '/home/:id',
          name: 'home',
          component: resolve => require(['components/index/Home'], resolve)
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
          path: '/friend/:id',
          name: 'friend',
          component: resolve => require(['components/friend/FriendLink'], resolve)
        },

        {
          path: '/login',
          name: 'login',
          component: resolve => require(['components/user/Login'], resolve)
        },

        {
          path: '/admin/',
          name: 'admin',
          component: resolve => require(['components/admin/Admin'], resolve),
          children: [
            {
              path: '/editBlog/:id?',
              name: 'edit',
              component: resolve => require(['components/edit-blog/EditBlog'], resolve)
            },
            {
              path: '/editUser',
              name: 'editUser',
              component: resolve => require(['components/user/EditUser'], resolve)
            },
            {
              path: '/editAbout/:id',
              name: 'editAbout',
              component: resolve => require(['components/edit-about/EditAbout'], resolve)
            },
            {
              path: '/management-link/',
              name: 'managementLink',
              component: resolve => require(['components/management-link/ManagementLink'], resolve)
            }
          ]
        }
      ]
    }
  ]
})

router.beforeEach((to, from, next) => {
  to.name === 'admin' && !store.getters.user && next({name: 'login'})
  next()
})

export default router
