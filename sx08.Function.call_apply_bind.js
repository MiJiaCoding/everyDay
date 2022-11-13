Function.prototype._call=function(){
    console.log("arguments:",arguments)
}
function fn(a,b){
    console.log("a:",a)
    console.log("b:",b)
    console.log("this:",this)
    return 'hello'
}
const res=fn._call(fn,{x:10},20,30)
console.log(res)
console.log(Function)







