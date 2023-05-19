var arr = new Array(1, 2, 3, 4, 5, 6);
console.log(arr.length);
console.log(arr[6]);
console.log(arr[5]);
arr[10] = 11;
console.log(arr.length);
console.log(arr[10]);
console.log(arr[9]);
console.log(arr[8]);
console.log(arr);


var arr2 = new Array(5);
console.log(arr2.length);
console.log(arr2[2]);
arr2[2] = 3;
console.log(arr2[2]);
console.log(arr2);

var arr3 = [1, 2, 3, 4, 5];
console.log(arr3.length);
console.log(arr3[5]);
console.log(arr3[4]);
console.log(arr3[2]);
console.log(arr3);
arr3.push(6);
console.log(arr3);
arr3.pop();
console.log(arr3);
var temp = arr3.shift();
console.log(arr3);
arr3.unshift(temp);
console.log(arr3);
console.log(arr3.entries(5));
// arr3.fill(10, 1, 4);
// console.log(arr3);
console.log(arr3.lastIndexOf(3));
arr3.reverse();
console.log(arr3);
arr3.reverse();


var arr4 = ["Roshan", 20, true];

var arr5 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(arr5);
arr5.splice(5);
console.log(arr5);
arr5.splice(5, 5, 6, 7, 8, 9, 10);
console.log(arr5);
arr5.splice(0, 2);
console.log(arr5);
arr5.splice(5, 0, 11, 12, 13);
console.log(arr5);
arr5.splice(0,0, 1, 2);
console.log(arr5);
arr5.splice(7, 3, 20, 30, 40);
console.log(arr5);


// Iteration om arrays
var a = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for(var i = 0; i<a.length; i++){
    console.log(a[i]);
}

function iterate(ele){
    console.log(ele);
}
a.forEach(iterate);


// return days of week according to day number 
var days = ["", "Monday", "Tuesday", "Wednesday", "Thirsday", "Friday", "Saturday" ,"Sunday"];

function returnDay(x){
    return (x < 1) || (x > 7) ? null : days[x];
}

console.log(returnDay(7));



var words = ['one', 'two', 'three', 'four'];

words.forEach(function(word) {
    console.log(word);
    if (word === 'two') {
        words.shift();
    }
});


// Implement a function “duplicate” to duplicate an array, as shown below:
// For input arr=[1,2] duplicate(arr) should return [1,2,1,2]
var ar = [1, 2, 3];
ar = duplicate(ar);

function duplicate(ar) {
    // Write Logic here
    var n = ar.length*2;
    var i = 0;
    while(i < n/2){
      ar.splice(n, 0, ar[i++]);
    }
  
    return ar;
}
console.log(ar);



// Implement a function that returns an updated array with 1 left rotation on an array of integers
// rotateLeft([1,2,3,4]) // returns [2,3,4,1]
var temp2 = [1, 2, 3, 4];
function rotateLeft(temp2) {
    var temp = temp2.shift();
    temp2.splice(temp2.length, 0, temp);
    return temp2;
}
rotateLeft(temp2);
console.log(temp2);