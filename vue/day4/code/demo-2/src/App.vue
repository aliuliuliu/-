<template>
  <div class="app-container">
    <h1>App.vue 组件 ---- {{ countFromSon }}</h1>

    <hr />

    <div class="box">
      <!-- 渲染Left 和 Right 组件 -->
      <!-- 以标签形式使用注册好的组件 -->
      <Left :msg="message" :user="userinfo"></Left>
    </div>
    <div class="box2">
      <Right @numchange="getNewCount"> </Right>
    </div>
  </div>
</template>
<script>
//1.导入需要使用.vue 组件
import Left from "@/components/Left.vue";
import Right from "@/components/Right.vue";

export default {
  data() {
    return {
      message: "hello 132的宝们!",
      userinfo: { name: "wsc", age: "18" },
      // 定义 countFromSon 来接收子组件传递过来的数据
      countFromSon: 0,
    };
  },

  // 2.注册组件
  components: {
    Left,
    Right,
  },
  methods: {
    getNewCount(val) {
      this.countFromSon = val;
    },
  },
};
</script>

<style lang="less">
*{
  padding: 0;
  margin: 0;
}
.app-container {
  display:flex;
  padding: 1px 20px 20px;
  background-color: pink;
}
.box {
  flex: 1;
  width: 300px;
  // height: 100px;
  background-color: yellow;
}
.box2 {
  flex: 1;
  width: 300px;
  // height: 100px;
  background-color: rgb(214, 155, 26);
}
</style>
