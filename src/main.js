import Vue from 'vue'
import App from './layouts/App.vue'
import router from './plugins/router.js'
Vue.config.productionTip = false
import './assets/css/base.css'
import './assets/js/font.js'
import './assets/font/iconfont.css'
import './plugins/axios.js'
import './filters'
new Vue({
  render: h => h(App),
  router,
  data:{
	  Bloading:true,
	  Bfoot:true,
	  Bback:true
  }
}).$mount('#app')
