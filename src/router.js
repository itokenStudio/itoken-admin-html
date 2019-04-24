import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    // 后台主页面login
    {
      path: '/',
      name: 'primarySurface',
      component: () => import('./views/backstage/primarySurface.vue')
    },
    // 后台管理页面
    {
      path: '/admin',
      name: 'admin',
      component: () => import('./views/backstage/admin.vue')
    }
  ]
})