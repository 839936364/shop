import Vue from "vue";
//1.导入vue-router包
import router from "./router";

import App from "./App.vue";
Vue.config.productionTip = false

import './assets/statics/site/css/style.css'
// 安装axios
import axios from "axios";
Vue.prototype.$http = axios;

//导入格式化时间的插件
import moment from "moment";
//定义全局过滤器
Vue.filter("dateFormat", function(dataStr, pattern = "YYYY-MM-DD") {
  return moment(dataStr).format(pattern);
});
Vue.filter("FormatDate", function(dataStr, pattern = "YYYY-MM-DD HH:MM:SS") {
  return moment(dataStr).format(pattern);
});
// 引入组件
// import ElementUI from 'element-ui'

// import 'element-ui/lib/theme-chalk/index.css'

// Vue.use(ElementUI)

new Vue({
  render: h => h(App),
  router
}).$mount("#app");
