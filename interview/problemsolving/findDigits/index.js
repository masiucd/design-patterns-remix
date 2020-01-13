/**
 *
 * @param {number} n
 */
const findDigits = n => {
  let count = 0;

  const numArr = n
    .toString()
    .split('')
    .map(Number);

  for (let i = 0; i < numArr.length; i += 1) {
    if (n % numArr[i] === 0) {
      count += 1;
    }
  }

  return count;
};

console.log(findDigits(12)); // 2
console.log(findDigits(1012)); // 3
