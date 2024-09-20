// Time complexity: O(n) - linear time complexity - number of operations increases linearly with the input size
function summation(n) {
  let sum = 0; // Execute once
  for (let i = 1; i <= n; i++) {
    sum += i; // Execute n times
  }
  return sum; // Execute once
}

// Time complexity: O(1) - constant time complexity - no matter the input size, the number of operations remains constant
function summation2(n) {
  return (n * (n + 1)) / 2; // Execute once
}

// Quadratic time complexity - O(n^2) - 2 nested loops - number of operations increases quadratically with the input size
for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= i; j++) {
    console.log(i, j);
  }
}

// Cubic time complexity - O(n^3) - 3 nested loops - number of operations increases cubically with the input size
for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= i; j++) {
    for (let k = 1; k <= j; k++) {
      console.log(i, j, k);
    }
  }
}

// Logarithmic time complexity - O(log n) - Input is halved in each iteration
let i = 1;
while (i < n) {
  console.log(i);
  i *= 2;
}

// Multiple algorithms exist for the same problem and there is no ONE right solution.  Differetn algorithms work well under different constraints.

// The same algorithm with the same programming language can be implemented in different ways.  The choice of implementation can affect the performance of the algorithm.

// When writing programs at work, don't lose sight of the big picture!  Rather than writing clever code, focus on writing code that is easy to understand and maintain.
