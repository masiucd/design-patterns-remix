/* eslint-disable prefer-const */
/**
 *
 * @param {string} s
 * @param {number} n
 * @return {number}
 */
function repeatedString(s, n) {
  // let res = s.split('').filter(x => x === 'a').length;
  // const times = n / s.length;
  // const rest = n % s.length;
  // const total =
  //   times * res +
  //   s
  //     .slice(0, rest)
  //     .split('')
  //     .filter(x => x === 'a').length;

  // return total;

  let as = s.split('').filter(x => x === 'a').length;
  as =
    parseInt(n / s.length, 0) * as +
    s
      .slice(0, n % s.length)
      .split('')
      .filter(i => i === 'a').length;
  return as;
}

console.log(repeatedString('aba', 10));
