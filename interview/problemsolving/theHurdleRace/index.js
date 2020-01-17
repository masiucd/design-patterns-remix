/**
 *
 * @param {number} k
 * @param {number[]} height
 * @returns {number}
 */
function hurdleRace(k, height) {
  let max = 0;
  for (let i = 0; i < height.length; i++) {
    if (max < height[i]) {
      max = height[i];
    }
  }

  if (k > max) return 0;
  return max - k;
}
console.log(hurdleRace(4, [1, 6, 3, 5, 2])); // 2
console.log(hurdleRace(7, [2, 5, 4, 5, 2]));
