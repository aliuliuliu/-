## 前端工程化

### 实际的前端开发

- 模块化（js 模块化 ，css模块化，资源的模块化）
- 组件化 （复有想用的UI结构 样式 行为）
- 规范化（目录结构的规划，编码规范化，接口规范化，文档规范化，git分支管理）
- 自动化（自动化构建，自动部署，自动化部署）

前端工程化指的是：在企业级的前端项目开发中，把前端开发所需的工具，技术，流程，经验等进行规范化，标准化

#### 目前主流的前端工程化解决方案

- webpack（http:///www.webpackjs.com/）
- parcel(http://www.zh.parceljs.org/)

##### webpack的基本使用

webpack是前端项目工程化的具体解决方案

主要功能：它提供了友好的前端模块化开发支持 以及代码压缩混淆，处理浏览器端JavaScript的兼容性，性能优化等强大功能。

##### 安装webpack

在终端运行如下命令安装webpack相关两个包

- `npm install webpack@5.42.1 webpack-cli@4.7.2 -D`
- -S 是 --save 的简写
- -D 是 --save-dev 的简写

##### 解惑html-webpack-plugin

- 通过HTML插件复制到项目根目录中的index.html页面 也被放到了内存中
- HTML插件在生成的index.html页面自动注入了打包的bundle.j文件