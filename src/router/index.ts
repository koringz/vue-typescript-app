import Vue from "vue"
import VueRouter, { RouteConfig } from "vue-router"
import Home from "../views/Home.vue"

Vue.use(VueRouter)

export const constantRoutes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: {
      roles: ["1-1"]
    }
  },
  {
    path: "/about",
    name: "About",
    component: () => import(/* webpackChunkName: "about" */ "../views/About.vue"),
    meta: {
      roles: []
    }
  },
  {
    path: "/login",
    name: "Login",
    component: () => import(/* webpackChunkName: "login" */ "../views/About.vue"),
    meta: {
      roles: []
    }
  }
]

export const asyncRouterMap: Array<RouteConfig> = [
  {
    path: "/list",
    name: "List",
    component: Home,
    meta: {
      roles: ["10-1"]
    }
  },
  {
    path: "/table",
    name: "Table",
    component: Home,
    meta: {
      roles: ["10-2"]
    }
  }
]

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes: constantRoutes
})

export default router
