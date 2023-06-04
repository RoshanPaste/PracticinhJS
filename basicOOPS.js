// function User(name) {
//     this.isAdmin = false;
//   }
//   var user = new User("James");
//   console.log(user);




// var a = new Boolean();
// console.log(Object.getPrototypeOf(a));





// // output of this problem will be true
// // Explanation: Every function has a property called ‘name’. By default, the value of ‘name’ is set to the function's name.
// function Person(age) {
//     this.age = age;
// }
// var p1 = new Person(9);
// console.log(Person.hasOwnProperty("name"));




// const object1 = new Object();
// object1.property1 = 42;
// console.log(Object());



// class option {
//     constructor(name) { this.name = name; }
// }
// console.log(typeof( option));
// console.log(option === option.prototype.constructor);



// var Person = class {
//     constructor() {}
//     sayHello() {
//       return 'Hello!';
//     }
//   };
//   var instance = new Person();
//   console.log(instance.sayHello()+" "+Person.name);




// class Vehicle{
//     constructor ( doors, wheels){
//         this.doors = doors;
//         this.wheels = wheels;
//     }
// }
// class bus extends Vehicle{
//     constructor(windows){
//         this.windows = windows;
//     }
// }
// var b = new bus(10);
// console.log(bus.windows);





// function bike() {
//     console.log(this.name);
// }
// var name = "Ninja";
// bike();




// "use strict"
// function bike() {
//     console.log(this.name);
// }
// var name = "Ninja";
// bike();





// function Abc() {
//     "use strict"
//     this.a = 25;
//     return {a: 35, b: 44};
//     }
//     var obj = new Abc();
//     console.log(obj.a, obj.b);





// function User(name) {
//     this.isAdmin = false;
//     return name;
//     }
//     var user = User("Jack");
//     console.log(user);





// class Person {
//     constructor(name) {
//         this.name = name;
//     }
//     get name() {
//         return this._name;
//     }
//     set name(value) {
//         this._name = value;
//     }
// }
// var person = new Person("James");






// var ninja = {
//     name: 'Ninja',
//     getName: function() {
//         var name = this.name;
//         return name;
//     }
// };
// var funcName = function(snack, hobby) {
//     console.log(this.getName() + ' loves ' + snack + ' and ' + hobby);
// };
// funcName.call(ninja,'sushi', 'algorithms'); 
// funcName.apply(ninja,['sushi', 'algorithms']);






// function MyClass() {}

// const obj1 = new MyClass();
// const obj2 = MyClass();

// console.log(obj1);
// console.log(obj2);





class MyClass {
    constructor(x) {
        console.log("constructor is called!");
        this.x=x;
    }
 }
 
 const obj = new MyClass();
 console.log(obj.x);