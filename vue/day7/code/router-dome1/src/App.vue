<template>
  <div>
    <h1>app 根组件</h1>
    <a href="#/home">首页</a>
    <a href="#/movie">电影</a>
    <a href="#/about">关于</a>
    <component :is="comName"></component>
  </div>
</template>

<script>
import Home from '@/components/Home.vue'
import Movie from '@/components/Movie.vue'
import About from '@/components/About.vue'
export default {
  components:{
    Home,
    Movie,
    About
  },
  data(){
    return{
      // 在动态组件的位置 要展示的组件的名字 值必须是字符串
      comName:'Home',
    }
  },
  created(){
    // 只要当前组件已被创建 就立即监听 window 对象的 onhashchange事件 
    window.onhashchange = ()=>{
      // if(location.hash === '#/home' ){
      //   this.comName = Home
      // }else if(location.hash === '#/movie'){
      //   this.comName = Movie
      // }else if(location.hash === '#/about'){
      //    this.comName = About
      // }
      switch(location.hash){
        case '#/home':
          this.comName = 'Home'
          break
        case '#/movie':
          this.comName = 'Movie'
          break
        case '#/about':
          this.comName = 'About'
          break
      }
    }
  }
}
</script>

<style lang="less" scoped>
a{
  margin: 0 5px;
  text-decoration: none;
}
a:hover{
  color: red;
}

</style>