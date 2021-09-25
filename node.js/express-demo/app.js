var express = require('express')
var bodyParser = require('body-parser')

var app = express()


app.use('/public/', express.static('./public/'))

// 配置使用 art-artTemplate 模板引擎
// 第一个参数 表示 当渲染以 .art 结尾的文件的时候 使用 art-template 模板引擎
// express-art-template 是专门用来在Express 中把 art-template 整合到express中
// 虽然外面 这里不需要加载 art-template 但是也必须安装
// 原因就在于 express-art-template 依赖了 art-template

app.engine('html', require('express-art-template'))

// Express为response 相应对象提供了一个方法  render
// render 方法默认是不可以使用 但是如果配置了模板引擎 就可以使用了
//  res.rendrt('html模板名',{模板数据})
// 第一参数不能写路径  默认会去项目中 views 目录中查找该模板引擎
// 也就是数 Express 有个约定 开发人员 把所有的视图文件都放到 views 目录中

//如果想要修改默认路径的 views 目录 则可以
// app.set('views',render函数的默认路径)

//配置 body-parser 中间件（插件  专门用来解析表单 POST 请求体）

//parse application /x-www-form-urlencoded
app.use(bodyParser.urlencoded({
    extended: false
}))
//parse application/json
app.use(bodyParser.json())


var comments = [{
        name: '张三',
        message: '今天天气不错',
        dateTime: '2021-9-2'
    },
    {
        name: '张三',
        message: '今天天气不错',
        dateTime: '2021-9-2'
    },
    {
        name: '张三',
        message: '今天天气不错',
        dateTime: '2021-9-2'
    },
    {
        name: '张三',
        message: '今天天气不错',
        dateTime: '2021-9-2'
    }
]
app.get('/', function (req, res) {

    res.render('index.html', {
        comments: comments

    })
})
app.get('/post', function (req, res) {

    res.render('post.html')
})
app.post('/post', function (req, res) {
    var comments = req.body
    comments.dateTime = '2021-9-2'
    comments.unshift(comments)
    res.redirect('/')
    // res.statusCode(comments)
    // res.setHeader('Loaction','/')
})


app.listen(3000, function () {

    console.log('runing...');
})