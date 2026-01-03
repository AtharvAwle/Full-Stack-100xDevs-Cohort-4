// Write a function for giving sum of 2 numbers
function twoSum(a,b){
    return a+b;
}

console.log(twoSum(3,5));

// call a function inside a function

function sum(a,b,fnToCall) {     //calling a function inside a function
    ans = a+b;
    fnToCall(ans)
}

function displayResult(data) {
    console.log("The sum of two numbers is: "+ data);
}

function displayResultPassive(data) {
    console.log("Sum's result is: "+ data);
}


console.log(sum(1,2,displayResult))


// CALLBACKS --> a function is calling back to another function
// more eg:

function arith(a,b,fn) {
    let ans = fn(a,b)
    return ans
}
function add(a,b) {
    return a+b;
}

function sub(a,b) {
    return a-b;
}

let result = arith(1,2,add)
console.log(result)