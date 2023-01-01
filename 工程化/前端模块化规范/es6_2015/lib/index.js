"use strict";

var _math = require("./math");
var _user = _interopRequireDefault(require("./user"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
/* es6导入模块
    1.整体模块导入
    2.单独功能导入
*/

// 需要用Babel才能支持es6npx

var res1 = (0, _math.sum)(3, 5);
var res2 = (0, _math.sub)(9, 3);
console.log('res1:', res1);
console.log('res2:', res2);
console.log('sqr:', (0, _math.sqr)(3));

// 调用user中的say方法
_user["default"].say();