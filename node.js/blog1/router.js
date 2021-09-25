var express = require('express')


var User = require('./models/user.js')

var router = express.Router()

router.get('/', function (req, res) {

  res.render('index.html')
})

router.get('/login', function (req, res) {

  res.render('login.html')
})

router.get('/register', function (req, res) {

  res.render('register.html')
})
router.post('/register', function (req, res) {
  //1.获取表单提交 数据
  //req.body
  //2. 操作数据库
  // 判断用户是否已存在
  //如果已存在 不允许注册
  //如果不存在  注册新建用户
  //3.发送响应
  var body = req.body
  User.findOne({
    $or: [{
        email: body.email
      },
      {
        nickname: body.nickname
      }
    ]
  }, function (err, data) {
    if (err) {
      return res.status(500).json({
        success: false,
        message: '服务端错误'
      })
    }
    // console.log(data);
    if (data) {
      //邮箱或昵称已存在
      return res.status(200).json({
        success: true,
        message: '邮箱或者昵称已存在'
      })
    }

    new User(body).save(function (err, user) {

      if (err) {
        return res.status(500).json({
          success: false,
          message: '服务端错误'
        })
      }
    })
    // express 提供一个响应方法：json
    // 该方法作为一个对象作为参数  他会自动帮你把对象转为字符串
    res.status(200).json({
      success: true,
      message: 'ok'
    })
  })
})

module.exports = router