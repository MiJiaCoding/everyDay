let arr=[3,4,5,6,7]


Array.prototype._filter=function(fn,thisArgs){
    if(Object.prototype.toString.call(fn)!=='[object Function]'){
        throw('Error in params')
       }
    let curArray=this
    let res=[]
    for(let i=0;i<curArray.length;i++){
        if(fn.call(thisArgs,curArray[i],i,curArray)){
            res.push(curArray[i])
        }
    }
    return res
}

let res=arr._filter((item,index,data)=>{
    return item>5
})
console.log(res)