/* eslint-disable prefer-const */
/**
 *
 * @param {number} n size of array
 * @param {number[]} arr
 * @returns {number[]}
 */
function insertionSort1(n, arr) {
  // eslint-disable-next-line prefer-const
  let num = 0;
  let pos = 0;
  let sorted = 1;

  for (let i = 0; i < n; i++) {
    if (arr[i + 1] < arr[i]) {
      // console.log(arr[i + 1]);
      num = arr[i + 1];
      pos = i;
      break;
      // console.log(pos);
      // console.log(num);
    }
  }
  while (sorted !== 0) {
    arr[pos + 1] = arr[pos];
    if (num < arr[pos - 1]) {
      pos -= 1;
      continue;
    }
    arr[pos] = num;
    sorted = 0;
  }
  return arr;
}

const x = [2, 4, 6, 8, 3];

console.log(insertionSort1(5, x));
