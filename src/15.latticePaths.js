/*
  ### Problem

  Starting in the top left corner of a 2×2 grid, and only being able to move to the right and down, there are exactly 6 routes to the bottom right corner.

  How many such routes are there through a 20×20 grid?
*/

let lettuce = (grid) => {
  let count = 0;

  let subroutine = (x, y) => {
     if (x < grid) {
      subroutine(x + 1, y);
     }
    if (y < grid) {
      subroutine(x, y + 1);
    }
    if (y === grid && x === grid) {
      count++;
    }
  };

  subroutine(0, 0);

  return count;
};

const answer = lettuce(20);

console.log(answer);