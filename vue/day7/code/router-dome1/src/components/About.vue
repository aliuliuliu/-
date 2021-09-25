<template>
  <div class="box">
    <h3>About</h3>
    <!-- 子集路由链接、 -->
    <router-link to="/about">tab1</router-link>
    <router-link to="/about/tab2">tab2</router-link>
    <hr >
    <!-- 子级路由占位符 -->
    <router-view></router-view>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
  .box{
    width: 100%;
    height: 100px;
    background-color: red;
  }

  a{
    text-decoration: none;
    margin: 0 5px;
  }
  a:hover{
    color:#fff
  }
</style> 