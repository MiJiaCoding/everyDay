const _new = function(constructor,...args) {
    // 补全代码
    //1.定义一个空对象
    const obj={}
    //2.隐式原型指向构造函数的显示原型
    obj.__proto__=constructor.prototype
    //3.执行构造函数,this指向空对象
    constructor.apply(obj,args)
    //4.返回对象
    return obj
}

function Person(b){
    this.a=1
    this.func=()=>{
        console.log(this.a,b)
    }
}

const obj =_new(Person,123)
console.log(obj.a)
obj.func()