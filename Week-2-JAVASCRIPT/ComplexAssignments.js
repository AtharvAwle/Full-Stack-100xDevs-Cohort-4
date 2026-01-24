// - Assignment #1
//     Write a function that takes a `user` as an input and greets them with their name and age

let user = [
    {
        name:"Atharv",
        age : 21
    },
    {
        name:"Ayush",
        age : 15
    }
]

function greet(user){
    console.log("Hello "+ user.name + " Your age is "+ user.age);
}

for(let i = 0 ; i < user.length ; i++){
    greet(user[i]);
}



// - Assignment #2
    
//     Write a function that takes a new object as input which has `name` , `age`  and `gender` and greets the user with their gender (Hi `Mr/Mrs/Others` harkirat, your age is 21)

let user1 = [
    {
        name:"Atharv",
        age : 21,
        gender : "male"
    },
    {
        name:"Ayush",
        age : 15,
        gender: "male"
    },
    {
        name : "angelena",
        age : 32,
        gender : "female"
    }
]

function greet(user){
    if (user.gender == "male"){
        console.log("Hello Mr. "+ user.name + " Your age is "+ user.age);
    }
    else {
        console.log("Hello Ms. "+ user.name + " Your age is "+ user.age);
    }
}

for(let i = 0 ; i < user1.length ; i++){
    greet(user1[i]);
}



// - Assignment #3
//     Also tell the user if they are legal to vote or not


function canVote(user){
    if (user.age >= 18){
        console.log("Hello Mr. "+ user.name + " you can vote");
    }
    else {
        console.log("Hello Ms. "+ user.name + " You cannot vote ");
    }
}

for(let i = 0 ; i < user1.length ; i++){
    canVote(user1[i]);
}




// -----------------------------------------------------------------------------------------------------------------------------
// Arrays

// - Assignment
//     Write a function that takes an array of numbers as input, and returns a new array with only even values. Read about `filter` in JS

let num = [1,2,3,4,5,6,7,8,9,10];

function onlyEven(arr){
    even = [];
    for (let i = 0 ; i < arr.length ; i++){
        if(arr[i] % 2 == 0){
            even.push(arr[i])
        }
    }
    return even;
}

console.log(onlyEven(num))