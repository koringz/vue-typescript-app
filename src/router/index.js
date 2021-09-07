import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

const rt = [
  {
    path: '/',
    name: 'home',
    component:  () => import('pages/Home/index.vue')
  },
]

export default new Router({
  mode: 'history',
  routes: rt
})
