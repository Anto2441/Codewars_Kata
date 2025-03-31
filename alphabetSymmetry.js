// Consider the word "abode". We can see that the letter a is in position 1 and b is in position 2. In the alphabet, a and b are also in positions 1 and 2. Notice also that d and e in abode occupy the positions they would occupy in the alphabet, which are positions 4 and 5.

// Given an array of words, return an array of the number of letters that occupy their positions in the alphabet for each word. For example,

// solve(["abode","ABc","xyzD"]) = [4, 3, 1]
// See test cases for more examples.

// Input will consist of alphabet characters, both uppercase and lowercase. No spaces.

// Good luck!

function solve(arr) {
  let result = [];

  for (let word of arr) {
    let count = 0;
    let lowerWord = word.toLowerCase();

    for (let i = 0; i < lowerWord.length; i++) {
      if (lowerWord[i].charCodeAt(0) - 96 === i + 1) {
        count++;
      }
    }

    result.push(count);
  }

  return result;
}
