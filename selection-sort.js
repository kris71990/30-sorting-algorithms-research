'use strict';

/* Selection Sort
Big O:
  T - O(n^2)
  S - O(1)
*/

const selectionSort = (arr) => {
  if (!(arr instanceof Array)) return undefined;

  for (let i = 0; i < arr.length - 1; i++) {
    let index = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[index]) index = j;
    }
    const temp = arr[index];
    arr[index] = arr[i];
    arr[i] = temp;
  }
  return arr;
};

const test = selectionSort([1, 24, 2, 1, 12, 8, 5, 4, 3]);
console.log(test); // [ 1, 1, 2, 3, 4, 5, 8, 12, 24 ]
