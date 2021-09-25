<template>
  <div>
    <h1>Left组件-----{{ count }}</h1>
    <button @click="count += 1">+1</button>
    <button @click="res">重置</button>
    <hr />
  </div>
</template>

<script>
export default {
  data(){
    return {
      count:0
    }
  },
  methods: {
    res(){
    this.count = 0
    }
  },
};
</script>
<style lang="less" scoped>
h1 {
  color: red;
}
</style>
