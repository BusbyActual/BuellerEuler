/*
  ### Problem

  A Pythagorean triplet is a set of three natural numbers, a < b < c, for which,

  a2 + b2 = c2
  For example, 32 + 42 = 9 + 16 = 25 = 52.

  There exists exactly one Pythagorean triplet for which a + b + c = 1000.
  Find the product abc.
*/


/*
  There are likely maths to cut down the iterations from max down.
  But I'm just here to bruteforce things ; )
*/
let tripletsBelleville = (max) => {
  let triplets = [];

  for (let x = 0; x < max; x++) {
    for (let y = 0; y < max; y++) {
      for (let z= 0; z < max; z++) {
        if (z < y && y < x) {
          let a = z * z;
          let b = y * y;
          let c = x * x;

          if ((a + b)  === c) {
            if ((z + y + x) === max) {
              triplets = [ a, b, c];
            }
          }
        }
      }
    }
  }


  return { 'prompt': max, 'solution': triplets || 'none : (' };
};

const answer = tripletsBelleville(1000);

console.log(answer);