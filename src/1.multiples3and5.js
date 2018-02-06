/*
  ### Problem

  If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

  Find the sum of all the multiples of 3 or 5 below 1000.
*/

let multiples = (max) => {
  let limit = max || 1000;
  let result = [];

  for (let x = 1; x < limit; x++) {
    if (x % 3 === 0 && x % 5 === 0) {
      result.push(x);
    } else if (x % 5 === 0) {
      result.push(x);
    } else if (x % 3 === 0) {
      result.push(x);
    }
  }

  return result;
};

const answer = multiples();

console.log(answer);