// 0安装

//1. 引包

var express = require('express')

//2. 创建你的服务器应用程序

//   也就是原来的阿http.reateServer

var  app = express()


// 在Express 中开放资源就是一个API的事儿

// 公开指定目录
app.use('/public',express.static('./public'))
app.use('/static',express.static('./static'))


app.get('/about',function(req,res){
    //在 Express 中可以直接 req.jquery 来获取查询字符串参数
    console.log(req.jquery);

})
app.get('/pinglun',function(req,res){
    //req.jquery 
    //在Express 中使用 模板字符串 有更好的方式 res.render ('文件名',{模板对象})
})
// 模板引擎在Express 也是一个API的事儿

app.get('/',function(req,res){

    res.end('hello express!')
})
app.get('/about',function(req,res){

    res.send('关于我')
})

app.listen(3000,function(){
    console.log('app is runing at port 3000');
})