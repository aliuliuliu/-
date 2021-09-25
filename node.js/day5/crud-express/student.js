var mongoose = require('mongoose')

var Schema = mongoose.Schema

//链接数据库

mongoose.connect('mongodb://localhost:27017/itcast');

var studentSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    gender: {
        type: Number,
        enum: [0, 1],
        default: 0
    },
    age: {
        type: Number
    },
    hobbies: {
        type: String,
    }
})

module.exports = mongoose.model('Student', studentSchema)