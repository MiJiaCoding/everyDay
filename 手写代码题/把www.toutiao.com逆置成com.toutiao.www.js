    //题目：把www.toutiao.com逆置成com.toutiao.www
    /*
        思路：两次反转，第一次将整个字符串反转-> moc.oaituot.www
            第二次反转，部分反转，以'.'为间隔反转，moc->com,oaituot->toutiao,www->www即可
    */
            // 循环，在.的地方分割然后存数组里，然后一个反循环拼接就完事了  
            // 不使用join和 split


    const reverse_str = (str,left,right)=>{//可以不用right ，根据对称， right=str.length-1-i
        let tmp
        while(left<right){
            tmp=str[left]
            str[left]=str[right]
            str[right]=tmp
            left++
            right--
        }
        return str
    }

    const reverse = (str) =>{
        reverse_str(str,0,str.length-1)
        let l=0
        let r=0
        while(l<str.length&&r<str.length){
            if(str[r]==='.'){
                reverse_str(str,l,r-1)
                r=r+1
                l=r
            }else{
                r++
            }
        }
        return str
    }
    // function reverseString(str) {
    //     return str.split("").reverse().join("");
    // }


    let str="www.toutiao.com"
    let str_a=[]
    for (const item of str){
        str_a.push(item)
    }
    // let str_a=Array.from(str)
    // console.log(str_a)
    // console.log(reverse_str(str_a,0,str_a.length-1))//
    console.log(str_a)
    // let res=reverse(str_a).toString()
    let a = reverse(str_a)
    // for(const index in res){
    //     if(res[index]===','){
    //         // res.slice(index,index+1) //return 的是制定的元素 注意不是splice 这不是数组！！
    //         // console.log(res[index])
            
    //     }
    // }

    //方法1 toString()+replace 正则
     //javascript的replace函数在替换数据时，默认只替换第一个。如果在替换的时候加上： / 替换内容 /g 就能实现全部替换
    let res1=a.toString().replace(/,/g,'')
    console.log("方法1 toString()+replace 正则:",res1)


    //方法2 循环拼接
    let res2=''
    for (const index in a){
        res2+=a[index]
    }
    console.log("方法2 循环拼接：",res2,typeof(res2))


    //方法3 如果可以用join
    let res3 = a.join("")
    console.log("方法3 如果可以用join",res3)
    

    // console.log(res.map())
    // console.log(["t","o","u"].toString())