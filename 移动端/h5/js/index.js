window.addEventListener('load',function(){
var app = document.querySelector('.app');
var ul = document.querySelector('ul')
var ul = ul.querySelector('li')
var input = document.querySelector('input')
ul.addEventListener('click', function () {
    app.style.display = 'none';
})
input.addEventListener('click', function () {
    input.value = '';
    input.style.color = '#000'
})
input.addEventListener('mouseout', function () {
    if (input.innerHTML == '') {
        input.value = '上京东领百亿补贴';
        input.style.color = '#ccc'
    }
})
var mianconter = document.querySelector('.mian-conter');
var focus = document.querySelector('.focus');
var ul = focus.querySelector('ul')
var focusWidth = focus.offsetWidth;
var num = 0;
    ul.addEventListener('click',function(){
        if(num == 6){
            ul.style.left = 0 ;
            num = 0;
        }
        num++;
        animate(ul,-414*num)
    })
})
