import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

const routes = [
  {
    path: '/',
    name: 'Home',
    redirect: "/Layout/Home",
  },
  {
    path: '/Login',
    name: 'Login',
    component:  () => import('@/pages/Login/index.vue')
  },
  {
    path: '/Layout',
    name: 'Layout',
    component: () => import("@/components/Layout/index.vue"),
    redirect: "/Layout/Table",
    children: [
      {
        path: 'Home',
        name: 'Home',
        component:  () => import('@/pages/Home/index.vue')
      },
      {
        path: 'Table',
        name: 'Table',
        component:  () => import('@/pages/Table/index.vue')
      },
    ]
  },
]

export default new Router({
  mode: 'history',
  routes: routes
})