# 前端为什么操作 DOM 是最耗性能的呢？



**DOM修改导致的页面重绘、重新排版**！重新排版是用户阻塞的操作，同时，如果频繁重排，CPU使用率也会猛涨！

JavaScript中 js 引擎和渲染引擎（[浏览器内核](https://www.zhihu.com/search?q=%E6%B5%8F%E8%A7%88%E5%99%A8%E5%86%85%E6%A0%B8&search_source=Entity&hybrid_search_source=Entity&hybrid_search_extra=%7B%22sourceType%22%3A%22answer%22%2C%22sourceId%22%3A2276637271%7D)）是独立实现的。使用 js 去操作 DOM 时，本质上是 JS 引擎和渲染引擎之间进行了“跨界交流”。每操作一次 DOM，都要跨界一次。跨界的次数一多，就会产生比较明显的性能问题。



**DOM操作会导致一系列的重绘（repaint）、重新排版（reflow）操作。为了确保执行结果的准确性，所有的修改操作是按顺序同步执行的。大部分浏览器都不会在JavaScript的执行过程中更新DOM。相应的，这些浏览器将对对 DOM的操作放进一个队列，并在JavaScript脚本执行完毕以后按顺序一次执行完毕。也就是说，在JavaScript执行的过程，直到发生重新排版，用户一直被阻塞。**

**一般的浏览器中（不含IE），repaint的速度远快于reflow，所以避免reflow更重要**。



**渲染引擎工作介绍：**

解析HTML代码，生产DOM tree

解析CSS样式，结合[DOM tree](https://www.zhihu.com/search?q=DOM%20tree&search_source=Entity&hybrid_search_source=Entity&hybrid_search_extra=%7B%22sourceType%22%3A%22answer%22%2C%22sourceId%22%3A2276637271%7D)生产Render tree（display: none;的结点不会存在Render tree上，最后不会被paint）

计算Render tree各个节点的布局信息，比如box的位置、尺寸、颜色、外形等

根据计算后的布局信息，调用浏览器的UI引擎进行渲染。

而操作dom会产生几种动作，重绘和重排极大的影响渲染的效率。



举例：向document对象中添加DOM节点

```js
for(var i = 0;i < items.length;i++){
 var item=document.createElement("li");
 item.appendChild(document.createTextNode("Option"+i);
 list.appendChild(item);
}
```



这段代码效率很低，因为每次循环中都会修改当前DOM结构，那么为了提高性能，我们需要讲这个次数降到最低，最好的办法是建立一个文档碎片（documentfragment），作为那些已创建元素元素的临时容器，最后一次将容器的内容直接添加到父节点中：

```javascript
var fragment = document.createDocumentFragment();
 for(vari=0;i < items.length;i++){
 var item=document.createElement("li");
 item.appendChild(document.createTextNode("Option"+i);
 fragment.appendChild(item);
}
list.appendChild(fragment);
```

**针对DOM问题，Javascript的应对方案:**

针对repaint、reflow，Nicholas 在他的《[Speed up your JavaScript, Part 4](https://link.zhihu.com/?target=http%3A//www.nczonline.net/blog/2009/02/03/speed-up-your-javascript-part-4/)》做了详细介绍，这里整理一下：

- 在DOM外，执行尽量多的变更操作
- 操作DOM前，先把DOM节点删除或隐藏，因为隐藏的节点不会触发重排。
- 一次性，修改样式属性
- 使用缓存，缓存临时节点



参考资料：

https://www.zhihu.com/question/324992717/answer/2276637271