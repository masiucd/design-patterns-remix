/**
 *
 * @param {Array} objects
 */
function getCount(objects) {
  let count = 0;
  for (const val of objects) {
    if (val.x === val.y) {
      count++;
    }
  }
  return count;
}

const xs = [
  { x: 1, y: 1 },
  { x: 2, y: 3 },
  { x: 3, y: 3 },
  { x: 3, y: 4 },
  { x: 4, y: 5 },
];
console.log(getCount(xs));
