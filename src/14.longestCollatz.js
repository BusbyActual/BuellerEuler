/*
  ### Problem

  The following iterative sequence is defined for the set of positive integers:

  n → n/2 (n is even)
  n → 3n + 1 (n is odd)

  Using the rule above and starting with 13, we generate the following sequence:

  13 → 40 → 20 → 10 → 5 → 16 → 8 → 4 → 2 → 1
  It can be seen that this sequence (starting at 13 and finishing at 1) contains 10 terms. Although it has not been proved yet (Collatz Problem), it is thought that all starting numbers finish at 1.

  Which starting number, under one million, produces the longest chain?

  NOTE: Once the chain starts the terms are allowed to go above one million.
*/

let longestSequence = (max) => {
  let total = 0;
  let sequence = [];
  let tempSequence = [];
  let x = max;
  for ( let x = 1; x < max; x++) {
    let temp = x;
    tempSequence = [x];

    while ( temp > 1) {
      //check if even
      if (temp % 2 === 0) {
        temp = temp / 2;
      } else {
        temp = (temp * 3) + 1;
      }
      tempSequence.push(temp);
    }

    if (tempSequence.length > sequence.length) {
      sequence = tempSequence;
      total = x;
    }
  }

  return { 'answer': total, 'solution': sequence };
};

const answer = longestSequence(1000000);

console.log(answer);