// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import 'register/'
import store from 'store/'

// element-ui
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import axios from 'axios'
import qs from 'qs';//post请求时传参数给data时用

Vue.use(ElementUI)
Vue.prototype.$axios = axios
Vue.prototype.$qs = qs;//post请求时传参数给data时用

Vue.config.productionTip = false
Vue.config.devtools = true

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
