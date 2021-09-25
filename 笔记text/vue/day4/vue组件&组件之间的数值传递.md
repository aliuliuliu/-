### 

**使用vue组件的三个步骤**

- 步骤1：使用import语法导入需要的组件

  - ```shell
    import Left from '@/components/Left.vue'
    ```

- 步骤2：使用components节点注册组件

- 步骤3：以标签形式 使用刚才注册的组件

**注册去全局组件**

在vue 项目中 main.js 入口文件中 通过 Vue.component()方法 可以注册全局组件 

### 2.组件的props

props 是组件的自定义属性 在封装通用组件的时候 合理地使用 props 可以极大的提高组件的复用性

```shell
<script>
export default {
    // props 是自定义属性 允许使用者 通过自定义属性 为当前组件指定初始值
    // 自定义属性的名字是封装者 自定义的 只要名称合法就行
  props: ['init'],
  data() {
    return {
      count: 0,
    };
  },
};
</script>
```

- 2.1props是只读的

- 2.2props的default默认值

- 2.3props 的type值类型

- 2.4props的required 必填项

- ```shell
  <script>
  export default {
    // props 是自定义属性 允许使用者 通过自定义属性 为当前组件指定初始值
    // 自定义属性的名字是封装者 自定义的 只要名称合法就行
    // props 中的数据 可以直接在模板结构中 被使用
    // 注意 props 是只读的 不要直接修改 props的值 否则终端会报错
  //   props:['init']
    props: {
      init:{
          //如果外界使用 Count 组件的时候 没有传递init 属性 这默认值生效
          default:0,
          //init 的值类型必须是  Number 数字
          type:Number,
          //必填项
          required:true
      }
    },
    data() {
      return {
        count: this.init,
      };
    },
  };
  </script>
  ```

### 3.样式冲突问题

当使用第三方组件库的时候 如果有修改第三方组件默认的样式的需求 需要用到 /deep/

### 4.组件的声明周期&生命周期函数

生命周期（Life Cycle）是指一个组件从创建->运行->销毁的整个过程 强调的是一个时间段

生命周期函数 是由vue框架 提供的内置函数 会伴随着组件的生命周期 自动按次序执行

- 组件创建阶段
  - new Vue（）->beforeCreate-> created->beforeMount ->mounted
- 组件运行阶段
  - beforeUpdate->updated
- 组件销毁阶段
  - beforeDestroy->destroyed

![image-20210922100739710](C:\Users\阿六\AppData\Roaming\Typora\typora-user-images\image-20210922100739710.png)

### 5.组件之间的关系

在项目开发中 组件之间的最常见的关心 分为如下两种：

- 父子关系
- 兄弟关系

**5.1父组件向子组件共享数据**

父组件向子组件共享数据需要使用自定义属性 

![image-20210922110900470](C:\Users\阿六\AppData\Roaming\Typora\typora-user-images\image-20210922110900470.png)

![image-20210922110917868](C:\Users\阿六\AppData\Roaming\Typora\typora-user-images\image-20210922110917868.png)

**5.2子组件向父组件共享数据**

子组件 向父组件 共享数据使用自定义事件 	

<img src="C:\Users\阿六\AppData\Roaming\Typora\typora-user-images\image-20210922114606541.png" alt="image-20210922114606541" style="zoom:200%;" />

![image-20210922114636041](C:\Users\阿六\AppData\Roaming\Typora\typora-user-images\image-20210922114636041.png)

![image-20210922114651568](C:\Users\阿六\AppData\Roaming\Typora\typora-user-images\image-20210922114651568.png)

![image-20210923094957794](C:\Users\阿六\AppData\Roaming\Typora\typora-user-images\image-20210923094957794.png)

**5.3兄弟组件的数据共享**

在vue2.x 中 兄弟组件之间 数据共享的方案是 EventBus

- 1.创建eventBus.js 模块并向外 共享一个Vue 的实例对象
- 2.在数据发送方 调用 bus.$emit('事件名称'，要发送的数据)方法触发自定义事件
- 3.在数据接收方 调用 bus.$on ('事件名称',事件处理函数) 方法注册一个自定义事件

![image-20210922120521152](C:\Users\阿六\AppData\Roaming\Typora\typora-user-images\image-20210922120521152.png)

