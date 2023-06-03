// function makeCounter() {
//     let count = 0;
//     return function() {
//       return count++;
//     };
//   }
//   let counter1 = makeCounter();
//   let counter2 = makeCounter();
//   console.log( counter1() ); 
//   console.log( counter1() ); 
//   console.log( counter2() ); 


// function makeArmy() {
//     let shooters = [];
//     let i = 0;
//     while (i < 10) {
//       let shooter = function() {
//         console.log( i ); 
//       };
//       shooters.push(shooter);
//       i++;
//     }
//     return shooters;
//   }
//   let army = makeArmy();
//   army[0]();
//   army[5]();


// function makeArmy() {
//     let shooters = [];
//     for(let i = 0; i < 10; i++) {
//       let shooter = function() {
//         console.log( i );
//       };
//       shooters.push(shooter);
//     }
//     return shooters;    
//   }
//   let army = makeArmy();
//   army[0]();
//   army[5]();


// var Sequence = (function sequenceIIFE() {
//     var current = 0;
//     return {
//         getCurrentValue: function() {
//             return current;
//         },  
//         getNextValue: function() {
//             current = current + 1;
//             return current;
//         }
//    };
// }());
// console.log(Sequence.getNextValue());
// console.log(Sequence.getNextValue());
// console.log(Sequence.getCurrentValue());


// let People = function(person, age) { 
//     this.person = person; 
//     this.age = age; 
//     this.info = function() { 
//         console.log(this);  
//        setTimeout(() => {  
//         console.log(this.person + " is " + this.age + " years old"); 
//        }, 3000); 
//     } 
// }  
// let person1 = new People('John', 21); 
// person1.info();


// var arguments = [1, 2, 3];
// var arr = () => arguments[2];
// arr();
// function foo(n) {
//   var f = () => arguments[0] + n; 
//   return f();
// }
// console.log(foo(3));


// function greet(user) {
//     var user = "Dear " + user;
//     return function(greeting="Hello! ") {
//         console.log(greeting+user);
//     }
// }

// var sayHello = greet("Saloni");
// sayHello();



// function foo() {
//     var a = 8;
//     function bar() {
//         console.log(a);
//     }
//     var a = a+2;
//     return bar;
// }
// var fun = foo();
// fun();



function cart() {
    let items = 0;
    return {
       addItem: function () {
            items++;
        },
        getItem: function () {
            return items;
        }
    };
}
const closure = cart();
closure.addItem();
closure.addItem();
closure.addItem();
console.log(closure.getItem());