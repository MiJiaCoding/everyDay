# npm

## 软连接命令

> npm link :创建软链接



> ~~npm unlink:去掉软链接~~ (要加上-g)
>
> npm unlink -g 去掉软链接
>
> npm uninstall -g 去掉软链接
>
> npm uninstall 包名 —g 去掉软链接



> npm link包名:使用上一步创建的软链接



> npm unlink包名:删除引用的软链接



 **强制解除创建的某个特定全局链接**

> npm rm --global packageName





 **查看所有创建的全局链接名称**

> npm ls --global --depth 0

![img](https://cdn.nlark.com/yuque/0/2023/png/33579416/1672803701105-c0b1e0b7-e767-4347-8835-31fe7d763cda.png)

红线的都是是本地link的



## npm-uninstall

官网链接：https://docs.npmjs.com/cli/v9/commands/npm-uninstall?v=true

![img](https://cdn.nlark.com/yuque/0/2023/png/33579416/1672804540611-ee0b26e1-d347-45c4-a1e4-7f10e4e30510.png)

aliases：别名

其实这些命令都是一样的





下图文件就是软链接：



![img](https://cdn.nlark.com/yuque/0/2023/png/33579416/1672793387774-a2ef4ab5-4590-40b8-b757-27898a86bcf8.png)

`npm link` :

为npm包目录创建软链接，将其链到**{prefix}/lib/node_modules/<package>**

为可执行文件(bin)创建软链接，将其链到**{prefix}/bin/{name}**

以上两个路径是官方文档给出的路径，这两个路径是**Linux平台**上的。



输入`npm config get prefix` 可获取前缀路径

![img](https://cdn.nlark.com/yuque/0/2023/png/33579416/1672793406433-020c383e-77e2-4ff4-8b8b-13604c5d1282.png)





在**Windows平台**中，这两个路径为：
  目录: C:\Users\{Username}\AppData\Roaming\npm\node_modules\<package>
  文件: C:\Users\{Username}\AppData\Roaming\npm\<name>



## 实操

### 1.创建项目

项目结构：

![img](https://cdn.nlark.com/yuque/0/2023/png/33579416/1672793423073-b1d3e740-bb0e-4351-866a-fc3982bdb8d7.png)

test/npm-module-1  这是我们的npm模块，被引用 使用命令

test/project1	这是我们的主项目，去引用npm模块



###  2.给npm模块创建软链接

> 进入npm模块的项目，执行npm link

进入test1/npm-module-1 ，执行npm link

![img](https://cdn.nlark.com/yuque/0/2023/png/33579416/1672793805510-c5140614-2f17-4711-933f-317a24185daf.png)



![1672793871998](C:\Users\mijia\AppData\Roaming\Typora\typora-user-images\1672793871998.png)







### 3.在主项目中引用上一步挂载到全局的软链接

>npm link npm-module-1



**两个指向问题**

>1.主项目project1中的node_modules/npm-module-1对应的是我本机的**全局目录下的软链接**（C:\Users\mijia\AppData\Roaming\npm\node_modules\npm-module-1）
>
>2.我本机的全局目录下的软链接对应的是我本机的npm模块项目（G:\SelfStudy\前端八股\八股\everyDay\工程化\npm\test1\npm-module-1）



进入test1/project1，执行npm link npm-module-1

![img](https://cdn.nlark.com/yuque/0/2023/png/33579416/1672794096655-8b3e47a7-e9b7-4424-bde0-e45bfa65252b.png)



![img](https://cdn.nlark.com/yuque/0/2023/png/33579416/1672794186500-cd77204e-f47c-4435-af83-0ab58ac39176.png)



### 4.删除引用和删除软连接

> npm unlink npm-module-1	删除引用
>
> npm unlink				删除软链接



进入test1/project1，执行npm unlink npm-module-1

![img](https://cdn.nlark.com/yuque/0/2023/png/33579416/1672794583928-7d82b707-1858-45cb-98dd-263789733057.png)



进入test1/npm-module-1，执行 npm unlink -g

![img](https://cdn.nlark.com/yuque/0/2023/png/33579416/1672804878076-5662d73d-ecbd-46f5-903a-6f6cb7976eb1.png)















