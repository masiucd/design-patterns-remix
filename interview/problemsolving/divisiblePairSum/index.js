/* eslint-disable prefer-const */
/**
 *
 * @param {number} n integr length of array AR
 * @param {number} k integer to divide by pair sum
 * @param {number[]} ar  array of integer
 */
function divisibleSumPairs(n, k, ar) {
  // let counter = 0;
  // let x = [];
  // for (let i = 0; i < ar.length; i++) {
  //   console.log(ar[i] % k);
  //   x.push(ar[i] % k);
  // }

  // console.log(x);
  // return counter;

  let res = 0;
  for (let i = 0; i < ar.length; i++) {
    for (let j = i + 1; j < ar.length; j++) {
      if ((ar[i] + ar[j]) % k === 0) {
        res += 1;
      }
    }
  }
  return res;
}

const a = [1, 3, 2, 6, 1, 2]; // 5
console.log(divisibleSumPairs(6, 3, a));
