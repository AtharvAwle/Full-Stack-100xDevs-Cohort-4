// ## Objects
// An object in JavaScript is a collection of `key-value pairs`

let user1 = {
    name : "Atharv",
    age : 21,
    pass : "123456"
}

let user2 = {
    name : "Ayush",
    age : 15,
    pass : "67268"
}

function canVote(user){
    if(user.age>=18){
        console.log(user.name + " You Can Vote")
    }
    else{
        console.log(user.name + " You cannot vote")
    }
}

canVote(user1);
canVote(user2)



// ## Arrays
// Arrays let you group data together

const users = ["Atharv", "Ayush", "Pnadu"];
const tatalUsers = users.length;
const firstUser = users[0];



// Array of objects

let user = [
    {
        name:"Atharv",
        age:21,
        pass: "82698g"
    },
    {
        name:"Ayush",
        age:15,
        pass:"193ehdn"
    },
    {
        name: "Pandu",
        age:22,
        pass:"219837qw"
    }
]

function canVote(user){
    if(user.age>=18){
        console.log(user.name + " You Can Vote")
    }
    else{
        console.log(user.name + " You cannot vote")
    }
}


for(let i = 0 ; i < user.length ; i++){
    canVote(user[i]);
}