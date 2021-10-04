import { VuexModule, Module, Mutation, Action, getModule } from "vuex-module-decorators"
import router, { asyncRouterMap, constantRoutes } from "@/router"
import { RouteConfig } from "vue-router"
import store from "@/store"
import _ from "lodash"

/**
 * 通过meta.role判断是否与当前用户权限匹配
 * @param roles
 * @param route
 */
function hasPermission(roles: any, route: any) {
  if (route.meta && route.meta.roles) {
    return roles.some((role: any) => route.meta.roles.includes(role))
  }
  return true
}
/**
 * 递归过滤异步路由表，返回符合用户角色权限的路由表
 * @param asyncRouterMap
 * @param roles
 */
function filterAsyncRouter(asyncRouterMap: any[], roles: string[]) {
  asyncRouterMap.filter((routeItem: any) => {
    if (hasPermission(roles, routeItem)) {
      if (routeItem.children && routeItem.children.length) {
        routeItem.children = filterAsyncRouter(routeItem.children, roles)
      }
      return true
    }
    return false
  })
  return asyncRouterMap
}

@Module({ name: "permission", dynamic: true, namespaced: true, store })
export class Permission extends VuexModule {
  public permissionId: string = ""
  // 动态路由
  public routes: RouteConfig[] = []
  public dynamicRouter: RouteConfig[] = []

  // get getPermission() {
  //   return this.permissionId
  // }
  // get getRoutes() {
  //   return this.routes
  // }
  // get getDynamicRouter() {
  //   return this.dynamicRouter
  // }

  @Mutation
  private SET_ID(name: string) {
    this.permissionId = name
  }
  @Mutation
  private SET_ROUTES(canAccessRouter: RouteConfig[]) {
    this.dynamicRouter = canAccessRouter
    this.routes = constantRoutes.concat(canAccessRouter)
  }

  @Action
  public getMenu(name: string) {
    this.SET_ID(name)
  }

  @Action
  public getGenerateRouter(perId: string[]) {
    const routes = _.cloneDeep(asyncRouterMap)
    const canAccessRouter = filterAsyncRouter(routes, perId)
    const redirect = canAccessRouter[0].path
    // 默认跳转路由
    canAccessRouter.push({
      path: "/",
      redirect
    })
    this.SET_ROUTES(canAccessRouter)
  }
}

export const PermissionModule = getModule(Permission)
