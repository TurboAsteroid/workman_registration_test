import Vue from "vue"
import App from "./App.vue"
import vuetify from "./plugins/vuetify";
import VueRouter from "vue-router"
Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    {
      path: "/",
      component: App,
      name: "home",
    },
  ],
  mode: "history",
})


Vue.config.productionTip = false

new Vue({
  vuetify,
  render: h => h(App),
  router,
}).$mount("#app")