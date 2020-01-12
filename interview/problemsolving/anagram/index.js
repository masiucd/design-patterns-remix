/**
 *
 * @param {string} s
 * @returns {number}
 */
function anagram(s) {
  const map = s.split('').reduce((obj, char) => {
    if (!obj[char]) {
      obj[char] = 1;
    } else {
      obj[char] += 1;
    }
    return obj;
  }, {});

  for (const [key, val] of Object.entries(map)) {
  }
}

console.log(anagram('aaabbb')); // 3
console.log(anagram('ab')); // 1
console.log(anagram('abc')); // -1
