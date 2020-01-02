/**
 *
 * @param {number} k
 * @param {number[]} a
 * @returns {string}
 */
function angryProfessor(k, a) {
  let counter = 0;
  const positive = a.filter(x => x >= 0);
  for (const val of a) {
    if (val >= 0) {
      counter++;
    }
  }
  if (counter >= k || k === positive.length) {
    return 'NO';
  }
  return 'YES';
}

console.log(angryProfessor(2, [4, 3]));
console.log(angryProfessor(6, [-1, -1, 0, 0, 1, 1]));
// k: the threshold number of students
// a: an array of integers representing arrival times
