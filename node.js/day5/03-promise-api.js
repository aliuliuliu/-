// 在 EcmaScript 6 中新增了一个API Promise
// Promise 是一个构造函数
// 创建 Promise 容器
var fs = require('fs')

const {
    fstat
} = require("fs")


//  1.给别人一个承诺  I promise you
//   promise 容器一旦创建  就开始执行里面的代码

var p1 = new Promise(function (resolve, reject) {

    fs.readFile('./data/a.txt', 'utf8', function (err, data) {
        if (err) {
            // 失败了  承诺容器中的 认为失败了
            //把容器的Pending 状态改为Rejected

            //调用 reject 就相当于 调用了 then 方法的第二个参数函数

            reject(err);
        } else {
            // 承诺容器中的任务成功了
            // console.log(data);
            // 把容器的Pending 状态改为成功 Resolved
            // 也就是说 这里调用的 resolve 方法实际上就是 then 方法传递的那个 function

            resolve(data)
        }
    })
})

var p2 = new Promise(function (resolve, reject) {

    fs.readFile('./data/b.txt', 'utf8', function (err, data) {
        if (err) {
            reject(err);
        } else {
            resolve(data)
        }
    })
})

var p3 = new Promise(function (resolve, reject) {

    fs.readFile('./data/c.txt', 'utf8', function (err, data) {
        if (err) {
            reject(err);
        } else {
            resolve(data)
        }
    })
})
// p1 就是那个承诺

//当 p1 成功了然后(then)做制定的操作
//then方法接收的function 就是容器中的resolve 函数
p1
    .then(function (data) {
        console.log(data);
        //当 p1 读取成功的时候
        // 当前函数中 return 的时候可以在后面的 then 中function 接收到
        // 当你 return 123 后面就接收到123
        //   return 'hello'  后面就接收到 hello
        //   没有return 后面收到就是 undefined
        // 上面 那些 return 的数据 没什么 卵用 
        //  真正有用的是 我们可以 return 一个 promise 对象
        // 当 return 一个 promise 对象的时候 后续的 then中的方法 的第一个参数 会 作为  p2 的 resolve 方法

        return p2

    }, function (err) {
        console.log('读取文件失败了', err);
    })

    .then(function (data) {
        console.log(data);
        return p3
    })

    .then(function (data) {
        console.log(data);
    })