// ARRAYS AND OBJECTS



// 1 --> Arrays

// Print all even number from a array

arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for(let i = 0 ; i < arr.length ; i++){
    if(arr[i] % 2 == 0){
        console.log(arr[i]);
    }
}


// Write a program to print biggest num in array
arr2 = [21,34,5,4,23,65,23,67,875,213,232];
let big = arr2[0];
for(let i = 1;i< arr2.length ; i++){
    if(arr2[i]>big){
        big = arr2[i]
    }
}

console.log(big)


// write a program that reverses all element in array

arr3 = [1,2,3,4,5,6,7,8,9];
let j = arr3.length - 1;
for(let i = 0 ; i < arr3.length/2 ; i++){
    let temp = arr3[i];
    arr3[i] = arr3[j];
    arr3[j] = temp;
    j--;
}
console.log(arr3)