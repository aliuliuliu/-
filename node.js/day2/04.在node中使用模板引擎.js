// art - template 
// atr- template 不仅可以在浏览器使用 也可以在node 中使用

//安装 
// npm install art-artTemplaten
// 该命令在哪执行就会把包下载到哪里 默认会下载 node_modules 目录中  不要改 也不支持改
// 在Node 中使用 art-template 模板引擎
// 模板引擎 最早就是诞生于服务器领域 后来才发展到了前端、、


// 1.npm install art-artTemplaten
//2.在需要使用的文件模块中 加载art_template
//  只需要使用 require 方法加载就可以了 ：require('art_template')
//  参数中的atr_template 就是你下载的包的名字
// 也就说你 isntall的名字是什么则 require 中就是什么
// 3.查文档 使用模块引擎的API

var template = require('art-template')

var ret = template.render('hello {{ name }}', {
    name:'jack'
})
console.log(ret);