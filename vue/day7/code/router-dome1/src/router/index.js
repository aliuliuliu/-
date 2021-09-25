// src/router/index.js 就是当前项目的路由模块

// 1.导入vue 和 vue-router 的包
import Vue from 'vue'
import VueRouter from 'vue-router'
// 导入需要的组件
import Home from '@/components/Home.vue'
import Movie from '@/components/Movie.vue'
import About from '@/components/About.vue'
import Tab1 from '@/components/tabs/tab1.vue'
import Tab2 from '@/components/tabs/tab2.vue'
import Login from '@/components/Login.vue'
import Main from '@/components/Main.vue'


// 2. 调用Vue.use() 函数 把VueRouter 安装为 Vue的插件
Vue.use(VueRouter)

// 3.创建路由的实例对象
const router = new VueRouter({
  // routes 是一个数组 作用定义 hash地址 与组件之间的对应关系
  routes:[
    // 路由规则
    // 路由重定向
    { path:'/' , redirect: '/home'},
    { path:'/home' , component: Home},
    // 需求 在Movie 组件中 希望根据 id的值 展示电影的详情信息
    // 可以 为路由规则开启 props 传参从而 方便的拿到动态参数的值
    { path:'/movie/:id' , component: Movie , props:true },
    { 
      path:'/about' , component: About,
      // redirect: '/about/tab1',
      children:[
        // 默认子路由 如果children 数组中 某个路由规则的 path值 为空字符串 则这条路由规则 叫做默认路由
        { path:'',component:Tab1},
        { path:'tab2',component:Tab2}
      ]
    },
    { path:'/login',component:Login},
    { path:'/main',component:Main}
  ]
})

// 为 router 实例对象 声明全局前置导航守卫
// 只要发生了路由的跳转 必然触发 beforEach 指定的function 回调函数
router.beforeEach(function(to,fro,next){
  // to 表示将要访问的路由信息
  // fro 表示将要访问的路由信息2
  // next 函数 表示放行的意思 
  // 分析
  // 1. 要拿到用户将要访问的 hash 地址
  // 2.判断hash 地址是否等于 /main
  // 2.1如果等于 /main 证明需要登录之后 才能访问成功
  // 2.2如果不等于 /main 则不需要登录 直接放行
  // 3.如果访问的结果地址是 /main 则需要 读取 localStorage 中的token值
  // 3.1如果有 roken 则放行
  // 3.2 如果没有 则强制跳转到 login 登录页
  if(to.path === '/main'){
    //要访问 后台主页 需要判断是否有 token
    const token = localStorage.getItem('token')
    if(token){
      next()
    }else{
      // 没有登录强制跳转到登录页
      next('/login')
    }
  }else(
    next()
  )
})

// 4. 向外共享路由的实例对象
export default router