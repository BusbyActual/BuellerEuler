/*
  ### Problem

  The sum of the squares of the first ten natural numbers is,

  12 + 22 + ... + 102 = 385
  The square of the sum of the first ten natural numbers is,

  (1 + 2 + ... + 10)2 = 552 = 3025
  Hence the difference between the sum of the squares of the first ten natural numbers and the square of the sum is 3025 − 385 = 2640.

  Find the difference between the sum of the squares of the first one hundred natural numbers and the square of the sum.
*/

let isDivisible = (num, max) => {
  let result = true;

  for (let x = max; x > 0; x--) {
    if (num % x !== 0) {
      result = false;
      x = 0;
    }
  }

  return result;
};

let evenlyDivisible = (num) => {
  let count = num;

  if (typeof num !== 'number') {
    return null;
  }

  while (!isDivisible(count, num)) {
    count++;
  }

  return count;
};

const answer = evenlyDivisible(20);

console.log(answer);