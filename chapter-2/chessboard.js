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
    if (i % 2 === 0) {
      grid += addLine(size, '#', '-');
    } else {
      grid += addLine(size, '-', '#');
    }
  }

  return grid;
};

const addLine = (size, firstSymbol, secondSymbol) => {
  let line = '';

  while (line.length < size) {
    line += line.length % 2 === 0 ? firstSymbol : secondSymbol;
  }
  line += '\n';
  return line;
};

console.log(chessboard());
