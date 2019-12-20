/* eslint-disable prefer-const */
/**
 *
 * @param {number} n
 * @return {string}
 */

function staircase(n) {
  for (let row = 0; row <= n; row++) {
    let spaces = '';
    for (let col = n; col >= 1; col--) {
      if (row > col) {
        spaces += '#';
      } else {
        spaces += ' ';
      }
    }
    console.log(spaces);
  }
}

console.log(staircase(6));
