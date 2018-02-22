/*
  ### Problem

  215 = 32768 and the sum of its digits is 3 + 2 + 7 + 6 + 8 = 26.

  What is the sum of the digits of the number 21000?
*/

let power = (base, power) => {

};

let sum = (num) => {
  let temp = '' + num;
  return temp.split('').reduce((a,b) => { return (a * 1) + (b * 1); }, 0);
};

const answer = power(2,15);

console.log(answer);