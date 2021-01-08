import Vue from 'vue'
import App from './App.vue'
import router from './router'
//import VueCookies from 'vue-cookies'

//Vue.use(VueCookies)

Vue.use(require('vue-cookies'))

Vue.config.productionTip = false



new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
