function findLargestElement(numbers) {
  let large = numbers[0];

  for(let i = 0 ; i < numbers.length ; i++){
    if(numbers[i] > large){
      large = numbers[i];
    }
  }
  return large;
}