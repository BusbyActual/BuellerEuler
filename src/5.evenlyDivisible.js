/*
  ### Problem

  2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.

  What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?
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

  while(!isDivisible(count, num)) {
    count++;
  }

  return count;
};

const answer = evenlyDivisible(20);

console.log(answer);