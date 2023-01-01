"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var user1 = {
  name: '米迦',
  age: 99,
  say: function say() {
    console.log('My name is ' + this.name);
  }
};

// es6 第二种导出 默认导出
var _default = user1;
exports["default"] = _default;