"use strict"

console.log(window.document==document);
console.log(window.location == document.location);

function test(){
    return this;
}
console.log(test()==window);


// Button Click Reflect message
function sayHello(){
    alert('Hello 2');
}
var btnClick = document.getElementById('btn2');
btnClick.addEventListener('click', sayHello);


// Box Counter
var box = document.getElementById('box');
var clickCount = document.getElementById('click-count');
var count = 0;

box.addEventListener('click', function(){
    count++;
    if(count % 5 == 0){
        clickCount.innerText = count + " ";
    }
});

box.addEventListener('mouseover', function(){
    console.log('Mouse Over');
})

box.addEventListener('mouseout', function(){
    console.log('Mouse Out');
})


var searchTemp = document.getElementById('search');
searchTemp.addEventListener('keypress', function(){
    console.log('Key Pressed');
})

window.addEventListener('keydown', function(){
    console.log('Keyboard Button Pressed');
})

window.addEventListener('keyup', function(){
    console.log('Keyboard Button Released');
})

document.addEventListener('keyup', function(event){
    console.log('Keyboard Button Released', event.keyCode);
})


document.addEventListener('onwheel', function(){
    console.log('Mouse roll');
})


// document.getElement("ninja").innerHTML="I am a Ninja";
// document.getElementById("ninja").innerHTML=I am a Ninja;
document.getElementById("ninja").innerHTML="I am a Ninja"; 
document.querySelector("#ninja").innerHTML= "I am a Ninja";