// 一种数据类型
// 参数
// 返回值
// 函数太灵活了 无所不能
// 一般情况下 把函数作为参数的目的就是为了 获取函数内部的异步操作 结果
// JavaScript 单线程  事件循环

function add( x,y,callback) {

    console.log(1);

    setTimeout(function () {

        var ret = x + y
        callback(ret)
    }, 1000)
    console.log(3);
}
add(10,20,function (ret) {
    console.log(ret);
})
//  注意：凡是需要得到一个函数内部 的异步操作的结果 
// setTimeout
// readFile
// writeFile
// ajax
// 这种情况必须通过 :回调函数