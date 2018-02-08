/*
  ### Problem

 By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.

 What is the 10 001st prime number?
*/
let isPrime  = (n) => {
  if (n < 2) {
    return false;
  }

  let q = Math.floor(Math.sqrt(n));

  for (let i = 2; i <= q; i++) {
    if (n % i == 0) {
      return false;
    }
  }

  return true;
};


let primes = (max) => {
  let arr = [];
  let count = 1;

  while (arr.length !== max) {
    if (isPrime(count)) {
      arr.push(count);
    }
    count++;
  }
  return arr[max - 1];
};

const answer = primes(10001);

console.log(answer);