/**
 *
 * @param {number[]} arr
 * @param {number} elem
 * @returns {number}
 */
const binarySearch = (arr, elem) => {
  let start = 0;
  let end = arr.length - 1;
  let middle = Math.floor((start + end) / 2);

  while (arr[middle] !== elem && start <= end) {
    if (elem > arr[middle]) {
      start = middle + 1;
    } else {
      end = middle - 1;
    }
    middle = Math.floor((start + end) / 2);
  }
  return arr[middle] === elem ? middle : -1;
};

console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14], 3));
