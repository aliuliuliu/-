<template>
  <div id="top">
    <MyHeader title="购物车"></MyHeader>
    <!-- 循环渲染每一个商品信息 -->
    <MyGoods
      v-for="item in list"
      :key="item.id"
      :id="item.id"
      :title="item.goods_name"
      :price="item.goods_price"
      :pic="item.goods_img"
      :state="item.goods_state"
      :count="item.goods_count"
      @state-change="gitNewState"
    ></MyGoods>
    <MyFooter :state="fullState" :github="amt" :total="aliu" @state-change="gitee"></MyFooter>
  </div>
</template>

<script>
//导入 axios 请求库
import axios from "axios";
import MyHeader from "@/components/MyHeader.vue";
import MyGoods from "@/components/MyGoods.vue";
import MyFooter from "@/components/MyFooter.vue";

import bus from "@/components/eventBus.js";
export default {
  data() {
    return {
      // 用来村粗购物车的数据、默认值为 空
      list: [],
    };
  },
  components: {
    MyHeader,
    MyGoods,
    MyFooter,
  },
  // 计算属性
  computed: {
    //动态计算出全选状态是 true 还是 false
    fullState() {
      return this.list.every((item) => item.goods_state);
    },
    //已勾选商品的总价格
    amt() {
      //1.先filter 过滤
      //2.再reduce 累计
      return this.list
        .filter((item) => item.goods_state)
        .reduce(
          (total, item) => (total += item.goods_price * item.goods_count),
          0
        );
    },
    // 已勾选商品的总数量
    aliu() {
      return this.list
        .filter((item) => item.goods_state)
        .reduce((total, item) => (total += item.goods_count), 0);
    },
  },
  created() {
    this.initCartList();
    bus.$on("share", (val) => {
      this.list.some((item) => {
        if (item.id === val.id) {
          item.goods_count = val.value;
          return true;
        }
      });
    });
  },

  methods: {
    //封装 请求 列表数据的方法
    async initCartList() {
      //调用axios 的get 方法 请求数据
      const { data: res } = await axios.get("https://www.escook.cn/api/cart");
      console.log(res);
      //只要请求回来的数据 在页面渲染期间要用到  则必须转存到 data中
      if (res.status === 200) {
        this.list = res.list;
      }
    },
    //接收子组件传来的数据
    //e的格式为{ id,value}
    gitNewState(e) {
      console.log("收到了");
      this.list.some((item) => {
        if (item.id === e.id) {
          item.goods_state = e.value;
          return true;
        }
      });
    },
    // 接收 Myfooter子组件传来的全选按钮的状态
    gitee(e) {
      this.list.forEach((item) => (item.goods_state = e));
    },
  },
};
</script>

<style scoped>
#top {
  margin-top: 45px;
}
</style>
