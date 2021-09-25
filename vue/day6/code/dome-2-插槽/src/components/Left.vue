<template>
  <div>
    <h1>Left组件</h1>
    <!-- 声明一个插槽区域 -->
    <!-- vue 官方规定 每一个 slot插槽 都要有一个 name 名称 -->
    <!-- 如果省略了slot 的name属性 则有一个默认名称叫做 default -->
    <slot name="default">这是default 的默认内容 </slot>
  </div>
</template>

<script>
export default {
  data(){
    return {
     
    }
  },
  methods: {
    
  },
};
</script>
<style lang="less" scoped>
h1 {
  color: red;
}
</style>
