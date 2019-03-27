import Vue from "vue";
import App from "./App.vue";
// Vue.config.productionTip = false
//1.导入vue-router包
import VueRouter from "vue-router";
//2.手动安装VueRouter
Vue.use(VueRouter);
import router from "./router.js";
new Vue({
  render: h => h(App),
  router
}).$mount("#app");
