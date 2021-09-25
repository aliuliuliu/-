<template>
  <div>
    <h1 v-color="'blue'">Left组件 -----{{ count }}</h1>
    <button @click="count += 1">+1</button>
  </div>
</template>

<script>
export default {
    name:'MyLeft',
  data() {
    return {
      count: 0,
    };
  },
  methods: {},
};
</script>
<style lang="less" scoped>
h1 {
  color: red;
}
</style>
