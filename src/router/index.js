import Vue from 'vue'
import Router from 'vue-router'

import {getCookie} from '../utils/cookie'
// import store from 'store/index.js'

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
          path: '/:name',
          name: 'name',
          component: resolve => require(['components/user/Name'], resolve),
          children: [
            {
              path: '/',
              name: 'home',
              component: resolve => require(['components/index/Home'], resolve)
            }
          ]
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
          path: '/oauth',
          name: 'oauth',
          component: resolve => require(['components/user/OAuth'], resolve),
          children: [
            {
              path: '/oauth-success',
              name: 'oauthSuccess',
              component: resolve => require(['components/user/OAuthSuccess'], resolve)
            }
          ]
        },

        {
          path: '/admin/',
          name: 'admin',
          component: resolve => require(['components/admin/Admin'], resolve),
          children: [
            {
              path: '',
              name: 'adminHome',
              component: resolve => require(['components/admin-home/AdminHome'], resolve)
            },
            {
              path: 'admin-user',
              name: 'adminUser',
              component: resolve => require(['components/user/EditUser'], resolve)
            },
            {
              path: 'admin-blog',
              name: 'adminBlog',
              component: resolve => require(['components/admin-blog/AdminBlog'], resolve)
            },
            {
              path: 'editBlog/:id?',
              name: 'edit',
              component: resolve => require(['components/edit-blog/EditBlog'], resolve)
            },
            {
              path: 'admin-category',
              name: 'adminCategory',
              component: resolve => require(['components/admin-category/AdminCategory'], resolve)
            },

            {
              path: 'admin-about',
              name: 'adminAbout',
              component: resolve => require(['components/admin-about/AdminAbout'], resolve)
            },
            {
              path: 'admin-link/',
              name: 'adminLink',
              component: resolve => require(['components/admin-link/AdminLink'], resolve)
            },
            {
              path: 'admin-summary/',
              name: 'adminSummary',
              component: resolve => require(['components/admin-summary-img/AdminSummary'], resolve)
            }

          ]
        }
      ]
    }
  ]
})

router.beforeEach((to, from, next) => {
  to.path.includes('admin') && !getCookie('csrftoken') && next({name: 'login'})
  next()
})

router.afterEach((to, from, next) => {
  window.scrollTo(0, 0)
})

export default router
