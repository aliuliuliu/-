<template>
  <div class="box">
    <h3>Home</h3>
    <hr>
    <button @click="gotoLK">点击跳转到 --洛基--</button>
    <router-link to="/main"> 访问后台主页</router-link>
  </div>
</template>

<script>
export default {
  methods:{
    gotoLK(){
      // 点击跳转到 洛基 组件
      // this.$router.push('/movie/1')
      this.$router.replace('/movie/1')      
    }
  }

}
</script>

<style lang="less" scoped>
  .box{
    width: 100%;
    height: 100px;
    background-color: pink;
  }
</style> 