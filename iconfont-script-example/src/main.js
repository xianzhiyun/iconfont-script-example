import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false
// 正常引入内容
import './assets/iconfont/iconfont.css'

new Vue({
  render: h => h(App),
}).$mount('#app')
