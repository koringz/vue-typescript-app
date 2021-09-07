import 'babel-polyfill'
import Vue from 'vue'
import router from './router'
import App from './App.vue'

import 'assets/css/reset.css'
import 'assets/css/common.css'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
