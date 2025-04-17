// An ordered sequence of numbers from 1 to N is given. One number might have deleted from it, then the remaining numbers were mixed. Find the number that was deleted.

// Example:

// The starting array sequence is [1,2,3,4,5,6,7,8,9]
// The mixed array with one deleted number is [3,2,4,6,7,8,1,9]
// Your function should return the int 5.
// If no number was deleted from the starting array, your function should return the int 0.

// Note: N may be 1 or less (in the latter case, the first array will be []).

function findDeletedNumber(arr, mixArr) {
  const sortArr1 = arr.sort((a, b) => a - b);
  const sortArr2 = mixArr.sort((a, b) => a - b);

  if (sortArr1.join('') === sortArr2.join('')) return 0;

  for (let i = 0; i < sortArr1.length; i++) {
    if (sortArr1[i] !== sortArr2[i]) {
      return sortArr1[i];
    }
  }
}
