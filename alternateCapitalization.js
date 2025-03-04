// Description:
// Given a string, capitalize the letters that occupy even indexes and odd indexes separately, and return as shown below. Index 0 will be considered even.

// For example, capitalize("abcdef") = ['AbCdEf', 'aBcDeF']. See test cases for more examples.

// The input will be a lowercase string with no spaces.

// Good luck!

// If you like this Kata, please try:

// Indexed capitalization

// Even-odd disparity

function capitalize(str) {
  const array1 = [];
  const array2 = [];

  for (let i = 0; i < str.length; i++) {
    if (i % 2 === 0) {
      array1.push(str[i].toUpperCase());
      array2.push(str[i].toLowerCase());
    } else {
      array1.push(str[i].toLowerCase());
      array2.push(str[i].toUpperCase());
    }
  }

  const joinedArray1 = array1.join('');
  const joinedArray2 = array2.join('');

  return [joinedArray1, joinedArray2];
}
