/* es6导入模块
    1.整体模块导入
    2.单独功能导入
*/


// 需要用Babel才能支持es6npx

import { sum, sub ,sqr } from './math';
import user from './user'


const res1 = sum(3, 5);
const res2 = sub(9, 3);

console.log('res1:',res1)
console.log('res2:',res2)
console.log('sqr:',sqr(3))

// 调用user中的say方法
user.say()