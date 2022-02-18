const loopTriangle = () => {
  let triangle = '';
  let counter = 1;

  for (let i = 0; i < 7; i++) {
    for (let j = 0; j < counter; j++) {
      triangle += '#';
    }
    counter++;
    triangle += '\n';
  }
  return triangle;
};

console.log(loopTriangle());
