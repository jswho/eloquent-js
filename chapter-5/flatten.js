/*
Using the reduce and concat methods, to flatten a multi array in to a single array.
*/

const flatten = (multiArray) => {
  return;
};

console.log(flatten([[1, 2, 3], [4, 5], [6]])); // [1,2,3,4,5,6]
console.log(
  flatten([
    [11, 12],
    [13, 14, [15, 16, 17, 18, [19, 20]]],
  ])
); // [11,12,13,14,15,16,17,18,19,20]
