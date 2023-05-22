// var count = 10;

// function timingEvent(){
//     console.log("Tik Tik", count--);
//     if(count < 0){
//         clearInterval(id);
//     }
// }

// var id = setInterval(timingEvent, 2000);
// var id = setTimeout(timingEvent, 2000);


// var abc = setInterval(counting, 300);
// var count = 0;

// function counting() {
//     console.log(count++);
//     if(count == 5) {
//         clearInterval(abc);
//     }
// }


// let list = [4, 5, 6];
// for (let i in list) {
//    console.log(i); 
// }

// for (let i of list) {
//    console.log(i); 
// }


setTimeout(function () {
    console.log("a")
},20)
setTimeout(function () {
  console.log("b")
})
console.log("c")


var arr = []
arr.push("hello")
arr.hello = 0
var value = 0
for(var i = 0;i < 5; i++) {
    value = arr[value]
}
console.log(value)


function change1(obj) {
  obj.name = "ninjas"
}
function change2(obj) {
  obj = {name: "changed"}
}  
var obj = {name:"coding"}  
change1(obj)
change2(obj)
console.log(obj.name)  


var d = {h: 2, j: 3}
var e = d
var f = {...d, j: 4}
console.log(f.h)
console.log(f.j)