/* eslint-disable prefer-const */
function sticksCount(arr: number[]) {
  let res = [];
  // get the length

  let len = arr.length;
  let min = arr.sort((a, b) => a - b)[0];
  let max = 0;
  for (let i = 0; i < len; i++) {
    if (max < arr[i]) {
      max = arr[i];
      arr[i] -= min;
      res.push(arr[i]);
      min = Math.min(arr[i]);
      console.log(min);
    }
    len = arr.length;
  }

  console.log(res);
  // find the lowest value
  // subtract the lowest value with the rest of nums in array
  // push the highest in new array
}

// const sticks = [5, 4, 4, 2, 2, 8];
const sticks = [1, 2, 3];

console.log(sticksCount(sticks));
