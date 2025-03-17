// Complete the method which accepts an array of integers, and returns one of the following:

// "yes, ascending" - if the numbers in the array are sorted in an ascending order
// "yes, descending" - if the numbers in the array are sorted in a descending order
// "no" - otherwise
// You can assume the array will always be valid, and there will always be one correct answer.

function isSortedAndHow(array) {
  const ascendingArray = [...array].sort((a, b) => a - b);
  const descendingArray = [...array].sort((a, b) => b - a);

  if (
    array.length === ascendingArray.length &&
    array.every((val, index) => val === ascendingArray[index])
  ) {
    return 'yes, ascending';
  } else if (
    array.length === descendingArray.length &&
    array.every((val, index) => val === descendingArray[index])
  ) {
    return 'yes, descending';
  } else {
    return 'no';
  }
}
