<template>
    <div class="test-container">
        <h3 id="myh3"> Test.vue 组件   {{ books.length }} 本图书 </h3>
        <p id="pppp"> message 的值是 {{ message }}</p>
        <button @click="message +='~'"> 修改message的值</button>
    </div>
</template>

<script>
export default {
    props:['info'],
    data(){
        return {
            message:'hello vue',
            //定义books数组 存储的是所有图书的列表数据 默认为空数组
            books:[]
        }
    },
    methods:{
        show(){
            console.log('调用了组件的show方法');
        },
        //使用ajax 请求图书列表的数据
        initBookList(){
        const xhr = new XMLHttpRequest()
        xhr.addEventListener('load',() => {
            const result =JSON.parse(xhr.responseText)
            console.log(result);
            this.books = result.data
        })
        xhr.open('GET','http://www.liulongbin.top:3006/api/getbooks')
        xhr.send()
        }
    },
    //创建阶段的第一个生命周期函数
    beforeCreate(){
        // console.log(this.info);
        // console.log(this.message);
        // this.show()
    },
    
    created(){
        // created 生命周期函数 非常常用
    // 经常在它里面调用 methods中的方法 来请求服务器的数据
    // 并且 把请求 到的数据 转存到data中 供 template模板 渲染的时候使用！
        this.initBookList()
    },
    beforeMount() {
        console.log(' beforeMount');
        const dom = document.querySelector('#myh3')
        console.log(dom);
    },
    //如果要操作当前 组件的dom 只少要在mounted 执行
    mounted(){
        const dom = document.querySelector('#myh3')
        console.log(dom);
    },
    beforeUpdate(){
        // console.log('beforeUpdate');
        // console.log(this.message);
        // const pppp= document.querySelector('#pppp')
        // console.log(pppp.innerHTML);
    },
    //当数据变化之后 为了能够操作到最新的DOM结构 必须把代码写到 Updated 生命周期函数中
    updated(){
        console.log('Update');
        console.log(this.message);
        const pppp= document.querySelector('#pppp')
        console.log(pppp.innerHTML);
    },
    beforeDestroy(){
        // console.log('beforeDestroy');
        // console.log(this.message);
    },
    destroyed(){
        console.log('Destroy');
        console.log(this.message);
    }

}
</script>

<style lang="less" scoped>
.test-container{
    background-color: pink;
    height: 200px;
}

</style>