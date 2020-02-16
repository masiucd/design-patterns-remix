/* eslint-disable prefer-const */
/**
 *
 * @param {number[]} arr
 */
function equalizeArray(arr) {
  let trashCan = [];
  let mostAcuurentNumber = 0;
  let numFrequency = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === arr[i + 1]) {
      numFrequency = arr[i];
    }
  }

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== numFrequency) {
      trashCan.push(arr[i]);
    }
  }
  // console.log(numFrequency);
  // console.log(trashCan);

  return trashCan.length;
}

console.log(equalizeArray([3, 3, 2, 1, 3]));

/**
 * Loop through the array to se what number is the most frequent
 * find it and store it in a variable
 */
