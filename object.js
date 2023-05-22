var students = {
    name: "Roshan",
    Roll_No: 2018129,
    Class: 12,
    Batch: "B-1",
    sem: 4
};

console.log("students =", students);
console.log(students.name);
console.log(students.Batch);
console.log(students.Class);
console.log(students.Roll_No);
console.log(students.sem);
students.sem = 2;
console.log(students.sem);
// console.log(students(sem));

console.log(students["sem"]);
// console.log(students[sem]);

function printobject(obj, ele){
    console.log(obj[ele]);
}

var temp = "Roll_No";
printobject(students, temp);
delete students.Roll_No;
console.log(students);


var objects = {
    key : 10
}

console.log(objects.key);
// console.log(objects(key));
console.log(objects["key"]);
// console.log(objects.(key));
// console.log(objects[key]);


var obj1 = {
    prop : 100
}

var obj2 = obj1;
console.log(obj1 == obj2);
console.log(obj1 === obj2);

obj2 = {
    prop : 100
}

console.log(obj1 == obj2);
console.log(obj1 === obj2);


// Iterating over object

for(var prop in students){
    console.log(prop, ":", students[prop]);
}

var keys = Object.keys(students);
// var temp = Object.getOwnPropertyNames(students)
console.log(keys); 

Object.values(students).forEach(val => console.log(val));

const entries = Object.entries(students);
console.log(entries);


var student = {
    name: "Roshan",
    age: 20,
    roll_no: 2018129,
    address: {
    	city: "Aurangabad",
    	state: "Maharashtra"
	}
}
console.log(student);
delete student.roll_no;
console.log(student);

console.log(student.address.city);
// console.log(student.value.value);
console.log(student["address"]["city"]);
console.log(student.address["city"]);
// console.log(student.[address].city);
// console.log(student.address.[city]);


console.log(Object.keys(student));
console.log(Object.getOwnPropertyNames(student));
