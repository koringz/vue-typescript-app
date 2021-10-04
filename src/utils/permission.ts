import router from "@/router"
import { Route } from "vue-router"
import { Message } from "element-ui"
import { getToken } from "@/utils/auth"
import { UserModule } from "@/store/modules/user"
import { PermissionModule } from "@/store/modules/permission"

const whiteList = ["/login", "/authredirect"]

router.beforeEach(async (to: Route, _: any, next: any) => {
  // 判断是否有token
  if (getToken()) {
    if (to.path === "/login") {
      next({ path: "/" })
    } else {
      // perId 非常重要
      if (UserModule.perId.length === 0) {
        try {
          UserModule.getPerid()
          const roles = UserModule.perId // note: roles must be a array! such as: ['editor','develop']
          PermissionModule.getGenerateRouter(roles)
          PermissionModule.dynamicRouter.forEach((item: any) => {
            router.addRoute(item)
          })
          next({ ...to, replace: true })
        } catch (err) {
          Message.error("验证失败,请重新登录")
          next({ path: "/login" })
        }
      } else {
        next() // 当有用户权限的时候，说明所有可访问路由已生成 如访问没权限的全面会自动进入404页面
      }
    }
  } else {
    if (whiteList.indexOf(to.path) !== -1) {
      next()
    } else {
      next("/login")
    }
  }
})
