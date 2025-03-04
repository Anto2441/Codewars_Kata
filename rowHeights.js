// Several people are standing in a row divided into two teams. The first person goes into team 1, the second goes into team 2, the third goes into team 1, and so on.

// Task
// Given an array of positive integers (the weights of the people), return a new array / tuple of two integers (depending on your language), whereby the first one is the total weight of team 1, and the second one is the total weight of team 2. Note that the array will never be empty.

// Examples
// [13, 27, 49] returns [62, 27] or (62, 27) (depending on your language) because the total weight of team 1 is 62 and the total weight of team 2 is 27.

function rowWeights(array) {
  const array1 = [];
  const array2 = [];

  for (let i = 0; i < array.length; i++) {
    if (i % 2 === 0) array1.push(array[i]);
    else array2.push(array[i]);
  }

  const sumArray1 = array1.reduce((acc, curr) => acc + curr, 0);
  const sumArray2 = array2.reduce((acc, curr) => acc + curr, 0);

  return [sumArray1, sumArray2];
}
