//导入 vue这个包 的得到Vue构造函数
import Vue from 'vue'

//导入 App.vue 根组件 将来App.vue 中的模板结构渲染到 HTMl页面中
import App from './App2.vue'

// 导入路由模块，拿到路由的实例对象
// 在进行模块化导入的时候 如果给定的文件夹 则默认导入这个文件夹下 名字叫做 index.js 的文件
import router from '@/router'

//导入需要被全局注册的组件

Vue.config.productionTip = false

//创建vue的实例对象
new Vue({
  //把render 函数指定的组件 渲染到HTMl页面中
  // render 函数中 渲染的是哪个 .vue 组件 那么这个组件就叫做 根组件
  render: h => h(App),
  // 在vue 项目中 要想把路由用起来 必须把路由实例对象 通过下面的方式进行挂载
  // router:路由的实例对象
  router
}).$mount('#app')