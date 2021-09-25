
// app.js 入口模块
//    职责
//       创建服务
//       做一些服务相关的配置
//       body-parser 解析表单 post 请求体
//       提供静态资源服务
//       挂载路由
//       监听端口启动服务

var fs = require('fs')

var express = require('express')

var router = require('./router')

var app = express()
var bodyParser = require('body-parser')

app.use('/node_modules/', express.static('./node_modules/'))
app.use('/public/', express.static('./public/'))
app.engine('html', require('express-art-template'))

// 配置模板引擎 和body-parser 一定要在 app.use(router) 挂载之前

//parse application /x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended:false}))
//parse application/json
app.use(bodyParser.json())

//把路由挂载到 app 服务中
app.use(router)
app.listen(3000, function () {
    console.log('runing....');
})