/*
  ### Problem

  A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.

  Find the largest palindrome made from the product of two 3-digit numbers.
*/

let checkPalindrome = (num) => {
  let myString = '' + num;

  /* reverse removeChar for comparison*/
  let isPalindrome = removeChar.split('').reverse().join('');

  if (myString === isPalindrome) {
    return true;
  } else {
    return false;
  }
};

let findPalindrome = (count, digits) => {
  let highest = 0;
  let dict = {};
  let max  = '';
  let counter = digits;

  while (counter > 1) {
    max += 9
    temp--;
  }

  for (let x = counter; x > 1; x-- ) {
    for (let y = counter; y > 1; y--) {
      let temp = x * y;


    }
  }

};

const answer = findPalindrome(2, 3);

console.log(answer);