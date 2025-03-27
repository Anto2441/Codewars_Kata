// Given a mixed array of number and string representations of integers, add up the non-string integers and subtract the total of the string integers.

// Return as a number.

function divCon(arr) {
  const intArr = arr.filter((x) => typeof x === 'number');
  const strArr = arr.filter((x) => typeof x === 'string').map((x) => Number(x));

  const sumInt = intArr.reduce((acc, curr) => acc + curr, 0);
  const sumStr = strArr.reduce((acc, curr) => acc + curr, 0);

  const result = sumInt - sumStr;

  return result;
}
