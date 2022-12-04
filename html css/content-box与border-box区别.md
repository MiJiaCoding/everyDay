# content-box与border-box区别



## 1.盒模型尺寸:

- content-box（默认样式）
- border-box

## 2.content-box与border-box区别

##### `两者的盒子的宽度是否包含表框和内边距`

# - content-box

```css
 div{
    width:100px;
    height:100px;
    border:1px solid red; 
    padding: 10px;
  }
```

![img](https://cdn.nlark.com/yuque/0/2022/png/33579416/1669206784748-dd32ff2c-f87a-4cb1-a39a-e9edc0c94f31.png)



# - border-box

```css
div{
    box-sizing:border-box;
    width:100px;
    height:100px;
    border:1px solid red; 
    padding: 10px;
  }
```



![img](https://cdn.nlark.com/yuque/0/2022/png/33579416/1669206838321-44c42c65-e71d-41f0-9115-c363564543ee.png)



`注`:通过对比发现

# content-box 的 width 不包括 padding 和 border

# border-box 的 width 包括 padding 和 border

