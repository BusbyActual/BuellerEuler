/*
  ### Problem

  A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.

  Find the largest palindrome made from the product of two 3-digit numbers.
*/

let checkPalindrome = (num) => {
  let myString = '' + num;
  let isPalindrome = myString.split('').reverse().join('');

  if (myString === isPalindrome) {
    return true;
  } else {
    return false;
  }
};

let findPalindrome = (count, digits) => {
  let highest = 0;
  let arr = [];
  let max  = '';
  let counter = digits;

  // build max
  while (counter > 1) {
    max += 9
    counter--;
  }
  // coerce to number
  max = max * 1;

  for (let x = max; x > 1; x-- ) {
    for (let y = max; y > 1; y--) {
      let temp = x * y;

      if (checkPalindrome(temp)) {
        if (temp > highest) {
          highest = temp;
          arr = [x, y];
        }
      }
    }
  }

  return { 'palindrome': highest, 'solution': arr };
};

const answer = findPalindrome(2, 3);

console.log(answer);