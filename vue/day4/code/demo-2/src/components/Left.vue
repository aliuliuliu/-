<template>
  <div>
    <h1>Left组件</h1>
    <p>msg 的值是 {{ msg }}</p>
    <p>user 的值是 {{ user }}</p>
    <hr />
    <button @click="send">把好诗 发给Right</button>
  </div>
</template>

<script>
//1.导入 eventBus.js 模块
import bus from "./eventBus.js";
export default {
  props: ["msg", "user"],
  data() {
    return {
      str: "黑云压城城欲摧 ，渚清沙白鸟飞回 ，借问酒家何处有 ，半江瑟瑟半江红",
    };
  },
  methods: {
    send() {
      //通过 eventBus 来发送数据
      bus.$emit("share", this.str);
    },
  },
};
</script>
<style lang="less" scoped>
h1 {
  color: red;
}
</style>
