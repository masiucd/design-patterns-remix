/* eslint-disable prefer-const */
const res1 = [10, 5, 20, 20, 4, 5, 2, 25, 1]; // 2 4
const res2 = [3, 4, 21, 36, 10, 28, 35, 5, 24, 42]; // 4 0

/**
 *
 * @param {number[]} scores
 * @returns {number[]}
 */
function breakingRecords(scores) {
  let low = 0;
  let high = 0;
  let [currentMin, currentMax] = scores;
  for (let i = 1; i < scores.length; i++) {
    if (scores[i] > currentMax) {
      currentMax = scores[i];
      high += 1;
    }
    if (scores[i] < currentMin) {
      currentMin = scores[i];
      low += 1;
    }
  }

  return [high, low];

  // let map = {};
  // for (let score of scores) {
  //   map[score] = (map[score] || 0) + 1;
  // }

  // // console.log(map);

  // for (let [key, val] of Object.entries(map)) {
  //   // console.log('KEY:', key, 'VAL:', val);

  // }
  // return [high, low];
}

console.log(breakingRecords(res1));
