//1.使用Es6 导入语法 导入jQuery

import $, { Callbacks } from 'jquery'

//导入样式（在 webpack 中一切皆模块 都可以通过ES6 导入语法进行导入和使用）
import './css/index.css'
import './css/index.less'

//1.导入图片 得到图片文件
//2.给 img 标签的src 动态赋值
import logo from './images/111.png'
$('.box').attr('src',logo)
//2.定义jQuery的入口函数
$(function () {
    //3.实现基偶行变色
    //奇数行为红色
    $('li:odd').css('background-color', 'skyblue')
    $('li:even').css('background-color', 'pink')
})

//定义装饰器函数
function info(target){
    target.info = 'Person info'
}


//定义一个普通的类
@info
class Person{}

console.log(Person.info);