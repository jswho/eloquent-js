/*
- Return a number, that has counted the number of uppercase "B"'s in the string
*/

const countBs = (str) => {
  const checkB = 'B';

  if (str[str.length - 1] === checkB) {
    counter();
  }

  if (str.length === 0) {
    return counter(true);
  } else {
    countBs(str.substring(0, str.length - 1));
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

console.log(countBs('ABC'));
