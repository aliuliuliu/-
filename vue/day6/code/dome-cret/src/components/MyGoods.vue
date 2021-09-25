<template>
  <div class="my-goods-item">
    <div class="left">
      <div class="custom-control custom-checkbox">
        <input type="checkbox" class="custom-control-input" :id="'cb'+ id" :checked="state" @change="stateChange"/>
        <label class="custom-control-label" :for="'cb'+ id">
          <img :src="pic" alt />
        </label>
      </div>
    </div>
    <div class="right">
      <div class="top">{{ title }}</div>
      <div class="bottom">
        <span class="price">￥{{ price }}</span>
       <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    //商品的id
    // 为什么要封装一个id属性
    // 原因：将来子组件中的商品的勾选状态变化之后 要通过子传父的形式 通知父组件修改对应商品的勾选状态
    id:{
      required:true,
      type:Number
    },
    //渲染的商品的标题
    title: {
      default: "",
      type: String,
    },
    // 商品的单价
    price: {
      default: "",
      type: Number,
    },
    // 要渲染到的商品的图片
    pic: {
      default: "",
      type: String,
    },
    // 商品状态
    state: {
      default: true,
      type: Boolean,
    },
    //商品数量
    count:{
      default:1,
      type:Number
    }
  },
  methods:{
    //只要 复选框 的选中状态发生了变化 就会调用这个处理函数
    stateChange(e){
      const newState = e.target.checked
      // 触发自定义事件
      this.$emit('state-change',{id:this.id,value:newState})
    }
  }
};
</script>

<style lang="less" scoped>
.my-goods-item {
  display: flex;
  padding: 10px;
  border-bottom: 1px solid #ccc;
  .left {
    img {
      width: 120px;
      height: 120px;
      margin: 0 8px;
      border-radius: 10px;
    }
    .custom-control-label::before,
    .custom-control-label::after {
      top: 50px;
    }
  }
  .right {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .top {
      font-size: 14px;
      font-weight: 700;
    }
    .bottom {
      display: flex;
      justify-content: space-between;
      padding: 5px 0;
      align-items: center;
      .price {
        color: red;
        font-weight: bold;
      }
    }
  }
}
</style>