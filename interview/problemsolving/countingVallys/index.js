/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
/* eslint-disable prefer-const */
/**
 *
 * @param {number} n
 * @param {string} s
 * @returns {number}
 */

function countingValleyX(n, s) {
  const min = 2;
  const max = 10 ** 6;
  let valleysCount = 0;
  let foundAValley = false;

  const strArray = s.split('');
  if (
    strArray.length >= min &&
    s.length <= max &&
    n >= min &&
    n <= max &&
    n === strArray.length
  ) {
    const stepsArray = s.split('').map(x => (x === 'U' ? 1 : -1));
    let path = 0;
    for (let val in stepsArray) {
      path += stepsArray[val];
      if (path < 0 && !foundAValley) {
        foundAValley = true;
      }
      if (path === 0 && foundAValley) {
        valleysCount += 1;
        foundAValley = false;
      }
    }
  }
  return valleysCount;
}
/**
 *
 * @param {number} n
 * @param {string} s
 * @returns {number}
 */

function countingValleys(n, s) {
  const min = 2;
  const max = 6000000;
  let foundValley = false;
  let valleyCount = 0;
  const strArr = s.split('');
  if (strArr.length >= min && strArr.length <= max && n >= min && n <= max) {
    s = s
      .split('')
      .map(x => (x === 'U' ? 1 : -1))
      .reduce((prev, next) => {
        if (prev < 0 && !foundValley) {
          foundValley = true;
        }
        if (prev + next === 0 && foundValley) {
          valleyCount += 1;
          foundValley = false;
        }
        return prev + next;
      });
  }
  return valleyCount;
}

console.log(countingValleys(8, 'UDDDUDUU'));
// U = Upp
// D = Down
// 8
// UDDDUDUU
