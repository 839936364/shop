import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);

import index from './components/index.vue'
import car from './components/car.vue'
import detail from './components/detail.vue'
import member from './components/member.vue'
import userCenter from './components/userCenter.vue'
import userOrder from './components/userOrder.vue'
import userDetail from './components/userDetail.vue'
import Settlement from './components/settlement.vue'


const router = new VueRouter({
  routes: [
    { path: "/", redirect: "/index" },
    { path: "/index", component: index },
    { path: "/car", component: car },
    { path: "/settlement", component: Settlement },
    { path: "/detail/:id", component: detail },
    { path: "/member", component: member },
    { path: "/user/order", component: userOrder },
    { path: "/user/center", component: userCenter },
    { path: "/user/detail", component: userDetail },
  ]
});
export default router;