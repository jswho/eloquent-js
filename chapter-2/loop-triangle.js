const loopTriangle = (loops) => {
  let triangle = '';
  let counter = 1;

  for (let i = 0; i < loops; i++) {
    for (let j = 0; j < counter; j++) {
      triangle += '#';
    }

    // stop newline being added to triangle when loop complete
    if (i === loops - 1) {
      break;
    }

    counter++;
    triangle += '\n';
  }
  return triangle;
};

console.log(loopTriangle(10));
