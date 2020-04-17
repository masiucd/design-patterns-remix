/* eslint-disable prefer-const */
function revereInt(n: number) {
  return Number(
    n
      .toString()
      .split('')
      .reverse()
      .join('')
  );
}

function beautifulDays(i: number, j: number, k: number) {
  // how many days from start to end
  let days = j - i;
  let beautiful = 0;
  let current = i;
  for (let x = 0; x <= days; x++) {
    let b = Math.floor(current - revereInt(current)) / k;
    if (b % 1 === 0) beautiful += 1;
    current++;
  }

  return beautiful;
}

// console.log(beautifulDays(20, 23, 6));
console.log(beautifulDays(13, 45, 3));
// start end divisor

// let reversed = Number(
//   i
//     .toString()
//     .split('')
//     .reverse()
//     .join('')
// );

// console.log(reversed);
