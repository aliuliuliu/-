<template>
  <div>
    <h3>Count 组件</h3>
    <p>Count 的值是:{{ count }}</p>
    <button @click="count += 1">按钮</button>
  </div>
</template>

<script>
export default {
  // props 是自定义属性 允许使用者 通过自定义属性 为当前组件指定初始值
  // 自定义属性的名字是封装者 自定义的 只要名称合法就行
  // props 中的数据 可以直接在模板结构中 被使用
  // 注意 props 是只读的 不要直接修改 props的值 否则终端会报错
//   props:['init']
  props: {
    init:{
        //如果外界使用 Count 组件的时候 没有传递init 属性 这默认值生效
        default:0,
        //init 的值类型必须是  Number 数字
        type:Number,
        //必填项
        required:true
    }
  },
  data() {
    return {
      count: this.init,
    };
  },
};
</script>

<style lang="less"></style>
