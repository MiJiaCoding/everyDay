let arr=[3,4,5,6,7]

Array.prototype._map=function(fn,thisArgs){
    if(Object.prototype.toString.call(fn)!=="[object Function]"){
        throw('Error in params')
    }
    let resArray = []
    let curArray = this
    for(let i =0;i<curArray.length;i++){
        // 改变this指向 为thisArgs
        resArray[i]=fn.call(thisArgs,curArray[i],i,curArray)
    }
    return resArray
}

const res=arr._map((item,index,arr)=>{
    return item-2
})
console.log(res)
