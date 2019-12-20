/* eslint-disable prefer-const */
/**
 *
 * @param {string} s
 * @param {number} n
 * @return {number}
 */
function repeatedString(s, n) {
  let res = s.split('').filter(x => x === 'a').length;
  const times = n / s.length;
  const rest = n % s.length;
  const total =
    times * res +
    s
      .slice(0, rest)
      .split('')
      .filter(x => x === 'a').length;

  return total;
}

console.log(repeatedString('aba', 10));
