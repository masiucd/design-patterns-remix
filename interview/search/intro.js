/**
 *
 * @param {number[]} arr
 * @param {number} V
 * @returns {number}
 */
function introTutorial(arr, V) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === V) return i;
  }
}

console.log(introTutorial([1, 4, 5, 7, 9, 12], 4)); // 1
