// A number is called Automorphic number if and only if its square ends in the same digits as the number itself. For example, 25 is an automorphic number because its square (625) ends with 25.

// Task
// Given a positive number, determine if it is Automorphic or not. If it is, return "Automorphic", otherwise return "Not!!"

// Examples
// isAutomorphic(25)   => "Automorphic"
// isAutomorphic(6)    => "Not!!"
// isAutomorphic(81)   => "Automorphic"
// isAutomorphic(1634) => "Not!!"
// */

function automorphic(n) {
  const str = n.toString();
  const square = n ** 2;
  const squareEnd = square.toString().slice(-str.length);

  if (n.toString() === squareEnd) return 'Automorphic';
  else return 'Not!!';
}
