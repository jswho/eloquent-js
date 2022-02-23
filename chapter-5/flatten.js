/*
Use the reduce and concat methods, to flatten a multi array into a single array.
*/

const flatten = (multiArray) => {
  return multiArray.reduce((flattened, currentValue) => {
    // check if current element is an array
    if (Array.isArray(currentValue)) {
      return flatten(flattened.concat(currentValue));
    } else {
      return flattened.concat(currentValue);
    }
  }, []);
};

console.log(flatten([[1, 2, 3], [4, 5], [6]])); // [1,2,3,4,5,6]
console.log(
  flatten([
    [11, 12],
    [13, 14, [15, 16, 17, 18, [19, 20]]],
  ])
); // [11,12,13,14,15,16,17,18,19,20]
