// Description:
// Task
// Given an array/list [] of n integers , find maximum triplet sum in the array Without duplications .

// Notes :
// Array/list size is at least 3 .

// Array/list numbers could be a mixture of positives , negatives and zeros .

// Repetition of numbers in the array/list could occur , So (duplications are not included when summing).

function maxTriSum(numbers) {
  const arr = [];

  const highestNumber = Math.max(...numbers);
  arr.push(highestNumber);

  const newArr = numbers.filter((x) => x !== highestNumber);
  const secondHighestNumber = Math.max(...newArr);
  arr.push(secondHighestNumber);

  const lastArr = newArr.filter((x) => x !== secondHighestNumber);
  const thirdHighestNumber = Math.max(...lastArr);
  arr.push(thirdHighestNumber);

  const sum = arr.reduce((acc, curr) => acc + curr, 0);

  return sum;
}
