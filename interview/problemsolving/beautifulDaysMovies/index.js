/* eslint-disable prefer-const */
/**
 *
 * @param {number} i  the starting day number
 * @param {number} j the ending day number
 * @param {number} k the divisor
 */
function beautifulDays(i, j, k) {
  const arr = [];
  for (let inx = i; inx <= j; inx++) {
    arr.push(inx);
  }
  let d = 0;
  for (let idx = 0; idx < arr.length; idx++) {
    let prev = arr[idx];
    let reversedNum = arr[idx]
      .toString()
      .split('')
      .reverse()
      .join('');

    reversedNum = parseInt(reversedNum);

    if (
      ((prev - reversedNum) / 2) % 2 === 0 ||
      ((prev - reversedNum) / 2) % 3 === 0
    ) {
      d += 1;
    }
  }
  return d;
  // let t = i
  //   .toString()
  //   .split('')
  //   .reverse()
  //   .join('');
  // let res = (i - t) / 6;
  // if (res % 2 === 0 || res % 3 === 0) {
  //   d += 1;
  // }
  // return beautifulDays;
}

console.log(beautifulDays(20, 23, 6));
