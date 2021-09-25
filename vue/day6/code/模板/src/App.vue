<template>
  <div class="app-container">
    <h1>组件</h1>
  </div>
</template>
<script>
export default {
  data() {
    return {
      //控制 输入框和按钮的按需切换
      // 默认子为 false 表示默认 展示按钮 隐藏输入框
      inputVisible: false,
    };
  },
  components: {
  },
}
</script>

<style lang="less">
* {
  padding: 0;
  margin: 0;
}
.app-container {
  // display:flex;
  padding: 1px 20px 20px;
  background-color: pink;
}
.box {
  flex: 1;
  width: 100%;
  height: 100px;
  background-color: yellow;
}
.box2 {
  flex: 1;
  width: 300px;
  // height: 100px;
  background-color: rgb(214, 155, 26);
}
</style>
