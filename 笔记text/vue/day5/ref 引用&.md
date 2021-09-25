前奏：

jQuery 牛逼 简化了程序员操作DOM 的过程

vue优势：MVVM 在vue中 程序员不需要操作DOM，程序员只需要把数据维护好即可！（数据驱动视图 ）

结论：在vue项目中 强烈不建议大家安装使用jQuery！！！

假设 在vue中 需要操作DOM了 需要拿到页面某个DOM元素的引用 此时怎么办?

#### 1.什么是ref 引用

ref 用来辅助开发者 不依赖于jQuery 的情况下 获取DOM 元素或组件的引用

每个 vue的组件实例上都包含一个$refs 对象 里面存储着对应的DOM 元素或组件的引用 默认情况下 组件的

$refs指向一个空对象

ref 引用DOM实例：

![image-20210922140224318](C:\Users\阿六\AppData\Roaming\Typora\typora-user-images\image-20210922140224318.png)

ref 引用 页面上的组件实例：

![image-20210922145420718](C:\Users\阿六\AppData\Roaming\Typora\typora-user-images\image-20210922145420718.png)

![image-20210922145444764](C:\Users\阿六\AppData\Roaming\Typora\typora-user-images\image-20210922145444764.png)

#### 1.1this.$nextTick(cb)方法

组件的$nextTick(cb)方法 会把cb回调推迟到下一个D在·OM 更新周期之后执行 通俗的理解是：等组件的DOM更新完成之后 再执行

cb 回调函数 从而保证cb 回调函数 可以操作到最新的DOM元素