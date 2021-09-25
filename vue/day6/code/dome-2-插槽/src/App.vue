<template>
  <div class="app-container">
    <h1>根组件</h1>

    <hr />
    <Article>
      <template #title>
        <h3>
          一首诗
        </h3>
      </template>
      <template #content="scope">
        <div>
        <p>啊 大海 全是水！！</p>
        <p>啊 蜈蚣 全是腿！！</p>
        <p>啊 辣椒 净辣嘴！！</p>
        <p>{{ scope }}</p>
      </div>
      </template>
      <template #footer> 
         <p>有预习</p>
      </template>
    </Article>



    <div style="display:none">
      <Left>
        <!-- 默认情况下 在使用 组件的时候 提供的内容都会 被填充 到名字为 defauit 的插槽之中 -->
        <!-- 1.如果要把 内容填充到指定名称的插槽中 需要使用 v-slot 这个指令 -->
        <!-- 2.v-slot 后面要跟上插槽的名字 -->
        <!-- 3.v-slot 指令不能直接用在元素身上 必须用在 template 标签上 -->
        <!-- 4.template 他是一个虚拟的标签只取到包裹的作用 不会别渲染 成实质性的 html元素1  -->
        <!-- 5.v-slot 指令的简写是 # -->
        <template #default>
          <p>这是在Left组件的内容区域 声明的P标签</p>
        </template>
      </Left>
    </div>
  </div>
</template>
<script>
import Left from "@/components/Left.vue";
import Right from "@/components/Right.vue";
import Article from "@/components/Article.vue";
export default {
  data() {
    return {};
  },
  components: {
    Left,
    Right,
    Article,
  },
};
</script>

<style lang="less">
* {
  padding: 0;
  margin: 0;
}
.app-container {
  // display:flex;
  padding: 1px 20px 20px;
  background-color: pink;
}
.box {
  flex: 1;
  width: 100%;
  height: 100px;
  background-color: yellow;
}
.box2 {
  flex: 1;
  width: 300px;
  // height: 100px;
  background-color: rgb(214, 155, 26);
}
</style>
