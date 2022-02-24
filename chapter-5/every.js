/*
- Return true for all elements that pass the test function, else false
- Use loop and then some method
*/

const every = (array, test) => {
  let result = true;

  if (array.length) {
    for (element of array) {
      result = test(element);
    }
  }
  return result;
};

console.log(every([1, 3, 5], (n) => n < 10)); // true
console.log(every([2, 4, 16], (n) => n < 10)); // false
console.log(every([], (n) => n < 10)); // true
