/* eslint-disable prefer-const */
// /**
//  *
//  * @param {number[]} arr
//  * @return {number}
//  */
// function miniMaxSum(arr) {
//   const sortArr = arr.sort((a, b) => a - b);
//   const minSubArr = sortArr.filter(x => x <= sortArr.length - 1);
//   const maxSubArray = sortArr.filter(x => x > sortArr[0]);

//   const minSum = minSubArr.reduce((a, b) => a + b);
//   const maxSum = maxSubArray.reduce((a, b) => a + b);

//   console.log(minSum, maxSum);
// }

// /**
//  *
//  * @param {number[]} arr
//  * @return {number}
//  */
// function miniMaxSum(arr) {
//   const sortedArr = arr.sort((a, b) => a - b);

//   const minArr = sortedArr.slice(0, sortedArr.length - 1);
//   const maxArr = sortedArr.slice(1);

//   const minArr = minArr.reduce((a, b) => a + b, 0);
//   const maxArr = maxArr.reduce((a, b) => a + b, 0);

//   console.log(`${minRes} ${maxRes}`);

// }
/**
 *
 * @param {number[]} arr
 * @return {string}
 */
function miniMaxSum(arr) {
  const sortedArr = arr.sort((a, b) => a - b);

  const minArr = sortedArr
    .slice(0, sortedArr.length - 1)
    .reduce((a, b) => a + b, 0);
  const maxArr = sortedArr.slice(1).reduce((a, b) => a + b, 0);

  console.log(`${minArr} ${maxArr}`);

  return `${minArr} ${maxArr}`;
}

console.log(miniMaxSum([1, 2, 3, 4, 5]));
