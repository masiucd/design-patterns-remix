/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
/* eslint-disable prefer-const */
/**
 *
 * @param {number} n
 * @param {string} s
 * @returns {number}
 */

function countingValleys(n, s) {
  const min = 2;
  const max = 1000000;
  let findValley = false;
  let valleysCount = 0;
  if (n < min || n > max) return undefined;

  const strArray = typeof s === 'string' ? s.split('') : '';
  const numArray = s.split('').map(x => (x === 'U' ? 1 : -1));

  if (
    s.length >= min &&
    s.length <= max &&
    n >= min &&
    n <= max &&
    n === strArray.length
  ) {
    let path = 0;
    for (let i = 0; i < numArray.length; i += 1) {
      path += numArray[i];
      if (path < 0 && !findValley) {
        findValley = true;
      }
      if (path === 0 && findValley) {
        valleysCount += 1;
        findValley = false;
      }
    }
  }
  return valleysCount;
}

console.log(countingValleys(8, 'UDDDUDUU')); // 1
// U = Upp
// D = Down
// 8
// UDDDUDUU
