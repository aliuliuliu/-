<template>
  <div class="article-container">
    <!-- 文章的标题 -->
    <div class="header-box">
      <slot name="title"></slot>
    </div>

    <!-- 文章的内容 -->

    <div class="content-box">
        <!-- 在封装组件时 为预留的<slot>提供属性对应的值这种用法·叫做作用域插槽</slot> -->
      <slot name="content" msg="彬果锅"></slot>
    </div>

    <!-- 文章的作者 -->
    <div class="footer-box">
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "Article",
};
</script>

<style lang="less" scoped>
.article-container {
  > div {
    min-height: 150px;
  }
}
.header-box {
  background-color: skyblue;
}
.content-box {
  background-color: pink;
}
.footer-box {
  background-color: purple;
}
</style>