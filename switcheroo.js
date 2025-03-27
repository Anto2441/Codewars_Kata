// Given a string made up of letters a, b, and/or c, switch the position of letters a and b (change a to b and vice versa). Leave any incidence of c untouched.

// Example:

// 'acb' --> 'bca'
// 'aabacbaa' --> 'bbabcabb'

function switcheroo(x) {
  const arr = x.split('');
  let newArr = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 'a') newArr.push('b');
    else if (arr[i] === 'b') newArr.push('a');
    else newArr.push(arr[i]);
  }

  const switchString = newArr.join('');

  return switchString;
}
