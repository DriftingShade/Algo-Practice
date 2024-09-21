// Given a positive integer n, find if it is a power of two or not.

function isPowerOfTwoBitWise(n) {
  if (n < 1) {
    return false;
  }
  return (n & (n - 1)) === 0;
}
// isPowerOfTwoBitWise() Complexity Analysis
// Time Complexity: O(1)
// Space Complexity: O(1)

// function isPowerOfTwo(n) {
//   if (n < 1) {
//     return false;
//   }
//   while (n > 1) {
//     if (n % 2 !== 0) {
//       return false;
//     }
//     n = n / 2;
//   }
//   return true;
// }

console.log(isPowerOfTwoBitWise(1)); // true
console.log(isPowerOfTwoBitWise(16)); // true
console.log(isPowerOfTwoBitWise(218)); // false

// isPowerOfTwo() Complexity Analysis
// Time Complexity: O(log n)
// Space Complexity: O(1)
// The time complexity of the isPowerOfTwo function is O(log n) because we are dividing the number by 2 in each iteration until it becomes 1. The space complexity is O(1) because we are using a constant amount of space.
