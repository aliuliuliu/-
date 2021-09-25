//接下来  我们人要干一件使用node 很有成就感的一件事儿
//你可以 使用node 非常轻松的构建一个web 服务器

//在node 中专门提供一个核心模块  http
//http  这个模块的职责就是帮你创建编写服务器的

//1.加载http核心模块
var http = require('http')

//2.http.createServer()方法创建一个web 服务器
//返回一个Server 实例
var server = http.createServer()

//3.服务器 要干嘛？
//  提供服务：对数据的服务
//发请求
//接收请求
// 处理请求
//给个反馈（发送响应）
//注册 request 请求函数
//当客户端 请求过来 就会自动触发 服务器 的 request 请求事件 然后执行第二个参数1 回调处理函数
//request 请求事件处理函数需要接收 两个参数
//request 请求对象
    // 请求对象可以用来获取客户端的一些亲请求信息 例如请求路径
//Response 响应请求  
    //响应对象可以用来给客户发送响应消息
server.on('request',function(request,response){
console.log('收到客户端的请求了,请求路径'+ request.url);
// http://127.0.0.1:3000/
// http://127.0.0.1:3000/a

//response 对象有一个方法 write 可以用来给客户发送响应数据
//write 可以使用 多次 但是最后一定要使用end 来结束响应 否则 客户端会一直等待响应
response.write('hello')
response.write('nodejs')
response.end()
})
//4. 绑定 端口号 启动服务器
server.listen(3000,function(){
    console.log('服务器启动成功了，可以通过http://127.0.0.1:3000/来进行访问');
})