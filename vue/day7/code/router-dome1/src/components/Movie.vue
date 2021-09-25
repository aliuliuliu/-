<template>
  <div class="box">
    <!-- this.$route 是路由的参数对象 -->
    <!-- this.$router 是路由的导航对象 -->
    <h3>Movie---------{{ this.$route.params.id }}------{{ id }}</h3>
    <button @click="showThis">打印this</button>
    <button @click="goback">返回</button>
    <button @click="$router.back()">back 后退</button>
    <button @click="$router.forward()">forward前进</button>
  </div>
</template>

<script>
export default {
methods:{
  showThis(){
    console.log(this);
  },
  goback(){
    this.$router.go(-1)
  }
},
// 技术 props 数据
props:['id'],
}
</script>

<style lang="less" scoped>
  .box{
    width: 100%;
    height: 100px;
    background-color: skyblue;
  }
</style> 