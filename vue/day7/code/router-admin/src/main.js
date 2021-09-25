import Vue from 'vue'
import App from './App.vue'
import router from '@/components/router/index.js'

Vue.config.productionTip = false

// 全局配置 axios 的请求根路径

// 今后，在每个 .vue 组件中 要发起请求 直接调用 this.$http.xxx
// 但是 把axios 挂载到 Vue 原型上 有一个缺点 不利于 API 接口的复用
new Vue({
  render: h => h(App),
  router
}).$mount('#app')
