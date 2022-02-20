/*
Define a function that takes a number, recursively check if even and return a boolean.

- 0 is even
- 1 is odd
- For any other number, use number - 2
- Allow negative numbers to be used.
*/

const isEven = (number) => {
  if (number === 0) {
    return true;
  } else if (number === 1) {
    return false;
  } else if (number < 0) {
    return isEven(-number); // -(-number) = number
  } else {
    return isEven(number - 2);
  }
};

console.log(isEven(50)); // true
console.log(isEven(75)); // false
console.log(isEven(-1)); // false
console.log(isEven(-56)); // true
