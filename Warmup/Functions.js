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



// sum of squares and cubes with callbacks

function square(a) {
    return a*a;
}



function functionSumOfArithmatic(a,b,fn){
    let val1 = fn(a);
    let val2 = fn(b);

    return val1 + val2
 }


 const anyfn = functionSumOfArithmatic(2,1,function (n){
    return n*n*n
 })
 console.log(anyfn)

 let result2 = functionSumOfArithmatic(2,1,square)

 console.log(result2)



//  Anonymous functions
// we can directly pass the whole writen function inside another function

// here in above eg we will add one more arithmetic operation ehich i