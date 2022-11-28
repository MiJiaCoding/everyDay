//题目：把www.toutiao.com逆置成com.toutiao.www
/*
    思路：两次反转，第一次将整个字符串反转-> moc.oaituot.www
        第二次反转，部分反转，以'.'为间隔反转，moc->com,oaituot->toutiao,www->www即可
*/
// const reverse_str = (str,left,right)=>{
//     let tmp
//     while(left<right){
//         tmp=str[left]
//         str[left]=str[right]
//         str[right]=tmp
//         left++
//         right--
//     }
//     return str
// }
function reverse_str(str){
    for (let left=0,right=str.length-1;left<right;left++,right--){
        // let tmp=str[left]
        // str[left]=str[right]
        // str[right]=tmp
        [str[left], str[right]] = [str[right], str[left]];
    }
    return str
}





// const reverse = (str) =>{
//     reverse_str(string)
//     let l=0
//     let r=0
//     while(l<str.length&&r<str.length){
//         if(str[r]==='.'){
//             reverse(str,l,r-1)
//             r=r+1
//             l=r
//         }else{
//             r++
//         }
//     }
// }


let str="www.toutiao.com"
function reverseString(str) {
    return str.split("").reverse().join("");
}


// console.log(reverseString(str))


console.log(reverse_str(str))




// var reverseString = function(s) {
//     let l = -1, r = s.length;
//     while(++l < --r) [s[l], s[r]] = [s[r], s[l]];
//     return s;
// };
// console.log("测试代码；",reverseString(str2))
