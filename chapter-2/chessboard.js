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

  while (grid.length < size) {
    grid += '#';
  }
  return grid;
};

console.log(chessboard());
