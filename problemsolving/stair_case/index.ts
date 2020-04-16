/* eslint-disable prefer-const */
// #
// ##
// ###
// ####
// #####
// ######
// height of 6
// width of 6
function staircase(n: number) {
  let height = n;
  for (let i = 0; i < height; i++) {
    let row = '';
    for (let j = 0; j < height; j++) {
      if (i + j > height - 2) {
        row += '#';
      } else {
        row += ' ';
      }
    }
    console.log(row);
  }
}

console.log(staircase(6));
// #
// ##
// ###
// ####
// #####
// ######
