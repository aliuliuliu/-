//require
//端口号
var http = require('http')

var server = http.createServer()

server.on('request', function (req, res) {
    res.setHeader('Content-Type', 'text/plain; charset=utf-8')
    res.end('hello 大前端')
})
server.listen(3000, function () {
    console.log('server  is  runing....');
})