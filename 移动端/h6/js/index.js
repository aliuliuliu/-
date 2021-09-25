window.addEventListener('load', function () {
    //1.获取元素
    var focus = document.querySelector('.focus');
    var ul = focus.children[0];
    var ol = focus.children[1];
    //获得focus 的宽度
    var w = focus.offsetWidth;
    //2.利用定时器自动轮播图图片
    var index = 0;
    var timer = setInterval(function () {
        index++;
        var translatex = -index * w;
        //添加过渡效果
        ul.style.transition = 'all .3s';
        ul.style.transform = 'translateX(' + translatex + 'px)'
    }, 2000);
    // 等着我们过渡完成之后 再去判断 监听过渡完成的事件 transitionend
    ul.addEventListener('transitionend', function () {
        if (index >= 3) {
            index = 0;
            ul.style.transition = 'none';
            var translatex = -index * w;
            ul.style.transform = 'translateX(' + translatex + 'px)';
        } else if (index < 0) {
            index = 2;
            ul.style.transition = 'none';
            var translatex = -index * w;
            ul.style.transform = 'translateX(' + translatex + 'px)';
        }
        //3.小圆点 跟随变化
        // 把ol里面的li 带有current 类名的选出来去掉类名 renmove
        ol.querySelector('.current').classList.remove('current');
        ol.children[index].classList.add('current')
    });
    //4.手指滑轮播图
    //触摸元素 touchstart  获取手指初始坐标
    //移动手指 touchmove  计算手指的滑动距离 并且移动盒子
    var startX = 0;
    var moveX = 0; //后面我们会使用这个移动距离所以要定义一个全局变量
    var flag = false;
    ul.addEventListener('touchstart', function (e) {
        startX = e.targetTouches[0].pageX;
        clearInterval(timer);
    })
    ul.addEventListener('touchmove', function (e) {
        //计算移动距离
        moveX = e.targetTouches[0].pageX - startX;
        //移动盒子：盒子原来的位置 + 手指移动的距离
        var translatex = -index * w + moveX;
        //手指 拖动的h时候 不需要动画效果 所以要取消过渡效果
        ul.style.transition = 'none';
        ul.style.transform = 'translateX(' + translatex + 'px)'
        flag = true;
    })
    //手指离开 根据移动距离去判断是回弹还是播放上一张 下一张
    ul.addEventListener('touchend', function (e) {
        if (flag){
             //(1) 如果移动距离大于50像素我们就播放上一张或者下一张
        if (Math.abs(moveX) > 50) {
            //如果是右滑就是 播放上一张  moveX 是正直
            if (moveX > 0) {
                index--;
            } else {
                //如果是左滑就是 播放下一张  moveX 是负直
                index++;
            }
            var translatex = -index * w;
            ul.style.transition = 'all .3s';
            ul.style.transform = 'translateX(' + translatex + 'px)'
        } else {
            //(1) 如果移动距离小于50像素我们就回弹会原来的位置
            var translatex = -index * w;
            ul.style.transition = 'all .3s';
            ul.style.transform = 'translateX(' + translatex + 'px)'
        }
        clearInterval(timer);
            timer = setInterval(function () {
            index++;
            var translatex = -index * w;
            //添加过渡效果
            ul.style.transition = 'all .3s';
            ul.style.transform = 'translateX(' + translatex + 'px)'
        }, 2000);
        }
    })
    //返回顶部模块制作
    var goBack = document.querySelector('.goBack')
    var nav = document.querySelector('nav')
    window.addEventListener('scroll',function(){
        if (window.pageYOffset >= nav.offsetTop){
            goBack.style.display = 'block';
        }else {
            goBack.style.display = 'none';
        }
    })
    goBack.addEventListener('click',function(){
        window.scroll(0,0)
    })
})