import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(VueAxios, axios)
Vue.use(ElementUI)

Vue.config.productionTip = false

const aa = new Vue({
  render: h => h(App),
}).$mount('#app')

window.aa = aa
