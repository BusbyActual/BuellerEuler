/*
  ### Problem

  215 = 32768 and the sum of its digits is 3 + 2 + 7 + 6 + 8 = 26.

  What is the sum of the digits of the number 21000?
*/

let sum = (num) => {
  console.log(Number(num).toPrecision())
  let temp = Number(num).toString();
  return temp.split('').reduce((a,b) => { return (a * 1) + (b * 1); }, 0);
};

let power = (base, power) => {
  let maths = Math.pow(base, power);

  return sum(maths);
};

const answer = power(2, 500);

console.log(answer);