// Given a sorted array of 'n' elements and a target element of 't', find the index of 't' in the array.  Return -1 if the target element is not in the array.
// This will be the recursive solution to this problem.

function recursiveBinarySearch(arr, target) {
  return search(arr, target, 0, arr.length - 1);
}

function search(arr, target, leftIndex, rightIndex) {
  if (leftIndex > rightIndex) {
    return -1;
  }

  let middleIndex = Math.floor((leftIndex + rightIndex) / 2);
  if (target === arr[middleIndex]) {
    return middleIndex;
  }

  if (target < arr[middleIndex]) {
    return search(arr, target, leftIndex, middleIndex - 1);
  } else {
    return search(arr, target, middleIndex + 1, rightIndex);
  }
}

console.log(recursiveBinarySearch([-5, 2, 4, 6, 10], 10)); // 4
console.log(recursiveBinarySearch([-5, 2, 4, 6, 10], 6)); // 3
console.log(recursiveBinarySearch([-5, 2, 4, 6, 10], 20)); // -1

// Time complexity: O(log n)
// Space complexity: O(log n)
// The space complexity is O(log n) because the recursive calls are stored on the call stack.  The space complexity can be reduced to O(1) by using the iterative solution provided in BinarySearch.js.
