// General function calling
function example1(num1, num2){
    console.log(num1 + num2);
}

example1(4, 5); 
example1(4);
example1(4, 5, 6);


// execution order will be, line- 13, 14, 12.
x = 5;
console.log(x);
var x;


// The output of the code will be undefined because of hoisting. 
// In JavaScript, variable declarations are hoisted to the top of their scope, 
// but not their initializations.
// when console.log(x) is executed before the assignment, 
// the variable x exists but has not been assigned a value yet, 
// resulting in the output of undefined.
function demo() {
    console.log(x);
    var x = 10;
}
demo();