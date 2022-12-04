let person = new Object()
person.name = 'Mijia'
person.age = '55'
person.job = 'Student'
person.sayName = function(){
    console.log(this.name)
    // return '这是sayName的返回值,不写就是undefined'
}

console.log(person)
console.log(person.sayName())