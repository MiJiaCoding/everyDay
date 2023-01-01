/* es6两种导出方式
    1.单独导出某个模块
    2.导出一个整体的默认模块
*/
export function sum(a, b) {
    return a + b;
}

export function sub(a, b) {
    return a - b;
}

export function sqr(a){
    return Math.pow(a,3)
}