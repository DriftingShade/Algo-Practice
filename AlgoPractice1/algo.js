// 1. Countdown
// Create a function that accepts a number as an input.
// Return a new array that counts down by one, from the number (as array’s ‘zeroth’ element) down to 0 (as the last element).
// How long is this array?

const countdown = (num) => {
  let arr = [];
  for (let i = num; i >= 0; i--) {
    arr.push(i);
  }
  return arr;
};
console.log(countdown(5));
console.log(countdown(10));

// 2. Print and Return
// Your function will receive an array with two numbers. Print the first value, and return the second.

const printAndReturn = (arr) => {
  console.log(arr[0]);
  return arr[1];
};
console.log(printAndReturn([1, 2]));

// 3. First Plus Length
// Given an array, return the sum of the first value in the array, plus the array’s length.

const firstPlusLength = (arr) => {
  return arr[0] + arr.length;
};

console.log(firstPlusLength([1, 2, 3, 4, 5]));
console.log(firstPlusLength([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
