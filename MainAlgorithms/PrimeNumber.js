// Given a natural number n, find if it is a prime number or not.
// A prime number is a number that is greater than 1 and has no divisors other than 1 and itself.

function isPrime(n) {
  if (n < 2) {
    return false;
  }
  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}

console.log(isPrime(5)); // true
console.log(isPrime(6)); // false
console.log(isPrime(11)); // true
// Time Complexity: O(n)
// Space Complexity: O(1)
// The time complexity of the isPrime function is O(n) because we are iterating from 2 to n to check if n is divisible by any number.
