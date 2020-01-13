/* eslint-disable prefer-const */
/**
 *
 * @param {number[]} arr
 * @returns {number[]}
 *
 */
const countingSort = arr => {
  let map = {};
  let res = [];

  let m = arr.reduce((obj, val) => {
    if (!obj[val]) {
      obj[val] = 1;
    } else {
      obj[val] += 1;
    }
    return obj;
  }, {});

  for (let [key, val] of Object.entries(m)) {
    res.push(val);
  }

  return res;
};
const x = [63, 25, 73, 1, 98, 73, 56, 84, 86, 57, 16, 83, 8, 25, 81, 56];
console.log(countingSort(x));
