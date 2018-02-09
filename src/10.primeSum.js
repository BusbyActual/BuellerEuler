/*
  ### Problem

  The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.

  Find the sum of all the primes below two million.
*/

let primeHelper = require('./7.getPrimes.js');
/*
   let me just require an old prompt to break the rules ; )
*/
let primeSum = (max) => {
  let primes = [];
  let total = 0;

  for (let x = 0; x < max; x++) {
    if (primeHelper.isPrime(x)) {
      primes.push(x);
      total += x;
    }
  }

  return { 'total': total, 'primes': primes };
};

const answer = primeSum(2000000);

console.log(answer);