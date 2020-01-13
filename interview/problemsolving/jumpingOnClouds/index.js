/* eslint-disable prefer-const */
/**
 *
 * @param {number[]} c
 * @returns {number}
 */
function jumpingOnClouds(c) {
  let steps = 0;
  let i = 0;
  // console.log(c.length - 1);
  while (i + 2 === c.length || i < c.length - 1) {
    if (c[i + 2] === 1) {
      i += 1;
      steps += 1;
    } else {
      i += 2;
      steps += 1;
    }
  }
  return steps;
}

// if 2 zeros in a row then jup one of the zeros
// never 2 ones in a row
// always a zero t the end

const x = [0, 0, 0, 0, 1, 0]; // 3
const y = [0, 0, 1, 0, 0, 1, 0]; // 4

console.log(jumpingOnClouds(x));
console.log(jumpingOnClouds(y));
