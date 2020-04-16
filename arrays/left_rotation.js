/**
 *
 * @param {number} a
 * @param {number} d
 */
function leftRotation(a, d) {
  const arr = [];
  for (let i = 1; i <= a; i++) {
    arr.push(i);
  }
  for (let i = 0; i < d; i++) {
    const drooped = arr.shift();
    arr.push(drooped);
  }

  return arr;
}
/**
 *
 * @param {number[]} a
 * @param {number} d
 */
function main(a, d) {
  for (let i = 0; i < d; i++) {
    const x = a.shift();
    a.push(x);
  }
  return a;
}
