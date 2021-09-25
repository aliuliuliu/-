// 用户登录注册页面
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
mongoose.connect('mongodb://localhost/test');

var topicSchema = new Schema({
  topic: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  },
  nickname: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  }
})

module.exports = mongoose.model('Topic', topicSchema);