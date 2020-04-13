/* eslint-disable prefer-const */
// s: an array of integers, the numbers on each of the squares of chocolate
// d: an integer, Ron's birth day
// m: an integer, Ron's birth month

const xs = [1, 2, 1, 3, 2];
const birthDay = 3;
const birthMonth = 2;

/**
 *
 * @param {number[]} s
 * @param {number} d
 * @param {number} m
 */
function birthdayFN(s, d, m) {
  // d amount of squares to give
  //  m how many of d amount is there in array
  // sliding window
  if (s.length === 0) return 0;
  let maxSum = 0;
  let count = 0;
  let tempsum;
  for (let i = 0; i < m; i++) {
    maxSum += s[i];
    if (maxSum === d) count++;
  }

  tempsum = maxSum;
  for (let i = m; i < s.length; i++) {
    tempsum = tempsum - s[i - m] + s[i];
    if (tempsum === d) count++;
  }

  return count;
}

let xs2 = '4 5 4 5 1 2 1 4 3 2 4 4 3 5 2 2 5 4 3 2 3 5 2 1 5 2 3 1 2 3 3 1 2 5'
  .split(' ')
  .map(x => Number(x));

// console.log(birthdayFN(xs, birthDay, birthMonth)); // 2
// console.log(birthdayFN(xs2, 18, 6)); // 6

function birhDayFN2(s, d, m) {
  let sum = (a, b) => a + b;
  let count = 0;
  for (let i = 0; i < s.length; i++) {
    let temp = s.slice(i, m + i);
    // console.log(i, temp);
    if (temp.reduce(sum) === d) count++;
  }
  return count;
}
console.log(birhDayFN2(xs2, 18, 6)); // 6
