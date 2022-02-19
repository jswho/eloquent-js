/*
- Print a grid that is 8 x 8
  --> each line will alternate with " " and "#" and use the new line character

- Refactor Ideas
  * change grid size
  * change alternating symbols
*/

const chessboard = () => {
  let grid = '';
  let size = 8;

  for (let i = 0; i < size; i++) {
    grid += addLine(size);
  }

  return grid;
};

const addLine = (size) => {
  let line = '';

  while (line.length < size) {
    line += '#';
  }
  line += '\n';
  return line;
};

console.log(chessboard());
