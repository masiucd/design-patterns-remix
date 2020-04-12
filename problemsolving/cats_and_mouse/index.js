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
  if (x > y && x < z) winningStr = 'Cat A';
  if (y > x && y < z) winningStr = 'Cat B';
  if (z > x && z < y) winningStr = 'Mouse C';

  return winningStr;
}

console.log(catsAndMouse(1, 2, 3));
console.log(catsAndMouse(1, 3, 2));
