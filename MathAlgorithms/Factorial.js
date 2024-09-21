// Factorial of a number
// Problem - Given the number n, find the factorial of n.

function factorial(n) {
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result = result * i;
  }
  return result;
}
console.log(factorial(5));
// Time Complexity: O(n)
// Space Complexity: O(1)
