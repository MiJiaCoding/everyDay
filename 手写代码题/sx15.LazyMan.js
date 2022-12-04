/*问题描述

    实现一个LazyMan，可以按照以下方式调用:
    LazyMan(“Hank”)输出:
    Hi! This is Hank!

    LazyMan(“Hank”).sleep(10).eat(“dinner”)输出
    Hi! This is Hank!
    //等待10秒..
    Wake up after 10
    Eat dinner~

    LazyMan(“Hank”).eat(“dinner”).eat(“supper”)输出
    Hi This is Hank!
    Eat dinner~
    Eat supper~

    LazyMan(“Hank”).eat(“supper”).sleepFirst(5)输出
    //等待5秒
    Wake up after 5
    Hi This is Hank!
    Eat supper
*/

class _LazyMan{
    constructor(name){
        this.tasks=[]
        const tasks=()=>{
            console.log(`Hi!This is ${name}`)
            this.next()
        }
    }
}