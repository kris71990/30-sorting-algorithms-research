'use strict';

/* Bubble Sort
Big O:
  T - O(n^2)
  S - O(1)
*/

const bubbleSort = (arr) => {
  if (!(arr instanceof Array)) return undefined;
  const l = arr.length;

  for (let i = 0; i < l - 1; i++) {
    for (let j = 0; j < l - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        const temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
};

const test = bubbleSort([1, 7, 4, 9, 2, 11, 3, 9, 24, 5]);
console.log(test); // [ 1, 2, 3, 4, 5, 7, 9, 9, 11, 24 ]
