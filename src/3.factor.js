/*
  ### Problem

  The prime factors of 13195 are 5, 7, 13 and 29.

  What is the largest prime factor of the number 600851475143 ?
*/

let findFactors = (originalTarget) => {
  let target = originalTarget || 600851475143;
  let i = 2;
  let results = [];

  while ( i < target) {
    while ( target % i === 0) {
      ((newTarget) => {
        results.push(newTarget);
        target = newTarget;
      })(target / i)
    }
    i++;
  }

  return results;
}
const answer = findFactors(13195);

console.log(answer);