// Your task is to remove all duplicate words from a string, leaving only single (first) words entries.

// Example:

// Input:

// 'alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta'

// Output:

// 'alpha beta gamma delta'

function removeDuplicateWords(s) {
  const array = s.split(' ');
  const arrayWithoutDuplicates = [...new Set(array)];
  const newString = arrayWithoutDuplicates.join(' ');

  return newString;
}
