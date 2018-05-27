'use strict';

/* Insertion Sort
Big O:
  T - O(n^2)
  S - O(1)
*/

const insertionSort = (arr) => {
  if (!(arr instanceof Array)) return undefined;
  const l = arr.length;

  for (let i = 1; i < l; i++) {
    const curr = arr[i];
    let prev = i - 1;

    while (prev >= 0 && curr < arr[prev]) {
      arr[prev + 1] = arr[prev];
      prev -= 1;
    }
    arr[prev + 1] = curr;
  }
  return arr;
};

const test = insertionSort([1, 7, 10, 22, 3, 6, 1, 18, 12]);
console.log(test); // [ 1, 1, 3, 6, 7, 10, 12, 18, 22 ]
