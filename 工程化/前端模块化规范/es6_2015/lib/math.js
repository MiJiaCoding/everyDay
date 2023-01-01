"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sqr = sqr;
exports.sub = sub;
exports.sum = sum;
/* es6两种导出方式
    1.单独导出某个模块
    2.导出一个整体的默认模块
*/
function sum(a, b) {
  return a + b;
}
function sub(a, b) {
  return a - b;
}
function sqr(a) {
  return Math.pow(a, 3);
}