/*
Develop own loop function
*/

const loop = (value, test, update, body) => {
  if (test(value)) {
    body(value);
    return loop(update(value), test, update, body);
  }
};

const test = (value) => {
  return value > 0;
};

const update = (value) => {
  return value - 1;
};

const body = (value) => {
  return console.log(value);
};

loop(
  3,
  (n) => n > 0,
  (n) => n - 1,
  console.log
);

/*
3
2
1
*/
