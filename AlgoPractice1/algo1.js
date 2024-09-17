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

// 4. Values Greater than Second
// For [1,3,5,7,9,13], print values that are greater than its 2nd value. Return how many values this is.
let arr = [1, 3, 5, 7, 9, 13];
const valuesGreaterThanSecond = (arr) => {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > arr[1]) {
      count++;
    }
  }
  return count;
};
console.log(valuesGreaterThanSecond(arr));

// 5. Values Greater than Second, Generalized
// Write a function that accepts any array, and returns a new array with the array values that are greater than its 2nd value. Print how many values this is.

const valuesGreaterThanSecondGeneralized = (arr) => {
  let count = 0;
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > arr[1]) {
      count++;
      newArr.push(arr[i]);
    }
  }
  console.log(count);
  return newArr;
};
console.log(valuesGreaterThanSecondGeneralized([1, 3, 5, 7, 9, 13]));
console.log(
  valuesGreaterThanSecondGeneralized([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
);

// 6. This Length, That Value
// Given two numbers, return array of length num1 with each value num2. Print "Jinx!" if they are the same.

const thisLengthThatValue = (num1, num2) => {
  let arr = [];
  if (num1 === num2) {
    console.log("Jinx!");
  }
  for (let i = 0; i < num1; i++) {
    arr.push(num2);
  }
  return arr;
};

console.log(thisLengthThatValue(3, 3));
console.log(thisLengthThatValue(4, 5));
console.log(thisLengthThatValue(5, 3));

// 7. Fit the First Value
// Your function should accept an array. If value at [0] is greater than array’s length, print "Too big!"; if value at [0] is less than array’s length,
// print "Too small!"; otherwise print "Just right!".

const fitFirstValue = (arr) => {
  if (arr[0] > arr.length) {
    console.log("Too big!");
  } else if (arr[0] < arr.length) {
    console.log("Too small!");
  } else {
    console.log("Just right!");
  }
};

fitFirstValue([5, 3, 4, 5, 6]);
fitFirstValue([2, 3, 4, 5, 6]);
fitFirstValue([50, 3, 4, 5, 6, 7, 8, 9, 10]);

// 8. Fahrenheit to Celsius
// Kelvin wants to convert between temperature scales. Create fahrenheitToCelsius(fDegrees) that accepts a number of degrees in Fahrenheit,
// and returns the equivalent temperature as expressed in Celsius degrees.

const fahrenheitToCelsius = (fDegrees) => {
  return (fDegrees - 32) * (5 / 9);
};
console.log(fahrenheitToCelsius(72));

// 9. Celsius to Fahrenheit
// Create celsiusToFahrenheit(cDegrees) that accepts number of degrees Celsius, and returns the equivalent temperature expressed in Fahrenheit degrees.

const celsiusToFahrenheit = (cDegrees) => {
  return cDegrees * (9 / 5) + 32;
};
console.log(celsiusToFahrenheit(22));
console.log(celsiusToFahrenheit(0));
