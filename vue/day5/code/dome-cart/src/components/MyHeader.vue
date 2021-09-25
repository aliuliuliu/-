<template>
  <div class="my-header">{{ title }}</div>
</template>

<script>
export default {
  props:{
    //声明title 自定义属性 允许使用者自定义标题的内容
    title:{
      default:'',
      type:String
    }
  }
};
</script>

<style lang="less" scoped>
.my-header {
  height: 45px;
  line-height: 45px;
  text-align: center;
  background-color: #1d7bff;
  color: #fff;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 2;
}
</style>