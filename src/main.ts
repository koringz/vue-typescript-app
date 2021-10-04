import Vue, { DirectiveOptions } from "vue"
import App from "./App.vue"
import router from "./router"
import store from "./store"
import * as directives from "./directives"
import "@/utils/permission"

Object.keys(directives).forEach(keys => {
  Vue.directive(keys, (directives as { [key: string]: DirectiveOptions })[keys])
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app")
