/**
 *
 * @param {number[]} arr
 * @returns {number}
 */
const birthdayCakeCandles = arr => {
  const sorted = arr.sort((a, b) => a - b);
  const highestValue = sorted.filter(x => x === sorted[sorted.length - 1]);

  return highestValue.length;
};

console.log(birthdayCakeCandles([3, 2, 1, 3])); // 2

/**
 * Explanation 0

We have one candle of height , one candle of height ,
and two candles of height . Your niece only blows out the tallest candles
, meaning the candles where . Because there are  such candles,
we print  on a new line.
 */
