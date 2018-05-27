# Basic Sorting

**Author**: Kris Sakarias

**Version**: 1.0.0 

## Overview
Three basic sorting algorithms are implemented in this repo
  1. Insertion Sort
  2. Selection Sort
  3. Bubble Sort

### Algorithms
**Insertion Sort** - Airity of 1 (Array)

In an insertion sort, the algorithm iterates through the array input and compares values of a current index with previous indices until it finds the proper place to insert the value. As the iteration continues in place, this produces a growing sorted array. If the input is not an array, it returns undefined.

*Complexity*: 
```
Time - O(n^2)
Space - O(1)
```

**Selection Sort** - Airity of 1 (Array)

In a selection sort, the algorithm creates two subarrays (sorted and unsorted). It searches the unsorted subarray to find the smallest value and then swaps it into the correct position in the sorted subarray. If input is not an array, it returns undefined.

*Complexity*: 
```
Time - O(n^2)
Space - O(1)
```


**Bubble Sort** - Airity of 1 (Array)

The bubble sort iterates through an array and compares two adjacent values, which are then swapped if they are not in order. It continues through the array and subsequent iterations doing the same thing until no swaps are needed. If no input is given, it returns undefined.

*Complexity*: 
```
Time - O(n^2)
Space - O(1)
```


#### Documentation

`git clone https://github.com/kris71990/30-sorting-algorithms-research.git`

`node bubble-sort.js`

`node selection-sort.js`

`node insertion-sort.js`
