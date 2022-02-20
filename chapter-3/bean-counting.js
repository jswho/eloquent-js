/*
- Return a number, that has counted the number of uppercase "B"'s in the string

Reflection
Recursion is probably not the best solution to go with here. It seems long and a little unreadable.
A for loop would have been better, simpler and easier to follow.
However, I'm still glad I've just spent the last few hours messing around with recursion to better understand it.
I've also learned to use a caching (memoization) function to store the count.
*/

const countBs = (str) => {
  const checkB = 'B';

  if (str[str.length - 1] === checkB) {
    counter();
  }

  if (str.length === 0) {
    return counter(true);
  } else {
    return countBs(str.substring(0, str.length - 1));
  }
};

const count = () => {
  let memory = 0;

  return (getCount = false) => {
    if (getCount) {
      return memory;
    } else {
      return memory++;
    }
  };
};
const counter = count();

// console.log(countBs('ABC')); // 1
// console.log(countBs('ABBXSC')); // 2
console.log(countBs('NBBSAB')); // 3
// console.log(countBs('NQW')); // 0
