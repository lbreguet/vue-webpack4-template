import Vue from 'vue'
import router from './router'
import App from './App'

import 'assets/css/app.styl'
import axios from 'axios'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)

const axiosConfig = {
  baseUrl: 'https://git.heroku.com/hidden-woodland-78227.git'
}
Vue.prototype.$axios = axios.create(axiosConfig)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
