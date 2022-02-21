/*
Range
- Define a function with 2 arguments, start and end.
- Return an array of all numbers from start to end.

Sum
- Define a function that sums the entire array of numbers from function range.
*/

const range = (start, end) => {
  const numbers = [];

  for (let i = start; i <= end; i++) {
    numbers.push(i);
  }
  return numbers;
};

console.log(range(1, 10));
