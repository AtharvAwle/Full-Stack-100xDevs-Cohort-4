// Variables in JS (let,const,var)
// const - cannot be reassigned
// let - can be reassigned 
// var - function scoped, can be reassigned (avoid using var in modern JS)


var a = 1;
console.log(a);

let b = 2;
b = 3;    // reassigned
console.log(b);

const pi = 3.14;
console.log(pi)



// Data Types in JS


// Strings
let fname  = "Atharv";
// Integers
let age  = 21;
// Booleans
let isMarried = false

console.log("This person name is " + fname + " the age is " + age + " and marriage status is " + isMarried) 


// IF ELSE statement
if(isMarried == false){
    console.log(fname + " is not married")
} else{
    console.log(fname + " is married")
}


// Loops in JS
let count = 0;
for(let i = 0 ; i <= 100 ; i++){
    count += i;
}
console.log(count)


// Greet a person
let nfname = "Atharv"
let lname = "Awle"

console.log("Good morning "+ nfname+" "+lname)


// greet person based on gender
gender = "Male"

if(gender == "Male"){
    console.log("Hello male")
}else{
    console.log("Hello female")
}
