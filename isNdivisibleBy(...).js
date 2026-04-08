// Description:
// Create a function that checks if the first argument n is divisible by all other arguments (return true if no other arguments)

// Example:

// (6,1,3)--> true because 6 is divisible by 1 and 3
// (12,2)--> true because 12 is divisible by 2
// (100,5,4,10,25,20)--> true
// (12,7)--> false because 12 is not divisible by 7

function isDivisible() {
  const args = Array.from(arguments);
  const firstElement = args.shift();

  let newArray = [];

  for (let k of args) {
    if (k !== 0 && firstElement % k === 0) newArray.push(true);
    else newArray.push(false);
  }

  const allTrue = newArray.every(Boolean);

  return allTrue;
}
