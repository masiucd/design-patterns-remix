/* eslint-disable prefer-const */
/**
 *
 * @param {number} n
 */
function utopianTree(n) {
  let height = 1; // initial height of the tree

  for (let i = 1; i <= n; i++) {
    if (i % 2 !== 0) {
      height *= 2;
    } else {
      height += 1;
    }
  }
  return height;
}

console.log(utopianTree(5));

// Period  Height
// 0          1
// 1          2
// 2          3
// 3          6
// 4          7
// 5          14
