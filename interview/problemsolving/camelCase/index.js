/* eslint-disable prefer-const */
/**
 *
 * @param {string} s
 * @return {number}
 */
function camelcase(s) {
  let counter = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === s[i].toUpperCase()) {
      counter += 1;
    }
  }
  return counter + 1;
}
console.log(camelcase('saveChangesInTheEditor'));
// saveChangesInTheEditor = 5
