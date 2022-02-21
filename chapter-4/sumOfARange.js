/*
Range
- Define a function with 2 arguments, start and end.
- Return an array of all numbers from start to end.

Sum
- Define a function that sums the entire array of numbers from function range.

Extra
- Provide a third argument to range function, that gives the number to count by.
*/

const range = (start, end, step) => {
  const numbers = [];
  const terminator = (i) => (step > 0 ? i <= end : i >= end);

  for (let i = start; terminator(i); i += step) {
    numbers.push(i);
  }
  return numbers;
};

const sum = (numbers) => {
  let value = 0;

  for (number of numbers) {
    value += number;
  }
  return value;
};

// console.log(range(1, 10, 2));
console.log(range(5, 2, -1));
// console.log(sum(range(1, 10)));
console.log(sum(range(5, 2, -1)));
