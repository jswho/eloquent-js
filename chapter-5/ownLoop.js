/*
Develop own loop function
*/

const loop = (value, test, update, body) => {
  console.log(test(value));
};

const test = (value) => {
  return value > 0;
};

console.log(
  loop(
    3,
    (n) => n > 0,
    (n) => n - 1,
    console.log
  )
);
/*
3
2
1
*/
