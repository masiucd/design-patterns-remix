// /**
//  * @param {number[]} arr
//  * @returns {number[]}
//  */

// const bubbleSort = arr => {
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr.length; j++) {
//       let leftHand;
//       if (arr[j] > arr[j + 1]) {
//         leftHand = arr[j];
//         arr[j] = arr[j + 1];
//         arr[j + 1] = leftHand;
//       }
//     }
//   }
//   return arr;
// };

/**
 *
 * @param {number[]} arr
 * @param {number} indx1
 * @param {number} indx2
 */
const swap = (arr, indx1, indx2) =>
  ([arr[indx1], arr[indx2]] = [arr[indx2], arr[indx1]]);
/**
 * @param {number[]} arr
 * @returns {number[]}
 */

const bubbleSort = arr => {
  for (let i = arr.length; i > 0; i--) {
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
      }
    }
  }
  return arr;
};

console.log(bubbleSort([9, 7, -2, 3, 6, 4, 2, 1]));
