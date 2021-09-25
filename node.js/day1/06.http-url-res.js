var http = require('http')

//1.创建server  
var server = http.createServer()

//2.监听 request 请求事件  设置请求处理函数
server.on('request', function (req, res) {
    // console.log('收到请求了，请求路径是'+req.url);
    // res.write('hello w收到请求12rd')
    // res.end()
    //上面的方式比较麻烦 推荐使用更简单的方式 直接 end 的同时直接接发送
    // res.end('hello worl213d')
    //根据不同的请求路径 发送不同的响应结果
    //1.获取 请求路径
    //req.rul 获取到的是端口号之后的那一部分路径
    //也就是说所有的url 都是已 / 开头的 
    //2.判断 路径处理响应v
    var url = req.url
    if (url === '/') {
        res.end('index page')
    } else if (url === '/login') {
        res.end('login page')
    }else {
        res.end('404 NOT FOUND')
    }
})
//3.绑定端口 启动服务
server.listen(3000, function () {
    console.log('端口已启动');
})