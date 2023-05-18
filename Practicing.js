// var i=10 ; 
// do { 
//     console.log("hii"); 
// } while(i<5);


//  for(i=0, j=10; i<5; ++i) { 
//        if(i<5)
//          break; 
//        console.log("hii"); 
//    }


// var i=0 ;     
// while(i<5); { 
//     console.log("hii"); 
//     ++i ; 
// }


// var i=0 ;     
// while(i<5) { 
//   console.log("hii"); 
//   ++i; 
// }

// console.log(null == undefined);
// console.log(typeof(null) == typeof(undefined));

// console.log(null === undefined);

// console.log(typeof( typeof( typeof( 100 ) ) ));




                                          // Question
// The Body Mass Index (BMI) is the ratio of the weight of a person(in kilograms) to the square of the height(in meters)
// Formula To Calculate Body Mass Index (BMI)
// BMI = weight / (height x height);
// Write a JavaScript program that calculates the BMI, and reports the BMI category
// const prompt = require("prompt-sync")();

// var weight = parseInt(prompt("Enter your weight"));
// var height = parseInt(prompt("Enter your height"));

// // var BMI = ;

// console.log(weight / (height * height));

var weight = 58;
var height = 1.6;

var bmi = weight / (height * height);

if(bmi <= 18.5){
    console.log("You are Underweight.");
}else if(18.6 <= bmi >= 24.9){
    console.log("You are Healthy.");
}else if(25 <= bmi >= 25.9){
    console.log("You are Overweight.");
}else{
    console.log("You are Obese.");
}