/* Insertion Sort
Big O:
  T - O(n^2)
  S - O(1)
*/

const insertionSort = (arr) => {
  for (let i = 1; i < arr.length; i++) {
    let curr = arr[i];
    let prev = i - 1;

    while (prev >= 0 && curr < arr[prev]) {
      arr[prev + 1] = arr[prev];
      prev -= 1;
    }
    arr[prev + 1] = curr;
  }
  return arr;
};

const test = insertionSort([8, 5, 1, 0, 7, 3, 9]);
console.log(test); // [ 0, 1, 3, 5, 7, 8, 9 ]
