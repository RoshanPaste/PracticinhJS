var name = "Global Scope";

function scopeDemo(){
    var name = "Function Scope";
    console.log(name);
}

scopeDemo();
console.log(name);




function c(){
    console.log("inside c");
}
function b(){
    c();
    console.log("inside b");
}
function a(){
    b();
    console.log("inside a");
}

a();
console.log("global context");



function multiply(a, b) {
    return a*b;
};

console.log(multiply);


// Fibonnaci Series
function finbonacci_Series(fibNum){
    if(fibNum == 0) return true;
    var fibN1 = 0;
    var fibN2 = 1;
	var ans = 0;
    while(ans <= fibNum){
        ans = fibN1 + fibN2;
        if(ans == fibNum)return true;
        else if(ans > fibNum) return false;
        fibN1 = fibN2;
        fibN2 = ans; 
    }
}
 console.log(finbonacci_Series(5)); 



//  Function in Function
var temp = "Global";

function outer(){    
    var temp = "outer";    
    function inner(){
        var temp = "inner";
        console.log(temp);
    }
    inner();
    console.log(temp);
}
outer();
console.log(temp);



// Function Expressions
var factorial = function finbonacciSeries(fibNum){
    if(fibNum == 0) return true;
    var fibN1 = 0;
    var fibN2 = 1;
	var ans = 0;
    while(ans <= fibNum){
        ans = fibN1 + fibN2;
        if(ans == fibNum)return true;
        else if(ans > fibNum) return false;
        fibN1 = fibN2;
        fibN2 = ans; 
    }
}
console.log(factorial(5));


// function a() {
//     console.log("Inside a");

//     function b() {
//         console.log("Inside b");
//     }
// }

// a()b();


var add = function (a, b) {
    return a+b;
}

var subtract = function (a, b) {
    return a-b;
}

var op = function (func) {
    var x = 2;
    var y = 3;
    return func(x, y);
}
console.log(op(subtract));
console.log(op(add));