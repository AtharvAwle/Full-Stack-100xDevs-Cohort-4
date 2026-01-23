// Syntax

// var - Older way (function scoped)
// let - Can reassign the variable
// const - Cannot reassign the variable

let color = "Black";
const height = 175;
let likePizza = true;

console.log(color);
console.log(height);
console.log(likePizza);


// DataTypes
let number = 42;             // Number
let string = "Hello World";  // String
let isActive = false;        // Boolean
let numbers = [1, 2, 3];     // Array


// Operators
let sum = 10 + 5;          // Arithmetic operator
let isEqual = (10 === 10); // Comparison operator
let isTrue = (true && false); // Logical operator


// Functions

// Function declaration
function greet(name) {
    return "Hello, " + name;
}

// Function call
let message = greet("John"); // "Hello, John"