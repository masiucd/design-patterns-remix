/**
 *
 * @param {string} s
 * @returns {string}
 */
function panagram(s) {
  const alpha = 'abcdefghijklmnopqrstuvwxyz'.split('');
  const str = s
    .toLowerCase()
    .split('')
    .sort()
    .filter((val, index, self) => self.indexOf(val) === index && val !== ' ');

  let counter = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === alpha[i]) {
      counter++;
    }
  }

  return counter === 26 ? 'pangram' : 'not pangram';
}

console.log(
  panagram('We promptly judged antique ivory buckles for the next prize') // panagram
);
