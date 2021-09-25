// 
//   student.js
//   数据操作模块
//   职责 操作文件中的数据  只处理数据  不关心业务、

var fs = require('fs')

var dbPath = './db.json'



// 获取所有学生列表
// callback 中的参数
//         第一个参数是err
//         成功是 null 
//         错误是错误对象
//         第二个参数是 结果
//         成功是数组
//         错误是 undefined
//return  []

exports.find = function (callback) {
    fs.readFile(dbPath, 'utf8', function (err, data) {
        if (err) {
            return callback(err)
        }
        callback(null, JSON.parse(data).students)
    })

}
// 根据id 获取学生信息对象
exports.findById = function (id, callback) {
    fs.readFile(dbPath, 'utf8', function (err, data) {
        if (err) {
            return callback(err)
        }
        var students = JSON.parse(data).students
        var ret = students.find(function (item) {
            return item.id === parseInt(id)
        })
        callback(null, ret)
    })
}

// 添加保存学生
exports.save = function (student, callback) {
    fs.readFile(dbPath, 'utf8', function (err, data) {
        if (err) {
            return callback(err)
        }
        var students = JSON.parse(data).students

        //处理id 唯一不重复
        student.id = students[students.length - 1].id + 1
        students.push(student)
        var fileData = JSON.stringify({
      node1      students: students
        })
        fs.writeFile(dbPath, fileData, function (err) {
            if (err) {
                //错误就是把错误对象传递给他
                return callback(err)
            }
            //成功就没错 所以错误对象是null
            callback(null)
        })
    })
}


// 更新 学生

exports.updateById = function (student, callback) {

    fs.readFile(dbPath, 'utf8', function (err, data) {
        if (err) {
            return callback(err)
        }
        var students = JSON.parse(data).students

        student.id = parseInt(student.id)
        //你要修改谁 就把谁找出来
        //es6 中的一个数组 方法 : find
        //需要接收一个函数作为参数
        //但某个遍历项符合  item.id === student.id 条件 find 会终止遍历 同时返回遍历项
        var stu = students.find(function (item) {
            return item.id === student.id
        })
        //遍历 拷贝对象
        for (var key in student) {
            stu[key] = student[key]
        }
        var fileData = JSON.stringify({
            students: students
        })
        fs.writeFile(dbPath, fileData, function (err) {
            if (err) {
                //错误就是把错误对象传递给他
                return callback(err)
            }
            //成功就没错 所以错误对象是null
            callback(null)
        })
    })

}



// 删除学生

exports.deleteById = function (id, callback) {
    fs.readFile(dbPath, 'utf8', function (err, data) {
        if (err) {
            return callback(err)
        }
        var students = JSON.parse(data).students

        // findIndex 方法专门用来 根据条件查找元素下标
        var deleteId = students.findIndex(function (item) {
            return item.id === parseInt(id)
        })
        // 根据下标从数组中删除对应的学生对象
        students.splice(deleteId,1)

        // 重写
        var fileData = JSON.stringify({
            students: students
        })
        fs.writeFile(dbPath, fileData, function (err) {
            if (err) {
                //错误就是把错误对象传递给他
                return callback(err)
            }
            //成功就没错 所以错误对象是null
            callback(null)
        })
    })
}