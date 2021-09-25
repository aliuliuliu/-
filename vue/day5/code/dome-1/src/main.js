//导入 vue这个包 的得到Vue构造函数
import Vue from 'vue'
//导入 App.vue 根组件 将来App.vue 中的模板结构渲染到 HTMl页面中
// import App from './App.vue'
import App from './App.vue'

//导入需要被全局注册的组件
import Count from '@/components/Count.vue'

Vue.component('MyCount',Count)


Vue.config.productionTip = false

//创建vue的实例对象
new Vue({
  //把render 函数指定的组件 渲染到HTMl页面中
  // render 函数中 渲染的是哪个 .vue 组件 那么这个组件就叫做 根组件
  render: h => h(App),
}).$mount('#app')