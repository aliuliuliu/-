const path = require('path')

//dist 自动更新打包 clean-webpack-plugin
const {
    CleanWebpackPlugin
} = require('clean-webpack-plugin');

//1.导入 html-webpack-plugin 这个插件 得到构造函数
const HtmlPlugin = require('html-webpack-plugin')

// 2.new 构造函数 创建插件的实例对象
const htmlPlugin = new HtmlPlugin({
    //指定要赋值哪个页面
    template: './src/index.html',
    //指定复制出来的 文件名和存放路径
    filename: './index.html'
})

//使用Node.js 中的导出语法 向外导出一个 webpack 的配置对象
module.exports = {
    //代表 webpack 运行的模式 可选值有两个 development 和 production
    // 结论 开发的时候一定要用 development 因为追求的是打包的速度 而不是体积 
    // 反过来 发布上线的时候 一定要用 production 因为上线追求的是体积小 而不是打包速度快
    mode: 'development',

    // 在开发调试阶段 devtool的值设为 eval-source-map
    // devtool:'eval-source-map',
    //在实际发布的时候 建议大家把devtool的值设为 nosources-source-map' 或直接关闭 SourceMap
    devtool:'nosources-source-map',

    //entry :'指定要处理哪个文件'
    entry: path.join(__dirname, 'src/index1.js'),

    //指定生成的文件要放在哪里
    output: {
        //存放的目录
        path: path.join(__dirname, 'dist'),
        //生成的文件名
        filename: 'js/bundle.js'
    },

    //插件的数组 将来webpack 在运行时 会加载 并调用这些插件
    plugins: [htmlPlugin ,new CleanWebpackPlugin()],

    devServer: {
        open: true,
        //在http协议中 如果端口号是80 则可以省略
        port: 80,
        // 指定运行的主机地址
        host: '127.0.0.1'
    },

    module: {
        rules: [
            //定义了 不同模块对应的 loader
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            //处理.less 文件 loader
            {
                test: /\.less$/,
                use: ['style-loader', 'css-loader', 'less-loader']
            },
            //处理 图片 文件的loader
            //如果需要调用的 loader 只有一个 则只传递一个字符串也行 如果有多个loader 则必须指定数组
            //在配置 url-loader 的时候  多个参数之间 使用&符号进行分隔
            {
                test: /\.png|jpg|gif$/,
                use: 'url-loader?limit=470&outputPath=images'
            },
            //使用 babel-loader 处理高级的 js 语法  程序员 只需要把自己的代码进行转换即可 一定要排除 node_modules 目录中的js 文件 
            // 因为 第三方 包中的 js 兼容性 不需要程序员关心
            {
                test: /\.js$/,
                use: 'babel-loader',
                exclude: /node_modules/
            }
        ]
    },

    resolve:{
        //告诉webpack 程序员 写的代码中 @符号 表示 src 这一层目录
        alias:{
            '@':path.join(__dirname,'/src/')
        }
    }

}