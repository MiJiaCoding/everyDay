const user1= {
    name: '米迦',
    age: 99,
    say: function () {
        console.log('My name is '+this.name);
    }
}

// es6 第二种导出 默认导出
export default user1;
