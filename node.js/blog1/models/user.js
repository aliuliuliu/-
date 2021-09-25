var mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/test');

var Schema = mongoose.Schema

var userSchema = new Schema({

  email: {
    type: String,
    required: true,
  },
  nickname: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true
  },
  created_time: {
    type: Date,
    // 注意这里不要写 Date.now() 因为会即刻调用
    //这里直接给了一个方法 ：Date.now
    default: Date.now
  },
  last_modified_time: {
    type: Date,
    default: Date.now
  },
  avatar: {
    type: String,
    default: '/public/img/avatar-default.png'
  },
  dion: {
    type: String,
    default: ''
  },
  gender: {
    type: Number,
    enum: [-1, 0, 1],
    default: -1
  },
  birthday: {
    type: Date,
  },
  status: {
    type: Number,
    // 0 没有权限
    // 1 不可以可以评论
    // 2 不可以登录使用
    enum: [0, 1, 2],
    default: 0
  }
})

module.exports = mongoose.model('User', userSchema)