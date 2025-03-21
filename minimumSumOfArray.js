// Task
// Given an array of integers , Find the minimum sum which is obtained from summing each Two integers product .

// Notes
// Array/list will contain positives only .
// Array/list will always have even size
// Input >> Output Examples
// minSum({5,4,2,3}) ==> return (22)
// Explanation:
// The minimum sum obtained from summing each two integers product ,  5*2 + 3*4 = 22

function minSum(arr) {
  const sortArray = arr.sort((a, b) => a - b);
  const sumArray = [];

  for (let i = 0; i < sortArray.length / 2; i++) {
    sumArray.push(sortArray[i] * sortArray[sortArray.length - 1 - i]);
  }

  const result = sumArray.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );

  return result;
}
