//浏览器中的JavaScript1 是没有文件操作的能力的
//但是node中的JavaScript具有文件操作的能了
//fs 是 file-system 的简写 就是文件系统的意思
//在node 中如果想要进行文件操作 就必须引入fs 这个核心模块
// 在 fs 这个核心 模块中 就提供了所有的文件操作相关的API
// 例如 fs.readFile 就是用来读取文件的


//1.使用 require 方法加载 fs 核心模块
var fs = require('fs')

//2.读取文件
//第一参数就是要读取的文件路径
//第二个参数是一个回调函数
// error
// 如果读取失败  error 就是错误对象
// 如果读取成功 error 就是null
// data
// 如果读取成功  data 就是读取到的数据
// 如果读取失败 error 就是 错误对象
// 成功
// data  数据
// error  null
// 失败
// data  null
// error 错误对象nod
fs.readFile('/hello', (error, data) => {
    // console.log(data);
    //但是无论是二进制 还是 16进制 人类都不认识
    //所以 我们可以通过 tostring 方法把其转换我们能认识的字符
    // console.log(data.toString());
    // console.log(error);
    if (error) {
        console.log('读取文件失败了');
    } else {
        console.log(data.toString());
    }
})