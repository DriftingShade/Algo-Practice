// Every recusive solution needs to have a base case - a condition that stops the recursion

// Given a number n, return the nth number in the Fibonacci sequence

// Recursive solution

function recursiveFibonacci(n) {
  if (n < 2) {
    return n;
  }
  return recursiveFibonacci(n - 1) + recursiveFibonacci(n - 2);
}

console.log(recursiveFibonacci(0)); // 0
console.log(recursiveFibonacci(1)); // 1
console.log(recursiveFibonacci(6)); // 8

// Recursive Time Complexity: O(2^n)
// Iterative Time Complexity: O(n)
