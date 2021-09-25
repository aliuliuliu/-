<template>
  <div class="app-container">
    <h1 v-color="color">APP根组件</h1>
    <p v-color="'red'">测试</p>
    <button @click="color = 'green'">变色龙</button>
    <button @click="comName = 'Left'">展示 Left</button>
    <button @click="comName = 'Right'">展示 Right</button>
    <!-- 1.components 标签是 vue 内置的 作用：组件的占位符 -->
    <!-- 2.is 属性的值 表示要渲染的组件的名字 -->
    <!-- 3.is 属性的值 应该是组件在 component节点下的注册名称 -->

    <!-- keep-alive 可以把内部的组件进行缓存 而不是销毁组件 -->
    <!-- 在使用keep-alive 的时候 可以使用 include 指定哪些组件被缓存   -->
    <!-- 或者通过 exclude 属性指定哪些组件不需要被缓存 但是不要同时使用  include 和 exclude-->

    <keep-alive include="MyLeft,MyRight">
      <components :is="comName"></components>
    </keep-alive>
  </div>
</template>
<script>
import Left from "@/components/Left.vue";
import Right from "@/components/Right.vue";
export default {
  data() {
    return {
      comName: "Left",
      color: "blue",
    };
  },
  components: {
    // 如果在声明组件的时候 没有为组件指定 name 名称 则组件的名称就是注册是的名称
    Left,
    Right,
  },
  // 私有自定义指令的节点
  directives: {
    // 定义名为 color的指令 指向一个配置对象
    // color: {
    //   bind(el, binding) {
    //     el.style.color = binding.value;
    //   },
    //   update(el, binding) {
    //     el.style.color = binding.value;
    //   },
    // },

    color(el, binding) {
      el.style.color = binding.value;
    },
  },
};
</script>

<style lang="less" scope>
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
