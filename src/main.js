import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import router from './router'
import './registerServiceWorker'
import './plugins/element.js'
import Store from './store/vuex'
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
import './style/index.scss'
Vue.use(Antd)

Vue.config.productionTip = false
new Vue({
  router,
  Store,
  render: h => h(App)
}).$mount('#app')