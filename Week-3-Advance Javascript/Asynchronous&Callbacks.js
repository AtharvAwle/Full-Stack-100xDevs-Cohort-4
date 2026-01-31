let a = 1;
let b = 2;

console.log(a);
console.log(b);

function callback(){
    console.log(a+b);
}


// wait for 1 sec and then print the sum
setTimeout(callback, 1000);



// Make a stopwatch

let cntr = 0
function callback2(){
    console.log(cntr);
    cntr += 1;
}

setInterval(callback2,1000)