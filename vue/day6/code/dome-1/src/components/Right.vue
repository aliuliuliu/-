<template>
  <div>
    <h1>Right组件</h1>
  </div>
</template>

<script>
export default {
  // 当提供了 name 属性之后 组件的名称 就是name 属性的值

  // 对比：
  // 1.组件的注册名称的 主要应用场景是 以标签的形式 把注册好的组件 渲染和使用到页面结构之中？
  // 2.组件声明时候的 name 名称的主要应用场景 结合<keep-alive> 标签实组件缓存功能 以及在调试中看到的 name 名称
  name:'MyRight',
  data() {
    return {};
  },
  created() {},
  methods: {
    add() {},
  },
};
</script>

<style lang="less" scoped>
h1 {
  color: red;
}
</style>
