var http = require('http')
var fs = require('fs')

// 1. 创建Server
var server = http.createServer()

var wwwDir = 'E:/办公/大前端/node.js/day2/app/www'

server.on('request', function (req, res) {
    var url = req.url
    //index.html
    

    var filePath = '/index.html'
    if(url !=='/'){
        filePath = url
    }
    fs.readFile(wwwDir+filePath,function(err,data){
        if(err){
            return res.end('404 Not Found')
        }
        res.end(data)
    })

})
// 3. 绑定端口 启动服务
server.listen(3000, function () {
    console.log('runing.....');
})