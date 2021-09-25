<template>
  <div app2-contianer>  
    <h1> app2 组件</h1>

    <!-- 当安装和配置了 vue-router 后 就可以使用router-link 来代替普通 a 链接了 -->
    <!-- <a href="#/home">首页</a> -->
    <router-link to="/home">首页</router-link>
    <!-- <a href="#/movie">电影</a> -->
    <!-- 注意1 在hash地址中 / 后面的参数项 叫作路径参数 -->
    <!-- 在路径 参数对象中 需要使用 this.$route.params 来访问路径参数 -->
    <!-- 注意2 在hash 地址中 后面的参数项 叫做查询参数、 -->
    <!-- 在路由参数对象·中 需要使用 this.$route.query 来访问查询参数 -->
    <!-- 注意3：在this.$route 中 path 只是路径部分 fullpath是完整的地址 -->
    <!-- 例如： -->
    <!-- movie/2?name=zs%20age%3D20 是 fullpath -->
    <!-- /movie/2 是path -->
    <router-link to="/movie/1">洛基</router-link>
    <router-link to="/movie/2?name=zs age=20">雷神</router-link>
    <router-link to="/movie/3">复联</router-link>
    <!-- <a href="#/about">关于</a> -->
    <router-link to="/about">关于</router-link>
    <hr>
    <!-- 只要在项目中安装和配置了 vue-router 就可以使用 router-view 这个组件了 -->
    <!-- 它的作用很单纯 占位符 -->
    <router-view></router-view>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
a{
  text-decoration: none;
  margin: 0 5px;
}
a:hover{
  color:red
}

</style>