function countSwaps(arr) {
  let swaps = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] > arr[j + 1]) {
        swaps += 1;
        const temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }

  return swaps;
}

console.log(countSwaps([6, 5, 3, 22, 1, 0, 99, -2, 1]));
