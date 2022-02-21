/*
Do not use JS reverse().

Immutable
Reverse an array and return a new reversed array

Mutable
Reverse an array in place and return the reversed array
*/

const reverseArray = (array) => {
  const newArray = [];

  for (let i = array.length - 1; i >= 0; i--) {
    newArray.push(array[i]);
  }
  console.log('Check: ' + (array === newArray));
  return newArray;
};

const reverseArrayInPlace = (array) => {
  const lengthOfOriginalArray = array.length;

  array = appendToArray(array);

  for (let i = 0; i < lengthOfOriginalArray; i++) {
    array[i] = array.pop();
  }

  return array;
};

const appendToArray = (array) => {
  const arrayLength = array.length;
  for (let i = 0; i < arrayLength; i++) {
    array.unshift(null);
  }

  return array;
};

// console.log(reverseArray(['A', 'B', 'C'])); // ["C", "B", "A"]
console.log(reverseArrayInPlace([1, 2, 3, 4, 5])); // [5, 4, 3, 2, 1]
