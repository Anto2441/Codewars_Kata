// Description:
// Given a number, write a function to output its reverse digits. (e.g. given 123 the answer is 321)

// Numbers should preserve their sign; i.e. a negative number should still be negative when reversed.

// Examples
//  123 ->  321
// -456 -> -654
// 1000 ->    1

function reverseNumber(n) {
  const isnegative = n < 0;
  const numberStr = Math.abs(n).toString();
  const reversedStr = numberStr.split('').reverse().join('');
  const reversedNum = Number(reversedStr);

  return isnegative ? -reversedNum : reversedNum;
}
