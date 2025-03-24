// Find the number with the most digits.

// If two numbers in the argument array have the same number of digits, return the first one in the array.

function findLongest(array) {
  const arrayToString = array.map((x) => x.toString());
  const arraySort = arrayToString.sort((a, b) => b.length - a.length);
  const mostDigits = Number(arraySort[0]);

  return mostDigits;
}
