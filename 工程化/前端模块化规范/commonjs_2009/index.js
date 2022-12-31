// 引入path模块 （path模块是nodejs 的模块）
const path =  require('path')

// 引入math模块
const math = require('./math') // ('./math.js')

// 测试nodejs模块功能
console.log('-->',path.basename('/foo/bar/baz/asdf/mijia.html')) // path.basename() 方法返回一个 path 的最后一部分


// 使用模块内部的方法
const res1 = math.sum(3, 5);
const res2 = math.sub(9, 3);

console.log('res1:',res1)
console.log('res2:',res2)


