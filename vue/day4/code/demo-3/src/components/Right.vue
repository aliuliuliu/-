<template>
  <div>
    <h1>Right组件 ----{{ count }}</h1>
    <button @click="add">按钮</button>
    <p>{{ msgFromLeft }}</p>
  </div>
</template>

<script>
//1.导入 eventBus.js 模块
import bus from "./eventBus.js";
export default {
  data() {
    return {
      //子组件 自己的数据 将来希望把 count 值传给 父组件
      count: 0,
      msgFromLeft: "",
    };
  },
  created() {
    //为bus子组件 绑定自定义事件
    bus.$on("share", (val) => {
      this.msgFromLeft = val;
    });
  },
  methods: {
    add() {
      //让子组件的count 值自增+1
      this.count += 1;
      //修改数据时 通过 $emit() 触发自定义事件
      this.$emit("numchange", this.count);
    },
  },
};
</script>

<style></style>
