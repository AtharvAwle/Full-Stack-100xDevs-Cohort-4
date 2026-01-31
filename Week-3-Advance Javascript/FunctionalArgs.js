// Passing a whole function as an argument into another function

function sum(a,b){
    return a+b;
}

function sub(a,b){
    return a-b;
}

function whatToDo(a,b,fn){
    return fn(a,b);
}

console.log(whatToDo(1,2,sum));
console.log(whatToDo(1,3,sub))