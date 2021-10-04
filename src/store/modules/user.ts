import { VuexModule, Module, Mutation, Action, getModule } from "vuex-module-decorators"
import store from "@/store"
import { Message } from "element-ui"

@Module({ name: "user", dynamic: true, namespaced: true, store })
export class User extends VuexModule {
  public perId: string[] = []
  public token: string = "123"
  public name: string = ""
  public message: string = "未知"

  get getMessage() {
    return `当前时间${new Date()}：${this.message}`
  }
  @Mutation
  private SET_NAME(name: string) {
    this.name = name
  }
  @Mutation
  private SET_MESSAGE(message: string) {
    this.message = message
  }
  @Mutation
  private SET_PERID(perid: any) {
    this.perId = perid
  }
  @Mutation
  private SET_TOKEN(token: string) {
    this.token = token
  }

  @Action
  public getUser(name: string) {
    if (name === "admin") {
      this.SET_NAME("admin")
      this.SET_MESSAGE("测试成功")
    } else {
      this.SET_MESSAGE("测试失败")
    }
  }
  @Action
  public getLogin() {
    const data = { token: "123" }
    this.SET_TOKEN(data.token)
  }

  @Action
  public getPerid() {
    debugger
    // token 非常重要
    if (this.token === "") {
      throw Error("用户token不存在")
    }
    const result = { data: ["10-1", "20-2"] }
    if (result.data) {
      const res = result.data
      this.SET_PERID(res)
    } else {
      this.SET_TOKEN("")
      Message.error("无权限")
    }
  }
}

export const UserModule = getModule(User)
