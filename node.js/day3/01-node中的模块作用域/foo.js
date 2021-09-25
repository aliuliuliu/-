var foo = 'bar'

function add(x, y) {
    return x + y
}


//只能得到我想要给你的成员
// 这样做的目的是为了解决变量命名冲突的问题
exports.add = add


//exports 是一个对象
// 我们可以通过多次 为这个对象 添加成员实现得到多个成员
exports.str = 'hello'

// 如果一个模块需要直接 导出某个成员而非挂载
//那这个时候就必须使用下面这种方式
module.exports = add

//  现在我有一个需求
// 我希望加载得到直接就是一个
// 方法
// 字符串
// 数字 
// 数组
module.exports = {
    add: function (x, y) {
        return x + y
    },
    str: 'helllo'
}