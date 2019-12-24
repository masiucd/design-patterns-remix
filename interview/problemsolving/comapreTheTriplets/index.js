/**
 *
 * @param {number[]} a
 * @param {number[]} b
 * @returns {number[]}
 */
function compareTriplets(a, b) {
  const player1 = [];
  const player2 = [];

  for (let i = 0; i < a.length; i += 1) {
    if (a[i] > b[i]) {
      player1.push(a[i]);
    }
    if (b[i] > a[i]) {
      player2.push(b[i]);
    }
  }

  return [player1.length, player2.length];
}

console.log(compareTriplets([5, 6, 7], [3, 6, 10]));
console.log(compareTriplets([17, 28, 30], [99, 16, 8]));
/**
 * Sample Input 1

17 28 30
99 16 8
Sample Output 1

2 1
 */

/**
  * Sample Input 0

5 6 7
3 6 10
Sample Output 0

1 1
  */
