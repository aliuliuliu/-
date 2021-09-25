var mongoose = require('mongoose')

var Schema = mongoose.Schema

// 链接数据库
// 指定链接的数据库不需要存在 当你插入第一条数据之后 就会自动被创建出来

mongoose.connect('mongodb://localhost:27017/test');

// 设计几何结构(表机构)
//字段名称就是 表结构中的属性名称
// 约束的目的就是为了保证数据的完整性 不要有脏数据
const userSchema = new Schema({
    username: {
        type: String,
        required: true //必须有
    },
    password: {
        type: String,
        required: true //必须有
    },
    email: {
        type: String
    }
});

// 3. 将文档结构发布为模型
//    mongoose.model 方法就是用来讲一个架构发布为 model
//  第一个参数 传入一个大词名词单数字符串用来表示你的数据库名称
const User = mongoose.model('User', userSchema);

//4. 当我们有了模型构造函数之后 就可以 使用这个构造函数对 User几个中的数据为所欲为了

// 增加数据
// ············································
// var admin = new User({
//     username:'zs',
//     password:'123456',
//     email:'admin@admin.com'
// })

// admin.save(function(err,ret){
//     if(err){
//         console.log('保存失败');
//     }else{
//         console.log('保存成功了');
//         console.log(ret);
//     }
// })

// 查询数据
//  ·······················································
// 查询所有、
// User.find( function (err, ret) {
//     if (err) {
//         console.log('查询失败');
//     } else {
//         console.log(ret);
//     }
// })
// // 按条件查询所有、、
// User.find({
//     username: 'zs'
// }, function (err, ret) {
//     if (err) {
//         console.log('查询失败');
//     } else {
//         console.log(ret);
//     }
// })
// // 查询单个
// User.findOne({
//     username: 'zs'
// }, function (err, ret) {
//     if (err) {
//         console.log('查询失败');
//     } else {
//         console.log(ret);
//     }
// })

// 删除数据 
// ·········································

// User.remove({
//     username: 'zs'
// }, function (err, ret) {
//     if (err) {
//         console.log('删除失败');
//     } else {
//         console.log('删除成功');
//         console.log(ret);
//     }
// })

// 更新数据
// ··················································

User.findByIdAndUpdate('6131e043401e40fcabb6aaf0', {
    password: 123
}, function (err, ret) {
    if (err) {
        console.log('更新失败');
    } else {
        console.log(ret);
        console.log('更新成功');

    }
})