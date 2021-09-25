var express = require('express')

var fs = require('fs')

var http = require('http')

var path = require('path')

var app = express()

var router = require('./router')

app.use('/public/', express.static(path.join(__dirname, './public/')))
app.use('/node_moudules/', express.static(path.join(__dirname, './node_modules/')))

// 在node中 有很多第三方模板引擎都可以使用 不是只有 art-template
// ejs、jade（pug）、handlebars、nunjucks

app.engine('html', require('express-art-template'))

app.set('views', path.join(__dirname, './views/')) //默认就是 ./views  目录

// 把路由挂在到app中
app.use(router)

app.listen(5000, function () {
    console.log('runing............');
})