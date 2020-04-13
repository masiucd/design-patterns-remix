// x: an integer, Cat 's position
// y: an integer, Cat 's position
// z: an integer, Mouse 's position
/**
 *
 * @param {number} x
 * @param {number} y
 * @param {number} z
 */
function catsAndMouse(x, y, z) {
  let winningStr = '';
  const diff1 = Math.abs(x - z);
  const diff2 = Math.abs(y - z);
  if (diff1 < diff2) {
    winningStr = 'Cat A';
  } else if (diff2 < diff1) {
    winningStr = 'Cat B';
  } else {
    winningStr = 'Mouse C';
  }

  return winningStr;
}

console.log(catsAndMouse(1, 2, 3));
console.log(catsAndMouse(1, 3, 2));
