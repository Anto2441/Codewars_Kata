// Find the sum of the odd numbers within an array, after cubing the initial integers. The function should return undefined if any of the values aren't numbers.

function cubeOdd(arr) {
  const areNumbers = (currentValue) => typeof currentValue === 'number';

  if (arr.every(areNumbers) === false) return undefined;

  const powArr = arr.map((x) => Math.pow(x, 3));
  const oddPowArr = powArr.filter((x) => x % 2 !== 0);
  const oddPowSumArr = oddPowArr.reduce((acc, curr) => acc + curr, 0);

  return oddPowSumArr;
}
