/*
- Create a function that returns the smallest number.
*/

const minimum = (firstNumber, secondNumber) =>
  firstNumber < secondNumber ? firstNumber : secondNumber;

console.log(minimum(0, 10)); // 0
console.log(minimum(0, -10)); // -10
