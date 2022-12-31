const path = require('path')


// 1.多个入口文件 --> 单文件出口
// 数组解决： entry: ['./src/a.js','./src/b.js']

// 2.多个入口文件 --> 多文件出口
// 对象解决： entry: {
//      a: './src/a.js',
//      b: './src/b.js'       
//  }

module.exports = {
    // entry: './src/scripts.js',
    // entry: ['./src/a.js','./src/b.js'],
    entry: {
        a1: './src/a.js',
        b1: './src/b.js'
    },

    output: {
        // path: path.resolve(__dirname,'public'),
        path: path.resolve(__dirname,'dist'),
        // filename: 'mijia.js',
        // filename: '[name].js',
        // filename: 'main.js'

        // filename: 'ab.js'

    }
};