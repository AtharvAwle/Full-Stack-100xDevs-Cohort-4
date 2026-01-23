// - Assignment #1
    
//     Write a function `sum` that finds the sum of two numbers. 
//     Side quest - Try passing in a string instead of a number and see what happens?

function sum(a,b){
    return a+b;
}

console.log(sum(2,3));

// - Assignment #2
    
//     Write a function called `canVote` that returns true or false if the `age` of a user is > 18

function canVote(age){
    if(age>=18){
        console.log("You Can Vote")
    }
    else{
        console.log("You cannot vote")
    }
}

canVote(21)
canVote(10)


// - Assignment
    
//     Write an if/else statement that checks if a number is even or odd. If it's even, print "The number is even." Otherwise, print "The number is odd."

function eo(num){
    if (num % 2 == 0){
        console.log("The number is even.")
    }
    else{
        console.log("The number is odd.")
    }
}

eo(1)
eo(2)


// - Assignment
// Write a function called sum that finds the sum from 1 to a number

function sum2(n){
    let sum = 0;
    for(let i = 1 ; i <= n ; i++){
        sum += i;
    }
    return sum;
}

console.log(sum2(5));