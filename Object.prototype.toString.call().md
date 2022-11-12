# Object.prototype.toString.call()


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

