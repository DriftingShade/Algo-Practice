// Fibonacci Sequence
// Problem - Given the number n, find the first n elements of the Fibonacci sequence.

function fibonacci(n) {
  const fib = [0, 1];
  for (let i = 2; i < n; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
  }
  return fib;
}

console.log(fibonacci(10));
// Space Complexity: O(n)
// Time Complexity: O(n)
// The space complexity is O(n) because we are storing the first n elements of the Fibonacci sequence in an array. The time complexity is O(n) because we are iterating n times to calculate the Fibonacci sequence.
