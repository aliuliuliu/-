<template>
  <div class="my-counter">
    <button type="button" class="btn btn-light">-</button>
    <span class="aaa">{{ num }}</span>
    <button type="button" class="btn btn-light" @click="add">+</button>
  </div>
</template>

<script>
import bus from "@/components/eventBus.js";
export default {
  props: {
    //接收 商品的 id 值 将来 使用EventBus 方案实现把数量传递到 app.vue 的时候 需要通知app 组件 更新哪个商品的数量
    // id: {
    //   type: Number,
    //   default: true,
    // },
    //接收到 num 数量值
    num: {
      default: 1,
      type: Number,
    },
  },
  methods: {
    // 点击按钮让数值+1
    add() {
      if (this.num  === 10) return
        // 要发送给 app 的数据格式为 { id，value}
        // id 是商品的id
        // value 是商品最新的购买数量
        // const obj = { id: this.id, value: this.num + 1 };
        //要做的事情 通过 EventBus 把obj 对象 发送给 App.vue 组件
        this.$emit('newCount',this.num+1)
      
    },
    // add2() {
    //    if (this.num - 1 === 0) return
    //     // 要发送给 app 的数据格式为 { id，value}
    //     // id 是商品的id
    //     // value 是商品最新的购买数量
    //     const obj = { id: this.id, value: this.num - 1 };
    //     //要做的事情 通过 EventBus 把obj 对象 发送给 App.vue 组件
    //     console.log(obj);
    //     bus.$emit("share", obj);
    // },
  },
};
</script>

<style lang="less" scoped>
.my-counter {
  display: flex;
  .aaa {
    width: 45px;
    text-align: center;
    margin: 5px 10px;
    font-size: 12px;
    line-height: 25px;
    text-align: center;
    font-weight: 700;
  }
  .btn,
  .aaa {
    transform: scale(0.9);
  }
}
</style>