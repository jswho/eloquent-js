/*
- Should return a boolean if both objects have the same properties
*/

const deepEqual = (obj1, obj2) => {
  for (key in obj1) {
    // check if property is of type 'object', if so call function recursively
    if (typeof obj1[key] === 'object') {
      return deepEqual(obj1[key], obj2[key]);

      // check if current values inside both objects match
    } else if (obj1[key] !== obj2[key]) {
      return false;
    }
  }
  return true;
};

let obj = { here: { is: 'an' }, object: 2 };
console.log(deepEqual(obj, obj)); // true
console.log(deepEqual(obj, { here: 1, object: 2 })); // false
console.log(deepEqual(obj, { here: { is: 'an' }, object: 2 })); // true
// console.log(deepEqual({ a: { b: { c: { here: 22 } } } }, obj));
