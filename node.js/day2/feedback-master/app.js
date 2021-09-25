//app application 应用程序
// 把当前模块所有的依赖都声明在文件模块最上面
//为了让目录结构保持清晰  所以我们约定 把所有的HTML 文件都放到 views 目录中
//我们为了方便的统一处理这些静态资源 所以我们约定把所有的静态资源都存放在 public 目录
//那些资源能被用户访问 那些资源不能被用户访问 我现在可以通过代码来进行非常灵活的访问
var http = require('http')
var fs = require('fs')

http
  .createServer(function (req, res) {
    // res.end('hello')
    var url = req.url
    if (url === '/') {
      fs.readFile('./views/index.html', function (err, data) {
        if (err) {
          return res.end('404 Not Found')
        }
        res.end(data)
      })
    } else if (yrl.indexOf('/public') === 0) {
      // console.log(url);
      fs.readFile('.' + url, function (err, data) {
        if (err) {
          return res.end('404 Not Found')
        }
        res.end(data)
      })
    }
  })
  .listen(3000, function () {
    console.log('runing.....');
  })