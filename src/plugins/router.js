import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

import Home from '../pages/home.vue'
import Login from '../pages/login.vue'
import Reg from '../pages/reg.vue'
import Detail from '../pages/detail.vue'
import User from '../pages/user.vue'
import Loading from '../components/app-loading/app-loading.vue'
import Follow from '../pages/follow.vue'
import Classify from '../pages/classify.vue'
let routes = [
	{path:'/loading',component:Loading},
	{path:'/home',component:Home},
	{path:'/detail',name:'detail',component:Detail},
	{path:'/login',component:Login},
	{path:'/reg',component:Reg},
	{path:'/user',component:User},
	{path:'/follow',component:Follow},
	{path:'/classify',component:Classify},
	{path:'/',redirect:'/home'},
];
const originalPush = VueRouter.prototype.push
   VueRouter.prototype.push = function push(location) {
   return originalPush.call(this, location).catch(err => err)
};

let router = new VueRouter({
  routes,
  mode:'history'
});

export default router;