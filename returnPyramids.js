// The task is very simple: you must return pyramids. Given a number n, you build a pyramid with n floors

// For example , given a n=4 you must to print this pyramid:

//    /\
//   /  \
//  /    \
// /______\
// Other example, given a n=6 you must to print this pyramid:

//      /\
//     /  \
//    /    \
//   /      \
//  /        \
// /__________\
// Another example, given a n=10, you must to print this pyramid:

//          /\
//         /  \
//        /    \
//       /      \
//      /        \
//     /          \
//    /            \
//   /              \
//  /                \
// /__________________\
// Note: a line feed character is needed at the end of the string.

function returnPyramids(n) {
  let pyramid = '';

  for (let i = 0; i < n; i++) {
    const leadingSpaces = ' '.repeat(n - 1 - i);
    let line = '';

    if (i === 0) {
      line = leadingSpaces + '/\\';
    } else if (i === n - 1) {
      const underscores = '_'.repeat(2 * i);
      line = leadingSpaces + '/' + underscores + '\\';
    } else {
      const innerSpaces = ' '.repeat(2 * i);
      line = leadingSpaces + '/' + innerSpaces + '\\';
    }

    pyramid += line + '\n';
  }

  return pyramid;
}