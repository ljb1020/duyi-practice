
function Person(name, age) {
    this.name = name;
    this.age = age;
 this.species = '人类';
 this.say = function () {
     console.log("Hello");
 }
}

let per1 = new Person('xiaoming', 20);


// console.log(per1.constructor);
console.log(Person.prototype);
console.log(per1.__proto__);


