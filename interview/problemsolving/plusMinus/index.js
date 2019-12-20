/**
 *
 * @param {number[]} arr
 * @return {number}
 */
function plusMinus(arr) {
  const size = arr.length || 0;
  let p = 0;
  let n = 0;
  let natural = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      p += 1;
    }
    if (arr[i] < 0) {
      n += 1;
    }
    if (arr[i] === 0) {
      natural += 1;
    }
  }

  console.log(p / size || 0);
  console.log(n / size || 0);
  console.log(natural / size || 0);

  // const res = {
  //   positive: p / size,
  //   negative: n / size,
  //   natural: natural / size,
  // };

  // ;
}

console.log(plusMinus([-4, 3, -9, 0, 4, 1]));
/**
 * Sample Input

6
-4 3 -9 0 4 1
Sample Output

0.500000
0.333333
0.166667
Explanation

There are  positive numbers,  negative numbers, and  zero in the array.
The proportions of occurrence are positive: , negative:  and zeros: .
 */
