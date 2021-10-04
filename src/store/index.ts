import Vue from "vue"
import Vuex from "vuex"

import { User } from "./modules/user"
import { Permission } from "./modules/permission"

export interface StoreType {
  user: User
  permission: Permission
}

Vue.use(Vuex)

export default new Vuex.Store<StoreType>({})
