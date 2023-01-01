# 玉伯开发的seajs



AMD 和 CMD 最大的区别是对依赖模块的执行时机处理不同，而不是加载的时机或者方式不同，二者皆为异步加载模块。

AMD 依赖前置，js可以方便知道依赖模块是谁，立即加载；
CMD就近依赖，需要使用把模块变为字符串解析一遍才知道依赖了那些模块，这也是很多人诟病CMD的一点，牺牲性能来带来开发的便利性，实际上解析模块用的时间短到可以忽略。

// 打比方：做菜，AMD就是把油盐酱醋准备好了再去炒菜，CMD就是边炒菜，需要什么去拿什么


## 目录结构
examples/
  |-- sea-modules      存放 seajs、jquery 等文件，这也是模块的部署目录
  |-- static           存放各个项目的 js、css 文件
  |     |-- hello
  |     |-- lucky
  |     `-- todo
  `-- app              存放 html 等文件
        |-- hello.html
        |-- lucky.html
        `-- todo.html
我们从 hello.html 入手，来瞧瞧使用 Sea.js 如何组织代码。


## 在页面中加载模块
在 hello.html 页尾，通过 script 引入 sea.js 后，有一段配置代码：

// seajs 的简单配置
seajs.config({
  base: "../sea-modules/",
  alias: {
    "jquery": "jquery/jquery/1.10.1/jquery.js"
  }
})

// 加载入口模块
seajs.use("../static/hello/src/main")

sea.js 在下载完成后，会自动加载入口模块。页面中的代码就这么简单。



## 模块代码
这个小游戏有两个模块 spinning.js 和 main.js，遵循统一的写法：

// 所有模块都通过 define 来定义
define(function(require, exports, module) {

  // 通过 require 引入依赖
  var $ = require('jquery');
  var Spinning = require('./spinning');

  // 通过 exports 对外提供接口
  exports.doSomething = ...

  // 或者通过 module.exports 提供整个接口
  module.exports = ...

});




资料链接：https://blog.csdn.net/lyshark_lyshark/article/details/125848012
https://seajs.github.io/seajs/docs/#quick-start