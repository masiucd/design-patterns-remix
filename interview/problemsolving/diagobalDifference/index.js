const arr = [
  [11, 2, 4],
  [4, 5, 6],
  [10, 8, -12],
];

/**
 *
 * @param {number[][]} matrix
 * @returns {number}
 */
function diagonalDifference(matrix) {
  let rightDiagonal = 0;
  let leftDiagonal = 0;
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix.length; j++) {
      // console.log('i :', i, 'j :', j);
      // console.log(i === j ? 'Yes' : 'Boo');
      if (i === j) {
        rightDiagonal += matrix[i][j];
      }
      if (i + j === matrix.length - 1) {
        leftDiagonal += matrix[i][j];
      }
    }
  }
  const a = matrix.reduce((a, b, index, _) => {
    console.log(a[index]);
    console.log(b);
  });
  return a;

  // return Math.abs(rightDiagonal - leftDiagonal);
}

console.log(diagonalDifference(arr));
