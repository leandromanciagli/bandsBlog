import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import VueRouter from 'vue-router'

Vue.config.productionTip = false

// router setup
import routes from "./routes/routes.js";
Vue.use(VueRouter)

const router = new VueRouter({
  routes
})

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
