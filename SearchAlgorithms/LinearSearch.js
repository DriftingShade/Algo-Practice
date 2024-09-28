// Given an array of n elements and a target element t, find the index of t in the array.  Return -1 if the target element is not found.
// Linear search is the simplest search algorithm.  It is a brute-force algorithm that compares the target element with each element in the array.

function linearSearch(arr, t) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === t) {
      return i;
    }
  }
  return -1;
}

console.log(linearSearch([-5, 2, 10, 4, 6], 10)); // 2
console.log(linearSearch([-5, 2, 10, 4, 6], 6)); // 4
console.log(linearSearch([-5, 2, 10, 4, 6], 20)); // -1

// Time complexity: O(n)
// Space complexity: O(1)
