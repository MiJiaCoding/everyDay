// 添加requirejs配置
require.config({
    // 当前模块化解析的基本路径
    baseUrl: 'js',
    // 模块的映射
    paths: {
        jquery: '../lib/jquery.min' // 这里不能加.js 
    }
})

// 需要调用入口文件
// 使用requirejs的方式
require(['./index']);