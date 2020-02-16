/* eslint-disable prefer-const */
/**
 *
 * @param {number[]} arr
 * @returns {number}
 */
const fn = arr => {
  let max = Math.max(...arr);
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === max) {
      count += 1;
    }
  }
  return count;
};

console.log(fn([3, 2, 1, 3]));
console.log(fn([3, 2, 1, 3, 3]));
console.log(fn([3, 2, 1, 3, 3, 4])); // 1
