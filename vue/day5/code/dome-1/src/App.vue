<template>
  <div class="app-container">
    <h1 ref="myh1">App.vue 组件 ----</h1>
    <button @click="showThis">打印this</button>
    <button @click="onReset">重置 Left count为0</button>
    <hr />

    <input type="text" v-if="inputVisible" @blur="showButton" ref="iptRef" />
    <button v-else @click="showInput">展示输入框</button>

    <hr />
    <div class="box">
      <Left ref="comLeft"></Left>
    </div>
  </div>
</template>
<script>
import Left from "@/components/Left.vue";
//1.导入需要使用.vue 组件
export default {
  data() {
    return {
      //控制 输入框和按钮的按需切换
      // 默认子为 false 表示默认 展示按钮 隐藏输入框
      inputVisible: false,
    };
  },
  components: {
    Left,
  },
  methods: {
    showThis() {
      console.log(this);
      this.$refs.myh1.style.color = "red";
    },
    //点击按钮 重置 Left  组件的count值
    onReset() {
      this.$refs.comLeft.count = 0;
    },
    showInput() {
      //切换布尔值 把文本框展示出来
      this.inputVisible = true;
      this.$nextTick(()=>{
        this.$refs.iptRef.focus()
      })
      // console.log( this.$refs.iptRef);
    },
    showButton() {
      this.inputVisible = false;
    },
  },
};
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
