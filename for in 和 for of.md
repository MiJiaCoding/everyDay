# for in 和 for of

##  问：js中for of能否遍历对象？

答：不能

for of 循环首先会向被访问对象请求一个迭代器对象，然后通过调用迭代器对象的next() 方法来遍历所有返回值

for of能遍历的有set map array string因为这些类型有迭代器对象
但是object没有迭代器对象所以无法遍历对象
但是可以用for in来遍历



```javascript
var a= {
	b:1
}
for(let i in a){
	console.log(a[i]);
}

```

注意 :for in 可以用与遍历对象。for of不可以遍历对象 （手写题目的时候别写错了）







## 介绍


for …of是[ES6](https://so.csdn.net/so/search?q=ES6&spm=1001.2101.3001.7020)新增的遍历方式，用于遍历数组和对象的。
for…of是允许[遍历](https://so.csdn.net/so/search?q=%E9%81%8D%E5%8E%86&spm=1001.2101.3001.7020)一个含有Iterator接口的数据结构（对象、数组等）并且返回各项值。普通对象是无法遍历的。

### 1、需要遍历的对象是类[数组](https://so.csdn.net/so/search?q=%E6%95%B0%E7%BB%84&spm=1001.2101.3001.7020)对象，将类数组转为数组，再遍历

```javascript
const obj = {0: 1, 1: 2, 2: 3, 3: 4, length: 4};
const arr = Array.from(obj);
for (let value of arr){
    console.log(value);// 1 2 3 4
}
```

### 2、需要遍历的对象不是类数组，给对象添加一个Symbol.iterator属性，并指向迭代器

iterator遍历的过程：

1. 创建一个指针对象，指向当前数据结构的起始位置

2. 第一次调用指针对象的next方法，可以将指针指向数据结构的第一个成员

3. 第二次调用针对象的next方法，指针就指向数据结构的第二个成员

4. 不断调用指针对象的next方法，直到它指向数据结构的结束位置

每一次调用next方法，都会返回数据结构的当前成员的信息，返回的是一个包含value和done两个属性的对象。

value:当前成员的值；

done:是一个布尔值，表示遍历是否结束

```javascript
const person = {
    name: "张三",
    age: 18,
    height: 180,
    weight: 120,
    sex: "男"
}
person[Symbol.iterator] = function () {
    //1、拿到对象中的所有key值
    let key = Object.keys(this);//谁调用这个函数，this执行谁
    console.log(key);//[ 'name', 'age', 'height', 'weight', 'sex' ]
    //2、定义数组的下标值
    let index=0;
    return {
        next() {
            if(index<key.length){
                return {value:person[key[index++]], done:false}
            }else {
                return {value:undefined, done:true}
            }
        }
    }
}
for (let value of person){
    console.log(value);
}
```

![1668605483019](C:\Users\mijia\AppData\Roaming\Typora\typora-user-images\1668605483019.png)