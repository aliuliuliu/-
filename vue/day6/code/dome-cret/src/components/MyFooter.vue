<template>
  <!-- 底部 -->
  <div class="my-footer">
    <!-- 全选 -->
    <div class="custom-control custom-checkbox">
      <input
        type="checkbox"
        class="custom-control-input"
        id="footerCheck"
        :checked="state"
        @change="stateChange"
      />
      <label class="custom-control-label" for="footerCheck">全选</label>
    </div>
    <!-- 合计 -->
    <div>
      <span>合计:</span>
      <span class="price">¥ {{ github.toFixed(2) }}</span>
    </div>
    <!-- 按钮 -->
    <button type="button" class="footer-btn btn btn-primary">结算 ( {{ total }} )</button>
  </div>
</template>

<script>
export default {
  props:{
    //全选的状态
    state:{
      default:true,
      type:Boolean
    },
    github:{
      default:0,
      type:Number
    },
    total:{
      default:0,
      type:Number
    }
  },
  methods:{
    //监听发到了全选按钮的变化
    stateChange(e){
      const newState = e.target.checked
      this.$emit('state-change',newState)
    }
  }
};
</script>

<style lang="less" scoped>
.my-footer {
  position: fixed;
  z-index: 2;
  bottom: 0;
  width: 100%;
  height: 50px;
  border-top: 1px solid #ccc;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
  background: #fff;

  .price {
    color: red;
    font-weight: bold;
    font-size: 15px;
  }
  .footer-btn {
    min-width: 80px;
    height: 30px;
    line-height: 30px;
    border-radius: 25px;
    padding: 0;
  }
}
</style>