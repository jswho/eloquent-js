/*
Code has been refactored to take in to consideration a second argument, char.
*/

const countChar = (str, char) => {
  if (str[str.length - 1] === char) {
    counter();
  }

  if (str.length === 0) {
    return counter(true);
  } else {
    return countChar(str.substring(0, str.length - 1), char);
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

console.log(countChar('kadklpe', 'k')); // 2
