<template>
  <div class="app-container">
    <h1>App.vue 组件</h1>

    <hr />

    <div class="box">
      <!-- 渲染Left 和 Right 组件 -->
      <!-- 以标签形式使用注册好的组件 -->
      <Left></Left>
      <Right></Right>
      <button @click="flag = !flag"> Toggle Flag</button>
      <Test info="你好" v-if="flag"></Test>
    </div>
  </div>
</template>
<script>
//1.导入需要使用.vue 组件
import Left from "@/components/Left.vue";
import Right from "@/components/Right.vue";
import Test from './components/Test.vue';
export default {
  data(){
    return{
      flag:true
    }
  },
  methods: {},
  // 2.注册组件
  components: {
    Left,
    Right,
    Test,
  },
};
</script>
<style lang="less">
.app-container {
  padding: 1px 20px 20px;
  background-color: pink;
}
.box {
  width: 300px;
  height: 100px;
  background-color: yellow;
}
</style>
