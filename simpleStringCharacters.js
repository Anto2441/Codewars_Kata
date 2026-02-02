function solve(str) {
  const result = {
    uppercase: [],
    lowercase: [],
    numbers: [],
    special: [],
  };

  for (const char of str) {
    const code = char.charCodeAt(0);

    if (code >= 65 && code <= 90) {
      result.uppercase.push(char);
    } else if (code >= 97 && code <= 122) {
      result.lowercase.push(char);
    } else if (code >= 48 && code <= 57) {
      result.numbers.push(char);
    } else {
      result.special.push(char);
    }
  }

  return [
    result.uppercase.length,
    result.lowercase.length,
    result.numbers.length,
    result.special.length,
  ];
}
