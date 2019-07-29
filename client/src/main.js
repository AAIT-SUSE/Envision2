import Vue from 'vue'
import App from './App.vue'
import router from './plugins/router'
import './plugins/element'
import './plugins/editor'
import './assets/iconfont/iconfont.css'
import './assets/styles/custom-global-style.css'

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
