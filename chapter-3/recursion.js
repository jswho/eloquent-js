/*
Define a function that takes a number, recursively check if even and return a boolean.

- 0 is even
- 1 is odd
- For any other number, use number - 2
*/

const isEven = (number) => {
  if (number === 0) {
    return true;
  } else if (number === 1) {
    return false;
  } else {
    return isEven(number - 2);
  }
};

console.log(isEven(50)); // true
console.log(isEven(75)); // false
