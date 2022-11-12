# Object.prototype.toString.call()

typeof 校验不出来object

![img](https://cdn.nlark.com/yuque/0/2022/png/33579416/1668238122893-a9675466-f3cb-46aa-a642-05387b85ab64.png)




  **一、Object.prototype.toString() 的调用**

对于 `Object.prototype.toString()` 方法，会返回一个形如 `"[object XXX]"` 的字符串。

如果对象的 `toString()` 方法未被重写，就会返回如上面形式的字符串。

```javascript
({}).toString();     // => "[object Object]"
Math.toString();     // => "[object Math]"
```

如果对象的 `toString()` 方法未被重写，就会返回如上面形式的字符串。

```js
({}).toString();     // => "[object Object]"
Math.toString();     // => "[object Math]"
```

但是，大多数对象，`toString()` 方法都是重写了的，这时，需要用 `call()` 或 `Reflect.apply()` 等方法来调用。

```js
var x = {
  toString() {
    return "X";
  },
};
x.toString();                                     // => "X"
Object.prototype.toString.call(x);                // => "[object Object]"
Reflect.apply(Object.prototype.toString, x, []);  // => "[object Object]"
```
**call方法的作用**

1. call方法可以调用函数
2. call方法可以改变这个函数的this指向



### 二、`Object.prototype.toString()` 的原理

对于 `Object.prototype.toString.call(arg)`，若参数为 `null` 或 `undefined`，直接返回结果。

```js
Object.prototype.toString.call(null);       // => "[object Null]"
Object.prototype.toString.call(undefined);  // => "[object Undefined]"
```

若参数不为 `null` 或 `undefined`，**则将参数转为对象，再作判断**。对于原始类型，转为对象的方法即**装箱**，此处不赘述。

转为对象后，取得该对象的 `[Symbol.toStringTag]` 属性值（可能会遍历原型链）作为 `tag`，如无该属性，或该属性值不为字符串类型，则依下表取得 `tag`, 然后返回 `"[object " + tag + "]"` 形式的字符串。

```js
// Boolean 类型，tag 为 "Boolean"
Object.prototype.toString.call(true);            // => "[object Boolean]"

// Number 类型，tag 为 "Number"
Object.prototype.toString.call(1);               // => "[object Number]"

// String 类型，tag 为 "String"
Object.prototype.toString.call("");              // => "[object String]"

// Array 类型，tag 为 "String"
Object.prototype.toString.call([]);              // => "[object Array]"

// Arguments 类型，tag 为 "Arguments"
Object.prototype.toString.call((function() {
  return arguments;
})());                                           // => "[object Arguments]"

// Function 类型， tag 为 "Function"
Object.prototype.toString.call(function(){});    // => "[object Function]"

// Error 类型（包含子类型），tag 为 "Error"
Object.prototype.toString.call(new Error());     // => "[object Error]"

// RegExp 类型，tag 为 "RegExp"
Object.prototype.toString.call(/\d+/);           // => "[object RegExp]"

// Date 类型，tag 为 "Date"
Object.prototype.toString.call(new Date());      // => "[object Date]"

// 其他类型，tag 为 "Object"
Object.prototype.toString.call(new class {});    // => "[object Object]"
```





















参考资料：

https://zhuanlan.zhihu.com/p/118793721

