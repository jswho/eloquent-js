/*
- Should return a boolean if both objects have the same properties
*/

const deepEqual = (obj1, obj2) => {
  for (key in obj1) {
    console.log(obj1);
    if (typeof obj1[key] === 'object') {
      return deepEqual(obj1[key], obj2);
    }
  }
};

let obj = { here: { is: 'an' }, object: 2 };
// console.log(deepEqual(obj, obj)); // true
// console.log(deepEqual(obj, { here: 1, object: 2 })); // false
// console.log(deepEqual(obj, { here: { is: 'an' }, object: 2 })); // true
console.log(deepEqual({ a: { b: { c: { here: 22 } } } }, obj));
