/* eslint-disable prefer-const */
/**
 *
 * @param {string} s
 * @returns {string}
 */
const hackerRank = s => {
  // if (s.length === 0) return 'NO';
  // let matchingWord = 'hackerrank'.split('');
  // let strLength = matchingWord.length;
  // let inputMap = {};
  // let count = 0;
  // let i = 0;

  // for (let val of s) {
  //   inputMap[val] = (inputMap[val] || 0) + 1;
  // }

  // for (let [val, key] of Object.entries(inputMap)) {
  //   // console.log('val ', val, 'key ', key);

  //   if (matchingWord.includes(val)) {
  //     count++;
  //   }
  // }

  // console.log(count);
  let match = 'hackerrank';
  let index = 0;
  for (let i = 0; i < s.length; i++) {
    if (s.charAt(i) === match.charAt(index)) {
      index++;
    }
    if (index === match.length) {
      return 'YES';
    }
  }
  return 'NO';
};

const a = 'hhaacckkekraraannk'; // YES
const b = 'rhbaasdndfsdskgbfefdbrsdfhuyatrjtcrtyytktjjt'; // NO

console.log(hackerRank(a));
console.log(hackerRank(b));
