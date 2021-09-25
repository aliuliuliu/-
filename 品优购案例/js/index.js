window.addEventListener('load', function () {
    //1.获取元素
    var arrow_l = document.querySelector('.arrow-l');
    var arrow_r = document.querySelector('.arrow-r');
    var focus = document.querySelector('.focus');
    var ul = focus.querySelector('ul');
    var ol = focus.querySelector('.circle');
    var focusWidth = focus.offsetWidth;
    // circle 控制小圆圈的播放
    var circle = 0;
    var num = 0;
    //flag 节流阀
    var flag = true;
    //鼠标经过就显示 两边按钮
    focus.addEventListener('mouseover', function () {
        arrow_l.style.display = 'block';
        arrow_r.style.display = 'block';
        clearInterval(timer);
        timer = null; //清除定时器变量
    })
    //鼠标离开就隐藏 两边按钮
    focus.addEventListener('mouseout', function () {
        arrow_l.style.display = 'none';
        arrow_r.style.display = 'none';
        timer = setInterval(function () {
            arrow_r.click()
        }, 2000)
    });
    //3.动态生成小圆圈  有几张图片 我就生成几个小圆圈
    // console.log(ul.children.length);
    for (var i = 0; i < ul.children.length; i++) {
        //创建一个小li
        var li = document.createElement('li');
        //记录当前小圆圈的索引号 通过自定义属性来做
        li.setAttribute('index', i)
        //把小li 插入到 ol 里面
        ol.appendChild(li);
        //4.小圆圈的排他思想 我们可以直接在生成小圆圈的同时 直接绑定点击事件
        li.addEventListener('click', function () {
            //干掉所有人  把所有的li 清除 current 类名
            for (var i = 0; i < ol.children.length; i++) {
                ol.children[i].className = '';
                // 留下我自己  当前的小li 设置 current 类名
                this.className = 'current';
                //5.点击小圆圈 移动图片  当然移动的是ul
                //ul 的移动距离 小圆圈的索引号 乘以 图片的宽度  注意 ：是负值
                //当我们点击了某个li 就拿到当前小li 的索引号
                var index = this.getAttribute('index');
                //当我们点击了某个小li 就要把这个li 的索引号 给 num
                num = index;
                //当我们点击了某个小li 就要把这个li 的索引号 给 num
                circle = index
                // console.log(index);
                // console.log(focusWidth);
                animate(ul, -index * focusWidth);

            }

        })

        //把ol里面的第一个li 设置类名为current
        ol.children[0].className = 'current'

    };
    //6.克隆第一张图片方法 （li）ul 最后面
    var first = ul.children[0].cloneNode(true);
    ul.appendChild(first);
    //7.点击右侧按钮  图片 滚动一张
    arrow_r.addEventListener('click', function () {
        //如果走到了最后复制的一张图片 此时我们的ul 要快速复原  left 改为0
        if (flag) {
            flag = false;
            if (num == ul.children.length - 1) {
                ul.style.left = 0;
                num = 0;
            }
            num++;
            animate(ul, num * -focusWidth, function () {
                flag = true;
            });
            // 8.点击右侧按钮 小圆圈跟随 一起变化 可以再 声明一个变量 控制 小圆圈的播放
            circle++;
            //如果 circle == 4 说明走到了最后我们克隆·的这张照片 我们就复原
            if (circle == ol.children.length) {
                circle = 0;
            }
            //先清除其他小圆圈 current类名
            circleChange();
        }
    });
    //左侧按钮
    arrow_l.addEventListener('click', function () {
        //如果走到了最后复制的一张图片 此时我们的ul 要快速复原  left 改为0
        if (flag) {
            flag = false;
            if (num <= 0) {
                num = ul.children.length - 1;
                ul.style.left = num * -focusWidth;
            }
            num--;
            animate(ul, num * -focusWidth, function () {
                flag = true;
            });
            // 8.点击右侧按钮 小圆圈跟随 一起变化 可以再 声明一个变量 控制 小圆圈的播放
            //如果 circle == 4 说明走到了最后我们克隆·的这张照片 我们就复原
            if (circle <= 0) {
                circle = ul.children.length - 1;
            }
            circle--;
            circleChange();
            //先清除其他小圆圈 current类名
        }
    });

    function circleChange() {
        for (var i = 0; i < ol.children.length; i++) {
            ol.children[i].className = '';
        }
        //留下当前小圆圈 current类名
        ol.children[circle].className = 'current';
    }
    var timer = setInterval(function () {
        arrow_r.click()
    }, 2000)
});
$(function () {
    var toolTop = $(".recom").offset().top;
    toggleTool();

    function toggleTool() {
        if ($(document).scrollTop() >= toolTop) {
            $(".fixdetool").fadeIn();
        } else {
            $(".fixdetool").fadeOut();
        }
    }
    var flag = true;
    $(window).scroll(function () {
        //当我们点击了li 此时不需要执行 页面滚动事件里面li 的背景选择添加current
        // 节流阀  互斥锁       
        toggleTool();
        //3.页面滚动到某个内容区域 左侧电梯导航小li相应添加和删除current类名
        if (flag) {
            $(".floor .w ").each(function (i, ele) {
                if ($(document).scrollTop() >= $(ele).offset().top) {
                    $(".fixdetool li").eq(i).addClass("current").siblings().removeClass();
                }

            })
        }
    })
    //2.点击电梯导航页面可以滚动到相应内容区域
    $(".fixdetool li").click(function () {
        flag = false;
        // console.log($(this).index());
        //当我们每次点击小li 就需要计算出页面要去往的位置
        //选出对象索引号的内容区域的盒子 计算它的。offset（）.top（）
        var current = $(".floor .w").eq($(this).index()).offset().top
        //页面动画滚动效果
        $("body ,html").stop().animate({
            scrollTop: current
        }, function () {
            flag = true;
        })
        // 点之后 让当前小li 添加current 类名，姐妹移除
        $(this).addClass("current").siblings().removeClass()
    })
})