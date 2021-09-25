// var that;
class Tab {
    constructor(id) {
        //获取元素
        // that = this;
        this.mian = document.querySelector(id);
        this.add = this.mian.querySelector('.tabadd');
        //li的父元素
        this.ul = this.mian.querySelector('.fisrstnav ul:first-child');
        //section 的父元素 
        this.fsection = this.mian.querySelector('.tabscon');
        this.init();
    }
    init() {
        this.updataNode();
        // init 舒适化操作让相关的属相绑定事件
        this.add.onclick = this.addTab.bind(this.add, this);
        for (var i = 0; i < this.lis.length; i++) {
            this.lis[i].index = i;
            this.lis[i].onclick = this.toggleTab.bind(this.lis[i], this);
            this.remove[i].onclick = this.removeTab.bind(this.remove[i], this);
            this.spans[i].ondblclick = this.editTab;
            this.sections[i].ondblclick = this.editTab;
        }
    }
    //因为我们动态添加元素 需要从新获取对应的元素
    updataNode() {
        this.lis = this.mian.querySelectorAll('li');
        this.sections = this.mian.querySelectorAll('section');
        this.remove = this.mian.querySelectorAll('.iconfont');
        this.spans = this.mian.querySelectorAll('.fisrstnav li span:first-child');
    }
    //1.切换功能
    toggleTab(that) {
        // console.log(this.index);
        that.clearClass();
        this.className = 'liactive';
        that.sections[this.index].className = 'conactive';
    }
    //清除所有 li 和section 的类
    clearClass() {
        for (var i = 0; i < this.lis.length; i++) {
            this.lis[i].className = '';
            this.sections[i].className = '';
        }
    }
    //2.添加功能
    addTab(that) {
        that.clearClass();
        //(1)创建li元素 和section 元素
        var random = Math.random();
        var li = '<li class="liactive"><span>测试1</span><span class="iconfont">✘</span></li>';
        var section = ' <section class="conactive">新测试' + random + '</section>';
        //(2) 把这两个元素追加到对应的父元素里面
        that.ul.insertAdjacentHTML('beforeend', li);
        that.fsection.insertAdjacentHTML('beforeend', section);
        that.init();

    }
    //3.删除功能
    removeTab(that,e) {
        e.stopPropagation(); //阻止冒泡 防止触发li 的切换点击事件
        var index = this.parentNode.index;
        // console.log(index);
        //根据索引号删除对应的li 和section remove()方法可以直接删除指定元素
        that.lis[index].remove();
        that.sections[index].remove();
        that.init();
        //当我们删除了不是选中状态的这个小li 原来选中状态不变
        if (document.querySelector('.liactive')) return
        //当我们删除了选中状态的这个小li 的时候让他的前一个li 处于选中状态
        index--;
        //手动调用我们的点击事假  不需要鼠标触发
        that.lis[index] && that.lis[index].click();
    }
    //4.修改功能
    editTab() {
        var str = this.innerHTML;
        //s双击禁止选定文字
        window.getSelection ? window.getSelection().removeAllRanges() : document.selection.empty();
        // alert(0)
        this.innerHTML = '<input type="text" />';
        var input = this.children[0];
        input.value = str;
        input.select(); // 文本框里面的文字 处于选定状态
        //当我们离开文本框就把文本框里面的值给span
        input.onblur = function () {
            this.parentNode.innerHTML = this.value;
        }
        //按下回车也可以把文本框里面的值给span
        input.onkeyup = function (e) {
            if (e.keyCode === 13) {
                //手动调用表单失去焦点事件 不需要鼠标离开操作
                this.blur();
            }
        }
    }
}
new Tab('#tab');