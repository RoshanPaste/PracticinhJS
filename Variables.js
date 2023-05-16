var a = 10;
console.log(a); //console.log will print.


var b;
console.log(b + "c");

var j = 10;
console.log(j)
console.log(typeof(j)); //typeof will tell the type of the variable. Cause in JS we don't have to define the variable type. So in case if you want to indentify the type of variable, then you can use this.


console.log();
console.log("Operators");
console.log(1 + '1'); // Here the output will be the 11, cause it will covert the integer to String Internally
console.log(1 - '1'); // Here the results are shocking. The output will be 0. It converts String to Integer Internally
console.log(12.5 / 3);
console.log(12.5 * 2);
console.log(12 % 10);
console.log('1' + '1');
console.log('1' - '1'); //Here the output will be the 0.
console.log(2 * '2'); //Here it will multiply both the numbers and output will be 4.

console.log();
console.log("Comparative Operator");
console.log(1 == 1); // True
console.log(1 == '1'); //True - cause string will behave like a integer in this case
console.log(1 != '1'); //False - cause string will behave like a integer in this case

//To avoid that mistak we will use === 
console.log(1 === '1'); //False
console.log(1 !== '1'); //True


console.log();
console.log("Conditionals");
var num = -1;
if(num > 0){
	console.log("positive");
}else if(num < 0){
  console.log("Negative");
}else{
  	console.log("Zero");
}



// It will be true for all numbers except ZERO (0)
// If the variable is undefined/null then it will return false
var temp = 0;
if(temp){
    console.log("True");
}else{
    console.log("False");
}

// It will be false if the string is empty
// If the variable is undefined/null then it will return false
var temp = "";
if(temp){
    console.log("True");
}else{
    console.log("False");
}