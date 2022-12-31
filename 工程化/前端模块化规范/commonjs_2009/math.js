// 定义一个commonjs规范的模块（实际上就是nodejs实现）
function sum(a, b) {
    return a + b;
}

function sub(a, b) {
    return a - b;
}

// commonjs规范语法到处模块
module.exports = {
    sum: sum,
    sub // es6的简写
}